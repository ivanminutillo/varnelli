
(ns varnelli.pages.account
  (:require-macros
   [cljss.core]
   [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r :refer [atom]]
            [varnelli.elements.loading :refer [loading]]
            [varnelli.api :refer [fetch txs-list balance]]
            [varnelli.components.txs :refer [txs]]
            [cljss.core :refer [defstyles]]
            [varnelli.components.hero :refer [hero]]))
;; define your app data so that it doesn't get over-written on reload

(defonce txs-state (r/atom []))
(defonce balance-state (r/atom []))

(defstyles title [] {:margin-top "40px"
                     :font-size "32px"
                     :color "rgba(255,255,255, .8)"})

(defstyles balance-info [] {:margin-top "20px"
                            :font-size "32px"
                            :color "rgba(255,255,255, .8)"
                            :width "200px"
                            :background "#414a52"
                            :padding "24px"
                            :border-radius "2px"
                            :margin-bottom "40px"})
(defn params [id]
  params {:type "db-only"
          :connection    "mongo"
          :account-id id})

(defn fetch->tx [id]
  (fetch txs-list (params (str id))))


(defn fetch->balance [id]
  (fetch balance (params (str id))))

(defn account [match]
  (let [{:keys [path]} (:parameters match)
        {:keys [id]} path]
    (go (let [response (<! (fetch->tx id))]
          (reset! txs-state (:body response)))
        (let [balance-response (<! (fetch->balance id))]
          (reset! balance-state (:body balance-response))))
    (fn []
      (if (and (not-empty (:transactions @txs-state)) (not-empty @balance-state))
        [:div
         [:div.container.grid-xl {:class (title)} (str id " account")
         [:div {:class (balance-info)}
          [:h5 "Balance"]
          (:amount @balance-state)]]
         [txs txs-state]]
        [loading]))))

