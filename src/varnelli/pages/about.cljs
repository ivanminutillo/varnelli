(ns varnelli.pages.about
  (:require-macros [cljss.core])
  (:require [cljss.core :refer [defstyles]])
)

(defstyles wrapper [] {:color "#fafafa"
                       :margin-top "60px"})
(defn about 
  []
  [:section.container.grid-xl {:class (wrapper)}
   [:h1 "About Varnelli"]
   [:p "Varnelli is a block explorer to navigate"]
   ])