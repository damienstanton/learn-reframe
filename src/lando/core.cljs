(ns lando.core
  (:require
   [sablono.core :as sab :include-macros true]
   [reagent.core :as reagent :refer [atom]]
   [re-frame.core :refer [subscribe]])
  (:require-macros
   [devcards.core :as dc :refer [defcard deftest]]
   [reagent.ratom :refer [reaction]]))

(enable-console-print!)

(defcard derived-data-flowing
  " ## _Derived data, flowing_

  This is the motto of re-frame, and is illustrated by the following unidirectional,
  functional reactive flow of data:
  ```
  (app-db)  ->  (components)  ->  [Hiccup|Reagent|VDOM|React|DOM]-----+
   ^                                                                  |
   |                                                                  v
  (handlers) <-----  (router)  <-------------------------------(dispatch)
  ```
  In this chart:

  The items in `()` are parts of the re-frame framework and are explained below.

  The items in `[]` are the machinery that re-frame abstracts away for us.

  Reference links for some of those underlying components.

  [React](https://facebook.github.io/react/)

  [Hiccup](https://github.com/weavejester/hiccup)

  [Reagent](https://reagent-project.github.io/)

  [DOM/VDOM](https://medium.com/tony-freed-consulting/what-is-virtual-dom-c0ec6d6a925c#.maodh3rfx)


  ")


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

  ;; However this gets inefficient when `:items` is big. This is remedied by
  ;; chaining reactions. Note the difference between this and the handler above
  (register-sub
    :sorted-items
    (fn [db [_]]
      (let [items      (reaction (get-in @db [:some :path :to :items]))]
            sort-attr  (reaction (get-in @db [:sort-by]))]
            (reaction (sort-by @sort-attr @items)))))
```
  Takeaways:

  + One can chain reactions
  + A reaction will only be re-run when its input Signals test not identical? to previous value.
  + Extremely efficient checks, even for large, deep nested data structures.

  On that last note, this would not be possible without Clojure(Script) [vectors](http://blog.higher-order.net/2009/02/01/understanding-clojures-persistentvector-implementation), which allow _fast_ node access time complexity - `O(log32n)` to be exact.
  ")

(defcard event-handlers
  "Collectively, event handlers provide the control logic in a re-frame application.

  An event handler is a pure function of two parameters:

  + Current value in `app-db`. Note: that's the map **in** `app-db`, not the atom itself.
  + An event (represented as a vector)
  It returns the new value which should be `reset!` into `app-db`.

  ```clojure
  ;; Example event handler
  (defn handle-delete
    [app-state [_ item-id]]
      (dissoc-in app-state [:some :path item-id]))

  ;; such handlers can be registered as such:
  (register-handler
    :delete-item
    handle-delete)
  ```
  ")

(defcard dispatching-on-events
  "Events tend to start in the DOM in response to user actions. They are dispatched.

For example, a button component might be like this:

```clojure
   (defn yes-button
       []
       [:div  {:class \"button-class\"
               :on-click  #(dispatch [:yes-button-clicked])}
               \"Yes\"])
```
Notice the on-click DOM handler:
```clojure
  #(dispatch [:yes-button-clicked])
```
We must try to keep the DOM as passive as possible. We do not want our views containing any control logic. That \"on-click\" is as simple as we can make it.

**Remember:** `Components` are as passive and minimal as possible when it comes to handling events. They dispatch _pure data and nothing more_.
   ")

(defcard routing
  "When dispatch is passed an event vector, it just puts that event onto a conveyor belt.

The consumer on the end of the conveyor is a router which will organise for that event to be processed by the right handler.
The `router `will:

+ Inspect the 1st element of the arriving vector
+ Look in its registry for the handler which is registered for this kind of event
+ Call that handler with two parameters: (1) the current value in app-db and (2) the event vector
+ `reset!` the returned value back into app-db.

As a re-frame app developer, our job is to write handlers for each kind of event, and then to register those handlers with the router.
  ")

(defcard control-as-FSM
  "
  As an app becomes more complex, the handlers are likely to be collectively implementing a [Finite State Machine](http://en.wikipedia.org/wiki/Finite-state_machine):

+ Your app is in a certain logical state (defined by the current values in app-db)
+ The arriving event vector represents a trigger.
+ The event handler implements \"a transition\", subject to BOTH the current logical state and the arriving trigger.
+ After the handler has run, the transition may have moved the app into a new logical state.
+ Repeat.

Not every app has lots of logical states, but many do, and if you are implementing one of them, then formally recognising it and using a technique like [state charts](https://seabites.wordpress.com/2011/12/08/your-ui-is-a-statechart/) will help greatly in getting a clean design and a nice datamodel.

The beauty of re-frame from a FSM point of view is that all the data is in one place - unlike OO systems where the data is distributed (and synchronized) across many objects.
  ")

(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (js/React.render (sab/html [:div "This is working"]) node)))

(main)
