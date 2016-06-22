// Compiled by ClojureScript 1.9.88 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__19102__auto__,writer__19103__auto__,opt__19104__auto__){
return cljs.core._write.call(null,writer__19103__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29359 = arguments.length;
var i__19572__auto___29360 = (0);
while(true){
if((i__19572__auto___29360 < len__19571__auto___29359)){
args__19578__auto__.push((arguments[i__19572__auto___29360]));

var G__29361 = (i__19572__auto___29360 + (1));
i__19572__auto___29360 = G__29361;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq29358){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29358));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29363 = arguments.length;
var i__19572__auto___29364 = (0);
while(true){
if((i__19572__auto___29364 < len__19571__auto___29363)){
args__19578__auto__.push((arguments[i__19572__auto___29364]));

var G__29365 = (i__19572__auto___29364 + (1));
i__19572__auto___29364 = G__29365;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq29362){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29362));
});

var g_QMARK__29366 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_29367 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__29366){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__29366))
,null));
var mkg_29368 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__29366,g_29367){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__29366,g_29367))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__29366,g_29367,mkg_29368){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__29366).call(null,x);
});})(g_QMARK__29366,g_29367,mkg_29368))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__29366,g_29367,mkg_29368){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_29368).call(null,gfn);
});})(g_QMARK__29366,g_29367,mkg_29368))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__29366,g_29367,mkg_29368){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_29367).call(null,generator);
});})(g_QMARK__29366,g_29367,mkg_29368))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__29330__auto___29386 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__29330__auto___29386){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29387 = arguments.length;
var i__19572__auto___29388 = (0);
while(true){
if((i__19572__auto___29388 < len__19571__auto___29387)){
args__19578__auto__.push((arguments[i__19572__auto___29388]));

var G__29389 = (i__19572__auto___29388 + (1));
i__19572__auto___29388 = G__29389;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29330__auto___29386))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29330__auto___29386){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29330__auto___29386),args);
});})(g__29330__auto___29386))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__29330__auto___29386){
return (function (seq29369){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29369));
});})(g__29330__auto___29386))
;


var g__29330__auto___29390 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__29330__auto___29390){
return (function cljs$spec$impl$gen$list(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29391 = arguments.length;
var i__19572__auto___29392 = (0);
while(true){
if((i__19572__auto___29392 < len__19571__auto___29391)){
args__19578__auto__.push((arguments[i__19572__auto___29392]));

var G__29393 = (i__19572__auto___29392 + (1));
i__19572__auto___29392 = G__29393;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29330__auto___29390))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29330__auto___29390){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29330__auto___29390),args);
});})(g__29330__auto___29390))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__29330__auto___29390){
return (function (seq29370){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29370));
});})(g__29330__auto___29390))
;


var g__29330__auto___29394 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__29330__auto___29394){
return (function cljs$spec$impl$gen$map(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29395 = arguments.length;
var i__19572__auto___29396 = (0);
while(true){
if((i__19572__auto___29396 < len__19571__auto___29395)){
args__19578__auto__.push((arguments[i__19572__auto___29396]));

var G__29397 = (i__19572__auto___29396 + (1));
i__19572__auto___29396 = G__29397;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29330__auto___29394))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29330__auto___29394){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29330__auto___29394),args);
});})(g__29330__auto___29394))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__29330__auto___29394){
return (function (seq29371){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29371));
});})(g__29330__auto___29394))
;


var g__29330__auto___29398 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__29330__auto___29398){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29399 = arguments.length;
var i__19572__auto___29400 = (0);
while(true){
if((i__19572__auto___29400 < len__19571__auto___29399)){
args__19578__auto__.push((arguments[i__19572__auto___29400]));

var G__29401 = (i__19572__auto___29400 + (1));
i__19572__auto___29400 = G__29401;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29330__auto___29398))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29330__auto___29398){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29330__auto___29398),args);
});})(g__29330__auto___29398))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__29330__auto___29398){
return (function (seq29372){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29372));
});})(g__29330__auto___29398))
;


var g__29330__auto___29402 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__29330__auto___29402){
return (function cljs$spec$impl$gen$set(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29403 = arguments.length;
var i__19572__auto___29404 = (0);
while(true){
if((i__19572__auto___29404 < len__19571__auto___29403)){
args__19578__auto__.push((arguments[i__19572__auto___29404]));

var G__29405 = (i__19572__auto___29404 + (1));
i__19572__auto___29404 = G__29405;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29330__auto___29402))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29330__auto___29402){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29330__auto___29402),args);
});})(g__29330__auto___29402))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__29330__auto___29402){
return (function (seq29373){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29373));
});})(g__29330__auto___29402))
;


var g__29330__auto___29406 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__29330__auto___29406){
return (function cljs$spec$impl$gen$vector(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29407 = arguments.length;
var i__19572__auto___29408 = (0);
while(true){
if((i__19572__auto___29408 < len__19571__auto___29407)){
args__19578__auto__.push((arguments[i__19572__auto___29408]));

var G__29409 = (i__19572__auto___29408 + (1));
i__19572__auto___29408 = G__29409;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29330__auto___29406))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29330__auto___29406){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29330__auto___29406),args);
});})(g__29330__auto___29406))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__29330__auto___29406){
return (function (seq29374){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29374));
});})(g__29330__auto___29406))
;


var g__29330__auto___29410 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__29330__auto___29410){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29411 = arguments.length;
var i__19572__auto___29412 = (0);
while(true){
if((i__19572__auto___29412 < len__19571__auto___29411)){
args__19578__auto__.push((arguments[i__19572__auto___29412]));

var G__29413 = (i__19572__auto___29412 + (1));
i__19572__auto___29412 = G__29413;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29330__auto___29410))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29330__auto___29410){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29330__auto___29410),args);
});})(g__29330__auto___29410))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__29330__auto___29410){
return (function (seq29375){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29375));
});})(g__29330__auto___29410))
;


var g__29330__auto___29414 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__29330__auto___29414){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29415 = arguments.length;
var i__19572__auto___29416 = (0);
while(true){
if((i__19572__auto___29416 < len__19571__auto___29415)){
args__19578__auto__.push((arguments[i__19572__auto___29416]));

var G__29417 = (i__19572__auto___29416 + (1));
i__19572__auto___29416 = G__29417;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29330__auto___29414))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29330__auto___29414){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29330__auto___29414),args);
});})(g__29330__auto___29414))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__29330__auto___29414){
return (function (seq29376){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29376));
});})(g__29330__auto___29414))
;


var g__29330__auto___29418 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__29330__auto___29418){
return (function cljs$spec$impl$gen$elements(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29419 = arguments.length;
var i__19572__auto___29420 = (0);
while(true){
if((i__19572__auto___29420 < len__19571__auto___29419)){
args__19578__auto__.push((arguments[i__19572__auto___29420]));

var G__29421 = (i__19572__auto___29420 + (1));
i__19572__auto___29420 = G__29421;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29330__auto___29418))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29330__auto___29418){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29330__auto___29418),args);
});})(g__29330__auto___29418))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__29330__auto___29418){
return (function (seq29377){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29377));
});})(g__29330__auto___29418))
;


var g__29330__auto___29422 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__29330__auto___29422){
return (function cljs$spec$impl$gen$bind(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29423 = arguments.length;
var i__19572__auto___29424 = (0);
while(true){
if((i__19572__auto___29424 < len__19571__auto___29423)){
args__19578__auto__.push((arguments[i__19572__auto___29424]));

var G__29425 = (i__19572__auto___29424 + (1));
i__19572__auto___29424 = G__29425;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29330__auto___29422))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29330__auto___29422){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29330__auto___29422),args);
});})(g__29330__auto___29422))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__29330__auto___29422){
return (function (seq29378){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29378));
});})(g__29330__auto___29422))
;


var g__29330__auto___29426 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__29330__auto___29426){
return (function cljs$spec$impl$gen$choose(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29427 = arguments.length;
var i__19572__auto___29428 = (0);
while(true){
if((i__19572__auto___29428 < len__19571__auto___29427)){
args__19578__auto__.push((arguments[i__19572__auto___29428]));

var G__29429 = (i__19572__auto___29428 + (1));
i__19572__auto___29428 = G__29429;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29330__auto___29426))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29330__auto___29426){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29330__auto___29426),args);
});})(g__29330__auto___29426))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__29330__auto___29426){
return (function (seq29379){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29379));
});})(g__29330__auto___29426))
;


var g__29330__auto___29430 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__29330__auto___29430){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29431 = arguments.length;
var i__19572__auto___29432 = (0);
while(true){
if((i__19572__auto___29432 < len__19571__auto___29431)){
args__19578__auto__.push((arguments[i__19572__auto___29432]));

var G__29433 = (i__19572__auto___29432 + (1));
i__19572__auto___29432 = G__29433;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29330__auto___29430))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29330__auto___29430){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29330__auto___29430),args);
});})(g__29330__auto___29430))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__29330__auto___29430){
return (function (seq29380){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29380));
});})(g__29330__auto___29430))
;


var g__29330__auto___29434 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__29330__auto___29434){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29435 = arguments.length;
var i__19572__auto___29436 = (0);
while(true){
if((i__19572__auto___29436 < len__19571__auto___29435)){
args__19578__auto__.push((arguments[i__19572__auto___29436]));

var G__29437 = (i__19572__auto___29436 + (1));
i__19572__auto___29436 = G__29437;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29330__auto___29434))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29330__auto___29434){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29330__auto___29434),args);
});})(g__29330__auto___29434))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__29330__auto___29434){
return (function (seq29381){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29381));
});})(g__29330__auto___29434))
;


var g__29330__auto___29438 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__29330__auto___29438){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29439 = arguments.length;
var i__19572__auto___29440 = (0);
while(true){
if((i__19572__auto___29440 < len__19571__auto___29439)){
args__19578__auto__.push((arguments[i__19572__auto___29440]));

var G__29441 = (i__19572__auto___29440 + (1));
i__19572__auto___29440 = G__29441;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29330__auto___29438))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29330__auto___29438){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29330__auto___29438),args);
});})(g__29330__auto___29438))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__29330__auto___29438){
return (function (seq29382){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29382));
});})(g__29330__auto___29438))
;


var g__29330__auto___29442 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__29330__auto___29442){
return (function cljs$spec$impl$gen$sample(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29443 = arguments.length;
var i__19572__auto___29444 = (0);
while(true){
if((i__19572__auto___29444 < len__19571__auto___29443)){
args__19578__auto__.push((arguments[i__19572__auto___29444]));

var G__29445 = (i__19572__auto___29444 + (1));
i__19572__auto___29444 = G__29445;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29330__auto___29442))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29330__auto___29442){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29330__auto___29442),args);
});})(g__29330__auto___29442))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__29330__auto___29442){
return (function (seq29383){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29383));
});})(g__29330__auto___29442))
;


var g__29330__auto___29446 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__29330__auto___29446){
return (function cljs$spec$impl$gen$return(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29447 = arguments.length;
var i__19572__auto___29448 = (0);
while(true){
if((i__19572__auto___29448 < len__19571__auto___29447)){
args__19578__auto__.push((arguments[i__19572__auto___29448]));

var G__29449 = (i__19572__auto___29448 + (1));
i__19572__auto___29448 = G__29449;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29330__auto___29446))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29330__auto___29446){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29330__auto___29446),args);
});})(g__29330__auto___29446))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__29330__auto___29446){
return (function (seq29384){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29384));
});})(g__29330__auto___29446))
;


var g__29330__auto___29450 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__29330__auto___29450){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29451 = arguments.length;
var i__19572__auto___29452 = (0);
while(true){
if((i__19572__auto___29452 < len__19571__auto___29451)){
args__19578__auto__.push((arguments[i__19572__auto___29452]));

var G__29453 = (i__19572__auto___29452 + (1));
i__19572__auto___29452 = G__29453;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29330__auto___29450))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29330__auto___29450){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29330__auto___29450),args);
});})(g__29330__auto___29450))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__29330__auto___29450){
return (function (seq29385){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29385));
});})(g__29330__auto___29450))
;

var g__29343__auto___29475 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__29343__auto___29475){
return (function cljs$spec$impl$gen$any(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29476 = arguments.length;
var i__19572__auto___29477 = (0);
while(true){
if((i__19572__auto___29477 < len__19571__auto___29476)){
args__19578__auto__.push((arguments[i__19572__auto___29477]));

var G__29478 = (i__19572__auto___29477 + (1));
i__19572__auto___29477 = G__29478;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29343__auto___29475))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29343__auto___29475){
return (function (args){
return cljs.core.deref.call(null,g__29343__auto___29475);
});})(g__29343__auto___29475))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__29343__auto___29475){
return (function (seq29454){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29454));
});})(g__29343__auto___29475))
;


var g__29343__auto___29479 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__29343__auto___29479){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29480 = arguments.length;
var i__19572__auto___29481 = (0);
while(true){
if((i__19572__auto___29481 < len__19571__auto___29480)){
args__19578__auto__.push((arguments[i__19572__auto___29481]));

var G__29482 = (i__19572__auto___29481 + (1));
i__19572__auto___29481 = G__29482;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29343__auto___29479))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29343__auto___29479){
return (function (args){
return cljs.core.deref.call(null,g__29343__auto___29479);
});})(g__29343__auto___29479))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__29343__auto___29479){
return (function (seq29455){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29455));
});})(g__29343__auto___29479))
;


var g__29343__auto___29483 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__29343__auto___29483){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29484 = arguments.length;
var i__19572__auto___29485 = (0);
while(true){
if((i__19572__auto___29485 < len__19571__auto___29484)){
args__19578__auto__.push((arguments[i__19572__auto___29485]));

var G__29486 = (i__19572__auto___29485 + (1));
i__19572__auto___29485 = G__29486;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29343__auto___29483))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29343__auto___29483){
return (function (args){
return cljs.core.deref.call(null,g__29343__auto___29483);
});})(g__29343__auto___29483))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__29343__auto___29483){
return (function (seq29456){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29456));
});})(g__29343__auto___29483))
;


var g__29343__auto___29487 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__29343__auto___29487){
return (function cljs$spec$impl$gen$char(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29488 = arguments.length;
var i__19572__auto___29489 = (0);
while(true){
if((i__19572__auto___29489 < len__19571__auto___29488)){
args__19578__auto__.push((arguments[i__19572__auto___29489]));

var G__29490 = (i__19572__auto___29489 + (1));
i__19572__auto___29489 = G__29490;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29343__auto___29487))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29343__auto___29487){
return (function (args){
return cljs.core.deref.call(null,g__29343__auto___29487);
});})(g__29343__auto___29487))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__29343__auto___29487){
return (function (seq29457){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29457));
});})(g__29343__auto___29487))
;


var g__29343__auto___29491 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__29343__auto___29491){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29492 = arguments.length;
var i__19572__auto___29493 = (0);
while(true){
if((i__19572__auto___29493 < len__19571__auto___29492)){
args__19578__auto__.push((arguments[i__19572__auto___29493]));

var G__29494 = (i__19572__auto___29493 + (1));
i__19572__auto___29493 = G__29494;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29343__auto___29491))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29343__auto___29491){
return (function (args){
return cljs.core.deref.call(null,g__29343__auto___29491);
});})(g__29343__auto___29491))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__29343__auto___29491){
return (function (seq29458){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29458));
});})(g__29343__auto___29491))
;


var g__29343__auto___29495 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__29343__auto___29495){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29496 = arguments.length;
var i__19572__auto___29497 = (0);
while(true){
if((i__19572__auto___29497 < len__19571__auto___29496)){
args__19578__auto__.push((arguments[i__19572__auto___29497]));

var G__29498 = (i__19572__auto___29497 + (1));
i__19572__auto___29497 = G__29498;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29343__auto___29495))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29343__auto___29495){
return (function (args){
return cljs.core.deref.call(null,g__29343__auto___29495);
});})(g__29343__auto___29495))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__29343__auto___29495){
return (function (seq29459){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29459));
});})(g__29343__auto___29495))
;


var g__29343__auto___29499 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__29343__auto___29499){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29500 = arguments.length;
var i__19572__auto___29501 = (0);
while(true){
if((i__19572__auto___29501 < len__19571__auto___29500)){
args__19578__auto__.push((arguments[i__19572__auto___29501]));

var G__29502 = (i__19572__auto___29501 + (1));
i__19572__auto___29501 = G__29502;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29343__auto___29499))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29343__auto___29499){
return (function (args){
return cljs.core.deref.call(null,g__29343__auto___29499);
});})(g__29343__auto___29499))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__29343__auto___29499){
return (function (seq29460){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29460));
});})(g__29343__auto___29499))
;


var g__29343__auto___29503 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__29343__auto___29503){
return (function cljs$spec$impl$gen$double(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29504 = arguments.length;
var i__19572__auto___29505 = (0);
while(true){
if((i__19572__auto___29505 < len__19571__auto___29504)){
args__19578__auto__.push((arguments[i__19572__auto___29505]));

var G__29506 = (i__19572__auto___29505 + (1));
i__19572__auto___29505 = G__29506;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29343__auto___29503))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29343__auto___29503){
return (function (args){
return cljs.core.deref.call(null,g__29343__auto___29503);
});})(g__29343__auto___29503))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__29343__auto___29503){
return (function (seq29461){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29461));
});})(g__29343__auto___29503))
;


var g__29343__auto___29507 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__29343__auto___29507){
return (function cljs$spec$impl$gen$int(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29508 = arguments.length;
var i__19572__auto___29509 = (0);
while(true){
if((i__19572__auto___29509 < len__19571__auto___29508)){
args__19578__auto__.push((arguments[i__19572__auto___29509]));

var G__29510 = (i__19572__auto___29509 + (1));
i__19572__auto___29509 = G__29510;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29343__auto___29507))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29343__auto___29507){
return (function (args){
return cljs.core.deref.call(null,g__29343__auto___29507);
});})(g__29343__auto___29507))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__29343__auto___29507){
return (function (seq29462){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29462));
});})(g__29343__auto___29507))
;


var g__29343__auto___29511 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__29343__auto___29511){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29512 = arguments.length;
var i__19572__auto___29513 = (0);
while(true){
if((i__19572__auto___29513 < len__19571__auto___29512)){
args__19578__auto__.push((arguments[i__19572__auto___29513]));

var G__29514 = (i__19572__auto___29513 + (1));
i__19572__auto___29513 = G__29514;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29343__auto___29511))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29343__auto___29511){
return (function (args){
return cljs.core.deref.call(null,g__29343__auto___29511);
});})(g__29343__auto___29511))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__29343__auto___29511){
return (function (seq29463){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29463));
});})(g__29343__auto___29511))
;


var g__29343__auto___29515 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__29343__auto___29515){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29516 = arguments.length;
var i__19572__auto___29517 = (0);
while(true){
if((i__19572__auto___29517 < len__19571__auto___29516)){
args__19578__auto__.push((arguments[i__19572__auto___29517]));

var G__29518 = (i__19572__auto___29517 + (1));
i__19572__auto___29517 = G__29518;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29343__auto___29515))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29343__auto___29515){
return (function (args){
return cljs.core.deref.call(null,g__29343__auto___29515);
});})(g__29343__auto___29515))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__29343__auto___29515){
return (function (seq29464){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29464));
});})(g__29343__auto___29515))
;


var g__29343__auto___29519 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__29343__auto___29519){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29520 = arguments.length;
var i__19572__auto___29521 = (0);
while(true){
if((i__19572__auto___29521 < len__19571__auto___29520)){
args__19578__auto__.push((arguments[i__19572__auto___29521]));

var G__29522 = (i__19572__auto___29521 + (1));
i__19572__auto___29521 = G__29522;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29343__auto___29519))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29343__auto___29519){
return (function (args){
return cljs.core.deref.call(null,g__29343__auto___29519);
});})(g__29343__auto___29519))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__29343__auto___29519){
return (function (seq29465){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29465));
});})(g__29343__auto___29519))
;


var g__29343__auto___29523 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__29343__auto___29523){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29524 = arguments.length;
var i__19572__auto___29525 = (0);
while(true){
if((i__19572__auto___29525 < len__19571__auto___29524)){
args__19578__auto__.push((arguments[i__19572__auto___29525]));

var G__29526 = (i__19572__auto___29525 + (1));
i__19572__auto___29525 = G__29526;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29343__auto___29523))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29343__auto___29523){
return (function (args){
return cljs.core.deref.call(null,g__29343__auto___29523);
});})(g__29343__auto___29523))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__29343__auto___29523){
return (function (seq29466){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29466));
});})(g__29343__auto___29523))
;


var g__29343__auto___29527 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__29343__auto___29527){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29528 = arguments.length;
var i__19572__auto___29529 = (0);
while(true){
if((i__19572__auto___29529 < len__19571__auto___29528)){
args__19578__auto__.push((arguments[i__19572__auto___29529]));

var G__29530 = (i__19572__auto___29529 + (1));
i__19572__auto___29529 = G__29530;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29343__auto___29527))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29343__auto___29527){
return (function (args){
return cljs.core.deref.call(null,g__29343__auto___29527);
});})(g__29343__auto___29527))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__29343__auto___29527){
return (function (seq29467){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29467));
});})(g__29343__auto___29527))
;


var g__29343__auto___29531 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__29343__auto___29531){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29532 = arguments.length;
var i__19572__auto___29533 = (0);
while(true){
if((i__19572__auto___29533 < len__19571__auto___29532)){
args__19578__auto__.push((arguments[i__19572__auto___29533]));

var G__29534 = (i__19572__auto___29533 + (1));
i__19572__auto___29533 = G__29534;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29343__auto___29531))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29343__auto___29531){
return (function (args){
return cljs.core.deref.call(null,g__29343__auto___29531);
});})(g__29343__auto___29531))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__29343__auto___29531){
return (function (seq29468){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29468));
});})(g__29343__auto___29531))
;


var g__29343__auto___29535 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__29343__auto___29535){
return (function cljs$spec$impl$gen$string(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29536 = arguments.length;
var i__19572__auto___29537 = (0);
while(true){
if((i__19572__auto___29537 < len__19571__auto___29536)){
args__19578__auto__.push((arguments[i__19572__auto___29537]));

var G__29538 = (i__19572__auto___29537 + (1));
i__19572__auto___29537 = G__29538;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29343__auto___29535))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29343__auto___29535){
return (function (args){
return cljs.core.deref.call(null,g__29343__auto___29535);
});})(g__29343__auto___29535))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__29343__auto___29535){
return (function (seq29469){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29469));
});})(g__29343__auto___29535))
;


var g__29343__auto___29539 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__29343__auto___29539){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29540 = arguments.length;
var i__19572__auto___29541 = (0);
while(true){
if((i__19572__auto___29541 < len__19571__auto___29540)){
args__19578__auto__.push((arguments[i__19572__auto___29541]));

var G__29542 = (i__19572__auto___29541 + (1));
i__19572__auto___29541 = G__29542;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29343__auto___29539))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29343__auto___29539){
return (function (args){
return cljs.core.deref.call(null,g__29343__auto___29539);
});})(g__29343__auto___29539))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__29343__auto___29539){
return (function (seq29470){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29470));
});})(g__29343__auto___29539))
;


var g__29343__auto___29543 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__29343__auto___29543){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29544 = arguments.length;
var i__19572__auto___29545 = (0);
while(true){
if((i__19572__auto___29545 < len__19571__auto___29544)){
args__19578__auto__.push((arguments[i__19572__auto___29545]));

var G__29546 = (i__19572__auto___29545 + (1));
i__19572__auto___29545 = G__29546;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29343__auto___29543))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29343__auto___29543){
return (function (args){
return cljs.core.deref.call(null,g__29343__auto___29543);
});})(g__29343__auto___29543))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__29343__auto___29543){
return (function (seq29471){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29471));
});})(g__29343__auto___29543))
;


var g__29343__auto___29547 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__29343__auto___29547){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29548 = arguments.length;
var i__19572__auto___29549 = (0);
while(true){
if((i__19572__auto___29549 < len__19571__auto___29548)){
args__19578__auto__.push((arguments[i__19572__auto___29549]));

var G__29550 = (i__19572__auto___29549 + (1));
i__19572__auto___29549 = G__29550;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29343__auto___29547))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29343__auto___29547){
return (function (args){
return cljs.core.deref.call(null,g__29343__auto___29547);
});})(g__29343__auto___29547))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__29343__auto___29547){
return (function (seq29472){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29472));
});})(g__29343__auto___29547))
;


var g__29343__auto___29551 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__29343__auto___29551){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29552 = arguments.length;
var i__19572__auto___29553 = (0);
while(true){
if((i__19572__auto___29553 < len__19571__auto___29552)){
args__19578__auto__.push((arguments[i__19572__auto___29553]));

var G__29554 = (i__19572__auto___29553 + (1));
i__19572__auto___29553 = G__29554;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29343__auto___29551))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29343__auto___29551){
return (function (args){
return cljs.core.deref.call(null,g__29343__auto___29551);
});})(g__29343__auto___29551))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__29343__auto___29551){
return (function (seq29473){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29473));
});})(g__29343__auto___29551))
;


var g__29343__auto___29555 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__29343__auto___29555){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29556 = arguments.length;
var i__19572__auto___29557 = (0);
while(true){
if((i__19572__auto___29557 < len__19571__auto___29556)){
args__19578__auto__.push((arguments[i__19572__auto___29557]));

var G__29558 = (i__19572__auto___29557 + (1));
i__19572__auto___29557 = G__29558;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});})(g__29343__auto___29555))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29343__auto___29555){
return (function (args){
return cljs.core.deref.call(null,g__29343__auto___29555);
});})(g__29343__auto___29555))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__29343__auto___29555){
return (function (seq29474){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29474));
});})(g__29343__auto___29555))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__19578__auto__ = [];
var len__19571__auto___29561 = arguments.length;
var i__19572__auto___29562 = (0);
while(true){
if((i__19572__auto___29562 < len__19571__auto___29561)){
args__19578__auto__.push((arguments[i__19572__auto___29562]));

var G__29563 = (i__19572__auto___29562 + (1));
i__19572__auto___29562 = G__29563;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__29559_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__29559_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq29560){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29560));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__29564_SHARP_){
return (new Date(p1__29564_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1466621025037