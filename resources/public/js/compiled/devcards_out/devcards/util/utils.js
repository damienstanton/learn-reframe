// Compiled by ClojureScript 1.9.88 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__4655__auto__ = goog.global.document;
if(cljs.core.truth_(temp__4655__auto__)){
var doc = temp__4655__auto__;
return (doc["write"]);
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__19482__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_21469_21471 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_21470_21472 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_21469_21471,_STAR_print_fn_STAR_21470_21472,sb__19482__auto__){
return (function (x__19483__auto__){
return sb__19482__auto__.append(x__19483__auto__);
});})(_STAR_print_newline_STAR_21469_21471,_STAR_print_fn_STAR_21470_21472,sb__19482__auto__))
;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_21470_21472;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_21469_21471;
}
return [cljs.core.str(sb__19482__auto__)].join('');
}catch (e21467){if((e21467 instanceof Error)){
var e1 = e21467;
try{return obj.toString();
}catch (e21468){if((e21468 instanceof Error)){
var e2 = e21468;
return [cljs.core.str("<<Un-printable Type>>")].join('');
} else {
throw e21468;

}
}} else {
throw e21467;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_21474 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_21474;
}});

//# sourceMappingURL=utils.js.map?rel=1466621017332