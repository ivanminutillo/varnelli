(ns varnelli.components.header
  (:require-macros [cljss.core])
  (:require [cljss.core :refer [defstyles]]))

(defstyles login []
  {:text-transform "uppercase"
   :letter-spacing "1px"
   :font-weight "800"})

(defstyles hero []
  {
   :height "100px"
   :line-height "100px"
   :border-bottom "1px solid rgba(255, 255, 255, .3)"
   "a" {:color "rgba(255,255,255, .8)"
        :font-weight "600"
        :font-size "13px"
        "&:hover" {
                   :text-decoration "underline"}}})

(defstyles logo []
  {:color "white !important"
   "small" {:margin-left "4px"
            :color "white"
            :background-color "#00c3ff"
            :font-weight "600"}})
(defn header
  [txs]
  [:section
   [:div.container.grid-xl
    [:header.navbar {:class (hero)}
     [:section.navbar-section
      [:a {:class (logo) :href "/"} "🍶 Varnelli" [:small.label "alpha"]]]
     [:section.navbar-section
      [:a {:href "/about"} "About"]]]]])