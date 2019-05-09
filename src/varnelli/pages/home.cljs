
(ns varnelli.pages.home
   (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r :refer [atom]]
            [varnelli.api :refer [fetch fetch-and-store txs-list]]
            [varnelli.components.txs :refer [txs]]))
;; define your app data so that it doesn't get over-written on reload

(defonce txs-state (r/atom []))

(def params {:type "db-only"
             :connection    "mongo"})

(defn fetch->txs []
  (fetch txs-list params))

(fetch-and-store txs-state fetch->txs) 

(defn home []
  [:div
   [txs txs-state]])
