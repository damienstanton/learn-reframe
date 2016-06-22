// Compiled by ClojureScript 1.9.88 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args22514 = [];
var len__19571__auto___22520 = arguments.length;
var i__19572__auto___22521 = (0);
while(true){
if((i__19572__auto___22521 < len__19571__auto___22520)){
args22514.push((arguments[i__19572__auto___22521]));

var G__22522 = (i__19572__auto___22521 + (1));
i__19572__auto___22521 = G__22522;
continue;
} else {
}
break;
}

var G__22516 = args22514.length;
switch (G__22516) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22514.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22517 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22517 = (function (f,blockable,meta22518){
this.f = f;
this.blockable = blockable;
this.meta22518 = meta22518;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22519,meta22518__$1){
var self__ = this;
var _22519__$1 = this;
return (new cljs.core.async.t_cljs$core$async22517(self__.f,self__.blockable,meta22518__$1));
});

cljs.core.async.t_cljs$core$async22517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22519){
var self__ = this;
var _22519__$1 = this;
return self__.meta22518;
});

cljs.core.async.t_cljs$core$async22517.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22517.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22517.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22517.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22517.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22518","meta22518",-783613335,null)], null);
});

cljs.core.async.t_cljs$core$async22517.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22517.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22517";

cljs.core.async.t_cljs$core$async22517.cljs$lang$ctorPrWriter = (function (this__19102__auto__,writer__19103__auto__,opt__19104__auto__){
return cljs.core._write.call(null,writer__19103__auto__,"cljs.core.async/t_cljs$core$async22517");
});

cljs.core.async.__GT_t_cljs$core$async22517 = (function cljs$core$async$__GT_t_cljs$core$async22517(f__$1,blockable__$1,meta22518){
return (new cljs.core.async.t_cljs$core$async22517(f__$1,blockable__$1,meta22518));
});

}

return (new cljs.core.async.t_cljs$core$async22517(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args22526 = [];
var len__19571__auto___22529 = arguments.length;
var i__19572__auto___22530 = (0);
while(true){
if((i__19572__auto___22530 < len__19571__auto___22529)){
args22526.push((arguments[i__19572__auto___22530]));

var G__22531 = (i__19572__auto___22530 + (1));
i__19572__auto___22530 = G__22531;
continue;
} else {
}
break;
}

var G__22528 = args22526.length;
switch (G__22528) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22526.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args22533 = [];
var len__19571__auto___22536 = arguments.length;
var i__19572__auto___22537 = (0);
while(true){
if((i__19572__auto___22537 < len__19571__auto___22536)){
args22533.push((arguments[i__19572__auto___22537]));

var G__22538 = (i__19572__auto___22537 + (1));
i__19572__auto___22537 = G__22538;
continue;
} else {
}
break;
}

var G__22535 = args22533.length;
switch (G__22535) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22533.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args22540 = [];
var len__19571__auto___22543 = arguments.length;
var i__19572__auto___22544 = (0);
while(true){
if((i__19572__auto___22544 < len__19571__auto___22543)){
args22540.push((arguments[i__19572__auto___22544]));

var G__22545 = (i__19572__auto___22544 + (1));
i__19572__auto___22544 = G__22545;
continue;
} else {
}
break;
}

var G__22542 = args22540.length;
switch (G__22542) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22540.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22547 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22547);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22547,ret){
return (function (){
return fn1.call(null,val_22547);
});})(val_22547,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args22548 = [];
var len__19571__auto___22551 = arguments.length;
var i__19572__auto___22552 = (0);
while(true){
if((i__19572__auto___22552 < len__19571__auto___22551)){
args22548.push((arguments[i__19572__auto___22552]));

var G__22553 = (i__19572__auto___22552 + (1));
i__19572__auto___22552 = G__22553;
continue;
} else {
}
break;
}

var G__22550 = args22548.length;
switch (G__22550) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22548.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19411__auto___22555 = n;
var x_22556 = (0);
while(true){
if((x_22556 < n__19411__auto___22555)){
(a[x_22556] = (0));

var G__22557 = (x_22556 + (1));
x_22556 = G__22557;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__22558 = (i + (1));
i = G__22558;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22562 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22562 = (function (alt_flag,flag,meta22563){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22563 = meta22563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22564,meta22563__$1){
var self__ = this;
var _22564__$1 = this;
return (new cljs.core.async.t_cljs$core$async22562(self__.alt_flag,self__.flag,meta22563__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22562.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22564){
var self__ = this;
var _22564__$1 = this;
return self__.meta22563;
});})(flag))
;

cljs.core.async.t_cljs$core$async22562.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22562.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22562.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22562.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22562.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22563","meta22563",-1989758772,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22562.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22562.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22562";

cljs.core.async.t_cljs$core$async22562.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19102__auto__,writer__19103__auto__,opt__19104__auto__){
return cljs.core._write.call(null,writer__19103__auto__,"cljs.core.async/t_cljs$core$async22562");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22562 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22562(alt_flag__$1,flag__$1,meta22563){
return (new cljs.core.async.t_cljs$core$async22562(alt_flag__$1,flag__$1,meta22563));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22562(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22568 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22568 = (function (alt_handler,flag,cb,meta22569){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22569 = meta22569;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22570,meta22569__$1){
var self__ = this;
var _22570__$1 = this;
return (new cljs.core.async.t_cljs$core$async22568(self__.alt_handler,self__.flag,self__.cb,meta22569__$1));
});

cljs.core.async.t_cljs$core$async22568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22570){
var self__ = this;
var _22570__$1 = this;
return self__.meta22569;
});

cljs.core.async.t_cljs$core$async22568.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22568.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22568.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22568.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22568.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22569","meta22569",-1411941382,null)], null);
});

cljs.core.async.t_cljs$core$async22568.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22568.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22568";

cljs.core.async.t_cljs$core$async22568.cljs$lang$ctorPrWriter = (function (this__19102__auto__,writer__19103__auto__,opt__19104__auto__){
return cljs.core._write.call(null,writer__19103__auto__,"cljs.core.async/t_cljs$core$async22568");
});

cljs.core.async.__GT_t_cljs$core$async22568 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22568(alt_handler__$1,flag__$1,cb__$1,meta22569){
return (new cljs.core.async.t_cljs$core$async22568(alt_handler__$1,flag__$1,cb__$1,meta22569));
});

}

return (new cljs.core.async.t_cljs$core$async22568(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22571_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22571_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22572_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22572_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18496__auto__ = wport;
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22573 = (i + (1));
i = G__22573;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18496__auto__ = ret;
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18484__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18484__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18484__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19578__auto__ = [];
var len__19571__auto___22579 = arguments.length;
var i__19572__auto___22580 = (0);
while(true){
if((i__19572__auto___22580 < len__19571__auto___22579)){
args__19578__auto__.push((arguments[i__19572__auto___22580]));

var G__22581 = (i__19572__auto___22580 + (1));
i__19572__auto___22580 = G__22581;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((1) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19579__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22576){
var map__22577 = p__22576;
var map__22577__$1 = ((((!((map__22577 == null)))?((((map__22577.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22577.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22577):map__22577);
var opts = map__22577__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22574){
var G__22575 = cljs.core.first.call(null,seq22574);
var seq22574__$1 = cljs.core.next.call(null,seq22574);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22575,seq22574__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args22582 = [];
var len__19571__auto___22632 = arguments.length;
var i__19572__auto___22633 = (0);
while(true){
if((i__19572__auto___22633 < len__19571__auto___22632)){
args22582.push((arguments[i__19572__auto___22633]));

var G__22634 = (i__19572__auto___22633 + (1));
i__19572__auto___22633 = G__22634;
continue;
} else {
}
break;
}

var G__22584 = args22582.length;
switch (G__22584) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22582.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22469__auto___22636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto___22636){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto___22636){
return (function (state_22608){
var state_val_22609 = (state_22608[(1)]);
if((state_val_22609 === (7))){
var inst_22604 = (state_22608[(2)]);
var state_22608__$1 = state_22608;
var statearr_22610_22637 = state_22608__$1;
(statearr_22610_22637[(2)] = inst_22604);

(statearr_22610_22637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22609 === (1))){
var state_22608__$1 = state_22608;
var statearr_22611_22638 = state_22608__$1;
(statearr_22611_22638[(2)] = null);

(statearr_22611_22638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22609 === (4))){
var inst_22587 = (state_22608[(7)]);
var inst_22587__$1 = (state_22608[(2)]);
var inst_22588 = (inst_22587__$1 == null);
var state_22608__$1 = (function (){var statearr_22612 = state_22608;
(statearr_22612[(7)] = inst_22587__$1);

return statearr_22612;
})();
if(cljs.core.truth_(inst_22588)){
var statearr_22613_22639 = state_22608__$1;
(statearr_22613_22639[(1)] = (5));

} else {
var statearr_22614_22640 = state_22608__$1;
(statearr_22614_22640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22609 === (13))){
var state_22608__$1 = state_22608;
var statearr_22615_22641 = state_22608__$1;
(statearr_22615_22641[(2)] = null);

(statearr_22615_22641[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22609 === (6))){
var inst_22587 = (state_22608[(7)]);
var state_22608__$1 = state_22608;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22608__$1,(11),to,inst_22587);
} else {
if((state_val_22609 === (3))){
var inst_22606 = (state_22608[(2)]);
var state_22608__$1 = state_22608;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22608__$1,inst_22606);
} else {
if((state_val_22609 === (12))){
var state_22608__$1 = state_22608;
var statearr_22616_22642 = state_22608__$1;
(statearr_22616_22642[(2)] = null);

(statearr_22616_22642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22609 === (2))){
var state_22608__$1 = state_22608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22608__$1,(4),from);
} else {
if((state_val_22609 === (11))){
var inst_22597 = (state_22608[(2)]);
var state_22608__$1 = state_22608;
if(cljs.core.truth_(inst_22597)){
var statearr_22617_22643 = state_22608__$1;
(statearr_22617_22643[(1)] = (12));

} else {
var statearr_22618_22644 = state_22608__$1;
(statearr_22618_22644[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22609 === (9))){
var state_22608__$1 = state_22608;
var statearr_22619_22645 = state_22608__$1;
(statearr_22619_22645[(2)] = null);

(statearr_22619_22645[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22609 === (5))){
var state_22608__$1 = state_22608;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22620_22646 = state_22608__$1;
(statearr_22620_22646[(1)] = (8));

} else {
var statearr_22621_22647 = state_22608__$1;
(statearr_22621_22647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22609 === (14))){
var inst_22602 = (state_22608[(2)]);
var state_22608__$1 = state_22608;
var statearr_22622_22648 = state_22608__$1;
(statearr_22622_22648[(2)] = inst_22602);

(statearr_22622_22648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22609 === (10))){
var inst_22594 = (state_22608[(2)]);
var state_22608__$1 = state_22608;
var statearr_22623_22649 = state_22608__$1;
(statearr_22623_22649[(2)] = inst_22594);

(statearr_22623_22649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22609 === (8))){
var inst_22591 = cljs.core.async.close_BANG_.call(null,to);
var state_22608__$1 = state_22608;
var statearr_22624_22650 = state_22608__$1;
(statearr_22624_22650[(2)] = inst_22591);

(statearr_22624_22650[(1)] = (10));


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
});})(c__22469__auto___22636))
;
return ((function (switch__22357__auto__,c__22469__auto___22636){
return (function() {
var cljs$core$async$state_machine__22358__auto__ = null;
var cljs$core$async$state_machine__22358__auto____0 = (function (){
var statearr_22628 = [null,null,null,null,null,null,null,null];
(statearr_22628[(0)] = cljs$core$async$state_machine__22358__auto__);

(statearr_22628[(1)] = (1));

return statearr_22628;
});
var cljs$core$async$state_machine__22358__auto____1 = (function (state_22608){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_22608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e22629){if((e22629 instanceof Object)){
var ex__22361__auto__ = e22629;
var statearr_22630_22651 = state_22608;
(statearr_22630_22651[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22652 = state_22608;
state_22608 = G__22652;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$state_machine__22358__auto__ = function(state_22608){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22358__auto____1.call(this,state_22608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22358__auto____0;
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22358__auto____1;
return cljs$core$async$state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto___22636))
})();
var state__22471__auto__ = (function (){var statearr_22631 = f__22470__auto__.call(null);
(statearr_22631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___22636);

return statearr_22631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto___22636))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__22840){
var vec__22841 = p__22840;
var v = cljs.core.nth.call(null,vec__22841,(0),null);
var p = cljs.core.nth.call(null,vec__22841,(1),null);
var job = vec__22841;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22469__auto___23027 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto___23027,res,vec__22841,v,p,job,jobs,results){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto___23027,res,vec__22841,v,p,job,jobs,results){
return (function (state_22848){
var state_val_22849 = (state_22848[(1)]);
if((state_val_22849 === (1))){
var state_22848__$1 = state_22848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22848__$1,(2),res,v);
} else {
if((state_val_22849 === (2))){
var inst_22845 = (state_22848[(2)]);
var inst_22846 = cljs.core.async.close_BANG_.call(null,res);
var state_22848__$1 = (function (){var statearr_22850 = state_22848;
(statearr_22850[(7)] = inst_22845);

return statearr_22850;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22848__$1,inst_22846);
} else {
return null;
}
}
});})(c__22469__auto___23027,res,vec__22841,v,p,job,jobs,results))
;
return ((function (switch__22357__auto__,c__22469__auto___23027,res,vec__22841,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____0 = (function (){
var statearr_22854 = [null,null,null,null,null,null,null,null];
(statearr_22854[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__);

(statearr_22854[(1)] = (1));

return statearr_22854;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____1 = (function (state_22848){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_22848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e22855){if((e22855 instanceof Object)){
var ex__22361__auto__ = e22855;
var statearr_22856_23028 = state_22848;
(statearr_22856_23028[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23029 = state_22848;
state_22848 = G__23029;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__ = function(state_22848){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____1.call(this,state_22848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto___23027,res,vec__22841,v,p,job,jobs,results))
})();
var state__22471__auto__ = (function (){var statearr_22857 = f__22470__auto__.call(null);
(statearr_22857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___23027);

return statearr_22857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto___23027,res,vec__22841,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22858){
var vec__22859 = p__22858;
var v = cljs.core.nth.call(null,vec__22859,(0),null);
var p = cljs.core.nth.call(null,vec__22859,(1),null);
var job = vec__22859;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19411__auto___23030 = n;
var __23031 = (0);
while(true){
if((__23031 < n__19411__auto___23030)){
var G__22862_23032 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22862_23032) {
case "compute":
var c__22469__auto___23034 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23031,c__22469__auto___23034,G__22862_23032,n__19411__auto___23030,jobs,results,process,async){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (__23031,c__22469__auto___23034,G__22862_23032,n__19411__auto___23030,jobs,results,process,async){
return (function (state_22875){
var state_val_22876 = (state_22875[(1)]);
if((state_val_22876 === (1))){
var state_22875__$1 = state_22875;
var statearr_22877_23035 = state_22875__$1;
(statearr_22877_23035[(2)] = null);

(statearr_22877_23035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (2))){
var state_22875__$1 = state_22875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22875__$1,(4),jobs);
} else {
if((state_val_22876 === (3))){
var inst_22873 = (state_22875[(2)]);
var state_22875__$1 = state_22875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22875__$1,inst_22873);
} else {
if((state_val_22876 === (4))){
var inst_22865 = (state_22875[(2)]);
var inst_22866 = process.call(null,inst_22865);
var state_22875__$1 = state_22875;
if(cljs.core.truth_(inst_22866)){
var statearr_22878_23036 = state_22875__$1;
(statearr_22878_23036[(1)] = (5));

} else {
var statearr_22879_23037 = state_22875__$1;
(statearr_22879_23037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (5))){
var state_22875__$1 = state_22875;
var statearr_22880_23038 = state_22875__$1;
(statearr_22880_23038[(2)] = null);

(statearr_22880_23038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (6))){
var state_22875__$1 = state_22875;
var statearr_22881_23039 = state_22875__$1;
(statearr_22881_23039[(2)] = null);

(statearr_22881_23039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (7))){
var inst_22871 = (state_22875[(2)]);
var state_22875__$1 = state_22875;
var statearr_22882_23040 = state_22875__$1;
(statearr_22882_23040[(2)] = inst_22871);

(statearr_22882_23040[(1)] = (3));


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
});})(__23031,c__22469__auto___23034,G__22862_23032,n__19411__auto___23030,jobs,results,process,async))
;
return ((function (__23031,switch__22357__auto__,c__22469__auto___23034,G__22862_23032,n__19411__auto___23030,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____0 = (function (){
var statearr_22886 = [null,null,null,null,null,null,null];
(statearr_22886[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__);

(statearr_22886[(1)] = (1));

return statearr_22886;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____1 = (function (state_22875){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_22875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e22887){if((e22887 instanceof Object)){
var ex__22361__auto__ = e22887;
var statearr_22888_23041 = state_22875;
(statearr_22888_23041[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23042 = state_22875;
state_22875 = G__23042;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__ = function(state_22875){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____1.call(this,state_22875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__;
})()
;})(__23031,switch__22357__auto__,c__22469__auto___23034,G__22862_23032,n__19411__auto___23030,jobs,results,process,async))
})();
var state__22471__auto__ = (function (){var statearr_22889 = f__22470__auto__.call(null);
(statearr_22889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___23034);

return statearr_22889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(__23031,c__22469__auto___23034,G__22862_23032,n__19411__auto___23030,jobs,results,process,async))
);


break;
case "async":
var c__22469__auto___23043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23031,c__22469__auto___23043,G__22862_23032,n__19411__auto___23030,jobs,results,process,async){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (__23031,c__22469__auto___23043,G__22862_23032,n__19411__auto___23030,jobs,results,process,async){
return (function (state_22902){
var state_val_22903 = (state_22902[(1)]);
if((state_val_22903 === (1))){
var state_22902__$1 = state_22902;
var statearr_22904_23044 = state_22902__$1;
(statearr_22904_23044[(2)] = null);

(statearr_22904_23044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22903 === (2))){
var state_22902__$1 = state_22902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22902__$1,(4),jobs);
} else {
if((state_val_22903 === (3))){
var inst_22900 = (state_22902[(2)]);
var state_22902__$1 = state_22902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22902__$1,inst_22900);
} else {
if((state_val_22903 === (4))){
var inst_22892 = (state_22902[(2)]);
var inst_22893 = async.call(null,inst_22892);
var state_22902__$1 = state_22902;
if(cljs.core.truth_(inst_22893)){
var statearr_22905_23045 = state_22902__$1;
(statearr_22905_23045[(1)] = (5));

} else {
var statearr_22906_23046 = state_22902__$1;
(statearr_22906_23046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22903 === (5))){
var state_22902__$1 = state_22902;
var statearr_22907_23047 = state_22902__$1;
(statearr_22907_23047[(2)] = null);

(statearr_22907_23047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22903 === (6))){
var state_22902__$1 = state_22902;
var statearr_22908_23048 = state_22902__$1;
(statearr_22908_23048[(2)] = null);

(statearr_22908_23048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22903 === (7))){
var inst_22898 = (state_22902[(2)]);
var state_22902__$1 = state_22902;
var statearr_22909_23049 = state_22902__$1;
(statearr_22909_23049[(2)] = inst_22898);

(statearr_22909_23049[(1)] = (3));


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
});})(__23031,c__22469__auto___23043,G__22862_23032,n__19411__auto___23030,jobs,results,process,async))
;
return ((function (__23031,switch__22357__auto__,c__22469__auto___23043,G__22862_23032,n__19411__auto___23030,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____0 = (function (){
var statearr_22913 = [null,null,null,null,null,null,null];
(statearr_22913[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__);

(statearr_22913[(1)] = (1));

return statearr_22913;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____1 = (function (state_22902){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_22902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e22914){if((e22914 instanceof Object)){
var ex__22361__auto__ = e22914;
var statearr_22915_23050 = state_22902;
(statearr_22915_23050[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23051 = state_22902;
state_22902 = G__23051;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__ = function(state_22902){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____1.call(this,state_22902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__;
})()
;})(__23031,switch__22357__auto__,c__22469__auto___23043,G__22862_23032,n__19411__auto___23030,jobs,results,process,async))
})();
var state__22471__auto__ = (function (){var statearr_22916 = f__22470__auto__.call(null);
(statearr_22916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___23043);

return statearr_22916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(__23031,c__22469__auto___23043,G__22862_23032,n__19411__auto___23030,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23052 = (__23031 + (1));
__23031 = G__23052;
continue;
} else {
}
break;
}

var c__22469__auto___23053 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto___23053,jobs,results,process,async){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto___23053,jobs,results,process,async){
return (function (state_22938){
var state_val_22939 = (state_22938[(1)]);
if((state_val_22939 === (1))){
var state_22938__$1 = state_22938;
var statearr_22940_23054 = state_22938__$1;
(statearr_22940_23054[(2)] = null);

(statearr_22940_23054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22939 === (2))){
var state_22938__$1 = state_22938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22938__$1,(4),from);
} else {
if((state_val_22939 === (3))){
var inst_22936 = (state_22938[(2)]);
var state_22938__$1 = state_22938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22938__$1,inst_22936);
} else {
if((state_val_22939 === (4))){
var inst_22919 = (state_22938[(7)]);
var inst_22919__$1 = (state_22938[(2)]);
var inst_22920 = (inst_22919__$1 == null);
var state_22938__$1 = (function (){var statearr_22941 = state_22938;
(statearr_22941[(7)] = inst_22919__$1);

return statearr_22941;
})();
if(cljs.core.truth_(inst_22920)){
var statearr_22942_23055 = state_22938__$1;
(statearr_22942_23055[(1)] = (5));

} else {
var statearr_22943_23056 = state_22938__$1;
(statearr_22943_23056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22939 === (5))){
var inst_22922 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22938__$1 = state_22938;
var statearr_22944_23057 = state_22938__$1;
(statearr_22944_23057[(2)] = inst_22922);

(statearr_22944_23057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22939 === (6))){
var inst_22919 = (state_22938[(7)]);
var inst_22924 = (state_22938[(8)]);
var inst_22924__$1 = cljs.core.async.chan.call(null,(1));
var inst_22925 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22926 = [inst_22919,inst_22924__$1];
var inst_22927 = (new cljs.core.PersistentVector(null,2,(5),inst_22925,inst_22926,null));
var state_22938__$1 = (function (){var statearr_22945 = state_22938;
(statearr_22945[(8)] = inst_22924__$1);

return statearr_22945;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22938__$1,(8),jobs,inst_22927);
} else {
if((state_val_22939 === (7))){
var inst_22934 = (state_22938[(2)]);
var state_22938__$1 = state_22938;
var statearr_22946_23058 = state_22938__$1;
(statearr_22946_23058[(2)] = inst_22934);

(statearr_22946_23058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22939 === (8))){
var inst_22924 = (state_22938[(8)]);
var inst_22929 = (state_22938[(2)]);
var state_22938__$1 = (function (){var statearr_22947 = state_22938;
(statearr_22947[(9)] = inst_22929);

return statearr_22947;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22938__$1,(9),results,inst_22924);
} else {
if((state_val_22939 === (9))){
var inst_22931 = (state_22938[(2)]);
var state_22938__$1 = (function (){var statearr_22948 = state_22938;
(statearr_22948[(10)] = inst_22931);

return statearr_22948;
})();
var statearr_22949_23059 = state_22938__$1;
(statearr_22949_23059[(2)] = null);

(statearr_22949_23059[(1)] = (2));


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
});})(c__22469__auto___23053,jobs,results,process,async))
;
return ((function (switch__22357__auto__,c__22469__auto___23053,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____0 = (function (){
var statearr_22953 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22953[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__);

(statearr_22953[(1)] = (1));

return statearr_22953;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____1 = (function (state_22938){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_22938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e22954){if((e22954 instanceof Object)){
var ex__22361__auto__ = e22954;
var statearr_22955_23060 = state_22938;
(statearr_22955_23060[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23061 = state_22938;
state_22938 = G__23061;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__ = function(state_22938){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____1.call(this,state_22938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto___23053,jobs,results,process,async))
})();
var state__22471__auto__ = (function (){var statearr_22956 = f__22470__auto__.call(null);
(statearr_22956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___23053);

return statearr_22956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto___23053,jobs,results,process,async))
);


var c__22469__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto__,jobs,results,process,async){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto__,jobs,results,process,async){
return (function (state_22994){
var state_val_22995 = (state_22994[(1)]);
if((state_val_22995 === (7))){
var inst_22990 = (state_22994[(2)]);
var state_22994__$1 = state_22994;
var statearr_22996_23062 = state_22994__$1;
(statearr_22996_23062[(2)] = inst_22990);

(statearr_22996_23062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22995 === (20))){
var state_22994__$1 = state_22994;
var statearr_22997_23063 = state_22994__$1;
(statearr_22997_23063[(2)] = null);

(statearr_22997_23063[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22995 === (1))){
var state_22994__$1 = state_22994;
var statearr_22998_23064 = state_22994__$1;
(statearr_22998_23064[(2)] = null);

(statearr_22998_23064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22995 === (4))){
var inst_22959 = (state_22994[(7)]);
var inst_22959__$1 = (state_22994[(2)]);
var inst_22960 = (inst_22959__$1 == null);
var state_22994__$1 = (function (){var statearr_22999 = state_22994;
(statearr_22999[(7)] = inst_22959__$1);

return statearr_22999;
})();
if(cljs.core.truth_(inst_22960)){
var statearr_23000_23065 = state_22994__$1;
(statearr_23000_23065[(1)] = (5));

} else {
var statearr_23001_23066 = state_22994__$1;
(statearr_23001_23066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22995 === (15))){
var inst_22972 = (state_22994[(8)]);
var state_22994__$1 = state_22994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22994__$1,(18),to,inst_22972);
} else {
if((state_val_22995 === (21))){
var inst_22985 = (state_22994[(2)]);
var state_22994__$1 = state_22994;
var statearr_23002_23067 = state_22994__$1;
(statearr_23002_23067[(2)] = inst_22985);

(statearr_23002_23067[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22995 === (13))){
var inst_22987 = (state_22994[(2)]);
var state_22994__$1 = (function (){var statearr_23003 = state_22994;
(statearr_23003[(9)] = inst_22987);

return statearr_23003;
})();
var statearr_23004_23068 = state_22994__$1;
(statearr_23004_23068[(2)] = null);

(statearr_23004_23068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22995 === (6))){
var inst_22959 = (state_22994[(7)]);
var state_22994__$1 = state_22994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22994__$1,(11),inst_22959);
} else {
if((state_val_22995 === (17))){
var inst_22980 = (state_22994[(2)]);
var state_22994__$1 = state_22994;
if(cljs.core.truth_(inst_22980)){
var statearr_23005_23069 = state_22994__$1;
(statearr_23005_23069[(1)] = (19));

} else {
var statearr_23006_23070 = state_22994__$1;
(statearr_23006_23070[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22995 === (3))){
var inst_22992 = (state_22994[(2)]);
var state_22994__$1 = state_22994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22994__$1,inst_22992);
} else {
if((state_val_22995 === (12))){
var inst_22969 = (state_22994[(10)]);
var state_22994__$1 = state_22994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22994__$1,(14),inst_22969);
} else {
if((state_val_22995 === (2))){
var state_22994__$1 = state_22994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22994__$1,(4),results);
} else {
if((state_val_22995 === (19))){
var state_22994__$1 = state_22994;
var statearr_23007_23071 = state_22994__$1;
(statearr_23007_23071[(2)] = null);

(statearr_23007_23071[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22995 === (11))){
var inst_22969 = (state_22994[(2)]);
var state_22994__$1 = (function (){var statearr_23008 = state_22994;
(statearr_23008[(10)] = inst_22969);

return statearr_23008;
})();
var statearr_23009_23072 = state_22994__$1;
(statearr_23009_23072[(2)] = null);

(statearr_23009_23072[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22995 === (9))){
var state_22994__$1 = state_22994;
var statearr_23010_23073 = state_22994__$1;
(statearr_23010_23073[(2)] = null);

(statearr_23010_23073[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22995 === (5))){
var state_22994__$1 = state_22994;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23011_23074 = state_22994__$1;
(statearr_23011_23074[(1)] = (8));

} else {
var statearr_23012_23075 = state_22994__$1;
(statearr_23012_23075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22995 === (14))){
var inst_22972 = (state_22994[(8)]);
var inst_22974 = (state_22994[(11)]);
var inst_22972__$1 = (state_22994[(2)]);
var inst_22973 = (inst_22972__$1 == null);
var inst_22974__$1 = cljs.core.not.call(null,inst_22973);
var state_22994__$1 = (function (){var statearr_23013 = state_22994;
(statearr_23013[(8)] = inst_22972__$1);

(statearr_23013[(11)] = inst_22974__$1);

return statearr_23013;
})();
if(inst_22974__$1){
var statearr_23014_23076 = state_22994__$1;
(statearr_23014_23076[(1)] = (15));

} else {
var statearr_23015_23077 = state_22994__$1;
(statearr_23015_23077[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22995 === (16))){
var inst_22974 = (state_22994[(11)]);
var state_22994__$1 = state_22994;
var statearr_23016_23078 = state_22994__$1;
(statearr_23016_23078[(2)] = inst_22974);

(statearr_23016_23078[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22995 === (10))){
var inst_22966 = (state_22994[(2)]);
var state_22994__$1 = state_22994;
var statearr_23017_23079 = state_22994__$1;
(statearr_23017_23079[(2)] = inst_22966);

(statearr_23017_23079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22995 === (18))){
var inst_22977 = (state_22994[(2)]);
var state_22994__$1 = state_22994;
var statearr_23018_23080 = state_22994__$1;
(statearr_23018_23080[(2)] = inst_22977);

(statearr_23018_23080[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22995 === (8))){
var inst_22963 = cljs.core.async.close_BANG_.call(null,to);
var state_22994__$1 = state_22994;
var statearr_23019_23081 = state_22994__$1;
(statearr_23019_23081[(2)] = inst_22963);

(statearr_23019_23081[(1)] = (10));


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
});})(c__22469__auto__,jobs,results,process,async))
;
return ((function (switch__22357__auto__,c__22469__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____0 = (function (){
var statearr_23023 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23023[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__);

(statearr_23023[(1)] = (1));

return statearr_23023;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____1 = (function (state_22994){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_22994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e23024){if((e23024 instanceof Object)){
var ex__22361__auto__ = e23024;
var statearr_23025_23082 = state_22994;
(statearr_23025_23082[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23083 = state_22994;
state_22994 = G__23083;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__ = function(state_22994){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____1.call(this,state_22994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto__,jobs,results,process,async))
})();
var state__22471__auto__ = (function (){var statearr_23026 = f__22470__auto__.call(null);
(statearr_23026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto__);

return statearr_23026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto__,jobs,results,process,async))
);

return c__22469__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args23084 = [];
var len__19571__auto___23087 = arguments.length;
var i__19572__auto___23088 = (0);
while(true){
if((i__19572__auto___23088 < len__19571__auto___23087)){
args23084.push((arguments[i__19572__auto___23088]));

var G__23089 = (i__19572__auto___23088 + (1));
i__19572__auto___23088 = G__23089;
continue;
} else {
}
break;
}

var G__23086 = args23084.length;
switch (G__23086) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23084.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args23091 = [];
var len__19571__auto___23094 = arguments.length;
var i__19572__auto___23095 = (0);
while(true){
if((i__19572__auto___23095 < len__19571__auto___23094)){
args23091.push((arguments[i__19572__auto___23095]));

var G__23096 = (i__19572__auto___23095 + (1));
i__19572__auto___23095 = G__23096;
continue;
} else {
}
break;
}

var G__23093 = args23091.length;
switch (G__23093) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23091.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args23098 = [];
var len__19571__auto___23151 = arguments.length;
var i__19572__auto___23152 = (0);
while(true){
if((i__19572__auto___23152 < len__19571__auto___23151)){
args23098.push((arguments[i__19572__auto___23152]));

var G__23153 = (i__19572__auto___23152 + (1));
i__19572__auto___23152 = G__23153;
continue;
} else {
}
break;
}

var G__23100 = args23098.length;
switch (G__23100) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23098.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22469__auto___23155 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto___23155,tc,fc){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto___23155,tc,fc){
return (function (state_23126){
var state_val_23127 = (state_23126[(1)]);
if((state_val_23127 === (7))){
var inst_23122 = (state_23126[(2)]);
var state_23126__$1 = state_23126;
var statearr_23128_23156 = state_23126__$1;
(statearr_23128_23156[(2)] = inst_23122);

(statearr_23128_23156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (1))){
var state_23126__$1 = state_23126;
var statearr_23129_23157 = state_23126__$1;
(statearr_23129_23157[(2)] = null);

(statearr_23129_23157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (4))){
var inst_23103 = (state_23126[(7)]);
var inst_23103__$1 = (state_23126[(2)]);
var inst_23104 = (inst_23103__$1 == null);
var state_23126__$1 = (function (){var statearr_23130 = state_23126;
(statearr_23130[(7)] = inst_23103__$1);

return statearr_23130;
})();
if(cljs.core.truth_(inst_23104)){
var statearr_23131_23158 = state_23126__$1;
(statearr_23131_23158[(1)] = (5));

} else {
var statearr_23132_23159 = state_23126__$1;
(statearr_23132_23159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (13))){
var state_23126__$1 = state_23126;
var statearr_23133_23160 = state_23126__$1;
(statearr_23133_23160[(2)] = null);

(statearr_23133_23160[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (6))){
var inst_23103 = (state_23126[(7)]);
var inst_23109 = p.call(null,inst_23103);
var state_23126__$1 = state_23126;
if(cljs.core.truth_(inst_23109)){
var statearr_23134_23161 = state_23126__$1;
(statearr_23134_23161[(1)] = (9));

} else {
var statearr_23135_23162 = state_23126__$1;
(statearr_23135_23162[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (3))){
var inst_23124 = (state_23126[(2)]);
var state_23126__$1 = state_23126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23126__$1,inst_23124);
} else {
if((state_val_23127 === (12))){
var state_23126__$1 = state_23126;
var statearr_23136_23163 = state_23126__$1;
(statearr_23136_23163[(2)] = null);

(statearr_23136_23163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (2))){
var state_23126__$1 = state_23126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23126__$1,(4),ch);
} else {
if((state_val_23127 === (11))){
var inst_23103 = (state_23126[(7)]);
var inst_23113 = (state_23126[(2)]);
var state_23126__$1 = state_23126;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23126__$1,(8),inst_23113,inst_23103);
} else {
if((state_val_23127 === (9))){
var state_23126__$1 = state_23126;
var statearr_23137_23164 = state_23126__$1;
(statearr_23137_23164[(2)] = tc);

(statearr_23137_23164[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (5))){
var inst_23106 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23107 = cljs.core.async.close_BANG_.call(null,fc);
var state_23126__$1 = (function (){var statearr_23138 = state_23126;
(statearr_23138[(8)] = inst_23106);

return statearr_23138;
})();
var statearr_23139_23165 = state_23126__$1;
(statearr_23139_23165[(2)] = inst_23107);

(statearr_23139_23165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (14))){
var inst_23120 = (state_23126[(2)]);
var state_23126__$1 = state_23126;
var statearr_23140_23166 = state_23126__$1;
(statearr_23140_23166[(2)] = inst_23120);

(statearr_23140_23166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (10))){
var state_23126__$1 = state_23126;
var statearr_23141_23167 = state_23126__$1;
(statearr_23141_23167[(2)] = fc);

(statearr_23141_23167[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23127 === (8))){
var inst_23115 = (state_23126[(2)]);
var state_23126__$1 = state_23126;
if(cljs.core.truth_(inst_23115)){
var statearr_23142_23168 = state_23126__$1;
(statearr_23142_23168[(1)] = (12));

} else {
var statearr_23143_23169 = state_23126__$1;
(statearr_23143_23169[(1)] = (13));

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
});})(c__22469__auto___23155,tc,fc))
;
return ((function (switch__22357__auto__,c__22469__auto___23155,tc,fc){
return (function() {
var cljs$core$async$state_machine__22358__auto__ = null;
var cljs$core$async$state_machine__22358__auto____0 = (function (){
var statearr_23147 = [null,null,null,null,null,null,null,null,null];
(statearr_23147[(0)] = cljs$core$async$state_machine__22358__auto__);

(statearr_23147[(1)] = (1));

return statearr_23147;
});
var cljs$core$async$state_machine__22358__auto____1 = (function (state_23126){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_23126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e23148){if((e23148 instanceof Object)){
var ex__22361__auto__ = e23148;
var statearr_23149_23170 = state_23126;
(statearr_23149_23170[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23171 = state_23126;
state_23126 = G__23171;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$state_machine__22358__auto__ = function(state_23126){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22358__auto____1.call(this,state_23126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22358__auto____0;
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22358__auto____1;
return cljs$core$async$state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto___23155,tc,fc))
})();
var state__22471__auto__ = (function (){var statearr_23150 = f__22470__auto__.call(null);
(statearr_23150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___23155);

return statearr_23150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto___23155,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__22469__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto__){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto__){
return (function (state_23235){
var state_val_23236 = (state_23235[(1)]);
if((state_val_23236 === (7))){
var inst_23231 = (state_23235[(2)]);
var state_23235__$1 = state_23235;
var statearr_23237_23258 = state_23235__$1;
(statearr_23237_23258[(2)] = inst_23231);

(statearr_23237_23258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23236 === (1))){
var inst_23215 = init;
var state_23235__$1 = (function (){var statearr_23238 = state_23235;
(statearr_23238[(7)] = inst_23215);

return statearr_23238;
})();
var statearr_23239_23259 = state_23235__$1;
(statearr_23239_23259[(2)] = null);

(statearr_23239_23259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23236 === (4))){
var inst_23218 = (state_23235[(8)]);
var inst_23218__$1 = (state_23235[(2)]);
var inst_23219 = (inst_23218__$1 == null);
var state_23235__$1 = (function (){var statearr_23240 = state_23235;
(statearr_23240[(8)] = inst_23218__$1);

return statearr_23240;
})();
if(cljs.core.truth_(inst_23219)){
var statearr_23241_23260 = state_23235__$1;
(statearr_23241_23260[(1)] = (5));

} else {
var statearr_23242_23261 = state_23235__$1;
(statearr_23242_23261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23236 === (6))){
var inst_23222 = (state_23235[(9)]);
var inst_23215 = (state_23235[(7)]);
var inst_23218 = (state_23235[(8)]);
var inst_23222__$1 = f.call(null,inst_23215,inst_23218);
var inst_23223 = cljs.core.reduced_QMARK_.call(null,inst_23222__$1);
var state_23235__$1 = (function (){var statearr_23243 = state_23235;
(statearr_23243[(9)] = inst_23222__$1);

return statearr_23243;
})();
if(inst_23223){
var statearr_23244_23262 = state_23235__$1;
(statearr_23244_23262[(1)] = (8));

} else {
var statearr_23245_23263 = state_23235__$1;
(statearr_23245_23263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23236 === (3))){
var inst_23233 = (state_23235[(2)]);
var state_23235__$1 = state_23235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23235__$1,inst_23233);
} else {
if((state_val_23236 === (2))){
var state_23235__$1 = state_23235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23235__$1,(4),ch);
} else {
if((state_val_23236 === (9))){
var inst_23222 = (state_23235[(9)]);
var inst_23215 = inst_23222;
var state_23235__$1 = (function (){var statearr_23246 = state_23235;
(statearr_23246[(7)] = inst_23215);

return statearr_23246;
})();
var statearr_23247_23264 = state_23235__$1;
(statearr_23247_23264[(2)] = null);

(statearr_23247_23264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23236 === (5))){
var inst_23215 = (state_23235[(7)]);
var state_23235__$1 = state_23235;
var statearr_23248_23265 = state_23235__$1;
(statearr_23248_23265[(2)] = inst_23215);

(statearr_23248_23265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23236 === (10))){
var inst_23229 = (state_23235[(2)]);
var state_23235__$1 = state_23235;
var statearr_23249_23266 = state_23235__$1;
(statearr_23249_23266[(2)] = inst_23229);

(statearr_23249_23266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23236 === (8))){
var inst_23222 = (state_23235[(9)]);
var inst_23225 = cljs.core.deref.call(null,inst_23222);
var state_23235__$1 = state_23235;
var statearr_23250_23267 = state_23235__$1;
(statearr_23250_23267[(2)] = inst_23225);

(statearr_23250_23267[(1)] = (10));


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
});})(c__22469__auto__))
;
return ((function (switch__22357__auto__,c__22469__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22358__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22358__auto____0 = (function (){
var statearr_23254 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23254[(0)] = cljs$core$async$reduce_$_state_machine__22358__auto__);

(statearr_23254[(1)] = (1));

return statearr_23254;
});
var cljs$core$async$reduce_$_state_machine__22358__auto____1 = (function (state_23235){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_23235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e23255){if((e23255 instanceof Object)){
var ex__22361__auto__ = e23255;
var statearr_23256_23268 = state_23235;
(statearr_23256_23268[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23269 = state_23235;
state_23235 = G__23269;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22358__auto__ = function(state_23235){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22358__auto____1.call(this,state_23235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22358__auto____0;
cljs$core$async$reduce_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22358__auto____1;
return cljs$core$async$reduce_$_state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto__))
})();
var state__22471__auto__ = (function (){var statearr_23257 = f__22470__auto__.call(null);
(statearr_23257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto__);

return statearr_23257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto__))
);

return c__22469__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args23270 = [];
var len__19571__auto___23322 = arguments.length;
var i__19572__auto___23323 = (0);
while(true){
if((i__19572__auto___23323 < len__19571__auto___23322)){
args23270.push((arguments[i__19572__auto___23323]));

var G__23324 = (i__19572__auto___23323 + (1));
i__19572__auto___23323 = G__23324;
continue;
} else {
}
break;
}

var G__23272 = args23270.length;
switch (G__23272) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23270.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22469__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto__){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto__){
return (function (state_23297){
var state_val_23298 = (state_23297[(1)]);
if((state_val_23298 === (7))){
var inst_23279 = (state_23297[(2)]);
var state_23297__$1 = state_23297;
var statearr_23299_23326 = state_23297__$1;
(statearr_23299_23326[(2)] = inst_23279);

(statearr_23299_23326[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23298 === (1))){
var inst_23273 = cljs.core.seq.call(null,coll);
var inst_23274 = inst_23273;
var state_23297__$1 = (function (){var statearr_23300 = state_23297;
(statearr_23300[(7)] = inst_23274);

return statearr_23300;
})();
var statearr_23301_23327 = state_23297__$1;
(statearr_23301_23327[(2)] = null);

(statearr_23301_23327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23298 === (4))){
var inst_23274 = (state_23297[(7)]);
var inst_23277 = cljs.core.first.call(null,inst_23274);
var state_23297__$1 = state_23297;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23297__$1,(7),ch,inst_23277);
} else {
if((state_val_23298 === (13))){
var inst_23291 = (state_23297[(2)]);
var state_23297__$1 = state_23297;
var statearr_23302_23328 = state_23297__$1;
(statearr_23302_23328[(2)] = inst_23291);

(statearr_23302_23328[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23298 === (6))){
var inst_23282 = (state_23297[(2)]);
var state_23297__$1 = state_23297;
if(cljs.core.truth_(inst_23282)){
var statearr_23303_23329 = state_23297__$1;
(statearr_23303_23329[(1)] = (8));

} else {
var statearr_23304_23330 = state_23297__$1;
(statearr_23304_23330[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23298 === (3))){
var inst_23295 = (state_23297[(2)]);
var state_23297__$1 = state_23297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23297__$1,inst_23295);
} else {
if((state_val_23298 === (12))){
var state_23297__$1 = state_23297;
var statearr_23305_23331 = state_23297__$1;
(statearr_23305_23331[(2)] = null);

(statearr_23305_23331[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23298 === (2))){
var inst_23274 = (state_23297[(7)]);
var state_23297__$1 = state_23297;
if(cljs.core.truth_(inst_23274)){
var statearr_23306_23332 = state_23297__$1;
(statearr_23306_23332[(1)] = (4));

} else {
var statearr_23307_23333 = state_23297__$1;
(statearr_23307_23333[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23298 === (11))){
var inst_23288 = cljs.core.async.close_BANG_.call(null,ch);
var state_23297__$1 = state_23297;
var statearr_23308_23334 = state_23297__$1;
(statearr_23308_23334[(2)] = inst_23288);

(statearr_23308_23334[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23298 === (9))){
var state_23297__$1 = state_23297;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23309_23335 = state_23297__$1;
(statearr_23309_23335[(1)] = (11));

} else {
var statearr_23310_23336 = state_23297__$1;
(statearr_23310_23336[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23298 === (5))){
var inst_23274 = (state_23297[(7)]);
var state_23297__$1 = state_23297;
var statearr_23311_23337 = state_23297__$1;
(statearr_23311_23337[(2)] = inst_23274);

(statearr_23311_23337[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23298 === (10))){
var inst_23293 = (state_23297[(2)]);
var state_23297__$1 = state_23297;
var statearr_23312_23338 = state_23297__$1;
(statearr_23312_23338[(2)] = inst_23293);

(statearr_23312_23338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23298 === (8))){
var inst_23274 = (state_23297[(7)]);
var inst_23284 = cljs.core.next.call(null,inst_23274);
var inst_23274__$1 = inst_23284;
var state_23297__$1 = (function (){var statearr_23313 = state_23297;
(statearr_23313[(7)] = inst_23274__$1);

return statearr_23313;
})();
var statearr_23314_23339 = state_23297__$1;
(statearr_23314_23339[(2)] = null);

(statearr_23314_23339[(1)] = (2));


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
});})(c__22469__auto__))
;
return ((function (switch__22357__auto__,c__22469__auto__){
return (function() {
var cljs$core$async$state_machine__22358__auto__ = null;
var cljs$core$async$state_machine__22358__auto____0 = (function (){
var statearr_23318 = [null,null,null,null,null,null,null,null];
(statearr_23318[(0)] = cljs$core$async$state_machine__22358__auto__);

(statearr_23318[(1)] = (1));

return statearr_23318;
});
var cljs$core$async$state_machine__22358__auto____1 = (function (state_23297){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_23297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e23319){if((e23319 instanceof Object)){
var ex__22361__auto__ = e23319;
var statearr_23320_23340 = state_23297;
(statearr_23320_23340[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23341 = state_23297;
state_23297 = G__23341;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$state_machine__22358__auto__ = function(state_23297){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22358__auto____1.call(this,state_23297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22358__auto____0;
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22358__auto____1;
return cljs$core$async$state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto__))
})();
var state__22471__auto__ = (function (){var statearr_23321 = f__22470__auto__.call(null);
(statearr_23321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto__);

return statearr_23321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto__))
);

return c__22469__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19159__auto__ = (((_ == null))?null:_);
var m__19160__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19159__auto__)]);
if(!((m__19160__auto__ == null))){
return m__19160__auto__.call(null,_);
} else {
var m__19160__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19160__auto____$1 == null))){
return m__19160__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19159__auto__ = (((m == null))?null:m);
var m__19160__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19159__auto__)]);
if(!((m__19160__auto__ == null))){
return m__19160__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19160__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19160__auto____$1 == null))){
return m__19160__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19159__auto__ = (((m == null))?null:m);
var m__19160__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19159__auto__)]);
if(!((m__19160__auto__ == null))){
return m__19160__auto__.call(null,m,ch);
} else {
var m__19160__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19160__auto____$1 == null))){
return m__19160__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19159__auto__ = (((m == null))?null:m);
var m__19160__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19159__auto__)]);
if(!((m__19160__auto__ == null))){
return m__19160__auto__.call(null,m);
} else {
var m__19160__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19160__auto____$1 == null))){
return m__19160__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23567 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23567 = (function (mult,ch,cs,meta23568){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23568 = meta23568;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23569,meta23568__$1){
var self__ = this;
var _23569__$1 = this;
return (new cljs.core.async.t_cljs$core$async23567(self__.mult,self__.ch,self__.cs,meta23568__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23567.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23569){
var self__ = this;
var _23569__$1 = this;
return self__.meta23568;
});})(cs))
;

cljs.core.async.t_cljs$core$async23567.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23567.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23567.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23567.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23567.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23567.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23567.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23568","meta23568",1126070319,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23567.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23567.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23567";

cljs.core.async.t_cljs$core$async23567.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19102__auto__,writer__19103__auto__,opt__19104__auto__){
return cljs.core._write.call(null,writer__19103__auto__,"cljs.core.async/t_cljs$core$async23567");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23567 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23567(mult__$1,ch__$1,cs__$1,meta23568){
return (new cljs.core.async.t_cljs$core$async23567(mult__$1,ch__$1,cs__$1,meta23568));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23567(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__22469__auto___23792 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto___23792,cs,m,dchan,dctr,done){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto___23792,cs,m,dchan,dctr,done){
return (function (state_23704){
var state_val_23705 = (state_23704[(1)]);
if((state_val_23705 === (7))){
var inst_23700 = (state_23704[(2)]);
var state_23704__$1 = state_23704;
var statearr_23706_23793 = state_23704__$1;
(statearr_23706_23793[(2)] = inst_23700);

(statearr_23706_23793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (20))){
var inst_23603 = (state_23704[(7)]);
var inst_23615 = cljs.core.first.call(null,inst_23603);
var inst_23616 = cljs.core.nth.call(null,inst_23615,(0),null);
var inst_23617 = cljs.core.nth.call(null,inst_23615,(1),null);
var state_23704__$1 = (function (){var statearr_23707 = state_23704;
(statearr_23707[(8)] = inst_23616);

return statearr_23707;
})();
if(cljs.core.truth_(inst_23617)){
var statearr_23708_23794 = state_23704__$1;
(statearr_23708_23794[(1)] = (22));

} else {
var statearr_23709_23795 = state_23704__$1;
(statearr_23709_23795[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (27))){
var inst_23647 = (state_23704[(9)]);
var inst_23652 = (state_23704[(10)]);
var inst_23645 = (state_23704[(11)]);
var inst_23572 = (state_23704[(12)]);
var inst_23652__$1 = cljs.core._nth.call(null,inst_23645,inst_23647);
var inst_23653 = cljs.core.async.put_BANG_.call(null,inst_23652__$1,inst_23572,done);
var state_23704__$1 = (function (){var statearr_23710 = state_23704;
(statearr_23710[(10)] = inst_23652__$1);

return statearr_23710;
})();
if(cljs.core.truth_(inst_23653)){
var statearr_23711_23796 = state_23704__$1;
(statearr_23711_23796[(1)] = (30));

} else {
var statearr_23712_23797 = state_23704__$1;
(statearr_23712_23797[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (1))){
var state_23704__$1 = state_23704;
var statearr_23713_23798 = state_23704__$1;
(statearr_23713_23798[(2)] = null);

(statearr_23713_23798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (24))){
var inst_23603 = (state_23704[(7)]);
var inst_23622 = (state_23704[(2)]);
var inst_23623 = cljs.core.next.call(null,inst_23603);
var inst_23581 = inst_23623;
var inst_23582 = null;
var inst_23583 = (0);
var inst_23584 = (0);
var state_23704__$1 = (function (){var statearr_23714 = state_23704;
(statearr_23714[(13)] = inst_23581);

(statearr_23714[(14)] = inst_23582);

(statearr_23714[(15)] = inst_23622);

(statearr_23714[(16)] = inst_23583);

(statearr_23714[(17)] = inst_23584);

return statearr_23714;
})();
var statearr_23715_23799 = state_23704__$1;
(statearr_23715_23799[(2)] = null);

(statearr_23715_23799[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (39))){
var state_23704__$1 = state_23704;
var statearr_23719_23800 = state_23704__$1;
(statearr_23719_23800[(2)] = null);

(statearr_23719_23800[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (4))){
var inst_23572 = (state_23704[(12)]);
var inst_23572__$1 = (state_23704[(2)]);
var inst_23573 = (inst_23572__$1 == null);
var state_23704__$1 = (function (){var statearr_23720 = state_23704;
(statearr_23720[(12)] = inst_23572__$1);

return statearr_23720;
})();
if(cljs.core.truth_(inst_23573)){
var statearr_23721_23801 = state_23704__$1;
(statearr_23721_23801[(1)] = (5));

} else {
var statearr_23722_23802 = state_23704__$1;
(statearr_23722_23802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (15))){
var inst_23581 = (state_23704[(13)]);
var inst_23582 = (state_23704[(14)]);
var inst_23583 = (state_23704[(16)]);
var inst_23584 = (state_23704[(17)]);
var inst_23599 = (state_23704[(2)]);
var inst_23600 = (inst_23584 + (1));
var tmp23716 = inst_23581;
var tmp23717 = inst_23582;
var tmp23718 = inst_23583;
var inst_23581__$1 = tmp23716;
var inst_23582__$1 = tmp23717;
var inst_23583__$1 = tmp23718;
var inst_23584__$1 = inst_23600;
var state_23704__$1 = (function (){var statearr_23723 = state_23704;
(statearr_23723[(13)] = inst_23581__$1);

(statearr_23723[(14)] = inst_23582__$1);

(statearr_23723[(16)] = inst_23583__$1);

(statearr_23723[(18)] = inst_23599);

(statearr_23723[(17)] = inst_23584__$1);

return statearr_23723;
})();
var statearr_23724_23803 = state_23704__$1;
(statearr_23724_23803[(2)] = null);

(statearr_23724_23803[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (21))){
var inst_23626 = (state_23704[(2)]);
var state_23704__$1 = state_23704;
var statearr_23728_23804 = state_23704__$1;
(statearr_23728_23804[(2)] = inst_23626);

(statearr_23728_23804[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (31))){
var inst_23652 = (state_23704[(10)]);
var inst_23656 = done.call(null,null);
var inst_23657 = cljs.core.async.untap_STAR_.call(null,m,inst_23652);
var state_23704__$1 = (function (){var statearr_23729 = state_23704;
(statearr_23729[(19)] = inst_23656);

return statearr_23729;
})();
var statearr_23730_23805 = state_23704__$1;
(statearr_23730_23805[(2)] = inst_23657);

(statearr_23730_23805[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (32))){
var inst_23647 = (state_23704[(9)]);
var inst_23645 = (state_23704[(11)]);
var inst_23646 = (state_23704[(20)]);
var inst_23644 = (state_23704[(21)]);
var inst_23659 = (state_23704[(2)]);
var inst_23660 = (inst_23647 + (1));
var tmp23725 = inst_23645;
var tmp23726 = inst_23646;
var tmp23727 = inst_23644;
var inst_23644__$1 = tmp23727;
var inst_23645__$1 = tmp23725;
var inst_23646__$1 = tmp23726;
var inst_23647__$1 = inst_23660;
var state_23704__$1 = (function (){var statearr_23731 = state_23704;
(statearr_23731[(9)] = inst_23647__$1);

(statearr_23731[(11)] = inst_23645__$1);

(statearr_23731[(22)] = inst_23659);

(statearr_23731[(20)] = inst_23646__$1);

(statearr_23731[(21)] = inst_23644__$1);

return statearr_23731;
})();
var statearr_23732_23806 = state_23704__$1;
(statearr_23732_23806[(2)] = null);

(statearr_23732_23806[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (40))){
var inst_23672 = (state_23704[(23)]);
var inst_23676 = done.call(null,null);
var inst_23677 = cljs.core.async.untap_STAR_.call(null,m,inst_23672);
var state_23704__$1 = (function (){var statearr_23733 = state_23704;
(statearr_23733[(24)] = inst_23676);

return statearr_23733;
})();
var statearr_23734_23807 = state_23704__$1;
(statearr_23734_23807[(2)] = inst_23677);

(statearr_23734_23807[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (33))){
var inst_23663 = (state_23704[(25)]);
var inst_23665 = cljs.core.chunked_seq_QMARK_.call(null,inst_23663);
var state_23704__$1 = state_23704;
if(inst_23665){
var statearr_23735_23808 = state_23704__$1;
(statearr_23735_23808[(1)] = (36));

} else {
var statearr_23736_23809 = state_23704__$1;
(statearr_23736_23809[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (13))){
var inst_23593 = (state_23704[(26)]);
var inst_23596 = cljs.core.async.close_BANG_.call(null,inst_23593);
var state_23704__$1 = state_23704;
var statearr_23737_23810 = state_23704__$1;
(statearr_23737_23810[(2)] = inst_23596);

(statearr_23737_23810[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (22))){
var inst_23616 = (state_23704[(8)]);
var inst_23619 = cljs.core.async.close_BANG_.call(null,inst_23616);
var state_23704__$1 = state_23704;
var statearr_23738_23811 = state_23704__$1;
(statearr_23738_23811[(2)] = inst_23619);

(statearr_23738_23811[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (36))){
var inst_23663 = (state_23704[(25)]);
var inst_23667 = cljs.core.chunk_first.call(null,inst_23663);
var inst_23668 = cljs.core.chunk_rest.call(null,inst_23663);
var inst_23669 = cljs.core.count.call(null,inst_23667);
var inst_23644 = inst_23668;
var inst_23645 = inst_23667;
var inst_23646 = inst_23669;
var inst_23647 = (0);
var state_23704__$1 = (function (){var statearr_23739 = state_23704;
(statearr_23739[(9)] = inst_23647);

(statearr_23739[(11)] = inst_23645);

(statearr_23739[(20)] = inst_23646);

(statearr_23739[(21)] = inst_23644);

return statearr_23739;
})();
var statearr_23740_23812 = state_23704__$1;
(statearr_23740_23812[(2)] = null);

(statearr_23740_23812[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (41))){
var inst_23663 = (state_23704[(25)]);
var inst_23679 = (state_23704[(2)]);
var inst_23680 = cljs.core.next.call(null,inst_23663);
var inst_23644 = inst_23680;
var inst_23645 = null;
var inst_23646 = (0);
var inst_23647 = (0);
var state_23704__$1 = (function (){var statearr_23741 = state_23704;
(statearr_23741[(9)] = inst_23647);

(statearr_23741[(11)] = inst_23645);

(statearr_23741[(27)] = inst_23679);

(statearr_23741[(20)] = inst_23646);

(statearr_23741[(21)] = inst_23644);

return statearr_23741;
})();
var statearr_23742_23813 = state_23704__$1;
(statearr_23742_23813[(2)] = null);

(statearr_23742_23813[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (43))){
var state_23704__$1 = state_23704;
var statearr_23743_23814 = state_23704__$1;
(statearr_23743_23814[(2)] = null);

(statearr_23743_23814[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (29))){
var inst_23688 = (state_23704[(2)]);
var state_23704__$1 = state_23704;
var statearr_23744_23815 = state_23704__$1;
(statearr_23744_23815[(2)] = inst_23688);

(statearr_23744_23815[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (44))){
var inst_23697 = (state_23704[(2)]);
var state_23704__$1 = (function (){var statearr_23745 = state_23704;
(statearr_23745[(28)] = inst_23697);

return statearr_23745;
})();
var statearr_23746_23816 = state_23704__$1;
(statearr_23746_23816[(2)] = null);

(statearr_23746_23816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (6))){
var inst_23636 = (state_23704[(29)]);
var inst_23635 = cljs.core.deref.call(null,cs);
var inst_23636__$1 = cljs.core.keys.call(null,inst_23635);
var inst_23637 = cljs.core.count.call(null,inst_23636__$1);
var inst_23638 = cljs.core.reset_BANG_.call(null,dctr,inst_23637);
var inst_23643 = cljs.core.seq.call(null,inst_23636__$1);
var inst_23644 = inst_23643;
var inst_23645 = null;
var inst_23646 = (0);
var inst_23647 = (0);
var state_23704__$1 = (function (){var statearr_23747 = state_23704;
(statearr_23747[(30)] = inst_23638);

(statearr_23747[(9)] = inst_23647);

(statearr_23747[(11)] = inst_23645);

(statearr_23747[(20)] = inst_23646);

(statearr_23747[(21)] = inst_23644);

(statearr_23747[(29)] = inst_23636__$1);

return statearr_23747;
})();
var statearr_23748_23817 = state_23704__$1;
(statearr_23748_23817[(2)] = null);

(statearr_23748_23817[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (28))){
var inst_23663 = (state_23704[(25)]);
var inst_23644 = (state_23704[(21)]);
var inst_23663__$1 = cljs.core.seq.call(null,inst_23644);
var state_23704__$1 = (function (){var statearr_23749 = state_23704;
(statearr_23749[(25)] = inst_23663__$1);

return statearr_23749;
})();
if(inst_23663__$1){
var statearr_23750_23818 = state_23704__$1;
(statearr_23750_23818[(1)] = (33));

} else {
var statearr_23751_23819 = state_23704__$1;
(statearr_23751_23819[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (25))){
var inst_23647 = (state_23704[(9)]);
var inst_23646 = (state_23704[(20)]);
var inst_23649 = (inst_23647 < inst_23646);
var inst_23650 = inst_23649;
var state_23704__$1 = state_23704;
if(cljs.core.truth_(inst_23650)){
var statearr_23752_23820 = state_23704__$1;
(statearr_23752_23820[(1)] = (27));

} else {
var statearr_23753_23821 = state_23704__$1;
(statearr_23753_23821[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (34))){
var state_23704__$1 = state_23704;
var statearr_23754_23822 = state_23704__$1;
(statearr_23754_23822[(2)] = null);

(statearr_23754_23822[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (17))){
var state_23704__$1 = state_23704;
var statearr_23755_23823 = state_23704__$1;
(statearr_23755_23823[(2)] = null);

(statearr_23755_23823[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (3))){
var inst_23702 = (state_23704[(2)]);
var state_23704__$1 = state_23704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23704__$1,inst_23702);
} else {
if((state_val_23705 === (12))){
var inst_23631 = (state_23704[(2)]);
var state_23704__$1 = state_23704;
var statearr_23756_23824 = state_23704__$1;
(statearr_23756_23824[(2)] = inst_23631);

(statearr_23756_23824[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (2))){
var state_23704__$1 = state_23704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23704__$1,(4),ch);
} else {
if((state_val_23705 === (23))){
var state_23704__$1 = state_23704;
var statearr_23757_23825 = state_23704__$1;
(statearr_23757_23825[(2)] = null);

(statearr_23757_23825[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (35))){
var inst_23686 = (state_23704[(2)]);
var state_23704__$1 = state_23704;
var statearr_23758_23826 = state_23704__$1;
(statearr_23758_23826[(2)] = inst_23686);

(statearr_23758_23826[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (19))){
var inst_23603 = (state_23704[(7)]);
var inst_23607 = cljs.core.chunk_first.call(null,inst_23603);
var inst_23608 = cljs.core.chunk_rest.call(null,inst_23603);
var inst_23609 = cljs.core.count.call(null,inst_23607);
var inst_23581 = inst_23608;
var inst_23582 = inst_23607;
var inst_23583 = inst_23609;
var inst_23584 = (0);
var state_23704__$1 = (function (){var statearr_23759 = state_23704;
(statearr_23759[(13)] = inst_23581);

(statearr_23759[(14)] = inst_23582);

(statearr_23759[(16)] = inst_23583);

(statearr_23759[(17)] = inst_23584);

return statearr_23759;
})();
var statearr_23760_23827 = state_23704__$1;
(statearr_23760_23827[(2)] = null);

(statearr_23760_23827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (11))){
var inst_23581 = (state_23704[(13)]);
var inst_23603 = (state_23704[(7)]);
var inst_23603__$1 = cljs.core.seq.call(null,inst_23581);
var state_23704__$1 = (function (){var statearr_23761 = state_23704;
(statearr_23761[(7)] = inst_23603__$1);

return statearr_23761;
})();
if(inst_23603__$1){
var statearr_23762_23828 = state_23704__$1;
(statearr_23762_23828[(1)] = (16));

} else {
var statearr_23763_23829 = state_23704__$1;
(statearr_23763_23829[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (9))){
var inst_23633 = (state_23704[(2)]);
var state_23704__$1 = state_23704;
var statearr_23764_23830 = state_23704__$1;
(statearr_23764_23830[(2)] = inst_23633);

(statearr_23764_23830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (5))){
var inst_23579 = cljs.core.deref.call(null,cs);
var inst_23580 = cljs.core.seq.call(null,inst_23579);
var inst_23581 = inst_23580;
var inst_23582 = null;
var inst_23583 = (0);
var inst_23584 = (0);
var state_23704__$1 = (function (){var statearr_23765 = state_23704;
(statearr_23765[(13)] = inst_23581);

(statearr_23765[(14)] = inst_23582);

(statearr_23765[(16)] = inst_23583);

(statearr_23765[(17)] = inst_23584);

return statearr_23765;
})();
var statearr_23766_23831 = state_23704__$1;
(statearr_23766_23831[(2)] = null);

(statearr_23766_23831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (14))){
var state_23704__$1 = state_23704;
var statearr_23767_23832 = state_23704__$1;
(statearr_23767_23832[(2)] = null);

(statearr_23767_23832[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (45))){
var inst_23694 = (state_23704[(2)]);
var state_23704__$1 = state_23704;
var statearr_23768_23833 = state_23704__$1;
(statearr_23768_23833[(2)] = inst_23694);

(statearr_23768_23833[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (26))){
var inst_23636 = (state_23704[(29)]);
var inst_23690 = (state_23704[(2)]);
var inst_23691 = cljs.core.seq.call(null,inst_23636);
var state_23704__$1 = (function (){var statearr_23769 = state_23704;
(statearr_23769[(31)] = inst_23690);

return statearr_23769;
})();
if(inst_23691){
var statearr_23770_23834 = state_23704__$1;
(statearr_23770_23834[(1)] = (42));

} else {
var statearr_23771_23835 = state_23704__$1;
(statearr_23771_23835[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (16))){
var inst_23603 = (state_23704[(7)]);
var inst_23605 = cljs.core.chunked_seq_QMARK_.call(null,inst_23603);
var state_23704__$1 = state_23704;
if(inst_23605){
var statearr_23772_23836 = state_23704__$1;
(statearr_23772_23836[(1)] = (19));

} else {
var statearr_23773_23837 = state_23704__$1;
(statearr_23773_23837[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (38))){
var inst_23683 = (state_23704[(2)]);
var state_23704__$1 = state_23704;
var statearr_23774_23838 = state_23704__$1;
(statearr_23774_23838[(2)] = inst_23683);

(statearr_23774_23838[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (30))){
var state_23704__$1 = state_23704;
var statearr_23775_23839 = state_23704__$1;
(statearr_23775_23839[(2)] = null);

(statearr_23775_23839[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (10))){
var inst_23582 = (state_23704[(14)]);
var inst_23584 = (state_23704[(17)]);
var inst_23592 = cljs.core._nth.call(null,inst_23582,inst_23584);
var inst_23593 = cljs.core.nth.call(null,inst_23592,(0),null);
var inst_23594 = cljs.core.nth.call(null,inst_23592,(1),null);
var state_23704__$1 = (function (){var statearr_23776 = state_23704;
(statearr_23776[(26)] = inst_23593);

return statearr_23776;
})();
if(cljs.core.truth_(inst_23594)){
var statearr_23777_23840 = state_23704__$1;
(statearr_23777_23840[(1)] = (13));

} else {
var statearr_23778_23841 = state_23704__$1;
(statearr_23778_23841[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (18))){
var inst_23629 = (state_23704[(2)]);
var state_23704__$1 = state_23704;
var statearr_23779_23842 = state_23704__$1;
(statearr_23779_23842[(2)] = inst_23629);

(statearr_23779_23842[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (42))){
var state_23704__$1 = state_23704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23704__$1,(45),dchan);
} else {
if((state_val_23705 === (37))){
var inst_23663 = (state_23704[(25)]);
var inst_23672 = (state_23704[(23)]);
var inst_23572 = (state_23704[(12)]);
var inst_23672__$1 = cljs.core.first.call(null,inst_23663);
var inst_23673 = cljs.core.async.put_BANG_.call(null,inst_23672__$1,inst_23572,done);
var state_23704__$1 = (function (){var statearr_23780 = state_23704;
(statearr_23780[(23)] = inst_23672__$1);

return statearr_23780;
})();
if(cljs.core.truth_(inst_23673)){
var statearr_23781_23843 = state_23704__$1;
(statearr_23781_23843[(1)] = (39));

} else {
var statearr_23782_23844 = state_23704__$1;
(statearr_23782_23844[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23705 === (8))){
var inst_23583 = (state_23704[(16)]);
var inst_23584 = (state_23704[(17)]);
var inst_23586 = (inst_23584 < inst_23583);
var inst_23587 = inst_23586;
var state_23704__$1 = state_23704;
if(cljs.core.truth_(inst_23587)){
var statearr_23783_23845 = state_23704__$1;
(statearr_23783_23845[(1)] = (10));

} else {
var statearr_23784_23846 = state_23704__$1;
(statearr_23784_23846[(1)] = (11));

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
});})(c__22469__auto___23792,cs,m,dchan,dctr,done))
;
return ((function (switch__22357__auto__,c__22469__auto___23792,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22358__auto__ = null;
var cljs$core$async$mult_$_state_machine__22358__auto____0 = (function (){
var statearr_23788 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23788[(0)] = cljs$core$async$mult_$_state_machine__22358__auto__);

(statearr_23788[(1)] = (1));

return statearr_23788;
});
var cljs$core$async$mult_$_state_machine__22358__auto____1 = (function (state_23704){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_23704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e23789){if((e23789 instanceof Object)){
var ex__22361__auto__ = e23789;
var statearr_23790_23847 = state_23704;
(statearr_23790_23847[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23848 = state_23704;
state_23704 = G__23848;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22358__auto__ = function(state_23704){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22358__auto____1.call(this,state_23704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22358__auto____0;
cljs$core$async$mult_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22358__auto____1;
return cljs$core$async$mult_$_state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto___23792,cs,m,dchan,dctr,done))
})();
var state__22471__auto__ = (function (){var statearr_23791 = f__22470__auto__.call(null);
(statearr_23791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___23792);

return statearr_23791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto___23792,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args23849 = [];
var len__19571__auto___23852 = arguments.length;
var i__19572__auto___23853 = (0);
while(true){
if((i__19572__auto___23853 < len__19571__auto___23852)){
args23849.push((arguments[i__19572__auto___23853]));

var G__23854 = (i__19572__auto___23853 + (1));
i__19572__auto___23853 = G__23854;
continue;
} else {
}
break;
}

var G__23851 = args23849.length;
switch (G__23851) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23849.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19159__auto__ = (((m == null))?null:m);
var m__19160__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19159__auto__)]);
if(!((m__19160__auto__ == null))){
return m__19160__auto__.call(null,m,ch);
} else {
var m__19160__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19160__auto____$1 == null))){
return m__19160__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19159__auto__ = (((m == null))?null:m);
var m__19160__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19159__auto__)]);
if(!((m__19160__auto__ == null))){
return m__19160__auto__.call(null,m,ch);
} else {
var m__19160__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19160__auto____$1 == null))){
return m__19160__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19159__auto__ = (((m == null))?null:m);
var m__19160__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19159__auto__)]);
if(!((m__19160__auto__ == null))){
return m__19160__auto__.call(null,m);
} else {
var m__19160__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19160__auto____$1 == null))){
return m__19160__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19159__auto__ = (((m == null))?null:m);
var m__19160__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19159__auto__)]);
if(!((m__19160__auto__ == null))){
return m__19160__auto__.call(null,m,state_map);
} else {
var m__19160__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19160__auto____$1 == null))){
return m__19160__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19159__auto__ = (((m == null))?null:m);
var m__19160__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19159__auto__)]);
if(!((m__19160__auto__ == null))){
return m__19160__auto__.call(null,m,mode);
} else {
var m__19160__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19160__auto____$1 == null))){
return m__19160__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19578__auto__ = [];
var len__19571__auto___23866 = arguments.length;
var i__19572__auto___23867 = (0);
while(true){
if((i__19572__auto___23867 < len__19571__auto___23866)){
args__19578__auto__.push((arguments[i__19572__auto___23867]));

var G__23868 = (i__19572__auto___23867 + (1));
i__19572__auto___23867 = G__23868;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((3) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19579__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23860){
var map__23861 = p__23860;
var map__23861__$1 = ((((!((map__23861 == null)))?((((map__23861.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23861.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23861):map__23861);
var opts = map__23861__$1;
var statearr_23863_23869 = state;
(statearr_23863_23869[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__23861,map__23861__$1,opts){
return (function (val){
var statearr_23864_23870 = state;
(statearr_23864_23870[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23861,map__23861__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_23865_23871 = state;
(statearr_23865_23871[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23856){
var G__23857 = cljs.core.first.call(null,seq23856);
var seq23856__$1 = cljs.core.next.call(null,seq23856);
var G__23858 = cljs.core.first.call(null,seq23856__$1);
var seq23856__$2 = cljs.core.next.call(null,seq23856__$1);
var G__23859 = cljs.core.first.call(null,seq23856__$2);
var seq23856__$3 = cljs.core.next.call(null,seq23856__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23857,G__23858,G__23859,seq23856__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24037 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24037 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24038){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24038 = meta24038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24039,meta24038__$1){
var self__ = this;
var _24039__$1 = this;
return (new cljs.core.async.t_cljs$core$async24037(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24038__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24037.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24039){
var self__ = this;
var _24039__$1 = this;
return self__.meta24038;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24037.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24037.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24037.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async24037.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24037.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24037.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24037.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24037.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24037.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24038","meta24038",-1323779150,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24037.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24037.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24037";

cljs.core.async.t_cljs$core$async24037.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19102__auto__,writer__19103__auto__,opt__19104__auto__){
return cljs.core._write.call(null,writer__19103__auto__,"cljs.core.async/t_cljs$core$async24037");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async24037 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24037(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24038){
return (new cljs.core.async.t_cljs$core$async24037(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24038));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24037(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22469__auto___24202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto___24202,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto___24202,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24139){
var state_val_24140 = (state_24139[(1)]);
if((state_val_24140 === (7))){
var inst_24055 = (state_24139[(2)]);
var state_24139__$1 = state_24139;
var statearr_24141_24203 = state_24139__$1;
(statearr_24141_24203[(2)] = inst_24055);

(statearr_24141_24203[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (20))){
var inst_24067 = (state_24139[(7)]);
var state_24139__$1 = state_24139;
var statearr_24142_24204 = state_24139__$1;
(statearr_24142_24204[(2)] = inst_24067);

(statearr_24142_24204[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (27))){
var state_24139__$1 = state_24139;
var statearr_24143_24205 = state_24139__$1;
(statearr_24143_24205[(2)] = null);

(statearr_24143_24205[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (1))){
var inst_24043 = (state_24139[(8)]);
var inst_24043__$1 = calc_state.call(null);
var inst_24045 = (inst_24043__$1 == null);
var inst_24046 = cljs.core.not.call(null,inst_24045);
var state_24139__$1 = (function (){var statearr_24144 = state_24139;
(statearr_24144[(8)] = inst_24043__$1);

return statearr_24144;
})();
if(inst_24046){
var statearr_24145_24206 = state_24139__$1;
(statearr_24145_24206[(1)] = (2));

} else {
var statearr_24146_24207 = state_24139__$1;
(statearr_24146_24207[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (24))){
var inst_24099 = (state_24139[(9)]);
var inst_24090 = (state_24139[(10)]);
var inst_24113 = (state_24139[(11)]);
var inst_24113__$1 = inst_24090.call(null,inst_24099);
var state_24139__$1 = (function (){var statearr_24147 = state_24139;
(statearr_24147[(11)] = inst_24113__$1);

return statearr_24147;
})();
if(cljs.core.truth_(inst_24113__$1)){
var statearr_24148_24208 = state_24139__$1;
(statearr_24148_24208[(1)] = (29));

} else {
var statearr_24149_24209 = state_24139__$1;
(statearr_24149_24209[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (4))){
var inst_24058 = (state_24139[(2)]);
var state_24139__$1 = state_24139;
if(cljs.core.truth_(inst_24058)){
var statearr_24150_24210 = state_24139__$1;
(statearr_24150_24210[(1)] = (8));

} else {
var statearr_24151_24211 = state_24139__$1;
(statearr_24151_24211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (15))){
var inst_24084 = (state_24139[(2)]);
var state_24139__$1 = state_24139;
if(cljs.core.truth_(inst_24084)){
var statearr_24152_24212 = state_24139__$1;
(statearr_24152_24212[(1)] = (19));

} else {
var statearr_24153_24213 = state_24139__$1;
(statearr_24153_24213[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (21))){
var inst_24089 = (state_24139[(12)]);
var inst_24089__$1 = (state_24139[(2)]);
var inst_24090 = cljs.core.get.call(null,inst_24089__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24091 = cljs.core.get.call(null,inst_24089__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24092 = cljs.core.get.call(null,inst_24089__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24139__$1 = (function (){var statearr_24154 = state_24139;
(statearr_24154[(12)] = inst_24089__$1);

(statearr_24154[(13)] = inst_24091);

(statearr_24154[(10)] = inst_24090);

return statearr_24154;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24139__$1,(22),inst_24092);
} else {
if((state_val_24140 === (31))){
var inst_24121 = (state_24139[(2)]);
var state_24139__$1 = state_24139;
if(cljs.core.truth_(inst_24121)){
var statearr_24155_24214 = state_24139__$1;
(statearr_24155_24214[(1)] = (32));

} else {
var statearr_24156_24215 = state_24139__$1;
(statearr_24156_24215[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (32))){
var inst_24098 = (state_24139[(14)]);
var state_24139__$1 = state_24139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24139__$1,(35),out,inst_24098);
} else {
if((state_val_24140 === (33))){
var inst_24089 = (state_24139[(12)]);
var inst_24067 = inst_24089;
var state_24139__$1 = (function (){var statearr_24157 = state_24139;
(statearr_24157[(7)] = inst_24067);

return statearr_24157;
})();
var statearr_24158_24216 = state_24139__$1;
(statearr_24158_24216[(2)] = null);

(statearr_24158_24216[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (13))){
var inst_24067 = (state_24139[(7)]);
var inst_24074 = inst_24067.cljs$lang$protocol_mask$partition0$;
var inst_24075 = (inst_24074 & (64));
var inst_24076 = inst_24067.cljs$core$ISeq$;
var inst_24077 = (inst_24075) || (inst_24076);
var state_24139__$1 = state_24139;
if(cljs.core.truth_(inst_24077)){
var statearr_24159_24217 = state_24139__$1;
(statearr_24159_24217[(1)] = (16));

} else {
var statearr_24160_24218 = state_24139__$1;
(statearr_24160_24218[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (22))){
var inst_24099 = (state_24139[(9)]);
var inst_24098 = (state_24139[(14)]);
var inst_24097 = (state_24139[(2)]);
var inst_24098__$1 = cljs.core.nth.call(null,inst_24097,(0),null);
var inst_24099__$1 = cljs.core.nth.call(null,inst_24097,(1),null);
var inst_24100 = (inst_24098__$1 == null);
var inst_24101 = cljs.core._EQ_.call(null,inst_24099__$1,change);
var inst_24102 = (inst_24100) || (inst_24101);
var state_24139__$1 = (function (){var statearr_24161 = state_24139;
(statearr_24161[(9)] = inst_24099__$1);

(statearr_24161[(14)] = inst_24098__$1);

return statearr_24161;
})();
if(cljs.core.truth_(inst_24102)){
var statearr_24162_24219 = state_24139__$1;
(statearr_24162_24219[(1)] = (23));

} else {
var statearr_24163_24220 = state_24139__$1;
(statearr_24163_24220[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (36))){
var inst_24089 = (state_24139[(12)]);
var inst_24067 = inst_24089;
var state_24139__$1 = (function (){var statearr_24164 = state_24139;
(statearr_24164[(7)] = inst_24067);

return statearr_24164;
})();
var statearr_24165_24221 = state_24139__$1;
(statearr_24165_24221[(2)] = null);

(statearr_24165_24221[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (29))){
var inst_24113 = (state_24139[(11)]);
var state_24139__$1 = state_24139;
var statearr_24166_24222 = state_24139__$1;
(statearr_24166_24222[(2)] = inst_24113);

(statearr_24166_24222[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (6))){
var state_24139__$1 = state_24139;
var statearr_24167_24223 = state_24139__$1;
(statearr_24167_24223[(2)] = false);

(statearr_24167_24223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (28))){
var inst_24109 = (state_24139[(2)]);
var inst_24110 = calc_state.call(null);
var inst_24067 = inst_24110;
var state_24139__$1 = (function (){var statearr_24168 = state_24139;
(statearr_24168[(15)] = inst_24109);

(statearr_24168[(7)] = inst_24067);

return statearr_24168;
})();
var statearr_24169_24224 = state_24139__$1;
(statearr_24169_24224[(2)] = null);

(statearr_24169_24224[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (25))){
var inst_24135 = (state_24139[(2)]);
var state_24139__$1 = state_24139;
var statearr_24170_24225 = state_24139__$1;
(statearr_24170_24225[(2)] = inst_24135);

(statearr_24170_24225[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (34))){
var inst_24133 = (state_24139[(2)]);
var state_24139__$1 = state_24139;
var statearr_24171_24226 = state_24139__$1;
(statearr_24171_24226[(2)] = inst_24133);

(statearr_24171_24226[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (17))){
var state_24139__$1 = state_24139;
var statearr_24172_24227 = state_24139__$1;
(statearr_24172_24227[(2)] = false);

(statearr_24172_24227[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (3))){
var state_24139__$1 = state_24139;
var statearr_24173_24228 = state_24139__$1;
(statearr_24173_24228[(2)] = false);

(statearr_24173_24228[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (12))){
var inst_24137 = (state_24139[(2)]);
var state_24139__$1 = state_24139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24139__$1,inst_24137);
} else {
if((state_val_24140 === (2))){
var inst_24043 = (state_24139[(8)]);
var inst_24048 = inst_24043.cljs$lang$protocol_mask$partition0$;
var inst_24049 = (inst_24048 & (64));
var inst_24050 = inst_24043.cljs$core$ISeq$;
var inst_24051 = (inst_24049) || (inst_24050);
var state_24139__$1 = state_24139;
if(cljs.core.truth_(inst_24051)){
var statearr_24174_24229 = state_24139__$1;
(statearr_24174_24229[(1)] = (5));

} else {
var statearr_24175_24230 = state_24139__$1;
(statearr_24175_24230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (23))){
var inst_24098 = (state_24139[(14)]);
var inst_24104 = (inst_24098 == null);
var state_24139__$1 = state_24139;
if(cljs.core.truth_(inst_24104)){
var statearr_24176_24231 = state_24139__$1;
(statearr_24176_24231[(1)] = (26));

} else {
var statearr_24177_24232 = state_24139__$1;
(statearr_24177_24232[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (35))){
var inst_24124 = (state_24139[(2)]);
var state_24139__$1 = state_24139;
if(cljs.core.truth_(inst_24124)){
var statearr_24178_24233 = state_24139__$1;
(statearr_24178_24233[(1)] = (36));

} else {
var statearr_24179_24234 = state_24139__$1;
(statearr_24179_24234[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (19))){
var inst_24067 = (state_24139[(7)]);
var inst_24086 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24067);
var state_24139__$1 = state_24139;
var statearr_24180_24235 = state_24139__$1;
(statearr_24180_24235[(2)] = inst_24086);

(statearr_24180_24235[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (11))){
var inst_24067 = (state_24139[(7)]);
var inst_24071 = (inst_24067 == null);
var inst_24072 = cljs.core.not.call(null,inst_24071);
var state_24139__$1 = state_24139;
if(inst_24072){
var statearr_24181_24236 = state_24139__$1;
(statearr_24181_24236[(1)] = (13));

} else {
var statearr_24182_24237 = state_24139__$1;
(statearr_24182_24237[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (9))){
var inst_24043 = (state_24139[(8)]);
var state_24139__$1 = state_24139;
var statearr_24183_24238 = state_24139__$1;
(statearr_24183_24238[(2)] = inst_24043);

(statearr_24183_24238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (5))){
var state_24139__$1 = state_24139;
var statearr_24184_24239 = state_24139__$1;
(statearr_24184_24239[(2)] = true);

(statearr_24184_24239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (14))){
var state_24139__$1 = state_24139;
var statearr_24185_24240 = state_24139__$1;
(statearr_24185_24240[(2)] = false);

(statearr_24185_24240[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (26))){
var inst_24099 = (state_24139[(9)]);
var inst_24106 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24099);
var state_24139__$1 = state_24139;
var statearr_24186_24241 = state_24139__$1;
(statearr_24186_24241[(2)] = inst_24106);

(statearr_24186_24241[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (16))){
var state_24139__$1 = state_24139;
var statearr_24187_24242 = state_24139__$1;
(statearr_24187_24242[(2)] = true);

(statearr_24187_24242[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (38))){
var inst_24129 = (state_24139[(2)]);
var state_24139__$1 = state_24139;
var statearr_24188_24243 = state_24139__$1;
(statearr_24188_24243[(2)] = inst_24129);

(statearr_24188_24243[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (30))){
var inst_24099 = (state_24139[(9)]);
var inst_24091 = (state_24139[(13)]);
var inst_24090 = (state_24139[(10)]);
var inst_24116 = cljs.core.empty_QMARK_.call(null,inst_24090);
var inst_24117 = inst_24091.call(null,inst_24099);
var inst_24118 = cljs.core.not.call(null,inst_24117);
var inst_24119 = (inst_24116) && (inst_24118);
var state_24139__$1 = state_24139;
var statearr_24189_24244 = state_24139__$1;
(statearr_24189_24244[(2)] = inst_24119);

(statearr_24189_24244[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (10))){
var inst_24043 = (state_24139[(8)]);
var inst_24063 = (state_24139[(2)]);
var inst_24064 = cljs.core.get.call(null,inst_24063,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24065 = cljs.core.get.call(null,inst_24063,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24066 = cljs.core.get.call(null,inst_24063,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24067 = inst_24043;
var state_24139__$1 = (function (){var statearr_24190 = state_24139;
(statearr_24190[(16)] = inst_24064);

(statearr_24190[(17)] = inst_24065);

(statearr_24190[(18)] = inst_24066);

(statearr_24190[(7)] = inst_24067);

return statearr_24190;
})();
var statearr_24191_24245 = state_24139__$1;
(statearr_24191_24245[(2)] = null);

(statearr_24191_24245[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (18))){
var inst_24081 = (state_24139[(2)]);
var state_24139__$1 = state_24139;
var statearr_24192_24246 = state_24139__$1;
(statearr_24192_24246[(2)] = inst_24081);

(statearr_24192_24246[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (37))){
var state_24139__$1 = state_24139;
var statearr_24193_24247 = state_24139__$1;
(statearr_24193_24247[(2)] = null);

(statearr_24193_24247[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24140 === (8))){
var inst_24043 = (state_24139[(8)]);
var inst_24060 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24043);
var state_24139__$1 = state_24139;
var statearr_24194_24248 = state_24139__$1;
(statearr_24194_24248[(2)] = inst_24060);

(statearr_24194_24248[(1)] = (10));


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
}
}
}
}
}
}
}
}
});})(c__22469__auto___24202,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22357__auto__,c__22469__auto___24202,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22358__auto__ = null;
var cljs$core$async$mix_$_state_machine__22358__auto____0 = (function (){
var statearr_24198 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24198[(0)] = cljs$core$async$mix_$_state_machine__22358__auto__);

(statearr_24198[(1)] = (1));

return statearr_24198;
});
var cljs$core$async$mix_$_state_machine__22358__auto____1 = (function (state_24139){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_24139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e24199){if((e24199 instanceof Object)){
var ex__22361__auto__ = e24199;
var statearr_24200_24249 = state_24139;
(statearr_24200_24249[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24250 = state_24139;
state_24139 = G__24250;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22358__auto__ = function(state_24139){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22358__auto____1.call(this,state_24139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22358__auto____0;
cljs$core$async$mix_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22358__auto____1;
return cljs$core$async$mix_$_state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto___24202,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22471__auto__ = (function (){var statearr_24201 = f__22470__auto__.call(null);
(statearr_24201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___24202);

return statearr_24201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto___24202,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19159__auto__ = (((p == null))?null:p);
var m__19160__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19159__auto__)]);
if(!((m__19160__auto__ == null))){
return m__19160__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19160__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19160__auto____$1 == null))){
return m__19160__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19159__auto__ = (((p == null))?null:p);
var m__19160__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19159__auto__)]);
if(!((m__19160__auto__ == null))){
return m__19160__auto__.call(null,p,v,ch);
} else {
var m__19160__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19160__auto____$1 == null))){
return m__19160__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args24251 = [];
var len__19571__auto___24254 = arguments.length;
var i__19572__auto___24255 = (0);
while(true){
if((i__19572__auto___24255 < len__19571__auto___24254)){
args24251.push((arguments[i__19572__auto___24255]));

var G__24256 = (i__19572__auto___24255 + (1));
i__19572__auto___24255 = G__24256;
continue;
} else {
}
break;
}

var G__24253 = args24251.length;
switch (G__24253) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24251.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19159__auto__ = (((p == null))?null:p);
var m__19160__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19159__auto__)]);
if(!((m__19160__auto__ == null))){
return m__19160__auto__.call(null,p);
} else {
var m__19160__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19160__auto____$1 == null))){
return m__19160__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19159__auto__ = (((p == null))?null:p);
var m__19160__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19159__auto__)]);
if(!((m__19160__auto__ == null))){
return m__19160__auto__.call(null,p,v);
} else {
var m__19160__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19160__auto____$1 == null))){
return m__19160__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args24259 = [];
var len__19571__auto___24384 = arguments.length;
var i__19572__auto___24385 = (0);
while(true){
if((i__19572__auto___24385 < len__19571__auto___24384)){
args24259.push((arguments[i__19572__auto___24385]));

var G__24386 = (i__19572__auto___24385 + (1));
i__19572__auto___24385 = G__24386;
continue;
} else {
}
break;
}

var G__24261 = args24259.length;
switch (G__24261) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24259.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18496__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18496__auto__,mults){
return (function (p1__24258_SHARP_){
if(cljs.core.truth_(p1__24258_SHARP_.call(null,topic))){
return p1__24258_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24258_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18496__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24262 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24262 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24263){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24263 = meta24263;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24264,meta24263__$1){
var self__ = this;
var _24264__$1 = this;
return (new cljs.core.async.t_cljs$core$async24262(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24263__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24262.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24264){
var self__ = this;
var _24264__$1 = this;
return self__.meta24263;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24262.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24262.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24262.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async24262.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24262.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24262.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24262.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24262.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24263","meta24263",-467038672,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24262.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24262.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24262";

cljs.core.async.t_cljs$core$async24262.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19102__auto__,writer__19103__auto__,opt__19104__auto__){
return cljs.core._write.call(null,writer__19103__auto__,"cljs.core.async/t_cljs$core$async24262");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24262 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24262(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24263){
return (new cljs.core.async.t_cljs$core$async24262(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24263));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24262(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22469__auto___24388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto___24388,mults,ensure_mult,p){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto___24388,mults,ensure_mult,p){
return (function (state_24336){
var state_val_24337 = (state_24336[(1)]);
if((state_val_24337 === (7))){
var inst_24332 = (state_24336[(2)]);
var state_24336__$1 = state_24336;
var statearr_24338_24389 = state_24336__$1;
(statearr_24338_24389[(2)] = inst_24332);

(statearr_24338_24389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (20))){
var state_24336__$1 = state_24336;
var statearr_24339_24390 = state_24336__$1;
(statearr_24339_24390[(2)] = null);

(statearr_24339_24390[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (1))){
var state_24336__$1 = state_24336;
var statearr_24340_24391 = state_24336__$1;
(statearr_24340_24391[(2)] = null);

(statearr_24340_24391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (24))){
var inst_24315 = (state_24336[(7)]);
var inst_24324 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24315);
var state_24336__$1 = state_24336;
var statearr_24341_24392 = state_24336__$1;
(statearr_24341_24392[(2)] = inst_24324);

(statearr_24341_24392[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (4))){
var inst_24267 = (state_24336[(8)]);
var inst_24267__$1 = (state_24336[(2)]);
var inst_24268 = (inst_24267__$1 == null);
var state_24336__$1 = (function (){var statearr_24342 = state_24336;
(statearr_24342[(8)] = inst_24267__$1);

return statearr_24342;
})();
if(cljs.core.truth_(inst_24268)){
var statearr_24343_24393 = state_24336__$1;
(statearr_24343_24393[(1)] = (5));

} else {
var statearr_24344_24394 = state_24336__$1;
(statearr_24344_24394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (15))){
var inst_24309 = (state_24336[(2)]);
var state_24336__$1 = state_24336;
var statearr_24345_24395 = state_24336__$1;
(statearr_24345_24395[(2)] = inst_24309);

(statearr_24345_24395[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (21))){
var inst_24329 = (state_24336[(2)]);
var state_24336__$1 = (function (){var statearr_24346 = state_24336;
(statearr_24346[(9)] = inst_24329);

return statearr_24346;
})();
var statearr_24347_24396 = state_24336__$1;
(statearr_24347_24396[(2)] = null);

(statearr_24347_24396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (13))){
var inst_24291 = (state_24336[(10)]);
var inst_24293 = cljs.core.chunked_seq_QMARK_.call(null,inst_24291);
var state_24336__$1 = state_24336;
if(inst_24293){
var statearr_24348_24397 = state_24336__$1;
(statearr_24348_24397[(1)] = (16));

} else {
var statearr_24349_24398 = state_24336__$1;
(statearr_24349_24398[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (22))){
var inst_24321 = (state_24336[(2)]);
var state_24336__$1 = state_24336;
if(cljs.core.truth_(inst_24321)){
var statearr_24350_24399 = state_24336__$1;
(statearr_24350_24399[(1)] = (23));

} else {
var statearr_24351_24400 = state_24336__$1;
(statearr_24351_24400[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (6))){
var inst_24267 = (state_24336[(8)]);
var inst_24317 = (state_24336[(11)]);
var inst_24315 = (state_24336[(7)]);
var inst_24315__$1 = topic_fn.call(null,inst_24267);
var inst_24316 = cljs.core.deref.call(null,mults);
var inst_24317__$1 = cljs.core.get.call(null,inst_24316,inst_24315__$1);
var state_24336__$1 = (function (){var statearr_24352 = state_24336;
(statearr_24352[(11)] = inst_24317__$1);

(statearr_24352[(7)] = inst_24315__$1);

return statearr_24352;
})();
if(cljs.core.truth_(inst_24317__$1)){
var statearr_24353_24401 = state_24336__$1;
(statearr_24353_24401[(1)] = (19));

} else {
var statearr_24354_24402 = state_24336__$1;
(statearr_24354_24402[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (25))){
var inst_24326 = (state_24336[(2)]);
var state_24336__$1 = state_24336;
var statearr_24355_24403 = state_24336__$1;
(statearr_24355_24403[(2)] = inst_24326);

(statearr_24355_24403[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (17))){
var inst_24291 = (state_24336[(10)]);
var inst_24300 = cljs.core.first.call(null,inst_24291);
var inst_24301 = cljs.core.async.muxch_STAR_.call(null,inst_24300);
var inst_24302 = cljs.core.async.close_BANG_.call(null,inst_24301);
var inst_24303 = cljs.core.next.call(null,inst_24291);
var inst_24277 = inst_24303;
var inst_24278 = null;
var inst_24279 = (0);
var inst_24280 = (0);
var state_24336__$1 = (function (){var statearr_24356 = state_24336;
(statearr_24356[(12)] = inst_24302);

(statearr_24356[(13)] = inst_24280);

(statearr_24356[(14)] = inst_24278);

(statearr_24356[(15)] = inst_24277);

(statearr_24356[(16)] = inst_24279);

return statearr_24356;
})();
var statearr_24357_24404 = state_24336__$1;
(statearr_24357_24404[(2)] = null);

(statearr_24357_24404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (3))){
var inst_24334 = (state_24336[(2)]);
var state_24336__$1 = state_24336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24336__$1,inst_24334);
} else {
if((state_val_24337 === (12))){
var inst_24311 = (state_24336[(2)]);
var state_24336__$1 = state_24336;
var statearr_24358_24405 = state_24336__$1;
(statearr_24358_24405[(2)] = inst_24311);

(statearr_24358_24405[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (2))){
var state_24336__$1 = state_24336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24336__$1,(4),ch);
} else {
if((state_val_24337 === (23))){
var state_24336__$1 = state_24336;
var statearr_24359_24406 = state_24336__$1;
(statearr_24359_24406[(2)] = null);

(statearr_24359_24406[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (19))){
var inst_24267 = (state_24336[(8)]);
var inst_24317 = (state_24336[(11)]);
var inst_24319 = cljs.core.async.muxch_STAR_.call(null,inst_24317);
var state_24336__$1 = state_24336;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24336__$1,(22),inst_24319,inst_24267);
} else {
if((state_val_24337 === (11))){
var inst_24277 = (state_24336[(15)]);
var inst_24291 = (state_24336[(10)]);
var inst_24291__$1 = cljs.core.seq.call(null,inst_24277);
var state_24336__$1 = (function (){var statearr_24360 = state_24336;
(statearr_24360[(10)] = inst_24291__$1);

return statearr_24360;
})();
if(inst_24291__$1){
var statearr_24361_24407 = state_24336__$1;
(statearr_24361_24407[(1)] = (13));

} else {
var statearr_24362_24408 = state_24336__$1;
(statearr_24362_24408[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (9))){
var inst_24313 = (state_24336[(2)]);
var state_24336__$1 = state_24336;
var statearr_24363_24409 = state_24336__$1;
(statearr_24363_24409[(2)] = inst_24313);

(statearr_24363_24409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (5))){
var inst_24274 = cljs.core.deref.call(null,mults);
var inst_24275 = cljs.core.vals.call(null,inst_24274);
var inst_24276 = cljs.core.seq.call(null,inst_24275);
var inst_24277 = inst_24276;
var inst_24278 = null;
var inst_24279 = (0);
var inst_24280 = (0);
var state_24336__$1 = (function (){var statearr_24364 = state_24336;
(statearr_24364[(13)] = inst_24280);

(statearr_24364[(14)] = inst_24278);

(statearr_24364[(15)] = inst_24277);

(statearr_24364[(16)] = inst_24279);

return statearr_24364;
})();
var statearr_24365_24410 = state_24336__$1;
(statearr_24365_24410[(2)] = null);

(statearr_24365_24410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (14))){
var state_24336__$1 = state_24336;
var statearr_24369_24411 = state_24336__$1;
(statearr_24369_24411[(2)] = null);

(statearr_24369_24411[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (16))){
var inst_24291 = (state_24336[(10)]);
var inst_24295 = cljs.core.chunk_first.call(null,inst_24291);
var inst_24296 = cljs.core.chunk_rest.call(null,inst_24291);
var inst_24297 = cljs.core.count.call(null,inst_24295);
var inst_24277 = inst_24296;
var inst_24278 = inst_24295;
var inst_24279 = inst_24297;
var inst_24280 = (0);
var state_24336__$1 = (function (){var statearr_24370 = state_24336;
(statearr_24370[(13)] = inst_24280);

(statearr_24370[(14)] = inst_24278);

(statearr_24370[(15)] = inst_24277);

(statearr_24370[(16)] = inst_24279);

return statearr_24370;
})();
var statearr_24371_24412 = state_24336__$1;
(statearr_24371_24412[(2)] = null);

(statearr_24371_24412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (10))){
var inst_24280 = (state_24336[(13)]);
var inst_24278 = (state_24336[(14)]);
var inst_24277 = (state_24336[(15)]);
var inst_24279 = (state_24336[(16)]);
var inst_24285 = cljs.core._nth.call(null,inst_24278,inst_24280);
var inst_24286 = cljs.core.async.muxch_STAR_.call(null,inst_24285);
var inst_24287 = cljs.core.async.close_BANG_.call(null,inst_24286);
var inst_24288 = (inst_24280 + (1));
var tmp24366 = inst_24278;
var tmp24367 = inst_24277;
var tmp24368 = inst_24279;
var inst_24277__$1 = tmp24367;
var inst_24278__$1 = tmp24366;
var inst_24279__$1 = tmp24368;
var inst_24280__$1 = inst_24288;
var state_24336__$1 = (function (){var statearr_24372 = state_24336;
(statearr_24372[(13)] = inst_24280__$1);

(statearr_24372[(14)] = inst_24278__$1);

(statearr_24372[(17)] = inst_24287);

(statearr_24372[(15)] = inst_24277__$1);

(statearr_24372[(16)] = inst_24279__$1);

return statearr_24372;
})();
var statearr_24373_24413 = state_24336__$1;
(statearr_24373_24413[(2)] = null);

(statearr_24373_24413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (18))){
var inst_24306 = (state_24336[(2)]);
var state_24336__$1 = state_24336;
var statearr_24374_24414 = state_24336__$1;
(statearr_24374_24414[(2)] = inst_24306);

(statearr_24374_24414[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (8))){
var inst_24280 = (state_24336[(13)]);
var inst_24279 = (state_24336[(16)]);
var inst_24282 = (inst_24280 < inst_24279);
var inst_24283 = inst_24282;
var state_24336__$1 = state_24336;
if(cljs.core.truth_(inst_24283)){
var statearr_24375_24415 = state_24336__$1;
(statearr_24375_24415[(1)] = (10));

} else {
var statearr_24376_24416 = state_24336__$1;
(statearr_24376_24416[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__22469__auto___24388,mults,ensure_mult,p))
;
return ((function (switch__22357__auto__,c__22469__auto___24388,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22358__auto__ = null;
var cljs$core$async$state_machine__22358__auto____0 = (function (){
var statearr_24380 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24380[(0)] = cljs$core$async$state_machine__22358__auto__);

(statearr_24380[(1)] = (1));

return statearr_24380;
});
var cljs$core$async$state_machine__22358__auto____1 = (function (state_24336){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_24336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e24381){if((e24381 instanceof Object)){
var ex__22361__auto__ = e24381;
var statearr_24382_24417 = state_24336;
(statearr_24382_24417[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24418 = state_24336;
state_24336 = G__24418;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$state_machine__22358__auto__ = function(state_24336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22358__auto____1.call(this,state_24336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22358__auto____0;
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22358__auto____1;
return cljs$core$async$state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto___24388,mults,ensure_mult,p))
})();
var state__22471__auto__ = (function (){var statearr_24383 = f__22470__auto__.call(null);
(statearr_24383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___24388);

return statearr_24383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto___24388,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args24419 = [];
var len__19571__auto___24422 = arguments.length;
var i__19572__auto___24423 = (0);
while(true){
if((i__19572__auto___24423 < len__19571__auto___24422)){
args24419.push((arguments[i__19572__auto___24423]));

var G__24424 = (i__19572__auto___24423 + (1));
i__19572__auto___24423 = G__24424;
continue;
} else {
}
break;
}

var G__24421 = args24419.length;
switch (G__24421) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24419.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args24426 = [];
var len__19571__auto___24429 = arguments.length;
var i__19572__auto___24430 = (0);
while(true){
if((i__19572__auto___24430 < len__19571__auto___24429)){
args24426.push((arguments[i__19572__auto___24430]));

var G__24431 = (i__19572__auto___24430 + (1));
i__19572__auto___24430 = G__24431;
continue;
} else {
}
break;
}

var G__24428 = args24426.length;
switch (G__24428) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24426.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args24433 = [];
var len__19571__auto___24504 = arguments.length;
var i__19572__auto___24505 = (0);
while(true){
if((i__19572__auto___24505 < len__19571__auto___24504)){
args24433.push((arguments[i__19572__auto___24505]));

var G__24506 = (i__19572__auto___24505 + (1));
i__19572__auto___24505 = G__24506;
continue;
} else {
}
break;
}

var G__24435 = args24433.length;
switch (G__24435) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24433.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__22469__auto___24508 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto___24508,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto___24508,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24474){
var state_val_24475 = (state_24474[(1)]);
if((state_val_24475 === (7))){
var state_24474__$1 = state_24474;
var statearr_24476_24509 = state_24474__$1;
(statearr_24476_24509[(2)] = null);

(statearr_24476_24509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24475 === (1))){
var state_24474__$1 = state_24474;
var statearr_24477_24510 = state_24474__$1;
(statearr_24477_24510[(2)] = null);

(statearr_24477_24510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24475 === (4))){
var inst_24438 = (state_24474[(7)]);
var inst_24440 = (inst_24438 < cnt);
var state_24474__$1 = state_24474;
if(cljs.core.truth_(inst_24440)){
var statearr_24478_24511 = state_24474__$1;
(statearr_24478_24511[(1)] = (6));

} else {
var statearr_24479_24512 = state_24474__$1;
(statearr_24479_24512[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24475 === (15))){
var inst_24470 = (state_24474[(2)]);
var state_24474__$1 = state_24474;
var statearr_24480_24513 = state_24474__$1;
(statearr_24480_24513[(2)] = inst_24470);

(statearr_24480_24513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24475 === (13))){
var inst_24463 = cljs.core.async.close_BANG_.call(null,out);
var state_24474__$1 = state_24474;
var statearr_24481_24514 = state_24474__$1;
(statearr_24481_24514[(2)] = inst_24463);

(statearr_24481_24514[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24475 === (6))){
var state_24474__$1 = state_24474;
var statearr_24482_24515 = state_24474__$1;
(statearr_24482_24515[(2)] = null);

(statearr_24482_24515[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24475 === (3))){
var inst_24472 = (state_24474[(2)]);
var state_24474__$1 = state_24474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24474__$1,inst_24472);
} else {
if((state_val_24475 === (12))){
var inst_24460 = (state_24474[(8)]);
var inst_24460__$1 = (state_24474[(2)]);
var inst_24461 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24460__$1);
var state_24474__$1 = (function (){var statearr_24483 = state_24474;
(statearr_24483[(8)] = inst_24460__$1);

return statearr_24483;
})();
if(cljs.core.truth_(inst_24461)){
var statearr_24484_24516 = state_24474__$1;
(statearr_24484_24516[(1)] = (13));

} else {
var statearr_24485_24517 = state_24474__$1;
(statearr_24485_24517[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24475 === (2))){
var inst_24437 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24438 = (0);
var state_24474__$1 = (function (){var statearr_24486 = state_24474;
(statearr_24486[(9)] = inst_24437);

(statearr_24486[(7)] = inst_24438);

return statearr_24486;
})();
var statearr_24487_24518 = state_24474__$1;
(statearr_24487_24518[(2)] = null);

(statearr_24487_24518[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24475 === (11))){
var inst_24438 = (state_24474[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24474,(10),Object,null,(9));
var inst_24447 = chs__$1.call(null,inst_24438);
var inst_24448 = done.call(null,inst_24438);
var inst_24449 = cljs.core.async.take_BANG_.call(null,inst_24447,inst_24448);
var state_24474__$1 = state_24474;
var statearr_24488_24519 = state_24474__$1;
(statearr_24488_24519[(2)] = inst_24449);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24474__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24475 === (9))){
var inst_24438 = (state_24474[(7)]);
var inst_24451 = (state_24474[(2)]);
var inst_24452 = (inst_24438 + (1));
var inst_24438__$1 = inst_24452;
var state_24474__$1 = (function (){var statearr_24489 = state_24474;
(statearr_24489[(7)] = inst_24438__$1);

(statearr_24489[(10)] = inst_24451);

return statearr_24489;
})();
var statearr_24490_24520 = state_24474__$1;
(statearr_24490_24520[(2)] = null);

(statearr_24490_24520[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24475 === (5))){
var inst_24458 = (state_24474[(2)]);
var state_24474__$1 = (function (){var statearr_24491 = state_24474;
(statearr_24491[(11)] = inst_24458);

return statearr_24491;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24474__$1,(12),dchan);
} else {
if((state_val_24475 === (14))){
var inst_24460 = (state_24474[(8)]);
var inst_24465 = cljs.core.apply.call(null,f,inst_24460);
var state_24474__$1 = state_24474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24474__$1,(16),out,inst_24465);
} else {
if((state_val_24475 === (16))){
var inst_24467 = (state_24474[(2)]);
var state_24474__$1 = (function (){var statearr_24492 = state_24474;
(statearr_24492[(12)] = inst_24467);

return statearr_24492;
})();
var statearr_24493_24521 = state_24474__$1;
(statearr_24493_24521[(2)] = null);

(statearr_24493_24521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24475 === (10))){
var inst_24442 = (state_24474[(2)]);
var inst_24443 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24474__$1 = (function (){var statearr_24494 = state_24474;
(statearr_24494[(13)] = inst_24442);

return statearr_24494;
})();
var statearr_24495_24522 = state_24474__$1;
(statearr_24495_24522[(2)] = inst_24443);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24474__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24475 === (8))){
var inst_24456 = (state_24474[(2)]);
var state_24474__$1 = state_24474;
var statearr_24496_24523 = state_24474__$1;
(statearr_24496_24523[(2)] = inst_24456);

(statearr_24496_24523[(1)] = (5));


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
});})(c__22469__auto___24508,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22357__auto__,c__22469__auto___24508,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22358__auto__ = null;
var cljs$core$async$state_machine__22358__auto____0 = (function (){
var statearr_24500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24500[(0)] = cljs$core$async$state_machine__22358__auto__);

(statearr_24500[(1)] = (1));

return statearr_24500;
});
var cljs$core$async$state_machine__22358__auto____1 = (function (state_24474){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_24474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e24501){if((e24501 instanceof Object)){
var ex__22361__auto__ = e24501;
var statearr_24502_24524 = state_24474;
(statearr_24502_24524[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24525 = state_24474;
state_24474 = G__24525;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$state_machine__22358__auto__ = function(state_24474){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22358__auto____1.call(this,state_24474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22358__auto____0;
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22358__auto____1;
return cljs$core$async$state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto___24508,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22471__auto__ = (function (){var statearr_24503 = f__22470__auto__.call(null);
(statearr_24503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___24508);

return statearr_24503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto___24508,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args24527 = [];
var len__19571__auto___24585 = arguments.length;
var i__19572__auto___24586 = (0);
while(true){
if((i__19572__auto___24586 < len__19571__auto___24585)){
args24527.push((arguments[i__19572__auto___24586]));

var G__24587 = (i__19572__auto___24586 + (1));
i__19572__auto___24586 = G__24587;
continue;
} else {
}
break;
}

var G__24529 = args24527.length;
switch (G__24529) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24527.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22469__auto___24589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto___24589,out){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto___24589,out){
return (function (state_24561){
var state_val_24562 = (state_24561[(1)]);
if((state_val_24562 === (7))){
var inst_24541 = (state_24561[(7)]);
var inst_24540 = (state_24561[(8)]);
var inst_24540__$1 = (state_24561[(2)]);
var inst_24541__$1 = cljs.core.nth.call(null,inst_24540__$1,(0),null);
var inst_24542 = cljs.core.nth.call(null,inst_24540__$1,(1),null);
var inst_24543 = (inst_24541__$1 == null);
var state_24561__$1 = (function (){var statearr_24563 = state_24561;
(statearr_24563[(7)] = inst_24541__$1);

(statearr_24563[(8)] = inst_24540__$1);

(statearr_24563[(9)] = inst_24542);

return statearr_24563;
})();
if(cljs.core.truth_(inst_24543)){
var statearr_24564_24590 = state_24561__$1;
(statearr_24564_24590[(1)] = (8));

} else {
var statearr_24565_24591 = state_24561__$1;
(statearr_24565_24591[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (1))){
var inst_24530 = cljs.core.vec.call(null,chs);
var inst_24531 = inst_24530;
var state_24561__$1 = (function (){var statearr_24566 = state_24561;
(statearr_24566[(10)] = inst_24531);

return statearr_24566;
})();
var statearr_24567_24592 = state_24561__$1;
(statearr_24567_24592[(2)] = null);

(statearr_24567_24592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (4))){
var inst_24531 = (state_24561[(10)]);
var state_24561__$1 = state_24561;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24561__$1,(7),inst_24531);
} else {
if((state_val_24562 === (6))){
var inst_24557 = (state_24561[(2)]);
var state_24561__$1 = state_24561;
var statearr_24568_24593 = state_24561__$1;
(statearr_24568_24593[(2)] = inst_24557);

(statearr_24568_24593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (3))){
var inst_24559 = (state_24561[(2)]);
var state_24561__$1 = state_24561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24561__$1,inst_24559);
} else {
if((state_val_24562 === (2))){
var inst_24531 = (state_24561[(10)]);
var inst_24533 = cljs.core.count.call(null,inst_24531);
var inst_24534 = (inst_24533 > (0));
var state_24561__$1 = state_24561;
if(cljs.core.truth_(inst_24534)){
var statearr_24570_24594 = state_24561__$1;
(statearr_24570_24594[(1)] = (4));

} else {
var statearr_24571_24595 = state_24561__$1;
(statearr_24571_24595[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (11))){
var inst_24531 = (state_24561[(10)]);
var inst_24550 = (state_24561[(2)]);
var tmp24569 = inst_24531;
var inst_24531__$1 = tmp24569;
var state_24561__$1 = (function (){var statearr_24572 = state_24561;
(statearr_24572[(10)] = inst_24531__$1);

(statearr_24572[(11)] = inst_24550);

return statearr_24572;
})();
var statearr_24573_24596 = state_24561__$1;
(statearr_24573_24596[(2)] = null);

(statearr_24573_24596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (9))){
var inst_24541 = (state_24561[(7)]);
var state_24561__$1 = state_24561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24561__$1,(11),out,inst_24541);
} else {
if((state_val_24562 === (5))){
var inst_24555 = cljs.core.async.close_BANG_.call(null,out);
var state_24561__$1 = state_24561;
var statearr_24574_24597 = state_24561__$1;
(statearr_24574_24597[(2)] = inst_24555);

(statearr_24574_24597[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (10))){
var inst_24553 = (state_24561[(2)]);
var state_24561__$1 = state_24561;
var statearr_24575_24598 = state_24561__$1;
(statearr_24575_24598[(2)] = inst_24553);

(statearr_24575_24598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (8))){
var inst_24541 = (state_24561[(7)]);
var inst_24540 = (state_24561[(8)]);
var inst_24531 = (state_24561[(10)]);
var inst_24542 = (state_24561[(9)]);
var inst_24545 = (function (){var cs = inst_24531;
var vec__24536 = inst_24540;
var v = inst_24541;
var c = inst_24542;
return ((function (cs,vec__24536,v,c,inst_24541,inst_24540,inst_24531,inst_24542,state_val_24562,c__22469__auto___24589,out){
return (function (p1__24526_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24526_SHARP_);
});
;})(cs,vec__24536,v,c,inst_24541,inst_24540,inst_24531,inst_24542,state_val_24562,c__22469__auto___24589,out))
})();
var inst_24546 = cljs.core.filterv.call(null,inst_24545,inst_24531);
var inst_24531__$1 = inst_24546;
var state_24561__$1 = (function (){var statearr_24576 = state_24561;
(statearr_24576[(10)] = inst_24531__$1);

return statearr_24576;
})();
var statearr_24577_24599 = state_24561__$1;
(statearr_24577_24599[(2)] = null);

(statearr_24577_24599[(1)] = (2));


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
});})(c__22469__auto___24589,out))
;
return ((function (switch__22357__auto__,c__22469__auto___24589,out){
return (function() {
var cljs$core$async$state_machine__22358__auto__ = null;
var cljs$core$async$state_machine__22358__auto____0 = (function (){
var statearr_24581 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24581[(0)] = cljs$core$async$state_machine__22358__auto__);

(statearr_24581[(1)] = (1));

return statearr_24581;
});
var cljs$core$async$state_machine__22358__auto____1 = (function (state_24561){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_24561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e24582){if((e24582 instanceof Object)){
var ex__22361__auto__ = e24582;
var statearr_24583_24600 = state_24561;
(statearr_24583_24600[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24601 = state_24561;
state_24561 = G__24601;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$state_machine__22358__auto__ = function(state_24561){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22358__auto____1.call(this,state_24561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22358__auto____0;
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22358__auto____1;
return cljs$core$async$state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto___24589,out))
})();
var state__22471__auto__ = (function (){var statearr_24584 = f__22470__auto__.call(null);
(statearr_24584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___24589);

return statearr_24584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto___24589,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args24602 = [];
var len__19571__auto___24651 = arguments.length;
var i__19572__auto___24652 = (0);
while(true){
if((i__19572__auto___24652 < len__19571__auto___24651)){
args24602.push((arguments[i__19572__auto___24652]));

var G__24653 = (i__19572__auto___24652 + (1));
i__19572__auto___24652 = G__24653;
continue;
} else {
}
break;
}

var G__24604 = args24602.length;
switch (G__24604) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24602.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22469__auto___24655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto___24655,out){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto___24655,out){
return (function (state_24628){
var state_val_24629 = (state_24628[(1)]);
if((state_val_24629 === (7))){
var inst_24610 = (state_24628[(7)]);
var inst_24610__$1 = (state_24628[(2)]);
var inst_24611 = (inst_24610__$1 == null);
var inst_24612 = cljs.core.not.call(null,inst_24611);
var state_24628__$1 = (function (){var statearr_24630 = state_24628;
(statearr_24630[(7)] = inst_24610__$1);

return statearr_24630;
})();
if(inst_24612){
var statearr_24631_24656 = state_24628__$1;
(statearr_24631_24656[(1)] = (8));

} else {
var statearr_24632_24657 = state_24628__$1;
(statearr_24632_24657[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24629 === (1))){
var inst_24605 = (0);
var state_24628__$1 = (function (){var statearr_24633 = state_24628;
(statearr_24633[(8)] = inst_24605);

return statearr_24633;
})();
var statearr_24634_24658 = state_24628__$1;
(statearr_24634_24658[(2)] = null);

(statearr_24634_24658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24629 === (4))){
var state_24628__$1 = state_24628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24628__$1,(7),ch);
} else {
if((state_val_24629 === (6))){
var inst_24623 = (state_24628[(2)]);
var state_24628__$1 = state_24628;
var statearr_24635_24659 = state_24628__$1;
(statearr_24635_24659[(2)] = inst_24623);

(statearr_24635_24659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24629 === (3))){
var inst_24625 = (state_24628[(2)]);
var inst_24626 = cljs.core.async.close_BANG_.call(null,out);
var state_24628__$1 = (function (){var statearr_24636 = state_24628;
(statearr_24636[(9)] = inst_24625);

return statearr_24636;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24628__$1,inst_24626);
} else {
if((state_val_24629 === (2))){
var inst_24605 = (state_24628[(8)]);
var inst_24607 = (inst_24605 < n);
var state_24628__$1 = state_24628;
if(cljs.core.truth_(inst_24607)){
var statearr_24637_24660 = state_24628__$1;
(statearr_24637_24660[(1)] = (4));

} else {
var statearr_24638_24661 = state_24628__$1;
(statearr_24638_24661[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24629 === (11))){
var inst_24605 = (state_24628[(8)]);
var inst_24615 = (state_24628[(2)]);
var inst_24616 = (inst_24605 + (1));
var inst_24605__$1 = inst_24616;
var state_24628__$1 = (function (){var statearr_24639 = state_24628;
(statearr_24639[(10)] = inst_24615);

(statearr_24639[(8)] = inst_24605__$1);

return statearr_24639;
})();
var statearr_24640_24662 = state_24628__$1;
(statearr_24640_24662[(2)] = null);

(statearr_24640_24662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24629 === (9))){
var state_24628__$1 = state_24628;
var statearr_24641_24663 = state_24628__$1;
(statearr_24641_24663[(2)] = null);

(statearr_24641_24663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24629 === (5))){
var state_24628__$1 = state_24628;
var statearr_24642_24664 = state_24628__$1;
(statearr_24642_24664[(2)] = null);

(statearr_24642_24664[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24629 === (10))){
var inst_24620 = (state_24628[(2)]);
var state_24628__$1 = state_24628;
var statearr_24643_24665 = state_24628__$1;
(statearr_24643_24665[(2)] = inst_24620);

(statearr_24643_24665[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24629 === (8))){
var inst_24610 = (state_24628[(7)]);
var state_24628__$1 = state_24628;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24628__$1,(11),out,inst_24610);
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
});})(c__22469__auto___24655,out))
;
return ((function (switch__22357__auto__,c__22469__auto___24655,out){
return (function() {
var cljs$core$async$state_machine__22358__auto__ = null;
var cljs$core$async$state_machine__22358__auto____0 = (function (){
var statearr_24647 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24647[(0)] = cljs$core$async$state_machine__22358__auto__);

(statearr_24647[(1)] = (1));

return statearr_24647;
});
var cljs$core$async$state_machine__22358__auto____1 = (function (state_24628){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_24628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e24648){if((e24648 instanceof Object)){
var ex__22361__auto__ = e24648;
var statearr_24649_24666 = state_24628;
(statearr_24649_24666[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24667 = state_24628;
state_24628 = G__24667;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$state_machine__22358__auto__ = function(state_24628){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22358__auto____1.call(this,state_24628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22358__auto____0;
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22358__auto____1;
return cljs$core$async$state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto___24655,out))
})();
var state__22471__auto__ = (function (){var statearr_24650 = f__22470__auto__.call(null);
(statearr_24650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___24655);

return statearr_24650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto___24655,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24675 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24675 = (function (map_LT_,f,ch,meta24676){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24676 = meta24676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24677,meta24676__$1){
var self__ = this;
var _24677__$1 = this;
return (new cljs.core.async.t_cljs$core$async24675(self__.map_LT_,self__.f,self__.ch,meta24676__$1));
});

cljs.core.async.t_cljs$core$async24675.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24677){
var self__ = this;
var _24677__$1 = this;
return self__.meta24676;
});

cljs.core.async.t_cljs$core$async24675.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24675.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24675.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24675.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24675.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24678 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24678 = (function (map_LT_,f,ch,meta24676,_,fn1,meta24679){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24676 = meta24676;
this._ = _;
this.fn1 = fn1;
this.meta24679 = meta24679;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24680,meta24679__$1){
var self__ = this;
var _24680__$1 = this;
return (new cljs.core.async.t_cljs$core$async24678(self__.map_LT_,self__.f,self__.ch,self__.meta24676,self__._,self__.fn1,meta24679__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24678.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24680){
var self__ = this;
var _24680__$1 = this;
return self__.meta24679;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24678.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24678.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24678.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24678.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24668_SHARP_){
return f1.call(null,(((p1__24668_SHARP_ == null))?null:self__.f.call(null,p1__24668_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24678.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24676","meta24676",1746403976,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24675","cljs.core.async/t_cljs$core$async24675",-1112873424,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24679","meta24679",1331377822,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24678.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24678.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24678";

cljs.core.async.t_cljs$core$async24678.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19102__auto__,writer__19103__auto__,opt__19104__auto__){
return cljs.core._write.call(null,writer__19103__auto__,"cljs.core.async/t_cljs$core$async24678");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24678 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24678(map_LT___$1,f__$1,ch__$1,meta24676__$1,___$2,fn1__$1,meta24679){
return (new cljs.core.async.t_cljs$core$async24678(map_LT___$1,f__$1,ch__$1,meta24676__$1,___$2,fn1__$1,meta24679));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24678(self__.map_LT_,self__.f,self__.ch,self__.meta24676,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18484__auto__ = ret;
if(cljs.core.truth_(and__18484__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18484__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24675.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24675.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24675.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24676","meta24676",1746403976,null)], null);
});

cljs.core.async.t_cljs$core$async24675.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24675.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24675";

cljs.core.async.t_cljs$core$async24675.cljs$lang$ctorPrWriter = (function (this__19102__auto__,writer__19103__auto__,opt__19104__auto__){
return cljs.core._write.call(null,writer__19103__auto__,"cljs.core.async/t_cljs$core$async24675");
});

cljs.core.async.__GT_t_cljs$core$async24675 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24675(map_LT___$1,f__$1,ch__$1,meta24676){
return (new cljs.core.async.t_cljs$core$async24675(map_LT___$1,f__$1,ch__$1,meta24676));
});

}

return (new cljs.core.async.t_cljs$core$async24675(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24684 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24684 = (function (map_GT_,f,ch,meta24685){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24685 = meta24685;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24686,meta24685__$1){
var self__ = this;
var _24686__$1 = this;
return (new cljs.core.async.t_cljs$core$async24684(self__.map_GT_,self__.f,self__.ch,meta24685__$1));
});

cljs.core.async.t_cljs$core$async24684.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24686){
var self__ = this;
var _24686__$1 = this;
return self__.meta24685;
});

cljs.core.async.t_cljs$core$async24684.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24684.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24684.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24684.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24684.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24684.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24684.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24685","meta24685",-1209493178,null)], null);
});

cljs.core.async.t_cljs$core$async24684.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24684.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24684";

cljs.core.async.t_cljs$core$async24684.cljs$lang$ctorPrWriter = (function (this__19102__auto__,writer__19103__auto__,opt__19104__auto__){
return cljs.core._write.call(null,writer__19103__auto__,"cljs.core.async/t_cljs$core$async24684");
});

cljs.core.async.__GT_t_cljs$core$async24684 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24684(map_GT___$1,f__$1,ch__$1,meta24685){
return (new cljs.core.async.t_cljs$core$async24684(map_GT___$1,f__$1,ch__$1,meta24685));
});

}

return (new cljs.core.async.t_cljs$core$async24684(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24690 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24690 = (function (filter_GT_,p,ch,meta24691){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24691 = meta24691;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24692,meta24691__$1){
var self__ = this;
var _24692__$1 = this;
return (new cljs.core.async.t_cljs$core$async24690(self__.filter_GT_,self__.p,self__.ch,meta24691__$1));
});

cljs.core.async.t_cljs$core$async24690.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24692){
var self__ = this;
var _24692__$1 = this;
return self__.meta24691;
});

cljs.core.async.t_cljs$core$async24690.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24690.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24690.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24690.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24690.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24690.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24690.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24690.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24691","meta24691",2095512960,null)], null);
});

cljs.core.async.t_cljs$core$async24690.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24690.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24690";

cljs.core.async.t_cljs$core$async24690.cljs$lang$ctorPrWriter = (function (this__19102__auto__,writer__19103__auto__,opt__19104__auto__){
return cljs.core._write.call(null,writer__19103__auto__,"cljs.core.async/t_cljs$core$async24690");
});

cljs.core.async.__GT_t_cljs$core$async24690 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24690(filter_GT___$1,p__$1,ch__$1,meta24691){
return (new cljs.core.async.t_cljs$core$async24690(filter_GT___$1,p__$1,ch__$1,meta24691));
});

}

return (new cljs.core.async.t_cljs$core$async24690(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args24693 = [];
var len__19571__auto___24737 = arguments.length;
var i__19572__auto___24738 = (0);
while(true){
if((i__19572__auto___24738 < len__19571__auto___24737)){
args24693.push((arguments[i__19572__auto___24738]));

var G__24739 = (i__19572__auto___24738 + (1));
i__19572__auto___24738 = G__24739;
continue;
} else {
}
break;
}

var G__24695 = args24693.length;
switch (G__24695) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24693.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22469__auto___24741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto___24741,out){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto___24741,out){
return (function (state_24716){
var state_val_24717 = (state_24716[(1)]);
if((state_val_24717 === (7))){
var inst_24712 = (state_24716[(2)]);
var state_24716__$1 = state_24716;
var statearr_24718_24742 = state_24716__$1;
(statearr_24718_24742[(2)] = inst_24712);

(statearr_24718_24742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24717 === (1))){
var state_24716__$1 = state_24716;
var statearr_24719_24743 = state_24716__$1;
(statearr_24719_24743[(2)] = null);

(statearr_24719_24743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24717 === (4))){
var inst_24698 = (state_24716[(7)]);
var inst_24698__$1 = (state_24716[(2)]);
var inst_24699 = (inst_24698__$1 == null);
var state_24716__$1 = (function (){var statearr_24720 = state_24716;
(statearr_24720[(7)] = inst_24698__$1);

return statearr_24720;
})();
if(cljs.core.truth_(inst_24699)){
var statearr_24721_24744 = state_24716__$1;
(statearr_24721_24744[(1)] = (5));

} else {
var statearr_24722_24745 = state_24716__$1;
(statearr_24722_24745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24717 === (6))){
var inst_24698 = (state_24716[(7)]);
var inst_24703 = p.call(null,inst_24698);
var state_24716__$1 = state_24716;
if(cljs.core.truth_(inst_24703)){
var statearr_24723_24746 = state_24716__$1;
(statearr_24723_24746[(1)] = (8));

} else {
var statearr_24724_24747 = state_24716__$1;
(statearr_24724_24747[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24717 === (3))){
var inst_24714 = (state_24716[(2)]);
var state_24716__$1 = state_24716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24716__$1,inst_24714);
} else {
if((state_val_24717 === (2))){
var state_24716__$1 = state_24716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24716__$1,(4),ch);
} else {
if((state_val_24717 === (11))){
var inst_24706 = (state_24716[(2)]);
var state_24716__$1 = state_24716;
var statearr_24725_24748 = state_24716__$1;
(statearr_24725_24748[(2)] = inst_24706);

(statearr_24725_24748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24717 === (9))){
var state_24716__$1 = state_24716;
var statearr_24726_24749 = state_24716__$1;
(statearr_24726_24749[(2)] = null);

(statearr_24726_24749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24717 === (5))){
var inst_24701 = cljs.core.async.close_BANG_.call(null,out);
var state_24716__$1 = state_24716;
var statearr_24727_24750 = state_24716__$1;
(statearr_24727_24750[(2)] = inst_24701);

(statearr_24727_24750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24717 === (10))){
var inst_24709 = (state_24716[(2)]);
var state_24716__$1 = (function (){var statearr_24728 = state_24716;
(statearr_24728[(8)] = inst_24709);

return statearr_24728;
})();
var statearr_24729_24751 = state_24716__$1;
(statearr_24729_24751[(2)] = null);

(statearr_24729_24751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24717 === (8))){
var inst_24698 = (state_24716[(7)]);
var state_24716__$1 = state_24716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24716__$1,(11),out,inst_24698);
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
});})(c__22469__auto___24741,out))
;
return ((function (switch__22357__auto__,c__22469__auto___24741,out){
return (function() {
var cljs$core$async$state_machine__22358__auto__ = null;
var cljs$core$async$state_machine__22358__auto____0 = (function (){
var statearr_24733 = [null,null,null,null,null,null,null,null,null];
(statearr_24733[(0)] = cljs$core$async$state_machine__22358__auto__);

(statearr_24733[(1)] = (1));

return statearr_24733;
});
var cljs$core$async$state_machine__22358__auto____1 = (function (state_24716){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_24716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e24734){if((e24734 instanceof Object)){
var ex__22361__auto__ = e24734;
var statearr_24735_24752 = state_24716;
(statearr_24735_24752[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24753 = state_24716;
state_24716 = G__24753;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$state_machine__22358__auto__ = function(state_24716){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22358__auto____1.call(this,state_24716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22358__auto____0;
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22358__auto____1;
return cljs$core$async$state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto___24741,out))
})();
var state__22471__auto__ = (function (){var statearr_24736 = f__22470__auto__.call(null);
(statearr_24736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___24741);

return statearr_24736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto___24741,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24754 = [];
var len__19571__auto___24757 = arguments.length;
var i__19572__auto___24758 = (0);
while(true){
if((i__19572__auto___24758 < len__19571__auto___24757)){
args24754.push((arguments[i__19572__auto___24758]));

var G__24759 = (i__19572__auto___24758 + (1));
i__19572__auto___24758 = G__24759;
continue;
} else {
}
break;
}

var G__24756 = args24754.length;
switch (G__24756) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24754.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22469__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto__){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto__){
return (function (state_24926){
var state_val_24927 = (state_24926[(1)]);
if((state_val_24927 === (7))){
var inst_24922 = (state_24926[(2)]);
var state_24926__$1 = state_24926;
var statearr_24928_24969 = state_24926__$1;
(statearr_24928_24969[(2)] = inst_24922);

(statearr_24928_24969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (20))){
var inst_24892 = (state_24926[(7)]);
var inst_24903 = (state_24926[(2)]);
var inst_24904 = cljs.core.next.call(null,inst_24892);
var inst_24878 = inst_24904;
var inst_24879 = null;
var inst_24880 = (0);
var inst_24881 = (0);
var state_24926__$1 = (function (){var statearr_24929 = state_24926;
(statearr_24929[(8)] = inst_24903);

(statearr_24929[(9)] = inst_24879);

(statearr_24929[(10)] = inst_24880);

(statearr_24929[(11)] = inst_24881);

(statearr_24929[(12)] = inst_24878);

return statearr_24929;
})();
var statearr_24930_24970 = state_24926__$1;
(statearr_24930_24970[(2)] = null);

(statearr_24930_24970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (1))){
var state_24926__$1 = state_24926;
var statearr_24931_24971 = state_24926__$1;
(statearr_24931_24971[(2)] = null);

(statearr_24931_24971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (4))){
var inst_24867 = (state_24926[(13)]);
var inst_24867__$1 = (state_24926[(2)]);
var inst_24868 = (inst_24867__$1 == null);
var state_24926__$1 = (function (){var statearr_24932 = state_24926;
(statearr_24932[(13)] = inst_24867__$1);

return statearr_24932;
})();
if(cljs.core.truth_(inst_24868)){
var statearr_24933_24972 = state_24926__$1;
(statearr_24933_24972[(1)] = (5));

} else {
var statearr_24934_24973 = state_24926__$1;
(statearr_24934_24973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (15))){
var state_24926__$1 = state_24926;
var statearr_24938_24974 = state_24926__$1;
(statearr_24938_24974[(2)] = null);

(statearr_24938_24974[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (21))){
var state_24926__$1 = state_24926;
var statearr_24939_24975 = state_24926__$1;
(statearr_24939_24975[(2)] = null);

(statearr_24939_24975[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (13))){
var inst_24879 = (state_24926[(9)]);
var inst_24880 = (state_24926[(10)]);
var inst_24881 = (state_24926[(11)]);
var inst_24878 = (state_24926[(12)]);
var inst_24888 = (state_24926[(2)]);
var inst_24889 = (inst_24881 + (1));
var tmp24935 = inst_24879;
var tmp24936 = inst_24880;
var tmp24937 = inst_24878;
var inst_24878__$1 = tmp24937;
var inst_24879__$1 = tmp24935;
var inst_24880__$1 = tmp24936;
var inst_24881__$1 = inst_24889;
var state_24926__$1 = (function (){var statearr_24940 = state_24926;
(statearr_24940[(14)] = inst_24888);

(statearr_24940[(9)] = inst_24879__$1);

(statearr_24940[(10)] = inst_24880__$1);

(statearr_24940[(11)] = inst_24881__$1);

(statearr_24940[(12)] = inst_24878__$1);

return statearr_24940;
})();
var statearr_24941_24976 = state_24926__$1;
(statearr_24941_24976[(2)] = null);

(statearr_24941_24976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (22))){
var state_24926__$1 = state_24926;
var statearr_24942_24977 = state_24926__$1;
(statearr_24942_24977[(2)] = null);

(statearr_24942_24977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (6))){
var inst_24867 = (state_24926[(13)]);
var inst_24876 = f.call(null,inst_24867);
var inst_24877 = cljs.core.seq.call(null,inst_24876);
var inst_24878 = inst_24877;
var inst_24879 = null;
var inst_24880 = (0);
var inst_24881 = (0);
var state_24926__$1 = (function (){var statearr_24943 = state_24926;
(statearr_24943[(9)] = inst_24879);

(statearr_24943[(10)] = inst_24880);

(statearr_24943[(11)] = inst_24881);

(statearr_24943[(12)] = inst_24878);

return statearr_24943;
})();
var statearr_24944_24978 = state_24926__$1;
(statearr_24944_24978[(2)] = null);

(statearr_24944_24978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (17))){
var inst_24892 = (state_24926[(7)]);
var inst_24896 = cljs.core.chunk_first.call(null,inst_24892);
var inst_24897 = cljs.core.chunk_rest.call(null,inst_24892);
var inst_24898 = cljs.core.count.call(null,inst_24896);
var inst_24878 = inst_24897;
var inst_24879 = inst_24896;
var inst_24880 = inst_24898;
var inst_24881 = (0);
var state_24926__$1 = (function (){var statearr_24945 = state_24926;
(statearr_24945[(9)] = inst_24879);

(statearr_24945[(10)] = inst_24880);

(statearr_24945[(11)] = inst_24881);

(statearr_24945[(12)] = inst_24878);

return statearr_24945;
})();
var statearr_24946_24979 = state_24926__$1;
(statearr_24946_24979[(2)] = null);

(statearr_24946_24979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (3))){
var inst_24924 = (state_24926[(2)]);
var state_24926__$1 = state_24926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24926__$1,inst_24924);
} else {
if((state_val_24927 === (12))){
var inst_24912 = (state_24926[(2)]);
var state_24926__$1 = state_24926;
var statearr_24947_24980 = state_24926__$1;
(statearr_24947_24980[(2)] = inst_24912);

(statearr_24947_24980[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (2))){
var state_24926__$1 = state_24926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24926__$1,(4),in$);
} else {
if((state_val_24927 === (23))){
var inst_24920 = (state_24926[(2)]);
var state_24926__$1 = state_24926;
var statearr_24948_24981 = state_24926__$1;
(statearr_24948_24981[(2)] = inst_24920);

(statearr_24948_24981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (19))){
var inst_24907 = (state_24926[(2)]);
var state_24926__$1 = state_24926;
var statearr_24949_24982 = state_24926__$1;
(statearr_24949_24982[(2)] = inst_24907);

(statearr_24949_24982[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (11))){
var inst_24892 = (state_24926[(7)]);
var inst_24878 = (state_24926[(12)]);
var inst_24892__$1 = cljs.core.seq.call(null,inst_24878);
var state_24926__$1 = (function (){var statearr_24950 = state_24926;
(statearr_24950[(7)] = inst_24892__$1);

return statearr_24950;
})();
if(inst_24892__$1){
var statearr_24951_24983 = state_24926__$1;
(statearr_24951_24983[(1)] = (14));

} else {
var statearr_24952_24984 = state_24926__$1;
(statearr_24952_24984[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (9))){
var inst_24914 = (state_24926[(2)]);
var inst_24915 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24926__$1 = (function (){var statearr_24953 = state_24926;
(statearr_24953[(15)] = inst_24914);

return statearr_24953;
})();
if(cljs.core.truth_(inst_24915)){
var statearr_24954_24985 = state_24926__$1;
(statearr_24954_24985[(1)] = (21));

} else {
var statearr_24955_24986 = state_24926__$1;
(statearr_24955_24986[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (5))){
var inst_24870 = cljs.core.async.close_BANG_.call(null,out);
var state_24926__$1 = state_24926;
var statearr_24956_24987 = state_24926__$1;
(statearr_24956_24987[(2)] = inst_24870);

(statearr_24956_24987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (14))){
var inst_24892 = (state_24926[(7)]);
var inst_24894 = cljs.core.chunked_seq_QMARK_.call(null,inst_24892);
var state_24926__$1 = state_24926;
if(inst_24894){
var statearr_24957_24988 = state_24926__$1;
(statearr_24957_24988[(1)] = (17));

} else {
var statearr_24958_24989 = state_24926__$1;
(statearr_24958_24989[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (16))){
var inst_24910 = (state_24926[(2)]);
var state_24926__$1 = state_24926;
var statearr_24959_24990 = state_24926__$1;
(statearr_24959_24990[(2)] = inst_24910);

(statearr_24959_24990[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (10))){
var inst_24879 = (state_24926[(9)]);
var inst_24881 = (state_24926[(11)]);
var inst_24886 = cljs.core._nth.call(null,inst_24879,inst_24881);
var state_24926__$1 = state_24926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24926__$1,(13),out,inst_24886);
} else {
if((state_val_24927 === (18))){
var inst_24892 = (state_24926[(7)]);
var inst_24901 = cljs.core.first.call(null,inst_24892);
var state_24926__$1 = state_24926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24926__$1,(20),out,inst_24901);
} else {
if((state_val_24927 === (8))){
var inst_24880 = (state_24926[(10)]);
var inst_24881 = (state_24926[(11)]);
var inst_24883 = (inst_24881 < inst_24880);
var inst_24884 = inst_24883;
var state_24926__$1 = state_24926;
if(cljs.core.truth_(inst_24884)){
var statearr_24960_24991 = state_24926__$1;
(statearr_24960_24991[(1)] = (10));

} else {
var statearr_24961_24992 = state_24926__$1;
(statearr_24961_24992[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__22358__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22358__auto____0 = (function (){
var statearr_24965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24965[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22358__auto__);

(statearr_24965[(1)] = (1));

return statearr_24965;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22358__auto____1 = (function (state_24926){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_24926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e24966){if((e24966 instanceof Object)){
var ex__22361__auto__ = e24966;
var statearr_24967_24993 = state_24926;
(statearr_24967_24993[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24994 = state_24926;
state_24926 = G__24994;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22358__auto__ = function(state_24926){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22358__auto____1.call(this,state_24926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22358__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22358__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto__))
})();
var state__22471__auto__ = (function (){var statearr_24968 = f__22470__auto__.call(null);
(statearr_24968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto__);

return statearr_24968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto__))
);

return c__22469__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24995 = [];
var len__19571__auto___24998 = arguments.length;
var i__19572__auto___24999 = (0);
while(true){
if((i__19572__auto___24999 < len__19571__auto___24998)){
args24995.push((arguments[i__19572__auto___24999]));

var G__25000 = (i__19572__auto___24999 + (1));
i__19572__auto___24999 = G__25000;
continue;
} else {
}
break;
}

var G__24997 = args24995.length;
switch (G__24997) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24995.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args25002 = [];
var len__19571__auto___25005 = arguments.length;
var i__19572__auto___25006 = (0);
while(true){
if((i__19572__auto___25006 < len__19571__auto___25005)){
args25002.push((arguments[i__19572__auto___25006]));

var G__25007 = (i__19572__auto___25006 + (1));
i__19572__auto___25006 = G__25007;
continue;
} else {
}
break;
}

var G__25004 = args25002.length;
switch (G__25004) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25002.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args25009 = [];
var len__19571__auto___25060 = arguments.length;
var i__19572__auto___25061 = (0);
while(true){
if((i__19572__auto___25061 < len__19571__auto___25060)){
args25009.push((arguments[i__19572__auto___25061]));

var G__25062 = (i__19572__auto___25061 + (1));
i__19572__auto___25061 = G__25062;
continue;
} else {
}
break;
}

var G__25011 = args25009.length;
switch (G__25011) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25009.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22469__auto___25064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto___25064,out){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto___25064,out){
return (function (state_25035){
var state_val_25036 = (state_25035[(1)]);
if((state_val_25036 === (7))){
var inst_25030 = (state_25035[(2)]);
var state_25035__$1 = state_25035;
var statearr_25037_25065 = state_25035__$1;
(statearr_25037_25065[(2)] = inst_25030);

(statearr_25037_25065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25036 === (1))){
var inst_25012 = null;
var state_25035__$1 = (function (){var statearr_25038 = state_25035;
(statearr_25038[(7)] = inst_25012);

return statearr_25038;
})();
var statearr_25039_25066 = state_25035__$1;
(statearr_25039_25066[(2)] = null);

(statearr_25039_25066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25036 === (4))){
var inst_25015 = (state_25035[(8)]);
var inst_25015__$1 = (state_25035[(2)]);
var inst_25016 = (inst_25015__$1 == null);
var inst_25017 = cljs.core.not.call(null,inst_25016);
var state_25035__$1 = (function (){var statearr_25040 = state_25035;
(statearr_25040[(8)] = inst_25015__$1);

return statearr_25040;
})();
if(inst_25017){
var statearr_25041_25067 = state_25035__$1;
(statearr_25041_25067[(1)] = (5));

} else {
var statearr_25042_25068 = state_25035__$1;
(statearr_25042_25068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25036 === (6))){
var state_25035__$1 = state_25035;
var statearr_25043_25069 = state_25035__$1;
(statearr_25043_25069[(2)] = null);

(statearr_25043_25069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25036 === (3))){
var inst_25032 = (state_25035[(2)]);
var inst_25033 = cljs.core.async.close_BANG_.call(null,out);
var state_25035__$1 = (function (){var statearr_25044 = state_25035;
(statearr_25044[(9)] = inst_25032);

return statearr_25044;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25035__$1,inst_25033);
} else {
if((state_val_25036 === (2))){
var state_25035__$1 = state_25035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25035__$1,(4),ch);
} else {
if((state_val_25036 === (11))){
var inst_25015 = (state_25035[(8)]);
var inst_25024 = (state_25035[(2)]);
var inst_25012 = inst_25015;
var state_25035__$1 = (function (){var statearr_25045 = state_25035;
(statearr_25045[(10)] = inst_25024);

(statearr_25045[(7)] = inst_25012);

return statearr_25045;
})();
var statearr_25046_25070 = state_25035__$1;
(statearr_25046_25070[(2)] = null);

(statearr_25046_25070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25036 === (9))){
var inst_25015 = (state_25035[(8)]);
var state_25035__$1 = state_25035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25035__$1,(11),out,inst_25015);
} else {
if((state_val_25036 === (5))){
var inst_25015 = (state_25035[(8)]);
var inst_25012 = (state_25035[(7)]);
var inst_25019 = cljs.core._EQ_.call(null,inst_25015,inst_25012);
var state_25035__$1 = state_25035;
if(inst_25019){
var statearr_25048_25071 = state_25035__$1;
(statearr_25048_25071[(1)] = (8));

} else {
var statearr_25049_25072 = state_25035__$1;
(statearr_25049_25072[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25036 === (10))){
var inst_25027 = (state_25035[(2)]);
var state_25035__$1 = state_25035;
var statearr_25050_25073 = state_25035__$1;
(statearr_25050_25073[(2)] = inst_25027);

(statearr_25050_25073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25036 === (8))){
var inst_25012 = (state_25035[(7)]);
var tmp25047 = inst_25012;
var inst_25012__$1 = tmp25047;
var state_25035__$1 = (function (){var statearr_25051 = state_25035;
(statearr_25051[(7)] = inst_25012__$1);

return statearr_25051;
})();
var statearr_25052_25074 = state_25035__$1;
(statearr_25052_25074[(2)] = null);

(statearr_25052_25074[(1)] = (2));


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
});})(c__22469__auto___25064,out))
;
return ((function (switch__22357__auto__,c__22469__auto___25064,out){
return (function() {
var cljs$core$async$state_machine__22358__auto__ = null;
var cljs$core$async$state_machine__22358__auto____0 = (function (){
var statearr_25056 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25056[(0)] = cljs$core$async$state_machine__22358__auto__);

(statearr_25056[(1)] = (1));

return statearr_25056;
});
var cljs$core$async$state_machine__22358__auto____1 = (function (state_25035){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_25035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e25057){if((e25057 instanceof Object)){
var ex__22361__auto__ = e25057;
var statearr_25058_25075 = state_25035;
(statearr_25058_25075[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25076 = state_25035;
state_25035 = G__25076;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$state_machine__22358__auto__ = function(state_25035){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22358__auto____1.call(this,state_25035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22358__auto____0;
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22358__auto____1;
return cljs$core$async$state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto___25064,out))
})();
var state__22471__auto__ = (function (){var statearr_25059 = f__22470__auto__.call(null);
(statearr_25059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___25064);

return statearr_25059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto___25064,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args25077 = [];
var len__19571__auto___25147 = arguments.length;
var i__19572__auto___25148 = (0);
while(true){
if((i__19572__auto___25148 < len__19571__auto___25147)){
args25077.push((arguments[i__19572__auto___25148]));

var G__25149 = (i__19572__auto___25148 + (1));
i__19572__auto___25148 = G__25149;
continue;
} else {
}
break;
}

var G__25079 = args25077.length;
switch (G__25079) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25077.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22469__auto___25151 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto___25151,out){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto___25151,out){
return (function (state_25117){
var state_val_25118 = (state_25117[(1)]);
if((state_val_25118 === (7))){
var inst_25113 = (state_25117[(2)]);
var state_25117__$1 = state_25117;
var statearr_25119_25152 = state_25117__$1;
(statearr_25119_25152[(2)] = inst_25113);

(statearr_25119_25152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25118 === (1))){
var inst_25080 = (new Array(n));
var inst_25081 = inst_25080;
var inst_25082 = (0);
var state_25117__$1 = (function (){var statearr_25120 = state_25117;
(statearr_25120[(7)] = inst_25081);

(statearr_25120[(8)] = inst_25082);

return statearr_25120;
})();
var statearr_25121_25153 = state_25117__$1;
(statearr_25121_25153[(2)] = null);

(statearr_25121_25153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25118 === (4))){
var inst_25085 = (state_25117[(9)]);
var inst_25085__$1 = (state_25117[(2)]);
var inst_25086 = (inst_25085__$1 == null);
var inst_25087 = cljs.core.not.call(null,inst_25086);
var state_25117__$1 = (function (){var statearr_25122 = state_25117;
(statearr_25122[(9)] = inst_25085__$1);

return statearr_25122;
})();
if(inst_25087){
var statearr_25123_25154 = state_25117__$1;
(statearr_25123_25154[(1)] = (5));

} else {
var statearr_25124_25155 = state_25117__$1;
(statearr_25124_25155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25118 === (15))){
var inst_25107 = (state_25117[(2)]);
var state_25117__$1 = state_25117;
var statearr_25125_25156 = state_25117__$1;
(statearr_25125_25156[(2)] = inst_25107);

(statearr_25125_25156[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25118 === (13))){
var state_25117__$1 = state_25117;
var statearr_25126_25157 = state_25117__$1;
(statearr_25126_25157[(2)] = null);

(statearr_25126_25157[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25118 === (6))){
var inst_25082 = (state_25117[(8)]);
var inst_25103 = (inst_25082 > (0));
var state_25117__$1 = state_25117;
if(cljs.core.truth_(inst_25103)){
var statearr_25127_25158 = state_25117__$1;
(statearr_25127_25158[(1)] = (12));

} else {
var statearr_25128_25159 = state_25117__$1;
(statearr_25128_25159[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25118 === (3))){
var inst_25115 = (state_25117[(2)]);
var state_25117__$1 = state_25117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25117__$1,inst_25115);
} else {
if((state_val_25118 === (12))){
var inst_25081 = (state_25117[(7)]);
var inst_25105 = cljs.core.vec.call(null,inst_25081);
var state_25117__$1 = state_25117;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25117__$1,(15),out,inst_25105);
} else {
if((state_val_25118 === (2))){
var state_25117__$1 = state_25117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25117__$1,(4),ch);
} else {
if((state_val_25118 === (11))){
var inst_25097 = (state_25117[(2)]);
var inst_25098 = (new Array(n));
var inst_25081 = inst_25098;
var inst_25082 = (0);
var state_25117__$1 = (function (){var statearr_25129 = state_25117;
(statearr_25129[(7)] = inst_25081);

(statearr_25129[(10)] = inst_25097);

(statearr_25129[(8)] = inst_25082);

return statearr_25129;
})();
var statearr_25130_25160 = state_25117__$1;
(statearr_25130_25160[(2)] = null);

(statearr_25130_25160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25118 === (9))){
var inst_25081 = (state_25117[(7)]);
var inst_25095 = cljs.core.vec.call(null,inst_25081);
var state_25117__$1 = state_25117;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25117__$1,(11),out,inst_25095);
} else {
if((state_val_25118 === (5))){
var inst_25090 = (state_25117[(11)]);
var inst_25081 = (state_25117[(7)]);
var inst_25085 = (state_25117[(9)]);
var inst_25082 = (state_25117[(8)]);
var inst_25089 = (inst_25081[inst_25082] = inst_25085);
var inst_25090__$1 = (inst_25082 + (1));
var inst_25091 = (inst_25090__$1 < n);
var state_25117__$1 = (function (){var statearr_25131 = state_25117;
(statearr_25131[(11)] = inst_25090__$1);

(statearr_25131[(12)] = inst_25089);

return statearr_25131;
})();
if(cljs.core.truth_(inst_25091)){
var statearr_25132_25161 = state_25117__$1;
(statearr_25132_25161[(1)] = (8));

} else {
var statearr_25133_25162 = state_25117__$1;
(statearr_25133_25162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25118 === (14))){
var inst_25110 = (state_25117[(2)]);
var inst_25111 = cljs.core.async.close_BANG_.call(null,out);
var state_25117__$1 = (function (){var statearr_25135 = state_25117;
(statearr_25135[(13)] = inst_25110);

return statearr_25135;
})();
var statearr_25136_25163 = state_25117__$1;
(statearr_25136_25163[(2)] = inst_25111);

(statearr_25136_25163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25118 === (10))){
var inst_25101 = (state_25117[(2)]);
var state_25117__$1 = state_25117;
var statearr_25137_25164 = state_25117__$1;
(statearr_25137_25164[(2)] = inst_25101);

(statearr_25137_25164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25118 === (8))){
var inst_25090 = (state_25117[(11)]);
var inst_25081 = (state_25117[(7)]);
var tmp25134 = inst_25081;
var inst_25081__$1 = tmp25134;
var inst_25082 = inst_25090;
var state_25117__$1 = (function (){var statearr_25138 = state_25117;
(statearr_25138[(7)] = inst_25081__$1);

(statearr_25138[(8)] = inst_25082);

return statearr_25138;
})();
var statearr_25139_25165 = state_25117__$1;
(statearr_25139_25165[(2)] = null);

(statearr_25139_25165[(1)] = (2));


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
});})(c__22469__auto___25151,out))
;
return ((function (switch__22357__auto__,c__22469__auto___25151,out){
return (function() {
var cljs$core$async$state_machine__22358__auto__ = null;
var cljs$core$async$state_machine__22358__auto____0 = (function (){
var statearr_25143 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25143[(0)] = cljs$core$async$state_machine__22358__auto__);

(statearr_25143[(1)] = (1));

return statearr_25143;
});
var cljs$core$async$state_machine__22358__auto____1 = (function (state_25117){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_25117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e25144){if((e25144 instanceof Object)){
var ex__22361__auto__ = e25144;
var statearr_25145_25166 = state_25117;
(statearr_25145_25166[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25167 = state_25117;
state_25117 = G__25167;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$state_machine__22358__auto__ = function(state_25117){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22358__auto____1.call(this,state_25117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22358__auto____0;
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22358__auto____1;
return cljs$core$async$state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto___25151,out))
})();
var state__22471__auto__ = (function (){var statearr_25146 = f__22470__auto__.call(null);
(statearr_25146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___25151);

return statearr_25146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto___25151,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args25168 = [];
var len__19571__auto___25242 = arguments.length;
var i__19572__auto___25243 = (0);
while(true){
if((i__19572__auto___25243 < len__19571__auto___25242)){
args25168.push((arguments[i__19572__auto___25243]));

var G__25244 = (i__19572__auto___25243 + (1));
i__19572__auto___25243 = G__25244;
continue;
} else {
}
break;
}

var G__25170 = args25168.length;
switch (G__25170) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25168.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22469__auto___25246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto___25246,out){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto___25246,out){
return (function (state_25212){
var state_val_25213 = (state_25212[(1)]);
if((state_val_25213 === (7))){
var inst_25208 = (state_25212[(2)]);
var state_25212__$1 = state_25212;
var statearr_25214_25247 = state_25212__$1;
(statearr_25214_25247[(2)] = inst_25208);

(statearr_25214_25247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (1))){
var inst_25171 = [];
var inst_25172 = inst_25171;
var inst_25173 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25212__$1 = (function (){var statearr_25215 = state_25212;
(statearr_25215[(7)] = inst_25173);

(statearr_25215[(8)] = inst_25172);

return statearr_25215;
})();
var statearr_25216_25248 = state_25212__$1;
(statearr_25216_25248[(2)] = null);

(statearr_25216_25248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (4))){
var inst_25176 = (state_25212[(9)]);
var inst_25176__$1 = (state_25212[(2)]);
var inst_25177 = (inst_25176__$1 == null);
var inst_25178 = cljs.core.not.call(null,inst_25177);
var state_25212__$1 = (function (){var statearr_25217 = state_25212;
(statearr_25217[(9)] = inst_25176__$1);

return statearr_25217;
})();
if(inst_25178){
var statearr_25218_25249 = state_25212__$1;
(statearr_25218_25249[(1)] = (5));

} else {
var statearr_25219_25250 = state_25212__$1;
(statearr_25219_25250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (15))){
var inst_25202 = (state_25212[(2)]);
var state_25212__$1 = state_25212;
var statearr_25220_25251 = state_25212__$1;
(statearr_25220_25251[(2)] = inst_25202);

(statearr_25220_25251[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (13))){
var state_25212__$1 = state_25212;
var statearr_25221_25252 = state_25212__$1;
(statearr_25221_25252[(2)] = null);

(statearr_25221_25252[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (6))){
var inst_25172 = (state_25212[(8)]);
var inst_25197 = inst_25172.length;
var inst_25198 = (inst_25197 > (0));
var state_25212__$1 = state_25212;
if(cljs.core.truth_(inst_25198)){
var statearr_25222_25253 = state_25212__$1;
(statearr_25222_25253[(1)] = (12));

} else {
var statearr_25223_25254 = state_25212__$1;
(statearr_25223_25254[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (3))){
var inst_25210 = (state_25212[(2)]);
var state_25212__$1 = state_25212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25212__$1,inst_25210);
} else {
if((state_val_25213 === (12))){
var inst_25172 = (state_25212[(8)]);
var inst_25200 = cljs.core.vec.call(null,inst_25172);
var state_25212__$1 = state_25212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25212__$1,(15),out,inst_25200);
} else {
if((state_val_25213 === (2))){
var state_25212__$1 = state_25212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25212__$1,(4),ch);
} else {
if((state_val_25213 === (11))){
var inst_25180 = (state_25212[(10)]);
var inst_25176 = (state_25212[(9)]);
var inst_25190 = (state_25212[(2)]);
var inst_25191 = [];
var inst_25192 = inst_25191.push(inst_25176);
var inst_25172 = inst_25191;
var inst_25173 = inst_25180;
var state_25212__$1 = (function (){var statearr_25224 = state_25212;
(statearr_25224[(11)] = inst_25190);

(statearr_25224[(7)] = inst_25173);

(statearr_25224[(12)] = inst_25192);

(statearr_25224[(8)] = inst_25172);

return statearr_25224;
})();
var statearr_25225_25255 = state_25212__$1;
(statearr_25225_25255[(2)] = null);

(statearr_25225_25255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (9))){
var inst_25172 = (state_25212[(8)]);
var inst_25188 = cljs.core.vec.call(null,inst_25172);
var state_25212__$1 = state_25212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25212__$1,(11),out,inst_25188);
} else {
if((state_val_25213 === (5))){
var inst_25173 = (state_25212[(7)]);
var inst_25180 = (state_25212[(10)]);
var inst_25176 = (state_25212[(9)]);
var inst_25180__$1 = f.call(null,inst_25176);
var inst_25181 = cljs.core._EQ_.call(null,inst_25180__$1,inst_25173);
var inst_25182 = cljs.core.keyword_identical_QMARK_.call(null,inst_25173,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25183 = (inst_25181) || (inst_25182);
var state_25212__$1 = (function (){var statearr_25226 = state_25212;
(statearr_25226[(10)] = inst_25180__$1);

return statearr_25226;
})();
if(cljs.core.truth_(inst_25183)){
var statearr_25227_25256 = state_25212__$1;
(statearr_25227_25256[(1)] = (8));

} else {
var statearr_25228_25257 = state_25212__$1;
(statearr_25228_25257[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (14))){
var inst_25205 = (state_25212[(2)]);
var inst_25206 = cljs.core.async.close_BANG_.call(null,out);
var state_25212__$1 = (function (){var statearr_25230 = state_25212;
(statearr_25230[(13)] = inst_25205);

return statearr_25230;
})();
var statearr_25231_25258 = state_25212__$1;
(statearr_25231_25258[(2)] = inst_25206);

(statearr_25231_25258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (10))){
var inst_25195 = (state_25212[(2)]);
var state_25212__$1 = state_25212;
var statearr_25232_25259 = state_25212__$1;
(statearr_25232_25259[(2)] = inst_25195);

(statearr_25232_25259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25213 === (8))){
var inst_25172 = (state_25212[(8)]);
var inst_25180 = (state_25212[(10)]);
var inst_25176 = (state_25212[(9)]);
var inst_25185 = inst_25172.push(inst_25176);
var tmp25229 = inst_25172;
var inst_25172__$1 = tmp25229;
var inst_25173 = inst_25180;
var state_25212__$1 = (function (){var statearr_25233 = state_25212;
(statearr_25233[(7)] = inst_25173);

(statearr_25233[(8)] = inst_25172__$1);

(statearr_25233[(14)] = inst_25185);

return statearr_25233;
})();
var statearr_25234_25260 = state_25212__$1;
(statearr_25234_25260[(2)] = null);

(statearr_25234_25260[(1)] = (2));


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
});})(c__22469__auto___25246,out))
;
return ((function (switch__22357__auto__,c__22469__auto___25246,out){
return (function() {
var cljs$core$async$state_machine__22358__auto__ = null;
var cljs$core$async$state_machine__22358__auto____0 = (function (){
var statearr_25238 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25238[(0)] = cljs$core$async$state_machine__22358__auto__);

(statearr_25238[(1)] = (1));

return statearr_25238;
});
var cljs$core$async$state_machine__22358__auto____1 = (function (state_25212){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_25212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e25239){if((e25239 instanceof Object)){
var ex__22361__auto__ = e25239;
var statearr_25240_25261 = state_25212;
(statearr_25240_25261[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25262 = state_25212;
state_25212 = G__25262;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$state_machine__22358__auto__ = function(state_25212){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22358__auto____1.call(this,state_25212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22358__auto____0;
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22358__auto____1;
return cljs$core$async$state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto___25246,out))
})();
var state__22471__auto__ = (function (){var statearr_25241 = f__22470__auto__.call(null);
(statearr_25241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___25246);

return statearr_25241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto___25246,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1466621019879