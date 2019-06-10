(ns varnelli.pages.tx
  (:require-macros
   [cljss.core]
   [cljs.core.async.macros :refer [go]])
   (:require [reagent.core :as r :refer [atom]]
             [varnelli.utils.localStorage :refer [get-item]]
             [cljss.core :refer [defstyles]]
             [varnelli.elements.loading :refer [loading]]
             [varnelli.api :refer [fetch get-tx]]))

(defstyles body [] {:color "#cdcfd1"
                    :margin-top "60px"
                    :margin-bottom "40px"
                    "section" {
                               :border-radius "6px"
                               :padding "100px 20px 60px 20px"
                               :height "300px"
                               :background-image "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)"
                               }
                    "h5" {:display "inline-block"
                          :font-size "18px"
                          :color "#49535d"
                          :font-weight "600"
                          :background "antiquewhite"
                          :padding "4px 16px"
                          :border-radius "2px"
                          :border "1px solid #e4dbcf"}
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
                        :font-size "14px"})


(defstyles item-value [] {:color "#fff"
                          :flex "1"
                          :text-align "right"})

(defstyles tag [] {:color "#3b4351"})

(defn params [txid] 
  params {:type "blockchain-and-db"
          :connection (get-item "database")
          :txid txid})

(defn fetch->tx [txid]
  (fetch get-tx (params (str txid))))


(defn blockchain-tx [tx-state] 
[:div {:class (body)}
 [:section.container.grid-xl
  
   [:h2 "Transaction"]
   [:h5 (:txid tx-state)]]
  [:div.container.grid-xl {:class (status)}
   [:div {:class (status-item)}
    [:div {:class (item-key)} "Confirmations"]
    [:div {:class (item-value)} (:confirmations tx-state)]]
   [:div {:class (status-item)}
    [:div {:class (item-key)} "Amount"]
    [:div {:class (item-value)} (:amount tx-state)]]
   [:div {:class (status-item)}
    [:div {:class (item-key)} "Block hash"]
    [:div {:class (item-value)} (:blockhash tx-state)]]
   [:div {:class (status-item)}
    [:div {:class (item-key)} "Time ago"]
    [:div {:class (item-value)} (:time tx-state)]]]])



(defn mongo-tx [tx-state] 
[:div {:class (body)}
 [:section.container.grid-xl

  [:h2 "Transaction"]
  [:h5 (:transaction-id tx-state)]]
 [:div.container.grid-xl {:class (status)}
  [:div {:class (status-item)}
   [:div {:class (item-key)} "Currency"]
   [:div {:class (item-value)} (:currency tx-state)]]
  [:div {:class (status-item)}
   [:div {:class (item-key)} "Timestamp"]
   [:div {:class (item-value)} (:timestamp tx-state)]]
  [:div {:class (status-item)}
   [:div {:class (item-key)} "Amount"]
   [:div {:class (item-value)} (:amount tx-state)]]
  [:div {:class (status-item)}
   [:div {:class (item-key)} "Description"]
   [:div {:class (item-value)} (:description tx-state)]]
  [:div {:class (status-item)}
   [:div {:class (item-key)} "Tags"]
   [:div {:class (item-value)}
    (for [item (:tags tx-state)]

      ^{:key item}
      [:a {:href (str "/tag/" item)}
       [:div.chip {:class (tag)} item]])]]
  [:div {:class (status-item)}
   [:div {:class (item-key)} "from"]
   [:div {:class (item-value)}
    [:a {:href (str "/account/" (:from-id tx-state))} (:from-id tx-state)]]]
  [:div {:class (status-item)}
   [:div {:class (item-key)} "To"]
   [:div {:class (item-value)} [:a {:href (str "/account/" (:to-id tx-state))} (:to-id tx-state)]]]]])


(defn tx
  [match]
  (let 
   [tx-state (r/atom {:tx nil
                      :db nil})]
    (r/create-class
     {:component-did-mount
      (fn []
        (swap! tx-state assoc :db (get-item "database"))
        (let [{:keys [path]} (:parameters match)
              {:keys [id]} path]
          (go (let [response (<! (fetch->tx id))]
                (swap! tx-state assoc :tx (:body response)))))
        )
      :display-name "Tx page"
      :reagent-render
      (fn []
        (if (empty? (:tx @tx-state))
          [loading]
          (if (= (:db @tx-state) "bitcoin")
            [blockchain-tx (:tx @tx-state)]
            [mongo-tx (:tx @tx-state)])))})))
