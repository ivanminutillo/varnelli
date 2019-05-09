(ns varnelli.pages.tags
  (:require-macros [cljss.core])
  (:require [oz.core :as oz]
            [cljss.core :refer [defstyles]]
            [varnelli.api :refer [fetch fetch-and-store tags-list]]
            [reagent.core :as r :refer [atom]]))


(defonce tags-state (r/atom []))

(def params {:type "db-only"
             :connection    "mongo"})

(defn fetch->tags []
  (fetch tags-list params))

(fetch-and-store tags-state fetch->tags)


(def stacked-bar
  {
   :title "Tags distribution"
   :width 300,
   :data {:values (:tags @tags-state)}
   :mark "area"
   :encoding {:x {:field "created"
                  :type "ordinal"
                  :axis {:title "Date"}
                  :timeUnit "utcyearmonthdatehoursminutesseconds"}
              :y {
                  :field "count",
                  :type "quantitative"}
              :color {:field "tag"
                      :type "nominal"}}})


(defstyles header []
  {:margin-top "40px"
   :text-align "center"
   :margin-bottom "60px" })

(defn tags
  []
  [:div.container.grid-lg
   [:h2 {:class (header)} "Tags dashboard"]
   [oz.core/vega-lite stacked-bar]])

