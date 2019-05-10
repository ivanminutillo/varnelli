goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31537 = arguments.length;
switch (G__31537) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31540 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31540 = (function (f,blockable,meta31541){
this.f = f;
this.blockable = blockable;
this.meta31541 = meta31541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31542,meta31541__$1){
var self__ = this;
var _31542__$1 = this;
return (new cljs.core.async.t_cljs$core$async31540(self__.f,self__.blockable,meta31541__$1));
});

cljs.core.async.t_cljs$core$async31540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31542){
var self__ = this;
var _31542__$1 = this;
return self__.meta31541;
});

cljs.core.async.t_cljs$core$async31540.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31540.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31540.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31540.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31540.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31541","meta31541",1980412811,null)], null);
});

cljs.core.async.t_cljs$core$async31540.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31540.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31540";

cljs.core.async.t_cljs$core$async31540.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31540");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31540.
 */
cljs.core.async.__GT_t_cljs$core$async31540 = (function cljs$core$async$__GT_t_cljs$core$async31540(f__$1,blockable__$1,meta31541){
return (new cljs.core.async.t_cljs$core$async31540(f__$1,blockable__$1,meta31541));
});

}

return (new cljs.core.async.t_cljs$core$async31540(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31545 = arguments.length;
switch (G__31545) {
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
var G__31547 = arguments.length;
switch (G__31547) {
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
var G__31549 = arguments.length;
switch (G__31549) {
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
var val_32985 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32985) : fn1.call(null,val_32985));
} else {
cljs.core.async.impl.dispatch.run(((function (val_32985,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32985) : fn1.call(null,val_32985));
});})(val_32985,ret))
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
var G__31551 = arguments.length;
switch (G__31551) {
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
var n__4607__auto___33005 = n;
var x_33006 = (0);
while(true){
if((x_33006 < n__4607__auto___33005)){
(a[x_33006] = (0));

var G__33009 = (x_33006 + (1));
x_33006 = G__33009;
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

var G__33010 = (i + (1));
i = G__33010;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31552 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31552 = (function (flag,meta31553){
this.flag = flag;
this.meta31553 = meta31553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31554,meta31553__$1){
var self__ = this;
var _31554__$1 = this;
return (new cljs.core.async.t_cljs$core$async31552(self__.flag,meta31553__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31552.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31554){
var self__ = this;
var _31554__$1 = this;
return self__.meta31553;
});})(flag))
;

cljs.core.async.t_cljs$core$async31552.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31552.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31552.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31552.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31552.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31553","meta31553",577697197,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31552.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31552.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31552";

cljs.core.async.t_cljs$core$async31552.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31552");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31552.
 */
cljs.core.async.__GT_t_cljs$core$async31552 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31552(flag__$1,meta31553){
return (new cljs.core.async.t_cljs$core$async31552(flag__$1,meta31553));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31552(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31555 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31555 = (function (flag,cb,meta31556){
this.flag = flag;
this.cb = cb;
this.meta31556 = meta31556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31557,meta31556__$1){
var self__ = this;
var _31557__$1 = this;
return (new cljs.core.async.t_cljs$core$async31555(self__.flag,self__.cb,meta31556__$1));
});

cljs.core.async.t_cljs$core$async31555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31557){
var self__ = this;
var _31557__$1 = this;
return self__.meta31556;
});

cljs.core.async.t_cljs$core$async31555.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31555.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async31555.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31555.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31555.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31556","meta31556",66110239,null)], null);
});

cljs.core.async.t_cljs$core$async31555.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31555.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31555";

cljs.core.async.t_cljs$core$async31555.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31555");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31555.
 */
cljs.core.async.__GT_t_cljs$core$async31555 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31555(flag__$1,cb__$1,meta31556){
return (new cljs.core.async.t_cljs$core$async31555(flag__$1,cb__$1,meta31556));
});

}

return (new cljs.core.async.t_cljs$core$async31555(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31558_SHARP_){
var G__31560 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31558_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31560) : fret.call(null,G__31560));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31559_SHARP_){
var G__31561 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31559_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31561) : fret.call(null,G__31561));
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
var G__33038 = (i + (1));
i = G__33038;
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
var len__4730__auto___33048 = arguments.length;
var i__4731__auto___33049 = (0);
while(true){
if((i__4731__auto___33049 < len__4730__auto___33048)){
args__4736__auto__.push((arguments[i__4731__auto___33049]));

var G__33051 = (i__4731__auto___33049 + (1));
i__4731__auto___33049 = G__33051;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31564){
var map__31565 = p__31564;
var map__31565__$1 = (((((!((map__31565 == null))))?(((((map__31565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31565):map__31565);
var opts = map__31565__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31562){
var G__31563 = cljs.core.first(seq31562);
var seq31562__$1 = cljs.core.next(seq31562);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31563,seq31562__$1);
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
var G__31568 = arguments.length;
switch (G__31568) {
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
var c__31479__auto___33070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31479__auto___33070){
return (function (){
var f__31480__auto__ = (function (){var switch__31378__auto__ = ((function (c__31479__auto___33070){
return (function (state_31592){
var state_val_31593 = (state_31592[(1)]);
if((state_val_31593 === (7))){
var inst_31588 = (state_31592[(2)]);
var state_31592__$1 = state_31592;
var statearr_31594_33074 = state_31592__$1;
(statearr_31594_33074[(2)] = inst_31588);

(statearr_31594_33074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (1))){
var state_31592__$1 = state_31592;
var statearr_31595_33077 = state_31592__$1;
(statearr_31595_33077[(2)] = null);

(statearr_31595_33077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (4))){
var inst_31571 = (state_31592[(7)]);
var inst_31571__$1 = (state_31592[(2)]);
var inst_31572 = (inst_31571__$1 == null);
var state_31592__$1 = (function (){var statearr_31596 = state_31592;
(statearr_31596[(7)] = inst_31571__$1);

return statearr_31596;
})();
if(cljs.core.truth_(inst_31572)){
var statearr_31597_33078 = state_31592__$1;
(statearr_31597_33078[(1)] = (5));

} else {
var statearr_31598_33079 = state_31592__$1;
(statearr_31598_33079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (13))){
var state_31592__$1 = state_31592;
var statearr_31599_33080 = state_31592__$1;
(statearr_31599_33080[(2)] = null);

(statearr_31599_33080[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (6))){
var inst_31571 = (state_31592[(7)]);
var state_31592__$1 = state_31592;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31592__$1,(11),to,inst_31571);
} else {
if((state_val_31593 === (3))){
var inst_31590 = (state_31592[(2)]);
var state_31592__$1 = state_31592;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31592__$1,inst_31590);
} else {
if((state_val_31593 === (12))){
var state_31592__$1 = state_31592;
var statearr_31600_33081 = state_31592__$1;
(statearr_31600_33081[(2)] = null);

(statearr_31600_33081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (2))){
var state_31592__$1 = state_31592;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31592__$1,(4),from);
} else {
if((state_val_31593 === (11))){
var inst_31581 = (state_31592[(2)]);
var state_31592__$1 = state_31592;
if(cljs.core.truth_(inst_31581)){
var statearr_31601_33082 = state_31592__$1;
(statearr_31601_33082[(1)] = (12));

} else {
var statearr_31602_33083 = state_31592__$1;
(statearr_31602_33083[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (9))){
var state_31592__$1 = state_31592;
var statearr_31603_33084 = state_31592__$1;
(statearr_31603_33084[(2)] = null);

(statearr_31603_33084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (5))){
var state_31592__$1 = state_31592;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31604_33085 = state_31592__$1;
(statearr_31604_33085[(1)] = (8));

} else {
var statearr_31605_33086 = state_31592__$1;
(statearr_31605_33086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (14))){
var inst_31586 = (state_31592[(2)]);
var state_31592__$1 = state_31592;
var statearr_31606_33087 = state_31592__$1;
(statearr_31606_33087[(2)] = inst_31586);

(statearr_31606_33087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (10))){
var inst_31578 = (state_31592[(2)]);
var state_31592__$1 = state_31592;
var statearr_31607_33090 = state_31592__$1;
(statearr_31607_33090[(2)] = inst_31578);

(statearr_31607_33090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31593 === (8))){
var inst_31575 = cljs.core.async.close_BANG_(to);
var state_31592__$1 = state_31592;
var statearr_31608_33091 = state_31592__$1;
(statearr_31608_33091[(2)] = inst_31575);

(statearr_31608_33091[(1)] = (10));


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
});})(c__31479__auto___33070))
;
return ((function (switch__31378__auto__,c__31479__auto___33070){
return (function() {
var cljs$core$async$state_machine__31379__auto__ = null;
var cljs$core$async$state_machine__31379__auto____0 = (function (){
var statearr_31609 = [null,null,null,null,null,null,null,null];
(statearr_31609[(0)] = cljs$core$async$state_machine__31379__auto__);

(statearr_31609[(1)] = (1));

return statearr_31609;
});
var cljs$core$async$state_machine__31379__auto____1 = (function (state_31592){
while(true){
var ret_value__31380__auto__ = (function (){try{while(true){
var result__31381__auto__ = switch__31378__auto__(state_31592);
if(cljs.core.keyword_identical_QMARK_(result__31381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31381__auto__;
}
break;
}
}catch (e31610){if((e31610 instanceof Object)){
var ex__31382__auto__ = e31610;
var statearr_31611_33093 = state_31592;
(statearr_31611_33093[(5)] = ex__31382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31610;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33097 = state_31592;
state_31592 = G__33097;
continue;
} else {
return ret_value__31380__auto__;
}
break;
}
});
cljs$core$async$state_machine__31379__auto__ = function(state_31592){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31379__auto____1.call(this,state_31592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31379__auto____0;
cljs$core$async$state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31379__auto____1;
return cljs$core$async$state_machine__31379__auto__;
})()
;})(switch__31378__auto__,c__31479__auto___33070))
})();
var state__31481__auto__ = (function (){var statearr_31612 = (f__31480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31480__auto__.cljs$core$IFn$_invoke$arity$0() : f__31480__auto__.call(null));
(statearr_31612[(6)] = c__31479__auto___33070);

return statearr_31612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31481__auto__);
});})(c__31479__auto___33070))
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
return (function (p__31613){
var vec__31614 = p__31613;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31614,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31614,(1),null);
var job = vec__31614;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31479__auto___33101 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31479__auto___33101,res,vec__31614,v,p,job,jobs,results){
return (function (){
var f__31480__auto__ = (function (){var switch__31378__auto__ = ((function (c__31479__auto___33101,res,vec__31614,v,p,job,jobs,results){
return (function (state_31621){
var state_val_31622 = (state_31621[(1)]);
if((state_val_31622 === (1))){
var state_31621__$1 = state_31621;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31621__$1,(2),res,v);
} else {
if((state_val_31622 === (2))){
var inst_31618 = (state_31621[(2)]);
var inst_31619 = cljs.core.async.close_BANG_(res);
var state_31621__$1 = (function (){var statearr_31623 = state_31621;
(statearr_31623[(7)] = inst_31618);

return statearr_31623;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31621__$1,inst_31619);
} else {
return null;
}
}
});})(c__31479__auto___33101,res,vec__31614,v,p,job,jobs,results))
;
return ((function (switch__31378__auto__,c__31479__auto___33101,res,vec__31614,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31379__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31379__auto____0 = (function (){
var statearr_31624 = [null,null,null,null,null,null,null,null];
(statearr_31624[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31379__auto__);

(statearr_31624[(1)] = (1));

return statearr_31624;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31379__auto____1 = (function (state_31621){
while(true){
var ret_value__31380__auto__ = (function (){try{while(true){
var result__31381__auto__ = switch__31378__auto__(state_31621);
if(cljs.core.keyword_identical_QMARK_(result__31381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31381__auto__;
}
break;
}
}catch (e31625){if((e31625 instanceof Object)){
var ex__31382__auto__ = e31625;
var statearr_31626_33103 = state_31621;
(statearr_31626_33103[(5)] = ex__31382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31625;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33107 = state_31621;
state_31621 = G__33107;
continue;
} else {
return ret_value__31380__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31379__auto__ = function(state_31621){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31379__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31379__auto____1.call(this,state_31621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31379__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31379__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31379__auto__;
})()
;})(switch__31378__auto__,c__31479__auto___33101,res,vec__31614,v,p,job,jobs,results))
})();
var state__31481__auto__ = (function (){var statearr_31627 = (f__31480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31480__auto__.cljs$core$IFn$_invoke$arity$0() : f__31480__auto__.call(null));
(statearr_31627[(6)] = c__31479__auto___33101);

return statearr_31627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31481__auto__);
});})(c__31479__auto___33101,res,vec__31614,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31628){
var vec__31629 = p__31628;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31629,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31629,(1),null);
var job = vec__31629;
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
var n__4607__auto___33111 = n;
var __33112 = (0);
while(true){
if((__33112 < n__4607__auto___33111)){
var G__31632_33115 = type;
var G__31632_33116__$1 = (((G__31632_33115 instanceof cljs.core.Keyword))?G__31632_33115.fqn:null);
switch (G__31632_33116__$1) {
case "compute":
var c__31479__auto___33119 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33112,c__31479__auto___33119,G__31632_33115,G__31632_33116__$1,n__4607__auto___33111,jobs,results,process,async){
return (function (){
var f__31480__auto__ = (function (){var switch__31378__auto__ = ((function (__33112,c__31479__auto___33119,G__31632_33115,G__31632_33116__$1,n__4607__auto___33111,jobs,results,process,async){
return (function (state_31645){
var state_val_31646 = (state_31645[(1)]);
if((state_val_31646 === (1))){
var state_31645__$1 = state_31645;
var statearr_31647_33124 = state_31645__$1;
(statearr_31647_33124[(2)] = null);

(statearr_31647_33124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (2))){
var state_31645__$1 = state_31645;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31645__$1,(4),jobs);
} else {
if((state_val_31646 === (3))){
var inst_31643 = (state_31645[(2)]);
var state_31645__$1 = state_31645;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31645__$1,inst_31643);
} else {
if((state_val_31646 === (4))){
var inst_31635 = (state_31645[(2)]);
var inst_31636 = process(inst_31635);
var state_31645__$1 = state_31645;
if(cljs.core.truth_(inst_31636)){
var statearr_31648_33125 = state_31645__$1;
(statearr_31648_33125[(1)] = (5));

} else {
var statearr_31649_33126 = state_31645__$1;
(statearr_31649_33126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (5))){
var state_31645__$1 = state_31645;
var statearr_31650_33127 = state_31645__$1;
(statearr_31650_33127[(2)] = null);

(statearr_31650_33127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (6))){
var state_31645__$1 = state_31645;
var statearr_31651_33129 = state_31645__$1;
(statearr_31651_33129[(2)] = null);

(statearr_31651_33129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (7))){
var inst_31641 = (state_31645[(2)]);
var state_31645__$1 = state_31645;
var statearr_31652_33131 = state_31645__$1;
(statearr_31652_33131[(2)] = inst_31641);

(statearr_31652_33131[(1)] = (3));


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
});})(__33112,c__31479__auto___33119,G__31632_33115,G__31632_33116__$1,n__4607__auto___33111,jobs,results,process,async))
;
return ((function (__33112,switch__31378__auto__,c__31479__auto___33119,G__31632_33115,G__31632_33116__$1,n__4607__auto___33111,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31379__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31379__auto____0 = (function (){
var statearr_31653 = [null,null,null,null,null,null,null];
(statearr_31653[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31379__auto__);

(statearr_31653[(1)] = (1));

return statearr_31653;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31379__auto____1 = (function (state_31645){
while(true){
var ret_value__31380__auto__ = (function (){try{while(true){
var result__31381__auto__ = switch__31378__auto__(state_31645);
if(cljs.core.keyword_identical_QMARK_(result__31381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31381__auto__;
}
break;
}
}catch (e31654){if((e31654 instanceof Object)){
var ex__31382__auto__ = e31654;
var statearr_31655_33132 = state_31645;
(statearr_31655_33132[(5)] = ex__31382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31654;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33133 = state_31645;
state_31645 = G__33133;
continue;
} else {
return ret_value__31380__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31379__auto__ = function(state_31645){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31379__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31379__auto____1.call(this,state_31645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31379__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31379__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31379__auto__;
})()
;})(__33112,switch__31378__auto__,c__31479__auto___33119,G__31632_33115,G__31632_33116__$1,n__4607__auto___33111,jobs,results,process,async))
})();
var state__31481__auto__ = (function (){var statearr_31656 = (f__31480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31480__auto__.cljs$core$IFn$_invoke$arity$0() : f__31480__auto__.call(null));
(statearr_31656[(6)] = c__31479__auto___33119);

return statearr_31656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31481__auto__);
});})(__33112,c__31479__auto___33119,G__31632_33115,G__31632_33116__$1,n__4607__auto___33111,jobs,results,process,async))
);


break;
case "async":
var c__31479__auto___33134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33112,c__31479__auto___33134,G__31632_33115,G__31632_33116__$1,n__4607__auto___33111,jobs,results,process,async){
return (function (){
var f__31480__auto__ = (function (){var switch__31378__auto__ = ((function (__33112,c__31479__auto___33134,G__31632_33115,G__31632_33116__$1,n__4607__auto___33111,jobs,results,process,async){
return (function (state_31669){
var state_val_31670 = (state_31669[(1)]);
if((state_val_31670 === (1))){
var state_31669__$1 = state_31669;
var statearr_31671_33136 = state_31669__$1;
(statearr_31671_33136[(2)] = null);

(statearr_31671_33136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31670 === (2))){
var state_31669__$1 = state_31669;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31669__$1,(4),jobs);
} else {
if((state_val_31670 === (3))){
var inst_31667 = (state_31669[(2)]);
var state_31669__$1 = state_31669;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31669__$1,inst_31667);
} else {
if((state_val_31670 === (4))){
var inst_31659 = (state_31669[(2)]);
var inst_31660 = async(inst_31659);
var state_31669__$1 = state_31669;
if(cljs.core.truth_(inst_31660)){
var statearr_31672_33150 = state_31669__$1;
(statearr_31672_33150[(1)] = (5));

} else {
var statearr_31673_33151 = state_31669__$1;
(statearr_31673_33151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31670 === (5))){
var state_31669__$1 = state_31669;
var statearr_31674_33152 = state_31669__$1;
(statearr_31674_33152[(2)] = null);

(statearr_31674_33152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31670 === (6))){
var state_31669__$1 = state_31669;
var statearr_31675_33153 = state_31669__$1;
(statearr_31675_33153[(2)] = null);

(statearr_31675_33153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31670 === (7))){
var inst_31665 = (state_31669[(2)]);
var state_31669__$1 = state_31669;
var statearr_31676_33155 = state_31669__$1;
(statearr_31676_33155[(2)] = inst_31665);

(statearr_31676_33155[(1)] = (3));


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
});})(__33112,c__31479__auto___33134,G__31632_33115,G__31632_33116__$1,n__4607__auto___33111,jobs,results,process,async))
;
return ((function (__33112,switch__31378__auto__,c__31479__auto___33134,G__31632_33115,G__31632_33116__$1,n__4607__auto___33111,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31379__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31379__auto____0 = (function (){
var statearr_31677 = [null,null,null,null,null,null,null];
(statearr_31677[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31379__auto__);

(statearr_31677[(1)] = (1));

return statearr_31677;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31379__auto____1 = (function (state_31669){
while(true){
var ret_value__31380__auto__ = (function (){try{while(true){
var result__31381__auto__ = switch__31378__auto__(state_31669);
if(cljs.core.keyword_identical_QMARK_(result__31381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31381__auto__;
}
break;
}
}catch (e31678){if((e31678 instanceof Object)){
var ex__31382__auto__ = e31678;
var statearr_31679_33156 = state_31669;
(statearr_31679_33156[(5)] = ex__31382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31678;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33157 = state_31669;
state_31669 = G__33157;
continue;
} else {
return ret_value__31380__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31379__auto__ = function(state_31669){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31379__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31379__auto____1.call(this,state_31669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31379__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31379__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31379__auto__;
})()
;})(__33112,switch__31378__auto__,c__31479__auto___33134,G__31632_33115,G__31632_33116__$1,n__4607__auto___33111,jobs,results,process,async))
})();
var state__31481__auto__ = (function (){var statearr_31680 = (f__31480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31480__auto__.cljs$core$IFn$_invoke$arity$0() : f__31480__auto__.call(null));
(statearr_31680[(6)] = c__31479__auto___33134);

return statearr_31680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31481__auto__);
});})(__33112,c__31479__auto___33134,G__31632_33115,G__31632_33116__$1,n__4607__auto___33111,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31632_33116__$1)].join('')));

}

var G__33158 = (__33112 + (1));
__33112 = G__33158;
continue;
} else {
}
break;
}

var c__31479__auto___33159 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31479__auto___33159,jobs,results,process,async){
return (function (){
var f__31480__auto__ = (function (){var switch__31378__auto__ = ((function (c__31479__auto___33159,jobs,results,process,async){
return (function (state_31702){
var state_val_31703 = (state_31702[(1)]);
if((state_val_31703 === (7))){
var inst_31698 = (state_31702[(2)]);
var state_31702__$1 = state_31702;
var statearr_31704_33164 = state_31702__$1;
(statearr_31704_33164[(2)] = inst_31698);

(statearr_31704_33164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31703 === (1))){
var state_31702__$1 = state_31702;
var statearr_31705_33165 = state_31702__$1;
(statearr_31705_33165[(2)] = null);

(statearr_31705_33165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31703 === (4))){
var inst_31683 = (state_31702[(7)]);
var inst_31683__$1 = (state_31702[(2)]);
var inst_31684 = (inst_31683__$1 == null);
var state_31702__$1 = (function (){var statearr_31706 = state_31702;
(statearr_31706[(7)] = inst_31683__$1);

return statearr_31706;
})();
if(cljs.core.truth_(inst_31684)){
var statearr_31707_33169 = state_31702__$1;
(statearr_31707_33169[(1)] = (5));

} else {
var statearr_31708_33170 = state_31702__$1;
(statearr_31708_33170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31703 === (6))){
var inst_31688 = (state_31702[(8)]);
var inst_31683 = (state_31702[(7)]);
var inst_31688__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31689 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31690 = [inst_31683,inst_31688__$1];
var inst_31691 = (new cljs.core.PersistentVector(null,2,(5),inst_31689,inst_31690,null));
var state_31702__$1 = (function (){var statearr_31709 = state_31702;
(statearr_31709[(8)] = inst_31688__$1);

return statearr_31709;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31702__$1,(8),jobs,inst_31691);
} else {
if((state_val_31703 === (3))){
var inst_31700 = (state_31702[(2)]);
var state_31702__$1 = state_31702;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31702__$1,inst_31700);
} else {
if((state_val_31703 === (2))){
var state_31702__$1 = state_31702;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31702__$1,(4),from);
} else {
if((state_val_31703 === (9))){
var inst_31695 = (state_31702[(2)]);
var state_31702__$1 = (function (){var statearr_31710 = state_31702;
(statearr_31710[(9)] = inst_31695);

return statearr_31710;
})();
var statearr_31711_33174 = state_31702__$1;
(statearr_31711_33174[(2)] = null);

(statearr_31711_33174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31703 === (5))){
var inst_31686 = cljs.core.async.close_BANG_(jobs);
var state_31702__$1 = state_31702;
var statearr_31712_33178 = state_31702__$1;
(statearr_31712_33178[(2)] = inst_31686);

(statearr_31712_33178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31703 === (8))){
var inst_31688 = (state_31702[(8)]);
var inst_31693 = (state_31702[(2)]);
var state_31702__$1 = (function (){var statearr_31713 = state_31702;
(statearr_31713[(10)] = inst_31693);

return statearr_31713;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31702__$1,(9),results,inst_31688);
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
});})(c__31479__auto___33159,jobs,results,process,async))
;
return ((function (switch__31378__auto__,c__31479__auto___33159,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31379__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31379__auto____0 = (function (){
var statearr_31714 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31714[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31379__auto__);

(statearr_31714[(1)] = (1));

return statearr_31714;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31379__auto____1 = (function (state_31702){
while(true){
var ret_value__31380__auto__ = (function (){try{while(true){
var result__31381__auto__ = switch__31378__auto__(state_31702);
if(cljs.core.keyword_identical_QMARK_(result__31381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31381__auto__;
}
break;
}
}catch (e31715){if((e31715 instanceof Object)){
var ex__31382__auto__ = e31715;
var statearr_31716_33182 = state_31702;
(statearr_31716_33182[(5)] = ex__31382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31715;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33184 = state_31702;
state_31702 = G__33184;
continue;
} else {
return ret_value__31380__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31379__auto__ = function(state_31702){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31379__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31379__auto____1.call(this,state_31702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31379__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31379__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31379__auto__;
})()
;})(switch__31378__auto__,c__31479__auto___33159,jobs,results,process,async))
})();
var state__31481__auto__ = (function (){var statearr_31717 = (f__31480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31480__auto__.cljs$core$IFn$_invoke$arity$0() : f__31480__auto__.call(null));
(statearr_31717[(6)] = c__31479__auto___33159);

return statearr_31717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31481__auto__);
});})(c__31479__auto___33159,jobs,results,process,async))
);


var c__31479__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31479__auto__,jobs,results,process,async){
return (function (){
var f__31480__auto__ = (function (){var switch__31378__auto__ = ((function (c__31479__auto__,jobs,results,process,async){
return (function (state_31755){
var state_val_31756 = (state_31755[(1)]);
if((state_val_31756 === (7))){
var inst_31751 = (state_31755[(2)]);
var state_31755__$1 = state_31755;
var statearr_31757_33186 = state_31755__$1;
(statearr_31757_33186[(2)] = inst_31751);

(statearr_31757_33186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (20))){
var state_31755__$1 = state_31755;
var statearr_31758_33187 = state_31755__$1;
(statearr_31758_33187[(2)] = null);

(statearr_31758_33187[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (1))){
var state_31755__$1 = state_31755;
var statearr_31759_33188 = state_31755__$1;
(statearr_31759_33188[(2)] = null);

(statearr_31759_33188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (4))){
var inst_31720 = (state_31755[(7)]);
var inst_31720__$1 = (state_31755[(2)]);
var inst_31721 = (inst_31720__$1 == null);
var state_31755__$1 = (function (){var statearr_31760 = state_31755;
(statearr_31760[(7)] = inst_31720__$1);

return statearr_31760;
})();
if(cljs.core.truth_(inst_31721)){
var statearr_31761_33192 = state_31755__$1;
(statearr_31761_33192[(1)] = (5));

} else {
var statearr_31762_33193 = state_31755__$1;
(statearr_31762_33193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (15))){
var inst_31733 = (state_31755[(8)]);
var state_31755__$1 = state_31755;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31755__$1,(18),to,inst_31733);
} else {
if((state_val_31756 === (21))){
var inst_31746 = (state_31755[(2)]);
var state_31755__$1 = state_31755;
var statearr_31763_33194 = state_31755__$1;
(statearr_31763_33194[(2)] = inst_31746);

(statearr_31763_33194[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (13))){
var inst_31748 = (state_31755[(2)]);
var state_31755__$1 = (function (){var statearr_31764 = state_31755;
(statearr_31764[(9)] = inst_31748);

return statearr_31764;
})();
var statearr_31765_33198 = state_31755__$1;
(statearr_31765_33198[(2)] = null);

(statearr_31765_33198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (6))){
var inst_31720 = (state_31755[(7)]);
var state_31755__$1 = state_31755;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31755__$1,(11),inst_31720);
} else {
if((state_val_31756 === (17))){
var inst_31741 = (state_31755[(2)]);
var state_31755__$1 = state_31755;
if(cljs.core.truth_(inst_31741)){
var statearr_31766_33203 = state_31755__$1;
(statearr_31766_33203[(1)] = (19));

} else {
var statearr_31767_33207 = state_31755__$1;
(statearr_31767_33207[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (3))){
var inst_31753 = (state_31755[(2)]);
var state_31755__$1 = state_31755;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31755__$1,inst_31753);
} else {
if((state_val_31756 === (12))){
var inst_31730 = (state_31755[(10)]);
var state_31755__$1 = state_31755;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31755__$1,(14),inst_31730);
} else {
if((state_val_31756 === (2))){
var state_31755__$1 = state_31755;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31755__$1,(4),results);
} else {
if((state_val_31756 === (19))){
var state_31755__$1 = state_31755;
var statearr_31768_33211 = state_31755__$1;
(statearr_31768_33211[(2)] = null);

(statearr_31768_33211[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (11))){
var inst_31730 = (state_31755[(2)]);
var state_31755__$1 = (function (){var statearr_31769 = state_31755;
(statearr_31769[(10)] = inst_31730);

return statearr_31769;
})();
var statearr_31770_33212 = state_31755__$1;
(statearr_31770_33212[(2)] = null);

(statearr_31770_33212[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (9))){
var state_31755__$1 = state_31755;
var statearr_31771_33216 = state_31755__$1;
(statearr_31771_33216[(2)] = null);

(statearr_31771_33216[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (5))){
var state_31755__$1 = state_31755;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31772_33217 = state_31755__$1;
(statearr_31772_33217[(1)] = (8));

} else {
var statearr_31773_33218 = state_31755__$1;
(statearr_31773_33218[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (14))){
var inst_31735 = (state_31755[(11)]);
var inst_31733 = (state_31755[(8)]);
var inst_31733__$1 = (state_31755[(2)]);
var inst_31734 = (inst_31733__$1 == null);
var inst_31735__$1 = cljs.core.not(inst_31734);
var state_31755__$1 = (function (){var statearr_31774 = state_31755;
(statearr_31774[(11)] = inst_31735__$1);

(statearr_31774[(8)] = inst_31733__$1);

return statearr_31774;
})();
if(inst_31735__$1){
var statearr_31775_33222 = state_31755__$1;
(statearr_31775_33222[(1)] = (15));

} else {
var statearr_31776_33223 = state_31755__$1;
(statearr_31776_33223[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (16))){
var inst_31735 = (state_31755[(11)]);
var state_31755__$1 = state_31755;
var statearr_31777_33224 = state_31755__$1;
(statearr_31777_33224[(2)] = inst_31735);

(statearr_31777_33224[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (10))){
var inst_31727 = (state_31755[(2)]);
var state_31755__$1 = state_31755;
var statearr_31778_33229 = state_31755__$1;
(statearr_31778_33229[(2)] = inst_31727);

(statearr_31778_33229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (18))){
var inst_31738 = (state_31755[(2)]);
var state_31755__$1 = state_31755;
var statearr_31779_33233 = state_31755__$1;
(statearr_31779_33233[(2)] = inst_31738);

(statearr_31779_33233[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31756 === (8))){
var inst_31724 = cljs.core.async.close_BANG_(to);
var state_31755__$1 = state_31755;
var statearr_31780_33237 = state_31755__$1;
(statearr_31780_33237[(2)] = inst_31724);

(statearr_31780_33237[(1)] = (10));


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
});})(c__31479__auto__,jobs,results,process,async))
;
return ((function (switch__31378__auto__,c__31479__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31379__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31379__auto____0 = (function (){
var statearr_31781 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31781[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31379__auto__);

(statearr_31781[(1)] = (1));

return statearr_31781;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31379__auto____1 = (function (state_31755){
while(true){
var ret_value__31380__auto__ = (function (){try{while(true){
var result__31381__auto__ = switch__31378__auto__(state_31755);
if(cljs.core.keyword_identical_QMARK_(result__31381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31381__auto__;
}
break;
}
}catch (e31782){if((e31782 instanceof Object)){
var ex__31382__auto__ = e31782;
var statearr_31783_33244 = state_31755;
(statearr_31783_33244[(5)] = ex__31382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31782;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33248 = state_31755;
state_31755 = G__33248;
continue;
} else {
return ret_value__31380__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31379__auto__ = function(state_31755){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31379__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31379__auto____1.call(this,state_31755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31379__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31379__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31379__auto__;
})()
;})(switch__31378__auto__,c__31479__auto__,jobs,results,process,async))
})();
var state__31481__auto__ = (function (){var statearr_31784 = (f__31480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31480__auto__.cljs$core$IFn$_invoke$arity$0() : f__31480__auto__.call(null));
(statearr_31784[(6)] = c__31479__auto__);

return statearr_31784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31481__auto__);
});})(c__31479__auto__,jobs,results,process,async))
);

return c__31479__auto__;
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
var G__31786 = arguments.length;
switch (G__31786) {
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
var G__31788 = arguments.length;
switch (G__31788) {
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
var G__31790 = arguments.length;
switch (G__31790) {
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
var c__31479__auto___33262 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31479__auto___33262,tc,fc){
return (function (){
var f__31480__auto__ = (function (){var switch__31378__auto__ = ((function (c__31479__auto___33262,tc,fc){
return (function (state_31816){
var state_val_31817 = (state_31816[(1)]);
if((state_val_31817 === (7))){
var inst_31812 = (state_31816[(2)]);
var state_31816__$1 = state_31816;
var statearr_31818_33263 = state_31816__$1;
(statearr_31818_33263[(2)] = inst_31812);

(statearr_31818_33263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31817 === (1))){
var state_31816__$1 = state_31816;
var statearr_31819_33264 = state_31816__$1;
(statearr_31819_33264[(2)] = null);

(statearr_31819_33264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31817 === (4))){
var inst_31793 = (state_31816[(7)]);
var inst_31793__$1 = (state_31816[(2)]);
var inst_31794 = (inst_31793__$1 == null);
var state_31816__$1 = (function (){var statearr_31820 = state_31816;
(statearr_31820[(7)] = inst_31793__$1);

return statearr_31820;
})();
if(cljs.core.truth_(inst_31794)){
var statearr_31821_33265 = state_31816__$1;
(statearr_31821_33265[(1)] = (5));

} else {
var statearr_31822_33268 = state_31816__$1;
(statearr_31822_33268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31817 === (13))){
var state_31816__$1 = state_31816;
var statearr_31823_33269 = state_31816__$1;
(statearr_31823_33269[(2)] = null);

(statearr_31823_33269[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31817 === (6))){
var inst_31793 = (state_31816[(7)]);
var inst_31799 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31793) : p.call(null,inst_31793));
var state_31816__$1 = state_31816;
if(cljs.core.truth_(inst_31799)){
var statearr_31824_33270 = state_31816__$1;
(statearr_31824_33270[(1)] = (9));

} else {
var statearr_31825_33271 = state_31816__$1;
(statearr_31825_33271[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31817 === (3))){
var inst_31814 = (state_31816[(2)]);
var state_31816__$1 = state_31816;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31816__$1,inst_31814);
} else {
if((state_val_31817 === (12))){
var state_31816__$1 = state_31816;
var statearr_31826_33272 = state_31816__$1;
(statearr_31826_33272[(2)] = null);

(statearr_31826_33272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31817 === (2))){
var state_31816__$1 = state_31816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31816__$1,(4),ch);
} else {
if((state_val_31817 === (11))){
var inst_31793 = (state_31816[(7)]);
var inst_31803 = (state_31816[(2)]);
var state_31816__$1 = state_31816;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31816__$1,(8),inst_31803,inst_31793);
} else {
if((state_val_31817 === (9))){
var state_31816__$1 = state_31816;
var statearr_31827_33273 = state_31816__$1;
(statearr_31827_33273[(2)] = tc);

(statearr_31827_33273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31817 === (5))){
var inst_31796 = cljs.core.async.close_BANG_(tc);
var inst_31797 = cljs.core.async.close_BANG_(fc);
var state_31816__$1 = (function (){var statearr_31828 = state_31816;
(statearr_31828[(8)] = inst_31796);

return statearr_31828;
})();
var statearr_31829_33274 = state_31816__$1;
(statearr_31829_33274[(2)] = inst_31797);

(statearr_31829_33274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31817 === (14))){
var inst_31810 = (state_31816[(2)]);
var state_31816__$1 = state_31816;
var statearr_31830_33275 = state_31816__$1;
(statearr_31830_33275[(2)] = inst_31810);

(statearr_31830_33275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31817 === (10))){
var state_31816__$1 = state_31816;
var statearr_31831_33276 = state_31816__$1;
(statearr_31831_33276[(2)] = fc);

(statearr_31831_33276[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31817 === (8))){
var inst_31805 = (state_31816[(2)]);
var state_31816__$1 = state_31816;
if(cljs.core.truth_(inst_31805)){
var statearr_31832_33277 = state_31816__$1;
(statearr_31832_33277[(1)] = (12));

} else {
var statearr_31833_33279 = state_31816__$1;
(statearr_31833_33279[(1)] = (13));

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
});})(c__31479__auto___33262,tc,fc))
;
return ((function (switch__31378__auto__,c__31479__auto___33262,tc,fc){
return (function() {
var cljs$core$async$state_machine__31379__auto__ = null;
var cljs$core$async$state_machine__31379__auto____0 = (function (){
var statearr_31834 = [null,null,null,null,null,null,null,null,null];
(statearr_31834[(0)] = cljs$core$async$state_machine__31379__auto__);

(statearr_31834[(1)] = (1));

return statearr_31834;
});
var cljs$core$async$state_machine__31379__auto____1 = (function (state_31816){
while(true){
var ret_value__31380__auto__ = (function (){try{while(true){
var result__31381__auto__ = switch__31378__auto__(state_31816);
if(cljs.core.keyword_identical_QMARK_(result__31381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31381__auto__;
}
break;
}
}catch (e31835){if((e31835 instanceof Object)){
var ex__31382__auto__ = e31835;
var statearr_31836_33285 = state_31816;
(statearr_31836_33285[(5)] = ex__31382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31835;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33286 = state_31816;
state_31816 = G__33286;
continue;
} else {
return ret_value__31380__auto__;
}
break;
}
});
cljs$core$async$state_machine__31379__auto__ = function(state_31816){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31379__auto____1.call(this,state_31816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31379__auto____0;
cljs$core$async$state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31379__auto____1;
return cljs$core$async$state_machine__31379__auto__;
})()
;})(switch__31378__auto__,c__31479__auto___33262,tc,fc))
})();
var state__31481__auto__ = (function (){var statearr_31837 = (f__31480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31480__auto__.cljs$core$IFn$_invoke$arity$0() : f__31480__auto__.call(null));
(statearr_31837[(6)] = c__31479__auto___33262);

return statearr_31837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31481__auto__);
});})(c__31479__auto___33262,tc,fc))
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
var c__31479__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31479__auto__){
return (function (){
var f__31480__auto__ = (function (){var switch__31378__auto__ = ((function (c__31479__auto__){
return (function (state_31858){
var state_val_31859 = (state_31858[(1)]);
if((state_val_31859 === (7))){
var inst_31854 = (state_31858[(2)]);
var state_31858__$1 = state_31858;
var statearr_31860_33290 = state_31858__$1;
(statearr_31860_33290[(2)] = inst_31854);

(statearr_31860_33290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (1))){
var inst_31838 = init;
var state_31858__$1 = (function (){var statearr_31861 = state_31858;
(statearr_31861[(7)] = inst_31838);

return statearr_31861;
})();
var statearr_31862_33291 = state_31858__$1;
(statearr_31862_33291[(2)] = null);

(statearr_31862_33291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (4))){
var inst_31841 = (state_31858[(8)]);
var inst_31841__$1 = (state_31858[(2)]);
var inst_31842 = (inst_31841__$1 == null);
var state_31858__$1 = (function (){var statearr_31863 = state_31858;
(statearr_31863[(8)] = inst_31841__$1);

return statearr_31863;
})();
if(cljs.core.truth_(inst_31842)){
var statearr_31864_33292 = state_31858__$1;
(statearr_31864_33292[(1)] = (5));

} else {
var statearr_31865_33293 = state_31858__$1;
(statearr_31865_33293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (6))){
var inst_31838 = (state_31858[(7)]);
var inst_31845 = (state_31858[(9)]);
var inst_31841 = (state_31858[(8)]);
var inst_31845__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31838,inst_31841) : f.call(null,inst_31838,inst_31841));
var inst_31846 = cljs.core.reduced_QMARK_(inst_31845__$1);
var state_31858__$1 = (function (){var statearr_31866 = state_31858;
(statearr_31866[(9)] = inst_31845__$1);

return statearr_31866;
})();
if(inst_31846){
var statearr_31867_33294 = state_31858__$1;
(statearr_31867_33294[(1)] = (8));

} else {
var statearr_31868_33295 = state_31858__$1;
(statearr_31868_33295[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (3))){
var inst_31856 = (state_31858[(2)]);
var state_31858__$1 = state_31858;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31858__$1,inst_31856);
} else {
if((state_val_31859 === (2))){
var state_31858__$1 = state_31858;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31858__$1,(4),ch);
} else {
if((state_val_31859 === (9))){
var inst_31845 = (state_31858[(9)]);
var inst_31838 = inst_31845;
var state_31858__$1 = (function (){var statearr_31869 = state_31858;
(statearr_31869[(7)] = inst_31838);

return statearr_31869;
})();
var statearr_31870_33296 = state_31858__$1;
(statearr_31870_33296[(2)] = null);

(statearr_31870_33296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (5))){
var inst_31838 = (state_31858[(7)]);
var state_31858__$1 = state_31858;
var statearr_31871_33301 = state_31858__$1;
(statearr_31871_33301[(2)] = inst_31838);

(statearr_31871_33301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (10))){
var inst_31852 = (state_31858[(2)]);
var state_31858__$1 = state_31858;
var statearr_31872_33302 = state_31858__$1;
(statearr_31872_33302[(2)] = inst_31852);

(statearr_31872_33302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (8))){
var inst_31845 = (state_31858[(9)]);
var inst_31848 = cljs.core.deref(inst_31845);
var state_31858__$1 = state_31858;
var statearr_31873_33305 = state_31858__$1;
(statearr_31873_33305[(2)] = inst_31848);

(statearr_31873_33305[(1)] = (10));


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
});})(c__31479__auto__))
;
return ((function (switch__31378__auto__,c__31479__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31379__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31379__auto____0 = (function (){
var statearr_31874 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31874[(0)] = cljs$core$async$reduce_$_state_machine__31379__auto__);

(statearr_31874[(1)] = (1));

return statearr_31874;
});
var cljs$core$async$reduce_$_state_machine__31379__auto____1 = (function (state_31858){
while(true){
var ret_value__31380__auto__ = (function (){try{while(true){
var result__31381__auto__ = switch__31378__auto__(state_31858);
if(cljs.core.keyword_identical_QMARK_(result__31381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31381__auto__;
}
break;
}
}catch (e31875){if((e31875 instanceof Object)){
var ex__31382__auto__ = e31875;
var statearr_31876_33308 = state_31858;
(statearr_31876_33308[(5)] = ex__31382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31875;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33309 = state_31858;
state_31858 = G__33309;
continue;
} else {
return ret_value__31380__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31379__auto__ = function(state_31858){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31379__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31379__auto____1.call(this,state_31858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31379__auto____0;
cljs$core$async$reduce_$_state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31379__auto____1;
return cljs$core$async$reduce_$_state_machine__31379__auto__;
})()
;})(switch__31378__auto__,c__31479__auto__))
})();
var state__31481__auto__ = (function (){var statearr_31877 = (f__31480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31480__auto__.cljs$core$IFn$_invoke$arity$0() : f__31480__auto__.call(null));
(statearr_31877[(6)] = c__31479__auto__);

return statearr_31877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31481__auto__);
});})(c__31479__auto__))
);

return c__31479__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__31479__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31479__auto__,f__$1){
return (function (){
var f__31480__auto__ = (function (){var switch__31378__auto__ = ((function (c__31479__auto__,f__$1){
return (function (state_31883){
var state_val_31884 = (state_31883[(1)]);
if((state_val_31884 === (1))){
var inst_31878 = cljs.core.async.reduce(f__$1,init,ch);
var state_31883__$1 = state_31883;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31883__$1,(2),inst_31878);
} else {
if((state_val_31884 === (2))){
var inst_31880 = (state_31883[(2)]);
var inst_31881 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31880) : f__$1.call(null,inst_31880));
var state_31883__$1 = state_31883;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31883__$1,inst_31881);
} else {
return null;
}
}
});})(c__31479__auto__,f__$1))
;
return ((function (switch__31378__auto__,c__31479__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__31379__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31379__auto____0 = (function (){
var statearr_31885 = [null,null,null,null,null,null,null];
(statearr_31885[(0)] = cljs$core$async$transduce_$_state_machine__31379__auto__);

(statearr_31885[(1)] = (1));

return statearr_31885;
});
var cljs$core$async$transduce_$_state_machine__31379__auto____1 = (function (state_31883){
while(true){
var ret_value__31380__auto__ = (function (){try{while(true){
var result__31381__auto__ = switch__31378__auto__(state_31883);
if(cljs.core.keyword_identical_QMARK_(result__31381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31381__auto__;
}
break;
}
}catch (e31886){if((e31886 instanceof Object)){
var ex__31382__auto__ = e31886;
var statearr_31887_33323 = state_31883;
(statearr_31887_33323[(5)] = ex__31382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31886;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33324 = state_31883;
state_31883 = G__33324;
continue;
} else {
return ret_value__31380__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31379__auto__ = function(state_31883){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31379__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31379__auto____1.call(this,state_31883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31379__auto____0;
cljs$core$async$transduce_$_state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31379__auto____1;
return cljs$core$async$transduce_$_state_machine__31379__auto__;
})()
;})(switch__31378__auto__,c__31479__auto__,f__$1))
})();
var state__31481__auto__ = (function (){var statearr_31888 = (f__31480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31480__auto__.cljs$core$IFn$_invoke$arity$0() : f__31480__auto__.call(null));
(statearr_31888[(6)] = c__31479__auto__);

return statearr_31888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31481__auto__);
});})(c__31479__auto__,f__$1))
);

return c__31479__auto__;
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
var G__31890 = arguments.length;
switch (G__31890) {
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
var c__31479__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31479__auto__){
return (function (){
var f__31480__auto__ = (function (){var switch__31378__auto__ = ((function (c__31479__auto__){
return (function (state_31915){
var state_val_31916 = (state_31915[(1)]);
if((state_val_31916 === (7))){
var inst_31897 = (state_31915[(2)]);
var state_31915__$1 = state_31915;
var statearr_31917_33326 = state_31915__$1;
(statearr_31917_33326[(2)] = inst_31897);

(statearr_31917_33326[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (1))){
var inst_31891 = cljs.core.seq(coll);
var inst_31892 = inst_31891;
var state_31915__$1 = (function (){var statearr_31918 = state_31915;
(statearr_31918[(7)] = inst_31892);

return statearr_31918;
})();
var statearr_31919_33333 = state_31915__$1;
(statearr_31919_33333[(2)] = null);

(statearr_31919_33333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (4))){
var inst_31892 = (state_31915[(7)]);
var inst_31895 = cljs.core.first(inst_31892);
var state_31915__$1 = state_31915;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31915__$1,(7),ch,inst_31895);
} else {
if((state_val_31916 === (13))){
var inst_31909 = (state_31915[(2)]);
var state_31915__$1 = state_31915;
var statearr_31920_33334 = state_31915__$1;
(statearr_31920_33334[(2)] = inst_31909);

(statearr_31920_33334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (6))){
var inst_31900 = (state_31915[(2)]);
var state_31915__$1 = state_31915;
if(cljs.core.truth_(inst_31900)){
var statearr_31921_33335 = state_31915__$1;
(statearr_31921_33335[(1)] = (8));

} else {
var statearr_31922_33336 = state_31915__$1;
(statearr_31922_33336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (3))){
var inst_31913 = (state_31915[(2)]);
var state_31915__$1 = state_31915;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31915__$1,inst_31913);
} else {
if((state_val_31916 === (12))){
var state_31915__$1 = state_31915;
var statearr_31923_33337 = state_31915__$1;
(statearr_31923_33337[(2)] = null);

(statearr_31923_33337[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (2))){
var inst_31892 = (state_31915[(7)]);
var state_31915__$1 = state_31915;
if(cljs.core.truth_(inst_31892)){
var statearr_31924_33338 = state_31915__$1;
(statearr_31924_33338[(1)] = (4));

} else {
var statearr_31925_33339 = state_31915__$1;
(statearr_31925_33339[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (11))){
var inst_31906 = cljs.core.async.close_BANG_(ch);
var state_31915__$1 = state_31915;
var statearr_31926_33340 = state_31915__$1;
(statearr_31926_33340[(2)] = inst_31906);

(statearr_31926_33340[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (9))){
var state_31915__$1 = state_31915;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31927_33341 = state_31915__$1;
(statearr_31927_33341[(1)] = (11));

} else {
var statearr_31928_33342 = state_31915__$1;
(statearr_31928_33342[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (5))){
var inst_31892 = (state_31915[(7)]);
var state_31915__$1 = state_31915;
var statearr_31929_33343 = state_31915__$1;
(statearr_31929_33343[(2)] = inst_31892);

(statearr_31929_33343[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (10))){
var inst_31911 = (state_31915[(2)]);
var state_31915__$1 = state_31915;
var statearr_31930_33344 = state_31915__$1;
(statearr_31930_33344[(2)] = inst_31911);

(statearr_31930_33344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (8))){
var inst_31892 = (state_31915[(7)]);
var inst_31902 = cljs.core.next(inst_31892);
var inst_31892__$1 = inst_31902;
var state_31915__$1 = (function (){var statearr_31931 = state_31915;
(statearr_31931[(7)] = inst_31892__$1);

return statearr_31931;
})();
var statearr_31932_33351 = state_31915__$1;
(statearr_31932_33351[(2)] = null);

(statearr_31932_33351[(1)] = (2));


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
});})(c__31479__auto__))
;
return ((function (switch__31378__auto__,c__31479__auto__){
return (function() {
var cljs$core$async$state_machine__31379__auto__ = null;
var cljs$core$async$state_machine__31379__auto____0 = (function (){
var statearr_31933 = [null,null,null,null,null,null,null,null];
(statearr_31933[(0)] = cljs$core$async$state_machine__31379__auto__);

(statearr_31933[(1)] = (1));

return statearr_31933;
});
var cljs$core$async$state_machine__31379__auto____1 = (function (state_31915){
while(true){
var ret_value__31380__auto__ = (function (){try{while(true){
var result__31381__auto__ = switch__31378__auto__(state_31915);
if(cljs.core.keyword_identical_QMARK_(result__31381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31381__auto__;
}
break;
}
}catch (e31934){if((e31934 instanceof Object)){
var ex__31382__auto__ = e31934;
var statearr_31935_33352 = state_31915;
(statearr_31935_33352[(5)] = ex__31382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31934;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33353 = state_31915;
state_31915 = G__33353;
continue;
} else {
return ret_value__31380__auto__;
}
break;
}
});
cljs$core$async$state_machine__31379__auto__ = function(state_31915){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31379__auto____1.call(this,state_31915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31379__auto____0;
cljs$core$async$state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31379__auto____1;
return cljs$core$async$state_machine__31379__auto__;
})()
;})(switch__31378__auto__,c__31479__auto__))
})();
var state__31481__auto__ = (function (){var statearr_31936 = (f__31480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31480__auto__.cljs$core$IFn$_invoke$arity$0() : f__31480__auto__.call(null));
(statearr_31936[(6)] = c__31479__auto__);

return statearr_31936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31481__auto__);
});})(c__31479__auto__))
);

return c__31479__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31937 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31937 = (function (ch,cs,meta31938){
this.ch = ch;
this.cs = cs;
this.meta31938 = meta31938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31939,meta31938__$1){
var self__ = this;
var _31939__$1 = this;
return (new cljs.core.async.t_cljs$core$async31937(self__.ch,self__.cs,meta31938__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31937.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31939){
var self__ = this;
var _31939__$1 = this;
return self__.meta31938;
});})(cs))
;

cljs.core.async.t_cljs$core$async31937.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31937.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31937.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31937.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31937.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31937.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31937.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31938","meta31938",313066938,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31937.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31937.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31937";

cljs.core.async.t_cljs$core$async31937.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31937");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31937.
 */
cljs.core.async.__GT_t_cljs$core$async31937 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31937(ch__$1,cs__$1,meta31938){
return (new cljs.core.async.t_cljs$core$async31937(ch__$1,cs__$1,meta31938));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31937(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__31479__auto___33363 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31479__auto___33363,cs,m,dchan,dctr,done){
return (function (){
var f__31480__auto__ = (function (){var switch__31378__auto__ = ((function (c__31479__auto___33363,cs,m,dchan,dctr,done){
return (function (state_32074){
var state_val_32075 = (state_32074[(1)]);
if((state_val_32075 === (7))){
var inst_32070 = (state_32074[(2)]);
var state_32074__$1 = state_32074;
var statearr_32076_33367 = state_32074__$1;
(statearr_32076_33367[(2)] = inst_32070);

(statearr_32076_33367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (20))){
var inst_31973 = (state_32074[(7)]);
var inst_31985 = cljs.core.first(inst_31973);
var inst_31986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31985,(0),null);
var inst_31987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31985,(1),null);
var state_32074__$1 = (function (){var statearr_32077 = state_32074;
(statearr_32077[(8)] = inst_31986);

return statearr_32077;
})();
if(cljs.core.truth_(inst_31987)){
var statearr_32078_33368 = state_32074__$1;
(statearr_32078_33368[(1)] = (22));

} else {
var statearr_32079_33369 = state_32074__$1;
(statearr_32079_33369[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (27))){
var inst_32022 = (state_32074[(9)]);
var inst_32015 = (state_32074[(10)]);
var inst_32017 = (state_32074[(11)]);
var inst_31942 = (state_32074[(12)]);
var inst_32022__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32015,inst_32017);
var inst_32023 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32022__$1,inst_31942,done);
var state_32074__$1 = (function (){var statearr_32080 = state_32074;
(statearr_32080[(9)] = inst_32022__$1);

return statearr_32080;
})();
if(cljs.core.truth_(inst_32023)){
var statearr_32081_33370 = state_32074__$1;
(statearr_32081_33370[(1)] = (30));

} else {
var statearr_32082_33371 = state_32074__$1;
(statearr_32082_33371[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (1))){
var state_32074__$1 = state_32074;
var statearr_32083_33374 = state_32074__$1;
(statearr_32083_33374[(2)] = null);

(statearr_32083_33374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (24))){
var inst_31973 = (state_32074[(7)]);
var inst_31992 = (state_32074[(2)]);
var inst_31993 = cljs.core.next(inst_31973);
var inst_31951 = inst_31993;
var inst_31952 = null;
var inst_31953 = (0);
var inst_31954 = (0);
var state_32074__$1 = (function (){var statearr_32084 = state_32074;
(statearr_32084[(13)] = inst_31954);

(statearr_32084[(14)] = inst_31953);

(statearr_32084[(15)] = inst_31992);

(statearr_32084[(16)] = inst_31952);

(statearr_32084[(17)] = inst_31951);

return statearr_32084;
})();
var statearr_32085_33377 = state_32074__$1;
(statearr_32085_33377[(2)] = null);

(statearr_32085_33377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (39))){
var state_32074__$1 = state_32074;
var statearr_32089_33378 = state_32074__$1;
(statearr_32089_33378[(2)] = null);

(statearr_32089_33378[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (4))){
var inst_31942 = (state_32074[(12)]);
var inst_31942__$1 = (state_32074[(2)]);
var inst_31943 = (inst_31942__$1 == null);
var state_32074__$1 = (function (){var statearr_32090 = state_32074;
(statearr_32090[(12)] = inst_31942__$1);

return statearr_32090;
})();
if(cljs.core.truth_(inst_31943)){
var statearr_32091_33379 = state_32074__$1;
(statearr_32091_33379[(1)] = (5));

} else {
var statearr_32092_33380 = state_32074__$1;
(statearr_32092_33380[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (15))){
var inst_31954 = (state_32074[(13)]);
var inst_31953 = (state_32074[(14)]);
var inst_31952 = (state_32074[(16)]);
var inst_31951 = (state_32074[(17)]);
var inst_31969 = (state_32074[(2)]);
var inst_31970 = (inst_31954 + (1));
var tmp32086 = inst_31953;
var tmp32087 = inst_31952;
var tmp32088 = inst_31951;
var inst_31951__$1 = tmp32088;
var inst_31952__$1 = tmp32087;
var inst_31953__$1 = tmp32086;
var inst_31954__$1 = inst_31970;
var state_32074__$1 = (function (){var statearr_32093 = state_32074;
(statearr_32093[(13)] = inst_31954__$1);

(statearr_32093[(14)] = inst_31953__$1);

(statearr_32093[(18)] = inst_31969);

(statearr_32093[(16)] = inst_31952__$1);

(statearr_32093[(17)] = inst_31951__$1);

return statearr_32093;
})();
var statearr_32094_33383 = state_32074__$1;
(statearr_32094_33383[(2)] = null);

(statearr_32094_33383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (21))){
var inst_31996 = (state_32074[(2)]);
var state_32074__$1 = state_32074;
var statearr_32098_33384 = state_32074__$1;
(statearr_32098_33384[(2)] = inst_31996);

(statearr_32098_33384[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (31))){
var inst_32022 = (state_32074[(9)]);
var inst_32026 = done(null);
var inst_32027 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32022);
var state_32074__$1 = (function (){var statearr_32099 = state_32074;
(statearr_32099[(19)] = inst_32026);

return statearr_32099;
})();
var statearr_32100_33385 = state_32074__$1;
(statearr_32100_33385[(2)] = inst_32027);

(statearr_32100_33385[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (32))){
var inst_32014 = (state_32074[(20)]);
var inst_32015 = (state_32074[(10)]);
var inst_32017 = (state_32074[(11)]);
var inst_32016 = (state_32074[(21)]);
var inst_32029 = (state_32074[(2)]);
var inst_32030 = (inst_32017 + (1));
var tmp32095 = inst_32014;
var tmp32096 = inst_32015;
var tmp32097 = inst_32016;
var inst_32014__$1 = tmp32095;
var inst_32015__$1 = tmp32096;
var inst_32016__$1 = tmp32097;
var inst_32017__$1 = inst_32030;
var state_32074__$1 = (function (){var statearr_32101 = state_32074;
(statearr_32101[(20)] = inst_32014__$1);

(statearr_32101[(10)] = inst_32015__$1);

(statearr_32101[(11)] = inst_32017__$1);

(statearr_32101[(22)] = inst_32029);

(statearr_32101[(21)] = inst_32016__$1);

return statearr_32101;
})();
var statearr_32102_33386 = state_32074__$1;
(statearr_32102_33386[(2)] = null);

(statearr_32102_33386[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (40))){
var inst_32042 = (state_32074[(23)]);
var inst_32046 = done(null);
var inst_32047 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32042);
var state_32074__$1 = (function (){var statearr_32103 = state_32074;
(statearr_32103[(24)] = inst_32046);

return statearr_32103;
})();
var statearr_32104_33387 = state_32074__$1;
(statearr_32104_33387[(2)] = inst_32047);

(statearr_32104_33387[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (33))){
var inst_32033 = (state_32074[(25)]);
var inst_32035 = cljs.core.chunked_seq_QMARK_(inst_32033);
var state_32074__$1 = state_32074;
if(inst_32035){
var statearr_32105_33388 = state_32074__$1;
(statearr_32105_33388[(1)] = (36));

} else {
var statearr_32106_33389 = state_32074__$1;
(statearr_32106_33389[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (13))){
var inst_31963 = (state_32074[(26)]);
var inst_31966 = cljs.core.async.close_BANG_(inst_31963);
var state_32074__$1 = state_32074;
var statearr_32107_33391 = state_32074__$1;
(statearr_32107_33391[(2)] = inst_31966);

(statearr_32107_33391[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (22))){
var inst_31986 = (state_32074[(8)]);
var inst_31989 = cljs.core.async.close_BANG_(inst_31986);
var state_32074__$1 = state_32074;
var statearr_32108_33393 = state_32074__$1;
(statearr_32108_33393[(2)] = inst_31989);

(statearr_32108_33393[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (36))){
var inst_32033 = (state_32074[(25)]);
var inst_32037 = cljs.core.chunk_first(inst_32033);
var inst_32038 = cljs.core.chunk_rest(inst_32033);
var inst_32039 = cljs.core.count(inst_32037);
var inst_32014 = inst_32038;
var inst_32015 = inst_32037;
var inst_32016 = inst_32039;
var inst_32017 = (0);
var state_32074__$1 = (function (){var statearr_32109 = state_32074;
(statearr_32109[(20)] = inst_32014);

(statearr_32109[(10)] = inst_32015);

(statearr_32109[(11)] = inst_32017);

(statearr_32109[(21)] = inst_32016);

return statearr_32109;
})();
var statearr_32110_33394 = state_32074__$1;
(statearr_32110_33394[(2)] = null);

(statearr_32110_33394[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (41))){
var inst_32033 = (state_32074[(25)]);
var inst_32049 = (state_32074[(2)]);
var inst_32050 = cljs.core.next(inst_32033);
var inst_32014 = inst_32050;
var inst_32015 = null;
var inst_32016 = (0);
var inst_32017 = (0);
var state_32074__$1 = (function (){var statearr_32111 = state_32074;
(statearr_32111[(20)] = inst_32014);

(statearr_32111[(27)] = inst_32049);

(statearr_32111[(10)] = inst_32015);

(statearr_32111[(11)] = inst_32017);

(statearr_32111[(21)] = inst_32016);

return statearr_32111;
})();
var statearr_32112_33395 = state_32074__$1;
(statearr_32112_33395[(2)] = null);

(statearr_32112_33395[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (43))){
var state_32074__$1 = state_32074;
var statearr_32113_33396 = state_32074__$1;
(statearr_32113_33396[(2)] = null);

(statearr_32113_33396[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (29))){
var inst_32058 = (state_32074[(2)]);
var state_32074__$1 = state_32074;
var statearr_32114_33397 = state_32074__$1;
(statearr_32114_33397[(2)] = inst_32058);

(statearr_32114_33397[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (44))){
var inst_32067 = (state_32074[(2)]);
var state_32074__$1 = (function (){var statearr_32115 = state_32074;
(statearr_32115[(28)] = inst_32067);

return statearr_32115;
})();
var statearr_32116_33398 = state_32074__$1;
(statearr_32116_33398[(2)] = null);

(statearr_32116_33398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (6))){
var inst_32006 = (state_32074[(29)]);
var inst_32005 = cljs.core.deref(cs);
var inst_32006__$1 = cljs.core.keys(inst_32005);
var inst_32007 = cljs.core.count(inst_32006__$1);
var inst_32008 = cljs.core.reset_BANG_(dctr,inst_32007);
var inst_32013 = cljs.core.seq(inst_32006__$1);
var inst_32014 = inst_32013;
var inst_32015 = null;
var inst_32016 = (0);
var inst_32017 = (0);
var state_32074__$1 = (function (){var statearr_32117 = state_32074;
(statearr_32117[(20)] = inst_32014);

(statearr_32117[(10)] = inst_32015);

(statearr_32117[(11)] = inst_32017);

(statearr_32117[(30)] = inst_32008);

(statearr_32117[(29)] = inst_32006__$1);

(statearr_32117[(21)] = inst_32016);

return statearr_32117;
})();
var statearr_32118_33399 = state_32074__$1;
(statearr_32118_33399[(2)] = null);

(statearr_32118_33399[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (28))){
var inst_32014 = (state_32074[(20)]);
var inst_32033 = (state_32074[(25)]);
var inst_32033__$1 = cljs.core.seq(inst_32014);
var state_32074__$1 = (function (){var statearr_32119 = state_32074;
(statearr_32119[(25)] = inst_32033__$1);

return statearr_32119;
})();
if(inst_32033__$1){
var statearr_32120_33400 = state_32074__$1;
(statearr_32120_33400[(1)] = (33));

} else {
var statearr_32121_33401 = state_32074__$1;
(statearr_32121_33401[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (25))){
var inst_32017 = (state_32074[(11)]);
var inst_32016 = (state_32074[(21)]);
var inst_32019 = (inst_32017 < inst_32016);
var inst_32020 = inst_32019;
var state_32074__$1 = state_32074;
if(cljs.core.truth_(inst_32020)){
var statearr_32122_33402 = state_32074__$1;
(statearr_32122_33402[(1)] = (27));

} else {
var statearr_32123_33403 = state_32074__$1;
(statearr_32123_33403[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (34))){
var state_32074__$1 = state_32074;
var statearr_32124_33405 = state_32074__$1;
(statearr_32124_33405[(2)] = null);

(statearr_32124_33405[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (17))){
var state_32074__$1 = state_32074;
var statearr_32125_33406 = state_32074__$1;
(statearr_32125_33406[(2)] = null);

(statearr_32125_33406[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (3))){
var inst_32072 = (state_32074[(2)]);
var state_32074__$1 = state_32074;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32074__$1,inst_32072);
} else {
if((state_val_32075 === (12))){
var inst_32001 = (state_32074[(2)]);
var state_32074__$1 = state_32074;
var statearr_32126_33407 = state_32074__$1;
(statearr_32126_33407[(2)] = inst_32001);

(statearr_32126_33407[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (2))){
var state_32074__$1 = state_32074;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32074__$1,(4),ch);
} else {
if((state_val_32075 === (23))){
var state_32074__$1 = state_32074;
var statearr_32127_33408 = state_32074__$1;
(statearr_32127_33408[(2)] = null);

(statearr_32127_33408[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (35))){
var inst_32056 = (state_32074[(2)]);
var state_32074__$1 = state_32074;
var statearr_32128_33413 = state_32074__$1;
(statearr_32128_33413[(2)] = inst_32056);

(statearr_32128_33413[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (19))){
var inst_31973 = (state_32074[(7)]);
var inst_31977 = cljs.core.chunk_first(inst_31973);
var inst_31978 = cljs.core.chunk_rest(inst_31973);
var inst_31979 = cljs.core.count(inst_31977);
var inst_31951 = inst_31978;
var inst_31952 = inst_31977;
var inst_31953 = inst_31979;
var inst_31954 = (0);
var state_32074__$1 = (function (){var statearr_32129 = state_32074;
(statearr_32129[(13)] = inst_31954);

(statearr_32129[(14)] = inst_31953);

(statearr_32129[(16)] = inst_31952);

(statearr_32129[(17)] = inst_31951);

return statearr_32129;
})();
var statearr_32130_33414 = state_32074__$1;
(statearr_32130_33414[(2)] = null);

(statearr_32130_33414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (11))){
var inst_31951 = (state_32074[(17)]);
var inst_31973 = (state_32074[(7)]);
var inst_31973__$1 = cljs.core.seq(inst_31951);
var state_32074__$1 = (function (){var statearr_32131 = state_32074;
(statearr_32131[(7)] = inst_31973__$1);

return statearr_32131;
})();
if(inst_31973__$1){
var statearr_32132_33415 = state_32074__$1;
(statearr_32132_33415[(1)] = (16));

} else {
var statearr_32133_33416 = state_32074__$1;
(statearr_32133_33416[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (9))){
var inst_32003 = (state_32074[(2)]);
var state_32074__$1 = state_32074;
var statearr_32134_33417 = state_32074__$1;
(statearr_32134_33417[(2)] = inst_32003);

(statearr_32134_33417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (5))){
var inst_31949 = cljs.core.deref(cs);
var inst_31950 = cljs.core.seq(inst_31949);
var inst_31951 = inst_31950;
var inst_31952 = null;
var inst_31953 = (0);
var inst_31954 = (0);
var state_32074__$1 = (function (){var statearr_32135 = state_32074;
(statearr_32135[(13)] = inst_31954);

(statearr_32135[(14)] = inst_31953);

(statearr_32135[(16)] = inst_31952);

(statearr_32135[(17)] = inst_31951);

return statearr_32135;
})();
var statearr_32136_33418 = state_32074__$1;
(statearr_32136_33418[(2)] = null);

(statearr_32136_33418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (14))){
var state_32074__$1 = state_32074;
var statearr_32137_33419 = state_32074__$1;
(statearr_32137_33419[(2)] = null);

(statearr_32137_33419[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (45))){
var inst_32064 = (state_32074[(2)]);
var state_32074__$1 = state_32074;
var statearr_32138_33420 = state_32074__$1;
(statearr_32138_33420[(2)] = inst_32064);

(statearr_32138_33420[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (26))){
var inst_32006 = (state_32074[(29)]);
var inst_32060 = (state_32074[(2)]);
var inst_32061 = cljs.core.seq(inst_32006);
var state_32074__$1 = (function (){var statearr_32139 = state_32074;
(statearr_32139[(31)] = inst_32060);

return statearr_32139;
})();
if(inst_32061){
var statearr_32140_33428 = state_32074__$1;
(statearr_32140_33428[(1)] = (42));

} else {
var statearr_32141_33429 = state_32074__$1;
(statearr_32141_33429[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (16))){
var inst_31973 = (state_32074[(7)]);
var inst_31975 = cljs.core.chunked_seq_QMARK_(inst_31973);
var state_32074__$1 = state_32074;
if(inst_31975){
var statearr_32142_33430 = state_32074__$1;
(statearr_32142_33430[(1)] = (19));

} else {
var statearr_32143_33431 = state_32074__$1;
(statearr_32143_33431[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (38))){
var inst_32053 = (state_32074[(2)]);
var state_32074__$1 = state_32074;
var statearr_32144_33435 = state_32074__$1;
(statearr_32144_33435[(2)] = inst_32053);

(statearr_32144_33435[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (30))){
var state_32074__$1 = state_32074;
var statearr_32145_33436 = state_32074__$1;
(statearr_32145_33436[(2)] = null);

(statearr_32145_33436[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (10))){
var inst_31954 = (state_32074[(13)]);
var inst_31952 = (state_32074[(16)]);
var inst_31962 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31952,inst_31954);
var inst_31963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31962,(0),null);
var inst_31964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31962,(1),null);
var state_32074__$1 = (function (){var statearr_32146 = state_32074;
(statearr_32146[(26)] = inst_31963);

return statearr_32146;
})();
if(cljs.core.truth_(inst_31964)){
var statearr_32147_33440 = state_32074__$1;
(statearr_32147_33440[(1)] = (13));

} else {
var statearr_32148_33441 = state_32074__$1;
(statearr_32148_33441[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (18))){
var inst_31999 = (state_32074[(2)]);
var state_32074__$1 = state_32074;
var statearr_32149_33445 = state_32074__$1;
(statearr_32149_33445[(2)] = inst_31999);

(statearr_32149_33445[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (42))){
var state_32074__$1 = state_32074;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32074__$1,(45),dchan);
} else {
if((state_val_32075 === (37))){
var inst_32033 = (state_32074[(25)]);
var inst_32042 = (state_32074[(23)]);
var inst_31942 = (state_32074[(12)]);
var inst_32042__$1 = cljs.core.first(inst_32033);
var inst_32043 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32042__$1,inst_31942,done);
var state_32074__$1 = (function (){var statearr_32150 = state_32074;
(statearr_32150[(23)] = inst_32042__$1);

return statearr_32150;
})();
if(cljs.core.truth_(inst_32043)){
var statearr_32151_33450 = state_32074__$1;
(statearr_32151_33450[(1)] = (39));

} else {
var statearr_32152_33451 = state_32074__$1;
(statearr_32152_33451[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32075 === (8))){
var inst_31954 = (state_32074[(13)]);
var inst_31953 = (state_32074[(14)]);
var inst_31956 = (inst_31954 < inst_31953);
var inst_31957 = inst_31956;
var state_32074__$1 = state_32074;
if(cljs.core.truth_(inst_31957)){
var statearr_32153_33452 = state_32074__$1;
(statearr_32153_33452[(1)] = (10));

} else {
var statearr_32154_33453 = state_32074__$1;
(statearr_32154_33453[(1)] = (11));

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
});})(c__31479__auto___33363,cs,m,dchan,dctr,done))
;
return ((function (switch__31378__auto__,c__31479__auto___33363,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31379__auto__ = null;
var cljs$core$async$mult_$_state_machine__31379__auto____0 = (function (){
var statearr_32155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32155[(0)] = cljs$core$async$mult_$_state_machine__31379__auto__);

(statearr_32155[(1)] = (1));

return statearr_32155;
});
var cljs$core$async$mult_$_state_machine__31379__auto____1 = (function (state_32074){
while(true){
var ret_value__31380__auto__ = (function (){try{while(true){
var result__31381__auto__ = switch__31378__auto__(state_32074);
if(cljs.core.keyword_identical_QMARK_(result__31381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31381__auto__;
}
break;
}
}catch (e32156){if((e32156 instanceof Object)){
var ex__31382__auto__ = e32156;
var statearr_32157_33454 = state_32074;
(statearr_32157_33454[(5)] = ex__31382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32156;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33457 = state_32074;
state_32074 = G__33457;
continue;
} else {
return ret_value__31380__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31379__auto__ = function(state_32074){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31379__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31379__auto____1.call(this,state_32074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31379__auto____0;
cljs$core$async$mult_$_state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31379__auto____1;
return cljs$core$async$mult_$_state_machine__31379__auto__;
})()
;})(switch__31378__auto__,c__31479__auto___33363,cs,m,dchan,dctr,done))
})();
var state__31481__auto__ = (function (){var statearr_32158 = (f__31480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31480__auto__.cljs$core$IFn$_invoke$arity$0() : f__31480__auto__.call(null));
(statearr_32158[(6)] = c__31479__auto___33363);

return statearr_32158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31481__auto__);
});})(c__31479__auto___33363,cs,m,dchan,dctr,done))
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
var G__32160 = arguments.length;
switch (G__32160) {
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
var len__4730__auto___33469 = arguments.length;
var i__4731__auto___33470 = (0);
while(true){
if((i__4731__auto___33470 < len__4730__auto___33469)){
args__4736__auto__.push((arguments[i__4731__auto___33470]));

var G__33471 = (i__4731__auto___33470 + (1));
i__4731__auto___33470 = G__33471;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32165){
var map__32166 = p__32165;
var map__32166__$1 = (((((!((map__32166 == null))))?(((((map__32166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32166):map__32166);
var opts = map__32166__$1;
var statearr_32168_33476 = state;
(statearr_32168_33476[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__32166,map__32166__$1,opts){
return (function (val){
var statearr_32169_33477 = state;
(statearr_32169_33477[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__32166,map__32166__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_32170_33478 = state;
(statearr_32170_33478[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32161){
var G__32162 = cljs.core.first(seq32161);
var seq32161__$1 = cljs.core.next(seq32161);
var G__32163 = cljs.core.first(seq32161__$1);
var seq32161__$2 = cljs.core.next(seq32161__$1);
var G__32164 = cljs.core.first(seq32161__$2);
var seq32161__$3 = cljs.core.next(seq32161__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32162,G__32163,G__32164,seq32161__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32171 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32171 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32172){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32172 = meta32172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32173,meta32172__$1){
var self__ = this;
var _32173__$1 = this;
return (new cljs.core.async.t_cljs$core$async32171(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32172__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32171.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32173){
var self__ = this;
var _32173__$1 = this;
return self__.meta32172;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32171.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32171.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32171.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32171.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32171.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32171.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32171.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32171.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async32171.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32172","meta32172",-1684646642,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32171.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32171";

cljs.core.async.t_cljs$core$async32171.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32171");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32171.
 */
cljs.core.async.__GT_t_cljs$core$async32171 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32171(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32172){
return (new cljs.core.async.t_cljs$core$async32171(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32172));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32171(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31479__auto___33490 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31479__auto___33490,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31480__auto__ = (function (){var switch__31378__auto__ = ((function (c__31479__auto___33490,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32275){
var state_val_32276 = (state_32275[(1)]);
if((state_val_32276 === (7))){
var inst_32190 = (state_32275[(2)]);
var state_32275__$1 = state_32275;
var statearr_32277_33498 = state_32275__$1;
(statearr_32277_33498[(2)] = inst_32190);

(statearr_32277_33498[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (20))){
var inst_32202 = (state_32275[(7)]);
var state_32275__$1 = state_32275;
var statearr_32278_33499 = state_32275__$1;
(statearr_32278_33499[(2)] = inst_32202);

(statearr_32278_33499[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (27))){
var state_32275__$1 = state_32275;
var statearr_32279_33500 = state_32275__$1;
(statearr_32279_33500[(2)] = null);

(statearr_32279_33500[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (1))){
var inst_32177 = (state_32275[(8)]);
var inst_32177__$1 = calc_state();
var inst_32179 = (inst_32177__$1 == null);
var inst_32180 = cljs.core.not(inst_32179);
var state_32275__$1 = (function (){var statearr_32280 = state_32275;
(statearr_32280[(8)] = inst_32177__$1);

return statearr_32280;
})();
if(inst_32180){
var statearr_32281_33501 = state_32275__$1;
(statearr_32281_33501[(1)] = (2));

} else {
var statearr_32282_33502 = state_32275__$1;
(statearr_32282_33502[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (24))){
var inst_32226 = (state_32275[(9)]);
var inst_32249 = (state_32275[(10)]);
var inst_32235 = (state_32275[(11)]);
var inst_32249__$1 = (inst_32226.cljs$core$IFn$_invoke$arity$1 ? inst_32226.cljs$core$IFn$_invoke$arity$1(inst_32235) : inst_32226.call(null,inst_32235));
var state_32275__$1 = (function (){var statearr_32283 = state_32275;
(statearr_32283[(10)] = inst_32249__$1);

return statearr_32283;
})();
if(cljs.core.truth_(inst_32249__$1)){
var statearr_32284_33503 = state_32275__$1;
(statearr_32284_33503[(1)] = (29));

} else {
var statearr_32285_33504 = state_32275__$1;
(statearr_32285_33504[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (4))){
var inst_32193 = (state_32275[(2)]);
var state_32275__$1 = state_32275;
if(cljs.core.truth_(inst_32193)){
var statearr_32286_33505 = state_32275__$1;
(statearr_32286_33505[(1)] = (8));

} else {
var statearr_32287_33506 = state_32275__$1;
(statearr_32287_33506[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (15))){
var inst_32220 = (state_32275[(2)]);
var state_32275__$1 = state_32275;
if(cljs.core.truth_(inst_32220)){
var statearr_32288_33507 = state_32275__$1;
(statearr_32288_33507[(1)] = (19));

} else {
var statearr_32289_33508 = state_32275__$1;
(statearr_32289_33508[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (21))){
var inst_32225 = (state_32275[(12)]);
var inst_32225__$1 = (state_32275[(2)]);
var inst_32226 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32225__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32227 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32225__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32225__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32275__$1 = (function (){var statearr_32290 = state_32275;
(statearr_32290[(9)] = inst_32226);

(statearr_32290[(13)] = inst_32227);

(statearr_32290[(12)] = inst_32225__$1);

return statearr_32290;
})();
return cljs.core.async.ioc_alts_BANG_(state_32275__$1,(22),inst_32228);
} else {
if((state_val_32276 === (31))){
var inst_32257 = (state_32275[(2)]);
var state_32275__$1 = state_32275;
if(cljs.core.truth_(inst_32257)){
var statearr_32291_33510 = state_32275__$1;
(statearr_32291_33510[(1)] = (32));

} else {
var statearr_32292_33511 = state_32275__$1;
(statearr_32292_33511[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (32))){
var inst_32234 = (state_32275[(14)]);
var state_32275__$1 = state_32275;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32275__$1,(35),out,inst_32234);
} else {
if((state_val_32276 === (33))){
var inst_32225 = (state_32275[(12)]);
var inst_32202 = inst_32225;
var state_32275__$1 = (function (){var statearr_32293 = state_32275;
(statearr_32293[(7)] = inst_32202);

return statearr_32293;
})();
var statearr_32294_33513 = state_32275__$1;
(statearr_32294_33513[(2)] = null);

(statearr_32294_33513[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (13))){
var inst_32202 = (state_32275[(7)]);
var inst_32209 = inst_32202.cljs$lang$protocol_mask$partition0$;
var inst_32210 = (inst_32209 & (64));
var inst_32211 = inst_32202.cljs$core$ISeq$;
var inst_32212 = (cljs.core.PROTOCOL_SENTINEL === inst_32211);
var inst_32213 = ((inst_32210) || (inst_32212));
var state_32275__$1 = state_32275;
if(cljs.core.truth_(inst_32213)){
var statearr_32295_33514 = state_32275__$1;
(statearr_32295_33514[(1)] = (16));

} else {
var statearr_32296_33515 = state_32275__$1;
(statearr_32296_33515[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (22))){
var inst_32234 = (state_32275[(14)]);
var inst_32235 = (state_32275[(11)]);
var inst_32233 = (state_32275[(2)]);
var inst_32234__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32233,(0),null);
var inst_32235__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32233,(1),null);
var inst_32236 = (inst_32234__$1 == null);
var inst_32237 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32235__$1,change);
var inst_32238 = ((inst_32236) || (inst_32237));
var state_32275__$1 = (function (){var statearr_32297 = state_32275;
(statearr_32297[(14)] = inst_32234__$1);

(statearr_32297[(11)] = inst_32235__$1);

return statearr_32297;
})();
if(cljs.core.truth_(inst_32238)){
var statearr_32298_33518 = state_32275__$1;
(statearr_32298_33518[(1)] = (23));

} else {
var statearr_32299_33519 = state_32275__$1;
(statearr_32299_33519[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (36))){
var inst_32225 = (state_32275[(12)]);
var inst_32202 = inst_32225;
var state_32275__$1 = (function (){var statearr_32300 = state_32275;
(statearr_32300[(7)] = inst_32202);

return statearr_32300;
})();
var statearr_32301_33524 = state_32275__$1;
(statearr_32301_33524[(2)] = null);

(statearr_32301_33524[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (29))){
var inst_32249 = (state_32275[(10)]);
var state_32275__$1 = state_32275;
var statearr_32302_33526 = state_32275__$1;
(statearr_32302_33526[(2)] = inst_32249);

(statearr_32302_33526[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (6))){
var state_32275__$1 = state_32275;
var statearr_32303_33527 = state_32275__$1;
(statearr_32303_33527[(2)] = false);

(statearr_32303_33527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (28))){
var inst_32245 = (state_32275[(2)]);
var inst_32246 = calc_state();
var inst_32202 = inst_32246;
var state_32275__$1 = (function (){var statearr_32304 = state_32275;
(statearr_32304[(7)] = inst_32202);

(statearr_32304[(15)] = inst_32245);

return statearr_32304;
})();
var statearr_32305_33528 = state_32275__$1;
(statearr_32305_33528[(2)] = null);

(statearr_32305_33528[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (25))){
var inst_32271 = (state_32275[(2)]);
var state_32275__$1 = state_32275;
var statearr_32306_33529 = state_32275__$1;
(statearr_32306_33529[(2)] = inst_32271);

(statearr_32306_33529[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (34))){
var inst_32269 = (state_32275[(2)]);
var state_32275__$1 = state_32275;
var statearr_32307_33531 = state_32275__$1;
(statearr_32307_33531[(2)] = inst_32269);

(statearr_32307_33531[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (17))){
var state_32275__$1 = state_32275;
var statearr_32308_33532 = state_32275__$1;
(statearr_32308_33532[(2)] = false);

(statearr_32308_33532[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (3))){
var state_32275__$1 = state_32275;
var statearr_32309_33533 = state_32275__$1;
(statearr_32309_33533[(2)] = false);

(statearr_32309_33533[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (12))){
var inst_32273 = (state_32275[(2)]);
var state_32275__$1 = state_32275;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32275__$1,inst_32273);
} else {
if((state_val_32276 === (2))){
var inst_32177 = (state_32275[(8)]);
var inst_32182 = inst_32177.cljs$lang$protocol_mask$partition0$;
var inst_32183 = (inst_32182 & (64));
var inst_32184 = inst_32177.cljs$core$ISeq$;
var inst_32185 = (cljs.core.PROTOCOL_SENTINEL === inst_32184);
var inst_32186 = ((inst_32183) || (inst_32185));
var state_32275__$1 = state_32275;
if(cljs.core.truth_(inst_32186)){
var statearr_32310_33538 = state_32275__$1;
(statearr_32310_33538[(1)] = (5));

} else {
var statearr_32311_33539 = state_32275__$1;
(statearr_32311_33539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (23))){
var inst_32234 = (state_32275[(14)]);
var inst_32240 = (inst_32234 == null);
var state_32275__$1 = state_32275;
if(cljs.core.truth_(inst_32240)){
var statearr_32312_33540 = state_32275__$1;
(statearr_32312_33540[(1)] = (26));

} else {
var statearr_32313_33541 = state_32275__$1;
(statearr_32313_33541[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (35))){
var inst_32260 = (state_32275[(2)]);
var state_32275__$1 = state_32275;
if(cljs.core.truth_(inst_32260)){
var statearr_32314_33542 = state_32275__$1;
(statearr_32314_33542[(1)] = (36));

} else {
var statearr_32315_33543 = state_32275__$1;
(statearr_32315_33543[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (19))){
var inst_32202 = (state_32275[(7)]);
var inst_32222 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32202);
var state_32275__$1 = state_32275;
var statearr_32316_33544 = state_32275__$1;
(statearr_32316_33544[(2)] = inst_32222);

(statearr_32316_33544[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (11))){
var inst_32202 = (state_32275[(7)]);
var inst_32206 = (inst_32202 == null);
var inst_32207 = cljs.core.not(inst_32206);
var state_32275__$1 = state_32275;
if(inst_32207){
var statearr_32317_33545 = state_32275__$1;
(statearr_32317_33545[(1)] = (13));

} else {
var statearr_32318_33546 = state_32275__$1;
(statearr_32318_33546[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (9))){
var inst_32177 = (state_32275[(8)]);
var state_32275__$1 = state_32275;
var statearr_32319_33547 = state_32275__$1;
(statearr_32319_33547[(2)] = inst_32177);

(statearr_32319_33547[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (5))){
var state_32275__$1 = state_32275;
var statearr_32320_33549 = state_32275__$1;
(statearr_32320_33549[(2)] = true);

(statearr_32320_33549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (14))){
var state_32275__$1 = state_32275;
var statearr_32321_33550 = state_32275__$1;
(statearr_32321_33550[(2)] = false);

(statearr_32321_33550[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (26))){
var inst_32235 = (state_32275[(11)]);
var inst_32242 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32235);
var state_32275__$1 = state_32275;
var statearr_32322_33551 = state_32275__$1;
(statearr_32322_33551[(2)] = inst_32242);

(statearr_32322_33551[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (16))){
var state_32275__$1 = state_32275;
var statearr_32323_33552 = state_32275__$1;
(statearr_32323_33552[(2)] = true);

(statearr_32323_33552[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (38))){
var inst_32265 = (state_32275[(2)]);
var state_32275__$1 = state_32275;
var statearr_32324_33558 = state_32275__$1;
(statearr_32324_33558[(2)] = inst_32265);

(statearr_32324_33558[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (30))){
var inst_32226 = (state_32275[(9)]);
var inst_32227 = (state_32275[(13)]);
var inst_32235 = (state_32275[(11)]);
var inst_32252 = cljs.core.empty_QMARK_(inst_32226);
var inst_32253 = (inst_32227.cljs$core$IFn$_invoke$arity$1 ? inst_32227.cljs$core$IFn$_invoke$arity$1(inst_32235) : inst_32227.call(null,inst_32235));
var inst_32254 = cljs.core.not(inst_32253);
var inst_32255 = ((inst_32252) && (inst_32254));
var state_32275__$1 = state_32275;
var statearr_32325_33561 = state_32275__$1;
(statearr_32325_33561[(2)] = inst_32255);

(statearr_32325_33561[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (10))){
var inst_32177 = (state_32275[(8)]);
var inst_32198 = (state_32275[(2)]);
var inst_32199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32198,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32198,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32201 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32198,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32202 = inst_32177;
var state_32275__$1 = (function (){var statearr_32326 = state_32275;
(statearr_32326[(16)] = inst_32199);

(statearr_32326[(17)] = inst_32201);

(statearr_32326[(7)] = inst_32202);

(statearr_32326[(18)] = inst_32200);

return statearr_32326;
})();
var statearr_32327_33562 = state_32275__$1;
(statearr_32327_33562[(2)] = null);

(statearr_32327_33562[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (18))){
var inst_32217 = (state_32275[(2)]);
var state_32275__$1 = state_32275;
var statearr_32328_33563 = state_32275__$1;
(statearr_32328_33563[(2)] = inst_32217);

(statearr_32328_33563[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (37))){
var state_32275__$1 = state_32275;
var statearr_32329_33564 = state_32275__$1;
(statearr_32329_33564[(2)] = null);

(statearr_32329_33564[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (8))){
var inst_32177 = (state_32275[(8)]);
var inst_32195 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32177);
var state_32275__$1 = state_32275;
var statearr_32330_33565 = state_32275__$1;
(statearr_32330_33565[(2)] = inst_32195);

(statearr_32330_33565[(1)] = (10));


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
});})(c__31479__auto___33490,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31378__auto__,c__31479__auto___33490,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31379__auto__ = null;
var cljs$core$async$mix_$_state_machine__31379__auto____0 = (function (){
var statearr_32331 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32331[(0)] = cljs$core$async$mix_$_state_machine__31379__auto__);

(statearr_32331[(1)] = (1));

return statearr_32331;
});
var cljs$core$async$mix_$_state_machine__31379__auto____1 = (function (state_32275){
while(true){
var ret_value__31380__auto__ = (function (){try{while(true){
var result__31381__auto__ = switch__31378__auto__(state_32275);
if(cljs.core.keyword_identical_QMARK_(result__31381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31381__auto__;
}
break;
}
}catch (e32332){if((e32332 instanceof Object)){
var ex__31382__auto__ = e32332;
var statearr_32333_33567 = state_32275;
(statearr_32333_33567[(5)] = ex__31382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32332;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33568 = state_32275;
state_32275 = G__33568;
continue;
} else {
return ret_value__31380__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31379__auto__ = function(state_32275){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31379__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31379__auto____1.call(this,state_32275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31379__auto____0;
cljs$core$async$mix_$_state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31379__auto____1;
return cljs$core$async$mix_$_state_machine__31379__auto__;
})()
;})(switch__31378__auto__,c__31479__auto___33490,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31481__auto__ = (function (){var statearr_32334 = (f__31480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31480__auto__.cljs$core$IFn$_invoke$arity$0() : f__31480__auto__.call(null));
(statearr_32334[(6)] = c__31479__auto___33490);

return statearr_32334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31481__auto__);
});})(c__31479__auto___33490,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__32336 = arguments.length;
switch (G__32336) {
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
var G__32339 = arguments.length;
switch (G__32339) {
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
return (function (p1__32337_SHARP_){
if(cljs.core.truth_((p1__32337_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32337_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32337_SHARP_.call(null,topic)))){
return p1__32337_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32337_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32340 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32340 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32341){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32341 = meta32341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32342,meta32341__$1){
var self__ = this;
var _32342__$1 = this;
return (new cljs.core.async.t_cljs$core$async32340(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32341__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32340.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32342){
var self__ = this;
var _32342__$1 = this;
return self__.meta32341;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32340.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32340.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32340.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32340.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32340.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async32340.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32340.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32340.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32341","meta32341",-1304921508,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32340.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32340.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32340";

cljs.core.async.t_cljs$core$async32340.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32340");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32340.
 */
cljs.core.async.__GT_t_cljs$core$async32340 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32340(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32341){
return (new cljs.core.async.t_cljs$core$async32340(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32341));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32340(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31479__auto___33586 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31479__auto___33586,mults,ensure_mult,p){
return (function (){
var f__31480__auto__ = (function (){var switch__31378__auto__ = ((function (c__31479__auto___33586,mults,ensure_mult,p){
return (function (state_32414){
var state_val_32415 = (state_32414[(1)]);
if((state_val_32415 === (7))){
var inst_32410 = (state_32414[(2)]);
var state_32414__$1 = state_32414;
var statearr_32416_33587 = state_32414__$1;
(statearr_32416_33587[(2)] = inst_32410);

(statearr_32416_33587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (20))){
var state_32414__$1 = state_32414;
var statearr_32417_33588 = state_32414__$1;
(statearr_32417_33588[(2)] = null);

(statearr_32417_33588[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (1))){
var state_32414__$1 = state_32414;
var statearr_32418_33589 = state_32414__$1;
(statearr_32418_33589[(2)] = null);

(statearr_32418_33589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (24))){
var inst_32393 = (state_32414[(7)]);
var inst_32402 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32393);
var state_32414__$1 = state_32414;
var statearr_32419_33590 = state_32414__$1;
(statearr_32419_33590[(2)] = inst_32402);

(statearr_32419_33590[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (4))){
var inst_32345 = (state_32414[(8)]);
var inst_32345__$1 = (state_32414[(2)]);
var inst_32346 = (inst_32345__$1 == null);
var state_32414__$1 = (function (){var statearr_32420 = state_32414;
(statearr_32420[(8)] = inst_32345__$1);

return statearr_32420;
})();
if(cljs.core.truth_(inst_32346)){
var statearr_32421_33591 = state_32414__$1;
(statearr_32421_33591[(1)] = (5));

} else {
var statearr_32422_33592 = state_32414__$1;
(statearr_32422_33592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (15))){
var inst_32387 = (state_32414[(2)]);
var state_32414__$1 = state_32414;
var statearr_32423_33593 = state_32414__$1;
(statearr_32423_33593[(2)] = inst_32387);

(statearr_32423_33593[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (21))){
var inst_32407 = (state_32414[(2)]);
var state_32414__$1 = (function (){var statearr_32424 = state_32414;
(statearr_32424[(9)] = inst_32407);

return statearr_32424;
})();
var statearr_32425_33594 = state_32414__$1;
(statearr_32425_33594[(2)] = null);

(statearr_32425_33594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (13))){
var inst_32369 = (state_32414[(10)]);
var inst_32371 = cljs.core.chunked_seq_QMARK_(inst_32369);
var state_32414__$1 = state_32414;
if(inst_32371){
var statearr_32426_33596 = state_32414__$1;
(statearr_32426_33596[(1)] = (16));

} else {
var statearr_32427_33597 = state_32414__$1;
(statearr_32427_33597[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (22))){
var inst_32399 = (state_32414[(2)]);
var state_32414__$1 = state_32414;
if(cljs.core.truth_(inst_32399)){
var statearr_32428_33598 = state_32414__$1;
(statearr_32428_33598[(1)] = (23));

} else {
var statearr_32429_33599 = state_32414__$1;
(statearr_32429_33599[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (6))){
var inst_32345 = (state_32414[(8)]);
var inst_32393 = (state_32414[(7)]);
var inst_32395 = (state_32414[(11)]);
var inst_32393__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32345) : topic_fn.call(null,inst_32345));
var inst_32394 = cljs.core.deref(mults);
var inst_32395__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32394,inst_32393__$1);
var state_32414__$1 = (function (){var statearr_32430 = state_32414;
(statearr_32430[(7)] = inst_32393__$1);

(statearr_32430[(11)] = inst_32395__$1);

return statearr_32430;
})();
if(cljs.core.truth_(inst_32395__$1)){
var statearr_32431_33600 = state_32414__$1;
(statearr_32431_33600[(1)] = (19));

} else {
var statearr_32432_33601 = state_32414__$1;
(statearr_32432_33601[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (25))){
var inst_32404 = (state_32414[(2)]);
var state_32414__$1 = state_32414;
var statearr_32433_33602 = state_32414__$1;
(statearr_32433_33602[(2)] = inst_32404);

(statearr_32433_33602[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (17))){
var inst_32369 = (state_32414[(10)]);
var inst_32378 = cljs.core.first(inst_32369);
var inst_32379 = cljs.core.async.muxch_STAR_(inst_32378);
var inst_32380 = cljs.core.async.close_BANG_(inst_32379);
var inst_32381 = cljs.core.next(inst_32369);
var inst_32355 = inst_32381;
var inst_32356 = null;
var inst_32357 = (0);
var inst_32358 = (0);
var state_32414__$1 = (function (){var statearr_32434 = state_32414;
(statearr_32434[(12)] = inst_32380);

(statearr_32434[(13)] = inst_32357);

(statearr_32434[(14)] = inst_32355);

(statearr_32434[(15)] = inst_32358);

(statearr_32434[(16)] = inst_32356);

return statearr_32434;
})();
var statearr_32435_33604 = state_32414__$1;
(statearr_32435_33604[(2)] = null);

(statearr_32435_33604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (3))){
var inst_32412 = (state_32414[(2)]);
var state_32414__$1 = state_32414;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32414__$1,inst_32412);
} else {
if((state_val_32415 === (12))){
var inst_32389 = (state_32414[(2)]);
var state_32414__$1 = state_32414;
var statearr_32436_33605 = state_32414__$1;
(statearr_32436_33605[(2)] = inst_32389);

(statearr_32436_33605[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (2))){
var state_32414__$1 = state_32414;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32414__$1,(4),ch);
} else {
if((state_val_32415 === (23))){
var state_32414__$1 = state_32414;
var statearr_32437_33607 = state_32414__$1;
(statearr_32437_33607[(2)] = null);

(statearr_32437_33607[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (19))){
var inst_32345 = (state_32414[(8)]);
var inst_32395 = (state_32414[(11)]);
var inst_32397 = cljs.core.async.muxch_STAR_(inst_32395);
var state_32414__$1 = state_32414;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32414__$1,(22),inst_32397,inst_32345);
} else {
if((state_val_32415 === (11))){
var inst_32369 = (state_32414[(10)]);
var inst_32355 = (state_32414[(14)]);
var inst_32369__$1 = cljs.core.seq(inst_32355);
var state_32414__$1 = (function (){var statearr_32438 = state_32414;
(statearr_32438[(10)] = inst_32369__$1);

return statearr_32438;
})();
if(inst_32369__$1){
var statearr_32439_33608 = state_32414__$1;
(statearr_32439_33608[(1)] = (13));

} else {
var statearr_32440_33612 = state_32414__$1;
(statearr_32440_33612[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (9))){
var inst_32391 = (state_32414[(2)]);
var state_32414__$1 = state_32414;
var statearr_32441_33613 = state_32414__$1;
(statearr_32441_33613[(2)] = inst_32391);

(statearr_32441_33613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (5))){
var inst_32352 = cljs.core.deref(mults);
var inst_32353 = cljs.core.vals(inst_32352);
var inst_32354 = cljs.core.seq(inst_32353);
var inst_32355 = inst_32354;
var inst_32356 = null;
var inst_32357 = (0);
var inst_32358 = (0);
var state_32414__$1 = (function (){var statearr_32442 = state_32414;
(statearr_32442[(13)] = inst_32357);

(statearr_32442[(14)] = inst_32355);

(statearr_32442[(15)] = inst_32358);

(statearr_32442[(16)] = inst_32356);

return statearr_32442;
})();
var statearr_32443_33621 = state_32414__$1;
(statearr_32443_33621[(2)] = null);

(statearr_32443_33621[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (14))){
var state_32414__$1 = state_32414;
var statearr_32447_33622 = state_32414__$1;
(statearr_32447_33622[(2)] = null);

(statearr_32447_33622[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (16))){
var inst_32369 = (state_32414[(10)]);
var inst_32373 = cljs.core.chunk_first(inst_32369);
var inst_32374 = cljs.core.chunk_rest(inst_32369);
var inst_32375 = cljs.core.count(inst_32373);
var inst_32355 = inst_32374;
var inst_32356 = inst_32373;
var inst_32357 = inst_32375;
var inst_32358 = (0);
var state_32414__$1 = (function (){var statearr_32448 = state_32414;
(statearr_32448[(13)] = inst_32357);

(statearr_32448[(14)] = inst_32355);

(statearr_32448[(15)] = inst_32358);

(statearr_32448[(16)] = inst_32356);

return statearr_32448;
})();
var statearr_32449_33623 = state_32414__$1;
(statearr_32449_33623[(2)] = null);

(statearr_32449_33623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (10))){
var inst_32357 = (state_32414[(13)]);
var inst_32355 = (state_32414[(14)]);
var inst_32358 = (state_32414[(15)]);
var inst_32356 = (state_32414[(16)]);
var inst_32363 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32356,inst_32358);
var inst_32364 = cljs.core.async.muxch_STAR_(inst_32363);
var inst_32365 = cljs.core.async.close_BANG_(inst_32364);
var inst_32366 = (inst_32358 + (1));
var tmp32444 = inst_32357;
var tmp32445 = inst_32355;
var tmp32446 = inst_32356;
var inst_32355__$1 = tmp32445;
var inst_32356__$1 = tmp32446;
var inst_32357__$1 = tmp32444;
var inst_32358__$1 = inst_32366;
var state_32414__$1 = (function (){var statearr_32450 = state_32414;
(statearr_32450[(13)] = inst_32357__$1);

(statearr_32450[(14)] = inst_32355__$1);

(statearr_32450[(15)] = inst_32358__$1);

(statearr_32450[(17)] = inst_32365);

(statearr_32450[(16)] = inst_32356__$1);

return statearr_32450;
})();
var statearr_32451_33630 = state_32414__$1;
(statearr_32451_33630[(2)] = null);

(statearr_32451_33630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (18))){
var inst_32384 = (state_32414[(2)]);
var state_32414__$1 = state_32414;
var statearr_32452_33631 = state_32414__$1;
(statearr_32452_33631[(2)] = inst_32384);

(statearr_32452_33631[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (8))){
var inst_32357 = (state_32414[(13)]);
var inst_32358 = (state_32414[(15)]);
var inst_32360 = (inst_32358 < inst_32357);
var inst_32361 = inst_32360;
var state_32414__$1 = state_32414;
if(cljs.core.truth_(inst_32361)){
var statearr_32453_33632 = state_32414__$1;
(statearr_32453_33632[(1)] = (10));

} else {
var statearr_32454_33633 = state_32414__$1;
(statearr_32454_33633[(1)] = (11));

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
});})(c__31479__auto___33586,mults,ensure_mult,p))
;
return ((function (switch__31378__auto__,c__31479__auto___33586,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31379__auto__ = null;
var cljs$core$async$state_machine__31379__auto____0 = (function (){
var statearr_32455 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32455[(0)] = cljs$core$async$state_machine__31379__auto__);

(statearr_32455[(1)] = (1));

return statearr_32455;
});
var cljs$core$async$state_machine__31379__auto____1 = (function (state_32414){
while(true){
var ret_value__31380__auto__ = (function (){try{while(true){
var result__31381__auto__ = switch__31378__auto__(state_32414);
if(cljs.core.keyword_identical_QMARK_(result__31381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31381__auto__;
}
break;
}
}catch (e32456){if((e32456 instanceof Object)){
var ex__31382__auto__ = e32456;
var statearr_32457_33637 = state_32414;
(statearr_32457_33637[(5)] = ex__31382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33638 = state_32414;
state_32414 = G__33638;
continue;
} else {
return ret_value__31380__auto__;
}
break;
}
});
cljs$core$async$state_machine__31379__auto__ = function(state_32414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31379__auto____1.call(this,state_32414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31379__auto____0;
cljs$core$async$state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31379__auto____1;
return cljs$core$async$state_machine__31379__auto__;
})()
;})(switch__31378__auto__,c__31479__auto___33586,mults,ensure_mult,p))
})();
var state__31481__auto__ = (function (){var statearr_32458 = (f__31480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31480__auto__.cljs$core$IFn$_invoke$arity$0() : f__31480__auto__.call(null));
(statearr_32458[(6)] = c__31479__auto___33586);

return statearr_32458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31481__auto__);
});})(c__31479__auto___33586,mults,ensure_mult,p))
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
var G__32460 = arguments.length;
switch (G__32460) {
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
var G__32462 = arguments.length;
switch (G__32462) {
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
var G__32464 = arguments.length;
switch (G__32464) {
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
var c__31479__auto___33658 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31479__auto___33658,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31480__auto__ = (function (){var switch__31378__auto__ = ((function (c__31479__auto___33658,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32503){
var state_val_32504 = (state_32503[(1)]);
if((state_val_32504 === (7))){
var state_32503__$1 = state_32503;
var statearr_32505_33659 = state_32503__$1;
(statearr_32505_33659[(2)] = null);

(statearr_32505_33659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (1))){
var state_32503__$1 = state_32503;
var statearr_32506_33660 = state_32503__$1;
(statearr_32506_33660[(2)] = null);

(statearr_32506_33660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (4))){
var inst_32467 = (state_32503[(7)]);
var inst_32469 = (inst_32467 < cnt);
var state_32503__$1 = state_32503;
if(cljs.core.truth_(inst_32469)){
var statearr_32507_33661 = state_32503__$1;
(statearr_32507_33661[(1)] = (6));

} else {
var statearr_32508_33662 = state_32503__$1;
(statearr_32508_33662[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (15))){
var inst_32499 = (state_32503[(2)]);
var state_32503__$1 = state_32503;
var statearr_32509_33663 = state_32503__$1;
(statearr_32509_33663[(2)] = inst_32499);

(statearr_32509_33663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (13))){
var inst_32492 = cljs.core.async.close_BANG_(out);
var state_32503__$1 = state_32503;
var statearr_32510_33670 = state_32503__$1;
(statearr_32510_33670[(2)] = inst_32492);

(statearr_32510_33670[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (6))){
var state_32503__$1 = state_32503;
var statearr_32511_33671 = state_32503__$1;
(statearr_32511_33671[(2)] = null);

(statearr_32511_33671[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (3))){
var inst_32501 = (state_32503[(2)]);
var state_32503__$1 = state_32503;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32503__$1,inst_32501);
} else {
if((state_val_32504 === (12))){
var inst_32489 = (state_32503[(8)]);
var inst_32489__$1 = (state_32503[(2)]);
var inst_32490 = cljs.core.some(cljs.core.nil_QMARK_,inst_32489__$1);
var state_32503__$1 = (function (){var statearr_32512 = state_32503;
(statearr_32512[(8)] = inst_32489__$1);

return statearr_32512;
})();
if(cljs.core.truth_(inst_32490)){
var statearr_32513_33672 = state_32503__$1;
(statearr_32513_33672[(1)] = (13));

} else {
var statearr_32514_33673 = state_32503__$1;
(statearr_32514_33673[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (2))){
var inst_32466 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32467 = (0);
var state_32503__$1 = (function (){var statearr_32515 = state_32503;
(statearr_32515[(7)] = inst_32467);

(statearr_32515[(9)] = inst_32466);

return statearr_32515;
})();
var statearr_32516_33674 = state_32503__$1;
(statearr_32516_33674[(2)] = null);

(statearr_32516_33674[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (11))){
var inst_32467 = (state_32503[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_32503,(10),Object,null,(9));
var inst_32476 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32467) : chs__$1.call(null,inst_32467));
var inst_32477 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32467) : done.call(null,inst_32467));
var inst_32478 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32476,inst_32477);
var state_32503__$1 = state_32503;
var statearr_32517_33675 = state_32503__$1;
(statearr_32517_33675[(2)] = inst_32478);


cljs.core.async.impl.ioc_helpers.process_exception(state_32503__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (9))){
var inst_32467 = (state_32503[(7)]);
var inst_32480 = (state_32503[(2)]);
var inst_32481 = (inst_32467 + (1));
var inst_32467__$1 = inst_32481;
var state_32503__$1 = (function (){var statearr_32518 = state_32503;
(statearr_32518[(7)] = inst_32467__$1);

(statearr_32518[(10)] = inst_32480);

return statearr_32518;
})();
var statearr_32519_33676 = state_32503__$1;
(statearr_32519_33676[(2)] = null);

(statearr_32519_33676[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (5))){
var inst_32487 = (state_32503[(2)]);
var state_32503__$1 = (function (){var statearr_32520 = state_32503;
(statearr_32520[(11)] = inst_32487);

return statearr_32520;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32503__$1,(12),dchan);
} else {
if((state_val_32504 === (14))){
var inst_32489 = (state_32503[(8)]);
var inst_32494 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32489);
var state_32503__$1 = state_32503;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32503__$1,(16),out,inst_32494);
} else {
if((state_val_32504 === (16))){
var inst_32496 = (state_32503[(2)]);
var state_32503__$1 = (function (){var statearr_32521 = state_32503;
(statearr_32521[(12)] = inst_32496);

return statearr_32521;
})();
var statearr_32522_33683 = state_32503__$1;
(statearr_32522_33683[(2)] = null);

(statearr_32522_33683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (10))){
var inst_32471 = (state_32503[(2)]);
var inst_32472 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32503__$1 = (function (){var statearr_32523 = state_32503;
(statearr_32523[(13)] = inst_32471);

return statearr_32523;
})();
var statearr_32524_33684 = state_32503__$1;
(statearr_32524_33684[(2)] = inst_32472);


cljs.core.async.impl.ioc_helpers.process_exception(state_32503__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (8))){
var inst_32485 = (state_32503[(2)]);
var state_32503__$1 = state_32503;
var statearr_32525_33685 = state_32503__$1;
(statearr_32525_33685[(2)] = inst_32485);

(statearr_32525_33685[(1)] = (5));


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
});})(c__31479__auto___33658,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31378__auto__,c__31479__auto___33658,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31379__auto__ = null;
var cljs$core$async$state_machine__31379__auto____0 = (function (){
var statearr_32526 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32526[(0)] = cljs$core$async$state_machine__31379__auto__);

(statearr_32526[(1)] = (1));

return statearr_32526;
});
var cljs$core$async$state_machine__31379__auto____1 = (function (state_32503){
while(true){
var ret_value__31380__auto__ = (function (){try{while(true){
var result__31381__auto__ = switch__31378__auto__(state_32503);
if(cljs.core.keyword_identical_QMARK_(result__31381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31381__auto__;
}
break;
}
}catch (e32527){if((e32527 instanceof Object)){
var ex__31382__auto__ = e32527;
var statearr_32528_33686 = state_32503;
(statearr_32528_33686[(5)] = ex__31382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32527;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33687 = state_32503;
state_32503 = G__33687;
continue;
} else {
return ret_value__31380__auto__;
}
break;
}
});
cljs$core$async$state_machine__31379__auto__ = function(state_32503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31379__auto____1.call(this,state_32503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31379__auto____0;
cljs$core$async$state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31379__auto____1;
return cljs$core$async$state_machine__31379__auto__;
})()
;})(switch__31378__auto__,c__31479__auto___33658,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31481__auto__ = (function (){var statearr_32529 = (f__31480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31480__auto__.cljs$core$IFn$_invoke$arity$0() : f__31480__auto__.call(null));
(statearr_32529[(6)] = c__31479__auto___33658);

return statearr_32529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31481__auto__);
});})(c__31479__auto___33658,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__32532 = arguments.length;
switch (G__32532) {
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
var c__31479__auto___33695 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31479__auto___33695,out){
return (function (){
var f__31480__auto__ = (function (){var switch__31378__auto__ = ((function (c__31479__auto___33695,out){
return (function (state_32564){
var state_val_32565 = (state_32564[(1)]);
if((state_val_32565 === (7))){
var inst_32543 = (state_32564[(7)]);
var inst_32544 = (state_32564[(8)]);
var inst_32543__$1 = (state_32564[(2)]);
var inst_32544__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32543__$1,(0),null);
var inst_32545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32543__$1,(1),null);
var inst_32546 = (inst_32544__$1 == null);
var state_32564__$1 = (function (){var statearr_32566 = state_32564;
(statearr_32566[(9)] = inst_32545);

(statearr_32566[(7)] = inst_32543__$1);

(statearr_32566[(8)] = inst_32544__$1);

return statearr_32566;
})();
if(cljs.core.truth_(inst_32546)){
var statearr_32567_33696 = state_32564__$1;
(statearr_32567_33696[(1)] = (8));

} else {
var statearr_32568_33697 = state_32564__$1;
(statearr_32568_33697[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32565 === (1))){
var inst_32533 = cljs.core.vec(chs);
var inst_32534 = inst_32533;
var state_32564__$1 = (function (){var statearr_32569 = state_32564;
(statearr_32569[(10)] = inst_32534);

return statearr_32569;
})();
var statearr_32570_33698 = state_32564__$1;
(statearr_32570_33698[(2)] = null);

(statearr_32570_33698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32565 === (4))){
var inst_32534 = (state_32564[(10)]);
var state_32564__$1 = state_32564;
return cljs.core.async.ioc_alts_BANG_(state_32564__$1,(7),inst_32534);
} else {
if((state_val_32565 === (6))){
var inst_32560 = (state_32564[(2)]);
var state_32564__$1 = state_32564;
var statearr_32571_33699 = state_32564__$1;
(statearr_32571_33699[(2)] = inst_32560);

(statearr_32571_33699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32565 === (3))){
var inst_32562 = (state_32564[(2)]);
var state_32564__$1 = state_32564;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32564__$1,inst_32562);
} else {
if((state_val_32565 === (2))){
var inst_32534 = (state_32564[(10)]);
var inst_32536 = cljs.core.count(inst_32534);
var inst_32537 = (inst_32536 > (0));
var state_32564__$1 = state_32564;
if(cljs.core.truth_(inst_32537)){
var statearr_32573_33700 = state_32564__$1;
(statearr_32573_33700[(1)] = (4));

} else {
var statearr_32574_33701 = state_32564__$1;
(statearr_32574_33701[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32565 === (11))){
var inst_32534 = (state_32564[(10)]);
var inst_32553 = (state_32564[(2)]);
var tmp32572 = inst_32534;
var inst_32534__$1 = tmp32572;
var state_32564__$1 = (function (){var statearr_32575 = state_32564;
(statearr_32575[(10)] = inst_32534__$1);

(statearr_32575[(11)] = inst_32553);

return statearr_32575;
})();
var statearr_32576_33705 = state_32564__$1;
(statearr_32576_33705[(2)] = null);

(statearr_32576_33705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32565 === (9))){
var inst_32544 = (state_32564[(8)]);
var state_32564__$1 = state_32564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32564__$1,(11),out,inst_32544);
} else {
if((state_val_32565 === (5))){
var inst_32558 = cljs.core.async.close_BANG_(out);
var state_32564__$1 = state_32564;
var statearr_32577_33706 = state_32564__$1;
(statearr_32577_33706[(2)] = inst_32558);

(statearr_32577_33706[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32565 === (10))){
var inst_32556 = (state_32564[(2)]);
var state_32564__$1 = state_32564;
var statearr_32578_33707 = state_32564__$1;
(statearr_32578_33707[(2)] = inst_32556);

(statearr_32578_33707[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32565 === (8))){
var inst_32545 = (state_32564[(9)]);
var inst_32534 = (state_32564[(10)]);
var inst_32543 = (state_32564[(7)]);
var inst_32544 = (state_32564[(8)]);
var inst_32548 = (function (){var cs = inst_32534;
var vec__32539 = inst_32543;
var v = inst_32544;
var c = inst_32545;
return ((function (cs,vec__32539,v,c,inst_32545,inst_32534,inst_32543,inst_32544,state_val_32565,c__31479__auto___33695,out){
return (function (p1__32530_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32530_SHARP_);
});
;})(cs,vec__32539,v,c,inst_32545,inst_32534,inst_32543,inst_32544,state_val_32565,c__31479__auto___33695,out))
})();
var inst_32549 = cljs.core.filterv(inst_32548,inst_32534);
var inst_32534__$1 = inst_32549;
var state_32564__$1 = (function (){var statearr_32579 = state_32564;
(statearr_32579[(10)] = inst_32534__$1);

return statearr_32579;
})();
var statearr_32580_33711 = state_32564__$1;
(statearr_32580_33711[(2)] = null);

(statearr_32580_33711[(1)] = (2));


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
});})(c__31479__auto___33695,out))
;
return ((function (switch__31378__auto__,c__31479__auto___33695,out){
return (function() {
var cljs$core$async$state_machine__31379__auto__ = null;
var cljs$core$async$state_machine__31379__auto____0 = (function (){
var statearr_32581 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32581[(0)] = cljs$core$async$state_machine__31379__auto__);

(statearr_32581[(1)] = (1));

return statearr_32581;
});
var cljs$core$async$state_machine__31379__auto____1 = (function (state_32564){
while(true){
var ret_value__31380__auto__ = (function (){try{while(true){
var result__31381__auto__ = switch__31378__auto__(state_32564);
if(cljs.core.keyword_identical_QMARK_(result__31381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31381__auto__;
}
break;
}
}catch (e32582){if((e32582 instanceof Object)){
var ex__31382__auto__ = e32582;
var statearr_32583_33714 = state_32564;
(statearr_32583_33714[(5)] = ex__31382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32582;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33715 = state_32564;
state_32564 = G__33715;
continue;
} else {
return ret_value__31380__auto__;
}
break;
}
});
cljs$core$async$state_machine__31379__auto__ = function(state_32564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31379__auto____1.call(this,state_32564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31379__auto____0;
cljs$core$async$state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31379__auto____1;
return cljs$core$async$state_machine__31379__auto__;
})()
;})(switch__31378__auto__,c__31479__auto___33695,out))
})();
var state__31481__auto__ = (function (){var statearr_32584 = (f__31480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31480__auto__.cljs$core$IFn$_invoke$arity$0() : f__31480__auto__.call(null));
(statearr_32584[(6)] = c__31479__auto___33695);

return statearr_32584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31481__auto__);
});})(c__31479__auto___33695,out))
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
var G__32586 = arguments.length;
switch (G__32586) {
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
var c__31479__auto___33717 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31479__auto___33717,out){
return (function (){
var f__31480__auto__ = (function (){var switch__31378__auto__ = ((function (c__31479__auto___33717,out){
return (function (state_32610){
var state_val_32611 = (state_32610[(1)]);
if((state_val_32611 === (7))){
var inst_32592 = (state_32610[(7)]);
var inst_32592__$1 = (state_32610[(2)]);
var inst_32593 = (inst_32592__$1 == null);
var inst_32594 = cljs.core.not(inst_32593);
var state_32610__$1 = (function (){var statearr_32612 = state_32610;
(statearr_32612[(7)] = inst_32592__$1);

return statearr_32612;
})();
if(inst_32594){
var statearr_32613_33719 = state_32610__$1;
(statearr_32613_33719[(1)] = (8));

} else {
var statearr_32614_33721 = state_32610__$1;
(statearr_32614_33721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (1))){
var inst_32587 = (0);
var state_32610__$1 = (function (){var statearr_32615 = state_32610;
(statearr_32615[(8)] = inst_32587);

return statearr_32615;
})();
var statearr_32616_33722 = state_32610__$1;
(statearr_32616_33722[(2)] = null);

(statearr_32616_33722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (4))){
var state_32610__$1 = state_32610;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32610__$1,(7),ch);
} else {
if((state_val_32611 === (6))){
var inst_32605 = (state_32610[(2)]);
var state_32610__$1 = state_32610;
var statearr_32617_33723 = state_32610__$1;
(statearr_32617_33723[(2)] = inst_32605);

(statearr_32617_33723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (3))){
var inst_32607 = (state_32610[(2)]);
var inst_32608 = cljs.core.async.close_BANG_(out);
var state_32610__$1 = (function (){var statearr_32618 = state_32610;
(statearr_32618[(9)] = inst_32607);

return statearr_32618;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32610__$1,inst_32608);
} else {
if((state_val_32611 === (2))){
var inst_32587 = (state_32610[(8)]);
var inst_32589 = (inst_32587 < n);
var state_32610__$1 = state_32610;
if(cljs.core.truth_(inst_32589)){
var statearr_32619_33724 = state_32610__$1;
(statearr_32619_33724[(1)] = (4));

} else {
var statearr_32620_33725 = state_32610__$1;
(statearr_32620_33725[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (11))){
var inst_32587 = (state_32610[(8)]);
var inst_32597 = (state_32610[(2)]);
var inst_32598 = (inst_32587 + (1));
var inst_32587__$1 = inst_32598;
var state_32610__$1 = (function (){var statearr_32621 = state_32610;
(statearr_32621[(10)] = inst_32597);

(statearr_32621[(8)] = inst_32587__$1);

return statearr_32621;
})();
var statearr_32622_33729 = state_32610__$1;
(statearr_32622_33729[(2)] = null);

(statearr_32622_33729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (9))){
var state_32610__$1 = state_32610;
var statearr_32623_33730 = state_32610__$1;
(statearr_32623_33730[(2)] = null);

(statearr_32623_33730[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (5))){
var state_32610__$1 = state_32610;
var statearr_32624_33737 = state_32610__$1;
(statearr_32624_33737[(2)] = null);

(statearr_32624_33737[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (10))){
var inst_32602 = (state_32610[(2)]);
var state_32610__$1 = state_32610;
var statearr_32625_33738 = state_32610__$1;
(statearr_32625_33738[(2)] = inst_32602);

(statearr_32625_33738[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (8))){
var inst_32592 = (state_32610[(7)]);
var state_32610__$1 = state_32610;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32610__$1,(11),out,inst_32592);
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
});})(c__31479__auto___33717,out))
;
return ((function (switch__31378__auto__,c__31479__auto___33717,out){
return (function() {
var cljs$core$async$state_machine__31379__auto__ = null;
var cljs$core$async$state_machine__31379__auto____0 = (function (){
var statearr_32626 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32626[(0)] = cljs$core$async$state_machine__31379__auto__);

(statearr_32626[(1)] = (1));

return statearr_32626;
});
var cljs$core$async$state_machine__31379__auto____1 = (function (state_32610){
while(true){
var ret_value__31380__auto__ = (function (){try{while(true){
var result__31381__auto__ = switch__31378__auto__(state_32610);
if(cljs.core.keyword_identical_QMARK_(result__31381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31381__auto__;
}
break;
}
}catch (e32627){if((e32627 instanceof Object)){
var ex__31382__auto__ = e32627;
var statearr_32628_33741 = state_32610;
(statearr_32628_33741[(5)] = ex__31382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32627;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33743 = state_32610;
state_32610 = G__33743;
continue;
} else {
return ret_value__31380__auto__;
}
break;
}
});
cljs$core$async$state_machine__31379__auto__ = function(state_32610){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31379__auto____1.call(this,state_32610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31379__auto____0;
cljs$core$async$state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31379__auto____1;
return cljs$core$async$state_machine__31379__auto__;
})()
;})(switch__31378__auto__,c__31479__auto___33717,out))
})();
var state__31481__auto__ = (function (){var statearr_32629 = (f__31480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31480__auto__.cljs$core$IFn$_invoke$arity$0() : f__31480__auto__.call(null));
(statearr_32629[(6)] = c__31479__auto___33717);

return statearr_32629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31481__auto__);
});})(c__31479__auto___33717,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32631 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32631 = (function (f,ch,meta32632){
this.f = f;
this.ch = ch;
this.meta32632 = meta32632;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32633,meta32632__$1){
var self__ = this;
var _32633__$1 = this;
return (new cljs.core.async.t_cljs$core$async32631(self__.f,self__.ch,meta32632__$1));
});

cljs.core.async.t_cljs$core$async32631.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32633){
var self__ = this;
var _32633__$1 = this;
return self__.meta32632;
});

cljs.core.async.t_cljs$core$async32631.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32631.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32631.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32631.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32631.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32634 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32634 = (function (f,ch,meta32632,_,fn1,meta32635){
this.f = f;
this.ch = ch;
this.meta32632 = meta32632;
this._ = _;
this.fn1 = fn1;
this.meta32635 = meta32635;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32636,meta32635__$1){
var self__ = this;
var _32636__$1 = this;
return (new cljs.core.async.t_cljs$core$async32634(self__.f,self__.ch,self__.meta32632,self__._,self__.fn1,meta32635__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32634.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32636){
var self__ = this;
var _32636__$1 = this;
return self__.meta32635;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32634.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32634.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32634.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32634.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32630_SHARP_){
var G__32637 = (((p1__32630_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32630_SHARP_) : self__.f.call(null,p1__32630_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32637) : f1.call(null,G__32637));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32634.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32632","meta32632",155573223,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32631","cljs.core.async/t_cljs$core$async32631",1836747757,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32635","meta32635",-1420870163,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32634.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32634.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32634";

cljs.core.async.t_cljs$core$async32634.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32634");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32634.
 */
cljs.core.async.__GT_t_cljs$core$async32634 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32634(f__$1,ch__$1,meta32632__$1,___$2,fn1__$1,meta32635){
return (new cljs.core.async.t_cljs$core$async32634(f__$1,ch__$1,meta32632__$1,___$2,fn1__$1,meta32635));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32634(self__.f,self__.ch,self__.meta32632,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32638 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32638) : self__.f.call(null,G__32638));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32631.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32631.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32631.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32632","meta32632",155573223,null)], null);
});

cljs.core.async.t_cljs$core$async32631.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32631.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32631";

cljs.core.async.t_cljs$core$async32631.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32631");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32631.
 */
cljs.core.async.__GT_t_cljs$core$async32631 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32631(f__$1,ch__$1,meta32632){
return (new cljs.core.async.t_cljs$core$async32631(f__$1,ch__$1,meta32632));
});

}

return (new cljs.core.async.t_cljs$core$async32631(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32639 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32639 = (function (f,ch,meta32640){
this.f = f;
this.ch = ch;
this.meta32640 = meta32640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32641,meta32640__$1){
var self__ = this;
var _32641__$1 = this;
return (new cljs.core.async.t_cljs$core$async32639(self__.f,self__.ch,meta32640__$1));
});

cljs.core.async.t_cljs$core$async32639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32641){
var self__ = this;
var _32641__$1 = this;
return self__.meta32640;
});

cljs.core.async.t_cljs$core$async32639.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32639.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32639.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32639.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32639.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32639.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async32639.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32640","meta32640",384969228,null)], null);
});

cljs.core.async.t_cljs$core$async32639.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32639.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32639";

cljs.core.async.t_cljs$core$async32639.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32639");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32639.
 */
cljs.core.async.__GT_t_cljs$core$async32639 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32639(f__$1,ch__$1,meta32640){
return (new cljs.core.async.t_cljs$core$async32639(f__$1,ch__$1,meta32640));
});

}

return (new cljs.core.async.t_cljs$core$async32639(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32642 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32642 = (function (p,ch,meta32643){
this.p = p;
this.ch = ch;
this.meta32643 = meta32643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32644,meta32643__$1){
var self__ = this;
var _32644__$1 = this;
return (new cljs.core.async.t_cljs$core$async32642(self__.p,self__.ch,meta32643__$1));
});

cljs.core.async.t_cljs$core$async32642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32644){
var self__ = this;
var _32644__$1 = this;
return self__.meta32643;
});

cljs.core.async.t_cljs$core$async32642.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32642.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32642.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32642.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32642.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32642.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32642.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32642.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32643","meta32643",1142679234,null)], null);
});

cljs.core.async.t_cljs$core$async32642.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32642.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32642";

cljs.core.async.t_cljs$core$async32642.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32642");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32642.
 */
cljs.core.async.__GT_t_cljs$core$async32642 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32642(p__$1,ch__$1,meta32643){
return (new cljs.core.async.t_cljs$core$async32642(p__$1,ch__$1,meta32643));
});

}

return (new cljs.core.async.t_cljs$core$async32642(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32646 = arguments.length;
switch (G__32646) {
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
var c__31479__auto___33782 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31479__auto___33782,out){
return (function (){
var f__31480__auto__ = (function (){var switch__31378__auto__ = ((function (c__31479__auto___33782,out){
return (function (state_32667){
var state_val_32668 = (state_32667[(1)]);
if((state_val_32668 === (7))){
var inst_32663 = (state_32667[(2)]);
var state_32667__$1 = state_32667;
var statearr_32669_33783 = state_32667__$1;
(statearr_32669_33783[(2)] = inst_32663);

(statearr_32669_33783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (1))){
var state_32667__$1 = state_32667;
var statearr_32670_33784 = state_32667__$1;
(statearr_32670_33784[(2)] = null);

(statearr_32670_33784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (4))){
var inst_32649 = (state_32667[(7)]);
var inst_32649__$1 = (state_32667[(2)]);
var inst_32650 = (inst_32649__$1 == null);
var state_32667__$1 = (function (){var statearr_32671 = state_32667;
(statearr_32671[(7)] = inst_32649__$1);

return statearr_32671;
})();
if(cljs.core.truth_(inst_32650)){
var statearr_32672_33785 = state_32667__$1;
(statearr_32672_33785[(1)] = (5));

} else {
var statearr_32673_33786 = state_32667__$1;
(statearr_32673_33786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (6))){
var inst_32649 = (state_32667[(7)]);
var inst_32654 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32649) : p.call(null,inst_32649));
var state_32667__$1 = state_32667;
if(cljs.core.truth_(inst_32654)){
var statearr_32674_33787 = state_32667__$1;
(statearr_32674_33787[(1)] = (8));

} else {
var statearr_32675_33788 = state_32667__$1;
(statearr_32675_33788[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (3))){
var inst_32665 = (state_32667[(2)]);
var state_32667__$1 = state_32667;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32667__$1,inst_32665);
} else {
if((state_val_32668 === (2))){
var state_32667__$1 = state_32667;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32667__$1,(4),ch);
} else {
if((state_val_32668 === (11))){
var inst_32657 = (state_32667[(2)]);
var state_32667__$1 = state_32667;
var statearr_32676_33789 = state_32667__$1;
(statearr_32676_33789[(2)] = inst_32657);

(statearr_32676_33789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (9))){
var state_32667__$1 = state_32667;
var statearr_32677_33790 = state_32667__$1;
(statearr_32677_33790[(2)] = null);

(statearr_32677_33790[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (5))){
var inst_32652 = cljs.core.async.close_BANG_(out);
var state_32667__$1 = state_32667;
var statearr_32678_33791 = state_32667__$1;
(statearr_32678_33791[(2)] = inst_32652);

(statearr_32678_33791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (10))){
var inst_32660 = (state_32667[(2)]);
var state_32667__$1 = (function (){var statearr_32679 = state_32667;
(statearr_32679[(8)] = inst_32660);

return statearr_32679;
})();
var statearr_32680_33794 = state_32667__$1;
(statearr_32680_33794[(2)] = null);

(statearr_32680_33794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (8))){
var inst_32649 = (state_32667[(7)]);
var state_32667__$1 = state_32667;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32667__$1,(11),out,inst_32649);
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
});})(c__31479__auto___33782,out))
;
return ((function (switch__31378__auto__,c__31479__auto___33782,out){
return (function() {
var cljs$core$async$state_machine__31379__auto__ = null;
var cljs$core$async$state_machine__31379__auto____0 = (function (){
var statearr_32681 = [null,null,null,null,null,null,null,null,null];
(statearr_32681[(0)] = cljs$core$async$state_machine__31379__auto__);

(statearr_32681[(1)] = (1));

return statearr_32681;
});
var cljs$core$async$state_machine__31379__auto____1 = (function (state_32667){
while(true){
var ret_value__31380__auto__ = (function (){try{while(true){
var result__31381__auto__ = switch__31378__auto__(state_32667);
if(cljs.core.keyword_identical_QMARK_(result__31381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31381__auto__;
}
break;
}
}catch (e32682){if((e32682 instanceof Object)){
var ex__31382__auto__ = e32682;
var statearr_32683_33806 = state_32667;
(statearr_32683_33806[(5)] = ex__31382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32682;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33807 = state_32667;
state_32667 = G__33807;
continue;
} else {
return ret_value__31380__auto__;
}
break;
}
});
cljs$core$async$state_machine__31379__auto__ = function(state_32667){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31379__auto____1.call(this,state_32667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31379__auto____0;
cljs$core$async$state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31379__auto____1;
return cljs$core$async$state_machine__31379__auto__;
})()
;})(switch__31378__auto__,c__31479__auto___33782,out))
})();
var state__31481__auto__ = (function (){var statearr_32684 = (f__31480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31480__auto__.cljs$core$IFn$_invoke$arity$0() : f__31480__auto__.call(null));
(statearr_32684[(6)] = c__31479__auto___33782);

return statearr_32684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31481__auto__);
});})(c__31479__auto___33782,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32686 = arguments.length;
switch (G__32686) {
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
var c__31479__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31479__auto__){
return (function (){
var f__31480__auto__ = (function (){var switch__31378__auto__ = ((function (c__31479__auto__){
return (function (state_32748){
var state_val_32749 = (state_32748[(1)]);
if((state_val_32749 === (7))){
var inst_32744 = (state_32748[(2)]);
var state_32748__$1 = state_32748;
var statearr_32750_33825 = state_32748__$1;
(statearr_32750_33825[(2)] = inst_32744);

(statearr_32750_33825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (20))){
var inst_32714 = (state_32748[(7)]);
var inst_32725 = (state_32748[(2)]);
var inst_32726 = cljs.core.next(inst_32714);
var inst_32700 = inst_32726;
var inst_32701 = null;
var inst_32702 = (0);
var inst_32703 = (0);
var state_32748__$1 = (function (){var statearr_32751 = state_32748;
(statearr_32751[(8)] = inst_32702);

(statearr_32751[(9)] = inst_32701);

(statearr_32751[(10)] = inst_32700);

(statearr_32751[(11)] = inst_32725);

(statearr_32751[(12)] = inst_32703);

return statearr_32751;
})();
var statearr_32752_33827 = state_32748__$1;
(statearr_32752_33827[(2)] = null);

(statearr_32752_33827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (1))){
var state_32748__$1 = state_32748;
var statearr_32753_33830 = state_32748__$1;
(statearr_32753_33830[(2)] = null);

(statearr_32753_33830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (4))){
var inst_32689 = (state_32748[(13)]);
var inst_32689__$1 = (state_32748[(2)]);
var inst_32690 = (inst_32689__$1 == null);
var state_32748__$1 = (function (){var statearr_32754 = state_32748;
(statearr_32754[(13)] = inst_32689__$1);

return statearr_32754;
})();
if(cljs.core.truth_(inst_32690)){
var statearr_32755_33831 = state_32748__$1;
(statearr_32755_33831[(1)] = (5));

} else {
var statearr_32756_33835 = state_32748__$1;
(statearr_32756_33835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (15))){
var state_32748__$1 = state_32748;
var statearr_32760_33836 = state_32748__$1;
(statearr_32760_33836[(2)] = null);

(statearr_32760_33836[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (21))){
var state_32748__$1 = state_32748;
var statearr_32761_33838 = state_32748__$1;
(statearr_32761_33838[(2)] = null);

(statearr_32761_33838[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (13))){
var inst_32702 = (state_32748[(8)]);
var inst_32701 = (state_32748[(9)]);
var inst_32700 = (state_32748[(10)]);
var inst_32703 = (state_32748[(12)]);
var inst_32710 = (state_32748[(2)]);
var inst_32711 = (inst_32703 + (1));
var tmp32757 = inst_32702;
var tmp32758 = inst_32701;
var tmp32759 = inst_32700;
var inst_32700__$1 = tmp32759;
var inst_32701__$1 = tmp32758;
var inst_32702__$1 = tmp32757;
var inst_32703__$1 = inst_32711;
var state_32748__$1 = (function (){var statearr_32762 = state_32748;
(statearr_32762[(8)] = inst_32702__$1);

(statearr_32762[(9)] = inst_32701__$1);

(statearr_32762[(10)] = inst_32700__$1);

(statearr_32762[(12)] = inst_32703__$1);

(statearr_32762[(14)] = inst_32710);

return statearr_32762;
})();
var statearr_32763_33839 = state_32748__$1;
(statearr_32763_33839[(2)] = null);

(statearr_32763_33839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (22))){
var state_32748__$1 = state_32748;
var statearr_32764_33842 = state_32748__$1;
(statearr_32764_33842[(2)] = null);

(statearr_32764_33842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (6))){
var inst_32689 = (state_32748[(13)]);
var inst_32698 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32689) : f.call(null,inst_32689));
var inst_32699 = cljs.core.seq(inst_32698);
var inst_32700 = inst_32699;
var inst_32701 = null;
var inst_32702 = (0);
var inst_32703 = (0);
var state_32748__$1 = (function (){var statearr_32765 = state_32748;
(statearr_32765[(8)] = inst_32702);

(statearr_32765[(9)] = inst_32701);

(statearr_32765[(10)] = inst_32700);

(statearr_32765[(12)] = inst_32703);

return statearr_32765;
})();
var statearr_32766_33844 = state_32748__$1;
(statearr_32766_33844[(2)] = null);

(statearr_32766_33844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (17))){
var inst_32714 = (state_32748[(7)]);
var inst_32718 = cljs.core.chunk_first(inst_32714);
var inst_32719 = cljs.core.chunk_rest(inst_32714);
var inst_32720 = cljs.core.count(inst_32718);
var inst_32700 = inst_32719;
var inst_32701 = inst_32718;
var inst_32702 = inst_32720;
var inst_32703 = (0);
var state_32748__$1 = (function (){var statearr_32767 = state_32748;
(statearr_32767[(8)] = inst_32702);

(statearr_32767[(9)] = inst_32701);

(statearr_32767[(10)] = inst_32700);

(statearr_32767[(12)] = inst_32703);

return statearr_32767;
})();
var statearr_32768_33849 = state_32748__$1;
(statearr_32768_33849[(2)] = null);

(statearr_32768_33849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (3))){
var inst_32746 = (state_32748[(2)]);
var state_32748__$1 = state_32748;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32748__$1,inst_32746);
} else {
if((state_val_32749 === (12))){
var inst_32734 = (state_32748[(2)]);
var state_32748__$1 = state_32748;
var statearr_32769_33850 = state_32748__$1;
(statearr_32769_33850[(2)] = inst_32734);

(statearr_32769_33850[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (2))){
var state_32748__$1 = state_32748;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32748__$1,(4),in$);
} else {
if((state_val_32749 === (23))){
var inst_32742 = (state_32748[(2)]);
var state_32748__$1 = state_32748;
var statearr_32770_33851 = state_32748__$1;
(statearr_32770_33851[(2)] = inst_32742);

(statearr_32770_33851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (19))){
var inst_32729 = (state_32748[(2)]);
var state_32748__$1 = state_32748;
var statearr_32771_33859 = state_32748__$1;
(statearr_32771_33859[(2)] = inst_32729);

(statearr_32771_33859[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (11))){
var inst_32714 = (state_32748[(7)]);
var inst_32700 = (state_32748[(10)]);
var inst_32714__$1 = cljs.core.seq(inst_32700);
var state_32748__$1 = (function (){var statearr_32772 = state_32748;
(statearr_32772[(7)] = inst_32714__$1);

return statearr_32772;
})();
if(inst_32714__$1){
var statearr_32773_33865 = state_32748__$1;
(statearr_32773_33865[(1)] = (14));

} else {
var statearr_32774_33866 = state_32748__$1;
(statearr_32774_33866[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (9))){
var inst_32736 = (state_32748[(2)]);
var inst_32737 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32748__$1 = (function (){var statearr_32775 = state_32748;
(statearr_32775[(15)] = inst_32736);

return statearr_32775;
})();
if(cljs.core.truth_(inst_32737)){
var statearr_32776_33888 = state_32748__$1;
(statearr_32776_33888[(1)] = (21));

} else {
var statearr_32777_33890 = state_32748__$1;
(statearr_32777_33890[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (5))){
var inst_32692 = cljs.core.async.close_BANG_(out);
var state_32748__$1 = state_32748;
var statearr_32778_33891 = state_32748__$1;
(statearr_32778_33891[(2)] = inst_32692);

(statearr_32778_33891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (14))){
var inst_32714 = (state_32748[(7)]);
var inst_32716 = cljs.core.chunked_seq_QMARK_(inst_32714);
var state_32748__$1 = state_32748;
if(inst_32716){
var statearr_32779_33896 = state_32748__$1;
(statearr_32779_33896[(1)] = (17));

} else {
var statearr_32780_33897 = state_32748__$1;
(statearr_32780_33897[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (16))){
var inst_32732 = (state_32748[(2)]);
var state_32748__$1 = state_32748;
var statearr_32781_33898 = state_32748__$1;
(statearr_32781_33898[(2)] = inst_32732);

(statearr_32781_33898[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32749 === (10))){
var inst_32701 = (state_32748[(9)]);
var inst_32703 = (state_32748[(12)]);
var inst_32708 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32701,inst_32703);
var state_32748__$1 = state_32748;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32748__$1,(13),out,inst_32708);
} else {
if((state_val_32749 === (18))){
var inst_32714 = (state_32748[(7)]);
var inst_32723 = cljs.core.first(inst_32714);
var state_32748__$1 = state_32748;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32748__$1,(20),out,inst_32723);
} else {
if((state_val_32749 === (8))){
var inst_32702 = (state_32748[(8)]);
var inst_32703 = (state_32748[(12)]);
var inst_32705 = (inst_32703 < inst_32702);
var inst_32706 = inst_32705;
var state_32748__$1 = state_32748;
if(cljs.core.truth_(inst_32706)){
var statearr_32782_33899 = state_32748__$1;
(statearr_32782_33899[(1)] = (10));

} else {
var statearr_32783_33900 = state_32748__$1;
(statearr_32783_33900[(1)] = (11));

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
});})(c__31479__auto__))
;
return ((function (switch__31378__auto__,c__31479__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31379__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31379__auto____0 = (function (){
var statearr_32784 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32784[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31379__auto__);

(statearr_32784[(1)] = (1));

return statearr_32784;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31379__auto____1 = (function (state_32748){
while(true){
var ret_value__31380__auto__ = (function (){try{while(true){
var result__31381__auto__ = switch__31378__auto__(state_32748);
if(cljs.core.keyword_identical_QMARK_(result__31381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31381__auto__;
}
break;
}
}catch (e32785){if((e32785 instanceof Object)){
var ex__31382__auto__ = e32785;
var statearr_32786_33904 = state_32748;
(statearr_32786_33904[(5)] = ex__31382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32785;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33913 = state_32748;
state_32748 = G__33913;
continue;
} else {
return ret_value__31380__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31379__auto__ = function(state_32748){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31379__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31379__auto____1.call(this,state_32748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31379__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31379__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31379__auto__;
})()
;})(switch__31378__auto__,c__31479__auto__))
})();
var state__31481__auto__ = (function (){var statearr_32787 = (f__31480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31480__auto__.cljs$core$IFn$_invoke$arity$0() : f__31480__auto__.call(null));
(statearr_32787[(6)] = c__31479__auto__);

return statearr_32787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31481__auto__);
});})(c__31479__auto__))
);

return c__31479__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32789 = arguments.length;
switch (G__32789) {
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
var G__32791 = arguments.length;
switch (G__32791) {
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
var G__32793 = arguments.length;
switch (G__32793) {
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
var c__31479__auto___33969 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31479__auto___33969,out){
return (function (){
var f__31480__auto__ = (function (){var switch__31378__auto__ = ((function (c__31479__auto___33969,out){
return (function (state_32817){
var state_val_32818 = (state_32817[(1)]);
if((state_val_32818 === (7))){
var inst_32812 = (state_32817[(2)]);
var state_32817__$1 = state_32817;
var statearr_32819_33970 = state_32817__$1;
(statearr_32819_33970[(2)] = inst_32812);

(statearr_32819_33970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (1))){
var inst_32794 = null;
var state_32817__$1 = (function (){var statearr_32820 = state_32817;
(statearr_32820[(7)] = inst_32794);

return statearr_32820;
})();
var statearr_32821_33971 = state_32817__$1;
(statearr_32821_33971[(2)] = null);

(statearr_32821_33971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (4))){
var inst_32797 = (state_32817[(8)]);
var inst_32797__$1 = (state_32817[(2)]);
var inst_32798 = (inst_32797__$1 == null);
var inst_32799 = cljs.core.not(inst_32798);
var state_32817__$1 = (function (){var statearr_32822 = state_32817;
(statearr_32822[(8)] = inst_32797__$1);

return statearr_32822;
})();
if(inst_32799){
var statearr_32823_33974 = state_32817__$1;
(statearr_32823_33974[(1)] = (5));

} else {
var statearr_32824_33975 = state_32817__$1;
(statearr_32824_33975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (6))){
var state_32817__$1 = state_32817;
var statearr_32825_33977 = state_32817__$1;
(statearr_32825_33977[(2)] = null);

(statearr_32825_33977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (3))){
var inst_32814 = (state_32817[(2)]);
var inst_32815 = cljs.core.async.close_BANG_(out);
var state_32817__$1 = (function (){var statearr_32826 = state_32817;
(statearr_32826[(9)] = inst_32814);

return statearr_32826;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32817__$1,inst_32815);
} else {
if((state_val_32818 === (2))){
var state_32817__$1 = state_32817;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32817__$1,(4),ch);
} else {
if((state_val_32818 === (11))){
var inst_32797 = (state_32817[(8)]);
var inst_32806 = (state_32817[(2)]);
var inst_32794 = inst_32797;
var state_32817__$1 = (function (){var statearr_32827 = state_32817;
(statearr_32827[(10)] = inst_32806);

(statearr_32827[(7)] = inst_32794);

return statearr_32827;
})();
var statearr_32828_33979 = state_32817__$1;
(statearr_32828_33979[(2)] = null);

(statearr_32828_33979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (9))){
var inst_32797 = (state_32817[(8)]);
var state_32817__$1 = state_32817;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32817__$1,(11),out,inst_32797);
} else {
if((state_val_32818 === (5))){
var inst_32794 = (state_32817[(7)]);
var inst_32797 = (state_32817[(8)]);
var inst_32801 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32797,inst_32794);
var state_32817__$1 = state_32817;
if(inst_32801){
var statearr_32830_33980 = state_32817__$1;
(statearr_32830_33980[(1)] = (8));

} else {
var statearr_32831_33981 = state_32817__$1;
(statearr_32831_33981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (10))){
var inst_32809 = (state_32817[(2)]);
var state_32817__$1 = state_32817;
var statearr_32832_33982 = state_32817__$1;
(statearr_32832_33982[(2)] = inst_32809);

(statearr_32832_33982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (8))){
var inst_32794 = (state_32817[(7)]);
var tmp32829 = inst_32794;
var inst_32794__$1 = tmp32829;
var state_32817__$1 = (function (){var statearr_32833 = state_32817;
(statearr_32833[(7)] = inst_32794__$1);

return statearr_32833;
})();
var statearr_32834_33987 = state_32817__$1;
(statearr_32834_33987[(2)] = null);

(statearr_32834_33987[(1)] = (2));


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
});})(c__31479__auto___33969,out))
;
return ((function (switch__31378__auto__,c__31479__auto___33969,out){
return (function() {
var cljs$core$async$state_machine__31379__auto__ = null;
var cljs$core$async$state_machine__31379__auto____0 = (function (){
var statearr_32835 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32835[(0)] = cljs$core$async$state_machine__31379__auto__);

(statearr_32835[(1)] = (1));

return statearr_32835;
});
var cljs$core$async$state_machine__31379__auto____1 = (function (state_32817){
while(true){
var ret_value__31380__auto__ = (function (){try{while(true){
var result__31381__auto__ = switch__31378__auto__(state_32817);
if(cljs.core.keyword_identical_QMARK_(result__31381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31381__auto__;
}
break;
}
}catch (e32836){if((e32836 instanceof Object)){
var ex__31382__auto__ = e32836;
var statearr_32837_33995 = state_32817;
(statearr_32837_33995[(5)] = ex__31382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32836;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34000 = state_32817;
state_32817 = G__34000;
continue;
} else {
return ret_value__31380__auto__;
}
break;
}
});
cljs$core$async$state_machine__31379__auto__ = function(state_32817){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31379__auto____1.call(this,state_32817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31379__auto____0;
cljs$core$async$state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31379__auto____1;
return cljs$core$async$state_machine__31379__auto__;
})()
;})(switch__31378__auto__,c__31479__auto___33969,out))
})();
var state__31481__auto__ = (function (){var statearr_32838 = (f__31480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31480__auto__.cljs$core$IFn$_invoke$arity$0() : f__31480__auto__.call(null));
(statearr_32838[(6)] = c__31479__auto___33969);

return statearr_32838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31481__auto__);
});})(c__31479__auto___33969,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32840 = arguments.length;
switch (G__32840) {
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
var c__31479__auto___34010 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31479__auto___34010,out){
return (function (){
var f__31480__auto__ = (function (){var switch__31378__auto__ = ((function (c__31479__auto___34010,out){
return (function (state_32878){
var state_val_32879 = (state_32878[(1)]);
if((state_val_32879 === (7))){
var inst_32874 = (state_32878[(2)]);
var state_32878__$1 = state_32878;
var statearr_32880_34011 = state_32878__$1;
(statearr_32880_34011[(2)] = inst_32874);

(statearr_32880_34011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (1))){
var inst_32841 = (new Array(n));
var inst_32842 = inst_32841;
var inst_32843 = (0);
var state_32878__$1 = (function (){var statearr_32881 = state_32878;
(statearr_32881[(7)] = inst_32843);

(statearr_32881[(8)] = inst_32842);

return statearr_32881;
})();
var statearr_32882_34013 = state_32878__$1;
(statearr_32882_34013[(2)] = null);

(statearr_32882_34013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (4))){
var inst_32846 = (state_32878[(9)]);
var inst_32846__$1 = (state_32878[(2)]);
var inst_32847 = (inst_32846__$1 == null);
var inst_32848 = cljs.core.not(inst_32847);
var state_32878__$1 = (function (){var statearr_32883 = state_32878;
(statearr_32883[(9)] = inst_32846__$1);

return statearr_32883;
})();
if(inst_32848){
var statearr_32884_34017 = state_32878__$1;
(statearr_32884_34017[(1)] = (5));

} else {
var statearr_32885_34018 = state_32878__$1;
(statearr_32885_34018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (15))){
var inst_32868 = (state_32878[(2)]);
var state_32878__$1 = state_32878;
var statearr_32886_34019 = state_32878__$1;
(statearr_32886_34019[(2)] = inst_32868);

(statearr_32886_34019[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (13))){
var state_32878__$1 = state_32878;
var statearr_32887_34020 = state_32878__$1;
(statearr_32887_34020[(2)] = null);

(statearr_32887_34020[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (6))){
var inst_32843 = (state_32878[(7)]);
var inst_32864 = (inst_32843 > (0));
var state_32878__$1 = state_32878;
if(cljs.core.truth_(inst_32864)){
var statearr_32888_34021 = state_32878__$1;
(statearr_32888_34021[(1)] = (12));

} else {
var statearr_32889_34022 = state_32878__$1;
(statearr_32889_34022[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (3))){
var inst_32876 = (state_32878[(2)]);
var state_32878__$1 = state_32878;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32878__$1,inst_32876);
} else {
if((state_val_32879 === (12))){
var inst_32842 = (state_32878[(8)]);
var inst_32866 = cljs.core.vec(inst_32842);
var state_32878__$1 = state_32878;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32878__$1,(15),out,inst_32866);
} else {
if((state_val_32879 === (2))){
var state_32878__$1 = state_32878;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32878__$1,(4),ch);
} else {
if((state_val_32879 === (11))){
var inst_32858 = (state_32878[(2)]);
var inst_32859 = (new Array(n));
var inst_32842 = inst_32859;
var inst_32843 = (0);
var state_32878__$1 = (function (){var statearr_32890 = state_32878;
(statearr_32890[(7)] = inst_32843);

(statearr_32890[(8)] = inst_32842);

(statearr_32890[(10)] = inst_32858);

return statearr_32890;
})();
var statearr_32891_34086 = state_32878__$1;
(statearr_32891_34086[(2)] = null);

(statearr_32891_34086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (9))){
var inst_32842 = (state_32878[(8)]);
var inst_32856 = cljs.core.vec(inst_32842);
var state_32878__$1 = state_32878;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32878__$1,(11),out,inst_32856);
} else {
if((state_val_32879 === (5))){
var inst_32846 = (state_32878[(9)]);
var inst_32843 = (state_32878[(7)]);
var inst_32842 = (state_32878[(8)]);
var inst_32851 = (state_32878[(11)]);
var inst_32850 = (inst_32842[inst_32843] = inst_32846);
var inst_32851__$1 = (inst_32843 + (1));
var inst_32852 = (inst_32851__$1 < n);
var state_32878__$1 = (function (){var statearr_32892 = state_32878;
(statearr_32892[(12)] = inst_32850);

(statearr_32892[(11)] = inst_32851__$1);

return statearr_32892;
})();
if(cljs.core.truth_(inst_32852)){
var statearr_32893_34088 = state_32878__$1;
(statearr_32893_34088[(1)] = (8));

} else {
var statearr_32894_34089 = state_32878__$1;
(statearr_32894_34089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (14))){
var inst_32871 = (state_32878[(2)]);
var inst_32872 = cljs.core.async.close_BANG_(out);
var state_32878__$1 = (function (){var statearr_32896 = state_32878;
(statearr_32896[(13)] = inst_32871);

return statearr_32896;
})();
var statearr_32897_34094 = state_32878__$1;
(statearr_32897_34094[(2)] = inst_32872);

(statearr_32897_34094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (10))){
var inst_32862 = (state_32878[(2)]);
var state_32878__$1 = state_32878;
var statearr_32898_34096 = state_32878__$1;
(statearr_32898_34096[(2)] = inst_32862);

(statearr_32898_34096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32879 === (8))){
var inst_32842 = (state_32878[(8)]);
var inst_32851 = (state_32878[(11)]);
var tmp32895 = inst_32842;
var inst_32842__$1 = tmp32895;
var inst_32843 = inst_32851;
var state_32878__$1 = (function (){var statearr_32899 = state_32878;
(statearr_32899[(7)] = inst_32843);

(statearr_32899[(8)] = inst_32842__$1);

return statearr_32899;
})();
var statearr_32900_34097 = state_32878__$1;
(statearr_32900_34097[(2)] = null);

(statearr_32900_34097[(1)] = (2));


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
});})(c__31479__auto___34010,out))
;
return ((function (switch__31378__auto__,c__31479__auto___34010,out){
return (function() {
var cljs$core$async$state_machine__31379__auto__ = null;
var cljs$core$async$state_machine__31379__auto____0 = (function (){
var statearr_32901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32901[(0)] = cljs$core$async$state_machine__31379__auto__);

(statearr_32901[(1)] = (1));

return statearr_32901;
});
var cljs$core$async$state_machine__31379__auto____1 = (function (state_32878){
while(true){
var ret_value__31380__auto__ = (function (){try{while(true){
var result__31381__auto__ = switch__31378__auto__(state_32878);
if(cljs.core.keyword_identical_QMARK_(result__31381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31381__auto__;
}
break;
}
}catch (e32902){if((e32902 instanceof Object)){
var ex__31382__auto__ = e32902;
var statearr_32903_34099 = state_32878;
(statearr_32903_34099[(5)] = ex__31382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32902;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34100 = state_32878;
state_32878 = G__34100;
continue;
} else {
return ret_value__31380__auto__;
}
break;
}
});
cljs$core$async$state_machine__31379__auto__ = function(state_32878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31379__auto____1.call(this,state_32878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31379__auto____0;
cljs$core$async$state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31379__auto____1;
return cljs$core$async$state_machine__31379__auto__;
})()
;})(switch__31378__auto__,c__31479__auto___34010,out))
})();
var state__31481__auto__ = (function (){var statearr_32904 = (f__31480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31480__auto__.cljs$core$IFn$_invoke$arity$0() : f__31480__auto__.call(null));
(statearr_32904[(6)] = c__31479__auto___34010);

return statearr_32904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31481__auto__);
});})(c__31479__auto___34010,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32906 = arguments.length;
switch (G__32906) {
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
var c__31479__auto___34127 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31479__auto___34127,out){
return (function (){
var f__31480__auto__ = (function (){var switch__31378__auto__ = ((function (c__31479__auto___34127,out){
return (function (state_32948){
var state_val_32949 = (state_32948[(1)]);
if((state_val_32949 === (7))){
var inst_32944 = (state_32948[(2)]);
var state_32948__$1 = state_32948;
var statearr_32950_34128 = state_32948__$1;
(statearr_32950_34128[(2)] = inst_32944);

(statearr_32950_34128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (1))){
var inst_32907 = [];
var inst_32908 = inst_32907;
var inst_32909 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32948__$1 = (function (){var statearr_32951 = state_32948;
(statearr_32951[(7)] = inst_32908);

(statearr_32951[(8)] = inst_32909);

return statearr_32951;
})();
var statearr_32952_34129 = state_32948__$1;
(statearr_32952_34129[(2)] = null);

(statearr_32952_34129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (4))){
var inst_32912 = (state_32948[(9)]);
var inst_32912__$1 = (state_32948[(2)]);
var inst_32913 = (inst_32912__$1 == null);
var inst_32914 = cljs.core.not(inst_32913);
var state_32948__$1 = (function (){var statearr_32953 = state_32948;
(statearr_32953[(9)] = inst_32912__$1);

return statearr_32953;
})();
if(inst_32914){
var statearr_32954_34131 = state_32948__$1;
(statearr_32954_34131[(1)] = (5));

} else {
var statearr_32955_34132 = state_32948__$1;
(statearr_32955_34132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (15))){
var inst_32938 = (state_32948[(2)]);
var state_32948__$1 = state_32948;
var statearr_32956_34133 = state_32948__$1;
(statearr_32956_34133[(2)] = inst_32938);

(statearr_32956_34133[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (13))){
var state_32948__$1 = state_32948;
var statearr_32957_34134 = state_32948__$1;
(statearr_32957_34134[(2)] = null);

(statearr_32957_34134[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (6))){
var inst_32908 = (state_32948[(7)]);
var inst_32933 = inst_32908.length;
var inst_32934 = (inst_32933 > (0));
var state_32948__$1 = state_32948;
if(cljs.core.truth_(inst_32934)){
var statearr_32958_34136 = state_32948__$1;
(statearr_32958_34136[(1)] = (12));

} else {
var statearr_32959_34137 = state_32948__$1;
(statearr_32959_34137[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (3))){
var inst_32946 = (state_32948[(2)]);
var state_32948__$1 = state_32948;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32948__$1,inst_32946);
} else {
if((state_val_32949 === (12))){
var inst_32908 = (state_32948[(7)]);
var inst_32936 = cljs.core.vec(inst_32908);
var state_32948__$1 = state_32948;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32948__$1,(15),out,inst_32936);
} else {
if((state_val_32949 === (2))){
var state_32948__$1 = state_32948;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32948__$1,(4),ch);
} else {
if((state_val_32949 === (11))){
var inst_32916 = (state_32948[(10)]);
var inst_32912 = (state_32948[(9)]);
var inst_32926 = (state_32948[(2)]);
var inst_32927 = [];
var inst_32928 = inst_32927.push(inst_32912);
var inst_32908 = inst_32927;
var inst_32909 = inst_32916;
var state_32948__$1 = (function (){var statearr_32960 = state_32948;
(statearr_32960[(7)] = inst_32908);

(statearr_32960[(11)] = inst_32928);

(statearr_32960[(8)] = inst_32909);

(statearr_32960[(12)] = inst_32926);

return statearr_32960;
})();
var statearr_32961_34138 = state_32948__$1;
(statearr_32961_34138[(2)] = null);

(statearr_32961_34138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (9))){
var inst_32908 = (state_32948[(7)]);
var inst_32924 = cljs.core.vec(inst_32908);
var state_32948__$1 = state_32948;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32948__$1,(11),out,inst_32924);
} else {
if((state_val_32949 === (5))){
var inst_32909 = (state_32948[(8)]);
var inst_32916 = (state_32948[(10)]);
var inst_32912 = (state_32948[(9)]);
var inst_32916__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32912) : f.call(null,inst_32912));
var inst_32917 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32916__$1,inst_32909);
var inst_32918 = cljs.core.keyword_identical_QMARK_(inst_32909,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32919 = ((inst_32917) || (inst_32918));
var state_32948__$1 = (function (){var statearr_32962 = state_32948;
(statearr_32962[(10)] = inst_32916__$1);

return statearr_32962;
})();
if(cljs.core.truth_(inst_32919)){
var statearr_32963_34145 = state_32948__$1;
(statearr_32963_34145[(1)] = (8));

} else {
var statearr_32964_34146 = state_32948__$1;
(statearr_32964_34146[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (14))){
var inst_32941 = (state_32948[(2)]);
var inst_32942 = cljs.core.async.close_BANG_(out);
var state_32948__$1 = (function (){var statearr_32966 = state_32948;
(statearr_32966[(13)] = inst_32941);

return statearr_32966;
})();
var statearr_32967_34147 = state_32948__$1;
(statearr_32967_34147[(2)] = inst_32942);

(statearr_32967_34147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (10))){
var inst_32931 = (state_32948[(2)]);
var state_32948__$1 = state_32948;
var statearr_32968_34149 = state_32948__$1;
(statearr_32968_34149[(2)] = inst_32931);

(statearr_32968_34149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (8))){
var inst_32908 = (state_32948[(7)]);
var inst_32916 = (state_32948[(10)]);
var inst_32912 = (state_32948[(9)]);
var inst_32921 = inst_32908.push(inst_32912);
var tmp32965 = inst_32908;
var inst_32908__$1 = tmp32965;
var inst_32909 = inst_32916;
var state_32948__$1 = (function (){var statearr_32969 = state_32948;
(statearr_32969[(14)] = inst_32921);

(statearr_32969[(7)] = inst_32908__$1);

(statearr_32969[(8)] = inst_32909);

return statearr_32969;
})();
var statearr_32970_34151 = state_32948__$1;
(statearr_32970_34151[(2)] = null);

(statearr_32970_34151[(1)] = (2));


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
});})(c__31479__auto___34127,out))
;
return ((function (switch__31378__auto__,c__31479__auto___34127,out){
return (function() {
var cljs$core$async$state_machine__31379__auto__ = null;
var cljs$core$async$state_machine__31379__auto____0 = (function (){
var statearr_32971 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32971[(0)] = cljs$core$async$state_machine__31379__auto__);

(statearr_32971[(1)] = (1));

return statearr_32971;
});
var cljs$core$async$state_machine__31379__auto____1 = (function (state_32948){
while(true){
var ret_value__31380__auto__ = (function (){try{while(true){
var result__31381__auto__ = switch__31378__auto__(state_32948);
if(cljs.core.keyword_identical_QMARK_(result__31381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31381__auto__;
}
break;
}
}catch (e32972){if((e32972 instanceof Object)){
var ex__31382__auto__ = e32972;
var statearr_32973_34154 = state_32948;
(statearr_32973_34154[(5)] = ex__31382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32972;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34155 = state_32948;
state_32948 = G__34155;
continue;
} else {
return ret_value__31380__auto__;
}
break;
}
});
cljs$core$async$state_machine__31379__auto__ = function(state_32948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31379__auto____1.call(this,state_32948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31379__auto____0;
cljs$core$async$state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31379__auto____1;
return cljs$core$async$state_machine__31379__auto__;
})()
;})(switch__31378__auto__,c__31479__auto___34127,out))
})();
var state__31481__auto__ = (function (){var statearr_32974 = (f__31480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31480__auto__.cljs$core$IFn$_invoke$arity$0() : f__31480__auto__.call(null));
(statearr_32974[(6)] = c__31479__auto___34127);

return statearr_32974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31481__auto__);
});})(c__31479__auto___34127,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
