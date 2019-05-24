(ns varnelli.routes
  (:require
   [schema.core :as s]
   [reitit.frontend :as reitit]
   [reitit.coercion.schema]
   [varnelli.pages.home :refer [home]]
   [varnelli.pages.tx :refer [tx]]
   [varnelli.pages.about :refer [about]]))

(def routes
  [["/" {:name ::home-view
         :view home}]
   ["/about" {:name ::about-view
              :view about}]
  ["/tx/:id" {:name ::tx-view
              :view tx
              :parameters {:path {:id s/Str}}}]])
