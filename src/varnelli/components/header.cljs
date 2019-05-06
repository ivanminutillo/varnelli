(ns varnelli.components.header
  (:require-macros [cljss.core])
  (:require [cljss.core :refer [defstyles]]))

(defstyles login []
  {:text-transform "uppercase"
   :letter-spacing "1px"
   :font-weight "800"})

(defstyles hero []
  {:background "#197ce6"
   :height "100px"
   :line-height "100px"})

(defstyles logo []
  {:background "url(./images/BELOGO.png)"
   :background-size "cover"
   :width "105px"
   :height "60px"
   :margin-top "20px"})
(defn header
  []
  [:section {:class (hero)}
   [:div.container.grid-lg
    [:header.navbar
     [:section.navbar-section
      [:span {:class (logo)}]]
     [:section.navbar-center 
      [:div.form-group
       [:input.form-input {:type "text" :id "search" :placeholder "Search..."}]
       ]]
     [:section.navbar-section
      [:button.btn.btn-primary {:href "#" :class (login)} "Login"]]]]
   ]
  )