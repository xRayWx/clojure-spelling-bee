(ns ^:figwheel-hooks hello-world.core
  (:require
   [goog.dom :as gdom]
   [re-frame.core :as rf]
   [clojure.string :as str]
   [reagent.core :as reagent]
   [reagent.dom :as rdom]))

;; This command will cause our printlns to also show up in the console's log,
;; which can sometimes be useful.
(enable-console-print!)

;;;; 1. Event Dispatch---------------------------------------------------------------------

(defn dispatch-user-inputs [inputs]
  (rf/dispatch [:handle-user-inputs inputs]))

;;;; 2. Event Handlers---------------------------------------------------------------------

;; Revamped the initializer, took away local variables
(rf/reg-event-db
 :initialize
 (fn [db _]
   {:user-inputs ""
    :characters-order [\I \L \K \Y \N \R \W]
    :points 0
    :message ""
    :rank "Beginner"
    :user-words #{}
    :center-letter \I
    :surrounding-letter [\L \K \Y \N \R \W]
    :word-list ["LILY" "ILLY" "WRINKLY" "WILL" "NINNY" "KINKILY" "KINKY" "LINK" "KRILL" "KILL"]}))

(rf/reg-event-db
 :handle-user-inputs
 (fn [db [_ new-user-inputs]]
   (assoc db :user-inputs new-user-inputs)))

(rf/reg-event-db
 :shuffle
 (fn [db [_ new-character-spots]]
   (let [new-surroundings (shuffle (:surrounding-letter db))
         new-order (concat (:center-letter db) new-surroundings)]
     (assoc db :characters-order new-order))))

(rf/reg-event-db
 :add-message
 (fn [db [_ new-message]]
   (assoc db :message new-message)))

(rf/reg-event-db
 :clear-user-inputs
 (fn [db _]
   (assoc db :user-inputs "")))

(defn pangrams? [word]
  ;; Display pangrams, otherwise, normal message
  (= 7 (count (frequencies word))))

(defn calculate-points [word]
  ;; Calculate new points
  (if (= 4 (count word))
    1
    (do
      (if (pangrams? word)
        (+ (count word) 7)
        (count word)))))

(rf/reg-event-db
 :update-points
 (fn [db [_ points]]
   (let [current-points (:points db)]
     (assoc db :points (+ points current-points)))))

;; Revamped compute rank(update rank) logic
(defn compute-rank [points]
  ;; Returns a rank
  (cond
    (and (>= points 1) (< points 3)) "Good Start"
    (= points 3) "Moving up"
    (and (>= points 4) (< points 8)) "Good"
    (and (>= points 8) (< points 13)) "Nice"
    (and (>= points 13) (< points 21)) "Great"
    (and (>= points 21) (< points 26)) "Amazing"
    :else "Genius"))

(rf/reg-event-db
 :update-rank
 (fn [db _]
   (assoc db :rank (compute-rank (:points db)))))

(defn too-short? [word]
  ;; Display too short, otherwise, proceed to the next evaluation
 (< (count word) 4))

(defn bad-letters? [word letters]
  ;; Display bad letters, otherwise, proceed to the next evaluatiln
  (contains? (into #{} (for [w word]
                         (some #{w} letters))) nil))

(defn missing-center? [word center-letter]
  ;; Display missing center letter, otherwise, proceed to the next evaluation
  (not (str/includes? word center-letter)))

(defn in-word-list? [word word-list]
  ;; Display not in word list, otherwise, proceed to the next evaluation
  (nil? (some #{word} word-list)))

(defn found? [word user-words]
  ;; Display already found, otherwise, proceed to the next evaluation
  (not= nil (some #{word} user-words)))

;; Revamped the handle-letter(validate letter) logic
(rf/reg-event-fx
 :handle-word
 (fn [{:keys [db]} [_ input]]
   (let [word (str/upper-case input)]
     (when-not (= "" word)
       (do
         (rf/dispatch [:clear-user-inputs])
         (cond
           (too-short? word) {:dispatch [:add-message "Too Short"]}

           (bad-letters? word (:characters-order db)) {:dispatch [:add-message "Bad letters"]}

           (missing-center? word (:center-letter db)) {:dispatch [:add-message "Missing center letter"]}
           
           (in-word-list? word (:word-list db)) {:dispatch [:add-message "Not in word list"]}
           
           (not= nil (some #{word} (:user-words db))) {:dispatch [:add-message "Already found"]}
           
           :else
           (let [current-points (calculate-points word)
                 message (if (pangrams? word) "Pangrams! +" "Good! +")]
             (rf/dispatch [:update-points current-points])
             (rf/dispatch [:update-rank])
             {:db (assoc db :user-words (conj (:user-words db) word))
              :dispatch [:add-message (str message current-points)]})))))))

(defn handle-keypress [key]
  (if (= 13 key) (rf/dispatch [:handle-word @(rf/subscribe [:user-inputs])])))

(defn clicked-character-button [char]
  (let [current-inputs @(rf/subscribe [:user-inputs])
        new-inputs (str current-inputs char)]
    (dispatch-user-inputs new-inputs)))

(defn drop-last-character []
  (let [current-inputs @(rf/subscribe [:user-inputs])
        new-inputs (apply str (drop-last current-inputs))]
    (dispatch-user-inputs new-inputs)))

;; Revamped show-characters
(defn create-character-button [character button-class]
  ^{:key character} [:input {:type "button"
                             :class button-class
                             :value character
                             :on-click #(clicked-character-button character)}])

(defn show-character-buttons [characters]
  [:div
   [:div
    (for [c (subvec (vec characters) 1 4)]
      (create-character-button c "letterButton"))]
   [:div
    (for [c (subvec (vec characters) 0 1)]
      (create-character-button c "centerButton letterButton"))]
   [:div
    (for [c (subvec (vec characters) 4)]
      (create-character-button c "letterButton"))]])

;;;; 4. Subscription Handlers---------------------------------------------------------------------

(rf/reg-sub
 :user-inputs
 (fn [db _]
   (:user-inputs db)))

(rf/reg-sub
 :characters-order
 (fn [db _]
   (:characters-order db)))

(rf/reg-sub
 :points
 (fn [db _]
   (:points db)))

(rf/reg-sub
 :message
 (fn [db _]
   (:message db)))

(rf/reg-sub
 :rank
 (fn [db _]
   (:rank db)))

(rf/reg-sub
 :user-words
 (fn [db _]
   (:user-words db)))

;;;; 5. View Functions---------------------------------------------------------------------

(defn show-message [db-message]
  [:h3 db-message])

(defn user-input []
  [:input {:style {:text-transform "uppercase"}
           :type "text"
           :class "textInput"
           :placeholder "Start spelling!"
           :value @(rf/subscribe [:user-inputs])
           :on-change #(dispatch-user-inputs (-> % .-target .-value))
           :on-key-press (fn [e] (handle-keypress (.-charCode e)))}])

(defn delete-button []
  [:input {:type "button"
           :class "actionButton"
           :value "Delete"
           :on-click #(drop-last-character)}])

(defn shuffle-button []
  [:input {:type "button"
           :class "actionButton"
           :value "Shuffle"
           :on-click #(rf/dispatch [:shuffle])}])

(defn enter-button [db-user-inputs]
  [:input {:type "button"
           :class "actionButton"
           :value "Enter"
           :on-click #(rf/dispatch [:handle-word db-user-inputs])}])

(defn show-rank-points [db-rank db-points]
  [:h3 db-rank " " db-points])

(defn show-slider [db-points]
  [:input {:type "range"
           :min 0
           :max 30
           :value db-points}])

(defn list-words [db-user-words]
  (let [words (apply sorted-set db-user-words)]
    [:div
     [:h3 "You have found " (count words) " words"
      [:ul {:style {:list-style-type "none"}}
       (for [w words]
         ^{:key w} [:li w])]]]))

(defn spelling-bee []
  [:center>div
   [:center>h1 "Spelling Bee"]
   [:div
    [show-message @(rf/subscribe [:message])]
    [user-input]
    [show-character-buttons @(rf/subscribe [:characters-order])]]
   [:div
    [delete-button]
    [shuffle-button]
    [enter-button @(rf/subscribe [:user-inputs])]
    [show-rank-points @(rf/subscribe [:rank]) @(rf/subscribe [:points])]
    [show-slider @(rf/subscribe [:points])]
    [list-words @(rf/subscribe [:user-words])]]])

;;;; Entry Point---------------------------------------------------------------------

(defn mount [el]
  (reagent/render-component [spelling-bee] el))

(defn get-app-element []
  (gdom/getElement "app"))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (rf/dispatch-sync [:initialize])
    (mount el)))

(mount-app-element)

  ;; specify reload hook with ^;after-load metadata

(defn ^:after-load on-reload []
  (mount-app-element))
