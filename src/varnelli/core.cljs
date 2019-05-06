(ns varnelli.core
  (:require [reagent.core :as reagent :refer [atom]]
            [ajax.core :refer [POST]]
            [varnelli.components.header :refer [header]]))

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))
(defn handler [response]
  (.log js/console (str response)))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))

(defn clj->json
  [ds]
  (.stringify js/JSON (clj->js ds)))

(defn fetch-txs! []
  (let [json (clj->json {:type "db-only"
                              :connection    "mongo"})]
  (POST "http://localhost:3000/wallet/v1/transactions/list"
    {:headers {"x-api-key" "K8trtGu8FmfNiOFqcZhJhgtxhqs5FluM"
               "Content-Type" "application/json"
               "Accept" "application/json"
               }}
    {:format :json}
    {:params json
     :handler handler
     :error-handler error-handler})))

(defn app []
  (fetch-txs!)
  [header])

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
