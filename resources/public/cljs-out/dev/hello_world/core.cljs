(ns ^:figwheel-hooks hello-world.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [cljs.core.async :refer [<! >! chan timeout]]
   [cljs-http.client :as http]))

;; This command will cause our printlns to also show up in the console's log,
;; which can sometimes be useful.
(enable-console-print!)

;; Individual user's input
(defonce word (reagent/atom ""))
;; A set containing user's input
(defonce words-list (reagent/atom (sorted-set)))

(defn display-welcome-text []
  [:center
   [:h1 "Spelling bee (Not even close)"]])

(defn validate-word [input]
  (if (= 13 (.-charCode input))
    (do (swap! words-list conj @word)
        (reset! word ""))))

(defn dispatch-event! [e]
  (condp = (:type e)
    :validate-word       (validate-word (:key e))
    (println "Don't know how to handle event: " e)))

(defn user-input [value]
  [:center
    [:input {:type "text"
             :value @word
             :on-change #(reset! word (-> % .-target .-value))
             :on-key-press (fn [e] (dispatch-event! {:type :validate-word :key e}))}]])

(defn get-answer []
  (fn []
    [:center
     [:h3 "Enter any words in the text box below " [user-input word]]]))

(defn list-words []
  [:center>h3 @words-list])

;; Now we can add an event handler with SEMANTIC meaning to our component:
(defn spelling-bee []
  [:<>
   [display-welcome-text]
   [get-answer]
   [list-words]])

;;;; Mounting boilerplate below.
(defn mount [el]
(reagent/render-component [spelling-bee] el))

(defn get-app-element []
  (gdom/getElement "app"))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
