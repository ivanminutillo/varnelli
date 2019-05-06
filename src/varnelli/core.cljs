(ns varnelli.core
   (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as reagent :refer [atom]]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [varnelli.components.header :refer [header]]
            [varnelli.components.txs :refer [txs]]))

;; define your app data so that it doesn't get over-written on reload
(def url "http://localhost:3000/wallet/v1/")
(defonce app-state (atom {:text "Hello world!"}))

(def items (reagent/atom [{:amount "3" :currency "santamaria"} {:amount "6" :currency "santamaria"}])) 

(defn fetch-txs []              
  (http/post (str url "transactions/list")
              {:with-credentials? false
               :as :json
               :json-params {:type "db-only"
                             :connection    "mongo"}
               :headers {"x-api-key" "K8trtGu8FmfNiOFqcZhJhgtxhqs5FluM"
                         "Content-Type" "application/json"
                         "Accept" "application/json"}
               }))

(defn app []
  (go (let [response (<! (fetch-txs))]
        (js/console.log (:body response))))
  [:div
   [header]
   [txs]]
  )

(defn start []
  (reagent/render-component [app]
                            (. js/document (getElementById "app"))))

(defn ^:export init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (start))

(defn stop []
  ;; stop is called before any code is reloaded
  ;; this is controlled by :before-load in the config
  (js/console.log "stop"))
