goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33376 = arguments.length;
switch (G__33376) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33377 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33377 = (function (f,blockable,meta33378){
this.f = f;
this.blockable = blockable;
this.meta33378 = meta33378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33379,meta33378__$1){
var self__ = this;
var _33379__$1 = this;
return (new cljs.core.async.t_cljs$core$async33377(self__.f,self__.blockable,meta33378__$1));
});

cljs.core.async.t_cljs$core$async33377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33379){
var self__ = this;
var _33379__$1 = this;
return self__.meta33378;
});

cljs.core.async.t_cljs$core$async33377.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33377.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33377.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33377.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33377.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33378","meta33378",-1062890491,null)], null);
});

cljs.core.async.t_cljs$core$async33377.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33377.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33377";

cljs.core.async.t_cljs$core$async33377.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33377");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33377.
 */
cljs.core.async.__GT_t_cljs$core$async33377 = (function cljs$core$async$__GT_t_cljs$core$async33377(f__$1,blockable__$1,meta33378){
return (new cljs.core.async.t_cljs$core$async33377(f__$1,blockable__$1,meta33378));
});

}

return (new cljs.core.async.t_cljs$core$async33377(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__33382 = arguments.length;
switch (G__33382) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__33384 = arguments.length;
switch (G__33384) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__33386 = arguments.length;
switch (G__33386) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34816 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34816) : fn1.call(null,val_34816));
} else {
cljs.core.async.impl.dispatch.run(((function (val_34816,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34816) : fn1.call(null,val_34816));
});})(val_34816,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33388 = arguments.length;
switch (G__33388) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5718__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___34818 = n;
var x_34819 = (0);
while(true){
if((x_34819 < n__4607__auto___34818)){
(a[x_34819] = (0));

var G__34820 = (x_34819 + (1));
x_34819 = G__34820;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__34821 = (i + (1));
i = G__34821;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33389 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33389 = (function (flag,meta33390){
this.flag = flag;
this.meta33390 = meta33390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33391,meta33390__$1){
var self__ = this;
var _33391__$1 = this;
return (new cljs.core.async.t_cljs$core$async33389(self__.flag,meta33390__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33389.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33391){
var self__ = this;
var _33391__$1 = this;
return self__.meta33390;
});})(flag))
;

cljs.core.async.t_cljs$core$async33389.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33389.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33389.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33389.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33389.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33390","meta33390",1438777455,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33389.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33389.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33389";

cljs.core.async.t_cljs$core$async33389.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33389");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33389.
 */
cljs.core.async.__GT_t_cljs$core$async33389 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33389(flag__$1,meta33390){
return (new cljs.core.async.t_cljs$core$async33389(flag__$1,meta33390));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33389(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33392 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33392 = (function (flag,cb,meta33393){
this.flag = flag;
this.cb = cb;
this.meta33393 = meta33393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33394,meta33393__$1){
var self__ = this;
var _33394__$1 = this;
return (new cljs.core.async.t_cljs$core$async33392(self__.flag,self__.cb,meta33393__$1));
});

cljs.core.async.t_cljs$core$async33392.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33394){
var self__ = this;
var _33394__$1 = this;
return self__.meta33393;
});

cljs.core.async.t_cljs$core$async33392.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33392.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async33392.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33392.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33392.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33393","meta33393",887224461,null)], null);
});

cljs.core.async.t_cljs$core$async33392.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33392.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33392";

cljs.core.async.t_cljs$core$async33392.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33392");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33392.
 */
cljs.core.async.__GT_t_cljs$core$async33392 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33392(flag__$1,cb__$1,meta33393){
return (new cljs.core.async.t_cljs$core$async33392(flag__$1,cb__$1,meta33393));
});

}

return (new cljs.core.async.t_cljs$core$async33392(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33395_SHARP_){
var G__33397 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33395_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33397) : fret.call(null,G__33397));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33396_SHARP_){
var G__33398 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33396_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33398) : fret.call(null,G__33398));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34842 = (i + (1));
i = G__34842;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4736__auto__ = [];
var len__4730__auto___34851 = arguments.length;
var i__4731__auto___34852 = (0);
while(true){
if((i__4731__auto___34852 < len__4730__auto___34851)){
args__4736__auto__.push((arguments[i__4731__auto___34852]));

var G__34855 = (i__4731__auto___34852 + (1));
i__4731__auto___34852 = G__34855;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33401){
var map__33402 = p__33401;
var map__33402__$1 = (((((!((map__33402 == null))))?(((((map__33402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33402):map__33402);
var opts = map__33402__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33399){
var G__33400 = cljs.core.first(seq33399);
var seq33399__$1 = cljs.core.next(seq33399);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33400,seq33399__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__33405 = arguments.length;
switch (G__33405) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33318__auto___34866 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33318__auto___34866){
return (function (){
var f__33319__auto__ = (function (){var switch__33139__auto__ = ((function (c__33318__auto___34866){
return (function (state_33429){
var state_val_33430 = (state_33429[(1)]);
if((state_val_33430 === (7))){
var inst_33425 = (state_33429[(2)]);
var state_33429__$1 = state_33429;
var statearr_33431_34871 = state_33429__$1;
(statearr_33431_34871[(2)] = inst_33425);

(statearr_33431_34871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33430 === (1))){
var state_33429__$1 = state_33429;
var statearr_33432_34872 = state_33429__$1;
(statearr_33432_34872[(2)] = null);

(statearr_33432_34872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33430 === (4))){
var inst_33408 = (state_33429[(7)]);
var inst_33408__$1 = (state_33429[(2)]);
var inst_33409 = (inst_33408__$1 == null);
var state_33429__$1 = (function (){var statearr_33433 = state_33429;
(statearr_33433[(7)] = inst_33408__$1);

return statearr_33433;
})();
if(cljs.core.truth_(inst_33409)){
var statearr_33434_34875 = state_33429__$1;
(statearr_33434_34875[(1)] = (5));

} else {
var statearr_33435_34876 = state_33429__$1;
(statearr_33435_34876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33430 === (13))){
var state_33429__$1 = state_33429;
var statearr_33436_34879 = state_33429__$1;
(statearr_33436_34879[(2)] = null);

(statearr_33436_34879[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33430 === (6))){
var inst_33408 = (state_33429[(7)]);
var state_33429__$1 = state_33429;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33429__$1,(11),to,inst_33408);
} else {
if((state_val_33430 === (3))){
var inst_33427 = (state_33429[(2)]);
var state_33429__$1 = state_33429;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33429__$1,inst_33427);
} else {
if((state_val_33430 === (12))){
var state_33429__$1 = state_33429;
var statearr_33437_34883 = state_33429__$1;
(statearr_33437_34883[(2)] = null);

(statearr_33437_34883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33430 === (2))){
var state_33429__$1 = state_33429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33429__$1,(4),from);
} else {
if((state_val_33430 === (11))){
var inst_33418 = (state_33429[(2)]);
var state_33429__$1 = state_33429;
if(cljs.core.truth_(inst_33418)){
var statearr_33438_34885 = state_33429__$1;
(statearr_33438_34885[(1)] = (12));

} else {
var statearr_33439_34886 = state_33429__$1;
(statearr_33439_34886[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33430 === (9))){
var state_33429__$1 = state_33429;
var statearr_33440_34889 = state_33429__$1;
(statearr_33440_34889[(2)] = null);

(statearr_33440_34889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33430 === (5))){
var state_33429__$1 = state_33429;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33441_34892 = state_33429__$1;
(statearr_33441_34892[(1)] = (8));

} else {
var statearr_33442_34893 = state_33429__$1;
(statearr_33442_34893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33430 === (14))){
var inst_33423 = (state_33429[(2)]);
var state_33429__$1 = state_33429;
var statearr_33443_34894 = state_33429__$1;
(statearr_33443_34894[(2)] = inst_33423);

(statearr_33443_34894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33430 === (10))){
var inst_33415 = (state_33429[(2)]);
var state_33429__$1 = state_33429;
var statearr_33444_34895 = state_33429__$1;
(statearr_33444_34895[(2)] = inst_33415);

(statearr_33444_34895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33430 === (8))){
var inst_33412 = cljs.core.async.close_BANG_(to);
var state_33429__$1 = state_33429;
var statearr_33445_34897 = state_33429__$1;
(statearr_33445_34897[(2)] = inst_33412);

(statearr_33445_34897[(1)] = (10));


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
});})(c__33318__auto___34866))
;
return ((function (switch__33139__auto__,c__33318__auto___34866){
return (function() {
var cljs$core$async$state_machine__33140__auto__ = null;
var cljs$core$async$state_machine__33140__auto____0 = (function (){
var statearr_33446 = [null,null,null,null,null,null,null,null];
(statearr_33446[(0)] = cljs$core$async$state_machine__33140__auto__);

(statearr_33446[(1)] = (1));

return statearr_33446;
});
var cljs$core$async$state_machine__33140__auto____1 = (function (state_33429){
while(true){
var ret_value__33141__auto__ = (function (){try{while(true){
var result__33142__auto__ = switch__33139__auto__(state_33429);
if(cljs.core.keyword_identical_QMARK_(result__33142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33142__auto__;
}
break;
}
}catch (e33447){if((e33447 instanceof Object)){
var ex__33143__auto__ = e33447;
var statearr_33448_34903 = state_33429;
(statearr_33448_34903[(5)] = ex__33143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33447;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34905 = state_33429;
state_33429 = G__34905;
continue;
} else {
return ret_value__33141__auto__;
}
break;
}
});
cljs$core$async$state_machine__33140__auto__ = function(state_33429){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33140__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33140__auto____1.call(this,state_33429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33140__auto____0;
cljs$core$async$state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33140__auto____1;
return cljs$core$async$state_machine__33140__auto__;
})()
;})(switch__33139__auto__,c__33318__auto___34866))
})();
var state__33320__auto__ = (function (){var statearr_33449 = (f__33319__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33319__auto__.cljs$core$IFn$_invoke$arity$0() : f__33319__auto__.call(null));
(statearr_33449[(6)] = c__33318__auto___34866);

return statearr_33449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33320__auto__);
});})(c__33318__auto___34866))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__33450){
var vec__33451 = p__33450;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33451,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33451,(1),null);
var job = vec__33451;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33318__auto___34911 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33318__auto___34911,res,vec__33451,v,p,job,jobs,results){
return (function (){
var f__33319__auto__ = (function (){var switch__33139__auto__ = ((function (c__33318__auto___34911,res,vec__33451,v,p,job,jobs,results){
return (function (state_33458){
var state_val_33459 = (state_33458[(1)]);
if((state_val_33459 === (1))){
var state_33458__$1 = state_33458;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33458__$1,(2),res,v);
} else {
if((state_val_33459 === (2))){
var inst_33455 = (state_33458[(2)]);
var inst_33456 = cljs.core.async.close_BANG_(res);
var state_33458__$1 = (function (){var statearr_33460 = state_33458;
(statearr_33460[(7)] = inst_33455);

return statearr_33460;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33458__$1,inst_33456);
} else {
return null;
}
}
});})(c__33318__auto___34911,res,vec__33451,v,p,job,jobs,results))
;
return ((function (switch__33139__auto__,c__33318__auto___34911,res,vec__33451,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33140__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33140__auto____0 = (function (){
var statearr_33461 = [null,null,null,null,null,null,null,null];
(statearr_33461[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33140__auto__);

(statearr_33461[(1)] = (1));

return statearr_33461;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33140__auto____1 = (function (state_33458){
while(true){
var ret_value__33141__auto__ = (function (){try{while(true){
var result__33142__auto__ = switch__33139__auto__(state_33458);
if(cljs.core.keyword_identical_QMARK_(result__33142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33142__auto__;
}
break;
}
}catch (e33462){if((e33462 instanceof Object)){
var ex__33143__auto__ = e33462;
var statearr_33463_34915 = state_33458;
(statearr_33463_34915[(5)] = ex__33143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33462;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34918 = state_33458;
state_33458 = G__34918;
continue;
} else {
return ret_value__33141__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33140__auto__ = function(state_33458){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33140__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33140__auto____1.call(this,state_33458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33140__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33140__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33140__auto__;
})()
;})(switch__33139__auto__,c__33318__auto___34911,res,vec__33451,v,p,job,jobs,results))
})();
var state__33320__auto__ = (function (){var statearr_33464 = (f__33319__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33319__auto__.cljs$core$IFn$_invoke$arity$0() : f__33319__auto__.call(null));
(statearr_33464[(6)] = c__33318__auto___34911);

return statearr_33464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33320__auto__);
});})(c__33318__auto___34911,res,vec__33451,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33465){
var vec__33466 = p__33465;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33466,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33466,(1),null);
var job = vec__33466;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___34932 = n;
var __34933 = (0);
while(true){
if((__34933 < n__4607__auto___34932)){
var G__33469_34934 = type;
var G__33469_34935__$1 = (((G__33469_34934 instanceof cljs.core.Keyword))?G__33469_34934.fqn:null);
switch (G__33469_34935__$1) {
case "compute":
var c__33318__auto___34937 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34933,c__33318__auto___34937,G__33469_34934,G__33469_34935__$1,n__4607__auto___34932,jobs,results,process,async){
return (function (){
var f__33319__auto__ = (function (){var switch__33139__auto__ = ((function (__34933,c__33318__auto___34937,G__33469_34934,G__33469_34935__$1,n__4607__auto___34932,jobs,results,process,async){
return (function (state_33482){
var state_val_33483 = (state_33482[(1)]);
if((state_val_33483 === (1))){
var state_33482__$1 = state_33482;
var statearr_33484_34938 = state_33482__$1;
(statearr_33484_34938[(2)] = null);

(statearr_33484_34938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33483 === (2))){
var state_33482__$1 = state_33482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33482__$1,(4),jobs);
} else {
if((state_val_33483 === (3))){
var inst_33480 = (state_33482[(2)]);
var state_33482__$1 = state_33482;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33482__$1,inst_33480);
} else {
if((state_val_33483 === (4))){
var inst_33472 = (state_33482[(2)]);
var inst_33473 = process(inst_33472);
var state_33482__$1 = state_33482;
if(cljs.core.truth_(inst_33473)){
var statearr_33485_34939 = state_33482__$1;
(statearr_33485_34939[(1)] = (5));

} else {
var statearr_33486_34940 = state_33482__$1;
(statearr_33486_34940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33483 === (5))){
var state_33482__$1 = state_33482;
var statearr_33487_34941 = state_33482__$1;
(statearr_33487_34941[(2)] = null);

(statearr_33487_34941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33483 === (6))){
var state_33482__$1 = state_33482;
var statearr_33488_34942 = state_33482__$1;
(statearr_33488_34942[(2)] = null);

(statearr_33488_34942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33483 === (7))){
var inst_33478 = (state_33482[(2)]);
var state_33482__$1 = state_33482;
var statearr_33489_34943 = state_33482__$1;
(statearr_33489_34943[(2)] = inst_33478);

(statearr_33489_34943[(1)] = (3));


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
});})(__34933,c__33318__auto___34937,G__33469_34934,G__33469_34935__$1,n__4607__auto___34932,jobs,results,process,async))
;
return ((function (__34933,switch__33139__auto__,c__33318__auto___34937,G__33469_34934,G__33469_34935__$1,n__4607__auto___34932,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33140__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33140__auto____0 = (function (){
var statearr_33490 = [null,null,null,null,null,null,null];
(statearr_33490[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33140__auto__);

(statearr_33490[(1)] = (1));

return statearr_33490;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33140__auto____1 = (function (state_33482){
while(true){
var ret_value__33141__auto__ = (function (){try{while(true){
var result__33142__auto__ = switch__33139__auto__(state_33482);
if(cljs.core.keyword_identical_QMARK_(result__33142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33142__auto__;
}
break;
}
}catch (e33491){if((e33491 instanceof Object)){
var ex__33143__auto__ = e33491;
var statearr_33492_34944 = state_33482;
(statearr_33492_34944[(5)] = ex__33143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33491;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34945 = state_33482;
state_33482 = G__34945;
continue;
} else {
return ret_value__33141__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33140__auto__ = function(state_33482){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33140__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33140__auto____1.call(this,state_33482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33140__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33140__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33140__auto__;
})()
;})(__34933,switch__33139__auto__,c__33318__auto___34937,G__33469_34934,G__33469_34935__$1,n__4607__auto___34932,jobs,results,process,async))
})();
var state__33320__auto__ = (function (){var statearr_33493 = (f__33319__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33319__auto__.cljs$core$IFn$_invoke$arity$0() : f__33319__auto__.call(null));
(statearr_33493[(6)] = c__33318__auto___34937);

return statearr_33493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33320__auto__);
});})(__34933,c__33318__auto___34937,G__33469_34934,G__33469_34935__$1,n__4607__auto___34932,jobs,results,process,async))
);


break;
case "async":
var c__33318__auto___34946 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34933,c__33318__auto___34946,G__33469_34934,G__33469_34935__$1,n__4607__auto___34932,jobs,results,process,async){
return (function (){
var f__33319__auto__ = (function (){var switch__33139__auto__ = ((function (__34933,c__33318__auto___34946,G__33469_34934,G__33469_34935__$1,n__4607__auto___34932,jobs,results,process,async){
return (function (state_33506){
var state_val_33507 = (state_33506[(1)]);
if((state_val_33507 === (1))){
var state_33506__$1 = state_33506;
var statearr_33508_34949 = state_33506__$1;
(statearr_33508_34949[(2)] = null);

(statearr_33508_34949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (2))){
var state_33506__$1 = state_33506;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33506__$1,(4),jobs);
} else {
if((state_val_33507 === (3))){
var inst_33504 = (state_33506[(2)]);
var state_33506__$1 = state_33506;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33506__$1,inst_33504);
} else {
if((state_val_33507 === (4))){
var inst_33496 = (state_33506[(2)]);
var inst_33497 = async(inst_33496);
var state_33506__$1 = state_33506;
if(cljs.core.truth_(inst_33497)){
var statearr_33509_34950 = state_33506__$1;
(statearr_33509_34950[(1)] = (5));

} else {
var statearr_33510_34951 = state_33506__$1;
(statearr_33510_34951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (5))){
var state_33506__$1 = state_33506;
var statearr_33511_34952 = state_33506__$1;
(statearr_33511_34952[(2)] = null);

(statearr_33511_34952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (6))){
var state_33506__$1 = state_33506;
var statearr_33512_34953 = state_33506__$1;
(statearr_33512_34953[(2)] = null);

(statearr_33512_34953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (7))){
var inst_33502 = (state_33506[(2)]);
var state_33506__$1 = state_33506;
var statearr_33513_34955 = state_33506__$1;
(statearr_33513_34955[(2)] = inst_33502);

(statearr_33513_34955[(1)] = (3));


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
});})(__34933,c__33318__auto___34946,G__33469_34934,G__33469_34935__$1,n__4607__auto___34932,jobs,results,process,async))
;
return ((function (__34933,switch__33139__auto__,c__33318__auto___34946,G__33469_34934,G__33469_34935__$1,n__4607__auto___34932,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33140__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33140__auto____0 = (function (){
var statearr_33514 = [null,null,null,null,null,null,null];
(statearr_33514[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33140__auto__);

(statearr_33514[(1)] = (1));

return statearr_33514;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33140__auto____1 = (function (state_33506){
while(true){
var ret_value__33141__auto__ = (function (){try{while(true){
var result__33142__auto__ = switch__33139__auto__(state_33506);
if(cljs.core.keyword_identical_QMARK_(result__33142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33142__auto__;
}
break;
}
}catch (e33515){if((e33515 instanceof Object)){
var ex__33143__auto__ = e33515;
var statearr_33516_34959 = state_33506;
(statearr_33516_34959[(5)] = ex__33143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33515;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34961 = state_33506;
state_33506 = G__34961;
continue;
} else {
return ret_value__33141__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33140__auto__ = function(state_33506){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33140__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33140__auto____1.call(this,state_33506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33140__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33140__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33140__auto__;
})()
;})(__34933,switch__33139__auto__,c__33318__auto___34946,G__33469_34934,G__33469_34935__$1,n__4607__auto___34932,jobs,results,process,async))
})();
var state__33320__auto__ = (function (){var statearr_33517 = (f__33319__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33319__auto__.cljs$core$IFn$_invoke$arity$0() : f__33319__auto__.call(null));
(statearr_33517[(6)] = c__33318__auto___34946);

return statearr_33517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33320__auto__);
});})(__34933,c__33318__auto___34946,G__33469_34934,G__33469_34935__$1,n__4607__auto___34932,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33469_34935__$1)].join('')));

}

var G__34963 = (__34933 + (1));
__34933 = G__34963;
continue;
} else {
}
break;
}

var c__33318__auto___34964 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33318__auto___34964,jobs,results,process,async){
return (function (){
var f__33319__auto__ = (function (){var switch__33139__auto__ = ((function (c__33318__auto___34964,jobs,results,process,async){
return (function (state_33539){
var state_val_33540 = (state_33539[(1)]);
if((state_val_33540 === (7))){
var inst_33535 = (state_33539[(2)]);
var state_33539__$1 = state_33539;
var statearr_33541_34966 = state_33539__$1;
(statearr_33541_34966[(2)] = inst_33535);

(statearr_33541_34966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33540 === (1))){
var state_33539__$1 = state_33539;
var statearr_33542_34967 = state_33539__$1;
(statearr_33542_34967[(2)] = null);

(statearr_33542_34967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33540 === (4))){
var inst_33520 = (state_33539[(7)]);
var inst_33520__$1 = (state_33539[(2)]);
var inst_33521 = (inst_33520__$1 == null);
var state_33539__$1 = (function (){var statearr_33543 = state_33539;
(statearr_33543[(7)] = inst_33520__$1);

return statearr_33543;
})();
if(cljs.core.truth_(inst_33521)){
var statearr_33544_34968 = state_33539__$1;
(statearr_33544_34968[(1)] = (5));

} else {
var statearr_33545_34969 = state_33539__$1;
(statearr_33545_34969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33540 === (6))){
var inst_33525 = (state_33539[(8)]);
var inst_33520 = (state_33539[(7)]);
var inst_33525__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33526 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33527 = [inst_33520,inst_33525__$1];
var inst_33528 = (new cljs.core.PersistentVector(null,2,(5),inst_33526,inst_33527,null));
var state_33539__$1 = (function (){var statearr_33546 = state_33539;
(statearr_33546[(8)] = inst_33525__$1);

return statearr_33546;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33539__$1,(8),jobs,inst_33528);
} else {
if((state_val_33540 === (3))){
var inst_33537 = (state_33539[(2)]);
var state_33539__$1 = state_33539;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33539__$1,inst_33537);
} else {
if((state_val_33540 === (2))){
var state_33539__$1 = state_33539;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33539__$1,(4),from);
} else {
if((state_val_33540 === (9))){
var inst_33532 = (state_33539[(2)]);
var state_33539__$1 = (function (){var statearr_33547 = state_33539;
(statearr_33547[(9)] = inst_33532);

return statearr_33547;
})();
var statearr_33548_34974 = state_33539__$1;
(statearr_33548_34974[(2)] = null);

(statearr_33548_34974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33540 === (5))){
var inst_33523 = cljs.core.async.close_BANG_(jobs);
var state_33539__$1 = state_33539;
var statearr_33549_34975 = state_33539__$1;
(statearr_33549_34975[(2)] = inst_33523);

(statearr_33549_34975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33540 === (8))){
var inst_33525 = (state_33539[(8)]);
var inst_33530 = (state_33539[(2)]);
var state_33539__$1 = (function (){var statearr_33550 = state_33539;
(statearr_33550[(10)] = inst_33530);

return statearr_33550;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33539__$1,(9),results,inst_33525);
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
});})(c__33318__auto___34964,jobs,results,process,async))
;
return ((function (switch__33139__auto__,c__33318__auto___34964,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33140__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33140__auto____0 = (function (){
var statearr_33551 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33551[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33140__auto__);

(statearr_33551[(1)] = (1));

return statearr_33551;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33140__auto____1 = (function (state_33539){
while(true){
var ret_value__33141__auto__ = (function (){try{while(true){
var result__33142__auto__ = switch__33139__auto__(state_33539);
if(cljs.core.keyword_identical_QMARK_(result__33142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33142__auto__;
}
break;
}
}catch (e33552){if((e33552 instanceof Object)){
var ex__33143__auto__ = e33552;
var statearr_33553_34982 = state_33539;
(statearr_33553_34982[(5)] = ex__33143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33552;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34983 = state_33539;
state_33539 = G__34983;
continue;
} else {
return ret_value__33141__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33140__auto__ = function(state_33539){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33140__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33140__auto____1.call(this,state_33539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33140__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33140__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33140__auto__;
})()
;})(switch__33139__auto__,c__33318__auto___34964,jobs,results,process,async))
})();
var state__33320__auto__ = (function (){var statearr_33554 = (f__33319__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33319__auto__.cljs$core$IFn$_invoke$arity$0() : f__33319__auto__.call(null));
(statearr_33554[(6)] = c__33318__auto___34964);

return statearr_33554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33320__auto__);
});})(c__33318__auto___34964,jobs,results,process,async))
);


var c__33318__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33318__auto__,jobs,results,process,async){
return (function (){
var f__33319__auto__ = (function (){var switch__33139__auto__ = ((function (c__33318__auto__,jobs,results,process,async){
return (function (state_33592){
var state_val_33593 = (state_33592[(1)]);
if((state_val_33593 === (7))){
var inst_33588 = (state_33592[(2)]);
var state_33592__$1 = state_33592;
var statearr_33594_34986 = state_33592__$1;
(statearr_33594_34986[(2)] = inst_33588);

(statearr_33594_34986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33593 === (20))){
var state_33592__$1 = state_33592;
var statearr_33595_34987 = state_33592__$1;
(statearr_33595_34987[(2)] = null);

(statearr_33595_34987[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33593 === (1))){
var state_33592__$1 = state_33592;
var statearr_33596_34988 = state_33592__$1;
(statearr_33596_34988[(2)] = null);

(statearr_33596_34988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33593 === (4))){
var inst_33557 = (state_33592[(7)]);
var inst_33557__$1 = (state_33592[(2)]);
var inst_33558 = (inst_33557__$1 == null);
var state_33592__$1 = (function (){var statearr_33597 = state_33592;
(statearr_33597[(7)] = inst_33557__$1);

return statearr_33597;
})();
if(cljs.core.truth_(inst_33558)){
var statearr_33598_34989 = state_33592__$1;
(statearr_33598_34989[(1)] = (5));

} else {
var statearr_33599_34991 = state_33592__$1;
(statearr_33599_34991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33593 === (15))){
var inst_33570 = (state_33592[(8)]);
var state_33592__$1 = state_33592;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33592__$1,(18),to,inst_33570);
} else {
if((state_val_33593 === (21))){
var inst_33583 = (state_33592[(2)]);
var state_33592__$1 = state_33592;
var statearr_33600_34993 = state_33592__$1;
(statearr_33600_34993[(2)] = inst_33583);

(statearr_33600_34993[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33593 === (13))){
var inst_33585 = (state_33592[(2)]);
var state_33592__$1 = (function (){var statearr_33601 = state_33592;
(statearr_33601[(9)] = inst_33585);

return statearr_33601;
})();
var statearr_33602_34994 = state_33592__$1;
(statearr_33602_34994[(2)] = null);

(statearr_33602_34994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33593 === (6))){
var inst_33557 = (state_33592[(7)]);
var state_33592__$1 = state_33592;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33592__$1,(11),inst_33557);
} else {
if((state_val_33593 === (17))){
var inst_33578 = (state_33592[(2)]);
var state_33592__$1 = state_33592;
if(cljs.core.truth_(inst_33578)){
var statearr_33603_34995 = state_33592__$1;
(statearr_33603_34995[(1)] = (19));

} else {
var statearr_33604_34996 = state_33592__$1;
(statearr_33604_34996[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33593 === (3))){
var inst_33590 = (state_33592[(2)]);
var state_33592__$1 = state_33592;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33592__$1,inst_33590);
} else {
if((state_val_33593 === (12))){
var inst_33567 = (state_33592[(10)]);
var state_33592__$1 = state_33592;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33592__$1,(14),inst_33567);
} else {
if((state_val_33593 === (2))){
var state_33592__$1 = state_33592;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33592__$1,(4),results);
} else {
if((state_val_33593 === (19))){
var state_33592__$1 = state_33592;
var statearr_33605_34998 = state_33592__$1;
(statearr_33605_34998[(2)] = null);

(statearr_33605_34998[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33593 === (11))){
var inst_33567 = (state_33592[(2)]);
var state_33592__$1 = (function (){var statearr_33606 = state_33592;
(statearr_33606[(10)] = inst_33567);

return statearr_33606;
})();
var statearr_33607_35000 = state_33592__$1;
(statearr_33607_35000[(2)] = null);

(statearr_33607_35000[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33593 === (9))){
var state_33592__$1 = state_33592;
var statearr_33608_35001 = state_33592__$1;
(statearr_33608_35001[(2)] = null);

(statearr_33608_35001[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33593 === (5))){
var state_33592__$1 = state_33592;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33609_35002 = state_33592__$1;
(statearr_33609_35002[(1)] = (8));

} else {
var statearr_33610_35003 = state_33592__$1;
(statearr_33610_35003[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33593 === (14))){
var inst_33570 = (state_33592[(8)]);
var inst_33572 = (state_33592[(11)]);
var inst_33570__$1 = (state_33592[(2)]);
var inst_33571 = (inst_33570__$1 == null);
var inst_33572__$1 = cljs.core.not(inst_33571);
var state_33592__$1 = (function (){var statearr_33611 = state_33592;
(statearr_33611[(8)] = inst_33570__$1);

(statearr_33611[(11)] = inst_33572__$1);

return statearr_33611;
})();
if(inst_33572__$1){
var statearr_33612_35004 = state_33592__$1;
(statearr_33612_35004[(1)] = (15));

} else {
var statearr_33613_35005 = state_33592__$1;
(statearr_33613_35005[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33593 === (16))){
var inst_33572 = (state_33592[(11)]);
var state_33592__$1 = state_33592;
var statearr_33614_35006 = state_33592__$1;
(statearr_33614_35006[(2)] = inst_33572);

(statearr_33614_35006[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33593 === (10))){
var inst_33564 = (state_33592[(2)]);
var state_33592__$1 = state_33592;
var statearr_33615_35007 = state_33592__$1;
(statearr_33615_35007[(2)] = inst_33564);

(statearr_33615_35007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33593 === (18))){
var inst_33575 = (state_33592[(2)]);
var state_33592__$1 = state_33592;
var statearr_33616_35008 = state_33592__$1;
(statearr_33616_35008[(2)] = inst_33575);

(statearr_33616_35008[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33593 === (8))){
var inst_33561 = cljs.core.async.close_BANG_(to);
var state_33592__$1 = state_33592;
var statearr_33617_35010 = state_33592__$1;
(statearr_33617_35010[(2)] = inst_33561);

(statearr_33617_35010[(1)] = (10));


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
});})(c__33318__auto__,jobs,results,process,async))
;
return ((function (switch__33139__auto__,c__33318__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33140__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33140__auto____0 = (function (){
var statearr_33618 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33618[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33140__auto__);

(statearr_33618[(1)] = (1));

return statearr_33618;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33140__auto____1 = (function (state_33592){
while(true){
var ret_value__33141__auto__ = (function (){try{while(true){
var result__33142__auto__ = switch__33139__auto__(state_33592);
if(cljs.core.keyword_identical_QMARK_(result__33142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33142__auto__;
}
break;
}
}catch (e33619){if((e33619 instanceof Object)){
var ex__33143__auto__ = e33619;
var statearr_33620_35014 = state_33592;
(statearr_33620_35014[(5)] = ex__33143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33619;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35015 = state_33592;
state_33592 = G__35015;
continue;
} else {
return ret_value__33141__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33140__auto__ = function(state_33592){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33140__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33140__auto____1.call(this,state_33592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33140__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33140__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33140__auto__;
})()
;})(switch__33139__auto__,c__33318__auto__,jobs,results,process,async))
})();
var state__33320__auto__ = (function (){var statearr_33621 = (f__33319__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33319__auto__.cljs$core$IFn$_invoke$arity$0() : f__33319__auto__.call(null));
(statearr_33621[(6)] = c__33318__auto__);

return statearr_33621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33320__auto__);
});})(c__33318__auto__,jobs,results,process,async))
);

return c__33318__auto__;
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
var G__33623 = arguments.length;
switch (G__33623) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__33625 = arguments.length;
switch (G__33625) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__33627 = arguments.length;
switch (G__33627) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33318__auto___35029 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33318__auto___35029,tc,fc){
return (function (){
var f__33319__auto__ = (function (){var switch__33139__auto__ = ((function (c__33318__auto___35029,tc,fc){
return (function (state_33653){
var state_val_33654 = (state_33653[(1)]);
if((state_val_33654 === (7))){
var inst_33649 = (state_33653[(2)]);
var state_33653__$1 = state_33653;
var statearr_33655_35030 = state_33653__$1;
(statearr_33655_35030[(2)] = inst_33649);

(statearr_33655_35030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33654 === (1))){
var state_33653__$1 = state_33653;
var statearr_33656_35032 = state_33653__$1;
(statearr_33656_35032[(2)] = null);

(statearr_33656_35032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33654 === (4))){
var inst_33630 = (state_33653[(7)]);
var inst_33630__$1 = (state_33653[(2)]);
var inst_33631 = (inst_33630__$1 == null);
var state_33653__$1 = (function (){var statearr_33657 = state_33653;
(statearr_33657[(7)] = inst_33630__$1);

return statearr_33657;
})();
if(cljs.core.truth_(inst_33631)){
var statearr_33658_35033 = state_33653__$1;
(statearr_33658_35033[(1)] = (5));

} else {
var statearr_33659_35034 = state_33653__$1;
(statearr_33659_35034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33654 === (13))){
var state_33653__$1 = state_33653;
var statearr_33660_35035 = state_33653__$1;
(statearr_33660_35035[(2)] = null);

(statearr_33660_35035[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33654 === (6))){
var inst_33630 = (state_33653[(7)]);
var inst_33636 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33630) : p.call(null,inst_33630));
var state_33653__$1 = state_33653;
if(cljs.core.truth_(inst_33636)){
var statearr_33661_35036 = state_33653__$1;
(statearr_33661_35036[(1)] = (9));

} else {
var statearr_33662_35037 = state_33653__$1;
(statearr_33662_35037[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33654 === (3))){
var inst_33651 = (state_33653[(2)]);
var state_33653__$1 = state_33653;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33653__$1,inst_33651);
} else {
if((state_val_33654 === (12))){
var state_33653__$1 = state_33653;
var statearr_33663_35038 = state_33653__$1;
(statearr_33663_35038[(2)] = null);

(statearr_33663_35038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33654 === (2))){
var state_33653__$1 = state_33653;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33653__$1,(4),ch);
} else {
if((state_val_33654 === (11))){
var inst_33630 = (state_33653[(7)]);
var inst_33640 = (state_33653[(2)]);
var state_33653__$1 = state_33653;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33653__$1,(8),inst_33640,inst_33630);
} else {
if((state_val_33654 === (9))){
var state_33653__$1 = state_33653;
var statearr_33664_35039 = state_33653__$1;
(statearr_33664_35039[(2)] = tc);

(statearr_33664_35039[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33654 === (5))){
var inst_33633 = cljs.core.async.close_BANG_(tc);
var inst_33634 = cljs.core.async.close_BANG_(fc);
var state_33653__$1 = (function (){var statearr_33665 = state_33653;
(statearr_33665[(8)] = inst_33633);

return statearr_33665;
})();
var statearr_33666_35044 = state_33653__$1;
(statearr_33666_35044[(2)] = inst_33634);

(statearr_33666_35044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33654 === (14))){
var inst_33647 = (state_33653[(2)]);
var state_33653__$1 = state_33653;
var statearr_33667_35045 = state_33653__$1;
(statearr_33667_35045[(2)] = inst_33647);

(statearr_33667_35045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33654 === (10))){
var state_33653__$1 = state_33653;
var statearr_33668_35049 = state_33653__$1;
(statearr_33668_35049[(2)] = fc);

(statearr_33668_35049[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33654 === (8))){
var inst_33642 = (state_33653[(2)]);
var state_33653__$1 = state_33653;
if(cljs.core.truth_(inst_33642)){
var statearr_33669_35050 = state_33653__$1;
(statearr_33669_35050[(1)] = (12));

} else {
var statearr_33670_35051 = state_33653__$1;
(statearr_33670_35051[(1)] = (13));

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
});})(c__33318__auto___35029,tc,fc))
;
return ((function (switch__33139__auto__,c__33318__auto___35029,tc,fc){
return (function() {
var cljs$core$async$state_machine__33140__auto__ = null;
var cljs$core$async$state_machine__33140__auto____0 = (function (){
var statearr_33671 = [null,null,null,null,null,null,null,null,null];
(statearr_33671[(0)] = cljs$core$async$state_machine__33140__auto__);

(statearr_33671[(1)] = (1));

return statearr_33671;
});
var cljs$core$async$state_machine__33140__auto____1 = (function (state_33653){
while(true){
var ret_value__33141__auto__ = (function (){try{while(true){
var result__33142__auto__ = switch__33139__auto__(state_33653);
if(cljs.core.keyword_identical_QMARK_(result__33142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33142__auto__;
}
break;
}
}catch (e33672){if((e33672 instanceof Object)){
var ex__33143__auto__ = e33672;
var statearr_33673_35055 = state_33653;
(statearr_33673_35055[(5)] = ex__33143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33672;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35056 = state_33653;
state_33653 = G__35056;
continue;
} else {
return ret_value__33141__auto__;
}
break;
}
});
cljs$core$async$state_machine__33140__auto__ = function(state_33653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33140__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33140__auto____1.call(this,state_33653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33140__auto____0;
cljs$core$async$state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33140__auto____1;
return cljs$core$async$state_machine__33140__auto__;
})()
;})(switch__33139__auto__,c__33318__auto___35029,tc,fc))
})();
var state__33320__auto__ = (function (){var statearr_33674 = (f__33319__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33319__auto__.cljs$core$IFn$_invoke$arity$0() : f__33319__auto__.call(null));
(statearr_33674[(6)] = c__33318__auto___35029);

return statearr_33674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33320__auto__);
});})(c__33318__auto___35029,tc,fc))
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
var c__33318__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33318__auto__){
return (function (){
var f__33319__auto__ = (function (){var switch__33139__auto__ = ((function (c__33318__auto__){
return (function (state_33695){
var state_val_33696 = (state_33695[(1)]);
if((state_val_33696 === (7))){
var inst_33691 = (state_33695[(2)]);
var state_33695__$1 = state_33695;
var statearr_33697_35060 = state_33695__$1;
(statearr_33697_35060[(2)] = inst_33691);

(statearr_33697_35060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33696 === (1))){
var inst_33675 = init;
var state_33695__$1 = (function (){var statearr_33698 = state_33695;
(statearr_33698[(7)] = inst_33675);

return statearr_33698;
})();
var statearr_33699_35061 = state_33695__$1;
(statearr_33699_35061[(2)] = null);

(statearr_33699_35061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33696 === (4))){
var inst_33678 = (state_33695[(8)]);
var inst_33678__$1 = (state_33695[(2)]);
var inst_33679 = (inst_33678__$1 == null);
var state_33695__$1 = (function (){var statearr_33700 = state_33695;
(statearr_33700[(8)] = inst_33678__$1);

return statearr_33700;
})();
if(cljs.core.truth_(inst_33679)){
var statearr_33701_35065 = state_33695__$1;
(statearr_33701_35065[(1)] = (5));

} else {
var statearr_33702_35066 = state_33695__$1;
(statearr_33702_35066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33696 === (6))){
var inst_33682 = (state_33695[(9)]);
var inst_33675 = (state_33695[(7)]);
var inst_33678 = (state_33695[(8)]);
var inst_33682__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33675,inst_33678) : f.call(null,inst_33675,inst_33678));
var inst_33683 = cljs.core.reduced_QMARK_(inst_33682__$1);
var state_33695__$1 = (function (){var statearr_33703 = state_33695;
(statearr_33703[(9)] = inst_33682__$1);

return statearr_33703;
})();
if(inst_33683){
var statearr_33704_35069 = state_33695__$1;
(statearr_33704_35069[(1)] = (8));

} else {
var statearr_33705_35070 = state_33695__$1;
(statearr_33705_35070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33696 === (3))){
var inst_33693 = (state_33695[(2)]);
var state_33695__$1 = state_33695;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33695__$1,inst_33693);
} else {
if((state_val_33696 === (2))){
var state_33695__$1 = state_33695;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33695__$1,(4),ch);
} else {
if((state_val_33696 === (9))){
var inst_33682 = (state_33695[(9)]);
var inst_33675 = inst_33682;
var state_33695__$1 = (function (){var statearr_33706 = state_33695;
(statearr_33706[(7)] = inst_33675);

return statearr_33706;
})();
var statearr_33707_35071 = state_33695__$1;
(statearr_33707_35071[(2)] = null);

(statearr_33707_35071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33696 === (5))){
var inst_33675 = (state_33695[(7)]);
var state_33695__$1 = state_33695;
var statearr_33708_35072 = state_33695__$1;
(statearr_33708_35072[(2)] = inst_33675);

(statearr_33708_35072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33696 === (10))){
var inst_33689 = (state_33695[(2)]);
var state_33695__$1 = state_33695;
var statearr_33709_35073 = state_33695__$1;
(statearr_33709_35073[(2)] = inst_33689);

(statearr_33709_35073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33696 === (8))){
var inst_33682 = (state_33695[(9)]);
var inst_33685 = cljs.core.deref(inst_33682);
var state_33695__$1 = state_33695;
var statearr_33710_35077 = state_33695__$1;
(statearr_33710_35077[(2)] = inst_33685);

(statearr_33710_35077[(1)] = (10));


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
});})(c__33318__auto__))
;
return ((function (switch__33139__auto__,c__33318__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33140__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33140__auto____0 = (function (){
var statearr_33711 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33711[(0)] = cljs$core$async$reduce_$_state_machine__33140__auto__);

(statearr_33711[(1)] = (1));

return statearr_33711;
});
var cljs$core$async$reduce_$_state_machine__33140__auto____1 = (function (state_33695){
while(true){
var ret_value__33141__auto__ = (function (){try{while(true){
var result__33142__auto__ = switch__33139__auto__(state_33695);
if(cljs.core.keyword_identical_QMARK_(result__33142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33142__auto__;
}
break;
}
}catch (e33712){if((e33712 instanceof Object)){
var ex__33143__auto__ = e33712;
var statearr_33713_35081 = state_33695;
(statearr_33713_35081[(5)] = ex__33143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33712;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35082 = state_33695;
state_33695 = G__35082;
continue;
} else {
return ret_value__33141__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33140__auto__ = function(state_33695){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33140__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33140__auto____1.call(this,state_33695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33140__auto____0;
cljs$core$async$reduce_$_state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33140__auto____1;
return cljs$core$async$reduce_$_state_machine__33140__auto__;
})()
;})(switch__33139__auto__,c__33318__auto__))
})();
var state__33320__auto__ = (function (){var statearr_33714 = (f__33319__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33319__auto__.cljs$core$IFn$_invoke$arity$0() : f__33319__auto__.call(null));
(statearr_33714[(6)] = c__33318__auto__);

return statearr_33714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33320__auto__);
});})(c__33318__auto__))
);

return c__33318__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33318__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33318__auto__,f__$1){
return (function (){
var f__33319__auto__ = (function (){var switch__33139__auto__ = ((function (c__33318__auto__,f__$1){
return (function (state_33720){
var state_val_33721 = (state_33720[(1)]);
if((state_val_33721 === (1))){
var inst_33715 = cljs.core.async.reduce(f__$1,init,ch);
var state_33720__$1 = state_33720;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33720__$1,(2),inst_33715);
} else {
if((state_val_33721 === (2))){
var inst_33717 = (state_33720[(2)]);
var inst_33718 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33717) : f__$1.call(null,inst_33717));
var state_33720__$1 = state_33720;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33720__$1,inst_33718);
} else {
return null;
}
}
});})(c__33318__auto__,f__$1))
;
return ((function (switch__33139__auto__,c__33318__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33140__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33140__auto____0 = (function (){
var statearr_33722 = [null,null,null,null,null,null,null];
(statearr_33722[(0)] = cljs$core$async$transduce_$_state_machine__33140__auto__);

(statearr_33722[(1)] = (1));

return statearr_33722;
});
var cljs$core$async$transduce_$_state_machine__33140__auto____1 = (function (state_33720){
while(true){
var ret_value__33141__auto__ = (function (){try{while(true){
var result__33142__auto__ = switch__33139__auto__(state_33720);
if(cljs.core.keyword_identical_QMARK_(result__33142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33142__auto__;
}
break;
}
}catch (e33723){if((e33723 instanceof Object)){
var ex__33143__auto__ = e33723;
var statearr_33724_35096 = state_33720;
(statearr_33724_35096[(5)] = ex__33143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33723;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35097 = state_33720;
state_33720 = G__35097;
continue;
} else {
return ret_value__33141__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33140__auto__ = function(state_33720){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33140__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33140__auto____1.call(this,state_33720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33140__auto____0;
cljs$core$async$transduce_$_state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33140__auto____1;
return cljs$core$async$transduce_$_state_machine__33140__auto__;
})()
;})(switch__33139__auto__,c__33318__auto__,f__$1))
})();
var state__33320__auto__ = (function (){var statearr_33725 = (f__33319__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33319__auto__.cljs$core$IFn$_invoke$arity$0() : f__33319__auto__.call(null));
(statearr_33725[(6)] = c__33318__auto__);

return statearr_33725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33320__auto__);
});})(c__33318__auto__,f__$1))
);

return c__33318__auto__;
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
var G__33727 = arguments.length;
switch (G__33727) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33318__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33318__auto__){
return (function (){
var f__33319__auto__ = (function (){var switch__33139__auto__ = ((function (c__33318__auto__){
return (function (state_33752){
var state_val_33753 = (state_33752[(1)]);
if((state_val_33753 === (7))){
var inst_33734 = (state_33752[(2)]);
var state_33752__$1 = state_33752;
var statearr_33754_35109 = state_33752__$1;
(statearr_33754_35109[(2)] = inst_33734);

(statearr_33754_35109[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (1))){
var inst_33728 = cljs.core.seq(coll);
var inst_33729 = inst_33728;
var state_33752__$1 = (function (){var statearr_33755 = state_33752;
(statearr_33755[(7)] = inst_33729);

return statearr_33755;
})();
var statearr_33756_35113 = state_33752__$1;
(statearr_33756_35113[(2)] = null);

(statearr_33756_35113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (4))){
var inst_33729 = (state_33752[(7)]);
var inst_33732 = cljs.core.first(inst_33729);
var state_33752__$1 = state_33752;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33752__$1,(7),ch,inst_33732);
} else {
if((state_val_33753 === (13))){
var inst_33746 = (state_33752[(2)]);
var state_33752__$1 = state_33752;
var statearr_33757_35114 = state_33752__$1;
(statearr_33757_35114[(2)] = inst_33746);

(statearr_33757_35114[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (6))){
var inst_33737 = (state_33752[(2)]);
var state_33752__$1 = state_33752;
if(cljs.core.truth_(inst_33737)){
var statearr_33758_35121 = state_33752__$1;
(statearr_33758_35121[(1)] = (8));

} else {
var statearr_33759_35122 = state_33752__$1;
(statearr_33759_35122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (3))){
var inst_33750 = (state_33752[(2)]);
var state_33752__$1 = state_33752;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33752__$1,inst_33750);
} else {
if((state_val_33753 === (12))){
var state_33752__$1 = state_33752;
var statearr_33760_35123 = state_33752__$1;
(statearr_33760_35123[(2)] = null);

(statearr_33760_35123[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (2))){
var inst_33729 = (state_33752[(7)]);
var state_33752__$1 = state_33752;
if(cljs.core.truth_(inst_33729)){
var statearr_33761_35130 = state_33752__$1;
(statearr_33761_35130[(1)] = (4));

} else {
var statearr_33762_35131 = state_33752__$1;
(statearr_33762_35131[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (11))){
var inst_33743 = cljs.core.async.close_BANG_(ch);
var state_33752__$1 = state_33752;
var statearr_33763_35132 = state_33752__$1;
(statearr_33763_35132[(2)] = inst_33743);

(statearr_33763_35132[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (9))){
var state_33752__$1 = state_33752;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33764_35133 = state_33752__$1;
(statearr_33764_35133[(1)] = (11));

} else {
var statearr_33765_35134 = state_33752__$1;
(statearr_33765_35134[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (5))){
var inst_33729 = (state_33752[(7)]);
var state_33752__$1 = state_33752;
var statearr_33766_35138 = state_33752__$1;
(statearr_33766_35138[(2)] = inst_33729);

(statearr_33766_35138[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (10))){
var inst_33748 = (state_33752[(2)]);
var state_33752__$1 = state_33752;
var statearr_33767_35142 = state_33752__$1;
(statearr_33767_35142[(2)] = inst_33748);

(statearr_33767_35142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (8))){
var inst_33729 = (state_33752[(7)]);
var inst_33739 = cljs.core.next(inst_33729);
var inst_33729__$1 = inst_33739;
var state_33752__$1 = (function (){var statearr_33768 = state_33752;
(statearr_33768[(7)] = inst_33729__$1);

return statearr_33768;
})();
var statearr_33769_35143 = state_33752__$1;
(statearr_33769_35143[(2)] = null);

(statearr_33769_35143[(1)] = (2));


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
});})(c__33318__auto__))
;
return ((function (switch__33139__auto__,c__33318__auto__){
return (function() {
var cljs$core$async$state_machine__33140__auto__ = null;
var cljs$core$async$state_machine__33140__auto____0 = (function (){
var statearr_33770 = [null,null,null,null,null,null,null,null];
(statearr_33770[(0)] = cljs$core$async$state_machine__33140__auto__);

(statearr_33770[(1)] = (1));

return statearr_33770;
});
var cljs$core$async$state_machine__33140__auto____1 = (function (state_33752){
while(true){
var ret_value__33141__auto__ = (function (){try{while(true){
var result__33142__auto__ = switch__33139__auto__(state_33752);
if(cljs.core.keyword_identical_QMARK_(result__33142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33142__auto__;
}
break;
}
}catch (e33771){if((e33771 instanceof Object)){
var ex__33143__auto__ = e33771;
var statearr_33772_35145 = state_33752;
(statearr_33772_35145[(5)] = ex__33143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33771;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35146 = state_33752;
state_33752 = G__35146;
continue;
} else {
return ret_value__33141__auto__;
}
break;
}
});
cljs$core$async$state_machine__33140__auto__ = function(state_33752){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33140__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33140__auto____1.call(this,state_33752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33140__auto____0;
cljs$core$async$state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33140__auto____1;
return cljs$core$async$state_machine__33140__auto__;
})()
;})(switch__33139__auto__,c__33318__auto__))
})();
var state__33320__auto__ = (function (){var statearr_33773 = (f__33319__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33319__auto__.cljs$core$IFn$_invoke$arity$0() : f__33319__auto__.call(null));
(statearr_33773[(6)] = c__33318__auto__);

return statearr_33773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33320__auto__);
});})(c__33318__auto__))
);

return c__33318__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33774 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33774 = (function (ch,cs,meta33775){
this.ch = ch;
this.cs = cs;
this.meta33775 = meta33775;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33776,meta33775__$1){
var self__ = this;
var _33776__$1 = this;
return (new cljs.core.async.t_cljs$core$async33774(self__.ch,self__.cs,meta33775__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33774.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33776){
var self__ = this;
var _33776__$1 = this;
return self__.meta33775;
});})(cs))
;

cljs.core.async.t_cljs$core$async33774.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33774.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33774.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33774.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33774.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33774.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33774.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33775","meta33775",-1862239068,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33774.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33774.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33774";

cljs.core.async.t_cljs$core$async33774.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33774");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33774.
 */
cljs.core.async.__GT_t_cljs$core$async33774 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33774(ch__$1,cs__$1,meta33775){
return (new cljs.core.async.t_cljs$core$async33774(ch__$1,cs__$1,meta33775));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33774(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__33318__auto___35152 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33318__auto___35152,cs,m,dchan,dctr,done){
return (function (){
var f__33319__auto__ = (function (){var switch__33139__auto__ = ((function (c__33318__auto___35152,cs,m,dchan,dctr,done){
return (function (state_33911){
var state_val_33912 = (state_33911[(1)]);
if((state_val_33912 === (7))){
var inst_33907 = (state_33911[(2)]);
var state_33911__$1 = state_33911;
var statearr_33913_35157 = state_33911__$1;
(statearr_33913_35157[(2)] = inst_33907);

(statearr_33913_35157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (20))){
var inst_33810 = (state_33911[(7)]);
var inst_33822 = cljs.core.first(inst_33810);
var inst_33823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33822,(0),null);
var inst_33824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33822,(1),null);
var state_33911__$1 = (function (){var statearr_33914 = state_33911;
(statearr_33914[(8)] = inst_33823);

return statearr_33914;
})();
if(cljs.core.truth_(inst_33824)){
var statearr_33915_35159 = state_33911__$1;
(statearr_33915_35159[(1)] = (22));

} else {
var statearr_33916_35160 = state_33911__$1;
(statearr_33916_35160[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (27))){
var inst_33779 = (state_33911[(9)]);
var inst_33859 = (state_33911[(10)]);
var inst_33852 = (state_33911[(11)]);
var inst_33854 = (state_33911[(12)]);
var inst_33859__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33852,inst_33854);
var inst_33860 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33859__$1,inst_33779,done);
var state_33911__$1 = (function (){var statearr_33917 = state_33911;
(statearr_33917[(10)] = inst_33859__$1);

return statearr_33917;
})();
if(cljs.core.truth_(inst_33860)){
var statearr_33918_35162 = state_33911__$1;
(statearr_33918_35162[(1)] = (30));

} else {
var statearr_33919_35163 = state_33911__$1;
(statearr_33919_35163[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (1))){
var state_33911__$1 = state_33911;
var statearr_33920_35164 = state_33911__$1;
(statearr_33920_35164[(2)] = null);

(statearr_33920_35164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (24))){
var inst_33810 = (state_33911[(7)]);
var inst_33829 = (state_33911[(2)]);
var inst_33830 = cljs.core.next(inst_33810);
var inst_33788 = inst_33830;
var inst_33789 = null;
var inst_33790 = (0);
var inst_33791 = (0);
var state_33911__$1 = (function (){var statearr_33921 = state_33911;
(statearr_33921[(13)] = inst_33829);

(statearr_33921[(14)] = inst_33791);

(statearr_33921[(15)] = inst_33790);

(statearr_33921[(16)] = inst_33788);

(statearr_33921[(17)] = inst_33789);

return statearr_33921;
})();
var statearr_33922_35165 = state_33911__$1;
(statearr_33922_35165[(2)] = null);

(statearr_33922_35165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (39))){
var state_33911__$1 = state_33911;
var statearr_33926_35166 = state_33911__$1;
(statearr_33926_35166[(2)] = null);

(statearr_33926_35166[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (4))){
var inst_33779 = (state_33911[(9)]);
var inst_33779__$1 = (state_33911[(2)]);
var inst_33780 = (inst_33779__$1 == null);
var state_33911__$1 = (function (){var statearr_33927 = state_33911;
(statearr_33927[(9)] = inst_33779__$1);

return statearr_33927;
})();
if(cljs.core.truth_(inst_33780)){
var statearr_33928_35167 = state_33911__$1;
(statearr_33928_35167[(1)] = (5));

} else {
var statearr_33929_35168 = state_33911__$1;
(statearr_33929_35168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (15))){
var inst_33791 = (state_33911[(14)]);
var inst_33790 = (state_33911[(15)]);
var inst_33788 = (state_33911[(16)]);
var inst_33789 = (state_33911[(17)]);
var inst_33806 = (state_33911[(2)]);
var inst_33807 = (inst_33791 + (1));
var tmp33923 = inst_33790;
var tmp33924 = inst_33788;
var tmp33925 = inst_33789;
var inst_33788__$1 = tmp33924;
var inst_33789__$1 = tmp33925;
var inst_33790__$1 = tmp33923;
var inst_33791__$1 = inst_33807;
var state_33911__$1 = (function (){var statearr_33930 = state_33911;
(statearr_33930[(18)] = inst_33806);

(statearr_33930[(14)] = inst_33791__$1);

(statearr_33930[(15)] = inst_33790__$1);

(statearr_33930[(16)] = inst_33788__$1);

(statearr_33930[(17)] = inst_33789__$1);

return statearr_33930;
})();
var statearr_33931_35173 = state_33911__$1;
(statearr_33931_35173[(2)] = null);

(statearr_33931_35173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (21))){
var inst_33833 = (state_33911[(2)]);
var state_33911__$1 = state_33911;
var statearr_33935_35176 = state_33911__$1;
(statearr_33935_35176[(2)] = inst_33833);

(statearr_33935_35176[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (31))){
var inst_33859 = (state_33911[(10)]);
var inst_33863 = done(null);
var inst_33864 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33859);
var state_33911__$1 = (function (){var statearr_33936 = state_33911;
(statearr_33936[(19)] = inst_33863);

return statearr_33936;
})();
var statearr_33937_35179 = state_33911__$1;
(statearr_33937_35179[(2)] = inst_33864);

(statearr_33937_35179[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (32))){
var inst_33852 = (state_33911[(11)]);
var inst_33853 = (state_33911[(20)]);
var inst_33851 = (state_33911[(21)]);
var inst_33854 = (state_33911[(12)]);
var inst_33866 = (state_33911[(2)]);
var inst_33867 = (inst_33854 + (1));
var tmp33932 = inst_33852;
var tmp33933 = inst_33853;
var tmp33934 = inst_33851;
var inst_33851__$1 = tmp33934;
var inst_33852__$1 = tmp33932;
var inst_33853__$1 = tmp33933;
var inst_33854__$1 = inst_33867;
var state_33911__$1 = (function (){var statearr_33938 = state_33911;
(statearr_33938[(11)] = inst_33852__$1);

(statearr_33938[(20)] = inst_33853__$1);

(statearr_33938[(21)] = inst_33851__$1);

(statearr_33938[(22)] = inst_33866);

(statearr_33938[(12)] = inst_33854__$1);

return statearr_33938;
})();
var statearr_33939_35187 = state_33911__$1;
(statearr_33939_35187[(2)] = null);

(statearr_33939_35187[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (40))){
var inst_33879 = (state_33911[(23)]);
var inst_33883 = done(null);
var inst_33884 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33879);
var state_33911__$1 = (function (){var statearr_33940 = state_33911;
(statearr_33940[(24)] = inst_33883);

return statearr_33940;
})();
var statearr_33941_35194 = state_33911__$1;
(statearr_33941_35194[(2)] = inst_33884);

(statearr_33941_35194[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (33))){
var inst_33870 = (state_33911[(25)]);
var inst_33872 = cljs.core.chunked_seq_QMARK_(inst_33870);
var state_33911__$1 = state_33911;
if(inst_33872){
var statearr_33942_35195 = state_33911__$1;
(statearr_33942_35195[(1)] = (36));

} else {
var statearr_33943_35196 = state_33911__$1;
(statearr_33943_35196[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (13))){
var inst_33800 = (state_33911[(26)]);
var inst_33803 = cljs.core.async.close_BANG_(inst_33800);
var state_33911__$1 = state_33911;
var statearr_33944_35197 = state_33911__$1;
(statearr_33944_35197[(2)] = inst_33803);

(statearr_33944_35197[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (22))){
var inst_33823 = (state_33911[(8)]);
var inst_33826 = cljs.core.async.close_BANG_(inst_33823);
var state_33911__$1 = state_33911;
var statearr_33945_35198 = state_33911__$1;
(statearr_33945_35198[(2)] = inst_33826);

(statearr_33945_35198[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (36))){
var inst_33870 = (state_33911[(25)]);
var inst_33874 = cljs.core.chunk_first(inst_33870);
var inst_33875 = cljs.core.chunk_rest(inst_33870);
var inst_33876 = cljs.core.count(inst_33874);
var inst_33851 = inst_33875;
var inst_33852 = inst_33874;
var inst_33853 = inst_33876;
var inst_33854 = (0);
var state_33911__$1 = (function (){var statearr_33946 = state_33911;
(statearr_33946[(11)] = inst_33852);

(statearr_33946[(20)] = inst_33853);

(statearr_33946[(21)] = inst_33851);

(statearr_33946[(12)] = inst_33854);

return statearr_33946;
})();
var statearr_33947_35199 = state_33911__$1;
(statearr_33947_35199[(2)] = null);

(statearr_33947_35199[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (41))){
var inst_33870 = (state_33911[(25)]);
var inst_33886 = (state_33911[(2)]);
var inst_33887 = cljs.core.next(inst_33870);
var inst_33851 = inst_33887;
var inst_33852 = null;
var inst_33853 = (0);
var inst_33854 = (0);
var state_33911__$1 = (function (){var statearr_33948 = state_33911;
(statearr_33948[(11)] = inst_33852);

(statearr_33948[(20)] = inst_33853);

(statearr_33948[(27)] = inst_33886);

(statearr_33948[(21)] = inst_33851);

(statearr_33948[(12)] = inst_33854);

return statearr_33948;
})();
var statearr_33949_35200 = state_33911__$1;
(statearr_33949_35200[(2)] = null);

(statearr_33949_35200[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (43))){
var state_33911__$1 = state_33911;
var statearr_33950_35207 = state_33911__$1;
(statearr_33950_35207[(2)] = null);

(statearr_33950_35207[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (29))){
var inst_33895 = (state_33911[(2)]);
var state_33911__$1 = state_33911;
var statearr_33951_35208 = state_33911__$1;
(statearr_33951_35208[(2)] = inst_33895);

(statearr_33951_35208[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (44))){
var inst_33904 = (state_33911[(2)]);
var state_33911__$1 = (function (){var statearr_33952 = state_33911;
(statearr_33952[(28)] = inst_33904);

return statearr_33952;
})();
var statearr_33953_35209 = state_33911__$1;
(statearr_33953_35209[(2)] = null);

(statearr_33953_35209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (6))){
var inst_33843 = (state_33911[(29)]);
var inst_33842 = cljs.core.deref(cs);
var inst_33843__$1 = cljs.core.keys(inst_33842);
var inst_33844 = cljs.core.count(inst_33843__$1);
var inst_33845 = cljs.core.reset_BANG_(dctr,inst_33844);
var inst_33850 = cljs.core.seq(inst_33843__$1);
var inst_33851 = inst_33850;
var inst_33852 = null;
var inst_33853 = (0);
var inst_33854 = (0);
var state_33911__$1 = (function (){var statearr_33954 = state_33911;
(statearr_33954[(11)] = inst_33852);

(statearr_33954[(20)] = inst_33853);

(statearr_33954[(21)] = inst_33851);

(statearr_33954[(30)] = inst_33845);

(statearr_33954[(29)] = inst_33843__$1);

(statearr_33954[(12)] = inst_33854);

return statearr_33954;
})();
var statearr_33955_35210 = state_33911__$1;
(statearr_33955_35210[(2)] = null);

(statearr_33955_35210[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (28))){
var inst_33851 = (state_33911[(21)]);
var inst_33870 = (state_33911[(25)]);
var inst_33870__$1 = cljs.core.seq(inst_33851);
var state_33911__$1 = (function (){var statearr_33956 = state_33911;
(statearr_33956[(25)] = inst_33870__$1);

return statearr_33956;
})();
if(inst_33870__$1){
var statearr_33957_35211 = state_33911__$1;
(statearr_33957_35211[(1)] = (33));

} else {
var statearr_33958_35212 = state_33911__$1;
(statearr_33958_35212[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (25))){
var inst_33853 = (state_33911[(20)]);
var inst_33854 = (state_33911[(12)]);
var inst_33856 = (inst_33854 < inst_33853);
var inst_33857 = inst_33856;
var state_33911__$1 = state_33911;
if(cljs.core.truth_(inst_33857)){
var statearr_33959_35213 = state_33911__$1;
(statearr_33959_35213[(1)] = (27));

} else {
var statearr_33960_35214 = state_33911__$1;
(statearr_33960_35214[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (34))){
var state_33911__$1 = state_33911;
var statearr_33961_35215 = state_33911__$1;
(statearr_33961_35215[(2)] = null);

(statearr_33961_35215[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (17))){
var state_33911__$1 = state_33911;
var statearr_33962_35222 = state_33911__$1;
(statearr_33962_35222[(2)] = null);

(statearr_33962_35222[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (3))){
var inst_33909 = (state_33911[(2)]);
var state_33911__$1 = state_33911;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33911__$1,inst_33909);
} else {
if((state_val_33912 === (12))){
var inst_33838 = (state_33911[(2)]);
var state_33911__$1 = state_33911;
var statearr_33963_35223 = state_33911__$1;
(statearr_33963_35223[(2)] = inst_33838);

(statearr_33963_35223[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (2))){
var state_33911__$1 = state_33911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33911__$1,(4),ch);
} else {
if((state_val_33912 === (23))){
var state_33911__$1 = state_33911;
var statearr_33964_35224 = state_33911__$1;
(statearr_33964_35224[(2)] = null);

(statearr_33964_35224[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (35))){
var inst_33893 = (state_33911[(2)]);
var state_33911__$1 = state_33911;
var statearr_33965_35225 = state_33911__$1;
(statearr_33965_35225[(2)] = inst_33893);

(statearr_33965_35225[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (19))){
var inst_33810 = (state_33911[(7)]);
var inst_33814 = cljs.core.chunk_first(inst_33810);
var inst_33815 = cljs.core.chunk_rest(inst_33810);
var inst_33816 = cljs.core.count(inst_33814);
var inst_33788 = inst_33815;
var inst_33789 = inst_33814;
var inst_33790 = inst_33816;
var inst_33791 = (0);
var state_33911__$1 = (function (){var statearr_33966 = state_33911;
(statearr_33966[(14)] = inst_33791);

(statearr_33966[(15)] = inst_33790);

(statearr_33966[(16)] = inst_33788);

(statearr_33966[(17)] = inst_33789);

return statearr_33966;
})();
var statearr_33967_35226 = state_33911__$1;
(statearr_33967_35226[(2)] = null);

(statearr_33967_35226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (11))){
var inst_33788 = (state_33911[(16)]);
var inst_33810 = (state_33911[(7)]);
var inst_33810__$1 = cljs.core.seq(inst_33788);
var state_33911__$1 = (function (){var statearr_33968 = state_33911;
(statearr_33968[(7)] = inst_33810__$1);

return statearr_33968;
})();
if(inst_33810__$1){
var statearr_33969_35227 = state_33911__$1;
(statearr_33969_35227[(1)] = (16));

} else {
var statearr_33970_35228 = state_33911__$1;
(statearr_33970_35228[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (9))){
var inst_33840 = (state_33911[(2)]);
var state_33911__$1 = state_33911;
var statearr_33971_35229 = state_33911__$1;
(statearr_33971_35229[(2)] = inst_33840);

(statearr_33971_35229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (5))){
var inst_33786 = cljs.core.deref(cs);
var inst_33787 = cljs.core.seq(inst_33786);
var inst_33788 = inst_33787;
var inst_33789 = null;
var inst_33790 = (0);
var inst_33791 = (0);
var state_33911__$1 = (function (){var statearr_33972 = state_33911;
(statearr_33972[(14)] = inst_33791);

(statearr_33972[(15)] = inst_33790);

(statearr_33972[(16)] = inst_33788);

(statearr_33972[(17)] = inst_33789);

return statearr_33972;
})();
var statearr_33973_35236 = state_33911__$1;
(statearr_33973_35236[(2)] = null);

(statearr_33973_35236[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (14))){
var state_33911__$1 = state_33911;
var statearr_33974_35237 = state_33911__$1;
(statearr_33974_35237[(2)] = null);

(statearr_33974_35237[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (45))){
var inst_33901 = (state_33911[(2)]);
var state_33911__$1 = state_33911;
var statearr_33975_35238 = state_33911__$1;
(statearr_33975_35238[(2)] = inst_33901);

(statearr_33975_35238[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (26))){
var inst_33843 = (state_33911[(29)]);
var inst_33897 = (state_33911[(2)]);
var inst_33898 = cljs.core.seq(inst_33843);
var state_33911__$1 = (function (){var statearr_33976 = state_33911;
(statearr_33976[(31)] = inst_33897);

return statearr_33976;
})();
if(inst_33898){
var statearr_33977_35239 = state_33911__$1;
(statearr_33977_35239[(1)] = (42));

} else {
var statearr_33978_35240 = state_33911__$1;
(statearr_33978_35240[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (16))){
var inst_33810 = (state_33911[(7)]);
var inst_33812 = cljs.core.chunked_seq_QMARK_(inst_33810);
var state_33911__$1 = state_33911;
if(inst_33812){
var statearr_33979_35241 = state_33911__$1;
(statearr_33979_35241[(1)] = (19));

} else {
var statearr_33980_35242 = state_33911__$1;
(statearr_33980_35242[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (38))){
var inst_33890 = (state_33911[(2)]);
var state_33911__$1 = state_33911;
var statearr_33981_35243 = state_33911__$1;
(statearr_33981_35243[(2)] = inst_33890);

(statearr_33981_35243[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (30))){
var state_33911__$1 = state_33911;
var statearr_33982_35244 = state_33911__$1;
(statearr_33982_35244[(2)] = null);

(statearr_33982_35244[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (10))){
var inst_33791 = (state_33911[(14)]);
var inst_33789 = (state_33911[(17)]);
var inst_33799 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33789,inst_33791);
var inst_33800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33799,(0),null);
var inst_33801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33799,(1),null);
var state_33911__$1 = (function (){var statearr_33983 = state_33911;
(statearr_33983[(26)] = inst_33800);

return statearr_33983;
})();
if(cljs.core.truth_(inst_33801)){
var statearr_33984_35245 = state_33911__$1;
(statearr_33984_35245[(1)] = (13));

} else {
var statearr_33985_35246 = state_33911__$1;
(statearr_33985_35246[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (18))){
var inst_33836 = (state_33911[(2)]);
var state_33911__$1 = state_33911;
var statearr_33986_35247 = state_33911__$1;
(statearr_33986_35247[(2)] = inst_33836);

(statearr_33986_35247[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (42))){
var state_33911__$1 = state_33911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33911__$1,(45),dchan);
} else {
if((state_val_33912 === (37))){
var inst_33779 = (state_33911[(9)]);
var inst_33870 = (state_33911[(25)]);
var inst_33879 = (state_33911[(23)]);
var inst_33879__$1 = cljs.core.first(inst_33870);
var inst_33880 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33879__$1,inst_33779,done);
var state_33911__$1 = (function (){var statearr_33987 = state_33911;
(statearr_33987[(23)] = inst_33879__$1);

return statearr_33987;
})();
if(cljs.core.truth_(inst_33880)){
var statearr_33988_35248 = state_33911__$1;
(statearr_33988_35248[(1)] = (39));

} else {
var statearr_33989_35249 = state_33911__$1;
(statearr_33989_35249[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (8))){
var inst_33791 = (state_33911[(14)]);
var inst_33790 = (state_33911[(15)]);
var inst_33793 = (inst_33791 < inst_33790);
var inst_33794 = inst_33793;
var state_33911__$1 = state_33911;
if(cljs.core.truth_(inst_33794)){
var statearr_33990_35250 = state_33911__$1;
(statearr_33990_35250[(1)] = (10));

} else {
var statearr_33991_35251 = state_33911__$1;
(statearr_33991_35251[(1)] = (11));

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
});})(c__33318__auto___35152,cs,m,dchan,dctr,done))
;
return ((function (switch__33139__auto__,c__33318__auto___35152,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33140__auto__ = null;
var cljs$core$async$mult_$_state_machine__33140__auto____0 = (function (){
var statearr_33992 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33992[(0)] = cljs$core$async$mult_$_state_machine__33140__auto__);

(statearr_33992[(1)] = (1));

return statearr_33992;
});
var cljs$core$async$mult_$_state_machine__33140__auto____1 = (function (state_33911){
while(true){
var ret_value__33141__auto__ = (function (){try{while(true){
var result__33142__auto__ = switch__33139__auto__(state_33911);
if(cljs.core.keyword_identical_QMARK_(result__33142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33142__auto__;
}
break;
}
}catch (e33993){if((e33993 instanceof Object)){
var ex__33143__auto__ = e33993;
var statearr_33994_35253 = state_33911;
(statearr_33994_35253[(5)] = ex__33143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33993;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35254 = state_33911;
state_33911 = G__35254;
continue;
} else {
return ret_value__33141__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33140__auto__ = function(state_33911){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33140__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33140__auto____1.call(this,state_33911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33140__auto____0;
cljs$core$async$mult_$_state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33140__auto____1;
return cljs$core$async$mult_$_state_machine__33140__auto__;
})()
;})(switch__33139__auto__,c__33318__auto___35152,cs,m,dchan,dctr,done))
})();
var state__33320__auto__ = (function (){var statearr_33995 = (f__33319__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33319__auto__.cljs$core$IFn$_invoke$arity$0() : f__33319__auto__.call(null));
(statearr_33995[(6)] = c__33318__auto___35152);

return statearr_33995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33320__auto__);
});})(c__33318__auto___35152,cs,m,dchan,dctr,done))
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
var G__33997 = arguments.length;
switch (G__33997) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35267 = arguments.length;
var i__4731__auto___35268 = (0);
while(true){
if((i__4731__auto___35268 < len__4730__auto___35267)){
args__4736__auto__.push((arguments[i__4731__auto___35268]));

var G__35269 = (i__4731__auto___35268 + (1));
i__4731__auto___35268 = G__35269;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34002){
var map__34003 = p__34002;
var map__34003__$1 = (((((!((map__34003 == null))))?(((((map__34003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34003):map__34003);
var opts = map__34003__$1;
var statearr_34005_35270 = state;
(statearr_34005_35270[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__34003,map__34003__$1,opts){
return (function (val){
var statearr_34006_35271 = state;
(statearr_34006_35271[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__34003,map__34003__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_34007_35272 = state;
(statearr_34007_35272[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33998){
var G__33999 = cljs.core.first(seq33998);
var seq33998__$1 = cljs.core.next(seq33998);
var G__34000 = cljs.core.first(seq33998__$1);
var seq33998__$2 = cljs.core.next(seq33998__$1);
var G__34001 = cljs.core.first(seq33998__$2);
var seq33998__$3 = cljs.core.next(seq33998__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33999,G__34000,G__34001,seq33998__$3);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34008 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34008 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34009){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34009 = meta34009;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34010,meta34009__$1){
var self__ = this;
var _34010__$1 = this;
return (new cljs.core.async.t_cljs$core$async34008(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34009__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34008.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34010){
var self__ = this;
var _34010__$1 = this;
return self__.meta34009;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34008.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34008.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34008.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34008.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34008.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34008.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34008.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34008.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34008.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34009","meta34009",-6026221,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34008.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34008.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34008";

cljs.core.async.t_cljs$core$async34008.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34008");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34008.
 */
cljs.core.async.__GT_t_cljs$core$async34008 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34008(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34009){
return (new cljs.core.async.t_cljs$core$async34008(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34009));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34008(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33318__auto___35280 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33318__auto___35280,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33319__auto__ = (function (){var switch__33139__auto__ = ((function (c__33318__auto___35280,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34112){
var state_val_34113 = (state_34112[(1)]);
if((state_val_34113 === (7))){
var inst_34027 = (state_34112[(2)]);
var state_34112__$1 = state_34112;
var statearr_34114_35281 = state_34112__$1;
(statearr_34114_35281[(2)] = inst_34027);

(statearr_34114_35281[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (20))){
var inst_34039 = (state_34112[(7)]);
var state_34112__$1 = state_34112;
var statearr_34115_35282 = state_34112__$1;
(statearr_34115_35282[(2)] = inst_34039);

(statearr_34115_35282[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (27))){
var state_34112__$1 = state_34112;
var statearr_34116_35283 = state_34112__$1;
(statearr_34116_35283[(2)] = null);

(statearr_34116_35283[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (1))){
var inst_34014 = (state_34112[(8)]);
var inst_34014__$1 = calc_state();
var inst_34016 = (inst_34014__$1 == null);
var inst_34017 = cljs.core.not(inst_34016);
var state_34112__$1 = (function (){var statearr_34117 = state_34112;
(statearr_34117[(8)] = inst_34014__$1);

return statearr_34117;
})();
if(inst_34017){
var statearr_34118_35284 = state_34112__$1;
(statearr_34118_35284[(1)] = (2));

} else {
var statearr_34119_35285 = state_34112__$1;
(statearr_34119_35285[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (24))){
var inst_34063 = (state_34112[(9)]);
var inst_34086 = (state_34112[(10)]);
var inst_34072 = (state_34112[(11)]);
var inst_34086__$1 = (inst_34063.cljs$core$IFn$_invoke$arity$1 ? inst_34063.cljs$core$IFn$_invoke$arity$1(inst_34072) : inst_34063.call(null,inst_34072));
var state_34112__$1 = (function (){var statearr_34120 = state_34112;
(statearr_34120[(10)] = inst_34086__$1);

return statearr_34120;
})();
if(cljs.core.truth_(inst_34086__$1)){
var statearr_34121_35290 = state_34112__$1;
(statearr_34121_35290[(1)] = (29));

} else {
var statearr_34122_35291 = state_34112__$1;
(statearr_34122_35291[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (4))){
var inst_34030 = (state_34112[(2)]);
var state_34112__$1 = state_34112;
if(cljs.core.truth_(inst_34030)){
var statearr_34123_35295 = state_34112__$1;
(statearr_34123_35295[(1)] = (8));

} else {
var statearr_34124_35296 = state_34112__$1;
(statearr_34124_35296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (15))){
var inst_34057 = (state_34112[(2)]);
var state_34112__$1 = state_34112;
if(cljs.core.truth_(inst_34057)){
var statearr_34125_35297 = state_34112__$1;
(statearr_34125_35297[(1)] = (19));

} else {
var statearr_34126_35298 = state_34112__$1;
(statearr_34126_35298[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (21))){
var inst_34062 = (state_34112[(12)]);
var inst_34062__$1 = (state_34112[(2)]);
var inst_34063 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34062__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34064 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34062__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34065 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34062__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34112__$1 = (function (){var statearr_34127 = state_34112;
(statearr_34127[(13)] = inst_34064);

(statearr_34127[(9)] = inst_34063);

(statearr_34127[(12)] = inst_34062__$1);

return statearr_34127;
})();
return cljs.core.async.ioc_alts_BANG_(state_34112__$1,(22),inst_34065);
} else {
if((state_val_34113 === (31))){
var inst_34094 = (state_34112[(2)]);
var state_34112__$1 = state_34112;
if(cljs.core.truth_(inst_34094)){
var statearr_34128_35305 = state_34112__$1;
(statearr_34128_35305[(1)] = (32));

} else {
var statearr_34129_35306 = state_34112__$1;
(statearr_34129_35306[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (32))){
var inst_34071 = (state_34112[(14)]);
var state_34112__$1 = state_34112;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34112__$1,(35),out,inst_34071);
} else {
if((state_val_34113 === (33))){
var inst_34062 = (state_34112[(12)]);
var inst_34039 = inst_34062;
var state_34112__$1 = (function (){var statearr_34130 = state_34112;
(statearr_34130[(7)] = inst_34039);

return statearr_34130;
})();
var statearr_34131_35310 = state_34112__$1;
(statearr_34131_35310[(2)] = null);

(statearr_34131_35310[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (13))){
var inst_34039 = (state_34112[(7)]);
var inst_34046 = inst_34039.cljs$lang$protocol_mask$partition0$;
var inst_34047 = (inst_34046 & (64));
var inst_34048 = inst_34039.cljs$core$ISeq$;
var inst_34049 = (cljs.core.PROTOCOL_SENTINEL === inst_34048);
var inst_34050 = ((inst_34047) || (inst_34049));
var state_34112__$1 = state_34112;
if(cljs.core.truth_(inst_34050)){
var statearr_34132_35315 = state_34112__$1;
(statearr_34132_35315[(1)] = (16));

} else {
var statearr_34133_35316 = state_34112__$1;
(statearr_34133_35316[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (22))){
var inst_34071 = (state_34112[(14)]);
var inst_34072 = (state_34112[(11)]);
var inst_34070 = (state_34112[(2)]);
var inst_34071__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34070,(0),null);
var inst_34072__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34070,(1),null);
var inst_34073 = (inst_34071__$1 == null);
var inst_34074 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34072__$1,change);
var inst_34075 = ((inst_34073) || (inst_34074));
var state_34112__$1 = (function (){var statearr_34134 = state_34112;
(statearr_34134[(14)] = inst_34071__$1);

(statearr_34134[(11)] = inst_34072__$1);

return statearr_34134;
})();
if(cljs.core.truth_(inst_34075)){
var statearr_34135_35317 = state_34112__$1;
(statearr_34135_35317[(1)] = (23));

} else {
var statearr_34136_35318 = state_34112__$1;
(statearr_34136_35318[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (36))){
var inst_34062 = (state_34112[(12)]);
var inst_34039 = inst_34062;
var state_34112__$1 = (function (){var statearr_34137 = state_34112;
(statearr_34137[(7)] = inst_34039);

return statearr_34137;
})();
var statearr_34138_35319 = state_34112__$1;
(statearr_34138_35319[(2)] = null);

(statearr_34138_35319[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (29))){
var inst_34086 = (state_34112[(10)]);
var state_34112__$1 = state_34112;
var statearr_34139_35320 = state_34112__$1;
(statearr_34139_35320[(2)] = inst_34086);

(statearr_34139_35320[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (6))){
var state_34112__$1 = state_34112;
var statearr_34140_35321 = state_34112__$1;
(statearr_34140_35321[(2)] = false);

(statearr_34140_35321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (28))){
var inst_34082 = (state_34112[(2)]);
var inst_34083 = calc_state();
var inst_34039 = inst_34083;
var state_34112__$1 = (function (){var statearr_34141 = state_34112;
(statearr_34141[(7)] = inst_34039);

(statearr_34141[(15)] = inst_34082);

return statearr_34141;
})();
var statearr_34142_35324 = state_34112__$1;
(statearr_34142_35324[(2)] = null);

(statearr_34142_35324[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (25))){
var inst_34108 = (state_34112[(2)]);
var state_34112__$1 = state_34112;
var statearr_34143_35325 = state_34112__$1;
(statearr_34143_35325[(2)] = inst_34108);

(statearr_34143_35325[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (34))){
var inst_34106 = (state_34112[(2)]);
var state_34112__$1 = state_34112;
var statearr_34144_35327 = state_34112__$1;
(statearr_34144_35327[(2)] = inst_34106);

(statearr_34144_35327[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (17))){
var state_34112__$1 = state_34112;
var statearr_34145_35329 = state_34112__$1;
(statearr_34145_35329[(2)] = false);

(statearr_34145_35329[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (3))){
var state_34112__$1 = state_34112;
var statearr_34146_35330 = state_34112__$1;
(statearr_34146_35330[(2)] = false);

(statearr_34146_35330[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (12))){
var inst_34110 = (state_34112[(2)]);
var state_34112__$1 = state_34112;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34112__$1,inst_34110);
} else {
if((state_val_34113 === (2))){
var inst_34014 = (state_34112[(8)]);
var inst_34019 = inst_34014.cljs$lang$protocol_mask$partition0$;
var inst_34020 = (inst_34019 & (64));
var inst_34021 = inst_34014.cljs$core$ISeq$;
var inst_34022 = (cljs.core.PROTOCOL_SENTINEL === inst_34021);
var inst_34023 = ((inst_34020) || (inst_34022));
var state_34112__$1 = state_34112;
if(cljs.core.truth_(inst_34023)){
var statearr_34147_35333 = state_34112__$1;
(statearr_34147_35333[(1)] = (5));

} else {
var statearr_34148_35334 = state_34112__$1;
(statearr_34148_35334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (23))){
var inst_34071 = (state_34112[(14)]);
var inst_34077 = (inst_34071 == null);
var state_34112__$1 = state_34112;
if(cljs.core.truth_(inst_34077)){
var statearr_34149_35338 = state_34112__$1;
(statearr_34149_35338[(1)] = (26));

} else {
var statearr_34150_35339 = state_34112__$1;
(statearr_34150_35339[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (35))){
var inst_34097 = (state_34112[(2)]);
var state_34112__$1 = state_34112;
if(cljs.core.truth_(inst_34097)){
var statearr_34151_35340 = state_34112__$1;
(statearr_34151_35340[(1)] = (36));

} else {
var statearr_34152_35341 = state_34112__$1;
(statearr_34152_35341[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (19))){
var inst_34039 = (state_34112[(7)]);
var inst_34059 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34039);
var state_34112__$1 = state_34112;
var statearr_34153_35343 = state_34112__$1;
(statearr_34153_35343[(2)] = inst_34059);

(statearr_34153_35343[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (11))){
var inst_34039 = (state_34112[(7)]);
var inst_34043 = (inst_34039 == null);
var inst_34044 = cljs.core.not(inst_34043);
var state_34112__$1 = state_34112;
if(inst_34044){
var statearr_34154_35344 = state_34112__$1;
(statearr_34154_35344[(1)] = (13));

} else {
var statearr_34155_35345 = state_34112__$1;
(statearr_34155_35345[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (9))){
var inst_34014 = (state_34112[(8)]);
var state_34112__$1 = state_34112;
var statearr_34156_35348 = state_34112__$1;
(statearr_34156_35348[(2)] = inst_34014);

(statearr_34156_35348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (5))){
var state_34112__$1 = state_34112;
var statearr_34157_35349 = state_34112__$1;
(statearr_34157_35349[(2)] = true);

(statearr_34157_35349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (14))){
var state_34112__$1 = state_34112;
var statearr_34158_35350 = state_34112__$1;
(statearr_34158_35350[(2)] = false);

(statearr_34158_35350[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (26))){
var inst_34072 = (state_34112[(11)]);
var inst_34079 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34072);
var state_34112__$1 = state_34112;
var statearr_34159_35351 = state_34112__$1;
(statearr_34159_35351[(2)] = inst_34079);

(statearr_34159_35351[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (16))){
var state_34112__$1 = state_34112;
var statearr_34160_35352 = state_34112__$1;
(statearr_34160_35352[(2)] = true);

(statearr_34160_35352[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (38))){
var inst_34102 = (state_34112[(2)]);
var state_34112__$1 = state_34112;
var statearr_34161_35353 = state_34112__$1;
(statearr_34161_35353[(2)] = inst_34102);

(statearr_34161_35353[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (30))){
var inst_34064 = (state_34112[(13)]);
var inst_34063 = (state_34112[(9)]);
var inst_34072 = (state_34112[(11)]);
var inst_34089 = cljs.core.empty_QMARK_(inst_34063);
var inst_34090 = (inst_34064.cljs$core$IFn$_invoke$arity$1 ? inst_34064.cljs$core$IFn$_invoke$arity$1(inst_34072) : inst_34064.call(null,inst_34072));
var inst_34091 = cljs.core.not(inst_34090);
var inst_34092 = ((inst_34089) && (inst_34091));
var state_34112__$1 = state_34112;
var statearr_34162_35354 = state_34112__$1;
(statearr_34162_35354[(2)] = inst_34092);

(statearr_34162_35354[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (10))){
var inst_34014 = (state_34112[(8)]);
var inst_34035 = (state_34112[(2)]);
var inst_34036 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34035,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34037 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34035,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34035,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34039 = inst_34014;
var state_34112__$1 = (function (){var statearr_34163 = state_34112;
(statearr_34163[(7)] = inst_34039);

(statearr_34163[(16)] = inst_34036);

(statearr_34163[(17)] = inst_34037);

(statearr_34163[(18)] = inst_34038);

return statearr_34163;
})();
var statearr_34164_35359 = state_34112__$1;
(statearr_34164_35359[(2)] = null);

(statearr_34164_35359[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (18))){
var inst_34054 = (state_34112[(2)]);
var state_34112__$1 = state_34112;
var statearr_34165_35360 = state_34112__$1;
(statearr_34165_35360[(2)] = inst_34054);

(statearr_34165_35360[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (37))){
var state_34112__$1 = state_34112;
var statearr_34166_35361 = state_34112__$1;
(statearr_34166_35361[(2)] = null);

(statearr_34166_35361[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34113 === (8))){
var inst_34014 = (state_34112[(8)]);
var inst_34032 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34014);
var state_34112__$1 = state_34112;
var statearr_34167_35362 = state_34112__$1;
(statearr_34167_35362[(2)] = inst_34032);

(statearr_34167_35362[(1)] = (10));


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
});})(c__33318__auto___35280,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33139__auto__,c__33318__auto___35280,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33140__auto__ = null;
var cljs$core$async$mix_$_state_machine__33140__auto____0 = (function (){
var statearr_34168 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34168[(0)] = cljs$core$async$mix_$_state_machine__33140__auto__);

(statearr_34168[(1)] = (1));

return statearr_34168;
});
var cljs$core$async$mix_$_state_machine__33140__auto____1 = (function (state_34112){
while(true){
var ret_value__33141__auto__ = (function (){try{while(true){
var result__33142__auto__ = switch__33139__auto__(state_34112);
if(cljs.core.keyword_identical_QMARK_(result__33142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33142__auto__;
}
break;
}
}catch (e34169){if((e34169 instanceof Object)){
var ex__33143__auto__ = e34169;
var statearr_34170_35363 = state_34112;
(statearr_34170_35363[(5)] = ex__33143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34169;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35368 = state_34112;
state_34112 = G__35368;
continue;
} else {
return ret_value__33141__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33140__auto__ = function(state_34112){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33140__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33140__auto____1.call(this,state_34112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33140__auto____0;
cljs$core$async$mix_$_state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33140__auto____1;
return cljs$core$async$mix_$_state_machine__33140__auto__;
})()
;})(switch__33139__auto__,c__33318__auto___35280,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33320__auto__ = (function (){var statearr_34171 = (f__33319__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33319__auto__.cljs$core$IFn$_invoke$arity$0() : f__33319__auto__.call(null));
(statearr_34171[(6)] = c__33318__auto___35280);

return statearr_34171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33320__auto__);
});})(c__33318__auto___35280,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34173 = arguments.length;
switch (G__34173) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var G__34176 = arguments.length;
switch (G__34176) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__34174_SHARP_){
if(cljs.core.truth_((p1__34174_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34174_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34174_SHARP_.call(null,topic)))){
return p1__34174_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34174_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34177 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34177 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34178){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34178 = meta34178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34179,meta34178__$1){
var self__ = this;
var _34179__$1 = this;
return (new cljs.core.async.t_cljs$core$async34177(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34178__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34177.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34179){
var self__ = this;
var _34179__$1 = this;
return self__.meta34178;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34177.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34177.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34177.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34177.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34177.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34177.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34177.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34177.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34178","meta34178",-714569336,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34177.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34177";

cljs.core.async.t_cljs$core$async34177.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34177");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34177.
 */
cljs.core.async.__GT_t_cljs$core$async34177 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34177(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34178){
return (new cljs.core.async.t_cljs$core$async34177(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34178));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34177(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33318__auto___35385 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33318__auto___35385,mults,ensure_mult,p){
return (function (){
var f__33319__auto__ = (function (){var switch__33139__auto__ = ((function (c__33318__auto___35385,mults,ensure_mult,p){
return (function (state_34251){
var state_val_34252 = (state_34251[(1)]);
if((state_val_34252 === (7))){
var inst_34247 = (state_34251[(2)]);
var state_34251__$1 = state_34251;
var statearr_34253_35386 = state_34251__$1;
(statearr_34253_35386[(2)] = inst_34247);

(statearr_34253_35386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34252 === (20))){
var state_34251__$1 = state_34251;
var statearr_34254_35387 = state_34251__$1;
(statearr_34254_35387[(2)] = null);

(statearr_34254_35387[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34252 === (1))){
var state_34251__$1 = state_34251;
var statearr_34255_35388 = state_34251__$1;
(statearr_34255_35388[(2)] = null);

(statearr_34255_35388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34252 === (24))){
var inst_34230 = (state_34251[(7)]);
var inst_34239 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34230);
var state_34251__$1 = state_34251;
var statearr_34256_35389 = state_34251__$1;
(statearr_34256_35389[(2)] = inst_34239);

(statearr_34256_35389[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34252 === (4))){
var inst_34182 = (state_34251[(8)]);
var inst_34182__$1 = (state_34251[(2)]);
var inst_34183 = (inst_34182__$1 == null);
var state_34251__$1 = (function (){var statearr_34257 = state_34251;
(statearr_34257[(8)] = inst_34182__$1);

return statearr_34257;
})();
if(cljs.core.truth_(inst_34183)){
var statearr_34258_35390 = state_34251__$1;
(statearr_34258_35390[(1)] = (5));

} else {
var statearr_34259_35391 = state_34251__$1;
(statearr_34259_35391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34252 === (15))){
var inst_34224 = (state_34251[(2)]);
var state_34251__$1 = state_34251;
var statearr_34260_35392 = state_34251__$1;
(statearr_34260_35392[(2)] = inst_34224);

(statearr_34260_35392[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34252 === (21))){
var inst_34244 = (state_34251[(2)]);
var state_34251__$1 = (function (){var statearr_34261 = state_34251;
(statearr_34261[(9)] = inst_34244);

return statearr_34261;
})();
var statearr_34262_35394 = state_34251__$1;
(statearr_34262_35394[(2)] = null);

(statearr_34262_35394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34252 === (13))){
var inst_34206 = (state_34251[(10)]);
var inst_34208 = cljs.core.chunked_seq_QMARK_(inst_34206);
var state_34251__$1 = state_34251;
if(inst_34208){
var statearr_34263_35395 = state_34251__$1;
(statearr_34263_35395[(1)] = (16));

} else {
var statearr_34264_35396 = state_34251__$1;
(statearr_34264_35396[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34252 === (22))){
var inst_34236 = (state_34251[(2)]);
var state_34251__$1 = state_34251;
if(cljs.core.truth_(inst_34236)){
var statearr_34265_35398 = state_34251__$1;
(statearr_34265_35398[(1)] = (23));

} else {
var statearr_34266_35399 = state_34251__$1;
(statearr_34266_35399[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34252 === (6))){
var inst_34232 = (state_34251[(11)]);
var inst_34182 = (state_34251[(8)]);
var inst_34230 = (state_34251[(7)]);
var inst_34230__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34182) : topic_fn.call(null,inst_34182));
var inst_34231 = cljs.core.deref(mults);
var inst_34232__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34231,inst_34230__$1);
var state_34251__$1 = (function (){var statearr_34267 = state_34251;
(statearr_34267[(11)] = inst_34232__$1);

(statearr_34267[(7)] = inst_34230__$1);

return statearr_34267;
})();
if(cljs.core.truth_(inst_34232__$1)){
var statearr_34268_35401 = state_34251__$1;
(statearr_34268_35401[(1)] = (19));

} else {
var statearr_34269_35402 = state_34251__$1;
(statearr_34269_35402[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34252 === (25))){
var inst_34241 = (state_34251[(2)]);
var state_34251__$1 = state_34251;
var statearr_34270_35403 = state_34251__$1;
(statearr_34270_35403[(2)] = inst_34241);

(statearr_34270_35403[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34252 === (17))){
var inst_34206 = (state_34251[(10)]);
var inst_34215 = cljs.core.first(inst_34206);
var inst_34216 = cljs.core.async.muxch_STAR_(inst_34215);
var inst_34217 = cljs.core.async.close_BANG_(inst_34216);
var inst_34218 = cljs.core.next(inst_34206);
var inst_34192 = inst_34218;
var inst_34193 = null;
var inst_34194 = (0);
var inst_34195 = (0);
var state_34251__$1 = (function (){var statearr_34271 = state_34251;
(statearr_34271[(12)] = inst_34194);

(statearr_34271[(13)] = inst_34193);

(statearr_34271[(14)] = inst_34217);

(statearr_34271[(15)] = inst_34195);

(statearr_34271[(16)] = inst_34192);

return statearr_34271;
})();
var statearr_34272_35409 = state_34251__$1;
(statearr_34272_35409[(2)] = null);

(statearr_34272_35409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34252 === (3))){
var inst_34249 = (state_34251[(2)]);
var state_34251__$1 = state_34251;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34251__$1,inst_34249);
} else {
if((state_val_34252 === (12))){
var inst_34226 = (state_34251[(2)]);
var state_34251__$1 = state_34251;
var statearr_34273_35411 = state_34251__$1;
(statearr_34273_35411[(2)] = inst_34226);

(statearr_34273_35411[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34252 === (2))){
var state_34251__$1 = state_34251;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34251__$1,(4),ch);
} else {
if((state_val_34252 === (23))){
var state_34251__$1 = state_34251;
var statearr_34274_35412 = state_34251__$1;
(statearr_34274_35412[(2)] = null);

(statearr_34274_35412[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34252 === (19))){
var inst_34232 = (state_34251[(11)]);
var inst_34182 = (state_34251[(8)]);
var inst_34234 = cljs.core.async.muxch_STAR_(inst_34232);
var state_34251__$1 = state_34251;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34251__$1,(22),inst_34234,inst_34182);
} else {
if((state_val_34252 === (11))){
var inst_34206 = (state_34251[(10)]);
var inst_34192 = (state_34251[(16)]);
var inst_34206__$1 = cljs.core.seq(inst_34192);
var state_34251__$1 = (function (){var statearr_34275 = state_34251;
(statearr_34275[(10)] = inst_34206__$1);

return statearr_34275;
})();
if(inst_34206__$1){
var statearr_34276_35413 = state_34251__$1;
(statearr_34276_35413[(1)] = (13));

} else {
var statearr_34277_35415 = state_34251__$1;
(statearr_34277_35415[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34252 === (9))){
var inst_34228 = (state_34251[(2)]);
var state_34251__$1 = state_34251;
var statearr_34278_35416 = state_34251__$1;
(statearr_34278_35416[(2)] = inst_34228);

(statearr_34278_35416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34252 === (5))){
var inst_34189 = cljs.core.deref(mults);
var inst_34190 = cljs.core.vals(inst_34189);
var inst_34191 = cljs.core.seq(inst_34190);
var inst_34192 = inst_34191;
var inst_34193 = null;
var inst_34194 = (0);
var inst_34195 = (0);
var state_34251__$1 = (function (){var statearr_34279 = state_34251;
(statearr_34279[(12)] = inst_34194);

(statearr_34279[(13)] = inst_34193);

(statearr_34279[(15)] = inst_34195);

(statearr_34279[(16)] = inst_34192);

return statearr_34279;
})();
var statearr_34280_35418 = state_34251__$1;
(statearr_34280_35418[(2)] = null);

(statearr_34280_35418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34252 === (14))){
var state_34251__$1 = state_34251;
var statearr_34284_35422 = state_34251__$1;
(statearr_34284_35422[(2)] = null);

(statearr_34284_35422[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34252 === (16))){
var inst_34206 = (state_34251[(10)]);
var inst_34210 = cljs.core.chunk_first(inst_34206);
var inst_34211 = cljs.core.chunk_rest(inst_34206);
var inst_34212 = cljs.core.count(inst_34210);
var inst_34192 = inst_34211;
var inst_34193 = inst_34210;
var inst_34194 = inst_34212;
var inst_34195 = (0);
var state_34251__$1 = (function (){var statearr_34285 = state_34251;
(statearr_34285[(12)] = inst_34194);

(statearr_34285[(13)] = inst_34193);

(statearr_34285[(15)] = inst_34195);

(statearr_34285[(16)] = inst_34192);

return statearr_34285;
})();
var statearr_34286_35423 = state_34251__$1;
(statearr_34286_35423[(2)] = null);

(statearr_34286_35423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34252 === (10))){
var inst_34194 = (state_34251[(12)]);
var inst_34193 = (state_34251[(13)]);
var inst_34195 = (state_34251[(15)]);
var inst_34192 = (state_34251[(16)]);
var inst_34200 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34193,inst_34195);
var inst_34201 = cljs.core.async.muxch_STAR_(inst_34200);
var inst_34202 = cljs.core.async.close_BANG_(inst_34201);
var inst_34203 = (inst_34195 + (1));
var tmp34281 = inst_34194;
var tmp34282 = inst_34193;
var tmp34283 = inst_34192;
var inst_34192__$1 = tmp34283;
var inst_34193__$1 = tmp34282;
var inst_34194__$1 = tmp34281;
var inst_34195__$1 = inst_34203;
var state_34251__$1 = (function (){var statearr_34287 = state_34251;
(statearr_34287[(12)] = inst_34194__$1);

(statearr_34287[(17)] = inst_34202);

(statearr_34287[(13)] = inst_34193__$1);

(statearr_34287[(15)] = inst_34195__$1);

(statearr_34287[(16)] = inst_34192__$1);

return statearr_34287;
})();
var statearr_34288_35424 = state_34251__$1;
(statearr_34288_35424[(2)] = null);

(statearr_34288_35424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34252 === (18))){
var inst_34221 = (state_34251[(2)]);
var state_34251__$1 = state_34251;
var statearr_34289_35425 = state_34251__$1;
(statearr_34289_35425[(2)] = inst_34221);

(statearr_34289_35425[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34252 === (8))){
var inst_34194 = (state_34251[(12)]);
var inst_34195 = (state_34251[(15)]);
var inst_34197 = (inst_34195 < inst_34194);
var inst_34198 = inst_34197;
var state_34251__$1 = state_34251;
if(cljs.core.truth_(inst_34198)){
var statearr_34290_35426 = state_34251__$1;
(statearr_34290_35426[(1)] = (10));

} else {
var statearr_34291_35427 = state_34251__$1;
(statearr_34291_35427[(1)] = (11));

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
});})(c__33318__auto___35385,mults,ensure_mult,p))
;
return ((function (switch__33139__auto__,c__33318__auto___35385,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33140__auto__ = null;
var cljs$core$async$state_machine__33140__auto____0 = (function (){
var statearr_34292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34292[(0)] = cljs$core$async$state_machine__33140__auto__);

(statearr_34292[(1)] = (1));

return statearr_34292;
});
var cljs$core$async$state_machine__33140__auto____1 = (function (state_34251){
while(true){
var ret_value__33141__auto__ = (function (){try{while(true){
var result__33142__auto__ = switch__33139__auto__(state_34251);
if(cljs.core.keyword_identical_QMARK_(result__33142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33142__auto__;
}
break;
}
}catch (e34293){if((e34293 instanceof Object)){
var ex__33143__auto__ = e34293;
var statearr_34294_35429 = state_34251;
(statearr_34294_35429[(5)] = ex__33143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34293;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35430 = state_34251;
state_34251 = G__35430;
continue;
} else {
return ret_value__33141__auto__;
}
break;
}
});
cljs$core$async$state_machine__33140__auto__ = function(state_34251){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33140__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33140__auto____1.call(this,state_34251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33140__auto____0;
cljs$core$async$state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33140__auto____1;
return cljs$core$async$state_machine__33140__auto__;
})()
;})(switch__33139__auto__,c__33318__auto___35385,mults,ensure_mult,p))
})();
var state__33320__auto__ = (function (){var statearr_34295 = (f__33319__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33319__auto__.cljs$core$IFn$_invoke$arity$0() : f__33319__auto__.call(null));
(statearr_34295[(6)] = c__33318__auto___35385);

return statearr_34295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33320__auto__);
});})(c__33318__auto___35385,mults,ensure_mult,p))
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
var G__34297 = arguments.length;
switch (G__34297) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34299 = arguments.length;
switch (G__34299) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var G__34301 = arguments.length;
switch (G__34301) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__33318__auto___35441 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33318__auto___35441,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33319__auto__ = (function (){var switch__33139__auto__ = ((function (c__33318__auto___35441,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34340){
var state_val_34341 = (state_34340[(1)]);
if((state_val_34341 === (7))){
var state_34340__$1 = state_34340;
var statearr_34342_35442 = state_34340__$1;
(statearr_34342_35442[(2)] = null);

(statearr_34342_35442[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (1))){
var state_34340__$1 = state_34340;
var statearr_34343_35443 = state_34340__$1;
(statearr_34343_35443[(2)] = null);

(statearr_34343_35443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (4))){
var inst_34304 = (state_34340[(7)]);
var inst_34306 = (inst_34304 < cnt);
var state_34340__$1 = state_34340;
if(cljs.core.truth_(inst_34306)){
var statearr_34344_35445 = state_34340__$1;
(statearr_34344_35445[(1)] = (6));

} else {
var statearr_34345_35446 = state_34340__$1;
(statearr_34345_35446[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (15))){
var inst_34336 = (state_34340[(2)]);
var state_34340__$1 = state_34340;
var statearr_34346_35447 = state_34340__$1;
(statearr_34346_35447[(2)] = inst_34336);

(statearr_34346_35447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (13))){
var inst_34329 = cljs.core.async.close_BANG_(out);
var state_34340__$1 = state_34340;
var statearr_34347_35448 = state_34340__$1;
(statearr_34347_35448[(2)] = inst_34329);

(statearr_34347_35448[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (6))){
var state_34340__$1 = state_34340;
var statearr_34348_35449 = state_34340__$1;
(statearr_34348_35449[(2)] = null);

(statearr_34348_35449[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (3))){
var inst_34338 = (state_34340[(2)]);
var state_34340__$1 = state_34340;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34340__$1,inst_34338);
} else {
if((state_val_34341 === (12))){
var inst_34326 = (state_34340[(8)]);
var inst_34326__$1 = (state_34340[(2)]);
var inst_34327 = cljs.core.some(cljs.core.nil_QMARK_,inst_34326__$1);
var state_34340__$1 = (function (){var statearr_34349 = state_34340;
(statearr_34349[(8)] = inst_34326__$1);

return statearr_34349;
})();
if(cljs.core.truth_(inst_34327)){
var statearr_34350_35451 = state_34340__$1;
(statearr_34350_35451[(1)] = (13));

} else {
var statearr_34351_35452 = state_34340__$1;
(statearr_34351_35452[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (2))){
var inst_34303 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34304 = (0);
var state_34340__$1 = (function (){var statearr_34352 = state_34340;
(statearr_34352[(9)] = inst_34303);

(statearr_34352[(7)] = inst_34304);

return statearr_34352;
})();
var statearr_34353_35453 = state_34340__$1;
(statearr_34353_35453[(2)] = null);

(statearr_34353_35453[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (11))){
var inst_34304 = (state_34340[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_34340,(10),Object,null,(9));
var inst_34313 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34304) : chs__$1.call(null,inst_34304));
var inst_34314 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34304) : done.call(null,inst_34304));
var inst_34315 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34313,inst_34314);
var state_34340__$1 = state_34340;
var statearr_34354_35454 = state_34340__$1;
(statearr_34354_35454[(2)] = inst_34315);


cljs.core.async.impl.ioc_helpers.process_exception(state_34340__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (9))){
var inst_34304 = (state_34340[(7)]);
var inst_34317 = (state_34340[(2)]);
var inst_34318 = (inst_34304 + (1));
var inst_34304__$1 = inst_34318;
var state_34340__$1 = (function (){var statearr_34355 = state_34340;
(statearr_34355[(10)] = inst_34317);

(statearr_34355[(7)] = inst_34304__$1);

return statearr_34355;
})();
var statearr_34356_35455 = state_34340__$1;
(statearr_34356_35455[(2)] = null);

(statearr_34356_35455[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (5))){
var inst_34324 = (state_34340[(2)]);
var state_34340__$1 = (function (){var statearr_34357 = state_34340;
(statearr_34357[(11)] = inst_34324);

return statearr_34357;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34340__$1,(12),dchan);
} else {
if((state_val_34341 === (14))){
var inst_34326 = (state_34340[(8)]);
var inst_34331 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34326);
var state_34340__$1 = state_34340;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34340__$1,(16),out,inst_34331);
} else {
if((state_val_34341 === (16))){
var inst_34333 = (state_34340[(2)]);
var state_34340__$1 = (function (){var statearr_34358 = state_34340;
(statearr_34358[(12)] = inst_34333);

return statearr_34358;
})();
var statearr_34359_35456 = state_34340__$1;
(statearr_34359_35456[(2)] = null);

(statearr_34359_35456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (10))){
var inst_34308 = (state_34340[(2)]);
var inst_34309 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34340__$1 = (function (){var statearr_34360 = state_34340;
(statearr_34360[(13)] = inst_34308);

return statearr_34360;
})();
var statearr_34361_35457 = state_34340__$1;
(statearr_34361_35457[(2)] = inst_34309);


cljs.core.async.impl.ioc_helpers.process_exception(state_34340__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34341 === (8))){
var inst_34322 = (state_34340[(2)]);
var state_34340__$1 = state_34340;
var statearr_34362_35459 = state_34340__$1;
(statearr_34362_35459[(2)] = inst_34322);

(statearr_34362_35459[(1)] = (5));


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
});})(c__33318__auto___35441,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33139__auto__,c__33318__auto___35441,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33140__auto__ = null;
var cljs$core$async$state_machine__33140__auto____0 = (function (){
var statearr_34363 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34363[(0)] = cljs$core$async$state_machine__33140__auto__);

(statearr_34363[(1)] = (1));

return statearr_34363;
});
var cljs$core$async$state_machine__33140__auto____1 = (function (state_34340){
while(true){
var ret_value__33141__auto__ = (function (){try{while(true){
var result__33142__auto__ = switch__33139__auto__(state_34340);
if(cljs.core.keyword_identical_QMARK_(result__33142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33142__auto__;
}
break;
}
}catch (e34364){if((e34364 instanceof Object)){
var ex__33143__auto__ = e34364;
var statearr_34365_35467 = state_34340;
(statearr_34365_35467[(5)] = ex__33143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34364;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35468 = state_34340;
state_34340 = G__35468;
continue;
} else {
return ret_value__33141__auto__;
}
break;
}
});
cljs$core$async$state_machine__33140__auto__ = function(state_34340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33140__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33140__auto____1.call(this,state_34340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33140__auto____0;
cljs$core$async$state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33140__auto____1;
return cljs$core$async$state_machine__33140__auto__;
})()
;})(switch__33139__auto__,c__33318__auto___35441,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33320__auto__ = (function (){var statearr_34366 = (f__33319__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33319__auto__.cljs$core$IFn$_invoke$arity$0() : f__33319__auto__.call(null));
(statearr_34366[(6)] = c__33318__auto___35441);

return statearr_34366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33320__auto__);
});})(c__33318__auto___35441,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__34369 = arguments.length;
switch (G__34369) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33318__auto___35472 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33318__auto___35472,out){
return (function (){
var f__33319__auto__ = (function (){var switch__33139__auto__ = ((function (c__33318__auto___35472,out){
return (function (state_34401){
var state_val_34402 = (state_34401[(1)]);
if((state_val_34402 === (7))){
var inst_34380 = (state_34401[(7)]);
var inst_34381 = (state_34401[(8)]);
var inst_34380__$1 = (state_34401[(2)]);
var inst_34381__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34380__$1,(0),null);
var inst_34382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34380__$1,(1),null);
var inst_34383 = (inst_34381__$1 == null);
var state_34401__$1 = (function (){var statearr_34403 = state_34401;
(statearr_34403[(7)] = inst_34380__$1);

(statearr_34403[(8)] = inst_34381__$1);

(statearr_34403[(9)] = inst_34382);

return statearr_34403;
})();
if(cljs.core.truth_(inst_34383)){
var statearr_34404_35473 = state_34401__$1;
(statearr_34404_35473[(1)] = (8));

} else {
var statearr_34405_35474 = state_34401__$1;
(statearr_34405_35474[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (1))){
var inst_34370 = cljs.core.vec(chs);
var inst_34371 = inst_34370;
var state_34401__$1 = (function (){var statearr_34406 = state_34401;
(statearr_34406[(10)] = inst_34371);

return statearr_34406;
})();
var statearr_34407_35475 = state_34401__$1;
(statearr_34407_35475[(2)] = null);

(statearr_34407_35475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (4))){
var inst_34371 = (state_34401[(10)]);
var state_34401__$1 = state_34401;
return cljs.core.async.ioc_alts_BANG_(state_34401__$1,(7),inst_34371);
} else {
if((state_val_34402 === (6))){
var inst_34397 = (state_34401[(2)]);
var state_34401__$1 = state_34401;
var statearr_34408_35478 = state_34401__$1;
(statearr_34408_35478[(2)] = inst_34397);

(statearr_34408_35478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (3))){
var inst_34399 = (state_34401[(2)]);
var state_34401__$1 = state_34401;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34401__$1,inst_34399);
} else {
if((state_val_34402 === (2))){
var inst_34371 = (state_34401[(10)]);
var inst_34373 = cljs.core.count(inst_34371);
var inst_34374 = (inst_34373 > (0));
var state_34401__$1 = state_34401;
if(cljs.core.truth_(inst_34374)){
var statearr_34410_35481 = state_34401__$1;
(statearr_34410_35481[(1)] = (4));

} else {
var statearr_34411_35482 = state_34401__$1;
(statearr_34411_35482[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (11))){
var inst_34371 = (state_34401[(10)]);
var inst_34390 = (state_34401[(2)]);
var tmp34409 = inst_34371;
var inst_34371__$1 = tmp34409;
var state_34401__$1 = (function (){var statearr_34412 = state_34401;
(statearr_34412[(11)] = inst_34390);

(statearr_34412[(10)] = inst_34371__$1);

return statearr_34412;
})();
var statearr_34413_35483 = state_34401__$1;
(statearr_34413_35483[(2)] = null);

(statearr_34413_35483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (9))){
var inst_34381 = (state_34401[(8)]);
var state_34401__$1 = state_34401;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34401__$1,(11),out,inst_34381);
} else {
if((state_val_34402 === (5))){
var inst_34395 = cljs.core.async.close_BANG_(out);
var state_34401__$1 = state_34401;
var statearr_34414_35484 = state_34401__$1;
(statearr_34414_35484[(2)] = inst_34395);

(statearr_34414_35484[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (10))){
var inst_34393 = (state_34401[(2)]);
var state_34401__$1 = state_34401;
var statearr_34415_35485 = state_34401__$1;
(statearr_34415_35485[(2)] = inst_34393);

(statearr_34415_35485[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34402 === (8))){
var inst_34380 = (state_34401[(7)]);
var inst_34381 = (state_34401[(8)]);
var inst_34371 = (state_34401[(10)]);
var inst_34382 = (state_34401[(9)]);
var inst_34385 = (function (){var cs = inst_34371;
var vec__34376 = inst_34380;
var v = inst_34381;
var c = inst_34382;
return ((function (cs,vec__34376,v,c,inst_34380,inst_34381,inst_34371,inst_34382,state_val_34402,c__33318__auto___35472,out){
return (function (p1__34367_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34367_SHARP_);
});
;})(cs,vec__34376,v,c,inst_34380,inst_34381,inst_34371,inst_34382,state_val_34402,c__33318__auto___35472,out))
})();
var inst_34386 = cljs.core.filterv(inst_34385,inst_34371);
var inst_34371__$1 = inst_34386;
var state_34401__$1 = (function (){var statearr_34416 = state_34401;
(statearr_34416[(10)] = inst_34371__$1);

return statearr_34416;
})();
var statearr_34417_35486 = state_34401__$1;
(statearr_34417_35486[(2)] = null);

(statearr_34417_35486[(1)] = (2));


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
});})(c__33318__auto___35472,out))
;
return ((function (switch__33139__auto__,c__33318__auto___35472,out){
return (function() {
var cljs$core$async$state_machine__33140__auto__ = null;
var cljs$core$async$state_machine__33140__auto____0 = (function (){
var statearr_34418 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34418[(0)] = cljs$core$async$state_machine__33140__auto__);

(statearr_34418[(1)] = (1));

return statearr_34418;
});
var cljs$core$async$state_machine__33140__auto____1 = (function (state_34401){
while(true){
var ret_value__33141__auto__ = (function (){try{while(true){
var result__33142__auto__ = switch__33139__auto__(state_34401);
if(cljs.core.keyword_identical_QMARK_(result__33142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33142__auto__;
}
break;
}
}catch (e34419){if((e34419 instanceof Object)){
var ex__33143__auto__ = e34419;
var statearr_34420_35488 = state_34401;
(statearr_34420_35488[(5)] = ex__33143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34419;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35489 = state_34401;
state_34401 = G__35489;
continue;
} else {
return ret_value__33141__auto__;
}
break;
}
});
cljs$core$async$state_machine__33140__auto__ = function(state_34401){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33140__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33140__auto____1.call(this,state_34401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33140__auto____0;
cljs$core$async$state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33140__auto____1;
return cljs$core$async$state_machine__33140__auto__;
})()
;})(switch__33139__auto__,c__33318__auto___35472,out))
})();
var state__33320__auto__ = (function (){var statearr_34421 = (f__33319__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33319__auto__.cljs$core$IFn$_invoke$arity$0() : f__33319__auto__.call(null));
(statearr_34421[(6)] = c__33318__auto___35472);

return statearr_34421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33320__auto__);
});})(c__33318__auto___35472,out))
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34423 = arguments.length;
switch (G__34423) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33318__auto___35493 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33318__auto___35493,out){
return (function (){
var f__33319__auto__ = (function (){var switch__33139__auto__ = ((function (c__33318__auto___35493,out){
return (function (state_34447){
var state_val_34448 = (state_34447[(1)]);
if((state_val_34448 === (7))){
var inst_34429 = (state_34447[(7)]);
var inst_34429__$1 = (state_34447[(2)]);
var inst_34430 = (inst_34429__$1 == null);
var inst_34431 = cljs.core.not(inst_34430);
var state_34447__$1 = (function (){var statearr_34449 = state_34447;
(statearr_34449[(7)] = inst_34429__$1);

return statearr_34449;
})();
if(inst_34431){
var statearr_34450_35497 = state_34447__$1;
(statearr_34450_35497[(1)] = (8));

} else {
var statearr_34451_35498 = state_34447__$1;
(statearr_34451_35498[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34448 === (1))){
var inst_34424 = (0);
var state_34447__$1 = (function (){var statearr_34452 = state_34447;
(statearr_34452[(8)] = inst_34424);

return statearr_34452;
})();
var statearr_34453_35503 = state_34447__$1;
(statearr_34453_35503[(2)] = null);

(statearr_34453_35503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34448 === (4))){
var state_34447__$1 = state_34447;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34447__$1,(7),ch);
} else {
if((state_val_34448 === (6))){
var inst_34442 = (state_34447[(2)]);
var state_34447__$1 = state_34447;
var statearr_34454_35507 = state_34447__$1;
(statearr_34454_35507[(2)] = inst_34442);

(statearr_34454_35507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34448 === (3))){
var inst_34444 = (state_34447[(2)]);
var inst_34445 = cljs.core.async.close_BANG_(out);
var state_34447__$1 = (function (){var statearr_34455 = state_34447;
(statearr_34455[(9)] = inst_34444);

return statearr_34455;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34447__$1,inst_34445);
} else {
if((state_val_34448 === (2))){
var inst_34424 = (state_34447[(8)]);
var inst_34426 = (inst_34424 < n);
var state_34447__$1 = state_34447;
if(cljs.core.truth_(inst_34426)){
var statearr_34456_35508 = state_34447__$1;
(statearr_34456_35508[(1)] = (4));

} else {
var statearr_34457_35509 = state_34447__$1;
(statearr_34457_35509[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34448 === (11))){
var inst_34424 = (state_34447[(8)]);
var inst_34434 = (state_34447[(2)]);
var inst_34435 = (inst_34424 + (1));
var inst_34424__$1 = inst_34435;
var state_34447__$1 = (function (){var statearr_34458 = state_34447;
(statearr_34458[(10)] = inst_34434);

(statearr_34458[(8)] = inst_34424__$1);

return statearr_34458;
})();
var statearr_34459_35513 = state_34447__$1;
(statearr_34459_35513[(2)] = null);

(statearr_34459_35513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34448 === (9))){
var state_34447__$1 = state_34447;
var statearr_34460_35517 = state_34447__$1;
(statearr_34460_35517[(2)] = null);

(statearr_34460_35517[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34448 === (5))){
var state_34447__$1 = state_34447;
var statearr_34461_35518 = state_34447__$1;
(statearr_34461_35518[(2)] = null);

(statearr_34461_35518[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34448 === (10))){
var inst_34439 = (state_34447[(2)]);
var state_34447__$1 = state_34447;
var statearr_34462_35519 = state_34447__$1;
(statearr_34462_35519[(2)] = inst_34439);

(statearr_34462_35519[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34448 === (8))){
var inst_34429 = (state_34447[(7)]);
var state_34447__$1 = state_34447;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34447__$1,(11),out,inst_34429);
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
});})(c__33318__auto___35493,out))
;
return ((function (switch__33139__auto__,c__33318__auto___35493,out){
return (function() {
var cljs$core$async$state_machine__33140__auto__ = null;
var cljs$core$async$state_machine__33140__auto____0 = (function (){
var statearr_34463 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34463[(0)] = cljs$core$async$state_machine__33140__auto__);

(statearr_34463[(1)] = (1));

return statearr_34463;
});
var cljs$core$async$state_machine__33140__auto____1 = (function (state_34447){
while(true){
var ret_value__33141__auto__ = (function (){try{while(true){
var result__33142__auto__ = switch__33139__auto__(state_34447);
if(cljs.core.keyword_identical_QMARK_(result__33142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33142__auto__;
}
break;
}
}catch (e34464){if((e34464 instanceof Object)){
var ex__33143__auto__ = e34464;
var statearr_34465_35523 = state_34447;
(statearr_34465_35523[(5)] = ex__33143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34464;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35524 = state_34447;
state_34447 = G__35524;
continue;
} else {
return ret_value__33141__auto__;
}
break;
}
});
cljs$core$async$state_machine__33140__auto__ = function(state_34447){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33140__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33140__auto____1.call(this,state_34447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33140__auto____0;
cljs$core$async$state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33140__auto____1;
return cljs$core$async$state_machine__33140__auto__;
})()
;})(switch__33139__auto__,c__33318__auto___35493,out))
})();
var state__33320__auto__ = (function (){var statearr_34466 = (f__33319__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33319__auto__.cljs$core$IFn$_invoke$arity$0() : f__33319__auto__.call(null));
(statearr_34466[(6)] = c__33318__auto___35493);

return statearr_34466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33320__auto__);
});})(c__33318__auto___35493,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34468 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34468 = (function (f,ch,meta34469){
this.f = f;
this.ch = ch;
this.meta34469 = meta34469;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34470,meta34469__$1){
var self__ = this;
var _34470__$1 = this;
return (new cljs.core.async.t_cljs$core$async34468(self__.f,self__.ch,meta34469__$1));
});

cljs.core.async.t_cljs$core$async34468.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34470){
var self__ = this;
var _34470__$1 = this;
return self__.meta34469;
});

cljs.core.async.t_cljs$core$async34468.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34468.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34468.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async34468.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34468.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34471 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34471 = (function (f,ch,meta34469,_,fn1,meta34472){
this.f = f;
this.ch = ch;
this.meta34469 = meta34469;
this._ = _;
this.fn1 = fn1;
this.meta34472 = meta34472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34473,meta34472__$1){
var self__ = this;
var _34473__$1 = this;
return (new cljs.core.async.t_cljs$core$async34471(self__.f,self__.ch,self__.meta34469,self__._,self__.fn1,meta34472__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34471.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34473){
var self__ = this;
var _34473__$1 = this;
return self__.meta34472;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34471.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34471.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34471.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34471.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34467_SHARP_){
var G__34474 = (((p1__34467_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34467_SHARP_) : self__.f.call(null,p1__34467_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34474) : f1.call(null,G__34474));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34471.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34469","meta34469",1811922290,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34468","cljs.core.async/t_cljs$core$async34468",576286321,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34472","meta34472",-197956940,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34471.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34471.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34471";

cljs.core.async.t_cljs$core$async34471.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34471");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34471.
 */
cljs.core.async.__GT_t_cljs$core$async34471 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34471(f__$1,ch__$1,meta34469__$1,___$2,fn1__$1,meta34472){
return (new cljs.core.async.t_cljs$core$async34471(f__$1,ch__$1,meta34469__$1,___$2,fn1__$1,meta34472));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34471(self__.f,self__.ch,self__.meta34469,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34475 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34475) : self__.f.call(null,G__34475));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34468.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34468.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34468.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34469","meta34469",1811922290,null)], null);
});

cljs.core.async.t_cljs$core$async34468.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34468.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34468";

cljs.core.async.t_cljs$core$async34468.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34468");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34468.
 */
cljs.core.async.__GT_t_cljs$core$async34468 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34468(f__$1,ch__$1,meta34469){
return (new cljs.core.async.t_cljs$core$async34468(f__$1,ch__$1,meta34469));
});

}

return (new cljs.core.async.t_cljs$core$async34468(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34476 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34476 = (function (f,ch,meta34477){
this.f = f;
this.ch = ch;
this.meta34477 = meta34477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34478,meta34477__$1){
var self__ = this;
var _34478__$1 = this;
return (new cljs.core.async.t_cljs$core$async34476(self__.f,self__.ch,meta34477__$1));
});

cljs.core.async.t_cljs$core$async34476.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34478){
var self__ = this;
var _34478__$1 = this;
return self__.meta34477;
});

cljs.core.async.t_cljs$core$async34476.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34476.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34476.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34476.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34476.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34476.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async34476.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34477","meta34477",-940852540,null)], null);
});

cljs.core.async.t_cljs$core$async34476.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34476.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34476";

cljs.core.async.t_cljs$core$async34476.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34476");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34476.
 */
cljs.core.async.__GT_t_cljs$core$async34476 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34476(f__$1,ch__$1,meta34477){
return (new cljs.core.async.t_cljs$core$async34476(f__$1,ch__$1,meta34477));
});

}

return (new cljs.core.async.t_cljs$core$async34476(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34479 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34479 = (function (p,ch,meta34480){
this.p = p;
this.ch = ch;
this.meta34480 = meta34480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34481,meta34480__$1){
var self__ = this;
var _34481__$1 = this;
return (new cljs.core.async.t_cljs$core$async34479(self__.p,self__.ch,meta34480__$1));
});

cljs.core.async.t_cljs$core$async34479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34481){
var self__ = this;
var _34481__$1 = this;
return self__.meta34480;
});

cljs.core.async.t_cljs$core$async34479.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34479.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34479.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async34479.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34479.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34479.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34479.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34479.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34480","meta34480",209787168,null)], null);
});

cljs.core.async.t_cljs$core$async34479.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34479.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34479";

cljs.core.async.t_cljs$core$async34479.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34479");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34479.
 */
cljs.core.async.__GT_t_cljs$core$async34479 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34479(p__$1,ch__$1,meta34480){
return (new cljs.core.async.t_cljs$core$async34479(p__$1,ch__$1,meta34480));
});

}

return (new cljs.core.async.t_cljs$core$async34479(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34483 = arguments.length;
switch (G__34483) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33318__auto___35560 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33318__auto___35560,out){
return (function (){
var f__33319__auto__ = (function (){var switch__33139__auto__ = ((function (c__33318__auto___35560,out){
return (function (state_34504){
var state_val_34505 = (state_34504[(1)]);
if((state_val_34505 === (7))){
var inst_34500 = (state_34504[(2)]);
var state_34504__$1 = state_34504;
var statearr_34506_35561 = state_34504__$1;
(statearr_34506_35561[(2)] = inst_34500);

(statearr_34506_35561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (1))){
var state_34504__$1 = state_34504;
var statearr_34507_35562 = state_34504__$1;
(statearr_34507_35562[(2)] = null);

(statearr_34507_35562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (4))){
var inst_34486 = (state_34504[(7)]);
var inst_34486__$1 = (state_34504[(2)]);
var inst_34487 = (inst_34486__$1 == null);
var state_34504__$1 = (function (){var statearr_34508 = state_34504;
(statearr_34508[(7)] = inst_34486__$1);

return statearr_34508;
})();
if(cljs.core.truth_(inst_34487)){
var statearr_34509_35563 = state_34504__$1;
(statearr_34509_35563[(1)] = (5));

} else {
var statearr_34510_35564 = state_34504__$1;
(statearr_34510_35564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (6))){
var inst_34486 = (state_34504[(7)]);
var inst_34491 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34486) : p.call(null,inst_34486));
var state_34504__$1 = state_34504;
if(cljs.core.truth_(inst_34491)){
var statearr_34511_35565 = state_34504__$1;
(statearr_34511_35565[(1)] = (8));

} else {
var statearr_34512_35566 = state_34504__$1;
(statearr_34512_35566[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (3))){
var inst_34502 = (state_34504[(2)]);
var state_34504__$1 = state_34504;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34504__$1,inst_34502);
} else {
if((state_val_34505 === (2))){
var state_34504__$1 = state_34504;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34504__$1,(4),ch);
} else {
if((state_val_34505 === (11))){
var inst_34494 = (state_34504[(2)]);
var state_34504__$1 = state_34504;
var statearr_34513_35570 = state_34504__$1;
(statearr_34513_35570[(2)] = inst_34494);

(statearr_34513_35570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (9))){
var state_34504__$1 = state_34504;
var statearr_34514_35571 = state_34504__$1;
(statearr_34514_35571[(2)] = null);

(statearr_34514_35571[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (5))){
var inst_34489 = cljs.core.async.close_BANG_(out);
var state_34504__$1 = state_34504;
var statearr_34515_35572 = state_34504__$1;
(statearr_34515_35572[(2)] = inst_34489);

(statearr_34515_35572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (10))){
var inst_34497 = (state_34504[(2)]);
var state_34504__$1 = (function (){var statearr_34516 = state_34504;
(statearr_34516[(8)] = inst_34497);

return statearr_34516;
})();
var statearr_34517_35573 = state_34504__$1;
(statearr_34517_35573[(2)] = null);

(statearr_34517_35573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (8))){
var inst_34486 = (state_34504[(7)]);
var state_34504__$1 = state_34504;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34504__$1,(11),out,inst_34486);
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
});})(c__33318__auto___35560,out))
;
return ((function (switch__33139__auto__,c__33318__auto___35560,out){
return (function() {
var cljs$core$async$state_machine__33140__auto__ = null;
var cljs$core$async$state_machine__33140__auto____0 = (function (){
var statearr_34518 = [null,null,null,null,null,null,null,null,null];
(statearr_34518[(0)] = cljs$core$async$state_machine__33140__auto__);

(statearr_34518[(1)] = (1));

return statearr_34518;
});
var cljs$core$async$state_machine__33140__auto____1 = (function (state_34504){
while(true){
var ret_value__33141__auto__ = (function (){try{while(true){
var result__33142__auto__ = switch__33139__auto__(state_34504);
if(cljs.core.keyword_identical_QMARK_(result__33142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33142__auto__;
}
break;
}
}catch (e34519){if((e34519 instanceof Object)){
var ex__33143__auto__ = e34519;
var statearr_34520_35579 = state_34504;
(statearr_34520_35579[(5)] = ex__33143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34519;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35580 = state_34504;
state_34504 = G__35580;
continue;
} else {
return ret_value__33141__auto__;
}
break;
}
});
cljs$core$async$state_machine__33140__auto__ = function(state_34504){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33140__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33140__auto____1.call(this,state_34504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33140__auto____0;
cljs$core$async$state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33140__auto____1;
return cljs$core$async$state_machine__33140__auto__;
})()
;})(switch__33139__auto__,c__33318__auto___35560,out))
})();
var state__33320__auto__ = (function (){var statearr_34521 = (f__33319__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33319__auto__.cljs$core$IFn$_invoke$arity$0() : f__33319__auto__.call(null));
(statearr_34521[(6)] = c__33318__auto___35560);

return statearr_34521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33320__auto__);
});})(c__33318__auto___35560,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34523 = arguments.length;
switch (G__34523) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33318__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33318__auto__){
return (function (){
var f__33319__auto__ = (function (){var switch__33139__auto__ = ((function (c__33318__auto__){
return (function (state_34585){
var state_val_34586 = (state_34585[(1)]);
if((state_val_34586 === (7))){
var inst_34581 = (state_34585[(2)]);
var state_34585__$1 = state_34585;
var statearr_34587_35584 = state_34585__$1;
(statearr_34587_35584[(2)] = inst_34581);

(statearr_34587_35584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34586 === (20))){
var inst_34551 = (state_34585[(7)]);
var inst_34562 = (state_34585[(2)]);
var inst_34563 = cljs.core.next(inst_34551);
var inst_34537 = inst_34563;
var inst_34538 = null;
var inst_34539 = (0);
var inst_34540 = (0);
var state_34585__$1 = (function (){var statearr_34588 = state_34585;
(statearr_34588[(8)] = inst_34540);

(statearr_34588[(9)] = inst_34538);

(statearr_34588[(10)] = inst_34537);

(statearr_34588[(11)] = inst_34562);

(statearr_34588[(12)] = inst_34539);

return statearr_34588;
})();
var statearr_34589_35585 = state_34585__$1;
(statearr_34589_35585[(2)] = null);

(statearr_34589_35585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34586 === (1))){
var state_34585__$1 = state_34585;
var statearr_34590_35586 = state_34585__$1;
(statearr_34590_35586[(2)] = null);

(statearr_34590_35586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34586 === (4))){
var inst_34526 = (state_34585[(13)]);
var inst_34526__$1 = (state_34585[(2)]);
var inst_34527 = (inst_34526__$1 == null);
var state_34585__$1 = (function (){var statearr_34591 = state_34585;
(statearr_34591[(13)] = inst_34526__$1);

return statearr_34591;
})();
if(cljs.core.truth_(inst_34527)){
var statearr_34592_35587 = state_34585__$1;
(statearr_34592_35587[(1)] = (5));

} else {
var statearr_34593_35588 = state_34585__$1;
(statearr_34593_35588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34586 === (15))){
var state_34585__$1 = state_34585;
var statearr_34597_35589 = state_34585__$1;
(statearr_34597_35589[(2)] = null);

(statearr_34597_35589[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34586 === (21))){
var state_34585__$1 = state_34585;
var statearr_34598_35593 = state_34585__$1;
(statearr_34598_35593[(2)] = null);

(statearr_34598_35593[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34586 === (13))){
var inst_34540 = (state_34585[(8)]);
var inst_34538 = (state_34585[(9)]);
var inst_34537 = (state_34585[(10)]);
var inst_34539 = (state_34585[(12)]);
var inst_34547 = (state_34585[(2)]);
var inst_34548 = (inst_34540 + (1));
var tmp34594 = inst_34538;
var tmp34595 = inst_34537;
var tmp34596 = inst_34539;
var inst_34537__$1 = tmp34595;
var inst_34538__$1 = tmp34594;
var inst_34539__$1 = tmp34596;
var inst_34540__$1 = inst_34548;
var state_34585__$1 = (function (){var statearr_34599 = state_34585;
(statearr_34599[(8)] = inst_34540__$1);

(statearr_34599[(9)] = inst_34538__$1);

(statearr_34599[(14)] = inst_34547);

(statearr_34599[(10)] = inst_34537__$1);

(statearr_34599[(12)] = inst_34539__$1);

return statearr_34599;
})();
var statearr_34600_35600 = state_34585__$1;
(statearr_34600_35600[(2)] = null);

(statearr_34600_35600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34586 === (22))){
var state_34585__$1 = state_34585;
var statearr_34601_35601 = state_34585__$1;
(statearr_34601_35601[(2)] = null);

(statearr_34601_35601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34586 === (6))){
var inst_34526 = (state_34585[(13)]);
var inst_34535 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34526) : f.call(null,inst_34526));
var inst_34536 = cljs.core.seq(inst_34535);
var inst_34537 = inst_34536;
var inst_34538 = null;
var inst_34539 = (0);
var inst_34540 = (0);
var state_34585__$1 = (function (){var statearr_34602 = state_34585;
(statearr_34602[(8)] = inst_34540);

(statearr_34602[(9)] = inst_34538);

(statearr_34602[(10)] = inst_34537);

(statearr_34602[(12)] = inst_34539);

return statearr_34602;
})();
var statearr_34603_35604 = state_34585__$1;
(statearr_34603_35604[(2)] = null);

(statearr_34603_35604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34586 === (17))){
var inst_34551 = (state_34585[(7)]);
var inst_34555 = cljs.core.chunk_first(inst_34551);
var inst_34556 = cljs.core.chunk_rest(inst_34551);
var inst_34557 = cljs.core.count(inst_34555);
var inst_34537 = inst_34556;
var inst_34538 = inst_34555;
var inst_34539 = inst_34557;
var inst_34540 = (0);
var state_34585__$1 = (function (){var statearr_34604 = state_34585;
(statearr_34604[(8)] = inst_34540);

(statearr_34604[(9)] = inst_34538);

(statearr_34604[(10)] = inst_34537);

(statearr_34604[(12)] = inst_34539);

return statearr_34604;
})();
var statearr_34605_35607 = state_34585__$1;
(statearr_34605_35607[(2)] = null);

(statearr_34605_35607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34586 === (3))){
var inst_34583 = (state_34585[(2)]);
var state_34585__$1 = state_34585;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34585__$1,inst_34583);
} else {
if((state_val_34586 === (12))){
var inst_34571 = (state_34585[(2)]);
var state_34585__$1 = state_34585;
var statearr_34606_35609 = state_34585__$1;
(statearr_34606_35609[(2)] = inst_34571);

(statearr_34606_35609[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34586 === (2))){
var state_34585__$1 = state_34585;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34585__$1,(4),in$);
} else {
if((state_val_34586 === (23))){
var inst_34579 = (state_34585[(2)]);
var state_34585__$1 = state_34585;
var statearr_34607_35610 = state_34585__$1;
(statearr_34607_35610[(2)] = inst_34579);

(statearr_34607_35610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34586 === (19))){
var inst_34566 = (state_34585[(2)]);
var state_34585__$1 = state_34585;
var statearr_34608_35611 = state_34585__$1;
(statearr_34608_35611[(2)] = inst_34566);

(statearr_34608_35611[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34586 === (11))){
var inst_34551 = (state_34585[(7)]);
var inst_34537 = (state_34585[(10)]);
var inst_34551__$1 = cljs.core.seq(inst_34537);
var state_34585__$1 = (function (){var statearr_34609 = state_34585;
(statearr_34609[(7)] = inst_34551__$1);

return statearr_34609;
})();
if(inst_34551__$1){
var statearr_34610_35612 = state_34585__$1;
(statearr_34610_35612[(1)] = (14));

} else {
var statearr_34611_35613 = state_34585__$1;
(statearr_34611_35613[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34586 === (9))){
var inst_34573 = (state_34585[(2)]);
var inst_34574 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34585__$1 = (function (){var statearr_34612 = state_34585;
(statearr_34612[(15)] = inst_34573);

return statearr_34612;
})();
if(cljs.core.truth_(inst_34574)){
var statearr_34613_35614 = state_34585__$1;
(statearr_34613_35614[(1)] = (21));

} else {
var statearr_34614_35615 = state_34585__$1;
(statearr_34614_35615[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34586 === (5))){
var inst_34529 = cljs.core.async.close_BANG_(out);
var state_34585__$1 = state_34585;
var statearr_34615_35616 = state_34585__$1;
(statearr_34615_35616[(2)] = inst_34529);

(statearr_34615_35616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34586 === (14))){
var inst_34551 = (state_34585[(7)]);
var inst_34553 = cljs.core.chunked_seq_QMARK_(inst_34551);
var state_34585__$1 = state_34585;
if(inst_34553){
var statearr_34616_35617 = state_34585__$1;
(statearr_34616_35617[(1)] = (17));

} else {
var statearr_34617_35618 = state_34585__$1;
(statearr_34617_35618[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34586 === (16))){
var inst_34569 = (state_34585[(2)]);
var state_34585__$1 = state_34585;
var statearr_34618_35619 = state_34585__$1;
(statearr_34618_35619[(2)] = inst_34569);

(statearr_34618_35619[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34586 === (10))){
var inst_34540 = (state_34585[(8)]);
var inst_34538 = (state_34585[(9)]);
var inst_34545 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34538,inst_34540);
var state_34585__$1 = state_34585;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34585__$1,(13),out,inst_34545);
} else {
if((state_val_34586 === (18))){
var inst_34551 = (state_34585[(7)]);
var inst_34560 = cljs.core.first(inst_34551);
var state_34585__$1 = state_34585;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34585__$1,(20),out,inst_34560);
} else {
if((state_val_34586 === (8))){
var inst_34540 = (state_34585[(8)]);
var inst_34539 = (state_34585[(12)]);
var inst_34542 = (inst_34540 < inst_34539);
var inst_34543 = inst_34542;
var state_34585__$1 = state_34585;
if(cljs.core.truth_(inst_34543)){
var statearr_34619_35620 = state_34585__$1;
(statearr_34619_35620[(1)] = (10));

} else {
var statearr_34620_35621 = state_34585__$1;
(statearr_34620_35621[(1)] = (11));

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
});})(c__33318__auto__))
;
return ((function (switch__33139__auto__,c__33318__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33140__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33140__auto____0 = (function (){
var statearr_34621 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34621[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33140__auto__);

(statearr_34621[(1)] = (1));

return statearr_34621;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33140__auto____1 = (function (state_34585){
while(true){
var ret_value__33141__auto__ = (function (){try{while(true){
var result__33142__auto__ = switch__33139__auto__(state_34585);
if(cljs.core.keyword_identical_QMARK_(result__33142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33142__auto__;
}
break;
}
}catch (e34622){if((e34622 instanceof Object)){
var ex__33143__auto__ = e34622;
var statearr_34623_35623 = state_34585;
(statearr_34623_35623[(5)] = ex__33143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34622;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35624 = state_34585;
state_34585 = G__35624;
continue;
} else {
return ret_value__33141__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33140__auto__ = function(state_34585){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33140__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33140__auto____1.call(this,state_34585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33140__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33140__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33140__auto__;
})()
;})(switch__33139__auto__,c__33318__auto__))
})();
var state__33320__auto__ = (function (){var statearr_34624 = (f__33319__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33319__auto__.cljs$core$IFn$_invoke$arity$0() : f__33319__auto__.call(null));
(statearr_34624[(6)] = c__33318__auto__);

return statearr_34624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33320__auto__);
});})(c__33318__auto__))
);

return c__33318__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34626 = arguments.length;
switch (G__34626) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34628 = arguments.length;
switch (G__34628) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34630 = arguments.length;
switch (G__34630) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33318__auto___35632 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33318__auto___35632,out){
return (function (){
var f__33319__auto__ = (function (){var switch__33139__auto__ = ((function (c__33318__auto___35632,out){
return (function (state_34654){
var state_val_34655 = (state_34654[(1)]);
if((state_val_34655 === (7))){
var inst_34649 = (state_34654[(2)]);
var state_34654__$1 = state_34654;
var statearr_34656_35633 = state_34654__$1;
(statearr_34656_35633[(2)] = inst_34649);

(statearr_34656_35633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34655 === (1))){
var inst_34631 = null;
var state_34654__$1 = (function (){var statearr_34657 = state_34654;
(statearr_34657[(7)] = inst_34631);

return statearr_34657;
})();
var statearr_34658_35634 = state_34654__$1;
(statearr_34658_35634[(2)] = null);

(statearr_34658_35634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34655 === (4))){
var inst_34634 = (state_34654[(8)]);
var inst_34634__$1 = (state_34654[(2)]);
var inst_34635 = (inst_34634__$1 == null);
var inst_34636 = cljs.core.not(inst_34635);
var state_34654__$1 = (function (){var statearr_34659 = state_34654;
(statearr_34659[(8)] = inst_34634__$1);

return statearr_34659;
})();
if(inst_34636){
var statearr_34660_35636 = state_34654__$1;
(statearr_34660_35636[(1)] = (5));

} else {
var statearr_34661_35637 = state_34654__$1;
(statearr_34661_35637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34655 === (6))){
var state_34654__$1 = state_34654;
var statearr_34662_35638 = state_34654__$1;
(statearr_34662_35638[(2)] = null);

(statearr_34662_35638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34655 === (3))){
var inst_34651 = (state_34654[(2)]);
var inst_34652 = cljs.core.async.close_BANG_(out);
var state_34654__$1 = (function (){var statearr_34663 = state_34654;
(statearr_34663[(9)] = inst_34651);

return statearr_34663;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34654__$1,inst_34652);
} else {
if((state_val_34655 === (2))){
var state_34654__$1 = state_34654;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34654__$1,(4),ch);
} else {
if((state_val_34655 === (11))){
var inst_34634 = (state_34654[(8)]);
var inst_34643 = (state_34654[(2)]);
var inst_34631 = inst_34634;
var state_34654__$1 = (function (){var statearr_34664 = state_34654;
(statearr_34664[(7)] = inst_34631);

(statearr_34664[(10)] = inst_34643);

return statearr_34664;
})();
var statearr_34665_35639 = state_34654__$1;
(statearr_34665_35639[(2)] = null);

(statearr_34665_35639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34655 === (9))){
var inst_34634 = (state_34654[(8)]);
var state_34654__$1 = state_34654;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34654__$1,(11),out,inst_34634);
} else {
if((state_val_34655 === (5))){
var inst_34631 = (state_34654[(7)]);
var inst_34634 = (state_34654[(8)]);
var inst_34638 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34634,inst_34631);
var state_34654__$1 = state_34654;
if(inst_34638){
var statearr_34667_35640 = state_34654__$1;
(statearr_34667_35640[(1)] = (8));

} else {
var statearr_34668_35641 = state_34654__$1;
(statearr_34668_35641[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34655 === (10))){
var inst_34646 = (state_34654[(2)]);
var state_34654__$1 = state_34654;
var statearr_34669_35643 = state_34654__$1;
(statearr_34669_35643[(2)] = inst_34646);

(statearr_34669_35643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34655 === (8))){
var inst_34631 = (state_34654[(7)]);
var tmp34666 = inst_34631;
var inst_34631__$1 = tmp34666;
var state_34654__$1 = (function (){var statearr_34670 = state_34654;
(statearr_34670[(7)] = inst_34631__$1);

return statearr_34670;
})();
var statearr_34671_35651 = state_34654__$1;
(statearr_34671_35651[(2)] = null);

(statearr_34671_35651[(1)] = (2));


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
});})(c__33318__auto___35632,out))
;
return ((function (switch__33139__auto__,c__33318__auto___35632,out){
return (function() {
var cljs$core$async$state_machine__33140__auto__ = null;
var cljs$core$async$state_machine__33140__auto____0 = (function (){
var statearr_34672 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34672[(0)] = cljs$core$async$state_machine__33140__auto__);

(statearr_34672[(1)] = (1));

return statearr_34672;
});
var cljs$core$async$state_machine__33140__auto____1 = (function (state_34654){
while(true){
var ret_value__33141__auto__ = (function (){try{while(true){
var result__33142__auto__ = switch__33139__auto__(state_34654);
if(cljs.core.keyword_identical_QMARK_(result__33142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33142__auto__;
}
break;
}
}catch (e34673){if((e34673 instanceof Object)){
var ex__33143__auto__ = e34673;
var statearr_34674_35660 = state_34654;
(statearr_34674_35660[(5)] = ex__33143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34673;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35665 = state_34654;
state_34654 = G__35665;
continue;
} else {
return ret_value__33141__auto__;
}
break;
}
});
cljs$core$async$state_machine__33140__auto__ = function(state_34654){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33140__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33140__auto____1.call(this,state_34654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33140__auto____0;
cljs$core$async$state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33140__auto____1;
return cljs$core$async$state_machine__33140__auto__;
})()
;})(switch__33139__auto__,c__33318__auto___35632,out))
})();
var state__33320__auto__ = (function (){var statearr_34675 = (f__33319__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33319__auto__.cljs$core$IFn$_invoke$arity$0() : f__33319__auto__.call(null));
(statearr_34675[(6)] = c__33318__auto___35632);

return statearr_34675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33320__auto__);
});})(c__33318__auto___35632,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34677 = arguments.length;
switch (G__34677) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33318__auto___35668 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33318__auto___35668,out){
return (function (){
var f__33319__auto__ = (function (){var switch__33139__auto__ = ((function (c__33318__auto___35668,out){
return (function (state_34715){
var state_val_34716 = (state_34715[(1)]);
if((state_val_34716 === (7))){
var inst_34711 = (state_34715[(2)]);
var state_34715__$1 = state_34715;
var statearr_34717_35669 = state_34715__$1;
(statearr_34717_35669[(2)] = inst_34711);

(statearr_34717_35669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (1))){
var inst_34678 = (new Array(n));
var inst_34679 = inst_34678;
var inst_34680 = (0);
var state_34715__$1 = (function (){var statearr_34718 = state_34715;
(statearr_34718[(7)] = inst_34679);

(statearr_34718[(8)] = inst_34680);

return statearr_34718;
})();
var statearr_34719_35670 = state_34715__$1;
(statearr_34719_35670[(2)] = null);

(statearr_34719_35670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (4))){
var inst_34683 = (state_34715[(9)]);
var inst_34683__$1 = (state_34715[(2)]);
var inst_34684 = (inst_34683__$1 == null);
var inst_34685 = cljs.core.not(inst_34684);
var state_34715__$1 = (function (){var statearr_34720 = state_34715;
(statearr_34720[(9)] = inst_34683__$1);

return statearr_34720;
})();
if(inst_34685){
var statearr_34721_35675 = state_34715__$1;
(statearr_34721_35675[(1)] = (5));

} else {
var statearr_34722_35680 = state_34715__$1;
(statearr_34722_35680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (15))){
var inst_34705 = (state_34715[(2)]);
var state_34715__$1 = state_34715;
var statearr_34723_35681 = state_34715__$1;
(statearr_34723_35681[(2)] = inst_34705);

(statearr_34723_35681[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (13))){
var state_34715__$1 = state_34715;
var statearr_34724_35686 = state_34715__$1;
(statearr_34724_35686[(2)] = null);

(statearr_34724_35686[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (6))){
var inst_34680 = (state_34715[(8)]);
var inst_34701 = (inst_34680 > (0));
var state_34715__$1 = state_34715;
if(cljs.core.truth_(inst_34701)){
var statearr_34725_35687 = state_34715__$1;
(statearr_34725_35687[(1)] = (12));

} else {
var statearr_34726_35688 = state_34715__$1;
(statearr_34726_35688[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (3))){
var inst_34713 = (state_34715[(2)]);
var state_34715__$1 = state_34715;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34715__$1,inst_34713);
} else {
if((state_val_34716 === (12))){
var inst_34679 = (state_34715[(7)]);
var inst_34703 = cljs.core.vec(inst_34679);
var state_34715__$1 = state_34715;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34715__$1,(15),out,inst_34703);
} else {
if((state_val_34716 === (2))){
var state_34715__$1 = state_34715;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34715__$1,(4),ch);
} else {
if((state_val_34716 === (11))){
var inst_34695 = (state_34715[(2)]);
var inst_34696 = (new Array(n));
var inst_34679 = inst_34696;
var inst_34680 = (0);
var state_34715__$1 = (function (){var statearr_34727 = state_34715;
(statearr_34727[(7)] = inst_34679);

(statearr_34727[(10)] = inst_34695);

(statearr_34727[(8)] = inst_34680);

return statearr_34727;
})();
var statearr_34728_35700 = state_34715__$1;
(statearr_34728_35700[(2)] = null);

(statearr_34728_35700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (9))){
var inst_34679 = (state_34715[(7)]);
var inst_34693 = cljs.core.vec(inst_34679);
var state_34715__$1 = state_34715;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34715__$1,(11),out,inst_34693);
} else {
if((state_val_34716 === (5))){
var inst_34683 = (state_34715[(9)]);
var inst_34679 = (state_34715[(7)]);
var inst_34680 = (state_34715[(8)]);
var inst_34688 = (state_34715[(11)]);
var inst_34687 = (inst_34679[inst_34680] = inst_34683);
var inst_34688__$1 = (inst_34680 + (1));
var inst_34689 = (inst_34688__$1 < n);
var state_34715__$1 = (function (){var statearr_34729 = state_34715;
(statearr_34729[(12)] = inst_34687);

(statearr_34729[(11)] = inst_34688__$1);

return statearr_34729;
})();
if(cljs.core.truth_(inst_34689)){
var statearr_34730_35711 = state_34715__$1;
(statearr_34730_35711[(1)] = (8));

} else {
var statearr_34731_35712 = state_34715__$1;
(statearr_34731_35712[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (14))){
var inst_34708 = (state_34715[(2)]);
var inst_34709 = cljs.core.async.close_BANG_(out);
var state_34715__$1 = (function (){var statearr_34733 = state_34715;
(statearr_34733[(13)] = inst_34708);

return statearr_34733;
})();
var statearr_34734_35713 = state_34715__$1;
(statearr_34734_35713[(2)] = inst_34709);

(statearr_34734_35713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (10))){
var inst_34699 = (state_34715[(2)]);
var state_34715__$1 = state_34715;
var statearr_34735_35714 = state_34715__$1;
(statearr_34735_35714[(2)] = inst_34699);

(statearr_34735_35714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (8))){
var inst_34679 = (state_34715[(7)]);
var inst_34688 = (state_34715[(11)]);
var tmp34732 = inst_34679;
var inst_34679__$1 = tmp34732;
var inst_34680 = inst_34688;
var state_34715__$1 = (function (){var statearr_34736 = state_34715;
(statearr_34736[(7)] = inst_34679__$1);

(statearr_34736[(8)] = inst_34680);

return statearr_34736;
})();
var statearr_34737_35716 = state_34715__$1;
(statearr_34737_35716[(2)] = null);

(statearr_34737_35716[(1)] = (2));


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
});})(c__33318__auto___35668,out))
;
return ((function (switch__33139__auto__,c__33318__auto___35668,out){
return (function() {
var cljs$core$async$state_machine__33140__auto__ = null;
var cljs$core$async$state_machine__33140__auto____0 = (function (){
var statearr_34738 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34738[(0)] = cljs$core$async$state_machine__33140__auto__);

(statearr_34738[(1)] = (1));

return statearr_34738;
});
var cljs$core$async$state_machine__33140__auto____1 = (function (state_34715){
while(true){
var ret_value__33141__auto__ = (function (){try{while(true){
var result__33142__auto__ = switch__33139__auto__(state_34715);
if(cljs.core.keyword_identical_QMARK_(result__33142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33142__auto__;
}
break;
}
}catch (e34739){if((e34739 instanceof Object)){
var ex__33143__auto__ = e34739;
var statearr_34740_35717 = state_34715;
(statearr_34740_35717[(5)] = ex__33143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34739;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35719 = state_34715;
state_34715 = G__35719;
continue;
} else {
return ret_value__33141__auto__;
}
break;
}
});
cljs$core$async$state_machine__33140__auto__ = function(state_34715){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33140__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33140__auto____1.call(this,state_34715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33140__auto____0;
cljs$core$async$state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33140__auto____1;
return cljs$core$async$state_machine__33140__auto__;
})()
;})(switch__33139__auto__,c__33318__auto___35668,out))
})();
var state__33320__auto__ = (function (){var statearr_34741 = (f__33319__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33319__auto__.cljs$core$IFn$_invoke$arity$0() : f__33319__auto__.call(null));
(statearr_34741[(6)] = c__33318__auto___35668);

return statearr_34741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33320__auto__);
});})(c__33318__auto___35668,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34743 = arguments.length;
switch (G__34743) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33318__auto___35722 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33318__auto___35722,out){
return (function (){
var f__33319__auto__ = (function (){var switch__33139__auto__ = ((function (c__33318__auto___35722,out){
return (function (state_34785){
var state_val_34786 = (state_34785[(1)]);
if((state_val_34786 === (7))){
var inst_34781 = (state_34785[(2)]);
var state_34785__$1 = state_34785;
var statearr_34787_35723 = state_34785__$1;
(statearr_34787_35723[(2)] = inst_34781);

(statearr_34787_35723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (1))){
var inst_34744 = [];
var inst_34745 = inst_34744;
var inst_34746 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34785__$1 = (function (){var statearr_34788 = state_34785;
(statearr_34788[(7)] = inst_34746);

(statearr_34788[(8)] = inst_34745);

return statearr_34788;
})();
var statearr_34789_35724 = state_34785__$1;
(statearr_34789_35724[(2)] = null);

(statearr_34789_35724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (4))){
var inst_34749 = (state_34785[(9)]);
var inst_34749__$1 = (state_34785[(2)]);
var inst_34750 = (inst_34749__$1 == null);
var inst_34751 = cljs.core.not(inst_34750);
var state_34785__$1 = (function (){var statearr_34790 = state_34785;
(statearr_34790[(9)] = inst_34749__$1);

return statearr_34790;
})();
if(inst_34751){
var statearr_34791_35726 = state_34785__$1;
(statearr_34791_35726[(1)] = (5));

} else {
var statearr_34792_35727 = state_34785__$1;
(statearr_34792_35727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (15))){
var inst_34775 = (state_34785[(2)]);
var state_34785__$1 = state_34785;
var statearr_34793_35728 = state_34785__$1;
(statearr_34793_35728[(2)] = inst_34775);

(statearr_34793_35728[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (13))){
var state_34785__$1 = state_34785;
var statearr_34794_35729 = state_34785__$1;
(statearr_34794_35729[(2)] = null);

(statearr_34794_35729[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (6))){
var inst_34745 = (state_34785[(8)]);
var inst_34770 = inst_34745.length;
var inst_34771 = (inst_34770 > (0));
var state_34785__$1 = state_34785;
if(cljs.core.truth_(inst_34771)){
var statearr_34795_35731 = state_34785__$1;
(statearr_34795_35731[(1)] = (12));

} else {
var statearr_34796_35732 = state_34785__$1;
(statearr_34796_35732[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (3))){
var inst_34783 = (state_34785[(2)]);
var state_34785__$1 = state_34785;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34785__$1,inst_34783);
} else {
if((state_val_34786 === (12))){
var inst_34745 = (state_34785[(8)]);
var inst_34773 = cljs.core.vec(inst_34745);
var state_34785__$1 = state_34785;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34785__$1,(15),out,inst_34773);
} else {
if((state_val_34786 === (2))){
var state_34785__$1 = state_34785;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34785__$1,(4),ch);
} else {
if((state_val_34786 === (11))){
var inst_34753 = (state_34785[(10)]);
var inst_34749 = (state_34785[(9)]);
var inst_34763 = (state_34785[(2)]);
var inst_34764 = [];
var inst_34765 = inst_34764.push(inst_34749);
var inst_34745 = inst_34764;
var inst_34746 = inst_34753;
var state_34785__$1 = (function (){var statearr_34797 = state_34785;
(statearr_34797[(11)] = inst_34763);

(statearr_34797[(12)] = inst_34765);

(statearr_34797[(7)] = inst_34746);

(statearr_34797[(8)] = inst_34745);

return statearr_34797;
})();
var statearr_34798_35735 = state_34785__$1;
(statearr_34798_35735[(2)] = null);

(statearr_34798_35735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (9))){
var inst_34745 = (state_34785[(8)]);
var inst_34761 = cljs.core.vec(inst_34745);
var state_34785__$1 = state_34785;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34785__$1,(11),out,inst_34761);
} else {
if((state_val_34786 === (5))){
var inst_34753 = (state_34785[(10)]);
var inst_34746 = (state_34785[(7)]);
var inst_34749 = (state_34785[(9)]);
var inst_34753__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34749) : f.call(null,inst_34749));
var inst_34754 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34753__$1,inst_34746);
var inst_34755 = cljs.core.keyword_identical_QMARK_(inst_34746,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34756 = ((inst_34754) || (inst_34755));
var state_34785__$1 = (function (){var statearr_34799 = state_34785;
(statearr_34799[(10)] = inst_34753__$1);

return statearr_34799;
})();
if(cljs.core.truth_(inst_34756)){
var statearr_34800_35743 = state_34785__$1;
(statearr_34800_35743[(1)] = (8));

} else {
var statearr_34801_35748 = state_34785__$1;
(statearr_34801_35748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (14))){
var inst_34778 = (state_34785[(2)]);
var inst_34779 = cljs.core.async.close_BANG_(out);
var state_34785__$1 = (function (){var statearr_34803 = state_34785;
(statearr_34803[(13)] = inst_34778);

return statearr_34803;
})();
var statearr_34804_35754 = state_34785__$1;
(statearr_34804_35754[(2)] = inst_34779);

(statearr_34804_35754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (10))){
var inst_34768 = (state_34785[(2)]);
var state_34785__$1 = state_34785;
var statearr_34805_35760 = state_34785__$1;
(statearr_34805_35760[(2)] = inst_34768);

(statearr_34805_35760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (8))){
var inst_34753 = (state_34785[(10)]);
var inst_34745 = (state_34785[(8)]);
var inst_34749 = (state_34785[(9)]);
var inst_34758 = inst_34745.push(inst_34749);
var tmp34802 = inst_34745;
var inst_34745__$1 = tmp34802;
var inst_34746 = inst_34753;
var state_34785__$1 = (function (){var statearr_34806 = state_34785;
(statearr_34806[(14)] = inst_34758);

(statearr_34806[(7)] = inst_34746);

(statearr_34806[(8)] = inst_34745__$1);

return statearr_34806;
})();
var statearr_34807_35772 = state_34785__$1;
(statearr_34807_35772[(2)] = null);

(statearr_34807_35772[(1)] = (2));


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
});})(c__33318__auto___35722,out))
;
return ((function (switch__33139__auto__,c__33318__auto___35722,out){
return (function() {
var cljs$core$async$state_machine__33140__auto__ = null;
var cljs$core$async$state_machine__33140__auto____0 = (function (){
var statearr_34808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34808[(0)] = cljs$core$async$state_machine__33140__auto__);

(statearr_34808[(1)] = (1));

return statearr_34808;
});
var cljs$core$async$state_machine__33140__auto____1 = (function (state_34785){
while(true){
var ret_value__33141__auto__ = (function (){try{while(true){
var result__33142__auto__ = switch__33139__auto__(state_34785);
if(cljs.core.keyword_identical_QMARK_(result__33142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33142__auto__;
}
break;
}
}catch (e34809){if((e34809 instanceof Object)){
var ex__33143__auto__ = e34809;
var statearr_34810_35790 = state_34785;
(statearr_34810_35790[(5)] = ex__33143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34809;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35796 = state_34785;
state_34785 = G__35796;
continue;
} else {
return ret_value__33141__auto__;
}
break;
}
});
cljs$core$async$state_machine__33140__auto__ = function(state_34785){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33140__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33140__auto____1.call(this,state_34785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33140__auto____0;
cljs$core$async$state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33140__auto____1;
return cljs$core$async$state_machine__33140__auto__;
})()
;})(switch__33139__auto__,c__33318__auto___35722,out))
})();
var state__33320__auto__ = (function (){var statearr_34811 = (f__33319__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33319__auto__.cljs$core$IFn$_invoke$arity$0() : f__33319__auto__.call(null));
(statearr_34811[(6)] = c__33318__auto___35722);

return statearr_34811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33320__auto__);
});})(c__33318__auto___35722,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
