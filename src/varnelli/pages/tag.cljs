
(ns varnelli.pages.tag
   (:require-macros
    [cljss.core]
    [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r :refer [atom]]
            [varnelli.elements.loading :refer [loading]]
            [varnelli.api :refer [fetch txs-list]]
            [varnelli.components.txs :refer [txs]]
            [cljss.core :refer [defstyles]]
            [varnelli.components.hero :refer [hero]]))
;; define your app data so that it doesn't get over-written on reload

(defonce txs-state (r/atom []))

(defstyles title [] {:margin-top "40px"
                     :font-size "32px"
                     :color "rgba(255,255,255, .8)"})


(defn params [tag]
  params {:type "db-only"
          :connection    "mongo"
          :tags [tag]})

(defn fetch->tx [tag]
  (fetch txs-list (params (str tag))))

(defn tag [match]
  (let [{:keys [path]} (:parameters match)
        {:keys [id]} path]
    (go (let [response (<! (fetch->tx id))]
          (print response)
          (reset! txs-state (:body response))))

  (fn []
    (if (:transactions @txs-state)
      [:div
       [:div.container.grid-xl {:class (title)} (str "Results for: " id)]
       [txs txs-state]]
      [loading]))))
  
