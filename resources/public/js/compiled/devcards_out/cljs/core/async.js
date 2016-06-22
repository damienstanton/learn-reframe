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
var args33761 = [];
var len__19571__auto___33767 = arguments.length;
var i__19572__auto___33768 = (0);
while(true){
if((i__19572__auto___33768 < len__19571__auto___33767)){
args33761.push((arguments[i__19572__auto___33768]));

var G__33769 = (i__19572__auto___33768 + (1));
i__19572__auto___33768 = G__33769;
continue;
} else {
}
break;
}

var G__33763 = args33761.length;
switch (G__33763) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33761.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async33764 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33764 = (function (f,blockable,meta33765){
this.f = f;
this.blockable = blockable;
this.meta33765 = meta33765;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33766,meta33765__$1){
var self__ = this;
var _33766__$1 = this;
return (new cljs.core.async.t_cljs$core$async33764(self__.f,self__.blockable,meta33765__$1));
});

cljs.core.async.t_cljs$core$async33764.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33766){
var self__ = this;
var _33766__$1 = this;
return self__.meta33765;
});

cljs.core.async.t_cljs$core$async33764.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33764.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33764.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33764.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33764.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33765","meta33765",1194397618,null)], null);
});

cljs.core.async.t_cljs$core$async33764.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33764.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33764";

cljs.core.async.t_cljs$core$async33764.cljs$lang$ctorPrWriter = (function (this__19102__auto__,writer__19103__auto__,opt__19104__auto__){
return cljs.core._write.call(null,writer__19103__auto__,"cljs.core.async/t_cljs$core$async33764");
});

cljs.core.async.__GT_t_cljs$core$async33764 = (function cljs$core$async$__GT_t_cljs$core$async33764(f__$1,blockable__$1,meta33765){
return (new cljs.core.async.t_cljs$core$async33764(f__$1,blockable__$1,meta33765));
});

}

return (new cljs.core.async.t_cljs$core$async33764(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args33773 = [];
var len__19571__auto___33776 = arguments.length;
var i__19572__auto___33777 = (0);
while(true){
if((i__19572__auto___33777 < len__19571__auto___33776)){
args33773.push((arguments[i__19572__auto___33777]));

var G__33778 = (i__19572__auto___33777 + (1));
i__19572__auto___33777 = G__33778;
continue;
} else {
}
break;
}

var G__33775 = args33773.length;
switch (G__33775) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33773.length)].join('')));

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
var args33780 = [];
var len__19571__auto___33783 = arguments.length;
var i__19572__auto___33784 = (0);
while(true){
if((i__19572__auto___33784 < len__19571__auto___33783)){
args33780.push((arguments[i__19572__auto___33784]));

var G__33785 = (i__19572__auto___33784 + (1));
i__19572__auto___33784 = G__33785;
continue;
} else {
}
break;
}

var G__33782 = args33780.length;
switch (G__33782) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33780.length)].join('')));

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
var args33787 = [];
var len__19571__auto___33790 = arguments.length;
var i__19572__auto___33791 = (0);
while(true){
if((i__19572__auto___33791 < len__19571__auto___33790)){
args33787.push((arguments[i__19572__auto___33791]));

var G__33792 = (i__19572__auto___33791 + (1));
i__19572__auto___33791 = G__33792;
continue;
} else {
}
break;
}

var G__33789 = args33787.length;
switch (G__33789) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33787.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_33794 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33794);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33794,ret){
return (function (){
return fn1.call(null,val_33794);
});})(val_33794,ret))
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
var args33795 = [];
var len__19571__auto___33798 = arguments.length;
var i__19572__auto___33799 = (0);
while(true){
if((i__19572__auto___33799 < len__19571__auto___33798)){
args33795.push((arguments[i__19572__auto___33799]));

var G__33800 = (i__19572__auto___33799 + (1));
i__19572__auto___33799 = G__33800;
continue;
} else {
}
break;
}

var G__33797 = args33795.length;
switch (G__33797) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33795.length)].join('')));

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
var n__19411__auto___33802 = n;
var x_33803 = (0);
while(true){
if((x_33803 < n__19411__auto___33802)){
(a[x_33803] = (0));

var G__33804 = (x_33803 + (1));
x_33803 = G__33804;
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

var G__33805 = (i + (1));
i = G__33805;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async33809 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33809 = (function (alt_flag,flag,meta33810){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta33810 = meta33810;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33811,meta33810__$1){
var self__ = this;
var _33811__$1 = this;
return (new cljs.core.async.t_cljs$core$async33809(self__.alt_flag,self__.flag,meta33810__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33809.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33811){
var self__ = this;
var _33811__$1 = this;
return self__.meta33810;
});})(flag))
;

cljs.core.async.t_cljs$core$async33809.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33809.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33809.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33809.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33809.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33810","meta33810",-1222040575,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33809.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33809.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33809";

cljs.core.async.t_cljs$core$async33809.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19102__auto__,writer__19103__auto__,opt__19104__auto__){
return cljs.core._write.call(null,writer__19103__auto__,"cljs.core.async/t_cljs$core$async33809");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async33809 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33809(alt_flag__$1,flag__$1,meta33810){
return (new cljs.core.async.t_cljs$core$async33809(alt_flag__$1,flag__$1,meta33810));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33809(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async33815 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33815 = (function (alt_handler,flag,cb,meta33816){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta33816 = meta33816;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33817,meta33816__$1){
var self__ = this;
var _33817__$1 = this;
return (new cljs.core.async.t_cljs$core$async33815(self__.alt_handler,self__.flag,self__.cb,meta33816__$1));
});

cljs.core.async.t_cljs$core$async33815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33817){
var self__ = this;
var _33817__$1 = this;
return self__.meta33816;
});

cljs.core.async.t_cljs$core$async33815.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33815.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async33815.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33815.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33815.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33816","meta33816",447592747,null)], null);
});

cljs.core.async.t_cljs$core$async33815.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33815.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33815";

cljs.core.async.t_cljs$core$async33815.cljs$lang$ctorPrWriter = (function (this__19102__auto__,writer__19103__auto__,opt__19104__auto__){
return cljs.core._write.call(null,writer__19103__auto__,"cljs.core.async/t_cljs$core$async33815");
});

cljs.core.async.__GT_t_cljs$core$async33815 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33815(alt_handler__$1,flag__$1,cb__$1,meta33816){
return (new cljs.core.async.t_cljs$core$async33815(alt_handler__$1,flag__$1,cb__$1,meta33816));
});

}

return (new cljs.core.async.t_cljs$core$async33815(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__33818_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33818_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33819_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33819_SHARP_,port], null));
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
var G__33820 = (i + (1));
i = G__33820;
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
var len__19571__auto___33826 = arguments.length;
var i__19572__auto___33827 = (0);
while(true){
if((i__19572__auto___33827 < len__19571__auto___33826)){
args__19578__auto__.push((arguments[i__19572__auto___33827]));

var G__33828 = (i__19572__auto___33827 + (1));
i__19572__auto___33827 = G__33828;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((1) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19579__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33823){
var map__33824 = p__33823;
var map__33824__$1 = ((((!((map__33824 == null)))?((((map__33824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33824):map__33824);
var opts = map__33824__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33821){
var G__33822 = cljs.core.first.call(null,seq33821);
var seq33821__$1 = cljs.core.next.call(null,seq33821);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33822,seq33821__$1);
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
var args33829 = [];
var len__19571__auto___33879 = arguments.length;
var i__19572__auto___33880 = (0);
while(true){
if((i__19572__auto___33880 < len__19571__auto___33879)){
args33829.push((arguments[i__19572__auto___33880]));

var G__33881 = (i__19572__auto___33880 + (1));
i__19572__auto___33880 = G__33881;
continue;
} else {
}
break;
}

var G__33831 = args33829.length;
switch (G__33831) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33829.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22469__auto___33883 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto___33883){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto___33883){
return (function (state_33855){
var state_val_33856 = (state_33855[(1)]);
if((state_val_33856 === (7))){
var inst_33851 = (state_33855[(2)]);
var state_33855__$1 = state_33855;
var statearr_33857_33884 = state_33855__$1;
(statearr_33857_33884[(2)] = inst_33851);

(statearr_33857_33884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33856 === (1))){
var state_33855__$1 = state_33855;
var statearr_33858_33885 = state_33855__$1;
(statearr_33858_33885[(2)] = null);

(statearr_33858_33885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33856 === (4))){
var inst_33834 = (state_33855[(7)]);
var inst_33834__$1 = (state_33855[(2)]);
var inst_33835 = (inst_33834__$1 == null);
var state_33855__$1 = (function (){var statearr_33859 = state_33855;
(statearr_33859[(7)] = inst_33834__$1);

return statearr_33859;
})();
if(cljs.core.truth_(inst_33835)){
var statearr_33860_33886 = state_33855__$1;
(statearr_33860_33886[(1)] = (5));

} else {
var statearr_33861_33887 = state_33855__$1;
(statearr_33861_33887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33856 === (13))){
var state_33855__$1 = state_33855;
var statearr_33862_33888 = state_33855__$1;
(statearr_33862_33888[(2)] = null);

(statearr_33862_33888[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33856 === (6))){
var inst_33834 = (state_33855[(7)]);
var state_33855__$1 = state_33855;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33855__$1,(11),to,inst_33834);
} else {
if((state_val_33856 === (3))){
var inst_33853 = (state_33855[(2)]);
var state_33855__$1 = state_33855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33855__$1,inst_33853);
} else {
if((state_val_33856 === (12))){
var state_33855__$1 = state_33855;
var statearr_33863_33889 = state_33855__$1;
(statearr_33863_33889[(2)] = null);

(statearr_33863_33889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33856 === (2))){
var state_33855__$1 = state_33855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33855__$1,(4),from);
} else {
if((state_val_33856 === (11))){
var inst_33844 = (state_33855[(2)]);
var state_33855__$1 = state_33855;
if(cljs.core.truth_(inst_33844)){
var statearr_33864_33890 = state_33855__$1;
(statearr_33864_33890[(1)] = (12));

} else {
var statearr_33865_33891 = state_33855__$1;
(statearr_33865_33891[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33856 === (9))){
var state_33855__$1 = state_33855;
var statearr_33866_33892 = state_33855__$1;
(statearr_33866_33892[(2)] = null);

(statearr_33866_33892[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33856 === (5))){
var state_33855__$1 = state_33855;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33867_33893 = state_33855__$1;
(statearr_33867_33893[(1)] = (8));

} else {
var statearr_33868_33894 = state_33855__$1;
(statearr_33868_33894[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33856 === (14))){
var inst_33849 = (state_33855[(2)]);
var state_33855__$1 = state_33855;
var statearr_33869_33895 = state_33855__$1;
(statearr_33869_33895[(2)] = inst_33849);

(statearr_33869_33895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33856 === (10))){
var inst_33841 = (state_33855[(2)]);
var state_33855__$1 = state_33855;
var statearr_33870_33896 = state_33855__$1;
(statearr_33870_33896[(2)] = inst_33841);

(statearr_33870_33896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33856 === (8))){
var inst_33838 = cljs.core.async.close_BANG_.call(null,to);
var state_33855__$1 = state_33855;
var statearr_33871_33897 = state_33855__$1;
(statearr_33871_33897[(2)] = inst_33838);

(statearr_33871_33897[(1)] = (10));


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
});})(c__22469__auto___33883))
;
return ((function (switch__22357__auto__,c__22469__auto___33883){
return (function() {
var cljs$core$async$state_machine__22358__auto__ = null;
var cljs$core$async$state_machine__22358__auto____0 = (function (){
var statearr_33875 = [null,null,null,null,null,null,null,null];
(statearr_33875[(0)] = cljs$core$async$state_machine__22358__auto__);

(statearr_33875[(1)] = (1));

return statearr_33875;
});
var cljs$core$async$state_machine__22358__auto____1 = (function (state_33855){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_33855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e33876){if((e33876 instanceof Object)){
var ex__22361__auto__ = e33876;
var statearr_33877_33898 = state_33855;
(statearr_33877_33898[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33899 = state_33855;
state_33855 = G__33899;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$state_machine__22358__auto__ = function(state_33855){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22358__auto____1.call(this,state_33855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22358__auto____0;
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22358__auto____1;
return cljs$core$async$state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto___33883))
})();
var state__22471__auto__ = (function (){var statearr_33878 = f__22470__auto__.call(null);
(statearr_33878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___33883);

return statearr_33878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto___33883))
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
return (function (p__34087){
var vec__34088 = p__34087;
var v = cljs.core.nth.call(null,vec__34088,(0),null);
var p = cljs.core.nth.call(null,vec__34088,(1),null);
var job = vec__34088;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22469__auto___34274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto___34274,res,vec__34088,v,p,job,jobs,results){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto___34274,res,vec__34088,v,p,job,jobs,results){
return (function (state_34095){
var state_val_34096 = (state_34095[(1)]);
if((state_val_34096 === (1))){
var state_34095__$1 = state_34095;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34095__$1,(2),res,v);
} else {
if((state_val_34096 === (2))){
var inst_34092 = (state_34095[(2)]);
var inst_34093 = cljs.core.async.close_BANG_.call(null,res);
var state_34095__$1 = (function (){var statearr_34097 = state_34095;
(statearr_34097[(7)] = inst_34092);

return statearr_34097;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34095__$1,inst_34093);
} else {
return null;
}
}
});})(c__22469__auto___34274,res,vec__34088,v,p,job,jobs,results))
;
return ((function (switch__22357__auto__,c__22469__auto___34274,res,vec__34088,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____0 = (function (){
var statearr_34101 = [null,null,null,null,null,null,null,null];
(statearr_34101[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__);

(statearr_34101[(1)] = (1));

return statearr_34101;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____1 = (function (state_34095){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_34095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e34102){if((e34102 instanceof Object)){
var ex__22361__auto__ = e34102;
var statearr_34103_34275 = state_34095;
(statearr_34103_34275[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34276 = state_34095;
state_34095 = G__34276;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__ = function(state_34095){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____1.call(this,state_34095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto___34274,res,vec__34088,v,p,job,jobs,results))
})();
var state__22471__auto__ = (function (){var statearr_34104 = f__22470__auto__.call(null);
(statearr_34104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___34274);

return statearr_34104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto___34274,res,vec__34088,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34105){
var vec__34106 = p__34105;
var v = cljs.core.nth.call(null,vec__34106,(0),null);
var p = cljs.core.nth.call(null,vec__34106,(1),null);
var job = vec__34106;
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
var n__19411__auto___34277 = n;
var __34278 = (0);
while(true){
if((__34278 < n__19411__auto___34277)){
var G__34109_34279 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__34109_34279) {
case "compute":
var c__22469__auto___34281 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34278,c__22469__auto___34281,G__34109_34279,n__19411__auto___34277,jobs,results,process,async){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (__34278,c__22469__auto___34281,G__34109_34279,n__19411__auto___34277,jobs,results,process,async){
return (function (state_34122){
var state_val_34123 = (state_34122[(1)]);
if((state_val_34123 === (1))){
var state_34122__$1 = state_34122;
var statearr_34124_34282 = state_34122__$1;
(statearr_34124_34282[(2)] = null);

(statearr_34124_34282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (2))){
var state_34122__$1 = state_34122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34122__$1,(4),jobs);
} else {
if((state_val_34123 === (3))){
var inst_34120 = (state_34122[(2)]);
var state_34122__$1 = state_34122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34122__$1,inst_34120);
} else {
if((state_val_34123 === (4))){
var inst_34112 = (state_34122[(2)]);
var inst_34113 = process.call(null,inst_34112);
var state_34122__$1 = state_34122;
if(cljs.core.truth_(inst_34113)){
var statearr_34125_34283 = state_34122__$1;
(statearr_34125_34283[(1)] = (5));

} else {
var statearr_34126_34284 = state_34122__$1;
(statearr_34126_34284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (5))){
var state_34122__$1 = state_34122;
var statearr_34127_34285 = state_34122__$1;
(statearr_34127_34285[(2)] = null);

(statearr_34127_34285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (6))){
var state_34122__$1 = state_34122;
var statearr_34128_34286 = state_34122__$1;
(statearr_34128_34286[(2)] = null);

(statearr_34128_34286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (7))){
var inst_34118 = (state_34122[(2)]);
var state_34122__$1 = state_34122;
var statearr_34129_34287 = state_34122__$1;
(statearr_34129_34287[(2)] = inst_34118);

(statearr_34129_34287[(1)] = (3));


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
});})(__34278,c__22469__auto___34281,G__34109_34279,n__19411__auto___34277,jobs,results,process,async))
;
return ((function (__34278,switch__22357__auto__,c__22469__auto___34281,G__34109_34279,n__19411__auto___34277,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____0 = (function (){
var statearr_34133 = [null,null,null,null,null,null,null];
(statearr_34133[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__);

(statearr_34133[(1)] = (1));

return statearr_34133;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____1 = (function (state_34122){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_34122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e34134){if((e34134 instanceof Object)){
var ex__22361__auto__ = e34134;
var statearr_34135_34288 = state_34122;
(statearr_34135_34288[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34289 = state_34122;
state_34122 = G__34289;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__ = function(state_34122){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____1.call(this,state_34122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__;
})()
;})(__34278,switch__22357__auto__,c__22469__auto___34281,G__34109_34279,n__19411__auto___34277,jobs,results,process,async))
})();
var state__22471__auto__ = (function (){var statearr_34136 = f__22470__auto__.call(null);
(statearr_34136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___34281);

return statearr_34136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(__34278,c__22469__auto___34281,G__34109_34279,n__19411__auto___34277,jobs,results,process,async))
);


break;
case "async":
var c__22469__auto___34290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34278,c__22469__auto___34290,G__34109_34279,n__19411__auto___34277,jobs,results,process,async){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (__34278,c__22469__auto___34290,G__34109_34279,n__19411__auto___34277,jobs,results,process,async){
return (function (state_34149){
var state_val_34150 = (state_34149[(1)]);
if((state_val_34150 === (1))){
var state_34149__$1 = state_34149;
var statearr_34151_34291 = state_34149__$1;
(statearr_34151_34291[(2)] = null);

(statearr_34151_34291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (2))){
var state_34149__$1 = state_34149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34149__$1,(4),jobs);
} else {
if((state_val_34150 === (3))){
var inst_34147 = (state_34149[(2)]);
var state_34149__$1 = state_34149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34149__$1,inst_34147);
} else {
if((state_val_34150 === (4))){
var inst_34139 = (state_34149[(2)]);
var inst_34140 = async.call(null,inst_34139);
var state_34149__$1 = state_34149;
if(cljs.core.truth_(inst_34140)){
var statearr_34152_34292 = state_34149__$1;
(statearr_34152_34292[(1)] = (5));

} else {
var statearr_34153_34293 = state_34149__$1;
(statearr_34153_34293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (5))){
var state_34149__$1 = state_34149;
var statearr_34154_34294 = state_34149__$1;
(statearr_34154_34294[(2)] = null);

(statearr_34154_34294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (6))){
var state_34149__$1 = state_34149;
var statearr_34155_34295 = state_34149__$1;
(statearr_34155_34295[(2)] = null);

(statearr_34155_34295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (7))){
var inst_34145 = (state_34149[(2)]);
var state_34149__$1 = state_34149;
var statearr_34156_34296 = state_34149__$1;
(statearr_34156_34296[(2)] = inst_34145);

(statearr_34156_34296[(1)] = (3));


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
});})(__34278,c__22469__auto___34290,G__34109_34279,n__19411__auto___34277,jobs,results,process,async))
;
return ((function (__34278,switch__22357__auto__,c__22469__auto___34290,G__34109_34279,n__19411__auto___34277,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____0 = (function (){
var statearr_34160 = [null,null,null,null,null,null,null];
(statearr_34160[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__);

(statearr_34160[(1)] = (1));

return statearr_34160;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____1 = (function (state_34149){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_34149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e34161){if((e34161 instanceof Object)){
var ex__22361__auto__ = e34161;
var statearr_34162_34297 = state_34149;
(statearr_34162_34297[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34298 = state_34149;
state_34149 = G__34298;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__ = function(state_34149){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____1.call(this,state_34149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__;
})()
;})(__34278,switch__22357__auto__,c__22469__auto___34290,G__34109_34279,n__19411__auto___34277,jobs,results,process,async))
})();
var state__22471__auto__ = (function (){var statearr_34163 = f__22470__auto__.call(null);
(statearr_34163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___34290);

return statearr_34163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(__34278,c__22469__auto___34290,G__34109_34279,n__19411__auto___34277,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__34299 = (__34278 + (1));
__34278 = G__34299;
continue;
} else {
}
break;
}

var c__22469__auto___34300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto___34300,jobs,results,process,async){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto___34300,jobs,results,process,async){
return (function (state_34185){
var state_val_34186 = (state_34185[(1)]);
if((state_val_34186 === (1))){
var state_34185__$1 = state_34185;
var statearr_34187_34301 = state_34185__$1;
(statearr_34187_34301[(2)] = null);

(statearr_34187_34301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (2))){
var state_34185__$1 = state_34185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34185__$1,(4),from);
} else {
if((state_val_34186 === (3))){
var inst_34183 = (state_34185[(2)]);
var state_34185__$1 = state_34185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34185__$1,inst_34183);
} else {
if((state_val_34186 === (4))){
var inst_34166 = (state_34185[(7)]);
var inst_34166__$1 = (state_34185[(2)]);
var inst_34167 = (inst_34166__$1 == null);
var state_34185__$1 = (function (){var statearr_34188 = state_34185;
(statearr_34188[(7)] = inst_34166__$1);

return statearr_34188;
})();
if(cljs.core.truth_(inst_34167)){
var statearr_34189_34302 = state_34185__$1;
(statearr_34189_34302[(1)] = (5));

} else {
var statearr_34190_34303 = state_34185__$1;
(statearr_34190_34303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (5))){
var inst_34169 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34185__$1 = state_34185;
var statearr_34191_34304 = state_34185__$1;
(statearr_34191_34304[(2)] = inst_34169);

(statearr_34191_34304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (6))){
var inst_34171 = (state_34185[(8)]);
var inst_34166 = (state_34185[(7)]);
var inst_34171__$1 = cljs.core.async.chan.call(null,(1));
var inst_34172 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34173 = [inst_34166,inst_34171__$1];
var inst_34174 = (new cljs.core.PersistentVector(null,2,(5),inst_34172,inst_34173,null));
var state_34185__$1 = (function (){var statearr_34192 = state_34185;
(statearr_34192[(8)] = inst_34171__$1);

return statearr_34192;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34185__$1,(8),jobs,inst_34174);
} else {
if((state_val_34186 === (7))){
var inst_34181 = (state_34185[(2)]);
var state_34185__$1 = state_34185;
var statearr_34193_34305 = state_34185__$1;
(statearr_34193_34305[(2)] = inst_34181);

(statearr_34193_34305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34186 === (8))){
var inst_34171 = (state_34185[(8)]);
var inst_34176 = (state_34185[(2)]);
var state_34185__$1 = (function (){var statearr_34194 = state_34185;
(statearr_34194[(9)] = inst_34176);

return statearr_34194;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34185__$1,(9),results,inst_34171);
} else {
if((state_val_34186 === (9))){
var inst_34178 = (state_34185[(2)]);
var state_34185__$1 = (function (){var statearr_34195 = state_34185;
(statearr_34195[(10)] = inst_34178);

return statearr_34195;
})();
var statearr_34196_34306 = state_34185__$1;
(statearr_34196_34306[(2)] = null);

(statearr_34196_34306[(1)] = (2));


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
});})(c__22469__auto___34300,jobs,results,process,async))
;
return ((function (switch__22357__auto__,c__22469__auto___34300,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____0 = (function (){
var statearr_34200 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34200[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__);

(statearr_34200[(1)] = (1));

return statearr_34200;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____1 = (function (state_34185){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_34185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e34201){if((e34201 instanceof Object)){
var ex__22361__auto__ = e34201;
var statearr_34202_34307 = state_34185;
(statearr_34202_34307[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34308 = state_34185;
state_34185 = G__34308;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__ = function(state_34185){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____1.call(this,state_34185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto___34300,jobs,results,process,async))
})();
var state__22471__auto__ = (function (){var statearr_34203 = f__22470__auto__.call(null);
(statearr_34203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___34300);

return statearr_34203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto___34300,jobs,results,process,async))
);


var c__22469__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto__,jobs,results,process,async){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto__,jobs,results,process,async){
return (function (state_34241){
var state_val_34242 = (state_34241[(1)]);
if((state_val_34242 === (7))){
var inst_34237 = (state_34241[(2)]);
var state_34241__$1 = state_34241;
var statearr_34243_34309 = state_34241__$1;
(statearr_34243_34309[(2)] = inst_34237);

(statearr_34243_34309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (20))){
var state_34241__$1 = state_34241;
var statearr_34244_34310 = state_34241__$1;
(statearr_34244_34310[(2)] = null);

(statearr_34244_34310[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (1))){
var state_34241__$1 = state_34241;
var statearr_34245_34311 = state_34241__$1;
(statearr_34245_34311[(2)] = null);

(statearr_34245_34311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (4))){
var inst_34206 = (state_34241[(7)]);
var inst_34206__$1 = (state_34241[(2)]);
var inst_34207 = (inst_34206__$1 == null);
var state_34241__$1 = (function (){var statearr_34246 = state_34241;
(statearr_34246[(7)] = inst_34206__$1);

return statearr_34246;
})();
if(cljs.core.truth_(inst_34207)){
var statearr_34247_34312 = state_34241__$1;
(statearr_34247_34312[(1)] = (5));

} else {
var statearr_34248_34313 = state_34241__$1;
(statearr_34248_34313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (15))){
var inst_34219 = (state_34241[(8)]);
var state_34241__$1 = state_34241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34241__$1,(18),to,inst_34219);
} else {
if((state_val_34242 === (21))){
var inst_34232 = (state_34241[(2)]);
var state_34241__$1 = state_34241;
var statearr_34249_34314 = state_34241__$1;
(statearr_34249_34314[(2)] = inst_34232);

(statearr_34249_34314[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (13))){
var inst_34234 = (state_34241[(2)]);
var state_34241__$1 = (function (){var statearr_34250 = state_34241;
(statearr_34250[(9)] = inst_34234);

return statearr_34250;
})();
var statearr_34251_34315 = state_34241__$1;
(statearr_34251_34315[(2)] = null);

(statearr_34251_34315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (6))){
var inst_34206 = (state_34241[(7)]);
var state_34241__$1 = state_34241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34241__$1,(11),inst_34206);
} else {
if((state_val_34242 === (17))){
var inst_34227 = (state_34241[(2)]);
var state_34241__$1 = state_34241;
if(cljs.core.truth_(inst_34227)){
var statearr_34252_34316 = state_34241__$1;
(statearr_34252_34316[(1)] = (19));

} else {
var statearr_34253_34317 = state_34241__$1;
(statearr_34253_34317[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (3))){
var inst_34239 = (state_34241[(2)]);
var state_34241__$1 = state_34241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34241__$1,inst_34239);
} else {
if((state_val_34242 === (12))){
var inst_34216 = (state_34241[(10)]);
var state_34241__$1 = state_34241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34241__$1,(14),inst_34216);
} else {
if((state_val_34242 === (2))){
var state_34241__$1 = state_34241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34241__$1,(4),results);
} else {
if((state_val_34242 === (19))){
var state_34241__$1 = state_34241;
var statearr_34254_34318 = state_34241__$1;
(statearr_34254_34318[(2)] = null);

(statearr_34254_34318[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (11))){
var inst_34216 = (state_34241[(2)]);
var state_34241__$1 = (function (){var statearr_34255 = state_34241;
(statearr_34255[(10)] = inst_34216);

return statearr_34255;
})();
var statearr_34256_34319 = state_34241__$1;
(statearr_34256_34319[(2)] = null);

(statearr_34256_34319[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (9))){
var state_34241__$1 = state_34241;
var statearr_34257_34320 = state_34241__$1;
(statearr_34257_34320[(2)] = null);

(statearr_34257_34320[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (5))){
var state_34241__$1 = state_34241;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34258_34321 = state_34241__$1;
(statearr_34258_34321[(1)] = (8));

} else {
var statearr_34259_34322 = state_34241__$1;
(statearr_34259_34322[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (14))){
var inst_34221 = (state_34241[(11)]);
var inst_34219 = (state_34241[(8)]);
var inst_34219__$1 = (state_34241[(2)]);
var inst_34220 = (inst_34219__$1 == null);
var inst_34221__$1 = cljs.core.not.call(null,inst_34220);
var state_34241__$1 = (function (){var statearr_34260 = state_34241;
(statearr_34260[(11)] = inst_34221__$1);

(statearr_34260[(8)] = inst_34219__$1);

return statearr_34260;
})();
if(inst_34221__$1){
var statearr_34261_34323 = state_34241__$1;
(statearr_34261_34323[(1)] = (15));

} else {
var statearr_34262_34324 = state_34241__$1;
(statearr_34262_34324[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (16))){
var inst_34221 = (state_34241[(11)]);
var state_34241__$1 = state_34241;
var statearr_34263_34325 = state_34241__$1;
(statearr_34263_34325[(2)] = inst_34221);

(statearr_34263_34325[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (10))){
var inst_34213 = (state_34241[(2)]);
var state_34241__$1 = state_34241;
var statearr_34264_34326 = state_34241__$1;
(statearr_34264_34326[(2)] = inst_34213);

(statearr_34264_34326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (18))){
var inst_34224 = (state_34241[(2)]);
var state_34241__$1 = state_34241;
var statearr_34265_34327 = state_34241__$1;
(statearr_34265_34327[(2)] = inst_34224);

(statearr_34265_34327[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (8))){
var inst_34210 = cljs.core.async.close_BANG_.call(null,to);
var state_34241__$1 = state_34241;
var statearr_34266_34328 = state_34241__$1;
(statearr_34266_34328[(2)] = inst_34210);

(statearr_34266_34328[(1)] = (10));


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
var statearr_34270 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34270[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__);

(statearr_34270[(1)] = (1));

return statearr_34270;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____1 = (function (state_34241){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_34241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e34271){if((e34271 instanceof Object)){
var ex__22361__auto__ = e34271;
var statearr_34272_34329 = state_34241;
(statearr_34272_34329[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34330 = state_34241;
state_34241 = G__34330;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__ = function(state_34241){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____1.call(this,state_34241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22358__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto__,jobs,results,process,async))
})();
var state__22471__auto__ = (function (){var statearr_34273 = f__22470__auto__.call(null);
(statearr_34273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto__);

return statearr_34273;
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
var args34331 = [];
var len__19571__auto___34334 = arguments.length;
var i__19572__auto___34335 = (0);
while(true){
if((i__19572__auto___34335 < len__19571__auto___34334)){
args34331.push((arguments[i__19572__auto___34335]));

var G__34336 = (i__19572__auto___34335 + (1));
i__19572__auto___34335 = G__34336;
continue;
} else {
}
break;
}

var G__34333 = args34331.length;
switch (G__34333) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34331.length)].join('')));

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
var args34338 = [];
var len__19571__auto___34341 = arguments.length;
var i__19572__auto___34342 = (0);
while(true){
if((i__19572__auto___34342 < len__19571__auto___34341)){
args34338.push((arguments[i__19572__auto___34342]));

var G__34343 = (i__19572__auto___34342 + (1));
i__19572__auto___34342 = G__34343;
continue;
} else {
}
break;
}

var G__34340 = args34338.length;
switch (G__34340) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34338.length)].join('')));

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
var args34345 = [];
var len__19571__auto___34398 = arguments.length;
var i__19572__auto___34399 = (0);
while(true){
if((i__19572__auto___34399 < len__19571__auto___34398)){
args34345.push((arguments[i__19572__auto___34399]));

var G__34400 = (i__19572__auto___34399 + (1));
i__19572__auto___34399 = G__34400;
continue;
} else {
}
break;
}

var G__34347 = args34345.length;
switch (G__34347) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34345.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22469__auto___34402 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto___34402,tc,fc){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto___34402,tc,fc){
return (function (state_34373){
var state_val_34374 = (state_34373[(1)]);
if((state_val_34374 === (7))){
var inst_34369 = (state_34373[(2)]);
var state_34373__$1 = state_34373;
var statearr_34375_34403 = state_34373__$1;
(statearr_34375_34403[(2)] = inst_34369);

(statearr_34375_34403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34374 === (1))){
var state_34373__$1 = state_34373;
var statearr_34376_34404 = state_34373__$1;
(statearr_34376_34404[(2)] = null);

(statearr_34376_34404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34374 === (4))){
var inst_34350 = (state_34373[(7)]);
var inst_34350__$1 = (state_34373[(2)]);
var inst_34351 = (inst_34350__$1 == null);
var state_34373__$1 = (function (){var statearr_34377 = state_34373;
(statearr_34377[(7)] = inst_34350__$1);

return statearr_34377;
})();
if(cljs.core.truth_(inst_34351)){
var statearr_34378_34405 = state_34373__$1;
(statearr_34378_34405[(1)] = (5));

} else {
var statearr_34379_34406 = state_34373__$1;
(statearr_34379_34406[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34374 === (13))){
var state_34373__$1 = state_34373;
var statearr_34380_34407 = state_34373__$1;
(statearr_34380_34407[(2)] = null);

(statearr_34380_34407[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34374 === (6))){
var inst_34350 = (state_34373[(7)]);
var inst_34356 = p.call(null,inst_34350);
var state_34373__$1 = state_34373;
if(cljs.core.truth_(inst_34356)){
var statearr_34381_34408 = state_34373__$1;
(statearr_34381_34408[(1)] = (9));

} else {
var statearr_34382_34409 = state_34373__$1;
(statearr_34382_34409[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34374 === (3))){
var inst_34371 = (state_34373[(2)]);
var state_34373__$1 = state_34373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34373__$1,inst_34371);
} else {
if((state_val_34374 === (12))){
var state_34373__$1 = state_34373;
var statearr_34383_34410 = state_34373__$1;
(statearr_34383_34410[(2)] = null);

(statearr_34383_34410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34374 === (2))){
var state_34373__$1 = state_34373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34373__$1,(4),ch);
} else {
if((state_val_34374 === (11))){
var inst_34350 = (state_34373[(7)]);
var inst_34360 = (state_34373[(2)]);
var state_34373__$1 = state_34373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34373__$1,(8),inst_34360,inst_34350);
} else {
if((state_val_34374 === (9))){
var state_34373__$1 = state_34373;
var statearr_34384_34411 = state_34373__$1;
(statearr_34384_34411[(2)] = tc);

(statearr_34384_34411[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34374 === (5))){
var inst_34353 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34354 = cljs.core.async.close_BANG_.call(null,fc);
var state_34373__$1 = (function (){var statearr_34385 = state_34373;
(statearr_34385[(8)] = inst_34353);

return statearr_34385;
})();
var statearr_34386_34412 = state_34373__$1;
(statearr_34386_34412[(2)] = inst_34354);

(statearr_34386_34412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34374 === (14))){
var inst_34367 = (state_34373[(2)]);
var state_34373__$1 = state_34373;
var statearr_34387_34413 = state_34373__$1;
(statearr_34387_34413[(2)] = inst_34367);

(statearr_34387_34413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34374 === (10))){
var state_34373__$1 = state_34373;
var statearr_34388_34414 = state_34373__$1;
(statearr_34388_34414[(2)] = fc);

(statearr_34388_34414[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34374 === (8))){
var inst_34362 = (state_34373[(2)]);
var state_34373__$1 = state_34373;
if(cljs.core.truth_(inst_34362)){
var statearr_34389_34415 = state_34373__$1;
(statearr_34389_34415[(1)] = (12));

} else {
var statearr_34390_34416 = state_34373__$1;
(statearr_34390_34416[(1)] = (13));

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
});})(c__22469__auto___34402,tc,fc))
;
return ((function (switch__22357__auto__,c__22469__auto___34402,tc,fc){
return (function() {
var cljs$core$async$state_machine__22358__auto__ = null;
var cljs$core$async$state_machine__22358__auto____0 = (function (){
var statearr_34394 = [null,null,null,null,null,null,null,null,null];
(statearr_34394[(0)] = cljs$core$async$state_machine__22358__auto__);

(statearr_34394[(1)] = (1));

return statearr_34394;
});
var cljs$core$async$state_machine__22358__auto____1 = (function (state_34373){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_34373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e34395){if((e34395 instanceof Object)){
var ex__22361__auto__ = e34395;
var statearr_34396_34417 = state_34373;
(statearr_34396_34417[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34418 = state_34373;
state_34373 = G__34418;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$state_machine__22358__auto__ = function(state_34373){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22358__auto____1.call(this,state_34373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22358__auto____0;
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22358__auto____1;
return cljs$core$async$state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto___34402,tc,fc))
})();
var state__22471__auto__ = (function (){var statearr_34397 = f__22470__auto__.call(null);
(statearr_34397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___34402);

return statearr_34397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto___34402,tc,fc))
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
return (function (state_34482){
var state_val_34483 = (state_34482[(1)]);
if((state_val_34483 === (7))){
var inst_34478 = (state_34482[(2)]);
var state_34482__$1 = state_34482;
var statearr_34484_34505 = state_34482__$1;
(statearr_34484_34505[(2)] = inst_34478);

(statearr_34484_34505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (1))){
var inst_34462 = init;
var state_34482__$1 = (function (){var statearr_34485 = state_34482;
(statearr_34485[(7)] = inst_34462);

return statearr_34485;
})();
var statearr_34486_34506 = state_34482__$1;
(statearr_34486_34506[(2)] = null);

(statearr_34486_34506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (4))){
var inst_34465 = (state_34482[(8)]);
var inst_34465__$1 = (state_34482[(2)]);
var inst_34466 = (inst_34465__$1 == null);
var state_34482__$1 = (function (){var statearr_34487 = state_34482;
(statearr_34487[(8)] = inst_34465__$1);

return statearr_34487;
})();
if(cljs.core.truth_(inst_34466)){
var statearr_34488_34507 = state_34482__$1;
(statearr_34488_34507[(1)] = (5));

} else {
var statearr_34489_34508 = state_34482__$1;
(statearr_34489_34508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (6))){
var inst_34462 = (state_34482[(7)]);
var inst_34465 = (state_34482[(8)]);
var inst_34469 = (state_34482[(9)]);
var inst_34469__$1 = f.call(null,inst_34462,inst_34465);
var inst_34470 = cljs.core.reduced_QMARK_.call(null,inst_34469__$1);
var state_34482__$1 = (function (){var statearr_34490 = state_34482;
(statearr_34490[(9)] = inst_34469__$1);

return statearr_34490;
})();
if(inst_34470){
var statearr_34491_34509 = state_34482__$1;
(statearr_34491_34509[(1)] = (8));

} else {
var statearr_34492_34510 = state_34482__$1;
(statearr_34492_34510[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (3))){
var inst_34480 = (state_34482[(2)]);
var state_34482__$1 = state_34482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34482__$1,inst_34480);
} else {
if((state_val_34483 === (2))){
var state_34482__$1 = state_34482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34482__$1,(4),ch);
} else {
if((state_val_34483 === (9))){
var inst_34469 = (state_34482[(9)]);
var inst_34462 = inst_34469;
var state_34482__$1 = (function (){var statearr_34493 = state_34482;
(statearr_34493[(7)] = inst_34462);

return statearr_34493;
})();
var statearr_34494_34511 = state_34482__$1;
(statearr_34494_34511[(2)] = null);

(statearr_34494_34511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (5))){
var inst_34462 = (state_34482[(7)]);
var state_34482__$1 = state_34482;
var statearr_34495_34512 = state_34482__$1;
(statearr_34495_34512[(2)] = inst_34462);

(statearr_34495_34512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (10))){
var inst_34476 = (state_34482[(2)]);
var state_34482__$1 = state_34482;
var statearr_34496_34513 = state_34482__$1;
(statearr_34496_34513[(2)] = inst_34476);

(statearr_34496_34513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (8))){
var inst_34469 = (state_34482[(9)]);
var inst_34472 = cljs.core.deref.call(null,inst_34469);
var state_34482__$1 = state_34482;
var statearr_34497_34514 = state_34482__$1;
(statearr_34497_34514[(2)] = inst_34472);

(statearr_34497_34514[(1)] = (10));


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
var statearr_34501 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34501[(0)] = cljs$core$async$reduce_$_state_machine__22358__auto__);

(statearr_34501[(1)] = (1));

return statearr_34501;
});
var cljs$core$async$reduce_$_state_machine__22358__auto____1 = (function (state_34482){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_34482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e34502){if((e34502 instanceof Object)){
var ex__22361__auto__ = e34502;
var statearr_34503_34515 = state_34482;
(statearr_34503_34515[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34516 = state_34482;
state_34482 = G__34516;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22358__auto__ = function(state_34482){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22358__auto____1.call(this,state_34482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22358__auto____0;
cljs$core$async$reduce_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22358__auto____1;
return cljs$core$async$reduce_$_state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto__))
})();
var state__22471__auto__ = (function (){var statearr_34504 = f__22470__auto__.call(null);
(statearr_34504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto__);

return statearr_34504;
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
var args34517 = [];
var len__19571__auto___34569 = arguments.length;
var i__19572__auto___34570 = (0);
while(true){
if((i__19572__auto___34570 < len__19571__auto___34569)){
args34517.push((arguments[i__19572__auto___34570]));

var G__34571 = (i__19572__auto___34570 + (1));
i__19572__auto___34570 = G__34571;
continue;
} else {
}
break;
}

var G__34519 = args34517.length;
switch (G__34519) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34517.length)].join('')));

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
return (function (state_34544){
var state_val_34545 = (state_34544[(1)]);
if((state_val_34545 === (7))){
var inst_34526 = (state_34544[(2)]);
var state_34544__$1 = state_34544;
var statearr_34546_34573 = state_34544__$1;
(statearr_34546_34573[(2)] = inst_34526);

(statearr_34546_34573[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34545 === (1))){
var inst_34520 = cljs.core.seq.call(null,coll);
var inst_34521 = inst_34520;
var state_34544__$1 = (function (){var statearr_34547 = state_34544;
(statearr_34547[(7)] = inst_34521);

return statearr_34547;
})();
var statearr_34548_34574 = state_34544__$1;
(statearr_34548_34574[(2)] = null);

(statearr_34548_34574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34545 === (4))){
var inst_34521 = (state_34544[(7)]);
var inst_34524 = cljs.core.first.call(null,inst_34521);
var state_34544__$1 = state_34544;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34544__$1,(7),ch,inst_34524);
} else {
if((state_val_34545 === (13))){
var inst_34538 = (state_34544[(2)]);
var state_34544__$1 = state_34544;
var statearr_34549_34575 = state_34544__$1;
(statearr_34549_34575[(2)] = inst_34538);

(statearr_34549_34575[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34545 === (6))){
var inst_34529 = (state_34544[(2)]);
var state_34544__$1 = state_34544;
if(cljs.core.truth_(inst_34529)){
var statearr_34550_34576 = state_34544__$1;
(statearr_34550_34576[(1)] = (8));

} else {
var statearr_34551_34577 = state_34544__$1;
(statearr_34551_34577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34545 === (3))){
var inst_34542 = (state_34544[(2)]);
var state_34544__$1 = state_34544;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34544__$1,inst_34542);
} else {
if((state_val_34545 === (12))){
var state_34544__$1 = state_34544;
var statearr_34552_34578 = state_34544__$1;
(statearr_34552_34578[(2)] = null);

(statearr_34552_34578[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34545 === (2))){
var inst_34521 = (state_34544[(7)]);
var state_34544__$1 = state_34544;
if(cljs.core.truth_(inst_34521)){
var statearr_34553_34579 = state_34544__$1;
(statearr_34553_34579[(1)] = (4));

} else {
var statearr_34554_34580 = state_34544__$1;
(statearr_34554_34580[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34545 === (11))){
var inst_34535 = cljs.core.async.close_BANG_.call(null,ch);
var state_34544__$1 = state_34544;
var statearr_34555_34581 = state_34544__$1;
(statearr_34555_34581[(2)] = inst_34535);

(statearr_34555_34581[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34545 === (9))){
var state_34544__$1 = state_34544;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34556_34582 = state_34544__$1;
(statearr_34556_34582[(1)] = (11));

} else {
var statearr_34557_34583 = state_34544__$1;
(statearr_34557_34583[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34545 === (5))){
var inst_34521 = (state_34544[(7)]);
var state_34544__$1 = state_34544;
var statearr_34558_34584 = state_34544__$1;
(statearr_34558_34584[(2)] = inst_34521);

(statearr_34558_34584[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34545 === (10))){
var inst_34540 = (state_34544[(2)]);
var state_34544__$1 = state_34544;
var statearr_34559_34585 = state_34544__$1;
(statearr_34559_34585[(2)] = inst_34540);

(statearr_34559_34585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34545 === (8))){
var inst_34521 = (state_34544[(7)]);
var inst_34531 = cljs.core.next.call(null,inst_34521);
var inst_34521__$1 = inst_34531;
var state_34544__$1 = (function (){var statearr_34560 = state_34544;
(statearr_34560[(7)] = inst_34521__$1);

return statearr_34560;
})();
var statearr_34561_34586 = state_34544__$1;
(statearr_34561_34586[(2)] = null);

(statearr_34561_34586[(1)] = (2));


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
var statearr_34565 = [null,null,null,null,null,null,null,null];
(statearr_34565[(0)] = cljs$core$async$state_machine__22358__auto__);

(statearr_34565[(1)] = (1));

return statearr_34565;
});
var cljs$core$async$state_machine__22358__auto____1 = (function (state_34544){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_34544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e34566){if((e34566 instanceof Object)){
var ex__22361__auto__ = e34566;
var statearr_34567_34587 = state_34544;
(statearr_34567_34587[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34588 = state_34544;
state_34544 = G__34588;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$state_machine__22358__auto__ = function(state_34544){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22358__auto____1.call(this,state_34544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22358__auto____0;
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22358__auto____1;
return cljs$core$async$state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto__))
})();
var state__22471__auto__ = (function (){var statearr_34568 = f__22470__auto__.call(null);
(statearr_34568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto__);

return statearr_34568;
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
if(typeof cljs.core.async.t_cljs$core$async34814 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34814 = (function (mult,ch,cs,meta34815){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta34815 = meta34815;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34816,meta34815__$1){
var self__ = this;
var _34816__$1 = this;
return (new cljs.core.async.t_cljs$core$async34814(self__.mult,self__.ch,self__.cs,meta34815__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34814.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34816){
var self__ = this;
var _34816__$1 = this;
return self__.meta34815;
});})(cs))
;

cljs.core.async.t_cljs$core$async34814.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async34814.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34814.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async34814.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34814.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34814.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34814.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34815","meta34815",817768174,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34814.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34814.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34814";

cljs.core.async.t_cljs$core$async34814.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19102__auto__,writer__19103__auto__,opt__19104__auto__){
return cljs.core._write.call(null,writer__19103__auto__,"cljs.core.async/t_cljs$core$async34814");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async34814 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34814(mult__$1,ch__$1,cs__$1,meta34815){
return (new cljs.core.async.t_cljs$core$async34814(mult__$1,ch__$1,cs__$1,meta34815));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34814(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22469__auto___35039 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto___35039,cs,m,dchan,dctr,done){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto___35039,cs,m,dchan,dctr,done){
return (function (state_34951){
var state_val_34952 = (state_34951[(1)]);
if((state_val_34952 === (7))){
var inst_34947 = (state_34951[(2)]);
var state_34951__$1 = state_34951;
var statearr_34953_35040 = state_34951__$1;
(statearr_34953_35040[(2)] = inst_34947);

(statearr_34953_35040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (20))){
var inst_34850 = (state_34951[(7)]);
var inst_34862 = cljs.core.first.call(null,inst_34850);
var inst_34863 = cljs.core.nth.call(null,inst_34862,(0),null);
var inst_34864 = cljs.core.nth.call(null,inst_34862,(1),null);
var state_34951__$1 = (function (){var statearr_34954 = state_34951;
(statearr_34954[(8)] = inst_34863);

return statearr_34954;
})();
if(cljs.core.truth_(inst_34864)){
var statearr_34955_35041 = state_34951__$1;
(statearr_34955_35041[(1)] = (22));

} else {
var statearr_34956_35042 = state_34951__$1;
(statearr_34956_35042[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (27))){
var inst_34899 = (state_34951[(9)]);
var inst_34819 = (state_34951[(10)]);
var inst_34892 = (state_34951[(11)]);
var inst_34894 = (state_34951[(12)]);
var inst_34899__$1 = cljs.core._nth.call(null,inst_34892,inst_34894);
var inst_34900 = cljs.core.async.put_BANG_.call(null,inst_34899__$1,inst_34819,done);
var state_34951__$1 = (function (){var statearr_34957 = state_34951;
(statearr_34957[(9)] = inst_34899__$1);

return statearr_34957;
})();
if(cljs.core.truth_(inst_34900)){
var statearr_34958_35043 = state_34951__$1;
(statearr_34958_35043[(1)] = (30));

} else {
var statearr_34959_35044 = state_34951__$1;
(statearr_34959_35044[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (1))){
var state_34951__$1 = state_34951;
var statearr_34960_35045 = state_34951__$1;
(statearr_34960_35045[(2)] = null);

(statearr_34960_35045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (24))){
var inst_34850 = (state_34951[(7)]);
var inst_34869 = (state_34951[(2)]);
var inst_34870 = cljs.core.next.call(null,inst_34850);
var inst_34828 = inst_34870;
var inst_34829 = null;
var inst_34830 = (0);
var inst_34831 = (0);
var state_34951__$1 = (function (){var statearr_34961 = state_34951;
(statearr_34961[(13)] = inst_34869);

(statearr_34961[(14)] = inst_34831);

(statearr_34961[(15)] = inst_34829);

(statearr_34961[(16)] = inst_34830);

(statearr_34961[(17)] = inst_34828);

return statearr_34961;
})();
var statearr_34962_35046 = state_34951__$1;
(statearr_34962_35046[(2)] = null);

(statearr_34962_35046[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (39))){
var state_34951__$1 = state_34951;
var statearr_34966_35047 = state_34951__$1;
(statearr_34966_35047[(2)] = null);

(statearr_34966_35047[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (4))){
var inst_34819 = (state_34951[(10)]);
var inst_34819__$1 = (state_34951[(2)]);
var inst_34820 = (inst_34819__$1 == null);
var state_34951__$1 = (function (){var statearr_34967 = state_34951;
(statearr_34967[(10)] = inst_34819__$1);

return statearr_34967;
})();
if(cljs.core.truth_(inst_34820)){
var statearr_34968_35048 = state_34951__$1;
(statearr_34968_35048[(1)] = (5));

} else {
var statearr_34969_35049 = state_34951__$1;
(statearr_34969_35049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (15))){
var inst_34831 = (state_34951[(14)]);
var inst_34829 = (state_34951[(15)]);
var inst_34830 = (state_34951[(16)]);
var inst_34828 = (state_34951[(17)]);
var inst_34846 = (state_34951[(2)]);
var inst_34847 = (inst_34831 + (1));
var tmp34963 = inst_34829;
var tmp34964 = inst_34830;
var tmp34965 = inst_34828;
var inst_34828__$1 = tmp34965;
var inst_34829__$1 = tmp34963;
var inst_34830__$1 = tmp34964;
var inst_34831__$1 = inst_34847;
var state_34951__$1 = (function (){var statearr_34970 = state_34951;
(statearr_34970[(14)] = inst_34831__$1);

(statearr_34970[(15)] = inst_34829__$1);

(statearr_34970[(18)] = inst_34846);

(statearr_34970[(16)] = inst_34830__$1);

(statearr_34970[(17)] = inst_34828__$1);

return statearr_34970;
})();
var statearr_34971_35050 = state_34951__$1;
(statearr_34971_35050[(2)] = null);

(statearr_34971_35050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (21))){
var inst_34873 = (state_34951[(2)]);
var state_34951__$1 = state_34951;
var statearr_34975_35051 = state_34951__$1;
(statearr_34975_35051[(2)] = inst_34873);

(statearr_34975_35051[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (31))){
var inst_34899 = (state_34951[(9)]);
var inst_34903 = done.call(null,null);
var inst_34904 = cljs.core.async.untap_STAR_.call(null,m,inst_34899);
var state_34951__$1 = (function (){var statearr_34976 = state_34951;
(statearr_34976[(19)] = inst_34903);

return statearr_34976;
})();
var statearr_34977_35052 = state_34951__$1;
(statearr_34977_35052[(2)] = inst_34904);

(statearr_34977_35052[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (32))){
var inst_34891 = (state_34951[(20)]);
var inst_34892 = (state_34951[(11)]);
var inst_34893 = (state_34951[(21)]);
var inst_34894 = (state_34951[(12)]);
var inst_34906 = (state_34951[(2)]);
var inst_34907 = (inst_34894 + (1));
var tmp34972 = inst_34891;
var tmp34973 = inst_34892;
var tmp34974 = inst_34893;
var inst_34891__$1 = tmp34972;
var inst_34892__$1 = tmp34973;
var inst_34893__$1 = tmp34974;
var inst_34894__$1 = inst_34907;
var state_34951__$1 = (function (){var statearr_34978 = state_34951;
(statearr_34978[(20)] = inst_34891__$1);

(statearr_34978[(11)] = inst_34892__$1);

(statearr_34978[(22)] = inst_34906);

(statearr_34978[(21)] = inst_34893__$1);

(statearr_34978[(12)] = inst_34894__$1);

return statearr_34978;
})();
var statearr_34979_35053 = state_34951__$1;
(statearr_34979_35053[(2)] = null);

(statearr_34979_35053[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (40))){
var inst_34919 = (state_34951[(23)]);
var inst_34923 = done.call(null,null);
var inst_34924 = cljs.core.async.untap_STAR_.call(null,m,inst_34919);
var state_34951__$1 = (function (){var statearr_34980 = state_34951;
(statearr_34980[(24)] = inst_34923);

return statearr_34980;
})();
var statearr_34981_35054 = state_34951__$1;
(statearr_34981_35054[(2)] = inst_34924);

(statearr_34981_35054[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (33))){
var inst_34910 = (state_34951[(25)]);
var inst_34912 = cljs.core.chunked_seq_QMARK_.call(null,inst_34910);
var state_34951__$1 = state_34951;
if(inst_34912){
var statearr_34982_35055 = state_34951__$1;
(statearr_34982_35055[(1)] = (36));

} else {
var statearr_34983_35056 = state_34951__$1;
(statearr_34983_35056[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (13))){
var inst_34840 = (state_34951[(26)]);
var inst_34843 = cljs.core.async.close_BANG_.call(null,inst_34840);
var state_34951__$1 = state_34951;
var statearr_34984_35057 = state_34951__$1;
(statearr_34984_35057[(2)] = inst_34843);

(statearr_34984_35057[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (22))){
var inst_34863 = (state_34951[(8)]);
var inst_34866 = cljs.core.async.close_BANG_.call(null,inst_34863);
var state_34951__$1 = state_34951;
var statearr_34985_35058 = state_34951__$1;
(statearr_34985_35058[(2)] = inst_34866);

(statearr_34985_35058[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (36))){
var inst_34910 = (state_34951[(25)]);
var inst_34914 = cljs.core.chunk_first.call(null,inst_34910);
var inst_34915 = cljs.core.chunk_rest.call(null,inst_34910);
var inst_34916 = cljs.core.count.call(null,inst_34914);
var inst_34891 = inst_34915;
var inst_34892 = inst_34914;
var inst_34893 = inst_34916;
var inst_34894 = (0);
var state_34951__$1 = (function (){var statearr_34986 = state_34951;
(statearr_34986[(20)] = inst_34891);

(statearr_34986[(11)] = inst_34892);

(statearr_34986[(21)] = inst_34893);

(statearr_34986[(12)] = inst_34894);

return statearr_34986;
})();
var statearr_34987_35059 = state_34951__$1;
(statearr_34987_35059[(2)] = null);

(statearr_34987_35059[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (41))){
var inst_34910 = (state_34951[(25)]);
var inst_34926 = (state_34951[(2)]);
var inst_34927 = cljs.core.next.call(null,inst_34910);
var inst_34891 = inst_34927;
var inst_34892 = null;
var inst_34893 = (0);
var inst_34894 = (0);
var state_34951__$1 = (function (){var statearr_34988 = state_34951;
(statearr_34988[(20)] = inst_34891);

(statearr_34988[(11)] = inst_34892);

(statearr_34988[(27)] = inst_34926);

(statearr_34988[(21)] = inst_34893);

(statearr_34988[(12)] = inst_34894);

return statearr_34988;
})();
var statearr_34989_35060 = state_34951__$1;
(statearr_34989_35060[(2)] = null);

(statearr_34989_35060[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (43))){
var state_34951__$1 = state_34951;
var statearr_34990_35061 = state_34951__$1;
(statearr_34990_35061[(2)] = null);

(statearr_34990_35061[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (29))){
var inst_34935 = (state_34951[(2)]);
var state_34951__$1 = state_34951;
var statearr_34991_35062 = state_34951__$1;
(statearr_34991_35062[(2)] = inst_34935);

(statearr_34991_35062[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (44))){
var inst_34944 = (state_34951[(2)]);
var state_34951__$1 = (function (){var statearr_34992 = state_34951;
(statearr_34992[(28)] = inst_34944);

return statearr_34992;
})();
var statearr_34993_35063 = state_34951__$1;
(statearr_34993_35063[(2)] = null);

(statearr_34993_35063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (6))){
var inst_34883 = (state_34951[(29)]);
var inst_34882 = cljs.core.deref.call(null,cs);
var inst_34883__$1 = cljs.core.keys.call(null,inst_34882);
var inst_34884 = cljs.core.count.call(null,inst_34883__$1);
var inst_34885 = cljs.core.reset_BANG_.call(null,dctr,inst_34884);
var inst_34890 = cljs.core.seq.call(null,inst_34883__$1);
var inst_34891 = inst_34890;
var inst_34892 = null;
var inst_34893 = (0);
var inst_34894 = (0);
var state_34951__$1 = (function (){var statearr_34994 = state_34951;
(statearr_34994[(20)] = inst_34891);

(statearr_34994[(30)] = inst_34885);

(statearr_34994[(29)] = inst_34883__$1);

(statearr_34994[(11)] = inst_34892);

(statearr_34994[(21)] = inst_34893);

(statearr_34994[(12)] = inst_34894);

return statearr_34994;
})();
var statearr_34995_35064 = state_34951__$1;
(statearr_34995_35064[(2)] = null);

(statearr_34995_35064[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (28))){
var inst_34891 = (state_34951[(20)]);
var inst_34910 = (state_34951[(25)]);
var inst_34910__$1 = cljs.core.seq.call(null,inst_34891);
var state_34951__$1 = (function (){var statearr_34996 = state_34951;
(statearr_34996[(25)] = inst_34910__$1);

return statearr_34996;
})();
if(inst_34910__$1){
var statearr_34997_35065 = state_34951__$1;
(statearr_34997_35065[(1)] = (33));

} else {
var statearr_34998_35066 = state_34951__$1;
(statearr_34998_35066[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (25))){
var inst_34893 = (state_34951[(21)]);
var inst_34894 = (state_34951[(12)]);
var inst_34896 = (inst_34894 < inst_34893);
var inst_34897 = inst_34896;
var state_34951__$1 = state_34951;
if(cljs.core.truth_(inst_34897)){
var statearr_34999_35067 = state_34951__$1;
(statearr_34999_35067[(1)] = (27));

} else {
var statearr_35000_35068 = state_34951__$1;
(statearr_35000_35068[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (34))){
var state_34951__$1 = state_34951;
var statearr_35001_35069 = state_34951__$1;
(statearr_35001_35069[(2)] = null);

(statearr_35001_35069[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (17))){
var state_34951__$1 = state_34951;
var statearr_35002_35070 = state_34951__$1;
(statearr_35002_35070[(2)] = null);

(statearr_35002_35070[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (3))){
var inst_34949 = (state_34951[(2)]);
var state_34951__$1 = state_34951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34951__$1,inst_34949);
} else {
if((state_val_34952 === (12))){
var inst_34878 = (state_34951[(2)]);
var state_34951__$1 = state_34951;
var statearr_35003_35071 = state_34951__$1;
(statearr_35003_35071[(2)] = inst_34878);

(statearr_35003_35071[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (2))){
var state_34951__$1 = state_34951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34951__$1,(4),ch);
} else {
if((state_val_34952 === (23))){
var state_34951__$1 = state_34951;
var statearr_35004_35072 = state_34951__$1;
(statearr_35004_35072[(2)] = null);

(statearr_35004_35072[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (35))){
var inst_34933 = (state_34951[(2)]);
var state_34951__$1 = state_34951;
var statearr_35005_35073 = state_34951__$1;
(statearr_35005_35073[(2)] = inst_34933);

(statearr_35005_35073[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (19))){
var inst_34850 = (state_34951[(7)]);
var inst_34854 = cljs.core.chunk_first.call(null,inst_34850);
var inst_34855 = cljs.core.chunk_rest.call(null,inst_34850);
var inst_34856 = cljs.core.count.call(null,inst_34854);
var inst_34828 = inst_34855;
var inst_34829 = inst_34854;
var inst_34830 = inst_34856;
var inst_34831 = (0);
var state_34951__$1 = (function (){var statearr_35006 = state_34951;
(statearr_35006[(14)] = inst_34831);

(statearr_35006[(15)] = inst_34829);

(statearr_35006[(16)] = inst_34830);

(statearr_35006[(17)] = inst_34828);

return statearr_35006;
})();
var statearr_35007_35074 = state_34951__$1;
(statearr_35007_35074[(2)] = null);

(statearr_35007_35074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (11))){
var inst_34828 = (state_34951[(17)]);
var inst_34850 = (state_34951[(7)]);
var inst_34850__$1 = cljs.core.seq.call(null,inst_34828);
var state_34951__$1 = (function (){var statearr_35008 = state_34951;
(statearr_35008[(7)] = inst_34850__$1);

return statearr_35008;
})();
if(inst_34850__$1){
var statearr_35009_35075 = state_34951__$1;
(statearr_35009_35075[(1)] = (16));

} else {
var statearr_35010_35076 = state_34951__$1;
(statearr_35010_35076[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (9))){
var inst_34880 = (state_34951[(2)]);
var state_34951__$1 = state_34951;
var statearr_35011_35077 = state_34951__$1;
(statearr_35011_35077[(2)] = inst_34880);

(statearr_35011_35077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (5))){
var inst_34826 = cljs.core.deref.call(null,cs);
var inst_34827 = cljs.core.seq.call(null,inst_34826);
var inst_34828 = inst_34827;
var inst_34829 = null;
var inst_34830 = (0);
var inst_34831 = (0);
var state_34951__$1 = (function (){var statearr_35012 = state_34951;
(statearr_35012[(14)] = inst_34831);

(statearr_35012[(15)] = inst_34829);

(statearr_35012[(16)] = inst_34830);

(statearr_35012[(17)] = inst_34828);

return statearr_35012;
})();
var statearr_35013_35078 = state_34951__$1;
(statearr_35013_35078[(2)] = null);

(statearr_35013_35078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (14))){
var state_34951__$1 = state_34951;
var statearr_35014_35079 = state_34951__$1;
(statearr_35014_35079[(2)] = null);

(statearr_35014_35079[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (45))){
var inst_34941 = (state_34951[(2)]);
var state_34951__$1 = state_34951;
var statearr_35015_35080 = state_34951__$1;
(statearr_35015_35080[(2)] = inst_34941);

(statearr_35015_35080[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (26))){
var inst_34883 = (state_34951[(29)]);
var inst_34937 = (state_34951[(2)]);
var inst_34938 = cljs.core.seq.call(null,inst_34883);
var state_34951__$1 = (function (){var statearr_35016 = state_34951;
(statearr_35016[(31)] = inst_34937);

return statearr_35016;
})();
if(inst_34938){
var statearr_35017_35081 = state_34951__$1;
(statearr_35017_35081[(1)] = (42));

} else {
var statearr_35018_35082 = state_34951__$1;
(statearr_35018_35082[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (16))){
var inst_34850 = (state_34951[(7)]);
var inst_34852 = cljs.core.chunked_seq_QMARK_.call(null,inst_34850);
var state_34951__$1 = state_34951;
if(inst_34852){
var statearr_35019_35083 = state_34951__$1;
(statearr_35019_35083[(1)] = (19));

} else {
var statearr_35020_35084 = state_34951__$1;
(statearr_35020_35084[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (38))){
var inst_34930 = (state_34951[(2)]);
var state_34951__$1 = state_34951;
var statearr_35021_35085 = state_34951__$1;
(statearr_35021_35085[(2)] = inst_34930);

(statearr_35021_35085[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (30))){
var state_34951__$1 = state_34951;
var statearr_35022_35086 = state_34951__$1;
(statearr_35022_35086[(2)] = null);

(statearr_35022_35086[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (10))){
var inst_34831 = (state_34951[(14)]);
var inst_34829 = (state_34951[(15)]);
var inst_34839 = cljs.core._nth.call(null,inst_34829,inst_34831);
var inst_34840 = cljs.core.nth.call(null,inst_34839,(0),null);
var inst_34841 = cljs.core.nth.call(null,inst_34839,(1),null);
var state_34951__$1 = (function (){var statearr_35023 = state_34951;
(statearr_35023[(26)] = inst_34840);

return statearr_35023;
})();
if(cljs.core.truth_(inst_34841)){
var statearr_35024_35087 = state_34951__$1;
(statearr_35024_35087[(1)] = (13));

} else {
var statearr_35025_35088 = state_34951__$1;
(statearr_35025_35088[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (18))){
var inst_34876 = (state_34951[(2)]);
var state_34951__$1 = state_34951;
var statearr_35026_35089 = state_34951__$1;
(statearr_35026_35089[(2)] = inst_34876);

(statearr_35026_35089[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (42))){
var state_34951__$1 = state_34951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34951__$1,(45),dchan);
} else {
if((state_val_34952 === (37))){
var inst_34819 = (state_34951[(10)]);
var inst_34910 = (state_34951[(25)]);
var inst_34919 = (state_34951[(23)]);
var inst_34919__$1 = cljs.core.first.call(null,inst_34910);
var inst_34920 = cljs.core.async.put_BANG_.call(null,inst_34919__$1,inst_34819,done);
var state_34951__$1 = (function (){var statearr_35027 = state_34951;
(statearr_35027[(23)] = inst_34919__$1);

return statearr_35027;
})();
if(cljs.core.truth_(inst_34920)){
var statearr_35028_35090 = state_34951__$1;
(statearr_35028_35090[(1)] = (39));

} else {
var statearr_35029_35091 = state_34951__$1;
(statearr_35029_35091[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34952 === (8))){
var inst_34831 = (state_34951[(14)]);
var inst_34830 = (state_34951[(16)]);
var inst_34833 = (inst_34831 < inst_34830);
var inst_34834 = inst_34833;
var state_34951__$1 = state_34951;
if(cljs.core.truth_(inst_34834)){
var statearr_35030_35092 = state_34951__$1;
(statearr_35030_35092[(1)] = (10));

} else {
var statearr_35031_35093 = state_34951__$1;
(statearr_35031_35093[(1)] = (11));

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
});})(c__22469__auto___35039,cs,m,dchan,dctr,done))
;
return ((function (switch__22357__auto__,c__22469__auto___35039,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22358__auto__ = null;
var cljs$core$async$mult_$_state_machine__22358__auto____0 = (function (){
var statearr_35035 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35035[(0)] = cljs$core$async$mult_$_state_machine__22358__auto__);

(statearr_35035[(1)] = (1));

return statearr_35035;
});
var cljs$core$async$mult_$_state_machine__22358__auto____1 = (function (state_34951){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_34951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e35036){if((e35036 instanceof Object)){
var ex__22361__auto__ = e35036;
var statearr_35037_35094 = state_34951;
(statearr_35037_35094[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35095 = state_34951;
state_34951 = G__35095;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22358__auto__ = function(state_34951){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22358__auto____1.call(this,state_34951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22358__auto____0;
cljs$core$async$mult_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22358__auto____1;
return cljs$core$async$mult_$_state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto___35039,cs,m,dchan,dctr,done))
})();
var state__22471__auto__ = (function (){var statearr_35038 = f__22470__auto__.call(null);
(statearr_35038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___35039);

return statearr_35038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto___35039,cs,m,dchan,dctr,done))
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
var args35096 = [];
var len__19571__auto___35099 = arguments.length;
var i__19572__auto___35100 = (0);
while(true){
if((i__19572__auto___35100 < len__19571__auto___35099)){
args35096.push((arguments[i__19572__auto___35100]));

var G__35101 = (i__19572__auto___35100 + (1));
i__19572__auto___35100 = G__35101;
continue;
} else {
}
break;
}

var G__35098 = args35096.length;
switch (G__35098) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35096.length)].join('')));

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
var len__19571__auto___35113 = arguments.length;
var i__19572__auto___35114 = (0);
while(true){
if((i__19572__auto___35114 < len__19571__auto___35113)){
args__19578__auto__.push((arguments[i__19572__auto___35114]));

var G__35115 = (i__19572__auto___35114 + (1));
i__19572__auto___35114 = G__35115;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((3) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19579__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35107){
var map__35108 = p__35107;
var map__35108__$1 = ((((!((map__35108 == null)))?((((map__35108.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35108.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35108):map__35108);
var opts = map__35108__$1;
var statearr_35110_35116 = state;
(statearr_35110_35116[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__35108,map__35108__$1,opts){
return (function (val){
var statearr_35111_35117 = state;
(statearr_35111_35117[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35108,map__35108__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_35112_35118 = state;
(statearr_35112_35118[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35103){
var G__35104 = cljs.core.first.call(null,seq35103);
var seq35103__$1 = cljs.core.next.call(null,seq35103);
var G__35105 = cljs.core.first.call(null,seq35103__$1);
var seq35103__$2 = cljs.core.next.call(null,seq35103__$1);
var G__35106 = cljs.core.first.call(null,seq35103__$2);
var seq35103__$3 = cljs.core.next.call(null,seq35103__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35104,G__35105,G__35106,seq35103__$3);
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
if(typeof cljs.core.async.t_cljs$core$async35284 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35284 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35285){
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
this.meta35285 = meta35285;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35286,meta35285__$1){
var self__ = this;
var _35286__$1 = this;
return (new cljs.core.async.t_cljs$core$async35284(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35285__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35284.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35286){
var self__ = this;
var _35286__$1 = this;
return self__.meta35285;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35284.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async35284.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35284.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async35284.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35284.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35284.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35284.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35284.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async35284.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35285","meta35285",1160124140,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35284.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35284.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35284";

cljs.core.async.t_cljs$core$async35284.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19102__auto__,writer__19103__auto__,opt__19104__auto__){
return cljs.core._write.call(null,writer__19103__auto__,"cljs.core.async/t_cljs$core$async35284");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async35284 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35284(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35285){
return (new cljs.core.async.t_cljs$core$async35284(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35285));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35284(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22469__auto___35449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto___35449,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto___35449,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35386){
var state_val_35387 = (state_35386[(1)]);
if((state_val_35387 === (7))){
var inst_35302 = (state_35386[(2)]);
var state_35386__$1 = state_35386;
var statearr_35388_35450 = state_35386__$1;
(statearr_35388_35450[(2)] = inst_35302);

(statearr_35388_35450[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (20))){
var inst_35314 = (state_35386[(7)]);
var state_35386__$1 = state_35386;
var statearr_35389_35451 = state_35386__$1;
(statearr_35389_35451[(2)] = inst_35314);

(statearr_35389_35451[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (27))){
var state_35386__$1 = state_35386;
var statearr_35390_35452 = state_35386__$1;
(statearr_35390_35452[(2)] = null);

(statearr_35390_35452[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (1))){
var inst_35290 = (state_35386[(8)]);
var inst_35290__$1 = calc_state.call(null);
var inst_35292 = (inst_35290__$1 == null);
var inst_35293 = cljs.core.not.call(null,inst_35292);
var state_35386__$1 = (function (){var statearr_35391 = state_35386;
(statearr_35391[(8)] = inst_35290__$1);

return statearr_35391;
})();
if(inst_35293){
var statearr_35392_35453 = state_35386__$1;
(statearr_35392_35453[(1)] = (2));

} else {
var statearr_35393_35454 = state_35386__$1;
(statearr_35393_35454[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (24))){
var inst_35346 = (state_35386[(9)]);
var inst_35337 = (state_35386[(10)]);
var inst_35360 = (state_35386[(11)]);
var inst_35360__$1 = inst_35337.call(null,inst_35346);
var state_35386__$1 = (function (){var statearr_35394 = state_35386;
(statearr_35394[(11)] = inst_35360__$1);

return statearr_35394;
})();
if(cljs.core.truth_(inst_35360__$1)){
var statearr_35395_35455 = state_35386__$1;
(statearr_35395_35455[(1)] = (29));

} else {
var statearr_35396_35456 = state_35386__$1;
(statearr_35396_35456[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (4))){
var inst_35305 = (state_35386[(2)]);
var state_35386__$1 = state_35386;
if(cljs.core.truth_(inst_35305)){
var statearr_35397_35457 = state_35386__$1;
(statearr_35397_35457[(1)] = (8));

} else {
var statearr_35398_35458 = state_35386__$1;
(statearr_35398_35458[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (15))){
var inst_35331 = (state_35386[(2)]);
var state_35386__$1 = state_35386;
if(cljs.core.truth_(inst_35331)){
var statearr_35399_35459 = state_35386__$1;
(statearr_35399_35459[(1)] = (19));

} else {
var statearr_35400_35460 = state_35386__$1;
(statearr_35400_35460[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (21))){
var inst_35336 = (state_35386[(12)]);
var inst_35336__$1 = (state_35386[(2)]);
var inst_35337 = cljs.core.get.call(null,inst_35336__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35338 = cljs.core.get.call(null,inst_35336__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35339 = cljs.core.get.call(null,inst_35336__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35386__$1 = (function (){var statearr_35401 = state_35386;
(statearr_35401[(10)] = inst_35337);

(statearr_35401[(12)] = inst_35336__$1);

(statearr_35401[(13)] = inst_35338);

return statearr_35401;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35386__$1,(22),inst_35339);
} else {
if((state_val_35387 === (31))){
var inst_35368 = (state_35386[(2)]);
var state_35386__$1 = state_35386;
if(cljs.core.truth_(inst_35368)){
var statearr_35402_35461 = state_35386__$1;
(statearr_35402_35461[(1)] = (32));

} else {
var statearr_35403_35462 = state_35386__$1;
(statearr_35403_35462[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (32))){
var inst_35345 = (state_35386[(14)]);
var state_35386__$1 = state_35386;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35386__$1,(35),out,inst_35345);
} else {
if((state_val_35387 === (33))){
var inst_35336 = (state_35386[(12)]);
var inst_35314 = inst_35336;
var state_35386__$1 = (function (){var statearr_35404 = state_35386;
(statearr_35404[(7)] = inst_35314);

return statearr_35404;
})();
var statearr_35405_35463 = state_35386__$1;
(statearr_35405_35463[(2)] = null);

(statearr_35405_35463[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (13))){
var inst_35314 = (state_35386[(7)]);
var inst_35321 = inst_35314.cljs$lang$protocol_mask$partition0$;
var inst_35322 = (inst_35321 & (64));
var inst_35323 = inst_35314.cljs$core$ISeq$;
var inst_35324 = (inst_35322) || (inst_35323);
var state_35386__$1 = state_35386;
if(cljs.core.truth_(inst_35324)){
var statearr_35406_35464 = state_35386__$1;
(statearr_35406_35464[(1)] = (16));

} else {
var statearr_35407_35465 = state_35386__$1;
(statearr_35407_35465[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (22))){
var inst_35346 = (state_35386[(9)]);
var inst_35345 = (state_35386[(14)]);
var inst_35344 = (state_35386[(2)]);
var inst_35345__$1 = cljs.core.nth.call(null,inst_35344,(0),null);
var inst_35346__$1 = cljs.core.nth.call(null,inst_35344,(1),null);
var inst_35347 = (inst_35345__$1 == null);
var inst_35348 = cljs.core._EQ_.call(null,inst_35346__$1,change);
var inst_35349 = (inst_35347) || (inst_35348);
var state_35386__$1 = (function (){var statearr_35408 = state_35386;
(statearr_35408[(9)] = inst_35346__$1);

(statearr_35408[(14)] = inst_35345__$1);

return statearr_35408;
})();
if(cljs.core.truth_(inst_35349)){
var statearr_35409_35466 = state_35386__$1;
(statearr_35409_35466[(1)] = (23));

} else {
var statearr_35410_35467 = state_35386__$1;
(statearr_35410_35467[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (36))){
var inst_35336 = (state_35386[(12)]);
var inst_35314 = inst_35336;
var state_35386__$1 = (function (){var statearr_35411 = state_35386;
(statearr_35411[(7)] = inst_35314);

return statearr_35411;
})();
var statearr_35412_35468 = state_35386__$1;
(statearr_35412_35468[(2)] = null);

(statearr_35412_35468[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (29))){
var inst_35360 = (state_35386[(11)]);
var state_35386__$1 = state_35386;
var statearr_35413_35469 = state_35386__$1;
(statearr_35413_35469[(2)] = inst_35360);

(statearr_35413_35469[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (6))){
var state_35386__$1 = state_35386;
var statearr_35414_35470 = state_35386__$1;
(statearr_35414_35470[(2)] = false);

(statearr_35414_35470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (28))){
var inst_35356 = (state_35386[(2)]);
var inst_35357 = calc_state.call(null);
var inst_35314 = inst_35357;
var state_35386__$1 = (function (){var statearr_35415 = state_35386;
(statearr_35415[(15)] = inst_35356);

(statearr_35415[(7)] = inst_35314);

return statearr_35415;
})();
var statearr_35416_35471 = state_35386__$1;
(statearr_35416_35471[(2)] = null);

(statearr_35416_35471[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (25))){
var inst_35382 = (state_35386[(2)]);
var state_35386__$1 = state_35386;
var statearr_35417_35472 = state_35386__$1;
(statearr_35417_35472[(2)] = inst_35382);

(statearr_35417_35472[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (34))){
var inst_35380 = (state_35386[(2)]);
var state_35386__$1 = state_35386;
var statearr_35418_35473 = state_35386__$1;
(statearr_35418_35473[(2)] = inst_35380);

(statearr_35418_35473[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (17))){
var state_35386__$1 = state_35386;
var statearr_35419_35474 = state_35386__$1;
(statearr_35419_35474[(2)] = false);

(statearr_35419_35474[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (3))){
var state_35386__$1 = state_35386;
var statearr_35420_35475 = state_35386__$1;
(statearr_35420_35475[(2)] = false);

(statearr_35420_35475[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (12))){
var inst_35384 = (state_35386[(2)]);
var state_35386__$1 = state_35386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35386__$1,inst_35384);
} else {
if((state_val_35387 === (2))){
var inst_35290 = (state_35386[(8)]);
var inst_35295 = inst_35290.cljs$lang$protocol_mask$partition0$;
var inst_35296 = (inst_35295 & (64));
var inst_35297 = inst_35290.cljs$core$ISeq$;
var inst_35298 = (inst_35296) || (inst_35297);
var state_35386__$1 = state_35386;
if(cljs.core.truth_(inst_35298)){
var statearr_35421_35476 = state_35386__$1;
(statearr_35421_35476[(1)] = (5));

} else {
var statearr_35422_35477 = state_35386__$1;
(statearr_35422_35477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (23))){
var inst_35345 = (state_35386[(14)]);
var inst_35351 = (inst_35345 == null);
var state_35386__$1 = state_35386;
if(cljs.core.truth_(inst_35351)){
var statearr_35423_35478 = state_35386__$1;
(statearr_35423_35478[(1)] = (26));

} else {
var statearr_35424_35479 = state_35386__$1;
(statearr_35424_35479[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (35))){
var inst_35371 = (state_35386[(2)]);
var state_35386__$1 = state_35386;
if(cljs.core.truth_(inst_35371)){
var statearr_35425_35480 = state_35386__$1;
(statearr_35425_35480[(1)] = (36));

} else {
var statearr_35426_35481 = state_35386__$1;
(statearr_35426_35481[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (19))){
var inst_35314 = (state_35386[(7)]);
var inst_35333 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35314);
var state_35386__$1 = state_35386;
var statearr_35427_35482 = state_35386__$1;
(statearr_35427_35482[(2)] = inst_35333);

(statearr_35427_35482[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (11))){
var inst_35314 = (state_35386[(7)]);
var inst_35318 = (inst_35314 == null);
var inst_35319 = cljs.core.not.call(null,inst_35318);
var state_35386__$1 = state_35386;
if(inst_35319){
var statearr_35428_35483 = state_35386__$1;
(statearr_35428_35483[(1)] = (13));

} else {
var statearr_35429_35484 = state_35386__$1;
(statearr_35429_35484[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (9))){
var inst_35290 = (state_35386[(8)]);
var state_35386__$1 = state_35386;
var statearr_35430_35485 = state_35386__$1;
(statearr_35430_35485[(2)] = inst_35290);

(statearr_35430_35485[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (5))){
var state_35386__$1 = state_35386;
var statearr_35431_35486 = state_35386__$1;
(statearr_35431_35486[(2)] = true);

(statearr_35431_35486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (14))){
var state_35386__$1 = state_35386;
var statearr_35432_35487 = state_35386__$1;
(statearr_35432_35487[(2)] = false);

(statearr_35432_35487[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (26))){
var inst_35346 = (state_35386[(9)]);
var inst_35353 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35346);
var state_35386__$1 = state_35386;
var statearr_35433_35488 = state_35386__$1;
(statearr_35433_35488[(2)] = inst_35353);

(statearr_35433_35488[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (16))){
var state_35386__$1 = state_35386;
var statearr_35434_35489 = state_35386__$1;
(statearr_35434_35489[(2)] = true);

(statearr_35434_35489[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (38))){
var inst_35376 = (state_35386[(2)]);
var state_35386__$1 = state_35386;
var statearr_35435_35490 = state_35386__$1;
(statearr_35435_35490[(2)] = inst_35376);

(statearr_35435_35490[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (30))){
var inst_35346 = (state_35386[(9)]);
var inst_35337 = (state_35386[(10)]);
var inst_35338 = (state_35386[(13)]);
var inst_35363 = cljs.core.empty_QMARK_.call(null,inst_35337);
var inst_35364 = inst_35338.call(null,inst_35346);
var inst_35365 = cljs.core.not.call(null,inst_35364);
var inst_35366 = (inst_35363) && (inst_35365);
var state_35386__$1 = state_35386;
var statearr_35436_35491 = state_35386__$1;
(statearr_35436_35491[(2)] = inst_35366);

(statearr_35436_35491[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (10))){
var inst_35290 = (state_35386[(8)]);
var inst_35310 = (state_35386[(2)]);
var inst_35311 = cljs.core.get.call(null,inst_35310,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35312 = cljs.core.get.call(null,inst_35310,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35313 = cljs.core.get.call(null,inst_35310,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35314 = inst_35290;
var state_35386__$1 = (function (){var statearr_35437 = state_35386;
(statearr_35437[(16)] = inst_35313);

(statearr_35437[(17)] = inst_35311);

(statearr_35437[(18)] = inst_35312);

(statearr_35437[(7)] = inst_35314);

return statearr_35437;
})();
var statearr_35438_35492 = state_35386__$1;
(statearr_35438_35492[(2)] = null);

(statearr_35438_35492[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (18))){
var inst_35328 = (state_35386[(2)]);
var state_35386__$1 = state_35386;
var statearr_35439_35493 = state_35386__$1;
(statearr_35439_35493[(2)] = inst_35328);

(statearr_35439_35493[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (37))){
var state_35386__$1 = state_35386;
var statearr_35440_35494 = state_35386__$1;
(statearr_35440_35494[(2)] = null);

(statearr_35440_35494[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (8))){
var inst_35290 = (state_35386[(8)]);
var inst_35307 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35290);
var state_35386__$1 = state_35386;
var statearr_35441_35495 = state_35386__$1;
(statearr_35441_35495[(2)] = inst_35307);

(statearr_35441_35495[(1)] = (10));


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
});})(c__22469__auto___35449,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22357__auto__,c__22469__auto___35449,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22358__auto__ = null;
var cljs$core$async$mix_$_state_machine__22358__auto____0 = (function (){
var statearr_35445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35445[(0)] = cljs$core$async$mix_$_state_machine__22358__auto__);

(statearr_35445[(1)] = (1));

return statearr_35445;
});
var cljs$core$async$mix_$_state_machine__22358__auto____1 = (function (state_35386){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_35386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e35446){if((e35446 instanceof Object)){
var ex__22361__auto__ = e35446;
var statearr_35447_35496 = state_35386;
(statearr_35447_35496[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35497 = state_35386;
state_35386 = G__35497;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22358__auto__ = function(state_35386){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22358__auto____1.call(this,state_35386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22358__auto____0;
cljs$core$async$mix_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22358__auto____1;
return cljs$core$async$mix_$_state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto___35449,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22471__auto__ = (function (){var statearr_35448 = f__22470__auto__.call(null);
(statearr_35448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___35449);

return statearr_35448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto___35449,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args35498 = [];
var len__19571__auto___35501 = arguments.length;
var i__19572__auto___35502 = (0);
while(true){
if((i__19572__auto___35502 < len__19571__auto___35501)){
args35498.push((arguments[i__19572__auto___35502]));

var G__35503 = (i__19572__auto___35502 + (1));
i__19572__auto___35502 = G__35503;
continue;
} else {
}
break;
}

var G__35500 = args35498.length;
switch (G__35500) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35498.length)].join('')));

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
var args35506 = [];
var len__19571__auto___35631 = arguments.length;
var i__19572__auto___35632 = (0);
while(true){
if((i__19572__auto___35632 < len__19571__auto___35631)){
args35506.push((arguments[i__19572__auto___35632]));

var G__35633 = (i__19572__auto___35632 + (1));
i__19572__auto___35632 = G__35633;
continue;
} else {
}
break;
}

var G__35508 = args35506.length;
switch (G__35508) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35506.length)].join('')));

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
return (function (p1__35505_SHARP_){
if(cljs.core.truth_(p1__35505_SHARP_.call(null,topic))){
return p1__35505_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35505_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18496__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35509 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35509 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35510){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35510 = meta35510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35511,meta35510__$1){
var self__ = this;
var _35511__$1 = this;
return (new cljs.core.async.t_cljs$core$async35509(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35510__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35509.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35511){
var self__ = this;
var _35511__$1 = this;
return self__.meta35510;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35509.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async35509.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35509.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async35509.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35509.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async35509.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35509.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35509.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35510","meta35510",-905803141,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35509.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35509.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35509";

cljs.core.async.t_cljs$core$async35509.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19102__auto__,writer__19103__auto__,opt__19104__auto__){
return cljs.core._write.call(null,writer__19103__auto__,"cljs.core.async/t_cljs$core$async35509");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async35509 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35509(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35510){
return (new cljs.core.async.t_cljs$core$async35509(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35510));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35509(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22469__auto___35635 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto___35635,mults,ensure_mult,p){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto___35635,mults,ensure_mult,p){
return (function (state_35583){
var state_val_35584 = (state_35583[(1)]);
if((state_val_35584 === (7))){
var inst_35579 = (state_35583[(2)]);
var state_35583__$1 = state_35583;
var statearr_35585_35636 = state_35583__$1;
(statearr_35585_35636[(2)] = inst_35579);

(statearr_35585_35636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (20))){
var state_35583__$1 = state_35583;
var statearr_35586_35637 = state_35583__$1;
(statearr_35586_35637[(2)] = null);

(statearr_35586_35637[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (1))){
var state_35583__$1 = state_35583;
var statearr_35587_35638 = state_35583__$1;
(statearr_35587_35638[(2)] = null);

(statearr_35587_35638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (24))){
var inst_35562 = (state_35583[(7)]);
var inst_35571 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35562);
var state_35583__$1 = state_35583;
var statearr_35588_35639 = state_35583__$1;
(statearr_35588_35639[(2)] = inst_35571);

(statearr_35588_35639[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (4))){
var inst_35514 = (state_35583[(8)]);
var inst_35514__$1 = (state_35583[(2)]);
var inst_35515 = (inst_35514__$1 == null);
var state_35583__$1 = (function (){var statearr_35589 = state_35583;
(statearr_35589[(8)] = inst_35514__$1);

return statearr_35589;
})();
if(cljs.core.truth_(inst_35515)){
var statearr_35590_35640 = state_35583__$1;
(statearr_35590_35640[(1)] = (5));

} else {
var statearr_35591_35641 = state_35583__$1;
(statearr_35591_35641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (15))){
var inst_35556 = (state_35583[(2)]);
var state_35583__$1 = state_35583;
var statearr_35592_35642 = state_35583__$1;
(statearr_35592_35642[(2)] = inst_35556);

(statearr_35592_35642[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (21))){
var inst_35576 = (state_35583[(2)]);
var state_35583__$1 = (function (){var statearr_35593 = state_35583;
(statearr_35593[(9)] = inst_35576);

return statearr_35593;
})();
var statearr_35594_35643 = state_35583__$1;
(statearr_35594_35643[(2)] = null);

(statearr_35594_35643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (13))){
var inst_35538 = (state_35583[(10)]);
var inst_35540 = cljs.core.chunked_seq_QMARK_.call(null,inst_35538);
var state_35583__$1 = state_35583;
if(inst_35540){
var statearr_35595_35644 = state_35583__$1;
(statearr_35595_35644[(1)] = (16));

} else {
var statearr_35596_35645 = state_35583__$1;
(statearr_35596_35645[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (22))){
var inst_35568 = (state_35583[(2)]);
var state_35583__$1 = state_35583;
if(cljs.core.truth_(inst_35568)){
var statearr_35597_35646 = state_35583__$1;
(statearr_35597_35646[(1)] = (23));

} else {
var statearr_35598_35647 = state_35583__$1;
(statearr_35598_35647[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (6))){
var inst_35514 = (state_35583[(8)]);
var inst_35564 = (state_35583[(11)]);
var inst_35562 = (state_35583[(7)]);
var inst_35562__$1 = topic_fn.call(null,inst_35514);
var inst_35563 = cljs.core.deref.call(null,mults);
var inst_35564__$1 = cljs.core.get.call(null,inst_35563,inst_35562__$1);
var state_35583__$1 = (function (){var statearr_35599 = state_35583;
(statearr_35599[(11)] = inst_35564__$1);

(statearr_35599[(7)] = inst_35562__$1);

return statearr_35599;
})();
if(cljs.core.truth_(inst_35564__$1)){
var statearr_35600_35648 = state_35583__$1;
(statearr_35600_35648[(1)] = (19));

} else {
var statearr_35601_35649 = state_35583__$1;
(statearr_35601_35649[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (25))){
var inst_35573 = (state_35583[(2)]);
var state_35583__$1 = state_35583;
var statearr_35602_35650 = state_35583__$1;
(statearr_35602_35650[(2)] = inst_35573);

(statearr_35602_35650[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (17))){
var inst_35538 = (state_35583[(10)]);
var inst_35547 = cljs.core.first.call(null,inst_35538);
var inst_35548 = cljs.core.async.muxch_STAR_.call(null,inst_35547);
var inst_35549 = cljs.core.async.close_BANG_.call(null,inst_35548);
var inst_35550 = cljs.core.next.call(null,inst_35538);
var inst_35524 = inst_35550;
var inst_35525 = null;
var inst_35526 = (0);
var inst_35527 = (0);
var state_35583__$1 = (function (){var statearr_35603 = state_35583;
(statearr_35603[(12)] = inst_35524);

(statearr_35603[(13)] = inst_35525);

(statearr_35603[(14)] = inst_35526);

(statearr_35603[(15)] = inst_35549);

(statearr_35603[(16)] = inst_35527);

return statearr_35603;
})();
var statearr_35604_35651 = state_35583__$1;
(statearr_35604_35651[(2)] = null);

(statearr_35604_35651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (3))){
var inst_35581 = (state_35583[(2)]);
var state_35583__$1 = state_35583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35583__$1,inst_35581);
} else {
if((state_val_35584 === (12))){
var inst_35558 = (state_35583[(2)]);
var state_35583__$1 = state_35583;
var statearr_35605_35652 = state_35583__$1;
(statearr_35605_35652[(2)] = inst_35558);

(statearr_35605_35652[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (2))){
var state_35583__$1 = state_35583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35583__$1,(4),ch);
} else {
if((state_val_35584 === (23))){
var state_35583__$1 = state_35583;
var statearr_35606_35653 = state_35583__$1;
(statearr_35606_35653[(2)] = null);

(statearr_35606_35653[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (19))){
var inst_35514 = (state_35583[(8)]);
var inst_35564 = (state_35583[(11)]);
var inst_35566 = cljs.core.async.muxch_STAR_.call(null,inst_35564);
var state_35583__$1 = state_35583;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35583__$1,(22),inst_35566,inst_35514);
} else {
if((state_val_35584 === (11))){
var inst_35524 = (state_35583[(12)]);
var inst_35538 = (state_35583[(10)]);
var inst_35538__$1 = cljs.core.seq.call(null,inst_35524);
var state_35583__$1 = (function (){var statearr_35607 = state_35583;
(statearr_35607[(10)] = inst_35538__$1);

return statearr_35607;
})();
if(inst_35538__$1){
var statearr_35608_35654 = state_35583__$1;
(statearr_35608_35654[(1)] = (13));

} else {
var statearr_35609_35655 = state_35583__$1;
(statearr_35609_35655[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (9))){
var inst_35560 = (state_35583[(2)]);
var state_35583__$1 = state_35583;
var statearr_35610_35656 = state_35583__$1;
(statearr_35610_35656[(2)] = inst_35560);

(statearr_35610_35656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (5))){
var inst_35521 = cljs.core.deref.call(null,mults);
var inst_35522 = cljs.core.vals.call(null,inst_35521);
var inst_35523 = cljs.core.seq.call(null,inst_35522);
var inst_35524 = inst_35523;
var inst_35525 = null;
var inst_35526 = (0);
var inst_35527 = (0);
var state_35583__$1 = (function (){var statearr_35611 = state_35583;
(statearr_35611[(12)] = inst_35524);

(statearr_35611[(13)] = inst_35525);

(statearr_35611[(14)] = inst_35526);

(statearr_35611[(16)] = inst_35527);

return statearr_35611;
})();
var statearr_35612_35657 = state_35583__$1;
(statearr_35612_35657[(2)] = null);

(statearr_35612_35657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (14))){
var state_35583__$1 = state_35583;
var statearr_35616_35658 = state_35583__$1;
(statearr_35616_35658[(2)] = null);

(statearr_35616_35658[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (16))){
var inst_35538 = (state_35583[(10)]);
var inst_35542 = cljs.core.chunk_first.call(null,inst_35538);
var inst_35543 = cljs.core.chunk_rest.call(null,inst_35538);
var inst_35544 = cljs.core.count.call(null,inst_35542);
var inst_35524 = inst_35543;
var inst_35525 = inst_35542;
var inst_35526 = inst_35544;
var inst_35527 = (0);
var state_35583__$1 = (function (){var statearr_35617 = state_35583;
(statearr_35617[(12)] = inst_35524);

(statearr_35617[(13)] = inst_35525);

(statearr_35617[(14)] = inst_35526);

(statearr_35617[(16)] = inst_35527);

return statearr_35617;
})();
var statearr_35618_35659 = state_35583__$1;
(statearr_35618_35659[(2)] = null);

(statearr_35618_35659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (10))){
var inst_35524 = (state_35583[(12)]);
var inst_35525 = (state_35583[(13)]);
var inst_35526 = (state_35583[(14)]);
var inst_35527 = (state_35583[(16)]);
var inst_35532 = cljs.core._nth.call(null,inst_35525,inst_35527);
var inst_35533 = cljs.core.async.muxch_STAR_.call(null,inst_35532);
var inst_35534 = cljs.core.async.close_BANG_.call(null,inst_35533);
var inst_35535 = (inst_35527 + (1));
var tmp35613 = inst_35524;
var tmp35614 = inst_35525;
var tmp35615 = inst_35526;
var inst_35524__$1 = tmp35613;
var inst_35525__$1 = tmp35614;
var inst_35526__$1 = tmp35615;
var inst_35527__$1 = inst_35535;
var state_35583__$1 = (function (){var statearr_35619 = state_35583;
(statearr_35619[(12)] = inst_35524__$1);

(statearr_35619[(13)] = inst_35525__$1);

(statearr_35619[(14)] = inst_35526__$1);

(statearr_35619[(16)] = inst_35527__$1);

(statearr_35619[(17)] = inst_35534);

return statearr_35619;
})();
var statearr_35620_35660 = state_35583__$1;
(statearr_35620_35660[(2)] = null);

(statearr_35620_35660[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (18))){
var inst_35553 = (state_35583[(2)]);
var state_35583__$1 = state_35583;
var statearr_35621_35661 = state_35583__$1;
(statearr_35621_35661[(2)] = inst_35553);

(statearr_35621_35661[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35584 === (8))){
var inst_35526 = (state_35583[(14)]);
var inst_35527 = (state_35583[(16)]);
var inst_35529 = (inst_35527 < inst_35526);
var inst_35530 = inst_35529;
var state_35583__$1 = state_35583;
if(cljs.core.truth_(inst_35530)){
var statearr_35622_35662 = state_35583__$1;
(statearr_35622_35662[(1)] = (10));

} else {
var statearr_35623_35663 = state_35583__$1;
(statearr_35623_35663[(1)] = (11));

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
});})(c__22469__auto___35635,mults,ensure_mult,p))
;
return ((function (switch__22357__auto__,c__22469__auto___35635,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22358__auto__ = null;
var cljs$core$async$state_machine__22358__auto____0 = (function (){
var statearr_35627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35627[(0)] = cljs$core$async$state_machine__22358__auto__);

(statearr_35627[(1)] = (1));

return statearr_35627;
});
var cljs$core$async$state_machine__22358__auto____1 = (function (state_35583){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_35583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e35628){if((e35628 instanceof Object)){
var ex__22361__auto__ = e35628;
var statearr_35629_35664 = state_35583;
(statearr_35629_35664[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35665 = state_35583;
state_35583 = G__35665;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$state_machine__22358__auto__ = function(state_35583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22358__auto____1.call(this,state_35583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22358__auto____0;
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22358__auto____1;
return cljs$core$async$state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto___35635,mults,ensure_mult,p))
})();
var state__22471__auto__ = (function (){var statearr_35630 = f__22470__auto__.call(null);
(statearr_35630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___35635);

return statearr_35630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto___35635,mults,ensure_mult,p))
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
var args35666 = [];
var len__19571__auto___35669 = arguments.length;
var i__19572__auto___35670 = (0);
while(true){
if((i__19572__auto___35670 < len__19571__auto___35669)){
args35666.push((arguments[i__19572__auto___35670]));

var G__35671 = (i__19572__auto___35670 + (1));
i__19572__auto___35670 = G__35671;
continue;
} else {
}
break;
}

var G__35668 = args35666.length;
switch (G__35668) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35666.length)].join('')));

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
var args35673 = [];
var len__19571__auto___35676 = arguments.length;
var i__19572__auto___35677 = (0);
while(true){
if((i__19572__auto___35677 < len__19571__auto___35676)){
args35673.push((arguments[i__19572__auto___35677]));

var G__35678 = (i__19572__auto___35677 + (1));
i__19572__auto___35677 = G__35678;
continue;
} else {
}
break;
}

var G__35675 = args35673.length;
switch (G__35675) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35673.length)].join('')));

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
var args35680 = [];
var len__19571__auto___35751 = arguments.length;
var i__19572__auto___35752 = (0);
while(true){
if((i__19572__auto___35752 < len__19571__auto___35751)){
args35680.push((arguments[i__19572__auto___35752]));

var G__35753 = (i__19572__auto___35752 + (1));
i__19572__auto___35752 = G__35753;
continue;
} else {
}
break;
}

var G__35682 = args35680.length;
switch (G__35682) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35680.length)].join('')));

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
var c__22469__auto___35755 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto___35755,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto___35755,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35721){
var state_val_35722 = (state_35721[(1)]);
if((state_val_35722 === (7))){
var state_35721__$1 = state_35721;
var statearr_35723_35756 = state_35721__$1;
(statearr_35723_35756[(2)] = null);

(statearr_35723_35756[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35722 === (1))){
var state_35721__$1 = state_35721;
var statearr_35724_35757 = state_35721__$1;
(statearr_35724_35757[(2)] = null);

(statearr_35724_35757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35722 === (4))){
var inst_35685 = (state_35721[(7)]);
var inst_35687 = (inst_35685 < cnt);
var state_35721__$1 = state_35721;
if(cljs.core.truth_(inst_35687)){
var statearr_35725_35758 = state_35721__$1;
(statearr_35725_35758[(1)] = (6));

} else {
var statearr_35726_35759 = state_35721__$1;
(statearr_35726_35759[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35722 === (15))){
var inst_35717 = (state_35721[(2)]);
var state_35721__$1 = state_35721;
var statearr_35727_35760 = state_35721__$1;
(statearr_35727_35760[(2)] = inst_35717);

(statearr_35727_35760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35722 === (13))){
var inst_35710 = cljs.core.async.close_BANG_.call(null,out);
var state_35721__$1 = state_35721;
var statearr_35728_35761 = state_35721__$1;
(statearr_35728_35761[(2)] = inst_35710);

(statearr_35728_35761[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35722 === (6))){
var state_35721__$1 = state_35721;
var statearr_35729_35762 = state_35721__$1;
(statearr_35729_35762[(2)] = null);

(statearr_35729_35762[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35722 === (3))){
var inst_35719 = (state_35721[(2)]);
var state_35721__$1 = state_35721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35721__$1,inst_35719);
} else {
if((state_val_35722 === (12))){
var inst_35707 = (state_35721[(8)]);
var inst_35707__$1 = (state_35721[(2)]);
var inst_35708 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35707__$1);
var state_35721__$1 = (function (){var statearr_35730 = state_35721;
(statearr_35730[(8)] = inst_35707__$1);

return statearr_35730;
})();
if(cljs.core.truth_(inst_35708)){
var statearr_35731_35763 = state_35721__$1;
(statearr_35731_35763[(1)] = (13));

} else {
var statearr_35732_35764 = state_35721__$1;
(statearr_35732_35764[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35722 === (2))){
var inst_35684 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35685 = (0);
var state_35721__$1 = (function (){var statearr_35733 = state_35721;
(statearr_35733[(7)] = inst_35685);

(statearr_35733[(9)] = inst_35684);

return statearr_35733;
})();
var statearr_35734_35765 = state_35721__$1;
(statearr_35734_35765[(2)] = null);

(statearr_35734_35765[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35722 === (11))){
var inst_35685 = (state_35721[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35721,(10),Object,null,(9));
var inst_35694 = chs__$1.call(null,inst_35685);
var inst_35695 = done.call(null,inst_35685);
var inst_35696 = cljs.core.async.take_BANG_.call(null,inst_35694,inst_35695);
var state_35721__$1 = state_35721;
var statearr_35735_35766 = state_35721__$1;
(statearr_35735_35766[(2)] = inst_35696);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35721__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35722 === (9))){
var inst_35685 = (state_35721[(7)]);
var inst_35698 = (state_35721[(2)]);
var inst_35699 = (inst_35685 + (1));
var inst_35685__$1 = inst_35699;
var state_35721__$1 = (function (){var statearr_35736 = state_35721;
(statearr_35736[(7)] = inst_35685__$1);

(statearr_35736[(10)] = inst_35698);

return statearr_35736;
})();
var statearr_35737_35767 = state_35721__$1;
(statearr_35737_35767[(2)] = null);

(statearr_35737_35767[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35722 === (5))){
var inst_35705 = (state_35721[(2)]);
var state_35721__$1 = (function (){var statearr_35738 = state_35721;
(statearr_35738[(11)] = inst_35705);

return statearr_35738;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35721__$1,(12),dchan);
} else {
if((state_val_35722 === (14))){
var inst_35707 = (state_35721[(8)]);
var inst_35712 = cljs.core.apply.call(null,f,inst_35707);
var state_35721__$1 = state_35721;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35721__$1,(16),out,inst_35712);
} else {
if((state_val_35722 === (16))){
var inst_35714 = (state_35721[(2)]);
var state_35721__$1 = (function (){var statearr_35739 = state_35721;
(statearr_35739[(12)] = inst_35714);

return statearr_35739;
})();
var statearr_35740_35768 = state_35721__$1;
(statearr_35740_35768[(2)] = null);

(statearr_35740_35768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35722 === (10))){
var inst_35689 = (state_35721[(2)]);
var inst_35690 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35721__$1 = (function (){var statearr_35741 = state_35721;
(statearr_35741[(13)] = inst_35689);

return statearr_35741;
})();
var statearr_35742_35769 = state_35721__$1;
(statearr_35742_35769[(2)] = inst_35690);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35721__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35722 === (8))){
var inst_35703 = (state_35721[(2)]);
var state_35721__$1 = state_35721;
var statearr_35743_35770 = state_35721__$1;
(statearr_35743_35770[(2)] = inst_35703);

(statearr_35743_35770[(1)] = (5));


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
});})(c__22469__auto___35755,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22357__auto__,c__22469__auto___35755,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22358__auto__ = null;
var cljs$core$async$state_machine__22358__auto____0 = (function (){
var statearr_35747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35747[(0)] = cljs$core$async$state_machine__22358__auto__);

(statearr_35747[(1)] = (1));

return statearr_35747;
});
var cljs$core$async$state_machine__22358__auto____1 = (function (state_35721){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_35721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e35748){if((e35748 instanceof Object)){
var ex__22361__auto__ = e35748;
var statearr_35749_35771 = state_35721;
(statearr_35749_35771[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35772 = state_35721;
state_35721 = G__35772;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$state_machine__22358__auto__ = function(state_35721){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22358__auto____1.call(this,state_35721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22358__auto____0;
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22358__auto____1;
return cljs$core$async$state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto___35755,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22471__auto__ = (function (){var statearr_35750 = f__22470__auto__.call(null);
(statearr_35750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___35755);

return statearr_35750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto___35755,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args35774 = [];
var len__19571__auto___35832 = arguments.length;
var i__19572__auto___35833 = (0);
while(true){
if((i__19572__auto___35833 < len__19571__auto___35832)){
args35774.push((arguments[i__19572__auto___35833]));

var G__35834 = (i__19572__auto___35833 + (1));
i__19572__auto___35833 = G__35834;
continue;
} else {
}
break;
}

var G__35776 = args35774.length;
switch (G__35776) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35774.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22469__auto___35836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto___35836,out){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto___35836,out){
return (function (state_35808){
var state_val_35809 = (state_35808[(1)]);
if((state_val_35809 === (7))){
var inst_35787 = (state_35808[(7)]);
var inst_35788 = (state_35808[(8)]);
var inst_35787__$1 = (state_35808[(2)]);
var inst_35788__$1 = cljs.core.nth.call(null,inst_35787__$1,(0),null);
var inst_35789 = cljs.core.nth.call(null,inst_35787__$1,(1),null);
var inst_35790 = (inst_35788__$1 == null);
var state_35808__$1 = (function (){var statearr_35810 = state_35808;
(statearr_35810[(7)] = inst_35787__$1);

(statearr_35810[(8)] = inst_35788__$1);

(statearr_35810[(9)] = inst_35789);

return statearr_35810;
})();
if(cljs.core.truth_(inst_35790)){
var statearr_35811_35837 = state_35808__$1;
(statearr_35811_35837[(1)] = (8));

} else {
var statearr_35812_35838 = state_35808__$1;
(statearr_35812_35838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35809 === (1))){
var inst_35777 = cljs.core.vec.call(null,chs);
var inst_35778 = inst_35777;
var state_35808__$1 = (function (){var statearr_35813 = state_35808;
(statearr_35813[(10)] = inst_35778);

return statearr_35813;
})();
var statearr_35814_35839 = state_35808__$1;
(statearr_35814_35839[(2)] = null);

(statearr_35814_35839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35809 === (4))){
var inst_35778 = (state_35808[(10)]);
var state_35808__$1 = state_35808;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35808__$1,(7),inst_35778);
} else {
if((state_val_35809 === (6))){
var inst_35804 = (state_35808[(2)]);
var state_35808__$1 = state_35808;
var statearr_35815_35840 = state_35808__$1;
(statearr_35815_35840[(2)] = inst_35804);

(statearr_35815_35840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35809 === (3))){
var inst_35806 = (state_35808[(2)]);
var state_35808__$1 = state_35808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35808__$1,inst_35806);
} else {
if((state_val_35809 === (2))){
var inst_35778 = (state_35808[(10)]);
var inst_35780 = cljs.core.count.call(null,inst_35778);
var inst_35781 = (inst_35780 > (0));
var state_35808__$1 = state_35808;
if(cljs.core.truth_(inst_35781)){
var statearr_35817_35841 = state_35808__$1;
(statearr_35817_35841[(1)] = (4));

} else {
var statearr_35818_35842 = state_35808__$1;
(statearr_35818_35842[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35809 === (11))){
var inst_35778 = (state_35808[(10)]);
var inst_35797 = (state_35808[(2)]);
var tmp35816 = inst_35778;
var inst_35778__$1 = tmp35816;
var state_35808__$1 = (function (){var statearr_35819 = state_35808;
(statearr_35819[(11)] = inst_35797);

(statearr_35819[(10)] = inst_35778__$1);

return statearr_35819;
})();
var statearr_35820_35843 = state_35808__$1;
(statearr_35820_35843[(2)] = null);

(statearr_35820_35843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35809 === (9))){
var inst_35788 = (state_35808[(8)]);
var state_35808__$1 = state_35808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35808__$1,(11),out,inst_35788);
} else {
if((state_val_35809 === (5))){
var inst_35802 = cljs.core.async.close_BANG_.call(null,out);
var state_35808__$1 = state_35808;
var statearr_35821_35844 = state_35808__$1;
(statearr_35821_35844[(2)] = inst_35802);

(statearr_35821_35844[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35809 === (10))){
var inst_35800 = (state_35808[(2)]);
var state_35808__$1 = state_35808;
var statearr_35822_35845 = state_35808__$1;
(statearr_35822_35845[(2)] = inst_35800);

(statearr_35822_35845[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35809 === (8))){
var inst_35778 = (state_35808[(10)]);
var inst_35787 = (state_35808[(7)]);
var inst_35788 = (state_35808[(8)]);
var inst_35789 = (state_35808[(9)]);
var inst_35792 = (function (){var cs = inst_35778;
var vec__35783 = inst_35787;
var v = inst_35788;
var c = inst_35789;
return ((function (cs,vec__35783,v,c,inst_35778,inst_35787,inst_35788,inst_35789,state_val_35809,c__22469__auto___35836,out){
return (function (p1__35773_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35773_SHARP_);
});
;})(cs,vec__35783,v,c,inst_35778,inst_35787,inst_35788,inst_35789,state_val_35809,c__22469__auto___35836,out))
})();
var inst_35793 = cljs.core.filterv.call(null,inst_35792,inst_35778);
var inst_35778__$1 = inst_35793;
var state_35808__$1 = (function (){var statearr_35823 = state_35808;
(statearr_35823[(10)] = inst_35778__$1);

return statearr_35823;
})();
var statearr_35824_35846 = state_35808__$1;
(statearr_35824_35846[(2)] = null);

(statearr_35824_35846[(1)] = (2));


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
});})(c__22469__auto___35836,out))
;
return ((function (switch__22357__auto__,c__22469__auto___35836,out){
return (function() {
var cljs$core$async$state_machine__22358__auto__ = null;
var cljs$core$async$state_machine__22358__auto____0 = (function (){
var statearr_35828 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35828[(0)] = cljs$core$async$state_machine__22358__auto__);

(statearr_35828[(1)] = (1));

return statearr_35828;
});
var cljs$core$async$state_machine__22358__auto____1 = (function (state_35808){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_35808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e35829){if((e35829 instanceof Object)){
var ex__22361__auto__ = e35829;
var statearr_35830_35847 = state_35808;
(statearr_35830_35847[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35848 = state_35808;
state_35808 = G__35848;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$state_machine__22358__auto__ = function(state_35808){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22358__auto____1.call(this,state_35808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22358__auto____0;
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22358__auto____1;
return cljs$core$async$state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto___35836,out))
})();
var state__22471__auto__ = (function (){var statearr_35831 = f__22470__auto__.call(null);
(statearr_35831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___35836);

return statearr_35831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto___35836,out))
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
var args35849 = [];
var len__19571__auto___35898 = arguments.length;
var i__19572__auto___35899 = (0);
while(true){
if((i__19572__auto___35899 < len__19571__auto___35898)){
args35849.push((arguments[i__19572__auto___35899]));

var G__35900 = (i__19572__auto___35899 + (1));
i__19572__auto___35899 = G__35900;
continue;
} else {
}
break;
}

var G__35851 = args35849.length;
switch (G__35851) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35849.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22469__auto___35902 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto___35902,out){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto___35902,out){
return (function (state_35875){
var state_val_35876 = (state_35875[(1)]);
if((state_val_35876 === (7))){
var inst_35857 = (state_35875[(7)]);
var inst_35857__$1 = (state_35875[(2)]);
var inst_35858 = (inst_35857__$1 == null);
var inst_35859 = cljs.core.not.call(null,inst_35858);
var state_35875__$1 = (function (){var statearr_35877 = state_35875;
(statearr_35877[(7)] = inst_35857__$1);

return statearr_35877;
})();
if(inst_35859){
var statearr_35878_35903 = state_35875__$1;
(statearr_35878_35903[(1)] = (8));

} else {
var statearr_35879_35904 = state_35875__$1;
(statearr_35879_35904[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35876 === (1))){
var inst_35852 = (0);
var state_35875__$1 = (function (){var statearr_35880 = state_35875;
(statearr_35880[(8)] = inst_35852);

return statearr_35880;
})();
var statearr_35881_35905 = state_35875__$1;
(statearr_35881_35905[(2)] = null);

(statearr_35881_35905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35876 === (4))){
var state_35875__$1 = state_35875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35875__$1,(7),ch);
} else {
if((state_val_35876 === (6))){
var inst_35870 = (state_35875[(2)]);
var state_35875__$1 = state_35875;
var statearr_35882_35906 = state_35875__$1;
(statearr_35882_35906[(2)] = inst_35870);

(statearr_35882_35906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35876 === (3))){
var inst_35872 = (state_35875[(2)]);
var inst_35873 = cljs.core.async.close_BANG_.call(null,out);
var state_35875__$1 = (function (){var statearr_35883 = state_35875;
(statearr_35883[(9)] = inst_35872);

return statearr_35883;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35875__$1,inst_35873);
} else {
if((state_val_35876 === (2))){
var inst_35852 = (state_35875[(8)]);
var inst_35854 = (inst_35852 < n);
var state_35875__$1 = state_35875;
if(cljs.core.truth_(inst_35854)){
var statearr_35884_35907 = state_35875__$1;
(statearr_35884_35907[(1)] = (4));

} else {
var statearr_35885_35908 = state_35875__$1;
(statearr_35885_35908[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35876 === (11))){
var inst_35852 = (state_35875[(8)]);
var inst_35862 = (state_35875[(2)]);
var inst_35863 = (inst_35852 + (1));
var inst_35852__$1 = inst_35863;
var state_35875__$1 = (function (){var statearr_35886 = state_35875;
(statearr_35886[(10)] = inst_35862);

(statearr_35886[(8)] = inst_35852__$1);

return statearr_35886;
})();
var statearr_35887_35909 = state_35875__$1;
(statearr_35887_35909[(2)] = null);

(statearr_35887_35909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35876 === (9))){
var state_35875__$1 = state_35875;
var statearr_35888_35910 = state_35875__$1;
(statearr_35888_35910[(2)] = null);

(statearr_35888_35910[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35876 === (5))){
var state_35875__$1 = state_35875;
var statearr_35889_35911 = state_35875__$1;
(statearr_35889_35911[(2)] = null);

(statearr_35889_35911[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35876 === (10))){
var inst_35867 = (state_35875[(2)]);
var state_35875__$1 = state_35875;
var statearr_35890_35912 = state_35875__$1;
(statearr_35890_35912[(2)] = inst_35867);

(statearr_35890_35912[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35876 === (8))){
var inst_35857 = (state_35875[(7)]);
var state_35875__$1 = state_35875;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35875__$1,(11),out,inst_35857);
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
});})(c__22469__auto___35902,out))
;
return ((function (switch__22357__auto__,c__22469__auto___35902,out){
return (function() {
var cljs$core$async$state_machine__22358__auto__ = null;
var cljs$core$async$state_machine__22358__auto____0 = (function (){
var statearr_35894 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35894[(0)] = cljs$core$async$state_machine__22358__auto__);

(statearr_35894[(1)] = (1));

return statearr_35894;
});
var cljs$core$async$state_machine__22358__auto____1 = (function (state_35875){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_35875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e35895){if((e35895 instanceof Object)){
var ex__22361__auto__ = e35895;
var statearr_35896_35913 = state_35875;
(statearr_35896_35913[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35914 = state_35875;
state_35875 = G__35914;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$state_machine__22358__auto__ = function(state_35875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22358__auto____1.call(this,state_35875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22358__auto____0;
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22358__auto____1;
return cljs$core$async$state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto___35902,out))
})();
var state__22471__auto__ = (function (){var statearr_35897 = f__22470__auto__.call(null);
(statearr_35897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___35902);

return statearr_35897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto___35902,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35922 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35922 = (function (map_LT_,f,ch,meta35923){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta35923 = meta35923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35924,meta35923__$1){
var self__ = this;
var _35924__$1 = this;
return (new cljs.core.async.t_cljs$core$async35922(self__.map_LT_,self__.f,self__.ch,meta35923__$1));
});

cljs.core.async.t_cljs$core$async35922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35924){
var self__ = this;
var _35924__$1 = this;
return self__.meta35923;
});

cljs.core.async.t_cljs$core$async35922.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async35922.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35922.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35922.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async35922.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35925 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35925 = (function (map_LT_,f,ch,meta35923,_,fn1,meta35926){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta35923 = meta35923;
this._ = _;
this.fn1 = fn1;
this.meta35926 = meta35926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35927,meta35926__$1){
var self__ = this;
var _35927__$1 = this;
return (new cljs.core.async.t_cljs$core$async35925(self__.map_LT_,self__.f,self__.ch,self__.meta35923,self__._,self__.fn1,meta35926__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35925.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35927){
var self__ = this;
var _35927__$1 = this;
return self__.meta35926;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35925.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35925.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35925.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35925.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35915_SHARP_){
return f1.call(null,(((p1__35915_SHARP_ == null))?null:self__.f.call(null,p1__35915_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35925.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35923","meta35923",-2135349399,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35922","cljs.core.async/t_cljs$core$async35922",860654944,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35926","meta35926",-414464790,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35925.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35925.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35925";

cljs.core.async.t_cljs$core$async35925.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19102__auto__,writer__19103__auto__,opt__19104__auto__){
return cljs.core._write.call(null,writer__19103__auto__,"cljs.core.async/t_cljs$core$async35925");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async35925 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35925(map_LT___$1,f__$1,ch__$1,meta35923__$1,___$2,fn1__$1,meta35926){
return (new cljs.core.async.t_cljs$core$async35925(map_LT___$1,f__$1,ch__$1,meta35923__$1,___$2,fn1__$1,meta35926));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35925(self__.map_LT_,self__.f,self__.ch,self__.meta35923,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async35922.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async35922.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35922.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35923","meta35923",-2135349399,null)], null);
});

cljs.core.async.t_cljs$core$async35922.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35922.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35922";

cljs.core.async.t_cljs$core$async35922.cljs$lang$ctorPrWriter = (function (this__19102__auto__,writer__19103__auto__,opt__19104__auto__){
return cljs.core._write.call(null,writer__19103__auto__,"cljs.core.async/t_cljs$core$async35922");
});

cljs.core.async.__GT_t_cljs$core$async35922 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35922(map_LT___$1,f__$1,ch__$1,meta35923){
return (new cljs.core.async.t_cljs$core$async35922(map_LT___$1,f__$1,ch__$1,meta35923));
});

}

return (new cljs.core.async.t_cljs$core$async35922(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35931 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35931 = (function (map_GT_,f,ch,meta35932){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta35932 = meta35932;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35933,meta35932__$1){
var self__ = this;
var _35933__$1 = this;
return (new cljs.core.async.t_cljs$core$async35931(self__.map_GT_,self__.f,self__.ch,meta35932__$1));
});

cljs.core.async.t_cljs$core$async35931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35933){
var self__ = this;
var _35933__$1 = this;
return self__.meta35932;
});

cljs.core.async.t_cljs$core$async35931.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async35931.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35931.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async35931.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35931.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async35931.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35931.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35932","meta35932",52467975,null)], null);
});

cljs.core.async.t_cljs$core$async35931.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35931.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35931";

cljs.core.async.t_cljs$core$async35931.cljs$lang$ctorPrWriter = (function (this__19102__auto__,writer__19103__auto__,opt__19104__auto__){
return cljs.core._write.call(null,writer__19103__auto__,"cljs.core.async/t_cljs$core$async35931");
});

cljs.core.async.__GT_t_cljs$core$async35931 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35931(map_GT___$1,f__$1,ch__$1,meta35932){
return (new cljs.core.async.t_cljs$core$async35931(map_GT___$1,f__$1,ch__$1,meta35932));
});

}

return (new cljs.core.async.t_cljs$core$async35931(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35937 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35937 = (function (filter_GT_,p,ch,meta35938){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta35938 = meta35938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35939,meta35938__$1){
var self__ = this;
var _35939__$1 = this;
return (new cljs.core.async.t_cljs$core$async35937(self__.filter_GT_,self__.p,self__.ch,meta35938__$1));
});

cljs.core.async.t_cljs$core$async35937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35939){
var self__ = this;
var _35939__$1 = this;
return self__.meta35938;
});

cljs.core.async.t_cljs$core$async35937.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async35937.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35937.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35937.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async35937.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35937.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async35937.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35937.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35938","meta35938",-174791934,null)], null);
});

cljs.core.async.t_cljs$core$async35937.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35937.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35937";

cljs.core.async.t_cljs$core$async35937.cljs$lang$ctorPrWriter = (function (this__19102__auto__,writer__19103__auto__,opt__19104__auto__){
return cljs.core._write.call(null,writer__19103__auto__,"cljs.core.async/t_cljs$core$async35937");
});

cljs.core.async.__GT_t_cljs$core$async35937 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35937(filter_GT___$1,p__$1,ch__$1,meta35938){
return (new cljs.core.async.t_cljs$core$async35937(filter_GT___$1,p__$1,ch__$1,meta35938));
});

}

return (new cljs.core.async.t_cljs$core$async35937(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args35940 = [];
var len__19571__auto___35984 = arguments.length;
var i__19572__auto___35985 = (0);
while(true){
if((i__19572__auto___35985 < len__19571__auto___35984)){
args35940.push((arguments[i__19572__auto___35985]));

var G__35986 = (i__19572__auto___35985 + (1));
i__19572__auto___35985 = G__35986;
continue;
} else {
}
break;
}

var G__35942 = args35940.length;
switch (G__35942) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35940.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22469__auto___35988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto___35988,out){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto___35988,out){
return (function (state_35963){
var state_val_35964 = (state_35963[(1)]);
if((state_val_35964 === (7))){
var inst_35959 = (state_35963[(2)]);
var state_35963__$1 = state_35963;
var statearr_35965_35989 = state_35963__$1;
(statearr_35965_35989[(2)] = inst_35959);

(statearr_35965_35989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (1))){
var state_35963__$1 = state_35963;
var statearr_35966_35990 = state_35963__$1;
(statearr_35966_35990[(2)] = null);

(statearr_35966_35990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (4))){
var inst_35945 = (state_35963[(7)]);
var inst_35945__$1 = (state_35963[(2)]);
var inst_35946 = (inst_35945__$1 == null);
var state_35963__$1 = (function (){var statearr_35967 = state_35963;
(statearr_35967[(7)] = inst_35945__$1);

return statearr_35967;
})();
if(cljs.core.truth_(inst_35946)){
var statearr_35968_35991 = state_35963__$1;
(statearr_35968_35991[(1)] = (5));

} else {
var statearr_35969_35992 = state_35963__$1;
(statearr_35969_35992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (6))){
var inst_35945 = (state_35963[(7)]);
var inst_35950 = p.call(null,inst_35945);
var state_35963__$1 = state_35963;
if(cljs.core.truth_(inst_35950)){
var statearr_35970_35993 = state_35963__$1;
(statearr_35970_35993[(1)] = (8));

} else {
var statearr_35971_35994 = state_35963__$1;
(statearr_35971_35994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (3))){
var inst_35961 = (state_35963[(2)]);
var state_35963__$1 = state_35963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35963__$1,inst_35961);
} else {
if((state_val_35964 === (2))){
var state_35963__$1 = state_35963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35963__$1,(4),ch);
} else {
if((state_val_35964 === (11))){
var inst_35953 = (state_35963[(2)]);
var state_35963__$1 = state_35963;
var statearr_35972_35995 = state_35963__$1;
(statearr_35972_35995[(2)] = inst_35953);

(statearr_35972_35995[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (9))){
var state_35963__$1 = state_35963;
var statearr_35973_35996 = state_35963__$1;
(statearr_35973_35996[(2)] = null);

(statearr_35973_35996[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (5))){
var inst_35948 = cljs.core.async.close_BANG_.call(null,out);
var state_35963__$1 = state_35963;
var statearr_35974_35997 = state_35963__$1;
(statearr_35974_35997[(2)] = inst_35948);

(statearr_35974_35997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (10))){
var inst_35956 = (state_35963[(2)]);
var state_35963__$1 = (function (){var statearr_35975 = state_35963;
(statearr_35975[(8)] = inst_35956);

return statearr_35975;
})();
var statearr_35976_35998 = state_35963__$1;
(statearr_35976_35998[(2)] = null);

(statearr_35976_35998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35964 === (8))){
var inst_35945 = (state_35963[(7)]);
var state_35963__$1 = state_35963;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35963__$1,(11),out,inst_35945);
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
});})(c__22469__auto___35988,out))
;
return ((function (switch__22357__auto__,c__22469__auto___35988,out){
return (function() {
var cljs$core$async$state_machine__22358__auto__ = null;
var cljs$core$async$state_machine__22358__auto____0 = (function (){
var statearr_35980 = [null,null,null,null,null,null,null,null,null];
(statearr_35980[(0)] = cljs$core$async$state_machine__22358__auto__);

(statearr_35980[(1)] = (1));

return statearr_35980;
});
var cljs$core$async$state_machine__22358__auto____1 = (function (state_35963){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_35963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e35981){if((e35981 instanceof Object)){
var ex__22361__auto__ = e35981;
var statearr_35982_35999 = state_35963;
(statearr_35982_35999[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36000 = state_35963;
state_35963 = G__36000;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$state_machine__22358__auto__ = function(state_35963){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22358__auto____1.call(this,state_35963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22358__auto____0;
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22358__auto____1;
return cljs$core$async$state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto___35988,out))
})();
var state__22471__auto__ = (function (){var statearr_35983 = f__22470__auto__.call(null);
(statearr_35983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___35988);

return statearr_35983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto___35988,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args36001 = [];
var len__19571__auto___36004 = arguments.length;
var i__19572__auto___36005 = (0);
while(true){
if((i__19572__auto___36005 < len__19571__auto___36004)){
args36001.push((arguments[i__19572__auto___36005]));

var G__36006 = (i__19572__auto___36005 + (1));
i__19572__auto___36005 = G__36006;
continue;
} else {
}
break;
}

var G__36003 = args36001.length;
switch (G__36003) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36001.length)].join('')));

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
return (function (state_36173){
var state_val_36174 = (state_36173[(1)]);
if((state_val_36174 === (7))){
var inst_36169 = (state_36173[(2)]);
var state_36173__$1 = state_36173;
var statearr_36175_36216 = state_36173__$1;
(statearr_36175_36216[(2)] = inst_36169);

(statearr_36175_36216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36174 === (20))){
var inst_36139 = (state_36173[(7)]);
var inst_36150 = (state_36173[(2)]);
var inst_36151 = cljs.core.next.call(null,inst_36139);
var inst_36125 = inst_36151;
var inst_36126 = null;
var inst_36127 = (0);
var inst_36128 = (0);
var state_36173__$1 = (function (){var statearr_36176 = state_36173;
(statearr_36176[(8)] = inst_36150);

(statearr_36176[(9)] = inst_36126);

(statearr_36176[(10)] = inst_36125);

(statearr_36176[(11)] = inst_36128);

(statearr_36176[(12)] = inst_36127);

return statearr_36176;
})();
var statearr_36177_36217 = state_36173__$1;
(statearr_36177_36217[(2)] = null);

(statearr_36177_36217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36174 === (1))){
var state_36173__$1 = state_36173;
var statearr_36178_36218 = state_36173__$1;
(statearr_36178_36218[(2)] = null);

(statearr_36178_36218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36174 === (4))){
var inst_36114 = (state_36173[(13)]);
var inst_36114__$1 = (state_36173[(2)]);
var inst_36115 = (inst_36114__$1 == null);
var state_36173__$1 = (function (){var statearr_36179 = state_36173;
(statearr_36179[(13)] = inst_36114__$1);

return statearr_36179;
})();
if(cljs.core.truth_(inst_36115)){
var statearr_36180_36219 = state_36173__$1;
(statearr_36180_36219[(1)] = (5));

} else {
var statearr_36181_36220 = state_36173__$1;
(statearr_36181_36220[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36174 === (15))){
var state_36173__$1 = state_36173;
var statearr_36185_36221 = state_36173__$1;
(statearr_36185_36221[(2)] = null);

(statearr_36185_36221[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36174 === (21))){
var state_36173__$1 = state_36173;
var statearr_36186_36222 = state_36173__$1;
(statearr_36186_36222[(2)] = null);

(statearr_36186_36222[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36174 === (13))){
var inst_36126 = (state_36173[(9)]);
var inst_36125 = (state_36173[(10)]);
var inst_36128 = (state_36173[(11)]);
var inst_36127 = (state_36173[(12)]);
var inst_36135 = (state_36173[(2)]);
var inst_36136 = (inst_36128 + (1));
var tmp36182 = inst_36126;
var tmp36183 = inst_36125;
var tmp36184 = inst_36127;
var inst_36125__$1 = tmp36183;
var inst_36126__$1 = tmp36182;
var inst_36127__$1 = tmp36184;
var inst_36128__$1 = inst_36136;
var state_36173__$1 = (function (){var statearr_36187 = state_36173;
(statearr_36187[(14)] = inst_36135);

(statearr_36187[(9)] = inst_36126__$1);

(statearr_36187[(10)] = inst_36125__$1);

(statearr_36187[(11)] = inst_36128__$1);

(statearr_36187[(12)] = inst_36127__$1);

return statearr_36187;
})();
var statearr_36188_36223 = state_36173__$1;
(statearr_36188_36223[(2)] = null);

(statearr_36188_36223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36174 === (22))){
var state_36173__$1 = state_36173;
var statearr_36189_36224 = state_36173__$1;
(statearr_36189_36224[(2)] = null);

(statearr_36189_36224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36174 === (6))){
var inst_36114 = (state_36173[(13)]);
var inst_36123 = f.call(null,inst_36114);
var inst_36124 = cljs.core.seq.call(null,inst_36123);
var inst_36125 = inst_36124;
var inst_36126 = null;
var inst_36127 = (0);
var inst_36128 = (0);
var state_36173__$1 = (function (){var statearr_36190 = state_36173;
(statearr_36190[(9)] = inst_36126);

(statearr_36190[(10)] = inst_36125);

(statearr_36190[(11)] = inst_36128);

(statearr_36190[(12)] = inst_36127);

return statearr_36190;
})();
var statearr_36191_36225 = state_36173__$1;
(statearr_36191_36225[(2)] = null);

(statearr_36191_36225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36174 === (17))){
var inst_36139 = (state_36173[(7)]);
var inst_36143 = cljs.core.chunk_first.call(null,inst_36139);
var inst_36144 = cljs.core.chunk_rest.call(null,inst_36139);
var inst_36145 = cljs.core.count.call(null,inst_36143);
var inst_36125 = inst_36144;
var inst_36126 = inst_36143;
var inst_36127 = inst_36145;
var inst_36128 = (0);
var state_36173__$1 = (function (){var statearr_36192 = state_36173;
(statearr_36192[(9)] = inst_36126);

(statearr_36192[(10)] = inst_36125);

(statearr_36192[(11)] = inst_36128);

(statearr_36192[(12)] = inst_36127);

return statearr_36192;
})();
var statearr_36193_36226 = state_36173__$1;
(statearr_36193_36226[(2)] = null);

(statearr_36193_36226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36174 === (3))){
var inst_36171 = (state_36173[(2)]);
var state_36173__$1 = state_36173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36173__$1,inst_36171);
} else {
if((state_val_36174 === (12))){
var inst_36159 = (state_36173[(2)]);
var state_36173__$1 = state_36173;
var statearr_36194_36227 = state_36173__$1;
(statearr_36194_36227[(2)] = inst_36159);

(statearr_36194_36227[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36174 === (2))){
var state_36173__$1 = state_36173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36173__$1,(4),in$);
} else {
if((state_val_36174 === (23))){
var inst_36167 = (state_36173[(2)]);
var state_36173__$1 = state_36173;
var statearr_36195_36228 = state_36173__$1;
(statearr_36195_36228[(2)] = inst_36167);

(statearr_36195_36228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36174 === (19))){
var inst_36154 = (state_36173[(2)]);
var state_36173__$1 = state_36173;
var statearr_36196_36229 = state_36173__$1;
(statearr_36196_36229[(2)] = inst_36154);

(statearr_36196_36229[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36174 === (11))){
var inst_36139 = (state_36173[(7)]);
var inst_36125 = (state_36173[(10)]);
var inst_36139__$1 = cljs.core.seq.call(null,inst_36125);
var state_36173__$1 = (function (){var statearr_36197 = state_36173;
(statearr_36197[(7)] = inst_36139__$1);

return statearr_36197;
})();
if(inst_36139__$1){
var statearr_36198_36230 = state_36173__$1;
(statearr_36198_36230[(1)] = (14));

} else {
var statearr_36199_36231 = state_36173__$1;
(statearr_36199_36231[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36174 === (9))){
var inst_36161 = (state_36173[(2)]);
var inst_36162 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36173__$1 = (function (){var statearr_36200 = state_36173;
(statearr_36200[(15)] = inst_36161);

return statearr_36200;
})();
if(cljs.core.truth_(inst_36162)){
var statearr_36201_36232 = state_36173__$1;
(statearr_36201_36232[(1)] = (21));

} else {
var statearr_36202_36233 = state_36173__$1;
(statearr_36202_36233[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36174 === (5))){
var inst_36117 = cljs.core.async.close_BANG_.call(null,out);
var state_36173__$1 = state_36173;
var statearr_36203_36234 = state_36173__$1;
(statearr_36203_36234[(2)] = inst_36117);

(statearr_36203_36234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36174 === (14))){
var inst_36139 = (state_36173[(7)]);
var inst_36141 = cljs.core.chunked_seq_QMARK_.call(null,inst_36139);
var state_36173__$1 = state_36173;
if(inst_36141){
var statearr_36204_36235 = state_36173__$1;
(statearr_36204_36235[(1)] = (17));

} else {
var statearr_36205_36236 = state_36173__$1;
(statearr_36205_36236[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36174 === (16))){
var inst_36157 = (state_36173[(2)]);
var state_36173__$1 = state_36173;
var statearr_36206_36237 = state_36173__$1;
(statearr_36206_36237[(2)] = inst_36157);

(statearr_36206_36237[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36174 === (10))){
var inst_36126 = (state_36173[(9)]);
var inst_36128 = (state_36173[(11)]);
var inst_36133 = cljs.core._nth.call(null,inst_36126,inst_36128);
var state_36173__$1 = state_36173;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36173__$1,(13),out,inst_36133);
} else {
if((state_val_36174 === (18))){
var inst_36139 = (state_36173[(7)]);
var inst_36148 = cljs.core.first.call(null,inst_36139);
var state_36173__$1 = state_36173;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36173__$1,(20),out,inst_36148);
} else {
if((state_val_36174 === (8))){
var inst_36128 = (state_36173[(11)]);
var inst_36127 = (state_36173[(12)]);
var inst_36130 = (inst_36128 < inst_36127);
var inst_36131 = inst_36130;
var state_36173__$1 = state_36173;
if(cljs.core.truth_(inst_36131)){
var statearr_36207_36238 = state_36173__$1;
(statearr_36207_36238[(1)] = (10));

} else {
var statearr_36208_36239 = state_36173__$1;
(statearr_36208_36239[(1)] = (11));

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
var statearr_36212 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36212[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22358__auto__);

(statearr_36212[(1)] = (1));

return statearr_36212;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22358__auto____1 = (function (state_36173){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_36173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e36213){if((e36213 instanceof Object)){
var ex__22361__auto__ = e36213;
var statearr_36214_36240 = state_36173;
(statearr_36214_36240[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36241 = state_36173;
state_36173 = G__36241;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22358__auto__ = function(state_36173){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22358__auto____1.call(this,state_36173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22358__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22358__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto__))
})();
var state__22471__auto__ = (function (){var statearr_36215 = f__22470__auto__.call(null);
(statearr_36215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto__);

return statearr_36215;
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
var args36242 = [];
var len__19571__auto___36245 = arguments.length;
var i__19572__auto___36246 = (0);
while(true){
if((i__19572__auto___36246 < len__19571__auto___36245)){
args36242.push((arguments[i__19572__auto___36246]));

var G__36247 = (i__19572__auto___36246 + (1));
i__19572__auto___36246 = G__36247;
continue;
} else {
}
break;
}

var G__36244 = args36242.length;
switch (G__36244) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36242.length)].join('')));

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
var args36249 = [];
var len__19571__auto___36252 = arguments.length;
var i__19572__auto___36253 = (0);
while(true){
if((i__19572__auto___36253 < len__19571__auto___36252)){
args36249.push((arguments[i__19572__auto___36253]));

var G__36254 = (i__19572__auto___36253 + (1));
i__19572__auto___36253 = G__36254;
continue;
} else {
}
break;
}

var G__36251 = args36249.length;
switch (G__36251) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36249.length)].join('')));

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
var args36256 = [];
var len__19571__auto___36307 = arguments.length;
var i__19572__auto___36308 = (0);
while(true){
if((i__19572__auto___36308 < len__19571__auto___36307)){
args36256.push((arguments[i__19572__auto___36308]));

var G__36309 = (i__19572__auto___36308 + (1));
i__19572__auto___36308 = G__36309;
continue;
} else {
}
break;
}

var G__36258 = args36256.length;
switch (G__36258) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36256.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22469__auto___36311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto___36311,out){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto___36311,out){
return (function (state_36282){
var state_val_36283 = (state_36282[(1)]);
if((state_val_36283 === (7))){
var inst_36277 = (state_36282[(2)]);
var state_36282__$1 = state_36282;
var statearr_36284_36312 = state_36282__$1;
(statearr_36284_36312[(2)] = inst_36277);

(statearr_36284_36312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36283 === (1))){
var inst_36259 = null;
var state_36282__$1 = (function (){var statearr_36285 = state_36282;
(statearr_36285[(7)] = inst_36259);

return statearr_36285;
})();
var statearr_36286_36313 = state_36282__$1;
(statearr_36286_36313[(2)] = null);

(statearr_36286_36313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36283 === (4))){
var inst_36262 = (state_36282[(8)]);
var inst_36262__$1 = (state_36282[(2)]);
var inst_36263 = (inst_36262__$1 == null);
var inst_36264 = cljs.core.not.call(null,inst_36263);
var state_36282__$1 = (function (){var statearr_36287 = state_36282;
(statearr_36287[(8)] = inst_36262__$1);

return statearr_36287;
})();
if(inst_36264){
var statearr_36288_36314 = state_36282__$1;
(statearr_36288_36314[(1)] = (5));

} else {
var statearr_36289_36315 = state_36282__$1;
(statearr_36289_36315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36283 === (6))){
var state_36282__$1 = state_36282;
var statearr_36290_36316 = state_36282__$1;
(statearr_36290_36316[(2)] = null);

(statearr_36290_36316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36283 === (3))){
var inst_36279 = (state_36282[(2)]);
var inst_36280 = cljs.core.async.close_BANG_.call(null,out);
var state_36282__$1 = (function (){var statearr_36291 = state_36282;
(statearr_36291[(9)] = inst_36279);

return statearr_36291;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36282__$1,inst_36280);
} else {
if((state_val_36283 === (2))){
var state_36282__$1 = state_36282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36282__$1,(4),ch);
} else {
if((state_val_36283 === (11))){
var inst_36262 = (state_36282[(8)]);
var inst_36271 = (state_36282[(2)]);
var inst_36259 = inst_36262;
var state_36282__$1 = (function (){var statearr_36292 = state_36282;
(statearr_36292[(10)] = inst_36271);

(statearr_36292[(7)] = inst_36259);

return statearr_36292;
})();
var statearr_36293_36317 = state_36282__$1;
(statearr_36293_36317[(2)] = null);

(statearr_36293_36317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36283 === (9))){
var inst_36262 = (state_36282[(8)]);
var state_36282__$1 = state_36282;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36282__$1,(11),out,inst_36262);
} else {
if((state_val_36283 === (5))){
var inst_36262 = (state_36282[(8)]);
var inst_36259 = (state_36282[(7)]);
var inst_36266 = cljs.core._EQ_.call(null,inst_36262,inst_36259);
var state_36282__$1 = state_36282;
if(inst_36266){
var statearr_36295_36318 = state_36282__$1;
(statearr_36295_36318[(1)] = (8));

} else {
var statearr_36296_36319 = state_36282__$1;
(statearr_36296_36319[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36283 === (10))){
var inst_36274 = (state_36282[(2)]);
var state_36282__$1 = state_36282;
var statearr_36297_36320 = state_36282__$1;
(statearr_36297_36320[(2)] = inst_36274);

(statearr_36297_36320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36283 === (8))){
var inst_36259 = (state_36282[(7)]);
var tmp36294 = inst_36259;
var inst_36259__$1 = tmp36294;
var state_36282__$1 = (function (){var statearr_36298 = state_36282;
(statearr_36298[(7)] = inst_36259__$1);

return statearr_36298;
})();
var statearr_36299_36321 = state_36282__$1;
(statearr_36299_36321[(2)] = null);

(statearr_36299_36321[(1)] = (2));


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
});})(c__22469__auto___36311,out))
;
return ((function (switch__22357__auto__,c__22469__auto___36311,out){
return (function() {
var cljs$core$async$state_machine__22358__auto__ = null;
var cljs$core$async$state_machine__22358__auto____0 = (function (){
var statearr_36303 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36303[(0)] = cljs$core$async$state_machine__22358__auto__);

(statearr_36303[(1)] = (1));

return statearr_36303;
});
var cljs$core$async$state_machine__22358__auto____1 = (function (state_36282){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_36282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e36304){if((e36304 instanceof Object)){
var ex__22361__auto__ = e36304;
var statearr_36305_36322 = state_36282;
(statearr_36305_36322[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36323 = state_36282;
state_36282 = G__36323;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$state_machine__22358__auto__ = function(state_36282){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22358__auto____1.call(this,state_36282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22358__auto____0;
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22358__auto____1;
return cljs$core$async$state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto___36311,out))
})();
var state__22471__auto__ = (function (){var statearr_36306 = f__22470__auto__.call(null);
(statearr_36306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___36311);

return statearr_36306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto___36311,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args36324 = [];
var len__19571__auto___36394 = arguments.length;
var i__19572__auto___36395 = (0);
while(true){
if((i__19572__auto___36395 < len__19571__auto___36394)){
args36324.push((arguments[i__19572__auto___36395]));

var G__36396 = (i__19572__auto___36395 + (1));
i__19572__auto___36395 = G__36396;
continue;
} else {
}
break;
}

var G__36326 = args36324.length;
switch (G__36326) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36324.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22469__auto___36398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto___36398,out){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto___36398,out){
return (function (state_36364){
var state_val_36365 = (state_36364[(1)]);
if((state_val_36365 === (7))){
var inst_36360 = (state_36364[(2)]);
var state_36364__$1 = state_36364;
var statearr_36366_36399 = state_36364__$1;
(statearr_36366_36399[(2)] = inst_36360);

(statearr_36366_36399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (1))){
var inst_36327 = (new Array(n));
var inst_36328 = inst_36327;
var inst_36329 = (0);
var state_36364__$1 = (function (){var statearr_36367 = state_36364;
(statearr_36367[(7)] = inst_36328);

(statearr_36367[(8)] = inst_36329);

return statearr_36367;
})();
var statearr_36368_36400 = state_36364__$1;
(statearr_36368_36400[(2)] = null);

(statearr_36368_36400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (4))){
var inst_36332 = (state_36364[(9)]);
var inst_36332__$1 = (state_36364[(2)]);
var inst_36333 = (inst_36332__$1 == null);
var inst_36334 = cljs.core.not.call(null,inst_36333);
var state_36364__$1 = (function (){var statearr_36369 = state_36364;
(statearr_36369[(9)] = inst_36332__$1);

return statearr_36369;
})();
if(inst_36334){
var statearr_36370_36401 = state_36364__$1;
(statearr_36370_36401[(1)] = (5));

} else {
var statearr_36371_36402 = state_36364__$1;
(statearr_36371_36402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (15))){
var inst_36354 = (state_36364[(2)]);
var state_36364__$1 = state_36364;
var statearr_36372_36403 = state_36364__$1;
(statearr_36372_36403[(2)] = inst_36354);

(statearr_36372_36403[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (13))){
var state_36364__$1 = state_36364;
var statearr_36373_36404 = state_36364__$1;
(statearr_36373_36404[(2)] = null);

(statearr_36373_36404[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (6))){
var inst_36329 = (state_36364[(8)]);
var inst_36350 = (inst_36329 > (0));
var state_36364__$1 = state_36364;
if(cljs.core.truth_(inst_36350)){
var statearr_36374_36405 = state_36364__$1;
(statearr_36374_36405[(1)] = (12));

} else {
var statearr_36375_36406 = state_36364__$1;
(statearr_36375_36406[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (3))){
var inst_36362 = (state_36364[(2)]);
var state_36364__$1 = state_36364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36364__$1,inst_36362);
} else {
if((state_val_36365 === (12))){
var inst_36328 = (state_36364[(7)]);
var inst_36352 = cljs.core.vec.call(null,inst_36328);
var state_36364__$1 = state_36364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36364__$1,(15),out,inst_36352);
} else {
if((state_val_36365 === (2))){
var state_36364__$1 = state_36364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36364__$1,(4),ch);
} else {
if((state_val_36365 === (11))){
var inst_36344 = (state_36364[(2)]);
var inst_36345 = (new Array(n));
var inst_36328 = inst_36345;
var inst_36329 = (0);
var state_36364__$1 = (function (){var statearr_36376 = state_36364;
(statearr_36376[(7)] = inst_36328);

(statearr_36376[(8)] = inst_36329);

(statearr_36376[(10)] = inst_36344);

return statearr_36376;
})();
var statearr_36377_36407 = state_36364__$1;
(statearr_36377_36407[(2)] = null);

(statearr_36377_36407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (9))){
var inst_36328 = (state_36364[(7)]);
var inst_36342 = cljs.core.vec.call(null,inst_36328);
var state_36364__$1 = state_36364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36364__$1,(11),out,inst_36342);
} else {
if((state_val_36365 === (5))){
var inst_36328 = (state_36364[(7)]);
var inst_36337 = (state_36364[(11)]);
var inst_36329 = (state_36364[(8)]);
var inst_36332 = (state_36364[(9)]);
var inst_36336 = (inst_36328[inst_36329] = inst_36332);
var inst_36337__$1 = (inst_36329 + (1));
var inst_36338 = (inst_36337__$1 < n);
var state_36364__$1 = (function (){var statearr_36378 = state_36364;
(statearr_36378[(11)] = inst_36337__$1);

(statearr_36378[(12)] = inst_36336);

return statearr_36378;
})();
if(cljs.core.truth_(inst_36338)){
var statearr_36379_36408 = state_36364__$1;
(statearr_36379_36408[(1)] = (8));

} else {
var statearr_36380_36409 = state_36364__$1;
(statearr_36380_36409[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (14))){
var inst_36357 = (state_36364[(2)]);
var inst_36358 = cljs.core.async.close_BANG_.call(null,out);
var state_36364__$1 = (function (){var statearr_36382 = state_36364;
(statearr_36382[(13)] = inst_36357);

return statearr_36382;
})();
var statearr_36383_36410 = state_36364__$1;
(statearr_36383_36410[(2)] = inst_36358);

(statearr_36383_36410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (10))){
var inst_36348 = (state_36364[(2)]);
var state_36364__$1 = state_36364;
var statearr_36384_36411 = state_36364__$1;
(statearr_36384_36411[(2)] = inst_36348);

(statearr_36384_36411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36365 === (8))){
var inst_36328 = (state_36364[(7)]);
var inst_36337 = (state_36364[(11)]);
var tmp36381 = inst_36328;
var inst_36328__$1 = tmp36381;
var inst_36329 = inst_36337;
var state_36364__$1 = (function (){var statearr_36385 = state_36364;
(statearr_36385[(7)] = inst_36328__$1);

(statearr_36385[(8)] = inst_36329);

return statearr_36385;
})();
var statearr_36386_36412 = state_36364__$1;
(statearr_36386_36412[(2)] = null);

(statearr_36386_36412[(1)] = (2));


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
});})(c__22469__auto___36398,out))
;
return ((function (switch__22357__auto__,c__22469__auto___36398,out){
return (function() {
var cljs$core$async$state_machine__22358__auto__ = null;
var cljs$core$async$state_machine__22358__auto____0 = (function (){
var statearr_36390 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36390[(0)] = cljs$core$async$state_machine__22358__auto__);

(statearr_36390[(1)] = (1));

return statearr_36390;
});
var cljs$core$async$state_machine__22358__auto____1 = (function (state_36364){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_36364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e36391){if((e36391 instanceof Object)){
var ex__22361__auto__ = e36391;
var statearr_36392_36413 = state_36364;
(statearr_36392_36413[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36414 = state_36364;
state_36364 = G__36414;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$state_machine__22358__auto__ = function(state_36364){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22358__auto____1.call(this,state_36364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22358__auto____0;
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22358__auto____1;
return cljs$core$async$state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto___36398,out))
})();
var state__22471__auto__ = (function (){var statearr_36393 = f__22470__auto__.call(null);
(statearr_36393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___36398);

return statearr_36393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto___36398,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args36415 = [];
var len__19571__auto___36489 = arguments.length;
var i__19572__auto___36490 = (0);
while(true){
if((i__19572__auto___36490 < len__19571__auto___36489)){
args36415.push((arguments[i__19572__auto___36490]));

var G__36491 = (i__19572__auto___36490 + (1));
i__19572__auto___36490 = G__36491;
continue;
} else {
}
break;
}

var G__36417 = args36415.length;
switch (G__36417) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36415.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22469__auto___36493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto___36493,out){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto___36493,out){
return (function (state_36459){
var state_val_36460 = (state_36459[(1)]);
if((state_val_36460 === (7))){
var inst_36455 = (state_36459[(2)]);
var state_36459__$1 = state_36459;
var statearr_36461_36494 = state_36459__$1;
(statearr_36461_36494[(2)] = inst_36455);

(statearr_36461_36494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36460 === (1))){
var inst_36418 = [];
var inst_36419 = inst_36418;
var inst_36420 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36459__$1 = (function (){var statearr_36462 = state_36459;
(statearr_36462[(7)] = inst_36420);

(statearr_36462[(8)] = inst_36419);

return statearr_36462;
})();
var statearr_36463_36495 = state_36459__$1;
(statearr_36463_36495[(2)] = null);

(statearr_36463_36495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36460 === (4))){
var inst_36423 = (state_36459[(9)]);
var inst_36423__$1 = (state_36459[(2)]);
var inst_36424 = (inst_36423__$1 == null);
var inst_36425 = cljs.core.not.call(null,inst_36424);
var state_36459__$1 = (function (){var statearr_36464 = state_36459;
(statearr_36464[(9)] = inst_36423__$1);

return statearr_36464;
})();
if(inst_36425){
var statearr_36465_36496 = state_36459__$1;
(statearr_36465_36496[(1)] = (5));

} else {
var statearr_36466_36497 = state_36459__$1;
(statearr_36466_36497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36460 === (15))){
var inst_36449 = (state_36459[(2)]);
var state_36459__$1 = state_36459;
var statearr_36467_36498 = state_36459__$1;
(statearr_36467_36498[(2)] = inst_36449);

(statearr_36467_36498[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36460 === (13))){
var state_36459__$1 = state_36459;
var statearr_36468_36499 = state_36459__$1;
(statearr_36468_36499[(2)] = null);

(statearr_36468_36499[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36460 === (6))){
var inst_36419 = (state_36459[(8)]);
var inst_36444 = inst_36419.length;
var inst_36445 = (inst_36444 > (0));
var state_36459__$1 = state_36459;
if(cljs.core.truth_(inst_36445)){
var statearr_36469_36500 = state_36459__$1;
(statearr_36469_36500[(1)] = (12));

} else {
var statearr_36470_36501 = state_36459__$1;
(statearr_36470_36501[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36460 === (3))){
var inst_36457 = (state_36459[(2)]);
var state_36459__$1 = state_36459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36459__$1,inst_36457);
} else {
if((state_val_36460 === (12))){
var inst_36419 = (state_36459[(8)]);
var inst_36447 = cljs.core.vec.call(null,inst_36419);
var state_36459__$1 = state_36459;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36459__$1,(15),out,inst_36447);
} else {
if((state_val_36460 === (2))){
var state_36459__$1 = state_36459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36459__$1,(4),ch);
} else {
if((state_val_36460 === (11))){
var inst_36423 = (state_36459[(9)]);
var inst_36427 = (state_36459[(10)]);
var inst_36437 = (state_36459[(2)]);
var inst_36438 = [];
var inst_36439 = inst_36438.push(inst_36423);
var inst_36419 = inst_36438;
var inst_36420 = inst_36427;
var state_36459__$1 = (function (){var statearr_36471 = state_36459;
(statearr_36471[(7)] = inst_36420);

(statearr_36471[(8)] = inst_36419);

(statearr_36471[(11)] = inst_36439);

(statearr_36471[(12)] = inst_36437);

return statearr_36471;
})();
var statearr_36472_36502 = state_36459__$1;
(statearr_36472_36502[(2)] = null);

(statearr_36472_36502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36460 === (9))){
var inst_36419 = (state_36459[(8)]);
var inst_36435 = cljs.core.vec.call(null,inst_36419);
var state_36459__$1 = state_36459;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36459__$1,(11),out,inst_36435);
} else {
if((state_val_36460 === (5))){
var inst_36420 = (state_36459[(7)]);
var inst_36423 = (state_36459[(9)]);
var inst_36427 = (state_36459[(10)]);
var inst_36427__$1 = f.call(null,inst_36423);
var inst_36428 = cljs.core._EQ_.call(null,inst_36427__$1,inst_36420);
var inst_36429 = cljs.core.keyword_identical_QMARK_.call(null,inst_36420,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36430 = (inst_36428) || (inst_36429);
var state_36459__$1 = (function (){var statearr_36473 = state_36459;
(statearr_36473[(10)] = inst_36427__$1);

return statearr_36473;
})();
if(cljs.core.truth_(inst_36430)){
var statearr_36474_36503 = state_36459__$1;
(statearr_36474_36503[(1)] = (8));

} else {
var statearr_36475_36504 = state_36459__$1;
(statearr_36475_36504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36460 === (14))){
var inst_36452 = (state_36459[(2)]);
var inst_36453 = cljs.core.async.close_BANG_.call(null,out);
var state_36459__$1 = (function (){var statearr_36477 = state_36459;
(statearr_36477[(13)] = inst_36452);

return statearr_36477;
})();
var statearr_36478_36505 = state_36459__$1;
(statearr_36478_36505[(2)] = inst_36453);

(statearr_36478_36505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36460 === (10))){
var inst_36442 = (state_36459[(2)]);
var state_36459__$1 = state_36459;
var statearr_36479_36506 = state_36459__$1;
(statearr_36479_36506[(2)] = inst_36442);

(statearr_36479_36506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36460 === (8))){
var inst_36423 = (state_36459[(9)]);
var inst_36419 = (state_36459[(8)]);
var inst_36427 = (state_36459[(10)]);
var inst_36432 = inst_36419.push(inst_36423);
var tmp36476 = inst_36419;
var inst_36419__$1 = tmp36476;
var inst_36420 = inst_36427;
var state_36459__$1 = (function (){var statearr_36480 = state_36459;
(statearr_36480[(7)] = inst_36420);

(statearr_36480[(14)] = inst_36432);

(statearr_36480[(8)] = inst_36419__$1);

return statearr_36480;
})();
var statearr_36481_36507 = state_36459__$1;
(statearr_36481_36507[(2)] = null);

(statearr_36481_36507[(1)] = (2));


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
});})(c__22469__auto___36493,out))
;
return ((function (switch__22357__auto__,c__22469__auto___36493,out){
return (function() {
var cljs$core$async$state_machine__22358__auto__ = null;
var cljs$core$async$state_machine__22358__auto____0 = (function (){
var statearr_36485 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36485[(0)] = cljs$core$async$state_machine__22358__auto__);

(statearr_36485[(1)] = (1));

return statearr_36485;
});
var cljs$core$async$state_machine__22358__auto____1 = (function (state_36459){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_36459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e36486){if((e36486 instanceof Object)){
var ex__22361__auto__ = e36486;
var statearr_36487_36508 = state_36459;
(statearr_36487_36508[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36509 = state_36459;
state_36459 = G__36509;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
cljs$core$async$state_machine__22358__auto__ = function(state_36459){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22358__auto____1.call(this,state_36459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22358__auto____0;
cljs$core$async$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22358__auto____1;
return cljs$core$async$state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto___36493,out))
})();
var state__22471__auto__ = (function (){var statearr_36488 = f__22470__auto__.call(null);
(statearr_36488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___36493);

return statearr_36488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto___36493,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1466621243388