// Compiled by ClojureScript 1.9.88 {}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.util.utils');
goog.require('devcards.system');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('devcards.util.markdown');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.call(null);
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__18496__auto__ = (function (){var and__18484__auto__ = typeof Symbol !== 'undefined';
if(and__18484__auto__){
var and__18484__auto____$1 = cljs.core.fn_QMARK_.call(null,Symbol);
if(and__18484__auto____$1){
var and__18484__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__18484__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__18484__auto____$2;
}
} else {
return and__18484__auto____$1;
}
} else {
return and__18484__auto__;
}
})();
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if(typeof devcards.core.register_listeners_fig !== 'undefined'){
return null;
} else {
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__26994_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__26994_SHARP_.detail], null));
}));

return true;
})()
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_.call(null,m)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var args26995 = [];
var len__19571__auto___26998 = arguments.length;
var i__19572__auto___26999 = (0);
while(true){
if((i__19572__auto___26999 < len__19571__auto___26998)){
args26995.push((arguments[i__19572__auto___26999]));

var G__27000 = (i__19572__auto___26999 + (1));
i__19572__auto___26999 = G__27000;
continue;
} else {
}
break;
}

var G__26997 = args26995.length;
switch (G__26997) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26995.length)].join('')));

}
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards.core.start_devcard_ui_BANG__STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if((cljs.core.map_QMARK_.call(null,options)) && (cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),(function (opts){
return cljs.core.merge.call(null,opts,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options));
}));
} else {
}

devcards.system.start_ui.call(null,devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_.call(null);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = 1;

devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__18484__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__18484__auto__){
var map__27008 = c;
var map__27008__$1 = ((((!((map__27008 == null)))?((((map__27008.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27008.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27008):map__27008);
var path = cljs.core.get.call(null,map__27008__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__27008__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_.call(null,path);

cljs.core.not_empty.call(null,path);

cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_.call(null,func);
} else {
return and__18484__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (card? c)"));
}


return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-card","register-card",-1375971588),c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.hash.call(null,raw_html_str))].join(''),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),raw_html_str], null)], null)));
});

devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,"code-ref");
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_hljs.call(null);
if(cljs.core.truth_(temp__4657__auto____$1)){
var hljs = temp__4657__auto____$1;
var temp__4657__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__4657__auto____$2)){
var highlight_block = temp__4657__auto____$2;
return highlight_block.call(null,node);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
var base__26202__auto___27014 = {"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "render": (function (){
var this$ = this;
return React.createElement("pre",{"className": (cljs.core.truth_(devcards.core.get_hljs.call(null))?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))},React.createElement("code",{"className": (function (){var or__18496__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104));
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return "";
}
})(), "ref": "code-ref"},sablono.interpreter.interpret.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))));
})};
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__26202__auto___27014);
}

var seq__27010_27015 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__27011_27016 = null;
var count__27012_27017 = (0);
var i__27013_27018 = (0);
while(true){
if((i__27013_27018 < count__27012_27017)){
var property__26203__auto___27019 = cljs.core._nth.call(null,chunk__27011_27016,i__27013_27018);
if(cljs.core.truth_((base__26202__auto___27014[property__26203__auto___27019]))){
(devcards.core.CodeHighlight.prototype[property__26203__auto___27019] = (base__26202__auto___27014[property__26203__auto___27019]));
} else {
}

var G__27020 = seq__27010_27015;
var G__27021 = chunk__27011_27016;
var G__27022 = count__27012_27017;
var G__27023 = (i__27013_27018 + (1));
seq__27010_27015 = G__27020;
chunk__27011_27016 = G__27021;
count__27012_27017 = G__27022;
i__27013_27018 = G__27023;
continue;
} else {
var temp__4657__auto___27024 = cljs.core.seq.call(null,seq__27010_27015);
if(temp__4657__auto___27024){
var seq__27010_27025__$1 = temp__4657__auto___27024;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27010_27025__$1)){
var c__19307__auto___27026 = cljs.core.chunk_first.call(null,seq__27010_27025__$1);
var G__27027 = cljs.core.chunk_rest.call(null,seq__27010_27025__$1);
var G__27028 = c__19307__auto___27026;
var G__27029 = cljs.core.count.call(null,c__19307__auto___27026);
var G__27030 = (0);
seq__27010_27015 = G__27027;
chunk__27011_27016 = G__27028;
count__27012_27017 = G__27029;
i__27013_27018 = G__27030;
continue;
} else {
var property__26203__auto___27031 = cljs.core.first.call(null,seq__27010_27025__$1);
if(cljs.core.truth_((base__26202__auto___27014[property__26203__auto___27031]))){
(devcards.core.CodeHighlight.prototype[property__26203__auto___27031] = (base__26202__auto___27014[property__26203__auto___27031]));
} else {
}

var G__27032 = cljs.core.next.call(null,seq__27010_27025__$1);
var G__27033 = null;
var G__27034 = (0);
var G__27035 = (0);
seq__27010_27015 = G__27032;
chunk__27011_27016 = G__27033;
count__27012_27017 = G__27034;
i__27013_27018 = G__27035;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
return React.createElement(devcards.core.CodeHighlight,{"code": code_str, "lang": lang});
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__19421__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19422__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19423__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19424__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19425__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19425__auto__,method_table__19421__auto__,prefer_table__19422__auto__,method_cache__19423__auto__,cached_hierarchy__19424__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__27036){
var map__27037 = p__27036;
var map__27037__$1 = ((((!((map__27037 == null)))?((((map__27037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27037):map__27037);
var content = cljs.core.get.call(null,map__27037__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__27039){
var map__27040 = p__27039;
var map__27040__$1 = ((((!((map__27040 == null)))?((((map__27040.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27040.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27040):map__27040);
var block = map__27040__$1;
var content = cljs.core.get.call(null,map__27040__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,{"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)});
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__19578__auto__ = [];
var len__19571__auto___27043 = arguments.length;
var i__19572__auto___27044 = (0);
while(true){
if((i__19572__auto___27044 < len__19571__auto___27043)){
args__19578__auto__.push((arguments[i__19572__auto___27044]));

var G__27045 = (i__19572__auto___27044 + (1));
i__19572__auto___27044 = G__27045;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.call(null,(function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_(devcards.core.react_element_QMARK_.call(null,x))){
return null;
} else {
return [cljs.core.str("```clojure\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,x)),cljs.core.str("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.call(null,devcards.util.markdown.parse_out_blocks,strs__$1);
return React.createElement("div",{"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"},sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,((function (blocks,strs__$1){
return (function (i,data){
return React.createElement("div",{"key": i},sablono.interpreter.interpret.call(null,devcards.core.markdown_block__GT_react.call(null,data)));
});})(blocks,strs__$1))
,blocks)));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

return React.createElement("div",{"style": {"color": "#a94442"}, "key": "devcards-markdown-error"},sablono.interpreter.interpret.call(null,message));
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq27042){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27042));
});

devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",{"key": "devcards_naked-card", "className": (function (){var G__27047 = devcards.system.devcards_rendered_card_class;
var G__27047__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__27047),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__27047);
if(cljs.core.truth_(cljs.core.not_empty.call(null,classname))){
return [cljs.core.str(G__27047__$1),cljs.core.str(" "),cljs.core.str(classname)].join('');
} else {
return G__27047__$1;
}
})()},sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args27048 = [];
var len__19571__auto___27056 = arguments.length;
var i__19572__auto___27057 = (0);
while(true){
if((i__19572__auto___27057 < len__19571__auto___27056)){
args27048.push((arguments[i__19572__auto___27057]));

var G__27058 = (i__19572__auto___27057 + (1));
i__19572__auto___27057 = G__27058;
continue;
} else {
}
break;
}

var G__27050 = args27048.length;
switch (G__27050) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27048.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__27051 = card;
var map__27051__$1 = ((((!((map__27051 == null)))?((((map__27051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27051):map__27051);
var path = cljs.core.get.call(null,map__27051__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__27051__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",{"key": cljs.core.prn_str.call(null,path), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], null))},sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",{"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"},React.createElement("div",{"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"},(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__27051,map__27051__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__27051,map__27051__$1,path,options))
)},sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," ")):sablono.interpreter.interpret.call(null,(function (){var attrs27053 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs27053))?sablono.interpreter.attributes.call(null,attrs27053):null),((cljs.core.map_QMARK_.call(null,attrs27053))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27053)], null)));
})()))),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__19159__auto__ = (((this$ == null))?null:this$);
var m__19160__auto__ = (devcards.core._devcard_options[goog.typeOf(x__19159__auto__)]);
if(!((m__19160__auto__ == null))){
return m__19160__auto__.call(null,this$,devcard_opts);
} else {
var m__19160__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__19160__auto____$1 == null))){
return m__19160__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__19159__auto__ = (((this$ == null))?null:this$);
var m__19160__auto__ = (devcards.core._devcard[goog.typeOf(x__19159__auto__)]);
if(!((m__19160__auto__ == null))){
return m__19160__auto__.call(null,this$,devcard_opts);
} else {
var m__19160__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__19160__auto____$1 == null))){
return m__19160__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcard.-devcard",this$);
}
}
}
});

devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__4657__auto__ = (this$.refs[ref]);
if(cljs.core.truth_(temp__4657__auto__)){
var comp = temp__4657__auto__;
return ReactDOM.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return (this$.props[cljs.core.name.call(null,k)]);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return (this$.state[cljs.core.name.call(null,k)]);
} else {
return null;
}
});
var base__26202__auto___27065 = {"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.call(null,(next_props["change_count"]),devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"change_count","change_count",-533812109)));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs27060 = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"children_thunk","children_thunk",-1161306645));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27060))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs27060)):{"className": "com-rigsomelight-dont-update"}),((cljs.core.map_QMARK_.call(null,attrs27060))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27060)], null)));
})};
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__26202__auto___27065);
}

var seq__27061_27066 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__27062_27067 = null;
var count__27063_27068 = (0);
var i__27064_27069 = (0);
while(true){
if((i__27064_27069 < count__27063_27068)){
var property__26203__auto___27070 = cljs.core._nth.call(null,chunk__27062_27067,i__27064_27069);
if(cljs.core.truth_((base__26202__auto___27065[property__26203__auto___27070]))){
(devcards.core.DontUpdate.prototype[property__26203__auto___27070] = (base__26202__auto___27065[property__26203__auto___27070]));
} else {
}

var G__27071 = seq__27061_27066;
var G__27072 = chunk__27062_27067;
var G__27073 = count__27063_27068;
var G__27074 = (i__27064_27069 + (1));
seq__27061_27066 = G__27071;
chunk__27062_27067 = G__27072;
count__27063_27068 = G__27073;
i__27064_27069 = G__27074;
continue;
} else {
var temp__4657__auto___27075 = cljs.core.seq.call(null,seq__27061_27066);
if(temp__4657__auto___27075){
var seq__27061_27076__$1 = temp__4657__auto___27075;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27061_27076__$1)){
var c__19307__auto___27077 = cljs.core.chunk_first.call(null,seq__27061_27076__$1);
var G__27078 = cljs.core.chunk_rest.call(null,seq__27061_27076__$1);
var G__27079 = c__19307__auto___27077;
var G__27080 = cljs.core.count.call(null,c__19307__auto___27077);
var G__27081 = (0);
seq__27061_27066 = G__27078;
chunk__27062_27067 = G__27079;
count__27063_27068 = G__27080;
i__27064_27069 = G__27081;
continue;
} else {
var property__26203__auto___27082 = cljs.core.first.call(null,seq__27061_27076__$1);
if(cljs.core.truth_((base__26202__auto___27065[property__26203__auto___27082]))){
(devcards.core.DontUpdate.prototype[property__26203__auto___27082] = (base__26202__auto___27065[property__26203__auto___27082]));
} else {
}

var G__27083 = cljs.core.next.call(null,seq__27061_27076__$1);
var G__27084 = null;
var G__27085 = (0);
var G__27086 = (0);
seq__27061_27066 = G__27083;
chunk__27062_27067 = G__27084;
count__27063_27068 = G__27085;
i__27064_27069 = G__27086;
continue;
}
} else {
}
}
break;
}
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
return React.createElement(devcards.core.DontUpdate,{"change_count": change_count, "children_thunk": children_thunk});
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__18496__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || (data.cljs$core$IAtom$))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data))){
return data;
} else {
return cljs.core.atom.call(null,data);
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
return devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
}):(function (this$){
return devcards.core.wrangle_inital_data.call(null,this$);
}));
devcards.core.default_derive_main = (function devcards$core$default_derive_main(parent_elem,card,data_atom,change_count){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_.call(null,m)){
return m.call(null,data_atom,parent_elem);
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not.call(null,devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_))))?devcards.core.code_highlight.call(null,devcards.util.utils.pprint_code.call(null,main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
if(new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308).cljs$core$IFn$_invoke$arity$1(options) === false){
return devcards.core.dont_update.call(null,change_count,main_obj);
} else {
return main_obj;
}
});
devcards.core.render_all_card_elements = (function devcards$core$render_all_card_elements(main,data_atom,card){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var hist_ctl = (cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(options))?devcards.core.hist_recorder_STAR_.call(null,data_atom):null);
var document = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__4657__auto__)){
var docu = temp__4657__auto__;
return devcards.core.markdown__GT_react.call(null,docu);
} else {
return null;
}
})();
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom)):null);
var card__$1 = (((typeof main === 'string') || ((main == null)))?cljs.core.assoc_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"hide-border","hide-border",1463657151)], null),true):card);
var main__$1 = React.createElement("div",{"key": "devcards-main-section"},sablono.interpreter.interpret.call(null,main));
var children = cljs.core.keep.call(null,cljs.core.identity,(function (){var x__19330__auto__ = document;
return cljs.core._conj.call(null,(function (){var x__19330__auto____$1 = main__$1;
return cljs.core._conj.call(null,(function (){var x__19330__auto____$2 = hist_ctl;
return cljs.core._conj.call(null,(function (){var x__19330__auto____$3 = edn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19330__auto____$3);
})(),x__19330__auto____$2);
})(),x__19330__auto____$1);
})(),x__19330__auto__);
})());
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.call(null,children,card__$1);
} else {
return React.createElement("div",{"className": "com-rigsomelight-devcards-frameless"},sablono.interpreter.interpret.call(null,children));
}
});
var base__26202__auto___27093 = {"getInitialState": (function (){
return {"unique_id": cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-base-","devcards-base-",-1457268595,null)), "state_change_count": (0)};
}), "componentDidUpdate": (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(new cljs.core.Keyword(null,"static-state","static-state",-1049492012).cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,initial_data))?cljs.core.deref.call(null,initial_data):initial_data);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,atom),data)){
return cljs.core.reset_BANG_.call(null,atom,data);
} else {
return null;
}
} else {
return null;
}
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return this$.setState((function (){var or__18496__auto__ = (function (){var and__18484__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__18484__auto__)){
return this$.state;
} else {
return and__18484__auto__;
}
})();
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return {"data_atom": devcards.core.wrangle_inital_data.call(null,this$)};
}
})());
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_((function (){var and__18484__auto__ = data_atom;
if(cljs.core.truth_(and__18484__auto__)){
return id;
} else {
return and__18484__auto__;
}
})())){
return cljs.core.remove_watch.call(null,data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(temp__4657__auto__)){
var data_atom = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_(temp__4657__auto____$1)){
var id = temp__4657__auto____$1;
return cljs.core.add_watch.call(null,data_atom,id,((function (id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.setState({"state_change_count": (devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)) + (1))});
});})(id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$))
);
} else {
return null;
}
} else {
return null;
}
}):(function (){
return null;
})), "render": (function (){
var this$ = this;
var data_atom = devcards.core.get_data_atom.call(null,this$);
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var change_count = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612));
var main = devcards.core.default_derive_main.call(null,this$,card,data_atom,change_count);
return devcards.core.render_all_card_elements.call(null,main,data_atom,card);
})};
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__26202__auto___27093);
}

var seq__27089_27094 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__27090_27095 = null;
var count__27091_27096 = (0);
var i__27092_27097 = (0);
while(true){
if((i__27092_27097 < count__27091_27096)){
var property__26203__auto___27098 = cljs.core._nth.call(null,chunk__27090_27095,i__27092_27097);
if(cljs.core.truth_((base__26202__auto___27093[property__26203__auto___27098]))){
(devcards.core.DevcardBase.prototype[property__26203__auto___27098] = (base__26202__auto___27093[property__26203__auto___27098]));
} else {
}

var G__27099 = seq__27089_27094;
var G__27100 = chunk__27090_27095;
var G__27101 = count__27091_27096;
var G__27102 = (i__27092_27097 + (1));
seq__27089_27094 = G__27099;
chunk__27090_27095 = G__27100;
count__27091_27096 = G__27101;
i__27092_27097 = G__27102;
continue;
} else {
var temp__4657__auto___27103 = cljs.core.seq.call(null,seq__27089_27094);
if(temp__4657__auto___27103){
var seq__27089_27104__$1 = temp__4657__auto___27103;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27089_27104__$1)){
var c__19307__auto___27105 = cljs.core.chunk_first.call(null,seq__27089_27104__$1);
var G__27106 = cljs.core.chunk_rest.call(null,seq__27089_27104__$1);
var G__27107 = c__19307__auto___27105;
var G__27108 = cljs.core.count.call(null,c__19307__auto___27105);
var G__27109 = (0);
seq__27089_27094 = G__27106;
chunk__27090_27095 = G__27107;
count__27091_27096 = G__27108;
i__27092_27097 = G__27109;
continue;
} else {
var property__26203__auto___27110 = cljs.core.first.call(null,seq__27089_27104__$1);
if(cljs.core.truth_((base__26202__auto___27093[property__26203__auto___27110]))){
(devcards.core.DevcardBase.prototype[property__26203__auto___27110] = (base__26202__auto___27093[property__26203__auto___27110]));
} else {
}

var G__27111 = cljs.core.next.call(null,seq__27089_27104__$1);
var G__27112 = null;
var G__27113 = (0);
var G__27114 = (0);
seq__27089_27094 = G__27111;
chunk__27090_27095 = G__27112;
count__27091_27096 = G__27113;
i__27092_27097 = G__27114;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(temp__4657__auto__)){
var node_fn = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto____$1)){
var node = temp__4657__auto____$1;
return node_fn.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),node);
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__26202__auto___27119 = {"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))].join('')};
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__18484__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__18484__auto__)){
return cljs.core.not_EQ_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),(prevP["node_fn"]));
} else {
return and__18484__auto__;
}
})())){
return devcards.core.render_into_dom.call(null,this$);
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return ReactDOM.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return devcards.core.render_into_dom.call(null,this$);
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return React.DOM.div({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329))},"Card has not mounted DOM node.");
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))};
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__26202__auto___27119);
}

var seq__27115_27120 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__27116_27121 = null;
var count__27117_27122 = (0);
var i__27118_27123 = (0);
while(true){
if((i__27118_27123 < count__27117_27122)){
var property__26203__auto___27124 = cljs.core._nth.call(null,chunk__27116_27121,i__27118_27123);
if(cljs.core.truth_((base__26202__auto___27119[property__26203__auto___27124]))){
(devcards.core.DomComponent.prototype[property__26203__auto___27124] = (base__26202__auto___27119[property__26203__auto___27124]));
} else {
}

var G__27125 = seq__27115_27120;
var G__27126 = chunk__27116_27121;
var G__27127 = count__27117_27122;
var G__27128 = (i__27118_27123 + (1));
seq__27115_27120 = G__27125;
chunk__27116_27121 = G__27126;
count__27117_27122 = G__27127;
i__27118_27123 = G__27128;
continue;
} else {
var temp__4657__auto___27129 = cljs.core.seq.call(null,seq__27115_27120);
if(temp__4657__auto___27129){
var seq__27115_27130__$1 = temp__4657__auto___27129;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27115_27130__$1)){
var c__19307__auto___27131 = cljs.core.chunk_first.call(null,seq__27115_27130__$1);
var G__27132 = cljs.core.chunk_rest.call(null,seq__27115_27130__$1);
var G__27133 = c__19307__auto___27131;
var G__27134 = cljs.core.count.call(null,c__19307__auto___27131);
var G__27135 = (0);
seq__27115_27120 = G__27132;
chunk__27116_27121 = G__27133;
count__27117_27122 = G__27134;
i__27118_27123 = G__27135;
continue;
} else {
var property__26203__auto___27136 = cljs.core.first.call(null,seq__27115_27130__$1);
if(cljs.core.truth_((base__26202__auto___27119[property__26203__auto___27136]))){
(devcards.core.DomComponent.prototype[property__26203__auto___27136] = (base__26202__auto___27119[property__26203__auto___27136]));
} else {
}

var G__27137 = cljs.core.next.call(null,seq__27115_27130__$1);
var G__27138 = null;
var G__27139 = (0);
var G__27140 = (0);
seq__27115_27120 = G__27137;
chunk__27116_27121 = G__27138;
count__27117_27122 = G__27139;
i__27118_27123 = G__27140;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__18496__auto__ = x === true;
if(or__18496__auto__){
return or__18496__auto__;
} else {
var or__18496__auto____$1 = x === false;
if(or__18496__auto____$1){
return or__18496__auto____$1;
} else {
var or__18496__auto____$2 = (x == null);
if(or__18496__auto____$2){
return or__18496__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__18496__auto__ = typeof x === 'string';
if(or__18496__auto__){
return or__18496__auto__;
} else {
var or__18496__auto____$1 = (x == null);
if(or__18496__auto____$1){
return or__18496__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__18496__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
var propagated_errors = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.call(null,((function (propagated_errors){
return (function (p1__27141_SHARP_){
return !(p1__27141_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__27150 = opts;
var map__27150__$1 = ((((!((map__27150 == null)))?((((map__27150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27150):map__27150);
var name = cljs.core.get.call(null,map__27150__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__27150__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__27150__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__27150__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.call(null,propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__18496__auto__ = cljs.core.map_QMARK_.call(null,options);
if(or__18496__auto__){
return or__18496__auto__;
} else {
var or__18496__auto____$1 = (options == null);
if(or__18496__auto____$1){
return or__18496__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__18496__auto__ = (initial_data == null);
if(or__18496__auto__){
return or__18496__auto__;
} else {
var or__18496__auto____$1 = cljs.core.vector_QMARK_.call(null,initial_data);
if(or__18496__auto____$1){
return or__18496__auto____$1;
} else {
var or__18496__auto____$2 = cljs.core.map_QMARK_.call(null,initial_data);
if(or__18496__auto____$2){
return or__18496__auto____$2;
} else {
var or__18496__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data));
if(or__18496__auto____$3){
return or__18496__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.mapv.call(null,((function (map__27150,map__27150__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__27142_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__27142_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__27150,map__27150__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",{"style": {"color": "#a94442", "display": "flex", "margin": "0.5em 0px"}},sablono.interpreter.interpret.call(null,React.createElement("code",{"style": {"flex": "1 100px", "marginRight": "10px"}},sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e)):null)))),React.createElement("span",{"style": {"flex": "3 100px", "marginRight": "10px"}},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",{"style": {"flex": "1 100px"}}," Received: ",(function (){var attrs27158 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs27158))?sablono.interpreter.attributes.call(null,attrs27158):null),((cljs.core.map_QMARK_.call(null,attrs27158))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27158)], null)));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",{"className": "com-rigsomelight-devcards-card-base-no-pad"},(function (){var attrs27162 = [cljs.core.str((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27162))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs27162)):{"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"}),((cljs.core.map_QMARK_.call(null,attrs27162))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27162)], null)));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs27163 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27163))?sablono.interpreter.attributes.call(null,attrs27163):null),((cljs.core.map_QMARK_.call(null,attrs27163))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27163)], null)));
})(),sablono.interpreter.interpret.call(null,((cljs.core.map_QMARK_.call(null,opts))?(function (){var attrs27164 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27164))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs27164)):{"className": "com-rigsomelight-devcards-padding-top-border"}),((cljs.core.map_QMARK_.call(null,attrs27164))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27164)], null)));
})():null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__27165_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__27165_SHARP_);
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options.call(null,card_options);
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return devcards.core.render_errors.call(null,card_options,errors);
} else {
return React.createElement(devcards.core.DevcardBase,{"card": devcards.core.add_environment_defaults.call(null,card_options)});
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentiyOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19118__auto__,k__19119__auto__){
var self__ = this;
var this__19118__auto____$1 = this;
return cljs.core._lookup.call(null,this__19118__auto____$1,k__19119__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19120__auto__,k27167,else__19121__auto__){
var self__ = this;
var this__19120__auto____$1 = this;
var G__27169 = (((k27167 instanceof cljs.core.Keyword))?k27167.fqn:null);
switch (G__27169) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27167,else__19121__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19132__auto__,writer__19133__auto__,opts__19134__auto__){
var self__ = this;
var this__19132__auto____$1 = this;
var pr_pair__19135__auto__ = ((function (this__19132__auto____$1){
return (function (keyval__19136__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19133__auto__,cljs.core.pr_writer,""," ","",opts__19134__auto__,keyval__19136__auto__);
});})(this__19132__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19133__auto__,pr_pair__19135__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__19134__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27166){
var self__ = this;
var G__27166__$1 = this;
return (new cljs.core.RecordIter((0),G__27166__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19116__auto__){
var self__ = this;
var this__19116__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19112__auto__){
var self__ = this;
var this__19112__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19122__auto__){
var self__ = this;
var this__19122__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19113__auto__){
var self__ = this;
var this__19113__auto____$1 = this;
var h__18931__auto__ = self__.__hash;
if(!((h__18931__auto__ == null))){
return h__18931__auto__;
} else {
var h__18931__auto____$1 = cljs.core.hash_imap.call(null,this__19113__auto____$1);
self__.__hash = h__18931__auto____$1;

return h__18931__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19114__auto__,other__19115__auto__){
var self__ = this;
var this__19114__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18484__auto__ = other__19115__auto__;
if(cljs.core.truth_(and__18484__auto__)){
var and__18484__auto____$1 = (this__19114__auto____$1.constructor === other__19115__auto__.constructor);
if(and__18484__auto____$1){
return cljs.core.equiv_map.call(null,this__19114__auto____$1,other__19115__auto__);
} else {
return and__18484__auto____$1;
}
} else {
return and__18484__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19127__auto__,k__19128__auto__){
var self__ = this;
var this__19127__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__19128__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19127__auto____$1),self__.__meta),k__19128__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19128__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19125__auto__,k__19126__auto__,G__27166){
var self__ = this;
var this__19125__auto____$1 = this;
var pred__27170 = cljs.core.keyword_identical_QMARK_;
var expr__27171 = k__19126__auto__;
if(cljs.core.truth_(pred__27170.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__27171))){
return (new devcards.core.IdentiyOptions(G__27166,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19126__auto__,G__27166),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19130__auto__){
var self__ = this;
var this__19130__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19117__auto__,G__27166){
var self__ = this;
var this__19117__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__27166,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19123__auto__,entry__19124__auto__){
var self__ = this;
var this__19123__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19124__auto__)){
return cljs.core._assoc.call(null,this__19123__auto____$1,cljs.core._nth.call(null,entry__19124__auto__,(0)),cljs.core._nth.call(null,entry__19124__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19123__auto____$1,entry__19124__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__19152__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__19152__auto__,writer__19153__auto__){
return cljs.core._write.call(null,writer__19153__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__27168){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__27168),null,cljs.core.dissoc.call(null,G__27168,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__27174){
var map__27177 = p__27174;
var map__27177__$1 = ((((!((map__27177 == null)))?((((map__27177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27177):map__27177);
var devcard_opts = map__27177__$1;
var options = cljs.core.get.call(null,map__27177__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__27177,map__27177__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__27177,map__27177__$1,devcard_opts,options))
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),main_obj,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),true], null),devcards.core.assert_options_map.call(null,options)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19118__auto__,k__19119__auto__){
var self__ = this;
var this__19118__auto____$1 = this;
return cljs.core._lookup.call(null,this__19118__auto____$1,k__19119__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19120__auto__,k27180,else__19121__auto__){
var self__ = this;
var this__19120__auto____$1 = this;
var G__27182 = (((k27180 instanceof cljs.core.Keyword))?k27180.fqn:null);
switch (G__27182) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27180,else__19121__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19132__auto__,writer__19133__auto__,opts__19134__auto__){
var self__ = this;
var this__19132__auto____$1 = this;
var pr_pair__19135__auto__ = ((function (this__19132__auto____$1){
return (function (keyval__19136__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19133__auto__,cljs.core.pr_writer,""," ","",opts__19134__auto__,keyval__19136__auto__);
});})(this__19132__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19133__auto__,pr_pair__19135__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__19134__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27179){
var self__ = this;
var G__27179__$1 = this;
return (new cljs.core.RecordIter((0),G__27179__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19116__auto__){
var self__ = this;
var this__19116__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19112__auto__){
var self__ = this;
var this__19112__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19122__auto__){
var self__ = this;
var this__19122__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19113__auto__){
var self__ = this;
var this__19113__auto____$1 = this;
var h__18931__auto__ = self__.__hash;
if(!((h__18931__auto__ == null))){
return h__18931__auto__;
} else {
var h__18931__auto____$1 = cljs.core.hash_imap.call(null,this__19113__auto____$1);
self__.__hash = h__18931__auto____$1;

return h__18931__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19114__auto__,other__19115__auto__){
var self__ = this;
var this__19114__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18484__auto__ = other__19115__auto__;
if(cljs.core.truth_(and__18484__auto__)){
var and__18484__auto____$1 = (this__19114__auto____$1.constructor === other__19115__auto__.constructor);
if(and__18484__auto____$1){
return cljs.core.equiv_map.call(null,this__19114__auto____$1,other__19115__auto__);
} else {
return and__18484__auto____$1;
}
} else {
return and__18484__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19127__auto__,k__19128__auto__){
var self__ = this;
var this__19127__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__19128__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19127__auto____$1),self__.__meta),k__19128__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19128__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19125__auto__,k__19126__auto__,G__27179){
var self__ = this;
var this__19125__auto____$1 = this;
var pred__27183 = cljs.core.keyword_identical_QMARK_;
var expr__27184 = k__19126__auto__;
if(cljs.core.truth_(pred__27183.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__27184))){
return (new devcards.core.AtomLikeOptions(G__27179,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19126__auto__,G__27179),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19130__auto__){
var self__ = this;
var this__19130__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19117__auto__,G__27179){
var self__ = this;
var this__19117__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__27179,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19123__auto__,entry__19124__auto__){
var self__ = this;
var this__19123__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19124__auto__)){
return cljs.core._assoc.call(null,this__19123__auto____$1,cljs.core._nth.call(null,entry__19124__auto__,(0)),cljs.core._nth.call(null,entry__19124__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19123__auto____$1,entry__19124__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__19152__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__19152__auto__,writer__19153__auto__){
return cljs.core._write.call(null,writer__19153__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__27181){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__27181),null,cljs.core.dissoc.call(null,G__27181,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.util.edn_renderer.html_edn.call(null,((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (main_obj.cljs$core$IDeref$))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj)))?cljs.core.deref.call(null,main_obj):main_obj)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19118__auto__,k__19119__auto__){
var self__ = this;
var this__19118__auto____$1 = this;
return cljs.core._lookup.call(null,this__19118__auto____$1,k__19119__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19120__auto__,k27190,else__19121__auto__){
var self__ = this;
var this__19120__auto____$1 = this;
var G__27192 = (((k27190 instanceof cljs.core.Keyword))?k27190.fqn:null);
switch (G__27192) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27190,else__19121__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19132__auto__,writer__19133__auto__,opts__19134__auto__){
var self__ = this;
var this__19132__auto____$1 = this;
var pr_pair__19135__auto__ = ((function (this__19132__auto____$1){
return (function (keyval__19136__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19133__auto__,cljs.core.pr_writer,""," ","",opts__19134__auto__,keyval__19136__auto__);
});})(this__19132__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19133__auto__,pr_pair__19135__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__19134__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27189){
var self__ = this;
var G__27189__$1 = this;
return (new cljs.core.RecordIter((0),G__27189__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19116__auto__){
var self__ = this;
var this__19116__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19112__auto__){
var self__ = this;
var this__19112__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19122__auto__){
var self__ = this;
var this__19122__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19113__auto__){
var self__ = this;
var this__19113__auto____$1 = this;
var h__18931__auto__ = self__.__hash;
if(!((h__18931__auto__ == null))){
return h__18931__auto__;
} else {
var h__18931__auto____$1 = cljs.core.hash_imap.call(null,this__19113__auto____$1);
self__.__hash = h__18931__auto____$1;

return h__18931__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19114__auto__,other__19115__auto__){
var self__ = this;
var this__19114__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18484__auto__ = other__19115__auto__;
if(cljs.core.truth_(and__18484__auto__)){
var and__18484__auto____$1 = (this__19114__auto____$1.constructor === other__19115__auto__.constructor);
if(and__18484__auto____$1){
return cljs.core.equiv_map.call(null,this__19114__auto____$1,other__19115__auto__);
} else {
return and__18484__auto____$1;
}
} else {
return and__18484__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19127__auto__,k__19128__auto__){
var self__ = this;
var this__19127__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__19128__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19127__auto____$1),self__.__meta),k__19128__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19128__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19125__auto__,k__19126__auto__,G__27189){
var self__ = this;
var this__19125__auto____$1 = this;
var pred__27193 = cljs.core.keyword_identical_QMARK_;
var expr__27194 = k__19126__auto__;
if(cljs.core.truth_(pred__27193.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__27194))){
return (new devcards.core.EdnLikeOptions(G__27189,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19126__auto__,G__27189),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19130__auto__){
var self__ = this;
var this__19130__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19117__auto__,G__27189){
var self__ = this;
var this__19117__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__27189,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19123__auto__,entry__19124__auto__){
var self__ = this;
var this__19123__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19124__auto__)){
return cljs.core._assoc.call(null,this__19123__auto____$1,cljs.core._nth.call(null,entry__19124__auto__,(0)),cljs.core._nth.call(null,entry__19124__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19123__auto____$1,entry__19124__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__19152__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__19152__auto__,writer__19153__auto__){
return cljs.core._write.call(null,writer__19153__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__27191){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__27191),null,cljs.core.dissoc.call(null,G__27191,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__18484__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x));
if(and__18484__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
} else {
return and__18484__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || (main_obj.devcards$core$IDevcardOptions$))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_.call(null,main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__27208 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__27208 == null))){
if((false) || (G__27208.devcards$core$IDevcard$)){
return true;
} else {
if((!G__27208.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__27208);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__27208);
}
})()){
return devcards.core._devcard.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors.call(null,devcards.core._devcard_options.call(null,devcards.core.coerce_to_devcards_options.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
return React.createElement(devcards.core.DomComponent,{"node_fn": node_fn, "data_atom": data_atom});
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.call(null,devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742)], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__27211 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__27211__$1 = ((((!((map__27211 == null)))?((((map__27211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27211):map__27211);
var history = cljs.core.get.call(null,map__27211__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__27211__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return ((pointer + (1)) < cljs.core.count.call(null,history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__27215 = cljs.core.deref.call(null,history_atom);
var map__27215__$1 = ((((!((map__27215 == null)))?((((map__27215.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27215.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27215):map__27215);
var history = cljs.core.get.call(null,map__27215__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__27215__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_back.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer + (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer + (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__27219 = cljs.core.deref.call(null,history_atom);
var map__27219__$1 = ((((!((map__27219 == null)))?((((map__27219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27219):map__27219);
var history = cljs.core.get.call(null,map__27219__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__27219__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer - (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer - (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__27223 = cljs.core.deref.call(null,history_atom);
var map__27223__$1 = ((((!((map__27223 == null)))?((((map__27223.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27223.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27223):map__27223);
var history = cljs.core.get.call(null,map__27223__$1,new cljs.core.Keyword(null,"history","history",-247395220));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.first.call(null,history));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = React.createClass({"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-history-runner-","devcards-history-runner-",-1709703043,null)))].join(''), "history_atom": cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], null))};
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(function (){var x__19330__auto__ = cljs.core.deref.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19330__auto__);
})());
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
if(cljs.core.truth_((function (){var and__18484__auto__ = data_atom;
if(cljs.core.truth_(and__18484__auto__)){
return id;
} else {
return and__18484__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_.call(null,this$))){
return cljs.core.swap_BANG_.call(null,history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__27225){
var map__27226 = p__27225;
var map__27226__$1 = ((((!((map__27226 == null)))?((((map__27226.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27226.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27226):map__27226);
var ha = map__27226__$1;
var pointer = cljs.core.get.call(null,map__27226__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__27226__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__27226__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
} else {
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var abridged_hist = cljs.core.drop.call(null,pointer,history);
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,abridged_hist))){
return cljs.core.cons.call(null,n,abridged_hist);
} else {
return abridged_hist;
}
})(),new cljs.core.Keyword(null,"pointer","pointer",85071187),(0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var hist = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,history_atom));
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,hist))){
return cljs.core.cons.call(null,n,hist);
} else {
return hist;
}
})(),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__18496__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())){
return React.createElement("div",{"style": {"display": (cljs.core.truth_((function (){var or__18496__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())?"block":"none")}, "className": "com-rigsomelight-devcards-history-control-bar"},(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_back.call(null,this$))?"visible":"hidden")}, "href": "#", "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-left"},"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
return cljs.core.reset_BANG_.call(null,data_atom,cljs.core.deref.call(null,data_atom));
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-stop"},"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-right"},"")));
})(),(function (){var listener = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": listener, "onTouchEnd": listener},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-small-arrow"}),React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-small-arrow"}),React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-block"})));
})());
} else {
return null;
}
})});
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
return React.createElement(devcards.core.HistoryComponent,{"data_atom": data_atom, "key": "devcards-history-control-bar"});
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206)], null),cljs.core.conj,cljs.core.merge.call(null,cljs.core.select_keys.call(null,cljs.test.get_current_env.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)),m));
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463)], null),(function (m){
devcards.core.collect_test.call(null,m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_27241 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_27241;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__19421__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19422__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19423__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19424__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19425__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19425__auto__,method_table__19421__auto__,prefer_table__19422__auto__,method_cache__19423__auto__,cached_hierarchy__19424__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs27242 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27242))?sablono.interpreter.attributes.call(null,attrs27242):null),((cljs.core.map_QMARK_.call(null,attrs27242))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27242)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__27243,body){
var map__27247 = p__27243;
var map__27247__$1 = ((((!((map__27247 == null)))?((((map__27247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27247):map__27247);
var message = cljs.core.get.call(null,map__27247__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs27249 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs27249))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs27249)):{"className": "com-rigsomelight-devcards-test-message"}),((cljs.core.map_QMARK_.call(null,attrs27249))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27249)], null)));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__27250){
var map__27258 = p__27250;
var map__27258__$1 = ((((!((map__27258 == null)))?((((map__27258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27258):map__27258);
var m = map__27258__$1;
var expected = cljs.core.get.call(null,map__27258__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__27258__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var type = cljs.core.get.call(null,map__27258__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return devcards.core.display_message.call(null,m,(function (){var attrs27260 = React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"});
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27260))?sablono.interpreter.attributes.call(null,attrs27260):null),((cljs.core.map_QMARK_.call(null,attrs27260))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",{"style": {"marginTop": "5px"}},React.createElement("div",{"style": {"position": "absolute", "fontSize": "0.9em"}},"\u25B6"),React.createElement("div",{"style": {"marginLeft": "20px"}},sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"})))):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27260),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",{"style": {"marginTop": "5px"}},React.createElement("div",{"style": {"position": "absolute", "fontSize": "0.9em"}},"\u25B6"),React.createElement("div",{"style": {"marginLeft": "20px"}},sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"})))):null))], null)));
})());
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs27267 = [cljs.core.str(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs27267))?sablono.interpreter.attributes.call(null,attrs27267):null),((cljs.core.map_QMARK_.call(null,attrs27267))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27267)], null)));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs27268 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27268))?sablono.interpreter.attributes.call(null,attrs27268):null),((cljs.core.map_QMARK_.call(null,attrs27268))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27268)], null)));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__27269){
var map__27270 = p__27269;
var map__27270__$1 = ((((!((map__27270 == null)))?((((map__27270.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27270.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27270):map__27270);
var testing_contexts = cljs.core.get.call(null,map__27270__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs27272 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map_indexed.call(null,((function (map__27270,map__27270__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__27270,map__27270__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),(function (){var x__19330__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(-1)], null),cljs.core.first.call(null,testing_contexts)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19330__auto__);
})()));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27272))?sablono.interpreter.attributes.call(null,attrs27272):null),((cljs.core.map_QMARK_.call(null,attrs27272))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27272)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.call(null,t,i),new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs27281 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__27282,p__27283){
var map__27284 = p__27282;
var map__27284__$1 = ((((!((map__27284 == null)))?((((map__27284.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27284.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27284):map__27284);
var last_context = cljs.core.get.call(null,map__27284__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__27284__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
var vec__27285 = p__27283;
var i = cljs.core.nth.call(null,vec__27285,(0),null);
var t = cljs.core.nth.call(null,vec__27285,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = (function (){var x__19330__auto__ = devcards.core.test_renderer.call(null,t,i);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19330__auto__);
})();
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null))),i),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.reverse.call(null,tests))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27281))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs27281)):{"className": "com-rigsomelight-devcards-test-card"}),((cljs.core.map_QMARK_.call(null,attrs27281))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27281)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__27301){
var map__27302 = p__27301;
var map__27302__$1 = ((((!((map__27302 == null)))?((((map__27302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27302):map__27302);
var type = cljs.core.get.call(null,map__27302__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__27300 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__27300__$1 = ((((!((map__27300 == null)))?((((map__27300.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27300.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27300):map__27300);
var fail = cljs.core.get.call(null,map__27300__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__27300__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__27300__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"},React.createElement("div",{"className": "com-rigsomelight-devcards-panel-heading"},React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__27300,map__27300__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__27300,map__27300__$1,fail,pass,error,error__$1))
)},sablono.interpreter.interpret.call(null,(cljs.core.truth_(path)?[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join(''):null))),React.createElement("button",{"style": {"float": "right", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__27300,map__27300__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": cljs.core.identity});
});})(error_QMARK_,tests,some_tests,total_tests,map__27300,map__27300__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,total_tests)),sablono.interpreter.interpret.call(null,((((fail + error__$1) === (0)))?null:React.createElement("button",{"style": {"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__27300,map__27300__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__27300,map__27300__$1,fail,pass,error,error__$1){
return (function (p__27305){
var map__27306 = p__27305;
var map__27306__$1 = ((((!((map__27306 == null)))?((((map__27306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27306):map__27306);
var type = cljs.core.get.call(null,map__27306__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__27300,map__27300__$1,fail,pass,error,error__$1))
});
});})(error_QMARK_,tests,some_tests,total_tests,map__27300,map__27300__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,[cljs.core.str((fail + error__$1))].join(''))))),sablono.interpreter.interpret.call(null,((((pass == null)) || ((pass === (0))))?null:React.createElement("button",{"style": {"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__27300,map__27300__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__27300,map__27300__$1,fail,pass,error,error__$1){
return (function (p__27308){
var map__27309 = p__27308;
var map__27309__$1 = ((((!((map__27309 == null)))?((((map__27309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27309):map__27309);
var type = cljs.core.get.call(null,map__27309__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__27300,map__27300__$1,fail,pass,error,error__$1))
});
});})(error_QMARK_,tests,some_tests,total_tests,map__27300,map__27300__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,pass))))),React.createElement("div",{"className": devcards.system.devcards_rendered_card_class},sablono.interpreter.interpret.call(null,devcards.core.layout_tests.call(null,cljs.core.filter.call(null,(function (){var or__18496__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return cljs.core.identity;
}
})(),tests)))));
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.call(null);
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.call(null);
var test_env = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
cljs.test.set_env_BANG_.call(null,test_env);

var tests = cljs.core.concat.call(null,test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.call(null,out,cljs.test.get_current_env.call(null));

return cljs.core.async.close_BANG_.call(null,out);
});})(out,test_env))
], null));
cljs.core.prn.call(null,"Running tests!!");

cljs.test.run_block.call(null,tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__22469__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto__){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto__){
return (function (state_27399){
var state_val_27400 = (state_27399[(1)]);
if((state_val_27400 === (7))){
var state_27399__$1 = state_27399;
var statearr_27401_27450 = state_27399__$1;
(statearr_27401_27450[(2)] = false);

(statearr_27401_27450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (20))){
var inst_27338 = (state_27399[(7)]);
var inst_27357 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27338);
var state_27399__$1 = state_27399;
var statearr_27402_27451 = state_27399__$1;
(statearr_27402_27451[(2)] = inst_27357);

(statearr_27402_27451[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (27))){
var inst_27374 = (state_27399[(8)]);
var inst_27362 = (state_27399[(9)]);
var inst_27378 = inst_27362.call(null,inst_27374);
var state_27399__$1 = state_27399;
var statearr_27403_27452 = state_27399__$1;
(statearr_27403_27452[(2)] = inst_27378);

(statearr_27403_27452[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (1))){
var state_27399__$1 = state_27399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27399__$1,(2),devcards.core.test_channel);
} else {
if((state_val_27400 === (24))){
var state_27399__$1 = state_27399;
var statearr_27404_27453 = state_27399__$1;
(statearr_27404_27453[(2)] = null);

(statearr_27404_27453[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (4))){
var state_27399__$1 = state_27399;
var statearr_27405_27454 = state_27399__$1;
(statearr_27405_27454[(2)] = false);

(statearr_27405_27454[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (15))){
var state_27399__$1 = state_27399;
var statearr_27406_27455 = state_27399__$1;
(statearr_27406_27455[(2)] = false);

(statearr_27406_27455[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (21))){
var inst_27338 = (state_27399[(7)]);
var state_27399__$1 = state_27399;
var statearr_27407_27456 = state_27399__$1;
(statearr_27407_27456[(2)] = inst_27338);

(statearr_27407_27456[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (13))){
var inst_27397 = (state_27399[(2)]);
var state_27399__$1 = state_27399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27399__$1,inst_27397);
} else {
if((state_val_27400 === (22))){
var inst_27361 = (state_27399[(10)]);
var inst_27360 = (state_27399[(2)]);
var inst_27361__$1 = cljs.core.get.call(null,inst_27360,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_27362 = cljs.core.get.call(null,inst_27360,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_27399__$1 = (function (){var statearr_27408 = state_27399;
(statearr_27408[(9)] = inst_27362);

(statearr_27408[(10)] = inst_27361__$1);

return statearr_27408;
})();
if(cljs.core.truth_(inst_27361__$1)){
var statearr_27409_27457 = state_27399__$1;
(statearr_27409_27457[(1)] = (23));

} else {
var statearr_27410_27458 = state_27399__$1;
(statearr_27410_27458[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (29))){
var inst_27388 = (state_27399[(2)]);
var inst_27389 = cljs.test.clear_env_BANG_.call(null);
var state_27399__$1 = (function (){var statearr_27411 = state_27399;
(statearr_27411[(11)] = inst_27389);

(statearr_27411[(12)] = inst_27388);

return statearr_27411;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27399__$1,(30),devcards.core.test_channel);
} else {
if((state_val_27400 === (6))){
var state_27399__$1 = state_27399;
var statearr_27412_27459 = state_27399__$1;
(statearr_27412_27459[(2)] = true);

(statearr_27412_27459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (28))){
var inst_27362 = (state_27399[(9)]);
var inst_27380 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_27381 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_27382 = cljs.core.PersistentHashMap.fromArrays(inst_27380,inst_27381);
var inst_27383 = devcards.core.collect_test.call(null,inst_27382);
var inst_27384 = cljs.test.get_current_env.call(null);
var inst_27385 = cljs.core.assoc.call(null,inst_27384,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_27386 = inst_27362.call(null,inst_27385);
var state_27399__$1 = (function (){var statearr_27413 = state_27399;
(statearr_27413[(13)] = inst_27383);

return statearr_27413;
})();
var statearr_27414_27460 = state_27399__$1;
(statearr_27414_27460[(2)] = inst_27386);

(statearr_27414_27460[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (25))){
var inst_27395 = (state_27399[(2)]);
var state_27399__$1 = state_27399;
var statearr_27415_27461 = state_27399__$1;
(statearr_27415_27461[(2)] = inst_27395);

(statearr_27415_27461[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (17))){
var state_27399__$1 = state_27399;
var statearr_27416_27462 = state_27399__$1;
(statearr_27416_27462[(2)] = true);

(statearr_27416_27462[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (3))){
var inst_27315 = (state_27399[(14)]);
var inst_27320 = inst_27315.cljs$lang$protocol_mask$partition0$;
var inst_27321 = (inst_27320 & (64));
var inst_27322 = inst_27315.cljs$core$ISeq$;
var inst_27323 = (inst_27321) || (inst_27322);
var state_27399__$1 = state_27399;
if(cljs.core.truth_(inst_27323)){
var statearr_27417_27463 = state_27399__$1;
(statearr_27417_27463[(1)] = (6));

} else {
var statearr_27418_27464 = state_27399__$1;
(statearr_27418_27464[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (12))){
var inst_27338 = (state_27399[(7)]);
var inst_27342 = (inst_27338 == null);
var inst_27343 = cljs.core.not.call(null,inst_27342);
var state_27399__$1 = state_27399;
if(inst_27343){
var statearr_27419_27465 = state_27399__$1;
(statearr_27419_27465[(1)] = (14));

} else {
var statearr_27420_27466 = state_27399__$1;
(statearr_27420_27466[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (2))){
var inst_27315 = (state_27399[(14)]);
var inst_27315__$1 = (state_27399[(2)]);
var inst_27317 = (inst_27315__$1 == null);
var inst_27318 = cljs.core.not.call(null,inst_27317);
var state_27399__$1 = (function (){var statearr_27421 = state_27399;
(statearr_27421[(14)] = inst_27315__$1);

return statearr_27421;
})();
if(inst_27318){
var statearr_27422_27467 = state_27399__$1;
(statearr_27422_27467[(1)] = (3));

} else {
var statearr_27423_27468 = state_27399__$1;
(statearr_27423_27468[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (23))){
var inst_27367 = (state_27399[(15)]);
var inst_27361 = (state_27399[(10)]);
var inst_27367__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_27368 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27369 = devcards.core.run_card_tests.call(null,inst_27361);
var inst_27370 = [inst_27369,inst_27367__$1];
var inst_27371 = (new cljs.core.PersistentVector(null,2,(5),inst_27368,inst_27370,null));
var state_27399__$1 = (function (){var statearr_27424 = state_27399;
(statearr_27424[(15)] = inst_27367__$1);

return statearr_27424;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27399__$1,(26),inst_27371);
} else {
if((state_val_27400 === (19))){
var inst_27352 = (state_27399[(2)]);
var state_27399__$1 = state_27399;
var statearr_27425_27469 = state_27399__$1;
(statearr_27425_27469[(2)] = inst_27352);

(statearr_27425_27469[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (11))){
var inst_27315 = (state_27399[(14)]);
var inst_27335 = (state_27399[(2)]);
var inst_27336 = cljs.core.get.call(null,inst_27335,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_27337 = cljs.core.get.call(null,inst_27335,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_27338 = inst_27315;
var state_27399__$1 = (function (){var statearr_27426 = state_27399;
(statearr_27426[(16)] = inst_27336);

(statearr_27426[(7)] = inst_27338);

(statearr_27426[(17)] = inst_27337);

return statearr_27426;
})();
var statearr_27427_27470 = state_27399__$1;
(statearr_27427_27470[(2)] = null);

(statearr_27427_27470[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (9))){
var inst_27315 = (state_27399[(14)]);
var inst_27332 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27315);
var state_27399__$1 = state_27399;
var statearr_27428_27471 = state_27399__$1;
(statearr_27428_27471[(2)] = inst_27332);

(statearr_27428_27471[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (5))){
var inst_27330 = (state_27399[(2)]);
var state_27399__$1 = state_27399;
if(cljs.core.truth_(inst_27330)){
var statearr_27429_27472 = state_27399__$1;
(statearr_27429_27472[(1)] = (9));

} else {
var statearr_27430_27473 = state_27399__$1;
(statearr_27430_27473[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (14))){
var inst_27338 = (state_27399[(7)]);
var inst_27345 = inst_27338.cljs$lang$protocol_mask$partition0$;
var inst_27346 = (inst_27345 & (64));
var inst_27347 = inst_27338.cljs$core$ISeq$;
var inst_27348 = (inst_27346) || (inst_27347);
var state_27399__$1 = state_27399;
if(cljs.core.truth_(inst_27348)){
var statearr_27431_27474 = state_27399__$1;
(statearr_27431_27474[(1)] = (17));

} else {
var statearr_27432_27475 = state_27399__$1;
(statearr_27432_27475[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (26))){
var inst_27367 = (state_27399[(15)]);
var inst_27373 = (state_27399[(2)]);
var inst_27374 = cljs.core.nth.call(null,inst_27373,(0),null);
var inst_27375 = cljs.core.nth.call(null,inst_27373,(1),null);
var inst_27376 = cljs.core.not_EQ_.call(null,inst_27375,inst_27367);
var state_27399__$1 = (function (){var statearr_27433 = state_27399;
(statearr_27433[(8)] = inst_27374);

return statearr_27433;
})();
if(inst_27376){
var statearr_27434_27476 = state_27399__$1;
(statearr_27434_27476[(1)] = (27));

} else {
var statearr_27435_27477 = state_27399__$1;
(statearr_27435_27477[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (16))){
var inst_27355 = (state_27399[(2)]);
var state_27399__$1 = state_27399;
if(cljs.core.truth_(inst_27355)){
var statearr_27436_27478 = state_27399__$1;
(statearr_27436_27478[(1)] = (20));

} else {
var statearr_27437_27479 = state_27399__$1;
(statearr_27437_27479[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (30))){
var inst_27391 = (state_27399[(2)]);
var inst_27338 = inst_27391;
var state_27399__$1 = (function (){var statearr_27438 = state_27399;
(statearr_27438[(7)] = inst_27338);

return statearr_27438;
})();
var statearr_27439_27480 = state_27399__$1;
(statearr_27439_27480[(2)] = null);

(statearr_27439_27480[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (10))){
var inst_27315 = (state_27399[(14)]);
var state_27399__$1 = state_27399;
var statearr_27440_27481 = state_27399__$1;
(statearr_27440_27481[(2)] = inst_27315);

(statearr_27440_27481[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (18))){
var state_27399__$1 = state_27399;
var statearr_27441_27482 = state_27399__$1;
(statearr_27441_27482[(2)] = false);

(statearr_27441_27482[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (8))){
var inst_27327 = (state_27399[(2)]);
var state_27399__$1 = state_27399;
var statearr_27442_27483 = state_27399__$1;
(statearr_27442_27483[(2)] = inst_27327);

(statearr_27442_27483[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22469__auto__))
;
return ((function (switch__22357__auto__,c__22469__auto__){
return (function() {
var devcards$core$state_machine__22358__auto__ = null;
var devcards$core$state_machine__22358__auto____0 = (function (){
var statearr_27446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27446[(0)] = devcards$core$state_machine__22358__auto__);

(statearr_27446[(1)] = (1));

return statearr_27446;
});
var devcards$core$state_machine__22358__auto____1 = (function (state_27399){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_27399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e27447){if((e27447 instanceof Object)){
var ex__22361__auto__ = e27447;
var statearr_27448_27484 = state_27399;
(statearr_27448_27484[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27485 = state_27399;
state_27399 = G__27485;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
devcards$core$state_machine__22358__auto__ = function(state_27399){
switch(arguments.length){
case 0:
return devcards$core$state_machine__22358__auto____0.call(this);
case 1:
return devcards$core$state_machine__22358__auto____1.call(this,state_27399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__22358__auto____0;
devcards$core$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__22358__auto____1;
return devcards$core$state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto__))
})();
var state__22471__auto__ = (function (){var statearr_27449 = f__22470__auto__.call(null);
(statearr_27449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto__);

return statearr_27449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto__))
);

return c__22469__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState({"test_results": results});
})], null));
});
var base__26202__auto___27490 = {"componentWillMount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805));
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__4657__auto__ = (next_props[cljs.core.name.call(null,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805))]);
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var test_summary = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"test_results","test_results",1062111317));
var path = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"path","path",-188191168));
return devcards.core.render_tests.call(null,this$,path,test_summary);
})};
if(typeof devcards.core.TestDevcard !== 'undefined'){
} else {
devcards.core.TestDevcard = React.createClass(base__26202__auto___27490);
}

var seq__27486_27491 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__27487_27492 = null;
var count__27488_27493 = (0);
var i__27489_27494 = (0);
while(true){
if((i__27489_27494 < count__27488_27493)){
var property__26203__auto___27495 = cljs.core._nth.call(null,chunk__27487_27492,i__27489_27494);
if(cljs.core.truth_((base__26202__auto___27490[property__26203__auto___27495]))){
(devcards.core.TestDevcard.prototype[property__26203__auto___27495] = (base__26202__auto___27490[property__26203__auto___27495]));
} else {
}

var G__27496 = seq__27486_27491;
var G__27497 = chunk__27487_27492;
var G__27498 = count__27488_27493;
var G__27499 = (i__27489_27494 + (1));
seq__27486_27491 = G__27496;
chunk__27487_27492 = G__27497;
count__27488_27493 = G__27498;
i__27489_27494 = G__27499;
continue;
} else {
var temp__4657__auto___27500 = cljs.core.seq.call(null,seq__27486_27491);
if(temp__4657__auto___27500){
var seq__27486_27501__$1 = temp__4657__auto___27500;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27486_27501__$1)){
var c__19307__auto___27502 = cljs.core.chunk_first.call(null,seq__27486_27501__$1);
var G__27503 = cljs.core.chunk_rest.call(null,seq__27486_27501__$1);
var G__27504 = c__19307__auto___27502;
var G__27505 = cljs.core.count.call(null,c__19307__auto___27502);
var G__27506 = (0);
seq__27486_27491 = G__27503;
chunk__27487_27492 = G__27504;
count__27488_27493 = G__27505;
i__27489_27494 = G__27506;
continue;
} else {
var property__26203__auto___27507 = cljs.core.first.call(null,seq__27486_27501__$1);
if(cljs.core.truth_((base__26202__auto___27490[property__26203__auto___27507]))){
(devcards.core.TestDevcard.prototype[property__26203__auto___27507] = (base__26202__auto___27490[property__26203__auto___27507]));
} else {
}

var G__27508 = cljs.core.next.call(null,seq__27486_27501__$1);
var G__27509 = null;
var G__27510 = (0);
var G__27511 = (0);
seq__27486_27491 = G__27508;
chunk__27487_27492 = G__27509;
count__27488_27493 = G__27510;
i__27489_27494 = G__27511;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__19578__auto__ = [];
var len__19571__auto___27516 = arguments.length;
var i__19572__auto___27517 = (0);
while(true){
if((i__19572__auto___27517 < len__19571__auto___27516)){
args__19578__auto__.push((arguments[i__19572__auto___27517]));

var G__27518 = (i__19572__auto___27517 + (1));
i__19572__auto___27517 = G__27518;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core27513 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core27513 = (function (test_thunks,meta27514){
this.test_thunks = test_thunks;
this.meta27514 = meta27514;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core27513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27515,meta27514__$1){
var self__ = this;
var _27515__$1 = this;
return (new devcards.core.t_devcards$core27513(self__.test_thunks,meta27514__$1));
});

devcards.core.t_devcards$core27513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27515){
var self__ = this;
var _27515__$1 = this;
return self__.meta27514;
});

devcards.core.t_devcards$core27513.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core27513.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,{"test_thunks": self__.test_thunks, "path": path});
});

devcards.core.t_devcards$core27513.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta27514","meta27514",1531077650,null)], null);
});

devcards.core.t_devcards$core27513.cljs$lang$type = true;

devcards.core.t_devcards$core27513.cljs$lang$ctorStr = "devcards.core/t_devcards$core27513";

devcards.core.t_devcards$core27513.cljs$lang$ctorPrWriter = (function (this__19102__auto__,writer__19103__auto__,opt__19104__auto__){
return cljs.core._write.call(null,writer__19103__auto__,"devcards.core/t_devcards$core27513");
});

devcards.core.__GT_t_devcards$core27513 = (function devcards$core$__GT_t_devcards$core27513(test_thunks__$1,meta27514){
return (new devcards.core.t_devcards$core27513(test_thunks__$1,meta27514));
});

}

return (new devcards.core.t_devcards$core27513(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq27512){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27512));
});

devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.call(null,cljs.core.aget,goog.global,cljs.core.concat.call(null,clojure.string.split.call(null,cljs.core.name.call(null,munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state));
if(cljs.core.truth_(temp__4657__auto__)){
var cards = temp__4657__auto__;
var temp__4657__auto____$1 = cljs.core.get_in.call(null,cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,ns_symbol)], null));
if(cljs.core.truth_(temp__4657__auto____$1)){
var card = temp__4657__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_.call(null,devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter.call(null,cljs.core.name.call(null,ns_symbol)));
if(cljs.core.truth_(temp__4657__auto__)){
var base_card_options = temp__4657__auto__;
cljs.core.println.call(null,"Adding base card options!",cljs.core.prn_str.call(null,base_card_options));

return cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),((function (base_card_options,temp__4657__auto__){
return (function (opts){
return cljs.core.merge.call(null,opts,base_card_options);
});})(base_card_options,temp__4657__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str(React.renderToString((function (){var attrs27520 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27520))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs27520)):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),((cljs.core.map_QMARK_.call(null,attrs27520))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27520)], null)));
})())),cljs.core.str("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
return React.render((function (){var attrs27522 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27522))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs27522)):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),((cljs.core.map_QMARK_.call(null,attrs27522))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27522)], null)));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__22469__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto__){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto__){
return (function (state_27552){
var state_val_27553 = (state_27552[(1)]);
if((state_val_27553 === (1))){
var inst_27543 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_27552__$1 = state_27552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27552__$1,(2),inst_27543);
} else {
if((state_val_27553 === (2))){
var inst_27545 = (state_27552[(2)]);
var inst_27546 = cljs.core.async.timeout.call(null,(100));
var state_27552__$1 = (function (){var statearr_27554 = state_27552;
(statearr_27554[(7)] = inst_27545);

return statearr_27554;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27552__$1,(3),inst_27546);
} else {
if((state_val_27553 === (3))){
var inst_27548 = (state_27552[(2)]);
var inst_27549 = (function (){return ((function (inst_27548,state_val_27553,c__22469__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_27548,state_val_27553,c__22469__auto__))
})();
var inst_27550 = setTimeout(inst_27549,(0));
var state_27552__$1 = (function (){var statearr_27555 = state_27552;
(statearr_27555[(8)] = inst_27548);

return statearr_27555;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27552__$1,inst_27550);
} else {
return null;
}
}
}
});})(c__22469__auto__))
;
return ((function (switch__22357__auto__,c__22469__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__22358__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__22358__auto____0 = (function (){
var statearr_27559 = [null,null,null,null,null,null,null,null,null];
(statearr_27559[(0)] = devcards$core$mount_namespace_$_state_machine__22358__auto__);

(statearr_27559[(1)] = (1));

return statearr_27559;
});
var devcards$core$mount_namespace_$_state_machine__22358__auto____1 = (function (state_27552){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_27552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e27560){if((e27560 instanceof Object)){
var ex__22361__auto__ = e27560;
var statearr_27561_27563 = state_27552;
(statearr_27561_27563[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27564 = state_27552;
state_27552 = G__27564;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__22358__auto__ = function(state_27552){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__22358__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__22358__auto____1.call(this,state_27552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__22358__auto____0;
devcards$core$mount_namespace_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__22358__auto____1;
return devcards$core$mount_namespace_$_state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto__))
})();
var state__22471__auto__ = (function (){var statearr_27562 = f__22470__auto__.call(null);
(statearr_27562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto__);

return statearr_27562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto__))
);

return c__22469__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=core.js.map?rel=1466621022298