(ns app.core
  "This namespace contains your application and is the entrypoint for 'yarn start'."
  (:require [reagent.core :as r]
            [app.thortech :refer [render-view]]))

(defn ^:dev/after-load render
  "Render the toplevel component for this app."
  []
  (r/render [render-view] (.getElementById js/document "app")))

(defn ^:export main
  "Run application startup logic."
  []
  (render))
