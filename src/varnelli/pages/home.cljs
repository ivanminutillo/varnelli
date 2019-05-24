
(ns varnelli.pages.home
   (:require-macros 
    [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r :refer [atom]]
            [varnelli.elements.loading :refer [loading]]
            [varnelli.api :refer [fetch txs-list]]
            [varnelli.components.txs :refer [txs]]
            [varnelli.components.hero :refer [hero]]))
;; define your app data so that it doesn't get over-written on reload

(defonce txs-state (r/atom []))

(def params {:type "db-only"
             :connection    "mongo"})

(defn fetch->txs []
  (fetch txs-list params))


(defn home []
  (go (let [response (<! (fetch->txs))]
        (reset! txs-state (:body response))))
  (fn []
    (if (:transactions @txs-state)
      [:div
       [hero txs-state]
       [txs txs-state]]
      [loading])))
  
