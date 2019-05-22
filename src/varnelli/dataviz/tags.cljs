(ns varnelli.dataviz.tags
  (:require [oz.core :as oz]))

(defn tags-distribution [tags-data]
  {:title "Tags distribution"
   :width 400
   :height 300
   :autosize {:type "fit" :contains "padding"}
   :data {:values tags-data}
   :mark {:type "area" :tooltip "null"}
   :encoding {:x {:field "created"
                  :type "temporal"
                  :axis {:title "Date"}
                  :timeUnit "monthdate"}
              :y {:field "count"
                  :aggregate "sum"}
              :color {:field "tag"
                      :type "nominal"}}})