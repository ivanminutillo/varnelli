(ns varnelli.pages.tags
  (:require-macros [cljss.core])
  (:require
   [cljss.core :refer [defstyles]]
   [varnelli.dataviz.tags :refer [tags-distribution]]
   [varnelli.api :refer [fetch fetch-and-store tags-list]]
   [reagent.core :as r :refer [atom]]))


(defonce tags-state (r/atom []))

(def params {:type "db-only"
             :connection    "mongo"})

(defn fetch->tags []
  (fetch tags-list params))


; (defn tags-distribution [tags-data]
;   {
;    :title "Tags distribution"
;    :width 300,
;    :data {:values tags-data}
;    :mark "area"
;    :encoding {:x {:field "created"
;                   :type "ordinal"
;                   :axis {:title "Date"}
;                   :timeUnit "utcyearmonthdatehoursminutesseconds"}
;               :y {
;                   :field "count",
;                   :type "quantitative"}
;               :color {:field "tag"
;                       :type "nominal"}}})

(fetch-and-store tags-state fetch->tags)

(defstyles header []
  {:margin-top "40px"
   :text-align "center"
   :margin-bottom "60px" })

(defn tags
  []
  [:div.container.grid-lg
   [:h2 {:class (header)} "Tags dashboard"]
   (let [dataviz (tags-distribution (:tags @tags-state))]
     [oz.core/vega-lite dataviz])])

