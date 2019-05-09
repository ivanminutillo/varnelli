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
   :line-height "100px"
   "a" {:color "white !important"
        :font-weight "600"
        :font-size "14px"
        "&:hover" {
                   :text-decoration "underline"}}})

(defstyles logo []
  {:background "url(./images/BELOGO.png)"
   :background-size "cover"
   :width "105px"
   :height "60px"
   :margin-top "20px"})
(defn header
  [txs]
  [:section {:class (hero)}
   [:div.container.grid-xl
    [:header.navbar
     [:section.navbar-section
      [:a.navbar-brand.mr-2 {:href "/"} "varnelli"]
      [:a.btn.btn-link {:href "/about"} "About"]
      [:a.btn.btn-link {:href "/tags"} "Tags"]]
     [:section.navbar-section
      [:div.input-group.input-inline
       [:input.form-input {:type "text" :id "search" :placeholder "Search..."}]
       [:button.btn.btn-primary.input-group-btn "search"]]]]]])