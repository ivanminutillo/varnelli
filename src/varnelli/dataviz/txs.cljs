(ns varnelli.dataviz.txs
  (:require [oz.core :as oz]))

(defn txs-distribution [txs-data]
  {:title "Volume distribution"
   :width 400
   :height 300
   :autosize {:type "fit" :contains "padding"}
   :data {:values txs-data}
   :mark {:type "line" :tooltip "null"}
   :encoding {:x {:field "timestamp"
                  :type "temporal"
                  :axis {:title "Date"}
                  :timeUnit "monthdate"}
              :y {:field "amount"
                  
                  :aggregate "sum"}
              }})
