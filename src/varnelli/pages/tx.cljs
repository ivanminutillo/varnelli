(ns varnelli.pages.tx
  (:require-macros
   [cljss.core]
   [cljs.core.async.macros :refer [go]])
   (:require [reagent.core :as r :refer [atom]]
             [cljss.core :refer [defstyles]]
             [varnelli.elements.loading :refer [loading]]
             [varnelli.api :refer [fetch get-tx]]))

(defstyles body [] {:color "#cdcfd1"
                    :margin-top "60px"
                    :margin-bottom "40px"
                    "section" {
                               :padding-top "100px"
                               :padding-bottom "60px"
                               :height "300px"
                               :background-image "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)"
                               }
                    "h5" {
                          :display "inline-block"
                          :font-size "14px"
                          :color "#49535d"
                          :font-weight "600"

                          }
                    "h2" {:letter-spacing "1px"
                          :color "#49535d"
                          }})


(defstyles status [] {:color "#cdcfd1"
                      :margin-top "60px"
                      })


(defstyles status-item [] {:color "#cdcfd1"
                           :display "flex"
                           :padding-top "10px"
                           :border-bottom "1px solid #cdcfd120"
                           :padding-bottom "10px"})

(defstyles item-key [] {:color "#cdcfd1"
                        :opacity "0.8"
                        :width "120px"
                        :line-height "24px"
                        :text-transform "uppercase"
                        :font-size "12px"})


(defstyles item-value [] {:color "#fff"
                          :flex "1"
                          :text-align "right"})


(defonce tx-state (r/atom []))

(defn params [txid] 
  params {:type "db-only"
          :connection    "mongo"
          :txid txid})

(defn fetch->tx [txid]
  (fetch get-tx (params (str txid))))

(defn tx
  [match]
  (let [{:keys [path]} (:parameters match)
        {:keys [id]} path]
    (go (let [response (<! (fetch->tx id))]
          (reset! tx-state (:body response))))
    (fn []
      (if (:description @tx-state)
        [:div {:class (body)}
         [:section
          [:div.container.grid-xl
           [:h2 "Transaction"]
           [:h5 (:transaction-id @tx-state)]]]
         [:div.container.grid-xl {:class (status)}
          [:div {:class (status-item)}
           [:div {:class (item-key)} "Currency"]
           [:div {:class (item-value)} (:currency @tx-state)]]
          [:div {:class (status-item)}
           [:div {:class (item-key)} "Timestamp"]
           [:div {:class (item-value)} (:timestamp @tx-state)]]
          [:div {:class (status-item)}
           [:div {:class (item-key)} "Amount"]
           [:div {:class (item-value)} (:amount @tx-state)]]
          [:div {:class (status-item)}
           [:div {:class (item-key)} "Description"]
           [:div {:class (item-value)} (:description @tx-state)]]
          [:div {:class (status-item)}
           [:div {:class (item-key)} "from"]
           [:div {:class (item-value)} (:from-id @tx-state)]]
          [:div {:class (status-item)}
           [:div {:class (item-key)} "To"]
           [:div {:class (item-value)} (:to-id @tx-state)]]]
         ]
        [loading]))))
