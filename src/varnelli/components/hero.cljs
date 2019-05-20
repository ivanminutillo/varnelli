(ns varnelli.components.hero
  (:require-macros [cljss.core])
  (:require
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

(defstyles dataviz [] {:margin-top "40px"})

(defstyles counter [] {
                       :color "white"
                       :text-align "center"
                       :margin-top "60px"
                       "h2" {
                             :font-weight "800"
                             :font-size "40px"}
                       "h5" {
                             :font-weight "600"
                             :color "rgba(255,255,255, .8)"
                             :font-size "12px"
                             :text-transform "uppercase"
                             :letter-spacing "1px"}})

(defn hero [txs]
  [:section.container.grid-xl
   [:div.columns
    [:div.column.col-8
     [:div {:class (search)}
      [:div.has-icon-right
       [:input.form-input {:placeholder "Search for hash, transaction or tag" :type "text"}]
       [:i.form-icon.icon.icon-search]]]  
     ]
    [:div.column.col-4
     [:div {:class (counter)}
      [:h5 "Total transactions"]
      [:h2 (:total-count @txs)]]]
    ]
   [:div.columns
    [:div.column.col-6
     [:div {:class (dataviz)}
      (let [dataviz (txs-distribution (:transactions @txs))]
     [oz.core/vega-lite dataviz])]
      ]]
   
   ])