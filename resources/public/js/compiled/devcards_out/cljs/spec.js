// Compiled by ClojureScript 1.9.88 {}
goog.provide('cljs.spec');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('cljs.spec.impl.gen');
goog.require('clojure.string');
cljs.spec.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_error_limit_STAR_ = (20);
/**
 * if false, instrumented fns call straight through
 */
cljs.spec._STAR_instrument_enabled_STAR_ = true;

/**
 * @interface
 */
cljs.spec.Spec = function(){};

cljs.spec.conform_STAR_ = (function cljs$spec$conform_STAR_(spec,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$conform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__19159__auto__ = (((spec == null))?null:spec);
var m__19160__auto__ = (cljs.spec.conform_STAR_[goog.typeOf(x__19159__auto__)]);
if(!((m__19160__auto__ == null))){
return m__19160__auto__.call(null,spec,x);
} else {
var m__19160__auto____$1 = (cljs.spec.conform_STAR_["_"]);
if(!((m__19160__auto____$1 == null))){
return m__19160__auto____$1.call(null,spec,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.conform*",spec);
}
}
}
});

cljs.spec.unform_STAR_ = (function cljs$spec$unform_STAR_(spec,y){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$unform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$unform_STAR_$arity$2(spec,y);
} else {
var x__19159__auto__ = (((spec == null))?null:spec);
var m__19160__auto__ = (cljs.spec.unform_STAR_[goog.typeOf(x__19159__auto__)]);
if(!((m__19160__auto__ == null))){
return m__19160__auto__.call(null,spec,y);
} else {
var m__19160__auto____$1 = (cljs.spec.unform_STAR_["_"]);
if(!((m__19160__auto____$1 == null))){
return m__19160__auto____$1.call(null,spec,y);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.unform*",spec);
}
}
}
});

cljs.spec.explain_STAR_ = (function cljs$spec$explain_STAR_(spec,path,via,in$,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$explain_STAR_$arity$5 == null)))){
return spec.cljs$spec$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__19159__auto__ = (((spec == null))?null:spec);
var m__19160__auto__ = (cljs.spec.explain_STAR_[goog.typeOf(x__19159__auto__)]);
if(!((m__19160__auto__ == null))){
return m__19160__auto__.call(null,spec,path,via,in$,x);
} else {
var m__19160__auto____$1 = (cljs.spec.explain_STAR_["_"]);
if(!((m__19160__auto____$1 == null))){
return m__19160__auto____$1.call(null,spec,path,via,in$,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.explain*",spec);
}
}
}
});

cljs.spec.gen_STAR_ = (function cljs$spec$gen_STAR_(spec,overrides,path,rmap){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$gen_STAR_$arity$4 == null)))){
return spec.cljs$spec$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__19159__auto__ = (((spec == null))?null:spec);
var m__19160__auto__ = (cljs.spec.gen_STAR_[goog.typeOf(x__19159__auto__)]);
if(!((m__19160__auto__ == null))){
return m__19160__auto__.call(null,spec,overrides,path,rmap);
} else {
var m__19160__auto____$1 = (cljs.spec.gen_STAR_["_"]);
if(!((m__19160__auto____$1 == null))){
return m__19160__auto____$1.call(null,spec,overrides,path,rmap);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.gen*",spec);
}
}
}
});

cljs.spec.with_gen_STAR_ = (function cljs$spec$with_gen_STAR_(spec,gfn){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$with_gen_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__19159__auto__ = (((spec == null))?null:spec);
var m__19160__auto__ = (cljs.spec.with_gen_STAR_[goog.typeOf(x__19159__auto__)]);
if(!((m__19160__auto__ == null))){
return m__19160__auto__.call(null,spec,gfn);
} else {
var m__19160__auto____$1 = (cljs.spec.with_gen_STAR_["_"]);
if(!((m__19160__auto____$1 == null))){
return m__19160__auto____$1.call(null,spec,gfn);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.with-gen*",spec);
}
}
}
});

cljs.spec.describe_STAR_ = (function cljs$spec$describe_STAR_(spec){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$describe_STAR_$arity$1 == null)))){
return spec.cljs$spec$Spec$describe_STAR_$arity$1(spec);
} else {
var x__19159__auto__ = (((spec == null))?null:spec);
var m__19160__auto__ = (cljs.spec.describe_STAR_[goog.typeOf(x__19159__auto__)]);
if(!((m__19160__auto__ == null))){
return m__19160__auto__.call(null,spec);
} else {
var m__19160__auto____$1 = (cljs.spec.describe_STAR_["_"]);
if(!((m__19160__auto____$1 == null))){
return m__19160__auto____$1.call(null,spec);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.describe*",spec);
}
}
}
});

if(typeof cljs.spec.registry_ref !== 'undefined'){
} else {
cljs.spec.registry_ref = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.named_QMARK_ = (function cljs$spec$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || (x.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.spec.with_name = (function cljs$spec$with_name(spec,name){
return cljs.core.with_meta.call(null,spec,cljs.core.assoc.call(null,cljs.core.meta.call(null,spec),new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006),name));
});
cljs.spec.spec_name = (function cljs$spec$spec_name(spec){
if((spec instanceof cljs.core.Keyword)){
return spec;
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || (spec.cljs$core$IMeta$))?true:false):false)){
return new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,spec));
} else {
return null;
}
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not Named
 */
cljs.spec.reg_resolve = (function cljs$spec$reg_resolve(k){
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,k))){
var reg = cljs.core.deref.call(null,cljs.spec.registry_ref);
var spec = k;
while(true){
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,spec))){
var G__29847 = cljs.core.get.call(null,reg,spec);
spec = G__29847;
continue;
} else {
if(cljs.core.truth_(spec)){
return cljs.spec.with_name.call(null,spec,k);
} else {
return null;
}
}
break;
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.reg_resolve_BANG_ = (function cljs$spec$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var or__18496__auto__ = cljs.spec.reg_resolve.call(null,k);
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
throw (new Error([cljs.core.str("Unable to resolve spec: "),cljs.core.str(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.spec_QMARK_ = (function cljs$spec$spec_QMARK_(x){
var and__18484__auto__ = ((!((x == null)))?(((false) || (x.cljs$spec$Spec$))?true:false):false);
if(and__18484__auto__){
return x;
} else {
return and__18484__auto__;
}
});
/**
 * returns x if x is a (clojure.spec) regex op, else logical false
 */
cljs.spec.regex_QMARK_ = (function cljs$spec$regex_QMARK_(x){
var and__18484__auto__ = new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__18484__auto__)){
return x;
} else {
return and__18484__auto__;
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.maybe_spec = (function cljs$spec$maybe_spec(spec_or_k){
var s = (function (){var or__18496__auto__ = cljs.spec.spec_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
var or__18496__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__18496__auto____$1)){
return or__18496__auto____$1;
} else {
var or__18496__auto____$2 = (function (){var and__18484__auto__ = cljs.spec.named_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(and__18484__auto__)){
return cljs.spec.reg_resolve.call(null,spec_or_k);
} else {
return and__18484__auto__;
}
})();
if(cljs.core.truth_(or__18496__auto____$2)){
return or__18496__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,s))){
return cljs.spec.with_name.call(null,cljs.spec.regex_spec_impl.call(null,s,null),cljs.spec.spec_name.call(null,s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.the_spec = (function cljs$spec$the_spec(spec_or_k){
var or__18496__auto__ = cljs.spec.maybe_spec.call(null,spec_or_k);
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,spec_or_k))){
throw (new Error([cljs.core.str("Unable to resolve spec: "),cljs.core.str(spec_or_k)].join('')));
} else {
return null;
}
}
});
cljs.spec.specize = (function cljs$spec$specize(s){
var or__18496__auto__ = cljs.spec.the_spec.call(null,s);
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return cljs.spec.spec_impl.call(null,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582),s,null,null);
}
});
/**
 * Given a spec and a value, returns :clojure.spec/invalid if value does not match spec,
 *   else the (possibly destructured) value.
 */
cljs.spec.conform = (function cljs$spec$conform(spec,x){
return cljs.spec.conform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.unform = (function cljs$spec$unform(spec,x){
return cljs.spec.unform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.form = (function cljs$spec$form(spec){
return cljs.spec.describe_STAR_.call(null,cljs.spec.specize.call(null,spec));
});
cljs.spec.abbrev = (function cljs$spec$abbrev(form){
if(cljs.core.seq_QMARK_.call(null,form)){
return clojure.walk.postwalk.call(null,(function (form__$1){
if(cljs.core.truth_((function (){var and__18484__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__18484__auto__){
return cljs.core.namespace.call(null,form__$1);
} else {
return and__18484__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form__$1));
} else {
if((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.first.call(null,form__$1))) && (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.second.call(null,form__$1)))){
return cljs.core.last.call(null,form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__18484__auto__ = (form instanceof cljs.core.Symbol);
if(and__18484__auto__){
return cljs.core.namespace.call(null,form);
} else {
return and__18484__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.describe = (function cljs$spec$describe(spec){
return cljs.spec.abbrev.call(null,cljs.spec.form.call(null,spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.with_gen = (function cljs$spec$with_gen(spec,gen_fn){
return cljs.spec.with_gen_STAR_.call(null,cljs.spec.specize.call(null,spec),gen_fn);
});
cljs.spec.explain_data_STAR_ = (function cljs$spec$explain_data_STAR_(spec,path,via,in$,x){
var temp__4657__auto__ = cljs.spec.explain_STAR_.call(null,cljs.spec.specize.call(null,spec),path,via,in$,x);
if(cljs.core.truth_(temp__4657__auto__)){
var probs = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),probs], null);
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a path->problem-map, where problem-map has at least :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.explain_data = (function cljs$spec$explain_data(spec,x){
return cljs.spec.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__4655__auto__ = cljs.spec.spec_name.call(null,spec);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * prints an explanation to *out*.
 */
cljs.spec.explain_out = (function cljs$spec$explain_out(ed){
if(cljs.core.truth_(ed)){
return cljs.core.print.call(null,(function (){var sb__19482__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_29898_29944 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_29899_29945 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_29898_29944,_STAR_print_fn_STAR_29899_29945,sb__19482__auto__){
return (function (x__19483__auto__){
return sb__19482__auto__.append(x__19483__auto__);
});})(_STAR_print_newline_STAR_29898_29944,_STAR_print_fn_STAR_29899_29945,sb__19482__auto__))
;

try{var seq__29900_29946 = cljs.core.seq.call(null,new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678).cljs$core$IFn$_invoke$arity$1(ed));
var chunk__29901_29947 = null;
var count__29902_29948 = (0);
var i__29903_29949 = (0);
while(true){
if((i__29903_29949 < count__29902_29948)){
var vec__29904_29950 = cljs.core._nth.call(null,chunk__29901_29947,i__29903_29949);
var path_29951 = cljs.core.nth.call(null,vec__29904_29950,(0),null);
var map__29907_29952 = cljs.core.nth.call(null,vec__29904_29950,(1),null);
var map__29907_29953__$1 = ((((!((map__29907_29952 == null)))?((((map__29907_29952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29907_29952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29907_29952):map__29907_29952);
var prob_29954 = map__29907_29953__$1;
var pred_29955 = cljs.core.get.call(null,map__29907_29953__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_29956 = cljs.core.get.call(null,map__29907_29953__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_29957 = cljs.core.get.call(null,map__29907_29953__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_29958 = cljs.core.get.call(null,map__29907_29953__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_29959 = cljs.core.get.call(null,map__29907_29953__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_29959)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_29959),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_29956);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_29958)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_29958)));
}

if(cljs.core.empty_QMARK_.call(null,path_29951)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_29951));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,pred_29955);

if(cljs.core.truth_(reason_29957)){
cljs.core.print.call(null,", ",reason_29957);
} else {
}

var seq__29909_29960 = cljs.core.seq.call(null,prob_29954);
var chunk__29910_29961 = null;
var count__29911_29962 = (0);
var i__29912_29963 = (0);
while(true){
if((i__29912_29963 < count__29911_29962)){
var vec__29913_29964 = cljs.core._nth.call(null,chunk__29910_29961,i__29912_29963);
var k_29965 = cljs.core.nth.call(null,vec__29913_29964,(0),null);
var v_29966 = cljs.core.nth.call(null,vec__29913_29964,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_29965))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_29965)," ");

cljs.core.pr.call(null,v_29966);
}

var G__29967 = seq__29909_29960;
var G__29968 = chunk__29910_29961;
var G__29969 = count__29911_29962;
var G__29970 = (i__29912_29963 + (1));
seq__29909_29960 = G__29967;
chunk__29910_29961 = G__29968;
count__29911_29962 = G__29969;
i__29912_29963 = G__29970;
continue;
} else {
var temp__4657__auto___29971 = cljs.core.seq.call(null,seq__29909_29960);
if(temp__4657__auto___29971){
var seq__29909_29972__$1 = temp__4657__auto___29971;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29909_29972__$1)){
var c__19307__auto___29973 = cljs.core.chunk_first.call(null,seq__29909_29972__$1);
var G__29974 = cljs.core.chunk_rest.call(null,seq__29909_29972__$1);
var G__29975 = c__19307__auto___29973;
var G__29976 = cljs.core.count.call(null,c__19307__auto___29973);
var G__29977 = (0);
seq__29909_29960 = G__29974;
chunk__29910_29961 = G__29975;
count__29911_29962 = G__29976;
i__29912_29963 = G__29977;
continue;
} else {
var vec__29916_29978 = cljs.core.first.call(null,seq__29909_29972__$1);
var k_29979 = cljs.core.nth.call(null,vec__29916_29978,(0),null);
var v_29980 = cljs.core.nth.call(null,vec__29916_29978,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_29979))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_29979)," ");

cljs.core.pr.call(null,v_29980);
}

var G__29981 = cljs.core.next.call(null,seq__29909_29972__$1);
var G__29982 = null;
var G__29983 = (0);
var G__29984 = (0);
seq__29909_29960 = G__29981;
chunk__29910_29961 = G__29982;
count__29911_29962 = G__29983;
i__29912_29963 = G__29984;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__29985 = seq__29900_29946;
var G__29986 = chunk__29901_29947;
var G__29987 = count__29902_29948;
var G__29988 = (i__29903_29949 + (1));
seq__29900_29946 = G__29985;
chunk__29901_29947 = G__29986;
count__29902_29948 = G__29987;
i__29903_29949 = G__29988;
continue;
} else {
var temp__4657__auto___29989 = cljs.core.seq.call(null,seq__29900_29946);
if(temp__4657__auto___29989){
var seq__29900_29990__$1 = temp__4657__auto___29989;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29900_29990__$1)){
var c__19307__auto___29991 = cljs.core.chunk_first.call(null,seq__29900_29990__$1);
var G__29992 = cljs.core.chunk_rest.call(null,seq__29900_29990__$1);
var G__29993 = c__19307__auto___29991;
var G__29994 = cljs.core.count.call(null,c__19307__auto___29991);
var G__29995 = (0);
seq__29900_29946 = G__29992;
chunk__29901_29947 = G__29993;
count__29902_29948 = G__29994;
i__29903_29949 = G__29995;
continue;
} else {
var vec__29919_29996 = cljs.core.first.call(null,seq__29900_29990__$1);
var path_29997 = cljs.core.nth.call(null,vec__29919_29996,(0),null);
var map__29922_29998 = cljs.core.nth.call(null,vec__29919_29996,(1),null);
var map__29922_29999__$1 = ((((!((map__29922_29998 == null)))?((((map__29922_29998.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29922_29998.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29922_29998):map__29922_29998);
var prob_30000 = map__29922_29999__$1;
var pred_30001 = cljs.core.get.call(null,map__29922_29999__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_30002 = cljs.core.get.call(null,map__29922_29999__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_30003 = cljs.core.get.call(null,map__29922_29999__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_30004 = cljs.core.get.call(null,map__29922_29999__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_30005 = cljs.core.get.call(null,map__29922_29999__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_30005)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_30005),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_30002);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_30004)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_30004)));
}

if(cljs.core.empty_QMARK_.call(null,path_29997)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_29997));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,pred_30001);

if(cljs.core.truth_(reason_30003)){
cljs.core.print.call(null,", ",reason_30003);
} else {
}

var seq__29924_30006 = cljs.core.seq.call(null,prob_30000);
var chunk__29925_30007 = null;
var count__29926_30008 = (0);
var i__29927_30009 = (0);
while(true){
if((i__29927_30009 < count__29926_30008)){
var vec__29928_30010 = cljs.core._nth.call(null,chunk__29925_30007,i__29927_30009);
var k_30011 = cljs.core.nth.call(null,vec__29928_30010,(0),null);
var v_30012 = cljs.core.nth.call(null,vec__29928_30010,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_30011))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_30011)," ");

cljs.core.pr.call(null,v_30012);
}

var G__30013 = seq__29924_30006;
var G__30014 = chunk__29925_30007;
var G__30015 = count__29926_30008;
var G__30016 = (i__29927_30009 + (1));
seq__29924_30006 = G__30013;
chunk__29925_30007 = G__30014;
count__29926_30008 = G__30015;
i__29927_30009 = G__30016;
continue;
} else {
var temp__4657__auto___30017__$1 = cljs.core.seq.call(null,seq__29924_30006);
if(temp__4657__auto___30017__$1){
var seq__29924_30018__$1 = temp__4657__auto___30017__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29924_30018__$1)){
var c__19307__auto___30019 = cljs.core.chunk_first.call(null,seq__29924_30018__$1);
var G__30020 = cljs.core.chunk_rest.call(null,seq__29924_30018__$1);
var G__30021 = c__19307__auto___30019;
var G__30022 = cljs.core.count.call(null,c__19307__auto___30019);
var G__30023 = (0);
seq__29924_30006 = G__30020;
chunk__29925_30007 = G__30021;
count__29926_30008 = G__30022;
i__29927_30009 = G__30023;
continue;
} else {
var vec__29931_30024 = cljs.core.first.call(null,seq__29924_30018__$1);
var k_30025 = cljs.core.nth.call(null,vec__29931_30024,(0),null);
var v_30026 = cljs.core.nth.call(null,vec__29931_30024,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_30025))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_30025)," ");

cljs.core.pr.call(null,v_30026);
}

var G__30027 = cljs.core.next.call(null,seq__29924_30018__$1);
var G__30028 = null;
var G__30029 = (0);
var G__30030 = (0);
seq__29924_30006 = G__30027;
chunk__29925_30007 = G__30028;
count__29926_30008 = G__30029;
i__29927_30009 = G__30030;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__30031 = cljs.core.next.call(null,seq__29900_29990__$1);
var G__30032 = null;
var G__30033 = (0);
var G__30034 = (0);
seq__29900_29946 = G__30031;
chunk__29901_29947 = G__30032;
count__29902_29948 = G__30033;
i__29903_29949 = G__30034;
continue;
}
} else {
}
}
break;
}

var seq__29934_30035 = cljs.core.seq.call(null,ed);
var chunk__29935_30036 = null;
var count__29936_30037 = (0);
var i__29937_30038 = (0);
while(true){
if((i__29937_30038 < count__29936_30037)){
var vec__29938_30039 = cljs.core._nth.call(null,chunk__29935_30036,i__29937_30038);
var k_30040 = cljs.core.nth.call(null,vec__29938_30039,(0),null);
var v_30041 = cljs.core.nth.call(null,vec__29938_30039,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_30040))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_30040)," ");

cljs.core.pr.call(null,v_30041);

cljs.core.newline.call(null);
}

var G__30042 = seq__29934_30035;
var G__30043 = chunk__29935_30036;
var G__30044 = count__29936_30037;
var G__30045 = (i__29937_30038 + (1));
seq__29934_30035 = G__30042;
chunk__29935_30036 = G__30043;
count__29936_30037 = G__30044;
i__29937_30038 = G__30045;
continue;
} else {
var temp__4657__auto___30046 = cljs.core.seq.call(null,seq__29934_30035);
if(temp__4657__auto___30046){
var seq__29934_30047__$1 = temp__4657__auto___30046;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29934_30047__$1)){
var c__19307__auto___30048 = cljs.core.chunk_first.call(null,seq__29934_30047__$1);
var G__30049 = cljs.core.chunk_rest.call(null,seq__29934_30047__$1);
var G__30050 = c__19307__auto___30048;
var G__30051 = cljs.core.count.call(null,c__19307__auto___30048);
var G__30052 = (0);
seq__29934_30035 = G__30049;
chunk__29935_30036 = G__30050;
count__29936_30037 = G__30051;
i__29937_30038 = G__30052;
continue;
} else {
var vec__29941_30053 = cljs.core.first.call(null,seq__29934_30047__$1);
var k_30054 = cljs.core.nth.call(null,vec__29941_30053,(0),null);
var v_30055 = cljs.core.nth.call(null,vec__29941_30053,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_30054))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_30054)," ");

cljs.core.pr.call(null,v_30055);

cljs.core.newline.call(null);
}

var G__30056 = cljs.core.next.call(null,seq__29934_30047__$1);
var G__30057 = null;
var G__30058 = (0);
var G__30059 = (0);
seq__29934_30035 = G__30056;
chunk__29935_30036 = G__30057;
count__29936_30037 = G__30058;
i__29937_30038 = G__30059;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29899_29945;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29898_29944;
}
return [cljs.core.str(sb__19482__auto__)].join('');
})());
} else {
return cljs.core.println.call(null,"Success!");
}
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.explain = (function cljs$spec$explain(spec,x){
return cljs.spec.explain_out.call(null,cljs.spec.explain_data.call(null,spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.explain_str = (function cljs$spec$explain_str(spec,x){
var sb__19482__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_30062_30064 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_30063_30065 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_30062_30064,_STAR_print_fn_STAR_30063_30065,sb__19482__auto__){
return (function (x__19483__auto__){
return sb__19482__auto__.append(x__19483__auto__);
});})(_STAR_print_newline_STAR_30062_30064,_STAR_print_fn_STAR_30063_30065,sb__19482__auto__))
;

try{cljs.spec.explain.call(null,spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30063_30065;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30062_30064;
}
return [cljs.core.str(sb__19482__auto__)].join('');
});
cljs.spec.gensub = (function cljs$spec$gensub(spec,overrides,path,rmap,form){
var spec__$1 = (function (){var or__18496__auto__ = cljs.core.get.call(null,overrides,spec);
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return spec;
}
})();
var spec__$2 = cljs.spec.specize.call(null,spec__$1);
var temp__4655__auto__ = (function (){var or__18496__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return cljs.spec.gen_STAR_.call(null,spec__$2,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var g = temp__4655__auto__;
return cljs.spec.impl.gen.such_that.call(null,((function (g,temp__4655__auto__,spec__$1,spec__$2){
return (function (p1__30066_SHARP_){
return cljs.spec.valid_QMARK_.call(null,spec__$2,p1__30066_SHARP_);
});})(g,temp__4655__auto__,spec__$1,spec__$2))
,g,(100));
} else {
throw (new Error([cljs.core.str("Unable to construct gen at: "),cljs.core.str(path),cljs.core.str(" for: "),cljs.core.str(cljs.spec.abbrev.call(null,form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to
 *   generators. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.gen = (function cljs$spec$gen(var_args){
var args30067 = [];
var len__19571__auto___30070 = arguments.length;
var i__19572__auto___30071 = (0);
while(true){
if((i__19572__auto___30071 < len__19571__auto___30070)){
args30067.push((arguments[i__19572__auto___30071]));

var G__30072 = (i__19572__auto___30071 + (1));
i__19572__auto___30071 = G__30072;
continue;
} else {
}
break;
}

var G__30069 = args30067.length;
switch (G__30069) {
case 1:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30067.length)].join('')));

}
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.gen.call(null,spec,null);
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.gensub.call(null,spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086),cljs.spec._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.def_impl = (function cljs$spec$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__18484__auto__ = cljs.spec.named_QMARK_.call(null,k);
if(cljs.core.truth_(and__18484__auto__)){
return cljs.core.namespace.call(null,k);
} else {
return and__18484__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("k must be namespaced keyword or resolveable symbol"),cljs.core.str("\n"),cljs.core.str("(c/and (named? k) (namespace k))")].join('')));
}

var spec__$1 = (cljs.core.truth_((function (){var or__18496__auto__ = cljs.spec.spec_QMARK_.call(null,spec);
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
var or__18496__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec);
if(cljs.core.truth_(or__18496__auto____$1)){
return or__18496__auto____$1;
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.registry_ref),spec);
}
}
})())?spec:cljs.spec.spec_impl.call(null,form,spec,null,null));
cljs.core.swap_BANG_.call(null,cljs.spec.registry_ref,cljs.core.assoc,k,spec__$1);

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.registry = (function cljs$spec$registry(){
return cljs.core.deref.call(null,cljs.spec.registry_ref);
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.__GT_sym = (function cljs$spec$__GT_sym(x){
if(cljs.core.var_QMARK_.call(null,x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.get_spec = (function cljs$spec$get_spec(k){
return cljs.core.get.call(null,cljs.spec.registry.call(null),(((k instanceof cljs.core.Keyword))?k:cljs.spec.__GT_sym.call(null,k)));
});
/**
 * Returns nil if v conforms to spec, else throws ex-info with explain-data.
 */
cljs.spec.expect = (function cljs$spec$expect(spec,v){
return null;
});
/**
 * Fn-spec must include at least :args or :ret specs.
 */
cljs.spec.fn_spec_QMARK_ = (function cljs$spec$fn_spec_QMARK_(m){
var or__18496__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(m);
}
});
cljs.spec.spec_checking_fn = (function cljs$spec$spec_checking_fn(v,f){
var conform_BANG_ = (function (v__$1,role,spec,data,args){
var conformed = cljs.spec.conform.call(null,spec,data);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),conformed)){
var ed = cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [role], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,data),new cljs.core.Keyword("cljs.spec","args","cljs.spec/args",-367019609),args);
throw cljs.core.ex_info.call(null,[cljs.core.str("Call to "),cljs.core.str(cljs.core.pr_str.call(null,v__$1)),cljs.core.str(" did not conform to spec:\n"),cljs.core.str((function (){var sb__19482__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_30080_30086 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_30081_30087 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_30080_30086,_STAR_print_fn_STAR_30081_30087,sb__19482__auto__,ed,conformed){
return (function (x__19483__auto__){
return sb__19482__auto__.append(x__19483__auto__);
});})(_STAR_print_newline_STAR_30080_30086,_STAR_print_fn_STAR_30081_30087,sb__19482__auto__,ed,conformed))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30081_30087;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30080_30086;
}
return [cljs.core.str(sb__19482__auto__)].join('');
})())].join(''),ed);
} else {
return conformed;
}
});
var G__30082 = ((function (conform_BANG_){
return (function() { 
var G__30088__delegate = function (args){
if(cljs.core.truth_(cljs.spec._STAR_instrument_enabled_STAR_)){
var _STAR_instrument_enabled_STAR_30083 = cljs.spec._STAR_instrument_enabled_STAR_;
cljs.spec._STAR_instrument_enabled_STAR_ = null;

try{var specs = cljs.spec.get_spec.call(null,v);
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs))){
conform_BANG_.call(null,v,new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args,args);
} else {
}

var _STAR_instrument_enabled_STAR_30084 = cljs.spec._STAR_instrument_enabled_STAR_;
cljs.spec._STAR_instrument_enabled_STAR_ = true;

try{return cljs.core.apply.call(null,f,args);
}finally {cljs.spec._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR_30084;
}}finally {cljs.spec._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR_30083;
}} else {
return cljs.core.apply.call(null,f,args);
}
};
var G__30088 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30089__i = 0, G__30089__a = new Array(arguments.length -  0);
while (G__30089__i < G__30089__a.length) {G__30089__a[G__30089__i] = arguments[G__30089__i + 0]; ++G__30089__i;}
  args = new cljs.core.IndexedSeq(G__30089__a,0);
} 
return G__30088__delegate.call(this,args);};
G__30088.cljs$lang$maxFixedArity = 0;
G__30088.cljs$lang$applyTo = (function (arglist__30090){
var args = cljs.core.seq(arglist__30090);
return G__30088__delegate(args);
});
G__30088.cljs$core$IFn$_invoke$arity$variadic = G__30088__delegate;
return G__30088;
})()
;})(conform_BANG_))
;
if(!((f instanceof cljs.core.MultiFn))){
var G__30085 = G__30082;
goog.object.extend(G__30085,f);

return G__30085;
} else {
return G__30082;
}
});
cljs.spec.macroexpand_check = (function cljs$spec$macroexpand_check(v,args){
var specs = cljs.spec.get_spec.call(null,v);
var temp__4657__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__4657__auto__)){
var arg_spec = temp__4657__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.conform.call(null,arg_spec,args))){
var ed = cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,arg_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576)], null),(function (){var temp__4655__auto__ = cljs.spec.spec_name.call(null,arg_spec);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),new cljs.core.Keyword("cljs.spec","args","cljs.spec/args",-367019609),args);
throw (new Error([cljs.core.str("Call to "),cljs.core.str(cljs.spec.__GT_sym.call(null,v)),cljs.core.str(" did not conform to spec:\n"),cljs.core.str((function (){var sb__19482__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_30093_30095 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_30094_30096 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_30093_30095,_STAR_print_fn_STAR_30094_30096,sb__19482__auto__,ed,arg_spec,temp__4657__auto__,specs){
return (function (x__19483__auto__){
return sb__19482__auto__.append(x__19483__auto__);
});})(_STAR_print_newline_STAR_30093_30095,_STAR_print_fn_STAR_30094_30096,sb__19482__auto__,ed,arg_spec,temp__4657__auto__,specs))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30094_30096;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30093_30095;
}
return [cljs.core.str(sb__19482__auto__)].join('');
})())].join('')));
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.no_fn_spec = (function cljs$spec$no_fn_spec(v,specs){
return cljs.core.ex_info.call(null,[cljs.core.str("Fn at "),cljs.core.str(cljs.core.pr_str.call(null,v)),cljs.core.str(" is not spec'ed.")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"var","var",-769682797),v,new cljs.core.Keyword(null,"specs","specs",1426570741),specs], null));
});
/**
 * Map for instrumented vars to :raw/:wrapped fns
 */
cljs.spec.instrumented_vars = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.spec.instrument_STAR_ = (function cljs$spec$instrument_STAR_(v){
var spec = cljs.spec.get_spec.call(null,v);
if(cljs.core.truth_(cljs.spec.fn_spec_QMARK_.call(null,spec))){
var map__30099 = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.instrumented_vars),v);
var map__30099__$1 = ((((!((map__30099 == null)))?((((map__30099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30099):map__30099);
var raw = cljs.core.get.call(null,map__30099__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var wrapped = cljs.core.get.call(null,map__30099__$1,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701));
var current = cljs.core.deref.call(null,v);
if(cljs.core._EQ_.call(null,wrapped,current)){
return null;
} else {
var checked = cljs.spec.spec_checking_fn.call(null,v,current);
cljs.core.swap_BANG_.call(null,cljs.spec.instrumented_vars,cljs.core.assoc,v,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"raw","raw",1604651272),current,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701),checked], null));

return checked;
}
} else {
throw cljs.spec.no_fn_spec.call(null,v,spec);
}
});
cljs.spec.unstrument_STAR_ = (function cljs$spec$unstrument_STAR_(v){
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.instrumented_vars),v);
if(cljs.core.truth_(temp__4657__auto__)){
var map__30103 = temp__4657__auto__;
var map__30103__$1 = ((((!((map__30103 == null)))?((((map__30103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30103):map__30103);
var raw = cljs.core.get.call(null,map__30103__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var wrapped = cljs.core.get.call(null,map__30103__$1,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701));
var current = cljs.core.deref.call(null,v);
if(cljs.core._EQ_.call(null,wrapped,current)){
cljs.core.swap_BANG_.call(null,cljs.spec.instrumented_vars,cljs.core.dissoc,v);

return raw;
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.recur_limit_QMARK_ = (function cljs$spec$recur_limit_QMARK_(rmap,id,path,k){
return ((cljs.core.get.call(null,rmap,id) > new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086).cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,path),k));
});
cljs.spec.inck = (function cljs$spec$inck(m,k){
return cljs.core.assoc.call(null,m,k,((function (){var or__18496__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.dt = (function cljs$spec$dt(var_args){
var args30105 = [];
var len__19571__auto___30108 = arguments.length;
var i__19572__auto___30109 = (0);
while(true){
if((i__19572__auto___30109 < len__19571__auto___30108)){
args30105.push((arguments[i__19572__auto___30109]));

var G__30110 = (i__19572__auto___30109 + (1));
i__19572__auto___30109 = G__30110;
continue;
} else {
}
break;
}

var G__30107 = args30105.length;
switch (G__30107) {
case 3:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30105.length)].join('')));

}
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.dt.call(null,pred,x,form,null);
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__4655__auto__ = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return cljs.spec.conform.call(null,spec,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return pred.call(null,x);
} else {
if(cljs.core.truth_(pred.call(null,x))){
return x;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
} else {
throw (new Error([cljs.core.str(cljs.core.pr_str.call(null,form)),cljs.core.str(" is not a fn, expected predicate fn")].join('')));
}
}
} else {
return x;
}
});

cljs.spec.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.valid_QMARK_ = (function cljs$spec$valid_QMARK_(var_args){
var args30112 = [];
var len__19571__auto___30115 = arguments.length;
var i__19572__auto___30116 = (0);
while(true){
if((i__19572__auto___30116 < len__19571__auto___30115)){
args30112.push((arguments[i__19572__auto___30116]));

var G__30117 = (i__19572__auto___30116 + (1));
i__19572__auto___30116 = G__30117;
continue;
} else {
}
break;
}

var G__30114 = args30112.length;
switch (G__30114) {
case 2:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30112.length)].join('')));

}
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,spec,x,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582)));
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,spec,x,form));
});

cljs.spec.valid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.explain_1 = (function cljs$spec$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.maybe_spec.call(null,pred);
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred__$1))){
return cljs.spec.explain_STAR_.call(null,pred__$1,path,(function (){var temp__4655__auto__ = cljs.spec.spec_name.call(null,pred__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})(),in$,v);
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form),new cljs.core.Keyword(null,"val","val",128701612),v,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
}
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.map_spec_impl = (function cljs$spec$map_spec_impl(p__30121){
var map__30152 = p__30121;
var map__30152__$1 = ((((!((map__30152 == null)))?((((map__30152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30152):map__30152);
var argm = map__30152__$1;
var opt = cljs.core.get.call(null,map__30152__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.call(null,map__30152__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.call(null,map__30152__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gfn = cljs.core.get.call(null,map__30152__$1,new cljs.core.Keyword(null,"gfn","gfn",791517474));
var pred_exprs = cljs.core.get.call(null,map__30152__$1,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395));
var opt_keys = cljs.core.get.call(null,map__30152__$1,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261));
var req_specs = cljs.core.get.call(null,map__30152__$1,new cljs.core.Keyword(null,"req-specs","req-specs",553962313));
var req = cljs.core.get.call(null,map__30152__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_keys = cljs.core.get.call(null,map__30152__$1,new cljs.core.Keyword(null,"req-keys","req-keys",514319221));
var opt_specs = cljs.core.get.call(null,map__30152__$1,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450));
var pred_forms = cljs.core.get.call(null,map__30152__$1,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832));
var keys_pred = cljs.core.apply.call(null,cljs.core.every_pred,pred_exprs);
var k__GT_s = cljs.core.zipmap.call(null,cljs.core.concat.call(null,req_keys,opt_keys),cljs.core.concat.call(null,req_specs,opt_specs));
var keys__GT_specs = ((function (keys_pred,k__GT_s,map__30152,map__30152__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__30119_SHARP_){
var or__18496__auto__ = k__GT_s.call(null,p1__30119_SHARP_);
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return p1__30119_SHARP_;
}
});})(keys_pred,k__GT_s,map__30152,map__30152__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid.call(null);
if(typeof cljs.spec.t_cljs$spec30154 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec30154 = (function (opt,map_spec_impl,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,map__30152,p__30121,req_specs,keys__GT_specs,req,id,req_keys,opt_specs,k__GT_s,pred_forms,meta30155){
this.opt = opt;
this.map_spec_impl = map_spec_impl;
this.req_un = req_un;
this.opt_un = opt_un;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.map__30152 = map__30152;
this.p__30121 = p__30121;
this.req_specs = req_specs;
this.keys__GT_specs = keys__GT_specs;
this.req = req;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta30155 = meta30155;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec30154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__30152,map__30152__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_30156,meta30155__$1){
var self__ = this;
var _30156__$1 = this;
return (new cljs.spec.t_cljs$spec30154(self__.opt,self__.map_spec_impl,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.map__30152,self__.p__30121,self__.req_specs,self__.keys__GT_specs,self__.req,self__.id,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta30155__$1));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__30152,map__30152__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec30154.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__30152,map__30152__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_30156){
var self__ = this;
var _30156__$1 = this;
return self__.meta30155;
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__30152,map__30152__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec30154.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec30154.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__30152,map__30152__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys_pred.call(null,m))){
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__30160 = cljs.core.keys.call(null,m);
var vec__30161 = G__30160;
var seq__30162 = cljs.core.seq.call(null,vec__30161);
var first__30163 = cljs.core.first.call(null,seq__30162);
var seq__30162__$1 = cljs.core.next.call(null,seq__30162);
var k = first__30163;
var ks = seq__30162__$1;
var keys = vec__30161;
var ret__$1 = ret;
var G__30160__$1 = G__30160;
while(true){
var ret__$2 = ret__$1;
var vec__30164 = G__30160__$1;
var seq__30165 = cljs.core.seq.call(null,vec__30164);
var first__30166 = cljs.core.first.call(null,seq__30165);
var seq__30165__$1 = cljs.core.next.call(null,seq__30165);
var k__$1 = first__30166;
var ks__$1 = seq__30165__$1;
var keys__$1 = vec__30164;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k__$1))){
var v = cljs.core.get.call(null,m,k__$1);
var cv = cljs.spec.conform.call(null,self__.keys__GT_specs.call(null,k__$1),v);
if(cljs.core._EQ_.call(null,cv,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__30182 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,cv));
var G__30183 = ks__$1;
ret__$1 = G__30182;
G__30160__$1 = G__30183;
continue;
}
} else {
var G__30184 = ret__$2;
var G__30185 = ks__$1;
ret__$1 = G__30184;
G__30160__$1 = G__30185;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__30152,map__30152__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec30154.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__30152,map__30152__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__30170 = cljs.core.keys.call(null,m);
var vec__30171 = G__30170;
var seq__30172 = cljs.core.seq.call(null,vec__30171);
var first__30173 = cljs.core.first.call(null,seq__30172);
var seq__30172__$1 = cljs.core.next.call(null,seq__30172);
var k = first__30173;
var ks = seq__30172__$1;
var keys = vec__30171;
var ret__$1 = ret;
var G__30170__$1 = G__30170;
while(true){
var ret__$2 = ret__$1;
var vec__30174 = G__30170__$1;
var seq__30175 = cljs.core.seq.call(null,vec__30174);
var first__30176 = cljs.core.first.call(null,seq__30175);
var seq__30175__$1 = cljs.core.next.call(null,seq__30175);
var k__$1 = first__30176;
var ks__$1 = seq__30175__$1;
var keys__$1 = vec__30174;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k__$1))){
var cv = cljs.core.get.call(null,m,k__$1);
var v = cljs.spec.unform.call(null,self__.keys__GT_specs.call(null,k__$1),cv);
var G__30186 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,v));
var G__30187 = ks__$1;
ret__$1 = G__30186;
G__30170__$1 = G__30187;
continue;
} else {
var G__30188 = ret__$2;
var G__30189 = ks__$1;
ret__$1 = G__30188;
G__30170__$1 = G__30189;
continue;
}
} else {
return ret__$2;
}
break;
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__30152,map__30152__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec30154.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__30152,map__30152__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_.call(null,x))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
var reg = cljs.spec.registry.call(null);
return cljs.core.apply.call(null,cljs.core.merge,(function (){var temp__4657__auto__ = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__30152,map__30152__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_(pred.call(null,x))){
return null;
} else {
return cljs.spec.abbrev.call(null,form);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__30152,map__30152__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__4657__auto__){
var probs = temp__4657__auto__;
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.vec.call(null,probs),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
return null;
}
})(),cljs.core.map.call(null,((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__30152,map__30152__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__30177){
var vec__30178 = p__30177;
var k = cljs.core.nth.call(null,vec__30178,(0),null);
var v = cljs.core.nth.call(null,vec__30178,(1),null);
if(cljs.core.truth_((function (){var or__18496__auto__ = !(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k)));
if(or__18496__auto__){
return or__18496__auto__;
} else {
return cljs.spec.valid_QMARK_.call(null,self__.keys__GT_specs.call(null,k),v,k);
}
})())){
return null;
} else {
return cljs.spec.explain_1.call(null,self__.keys__GT_specs.call(null,k),self__.keys__GT_specs.call(null,k),cljs.core.conj.call(null,path,k),via,cljs.core.conj.call(null,in$,k),v);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__30152,map__30152__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq.call(null,x)));
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__30152,map__30152__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec30154.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__30152,map__30152__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
var gen = ((function (rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__30152,map__30152__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__30152,map__30152__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__30152,map__30152__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__30152,map__30152__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__30152,map__30152__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__30152,map__30152__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var req_gens = cljs.core.map.call(null,gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.concat.call(null,req_gens,opt_gens))){
var reqs = cljs.core.zipmap.call(null,self__.req_keys,req_gens);
var opts = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,opt_gens);
return cljs.spec.impl.gen.bind.call(null,cljs.spec.impl.gen.choose.call(null,(0),cljs.core.count.call(null,opts)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__30152,map__30152__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__30120_SHARP_){
var args = cljs.core.concat.call(null,cljs.core.seq.call(null,reqs),((cljs.core.seq.call(null,opts))?cljs.core.shuffle.call(null,cljs.core.seq.call(null,opts)):null));
return cljs.core.apply.call(null,cljs.spec.impl.gen.hash_map,cljs.core.apply.call(null,cljs.core.concat,cljs.core.take.call(null,(p1__30120_SHARP_ + cljs.core.count.call(null,reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__30152,map__30152__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
);
} else {
return null;
}
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__30152,map__30152__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec30154.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__30152,map__30152__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.map_spec_impl.call(null,cljs.core.assoc.call(null,self__.argm,new cljs.core.Keyword(null,"gfn","gfn",791517474),gfn__$1));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__30152,map__30152__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec30154.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__30152,map__30152__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),(function (){var G__30181 = cljs.core.PersistentVector.EMPTY;
var G__30181__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.call(null,G__30181,new cljs.core.Keyword(null,"req","req",-326448303),self__.req):G__30181);
var G__30181__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.call(null,G__30181__$1,new cljs.core.Keyword(null,"opt","opt",-794706369),self__.opt):G__30181__$1);
var G__30181__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.call(null,G__30181__$2,new cljs.core.Keyword(null,"req-un","req-un",1074571008),self__.req_un):G__30181__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.call(null,G__30181__$3,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),self__.opt_un);
} else {
return G__30181__$3;
}
})());
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__30152,map__30152__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec30154.getBasis = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__30152,map__30152__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opt","opt",845825158,null),cljs.core.with_meta(new cljs.core.Symbol(null,"map-spec-impl","map-spec-impl",-1682885722,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"opt","opt",845825158,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"argm","argm",-181546357,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'spec' with a map argument"], null)),new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"keys-pred","keys-pred",-1795451030,null),new cljs.core.Symbol(null,"argm","argm",-181546357,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"map__30152","map__30152",-827559378,null),new cljs.core.Symbol(null,"p__30121","p__30121",-256972785,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"keys->specs","keys->specs",-97897643,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"k->s","k->s",-1685112801,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"meta30155","meta30155",-1418647890,null)], null);
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__30152,map__30152__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec30154.cljs$lang$type = true;

cljs.spec.t_cljs$spec30154.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec30154";

cljs.spec.t_cljs$spec30154.cljs$lang$ctorPrWriter = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__30152,map__30152__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__19102__auto__,writer__19103__auto__,opt__19104__auto__){
return cljs.core._write.call(null,writer__19103__auto__,"cljs.spec/t_cljs$spec30154");
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__30152,map__30152__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.__GT_t_cljs$spec30154 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__30152,map__30152__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$map_spec_impl_$___GT_t_cljs$spec30154(opt__$1,map_spec_impl__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,map__30152__$2,p__30121__$1,req_specs__$1,keys__GT_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta30155){
return (new cljs.spec.t_cljs$spec30154(opt__$1,map_spec_impl__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,map__30152__$2,p__30121__$1,req_specs__$1,keys__GT_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta30155));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__30152,map__30152__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.t_cljs$spec30154(opt,cljs$spec$map_spec_impl,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,map__30152__$1,p__30121,req_specs,keys__GT_specs,req,id,req_keys,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.spec_impl = (function cljs$spec$spec_impl(var_args){
var args30190 = [];
var len__19571__auto___30198 = arguments.length;
var i__19572__auto___30199 = (0);
while(true){
if((i__19572__auto___30199 < len__19571__auto___30198)){
args30190.push((arguments[i__19572__auto___30199]));

var G__30200 = (i__19572__auto___30199 + (1));
i__19572__auto___30199 = G__30200;
continue;
} else {
}
break;
}

var G__30192 = args30190.length;
switch (G__30192) {
case 4:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30190.length)].join('')));

}
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.spec_impl.call(null,form,pred,gfn,cpred_QMARK_,null);
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred))){
var G__30193 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__30193,gfn);
} else {
return G__30193;
}
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,pred))){
return cljs.spec.regex_spec_impl.call(null,pred,gfn);
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,pred))){
var G__30194 = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__30194,gfn);
} else {
return G__30194;
}
} else {
if(typeof cljs.spec.t_cljs$spec30195 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec30195 = (function (form,pred,gfn,cpred_QMARK_,unc,meta30196){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta30196 = meta30196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec30195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30197,meta30196__$1){
var self__ = this;
var _30197__$1 = this;
return (new cljs.spec.t_cljs$spec30195(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta30196__$1));
});

cljs.spec.t_cljs$spec30195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30197){
var self__ = this;
var _30197__$1 = this;
return self__.meta30196;
});

cljs.spec.t_cljs$spec30195.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec30195.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_);
});

cljs.spec.t_cljs$spec30195.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return self__.unc.call(null,x);
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
});

cljs.spec.t_cljs$spec30195.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,self__.form),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
return null;
}
});

cljs.spec.t_cljs$spec30195.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.gen_for_pred.call(null,self__.pred);
}
});

cljs.spec.t_cljs$spec30195.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.spec_impl.call(null,self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_);
});

cljs.spec.t_cljs$spec30195.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.t_cljs$spec30195.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null),new cljs.core.Symbol(null,"unc","unc",-465250751,null),new cljs.core.Symbol(null,"meta30196","meta30196",-988627799,null)], null);
});

cljs.spec.t_cljs$spec30195.cljs$lang$type = true;

cljs.spec.t_cljs$spec30195.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec30195";

cljs.spec.t_cljs$spec30195.cljs$lang$ctorPrWriter = (function (this__19102__auto__,writer__19103__auto__,opt__19104__auto__){
return cljs.core._write.call(null,writer__19103__auto__,"cljs.spec/t_cljs$spec30195");
});

cljs.spec.__GT_t_cljs$spec30195 = (function cljs$spec$__GT_t_cljs$spec30195(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta30196){
return (new cljs.spec.t_cljs$spec30195(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta30196));
});

}

return (new cljs.spec.t_cljs$spec30195(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});

cljs.spec.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.multi_spec_impl = (function cljs$spec$multi_spec_impl(var_args){
var args30207 = [];
var len__19571__auto___30221 = arguments.length;
var i__19572__auto___30222 = (0);
while(true){
if((i__19572__auto___30222 < len__19571__auto___30221)){
args30207.push((arguments[i__19572__auto___30222]));

var G__30223 = (i__19572__auto___30222 + (1));
i__19572__auto___30222 = G__30223;
continue;
} else {
}
break;
}

var G__30209 = args30207.length;
switch (G__30209) {
case 3:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30207.length)].join('')));

}
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.multi_spec_impl.call(null,form,mmvar,retag,null);
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid.call(null);
var predx = ((function (id){
return (function (p1__30202_SHARP_){
var mm = cljs.core.deref.call(null,mmvar);
var and__18484__auto__ = cljs.core.contains_QMARK_.call(null,cljs.core.methods$.call(null,mm),cljs.core._dispatch_fn.call(null,mm).call(null,p1__30202_SHARP_));
if(and__18484__auto__){
return mm.call(null,p1__30202_SHARP_);
} else {
return and__18484__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__30203_SHARP_){
return cljs.core._dispatch_fn.call(null,cljs.core.deref.call(null,mmvar)).call(null,p1__30203_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__30204_SHARP_,p2__30205_SHARP_){
return cljs.core.assoc.call(null,p1__30204_SHARP_,retag,p2__30205_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.t_cljs$spec30210 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec30210 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta30211){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta30211 = meta30211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec30210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_30212,meta30211__$1){
var self__ = this;
var _30212__$1 = this;
return (new cljs.spec.t_cljs$spec30210(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta30211__$1));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec30210.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_30212){
var self__ = this;
var _30212__$1 = this;
return self__.meta30211;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec30210.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec30210.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__4655__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.dt.call(null,pred,x,self__.form);
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec30210.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__4655__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.unform.call(null,pred,x);
} else {
throw (new Error([cljs.core.str("No method of: "),cljs.core.str(self__.form),cljs.core.str(" for dispatch value: "),cljs.core.str(self__.dval.call(null,x))].join('')));
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec30210.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = self__.dval.call(null,x);
var path__$1 = cljs.core.conj.call(null,path,dv);
var temp__4655__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.explain_1.call(null,self__.form,pred,path__$1,via,in$,x);
} else {
return cljs.core.PersistentArrayMap.fromArray([path__$1,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),self__.form,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"reason","reason",-2070751759),"no method",new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec30210.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__30213){
var vec__30214 = p__30213;
var k = cljs.core.nth.call(null,vec__30214,(0),null);
var f = cljs.core.nth.call(null,vec__30214,(1),null);
var p = f.call(null,null);
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,p,vec__30214,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.impl.gen.fmap.call(null,((function (rmap__$1,p,vec__30214,k,f,___$1,id,predx,dval,tag){
return (function (p1__30206_SHARP_){
return self__.tag.call(null,p1__30206_SHARP_,k);
});})(rmap__$1,p,vec__30214,k,f,___$1,id,predx,dval,tag))
,cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,cljs.core._conj.call(null,(function (){var x__19330__auto__ = self__.form;
return cljs.core._conj.call(null,(function (){var x__19330__auto____$1 = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19330__auto____$1);
})(),x__19330__auto__);
})(),new cljs.core.Symbol(null,"method","method",1696235119,null))));
});})(rmap__$1,p,vec__30214,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,cljs.core.remove.call(null,((function (gen,___$1,id,predx,dval,tag){
return (function (p__30217){
var vec__30218 = p__30217;
var k = cljs.core.nth.call(null,vec__30218,(0),null);
return cljs.core._EQ_.call(null,k,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$.call(null,cljs.core.deref.call(null,self__.mmvar)))));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.spec.impl.gen.one_of.call(null,gs);
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec30210.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.multi_spec_impl.call(null,self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec30210.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","multi-spec","cljs.spec/multi-spec",-2053297814,null)),(function (){var x__19330__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19330__auto__);
})())));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec30210.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"mmvar","mmvar",-1714325675,null),new cljs.core.Symbol(null,"retag","retag",528972725,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"predx","predx",2063470948,null),new cljs.core.Symbol(null,"dval","dval",835211877,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta30211","meta30211",-1448177473,null)], null);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec30210.cljs$lang$type = true;

cljs.spec.t_cljs$spec30210.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec30210";

cljs.spec.t_cljs$spec30210.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__19102__auto__,writer__19103__auto__,opt__19104__auto__){
return cljs.core._write.call(null,writer__19103__auto__,"cljs.spec/t_cljs$spec30210");
});})(id,predx,dval,tag))
;

cljs.spec.__GT_t_cljs$spec30210 = ((function (id,predx,dval,tag){
return (function cljs$spec$__GT_t_cljs$spec30210(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta30211){
return (new cljs.spec.t_cljs$spec30210(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta30211));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.t_cljs$spec30210(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.tuple_impl = (function cljs$spec$tuple_impl(var_args){
var args30225 = [];
var len__19571__auto___30231 = arguments.length;
var i__19572__auto___30232 = (0);
while(true){
if((i__19572__auto___30232 < len__19571__auto___30231)){
args30225.push((arguments[i__19572__auto___30232]));

var G__30233 = (i__19572__auto___30232 + (1));
i__19572__auto___30232 = G__30233;
continue;
} else {
}
break;
}

var G__30227 = args30225.length;
switch (G__30227) {
case 2:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30225.length)].join('')));

}
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.tuple_impl.call(null,forms,preds,null);
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec30228 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec30228 = (function (forms,preds,gfn,meta30229){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta30229 = meta30229;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec30228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30230,meta30229__$1){
var self__ = this;
var _30230__$1 = this;
return (new cljs.spec.t_cljs$spec30228(self__.forms,self__.preds,self__.gfn,meta30229__$1));
});

cljs.spec.t_cljs$spec30228.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30230){
var self__ = this;
var _30230__$1 = this;
return self__.meta30229;
});

cljs.spec.t_cljs$spec30228.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec30228.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(!((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var v = x.call(null,i);
var cv = cljs.spec.dt.call(null,self__.preds.call(null,i),v,self__.forms.call(null,i));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cv)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__30235 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,cv));
var G__30236 = (i + (1));
ret = G__30235;
i = G__30236;
continue;
}
}
break;
}
}
});

cljs.spec.t_cljs$spec30228.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds)))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var cv = x.call(null,i);
var v = cljs.spec.unform.call(null,self__.preds.call(null,i),cv);
var G__30237 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,v));
var G__30238 = (i + (1));
ret = G__30237;
i = G__30238;
continue;
}
break;
}
});

cljs.spec.t_cljs$spec30228.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.vector_QMARK_.call(null,x))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__19330__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19330__auto__);
})(),(function (){var x__19330__auto__ = cljs.core.count.call(null,self__.preds);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19330__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (___$1){
return (function (i,form,pred){
var v = x.call(null,i);
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,pred,v))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,i),via,cljs.core.conj.call(null,in$,i),v);
}
});})(___$1))
,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.forms,self__.preds));

}
}
});

cljs.spec.t_cljs$spec30228.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1){
return (function (i,p,f){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,i),rmap,f);
});})(___$1))
;
var gs = cljs.core.map.call(null,gen,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gs);
} else {
return null;
}
}
});

cljs.spec.t_cljs$spec30228.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.tuple_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec30228.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","tuple","cljs.spec/tuple",500419708,null)),self__.forms)));
});

cljs.spec.t_cljs$spec30228.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta30229","meta30229",382845485,null)], null);
});

cljs.spec.t_cljs$spec30228.cljs$lang$type = true;

cljs.spec.t_cljs$spec30228.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec30228";

cljs.spec.t_cljs$spec30228.cljs$lang$ctorPrWriter = (function (this__19102__auto__,writer__19103__auto__,opt__19104__auto__){
return cljs.core._write.call(null,writer__19103__auto__,"cljs.spec/t_cljs$spec30228");
});

cljs.spec.__GT_t_cljs$spec30228 = (function cljs$spec$__GT_t_cljs$spec30228(forms__$1,preds__$1,gfn__$1,meta30229){
return (new cljs.spec.t_cljs$spec30228(forms__$1,preds__$1,gfn__$1,meta30229));
});

}

return (new cljs.spec.t_cljs$spec30228(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.tuple_impl.cljs$lang$maxFixedArity = 3;

cljs.spec.tagged_ret = (function cljs$spec$tagged_ret(v){
var x30240 = v;
x30240.cljs$core$IMapEntry$ = true;

x30240.cljs$core$IMapEntry$_key$arity$1 = ((function (x30240){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(0));
});})(x30240))
;

x30240.cljs$core$IMapEntry$_val$arity$1 = ((function (x30240){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(1));
});})(x30240))
;

return x30240;
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.or_spec_impl = (function cljs$spec$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid.call(null);
var kps = cljs.core.zipmap.call(null,keys,preds);
var cform = ((function (id,kps){
return (function (x){
var i = (0);
while(true){
if((i < cljs.core.count.call(null,preds))){
var pred = preds.call(null,i);
var ret = cljs.spec.dt.call(null,pred,x,cljs.core.nth.call(null,forms,i));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret)){
var G__30255 = (i + (1));
i = G__30255;
continue;
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,i),ret], null));
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
break;
}
});})(id,kps))
;
if(typeof cljs.spec.t_cljs$spec30248 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec30248 = (function (or_spec_impl,keys,forms,preds,gfn,id,kps,cform,meta30249){
this.or_spec_impl = or_spec_impl;
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.cform = cform;
this.meta30249 = meta30249;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec30248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,cform){
return (function (_30250,meta30249__$1){
var self__ = this;
var _30250__$1 = this;
return (new cljs.spec.t_cljs$spec30248(self__.or_spec_impl,self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.cform,meta30249__$1));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec30248.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,cform){
return (function (_30250){
var self__ = this;
var _30250__$1 = this;
return self__.meta30249;
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec30248.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec30248.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec30248.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,p__30251){
var self__ = this;
var vec__30252 = p__30251;
var k = cljs.core.nth.call(null,vec__30252,(0),null);
var x = cljs.core.nth.call(null,vec__30252,(1),null);
var ___$1 = this;
return cljs.spec.unform.call(null,self__.kps.call(null,k),x);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec30248.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,kps,cform){
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,this$__$1,x))){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (this$__$1,id,kps,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,pred,x))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,k),via,in$,x);
}
});})(this$__$1,id,kps,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec30248.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,kps,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,kps,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,___$1,id,kps,cform){
return (function (){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,kps,cform))
,null)));
}
});})(___$1,id,kps,cform))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_.call(null,gs)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gs);
}
}
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec30248.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec30248.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,kps,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null)),cljs.core.mapcat.call(null,cljs.core.vector,self__.keys,self__.forms))));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec30248.getBasis = ((function (id,kps,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"or-spec-impl","or-spec-impl",-1412945461,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'or'"], null)),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"kps","kps",-1157342767,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta30249","meta30249",1043950803,null)], null);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec30248.cljs$lang$type = true;

cljs.spec.t_cljs$spec30248.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec30248";

cljs.spec.t_cljs$spec30248.cljs$lang$ctorPrWriter = ((function (id,kps,cform){
return (function (this__19102__auto__,writer__19103__auto__,opt__19104__auto__){
return cljs.core._write.call(null,writer__19103__auto__,"cljs.spec/t_cljs$spec30248");
});})(id,kps,cform))
;

cljs.spec.__GT_t_cljs$spec30248 = ((function (id,kps,cform){
return (function cljs$spec$or_spec_impl_$___GT_t_cljs$spec30248(or_spec_impl__$1,keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,cform__$1,meta30249){
return (new cljs.spec.t_cljs$spec30248(or_spec_impl__$1,keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,cform__$1,meta30249));
});})(id,kps,cform))
;

}

return (new cljs.spec.t_cljs$spec30248(cljs$spec$or_spec_impl,keys,forms,preds,gfn,id,kps,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.and_preds = (function cljs$spec$and_preds(x,preds,forms){
var ret = x;
var G__30282 = preds;
var vec__30284 = G__30282;
var seq__30285 = cljs.core.seq.call(null,vec__30284);
var first__30286 = cljs.core.first.call(null,seq__30285);
var seq__30285__$1 = cljs.core.next.call(null,seq__30285);
var pred = first__30286;
var preds__$1 = seq__30285__$1;
var G__30283 = forms;
var vec__30287 = G__30283;
var seq__30288 = cljs.core.seq.call(null,vec__30287);
var first__30289 = cljs.core.first.call(null,seq__30288);
var seq__30288__$1 = cljs.core.next.call(null,seq__30288);
var form = first__30289;
var forms__$1 = seq__30288__$1;
var ret__$1 = ret;
var G__30282__$1 = G__30282;
var G__30283__$1 = G__30283;
while(true){
var ret__$2 = ret__$1;
var vec__30290 = G__30282__$1;
var seq__30291 = cljs.core.seq.call(null,vec__30290);
var first__30292 = cljs.core.first.call(null,seq__30291);
var seq__30291__$1 = cljs.core.next.call(null,seq__30291);
var pred__$1 = first__30292;
var preds__$2 = seq__30291__$1;
var vec__30293 = G__30283__$1;
var seq__30294 = cljs.core.seq.call(null,vec__30293);
var first__30295 = cljs.core.first.call(null,seq__30294);
var seq__30294__$1 = cljs.core.next.call(null,seq__30294);
var form__$1 = first__30295;
var forms__$2 = seq__30294__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),nret)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__30296 = nret;
var G__30297 = preds__$2;
var G__30298 = forms__$2;
ret__$1 = G__30296;
G__30282__$1 = G__30297;
G__30283__$1 = G__30298;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.explain_pred_list = (function cljs$spec$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__30325 = forms;
var vec__30327 = G__30325;
var seq__30328 = cljs.core.seq.call(null,vec__30327);
var first__30329 = cljs.core.first.call(null,seq__30328);
var seq__30328__$1 = cljs.core.next.call(null,seq__30328);
var form = first__30329;
var forms__$1 = seq__30328__$1;
var G__30326 = preds;
var vec__30330 = G__30326;
var seq__30331 = cljs.core.seq.call(null,vec__30330);
var first__30332 = cljs.core.first.call(null,seq__30331);
var seq__30331__$1 = cljs.core.next.call(null,seq__30331);
var pred = first__30332;
var preds__$1 = seq__30331__$1;
var ret__$1 = ret;
var G__30325__$1 = G__30325;
var G__30326__$1 = G__30326;
while(true){
var ret__$2 = ret__$1;
var vec__30333 = G__30325__$1;
var seq__30334 = cljs.core.seq.call(null,vec__30333);
var first__30335 = cljs.core.first.call(null,seq__30334);
var seq__30334__$1 = cljs.core.next.call(null,seq__30334);
var form__$1 = first__30335;
var forms__$2 = seq__30334__$1;
var vec__30336 = G__30326__$1;
var seq__30337 = cljs.core.seq.call(null,vec__30336);
var first__30338 = cljs.core.first.call(null,seq__30337);
var seq__30337__$1 = cljs.core.next.call(null,seq__30337);
var pred__$1 = first__30338;
var preds__$2 = seq__30337__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),nret)){
var G__30339 = nret;
var G__30340 = forms__$2;
var G__30341 = preds__$2;
ret__$1 = G__30339;
G__30325__$1 = G__30340;
G__30326__$1 = G__30341;
continue;
} else {
return cljs.spec.explain_1.call(null,form__$1,pred__$1,path,via,in$,ret__$2);
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.and_spec_impl = (function cljs$spec$and_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec30347 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec30347 = (function (and_spec_impl,forms,preds,gfn,meta30348){
this.and_spec_impl = and_spec_impl;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta30348 = meta30348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec30347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30349,meta30348__$1){
var self__ = this;
var _30349__$1 = this;
return (new cljs.spec.t_cljs$spec30347(self__.and_spec_impl,self__.forms,self__.preds,self__.gfn,meta30348__$1));
});

cljs.spec.t_cljs$spec30347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30349){
var self__ = this;
var _30349__$1 = this;
return self__.meta30348;
});

cljs.spec.t_cljs$spec30347.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec30347.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.and_preds.call(null,x,self__.preds,self__.forms);
});

cljs.spec.t_cljs$spec30347.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,((function (___$1){
return (function (p1__30343_SHARP_,p2__30342_SHARP_){
return cljs.spec.unform.call(null,p2__30342_SHARP_,p1__30343_SHARP_);
});})(___$1))
,x,cljs.core.reverse.call(null,self__.preds));
});

cljs.spec.t_cljs$spec30347.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.explain_pred_list.call(null,self__.forms,self__.preds,path,via,in$,x);
});

cljs.spec.t_cljs$spec30347.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gensub.call(null,cljs.core.first.call(null,self__.preds),overrides,path,rmap,cljs.core.first.call(null,self__.forms));
}
});

cljs.spec.t_cljs$spec30347.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec30347.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","and","cljs.spec/and",-7296553,null)),self__.forms)));
});

cljs.spec.t_cljs$spec30347.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"and-spec-impl","and-spec-impl",1127339973,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'and'"], null)),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta30348","meta30348",-245794973,null)], null);
});

cljs.spec.t_cljs$spec30347.cljs$lang$type = true;

cljs.spec.t_cljs$spec30347.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec30347";

cljs.spec.t_cljs$spec30347.cljs$lang$ctorPrWriter = (function (this__19102__auto__,writer__19103__auto__,opt__19104__auto__){
return cljs.core._write.call(null,writer__19103__auto__,"cljs.spec/t_cljs$spec30347");
});

cljs.spec.__GT_t_cljs$spec30347 = (function cljs$spec$and_spec_impl_$___GT_t_cljs$spec30347(and_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta30348){
return (new cljs.spec.t_cljs$spec30347(and_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta30348));
});

}

return (new cljs.spec.t_cljs$spec30347(cljs$spec$and_spec_impl,forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'every'
 */
cljs.spec.every_impl = (function cljs$spec$every_impl(var_args){
var args30352 = [];
var len__19571__auto___30361 = arguments.length;
var i__19572__auto___30362 = (0);
while(true){
if((i__19572__auto___30362 < len__19571__auto___30361)){
args30352.push((arguments[i__19572__auto___30362]));

var G__30363 = (i__19572__auto___30362 + (1));
i__19572__auto___30362 = G__30363;
continue;
} else {
}
break;
}

var G__30354 = args30352.length;
switch (G__30354) {
case 3:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30352.length)].join('')));

}
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.every_impl.call(null,form,pred,opts,null);
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__30355,gfn){
var map__30356 = p__30355;
var map__30356__$1 = ((((!((map__30356 == null)))?((((map__30356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30356):map__30356);
var opts = map__30356__$1;
var count = cljs.core.get.call(null,map__30356__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var max_count = cljs.core.get.call(null,map__30356__$1,new cljs.core.Keyword(null,"max-count","max-count",1539185305));
var min_count = cljs.core.get.call(null,map__30356__$1,new cljs.core.Keyword(null,"min-count","min-count",1594709013));
var distinct = cljs.core.get.call(null,map__30356__$1,new cljs.core.Keyword(null,"distinct","distinct",-1788879121));
var gen_max = cljs.core.get.call(null,map__30356__$1,new cljs.core.Keyword(null,"gen-max","gen-max",-793680445),(20));
var gen_into = cljs.core.get.call(null,map__30356__$1,new cljs.core.Keyword(null,"gen-into","gen-into",-1047890542),cljs.core.PersistentVector.EMPTY);
var kfn = cljs.core.get.call(null,map__30356__$1,new cljs.core.Keyword("cljs.spec","kfn","cljs.spec/kfn",293196937));
var check_QMARK_ = ((function (map__30356,map__30356__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (p1__30350_SHARP_){
return cljs.spec.valid_QMARK_.call(null,pred,p1__30350_SHARP_);
});})(map__30356,map__30356__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;
var kfn__$1 = (function (){var or__18496__auto__ = kfn;
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return ((function (or__18496__auto__,check_QMARK_,map__30356,map__30356__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (i,v){
return i;
});
;})(or__18496__auto__,check_QMARK_,map__30356,map__30356__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
}
})();
if(typeof cljs.spec.t_cljs$spec30358 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec30358 = (function (form,max_count,p__30355,check_QMARK_,gfn,gen_max,pred,distinct,kfn,gen_into,count,min_count,opts,map__30356,meta30359){
this.form = form;
this.max_count = max_count;
this.p__30355 = p__30355;
this.check_QMARK_ = check_QMARK_;
this.gfn = gfn;
this.gen_max = gen_max;
this.pred = pred;
this.distinct = distinct;
this.kfn = kfn;
this.gen_into = gen_into;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.map__30356 = map__30356;
this.meta30359 = meta30359;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec30358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (check_QMARK_,kfn__$1,map__30356,map__30356__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_30360,meta30359__$1){
var self__ = this;
var _30360__$1 = this;
return (new cljs.spec.t_cljs$spec30358(self__.form,self__.max_count,self__.p__30355,self__.check_QMARK_,self__.gfn,self__.gen_max,self__.pred,self__.distinct,self__.kfn,self__.gen_into,self__.count,self__.min_count,self__.opts,self__.map__30356,meta30359__$1));
});})(check_QMARK_,kfn__$1,map__30356,map__30356__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec30358.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (check_QMARK_,kfn__$1,map__30356,map__30356__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_30360){
var self__ = this;
var _30360__$1 = this;
return self__.meta30359;
});})(check_QMARK_,kfn__$1,map__30356,map__30356__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec30358.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec30358.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (check_QMARK_,kfn__$1,map__30356,map__30356__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var or__18496__auto__ = !(cljs.core.seqable_QMARK_.call(null,x));
if(or__18496__auto__){
return or__18496__auto__;
} else {
var or__18496__auto____$1 = (function (){var and__18484__auto__ = self__.distinct;
if(cljs.core.truth_(and__18484__auto__)){
return (!(cljs.core.empty_QMARK_.call(null,x))) && (cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,x)));
} else {
return and__18484__auto__;
}
})();
if(cljs.core.truth_(or__18496__auto____$1)){
return or__18496__auto____$1;
} else {
var or__18496__auto____$2 = (function (){var and__18484__auto__ = self__.count;
if(cljs.core.truth_(and__18484__auto__)){
return cljs.core.not_EQ_.call(null,self__.count,cljs.core.bounded_count.call(null,(self__.count + (1)),x));
} else {
return and__18484__auto__;
}
})();
if(cljs.core.truth_(or__18496__auto____$2)){
return or__18496__auto____$2;
} else {
var and__18484__auto__ = (function (){var or__18496__auto____$3 = self__.min_count;
if(cljs.core.truth_(or__18496__auto____$3)){
return or__18496__auto____$3;
} else {
return self__.max_count;
}
})();
if(cljs.core.truth_(and__18484__auto__)){
return !((((function (){var or__18496__auto____$3 = self__.min_count;
if(cljs.core.truth_(or__18496__auto____$3)){
return or__18496__auto____$3;
} else {
return (0);
}
})() <= cljs.core.bounded_count.call(null,(cljs.core.truth_(self__.max_count)?(self__.max_count + (1)):self__.min_count),x))) && ((cljs.core.bounded_count.call(null,(cljs.core.truth_(self__.max_count)?(self__.max_count + (1)):self__.min_count),x) <= (function (){var or__18496__auto____$3 = self__.max_count;
if(cljs.core.truth_(or__18496__auto____$3)){
return or__18496__auto____$3;
} else {
return cljs.spec.MAX_INT;
}
})())));
} else {
return and__18484__auto__;
}
}
}
}
})())){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
if(cljs.core.indexed_QMARK_.call(null,x)){
var step = (function (){var x__18827__auto__ = (1);
var y__18828__auto__ = cljs.core.long$.call(null,(cljs.core.count.call(null,x) / cljs.spec._STAR_coll_check_limit_STAR_));
return ((x__18827__auto__ > y__18828__auto__) ? x__18827__auto__ : y__18828__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count.call(null,x))){
return x;
} else {
if(cljs.core.truth_(self__.check_QMARK_.call(null,cljs.core.nth.call(null,x,i)))){
var G__30365 = (i + step);
i = G__30365;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
} else {
var or__18496__auto__ = (function (){var and__18484__auto__ = cljs.core.every_QMARK_.call(null,self__.check_QMARK_,cljs.core.take.call(null,cljs.spec._STAR_coll_check_limit_STAR_,x));
if(and__18484__auto__){
return x;
} else {
return and__18484__auto__;
}
})();
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}

}
});})(check_QMARK_,kfn__$1,map__30356,map__30356__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec30358.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (check_QMARK_,kfn__$1,map__30356,map__30356__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return x;
});})(check_QMARK_,kfn__$1,map__30356,map__30356__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec30358.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (check_QMARK_,kfn__$1,map__30356,map__30356__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.seqable_QMARK_.call(null,x))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"seqable?","seqable?",72462495,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
if(cljs.core.truth_((function (){var and__18484__auto__ = self__.distinct;
if(cljs.core.truth_(and__18484__auto__)){
return (!(cljs.core.empty_QMARK_.call(null,x))) && (cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,x)));
} else {
return and__18484__auto__;
}
})())){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
if(cljs.core.truth_((function (){var and__18484__auto__ = self__.count;
if(cljs.core.truth_(and__18484__auto__)){
return cljs.core.not_EQ_.call(null,self__.count,cljs.core.bounded_count.call(null,self__.count,x));
} else {
return and__18484__auto__;
}
})())){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__19330__auto__ = self__.count;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19330__auto__);
})(),(function (){var x__19330__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","%","cljs.spec/%",-1625123498,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19330__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
if(cljs.core.truth_((function (){var and__18484__auto__ = (function (){var or__18496__auto__ = self__.min_count;
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return self__.max_count;
}
})();
if(cljs.core.truth_(and__18484__auto__)){
return !((((function (){var or__18496__auto__ = self__.min_count;
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count.call(null,(cljs.core.truth_(self__.max_count)?(self__.max_count + (1)):self__.min_count),x))) && ((cljs.core.bounded_count.call(null,(cljs.core.truth_(self__.max_count)?(self__.max_count + (1)):self__.min_count),x) <= (function (){var or__18496__auto__ = self__.max_count;
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return cljs.spec.MAX_INT;
}
})())));
} else {
return and__18484__auto__;
}
})())){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null)),(function (){var x__19330__auto__ = (function (){var or__18496__auto__ = self__.min_count;
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return (0);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19330__auto__);
})(),(function (){var x__19330__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","%","cljs.spec/%",-1625123498,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19330__auto__);
})(),(function (){var x__19330__auto__ = (function (){var or__18496__auto__ = self__.max_count;
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return new cljs.core.Symbol("js","Number.MAX_SAFE_INTEGER","js/Number.MAX_SAFE_INTEGER",-1535627560,null);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19330__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.take.call(null,cljs.spec._STAR_coll_error_limit_STAR_,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (___$1,check_QMARK_,kfn__$1,map__30356,map__30356__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (i,v){
var k = self__.kfn.call(null,i,v);
if(cljs.core.truth_(self__.check_QMARK_.call(null,v))){
return null;
} else {
var prob = cljs.spec.explain_1.call(null,self__.form,self__.pred,cljs.core.conj.call(null,path,k),via,cljs.core.conj.call(null,in$,k),v);
return prob;
}
});})(___$1,check_QMARK_,kfn__$1,map__30356,map__30356__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
,cljs.core.range.call(null),x))));

}
}
}
}
});})(check_QMARK_,kfn__$1,map__30356,map__30356__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec30358.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (check_QMARK_,kfn__$1,map__30356,map__30356__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var init = cljs.core.empty.call(null,self__.gen_into);
var pgen = cljs.spec.gensub.call(null,self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.impl.gen.fmap.call(null,((function (init,pgen,___$1,check_QMARK_,kfn__$1,map__30356,map__30356__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (p1__30351_SHARP_){
if(cljs.core.vector_QMARK_.call(null,init)){
return p1__30351_SHARP_;
} else {
return cljs.core.into.call(null,init,p1__30351_SHARP_);
}
});})(init,pgen,___$1,check_QMARK_,kfn__$1,map__30356,map__30356__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
,(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-elements","num-elements",1960422107),self__.count,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null)):cljs.spec.impl.gen.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-elements","min-elements",949370780),(function (){var or__18496__auto__ = self__.min_count;
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"max-elements","max-elements",433034073),(function (){var or__18496__auto__ = self__.max_count;
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
var x__18827__auto__ = self__.gen_max;
var y__18828__auto__ = ((2) * (function (){var or__18496__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__18496__auto____$1)){
return or__18496__auto____$1;
} else {
return (0);
}
})());
return ((x__18827__auto__ > y__18828__auto__) ? x__18827__auto__ : y__18828__auto__);
}
})(),new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null))):(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector.call(null,pgen,self__.count):(cljs.core.truth_((function (){var or__18496__auto__ = self__.min_count;
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.impl.gen.vector.call(null,pgen,(function (){var or__18496__auto__ = self__.min_count;
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return (0);
}
})(),(function (){var or__18496__auto__ = self__.max_count;
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
var x__18827__auto__ = self__.gen_max;
var y__18828__auto__ = ((2) * (function (){var or__18496__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__18496__auto____$1)){
return or__18496__auto____$1;
} else {
return (0);
}
})());
return ((x__18827__auto__ > y__18828__auto__) ? x__18827__auto__ : y__18828__auto__);
}
})()):cljs.spec.impl.gen.vector.call(null,pgen,(0),self__.gen_max)
))));
}
});})(check_QMARK_,kfn__$1,map__30356,map__30356__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec30358.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (check_QMARK_,kfn__$1,map__30356,map__30356__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.every_impl.call(null,self__.form,self__.pred,self__.opts,gfn__$1);
});})(check_QMARK_,kfn__$1,map__30356,map__30356__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec30358.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (check_QMARK_,kfn__$1,map__30356,map__30356__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","every","cljs.spec/every",-1899705480,null)),(function (){var x__19330__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19330__auto__);
})(),cljs.core.mapcat.call(null,cljs.core.identity,self__.opts))));
});})(check_QMARK_,kfn__$1,map__30356,map__30356__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec30358.getBasis = ((function (check_QMARK_,kfn__$1,map__30356,map__30356__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"max-count","max-count",-1115250464,null),new cljs.core.Symbol(null,"p__30355","p__30355",-29246496,null),new cljs.core.Symbol(null,"check?","check?",409539557,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"gen-max","gen-max",846851082,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"gen-into","gen-into",592640985,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"min-count","min-count",-1059726756,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"map__30356","map__30356",-1810711683,null),new cljs.core.Symbol(null,"meta30359","meta30359",1884951818,null)], null);
});})(check_QMARK_,kfn__$1,map__30356,map__30356__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec30358.cljs$lang$type = true;

cljs.spec.t_cljs$spec30358.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec30358";

cljs.spec.t_cljs$spec30358.cljs$lang$ctorPrWriter = ((function (check_QMARK_,kfn__$1,map__30356,map__30356__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (this__19102__auto__,writer__19103__auto__,opt__19104__auto__){
return cljs.core._write.call(null,writer__19103__auto__,"cljs.spec/t_cljs$spec30358");
});})(check_QMARK_,kfn__$1,map__30356,map__30356__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.__GT_t_cljs$spec30358 = ((function (check_QMARK_,kfn__$1,map__30356,map__30356__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function cljs$spec$__GT_t_cljs$spec30358(form__$1,max_count__$1,p__30355__$1,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,distinct__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,map__30356__$2,meta30359){
return (new cljs.spec.t_cljs$spec30358(form__$1,max_count__$1,p__30355__$1,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,distinct__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,map__30356__$2,meta30359));
});})(check_QMARK_,kfn__$1,map__30356,map__30356__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

}

return (new cljs.spec.t_cljs$spec30358(form,max_count,p__30355,check_QMARK_,gfn,gen_max,pred,distinct,kfn__$1,gen_into,count,min_count,opts,map__30356__$1,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.every_impl.cljs$lang$maxFixedArity = 4;

cljs.spec.accept = (function cljs$spec$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword(null,"ret","ret",-468222814),x], null);
});
cljs.spec.accept_QMARK_ = (function cljs$spec$accept_QMARK_(p__30366){
var map__30369 = p__30366;
var map__30369__$1 = ((((!((map__30369 == null)))?((((map__30369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30369):map__30369);
var op = cljs.core.get.call(null,map__30369__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
return cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),op);
});
cljs.spec.pcat_STAR_ = (function cljs$spec$pcat_STAR_(p__30371){
var map__30383 = p__30371;
var map__30383__$1 = ((((!((map__30383 == null)))?((((map__30383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30383):map__30383);
var vec__30384 = cljs.core.get.call(null,map__30383__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__30385 = cljs.core.seq.call(null,vec__30384);
var first__30386 = cljs.core.first.call(null,seq__30385);
var seq__30385__$1 = cljs.core.next.call(null,seq__30385);
var p1 = first__30386;
var pr = seq__30385__$1;
var ps = vec__30384;
var vec__30387 = cljs.core.get.call(null,map__30383__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__30388 = cljs.core.seq.call(null,vec__30387);
var first__30389 = cljs.core.first.call(null,seq__30388);
var seq__30388__$1 = cljs.core.next.call(null,seq__30388);
var k1 = first__30389;
var kr = seq__30388__$1;
var ks = vec__30387;
var vec__30390 = cljs.core.get.call(null,map__30383__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var seq__30391 = cljs.core.seq.call(null,vec__30390);
var first__30392 = cljs.core.first.call(null,seq__30391);
var seq__30391__$1 = cljs.core.next.call(null,seq__30391);
var f1 = first__30392;
var fr = seq__30391__$1;
var forms = vec__30390;
var ret = cljs.core.get.call(null,map__30383__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var rep_PLUS_ = cljs.core.get.call(null,map__30383__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ps)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
var rp = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.call(null,ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.fromArray([k1,rp], true, false):rp));
if(pr){
return cljs$spec$pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),fr,new cljs.core.Keyword(null,"ret","ret",-468222814),ret__$1], null));
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"rep+","rep+",-281382396),rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.pcat = (function cljs$spec$pcat(var_args){
var args__19578__auto__ = [];
var len__19571__auto___30395 = arguments.length;
var i__19572__auto___30396 = (0);
while(true){
if((i__19572__auto___30396 < len__19571__auto___30395)){
args__19578__auto__.push((arguments[i__19572__auto___30396]));

var G__30397 = (i__19572__auto___30396 + (1));
i__19572__auto___30396 = G__30397;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});

cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.pcat.cljs$lang$maxFixedArity = (0);

cljs.spec.pcat.cljs$lang$applyTo = (function (seq30394){
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30394));
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.cat_impl = (function cljs$spec$cat_impl(ks,ps,forms){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.rep_STAR_ = (function cljs$spec$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),new cljs.core.Keyword(null,"p2","p2",905500641),p2,new cljs.core.Keyword(null,"splice","splice",449588165),splice,new cljs.core.Keyword(null,"forms","forms",2045992350),form,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null)], null);
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p2,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p1,new cljs.core.Keyword(null,"ret","ret",-468222814),ret);
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.rep_impl = (function cljs$spec$rep_impl(form,p){
return cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.rep_PLUS_impl = (function cljs$spec$rep_PLUS_impl(form,p){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__19330__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19330__auto__);
})(),(function (){var x__19330__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null)),(function (){var x__19330__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19330__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19330__auto__);
})())))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"rep+","rep+",-281382396),form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.amp_impl = (function cljs$spec$amp_impl(re,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),new cljs.core.Keyword(null,"p1","p1",-936759954),re,new cljs.core.Keyword(null,"ps","ps",292358046),preds,new cljs.core.Keyword(null,"forms","forms",2045992350),pred_forms], null);
});
cljs.spec.filter_alt = (function cljs$spec$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__18496__auto__ = ks;
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.call(null,(function (p1__30398_SHARP_){
return f.call(null,cljs.core.first.call(null,p1__30398_SHARP_));
}),cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__18496__auto__ = cljs.core.seq.call(null,ks);
if(or__18496__auto__){
return or__18496__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__18496__auto__ = cljs.core.seq.call(null,forms);
if(or__18496__auto__){
return or__18496__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq.call(null,cljs.core.map.call(null,((function (pks){
return (function (p1__30399_SHARP_){
return cljs.core.nth.call(null,p1__30399_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.filter.call(null,f,ps)),ks,forms], null);
}
});
cljs.spec.alt_STAR_ = (function cljs$spec$alt_STAR_(ps,ks,forms){
var vec__30409 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.core.identity);
var vec__30412 = cljs.core.nth.call(null,vec__30409,(0),null);
var seq__30413 = cljs.core.seq.call(null,vec__30412);
var first__30414 = cljs.core.first.call(null,seq__30413);
var seq__30413__$1 = cljs.core.next.call(null,seq__30413);
var p1 = first__30414;
var pr = seq__30413__$1;
var ps__$1 = vec__30412;
var vec__30415 = cljs.core.nth.call(null,vec__30409,(1),null);
var k1 = cljs.core.nth.call(null,vec__30415,(0),null);
var ks__$1 = vec__30415;
var forms__$1 = cljs.core.nth.call(null,vec__30409,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),new cljs.core.Keyword(null,"ps","ps",292358046),ps__$1,new cljs.core.Keyword(null,"ks","ks",1900203942),ks__$1,new cljs.core.Keyword(null,"forms","forms",2045992350),forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.spec.accept.call(null,cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)], null)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alts = (function cljs$spec$alts(var_args){
var args__19578__auto__ = [];
var len__19571__auto___30419 = arguments.length;
var i__19572__auto___30420 = (0);
while(true){
if((i__19572__auto___30420 < len__19571__auto___30419)){
args__19578__auto__.push((arguments[i__19572__auto___30420]));

var G__30421 = (i__19572__auto___30420 + (1));
i__19572__auto___30420 = G__30421;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});

cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alt_STAR_.call(null,ps,null,null);
});

cljs.spec.alts.cljs$lang$maxFixedArity = (0);

cljs.spec.alts.cljs$lang$applyTo = (function (seq30418){
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30418));
});

cljs.spec.alt2 = (function cljs$spec$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__18484__auto__ = p1;
if(cljs.core.truth_(and__18484__auto__)){
return p2;
} else {
return and__18484__auto__;
}
})())){
return cljs.spec.alts.call(null,p1,p2);
} else {
var or__18496__auto__ = p1;
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alt_impl = (function cljs$spec$alt_impl(ks,ps,forms){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,ps,ks,forms),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null));
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.maybe_impl = (function cljs$spec$maybe_impl(p,form){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.accept.call(null,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718)], null)),new cljs.core.Keyword(null,"maybe","maybe",-314397560),form);
});
cljs.spec.noret_QMARK_ = (function cljs$spec$noret_QMARK_(p1,pret){
var or__18496__auto__ = cljs.core._EQ_.call(null,pret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718));
if(or__18496__auto__){
return or__18496__auto__;
} else {
var or__18496__auto____$1 = (function (){var and__18484__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),null], null), null).call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(cljs.spec.reg_resolve_BANG_.call(null,p1)));
if(cljs.core.truth_(and__18484__auto__)){
return cljs.core.empty_QMARK_.call(null,pret);
} else {
return and__18484__auto__;
}
})();
if(cljs.core.truth_(or__18496__auto____$1)){
return or__18496__auto____$1;
} else {
return null;
}
}
});
cljs.spec.accept_nil_QMARK_ = (function cljs$spec$accept_nil_QMARK_(p){
var map__30425 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__30425__$1 = ((((!((map__30425 == null)))?((((map__30425.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30425.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30425):map__30425);
var p__$1 = map__30425__$1;
var op = cljs.core.get.call(null,map__30425__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__30425__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var p1 = cljs.core.get.call(null,map__30425__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__30425__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__30425__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__30427 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__30427)){
return true;
} else {
if(cljs.core._EQ_.call(null,null,G__30427)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__30427)){
var and__18484__auto__ = cljs$spec$accept_nil_QMARK_.call(null,p1);
if(cljs.core.truth_(and__18484__auto__)){
var or__18496__auto__ = cljs.spec.noret_QMARK_.call(null,p1,cljs.spec.preturn.call(null,p1));
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
var ret = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1),ps,cljs.core.next.call(null,forms));
return cljs.core.not_EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
}
} else {
return and__18484__auto__;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__30427)){
var or__18496__auto__ = (p1 === p2);
if(or__18496__auto__){
return or__18496__auto__;
} else {
return cljs$spec$accept_nil_QMARK_.call(null,p1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__30427)){
return cljs.core.every_QMARK_.call(null,cljs$spec$accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__30427)){
return cljs.core.some.call(null,cljs$spec$accept_nil_QMARK_,ps);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.preturn = (function cljs$spec$preturn(p){
var map__30446 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__30446__$1 = ((((!((map__30446 == null)))?((((map__30446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30446):map__30446);
var p__$1 = map__30446__$1;
var vec__30447 = cljs.core.get.call(null,map__30446__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__30448 = cljs.core.seq.call(null,vec__30447);
var first__30449 = cljs.core.first.call(null,seq__30448);
var seq__30448__$1 = cljs.core.next.call(null,seq__30448);
var p0 = first__30449;
var pr = seq__30448__$1;
var ps = vec__30447;
var vec__30450 = cljs.core.get.call(null,map__30446__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__30450,(0),null);
var ks = vec__30450;
var op = cljs.core.get.call(null,map__30446__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__30446__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__30446__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__30446__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__30454 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__30454)){
return ret;
} else {
if(cljs.core._EQ_.call(null,null,G__30454)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__30454)){
var pret = cljs$spec$preturn.call(null,p1);
if(cljs.core.truth_(cljs.spec.noret_QMARK_.call(null,p1,pret))){
return new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718);
} else {
return cljs.spec.and_preds.call(null,pret,ps,forms);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__30454)){
return cljs.spec.add_ret.call(null,p1,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__30454)){
return cljs.spec.add_ret.call(null,p0,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__30454)){
var vec__30455 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.spec.accept_nil_QMARK_);
var vec__30458 = cljs.core.nth.call(null,vec__30455,(0),null);
var p0__$1 = cljs.core.nth.call(null,vec__30458,(0),null);
var vec__30461 = cljs.core.nth.call(null,vec__30455,(1),null);
var k0 = cljs.core.nth.call(null,vec__30461,(0),null);
var r = (((p0__$1 == null))?new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718):cljs$spec$preturn.call(null,p0__$1));
if(cljs.core.truth_(k0)){
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k0,r], null));
} else {
return r;
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.op_unform = (function cljs$spec$op_unform(p,x){
var map__30480 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__30480__$1 = ((((!((map__30480 == null)))?((((map__30480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30480):map__30480);
var p__$1 = map__30480__$1;
var vec__30481 = cljs.core.get.call(null,map__30480__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__30482 = cljs.core.seq.call(null,vec__30481);
var first__30483 = cljs.core.first.call(null,seq__30482);
var seq__30482__$1 = cljs.core.next.call(null,seq__30482);
var p0 = first__30483;
var pr = seq__30482__$1;
var ps = vec__30481;
var vec__30484 = cljs.core.get.call(null,map__30480__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__30484,(0),null);
var ks = vec__30484;
var op = cljs.core.get.call(null,map__30480__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__30480__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__30480__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__30480__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.call(null,map__30480__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__30480__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var kps = cljs.core.zipmap.call(null,ks,ps);
var G__30488 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__30488)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.call(null,null,G__30488)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform.call(null,p__$1,x)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__30488)){
var px = cljs.core.reduce.call(null,((function (G__30488,map__30480,map__30480__$1,p__$1,vec__30481,seq__30482,first__30483,seq__30482__$1,p0,pr,ps,vec__30484,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__30465_SHARP_,p2__30464_SHARP_){
return cljs.spec.unform.call(null,p2__30464_SHARP_,p1__30465_SHARP_);
});})(G__30488,map__30480,map__30480__$1,p__$1,vec__30481,seq__30482,first__30483,seq__30482__$1,p0,pr,ps,vec__30484,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse.call(null,ps));
return cljs$spec$op_unform.call(null,p1,px);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__30488)){
return cljs.core.mapcat.call(null,((function (G__30488,map__30480,map__30480__$1,p__$1,vec__30481,seq__30482,first__30483,seq__30482__$1,p0,pr,ps,vec__30484,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__30466_SHARP_){
return cljs$spec$op_unform.call(null,p1,p1__30466_SHARP_);
});})(G__30488,map__30480,map__30480__$1,p__$1,vec__30481,seq__30482,first__30483,seq__30482__$1,p0,pr,ps,vec__30484,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__30488)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.call(null,((function (G__30488,map__30480,map__30480__$1,p__$1,vec__30481,seq__30482,first__30483,seq__30482__$1,p0,pr,ps,vec__30484,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__30467_SHARP_){
return cljs$spec$op_unform.call(null,p0,p1__30467_SHARP_);
});})(G__30488,map__30480,map__30480__$1,p__$1,vec__30481,seq__30482,first__30483,seq__30482__$1,p0,pr,ps,vec__30484,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
return cljs.core.mapcat.call(null,((function (G__30488,map__30480,map__30480__$1,p__$1,vec__30481,seq__30482,first__30483,seq__30482__$1,p0,pr,ps,vec__30484,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_.call(null,x,k__$1)){
return cljs$spec$op_unform.call(null,kps.call(null,k__$1),cljs.core.get.call(null,x,k__$1));
} else {
return null;
}
});})(G__30488,map__30480,map__30480__$1,p__$1,vec__30481,seq__30482,first__30483,seq__30482__$1,p0,pr,ps,vec__30484,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,ks);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__30488)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform.call(null,p0,x)], null);
} else {
var vec__30489 = x;
var k__$1 = cljs.core.nth.call(null,vec__30489,(0),null);
var v = cljs.core.nth.call(null,vec__30489,(1),null);
return cljs$spec$op_unform.call(null,kps.call(null,k__$1),v);
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.add_ret = (function cljs$spec$add_ret(p,r,k){
var map__30495 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__30495__$1 = ((((!((map__30495 == null)))?((((map__30495.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30495.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30495):map__30495);
var p__$1 = map__30495__$1;
var op = cljs.core.get.call(null,map__30495__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__30495__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var splice = cljs.core.get.call(null,map__30495__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var prop = ((function (map__30495,map__30495__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core.empty_QMARK_.call(null,ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
});})(map__30495,map__30495__$1,p__$1,op,ps,splice))
;
var G__30497 = op;
if(cljs.core._EQ_.call(null,null,G__30497)){
return r;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__30497)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__30497)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__30497)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__30497)){
return prop.call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__30497)){
return prop.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.deriv = (function cljs$spec$deriv(p,x){
var map__30508 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__30508__$1 = ((((!((map__30508 == null)))?((((map__30508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30508):map__30508);
var p__$1 = map__30508__$1;
var vec__30509 = cljs.core.get.call(null,map__30508__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__30510 = cljs.core.seq.call(null,vec__30509);
var first__30511 = cljs.core.first.call(null,seq__30510);
var seq__30510__$1 = cljs.core.next.call(null,seq__30510);
var p0 = first__30511;
var pr = seq__30510__$1;
var ps = vec__30509;
var vec__30512 = cljs.core.get.call(null,map__30508__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__30513 = cljs.core.seq.call(null,vec__30512);
var first__30514 = cljs.core.first.call(null,seq__30513);
var seq__30513__$1 = cljs.core.next.call(null,seq__30513);
var k0 = first__30514;
var kr = seq__30513__$1;
var ks = vec__30512;
var op = cljs.core.get.call(null,map__30508__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__30508__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__30508__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__30508__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.call(null,map__30508__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var forms = cljs.core.get.call(null,map__30508__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
if(cljs.core.truth_(p__$1)){
var G__30516 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__30516)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__30516)){
var ret__$1 = cljs.spec.dt.call(null,p__$1,x,p__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret__$1)){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__30516)){
var temp__4657__auto__ = cljs$spec$deriv.call(null,p1,x);
if(cljs.core.truth_(temp__4657__auto__)){
var p1__$1 = temp__4657__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1__$1),ps,cljs.core.next.call(null,forms));
if(cljs.core._EQ_.call(null,ret__$1,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return cljs.spec.amp_impl.call(null,p1__$1,ps,forms);
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__30516)){
return cljs.spec.alt2.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.cons.call(null,cljs$spec$deriv.call(null,p0,x),pr),new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),ret], null)),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p0))?cljs$spec$deriv.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.next.call(null,forms),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.spec.add_ret.call(null,p0,ret,k0)], null)),x):null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__30516)){
return cljs.spec.alt_STAR_.call(null,cljs.core.map.call(null,((function (G__30516,map__30508,map__30508__$1,p__$1,vec__30509,seq__30510,first__30511,seq__30510__$1,p0,pr,ps,vec__30512,seq__30513,first__30514,seq__30513__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__30498_SHARP_){
return cljs$spec$deriv.call(null,p1__30498_SHARP_,x);
});})(G__30516,map__30508,map__30508__$1,p__$1,vec__30509,seq__30510,first__30511,seq__30510__$1,p0,pr,ps,vec__30512,seq__30513,first__30514,seq__30513__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__30516)){
return cljs.spec.alt2.call(null,cljs.spec.rep_STAR_.call(null,cljs$spec$deriv.call(null,p1,x),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))?cljs$spec$deriv.call(null,cljs.spec.rep_STAR_.call(null,p2,p2,cljs.spec.add_ret.call(null,p1,ret,null),splice,forms),x):null));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_describe = (function cljs$spec$op_describe(p){
var map__30520 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__30520__$1 = ((((!((map__30520 == null)))?((((map__30520.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30520.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30520):map__30520);
var p__$1 = map__30520__$1;
var op = cljs.core.get.call(null,map__30520__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__30520__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__30520__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__30520__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__30520__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__30520__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var rep_PLUS_ = cljs.core.get.call(null,map__30520__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__30520__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
if(cljs.core.truth_(p__$1)){
var G__30522 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__30522)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__30522)){
return p__$1;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__30522)){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("clojure.spec","&","clojure.spec/&",-770935491,null),cljs$spec$op_describe.call(null,p1),forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__30522)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core._conj.call(null,(function (){var x__19330__auto__ = rep_PLUS_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19330__auto__);
})(),new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),cljs.core.mapcat.call(null,cljs.core.vector,(function (){var or__18496__auto__ = cljs.core.seq.call(null,ks);
if(or__18496__auto__){
return or__18496__auto__;
} else {
return cljs.core.repeat.call(null,new cljs.core.Keyword(null,"_","_",1453416199));
}
})(),(function (){var or__18496__auto__ = cljs.core.seq.call(null,forms);
if(or__18496__auto__){
return or__18496__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__30522)){
if(cljs.core.truth_(maybe)){
return cljs.core._conj.call(null,(function (){var x__19330__auto__ = maybe;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19330__auto__);
})(),new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","alt","cljs.spec/alt",157113396,null),cljs.core.mapcat.call(null,cljs.core.vector,ks,forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__30522)){
var x__19330__auto__ = (cljs.core.truth_(splice)?new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null):new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null));
return cljs.core._conj.call(null,(function (){var x__19330__auto____$1 = forms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19330__auto____$1);
})(),x__19330__auto__);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_explain = (function cljs$spec$op_explain(form,p,path,via,in$,input){
var vec__30536 = input;
var x = cljs.core.nth.call(null,vec__30536,(0),null);
var input__$1 = vec__30536;
var map__30539 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__30539__$1 = ((((!((map__30539 == null)))?((((map__30539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30539):map__30539);
var p__$1 = map__30539__$1;
var op = cljs.core.get.call(null,map__30539__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__30539__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__30539__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__30539__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__30539__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__30539__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__30539__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var via__$1 = (function (){var temp__4655__auto__ = cljs.spec.spec_name.call(null,p__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__30536,x,input__$1,map__30539,map__30539__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return cljs.core.PersistentArrayMap.fromArray([path__$1,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),"Insufficient input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form__$1),new cljs.core.Keyword(null,"val","val",128701612),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"via","via",-1904457336),via__$1,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
});})(vec__30536,x,input__$1,map__30539,map__30539__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__30541 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__30541)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__30541)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,form);
} else {
return cljs.spec.explain_1.call(null,form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__30541)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))){
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1));
} else {
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p1));
}
} else {
var temp__4655__auto__ = cljs.spec.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__4655__auto__)){
var p1__$1 = temp__4655__auto__;
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1__$1));
} else {
return cljs$spec$op_explain.call(null,cljs.spec.op_describe.call(null,p1),p1,path,via__$1,in$,input__$1);
}
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__30541)){
var pkfs = cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__18496__auto__ = cljs.core.seq.call(null,ks);
if(or__18496__auto__){
return or__18496__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__18496__auto__ = cljs.core.seq.call(null,forms);
if(or__18496__auto__){
return or__18496__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
var vec__30542 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,pkfs)))?cljs.core.first.call(null,pkfs):cljs.core.first.call(null,cljs.core.remove.call(null,((function (pkfs,G__30541,vec__30536,x,input__$1,map__30539,map__30539__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__30545){
var vec__30546 = p__30545;
var p__$2 = cljs.core.nth.call(null,vec__30546,(0),null);
return cljs.spec.accept_nil_QMARK_.call(null,p__$2);
});})(pkfs,G__30541,vec__30536,x,input__$1,map__30539,map__30539__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.call(null,vec__30542,(0),null);
var k = cljs.core.nth.call(null,vec__30542,(1),null);
var form__$1 = cljs.core.nth.call(null,vec__30542,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path);
var form__$2 = (function (){var or__18496__auto__ = form__$1;
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})();
if((cljs.core.empty_QMARK_.call(null,input__$1)) && (cljs.core.not.call(null,pred))){
return insufficient.call(null,path__$1,form__$2);
} else {
return cljs$spec$op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__30541)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p__$1));
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (G__30541,vec__30536,x,input__$1,map__30539,map__30539__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
return cljs$spec$op_explain.call(null,(function (){var or__18496__auto__ = form__$1;
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})(),pred,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),via__$1,in$,input__$1);
});})(G__30541,vec__30536,x,input__$1,map__30539,map__30539__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__18496__auto__ = cljs.core.seq.call(null,ks);
if(or__18496__auto__){
return or__18496__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__18496__auto__ = cljs.core.seq.call(null,forms);
if(or__18496__auto__){
return or__18496__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__30541)){
return cljs$spec$op_explain.call(null,(((p1 === p2))?forms:cljs.spec.op_describe.call(null,p1)),p1,path,via__$1,in$,input__$1);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.re_gen = (function cljs$spec$re_gen(p,overrides,path,rmap,f){
var map__30555 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__30555__$1 = ((((!((map__30555 == null)))?((((map__30555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30555):map__30555);
var p__$1 = map__30555__$1;
var op = cljs.core.get.call(null,map__30555__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__30555__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__30555__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var p1 = cljs.core.get.call(null,map__30555__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__30555__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__30555__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__30555__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ret = cljs.core.get.call(null,map__30555__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var id = cljs.core.get.call(null,map__30555__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.inck.call(null,rmap,id):rmap);
var ggens = ((function (map__30555,map__30555__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__30555,map__30555__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1){
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__18484__auto__ = rmap__$1;
if(cljs.core.truth_(and__18484__auto__)){
var and__18484__auto____$1 = id;
if(cljs.core.truth_(and__18484__auto____$1)){
var and__18484__auto____$2 = k;
if(cljs.core.truth_(and__18484__auto____$2)){
return cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,path,k);
} else {
return and__18484__auto____$2;
}
} else {
return and__18484__auto____$1;
}
} else {
return and__18484__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (map__30555,map__30555__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1){
return (function (){
return cljs$spec$re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__18496__auto__ = f__$1;
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return p__$2;
}
})());
});})(map__30555,map__30555__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1))
,null)));
} else {
return cljs$spec$re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__18496__auto__ = f__$1;
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return p__$2;
}
})());
}
}
});})(map__30555,map__30555__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1))
;
return cljs.core.map.call(null,gen,ps__$1,(function (){var or__18496__auto__ = cljs.core.seq.call(null,ks__$1);
if(or__18496__auto__){
return or__18496__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__18496__auto__ = cljs.core.seq.call(null,forms__$1);
if(or__18496__auto__){
return or__18496__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
});})(map__30555,map__30555__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1))
;
var or__18496__auto__ = (function (){var temp__4657__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
var G__30558 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"accept","accept",1874130431),G__30558)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
if(cljs.core._EQ_.call(null,null,G__30558)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
if(cljs.core.truth_(p__$1)){
var G__30559 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__30559)){
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.spec.impl.gen.return$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null));
}
} else {
if(cljs.core._EQ_.call(null,null,G__30559)){
var temp__4657__auto__ = cljs.spec.gensub.call(null,p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__30559)){
return cljs$spec$re_gen.call(null,p1,overrides,path,rmap__$1,cljs.spec.op_describe.call(null,p1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__30559)){
var gens = ggens.call(null,ps,ks,forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gens)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__30559)){
var gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,ggens.call(null,ps,ks,forms));
if(cljs.core.empty_QMARK_.call(null,gens)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gens);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__30559)){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
var temp__4657__auto__ = cljs$spec$re_gen.call(null,p2,overrides,path,rmap__$1,forms);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
return cljs.spec.impl.gen.fmap.call(null,((function (g,temp__4657__auto__,G__30559,or__18496__auto__,map__30555,map__30555__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1,ggens){
return (function (p1__30549_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__30549_SHARP_);
});})(g,temp__4657__auto__,G__30559,or__18496__auto__,map__30555,map__30555__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1,ggens))
,cljs.spec.impl.gen.vector.call(null,g));
} else {
return null;
}
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
});
cljs.spec.re_conform = (function cljs$spec$re_conform(p,p__30560){
while(true){
var vec__30564 = p__30560;
var seq__30565 = cljs.core.seq.call(null,vec__30564);
var first__30566 = cljs.core.first.call(null,seq__30565);
var seq__30565__$1 = cljs.core.next.call(null,seq__30565);
var x = first__30566;
var xs = seq__30565__$1;
var data = vec__30564;
if(cljs.core.empty_QMARK_.call(null,data)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p))){
var ret = cljs.spec.preturn.call(null,p);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return null;
} else {
return ret;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
var temp__4655__auto__ = cljs.spec.deriv.call(null,p,x);
if(cljs.core.truth_(temp__4655__auto__)){
var dp = temp__4655__auto__;
var G__30567 = dp;
var G__30568 = xs;
p = G__30567;
p__30560 = G__30568;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
});
cljs.spec.re_explain = (function cljs$spec$re_explain(path,via,in$,re,input){
var p = re;
var G__30582 = input;
var vec__30583 = G__30582;
var seq__30584 = cljs.core.seq.call(null,vec__30583);
var first__30585 = cljs.core.first.call(null,seq__30584);
var seq__30584__$1 = cljs.core.next.call(null,seq__30584);
var x = first__30585;
var xs = seq__30584__$1;
var data = vec__30583;
var i = (0);
var p__$1 = p;
var G__30582__$1 = G__30582;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__30586 = G__30582__$1;
var seq__30587 = cljs.core.seq.call(null,vec__30586);
var first__30588 = cljs.core.first.call(null,seq__30587);
var seq__30587__$1 = cljs.core.next.call(null,seq__30587);
var x__$1 = first__30588;
var xs__$1 = seq__30587__$1;
var data__$1 = vec__30586;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_.call(null,data__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p__$2))){
return null;
} else {
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__4655__auto__ = cljs.spec.deriv.call(null,p__$2,x__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var dp = temp__4655__auto__;
var G__30589 = dp;
var G__30590 = xs__$1;
var G__30591 = (i__$2 + (1));
p__$1 = G__30589;
G__30582__$1 = G__30590;
i__$1 = G__30591;
continue;
} else {
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p__$2))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p__$2),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649))){
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,re)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], true, false);
}
} else {
var or__18496__auto__ = cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,p__$2)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], true, false);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.regex_spec_impl = (function cljs$spec$regex_spec_impl(re,gfn){
if(typeof cljs.spec.t_cljs$spec30595 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec30595 = (function (regex_spec_impl,re,gfn,meta30596){
this.regex_spec_impl = regex_spec_impl;
this.re = re;
this.gfn = gfn;
this.meta30596 = meta30596;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec30595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30597,meta30596__$1){
var self__ = this;
var _30597__$1 = this;
return (new cljs.spec.t_cljs$spec30595(self__.regex_spec_impl,self__.re,self__.gfn,meta30596__$1));
});

cljs.spec.t_cljs$spec30595.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30597){
var self__ = this;
var _30597__$1 = this;
return self__.meta30596;
});

cljs.spec.t_cljs$spec30595.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec30595.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_conform.call(null,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});

cljs.spec.t_cljs$spec30595.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_unform.call(null,self__.re,x);
});

cljs.spec.t_cljs$spec30595.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_explain.call(null,path,via,in$,self__.re,cljs.core.seq.call(null,x));
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,self__.re)),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
}
});

cljs.spec.t_cljs$spec30595.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.re_gen.call(null,self__.re,overrides,path,rmap,cljs.spec.op_describe.call(null,self__.re));
}
});

cljs.spec.t_cljs$spec30595.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.regex_spec_impl.call(null,self__.re,gfn__$1);
});

cljs.spec.t_cljs$spec30595.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_describe.call(null,self__.re);
});

cljs.spec.t_cljs$spec30595.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"regex-spec-impl","regex-spec-impl",1541266692,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'spec' with a regex op argument"], null)),new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta30596","meta30596",-671322361,null)], null);
});

cljs.spec.t_cljs$spec30595.cljs$lang$type = true;

cljs.spec.t_cljs$spec30595.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec30595";

cljs.spec.t_cljs$spec30595.cljs$lang$ctorPrWriter = (function (this__19102__auto__,writer__19103__auto__,opt__19104__auto__){
return cljs.core._write.call(null,writer__19103__auto__,"cljs.spec/t_cljs$spec30595");
});

cljs.spec.__GT_t_cljs$spec30595 = (function cljs$spec$regex_spec_impl_$___GT_t_cljs$spec30595(regex_spec_impl__$1,re__$1,gfn__$1,meta30596){
return (new cljs.spec.t_cljs$spec30595(regex_spec_impl__$1,re__$1,gfn__$1,meta30596));
});

}

return (new cljs.spec.t_cljs$spec30595(cljs$spec$regex_spec_impl,re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.call_valid_QMARK_ = (function cljs$spec$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.core._EQ_.call(null,cargs,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return null;
} else {
var ret = cljs.core.apply.call(null,f,args);
var cret = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__18484__auto__ = cljs.core.not_EQ_.call(null,cret,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
if(and__18484__auto__){
if(cljs.core.truth_(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.valid_QMARK_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return true;
}
} else {
return and__18484__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.validate_fn = (function cljs$spec$validate_fn(f,specs,iters){
var g = cljs.spec.gen.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.impl.gen.for_all_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
return (function (p1__30598_SHARP_){
return cljs.spec.call_valid_QMARK_.call(null,f,specs,p1__30598_SHARP_);
});})(g))
);
var ret = cljs.spec.impl.gen.quick_check.call(null,iters,prop);
var temp__4655__auto__ = new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__30602 = temp__4655__auto__;
var smallest = cljs.core.nth.call(null,vec__30602,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.fspec_impl = (function cljs$spec$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),argspec,new cljs.core.Keyword(null,"ret","ret",-468222814),retspec,new cljs.core.Keyword(null,"fn","fn",-1175266204),fnspec], null);
if(typeof cljs.spec.t_cljs$spec30611 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.t_cljs$spec30611 = (function (fspec_impl,argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta30612){
this.fspec_impl = fspec_impl;
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta30612 = meta30612;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec30611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_30613,meta30612__$1){
var self__ = this;
var _30613__$1 = this;
return (new cljs.spec.t_cljs$spec30611(self__.fspec_impl,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta30612__$1));
});})(specs))
;

cljs.spec.t_cljs$spec30611.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_30613){
var self__ = this;
var _30613__$1 = this;
return self__.meta30612;
});})(specs))
;

cljs.spec.t_cljs$spec30611.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,self__.specs,k);
});})(specs))
;

cljs.spec.t_cljs$spec30611.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.specs,k,not_found);
});})(specs))
;

cljs.spec.t_cljs$spec30611.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec30611.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
if((f === cljs.spec.validate_fn.call(null,f,self__.specs,cljs.spec._STAR_fspec_iterations_STAR_))){
return f;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(specs))
;

cljs.spec.t_cljs$spec30611.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;

cljs.spec.t_cljs$spec30611.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
var args = cljs.spec.validate_fn.call(null,f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.call(null,f,args);
}catch (e30614){if((e30614 instanceof Error)){
var t = e30614;
return t;
} else {
throw e30614;

}
}})();
if((ret instanceof Error)){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"fn","fn",465265323,null)),new cljs.core.Keyword(null,"val","val",128701612),args,new cljs.core.Keyword(null,"reason","reason",-2070751759),ret.message,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
var cret = cljs.spec.dt.call(null,self__.retspec,ret,self__.rform);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cret)){
return cljs.spec.explain_1.call(null,self__.rform,self__.retspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"ret","ret",-468222814)),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.conform.call(null,self__.argspec,args);
return cljs.spec.explain_1.call(null,self__.fform,self__.fnspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"fn","fn",-1175266204)),via,in$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return null;
}
}
}
}
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Keyword(null,"val","val",128701612),f,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
}
});})(specs))
;

cljs.spec.t_cljs$spec30611.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.return$.call(null,((function (___$4,specs){
return (function() { 
var G__30617__delegate = function (args){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,self__.argspec,args))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str((function (){var sb__19482__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_30615_30618 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_30616_30619 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_30615_30618,_STAR_print_fn_STAR_30616_30619,sb__19482__auto__,___$4,specs){
return (function (x__19483__auto__){
return sb__19482__auto__.append(x__19483__auto__);
});})(_STAR_print_newline_STAR_30615_30618,_STAR_print_fn_STAR_30616_30619,sb__19482__auto__,___$4,specs))
;

try{cljs.spec.explain.call(null,self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30616_30619;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30615_30618;
}
return [cljs.core.str(sb__19482__auto__)].join('');
})()),cljs.core.str("\n"),cljs.core.str("(valid? argspec args)")].join('')));
}

return cljs.spec.impl.gen.generate.call(null,cljs.spec.gen.call(null,self__.retspec));
};
var G__30617 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30620__i = 0, G__30620__a = new Array(arguments.length -  0);
while (G__30620__i < G__30620__a.length) {G__30620__a[G__30620__i] = arguments[G__30620__i + 0]; ++G__30620__i;}
  args = new cljs.core.IndexedSeq(G__30620__a,0);
} 
return G__30617__delegate.call(this,args);};
G__30617.cljs$lang$maxFixedArity = 0;
G__30617.cljs$lang$applyTo = (function (arglist__30621){
var args = cljs.core.seq(arglist__30621);
return G__30617__delegate(args);
});
G__30617.cljs$core$IFn$_invoke$arity$variadic = G__30617__delegate;
return G__30617;
})()
;})(___$4,specs))
);
}
});})(specs))
;

cljs.spec.t_cljs$spec30611.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1);
});})(specs))
;

cljs.spec.t_cljs$spec30611.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"args","args",1315556576)),(function (){var x__19330__auto__ = self__.aform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19330__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ret","ret",-468222814)),(function (){var x__19330__auto__ = self__.rform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19330__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fn","fn",-1175266204)),(function (){var x__19330__auto__ = self__.fform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19330__auto__);
})())));
});})(specs))
;

cljs.spec.t_cljs$spec30611.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fspec-impl","fspec-impl",897021908,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'fspec'"], null)),new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"meta30612","meta30612",-797044030,null)], null);
});})(specs))
;

cljs.spec.t_cljs$spec30611.cljs$lang$type = true;

cljs.spec.t_cljs$spec30611.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec30611";

cljs.spec.t_cljs$spec30611.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__19102__auto__,writer__19103__auto__,opt__19104__auto__){
return cljs.core._write.call(null,writer__19103__auto__,"cljs.spec/t_cljs$spec30611");
});})(specs))
;

cljs.spec.__GT_t_cljs$spec30611 = ((function (specs){
return (function cljs$spec$fspec_impl_$___GT_t_cljs$spec30611(fspec_impl__$1,argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta30612){
return (new cljs.spec.t_cljs$spec30611(fspec_impl__$1,argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta30612));
});})(specs))
;

}

return (new cljs.spec.t_cljs$spec30611(cljs$spec$fspec_impl,argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.def_impl.call(null,new cljs.core.Keyword("cljs.spec","any","cljs.spec/any",1039429974),cljs.core.list(new cljs.core.Symbol("cljs.spec","spec","cljs.spec/spec",775251713,null),cljs.core.list(new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),true),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol("cljs.spec.impl.gen","any","cljs.spec.impl.gen/any",-1450752257,null)),cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),true),cljs.core.constantly.call(null,true),cljs.spec.impl.gen.any,null));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("cljs.spec","kvs->map","cljs.spec/kvs->map",-1189105441),cljs.core.list(new cljs.core.Symbol("cljs.spec","conformer","cljs.spec/conformer",-236330417,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30622#","p1__30622#",-1714173398,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__30622#","p1__30622#",-1714173398,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__30622#","p1__30622#",-1714173398,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30623#","p1__30623#",681063787,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"p1__30623#","p1__30623#",681063787,null)))),cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30622#","p1__30622#",-1714173398,null)], null),cljs.core.list(new cljs.core.Symbol(null,"zipmap","zipmap",-690049687,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__30622#","p1__30622#",-1714173398,null)),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__30622#","p1__30622#",-1714173398,null)))),(function (p1__30622_SHARP_){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),p1__30622_SHARP_),cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),p1__30622_SHARP_));
}),null,true,(function (p1__30623_SHARP_){
return cljs.core.map.call(null,(function (p__30624){
var vec__30625 = p__30624;
var k = cljs.core.nth.call(null,vec__30625,(0),null);
var v = cljs.core.nth.call(null,vec__30625,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),k,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),v], null);
}),p1__30623_SHARP_);
})));
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.exercise = (function cljs$spec$exercise(var_args){
var args30629 = [];
var len__19571__auto___30632 = arguments.length;
var i__19572__auto___30633 = (0);
while(true){
if((i__19572__auto___30633 < len__19571__auto___30632)){
args30629.push((arguments[i__19572__auto___30633]));

var G__30634 = (i__19572__auto___30633 + (1));
i__19572__auto___30633 = G__30634;
continue;
} else {
}
break;
}

var G__30631 = args30629.length;
switch (G__30631) {
case 1:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30629.length)].join('')));

}
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.exercise.call(null,spec,(10));
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.exercise.call(null,spec,n,null);
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.call(null,(function (p1__30628_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__30628_SHARP_,cljs.spec.conform.call(null,spec,p1__30628_SHARP_)],null));
}),cljs.spec.impl.gen.sample.call(null,cljs.spec.gen.call(null,spec,overrides),n));
});

cljs.spec.exercise.cljs$lang$maxFixedArity = 3;

/**
 * returns a predicate function that checks *coll-check-limit* items in a collection with pred
 */
cljs.spec.coll_checker = (function cljs$spec$coll_checker(pred){
var check_QMARK_ = (function (p1__30636_SHARP_){
return cljs.spec.valid_QMARK_.call(null,pred,p1__30636_SHARP_);
});
return ((function (check_QMARK_){
return (function (coll){
return ((coll == null)) || ((cljs.core.coll_QMARK_.call(null,coll)) && (cljs.core.every_QMARK_.call(null,check_QMARK_,cljs.core.take.call(null,cljs.spec._STAR_coll_check_limit_STAR_,coll))));
});
;})(check_QMARK_))
});
/**
 * returns a function of no args that returns a generator of
 *   collections of items conforming to pred, with the same shape as
 *   init-coll
 */
cljs.spec.coll_gen = (function cljs$spec$coll_gen(pred,init_coll){
var init = cljs.core.empty.call(null,init_coll);
return ((function (init){
return (function (){
return cljs.spec.impl.gen.fmap.call(null,((function (init){
return (function (p1__30637_SHARP_){
if(cljs.core.vector_QMARK_.call(null,init)){
return p1__30637_SHARP_;
} else {
return cljs.core.into.call(null,init,p1__30637_SHARP_);
}
});})(init))
,cljs.spec.impl.gen.vector.call(null,cljs.spec.gen.call(null,pred)));
});
;})(init))
});
/**
 * Return true if inst at or after start and before end
 */
cljs.spec.inst_in_range_QMARK_ = (function cljs$spec$inst_in_range_QMARK_(start,end,inst){
var and__18484__auto__ = cljs.core.inst_QMARK_.call(null,inst);
if(and__18484__auto__){
var t = cljs.core.inst_ms.call(null,inst);
return ((cljs.core.inst_ms.call(null,start) <= t)) && ((t < cljs.core.inst_ms.call(null,end)));
} else {
return and__18484__auto__;
}
});
/**
 * Return true if start <= val and val < end
 */
cljs.spec.int_in_range_QMARK_ = (function cljs$spec$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_.call(null,val)){
return ((start <= val)) && ((val < end));
} else {
if((val instanceof goog.math.Long)){
var and__18484__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__18484__auto__)){
return val.lessThan(end);
} else {
return and__18484__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__18484__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__18484__auto__)){
return val.lessThan(end);
} else {
return and__18484__auto__;
}
} else {
return false;

}
}
}
});

//# sourceMappingURL=spec.js.map?rel=1466621026925