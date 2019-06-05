(ns varnelli.components.search
  (:require-macros [cljss.core])
    (:require
     [reagent.core :as r :refer [atom]]
     [reitit.frontend.easy :as rfe]
     [reagent-forms.core :refer [bind-fields init-field value-of]]
     [cljss.core :refer [defstyles]]))
  


(defstyles search-wrapper []
  {:margin-top "60px"
   :position "relative"
   "a" {:width "50px"
        :position "absolute"
        :right "10px"
        :top "10px"
        :height "50px"
        :display "inline-block"
        :border-radius "6px"
        :background "#587d90"
        :vertical-align "middle"
        :text-align "center"
        :&:hover {
                  :background "blue"}}
   "i" {
        :vertical-align "middle"
        :top "10px"
        :color "white"}
   "input" {:height "70px"
            :font-size "22px"
            :letter-spacing "1px"
            :font-weight "700"
            :border-radius "4px"
            :background "rgba(147, 209, 240, .6)"
            :border "0"
            :box-shadow "0 2px 4px 0 rgba(0,0,0,.30)"}})

(defn row [input]
  [:div.has-icon-right
   [:div
    input]])


(defn input [type id placeholder]
  (row [:input.form-input {:field type :id id :placeholder placeholder}]))

(def form-template
  [:div
   (input :text :tag "Search for tag")])


(def blockchain-form-template
  [:div
   (input :text :tag "Search for txid")])

(defn search []
  (let [doc (atom {:tag nil})]
    (fn []
      [:div {:class (search-wrapper)}
       [bind-fields
        form-template
        doc]
       (if (:tag @doc)
         [:a {:href (str "/tag/" (:tag @doc))}
          [:i.form-icon.icon.icon-search]]
         nil)])))


(defn blockchain-search []
  (let [doc (atom {:tag nil})]
    (fn []
      [:div {:class (search-wrapper)}
      ;  (.log js/console "button" (Button))
       [bind-fields
        blockchain-form-template
        doc]
       (if (:tag @doc)
         [:a {:href (str "/tx/" (:tag @doc))}
          [:i.form-icon.icon.icon-search]]
         nil)])))