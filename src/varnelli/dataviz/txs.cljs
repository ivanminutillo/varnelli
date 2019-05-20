(ns varnelli.dataviz.txs
  (:require [oz.core :as oz]))

(defn txs-distribution [txs-data]
  {:title "Transactions distribution"
   :width 300
   :data {:values txs-data}
   :mark {:type "line" :tooltip "null"}
   :encoding {:x {:field "timestamp"
                  :type "temporal"
                  :axis {:title "Date"}
                  :timeUnit "monthday"}
              :y {:field "amount"
                  :aggregate "sum"}
              }})
