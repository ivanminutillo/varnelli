(ns varnelli.components.txs
  (:require-macros [cljss.core])
  (:require 
   [cljss.core :refer [defstyles]]))


(defn txs
  [txs]
  (let [items (:transactions @txs)]
    (print items)
    [:div.container.grid-xl
     [:table.table.table-hover
      [:thead
       [:tr
        [:th "Transaction Id"]
        [:th "Amount"]
        [:th "Currency"]
        [:th "Time ago"]]]
      [:tbody
       (for [item items]
         ^{:key {:amount item}}
         [:tr
          [:td (:transaction-id item)]
          [:td (:amount item)]
          [:td (:currency item)]
          [:td (:timestamp item)]])]
      ]])
  )