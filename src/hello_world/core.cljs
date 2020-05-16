(ns ^:figwheel-hooks hello-world.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]))

;; This command will cause our printlns to also show up in the console's log,
;; which can sometimes be useful.
(enable-console-print!)

;;; Slightly more modern:  event listeners

(defn set-text [id text]
  (-> (gdom/getElement id)
      (gdom/setTextContent text)))

(defn get-value [id]
  (-> (gdom/getElement id)
      (gdom/getTextContent)
      (js/parseInt)))

(defn increment-field [id]
  (let [old (get-value id)]
   (set-text id (inc old))))

(defn simple-button []
  [:div
   [:center
    [:h1 "Simple button example"]
    [:input {:type :button :class :button :value "Push me!"}]
    [:div#the-text 0]]])

(js/addEventListener "click" #(increment-field "the-text"))

;; This somewhat decouples the presentation from the "action",
;; but there is still no great place to store the state (currently
;; stored in the text div itself!)

;; Also, the listeners add up and are not named, so if we reload this
;; we now increment by multiple values.  Hard to track bugs.  Can do

(defonce the-incrementer
  (js/addEventListener "click" #(increment-field "the-text")))

;; But it still more or less sucks.



;;;; Mounting boilerplate below.
(defn mount [el]
  (reagent/render-component [simple-button] el))

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
