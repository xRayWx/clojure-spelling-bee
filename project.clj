(defproject hello-world.core "0.1.0-SNAPSHOT"
  :description "Playground in which to learn some clojurescript and re-frame."
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.7.1"

  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.520"]
                 [org.clojure/core.async "1.2.603"]
                 [reagent "0.8.1"]
                 [re-frame "1.0.0-rc1"]
                 [cljs-http "0.1.46"]
                 [compojure "1.6.1"]
                 [ring/ring-defaults "0.3.2"]
                 [hiccup "1.0.5"]]

  :source-paths ["src"]

  :aliases {"fig"       ["trampoline" "run" "-m" "figwheel.main"]
            "fig:build" ["trampoline" "run" "-m" "figwheel.main" "-b" "dev" "-r"]
            "fig:min"   ["run" "-m" "figwheel.main" "-O" "advanced" "-bo" "dev"]}

  :profiles {:dev {:dependencies [[com.bhauman/figwheel-main "0.2.3"]
                                  [com.bhauman/rebel-readline-cljs "0.1.4"]]
                   :repl-options { :timeout 120000}}})
