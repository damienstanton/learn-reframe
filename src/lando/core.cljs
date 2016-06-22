(ns lando.core
  (:require
   [sablono.core :as sab :include-macros true]
   [reagent.core :as reagent :refer [atom]]
   [re-frame.core :refer [subscribe]])
  (:require-macros
   [devcards.core :as dc :refer [defcard deftest]]
   [reagent.ratom :refer [reaction]]))

(enable-console-print!)

;; The signal
(def app-db (atom {:a 0}))

;; A demo reactive atom that derefs the signal state
(def ratom2 (reaction {:b (:a @app-db)}))

;; Another ratom that conditionally updates based on the state in ratom2.
;; Here we can start to see how the signal wiring works
(def ratom3 (reaction (condp = (:b @ratom2)
                        0 "Hello"
                        1 "World")))

(defn signal-flow-example []
    (sab/html
      [:div
       [:h3 "ratom3 value: " @ratom3]
       [:button
        {:onClick (fn [] (swap! app-db assoc :a 0))}
        "Change signal to 0"]
       [:button
        {:onClick (fn [] (swap! app-db assoc :a 1))}
        "Change signal to 1"]]))

;; Components
(def n (atom "Damien"))

(defn greeter [name]
  [:div "Hi, " @name])

(defcard signal-flow-example
  "```clojure
;; The signal
(def app-db (atom {:a 0}))

;; A demo reactive atom that derefs the signal state
(def ratom2 (reaction {:b (:a @app-db)})

;; Another ratom that conditionally updates based on the state in ratom2.
;; Here we can start to see how the signal wiring works
  (def ratom3 (reaction (condp = (:b @ratom2))
                        0 \"Hello\"
                        1 \"World\")))
```"
  (dc/reagent signal-flow-example))


(defcard components
  "```clojure
(def n (atom \"Damien\"))

(defn greeter [name]
  [:div \"Hi, \" @name])
```
If we then call `(greeter n)`, we get:
"
  (dc/reagent (greeter n)))

;; Subscriptions introduce form-2 funcs
(def n2 (atom "Damien"))

(defn subscriptions []
  (let [name (subscribe [:name-query])]
    (fn []
      [:div "Hi again, " @n2])))

(defcard subscriptions
  "```clojure
  ;; Subscriptions introduce form-2 funcs
  (def n2 (atom {:name \"Damien\"}))

  (defn subscriptions []
    (let [name (subscribe [:name-query])]
      (fn []
        [:div \"Hi again, \" @name])))
  ```
  Likewise if we call `(subscriptions)`, we get:
  "
  (dc/reagent (subscriptions)))

(defcard subscription-handlers
  "```clojure
  ;; Building our own subscription handlers is done like this
  (register-sub
    :sorted-items
    (fn [db [_]]
      (reaction
        (let [items (get-in @db [:items])
              sort-attr (get-in @db [:sort-by])]
              (sort-by sort-attr items)))))

  ;; which can then be used:
  (defn items-list []
    (let [items   (subscribe [:sorted-items]) ;; <-- here it is
          num     (reaction (count @items))
          top-20  (reaction (take 20 @items))]
      (fn []
        [:div
           (str \"There are \" @num \" items. Here are the top 20.\")
           (into [:div ] (map item-render @top-20))])))
  ")

(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (js/React.render (sab/html [:div "This is working"]) node)))

(main)
