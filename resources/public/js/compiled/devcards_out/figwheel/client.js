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
var pred__41260 = cljs.core._EQ_;
var expr__41261 = (function (){var or__18496__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e41264){if((e41264 instanceof Error)){
var e = e41264;
return false;
} else {
throw e41264;

}
}})();
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__41260.call(null,"true",expr__41261))){
return true;
} else {
if(cljs.core.truth_(pred__41260.call(null,"false",expr__41261))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__41261)].join('')));
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
}catch (e41266){if((e41266 instanceof Error)){
var e = e41266;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e41266;

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
var len__19571__auto___41268 = arguments.length;
var i__19572__auto___41269 = (0);
while(true){
if((i__19572__auto___41269 < len__19571__auto___41268)){
args__19578__auto__.push((arguments[i__19572__auto___41269]));

var G__41270 = (i__19572__auto___41269 + (1));
i__19572__auto___41269 = G__41270;
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

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq41267){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41267));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__41271){
var map__41274 = p__41271;
var map__41274__$1 = ((((!((map__41274 == null)))?((((map__41274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41274):map__41274);
var message = cljs.core.get.call(null,map__41274__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__41274__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__22469__auto___41436 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto___41436,ch){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto___41436,ch){
return (function (state_41405){
var state_val_41406 = (state_41405[(1)]);
if((state_val_41406 === (7))){
var inst_41401 = (state_41405[(2)]);
var state_41405__$1 = state_41405;
var statearr_41407_41437 = state_41405__$1;
(statearr_41407_41437[(2)] = inst_41401);

(statearr_41407_41437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41406 === (1))){
var state_41405__$1 = state_41405;
var statearr_41408_41438 = state_41405__$1;
(statearr_41408_41438[(2)] = null);

(statearr_41408_41438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41406 === (4))){
var inst_41358 = (state_41405[(7)]);
var inst_41358__$1 = (state_41405[(2)]);
var state_41405__$1 = (function (){var statearr_41409 = state_41405;
(statearr_41409[(7)] = inst_41358__$1);

return statearr_41409;
})();
if(cljs.core.truth_(inst_41358__$1)){
var statearr_41410_41439 = state_41405__$1;
(statearr_41410_41439[(1)] = (5));

} else {
var statearr_41411_41440 = state_41405__$1;
(statearr_41411_41440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41406 === (15))){
var inst_41365 = (state_41405[(8)]);
var inst_41380 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41365);
var inst_41381 = cljs.core.first.call(null,inst_41380);
var inst_41382 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_41381);
var inst_41383 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_41382)].join('');
var inst_41384 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_41383);
var state_41405__$1 = state_41405;
var statearr_41412_41441 = state_41405__$1;
(statearr_41412_41441[(2)] = inst_41384);

(statearr_41412_41441[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41406 === (13))){
var inst_41389 = (state_41405[(2)]);
var state_41405__$1 = state_41405;
var statearr_41413_41442 = state_41405__$1;
(statearr_41413_41442[(2)] = inst_41389);

(statearr_41413_41442[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41406 === (6))){
var state_41405__$1 = state_41405;
var statearr_41414_41443 = state_41405__$1;
(statearr_41414_41443[(2)] = null);

(statearr_41414_41443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41406 === (17))){
var inst_41387 = (state_41405[(2)]);
var state_41405__$1 = state_41405;
var statearr_41415_41444 = state_41405__$1;
(statearr_41415_41444[(2)] = inst_41387);

(statearr_41415_41444[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41406 === (3))){
var inst_41403 = (state_41405[(2)]);
var state_41405__$1 = state_41405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41405__$1,inst_41403);
} else {
if((state_val_41406 === (12))){
var inst_41364 = (state_41405[(9)]);
var inst_41378 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_41364,opts);
var state_41405__$1 = state_41405;
if(cljs.core.truth_(inst_41378)){
var statearr_41416_41445 = state_41405__$1;
(statearr_41416_41445[(1)] = (15));

} else {
var statearr_41417_41446 = state_41405__$1;
(statearr_41417_41446[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41406 === (2))){
var state_41405__$1 = state_41405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41405__$1,(4),ch);
} else {
if((state_val_41406 === (11))){
var inst_41365 = (state_41405[(8)]);
var inst_41370 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41371 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_41365);
var inst_41372 = cljs.core.async.timeout.call(null,(1000));
var inst_41373 = [inst_41371,inst_41372];
var inst_41374 = (new cljs.core.PersistentVector(null,2,(5),inst_41370,inst_41373,null));
var state_41405__$1 = state_41405;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41405__$1,(14),inst_41374);
} else {
if((state_val_41406 === (9))){
var inst_41365 = (state_41405[(8)]);
var inst_41391 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_41392 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41365);
var inst_41393 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41392);
var inst_41394 = [cljs.core.str("Not loading: "),cljs.core.str(inst_41393)].join('');
var inst_41395 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_41394);
var state_41405__$1 = (function (){var statearr_41418 = state_41405;
(statearr_41418[(10)] = inst_41391);

return statearr_41418;
})();
var statearr_41419_41447 = state_41405__$1;
(statearr_41419_41447[(2)] = inst_41395);

(statearr_41419_41447[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41406 === (5))){
var inst_41358 = (state_41405[(7)]);
var inst_41360 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_41361 = (new cljs.core.PersistentArrayMap(null,2,inst_41360,null));
var inst_41362 = (new cljs.core.PersistentHashSet(null,inst_41361,null));
var inst_41363 = figwheel.client.focus_msgs.call(null,inst_41362,inst_41358);
var inst_41364 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_41363);
var inst_41365 = cljs.core.first.call(null,inst_41363);
var inst_41366 = figwheel.client.autoload_QMARK_.call(null);
var state_41405__$1 = (function (){var statearr_41420 = state_41405;
(statearr_41420[(8)] = inst_41365);

(statearr_41420[(9)] = inst_41364);

return statearr_41420;
})();
if(cljs.core.truth_(inst_41366)){
var statearr_41421_41448 = state_41405__$1;
(statearr_41421_41448[(1)] = (8));

} else {
var statearr_41422_41449 = state_41405__$1;
(statearr_41422_41449[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41406 === (14))){
var inst_41376 = (state_41405[(2)]);
var state_41405__$1 = state_41405;
var statearr_41423_41450 = state_41405__$1;
(statearr_41423_41450[(2)] = inst_41376);

(statearr_41423_41450[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41406 === (16))){
var state_41405__$1 = state_41405;
var statearr_41424_41451 = state_41405__$1;
(statearr_41424_41451[(2)] = null);

(statearr_41424_41451[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41406 === (10))){
var inst_41397 = (state_41405[(2)]);
var state_41405__$1 = (function (){var statearr_41425 = state_41405;
(statearr_41425[(11)] = inst_41397);

return statearr_41425;
})();
var statearr_41426_41452 = state_41405__$1;
(statearr_41426_41452[(2)] = null);

(statearr_41426_41452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41406 === (8))){
var inst_41364 = (state_41405[(9)]);
var inst_41368 = figwheel.client.reload_file_state_QMARK_.call(null,inst_41364,opts);
var state_41405__$1 = state_41405;
if(cljs.core.truth_(inst_41368)){
var statearr_41427_41453 = state_41405__$1;
(statearr_41427_41453[(1)] = (11));

} else {
var statearr_41428_41454 = state_41405__$1;
(statearr_41428_41454[(1)] = (12));

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
});})(c__22469__auto___41436,ch))
;
return ((function (switch__22357__auto__,c__22469__auto___41436,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22358__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22358__auto____0 = (function (){
var statearr_41432 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41432[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22358__auto__);

(statearr_41432[(1)] = (1));

return statearr_41432;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22358__auto____1 = (function (state_41405){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_41405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e41433){if((e41433 instanceof Object)){
var ex__22361__auto__ = e41433;
var statearr_41434_41455 = state_41405;
(statearr_41434_41455[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41456 = state_41405;
state_41405 = G__41456;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22358__auto__ = function(state_41405){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22358__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22358__auto____1.call(this,state_41405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22358__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22358__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto___41436,ch))
})();
var state__22471__auto__ = (function (){var statearr_41435 = f__22470__auto__.call(null);
(statearr_41435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___41436);

return statearr_41435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto___41436,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__41457_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__41457_SHARP_));
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
var base_path_41464 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_41464){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_41462 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_41463 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_41463;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_41462;
}}catch (e41461){if((e41461 instanceof Error)){
var e = e41461;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_41464], null));
} else {
var e = e41461;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_41464))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__41465){
var map__41474 = p__41465;
var map__41474__$1 = ((((!((map__41474 == null)))?((((map__41474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41474):map__41474);
var opts = map__41474__$1;
var build_id = cljs.core.get.call(null,map__41474__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__41474,map__41474__$1,opts,build_id){
return (function (p__41476){
var vec__41477 = p__41476;
var seq__41478 = cljs.core.seq.call(null,vec__41477);
var first__41479 = cljs.core.first.call(null,seq__41478);
var seq__41478__$1 = cljs.core.next.call(null,seq__41478);
var map__41480 = first__41479;
var map__41480__$1 = ((((!((map__41480 == null)))?((((map__41480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41480):map__41480);
var msg = map__41480__$1;
var msg_name = cljs.core.get.call(null,map__41480__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41478__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__41477,seq__41478,first__41479,seq__41478__$1,map__41480,map__41480__$1,msg,msg_name,_,map__41474,map__41474__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__41477,seq__41478,first__41479,seq__41478__$1,map__41480,map__41480__$1,msg,msg_name,_,map__41474,map__41474__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__41474,map__41474__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__41488){
var vec__41489 = p__41488;
var seq__41490 = cljs.core.seq.call(null,vec__41489);
var first__41491 = cljs.core.first.call(null,seq__41490);
var seq__41490__$1 = cljs.core.next.call(null,seq__41490);
var map__41492 = first__41491;
var map__41492__$1 = ((((!((map__41492 == null)))?((((map__41492.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41492.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41492):map__41492);
var msg = map__41492__$1;
var msg_name = cljs.core.get.call(null,map__41492__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41490__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__41494){
var map__41506 = p__41494;
var map__41506__$1 = ((((!((map__41506 == null)))?((((map__41506.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41506.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41506):map__41506);
var on_compile_warning = cljs.core.get.call(null,map__41506__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__41506__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__41506,map__41506__$1,on_compile_warning,on_compile_fail){
return (function (p__41508){
var vec__41509 = p__41508;
var seq__41510 = cljs.core.seq.call(null,vec__41509);
var first__41511 = cljs.core.first.call(null,seq__41510);
var seq__41510__$1 = cljs.core.next.call(null,seq__41510);
var map__41512 = first__41511;
var map__41512__$1 = ((((!((map__41512 == null)))?((((map__41512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41512):map__41512);
var msg = map__41512__$1;
var msg_name = cljs.core.get.call(null,map__41512__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41510__$1;
var pred__41514 = cljs.core._EQ_;
var expr__41515 = msg_name;
if(cljs.core.truth_(pred__41514.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__41515))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__41514.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__41515))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__41506,map__41506__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22469__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto__,msg_hist,msg_names,msg){
return (function (state_41723){
var state_val_41724 = (state_41723[(1)]);
if((state_val_41724 === (7))){
var inst_41651 = (state_41723[(2)]);
var state_41723__$1 = state_41723;
if(cljs.core.truth_(inst_41651)){
var statearr_41725_41771 = state_41723__$1;
(statearr_41725_41771[(1)] = (8));

} else {
var statearr_41726_41772 = state_41723__$1;
(statearr_41726_41772[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41724 === (20))){
var inst_41717 = (state_41723[(2)]);
var state_41723__$1 = state_41723;
var statearr_41727_41773 = state_41723__$1;
(statearr_41727_41773[(2)] = inst_41717);

(statearr_41727_41773[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41724 === (27))){
var inst_41713 = (state_41723[(2)]);
var state_41723__$1 = state_41723;
var statearr_41728_41774 = state_41723__$1;
(statearr_41728_41774[(2)] = inst_41713);

(statearr_41728_41774[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41724 === (1))){
var inst_41644 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_41723__$1 = state_41723;
if(cljs.core.truth_(inst_41644)){
var statearr_41729_41775 = state_41723__$1;
(statearr_41729_41775[(1)] = (2));

} else {
var statearr_41730_41776 = state_41723__$1;
(statearr_41730_41776[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41724 === (24))){
var inst_41715 = (state_41723[(2)]);
var state_41723__$1 = state_41723;
var statearr_41731_41777 = state_41723__$1;
(statearr_41731_41777[(2)] = inst_41715);

(statearr_41731_41777[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41724 === (4))){
var inst_41721 = (state_41723[(2)]);
var state_41723__$1 = state_41723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41723__$1,inst_41721);
} else {
if((state_val_41724 === (15))){
var inst_41719 = (state_41723[(2)]);
var state_41723__$1 = state_41723;
var statearr_41732_41778 = state_41723__$1;
(statearr_41732_41778[(2)] = inst_41719);

(statearr_41732_41778[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41724 === (21))){
var inst_41678 = (state_41723[(2)]);
var state_41723__$1 = state_41723;
var statearr_41733_41779 = state_41723__$1;
(statearr_41733_41779[(2)] = inst_41678);

(statearr_41733_41779[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41724 === (31))){
var inst_41702 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_41723__$1 = state_41723;
if(cljs.core.truth_(inst_41702)){
var statearr_41734_41780 = state_41723__$1;
(statearr_41734_41780[(1)] = (34));

} else {
var statearr_41735_41781 = state_41723__$1;
(statearr_41735_41781[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41724 === (32))){
var inst_41711 = (state_41723[(2)]);
var state_41723__$1 = state_41723;
var statearr_41736_41782 = state_41723__$1;
(statearr_41736_41782[(2)] = inst_41711);

(statearr_41736_41782[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41724 === (33))){
var inst_41700 = (state_41723[(2)]);
var state_41723__$1 = state_41723;
var statearr_41737_41783 = state_41723__$1;
(statearr_41737_41783[(2)] = inst_41700);

(statearr_41737_41783[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41724 === (13))){
var inst_41665 = figwheel.client.heads_up.clear.call(null);
var state_41723__$1 = state_41723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41723__$1,(16),inst_41665);
} else {
if((state_val_41724 === (22))){
var inst_41682 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41683 = figwheel.client.heads_up.append_message.call(null,inst_41682);
var state_41723__$1 = state_41723;
var statearr_41738_41784 = state_41723__$1;
(statearr_41738_41784[(2)] = inst_41683);

(statearr_41738_41784[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41724 === (36))){
var inst_41709 = (state_41723[(2)]);
var state_41723__$1 = state_41723;
var statearr_41739_41785 = state_41723__$1;
(statearr_41739_41785[(2)] = inst_41709);

(statearr_41739_41785[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41724 === (29))){
var inst_41693 = (state_41723[(2)]);
var state_41723__$1 = state_41723;
var statearr_41740_41786 = state_41723__$1;
(statearr_41740_41786[(2)] = inst_41693);

(statearr_41740_41786[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41724 === (6))){
var inst_41646 = (state_41723[(7)]);
var state_41723__$1 = state_41723;
var statearr_41741_41787 = state_41723__$1;
(statearr_41741_41787[(2)] = inst_41646);

(statearr_41741_41787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41724 === (28))){
var inst_41689 = (state_41723[(2)]);
var inst_41690 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41691 = figwheel.client.heads_up.display_warning.call(null,inst_41690);
var state_41723__$1 = (function (){var statearr_41742 = state_41723;
(statearr_41742[(8)] = inst_41689);

return statearr_41742;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41723__$1,(29),inst_41691);
} else {
if((state_val_41724 === (25))){
var inst_41687 = figwheel.client.heads_up.clear.call(null);
var state_41723__$1 = state_41723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41723__$1,(28),inst_41687);
} else {
if((state_val_41724 === (34))){
var inst_41704 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41723__$1 = state_41723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41723__$1,(37),inst_41704);
} else {
if((state_val_41724 === (17))){
var inst_41671 = (state_41723[(2)]);
var state_41723__$1 = state_41723;
var statearr_41743_41788 = state_41723__$1;
(statearr_41743_41788[(2)] = inst_41671);

(statearr_41743_41788[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41724 === (3))){
var inst_41663 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_41723__$1 = state_41723;
if(cljs.core.truth_(inst_41663)){
var statearr_41744_41789 = state_41723__$1;
(statearr_41744_41789[(1)] = (13));

} else {
var statearr_41745_41790 = state_41723__$1;
(statearr_41745_41790[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41724 === (12))){
var inst_41659 = (state_41723[(2)]);
var state_41723__$1 = state_41723;
var statearr_41746_41791 = state_41723__$1;
(statearr_41746_41791[(2)] = inst_41659);

(statearr_41746_41791[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41724 === (2))){
var inst_41646 = (state_41723[(7)]);
var inst_41646__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_41723__$1 = (function (){var statearr_41747 = state_41723;
(statearr_41747[(7)] = inst_41646__$1);

return statearr_41747;
})();
if(cljs.core.truth_(inst_41646__$1)){
var statearr_41748_41792 = state_41723__$1;
(statearr_41748_41792[(1)] = (5));

} else {
var statearr_41749_41793 = state_41723__$1;
(statearr_41749_41793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41724 === (23))){
var inst_41685 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_41723__$1 = state_41723;
if(cljs.core.truth_(inst_41685)){
var statearr_41750_41794 = state_41723__$1;
(statearr_41750_41794[(1)] = (25));

} else {
var statearr_41751_41795 = state_41723__$1;
(statearr_41751_41795[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41724 === (35))){
var state_41723__$1 = state_41723;
var statearr_41752_41796 = state_41723__$1;
(statearr_41752_41796[(2)] = null);

(statearr_41752_41796[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41724 === (19))){
var inst_41680 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_41723__$1 = state_41723;
if(cljs.core.truth_(inst_41680)){
var statearr_41753_41797 = state_41723__$1;
(statearr_41753_41797[(1)] = (22));

} else {
var statearr_41754_41798 = state_41723__$1;
(statearr_41754_41798[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41724 === (11))){
var inst_41655 = (state_41723[(2)]);
var state_41723__$1 = state_41723;
var statearr_41755_41799 = state_41723__$1;
(statearr_41755_41799[(2)] = inst_41655);

(statearr_41755_41799[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41724 === (9))){
var inst_41657 = figwheel.client.heads_up.clear.call(null);
var state_41723__$1 = state_41723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41723__$1,(12),inst_41657);
} else {
if((state_val_41724 === (5))){
var inst_41648 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_41723__$1 = state_41723;
var statearr_41756_41800 = state_41723__$1;
(statearr_41756_41800[(2)] = inst_41648);

(statearr_41756_41800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41724 === (14))){
var inst_41673 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_41723__$1 = state_41723;
if(cljs.core.truth_(inst_41673)){
var statearr_41757_41801 = state_41723__$1;
(statearr_41757_41801[(1)] = (18));

} else {
var statearr_41758_41802 = state_41723__$1;
(statearr_41758_41802[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41724 === (26))){
var inst_41695 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_41723__$1 = state_41723;
if(cljs.core.truth_(inst_41695)){
var statearr_41759_41803 = state_41723__$1;
(statearr_41759_41803[(1)] = (30));

} else {
var statearr_41760_41804 = state_41723__$1;
(statearr_41760_41804[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41724 === (16))){
var inst_41667 = (state_41723[(2)]);
var inst_41668 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41669 = figwheel.client.heads_up.display_exception.call(null,inst_41668);
var state_41723__$1 = (function (){var statearr_41761 = state_41723;
(statearr_41761[(9)] = inst_41667);

return statearr_41761;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41723__$1,(17),inst_41669);
} else {
if((state_val_41724 === (30))){
var inst_41697 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41698 = figwheel.client.heads_up.display_warning.call(null,inst_41697);
var state_41723__$1 = state_41723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41723__$1,(33),inst_41698);
} else {
if((state_val_41724 === (10))){
var inst_41661 = (state_41723[(2)]);
var state_41723__$1 = state_41723;
var statearr_41762_41805 = state_41723__$1;
(statearr_41762_41805[(2)] = inst_41661);

(statearr_41762_41805[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41724 === (18))){
var inst_41675 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41676 = figwheel.client.heads_up.display_exception.call(null,inst_41675);
var state_41723__$1 = state_41723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41723__$1,(21),inst_41676);
} else {
if((state_val_41724 === (37))){
var inst_41706 = (state_41723[(2)]);
var state_41723__$1 = state_41723;
var statearr_41763_41806 = state_41723__$1;
(statearr_41763_41806[(2)] = inst_41706);

(statearr_41763_41806[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41724 === (8))){
var inst_41653 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41723__$1 = state_41723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41723__$1,(11),inst_41653);
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
var statearr_41767 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41767[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22358__auto__);

(statearr_41767[(1)] = (1));

return statearr_41767;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22358__auto____1 = (function (state_41723){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_41723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e41768){if((e41768 instanceof Object)){
var ex__22361__auto__ = e41768;
var statearr_41769_41807 = state_41723;
(statearr_41769_41807[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41808 = state_41723;
state_41723 = G__41808;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22358__auto__ = function(state_41723){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22358__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22358__auto____1.call(this,state_41723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22358__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22358__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto__,msg_hist,msg_names,msg))
})();
var state__22471__auto__ = (function (){var statearr_41770 = f__22470__auto__.call(null);
(statearr_41770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto__);

return statearr_41770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto__,msg_hist,msg_names,msg))
);

return c__22469__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22469__auto___41871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto___41871,ch){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto___41871,ch){
return (function (state_41854){
var state_val_41855 = (state_41854[(1)]);
if((state_val_41855 === (1))){
var state_41854__$1 = state_41854;
var statearr_41856_41872 = state_41854__$1;
(statearr_41856_41872[(2)] = null);

(statearr_41856_41872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41855 === (2))){
var state_41854__$1 = state_41854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41854__$1,(4),ch);
} else {
if((state_val_41855 === (3))){
var inst_41852 = (state_41854[(2)]);
var state_41854__$1 = state_41854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41854__$1,inst_41852);
} else {
if((state_val_41855 === (4))){
var inst_41842 = (state_41854[(7)]);
var inst_41842__$1 = (state_41854[(2)]);
var state_41854__$1 = (function (){var statearr_41857 = state_41854;
(statearr_41857[(7)] = inst_41842__$1);

return statearr_41857;
})();
if(cljs.core.truth_(inst_41842__$1)){
var statearr_41858_41873 = state_41854__$1;
(statearr_41858_41873[(1)] = (5));

} else {
var statearr_41859_41874 = state_41854__$1;
(statearr_41859_41874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41855 === (5))){
var inst_41842 = (state_41854[(7)]);
var inst_41844 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_41842);
var state_41854__$1 = state_41854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41854__$1,(8),inst_41844);
} else {
if((state_val_41855 === (6))){
var state_41854__$1 = state_41854;
var statearr_41860_41875 = state_41854__$1;
(statearr_41860_41875[(2)] = null);

(statearr_41860_41875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41855 === (7))){
var inst_41850 = (state_41854[(2)]);
var state_41854__$1 = state_41854;
var statearr_41861_41876 = state_41854__$1;
(statearr_41861_41876[(2)] = inst_41850);

(statearr_41861_41876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41855 === (8))){
var inst_41846 = (state_41854[(2)]);
var state_41854__$1 = (function (){var statearr_41862 = state_41854;
(statearr_41862[(8)] = inst_41846);

return statearr_41862;
})();
var statearr_41863_41877 = state_41854__$1;
(statearr_41863_41877[(2)] = null);

(statearr_41863_41877[(1)] = (2));


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
});})(c__22469__auto___41871,ch))
;
return ((function (switch__22357__auto__,c__22469__auto___41871,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22358__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22358__auto____0 = (function (){
var statearr_41867 = [null,null,null,null,null,null,null,null,null];
(statearr_41867[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22358__auto__);

(statearr_41867[(1)] = (1));

return statearr_41867;
});
var figwheel$client$heads_up_plugin_$_state_machine__22358__auto____1 = (function (state_41854){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_41854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e41868){if((e41868 instanceof Object)){
var ex__22361__auto__ = e41868;
var statearr_41869_41878 = state_41854;
(statearr_41869_41878[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41879 = state_41854;
state_41854 = G__41879;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22358__auto__ = function(state_41854){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22358__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22358__auto____1.call(this,state_41854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22358__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22358__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto___41871,ch))
})();
var state__22471__auto__ = (function (){var statearr_41870 = f__22470__auto__.call(null);
(statearr_41870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___41871);

return statearr_41870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto___41871,ch))
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
return (function (state_41900){
var state_val_41901 = (state_41900[(1)]);
if((state_val_41901 === (1))){
var inst_41895 = cljs.core.async.timeout.call(null,(3000));
var state_41900__$1 = state_41900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41900__$1,(2),inst_41895);
} else {
if((state_val_41901 === (2))){
var inst_41897 = (state_41900[(2)]);
var inst_41898 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_41900__$1 = (function (){var statearr_41902 = state_41900;
(statearr_41902[(7)] = inst_41897);

return statearr_41902;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41900__$1,inst_41898);
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
var statearr_41906 = [null,null,null,null,null,null,null,null];
(statearr_41906[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22358__auto__);

(statearr_41906[(1)] = (1));

return statearr_41906;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22358__auto____1 = (function (state_41900){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_41900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e41907){if((e41907 instanceof Object)){
var ex__22361__auto__ = e41907;
var statearr_41908_41910 = state_41900;
(statearr_41908_41910[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41911 = state_41900;
state_41900 = G__41911;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22358__auto__ = function(state_41900){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22358__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22358__auto____1.call(this,state_41900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22358__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22358__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto__))
})();
var state__22471__auto__ = (function (){var statearr_41909 = f__22470__auto__.call(null);
(statearr_41909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto__);

return statearr_41909;
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
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__41912){
var map__41919 = p__41912;
var map__41919__$1 = ((((!((map__41919 == null)))?((((map__41919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41919):map__41919);
var ed = map__41919__$1;
var formatted_exception = cljs.core.get.call(null,map__41919__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__41919__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__41919__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__41921_41925 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__41922_41926 = null;
var count__41923_41927 = (0);
var i__41924_41928 = (0);
while(true){
if((i__41924_41928 < count__41923_41927)){
var msg_41929 = cljs.core._nth.call(null,chunk__41922_41926,i__41924_41928);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41929);

var G__41930 = seq__41921_41925;
var G__41931 = chunk__41922_41926;
var G__41932 = count__41923_41927;
var G__41933 = (i__41924_41928 + (1));
seq__41921_41925 = G__41930;
chunk__41922_41926 = G__41931;
count__41923_41927 = G__41932;
i__41924_41928 = G__41933;
continue;
} else {
var temp__4657__auto___41934 = cljs.core.seq.call(null,seq__41921_41925);
if(temp__4657__auto___41934){
var seq__41921_41935__$1 = temp__4657__auto___41934;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41921_41935__$1)){
var c__19307__auto___41936 = cljs.core.chunk_first.call(null,seq__41921_41935__$1);
var G__41937 = cljs.core.chunk_rest.call(null,seq__41921_41935__$1);
var G__41938 = c__19307__auto___41936;
var G__41939 = cljs.core.count.call(null,c__19307__auto___41936);
var G__41940 = (0);
seq__41921_41925 = G__41937;
chunk__41922_41926 = G__41938;
count__41923_41927 = G__41939;
i__41924_41928 = G__41940;
continue;
} else {
var msg_41941 = cljs.core.first.call(null,seq__41921_41935__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41941);

var G__41942 = cljs.core.next.call(null,seq__41921_41935__$1);
var G__41943 = null;
var G__41944 = (0);
var G__41945 = (0);
seq__41921_41925 = G__41942;
chunk__41922_41926 = G__41943;
count__41923_41927 = G__41944;
i__41924_41928 = G__41945;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__41946){
var map__41949 = p__41946;
var map__41949__$1 = ((((!((map__41949 == null)))?((((map__41949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41949):map__41949);
var w = map__41949__$1;
var message = cljs.core.get.call(null,map__41949__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__41961 = cljs.core.seq.call(null,plugins);
var chunk__41962 = null;
var count__41963 = (0);
var i__41964 = (0);
while(true){
if((i__41964 < count__41963)){
var vec__41965 = cljs.core._nth.call(null,chunk__41962,i__41964);
var k = cljs.core.nth.call(null,vec__41965,(0),null);
var plugin = cljs.core.nth.call(null,vec__41965,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41971 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41961,chunk__41962,count__41963,i__41964,pl_41971,vec__41965,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_41971.call(null,msg_hist);
});})(seq__41961,chunk__41962,count__41963,i__41964,pl_41971,vec__41965,k,plugin))
);
} else {
}

var G__41972 = seq__41961;
var G__41973 = chunk__41962;
var G__41974 = count__41963;
var G__41975 = (i__41964 + (1));
seq__41961 = G__41972;
chunk__41962 = G__41973;
count__41963 = G__41974;
i__41964 = G__41975;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41961);
if(temp__4657__auto__){
var seq__41961__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41961__$1)){
var c__19307__auto__ = cljs.core.chunk_first.call(null,seq__41961__$1);
var G__41976 = cljs.core.chunk_rest.call(null,seq__41961__$1);
var G__41977 = c__19307__auto__;
var G__41978 = cljs.core.count.call(null,c__19307__auto__);
var G__41979 = (0);
seq__41961 = G__41976;
chunk__41962 = G__41977;
count__41963 = G__41978;
i__41964 = G__41979;
continue;
} else {
var vec__41968 = cljs.core.first.call(null,seq__41961__$1);
var k = cljs.core.nth.call(null,vec__41968,(0),null);
var plugin = cljs.core.nth.call(null,vec__41968,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41980 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41961,chunk__41962,count__41963,i__41964,pl_41980,vec__41968,k,plugin,seq__41961__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_41980.call(null,msg_hist);
});})(seq__41961,chunk__41962,count__41963,i__41964,pl_41980,vec__41968,k,plugin,seq__41961__$1,temp__4657__auto__))
);
} else {
}

var G__41981 = cljs.core.next.call(null,seq__41961__$1);
var G__41982 = null;
var G__41983 = (0);
var G__41984 = (0);
seq__41961 = G__41981;
chunk__41962 = G__41982;
count__41963 = G__41983;
i__41964 = G__41984;
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
var args41985 = [];
var len__19571__auto___41988 = arguments.length;
var i__19572__auto___41989 = (0);
while(true){
if((i__19572__auto___41989 < len__19571__auto___41988)){
args41985.push((arguments[i__19572__auto___41989]));

var G__41990 = (i__19572__auto___41989 + (1));
i__19572__auto___41989 = G__41990;
continue;
} else {
}
break;
}

var G__41987 = args41985.length;
switch (G__41987) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41985.length)].join('')));

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
var len__19571__auto___41996 = arguments.length;
var i__19572__auto___41997 = (0);
while(true){
if((i__19572__auto___41997 < len__19571__auto___41996)){
args__19578__auto__.push((arguments[i__19572__auto___41997]));

var G__41998 = (i__19572__auto___41997 + (1));
i__19572__auto___41997 = G__41998;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__41993){
var map__41994 = p__41993;
var map__41994__$1 = ((((!((map__41994 == null)))?((((map__41994.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41994.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41994):map__41994);
var opts = map__41994__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq41992){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41992));
});


//# sourceMappingURL=client.js.map?rel=1466621251067