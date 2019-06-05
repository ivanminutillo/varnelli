(ns varnelli.components.search
  (:require-macros [cljss.core])
    (:require
     [reagent.core :as r :refer [atom]]
     [reitit.frontend.easy :as rfe]
     [reagent-forms.core :refer [bind-fields init-field value-of]]
     [cljss.core :refer [defstyles]]))
  


(defstyles search-wrapper []
  {:width "600px"
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
        :top "-25px"
        :color "white"}
   "input" {:height "70px"
            :text-indent "8px"
            :font-size "20px"
            :letter-spacing "0px"
            :font-weight "500"
            :border-radius "4px"
            :background "rgb(75, 91, 107)"
            :border "0"
            }})

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