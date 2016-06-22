// Compiled by ClojureScript 1.9.88 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__31230 = cljs.core._EQ_;
var expr__31231 = (function (){var or__18496__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e31234){if((e31234 instanceof Error)){
var e = e31234;
return false;
} else {
throw e31234;

}
}})();
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__31230.call(null,"true",expr__31231))){
return true;
} else {
if(cljs.core.truth_(pred__31230.call(null,"false",expr__31231))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__31231)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e31236){if((e31236 instanceof Error)){
var e = e31236;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e31236;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19578__auto__ = [];
var len__19571__auto___31238 = arguments.length;
var i__19572__auto___31239 = (0);
while(true){
if((i__19572__auto___31239 < len__19571__auto___31238)){
args__19578__auto__.push((arguments[i__19572__auto___31239]));

var G__31240 = (i__19572__auto___31239 + (1));
i__19572__auto___31239 = G__31240;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq31237){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31237));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31241){
var map__31244 = p__31241;
var map__31244__$1 = ((((!((map__31244 == null)))?((((map__31244.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31244.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31244):map__31244);
var message = cljs.core.get.call(null,map__31244__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31244__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18496__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18484__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18484__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18484__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22469__auto___31406 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto___31406,ch){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto___31406,ch){
return (function (state_31375){
var state_val_31376 = (state_31375[(1)]);
if((state_val_31376 === (7))){
var inst_31371 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
var statearr_31377_31407 = state_31375__$1;
(statearr_31377_31407[(2)] = inst_31371);

(statearr_31377_31407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (1))){
var state_31375__$1 = state_31375;
var statearr_31378_31408 = state_31375__$1;
(statearr_31378_31408[(2)] = null);

(statearr_31378_31408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (4))){
var inst_31328 = (state_31375[(7)]);
var inst_31328__$1 = (state_31375[(2)]);
var state_31375__$1 = (function (){var statearr_31379 = state_31375;
(statearr_31379[(7)] = inst_31328__$1);

return statearr_31379;
})();
if(cljs.core.truth_(inst_31328__$1)){
var statearr_31380_31409 = state_31375__$1;
(statearr_31380_31409[(1)] = (5));

} else {
var statearr_31381_31410 = state_31375__$1;
(statearr_31381_31410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (15))){
var inst_31335 = (state_31375[(8)]);
var inst_31350 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31335);
var inst_31351 = cljs.core.first.call(null,inst_31350);
var inst_31352 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31351);
var inst_31353 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_31352)].join('');
var inst_31354 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31353);
var state_31375__$1 = state_31375;
var statearr_31382_31411 = state_31375__$1;
(statearr_31382_31411[(2)] = inst_31354);

(statearr_31382_31411[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (13))){
var inst_31359 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
var statearr_31383_31412 = state_31375__$1;
(statearr_31383_31412[(2)] = inst_31359);

(statearr_31383_31412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (6))){
var state_31375__$1 = state_31375;
var statearr_31384_31413 = state_31375__$1;
(statearr_31384_31413[(2)] = null);

(statearr_31384_31413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (17))){
var inst_31357 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
var statearr_31385_31414 = state_31375__$1;
(statearr_31385_31414[(2)] = inst_31357);

(statearr_31385_31414[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (3))){
var inst_31373 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31375__$1,inst_31373);
} else {
if((state_val_31376 === (12))){
var inst_31334 = (state_31375[(9)]);
var inst_31348 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31334,opts);
var state_31375__$1 = state_31375;
if(cljs.core.truth_(inst_31348)){
var statearr_31386_31415 = state_31375__$1;
(statearr_31386_31415[(1)] = (15));

} else {
var statearr_31387_31416 = state_31375__$1;
(statearr_31387_31416[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (2))){
var state_31375__$1 = state_31375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31375__$1,(4),ch);
} else {
if((state_val_31376 === (11))){
var inst_31335 = (state_31375[(8)]);
var inst_31340 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31341 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31335);
var inst_31342 = cljs.core.async.timeout.call(null,(1000));
var inst_31343 = [inst_31341,inst_31342];
var inst_31344 = (new cljs.core.PersistentVector(null,2,(5),inst_31340,inst_31343,null));
var state_31375__$1 = state_31375;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31375__$1,(14),inst_31344);
} else {
if((state_val_31376 === (9))){
var inst_31335 = (state_31375[(8)]);
var inst_31361 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31362 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31335);
var inst_31363 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31362);
var inst_31364 = [cljs.core.str("Not loading: "),cljs.core.str(inst_31363)].join('');
var inst_31365 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31364);
var state_31375__$1 = (function (){var statearr_31388 = state_31375;
(statearr_31388[(10)] = inst_31361);

return statearr_31388;
})();
var statearr_31389_31417 = state_31375__$1;
(statearr_31389_31417[(2)] = inst_31365);

(statearr_31389_31417[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (5))){
var inst_31328 = (state_31375[(7)]);
var inst_31330 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31331 = (new cljs.core.PersistentArrayMap(null,2,inst_31330,null));
var inst_31332 = (new cljs.core.PersistentHashSet(null,inst_31331,null));
var inst_31333 = figwheel.client.focus_msgs.call(null,inst_31332,inst_31328);
var inst_31334 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31333);
var inst_31335 = cljs.core.first.call(null,inst_31333);
var inst_31336 = figwheel.client.autoload_QMARK_.call(null);
var state_31375__$1 = (function (){var statearr_31390 = state_31375;
(statearr_31390[(9)] = inst_31334);

(statearr_31390[(8)] = inst_31335);

return statearr_31390;
})();
if(cljs.core.truth_(inst_31336)){
var statearr_31391_31418 = state_31375__$1;
(statearr_31391_31418[(1)] = (8));

} else {
var statearr_31392_31419 = state_31375__$1;
(statearr_31392_31419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (14))){
var inst_31346 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
var statearr_31393_31420 = state_31375__$1;
(statearr_31393_31420[(2)] = inst_31346);

(statearr_31393_31420[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (16))){
var state_31375__$1 = state_31375;
var statearr_31394_31421 = state_31375__$1;
(statearr_31394_31421[(2)] = null);

(statearr_31394_31421[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (10))){
var inst_31367 = (state_31375[(2)]);
var state_31375__$1 = (function (){var statearr_31395 = state_31375;
(statearr_31395[(11)] = inst_31367);

return statearr_31395;
})();
var statearr_31396_31422 = state_31375__$1;
(statearr_31396_31422[(2)] = null);

(statearr_31396_31422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (8))){
var inst_31334 = (state_31375[(9)]);
var inst_31338 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31334,opts);
var state_31375__$1 = state_31375;
if(cljs.core.truth_(inst_31338)){
var statearr_31397_31423 = state_31375__$1;
(statearr_31397_31423[(1)] = (11));

} else {
var statearr_31398_31424 = state_31375__$1;
(statearr_31398_31424[(1)] = (12));

}

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
});})(c__22469__auto___31406,ch))
;
return ((function (switch__22357__auto__,c__22469__auto___31406,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22358__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22358__auto____0 = (function (){
var statearr_31402 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31402[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22358__auto__);

(statearr_31402[(1)] = (1));

return statearr_31402;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22358__auto____1 = (function (state_31375){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_31375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e31403){if((e31403 instanceof Object)){
var ex__22361__auto__ = e31403;
var statearr_31404_31425 = state_31375;
(statearr_31404_31425[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31426 = state_31375;
state_31375 = G__31426;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22358__auto__ = function(state_31375){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22358__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22358__auto____1.call(this,state_31375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22358__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22358__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto___31406,ch))
})();
var state__22471__auto__ = (function (){var statearr_31405 = f__22470__auto__.call(null);
(statearr_31405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___31406);

return statearr_31405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto___31406,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31427_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31427_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31434 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31434){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_31432 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_31433 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31433;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31432;
}}catch (e31431){if((e31431 instanceof Error)){
var e = e31431;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31434], null));
} else {
var e = e31431;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31434))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31435){
var map__31444 = p__31435;
var map__31444__$1 = ((((!((map__31444 == null)))?((((map__31444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31444):map__31444);
var opts = map__31444__$1;
var build_id = cljs.core.get.call(null,map__31444__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31444,map__31444__$1,opts,build_id){
return (function (p__31446){
var vec__31447 = p__31446;
var seq__31448 = cljs.core.seq.call(null,vec__31447);
var first__31449 = cljs.core.first.call(null,seq__31448);
var seq__31448__$1 = cljs.core.next.call(null,seq__31448);
var map__31450 = first__31449;
var map__31450__$1 = ((((!((map__31450 == null)))?((((map__31450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31450):map__31450);
var msg = map__31450__$1;
var msg_name = cljs.core.get.call(null,map__31450__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31448__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31447,seq__31448,first__31449,seq__31448__$1,map__31450,map__31450__$1,msg,msg_name,_,map__31444,map__31444__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31447,seq__31448,first__31449,seq__31448__$1,map__31450,map__31450__$1,msg,msg_name,_,map__31444,map__31444__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31444,map__31444__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31458){
var vec__31459 = p__31458;
var seq__31460 = cljs.core.seq.call(null,vec__31459);
var first__31461 = cljs.core.first.call(null,seq__31460);
var seq__31460__$1 = cljs.core.next.call(null,seq__31460);
var map__31462 = first__31461;
var map__31462__$1 = ((((!((map__31462 == null)))?((((map__31462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31462):map__31462);
var msg = map__31462__$1;
var msg_name = cljs.core.get.call(null,map__31462__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31460__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31464){
var map__31476 = p__31464;
var map__31476__$1 = ((((!((map__31476 == null)))?((((map__31476.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31476.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31476):map__31476);
var on_compile_warning = cljs.core.get.call(null,map__31476__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31476__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31476,map__31476__$1,on_compile_warning,on_compile_fail){
return (function (p__31478){
var vec__31479 = p__31478;
var seq__31480 = cljs.core.seq.call(null,vec__31479);
var first__31481 = cljs.core.first.call(null,seq__31480);
var seq__31480__$1 = cljs.core.next.call(null,seq__31480);
var map__31482 = first__31481;
var map__31482__$1 = ((((!((map__31482 == null)))?((((map__31482.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31482.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31482):map__31482);
var msg = map__31482__$1;
var msg_name = cljs.core.get.call(null,map__31482__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31480__$1;
var pred__31484 = cljs.core._EQ_;
var expr__31485 = msg_name;
if(cljs.core.truth_(pred__31484.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31485))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31484.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31485))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31476,map__31476__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22469__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto__,msg_hist,msg_names,msg){
return (function (state_31693){
var state_val_31694 = (state_31693[(1)]);
if((state_val_31694 === (7))){
var inst_31621 = (state_31693[(2)]);
var state_31693__$1 = state_31693;
if(cljs.core.truth_(inst_31621)){
var statearr_31695_31741 = state_31693__$1;
(statearr_31695_31741[(1)] = (8));

} else {
var statearr_31696_31742 = state_31693__$1;
(statearr_31696_31742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (20))){
var inst_31687 = (state_31693[(2)]);
var state_31693__$1 = state_31693;
var statearr_31697_31743 = state_31693__$1;
(statearr_31697_31743[(2)] = inst_31687);

(statearr_31697_31743[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (27))){
var inst_31683 = (state_31693[(2)]);
var state_31693__$1 = state_31693;
var statearr_31698_31744 = state_31693__$1;
(statearr_31698_31744[(2)] = inst_31683);

(statearr_31698_31744[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (1))){
var inst_31614 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31693__$1 = state_31693;
if(cljs.core.truth_(inst_31614)){
var statearr_31699_31745 = state_31693__$1;
(statearr_31699_31745[(1)] = (2));

} else {
var statearr_31700_31746 = state_31693__$1;
(statearr_31700_31746[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (24))){
var inst_31685 = (state_31693[(2)]);
var state_31693__$1 = state_31693;
var statearr_31701_31747 = state_31693__$1;
(statearr_31701_31747[(2)] = inst_31685);

(statearr_31701_31747[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (4))){
var inst_31691 = (state_31693[(2)]);
var state_31693__$1 = state_31693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31693__$1,inst_31691);
} else {
if((state_val_31694 === (15))){
var inst_31689 = (state_31693[(2)]);
var state_31693__$1 = state_31693;
var statearr_31702_31748 = state_31693__$1;
(statearr_31702_31748[(2)] = inst_31689);

(statearr_31702_31748[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (21))){
var inst_31648 = (state_31693[(2)]);
var state_31693__$1 = state_31693;
var statearr_31703_31749 = state_31693__$1;
(statearr_31703_31749[(2)] = inst_31648);

(statearr_31703_31749[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (31))){
var inst_31672 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31693__$1 = state_31693;
if(cljs.core.truth_(inst_31672)){
var statearr_31704_31750 = state_31693__$1;
(statearr_31704_31750[(1)] = (34));

} else {
var statearr_31705_31751 = state_31693__$1;
(statearr_31705_31751[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (32))){
var inst_31681 = (state_31693[(2)]);
var state_31693__$1 = state_31693;
var statearr_31706_31752 = state_31693__$1;
(statearr_31706_31752[(2)] = inst_31681);

(statearr_31706_31752[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (33))){
var inst_31670 = (state_31693[(2)]);
var state_31693__$1 = state_31693;
var statearr_31707_31753 = state_31693__$1;
(statearr_31707_31753[(2)] = inst_31670);

(statearr_31707_31753[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (13))){
var inst_31635 = figwheel.client.heads_up.clear.call(null);
var state_31693__$1 = state_31693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31693__$1,(16),inst_31635);
} else {
if((state_val_31694 === (22))){
var inst_31652 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31653 = figwheel.client.heads_up.append_message.call(null,inst_31652);
var state_31693__$1 = state_31693;
var statearr_31708_31754 = state_31693__$1;
(statearr_31708_31754[(2)] = inst_31653);

(statearr_31708_31754[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (36))){
var inst_31679 = (state_31693[(2)]);
var state_31693__$1 = state_31693;
var statearr_31709_31755 = state_31693__$1;
(statearr_31709_31755[(2)] = inst_31679);

(statearr_31709_31755[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (29))){
var inst_31663 = (state_31693[(2)]);
var state_31693__$1 = state_31693;
var statearr_31710_31756 = state_31693__$1;
(statearr_31710_31756[(2)] = inst_31663);

(statearr_31710_31756[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (6))){
var inst_31616 = (state_31693[(7)]);
var state_31693__$1 = state_31693;
var statearr_31711_31757 = state_31693__$1;
(statearr_31711_31757[(2)] = inst_31616);

(statearr_31711_31757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (28))){
var inst_31659 = (state_31693[(2)]);
var inst_31660 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31661 = figwheel.client.heads_up.display_warning.call(null,inst_31660);
var state_31693__$1 = (function (){var statearr_31712 = state_31693;
(statearr_31712[(8)] = inst_31659);

return statearr_31712;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31693__$1,(29),inst_31661);
} else {
if((state_val_31694 === (25))){
var inst_31657 = figwheel.client.heads_up.clear.call(null);
var state_31693__$1 = state_31693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31693__$1,(28),inst_31657);
} else {
if((state_val_31694 === (34))){
var inst_31674 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31693__$1 = state_31693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31693__$1,(37),inst_31674);
} else {
if((state_val_31694 === (17))){
var inst_31641 = (state_31693[(2)]);
var state_31693__$1 = state_31693;
var statearr_31713_31758 = state_31693__$1;
(statearr_31713_31758[(2)] = inst_31641);

(statearr_31713_31758[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (3))){
var inst_31633 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31693__$1 = state_31693;
if(cljs.core.truth_(inst_31633)){
var statearr_31714_31759 = state_31693__$1;
(statearr_31714_31759[(1)] = (13));

} else {
var statearr_31715_31760 = state_31693__$1;
(statearr_31715_31760[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (12))){
var inst_31629 = (state_31693[(2)]);
var state_31693__$1 = state_31693;
var statearr_31716_31761 = state_31693__$1;
(statearr_31716_31761[(2)] = inst_31629);

(statearr_31716_31761[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (2))){
var inst_31616 = (state_31693[(7)]);
var inst_31616__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31693__$1 = (function (){var statearr_31717 = state_31693;
(statearr_31717[(7)] = inst_31616__$1);

return statearr_31717;
})();
if(cljs.core.truth_(inst_31616__$1)){
var statearr_31718_31762 = state_31693__$1;
(statearr_31718_31762[(1)] = (5));

} else {
var statearr_31719_31763 = state_31693__$1;
(statearr_31719_31763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (23))){
var inst_31655 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31693__$1 = state_31693;
if(cljs.core.truth_(inst_31655)){
var statearr_31720_31764 = state_31693__$1;
(statearr_31720_31764[(1)] = (25));

} else {
var statearr_31721_31765 = state_31693__$1;
(statearr_31721_31765[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (35))){
var state_31693__$1 = state_31693;
var statearr_31722_31766 = state_31693__$1;
(statearr_31722_31766[(2)] = null);

(statearr_31722_31766[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (19))){
var inst_31650 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31693__$1 = state_31693;
if(cljs.core.truth_(inst_31650)){
var statearr_31723_31767 = state_31693__$1;
(statearr_31723_31767[(1)] = (22));

} else {
var statearr_31724_31768 = state_31693__$1;
(statearr_31724_31768[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (11))){
var inst_31625 = (state_31693[(2)]);
var state_31693__$1 = state_31693;
var statearr_31725_31769 = state_31693__$1;
(statearr_31725_31769[(2)] = inst_31625);

(statearr_31725_31769[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (9))){
var inst_31627 = figwheel.client.heads_up.clear.call(null);
var state_31693__$1 = state_31693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31693__$1,(12),inst_31627);
} else {
if((state_val_31694 === (5))){
var inst_31618 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31693__$1 = state_31693;
var statearr_31726_31770 = state_31693__$1;
(statearr_31726_31770[(2)] = inst_31618);

(statearr_31726_31770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (14))){
var inst_31643 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31693__$1 = state_31693;
if(cljs.core.truth_(inst_31643)){
var statearr_31727_31771 = state_31693__$1;
(statearr_31727_31771[(1)] = (18));

} else {
var statearr_31728_31772 = state_31693__$1;
(statearr_31728_31772[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (26))){
var inst_31665 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31693__$1 = state_31693;
if(cljs.core.truth_(inst_31665)){
var statearr_31729_31773 = state_31693__$1;
(statearr_31729_31773[(1)] = (30));

} else {
var statearr_31730_31774 = state_31693__$1;
(statearr_31730_31774[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (16))){
var inst_31637 = (state_31693[(2)]);
var inst_31638 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31639 = figwheel.client.heads_up.display_exception.call(null,inst_31638);
var state_31693__$1 = (function (){var statearr_31731 = state_31693;
(statearr_31731[(9)] = inst_31637);

return statearr_31731;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31693__$1,(17),inst_31639);
} else {
if((state_val_31694 === (30))){
var inst_31667 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31668 = figwheel.client.heads_up.display_warning.call(null,inst_31667);
var state_31693__$1 = state_31693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31693__$1,(33),inst_31668);
} else {
if((state_val_31694 === (10))){
var inst_31631 = (state_31693[(2)]);
var state_31693__$1 = state_31693;
var statearr_31732_31775 = state_31693__$1;
(statearr_31732_31775[(2)] = inst_31631);

(statearr_31732_31775[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (18))){
var inst_31645 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31646 = figwheel.client.heads_up.display_exception.call(null,inst_31645);
var state_31693__$1 = state_31693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31693__$1,(21),inst_31646);
} else {
if((state_val_31694 === (37))){
var inst_31676 = (state_31693[(2)]);
var state_31693__$1 = state_31693;
var statearr_31733_31776 = state_31693__$1;
(statearr_31733_31776[(2)] = inst_31676);

(statearr_31733_31776[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (8))){
var inst_31623 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31693__$1 = state_31693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31693__$1,(11),inst_31623);
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
}
}
}
}
}
}
}
});})(c__22469__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22357__auto__,c__22469__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22358__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22358__auto____0 = (function (){
var statearr_31737 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31737[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22358__auto__);

(statearr_31737[(1)] = (1));

return statearr_31737;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22358__auto____1 = (function (state_31693){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_31693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e31738){if((e31738 instanceof Object)){
var ex__22361__auto__ = e31738;
var statearr_31739_31777 = state_31693;
(statearr_31739_31777[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31778 = state_31693;
state_31693 = G__31778;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22358__auto__ = function(state_31693){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22358__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22358__auto____1.call(this,state_31693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22358__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22358__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto__,msg_hist,msg_names,msg))
})();
var state__22471__auto__ = (function (){var statearr_31740 = f__22470__auto__.call(null);
(statearr_31740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto__);

return statearr_31740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto__,msg_hist,msg_names,msg))
);

return c__22469__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22469__auto___31841 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto___31841,ch){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto___31841,ch){
return (function (state_31824){
var state_val_31825 = (state_31824[(1)]);
if((state_val_31825 === (1))){
var state_31824__$1 = state_31824;
var statearr_31826_31842 = state_31824__$1;
(statearr_31826_31842[(2)] = null);

(statearr_31826_31842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31825 === (2))){
var state_31824__$1 = state_31824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31824__$1,(4),ch);
} else {
if((state_val_31825 === (3))){
var inst_31822 = (state_31824[(2)]);
var state_31824__$1 = state_31824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31824__$1,inst_31822);
} else {
if((state_val_31825 === (4))){
var inst_31812 = (state_31824[(7)]);
var inst_31812__$1 = (state_31824[(2)]);
var state_31824__$1 = (function (){var statearr_31827 = state_31824;
(statearr_31827[(7)] = inst_31812__$1);

return statearr_31827;
})();
if(cljs.core.truth_(inst_31812__$1)){
var statearr_31828_31843 = state_31824__$1;
(statearr_31828_31843[(1)] = (5));

} else {
var statearr_31829_31844 = state_31824__$1;
(statearr_31829_31844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31825 === (5))){
var inst_31812 = (state_31824[(7)]);
var inst_31814 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31812);
var state_31824__$1 = state_31824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31824__$1,(8),inst_31814);
} else {
if((state_val_31825 === (6))){
var state_31824__$1 = state_31824;
var statearr_31830_31845 = state_31824__$1;
(statearr_31830_31845[(2)] = null);

(statearr_31830_31845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31825 === (7))){
var inst_31820 = (state_31824[(2)]);
var state_31824__$1 = state_31824;
var statearr_31831_31846 = state_31824__$1;
(statearr_31831_31846[(2)] = inst_31820);

(statearr_31831_31846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31825 === (8))){
var inst_31816 = (state_31824[(2)]);
var state_31824__$1 = (function (){var statearr_31832 = state_31824;
(statearr_31832[(8)] = inst_31816);

return statearr_31832;
})();
var statearr_31833_31847 = state_31824__$1;
(statearr_31833_31847[(2)] = null);

(statearr_31833_31847[(1)] = (2));


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
});})(c__22469__auto___31841,ch))
;
return ((function (switch__22357__auto__,c__22469__auto___31841,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22358__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22358__auto____0 = (function (){
var statearr_31837 = [null,null,null,null,null,null,null,null,null];
(statearr_31837[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22358__auto__);

(statearr_31837[(1)] = (1));

return statearr_31837;
});
var figwheel$client$heads_up_plugin_$_state_machine__22358__auto____1 = (function (state_31824){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_31824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e31838){if((e31838 instanceof Object)){
var ex__22361__auto__ = e31838;
var statearr_31839_31848 = state_31824;
(statearr_31839_31848[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31849 = state_31824;
state_31824 = G__31849;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22358__auto__ = function(state_31824){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22358__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22358__auto____1.call(this,state_31824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22358__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22358__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto___31841,ch))
})();
var state__22471__auto__ = (function (){var statearr_31840 = f__22470__auto__.call(null);
(statearr_31840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___31841);

return statearr_31840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto___31841,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22469__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto__){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto__){
return (function (state_31870){
var state_val_31871 = (state_31870[(1)]);
if((state_val_31871 === (1))){
var inst_31865 = cljs.core.async.timeout.call(null,(3000));
var state_31870__$1 = state_31870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31870__$1,(2),inst_31865);
} else {
if((state_val_31871 === (2))){
var inst_31867 = (state_31870[(2)]);
var inst_31868 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31870__$1 = (function (){var statearr_31872 = state_31870;
(statearr_31872[(7)] = inst_31867);

return statearr_31872;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31870__$1,inst_31868);
} else {
return null;
}
}
});})(c__22469__auto__))
;
return ((function (switch__22357__auto__,c__22469__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22358__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22358__auto____0 = (function (){
var statearr_31876 = [null,null,null,null,null,null,null,null];
(statearr_31876[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22358__auto__);

(statearr_31876[(1)] = (1));

return statearr_31876;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22358__auto____1 = (function (state_31870){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_31870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e31877){if((e31877 instanceof Object)){
var ex__22361__auto__ = e31877;
var statearr_31878_31880 = state_31870;
(statearr_31878_31880[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31881 = state_31870;
state_31870 = G__31881;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22358__auto__ = function(state_31870){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22358__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22358__auto____1.call(this,state_31870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22358__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22358__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto__))
})();
var state__22471__auto__ = (function (){var statearr_31879 = f__22470__auto__.call(null);
(statearr_31879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto__);

return statearr_31879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto__))
);

return c__22469__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31882){
var map__31889 = p__31882;
var map__31889__$1 = ((((!((map__31889 == null)))?((((map__31889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31889):map__31889);
var ed = map__31889__$1;
var formatted_exception = cljs.core.get.call(null,map__31889__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31889__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31889__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31891_31895 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31892_31896 = null;
var count__31893_31897 = (0);
var i__31894_31898 = (0);
while(true){
if((i__31894_31898 < count__31893_31897)){
var msg_31899 = cljs.core._nth.call(null,chunk__31892_31896,i__31894_31898);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31899);

var G__31900 = seq__31891_31895;
var G__31901 = chunk__31892_31896;
var G__31902 = count__31893_31897;
var G__31903 = (i__31894_31898 + (1));
seq__31891_31895 = G__31900;
chunk__31892_31896 = G__31901;
count__31893_31897 = G__31902;
i__31894_31898 = G__31903;
continue;
} else {
var temp__4657__auto___31904 = cljs.core.seq.call(null,seq__31891_31895);
if(temp__4657__auto___31904){
var seq__31891_31905__$1 = temp__4657__auto___31904;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31891_31905__$1)){
var c__19307__auto___31906 = cljs.core.chunk_first.call(null,seq__31891_31905__$1);
var G__31907 = cljs.core.chunk_rest.call(null,seq__31891_31905__$1);
var G__31908 = c__19307__auto___31906;
var G__31909 = cljs.core.count.call(null,c__19307__auto___31906);
var G__31910 = (0);
seq__31891_31895 = G__31907;
chunk__31892_31896 = G__31908;
count__31893_31897 = G__31909;
i__31894_31898 = G__31910;
continue;
} else {
var msg_31911 = cljs.core.first.call(null,seq__31891_31905__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31911);

var G__31912 = cljs.core.next.call(null,seq__31891_31905__$1);
var G__31913 = null;
var G__31914 = (0);
var G__31915 = (0);
seq__31891_31895 = G__31912;
chunk__31892_31896 = G__31913;
count__31893_31897 = G__31914;
i__31894_31898 = G__31915;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31916){
var map__31919 = p__31916;
var map__31919__$1 = ((((!((map__31919 == null)))?((((map__31919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31919):map__31919);
var w = map__31919__$1;
var message = cljs.core.get.call(null,map__31919__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18484__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18484__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18484__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31931 = cljs.core.seq.call(null,plugins);
var chunk__31932 = null;
var count__31933 = (0);
var i__31934 = (0);
while(true){
if((i__31934 < count__31933)){
var vec__31935 = cljs.core._nth.call(null,chunk__31932,i__31934);
var k = cljs.core.nth.call(null,vec__31935,(0),null);
var plugin = cljs.core.nth.call(null,vec__31935,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31941 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31931,chunk__31932,count__31933,i__31934,pl_31941,vec__31935,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31941.call(null,msg_hist);
});})(seq__31931,chunk__31932,count__31933,i__31934,pl_31941,vec__31935,k,plugin))
);
} else {
}

var G__31942 = seq__31931;
var G__31943 = chunk__31932;
var G__31944 = count__31933;
var G__31945 = (i__31934 + (1));
seq__31931 = G__31942;
chunk__31932 = G__31943;
count__31933 = G__31944;
i__31934 = G__31945;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31931);
if(temp__4657__auto__){
var seq__31931__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31931__$1)){
var c__19307__auto__ = cljs.core.chunk_first.call(null,seq__31931__$1);
var G__31946 = cljs.core.chunk_rest.call(null,seq__31931__$1);
var G__31947 = c__19307__auto__;
var G__31948 = cljs.core.count.call(null,c__19307__auto__);
var G__31949 = (0);
seq__31931 = G__31946;
chunk__31932 = G__31947;
count__31933 = G__31948;
i__31934 = G__31949;
continue;
} else {
var vec__31938 = cljs.core.first.call(null,seq__31931__$1);
var k = cljs.core.nth.call(null,vec__31938,(0),null);
var plugin = cljs.core.nth.call(null,vec__31938,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31950 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31931,chunk__31932,count__31933,i__31934,pl_31950,vec__31938,k,plugin,seq__31931__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31950.call(null,msg_hist);
});})(seq__31931,chunk__31932,count__31933,i__31934,pl_31950,vec__31938,k,plugin,seq__31931__$1,temp__4657__auto__))
);
} else {
}

var G__31951 = cljs.core.next.call(null,seq__31931__$1);
var G__31952 = null;
var G__31953 = (0);
var G__31954 = (0);
seq__31931 = G__31951;
chunk__31932 = G__31952;
count__31933 = G__31953;
i__31934 = G__31954;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args31955 = [];
var len__19571__auto___31958 = arguments.length;
var i__19572__auto___31959 = (0);
while(true){
if((i__19572__auto___31959 < len__19571__auto___31958)){
args31955.push((arguments[i__19572__auto___31959]));

var G__31960 = (i__19572__auto___31959 + (1));
i__19572__auto___31959 = G__31960;
continue;
} else {
}
break;
}

var G__31957 = args31955.length;
switch (G__31957) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31955.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19578__auto__ = [];
var len__19571__auto___31966 = arguments.length;
var i__19572__auto___31967 = (0);
while(true){
if((i__19572__auto___31967 < len__19571__auto___31966)){
args__19578__auto__.push((arguments[i__19572__auto___31967]));

var G__31968 = (i__19572__auto___31967 + (1));
i__19572__auto___31967 = G__31968;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31963){
var map__31964 = p__31963;
var map__31964__$1 = ((((!((map__31964 == null)))?((((map__31964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31964):map__31964);
var opts = map__31964__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31962){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31962));
});


//# sourceMappingURL=client.js.map?rel=1466621028214