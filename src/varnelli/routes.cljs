(ns varnelli.routes
  (:require
   [schema.core :as s]
   [reitit.frontend :as reitit]
   [reitit.coercion.schema]
   [varnelli.pages.home :refer [home]]
   [varnelli.pages.tag :refer [tag]]
   [varnelli.pages.account :refer [account]]
   [varnelli.pages.tx :refer [tx]]
   [varnelli.pages.about :refer [about]]))

(def routes
  [["/" {:name ::home-view
         :view home}]
   ["/about" {:name ::about-view
              :view about}]
   ["/tag/:id" {:name ::tag
                :view tag
                :coercion reitit.coercion.schema/coercion
                :parameters {:path {:id s/Str}}}]
   ["/account/:id" {:name ::account
                :view account
                :coercion reitit.coercion.schema/coercion
                :parameters {:path {:id s/Str}}}]
   ["/tx/:id" {:name ::tx-view
               :view tx
               :coercion reitit.coercion.schema/coercion
               :parameters {:path {:id s/Str}}}]])
