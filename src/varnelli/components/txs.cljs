(ns varnelli.components.txs
  (:require-macros [cljss.core]
                   [cljs.core.async.macros :refer [go]])
  (:require
   [reagent.core :as r :refer [atom]]
   [varnelli.elements.loading :refer [loading]]
   [varnelli.utils.localStorage :refer [get-item]]
   [reitit.frontend.easy :as rfe]
   [varnelli.elements.loading :refer [loading]]
   [varnelli.api :refer [fetch txs-list]]
   [cljss.core :refer [defstyles]]))

(defstyles table [] {
                     :color "#cdcfd1"
                     :margin-bottom "40px"
                     "a" {:color "#00c3ff"
                          :cursor "pointer"}
                     "td div" {:width "200px"
                           :white-space "nowrap"
                           :overflow "hidden"
                           :text-overflow "ellipsis"}
                     "th" {:font-size "13px"
                           :text-transform "uppercase"
                           :letter-spacing "1px"}})

(defstyles tabs [] {
                    :border-bottom 0
                    :margin-bottom "20px"
                    "li a" {
                            :color "white !important"
                            :border-bottom-color "#00c3ff !important"
                            :font-size "20px"
                            :font-weight "800"}
                    })





(defn fetch->txs [params]
  (fetch txs-list params))

(defn blockchain-txs
  []
  (let [txs-state (r/atom [])] 
  (go (let [response (<! (fetch->txs {:type "blockchain-and-db"
                                       :connection  (get-item "database")}))]
        (reset! txs-state (:body response))))
  (fn []
    (if (empty? @txs-state)
      [loading]
      (let [items @txs-state]
        [:div.container.grid-xl
         [:ul.tab.tab-clock {:class (tabs)}
          [:li.tab-item.active
           [:a "Bitcoin transactions"]]]
         [:table.table {:class (table)}
          [:thead
           [:tr
            [:th "TxId"]
            [:th "Amount"]
            [:th "Confirmations"]
            [:th "Block Hash"]
            [:th "Time ago"]]]
          [:tbody
           (for [item items]
             ^{:key {:amount item}}
             [:tr
              [:td
               [:a {:href (str "/tx/" (:txid item))} [:div (:txid item)]]]
              [:td [:div (:amount item)]]
              [:td [:div (:confirmations item)]]
              [:td [:div (:blockhash item)]]
              [:td [:div (:time item)]]])]]])))))


(defn txs [txs-state]
  (let [items (:transactions @txs-state)]
    [:div.container.grid-xl
     [:ul.tab.tab-clock {:class (tabs)}
      [:li.tab-item.active
       [:a "Mongo transactions"]]]
     [:table.table {:class (table)}
      [:thead
       [:tr
        [:th "Transaction Id"]
        [:th "Amount"]
        [:th "Currency"]
        [:th "Time ago"]]]
      [:tbody
       (for [item items]
         ^{:key {:amount item}}
         [:tr
          [:td
           [:a {:href (str "/tx/" (:transaction-id item))} (:transaction-id item)]]
          [:td (:amount item)]
          [:td (:currency item)]
          [:td (:timestamp item)]])]]]))

(defn mongo-txs
  []
 (let [txs-state (r/atom [])] 
(go (let [response (<! (fetch->txs {:type "db-only"
                                    :connection  "mongo"}))]
      (reset! txs-state (:body response))))
(fn []
  (if (empty? @txs-state)
    [loading]
    [txs txs-state]
    ))
))
