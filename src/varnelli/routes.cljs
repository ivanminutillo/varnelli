(ns varnelli.routes
  (:require
   [reitit.frontend :as reitit]
   [varnelli.pages.home :refer [home]]
   [varnelli.pages.about :refer [about]]))

(def router
  (reitit/router
   [["/" :home]
    ["/about" :about]]))

(defn path-for [route]
  :path (reitit/match-by-name router route))

(path-for :about)

(defn page-for [route]
  (case route
    :home #'home
    :about #'about))