(ns varnelli.components.hero
  (:require-macros
   [cljs.core.async.macros :refer [go]]
   [cljss.core])
  (:require
   [varnelli.elements.loading :refer [loading]]
   [varnelli.api :refer [fetch txs-list tags-list]]
   [reagent.core :as r :refer [atom]]
   [varnelli.dataviz.tags :refer [tags-distribution]]
   [varnelli.dataviz.txs :refer [txs-distribution]]
   [cljss.core :refer [defstyles]]))

(defstyles search []
  {:margin-top "60px"
   "i" {:margin-right "10px !important"
        :color "white"}
   "input" {:height "70px"
            :font-size "22px"
            :letter-spacing "1px"
            :font-weight "700"
            :border-radius "4px"
            :background "rgba(147, 209, 240, .6)"
            :border "0"
            :box-shadow "0 2px 4px 0 rgba(0,0,0,.30)"}})

(defstyles dataviz [] {:margin-top "40px"
                       :background "white"
                       :display "inline-block"
                       :margin-right "16px"
                       :&:last-of-type {:margin-right 0}
                       :border-radius "6px"
                       :margin-bottom "60px"})

(defstyles counter [] {:color "white"
                       :text-align "center"
                       :margin-top "40px"
                       :padding-bottom "20px"
                       :border-bottom "1px solid rgba(255, 255, 255, .3)"
                       "h2" {:font-weight "800"
                             :font-size "40px"}
                       "h5" {:font-weight "600"
                             :color "rgba(255,255,255, .8)"
                             :font-size "12px"
                             :text-transform "uppercase"
                             :letter-spacing "1px"}})

(defstyles counter-container [] {:margin-top "30px"})

(defstyles grid [] {
                    :display "grid"
                    :max-width  "1280px"
                    :margin "0 auto"
                    :grid-column-gap "20px"
                    :grid-template-columns "900px auto"
                    })




(defstyles dataviz-container [] {})


(defonce tags-state (r/atom []))


(def params {:type "db-only"
             :connection    "mongo"})

(defn fetch->tags []
  (fetch tags-list params))



(defn hero [txs]
  (go (let [tags (<! (fetch->tags))]
        (reset! tags-state (:body tags))))
  (fn []
    (if (:tags @tags-state)
      [:section {:class (grid)}
       [:div
        [:div {:class (search)}
         [:div.has-icon-right
          [:input.form-input {:placeholder "Search for hash, transaction or tag" :type "text"}]
          [:i.form-icon.icon.icon-search]]]
        [:div {:class (dataviz-container)}
         [:div {:class (dataviz)}
          (let [dataviz (txs-distribution (:transactions @txs))]
            [oz.core/vega-lite dataviz])]
         [:div {:class (dataviz)}
          (let [dataviz (tags-distribution (:tags @tags-state))]
            [oz.core/vega-lite dataviz])]]]
       [:div {:class (counter-container)}
        [:div {:class (counter)}
         [:h5 "Total transactions"]
         [:h2 (:total-count @txs)]]
        [:div {:class (counter)}
         [:h5 "Volume exchanged"]
         [:h2 (->> (:transactions @txs)
                   (map :amount)
                   (reduce +))]]
        [:div {:class (counter)}
         [:h5 "Total Tags"]
         [:h2 (count (:tags @tags-state))]]]]
      [loading]))
  )
  