
(ns varnelli.pages.home
  (:require
   [varnelli.utils.localStorage :refer [get-item]]
   [varnelli.components.txs :refer [txs blockchain-txs]]
   [varnelli.components.hero :refer [hero]]))

(defn home [match db]
           (if (= (get-item "database") "bitcoin")
             [blockchain-txs]
             [txs]))
  
