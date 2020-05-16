(ns ^:figwheel-hooks hello-world.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]))

;; This command will cause our printlns to also show up in the console's log,
;; which can sometimes be useful.
(enable-console-print!)

;;; Old Skool:  a basic button attached to a counter,
;;; with JS actions.

(defn simple-button []
  [:div
   [:center
    [:h1 "Simple button example"]
    [:input {:type :button :class :button :value "Push me!"}]
    [:div#the-text "Now what."]]])

;; We can manipulate our DOM in real time remotely: watch this!
#_
(-> (gdom/getElement "the-text")
    (gdom/setTextContent "Hello"))

;; So we can write a function to change the text:

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

#_
(increment-field "the-text")

#_
(set-text "the-text" 7)

;; ok - now we can hook this all up to the button:

(comment

  (defn simple-button []
    [:div
     [:center
      [:h1 "Simple button example"]
      [:input {:type :button :class :button :value "Push me!"
               :on-click #(increment-field "the-text")}]
      [:div#the-text 0]]]))

;; What a mess.  :-(




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
