
(ns varnelli.pages.home
  (:require
   [varnelli.utils.localStorage :refer [get-item]]
   [varnelli.components.txs :refer [mongo-txs blockchain-txs]]
   [varnelli.components.hero :refer [hero blockchain-hero]]))

(defn home [match db]
           (if (= (get-item "database") "bitcoin")
             [:div
              [blockchain-hero]
              [blockchain-txs]]
             [:div
              [hero]
              [mongo-txs]]
  ))