// Compiled by ClojureScript 1.9.88 {}
goog.provide('lando.core');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('reagent.core');
goog.require('re_frame.core');
cljs.core.enable_console_print_BANG_.call(null);
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lando.core","lando.core",-1928636405),new cljs.core.Keyword(null,"derived-data-flowing","derived-data-flowing",1330898748)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"derived-data-flowing",new cljs.core.Keyword(null,"documentation","documentation",1889593999)," ## _Derived data, flowing_\n\n  This is the motto of re-frame, and is illustrated by the following unidirectional,\n  functional reactive flow of data:\n  ```\n  (app-db)  ->  (components)  ->  [Hiccup|Reagent|VDOM|React|DOM]-----+\n   ^                                                                  |\n   |                                                                  v\n  (handlers) <-----  (router)  <-------------------------------(dispatch)\n  ```\n  In this chart:\n\n  The items in `()` are parts of the re-frame framework and are explained below.\n\n  The items in `[]` are the machinery that re-frame abstracts away for us.\n\n  Reference links for some of those underlying components.\n\n  [React](https://facebook.github.io/react/)\n\n  [Hiccup](https://github.com/weavejester/hiccup)\n\n  [Reagent](https://reagent-project.github.io/)\n\n  [DOM/VDOM](https://medium.com/tony-freed-consulting/what-is-virtual-dom-c0ec6d6a925c#.maodh3rfx)\n\n\n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
lando.core.app_db = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(0)], null));
lando.core.ratom2 = reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lando.core.app_db))], null);
}));
lando.core.ratom3 = reagent.ratom.make_reaction.call(null,(function (){
var pred__39626 = cljs.core._EQ_;
var expr__39627 = new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lando.core.ratom2));
if(cljs.core.truth_(pred__39626.call(null,(0),expr__39627))){
return "Hello";
} else {
if(cljs.core.truth_(pred__39626.call(null,(1),expr__39627))){
return "World";
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__39627)].join('')));
}
}
}));
lando.core.signal_flow_example = (function lando$core$signal_flow_example(){
return React.createElement("div",null,React.createElement("h3",null,"ratom3 value: ",sablono.interpreter.interpret.call(null,cljs.core.deref.call(null,lando.core.ratom3))),React.createElement("button",{"onClick": (function (){
return cljs.core.swap_BANG_.call(null,lando.core.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"a","a",-2123407586),(0));
})},"Change signal to 0"),React.createElement("button",{"onClick": (function (){
return cljs.core.swap_BANG_.call(null,lando.core.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"a","a",-2123407586),(1));
})},"Change signal to 1"));
});
lando.core.n = reagent.core.atom.call(null,"Damien");
lando.core.greeter = (function lando$core$greeter(name){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Hi, ",cljs.core.deref.call(null,name)], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lando.core","lando.core",-1928636405),new cljs.core.Keyword(null,"signal-flow-example","signal-flow-example",1005456299)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"signal-flow-example",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"```clojure\n;; The signal\n(def app-db (atom {:a 0}))\n\n;; A demo reactive atom that derefs the signal state\n(def ratom2 (reaction {:b (:a @app-db)})\n\n;; Another ratom that conditionally updates based on the state in ratom2.\n;; Here we can start to see how the signal wiring works\n  (def ratom3 (reaction (condp = (:b @ratom2))\n                        0 \"Hello\"\n                        1 \"World\")))\n```",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof lando.core.t_lando$core39629 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
lando.core.t_lando$core39629 = (function (meta39630){
this.meta39630 = meta39630;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
lando.core.t_lando$core39629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39631,meta39630__$1){
var self__ = this;
var _39631__$1 = this;
return (new lando.core.t_lando$core39629(meta39630__$1));
});

lando.core.t_lando$core39629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39631){
var self__ = this;
var _39631__$1 = this;
return self__.meta39630;
});

lando.core.t_lando$core39629.prototype.devcards$core$IDevcardOptions$ = true;

lando.core.t_lando$core39629.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__29188__auto__,devcard_opts__29189__auto__){
var self__ = this;
var this__29188__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__29189__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__29207__auto__ = lando.core.signal_flow_example;
if(cljs.core.fn_QMARK_.call(null,v__29207__auto__)){
return ((function (v__29207__auto__,this__29188__auto____$1){
return (function (data_atom__29208__auto__,owner__29209__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__29207__auto__,data_atom__29208__auto__,owner__29209__auto__], null));
});
;})(v__29207__auto__,this__29188__auto____$1))
} else {
return reagent.core.as_element.call(null,v__29207__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__29189__auto__))));
});

lando.core.t_lando$core39629.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39630","meta39630",-1473999928,null)], null);
});

lando.core.t_lando$core39629.cljs$lang$type = true;

lando.core.t_lando$core39629.cljs$lang$ctorStr = "lando.core/t_lando$core39629";

lando.core.t_lando$core39629.cljs$lang$ctorPrWriter = (function (this__19102__auto__,writer__19103__auto__,opt__19104__auto__){
return cljs.core._write.call(null,writer__19103__auto__,"lando.core/t_lando$core39629");
});

lando.core.__GT_t_lando$core39629 = (function lando$core$__GT_t_lando$core39629(meta39630){
return (new lando.core.t_lando$core39629(meta39630));
});

}

return (new lando.core.t_lando$core39629(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lando.core","lando.core",-1928636405),new cljs.core.Keyword(null,"components","components",-1073188942)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"components",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"```clojure\n(def n (atom \"Damien\"))\n\n(defn greeter [name]\n  [:div \"Hi, \" @name])\n```\nIf we then call `(greeter n)`, we get:\n",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof lando.core.t_lando$core39632 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
lando.core.t_lando$core39632 = (function (meta39633){
this.meta39633 = meta39633;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
lando.core.t_lando$core39632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39634,meta39633__$1){
var self__ = this;
var _39634__$1 = this;
return (new lando.core.t_lando$core39632(meta39633__$1));
});

lando.core.t_lando$core39632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39634){
var self__ = this;
var _39634__$1 = this;
return self__.meta39633;
});

lando.core.t_lando$core39632.prototype.devcards$core$IDevcardOptions$ = true;

lando.core.t_lando$core39632.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__29188__auto__,devcard_opts__29189__auto__){
var self__ = this;
var this__29188__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__29189__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__29207__auto__ = lando.core.greeter.call(null,lando.core.n);
if(cljs.core.fn_QMARK_.call(null,v__29207__auto__)){
return ((function (v__29207__auto__,this__29188__auto____$1){
return (function (data_atom__29208__auto__,owner__29209__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__29207__auto__,data_atom__29208__auto__,owner__29209__auto__], null));
});
;})(v__29207__auto__,this__29188__auto____$1))
} else {
return reagent.core.as_element.call(null,v__29207__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__29189__auto__))));
});

lando.core.t_lando$core39632.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39633","meta39633",-1991234639,null)], null);
});

lando.core.t_lando$core39632.cljs$lang$type = true;

lando.core.t_lando$core39632.cljs$lang$ctorStr = "lando.core/t_lando$core39632";

lando.core.t_lando$core39632.cljs$lang$ctorPrWriter = (function (this__19102__auto__,writer__19103__auto__,opt__19104__auto__){
return cljs.core._write.call(null,writer__19103__auto__,"lando.core/t_lando$core39632");
});

lando.core.__GT_t_lando$core39632 = (function lando$core$__GT_t_lando$core39632(meta39633){
return (new lando.core.t_lando$core39632(meta39633));
});

}

return (new lando.core.t_lando$core39632(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
lando.core.n2 = reagent.core.atom.call(null,"Damien");
lando.core.subscriptions = (function lando$core$subscriptions(){
var name = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name-query","name-query",-420635848)], null));
return ((function (name){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Hi again, ",cljs.core.deref.call(null,lando.core.n2)], null);
});
;})(name))
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lando.core","lando.core",-1928636405),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"subscriptions",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"```clojure\n  ;; Subscriptions introduce form-2 funcs\n  (def n2 (atom {:name \"Damien\"}))\n\n  (defn subscriptions []\n    (let [name (subscribe [:name-query])]\n      (fn []\n        [:div \"Hi again, \" @name])))\n  ```\n  Likewise if we call `(subscriptions)`, we get:\n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof lando.core.t_lando$core39635 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
lando.core.t_lando$core39635 = (function (meta39636){
this.meta39636 = meta39636;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
lando.core.t_lando$core39635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39637,meta39636__$1){
var self__ = this;
var _39637__$1 = this;
return (new lando.core.t_lando$core39635(meta39636__$1));
});

lando.core.t_lando$core39635.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39637){
var self__ = this;
var _39637__$1 = this;
return self__.meta39636;
});

lando.core.t_lando$core39635.prototype.devcards$core$IDevcardOptions$ = true;

lando.core.t_lando$core39635.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__29188__auto__,devcard_opts__29189__auto__){
var self__ = this;
var this__29188__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__29189__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__29207__auto__ = lando.core.subscriptions.call(null);
if(cljs.core.fn_QMARK_.call(null,v__29207__auto__)){
return ((function (v__29207__auto__,this__29188__auto____$1){
return (function (data_atom__29208__auto__,owner__29209__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__29207__auto__,data_atom__29208__auto__,owner__29209__auto__], null));
});
;})(v__29207__auto__,this__29188__auto____$1))
} else {
return reagent.core.as_element.call(null,v__29207__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__29189__auto__))));
});

lando.core.t_lando$core39635.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39636","meta39636",2079373484,null)], null);
});

lando.core.t_lando$core39635.cljs$lang$type = true;

lando.core.t_lando$core39635.cljs$lang$ctorStr = "lando.core/t_lando$core39635";

lando.core.t_lando$core39635.cljs$lang$ctorPrWriter = (function (this__19102__auto__,writer__19103__auto__,opt__19104__auto__){
return cljs.core._write.call(null,writer__19103__auto__,"lando.core/t_lando$core39635");
});

lando.core.__GT_t_lando$core39635 = (function lando$core$__GT_t_lando$core39635(meta39636){
return (new lando.core.t_lando$core39635(meta39636));
});

}

return (new lando.core.t_lando$core39635(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lando.core","lando.core",-1928636405),new cljs.core.Keyword(null,"subscription-handlers","subscription-handlers",50959226)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"subscription-handlers",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"```clojure\n  ;; Building our own subscription handlers is done like this\n  (register-sub\n    :sorted-items\n    (fn [db [_]]\n      (reaction\n        (let [items (get-in @db [:items])\n              sort-attr (get-in @db [:sort-by])]\n              (sort-by sort-attr items)))))\n\n  ;; which can then be used:\n  (defn items-list []\n    (let [items   (subscribe [:sorted-items]) ;; <-- here it is\n          num     (reaction (count @items))\n          top-20  (reaction (take 20 @items))]\n      (fn []\n        [:div\n           (str \"There are \" @num \" items. Here are the top 20.\")\n           (into [:div ] (map item-render @top-20))])))\n\n  ;; However this gets inefficient when `:items` is big. This is remedied by\n  ;; chaining reactions. Note the difference between this and the handler above\n  (register-sub\n    :sorted-items\n    (fn [db [_]]\n      (let [items      (reaction (get-in @db [:some :path :to :items]))]\n            sort-attr  (reaction (get-in @db [:sort-by]))]\n            (reaction (sort-by @sort-attr @items)))))\n```\n  Takeaways:\n\n  + One can chain reactions\n  + A reaction will only be re-run when its input Signals test not identical? to previous value.\n  + Extremely efficient checks, even for large, deep nested data structures.\n\n  On that last note, this would not be possible without Clojure(Script) [vectors](http://blog.higher-order.net/2009/02/01/understanding-clojures-persistentvector-implementation), which allow _fast_ node access time complexity - `O(log32n)` to be exact.\n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lando.core","lando.core",-1928636405),new cljs.core.Keyword(null,"event-handlers","event-handlers",-1353840480)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"event-handlers",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Collectively, event handlers provide the control logic in a re-frame application.\n\n  An event handler is a pure function of two parameters:\n\n  + Current value in `app-db`. Note: that's the map **in** `app-db`, not the atom itself.\n  + An event (represented as a vector)\n  It returns the new value which should be `reset!` into `app-db`.\n\n  ```clojure\n  ;; Example event handler\n  (defn handle-delete\n    [app-state [_ item-id]]\n      (dissoc-in app-state [:some :path item-id]))\n\n  ;; such handlers can be registered as such:\n  (register-handler\n    :delete-item\n    handle-delete)\n  ```\n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lando.core","lando.core",-1928636405),new cljs.core.Keyword(null,"dispatching-on-events","dispatching-on-events",1984364062)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"dispatching-on-events",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Events tend to start in the DOM in response to user actions. They are dispatched.\n\nFor example, a button component might be like this:\n\n```clojure\n   (defn yes-button\n       []\n       [:div  {:class \"button-class\"\n               :on-click  #(dispatch [:yes-button-clicked])}\n               \"Yes\"])\n```\nNotice the on-click DOM handler:\n```clojure\n  #(dispatch [:yes-button-clicked])\n```\nWe must try to keep the DOM as passive as possible. We do not want our views containing any control logic. That \"on-click\" is as simple as we can make it.\n\n**Remember:** `Components` are as passive and minimal as possible when it comes to handling events. They dispatch _pure data and nothing more_.\n   ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lando.core","lando.core",-1928636405),new cljs.core.Keyword(null,"routing","routing",1440253662)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"routing",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"When dispatch is passed an event vector, it just puts that event onto a conveyor belt.\n\nThe consumer on the end of the conveyor is a router which will organise for that event to be processed by the right handler.\nThe `router `will:\n\n+ Inspect the 1st element of the arriving vector\n+ Look in its registry for the handler which is registered for this kind of event\n+ Call that handler with two parameters: (1) the current value in app-db and (2) the event vector\n+ `reset!` the returned value back into app-db.\n\nAs a re-frame app developer, our job is to write handlers for each kind of event, and then to register those handlers with the router.\n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lando.core","lando.core",-1928636405),new cljs.core.Keyword(null,"control-as-FSM","control-as-FSM",-1536282327)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"control-as-FSM",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"\n  As an app becomes more complex, the handlers are likely to be collectively implementing a [Finite State Machine](http://en.wikipedia.org/wiki/Finite-state_machine):\n\n+ Your app is in a certain logical state (defined by the current values in app-db)\n+ The arriving event vector represents a trigger.\n+ The event handler implements \"a transition\", subject to BOTH the current logical state and the arriving trigger.\n+ After the handler has run, the transition may have moved the app into a new logical state.\n+ Repeat.\n\nNot every app has lots of logical states, but many do, and if you are implementing one of them, then formally recognising it and using a technique like [state charts](https://seabites.wordpress.com/2011/12/08/your-ui-is-a-statechart/) will help greatly in getting a clean design and a nice datamodel.\n\nThe beauty of re-frame from a FSM point of view is that all the data is in one place - unlike OO systems where the data is distributed (and synchronized) across many objects.\n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
lando.core.main = (function lando$core$main(){
var temp__4655__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__4655__auto__)){
var node = temp__4655__auto__;
return React.render(React.createElement("div",null,"This is working"),node);
} else {
return null;
}
});
lando.core.main.call(null);

//# sourceMappingURL=core.js.map?rel=1466621247863