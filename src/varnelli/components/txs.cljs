(ns varnelli.components.txs
  (:require-macros [cljss.core])
  (:require
   [reitit.frontend.easy :as rfe]
   [cljss.core :refer [defstyles]]))

(defstyles table [] {
                     :color "#cdcfd1"
                     :margin-bottom "40px"
                     "a" {:color "#00c3ff"
                          :cursor "pointer"}
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

(defn txs
  [txs]
  (let [items (:transactions @txs)]

    [:div.container.grid-xl
     [:ul.tab.tab-clock {:class (tabs)}
     [:li.tab-item.active
       [:a "Transactions"]]
      ]
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