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


(def center-letter [\I])
(def surrounding-letter [\L \K \Y \N \R \W])
(def letters (concat center-letter surrounding-letter))
(def word-list ["ILLY" "KILL" "WRINKLY" "WILL" "NINNY" "KINKILY" "KINKY" "LILY" "LINK" "KRILL"])

;;;; 1. Event Dispatch---------------------------------------------------------------------

(defn dispatch-user-inputs [inputs]
  (rf/dispatch [:spelling inputs]))

(defn dispatch-characters-order [order]
  (rf/dispatch [:shuffle order]))

(defn dispatch-points [points]
  (rf/dispatch [:add-points points]))

(defn dispatch-message [message]
  (rf/dispatch [:add-message message]))

(defn dispatch-rank [rank]
  (rf/dispatch [:update-rank rank]))

(defn dispatch-words [word]
  (rf/dispatch [:add-word word]))

;;;; 2. Event Handlers---------------------------------------------------------------------

(rf/reg-event-db
 :initialize
 (fn [_ _]
   {:user-inputs ""
    :characters-order letters
    :points 0
    :message ""
    :rank "Beginner"
    :user-words #{}}))

(rf/reg-event-db
 :spelling
 (fn [db [_ new-user-inputs]]
   (assoc db :user-inputs new-user-inputs)))

(rf/reg-event-db
 :shuffle
 (fn [db [_ new-character-spots]]
   (assoc db :characters-order new-character-spots)))

(rf/reg-event-db
 :add-points
 (fn [db [_ new-points]]
   (assoc db :points new-points)))

(rf/reg-event-db
 :add-message
 (fn [db [_ new-message]]
   (assoc db :message new-message)))

(rf/reg-event-db
 :update-rank
 (fn [db [_ new-rank]]
   (assoc db :rank new-rank)))

(rf/reg-event-db
 :add-word
 (fn [db [_ new-word]]
   (assoc db :user-words new-word)))

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

;;;; Helper Fuctions---------------------------------------------------------------------

(defn too-short? [word]
  ;; Display too short, otherwise, proceed to the next evaluation
 (< (count word) 4))

(defn bad-letters? [word]
  ;; Display bad letters, otherwise, proceed to the next evaluatiln
  (contains? (into #{} (for [w word]
                         (some #{w} letters))) nil))

(defn missing-center? [word]
  ;; Display missing center letter, otherwise, proceed to the next evaluation
  (not (str/includes? word "I")))

(defn in-word-list? [word]
  ;; Display not in word list, otherwise, proceed to the next evaluation
  (nil? (some #{word} word-list)))

(defn do-shuffle []
  (let [new-surroundings (shuffle surrounding-letter)
        new-order (concat center-letter new-surroundings)]
    (dispatch-characters-order new-order)))

(defn calculate-points [word points]
  ;; Calculate new points
  (if (= 4  (count word))
    (+ 1 points)
    (+ (count word) points)))

(defn update-rank [points]
  (cond
    (and (>= points 1) (< points 3)) (dispatch-rank "Good Start")
    (= points 3) (dispatch-rank "Moving up")
    (and (>= points 4) (< points 8)) (dispatch-rank "Good")
    (and (>= points 8) (< points 13)) (dispatch-rank "Nice")
    (and (>= points 13) (< points 21)) (dispatch-rank "Great")
    (and (>= points 21) (< points 26)) (dispatch-rank "Amazing")
    :else (dispatch-rank "Genius")))

(defn pangrams? [word]
  ;; Display pangrams, otherwise, normal message
  (= 7 (count (frequencies word))))

(defn validate-letter []
  (let [new-word (str/upper-case @(rf/subscribe [:user-inputs]))]
    (if (not= "" new-word)
      (do
        (dispatch-user-inputs "")
        (cond
          (too-short? new-word) (dispatch-message "Too short")
          (bad-letters? new-word) (dispatch-message "Bad lettes")
          (missing-center? new-word) (dispatch-message "Missing center letter")
          (in-word-list? new-word) (dispatch-message "Not in word list")
          :else 
          (let [words @(rf/subscribe [:user-words])
                new-words-list (conj words new-word)
                points @(rf/subscribe [:points])
                new-points (calculate-points new-word points)]
            (do
              (if (pangrams? new-word)
                (dispatch-message (str "Pangrams! +" new-points))
                (dispatch-message (str "Good! + " new-points)))
              (update-rank new-points)
              (dispatch-points new-points)
              (dispatch-words new-words-list))))))))

(defn hit-return? [key]
  (if (= 13 key) (validate-letter)))

(defn clicked-character-button [char]
  (let [current-inputs @(rf/subscribe [:user-inputs])
        new-inputs (str current-inputs char)]
    (dispatch-user-inputs new-inputs)))

(defn drop-last-character []
  (let [current-inputs @(rf/subscribe [:user-inputs])
        new-inputs (apply str (drop-last current-inputs))]
    (dispatch-user-inputs new-inputs)))

;;;; 5. View Functions---------------------------------------------------------------------

(defn show-message []
  [:h3 @(rf/subscribe [:message])])

(defn user-input []
  [:input {:style {:text-transform "uppercase"}
           :type "text"
           :class "textInput"
           :placeholder "Start spelling!"
           :value @(rf/subscribe [:user-inputs])
           :on-change #(dispatch-user-inputs (-> % .-target .-value))
           :on-key-press (fn [e] (hit-return? (.-charCode e)))}])

(defn show-characters []
  (let [characters @(rf/subscribe [:characters-order])]
    [:div
     [:div
      (for [c (subvec (vec characters) 1 4)]
        ^{:key c} [:input {:type "button"
                           :class "letterButton"
                           :value c
                           :on-click #(clicked-character-button c)}])]
     [:div
      (for [c (subvec (vec characters) 0 1)]
        ^{:key c} [:input {:type "button"
                           :class "centerButton letterButton"
                           :color "red"
                           :value c
                           :on-click #(clicked-character-button c)}])]
     [:div
      (for [c (subvec (vec characters) 4)]
        ^{:key c} [:input {:type "button"
                           :class "letterButton"
                           :value c
                           :on-click #(clicked-character-button c)}])]]))

(defn delete-button []
  [:input {:type "button"
           :class "actionButton"
           :value "Delete"
           :on-click #(drop-last-character)}])

(defn shuffle-button []
  [:input {:type "button"
           :class "actionButton"
           :value "Shuffle"
           :on-click #(do-shuffle)}])

(defn enter-button []
  [:input {:type "button"
           :class "actionButton"
           :value "Enter"
           :on-click #(validate-letter)}])

(defn show-points []
  [:h3 @(rf/subscribe [:rank]) " " @(rf/subscribe [:points])])

(defn slider []
  (println "Points: " @(rf/subscribe [:points]))
  [:input {:type "range"
           :min 0
           :max 30
           :value @(rf/subscribe [:points])}])

(defn list-words []
  (let [words (apply sorted-set @(rf/subscribe [:user-words]))]
    [:div
     [:h3 "You have found " (count words) " words"
      [:ul {:style {:list-style-type "none"}}
       (for [w words]
         ^{:key w} [:li w])]]]))

(defn spelling-bee []
  [:center>div
   [:center>h1  "Spelling Bee"]
   [:div
    [show-message]
    [user-input]
    [show-characters]]
   [:div
    [delete-button]
    [shuffle-button]
    [enter-button]
    [show-points]
    [slider]
    [list-words]]])

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
