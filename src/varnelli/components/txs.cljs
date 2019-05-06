(ns varnelli.components.txs
  (:require-macros [cljss.core])
  (:require [cljss.core :refer [defstyles]]))


(defn txs
  [items]
  (.log js/console items)
  [:div.container.grid-lg
   [:table.table.table-striped.table-hover
    [:thead
     [:tr
      [:th "Amount"]
      [:th "currency"]]]
    [:tbody
     (map (fn [item]
            [:tr {:key {:id item}}
             [:td (:amount item)]
             [:td (:currency item)]]
            )
          (vals @items)) 
       ]]])