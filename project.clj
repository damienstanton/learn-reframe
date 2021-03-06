(defproject learnreframe "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.5.3"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.88"]
                 [devcards "0.2.1-7"]
                 [sablono "0.7.2"]
                 [cljsjs/react "15.1.0-0"]
                 [cljsjs/react-dom "15.1.0-0"]
                 [cljsjs/react-dom-server "15.1.0-0"]
                 [datsync "0.0.1-SNAPSHOT"]
                 [posh "0.3.5"]
                 [datascript "0.15.0"]
                 [prismatic/schema "1.1.2"]
                 [reagent "0.5.1"]
                 [re-frame "0.7.0"]
                 [re-com "0.8.3"]]

  :plugins [[lein-figwheel "0.5.3-2"]
            [lein-cljsbuild "1.1.3" :exclusions [org.clojure/clojure]]]

  :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                    "target"]
  :source-paths ["src"]

  :cljsbuild {
              :builds [{:id "devcards"
                        :source-paths ["src"]
                        :figwheel { :devcards true}
                        :compiler { :main       "learnreframe.core"
                                    :asset-path "js/compiled/devcards_out"
                                    :output-to  "resources/public/js/compiled/learnreframe_devcards.js"
                                    :output-dir "resources/public/js/compiled/devcards_out"
                                    :source-map-timestamp true}}
                       {:id "dev"
                        :source-paths ["src"]
                        :figwheel true
                        :compiler {:main       "learnreframe.core"
                                   :asset-path "js/compiled/out"
                                   :output-to  "resources/public/js/compiled/learnreframe.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :source-map-timestamp true}}
                       {:id "prod"
                        :source-paths ["src"]
                        :compiler {:main       "learnreframe.core"
                                   :asset-path "js/compiled/out"
                                   :output-to  "resources/public/js/compiled/learnreframe.js"
                                   :optimizations :advanced}}]}

  :figwheel { :css-dirs ["resources/public/css"]})
