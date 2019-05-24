(ns varnelli.core
  (:require-macros [cljss.core])
  (:require [reagent.core :as r :refer [atom]]
            [reitit.frontend :as rf]
            [reitit.coercion :as coercion]
            [reitit.frontend.easy :as rfe]
            [reagent.session :as session]
            [cljss.core :refer [inject-global]]
            [varnelli.components.header :refer [header]]
            [varnelli.routes :refer [routes]]))

(inject-global
 {:body {
         :background-color "#1E2730"}})


(defonce match (r/atom nil))

(defn current-page []
  [:div
   [header]
   (if @match
     (let [view (:view (:data @match))]
       (print view)
       [view @match]))])


(defn start []
  (r/render [current-page]
                      (. js/document (getElementById "app"))))

(defn ^:export init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (rfe/start!
   (rf/router routes {:compile coercion/compile-request-coercers})
   (fn [m] (reset! match m))
   {:use-fragment false})
  (start))

(defn stop []
  ;; stop is called before any code is reloaded
  ;; this is controlled by :before-load in the config
  (js/console.log "stop"))
