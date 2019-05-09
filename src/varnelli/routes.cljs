(ns varnelli.routes
  (:require
   [reitit.frontend :as reitit]
   [varnelli.pages.home :refer [home]]
   [varnelli.pages.about :refer [about]]
   [varnelli.pages.tags :refer [tags]]))

(def router
  (reitit/router
   [["/" :home]
    ["/tags" :tags]
    ["/about" :about]]))

(defn path-for [route]
  :path (reitit/match-by-name router route))

(path-for :about)

(defn page-for [route]
  (case route
    :home #'home
    :tags #'tags
    :about #'about))