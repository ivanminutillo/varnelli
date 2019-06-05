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
  ;  [varnelli.components.search :refer [search blockchain-search]]
   [cljss.core :refer [defstyles]]))

(defstyles tags-list-items [] {:color "white"
                               :margin-bottom "40px"})

(defstyles tags [] {:background "transparent"
                    "h4" {:color "white"
                          :text-transform "capitalize"
                          }})

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
                       :background-color "#9796f0"
    :background "linear-gradient(to right, #fbc7d4, #9796f0)"
    :padding "30px 0"
    :border-radius "6px"
    :box-shadow "0 10px 20px rgba(0,0,0,.6)"
                       "h2" {:font-weight "800"
                             :font-size "40px"
                             :margin 0}
                       "h5" {:font-weight "600"
                             :color "rgba(255,255,255, .8)"
                             :font-size "12px"
                             :text-transform "uppercase"
                             :letter-spacing "1px"}})

(defstyles counter-container [] {:margin-top "30px"
                                 :display "grid"
                                 :grid-template-columns "1fr 1fr 1fr"
                                 :grid-column-gap "40px"})

(defstyles grid [] {
                    :display "grid"
                    :max-width  "1280px"
                    :margin "0 auto"
                    :grid-column-gap "20px"
                    :grid-template-columns "900px auto"
                    })

(defstyles blockchain-hero-wrapper [] {:margin-bottom "40px"})


(defstyles dataviz-container [] {})


(defonce tags-state (r/atom []))

(defonce txs-state (r/atom []))

(defn fetch->tags [params]
  (fetch tags-list params))


(defn fetch->txs [params]
  (fetch txs-list params))

(defstyles tag [] {:color "#3b4351"})

(defn hero []
  (go (let [tags (<! (fetch->tags {:type "db-only"
                                   :connection    "mongo"}))]
        (reset! tags-state (:body tags)))
      (let [txs (<! (fetch->txs {:type "blockchain-and-db"
                                 :connection    "mongo"}))]
        (reset! txs-state (:body txs)))
      )
  (fn []
    (if (and (not-empty @tags-state) (not-empty @txs-state))
      [:section.grid-xl.container
       [:div {:class (counter-container)}
        [:div {:class (counter)}
         [:h5 "Total transactions"]
         [:h2 (:total-count @txs-state)]]
        [:div {:class (counter)}
         [:h5 "Volume exchanged"]
         [:h2 (->> (:transactions @txs-state)
                   (map :amount)
                   (reduce +))]]
        [:div {:class (counter)}
         [:h5 "Total Tags"]
         [:h2 (count (:tags @tags-state))]]]
       [:div
        ; [search]
        [:div {:class (dataviz-container)}
         [:div {:class (dataviz)}
          (let [dataviz (txs-distribution (:transactions @txs-state) "timestamp")]
            [oz.core/vega-lite dataviz])]
         [:div {:class (dataviz)}
          (let [dataviz (tags-distribution (:tags @tags-state))]
            [oz.core/vega-lite dataviz])]]]
       [:div {:class (tags)}
        [:h4 "tags"]
        [:div {:class (tags-list-items)}
         (for [item (:tags @tags-state)]
           ^{:key item}
           [:a {:href (str "/tag/" (:tag item))}
            [:div.chip {:class (tag)} (str (:tag item) " (" (:count item) ")")]])
         ]
        ]
       ]
      [loading]))
  )

(defn blockchain-hero []
  (let [txs-state (r/atom [])] 
  (go (let [txs (<! (fetch->txs {:type "blockchain-and-db"
                                 :connection "bitcoin"}))]
        (reset! txs-state (:body txs))))
  (fn []
    (if (not-empty @txs-state)
      [:section.grid-xl.container {:class (blockchain-hero-wrapper)}
       [:div {:class (counter-container)}
        [:div {:class (counter)}
         [:h5 "Total transactions"]
         [:h2 (count @txs-state)]]
        [:div {:class (counter)}
         [:h5 "Volume exchanged"]
         [:h2 (->> @txs-state
                   (map :amount)
                   (reduce +))]]]
      ;  [:div
      ;   ; [blockchain-search]
      ;   [:div {:class (dataviz-container)}
      ;    [:div {:class (dataviz)}
      ;     (let [dataviz (txs-distribution  @txs-state "blocktime")]
      ;       [oz.core/vega-lite dataviz])]]]
       ]
      [loading]))))
