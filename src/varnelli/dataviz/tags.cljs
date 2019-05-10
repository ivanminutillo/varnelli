(ns varnelli.dataviz.tags
  (:require [oz.core :as oz]))

(defn tags-distribution [tags-data]
  {:title "Tags distribution"
   :width 300
   :data {:values tags-data}
   :mark {:type "area" :tooltip "null"}
   :encoding {:x {:field "created"
                  :type "ordinal"
                  :axis {:title "Date"}
                  :timeUnit "utcyearmonthdatehoursminutesseconds"}
              :y {:field "count"
                  :type "quantitative"}
              :color {:field "tag"
                      :type "nominal"}}})