// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__13351 = arguments.length;
switch (G__13351) {
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
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13352 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13352 = (function (f,blockable,meta13353){
this.f = f;
this.blockable = blockable;
this.meta13353 = meta13353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13354,meta13353__$1){
var self__ = this;
var _13354__$1 = this;
return (new cljs.core.async.t_cljs$core$async13352(self__.f,self__.blockable,meta13353__$1));
});

cljs.core.async.t_cljs$core$async13352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13354){
var self__ = this;
var _13354__$1 = this;
return self__.meta13353;
});

cljs.core.async.t_cljs$core$async13352.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13352.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13352.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async13352.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async13352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13353","meta13353",1140867791,null)], null);
});

cljs.core.async.t_cljs$core$async13352.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13352";

cljs.core.async.t_cljs$core$async13352.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async13352");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13352.
 */
cljs.core.async.__GT_t_cljs$core$async13352 = (function cljs$core$async$__GT_t_cljs$core$async13352(f__$1,blockable__$1,meta13353){
return (new cljs.core.async.t_cljs$core$async13352(f__$1,blockable__$1,meta13353));
});

}

return (new cljs.core.async.t_cljs$core$async13352(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
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
var G__13358 = arguments.length;
switch (G__13358) {
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
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
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
var G__13361 = arguments.length;
switch (G__13361) {
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
var G__13364 = arguments.length;
switch (G__13364) {
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
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_13366 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_13366);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_13366,ret){
return (function (){
return fn1.call(null,val_13366);
});})(val_13366,ret))
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
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__13368 = arguments.length;
switch (G__13368) {
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
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
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
var n__4607__auto___13370 = n;
var x_13371 = (0);
while(true){
if((x_13371 < n__4607__auto___13370)){
(a[x_13371] = x_13371);

var G__13372 = (x_13371 + (1));
x_13371 = G__13372;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13373 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13373 = (function (flag,meta13374){
this.flag = flag;
this.meta13374 = meta13374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13375,meta13374__$1){
var self__ = this;
var _13375__$1 = this;
return (new cljs.core.async.t_cljs$core$async13373(self__.flag,meta13374__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async13373.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13375){
var self__ = this;
var _13375__$1 = this;
return self__.meta13374;
});})(flag))
;

cljs.core.async.t_cljs$core$async13373.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13373.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async13373.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13373.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13373.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13374","meta13374",1418810678,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async13373.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13373.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13373";

cljs.core.async.t_cljs$core$async13373.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async13373");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13373.
 */
cljs.core.async.__GT_t_cljs$core$async13373 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13373(flag__$1,meta13374){
return (new cljs.core.async.t_cljs$core$async13373(flag__$1,meta13374));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async13373(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13376 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13376 = (function (flag,cb,meta13377){
this.flag = flag;
this.cb = cb;
this.meta13377 = meta13377;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13378,meta13377__$1){
var self__ = this;
var _13378__$1 = this;
return (new cljs.core.async.t_cljs$core$async13376(self__.flag,self__.cb,meta13377__$1));
});

cljs.core.async.t_cljs$core$async13376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13378){
var self__ = this;
var _13378__$1 = this;
return self__.meta13377;
});

cljs.core.async.t_cljs$core$async13376.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13376.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async13376.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13376.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async13376.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13377","meta13377",1001016997,null)], null);
});

cljs.core.async.t_cljs$core$async13376.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13376.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13376";

cljs.core.async.t_cljs$core$async13376.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async13376");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13376.
 */
cljs.core.async.__GT_t_cljs$core$async13376 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13376(flag__$1,cb__$1,meta13377){
return (new cljs.core.async.t_cljs$core$async13376(flag__$1,cb__$1,meta13377));
});

}

return (new cljs.core.async.t_cljs$core$async13376(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

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
return (function (p1__13379_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13379_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13380_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13380_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__13381 = (i + (1));
i = G__13381;
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
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
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
var args__4736__auto__ = [];
var len__4730__auto___13387 = arguments.length;
var i__4731__auto___13388 = (0);
while(true){
if((i__4731__auto___13388 < len__4730__auto___13387)){
args__4736__auto__.push((arguments[i__4731__auto___13388]));

var G__13389 = (i__4731__auto___13388 + (1));
i__4731__auto___13388 = G__13389;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13384){
var map__13385 = p__13384;
var map__13385__$1 = (((((!((map__13385 == null))))?(((((map__13385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13385):map__13385);
var opts = map__13385__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13382){
var G__13383 = cljs.core.first.call(null,seq13382);
var seq13382__$1 = cljs.core.next.call(null,seq13382);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13383,seq13382__$1);
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
var G__13391 = arguments.length;
switch (G__13391) {
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
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13291__auto___13438 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13291__auto___13438){
return (function (){
var f__13292__auto__ = (function (){var switch__13217__auto__ = ((function (c__13291__auto___13438){
return (function (state_13415){
var state_val_13416 = (state_13415[(1)]);
if((state_val_13416 === (7))){
var inst_13411 = (state_13415[(2)]);
var state_13415__$1 = state_13415;
var statearr_13417_13439 = state_13415__$1;
(statearr_13417_13439[(2)] = inst_13411);

(statearr_13417_13439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13416 === (1))){
var state_13415__$1 = state_13415;
var statearr_13418_13440 = state_13415__$1;
(statearr_13418_13440[(2)] = null);

(statearr_13418_13440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13416 === (4))){
var inst_13394 = (state_13415[(7)]);
var inst_13394__$1 = (state_13415[(2)]);
var inst_13395 = (inst_13394__$1 == null);
var state_13415__$1 = (function (){var statearr_13419 = state_13415;
(statearr_13419[(7)] = inst_13394__$1);

return statearr_13419;
})();
if(cljs.core.truth_(inst_13395)){
var statearr_13420_13441 = state_13415__$1;
(statearr_13420_13441[(1)] = (5));

} else {
var statearr_13421_13442 = state_13415__$1;
(statearr_13421_13442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13416 === (13))){
var state_13415__$1 = state_13415;
var statearr_13422_13443 = state_13415__$1;
(statearr_13422_13443[(2)] = null);

(statearr_13422_13443[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13416 === (6))){
var inst_13394 = (state_13415[(7)]);
var state_13415__$1 = state_13415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13415__$1,(11),to,inst_13394);
} else {
if((state_val_13416 === (3))){
var inst_13413 = (state_13415[(2)]);
var state_13415__$1 = state_13415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13415__$1,inst_13413);
} else {
if((state_val_13416 === (12))){
var state_13415__$1 = state_13415;
var statearr_13423_13444 = state_13415__$1;
(statearr_13423_13444[(2)] = null);

(statearr_13423_13444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13416 === (2))){
var state_13415__$1 = state_13415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13415__$1,(4),from);
} else {
if((state_val_13416 === (11))){
var inst_13404 = (state_13415[(2)]);
var state_13415__$1 = state_13415;
if(cljs.core.truth_(inst_13404)){
var statearr_13424_13445 = state_13415__$1;
(statearr_13424_13445[(1)] = (12));

} else {
var statearr_13425_13446 = state_13415__$1;
(statearr_13425_13446[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13416 === (9))){
var state_13415__$1 = state_13415;
var statearr_13426_13447 = state_13415__$1;
(statearr_13426_13447[(2)] = null);

(statearr_13426_13447[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13416 === (5))){
var state_13415__$1 = state_13415;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13427_13448 = state_13415__$1;
(statearr_13427_13448[(1)] = (8));

} else {
var statearr_13428_13449 = state_13415__$1;
(statearr_13428_13449[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13416 === (14))){
var inst_13409 = (state_13415[(2)]);
var state_13415__$1 = state_13415;
var statearr_13429_13450 = state_13415__$1;
(statearr_13429_13450[(2)] = inst_13409);

(statearr_13429_13450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13416 === (10))){
var inst_13401 = (state_13415[(2)]);
var state_13415__$1 = state_13415;
var statearr_13430_13451 = state_13415__$1;
(statearr_13430_13451[(2)] = inst_13401);

(statearr_13430_13451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13416 === (8))){
var inst_13398 = cljs.core.async.close_BANG_.call(null,to);
var state_13415__$1 = state_13415;
var statearr_13431_13452 = state_13415__$1;
(statearr_13431_13452[(2)] = inst_13398);

(statearr_13431_13452[(1)] = (10));


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
});})(c__13291__auto___13438))
;
return ((function (switch__13217__auto__,c__13291__auto___13438){
return (function() {
var cljs$core$async$state_machine__13218__auto__ = null;
var cljs$core$async$state_machine__13218__auto____0 = (function (){
var statearr_13432 = [null,null,null,null,null,null,null,null];
(statearr_13432[(0)] = cljs$core$async$state_machine__13218__auto__);

(statearr_13432[(1)] = (1));

return statearr_13432;
});
var cljs$core$async$state_machine__13218__auto____1 = (function (state_13415){
while(true){
var ret_value__13219__auto__ = (function (){try{while(true){
var result__13220__auto__ = switch__13217__auto__.call(null,state_13415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13220__auto__;
}
break;
}
}catch (e13433){var ex__13221__auto__ = e13433;
var statearr_13434_13453 = state_13415;
(statearr_13434_13453[(2)] = ex__13221__auto__);


if(cljs.core.seq.call(null,(state_13415[(4)]))){
var statearr_13435_13454 = state_13415;
(statearr_13435_13454[(1)] = cljs.core.first.call(null,(state_13415[(4)])));

} else {
throw ex__13221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13455 = state_13415;
state_13415 = G__13455;
continue;
} else {
return ret_value__13219__auto__;
}
break;
}
});
cljs$core$async$state_machine__13218__auto__ = function(state_13415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13218__auto____1.call(this,state_13415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13218__auto____0;
cljs$core$async$state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13218__auto____1;
return cljs$core$async$state_machine__13218__auto__;
})()
;})(switch__13217__auto__,c__13291__auto___13438))
})();
var state__13293__auto__ = (function (){var statearr_13436 = f__13292__auto__.call(null);
(statearr_13436[(6)] = c__13291__auto___13438);

return statearr_13436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13293__auto__);
});})(c__13291__auto___13438))
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
return (function (p__13456){
var vec__13457 = p__13456;
var v = cljs.core.nth.call(null,vec__13457,(0),null);
var p = cljs.core.nth.call(null,vec__13457,(1),null);
var job = vec__13457;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__13291__auto___13633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13291__auto___13633,res,vec__13457,v,p,job,jobs,results){
return (function (){
var f__13292__auto__ = (function (){var switch__13217__auto__ = ((function (c__13291__auto___13633,res,vec__13457,v,p,job,jobs,results){
return (function (state_13464){
var state_val_13465 = (state_13464[(1)]);
if((state_val_13465 === (1))){
var state_13464__$1 = state_13464;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13464__$1,(2),res,v);
} else {
if((state_val_13465 === (2))){
var inst_13461 = (state_13464[(2)]);
var inst_13462 = cljs.core.async.close_BANG_.call(null,res);
var state_13464__$1 = (function (){var statearr_13466 = state_13464;
(statearr_13466[(7)] = inst_13461);

return statearr_13466;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13464__$1,inst_13462);
} else {
return null;
}
}
});})(c__13291__auto___13633,res,vec__13457,v,p,job,jobs,results))
;
return ((function (switch__13217__auto__,c__13291__auto___13633,res,vec__13457,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13218__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13218__auto____0 = (function (){
var statearr_13467 = [null,null,null,null,null,null,null,null];
(statearr_13467[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13218__auto__);

(statearr_13467[(1)] = (1));

return statearr_13467;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13218__auto____1 = (function (state_13464){
while(true){
var ret_value__13219__auto__ = (function (){try{while(true){
var result__13220__auto__ = switch__13217__auto__.call(null,state_13464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13220__auto__;
}
break;
}
}catch (e13468){var ex__13221__auto__ = e13468;
var statearr_13469_13634 = state_13464;
(statearr_13469_13634[(2)] = ex__13221__auto__);


if(cljs.core.seq.call(null,(state_13464[(4)]))){
var statearr_13470_13635 = state_13464;
(statearr_13470_13635[(1)] = cljs.core.first.call(null,(state_13464[(4)])));

} else {
throw ex__13221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13636 = state_13464;
state_13464 = G__13636;
continue;
} else {
return ret_value__13219__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13218__auto__ = function(state_13464){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13218__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13218__auto____1.call(this,state_13464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13218__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13218__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13218__auto__;
})()
;})(switch__13217__auto__,c__13291__auto___13633,res,vec__13457,v,p,job,jobs,results))
})();
var state__13293__auto__ = (function (){var statearr_13471 = f__13292__auto__.call(null);
(statearr_13471[(6)] = c__13291__auto___13633);

return statearr_13471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13293__auto__);
});})(c__13291__auto___13633,res,vec__13457,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13472){
var vec__13473 = p__13472;
var v = cljs.core.nth.call(null,vec__13473,(0),null);
var p = cljs.core.nth.call(null,vec__13473,(1),null);
var job = vec__13473;
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
var n__4607__auto___13637 = n;
var __13638 = (0);
while(true){
if((__13638 < n__4607__auto___13637)){
var G__13476_13639 = type;
var G__13476_13640__$1 = (((G__13476_13639 instanceof cljs.core.Keyword))?G__13476_13639.fqn:null);
switch (G__13476_13640__$1) {
case "compute":
var c__13291__auto___13642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13638,c__13291__auto___13642,G__13476_13639,G__13476_13640__$1,n__4607__auto___13637,jobs,results,process,async){
return (function (){
var f__13292__auto__ = (function (){var switch__13217__auto__ = ((function (__13638,c__13291__auto___13642,G__13476_13639,G__13476_13640__$1,n__4607__auto___13637,jobs,results,process,async){
return (function (state_13489){
var state_val_13490 = (state_13489[(1)]);
if((state_val_13490 === (1))){
var state_13489__$1 = state_13489;
var statearr_13491_13643 = state_13489__$1;
(statearr_13491_13643[(2)] = null);

(statearr_13491_13643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13490 === (2))){
var state_13489__$1 = state_13489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13489__$1,(4),jobs);
} else {
if((state_val_13490 === (3))){
var inst_13487 = (state_13489[(2)]);
var state_13489__$1 = state_13489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13489__$1,inst_13487);
} else {
if((state_val_13490 === (4))){
var inst_13479 = (state_13489[(2)]);
var inst_13480 = process.call(null,inst_13479);
var state_13489__$1 = state_13489;
if(cljs.core.truth_(inst_13480)){
var statearr_13492_13644 = state_13489__$1;
(statearr_13492_13644[(1)] = (5));

} else {
var statearr_13493_13645 = state_13489__$1;
(statearr_13493_13645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13490 === (5))){
var state_13489__$1 = state_13489;
var statearr_13494_13646 = state_13489__$1;
(statearr_13494_13646[(2)] = null);

(statearr_13494_13646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13490 === (6))){
var state_13489__$1 = state_13489;
var statearr_13495_13647 = state_13489__$1;
(statearr_13495_13647[(2)] = null);

(statearr_13495_13647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13490 === (7))){
var inst_13485 = (state_13489[(2)]);
var state_13489__$1 = state_13489;
var statearr_13496_13648 = state_13489__$1;
(statearr_13496_13648[(2)] = inst_13485);

(statearr_13496_13648[(1)] = (3));


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
});})(__13638,c__13291__auto___13642,G__13476_13639,G__13476_13640__$1,n__4607__auto___13637,jobs,results,process,async))
;
return ((function (__13638,switch__13217__auto__,c__13291__auto___13642,G__13476_13639,G__13476_13640__$1,n__4607__auto___13637,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13218__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13218__auto____0 = (function (){
var statearr_13497 = [null,null,null,null,null,null,null];
(statearr_13497[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13218__auto__);

(statearr_13497[(1)] = (1));

return statearr_13497;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13218__auto____1 = (function (state_13489){
while(true){
var ret_value__13219__auto__ = (function (){try{while(true){
var result__13220__auto__ = switch__13217__auto__.call(null,state_13489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13220__auto__;
}
break;
}
}catch (e13498){var ex__13221__auto__ = e13498;
var statearr_13499_13649 = state_13489;
(statearr_13499_13649[(2)] = ex__13221__auto__);


if(cljs.core.seq.call(null,(state_13489[(4)]))){
var statearr_13500_13650 = state_13489;
(statearr_13500_13650[(1)] = cljs.core.first.call(null,(state_13489[(4)])));

} else {
throw ex__13221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13651 = state_13489;
state_13489 = G__13651;
continue;
} else {
return ret_value__13219__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13218__auto__ = function(state_13489){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13218__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13218__auto____1.call(this,state_13489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13218__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13218__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13218__auto__;
})()
;})(__13638,switch__13217__auto__,c__13291__auto___13642,G__13476_13639,G__13476_13640__$1,n__4607__auto___13637,jobs,results,process,async))
})();
var state__13293__auto__ = (function (){var statearr_13501 = f__13292__auto__.call(null);
(statearr_13501[(6)] = c__13291__auto___13642);

return statearr_13501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13293__auto__);
});})(__13638,c__13291__auto___13642,G__13476_13639,G__13476_13640__$1,n__4607__auto___13637,jobs,results,process,async))
);


break;
case "async":
var c__13291__auto___13652 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13638,c__13291__auto___13652,G__13476_13639,G__13476_13640__$1,n__4607__auto___13637,jobs,results,process,async){
return (function (){
var f__13292__auto__ = (function (){var switch__13217__auto__ = ((function (__13638,c__13291__auto___13652,G__13476_13639,G__13476_13640__$1,n__4607__auto___13637,jobs,results,process,async){
return (function (state_13514){
var state_val_13515 = (state_13514[(1)]);
if((state_val_13515 === (1))){
var state_13514__$1 = state_13514;
var statearr_13516_13653 = state_13514__$1;
(statearr_13516_13653[(2)] = null);

(statearr_13516_13653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13515 === (2))){
var state_13514__$1 = state_13514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13514__$1,(4),jobs);
} else {
if((state_val_13515 === (3))){
var inst_13512 = (state_13514[(2)]);
var state_13514__$1 = state_13514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13514__$1,inst_13512);
} else {
if((state_val_13515 === (4))){
var inst_13504 = (state_13514[(2)]);
var inst_13505 = async.call(null,inst_13504);
var state_13514__$1 = state_13514;
if(cljs.core.truth_(inst_13505)){
var statearr_13517_13654 = state_13514__$1;
(statearr_13517_13654[(1)] = (5));

} else {
var statearr_13518_13655 = state_13514__$1;
(statearr_13518_13655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13515 === (5))){
var state_13514__$1 = state_13514;
var statearr_13519_13656 = state_13514__$1;
(statearr_13519_13656[(2)] = null);

(statearr_13519_13656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13515 === (6))){
var state_13514__$1 = state_13514;
var statearr_13520_13657 = state_13514__$1;
(statearr_13520_13657[(2)] = null);

(statearr_13520_13657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13515 === (7))){
var inst_13510 = (state_13514[(2)]);
var state_13514__$1 = state_13514;
var statearr_13521_13658 = state_13514__$1;
(statearr_13521_13658[(2)] = inst_13510);

(statearr_13521_13658[(1)] = (3));


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
});})(__13638,c__13291__auto___13652,G__13476_13639,G__13476_13640__$1,n__4607__auto___13637,jobs,results,process,async))
;
return ((function (__13638,switch__13217__auto__,c__13291__auto___13652,G__13476_13639,G__13476_13640__$1,n__4607__auto___13637,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13218__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13218__auto____0 = (function (){
var statearr_13522 = [null,null,null,null,null,null,null];
(statearr_13522[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13218__auto__);

(statearr_13522[(1)] = (1));

return statearr_13522;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13218__auto____1 = (function (state_13514){
while(true){
var ret_value__13219__auto__ = (function (){try{while(true){
var result__13220__auto__ = switch__13217__auto__.call(null,state_13514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13220__auto__;
}
break;
}
}catch (e13523){var ex__13221__auto__ = e13523;
var statearr_13524_13659 = state_13514;
(statearr_13524_13659[(2)] = ex__13221__auto__);


if(cljs.core.seq.call(null,(state_13514[(4)]))){
var statearr_13525_13660 = state_13514;
(statearr_13525_13660[(1)] = cljs.core.first.call(null,(state_13514[(4)])));

} else {
throw ex__13221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13661 = state_13514;
state_13514 = G__13661;
continue;
} else {
return ret_value__13219__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13218__auto__ = function(state_13514){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13218__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13218__auto____1.call(this,state_13514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13218__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13218__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13218__auto__;
})()
;})(__13638,switch__13217__auto__,c__13291__auto___13652,G__13476_13639,G__13476_13640__$1,n__4607__auto___13637,jobs,results,process,async))
})();
var state__13293__auto__ = (function (){var statearr_13526 = f__13292__auto__.call(null);
(statearr_13526[(6)] = c__13291__auto___13652);

return statearr_13526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13293__auto__);
});})(__13638,c__13291__auto___13652,G__13476_13639,G__13476_13640__$1,n__4607__auto___13637,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13476_13640__$1)].join('')));

}

var G__13662 = (__13638 + (1));
__13638 = G__13662;
continue;
} else {
}
break;
}

var c__13291__auto___13663 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13291__auto___13663,jobs,results,process,async){
return (function (){
var f__13292__auto__ = (function (){var switch__13217__auto__ = ((function (c__13291__auto___13663,jobs,results,process,async){
return (function (state_13548){
var state_val_13549 = (state_13548[(1)]);
if((state_val_13549 === (1))){
var state_13548__$1 = state_13548;
var statearr_13550_13664 = state_13548__$1;
(statearr_13550_13664[(2)] = null);

(statearr_13550_13664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13549 === (2))){
var state_13548__$1 = state_13548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13548__$1,(4),from);
} else {
if((state_val_13549 === (3))){
var inst_13546 = (state_13548[(2)]);
var state_13548__$1 = state_13548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13548__$1,inst_13546);
} else {
if((state_val_13549 === (4))){
var inst_13529 = (state_13548[(7)]);
var inst_13529__$1 = (state_13548[(2)]);
var inst_13530 = (inst_13529__$1 == null);
var state_13548__$1 = (function (){var statearr_13551 = state_13548;
(statearr_13551[(7)] = inst_13529__$1);

return statearr_13551;
})();
if(cljs.core.truth_(inst_13530)){
var statearr_13552_13665 = state_13548__$1;
(statearr_13552_13665[(1)] = (5));

} else {
var statearr_13553_13666 = state_13548__$1;
(statearr_13553_13666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13549 === (5))){
var inst_13532 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13548__$1 = state_13548;
var statearr_13554_13667 = state_13548__$1;
(statearr_13554_13667[(2)] = inst_13532);

(statearr_13554_13667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13549 === (6))){
var inst_13534 = (state_13548[(8)]);
var inst_13529 = (state_13548[(7)]);
var inst_13534__$1 = cljs.core.async.chan.call(null,(1));
var inst_13535 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13536 = [inst_13529,inst_13534__$1];
var inst_13537 = (new cljs.core.PersistentVector(null,2,(5),inst_13535,inst_13536,null));
var state_13548__$1 = (function (){var statearr_13555 = state_13548;
(statearr_13555[(8)] = inst_13534__$1);

return statearr_13555;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13548__$1,(8),jobs,inst_13537);
} else {
if((state_val_13549 === (7))){
var inst_13544 = (state_13548[(2)]);
var state_13548__$1 = state_13548;
var statearr_13556_13668 = state_13548__$1;
(statearr_13556_13668[(2)] = inst_13544);

(statearr_13556_13668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13549 === (8))){
var inst_13534 = (state_13548[(8)]);
var inst_13539 = (state_13548[(2)]);
var state_13548__$1 = (function (){var statearr_13557 = state_13548;
(statearr_13557[(9)] = inst_13539);

return statearr_13557;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13548__$1,(9),results,inst_13534);
} else {
if((state_val_13549 === (9))){
var inst_13541 = (state_13548[(2)]);
var state_13548__$1 = (function (){var statearr_13558 = state_13548;
(statearr_13558[(10)] = inst_13541);

return statearr_13558;
})();
var statearr_13559_13669 = state_13548__$1;
(statearr_13559_13669[(2)] = null);

(statearr_13559_13669[(1)] = (2));


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
});})(c__13291__auto___13663,jobs,results,process,async))
;
return ((function (switch__13217__auto__,c__13291__auto___13663,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13218__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13218__auto____0 = (function (){
var statearr_13560 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13560[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13218__auto__);

(statearr_13560[(1)] = (1));

return statearr_13560;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13218__auto____1 = (function (state_13548){
while(true){
var ret_value__13219__auto__ = (function (){try{while(true){
var result__13220__auto__ = switch__13217__auto__.call(null,state_13548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13220__auto__;
}
break;
}
}catch (e13561){var ex__13221__auto__ = e13561;
var statearr_13562_13670 = state_13548;
(statearr_13562_13670[(2)] = ex__13221__auto__);


if(cljs.core.seq.call(null,(state_13548[(4)]))){
var statearr_13563_13671 = state_13548;
(statearr_13563_13671[(1)] = cljs.core.first.call(null,(state_13548[(4)])));

} else {
throw ex__13221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13672 = state_13548;
state_13548 = G__13672;
continue;
} else {
return ret_value__13219__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13218__auto__ = function(state_13548){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13218__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13218__auto____1.call(this,state_13548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13218__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13218__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13218__auto__;
})()
;})(switch__13217__auto__,c__13291__auto___13663,jobs,results,process,async))
})();
var state__13293__auto__ = (function (){var statearr_13564 = f__13292__auto__.call(null);
(statearr_13564[(6)] = c__13291__auto___13663);

return statearr_13564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13293__auto__);
});})(c__13291__auto___13663,jobs,results,process,async))
);


var c__13291__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13291__auto__,jobs,results,process,async){
return (function (){
var f__13292__auto__ = (function (){var switch__13217__auto__ = ((function (c__13291__auto__,jobs,results,process,async){
return (function (state_13602){
var state_val_13603 = (state_13602[(1)]);
if((state_val_13603 === (7))){
var inst_13598 = (state_13602[(2)]);
var state_13602__$1 = state_13602;
var statearr_13604_13673 = state_13602__$1;
(statearr_13604_13673[(2)] = inst_13598);

(statearr_13604_13673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13603 === (20))){
var state_13602__$1 = state_13602;
var statearr_13605_13674 = state_13602__$1;
(statearr_13605_13674[(2)] = null);

(statearr_13605_13674[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13603 === (1))){
var state_13602__$1 = state_13602;
var statearr_13606_13675 = state_13602__$1;
(statearr_13606_13675[(2)] = null);

(statearr_13606_13675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13603 === (4))){
var inst_13567 = (state_13602[(7)]);
var inst_13567__$1 = (state_13602[(2)]);
var inst_13568 = (inst_13567__$1 == null);
var state_13602__$1 = (function (){var statearr_13607 = state_13602;
(statearr_13607[(7)] = inst_13567__$1);

return statearr_13607;
})();
if(cljs.core.truth_(inst_13568)){
var statearr_13608_13676 = state_13602__$1;
(statearr_13608_13676[(1)] = (5));

} else {
var statearr_13609_13677 = state_13602__$1;
(statearr_13609_13677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13603 === (15))){
var inst_13580 = (state_13602[(8)]);
var state_13602__$1 = state_13602;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13602__$1,(18),to,inst_13580);
} else {
if((state_val_13603 === (21))){
var inst_13593 = (state_13602[(2)]);
var state_13602__$1 = state_13602;
var statearr_13610_13678 = state_13602__$1;
(statearr_13610_13678[(2)] = inst_13593);

(statearr_13610_13678[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13603 === (13))){
var inst_13595 = (state_13602[(2)]);
var state_13602__$1 = (function (){var statearr_13611 = state_13602;
(statearr_13611[(9)] = inst_13595);

return statearr_13611;
})();
var statearr_13612_13679 = state_13602__$1;
(statearr_13612_13679[(2)] = null);

(statearr_13612_13679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13603 === (6))){
var inst_13567 = (state_13602[(7)]);
var state_13602__$1 = state_13602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13602__$1,(11),inst_13567);
} else {
if((state_val_13603 === (17))){
var inst_13588 = (state_13602[(2)]);
var state_13602__$1 = state_13602;
if(cljs.core.truth_(inst_13588)){
var statearr_13613_13680 = state_13602__$1;
(statearr_13613_13680[(1)] = (19));

} else {
var statearr_13614_13681 = state_13602__$1;
(statearr_13614_13681[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13603 === (3))){
var inst_13600 = (state_13602[(2)]);
var state_13602__$1 = state_13602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13602__$1,inst_13600);
} else {
if((state_val_13603 === (12))){
var inst_13577 = (state_13602[(10)]);
var state_13602__$1 = state_13602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13602__$1,(14),inst_13577);
} else {
if((state_val_13603 === (2))){
var state_13602__$1 = state_13602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13602__$1,(4),results);
} else {
if((state_val_13603 === (19))){
var state_13602__$1 = state_13602;
var statearr_13615_13682 = state_13602__$1;
(statearr_13615_13682[(2)] = null);

(statearr_13615_13682[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13603 === (11))){
var inst_13577 = (state_13602[(2)]);
var state_13602__$1 = (function (){var statearr_13616 = state_13602;
(statearr_13616[(10)] = inst_13577);

return statearr_13616;
})();
var statearr_13617_13683 = state_13602__$1;
(statearr_13617_13683[(2)] = null);

(statearr_13617_13683[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13603 === (9))){
var state_13602__$1 = state_13602;
var statearr_13618_13684 = state_13602__$1;
(statearr_13618_13684[(2)] = null);

(statearr_13618_13684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13603 === (5))){
var state_13602__$1 = state_13602;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13619_13685 = state_13602__$1;
(statearr_13619_13685[(1)] = (8));

} else {
var statearr_13620_13686 = state_13602__$1;
(statearr_13620_13686[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13603 === (14))){
var inst_13582 = (state_13602[(11)]);
var inst_13580 = (state_13602[(8)]);
var inst_13580__$1 = (state_13602[(2)]);
var inst_13581 = (inst_13580__$1 == null);
var inst_13582__$1 = cljs.core.not.call(null,inst_13581);
var state_13602__$1 = (function (){var statearr_13621 = state_13602;
(statearr_13621[(11)] = inst_13582__$1);

(statearr_13621[(8)] = inst_13580__$1);

return statearr_13621;
})();
if(inst_13582__$1){
var statearr_13622_13687 = state_13602__$1;
(statearr_13622_13687[(1)] = (15));

} else {
var statearr_13623_13688 = state_13602__$1;
(statearr_13623_13688[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13603 === (16))){
var inst_13582 = (state_13602[(11)]);
var state_13602__$1 = state_13602;
var statearr_13624_13689 = state_13602__$1;
(statearr_13624_13689[(2)] = inst_13582);

(statearr_13624_13689[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13603 === (10))){
var inst_13574 = (state_13602[(2)]);
var state_13602__$1 = state_13602;
var statearr_13625_13690 = state_13602__$1;
(statearr_13625_13690[(2)] = inst_13574);

(statearr_13625_13690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13603 === (18))){
var inst_13585 = (state_13602[(2)]);
var state_13602__$1 = state_13602;
var statearr_13626_13691 = state_13602__$1;
(statearr_13626_13691[(2)] = inst_13585);

(statearr_13626_13691[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13603 === (8))){
var inst_13571 = cljs.core.async.close_BANG_.call(null,to);
var state_13602__$1 = state_13602;
var statearr_13627_13692 = state_13602__$1;
(statearr_13627_13692[(2)] = inst_13571);

(statearr_13627_13692[(1)] = (10));


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
});})(c__13291__auto__,jobs,results,process,async))
;
return ((function (switch__13217__auto__,c__13291__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13218__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13218__auto____0 = (function (){
var statearr_13628 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13628[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13218__auto__);

(statearr_13628[(1)] = (1));

return statearr_13628;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13218__auto____1 = (function (state_13602){
while(true){
var ret_value__13219__auto__ = (function (){try{while(true){
var result__13220__auto__ = switch__13217__auto__.call(null,state_13602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13220__auto__;
}
break;
}
}catch (e13629){var ex__13221__auto__ = e13629;
var statearr_13630_13693 = state_13602;
(statearr_13630_13693[(2)] = ex__13221__auto__);


if(cljs.core.seq.call(null,(state_13602[(4)]))){
var statearr_13631_13694 = state_13602;
(statearr_13631_13694[(1)] = cljs.core.first.call(null,(state_13602[(4)])));

} else {
throw ex__13221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13695 = state_13602;
state_13602 = G__13695;
continue;
} else {
return ret_value__13219__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13218__auto__ = function(state_13602){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13218__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13218__auto____1.call(this,state_13602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13218__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13218__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13218__auto__;
})()
;})(switch__13217__auto__,c__13291__auto__,jobs,results,process,async))
})();
var state__13293__auto__ = (function (){var statearr_13632 = f__13292__auto__.call(null);
(statearr_13632[(6)] = c__13291__auto__);

return statearr_13632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13293__auto__);
});})(c__13291__auto__,jobs,results,process,async))
);

return c__13291__auto__;
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
var G__13697 = arguments.length;
switch (G__13697) {
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
var G__13700 = arguments.length;
switch (G__13700) {
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
var G__13703 = arguments.length;
switch (G__13703) {
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
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__13291__auto___13753 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13291__auto___13753,tc,fc){
return (function (){
var f__13292__auto__ = (function (){var switch__13217__auto__ = ((function (c__13291__auto___13753,tc,fc){
return (function (state_13729){
var state_val_13730 = (state_13729[(1)]);
if((state_val_13730 === (7))){
var inst_13725 = (state_13729[(2)]);
var state_13729__$1 = state_13729;
var statearr_13731_13754 = state_13729__$1;
(statearr_13731_13754[(2)] = inst_13725);

(statearr_13731_13754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13730 === (1))){
var state_13729__$1 = state_13729;
var statearr_13732_13755 = state_13729__$1;
(statearr_13732_13755[(2)] = null);

(statearr_13732_13755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13730 === (4))){
var inst_13706 = (state_13729[(7)]);
var inst_13706__$1 = (state_13729[(2)]);
var inst_13707 = (inst_13706__$1 == null);
var state_13729__$1 = (function (){var statearr_13733 = state_13729;
(statearr_13733[(7)] = inst_13706__$1);

return statearr_13733;
})();
if(cljs.core.truth_(inst_13707)){
var statearr_13734_13756 = state_13729__$1;
(statearr_13734_13756[(1)] = (5));

} else {
var statearr_13735_13757 = state_13729__$1;
(statearr_13735_13757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13730 === (13))){
var state_13729__$1 = state_13729;
var statearr_13736_13758 = state_13729__$1;
(statearr_13736_13758[(2)] = null);

(statearr_13736_13758[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13730 === (6))){
var inst_13706 = (state_13729[(7)]);
var inst_13712 = p.call(null,inst_13706);
var state_13729__$1 = state_13729;
if(cljs.core.truth_(inst_13712)){
var statearr_13737_13759 = state_13729__$1;
(statearr_13737_13759[(1)] = (9));

} else {
var statearr_13738_13760 = state_13729__$1;
(statearr_13738_13760[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13730 === (3))){
var inst_13727 = (state_13729[(2)]);
var state_13729__$1 = state_13729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13729__$1,inst_13727);
} else {
if((state_val_13730 === (12))){
var state_13729__$1 = state_13729;
var statearr_13739_13761 = state_13729__$1;
(statearr_13739_13761[(2)] = null);

(statearr_13739_13761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13730 === (2))){
var state_13729__$1 = state_13729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13729__$1,(4),ch);
} else {
if((state_val_13730 === (11))){
var inst_13706 = (state_13729[(7)]);
var inst_13716 = (state_13729[(2)]);
var state_13729__$1 = state_13729;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13729__$1,(8),inst_13716,inst_13706);
} else {
if((state_val_13730 === (9))){
var state_13729__$1 = state_13729;
var statearr_13740_13762 = state_13729__$1;
(statearr_13740_13762[(2)] = tc);

(statearr_13740_13762[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13730 === (5))){
var inst_13709 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13710 = cljs.core.async.close_BANG_.call(null,fc);
var state_13729__$1 = (function (){var statearr_13741 = state_13729;
(statearr_13741[(8)] = inst_13709);

return statearr_13741;
})();
var statearr_13742_13763 = state_13729__$1;
(statearr_13742_13763[(2)] = inst_13710);

(statearr_13742_13763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13730 === (14))){
var inst_13723 = (state_13729[(2)]);
var state_13729__$1 = state_13729;
var statearr_13743_13764 = state_13729__$1;
(statearr_13743_13764[(2)] = inst_13723);

(statearr_13743_13764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13730 === (10))){
var state_13729__$1 = state_13729;
var statearr_13744_13765 = state_13729__$1;
(statearr_13744_13765[(2)] = fc);

(statearr_13744_13765[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13730 === (8))){
var inst_13718 = (state_13729[(2)]);
var state_13729__$1 = state_13729;
if(cljs.core.truth_(inst_13718)){
var statearr_13745_13766 = state_13729__$1;
(statearr_13745_13766[(1)] = (12));

} else {
var statearr_13746_13767 = state_13729__$1;
(statearr_13746_13767[(1)] = (13));

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
});})(c__13291__auto___13753,tc,fc))
;
return ((function (switch__13217__auto__,c__13291__auto___13753,tc,fc){
return (function() {
var cljs$core$async$state_machine__13218__auto__ = null;
var cljs$core$async$state_machine__13218__auto____0 = (function (){
var statearr_13747 = [null,null,null,null,null,null,null,null,null];
(statearr_13747[(0)] = cljs$core$async$state_machine__13218__auto__);

(statearr_13747[(1)] = (1));

return statearr_13747;
});
var cljs$core$async$state_machine__13218__auto____1 = (function (state_13729){
while(true){
var ret_value__13219__auto__ = (function (){try{while(true){
var result__13220__auto__ = switch__13217__auto__.call(null,state_13729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13220__auto__;
}
break;
}
}catch (e13748){var ex__13221__auto__ = e13748;
var statearr_13749_13768 = state_13729;
(statearr_13749_13768[(2)] = ex__13221__auto__);


if(cljs.core.seq.call(null,(state_13729[(4)]))){
var statearr_13750_13769 = state_13729;
(statearr_13750_13769[(1)] = cljs.core.first.call(null,(state_13729[(4)])));

} else {
throw ex__13221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13770 = state_13729;
state_13729 = G__13770;
continue;
} else {
return ret_value__13219__auto__;
}
break;
}
});
cljs$core$async$state_machine__13218__auto__ = function(state_13729){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13218__auto____1.call(this,state_13729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13218__auto____0;
cljs$core$async$state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13218__auto____1;
return cljs$core$async$state_machine__13218__auto__;
})()
;})(switch__13217__auto__,c__13291__auto___13753,tc,fc))
})();
var state__13293__auto__ = (function (){var statearr_13751 = f__13292__auto__.call(null);
(statearr_13751[(6)] = c__13291__auto___13753);

return statearr_13751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13293__auto__);
});})(c__13291__auto___13753,tc,fc))
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
var c__13291__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13291__auto__){
return (function (){
var f__13292__auto__ = (function (){var switch__13217__auto__ = ((function (c__13291__auto__){
return (function (state_13792){
var state_val_13793 = (state_13792[(1)]);
if((state_val_13793 === (7))){
var inst_13788 = (state_13792[(2)]);
var state_13792__$1 = state_13792;
var statearr_13794_13813 = state_13792__$1;
(statearr_13794_13813[(2)] = inst_13788);

(statearr_13794_13813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13793 === (1))){
var inst_13771 = init;
var inst_13772 = inst_13771;
var state_13792__$1 = (function (){var statearr_13795 = state_13792;
(statearr_13795[(7)] = inst_13772);

return statearr_13795;
})();
var statearr_13796_13814 = state_13792__$1;
(statearr_13796_13814[(2)] = null);

(statearr_13796_13814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13793 === (4))){
var inst_13775 = (state_13792[(8)]);
var inst_13775__$1 = (state_13792[(2)]);
var inst_13776 = (inst_13775__$1 == null);
var state_13792__$1 = (function (){var statearr_13797 = state_13792;
(statearr_13797[(8)] = inst_13775__$1);

return statearr_13797;
})();
if(cljs.core.truth_(inst_13776)){
var statearr_13798_13815 = state_13792__$1;
(statearr_13798_13815[(1)] = (5));

} else {
var statearr_13799_13816 = state_13792__$1;
(statearr_13799_13816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13793 === (6))){
var inst_13772 = (state_13792[(7)]);
var inst_13775 = (state_13792[(8)]);
var inst_13779 = (state_13792[(9)]);
var inst_13779__$1 = f.call(null,inst_13772,inst_13775);
var inst_13780 = cljs.core.reduced_QMARK_.call(null,inst_13779__$1);
var state_13792__$1 = (function (){var statearr_13800 = state_13792;
(statearr_13800[(9)] = inst_13779__$1);

return statearr_13800;
})();
if(inst_13780){
var statearr_13801_13817 = state_13792__$1;
(statearr_13801_13817[(1)] = (8));

} else {
var statearr_13802_13818 = state_13792__$1;
(statearr_13802_13818[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13793 === (3))){
var inst_13790 = (state_13792[(2)]);
var state_13792__$1 = state_13792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13792__$1,inst_13790);
} else {
if((state_val_13793 === (2))){
var state_13792__$1 = state_13792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13792__$1,(4),ch);
} else {
if((state_val_13793 === (9))){
var inst_13779 = (state_13792[(9)]);
var inst_13772 = inst_13779;
var state_13792__$1 = (function (){var statearr_13803 = state_13792;
(statearr_13803[(7)] = inst_13772);

return statearr_13803;
})();
var statearr_13804_13819 = state_13792__$1;
(statearr_13804_13819[(2)] = null);

(statearr_13804_13819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13793 === (5))){
var inst_13772 = (state_13792[(7)]);
var state_13792__$1 = state_13792;
var statearr_13805_13820 = state_13792__$1;
(statearr_13805_13820[(2)] = inst_13772);

(statearr_13805_13820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13793 === (10))){
var inst_13786 = (state_13792[(2)]);
var state_13792__$1 = state_13792;
var statearr_13806_13821 = state_13792__$1;
(statearr_13806_13821[(2)] = inst_13786);

(statearr_13806_13821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13793 === (8))){
var inst_13779 = (state_13792[(9)]);
var inst_13782 = cljs.core.deref.call(null,inst_13779);
var state_13792__$1 = state_13792;
var statearr_13807_13822 = state_13792__$1;
(statearr_13807_13822[(2)] = inst_13782);

(statearr_13807_13822[(1)] = (10));


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
});})(c__13291__auto__))
;
return ((function (switch__13217__auto__,c__13291__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13218__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13218__auto____0 = (function (){
var statearr_13808 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13808[(0)] = cljs$core$async$reduce_$_state_machine__13218__auto__);

(statearr_13808[(1)] = (1));

return statearr_13808;
});
var cljs$core$async$reduce_$_state_machine__13218__auto____1 = (function (state_13792){
while(true){
var ret_value__13219__auto__ = (function (){try{while(true){
var result__13220__auto__ = switch__13217__auto__.call(null,state_13792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13220__auto__;
}
break;
}
}catch (e13809){var ex__13221__auto__ = e13809;
var statearr_13810_13823 = state_13792;
(statearr_13810_13823[(2)] = ex__13221__auto__);


if(cljs.core.seq.call(null,(state_13792[(4)]))){
var statearr_13811_13824 = state_13792;
(statearr_13811_13824[(1)] = cljs.core.first.call(null,(state_13792[(4)])));

} else {
throw ex__13221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13825 = state_13792;
state_13792 = G__13825;
continue;
} else {
return ret_value__13219__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13218__auto__ = function(state_13792){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13218__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13218__auto____1.call(this,state_13792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13218__auto____0;
cljs$core$async$reduce_$_state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13218__auto____1;
return cljs$core$async$reduce_$_state_machine__13218__auto__;
})()
;})(switch__13217__auto__,c__13291__auto__))
})();
var state__13293__auto__ = (function (){var statearr_13812 = f__13292__auto__.call(null);
(statearr_13812[(6)] = c__13291__auto__);

return statearr_13812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13293__auto__);
});})(c__13291__auto__))
);

return c__13291__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__13291__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13291__auto__,f__$1){
return (function (){
var f__13292__auto__ = (function (){var switch__13217__auto__ = ((function (c__13291__auto__,f__$1){
return (function (state_13831){
var state_val_13832 = (state_13831[(1)]);
if((state_val_13832 === (1))){
var inst_13826 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_13831__$1 = state_13831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13831__$1,(2),inst_13826);
} else {
if((state_val_13832 === (2))){
var inst_13828 = (state_13831[(2)]);
var inst_13829 = f__$1.call(null,inst_13828);
var state_13831__$1 = state_13831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13831__$1,inst_13829);
} else {
return null;
}
}
});})(c__13291__auto__,f__$1))
;
return ((function (switch__13217__auto__,c__13291__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__13218__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13218__auto____0 = (function (){
var statearr_13833 = [null,null,null,null,null,null,null];
(statearr_13833[(0)] = cljs$core$async$transduce_$_state_machine__13218__auto__);

(statearr_13833[(1)] = (1));

return statearr_13833;
});
var cljs$core$async$transduce_$_state_machine__13218__auto____1 = (function (state_13831){
while(true){
var ret_value__13219__auto__ = (function (){try{while(true){
var result__13220__auto__ = switch__13217__auto__.call(null,state_13831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13220__auto__;
}
break;
}
}catch (e13834){var ex__13221__auto__ = e13834;
var statearr_13835_13838 = state_13831;
(statearr_13835_13838[(2)] = ex__13221__auto__);


if(cljs.core.seq.call(null,(state_13831[(4)]))){
var statearr_13836_13839 = state_13831;
(statearr_13836_13839[(1)] = cljs.core.first.call(null,(state_13831[(4)])));

} else {
throw ex__13221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13840 = state_13831;
state_13831 = G__13840;
continue;
} else {
return ret_value__13219__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13218__auto__ = function(state_13831){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13218__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13218__auto____1.call(this,state_13831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13218__auto____0;
cljs$core$async$transduce_$_state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13218__auto____1;
return cljs$core$async$transduce_$_state_machine__13218__auto__;
})()
;})(switch__13217__auto__,c__13291__auto__,f__$1))
})();
var state__13293__auto__ = (function (){var statearr_13837 = f__13292__auto__.call(null);
(statearr_13837[(6)] = c__13291__auto__);

return statearr_13837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13293__auto__);
});})(c__13291__auto__,f__$1))
);

return c__13291__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__13842 = arguments.length;
switch (G__13842) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
});

cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13291__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13291__auto__){
return (function (){
var f__13292__auto__ = (function (){var switch__13217__auto__ = ((function (c__13291__auto__){
return (function (state_13867){
var state_val_13868 = (state_13867[(1)]);
if((state_val_13868 === (7))){
var inst_13849 = (state_13867[(2)]);
var state_13867__$1 = state_13867;
var statearr_13869_13891 = state_13867__$1;
(statearr_13869_13891[(2)] = inst_13849);

(statearr_13869_13891[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13868 === (1))){
var inst_13843 = cljs.core.seq.call(null,coll);
var inst_13844 = inst_13843;
var state_13867__$1 = (function (){var statearr_13870 = state_13867;
(statearr_13870[(7)] = inst_13844);

return statearr_13870;
})();
var statearr_13871_13892 = state_13867__$1;
(statearr_13871_13892[(2)] = null);

(statearr_13871_13892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13868 === (4))){
var inst_13844 = (state_13867[(7)]);
var inst_13847 = cljs.core.first.call(null,inst_13844);
var state_13867__$1 = state_13867;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13867__$1,(7),ch,inst_13847);
} else {
if((state_val_13868 === (13))){
var inst_13861 = (state_13867[(2)]);
var state_13867__$1 = state_13867;
var statearr_13872_13893 = state_13867__$1;
(statearr_13872_13893[(2)] = inst_13861);

(statearr_13872_13893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13868 === (6))){
var inst_13852 = (state_13867[(2)]);
var state_13867__$1 = state_13867;
if(cljs.core.truth_(inst_13852)){
var statearr_13873_13894 = state_13867__$1;
(statearr_13873_13894[(1)] = (8));

} else {
var statearr_13874_13895 = state_13867__$1;
(statearr_13874_13895[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13868 === (3))){
var inst_13865 = (state_13867[(2)]);
var state_13867__$1 = state_13867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13867__$1,inst_13865);
} else {
if((state_val_13868 === (12))){
var state_13867__$1 = state_13867;
var statearr_13875_13896 = state_13867__$1;
(statearr_13875_13896[(2)] = null);

(statearr_13875_13896[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13868 === (2))){
var inst_13844 = (state_13867[(7)]);
var state_13867__$1 = state_13867;
if(cljs.core.truth_(inst_13844)){
var statearr_13876_13897 = state_13867__$1;
(statearr_13876_13897[(1)] = (4));

} else {
var statearr_13877_13898 = state_13867__$1;
(statearr_13877_13898[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13868 === (11))){
var inst_13858 = cljs.core.async.close_BANG_.call(null,ch);
var state_13867__$1 = state_13867;
var statearr_13878_13899 = state_13867__$1;
(statearr_13878_13899[(2)] = inst_13858);

(statearr_13878_13899[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13868 === (9))){
var state_13867__$1 = state_13867;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13879_13900 = state_13867__$1;
(statearr_13879_13900[(1)] = (11));

} else {
var statearr_13880_13901 = state_13867__$1;
(statearr_13880_13901[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13868 === (5))){
var inst_13844 = (state_13867[(7)]);
var state_13867__$1 = state_13867;
var statearr_13881_13902 = state_13867__$1;
(statearr_13881_13902[(2)] = inst_13844);

(statearr_13881_13902[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13868 === (10))){
var inst_13863 = (state_13867[(2)]);
var state_13867__$1 = state_13867;
var statearr_13882_13903 = state_13867__$1;
(statearr_13882_13903[(2)] = inst_13863);

(statearr_13882_13903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13868 === (8))){
var inst_13844 = (state_13867[(7)]);
var inst_13854 = cljs.core.next.call(null,inst_13844);
var inst_13844__$1 = inst_13854;
var state_13867__$1 = (function (){var statearr_13883 = state_13867;
(statearr_13883[(7)] = inst_13844__$1);

return statearr_13883;
})();
var statearr_13884_13904 = state_13867__$1;
(statearr_13884_13904[(2)] = null);

(statearr_13884_13904[(1)] = (2));


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
});})(c__13291__auto__))
;
return ((function (switch__13217__auto__,c__13291__auto__){
return (function() {
var cljs$core$async$state_machine__13218__auto__ = null;
var cljs$core$async$state_machine__13218__auto____0 = (function (){
var statearr_13885 = [null,null,null,null,null,null,null,null];
(statearr_13885[(0)] = cljs$core$async$state_machine__13218__auto__);

(statearr_13885[(1)] = (1));

return statearr_13885;
});
var cljs$core$async$state_machine__13218__auto____1 = (function (state_13867){
while(true){
var ret_value__13219__auto__ = (function (){try{while(true){
var result__13220__auto__ = switch__13217__auto__.call(null,state_13867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13220__auto__;
}
break;
}
}catch (e13886){var ex__13221__auto__ = e13886;
var statearr_13887_13905 = state_13867;
(statearr_13887_13905[(2)] = ex__13221__auto__);


if(cljs.core.seq.call(null,(state_13867[(4)]))){
var statearr_13888_13906 = state_13867;
(statearr_13888_13906[(1)] = cljs.core.first.call(null,(state_13867[(4)])));

} else {
throw ex__13221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13907 = state_13867;
state_13867 = G__13907;
continue;
} else {
return ret_value__13219__auto__;
}
break;
}
});
cljs$core$async$state_machine__13218__auto__ = function(state_13867){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13218__auto____1.call(this,state_13867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13218__auto____0;
cljs$core$async$state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13218__auto____1;
return cljs$core$async$state_machine__13218__auto__;
})()
;})(switch__13217__auto__,c__13291__auto__))
})();
var state__13293__auto__ = (function (){var statearr_13889 = f__13292__auto__.call(null);
(statearr_13889[(6)] = c__13291__auto__);

return statearr_13889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13293__auto__);
});})(c__13291__auto__))
);

return c__13291__auto__;
});

cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan_BANG_.call(null,ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__13909 = arguments.length;
switch (G__13909) {
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
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,close_QMARK_);
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_.call(null,coll);
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
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
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
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
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
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
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
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13911 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13911 = (function (ch,cs,meta13912){
this.ch = ch;
this.cs = cs;
this.meta13912 = meta13912;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13913,meta13912__$1){
var self__ = this;
var _13913__$1 = this;
return (new cljs.core.async.t_cljs$core$async13911(self__.ch,self__.cs,meta13912__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async13911.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13913){
var self__ = this;
var _13913__$1 = this;
return self__.meta13912;
});})(cs))
;

cljs.core.async.t_cljs$core$async13911.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13911.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async13911.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13911.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13911.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13911.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13911.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13912","meta13912",793611483,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async13911.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13911.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13911";

cljs.core.async.t_cljs$core$async13911.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async13911");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13911.
 */
cljs.core.async.__GT_t_cljs$core$async13911 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async13911(ch__$1,cs__$1,meta13912){
return (new cljs.core.async.t_cljs$core$async13911(ch__$1,cs__$1,meta13912));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async13911(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__13291__auto___14130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13291__auto___14130,cs,m,dchan,dctr,done){
return (function (){
var f__13292__auto__ = (function (){var switch__13217__auto__ = ((function (c__13291__auto___14130,cs,m,dchan,dctr,done){
return (function (state_14046){
var state_val_14047 = (state_14046[(1)]);
if((state_val_14047 === (7))){
var inst_14042 = (state_14046[(2)]);
var state_14046__$1 = state_14046;
var statearr_14048_14131 = state_14046__$1;
(statearr_14048_14131[(2)] = inst_14042);

(statearr_14048_14131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (20))){
var inst_13947 = (state_14046[(7)]);
var inst_13959 = cljs.core.first.call(null,inst_13947);
var inst_13960 = cljs.core.nth.call(null,inst_13959,(0),null);
var inst_13961 = cljs.core.nth.call(null,inst_13959,(1),null);
var state_14046__$1 = (function (){var statearr_14049 = state_14046;
(statearr_14049[(8)] = inst_13960);

return statearr_14049;
})();
if(cljs.core.truth_(inst_13961)){
var statearr_14050_14132 = state_14046__$1;
(statearr_14050_14132[(1)] = (22));

} else {
var statearr_14051_14133 = state_14046__$1;
(statearr_14051_14133[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (27))){
var inst_13989 = (state_14046[(9)]);
var inst_13996 = (state_14046[(10)]);
var inst_13991 = (state_14046[(11)]);
var inst_13916 = (state_14046[(12)]);
var inst_13996__$1 = cljs.core._nth.call(null,inst_13989,inst_13991);
var inst_13997 = cljs.core.async.put_BANG_.call(null,inst_13996__$1,inst_13916,done);
var state_14046__$1 = (function (){var statearr_14052 = state_14046;
(statearr_14052[(10)] = inst_13996__$1);

return statearr_14052;
})();
if(cljs.core.truth_(inst_13997)){
var statearr_14053_14134 = state_14046__$1;
(statearr_14053_14134[(1)] = (30));

} else {
var statearr_14054_14135 = state_14046__$1;
(statearr_14054_14135[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (1))){
var state_14046__$1 = state_14046;
var statearr_14055_14136 = state_14046__$1;
(statearr_14055_14136[(2)] = null);

(statearr_14055_14136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (24))){
var inst_13947 = (state_14046[(7)]);
var inst_13966 = (state_14046[(2)]);
var inst_13967 = cljs.core.next.call(null,inst_13947);
var inst_13925 = inst_13967;
var inst_13926 = null;
var inst_13927 = (0);
var inst_13928 = (0);
var state_14046__$1 = (function (){var statearr_14056 = state_14046;
(statearr_14056[(13)] = inst_13966);

(statearr_14056[(14)] = inst_13926);

(statearr_14056[(15)] = inst_13928);

(statearr_14056[(16)] = inst_13925);

(statearr_14056[(17)] = inst_13927);

return statearr_14056;
})();
var statearr_14057_14137 = state_14046__$1;
(statearr_14057_14137[(2)] = null);

(statearr_14057_14137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (39))){
var state_14046__$1 = state_14046;
var statearr_14061_14138 = state_14046__$1;
(statearr_14061_14138[(2)] = null);

(statearr_14061_14138[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (4))){
var inst_13916 = (state_14046[(12)]);
var inst_13916__$1 = (state_14046[(2)]);
var inst_13917 = (inst_13916__$1 == null);
var state_14046__$1 = (function (){var statearr_14062 = state_14046;
(statearr_14062[(12)] = inst_13916__$1);

return statearr_14062;
})();
if(cljs.core.truth_(inst_13917)){
var statearr_14063_14139 = state_14046__$1;
(statearr_14063_14139[(1)] = (5));

} else {
var statearr_14064_14140 = state_14046__$1;
(statearr_14064_14140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (15))){
var inst_13926 = (state_14046[(14)]);
var inst_13928 = (state_14046[(15)]);
var inst_13925 = (state_14046[(16)]);
var inst_13927 = (state_14046[(17)]);
var inst_13943 = (state_14046[(2)]);
var inst_13944 = (inst_13928 + (1));
var tmp14058 = inst_13926;
var tmp14059 = inst_13925;
var tmp14060 = inst_13927;
var inst_13925__$1 = tmp14059;
var inst_13926__$1 = tmp14058;
var inst_13927__$1 = tmp14060;
var inst_13928__$1 = inst_13944;
var state_14046__$1 = (function (){var statearr_14065 = state_14046;
(statearr_14065[(14)] = inst_13926__$1);

(statearr_14065[(15)] = inst_13928__$1);

(statearr_14065[(16)] = inst_13925__$1);

(statearr_14065[(18)] = inst_13943);

(statearr_14065[(17)] = inst_13927__$1);

return statearr_14065;
})();
var statearr_14066_14141 = state_14046__$1;
(statearr_14066_14141[(2)] = null);

(statearr_14066_14141[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (21))){
var inst_13970 = (state_14046[(2)]);
var state_14046__$1 = state_14046;
var statearr_14070_14142 = state_14046__$1;
(statearr_14070_14142[(2)] = inst_13970);

(statearr_14070_14142[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (31))){
var inst_13996 = (state_14046[(10)]);
var inst_14000 = cljs.core.async.untap_STAR_.call(null,m,inst_13996);
var state_14046__$1 = state_14046;
var statearr_14071_14143 = state_14046__$1;
(statearr_14071_14143[(2)] = inst_14000);

(statearr_14071_14143[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (32))){
var inst_13990 = (state_14046[(19)]);
var inst_13989 = (state_14046[(9)]);
var inst_13991 = (state_14046[(11)]);
var inst_13988 = (state_14046[(20)]);
var inst_14002 = (state_14046[(2)]);
var inst_14003 = (inst_13991 + (1));
var tmp14067 = inst_13990;
var tmp14068 = inst_13989;
var tmp14069 = inst_13988;
var inst_13988__$1 = tmp14069;
var inst_13989__$1 = tmp14068;
var inst_13990__$1 = tmp14067;
var inst_13991__$1 = inst_14003;
var state_14046__$1 = (function (){var statearr_14072 = state_14046;
(statearr_14072[(21)] = inst_14002);

(statearr_14072[(19)] = inst_13990__$1);

(statearr_14072[(9)] = inst_13989__$1);

(statearr_14072[(11)] = inst_13991__$1);

(statearr_14072[(20)] = inst_13988__$1);

return statearr_14072;
})();
var statearr_14073_14144 = state_14046__$1;
(statearr_14073_14144[(2)] = null);

(statearr_14073_14144[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (40))){
var inst_14015 = (state_14046[(22)]);
var inst_14019 = cljs.core.async.untap_STAR_.call(null,m,inst_14015);
var state_14046__$1 = state_14046;
var statearr_14074_14145 = state_14046__$1;
(statearr_14074_14145[(2)] = inst_14019);

(statearr_14074_14145[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (33))){
var inst_14006 = (state_14046[(23)]);
var inst_14008 = cljs.core.chunked_seq_QMARK_.call(null,inst_14006);
var state_14046__$1 = state_14046;
if(inst_14008){
var statearr_14075_14146 = state_14046__$1;
(statearr_14075_14146[(1)] = (36));

} else {
var statearr_14076_14147 = state_14046__$1;
(statearr_14076_14147[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (13))){
var inst_13937 = (state_14046[(24)]);
var inst_13940 = cljs.core.async.close_BANG_.call(null,inst_13937);
var state_14046__$1 = state_14046;
var statearr_14077_14148 = state_14046__$1;
(statearr_14077_14148[(2)] = inst_13940);

(statearr_14077_14148[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (22))){
var inst_13960 = (state_14046[(8)]);
var inst_13963 = cljs.core.async.close_BANG_.call(null,inst_13960);
var state_14046__$1 = state_14046;
var statearr_14078_14149 = state_14046__$1;
(statearr_14078_14149[(2)] = inst_13963);

(statearr_14078_14149[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (36))){
var inst_14006 = (state_14046[(23)]);
var inst_14010 = cljs.core.chunk_first.call(null,inst_14006);
var inst_14011 = cljs.core.chunk_rest.call(null,inst_14006);
var inst_14012 = cljs.core.count.call(null,inst_14010);
var inst_13988 = inst_14011;
var inst_13989 = inst_14010;
var inst_13990 = inst_14012;
var inst_13991 = (0);
var state_14046__$1 = (function (){var statearr_14079 = state_14046;
(statearr_14079[(19)] = inst_13990);

(statearr_14079[(9)] = inst_13989);

(statearr_14079[(11)] = inst_13991);

(statearr_14079[(20)] = inst_13988);

return statearr_14079;
})();
var statearr_14080_14150 = state_14046__$1;
(statearr_14080_14150[(2)] = null);

(statearr_14080_14150[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (41))){
var inst_14006 = (state_14046[(23)]);
var inst_14021 = (state_14046[(2)]);
var inst_14022 = cljs.core.next.call(null,inst_14006);
var inst_13988 = inst_14022;
var inst_13989 = null;
var inst_13990 = (0);
var inst_13991 = (0);
var state_14046__$1 = (function (){var statearr_14081 = state_14046;
(statearr_14081[(25)] = inst_14021);

(statearr_14081[(19)] = inst_13990);

(statearr_14081[(9)] = inst_13989);

(statearr_14081[(11)] = inst_13991);

(statearr_14081[(20)] = inst_13988);

return statearr_14081;
})();
var statearr_14082_14151 = state_14046__$1;
(statearr_14082_14151[(2)] = null);

(statearr_14082_14151[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (43))){
var state_14046__$1 = state_14046;
var statearr_14083_14152 = state_14046__$1;
(statearr_14083_14152[(2)] = null);

(statearr_14083_14152[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (29))){
var inst_14030 = (state_14046[(2)]);
var state_14046__$1 = state_14046;
var statearr_14084_14153 = state_14046__$1;
(statearr_14084_14153[(2)] = inst_14030);

(statearr_14084_14153[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (44))){
var inst_14039 = (state_14046[(2)]);
var state_14046__$1 = (function (){var statearr_14085 = state_14046;
(statearr_14085[(26)] = inst_14039);

return statearr_14085;
})();
var statearr_14086_14154 = state_14046__$1;
(statearr_14086_14154[(2)] = null);

(statearr_14086_14154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (6))){
var inst_13980 = (state_14046[(27)]);
var inst_13979 = cljs.core.deref.call(null,cs);
var inst_13980__$1 = cljs.core.keys.call(null,inst_13979);
var inst_13981 = cljs.core.count.call(null,inst_13980__$1);
var inst_13982 = cljs.core.reset_BANG_.call(null,dctr,inst_13981);
var inst_13987 = cljs.core.seq.call(null,inst_13980__$1);
var inst_13988 = inst_13987;
var inst_13989 = null;
var inst_13990 = (0);
var inst_13991 = (0);
var state_14046__$1 = (function (){var statearr_14087 = state_14046;
(statearr_14087[(19)] = inst_13990);

(statearr_14087[(27)] = inst_13980__$1);

(statearr_14087[(28)] = inst_13982);

(statearr_14087[(9)] = inst_13989);

(statearr_14087[(11)] = inst_13991);

(statearr_14087[(20)] = inst_13988);

return statearr_14087;
})();
var statearr_14088_14155 = state_14046__$1;
(statearr_14088_14155[(2)] = null);

(statearr_14088_14155[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (28))){
var inst_14006 = (state_14046[(23)]);
var inst_13988 = (state_14046[(20)]);
var inst_14006__$1 = cljs.core.seq.call(null,inst_13988);
var state_14046__$1 = (function (){var statearr_14089 = state_14046;
(statearr_14089[(23)] = inst_14006__$1);

return statearr_14089;
})();
if(inst_14006__$1){
var statearr_14090_14156 = state_14046__$1;
(statearr_14090_14156[(1)] = (33));

} else {
var statearr_14091_14157 = state_14046__$1;
(statearr_14091_14157[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (25))){
var inst_13990 = (state_14046[(19)]);
var inst_13991 = (state_14046[(11)]);
var inst_13993 = (inst_13991 < inst_13990);
var inst_13994 = inst_13993;
var state_14046__$1 = state_14046;
if(cljs.core.truth_(inst_13994)){
var statearr_14092_14158 = state_14046__$1;
(statearr_14092_14158[(1)] = (27));

} else {
var statearr_14093_14159 = state_14046__$1;
(statearr_14093_14159[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (34))){
var state_14046__$1 = state_14046;
var statearr_14094_14160 = state_14046__$1;
(statearr_14094_14160[(2)] = null);

(statearr_14094_14160[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (17))){
var state_14046__$1 = state_14046;
var statearr_14095_14161 = state_14046__$1;
(statearr_14095_14161[(2)] = null);

(statearr_14095_14161[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (3))){
var inst_14044 = (state_14046[(2)]);
var state_14046__$1 = state_14046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14046__$1,inst_14044);
} else {
if((state_val_14047 === (12))){
var inst_13975 = (state_14046[(2)]);
var state_14046__$1 = state_14046;
var statearr_14096_14162 = state_14046__$1;
(statearr_14096_14162[(2)] = inst_13975);

(statearr_14096_14162[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (2))){
var state_14046__$1 = state_14046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14046__$1,(4),ch);
} else {
if((state_val_14047 === (23))){
var state_14046__$1 = state_14046;
var statearr_14097_14163 = state_14046__$1;
(statearr_14097_14163[(2)] = null);

(statearr_14097_14163[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (35))){
var inst_14028 = (state_14046[(2)]);
var state_14046__$1 = state_14046;
var statearr_14098_14164 = state_14046__$1;
(statearr_14098_14164[(2)] = inst_14028);

(statearr_14098_14164[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (19))){
var inst_13947 = (state_14046[(7)]);
var inst_13951 = cljs.core.chunk_first.call(null,inst_13947);
var inst_13952 = cljs.core.chunk_rest.call(null,inst_13947);
var inst_13953 = cljs.core.count.call(null,inst_13951);
var inst_13925 = inst_13952;
var inst_13926 = inst_13951;
var inst_13927 = inst_13953;
var inst_13928 = (0);
var state_14046__$1 = (function (){var statearr_14099 = state_14046;
(statearr_14099[(14)] = inst_13926);

(statearr_14099[(15)] = inst_13928);

(statearr_14099[(16)] = inst_13925);

(statearr_14099[(17)] = inst_13927);

return statearr_14099;
})();
var statearr_14100_14165 = state_14046__$1;
(statearr_14100_14165[(2)] = null);

(statearr_14100_14165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (11))){
var inst_13947 = (state_14046[(7)]);
var inst_13925 = (state_14046[(16)]);
var inst_13947__$1 = cljs.core.seq.call(null,inst_13925);
var state_14046__$1 = (function (){var statearr_14101 = state_14046;
(statearr_14101[(7)] = inst_13947__$1);

return statearr_14101;
})();
if(inst_13947__$1){
var statearr_14102_14166 = state_14046__$1;
(statearr_14102_14166[(1)] = (16));

} else {
var statearr_14103_14167 = state_14046__$1;
(statearr_14103_14167[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (9))){
var inst_13977 = (state_14046[(2)]);
var state_14046__$1 = state_14046;
var statearr_14104_14168 = state_14046__$1;
(statearr_14104_14168[(2)] = inst_13977);

(statearr_14104_14168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (5))){
var inst_13923 = cljs.core.deref.call(null,cs);
var inst_13924 = cljs.core.seq.call(null,inst_13923);
var inst_13925 = inst_13924;
var inst_13926 = null;
var inst_13927 = (0);
var inst_13928 = (0);
var state_14046__$1 = (function (){var statearr_14105 = state_14046;
(statearr_14105[(14)] = inst_13926);

(statearr_14105[(15)] = inst_13928);

(statearr_14105[(16)] = inst_13925);

(statearr_14105[(17)] = inst_13927);

return statearr_14105;
})();
var statearr_14106_14169 = state_14046__$1;
(statearr_14106_14169[(2)] = null);

(statearr_14106_14169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (14))){
var state_14046__$1 = state_14046;
var statearr_14107_14170 = state_14046__$1;
(statearr_14107_14170[(2)] = null);

(statearr_14107_14170[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (45))){
var inst_14036 = (state_14046[(2)]);
var state_14046__$1 = state_14046;
var statearr_14108_14171 = state_14046__$1;
(statearr_14108_14171[(2)] = inst_14036);

(statearr_14108_14171[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (26))){
var inst_13980 = (state_14046[(27)]);
var inst_14032 = (state_14046[(2)]);
var inst_14033 = cljs.core.seq.call(null,inst_13980);
var state_14046__$1 = (function (){var statearr_14109 = state_14046;
(statearr_14109[(29)] = inst_14032);

return statearr_14109;
})();
if(inst_14033){
var statearr_14110_14172 = state_14046__$1;
(statearr_14110_14172[(1)] = (42));

} else {
var statearr_14111_14173 = state_14046__$1;
(statearr_14111_14173[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (16))){
var inst_13947 = (state_14046[(7)]);
var inst_13949 = cljs.core.chunked_seq_QMARK_.call(null,inst_13947);
var state_14046__$1 = state_14046;
if(inst_13949){
var statearr_14112_14174 = state_14046__$1;
(statearr_14112_14174[(1)] = (19));

} else {
var statearr_14113_14175 = state_14046__$1;
(statearr_14113_14175[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (38))){
var inst_14025 = (state_14046[(2)]);
var state_14046__$1 = state_14046;
var statearr_14114_14176 = state_14046__$1;
(statearr_14114_14176[(2)] = inst_14025);

(statearr_14114_14176[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (30))){
var state_14046__$1 = state_14046;
var statearr_14115_14177 = state_14046__$1;
(statearr_14115_14177[(2)] = null);

(statearr_14115_14177[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (10))){
var inst_13926 = (state_14046[(14)]);
var inst_13928 = (state_14046[(15)]);
var inst_13936 = cljs.core._nth.call(null,inst_13926,inst_13928);
var inst_13937 = cljs.core.nth.call(null,inst_13936,(0),null);
var inst_13938 = cljs.core.nth.call(null,inst_13936,(1),null);
var state_14046__$1 = (function (){var statearr_14116 = state_14046;
(statearr_14116[(24)] = inst_13937);

return statearr_14116;
})();
if(cljs.core.truth_(inst_13938)){
var statearr_14117_14178 = state_14046__$1;
(statearr_14117_14178[(1)] = (13));

} else {
var statearr_14118_14179 = state_14046__$1;
(statearr_14118_14179[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (18))){
var inst_13973 = (state_14046[(2)]);
var state_14046__$1 = state_14046;
var statearr_14119_14180 = state_14046__$1;
(statearr_14119_14180[(2)] = inst_13973);

(statearr_14119_14180[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (42))){
var state_14046__$1 = state_14046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14046__$1,(45),dchan);
} else {
if((state_val_14047 === (37))){
var inst_14006 = (state_14046[(23)]);
var inst_14015 = (state_14046[(22)]);
var inst_13916 = (state_14046[(12)]);
var inst_14015__$1 = cljs.core.first.call(null,inst_14006);
var inst_14016 = cljs.core.async.put_BANG_.call(null,inst_14015__$1,inst_13916,done);
var state_14046__$1 = (function (){var statearr_14120 = state_14046;
(statearr_14120[(22)] = inst_14015__$1);

return statearr_14120;
})();
if(cljs.core.truth_(inst_14016)){
var statearr_14121_14181 = state_14046__$1;
(statearr_14121_14181[(1)] = (39));

} else {
var statearr_14122_14182 = state_14046__$1;
(statearr_14122_14182[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14047 === (8))){
var inst_13928 = (state_14046[(15)]);
var inst_13927 = (state_14046[(17)]);
var inst_13930 = (inst_13928 < inst_13927);
var inst_13931 = inst_13930;
var state_14046__$1 = state_14046;
if(cljs.core.truth_(inst_13931)){
var statearr_14123_14183 = state_14046__$1;
(statearr_14123_14183[(1)] = (10));

} else {
var statearr_14124_14184 = state_14046__$1;
(statearr_14124_14184[(1)] = (11));

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
});})(c__13291__auto___14130,cs,m,dchan,dctr,done))
;
return ((function (switch__13217__auto__,c__13291__auto___14130,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13218__auto__ = null;
var cljs$core$async$mult_$_state_machine__13218__auto____0 = (function (){
var statearr_14125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14125[(0)] = cljs$core$async$mult_$_state_machine__13218__auto__);

(statearr_14125[(1)] = (1));

return statearr_14125;
});
var cljs$core$async$mult_$_state_machine__13218__auto____1 = (function (state_14046){
while(true){
var ret_value__13219__auto__ = (function (){try{while(true){
var result__13220__auto__ = switch__13217__auto__.call(null,state_14046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13220__auto__;
}
break;
}
}catch (e14126){var ex__13221__auto__ = e14126;
var statearr_14127_14185 = state_14046;
(statearr_14127_14185[(2)] = ex__13221__auto__);


if(cljs.core.seq.call(null,(state_14046[(4)]))){
var statearr_14128_14186 = state_14046;
(statearr_14128_14186[(1)] = cljs.core.first.call(null,(state_14046[(4)])));

} else {
throw ex__13221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14187 = state_14046;
state_14046 = G__14187;
continue;
} else {
return ret_value__13219__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13218__auto__ = function(state_14046){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13218__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13218__auto____1.call(this,state_14046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13218__auto____0;
cljs$core$async$mult_$_state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13218__auto____1;
return cljs$core$async$mult_$_state_machine__13218__auto__;
})()
;})(switch__13217__auto__,c__13291__auto___14130,cs,m,dchan,dctr,done))
})();
var state__13293__auto__ = (function (){var statearr_14129 = f__13292__auto__.call(null);
(statearr_14129[(6)] = c__13291__auto___14130);

return statearr_14129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13293__auto__);
});})(c__13291__auto___14130,cs,m,dchan,dctr,done))
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
var G__14189 = arguments.length;
switch (G__14189) {
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
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
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
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
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
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
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
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
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
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14201 = arguments.length;
var i__4731__auto___14202 = (0);
while(true){
if((i__4731__auto___14202 < len__4730__auto___14201)){
args__4736__auto__.push((arguments[i__4731__auto___14202]));

var G__14203 = (i__4731__auto___14202 + (1));
i__4731__auto___14202 = G__14203;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14195){
var map__14196 = p__14195;
var map__14196__$1 = (((((!((map__14196 == null))))?(((((map__14196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14196):map__14196);
var opts = map__14196__$1;
var statearr_14198_14204 = state;
(statearr_14198_14204[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__14196,map__14196__$1,opts){
return (function (val){
var statearr_14199_14205 = state;
(statearr_14199_14205[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__14196,map__14196__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_14200_14206 = state;
(statearr_14200_14206[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14191){
var G__14192 = cljs.core.first.call(null,seq14191);
var seq14191__$1 = cljs.core.next.call(null,seq14191);
var G__14193 = cljs.core.first.call(null,seq14191__$1);
var seq14191__$2 = cljs.core.next.call(null,seq14191__$1);
var G__14194 = cljs.core.first.call(null,seq14191__$2);
var seq14191__$3 = cljs.core.next.call(null,seq14191__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14192,G__14193,G__14194,seq14191__$3);
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
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14207 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14207 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta14208){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta14208 = meta14208;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14209,meta14208__$1){
var self__ = this;
var _14209__$1 = this;
return (new cljs.core.async.t_cljs$core$async14207(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta14208__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14207.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14209){
var self__ = this;
var _14209__$1 = this;
return self__.meta14208;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14207.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14207.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14207.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14207.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14207.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14207.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14207.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14207.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14207.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta14208","meta14208",1429469746,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14207.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14207.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14207";

cljs.core.async.t_cljs$core$async14207.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async14207");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14207.
 */
cljs.core.async.__GT_t_cljs$core$async14207 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async14207(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta14208){
return (new cljs.core.async.t_cljs$core$async14207(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta14208));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async14207(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13291__auto___14372 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13291__auto___14372,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13292__auto__ = (function (){var switch__13217__auto__ = ((function (c__13291__auto___14372,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14311){
var state_val_14312 = (state_14311[(1)]);
if((state_val_14312 === (7))){
var inst_14226 = (state_14311[(2)]);
var state_14311__$1 = state_14311;
var statearr_14313_14373 = state_14311__$1;
(statearr_14313_14373[(2)] = inst_14226);

(statearr_14313_14373[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (20))){
var inst_14238 = (state_14311[(7)]);
var state_14311__$1 = state_14311;
var statearr_14314_14374 = state_14311__$1;
(statearr_14314_14374[(2)] = inst_14238);

(statearr_14314_14374[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (27))){
var state_14311__$1 = state_14311;
var statearr_14315_14375 = state_14311__$1;
(statearr_14315_14375[(2)] = null);

(statearr_14315_14375[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (1))){
var inst_14213 = (state_14311[(8)]);
var inst_14213__$1 = calc_state.call(null);
var inst_14215 = (inst_14213__$1 == null);
var inst_14216 = cljs.core.not.call(null,inst_14215);
var state_14311__$1 = (function (){var statearr_14316 = state_14311;
(statearr_14316[(8)] = inst_14213__$1);

return statearr_14316;
})();
if(inst_14216){
var statearr_14317_14376 = state_14311__$1;
(statearr_14317_14376[(1)] = (2));

} else {
var statearr_14318_14377 = state_14311__$1;
(statearr_14318_14377[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (24))){
var inst_14271 = (state_14311[(9)]);
var inst_14285 = (state_14311[(10)]);
var inst_14262 = (state_14311[(11)]);
var inst_14285__$1 = inst_14262.call(null,inst_14271);
var state_14311__$1 = (function (){var statearr_14319 = state_14311;
(statearr_14319[(10)] = inst_14285__$1);

return statearr_14319;
})();
if(cljs.core.truth_(inst_14285__$1)){
var statearr_14320_14378 = state_14311__$1;
(statearr_14320_14378[(1)] = (29));

} else {
var statearr_14321_14379 = state_14311__$1;
(statearr_14321_14379[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (4))){
var inst_14229 = (state_14311[(2)]);
var state_14311__$1 = state_14311;
if(cljs.core.truth_(inst_14229)){
var statearr_14322_14380 = state_14311__$1;
(statearr_14322_14380[(1)] = (8));

} else {
var statearr_14323_14381 = state_14311__$1;
(statearr_14323_14381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (15))){
var inst_14256 = (state_14311[(2)]);
var state_14311__$1 = state_14311;
if(cljs.core.truth_(inst_14256)){
var statearr_14324_14382 = state_14311__$1;
(statearr_14324_14382[(1)] = (19));

} else {
var statearr_14325_14383 = state_14311__$1;
(statearr_14325_14383[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (21))){
var inst_14261 = (state_14311[(12)]);
var inst_14261__$1 = (state_14311[(2)]);
var inst_14262 = cljs.core.get.call(null,inst_14261__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14263 = cljs.core.get.call(null,inst_14261__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14264 = cljs.core.get.call(null,inst_14261__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14311__$1 = (function (){var statearr_14326 = state_14311;
(statearr_14326[(13)] = inst_14263);

(statearr_14326[(11)] = inst_14262);

(statearr_14326[(12)] = inst_14261__$1);

return statearr_14326;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14311__$1,(22),inst_14264);
} else {
if((state_val_14312 === (31))){
var inst_14293 = (state_14311[(2)]);
var state_14311__$1 = state_14311;
if(cljs.core.truth_(inst_14293)){
var statearr_14327_14384 = state_14311__$1;
(statearr_14327_14384[(1)] = (32));

} else {
var statearr_14328_14385 = state_14311__$1;
(statearr_14328_14385[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (32))){
var inst_14270 = (state_14311[(14)]);
var state_14311__$1 = state_14311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14311__$1,(35),out,inst_14270);
} else {
if((state_val_14312 === (33))){
var inst_14261 = (state_14311[(12)]);
var inst_14238 = inst_14261;
var state_14311__$1 = (function (){var statearr_14329 = state_14311;
(statearr_14329[(7)] = inst_14238);

return statearr_14329;
})();
var statearr_14330_14386 = state_14311__$1;
(statearr_14330_14386[(2)] = null);

(statearr_14330_14386[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (13))){
var inst_14238 = (state_14311[(7)]);
var inst_14245 = inst_14238.cljs$lang$protocol_mask$partition0$;
var inst_14246 = (inst_14245 & (64));
var inst_14247 = inst_14238.cljs$core$ISeq$;
var inst_14248 = (cljs.core.PROTOCOL_SENTINEL === inst_14247);
var inst_14249 = ((inst_14246) || (inst_14248));
var state_14311__$1 = state_14311;
if(cljs.core.truth_(inst_14249)){
var statearr_14331_14387 = state_14311__$1;
(statearr_14331_14387[(1)] = (16));

} else {
var statearr_14332_14388 = state_14311__$1;
(statearr_14332_14388[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (22))){
var inst_14270 = (state_14311[(14)]);
var inst_14271 = (state_14311[(9)]);
var inst_14269 = (state_14311[(2)]);
var inst_14270__$1 = cljs.core.nth.call(null,inst_14269,(0),null);
var inst_14271__$1 = cljs.core.nth.call(null,inst_14269,(1),null);
var inst_14272 = (inst_14270__$1 == null);
var inst_14273 = cljs.core._EQ_.call(null,inst_14271__$1,change);
var inst_14274 = ((inst_14272) || (inst_14273));
var state_14311__$1 = (function (){var statearr_14333 = state_14311;
(statearr_14333[(14)] = inst_14270__$1);

(statearr_14333[(9)] = inst_14271__$1);

return statearr_14333;
})();
if(cljs.core.truth_(inst_14274)){
var statearr_14334_14389 = state_14311__$1;
(statearr_14334_14389[(1)] = (23));

} else {
var statearr_14335_14390 = state_14311__$1;
(statearr_14335_14390[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (36))){
var inst_14261 = (state_14311[(12)]);
var inst_14238 = inst_14261;
var state_14311__$1 = (function (){var statearr_14336 = state_14311;
(statearr_14336[(7)] = inst_14238);

return statearr_14336;
})();
var statearr_14337_14391 = state_14311__$1;
(statearr_14337_14391[(2)] = null);

(statearr_14337_14391[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (29))){
var inst_14285 = (state_14311[(10)]);
var state_14311__$1 = state_14311;
var statearr_14338_14392 = state_14311__$1;
(statearr_14338_14392[(2)] = inst_14285);

(statearr_14338_14392[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (6))){
var state_14311__$1 = state_14311;
var statearr_14339_14393 = state_14311__$1;
(statearr_14339_14393[(2)] = false);

(statearr_14339_14393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (28))){
var inst_14281 = (state_14311[(2)]);
var inst_14282 = calc_state.call(null);
var inst_14238 = inst_14282;
var state_14311__$1 = (function (){var statearr_14340 = state_14311;
(statearr_14340[(7)] = inst_14238);

(statearr_14340[(15)] = inst_14281);

return statearr_14340;
})();
var statearr_14341_14394 = state_14311__$1;
(statearr_14341_14394[(2)] = null);

(statearr_14341_14394[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (25))){
var inst_14307 = (state_14311[(2)]);
var state_14311__$1 = state_14311;
var statearr_14342_14395 = state_14311__$1;
(statearr_14342_14395[(2)] = inst_14307);

(statearr_14342_14395[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (34))){
var inst_14305 = (state_14311[(2)]);
var state_14311__$1 = state_14311;
var statearr_14343_14396 = state_14311__$1;
(statearr_14343_14396[(2)] = inst_14305);

(statearr_14343_14396[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (17))){
var state_14311__$1 = state_14311;
var statearr_14344_14397 = state_14311__$1;
(statearr_14344_14397[(2)] = false);

(statearr_14344_14397[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (3))){
var state_14311__$1 = state_14311;
var statearr_14345_14398 = state_14311__$1;
(statearr_14345_14398[(2)] = false);

(statearr_14345_14398[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (12))){
var inst_14309 = (state_14311[(2)]);
var state_14311__$1 = state_14311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14311__$1,inst_14309);
} else {
if((state_val_14312 === (2))){
var inst_14213 = (state_14311[(8)]);
var inst_14218 = inst_14213.cljs$lang$protocol_mask$partition0$;
var inst_14219 = (inst_14218 & (64));
var inst_14220 = inst_14213.cljs$core$ISeq$;
var inst_14221 = (cljs.core.PROTOCOL_SENTINEL === inst_14220);
var inst_14222 = ((inst_14219) || (inst_14221));
var state_14311__$1 = state_14311;
if(cljs.core.truth_(inst_14222)){
var statearr_14346_14399 = state_14311__$1;
(statearr_14346_14399[(1)] = (5));

} else {
var statearr_14347_14400 = state_14311__$1;
(statearr_14347_14400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (23))){
var inst_14270 = (state_14311[(14)]);
var inst_14276 = (inst_14270 == null);
var state_14311__$1 = state_14311;
if(cljs.core.truth_(inst_14276)){
var statearr_14348_14401 = state_14311__$1;
(statearr_14348_14401[(1)] = (26));

} else {
var statearr_14349_14402 = state_14311__$1;
(statearr_14349_14402[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (35))){
var inst_14296 = (state_14311[(2)]);
var state_14311__$1 = state_14311;
if(cljs.core.truth_(inst_14296)){
var statearr_14350_14403 = state_14311__$1;
(statearr_14350_14403[(1)] = (36));

} else {
var statearr_14351_14404 = state_14311__$1;
(statearr_14351_14404[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (19))){
var inst_14238 = (state_14311[(7)]);
var inst_14258 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14238);
var state_14311__$1 = state_14311;
var statearr_14352_14405 = state_14311__$1;
(statearr_14352_14405[(2)] = inst_14258);

(statearr_14352_14405[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (11))){
var inst_14238 = (state_14311[(7)]);
var inst_14242 = (inst_14238 == null);
var inst_14243 = cljs.core.not.call(null,inst_14242);
var state_14311__$1 = state_14311;
if(inst_14243){
var statearr_14353_14406 = state_14311__$1;
(statearr_14353_14406[(1)] = (13));

} else {
var statearr_14354_14407 = state_14311__$1;
(statearr_14354_14407[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (9))){
var inst_14213 = (state_14311[(8)]);
var state_14311__$1 = state_14311;
var statearr_14355_14408 = state_14311__$1;
(statearr_14355_14408[(2)] = inst_14213);

(statearr_14355_14408[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (5))){
var state_14311__$1 = state_14311;
var statearr_14356_14409 = state_14311__$1;
(statearr_14356_14409[(2)] = true);

(statearr_14356_14409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (14))){
var state_14311__$1 = state_14311;
var statearr_14357_14410 = state_14311__$1;
(statearr_14357_14410[(2)] = false);

(statearr_14357_14410[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (26))){
var inst_14271 = (state_14311[(9)]);
var inst_14278 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14271);
var state_14311__$1 = state_14311;
var statearr_14358_14411 = state_14311__$1;
(statearr_14358_14411[(2)] = inst_14278);

(statearr_14358_14411[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (16))){
var state_14311__$1 = state_14311;
var statearr_14359_14412 = state_14311__$1;
(statearr_14359_14412[(2)] = true);

(statearr_14359_14412[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (38))){
var inst_14301 = (state_14311[(2)]);
var state_14311__$1 = state_14311;
var statearr_14360_14413 = state_14311__$1;
(statearr_14360_14413[(2)] = inst_14301);

(statearr_14360_14413[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (30))){
var inst_14263 = (state_14311[(13)]);
var inst_14271 = (state_14311[(9)]);
var inst_14262 = (state_14311[(11)]);
var inst_14288 = cljs.core.empty_QMARK_.call(null,inst_14262);
var inst_14289 = inst_14263.call(null,inst_14271);
var inst_14290 = cljs.core.not.call(null,inst_14289);
var inst_14291 = ((inst_14288) && (inst_14290));
var state_14311__$1 = state_14311;
var statearr_14361_14414 = state_14311__$1;
(statearr_14361_14414[(2)] = inst_14291);

(statearr_14361_14414[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (10))){
var inst_14213 = (state_14311[(8)]);
var inst_14234 = (state_14311[(2)]);
var inst_14235 = cljs.core.get.call(null,inst_14234,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14236 = cljs.core.get.call(null,inst_14234,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14237 = cljs.core.get.call(null,inst_14234,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14238 = inst_14213;
var state_14311__$1 = (function (){var statearr_14362 = state_14311;
(statearr_14362[(16)] = inst_14237);

(statearr_14362[(7)] = inst_14238);

(statearr_14362[(17)] = inst_14235);

(statearr_14362[(18)] = inst_14236);

return statearr_14362;
})();
var statearr_14363_14415 = state_14311__$1;
(statearr_14363_14415[(2)] = null);

(statearr_14363_14415[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (18))){
var inst_14253 = (state_14311[(2)]);
var state_14311__$1 = state_14311;
var statearr_14364_14416 = state_14311__$1;
(statearr_14364_14416[(2)] = inst_14253);

(statearr_14364_14416[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (37))){
var state_14311__$1 = state_14311;
var statearr_14365_14417 = state_14311__$1;
(statearr_14365_14417[(2)] = null);

(statearr_14365_14417[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14312 === (8))){
var inst_14213 = (state_14311[(8)]);
var inst_14231 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14213);
var state_14311__$1 = state_14311;
var statearr_14366_14418 = state_14311__$1;
(statearr_14366_14418[(2)] = inst_14231);

(statearr_14366_14418[(1)] = (10));


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
});})(c__13291__auto___14372,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13217__auto__,c__13291__auto___14372,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13218__auto__ = null;
var cljs$core$async$mix_$_state_machine__13218__auto____0 = (function (){
var statearr_14367 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14367[(0)] = cljs$core$async$mix_$_state_machine__13218__auto__);

(statearr_14367[(1)] = (1));

return statearr_14367;
});
var cljs$core$async$mix_$_state_machine__13218__auto____1 = (function (state_14311){
while(true){
var ret_value__13219__auto__ = (function (){try{while(true){
var result__13220__auto__ = switch__13217__auto__.call(null,state_14311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13220__auto__;
}
break;
}
}catch (e14368){var ex__13221__auto__ = e14368;
var statearr_14369_14419 = state_14311;
(statearr_14369_14419[(2)] = ex__13221__auto__);


if(cljs.core.seq.call(null,(state_14311[(4)]))){
var statearr_14370_14420 = state_14311;
(statearr_14370_14420[(1)] = cljs.core.first.call(null,(state_14311[(4)])));

} else {
throw ex__13221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14421 = state_14311;
state_14311 = G__14421;
continue;
} else {
return ret_value__13219__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13218__auto__ = function(state_14311){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13218__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13218__auto____1.call(this,state_14311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13218__auto____0;
cljs$core$async$mix_$_state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13218__auto____1;
return cljs$core$async$mix_$_state_machine__13218__auto__;
})()
;})(switch__13217__auto__,c__13291__auto___14372,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13293__auto__ = (function (){var statearr_14371 = f__13292__auto__.call(null);
(statearr_14371[(6)] = c__13291__auto___14372);

return statearr_14371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13293__auto__);
});})(c__13291__auto___14372,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
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
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__14423 = arguments.length;
switch (G__14423) {
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
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
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
var G__14427 = arguments.length;
switch (G__14427) {
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
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__14425_SHARP_){
if(cljs.core.truth_(p1__14425_SHARP_.call(null,topic))){
return p1__14425_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14425_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14428 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14428 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14429){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14429 = meta14429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14430,meta14429__$1){
var self__ = this;
var _14430__$1 = this;
return (new cljs.core.async.t_cljs$core$async14428(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14429__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14428.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14430){
var self__ = this;
var _14430__$1 = this;
return self__.meta14429;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14428.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14428.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14428.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14428.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14428.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14428.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14428.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14428.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14429","meta14429",311432770,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14428.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14428.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14428";

cljs.core.async.t_cljs$core$async14428.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async14428");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14428.
 */
cljs.core.async.__GT_t_cljs$core$async14428 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async14428(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14429){
return (new cljs.core.async.t_cljs$core$async14428(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14429));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async14428(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13291__auto___14549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13291__auto___14549,mults,ensure_mult,p){
return (function (){
var f__13292__auto__ = (function (){var switch__13217__auto__ = ((function (c__13291__auto___14549,mults,ensure_mult,p){
return (function (state_14502){
var state_val_14503 = (state_14502[(1)]);
if((state_val_14503 === (7))){
var inst_14498 = (state_14502[(2)]);
var state_14502__$1 = state_14502;
var statearr_14504_14550 = state_14502__$1;
(statearr_14504_14550[(2)] = inst_14498);

(statearr_14504_14550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (20))){
var state_14502__$1 = state_14502;
var statearr_14505_14551 = state_14502__$1;
(statearr_14505_14551[(2)] = null);

(statearr_14505_14551[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (1))){
var state_14502__$1 = state_14502;
var statearr_14506_14552 = state_14502__$1;
(statearr_14506_14552[(2)] = null);

(statearr_14506_14552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (24))){
var inst_14481 = (state_14502[(7)]);
var inst_14490 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14481);
var state_14502__$1 = state_14502;
var statearr_14507_14553 = state_14502__$1;
(statearr_14507_14553[(2)] = inst_14490);

(statearr_14507_14553[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (4))){
var inst_14433 = (state_14502[(8)]);
var inst_14433__$1 = (state_14502[(2)]);
var inst_14434 = (inst_14433__$1 == null);
var state_14502__$1 = (function (){var statearr_14508 = state_14502;
(statearr_14508[(8)] = inst_14433__$1);

return statearr_14508;
})();
if(cljs.core.truth_(inst_14434)){
var statearr_14509_14554 = state_14502__$1;
(statearr_14509_14554[(1)] = (5));

} else {
var statearr_14510_14555 = state_14502__$1;
(statearr_14510_14555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (15))){
var inst_14475 = (state_14502[(2)]);
var state_14502__$1 = state_14502;
var statearr_14511_14556 = state_14502__$1;
(statearr_14511_14556[(2)] = inst_14475);

(statearr_14511_14556[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (21))){
var inst_14495 = (state_14502[(2)]);
var state_14502__$1 = (function (){var statearr_14512 = state_14502;
(statearr_14512[(9)] = inst_14495);

return statearr_14512;
})();
var statearr_14513_14557 = state_14502__$1;
(statearr_14513_14557[(2)] = null);

(statearr_14513_14557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (13))){
var inst_14457 = (state_14502[(10)]);
var inst_14459 = cljs.core.chunked_seq_QMARK_.call(null,inst_14457);
var state_14502__$1 = state_14502;
if(inst_14459){
var statearr_14514_14558 = state_14502__$1;
(statearr_14514_14558[(1)] = (16));

} else {
var statearr_14515_14559 = state_14502__$1;
(statearr_14515_14559[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (22))){
var inst_14487 = (state_14502[(2)]);
var state_14502__$1 = state_14502;
if(cljs.core.truth_(inst_14487)){
var statearr_14516_14560 = state_14502__$1;
(statearr_14516_14560[(1)] = (23));

} else {
var statearr_14517_14561 = state_14502__$1;
(statearr_14517_14561[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (6))){
var inst_14483 = (state_14502[(11)]);
var inst_14481 = (state_14502[(7)]);
var inst_14433 = (state_14502[(8)]);
var inst_14481__$1 = topic_fn.call(null,inst_14433);
var inst_14482 = cljs.core.deref.call(null,mults);
var inst_14483__$1 = cljs.core.get.call(null,inst_14482,inst_14481__$1);
var state_14502__$1 = (function (){var statearr_14518 = state_14502;
(statearr_14518[(11)] = inst_14483__$1);

(statearr_14518[(7)] = inst_14481__$1);

return statearr_14518;
})();
if(cljs.core.truth_(inst_14483__$1)){
var statearr_14519_14562 = state_14502__$1;
(statearr_14519_14562[(1)] = (19));

} else {
var statearr_14520_14563 = state_14502__$1;
(statearr_14520_14563[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (25))){
var inst_14492 = (state_14502[(2)]);
var state_14502__$1 = state_14502;
var statearr_14521_14564 = state_14502__$1;
(statearr_14521_14564[(2)] = inst_14492);

(statearr_14521_14564[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (17))){
var inst_14457 = (state_14502[(10)]);
var inst_14466 = cljs.core.first.call(null,inst_14457);
var inst_14467 = cljs.core.async.muxch_STAR_.call(null,inst_14466);
var inst_14468 = cljs.core.async.close_BANG_.call(null,inst_14467);
var inst_14469 = cljs.core.next.call(null,inst_14457);
var inst_14443 = inst_14469;
var inst_14444 = null;
var inst_14445 = (0);
var inst_14446 = (0);
var state_14502__$1 = (function (){var statearr_14522 = state_14502;
(statearr_14522[(12)] = inst_14446);

(statearr_14522[(13)] = inst_14445);

(statearr_14522[(14)] = inst_14468);

(statearr_14522[(15)] = inst_14444);

(statearr_14522[(16)] = inst_14443);

return statearr_14522;
})();
var statearr_14523_14565 = state_14502__$1;
(statearr_14523_14565[(2)] = null);

(statearr_14523_14565[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (3))){
var inst_14500 = (state_14502[(2)]);
var state_14502__$1 = state_14502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14502__$1,inst_14500);
} else {
if((state_val_14503 === (12))){
var inst_14477 = (state_14502[(2)]);
var state_14502__$1 = state_14502;
var statearr_14524_14566 = state_14502__$1;
(statearr_14524_14566[(2)] = inst_14477);

(statearr_14524_14566[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (2))){
var state_14502__$1 = state_14502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14502__$1,(4),ch);
} else {
if((state_val_14503 === (23))){
var state_14502__$1 = state_14502;
var statearr_14525_14567 = state_14502__$1;
(statearr_14525_14567[(2)] = null);

(statearr_14525_14567[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (19))){
var inst_14483 = (state_14502[(11)]);
var inst_14433 = (state_14502[(8)]);
var inst_14485 = cljs.core.async.muxch_STAR_.call(null,inst_14483);
var state_14502__$1 = state_14502;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14502__$1,(22),inst_14485,inst_14433);
} else {
if((state_val_14503 === (11))){
var inst_14457 = (state_14502[(10)]);
var inst_14443 = (state_14502[(16)]);
var inst_14457__$1 = cljs.core.seq.call(null,inst_14443);
var state_14502__$1 = (function (){var statearr_14526 = state_14502;
(statearr_14526[(10)] = inst_14457__$1);

return statearr_14526;
})();
if(inst_14457__$1){
var statearr_14527_14568 = state_14502__$1;
(statearr_14527_14568[(1)] = (13));

} else {
var statearr_14528_14569 = state_14502__$1;
(statearr_14528_14569[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (9))){
var inst_14479 = (state_14502[(2)]);
var state_14502__$1 = state_14502;
var statearr_14529_14570 = state_14502__$1;
(statearr_14529_14570[(2)] = inst_14479);

(statearr_14529_14570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (5))){
var inst_14440 = cljs.core.deref.call(null,mults);
var inst_14441 = cljs.core.vals.call(null,inst_14440);
var inst_14442 = cljs.core.seq.call(null,inst_14441);
var inst_14443 = inst_14442;
var inst_14444 = null;
var inst_14445 = (0);
var inst_14446 = (0);
var state_14502__$1 = (function (){var statearr_14530 = state_14502;
(statearr_14530[(12)] = inst_14446);

(statearr_14530[(13)] = inst_14445);

(statearr_14530[(15)] = inst_14444);

(statearr_14530[(16)] = inst_14443);

return statearr_14530;
})();
var statearr_14531_14571 = state_14502__$1;
(statearr_14531_14571[(2)] = null);

(statearr_14531_14571[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (14))){
var state_14502__$1 = state_14502;
var statearr_14535_14572 = state_14502__$1;
(statearr_14535_14572[(2)] = null);

(statearr_14535_14572[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (16))){
var inst_14457 = (state_14502[(10)]);
var inst_14461 = cljs.core.chunk_first.call(null,inst_14457);
var inst_14462 = cljs.core.chunk_rest.call(null,inst_14457);
var inst_14463 = cljs.core.count.call(null,inst_14461);
var inst_14443 = inst_14462;
var inst_14444 = inst_14461;
var inst_14445 = inst_14463;
var inst_14446 = (0);
var state_14502__$1 = (function (){var statearr_14536 = state_14502;
(statearr_14536[(12)] = inst_14446);

(statearr_14536[(13)] = inst_14445);

(statearr_14536[(15)] = inst_14444);

(statearr_14536[(16)] = inst_14443);

return statearr_14536;
})();
var statearr_14537_14573 = state_14502__$1;
(statearr_14537_14573[(2)] = null);

(statearr_14537_14573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (10))){
var inst_14446 = (state_14502[(12)]);
var inst_14445 = (state_14502[(13)]);
var inst_14444 = (state_14502[(15)]);
var inst_14443 = (state_14502[(16)]);
var inst_14451 = cljs.core._nth.call(null,inst_14444,inst_14446);
var inst_14452 = cljs.core.async.muxch_STAR_.call(null,inst_14451);
var inst_14453 = cljs.core.async.close_BANG_.call(null,inst_14452);
var inst_14454 = (inst_14446 + (1));
var tmp14532 = inst_14445;
var tmp14533 = inst_14444;
var tmp14534 = inst_14443;
var inst_14443__$1 = tmp14534;
var inst_14444__$1 = tmp14533;
var inst_14445__$1 = tmp14532;
var inst_14446__$1 = inst_14454;
var state_14502__$1 = (function (){var statearr_14538 = state_14502;
(statearr_14538[(12)] = inst_14446__$1);

(statearr_14538[(13)] = inst_14445__$1);

(statearr_14538[(17)] = inst_14453);

(statearr_14538[(15)] = inst_14444__$1);

(statearr_14538[(16)] = inst_14443__$1);

return statearr_14538;
})();
var statearr_14539_14574 = state_14502__$1;
(statearr_14539_14574[(2)] = null);

(statearr_14539_14574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (18))){
var inst_14472 = (state_14502[(2)]);
var state_14502__$1 = state_14502;
var statearr_14540_14575 = state_14502__$1;
(statearr_14540_14575[(2)] = inst_14472);

(statearr_14540_14575[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14503 === (8))){
var inst_14446 = (state_14502[(12)]);
var inst_14445 = (state_14502[(13)]);
var inst_14448 = (inst_14446 < inst_14445);
var inst_14449 = inst_14448;
var state_14502__$1 = state_14502;
if(cljs.core.truth_(inst_14449)){
var statearr_14541_14576 = state_14502__$1;
(statearr_14541_14576[(1)] = (10));

} else {
var statearr_14542_14577 = state_14502__$1;
(statearr_14542_14577[(1)] = (11));

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
});})(c__13291__auto___14549,mults,ensure_mult,p))
;
return ((function (switch__13217__auto__,c__13291__auto___14549,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13218__auto__ = null;
var cljs$core$async$state_machine__13218__auto____0 = (function (){
var statearr_14543 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14543[(0)] = cljs$core$async$state_machine__13218__auto__);

(statearr_14543[(1)] = (1));

return statearr_14543;
});
var cljs$core$async$state_machine__13218__auto____1 = (function (state_14502){
while(true){
var ret_value__13219__auto__ = (function (){try{while(true){
var result__13220__auto__ = switch__13217__auto__.call(null,state_14502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13220__auto__;
}
break;
}
}catch (e14544){var ex__13221__auto__ = e14544;
var statearr_14545_14578 = state_14502;
(statearr_14545_14578[(2)] = ex__13221__auto__);


if(cljs.core.seq.call(null,(state_14502[(4)]))){
var statearr_14546_14579 = state_14502;
(statearr_14546_14579[(1)] = cljs.core.first.call(null,(state_14502[(4)])));

} else {
throw ex__13221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14580 = state_14502;
state_14502 = G__14580;
continue;
} else {
return ret_value__13219__auto__;
}
break;
}
});
cljs$core$async$state_machine__13218__auto__ = function(state_14502){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13218__auto____1.call(this,state_14502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13218__auto____0;
cljs$core$async$state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13218__auto____1;
return cljs$core$async$state_machine__13218__auto__;
})()
;})(switch__13217__auto__,c__13291__auto___14549,mults,ensure_mult,p))
})();
var state__13293__auto__ = (function (){var statearr_14547 = f__13292__auto__.call(null);
(statearr_14547[(6)] = c__13291__auto___14549);

return statearr_14547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13293__auto__);
});})(c__13291__auto___14549,mults,ensure_mult,p))
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
var G__14582 = arguments.length;
switch (G__14582) {
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
var G__14585 = arguments.length;
switch (G__14585) {
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
var G__14588 = arguments.length;
switch (G__14588) {
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
var c__13291__auto___14666 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13291__auto___14666,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13292__auto__ = (function (){var switch__13217__auto__ = ((function (c__13291__auto___14666,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14631){
var state_val_14632 = (state_14631[(1)]);
if((state_val_14632 === (7))){
var state_14631__$1 = state_14631;
var statearr_14633_14667 = state_14631__$1;
(statearr_14633_14667[(2)] = null);

(statearr_14633_14667[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14632 === (1))){
var state_14631__$1 = state_14631;
var statearr_14634_14668 = state_14631__$1;
(statearr_14634_14668[(2)] = null);

(statearr_14634_14668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14632 === (4))){
var inst_14592 = (state_14631[(7)]);
var inst_14591 = (state_14631[(8)]);
var inst_14594 = (inst_14592 < inst_14591);
var state_14631__$1 = state_14631;
if(cljs.core.truth_(inst_14594)){
var statearr_14635_14669 = state_14631__$1;
(statearr_14635_14669[(1)] = (6));

} else {
var statearr_14636_14670 = state_14631__$1;
(statearr_14636_14670[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14632 === (15))){
var inst_14617 = (state_14631[(9)]);
var inst_14622 = cljs.core.apply.call(null,f,inst_14617);
var state_14631__$1 = state_14631;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14631__$1,(17),out,inst_14622);
} else {
if((state_val_14632 === (13))){
var inst_14617 = (state_14631[(9)]);
var inst_14617__$1 = (state_14631[(2)]);
var inst_14618 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14617__$1);
var state_14631__$1 = (function (){var statearr_14637 = state_14631;
(statearr_14637[(9)] = inst_14617__$1);

return statearr_14637;
})();
if(cljs.core.truth_(inst_14618)){
var statearr_14638_14671 = state_14631__$1;
(statearr_14638_14671[(1)] = (14));

} else {
var statearr_14639_14672 = state_14631__$1;
(statearr_14639_14672[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14632 === (6))){
var state_14631__$1 = state_14631;
var statearr_14640_14673 = state_14631__$1;
(statearr_14640_14673[(2)] = null);

(statearr_14640_14673[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14632 === (17))){
var inst_14624 = (state_14631[(2)]);
var state_14631__$1 = (function (){var statearr_14642 = state_14631;
(statearr_14642[(10)] = inst_14624);

return statearr_14642;
})();
var statearr_14643_14674 = state_14631__$1;
(statearr_14643_14674[(2)] = null);

(statearr_14643_14674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14632 === (3))){
var inst_14629 = (state_14631[(2)]);
var state_14631__$1 = state_14631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14631__$1,inst_14629);
} else {
if((state_val_14632 === (12))){
var _ = (function (){var statearr_14644 = state_14631;
(statearr_14644[(4)] = cljs.core.rest.call(null,(state_14631[(4)])));

return statearr_14644;
})();
var state_14631__$1 = state_14631;
var ex14641 = (state_14631__$1[(2)]);
var statearr_14645_14675 = state_14631__$1;
(statearr_14645_14675[(5)] = ex14641);


if((ex14641 instanceof Object)){
var statearr_14646_14676 = state_14631__$1;
(statearr_14646_14676[(1)] = (11));

(statearr_14646_14676[(5)] = null);

} else {
throw ex14641;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14632 === (2))){
var inst_14590 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14591 = cnt;
var inst_14592 = (0);
var state_14631__$1 = (function (){var statearr_14647 = state_14631;
(statearr_14647[(7)] = inst_14592);

(statearr_14647[(11)] = inst_14590);

(statearr_14647[(8)] = inst_14591);

return statearr_14647;
})();
var statearr_14648_14677 = state_14631__$1;
(statearr_14648_14677[(2)] = null);

(statearr_14648_14677[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14632 === (11))){
var inst_14596 = (state_14631[(2)]);
var inst_14597 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14631__$1 = (function (){var statearr_14649 = state_14631;
(statearr_14649[(12)] = inst_14596);

return statearr_14649;
})();
var statearr_14650_14678 = state_14631__$1;
(statearr_14650_14678[(2)] = inst_14597);

(statearr_14650_14678[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14632 === (9))){
var inst_14592 = (state_14631[(7)]);
var _ = (function (){var statearr_14651 = state_14631;
(statearr_14651[(4)] = cljs.core.cons.call(null,(12),(state_14631[(4)])));

return statearr_14651;
})();
var inst_14603 = chs__$1.call(null,inst_14592);
var inst_14604 = done.call(null,inst_14592);
var inst_14605 = cljs.core.async.take_BANG_.call(null,inst_14603,inst_14604);
var ___$1 = (function (){var statearr_14652 = state_14631;
(statearr_14652[(4)] = cljs.core.rest.call(null,(state_14631[(4)])));

return statearr_14652;
})();
var state_14631__$1 = state_14631;
var statearr_14653_14679 = state_14631__$1;
(statearr_14653_14679[(2)] = inst_14605);

(statearr_14653_14679[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14632 === (5))){
var inst_14615 = (state_14631[(2)]);
var state_14631__$1 = (function (){var statearr_14654 = state_14631;
(statearr_14654[(13)] = inst_14615);

return statearr_14654;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14631__$1,(13),dchan);
} else {
if((state_val_14632 === (14))){
var inst_14620 = cljs.core.async.close_BANG_.call(null,out);
var state_14631__$1 = state_14631;
var statearr_14655_14680 = state_14631__$1;
(statearr_14655_14680[(2)] = inst_14620);

(statearr_14655_14680[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14632 === (16))){
var inst_14627 = (state_14631[(2)]);
var state_14631__$1 = state_14631;
var statearr_14656_14681 = state_14631__$1;
(statearr_14656_14681[(2)] = inst_14627);

(statearr_14656_14681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14632 === (10))){
var inst_14592 = (state_14631[(7)]);
var inst_14608 = (state_14631[(2)]);
var inst_14609 = (inst_14592 + (1));
var inst_14592__$1 = inst_14609;
var state_14631__$1 = (function (){var statearr_14657 = state_14631;
(statearr_14657[(7)] = inst_14592__$1);

(statearr_14657[(14)] = inst_14608);

return statearr_14657;
})();
var statearr_14658_14682 = state_14631__$1;
(statearr_14658_14682[(2)] = null);

(statearr_14658_14682[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14632 === (8))){
var inst_14613 = (state_14631[(2)]);
var state_14631__$1 = state_14631;
var statearr_14659_14683 = state_14631__$1;
(statearr_14659_14683[(2)] = inst_14613);

(statearr_14659_14683[(1)] = (5));


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
});})(c__13291__auto___14666,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13217__auto__,c__13291__auto___14666,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13218__auto__ = null;
var cljs$core$async$state_machine__13218__auto____0 = (function (){
var statearr_14660 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14660[(0)] = cljs$core$async$state_machine__13218__auto__);

(statearr_14660[(1)] = (1));

return statearr_14660;
});
var cljs$core$async$state_machine__13218__auto____1 = (function (state_14631){
while(true){
var ret_value__13219__auto__ = (function (){try{while(true){
var result__13220__auto__ = switch__13217__auto__.call(null,state_14631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13220__auto__;
}
break;
}
}catch (e14661){var ex__13221__auto__ = e14661;
var statearr_14662_14684 = state_14631;
(statearr_14662_14684[(2)] = ex__13221__auto__);


if(cljs.core.seq.call(null,(state_14631[(4)]))){
var statearr_14663_14685 = state_14631;
(statearr_14663_14685[(1)] = cljs.core.first.call(null,(state_14631[(4)])));

} else {
throw ex__13221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14686 = state_14631;
state_14631 = G__14686;
continue;
} else {
return ret_value__13219__auto__;
}
break;
}
});
cljs$core$async$state_machine__13218__auto__ = function(state_14631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13218__auto____1.call(this,state_14631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13218__auto____0;
cljs$core$async$state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13218__auto____1;
return cljs$core$async$state_machine__13218__auto__;
})()
;})(switch__13217__auto__,c__13291__auto___14666,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13293__auto__ = (function (){var statearr_14664 = f__13292__auto__.call(null);
(statearr_14664[(6)] = c__13291__auto___14666);

return statearr_14664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13293__auto__);
});})(c__13291__auto___14666,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__14689 = arguments.length;
switch (G__14689) {
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
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13291__auto___14744 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13291__auto___14744,out){
return (function (){
var f__13292__auto__ = (function (){var switch__13217__auto__ = ((function (c__13291__auto___14744,out){
return (function (state_14721){
var state_val_14722 = (state_14721[(1)]);
if((state_val_14722 === (7))){
var inst_14701 = (state_14721[(7)]);
var inst_14700 = (state_14721[(8)]);
var inst_14700__$1 = (state_14721[(2)]);
var inst_14701__$1 = cljs.core.nth.call(null,inst_14700__$1,(0),null);
var inst_14702 = cljs.core.nth.call(null,inst_14700__$1,(1),null);
var inst_14703 = (inst_14701__$1 == null);
var state_14721__$1 = (function (){var statearr_14723 = state_14721;
(statearr_14723[(7)] = inst_14701__$1);

(statearr_14723[(8)] = inst_14700__$1);

(statearr_14723[(9)] = inst_14702);

return statearr_14723;
})();
if(cljs.core.truth_(inst_14703)){
var statearr_14724_14745 = state_14721__$1;
(statearr_14724_14745[(1)] = (8));

} else {
var statearr_14725_14746 = state_14721__$1;
(statearr_14725_14746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14722 === (1))){
var inst_14690 = cljs.core.vec.call(null,chs);
var inst_14691 = inst_14690;
var state_14721__$1 = (function (){var statearr_14726 = state_14721;
(statearr_14726[(10)] = inst_14691);

return statearr_14726;
})();
var statearr_14727_14747 = state_14721__$1;
(statearr_14727_14747[(2)] = null);

(statearr_14727_14747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14722 === (4))){
var inst_14691 = (state_14721[(10)]);
var state_14721__$1 = state_14721;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14721__$1,(7),inst_14691);
} else {
if((state_val_14722 === (6))){
var inst_14717 = (state_14721[(2)]);
var state_14721__$1 = state_14721;
var statearr_14728_14748 = state_14721__$1;
(statearr_14728_14748[(2)] = inst_14717);

(statearr_14728_14748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14722 === (3))){
var inst_14719 = (state_14721[(2)]);
var state_14721__$1 = state_14721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14721__$1,inst_14719);
} else {
if((state_val_14722 === (2))){
var inst_14691 = (state_14721[(10)]);
var inst_14693 = cljs.core.count.call(null,inst_14691);
var inst_14694 = (inst_14693 > (0));
var state_14721__$1 = state_14721;
if(cljs.core.truth_(inst_14694)){
var statearr_14730_14749 = state_14721__$1;
(statearr_14730_14749[(1)] = (4));

} else {
var statearr_14731_14750 = state_14721__$1;
(statearr_14731_14750[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14722 === (11))){
var inst_14691 = (state_14721[(10)]);
var inst_14710 = (state_14721[(2)]);
var tmp14729 = inst_14691;
var inst_14691__$1 = tmp14729;
var state_14721__$1 = (function (){var statearr_14732 = state_14721;
(statearr_14732[(10)] = inst_14691__$1);

(statearr_14732[(11)] = inst_14710);

return statearr_14732;
})();
var statearr_14733_14751 = state_14721__$1;
(statearr_14733_14751[(2)] = null);

(statearr_14733_14751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14722 === (9))){
var inst_14701 = (state_14721[(7)]);
var state_14721__$1 = state_14721;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14721__$1,(11),out,inst_14701);
} else {
if((state_val_14722 === (5))){
var inst_14715 = cljs.core.async.close_BANG_.call(null,out);
var state_14721__$1 = state_14721;
var statearr_14734_14752 = state_14721__$1;
(statearr_14734_14752[(2)] = inst_14715);

(statearr_14734_14752[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14722 === (10))){
var inst_14713 = (state_14721[(2)]);
var state_14721__$1 = state_14721;
var statearr_14735_14753 = state_14721__$1;
(statearr_14735_14753[(2)] = inst_14713);

(statearr_14735_14753[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14722 === (8))){
var inst_14701 = (state_14721[(7)]);
var inst_14700 = (state_14721[(8)]);
var inst_14702 = (state_14721[(9)]);
var inst_14691 = (state_14721[(10)]);
var inst_14705 = (function (){var cs = inst_14691;
var vec__14696 = inst_14700;
var v = inst_14701;
var c = inst_14702;
return ((function (cs,vec__14696,v,c,inst_14701,inst_14700,inst_14702,inst_14691,state_val_14722,c__13291__auto___14744,out){
return (function (p1__14687_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14687_SHARP_);
});
;})(cs,vec__14696,v,c,inst_14701,inst_14700,inst_14702,inst_14691,state_val_14722,c__13291__auto___14744,out))
})();
var inst_14706 = cljs.core.filterv.call(null,inst_14705,inst_14691);
var inst_14691__$1 = inst_14706;
var state_14721__$1 = (function (){var statearr_14736 = state_14721;
(statearr_14736[(10)] = inst_14691__$1);

return statearr_14736;
})();
var statearr_14737_14754 = state_14721__$1;
(statearr_14737_14754[(2)] = null);

(statearr_14737_14754[(1)] = (2));


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
});})(c__13291__auto___14744,out))
;
return ((function (switch__13217__auto__,c__13291__auto___14744,out){
return (function() {
var cljs$core$async$state_machine__13218__auto__ = null;
var cljs$core$async$state_machine__13218__auto____0 = (function (){
var statearr_14738 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14738[(0)] = cljs$core$async$state_machine__13218__auto__);

(statearr_14738[(1)] = (1));

return statearr_14738;
});
var cljs$core$async$state_machine__13218__auto____1 = (function (state_14721){
while(true){
var ret_value__13219__auto__ = (function (){try{while(true){
var result__13220__auto__ = switch__13217__auto__.call(null,state_14721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13220__auto__;
}
break;
}
}catch (e14739){var ex__13221__auto__ = e14739;
var statearr_14740_14755 = state_14721;
(statearr_14740_14755[(2)] = ex__13221__auto__);


if(cljs.core.seq.call(null,(state_14721[(4)]))){
var statearr_14741_14756 = state_14721;
(statearr_14741_14756[(1)] = cljs.core.first.call(null,(state_14721[(4)])));

} else {
throw ex__13221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14757 = state_14721;
state_14721 = G__14757;
continue;
} else {
return ret_value__13219__auto__;
}
break;
}
});
cljs$core$async$state_machine__13218__auto__ = function(state_14721){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13218__auto____1.call(this,state_14721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13218__auto____0;
cljs$core$async$state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13218__auto____1;
return cljs$core$async$state_machine__13218__auto__;
})()
;})(switch__13217__auto__,c__13291__auto___14744,out))
})();
var state__13293__auto__ = (function (){var statearr_14742 = f__13292__auto__.call(null);
(statearr_14742[(6)] = c__13291__auto___14744);

return statearr_14742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13293__auto__);
});})(c__13291__auto___14744,out))
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
var G__14759 = arguments.length;
switch (G__14759) {
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
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13291__auto___14805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13291__auto___14805,out){
return (function (){
var f__13292__auto__ = (function (){var switch__13217__auto__ = ((function (c__13291__auto___14805,out){
return (function (state_14783){
var state_val_14784 = (state_14783[(1)]);
if((state_val_14784 === (7))){
var inst_14765 = (state_14783[(7)]);
var inst_14765__$1 = (state_14783[(2)]);
var inst_14766 = (inst_14765__$1 == null);
var inst_14767 = cljs.core.not.call(null,inst_14766);
var state_14783__$1 = (function (){var statearr_14785 = state_14783;
(statearr_14785[(7)] = inst_14765__$1);

return statearr_14785;
})();
if(inst_14767){
var statearr_14786_14806 = state_14783__$1;
(statearr_14786_14806[(1)] = (8));

} else {
var statearr_14787_14807 = state_14783__$1;
(statearr_14787_14807[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14784 === (1))){
var inst_14760 = (0);
var state_14783__$1 = (function (){var statearr_14788 = state_14783;
(statearr_14788[(8)] = inst_14760);

return statearr_14788;
})();
var statearr_14789_14808 = state_14783__$1;
(statearr_14789_14808[(2)] = null);

(statearr_14789_14808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14784 === (4))){
var state_14783__$1 = state_14783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14783__$1,(7),ch);
} else {
if((state_val_14784 === (6))){
var inst_14778 = (state_14783[(2)]);
var state_14783__$1 = state_14783;
var statearr_14790_14809 = state_14783__$1;
(statearr_14790_14809[(2)] = inst_14778);

(statearr_14790_14809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14784 === (3))){
var inst_14780 = (state_14783[(2)]);
var inst_14781 = cljs.core.async.close_BANG_.call(null,out);
var state_14783__$1 = (function (){var statearr_14791 = state_14783;
(statearr_14791[(9)] = inst_14780);

return statearr_14791;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14783__$1,inst_14781);
} else {
if((state_val_14784 === (2))){
var inst_14760 = (state_14783[(8)]);
var inst_14762 = (inst_14760 < n);
var state_14783__$1 = state_14783;
if(cljs.core.truth_(inst_14762)){
var statearr_14792_14810 = state_14783__$1;
(statearr_14792_14810[(1)] = (4));

} else {
var statearr_14793_14811 = state_14783__$1;
(statearr_14793_14811[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14784 === (11))){
var inst_14760 = (state_14783[(8)]);
var inst_14770 = (state_14783[(2)]);
var inst_14771 = (inst_14760 + (1));
var inst_14760__$1 = inst_14771;
var state_14783__$1 = (function (){var statearr_14794 = state_14783;
(statearr_14794[(10)] = inst_14770);

(statearr_14794[(8)] = inst_14760__$1);

return statearr_14794;
})();
var statearr_14795_14812 = state_14783__$1;
(statearr_14795_14812[(2)] = null);

(statearr_14795_14812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14784 === (9))){
var state_14783__$1 = state_14783;
var statearr_14796_14813 = state_14783__$1;
(statearr_14796_14813[(2)] = null);

(statearr_14796_14813[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14784 === (5))){
var state_14783__$1 = state_14783;
var statearr_14797_14814 = state_14783__$1;
(statearr_14797_14814[(2)] = null);

(statearr_14797_14814[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14784 === (10))){
var inst_14775 = (state_14783[(2)]);
var state_14783__$1 = state_14783;
var statearr_14798_14815 = state_14783__$1;
(statearr_14798_14815[(2)] = inst_14775);

(statearr_14798_14815[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14784 === (8))){
var inst_14765 = (state_14783[(7)]);
var state_14783__$1 = state_14783;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14783__$1,(11),out,inst_14765);
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
});})(c__13291__auto___14805,out))
;
return ((function (switch__13217__auto__,c__13291__auto___14805,out){
return (function() {
var cljs$core$async$state_machine__13218__auto__ = null;
var cljs$core$async$state_machine__13218__auto____0 = (function (){
var statearr_14799 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14799[(0)] = cljs$core$async$state_machine__13218__auto__);

(statearr_14799[(1)] = (1));

return statearr_14799;
});
var cljs$core$async$state_machine__13218__auto____1 = (function (state_14783){
while(true){
var ret_value__13219__auto__ = (function (){try{while(true){
var result__13220__auto__ = switch__13217__auto__.call(null,state_14783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13220__auto__;
}
break;
}
}catch (e14800){var ex__13221__auto__ = e14800;
var statearr_14801_14816 = state_14783;
(statearr_14801_14816[(2)] = ex__13221__auto__);


if(cljs.core.seq.call(null,(state_14783[(4)]))){
var statearr_14802_14817 = state_14783;
(statearr_14802_14817[(1)] = cljs.core.first.call(null,(state_14783[(4)])));

} else {
throw ex__13221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14818 = state_14783;
state_14783 = G__14818;
continue;
} else {
return ret_value__13219__auto__;
}
break;
}
});
cljs$core$async$state_machine__13218__auto__ = function(state_14783){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13218__auto____1.call(this,state_14783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13218__auto____0;
cljs$core$async$state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13218__auto____1;
return cljs$core$async$state_machine__13218__auto__;
})()
;})(switch__13217__auto__,c__13291__auto___14805,out))
})();
var state__13293__auto__ = (function (){var statearr_14803 = f__13292__auto__.call(null);
(statearr_14803[(6)] = c__13291__auto___14805);

return statearr_14803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13293__auto__);
});})(c__13291__auto___14805,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14820 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14820 = (function (f,ch,meta14821){
this.f = f;
this.ch = ch;
this.meta14821 = meta14821;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14822,meta14821__$1){
var self__ = this;
var _14822__$1 = this;
return (new cljs.core.async.t_cljs$core$async14820(self__.f,self__.ch,meta14821__$1));
});

cljs.core.async.t_cljs$core$async14820.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14822){
var self__ = this;
var _14822__$1 = this;
return self__.meta14821;
});

cljs.core.async.t_cljs$core$async14820.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14820.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14820.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14820.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14820.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14823 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14823 = (function (f,ch,meta14821,_,fn1,meta14824){
this.f = f;
this.ch = ch;
this.meta14821 = meta14821;
this._ = _;
this.fn1 = fn1;
this.meta14824 = meta14824;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14825,meta14824__$1){
var self__ = this;
var _14825__$1 = this;
return (new cljs.core.async.t_cljs$core$async14823(self__.f,self__.ch,self__.meta14821,self__._,self__.fn1,meta14824__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async14823.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14825){
var self__ = this;
var _14825__$1 = this;
return self__.meta14824;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14823.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14823.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14823.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14823.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14819_SHARP_){
return f1.call(null,(((p1__14819_SHARP_ == null))?null:self__.f.call(null,p1__14819_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async14823.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14821","meta14821",514829290,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14820","cljs.core.async/t_cljs$core$async14820",-1620745093,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14824","meta14824",1336704248,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14823.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14823.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14823";

cljs.core.async.t_cljs$core$async14823.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async14823");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14823.
 */
cljs.core.async.__GT_t_cljs$core$async14823 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14823(f__$1,ch__$1,meta14821__$1,___$2,fn1__$1,meta14824){
return (new cljs.core.async.t_cljs$core$async14823(f__$1,ch__$1,meta14821__$1,___$2,fn1__$1,meta14824));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async14823(self__.f,self__.ch,self__.meta14821,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async14820.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14820.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async14820.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14821","meta14821",514829290,null)], null);
});

cljs.core.async.t_cljs$core$async14820.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14820.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14820";

cljs.core.async.t_cljs$core$async14820.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async14820");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14820.
 */
cljs.core.async.__GT_t_cljs$core$async14820 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14820(f__$1,ch__$1,meta14821){
return (new cljs.core.async.t_cljs$core$async14820(f__$1,ch__$1,meta14821));
});

}

return (new cljs.core.async.t_cljs$core$async14820(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14826 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14826 = (function (f,ch,meta14827){
this.f = f;
this.ch = ch;
this.meta14827 = meta14827;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14828,meta14827__$1){
var self__ = this;
var _14828__$1 = this;
return (new cljs.core.async.t_cljs$core$async14826(self__.f,self__.ch,meta14827__$1));
});

cljs.core.async.t_cljs$core$async14826.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14828){
var self__ = this;
var _14828__$1 = this;
return self__.meta14827;
});

cljs.core.async.t_cljs$core$async14826.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14826.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14826.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14826.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14826.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14826.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async14826.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14827","meta14827",-1382383867,null)], null);
});

cljs.core.async.t_cljs$core$async14826.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14826.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14826";

cljs.core.async.t_cljs$core$async14826.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async14826");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14826.
 */
cljs.core.async.__GT_t_cljs$core$async14826 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14826(f__$1,ch__$1,meta14827){
return (new cljs.core.async.t_cljs$core$async14826(f__$1,ch__$1,meta14827));
});

}

return (new cljs.core.async.t_cljs$core$async14826(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14829 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14829 = (function (p,ch,meta14830){
this.p = p;
this.ch = ch;
this.meta14830 = meta14830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14831,meta14830__$1){
var self__ = this;
var _14831__$1 = this;
return (new cljs.core.async.t_cljs$core$async14829(self__.p,self__.ch,meta14830__$1));
});

cljs.core.async.t_cljs$core$async14829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14831){
var self__ = this;
var _14831__$1 = this;
return self__.meta14830;
});

cljs.core.async.t_cljs$core$async14829.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14829.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14829.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14829.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14829.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14829.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14829.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async14829.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14830","meta14830",-399334899,null)], null);
});

cljs.core.async.t_cljs$core$async14829.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14829";

cljs.core.async.t_cljs$core$async14829.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async14829");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14829.
 */
cljs.core.async.__GT_t_cljs$core$async14829 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14829(p__$1,ch__$1,meta14830){
return (new cljs.core.async.t_cljs$core$async14829(p__$1,ch__$1,meta14830));
});

}

return (new cljs.core.async.t_cljs$core$async14829(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__14833 = arguments.length;
switch (G__14833) {
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
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13291__auto___14874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13291__auto___14874,out){
return (function (){
var f__13292__auto__ = (function (){var switch__13217__auto__ = ((function (c__13291__auto___14874,out){
return (function (state_14854){
var state_val_14855 = (state_14854[(1)]);
if((state_val_14855 === (7))){
var inst_14850 = (state_14854[(2)]);
var state_14854__$1 = state_14854;
var statearr_14856_14875 = state_14854__$1;
(statearr_14856_14875[(2)] = inst_14850);

(statearr_14856_14875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14855 === (1))){
var state_14854__$1 = state_14854;
var statearr_14857_14876 = state_14854__$1;
(statearr_14857_14876[(2)] = null);

(statearr_14857_14876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14855 === (4))){
var inst_14836 = (state_14854[(7)]);
var inst_14836__$1 = (state_14854[(2)]);
var inst_14837 = (inst_14836__$1 == null);
var state_14854__$1 = (function (){var statearr_14858 = state_14854;
(statearr_14858[(7)] = inst_14836__$1);

return statearr_14858;
})();
if(cljs.core.truth_(inst_14837)){
var statearr_14859_14877 = state_14854__$1;
(statearr_14859_14877[(1)] = (5));

} else {
var statearr_14860_14878 = state_14854__$1;
(statearr_14860_14878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14855 === (6))){
var inst_14836 = (state_14854[(7)]);
var inst_14841 = p.call(null,inst_14836);
var state_14854__$1 = state_14854;
if(cljs.core.truth_(inst_14841)){
var statearr_14861_14879 = state_14854__$1;
(statearr_14861_14879[(1)] = (8));

} else {
var statearr_14862_14880 = state_14854__$1;
(statearr_14862_14880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14855 === (3))){
var inst_14852 = (state_14854[(2)]);
var state_14854__$1 = state_14854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14854__$1,inst_14852);
} else {
if((state_val_14855 === (2))){
var state_14854__$1 = state_14854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14854__$1,(4),ch);
} else {
if((state_val_14855 === (11))){
var inst_14844 = (state_14854[(2)]);
var state_14854__$1 = state_14854;
var statearr_14863_14881 = state_14854__$1;
(statearr_14863_14881[(2)] = inst_14844);

(statearr_14863_14881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14855 === (9))){
var state_14854__$1 = state_14854;
var statearr_14864_14882 = state_14854__$1;
(statearr_14864_14882[(2)] = null);

(statearr_14864_14882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14855 === (5))){
var inst_14839 = cljs.core.async.close_BANG_.call(null,out);
var state_14854__$1 = state_14854;
var statearr_14865_14883 = state_14854__$1;
(statearr_14865_14883[(2)] = inst_14839);

(statearr_14865_14883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14855 === (10))){
var inst_14847 = (state_14854[(2)]);
var state_14854__$1 = (function (){var statearr_14866 = state_14854;
(statearr_14866[(8)] = inst_14847);

return statearr_14866;
})();
var statearr_14867_14884 = state_14854__$1;
(statearr_14867_14884[(2)] = null);

(statearr_14867_14884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14855 === (8))){
var inst_14836 = (state_14854[(7)]);
var state_14854__$1 = state_14854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14854__$1,(11),out,inst_14836);
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
});})(c__13291__auto___14874,out))
;
return ((function (switch__13217__auto__,c__13291__auto___14874,out){
return (function() {
var cljs$core$async$state_machine__13218__auto__ = null;
var cljs$core$async$state_machine__13218__auto____0 = (function (){
var statearr_14868 = [null,null,null,null,null,null,null,null,null];
(statearr_14868[(0)] = cljs$core$async$state_machine__13218__auto__);

(statearr_14868[(1)] = (1));

return statearr_14868;
});
var cljs$core$async$state_machine__13218__auto____1 = (function (state_14854){
while(true){
var ret_value__13219__auto__ = (function (){try{while(true){
var result__13220__auto__ = switch__13217__auto__.call(null,state_14854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13220__auto__;
}
break;
}
}catch (e14869){var ex__13221__auto__ = e14869;
var statearr_14870_14885 = state_14854;
(statearr_14870_14885[(2)] = ex__13221__auto__);


if(cljs.core.seq.call(null,(state_14854[(4)]))){
var statearr_14871_14886 = state_14854;
(statearr_14871_14886[(1)] = cljs.core.first.call(null,(state_14854[(4)])));

} else {
throw ex__13221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14887 = state_14854;
state_14854 = G__14887;
continue;
} else {
return ret_value__13219__auto__;
}
break;
}
});
cljs$core$async$state_machine__13218__auto__ = function(state_14854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13218__auto____1.call(this,state_14854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13218__auto____0;
cljs$core$async$state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13218__auto____1;
return cljs$core$async$state_machine__13218__auto__;
})()
;})(switch__13217__auto__,c__13291__auto___14874,out))
})();
var state__13293__auto__ = (function (){var statearr_14872 = f__13292__auto__.call(null);
(statearr_14872[(6)] = c__13291__auto___14874);

return statearr_14872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13293__auto__);
});})(c__13291__auto___14874,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__14889 = arguments.length;
switch (G__14889) {
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
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13291__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13291__auto__){
return (function (){
var f__13292__auto__ = (function (){var switch__13217__auto__ = ((function (c__13291__auto__){
return (function (state_14952){
var state_val_14953 = (state_14952[(1)]);
if((state_val_14953 === (7))){
var inst_14948 = (state_14952[(2)]);
var state_14952__$1 = state_14952;
var statearr_14954_14993 = state_14952__$1;
(statearr_14954_14993[(2)] = inst_14948);

(statearr_14954_14993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (20))){
var inst_14918 = (state_14952[(7)]);
var inst_14929 = (state_14952[(2)]);
var inst_14930 = cljs.core.next.call(null,inst_14918);
var inst_14904 = inst_14930;
var inst_14905 = null;
var inst_14906 = (0);
var inst_14907 = (0);
var state_14952__$1 = (function (){var statearr_14955 = state_14952;
(statearr_14955[(8)] = inst_14906);

(statearr_14955[(9)] = inst_14907);

(statearr_14955[(10)] = inst_14905);

(statearr_14955[(11)] = inst_14929);

(statearr_14955[(12)] = inst_14904);

return statearr_14955;
})();
var statearr_14956_14994 = state_14952__$1;
(statearr_14956_14994[(2)] = null);

(statearr_14956_14994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (1))){
var state_14952__$1 = state_14952;
var statearr_14957_14995 = state_14952__$1;
(statearr_14957_14995[(2)] = null);

(statearr_14957_14995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (4))){
var inst_14893 = (state_14952[(13)]);
var inst_14893__$1 = (state_14952[(2)]);
var inst_14894 = (inst_14893__$1 == null);
var state_14952__$1 = (function (){var statearr_14958 = state_14952;
(statearr_14958[(13)] = inst_14893__$1);

return statearr_14958;
})();
if(cljs.core.truth_(inst_14894)){
var statearr_14959_14996 = state_14952__$1;
(statearr_14959_14996[(1)] = (5));

} else {
var statearr_14960_14997 = state_14952__$1;
(statearr_14960_14997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (15))){
var state_14952__$1 = state_14952;
var statearr_14964_14998 = state_14952__$1;
(statearr_14964_14998[(2)] = null);

(statearr_14964_14998[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (21))){
var state_14952__$1 = state_14952;
var statearr_14965_14999 = state_14952__$1;
(statearr_14965_14999[(2)] = null);

(statearr_14965_14999[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (13))){
var inst_14906 = (state_14952[(8)]);
var inst_14907 = (state_14952[(9)]);
var inst_14905 = (state_14952[(10)]);
var inst_14904 = (state_14952[(12)]);
var inst_14914 = (state_14952[(2)]);
var inst_14915 = (inst_14907 + (1));
var tmp14961 = inst_14906;
var tmp14962 = inst_14905;
var tmp14963 = inst_14904;
var inst_14904__$1 = tmp14963;
var inst_14905__$1 = tmp14962;
var inst_14906__$1 = tmp14961;
var inst_14907__$1 = inst_14915;
var state_14952__$1 = (function (){var statearr_14966 = state_14952;
(statearr_14966[(8)] = inst_14906__$1);

(statearr_14966[(9)] = inst_14907__$1);

(statearr_14966[(10)] = inst_14905__$1);

(statearr_14966[(14)] = inst_14914);

(statearr_14966[(12)] = inst_14904__$1);

return statearr_14966;
})();
var statearr_14967_15000 = state_14952__$1;
(statearr_14967_15000[(2)] = null);

(statearr_14967_15000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (22))){
var state_14952__$1 = state_14952;
var statearr_14968_15001 = state_14952__$1;
(statearr_14968_15001[(2)] = null);

(statearr_14968_15001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (6))){
var inst_14893 = (state_14952[(13)]);
var inst_14902 = f.call(null,inst_14893);
var inst_14903 = cljs.core.seq.call(null,inst_14902);
var inst_14904 = inst_14903;
var inst_14905 = null;
var inst_14906 = (0);
var inst_14907 = (0);
var state_14952__$1 = (function (){var statearr_14969 = state_14952;
(statearr_14969[(8)] = inst_14906);

(statearr_14969[(9)] = inst_14907);

(statearr_14969[(10)] = inst_14905);

(statearr_14969[(12)] = inst_14904);

return statearr_14969;
})();
var statearr_14970_15002 = state_14952__$1;
(statearr_14970_15002[(2)] = null);

(statearr_14970_15002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (17))){
var inst_14918 = (state_14952[(7)]);
var inst_14922 = cljs.core.chunk_first.call(null,inst_14918);
var inst_14923 = cljs.core.chunk_rest.call(null,inst_14918);
var inst_14924 = cljs.core.count.call(null,inst_14922);
var inst_14904 = inst_14923;
var inst_14905 = inst_14922;
var inst_14906 = inst_14924;
var inst_14907 = (0);
var state_14952__$1 = (function (){var statearr_14971 = state_14952;
(statearr_14971[(8)] = inst_14906);

(statearr_14971[(9)] = inst_14907);

(statearr_14971[(10)] = inst_14905);

(statearr_14971[(12)] = inst_14904);

return statearr_14971;
})();
var statearr_14972_15003 = state_14952__$1;
(statearr_14972_15003[(2)] = null);

(statearr_14972_15003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (3))){
var inst_14950 = (state_14952[(2)]);
var state_14952__$1 = state_14952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14952__$1,inst_14950);
} else {
if((state_val_14953 === (12))){
var inst_14938 = (state_14952[(2)]);
var state_14952__$1 = state_14952;
var statearr_14973_15004 = state_14952__$1;
(statearr_14973_15004[(2)] = inst_14938);

(statearr_14973_15004[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (2))){
var state_14952__$1 = state_14952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14952__$1,(4),in$);
} else {
if((state_val_14953 === (23))){
var inst_14946 = (state_14952[(2)]);
var state_14952__$1 = state_14952;
var statearr_14974_15005 = state_14952__$1;
(statearr_14974_15005[(2)] = inst_14946);

(statearr_14974_15005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (19))){
var inst_14933 = (state_14952[(2)]);
var state_14952__$1 = state_14952;
var statearr_14975_15006 = state_14952__$1;
(statearr_14975_15006[(2)] = inst_14933);

(statearr_14975_15006[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (11))){
var inst_14918 = (state_14952[(7)]);
var inst_14904 = (state_14952[(12)]);
var inst_14918__$1 = cljs.core.seq.call(null,inst_14904);
var state_14952__$1 = (function (){var statearr_14976 = state_14952;
(statearr_14976[(7)] = inst_14918__$1);

return statearr_14976;
})();
if(inst_14918__$1){
var statearr_14977_15007 = state_14952__$1;
(statearr_14977_15007[(1)] = (14));

} else {
var statearr_14978_15008 = state_14952__$1;
(statearr_14978_15008[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (9))){
var inst_14940 = (state_14952[(2)]);
var inst_14941 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14952__$1 = (function (){var statearr_14979 = state_14952;
(statearr_14979[(15)] = inst_14940);

return statearr_14979;
})();
if(cljs.core.truth_(inst_14941)){
var statearr_14980_15009 = state_14952__$1;
(statearr_14980_15009[(1)] = (21));

} else {
var statearr_14981_15010 = state_14952__$1;
(statearr_14981_15010[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (5))){
var inst_14896 = cljs.core.async.close_BANG_.call(null,out);
var state_14952__$1 = state_14952;
var statearr_14982_15011 = state_14952__$1;
(statearr_14982_15011[(2)] = inst_14896);

(statearr_14982_15011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (14))){
var inst_14918 = (state_14952[(7)]);
var inst_14920 = cljs.core.chunked_seq_QMARK_.call(null,inst_14918);
var state_14952__$1 = state_14952;
if(inst_14920){
var statearr_14983_15012 = state_14952__$1;
(statearr_14983_15012[(1)] = (17));

} else {
var statearr_14984_15013 = state_14952__$1;
(statearr_14984_15013[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (16))){
var inst_14936 = (state_14952[(2)]);
var state_14952__$1 = state_14952;
var statearr_14985_15014 = state_14952__$1;
(statearr_14985_15014[(2)] = inst_14936);

(statearr_14985_15014[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (10))){
var inst_14907 = (state_14952[(9)]);
var inst_14905 = (state_14952[(10)]);
var inst_14912 = cljs.core._nth.call(null,inst_14905,inst_14907);
var state_14952__$1 = state_14952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14952__$1,(13),out,inst_14912);
} else {
if((state_val_14953 === (18))){
var inst_14918 = (state_14952[(7)]);
var inst_14927 = cljs.core.first.call(null,inst_14918);
var state_14952__$1 = state_14952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14952__$1,(20),out,inst_14927);
} else {
if((state_val_14953 === (8))){
var inst_14906 = (state_14952[(8)]);
var inst_14907 = (state_14952[(9)]);
var inst_14909 = (inst_14907 < inst_14906);
var inst_14910 = inst_14909;
var state_14952__$1 = state_14952;
if(cljs.core.truth_(inst_14910)){
var statearr_14986_15015 = state_14952__$1;
(statearr_14986_15015[(1)] = (10));

} else {
var statearr_14987_15016 = state_14952__$1;
(statearr_14987_15016[(1)] = (11));

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
});})(c__13291__auto__))
;
return ((function (switch__13217__auto__,c__13291__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13218__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13218__auto____0 = (function (){
var statearr_14988 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14988[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13218__auto__);

(statearr_14988[(1)] = (1));

return statearr_14988;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13218__auto____1 = (function (state_14952){
while(true){
var ret_value__13219__auto__ = (function (){try{while(true){
var result__13220__auto__ = switch__13217__auto__.call(null,state_14952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13220__auto__;
}
break;
}
}catch (e14989){var ex__13221__auto__ = e14989;
var statearr_14990_15017 = state_14952;
(statearr_14990_15017[(2)] = ex__13221__auto__);


if(cljs.core.seq.call(null,(state_14952[(4)]))){
var statearr_14991_15018 = state_14952;
(statearr_14991_15018[(1)] = cljs.core.first.call(null,(state_14952[(4)])));

} else {
throw ex__13221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15019 = state_14952;
state_14952 = G__15019;
continue;
} else {
return ret_value__13219__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13218__auto__ = function(state_14952){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13218__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13218__auto____1.call(this,state_14952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13218__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13218__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13218__auto__;
})()
;})(switch__13217__auto__,c__13291__auto__))
})();
var state__13293__auto__ = (function (){var statearr_14992 = f__13292__auto__.call(null);
(statearr_14992[(6)] = c__13291__auto__);

return statearr_14992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13293__auto__);
});})(c__13291__auto__))
);

return c__13291__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__15021 = arguments.length;
switch (G__15021) {
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
var G__15024 = arguments.length;
switch (G__15024) {
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
var G__15027 = arguments.length;
switch (G__15027) {
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
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13291__auto___15075 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13291__auto___15075,out){
return (function (){
var f__13292__auto__ = (function (){var switch__13217__auto__ = ((function (c__13291__auto___15075,out){
return (function (state_15051){
var state_val_15052 = (state_15051[(1)]);
if((state_val_15052 === (7))){
var inst_15046 = (state_15051[(2)]);
var state_15051__$1 = state_15051;
var statearr_15053_15076 = state_15051__$1;
(statearr_15053_15076[(2)] = inst_15046);

(statearr_15053_15076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (1))){
var inst_15028 = null;
var state_15051__$1 = (function (){var statearr_15054 = state_15051;
(statearr_15054[(7)] = inst_15028);

return statearr_15054;
})();
var statearr_15055_15077 = state_15051__$1;
(statearr_15055_15077[(2)] = null);

(statearr_15055_15077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (4))){
var inst_15031 = (state_15051[(8)]);
var inst_15031__$1 = (state_15051[(2)]);
var inst_15032 = (inst_15031__$1 == null);
var inst_15033 = cljs.core.not.call(null,inst_15032);
var state_15051__$1 = (function (){var statearr_15056 = state_15051;
(statearr_15056[(8)] = inst_15031__$1);

return statearr_15056;
})();
if(inst_15033){
var statearr_15057_15078 = state_15051__$1;
(statearr_15057_15078[(1)] = (5));

} else {
var statearr_15058_15079 = state_15051__$1;
(statearr_15058_15079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (6))){
var state_15051__$1 = state_15051;
var statearr_15059_15080 = state_15051__$1;
(statearr_15059_15080[(2)] = null);

(statearr_15059_15080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (3))){
var inst_15048 = (state_15051[(2)]);
var inst_15049 = cljs.core.async.close_BANG_.call(null,out);
var state_15051__$1 = (function (){var statearr_15060 = state_15051;
(statearr_15060[(9)] = inst_15048);

return statearr_15060;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15051__$1,inst_15049);
} else {
if((state_val_15052 === (2))){
var state_15051__$1 = state_15051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15051__$1,(4),ch);
} else {
if((state_val_15052 === (11))){
var inst_15031 = (state_15051[(8)]);
var inst_15040 = (state_15051[(2)]);
var inst_15028 = inst_15031;
var state_15051__$1 = (function (){var statearr_15061 = state_15051;
(statearr_15061[(10)] = inst_15040);

(statearr_15061[(7)] = inst_15028);

return statearr_15061;
})();
var statearr_15062_15081 = state_15051__$1;
(statearr_15062_15081[(2)] = null);

(statearr_15062_15081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (9))){
var inst_15031 = (state_15051[(8)]);
var state_15051__$1 = state_15051;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15051__$1,(11),out,inst_15031);
} else {
if((state_val_15052 === (5))){
var inst_15028 = (state_15051[(7)]);
var inst_15031 = (state_15051[(8)]);
var inst_15035 = cljs.core._EQ_.call(null,inst_15031,inst_15028);
var state_15051__$1 = state_15051;
if(inst_15035){
var statearr_15064_15082 = state_15051__$1;
(statearr_15064_15082[(1)] = (8));

} else {
var statearr_15065_15083 = state_15051__$1;
(statearr_15065_15083[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (10))){
var inst_15043 = (state_15051[(2)]);
var state_15051__$1 = state_15051;
var statearr_15066_15084 = state_15051__$1;
(statearr_15066_15084[(2)] = inst_15043);

(statearr_15066_15084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (8))){
var inst_15028 = (state_15051[(7)]);
var tmp15063 = inst_15028;
var inst_15028__$1 = tmp15063;
var state_15051__$1 = (function (){var statearr_15067 = state_15051;
(statearr_15067[(7)] = inst_15028__$1);

return statearr_15067;
})();
var statearr_15068_15085 = state_15051__$1;
(statearr_15068_15085[(2)] = null);

(statearr_15068_15085[(1)] = (2));


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
});})(c__13291__auto___15075,out))
;
return ((function (switch__13217__auto__,c__13291__auto___15075,out){
return (function() {
var cljs$core$async$state_machine__13218__auto__ = null;
var cljs$core$async$state_machine__13218__auto____0 = (function (){
var statearr_15069 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15069[(0)] = cljs$core$async$state_machine__13218__auto__);

(statearr_15069[(1)] = (1));

return statearr_15069;
});
var cljs$core$async$state_machine__13218__auto____1 = (function (state_15051){
while(true){
var ret_value__13219__auto__ = (function (){try{while(true){
var result__13220__auto__ = switch__13217__auto__.call(null,state_15051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13220__auto__;
}
break;
}
}catch (e15070){var ex__13221__auto__ = e15070;
var statearr_15071_15086 = state_15051;
(statearr_15071_15086[(2)] = ex__13221__auto__);


if(cljs.core.seq.call(null,(state_15051[(4)]))){
var statearr_15072_15087 = state_15051;
(statearr_15072_15087[(1)] = cljs.core.first.call(null,(state_15051[(4)])));

} else {
throw ex__13221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15088 = state_15051;
state_15051 = G__15088;
continue;
} else {
return ret_value__13219__auto__;
}
break;
}
});
cljs$core$async$state_machine__13218__auto__ = function(state_15051){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13218__auto____1.call(this,state_15051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13218__auto____0;
cljs$core$async$state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13218__auto____1;
return cljs$core$async$state_machine__13218__auto__;
})()
;})(switch__13217__auto__,c__13291__auto___15075,out))
})();
var state__13293__auto__ = (function (){var statearr_15073 = f__13292__auto__.call(null);
(statearr_15073[(6)] = c__13291__auto___15075);

return statearr_15073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13293__auto__);
});})(c__13291__auto___15075,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__15090 = arguments.length;
switch (G__15090) {
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
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13291__auto___15157 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13291__auto___15157,out){
return (function (){
var f__13292__auto__ = (function (){var switch__13217__auto__ = ((function (c__13291__auto___15157,out){
return (function (state_15128){
var state_val_15129 = (state_15128[(1)]);
if((state_val_15129 === (7))){
var inst_15124 = (state_15128[(2)]);
var state_15128__$1 = state_15128;
var statearr_15130_15158 = state_15128__$1;
(statearr_15130_15158[(2)] = inst_15124);

(statearr_15130_15158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (1))){
var inst_15091 = (new Array(n));
var inst_15092 = inst_15091;
var inst_15093 = (0);
var state_15128__$1 = (function (){var statearr_15131 = state_15128;
(statearr_15131[(7)] = inst_15092);

(statearr_15131[(8)] = inst_15093);

return statearr_15131;
})();
var statearr_15132_15159 = state_15128__$1;
(statearr_15132_15159[(2)] = null);

(statearr_15132_15159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (4))){
var inst_15096 = (state_15128[(9)]);
var inst_15096__$1 = (state_15128[(2)]);
var inst_15097 = (inst_15096__$1 == null);
var inst_15098 = cljs.core.not.call(null,inst_15097);
var state_15128__$1 = (function (){var statearr_15133 = state_15128;
(statearr_15133[(9)] = inst_15096__$1);

return statearr_15133;
})();
if(inst_15098){
var statearr_15134_15160 = state_15128__$1;
(statearr_15134_15160[(1)] = (5));

} else {
var statearr_15135_15161 = state_15128__$1;
(statearr_15135_15161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (15))){
var inst_15118 = (state_15128[(2)]);
var state_15128__$1 = state_15128;
var statearr_15136_15162 = state_15128__$1;
(statearr_15136_15162[(2)] = inst_15118);

(statearr_15136_15162[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (13))){
var state_15128__$1 = state_15128;
var statearr_15137_15163 = state_15128__$1;
(statearr_15137_15163[(2)] = null);

(statearr_15137_15163[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (6))){
var inst_15093 = (state_15128[(8)]);
var inst_15114 = (inst_15093 > (0));
var state_15128__$1 = state_15128;
if(cljs.core.truth_(inst_15114)){
var statearr_15138_15164 = state_15128__$1;
(statearr_15138_15164[(1)] = (12));

} else {
var statearr_15139_15165 = state_15128__$1;
(statearr_15139_15165[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (3))){
var inst_15126 = (state_15128[(2)]);
var state_15128__$1 = state_15128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15128__$1,inst_15126);
} else {
if((state_val_15129 === (12))){
var inst_15092 = (state_15128[(7)]);
var inst_15116 = cljs.core.vec.call(null,inst_15092);
var state_15128__$1 = state_15128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15128__$1,(15),out,inst_15116);
} else {
if((state_val_15129 === (2))){
var state_15128__$1 = state_15128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15128__$1,(4),ch);
} else {
if((state_val_15129 === (11))){
var inst_15108 = (state_15128[(2)]);
var inst_15109 = (new Array(n));
var inst_15092 = inst_15109;
var inst_15093 = (0);
var state_15128__$1 = (function (){var statearr_15140 = state_15128;
(statearr_15140[(7)] = inst_15092);

(statearr_15140[(8)] = inst_15093);

(statearr_15140[(10)] = inst_15108);

return statearr_15140;
})();
var statearr_15141_15166 = state_15128__$1;
(statearr_15141_15166[(2)] = null);

(statearr_15141_15166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (9))){
var inst_15092 = (state_15128[(7)]);
var inst_15106 = cljs.core.vec.call(null,inst_15092);
var state_15128__$1 = state_15128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15128__$1,(11),out,inst_15106);
} else {
if((state_val_15129 === (5))){
var inst_15096 = (state_15128[(9)]);
var inst_15092 = (state_15128[(7)]);
var inst_15093 = (state_15128[(8)]);
var inst_15101 = (state_15128[(11)]);
var inst_15100 = (inst_15092[inst_15093] = inst_15096);
var inst_15101__$1 = (inst_15093 + (1));
var inst_15102 = (inst_15101__$1 < n);
var state_15128__$1 = (function (){var statearr_15142 = state_15128;
(statearr_15142[(12)] = inst_15100);

(statearr_15142[(11)] = inst_15101__$1);

return statearr_15142;
})();
if(cljs.core.truth_(inst_15102)){
var statearr_15143_15167 = state_15128__$1;
(statearr_15143_15167[(1)] = (8));

} else {
var statearr_15144_15168 = state_15128__$1;
(statearr_15144_15168[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (14))){
var inst_15121 = (state_15128[(2)]);
var inst_15122 = cljs.core.async.close_BANG_.call(null,out);
var state_15128__$1 = (function (){var statearr_15146 = state_15128;
(statearr_15146[(13)] = inst_15121);

return statearr_15146;
})();
var statearr_15147_15169 = state_15128__$1;
(statearr_15147_15169[(2)] = inst_15122);

(statearr_15147_15169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (10))){
var inst_15112 = (state_15128[(2)]);
var state_15128__$1 = state_15128;
var statearr_15148_15170 = state_15128__$1;
(statearr_15148_15170[(2)] = inst_15112);

(statearr_15148_15170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (8))){
var inst_15092 = (state_15128[(7)]);
var inst_15101 = (state_15128[(11)]);
var tmp15145 = inst_15092;
var inst_15092__$1 = tmp15145;
var inst_15093 = inst_15101;
var state_15128__$1 = (function (){var statearr_15149 = state_15128;
(statearr_15149[(7)] = inst_15092__$1);

(statearr_15149[(8)] = inst_15093);

return statearr_15149;
})();
var statearr_15150_15171 = state_15128__$1;
(statearr_15150_15171[(2)] = null);

(statearr_15150_15171[(1)] = (2));


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
});})(c__13291__auto___15157,out))
;
return ((function (switch__13217__auto__,c__13291__auto___15157,out){
return (function() {
var cljs$core$async$state_machine__13218__auto__ = null;
var cljs$core$async$state_machine__13218__auto____0 = (function (){
var statearr_15151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15151[(0)] = cljs$core$async$state_machine__13218__auto__);

(statearr_15151[(1)] = (1));

return statearr_15151;
});
var cljs$core$async$state_machine__13218__auto____1 = (function (state_15128){
while(true){
var ret_value__13219__auto__ = (function (){try{while(true){
var result__13220__auto__ = switch__13217__auto__.call(null,state_15128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13220__auto__;
}
break;
}
}catch (e15152){var ex__13221__auto__ = e15152;
var statearr_15153_15172 = state_15128;
(statearr_15153_15172[(2)] = ex__13221__auto__);


if(cljs.core.seq.call(null,(state_15128[(4)]))){
var statearr_15154_15173 = state_15128;
(statearr_15154_15173[(1)] = cljs.core.first.call(null,(state_15128[(4)])));

} else {
throw ex__13221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15174 = state_15128;
state_15128 = G__15174;
continue;
} else {
return ret_value__13219__auto__;
}
break;
}
});
cljs$core$async$state_machine__13218__auto__ = function(state_15128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13218__auto____1.call(this,state_15128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13218__auto____0;
cljs$core$async$state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13218__auto____1;
return cljs$core$async$state_machine__13218__auto__;
})()
;})(switch__13217__auto__,c__13291__auto___15157,out))
})();
var state__13293__auto__ = (function (){var statearr_15155 = f__13292__auto__.call(null);
(statearr_15155[(6)] = c__13291__auto___15157);

return statearr_15155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13293__auto__);
});})(c__13291__auto___15157,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__15176 = arguments.length;
switch (G__15176) {
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
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13291__auto___15247 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13291__auto___15247,out){
return (function (){
var f__13292__auto__ = (function (){var switch__13217__auto__ = ((function (c__13291__auto___15247,out){
return (function (state_15218){
var state_val_15219 = (state_15218[(1)]);
if((state_val_15219 === (7))){
var inst_15214 = (state_15218[(2)]);
var state_15218__$1 = state_15218;
var statearr_15220_15248 = state_15218__$1;
(statearr_15220_15248[(2)] = inst_15214);

(statearr_15220_15248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15219 === (1))){
var inst_15177 = [];
var inst_15178 = inst_15177;
var inst_15179 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15218__$1 = (function (){var statearr_15221 = state_15218;
(statearr_15221[(7)] = inst_15178);

(statearr_15221[(8)] = inst_15179);

return statearr_15221;
})();
var statearr_15222_15249 = state_15218__$1;
(statearr_15222_15249[(2)] = null);

(statearr_15222_15249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15219 === (4))){
var inst_15182 = (state_15218[(9)]);
var inst_15182__$1 = (state_15218[(2)]);
var inst_15183 = (inst_15182__$1 == null);
var inst_15184 = cljs.core.not.call(null,inst_15183);
var state_15218__$1 = (function (){var statearr_15223 = state_15218;
(statearr_15223[(9)] = inst_15182__$1);

return statearr_15223;
})();
if(inst_15184){
var statearr_15224_15250 = state_15218__$1;
(statearr_15224_15250[(1)] = (5));

} else {
var statearr_15225_15251 = state_15218__$1;
(statearr_15225_15251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15219 === (15))){
var inst_15208 = (state_15218[(2)]);
var state_15218__$1 = state_15218;
var statearr_15226_15252 = state_15218__$1;
(statearr_15226_15252[(2)] = inst_15208);

(statearr_15226_15252[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15219 === (13))){
var state_15218__$1 = state_15218;
var statearr_15227_15253 = state_15218__$1;
(statearr_15227_15253[(2)] = null);

(statearr_15227_15253[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15219 === (6))){
var inst_15178 = (state_15218[(7)]);
var inst_15203 = inst_15178.length;
var inst_15204 = (inst_15203 > (0));
var state_15218__$1 = state_15218;
if(cljs.core.truth_(inst_15204)){
var statearr_15228_15254 = state_15218__$1;
(statearr_15228_15254[(1)] = (12));

} else {
var statearr_15229_15255 = state_15218__$1;
(statearr_15229_15255[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15219 === (3))){
var inst_15216 = (state_15218[(2)]);
var state_15218__$1 = state_15218;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15218__$1,inst_15216);
} else {
if((state_val_15219 === (12))){
var inst_15178 = (state_15218[(7)]);
var inst_15206 = cljs.core.vec.call(null,inst_15178);
var state_15218__$1 = state_15218;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15218__$1,(15),out,inst_15206);
} else {
if((state_val_15219 === (2))){
var state_15218__$1 = state_15218;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15218__$1,(4),ch);
} else {
if((state_val_15219 === (11))){
var inst_15182 = (state_15218[(9)]);
var inst_15186 = (state_15218[(10)]);
var inst_15196 = (state_15218[(2)]);
var inst_15197 = [];
var inst_15198 = inst_15197.push(inst_15182);
var inst_15178 = inst_15197;
var inst_15179 = inst_15186;
var state_15218__$1 = (function (){var statearr_15230 = state_15218;
(statearr_15230[(11)] = inst_15198);

(statearr_15230[(12)] = inst_15196);

(statearr_15230[(7)] = inst_15178);

(statearr_15230[(8)] = inst_15179);

return statearr_15230;
})();
var statearr_15231_15256 = state_15218__$1;
(statearr_15231_15256[(2)] = null);

(statearr_15231_15256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15219 === (9))){
var inst_15178 = (state_15218[(7)]);
var inst_15194 = cljs.core.vec.call(null,inst_15178);
var state_15218__$1 = state_15218;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15218__$1,(11),out,inst_15194);
} else {
if((state_val_15219 === (5))){
var inst_15182 = (state_15218[(9)]);
var inst_15186 = (state_15218[(10)]);
var inst_15179 = (state_15218[(8)]);
var inst_15186__$1 = f.call(null,inst_15182);
var inst_15187 = cljs.core._EQ_.call(null,inst_15186__$1,inst_15179);
var inst_15188 = cljs.core.keyword_identical_QMARK_.call(null,inst_15179,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15189 = ((inst_15187) || (inst_15188));
var state_15218__$1 = (function (){var statearr_15232 = state_15218;
(statearr_15232[(10)] = inst_15186__$1);

return statearr_15232;
})();
if(cljs.core.truth_(inst_15189)){
var statearr_15233_15257 = state_15218__$1;
(statearr_15233_15257[(1)] = (8));

} else {
var statearr_15234_15258 = state_15218__$1;
(statearr_15234_15258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15219 === (14))){
var inst_15211 = (state_15218[(2)]);
var inst_15212 = cljs.core.async.close_BANG_.call(null,out);
var state_15218__$1 = (function (){var statearr_15236 = state_15218;
(statearr_15236[(13)] = inst_15211);

return statearr_15236;
})();
var statearr_15237_15259 = state_15218__$1;
(statearr_15237_15259[(2)] = inst_15212);

(statearr_15237_15259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15219 === (10))){
var inst_15201 = (state_15218[(2)]);
var state_15218__$1 = state_15218;
var statearr_15238_15260 = state_15218__$1;
(statearr_15238_15260[(2)] = inst_15201);

(statearr_15238_15260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15219 === (8))){
var inst_15178 = (state_15218[(7)]);
var inst_15182 = (state_15218[(9)]);
var inst_15186 = (state_15218[(10)]);
var inst_15191 = inst_15178.push(inst_15182);
var tmp15235 = inst_15178;
var inst_15178__$1 = tmp15235;
var inst_15179 = inst_15186;
var state_15218__$1 = (function (){var statearr_15239 = state_15218;
(statearr_15239[(7)] = inst_15178__$1);

(statearr_15239[(14)] = inst_15191);

(statearr_15239[(8)] = inst_15179);

return statearr_15239;
})();
var statearr_15240_15261 = state_15218__$1;
(statearr_15240_15261[(2)] = null);

(statearr_15240_15261[(1)] = (2));


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
});})(c__13291__auto___15247,out))
;
return ((function (switch__13217__auto__,c__13291__auto___15247,out){
return (function() {
var cljs$core$async$state_machine__13218__auto__ = null;
var cljs$core$async$state_machine__13218__auto____0 = (function (){
var statearr_15241 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15241[(0)] = cljs$core$async$state_machine__13218__auto__);

(statearr_15241[(1)] = (1));

return statearr_15241;
});
var cljs$core$async$state_machine__13218__auto____1 = (function (state_15218){
while(true){
var ret_value__13219__auto__ = (function (){try{while(true){
var result__13220__auto__ = switch__13217__auto__.call(null,state_15218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13220__auto__;
}
break;
}
}catch (e15242){var ex__13221__auto__ = e15242;
var statearr_15243_15262 = state_15218;
(statearr_15243_15262[(2)] = ex__13221__auto__);


if(cljs.core.seq.call(null,(state_15218[(4)]))){
var statearr_15244_15263 = state_15218;
(statearr_15244_15263[(1)] = cljs.core.first.call(null,(state_15218[(4)])));

} else {
throw ex__13221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15264 = state_15218;
state_15218 = G__15264;
continue;
} else {
return ret_value__13219__auto__;
}
break;
}
});
cljs$core$async$state_machine__13218__auto__ = function(state_15218){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13218__auto____1.call(this,state_15218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13218__auto____0;
cljs$core$async$state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13218__auto____1;
return cljs$core$async$state_machine__13218__auto__;
})()
;})(switch__13217__auto__,c__13291__auto___15247,out))
})();
var state__13293__auto__ = (function (){var statearr_15245 = f__13292__auto__.call(null);
(statearr_15245[(6)] = c__13291__auto___15247);

return statearr_15245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13293__auto__);
});})(c__13291__auto___15247,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
