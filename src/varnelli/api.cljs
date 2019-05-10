
(ns varnelli.api
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [varnelli.apikey :refer [apikey]]
   [cljs.core.async :refer [<!]]
   [cljs-http.client :as http]))

(def url "http://localhost:3000/wallet/v1/")
(def balance "balance")
(def tags-list "tags/list")
(def txs-list "transactions/list")
(def tx "transactions/get")
(def new-tx "transactions/new")

(def headers {"x-api-key" apikey
              "Content-Type" "application/json"
              "Accept" "application/json"})

(defn fetch [path params]
  (http/post (str url path)
             {:with-credentials? false
              :as :json
              :json-params params
              :headers headers}))


(defn fetch-and-store [state fetch]
  (go (let [response (<! (fetch))]
        (reset! state (:body response)))))

