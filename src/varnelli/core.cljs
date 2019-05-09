(ns varnelli.core
  (:require [reagent.core :as r :refer [atom]]
            [reitit.frontend :as reitit]
            [reagent.session :as session]
            [clerk.core :as clerk]
            [accountant.core :as accountant]
            [varnelli.components.header :refer [header]]
            [varnelli.routes :refer [router page-for]]))

(defonce match (r/atom nil))

(defn current-page []
  (fn []
    (let [page (:current-page (session/get :route))]
      [:div
       [header]
       [page]])))


(defn start []
  (r/render [current-page]
                      (. js/document (getElementById "app"))))

(defn ^:export init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (clerk/initialize!)
  (accountant/configure-navigation!
   {:nav-handler
    (fn [path]
      (let [match (reitit/match-by-path router path)
            current-page (:name (:data  match))
            route-params (:path-params match)]
        (r/after-render clerk/after-render!)
        (session/put! :route {:current-page (page-for current-page)
                              :route-params route-params})
        (clerk/navigate-page! path)
        ))
    :path-exists?
    (fn [path]
      (boolean (reitit/match-by-path router path)))})
  (accountant/dispatch-current!)
  (start))

(defn stop []
  ;; stop is called before any code is reloaded
  ;; this is controlled by :before-load in the config
  (js/console.log "stop"))
