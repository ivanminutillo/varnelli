(ns varnelli.elements.loading
  (:require-macros [cljss.core])
  (:require [cljss.core :refer [defstyles]])


(defstyles loader [] {:color "white"
                       :margin-top "30px"
                       :font-weight "700"
                       :text-align "center"
                       :font-size "28px"})


(defn loading []
  [:div {:class (loader)} [:div "Loading..."]]
  )