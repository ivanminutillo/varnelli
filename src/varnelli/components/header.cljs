(ns varnelli.components.header
  (:require-macros [cljss.core])
  (:require
   [reagent.core :as r :refer [atom]]
   [varnelli.components.search :refer [search blockchain-search]]
   [varnelli.utils.localStorage :refer [set-item! get-item]]
   [cljss.core :refer [defstyles]]))

(defstyles login []
  {:text-transform "uppercase"
   :letter-spacing "1px"
   :font-weight "800"})

(defstyles header-wrapper []
  {:background "transparent"})

(defstyles hero []

  {
   :height "100px"
   :line-height "100px"
   "ul" {:line-height "20px"
         :right "0 !important"
         :left "auto !important"}
   "i" {:color "rgba(255, 255, 255, .8)"}
   "a" {:color "rgba(255,255,255, .8)"
        :font-weight "600"
        :font-size "13px"
        "&:hover" {
                   :text-decoration "underline"}}})

(defstyles logo []
  {:color "white !important"
   :font-size "16px !important"
   :&:hover {:text-decoration "none"}
   "small" {:margin-left "4px"
            :color "white"
            :background-color "#00c3ff"
            :font-weight "600"}})
(defn header
  [db]
[:section {:class (header-wrapper)}
 [:div.container.grid-xl
  [:header.navbar {:class (hero)}
   [:section.navbar-section
    [:a {:class (logo) :href "/"} "🍶 Varnelli" [:small.label "alpha"]]]
   [:section.navbar-center
    (if (= (get-item "database") "bitcoin")
      [:div
       [blockchain-search]]
      [:div
       [search]])
    ]
   [:section.navbar-section
    [:div.dropdown
     [:a.btn.btn-link.dropdown-toggle {:tabIndex "0"}
      [:i.icon.icon-2x.icon-apps]]
     [:ul.menu
      [:li.divider {:data-content "DATABASE"}]
      [:li.menu-item
       [:div.form-group
        [:label.form-switch
         [:input {:type "checkbox"
                  :checked (if (= @db "bitcoin")
                             true
                             false)
                  :on-change (fn [evt]
                               (if (= evt.target.checked true)
                                 (reset! db "bitcoin")
                                 (reset! db "mongo"))
                               (set-item! "database" (if (= evt.target.checked true)
                                                       "bitcoin"
                                                       "mongo")))}]
         [:i.form-icon]
         "Blockchain"]]]
      [:li.divider {:data-content "LINKS"}]
      [:li.menu-item
       [:a {:href "/about"} "About"]]
      [:li.menu-item
       [:a {:href "https://github.com/ivanminutillo/varnelli"} "Source code"]]]]]]]])
