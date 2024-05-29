goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29162 = arguments.length;
switch (G__29162) {
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

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29183 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29183 = (function (f,blockable,meta29184){
this.f = f;
this.blockable = blockable;
this.meta29184 = meta29184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29185,meta29184__$1){
var self__ = this;
var _29185__$1 = this;
return (new cljs.core.async.t_cljs$core$async29183(self__.f,self__.blockable,meta29184__$1));
}));

(cljs.core.async.t_cljs$core$async29183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29185){
var self__ = this;
var _29185__$1 = this;
return self__.meta29184;
}));

(cljs.core.async.t_cljs$core$async29183.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29183.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29183.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29183.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29183.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29184","meta29184",1205971066,null)], null);
}));

(cljs.core.async.t_cljs$core$async29183.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29183.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29183");

(cljs.core.async.t_cljs$core$async29183.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29183");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29183.
 */
cljs.core.async.__GT_t_cljs$core$async29183 = (function cljs$core$async$__GT_t_cljs$core$async29183(f__$1,blockable__$1,meta29184){
return (new cljs.core.async.t_cljs$core$async29183(f__$1,blockable__$1,meta29184));
});

}

return (new cljs.core.async.t_cljs$core$async29183(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

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
var G__29307 = arguments.length;
switch (G__29307) {
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

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29313 = arguments.length;
switch (G__29313) {
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

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

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
var G__29318 = arguments.length;
switch (G__29318) {
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

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32657 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32657) : fn1.call(null,val_32657));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32657) : fn1.call(null,val_32657));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

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
var G__29329 = arguments.length;
switch (G__29329) {
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

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___32664 = n;
var x_32665 = (0);
while(true){
if((x_32665 < n__4613__auto___32664)){
(a[x_32665] = x_32665);

var G__32666 = (x_32665 + (1));
x_32665 = G__32666;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29354 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29354 = (function (flag,meta29355){
this.flag = flag;
this.meta29355 = meta29355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29356,meta29355__$1){
var self__ = this;
var _29356__$1 = this;
return (new cljs.core.async.t_cljs$core$async29354(self__.flag,meta29355__$1));
}));

(cljs.core.async.t_cljs$core$async29354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29356){
var self__ = this;
var _29356__$1 = this;
return self__.meta29355;
}));

(cljs.core.async.t_cljs$core$async29354.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29354.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29354.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29354.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29354.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29355","meta29355",145953064,null)], null);
}));

(cljs.core.async.t_cljs$core$async29354.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29354.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29354");

(cljs.core.async.t_cljs$core$async29354.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29354");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29354.
 */
cljs.core.async.__GT_t_cljs$core$async29354 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29354(flag__$1,meta29355){
return (new cljs.core.async.t_cljs$core$async29354(flag__$1,meta29355));
});

}

return (new cljs.core.async.t_cljs$core$async29354(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29371 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29371 = (function (flag,cb,meta29372){
this.flag = flag;
this.cb = cb;
this.meta29372 = meta29372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29373,meta29372__$1){
var self__ = this;
var _29373__$1 = this;
return (new cljs.core.async.t_cljs$core$async29371(self__.flag,self__.cb,meta29372__$1));
}));

(cljs.core.async.t_cljs$core$async29371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29373){
var self__ = this;
var _29373__$1 = this;
return self__.meta29372;
}));

(cljs.core.async.t_cljs$core$async29371.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29371.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29371.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29371.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29371.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29372","meta29372",2082350011,null)], null);
}));

(cljs.core.async.t_cljs$core$async29371.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29371.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29371");

(cljs.core.async.t_cljs$core$async29371.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29371");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29371.
 */
cljs.core.async.__GT_t_cljs$core$async29371 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29371(flag__$1,cb__$1,meta29372){
return (new cljs.core.async.t_cljs$core$async29371(flag__$1,cb__$1,meta29372));
});

}

return (new cljs.core.async.t_cljs$core$async29371(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

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
return (function (p1__29379_SHARP_){
var G__29388 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29379_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29388) : fret.call(null,G__29388));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29380_SHARP_){
var G__29390 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29380_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29390) : fret.call(null,G__29390));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32671 = (i + (1));
i = G__32671;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
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
var args__4742__auto__ = [];
var len__4736__auto___32675 = arguments.length;
var i__4737__auto___32676 = (0);
while(true){
if((i__4737__auto___32676 < len__4736__auto___32675)){
args__4742__auto__.push((arguments[i__4737__auto___32676]));

var G__32677 = (i__4737__auto___32676 + (1));
i__4737__auto___32676 = G__32677;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29413){
var map__29429 = p__29413;
var map__29429__$1 = (((((!((map__29429 == null))))?(((((map__29429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29429):map__29429);
var opts = map__29429__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29411){
var G__29412 = cljs.core.first(seq29411);
var seq29411__$1 = cljs.core.next(seq29411);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29412,seq29411__$1);
}));

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
var G__29482 = arguments.length;
switch (G__29482) {
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

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29036__auto___32679 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29044__auto__ = (function (){var switch__28721__auto__ = (function (state_29508){
var state_val_29511 = (state_29508[(1)]);
if((state_val_29511 === (7))){
var inst_29504 = (state_29508[(2)]);
var state_29508__$1 = state_29508;
var statearr_29514_32680 = state_29508__$1;
(statearr_29514_32680[(2)] = inst_29504);

(statearr_29514_32680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29511 === (1))){
var state_29508__$1 = state_29508;
var statearr_29515_32683 = state_29508__$1;
(statearr_29515_32683[(2)] = null);

(statearr_29515_32683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29511 === (4))){
var inst_29487 = (state_29508[(7)]);
var inst_29487__$1 = (state_29508[(2)]);
var inst_29488 = (inst_29487__$1 == null);
var state_29508__$1 = (function (){var statearr_29521 = state_29508;
(statearr_29521[(7)] = inst_29487__$1);

return statearr_29521;
})();
if(cljs.core.truth_(inst_29488)){
var statearr_29522_32686 = state_29508__$1;
(statearr_29522_32686[(1)] = (5));

} else {
var statearr_29523_32687 = state_29508__$1;
(statearr_29523_32687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29511 === (13))){
var state_29508__$1 = state_29508;
var statearr_29532_32688 = state_29508__$1;
(statearr_29532_32688[(2)] = null);

(statearr_29532_32688[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29511 === (6))){
var inst_29487 = (state_29508[(7)]);
var state_29508__$1 = state_29508;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29508__$1,(11),to,inst_29487);
} else {
if((state_val_29511 === (3))){
var inst_29506 = (state_29508[(2)]);
var state_29508__$1 = state_29508;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29508__$1,inst_29506);
} else {
if((state_val_29511 === (12))){
var state_29508__$1 = state_29508;
var statearr_29537_32690 = state_29508__$1;
(statearr_29537_32690[(2)] = null);

(statearr_29537_32690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29511 === (2))){
var state_29508__$1 = state_29508;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29508__$1,(4),from);
} else {
if((state_val_29511 === (11))){
var inst_29497 = (state_29508[(2)]);
var state_29508__$1 = state_29508;
if(cljs.core.truth_(inst_29497)){
var statearr_29540_32691 = state_29508__$1;
(statearr_29540_32691[(1)] = (12));

} else {
var statearr_29541_32692 = state_29508__$1;
(statearr_29541_32692[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29511 === (9))){
var state_29508__$1 = state_29508;
var statearr_29542_32693 = state_29508__$1;
(statearr_29542_32693[(2)] = null);

(statearr_29542_32693[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29511 === (5))){
var state_29508__$1 = state_29508;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29543_32695 = state_29508__$1;
(statearr_29543_32695[(1)] = (8));

} else {
var statearr_29544_32696 = state_29508__$1;
(statearr_29544_32696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29511 === (14))){
var inst_29502 = (state_29508[(2)]);
var state_29508__$1 = state_29508;
var statearr_29545_32697 = state_29508__$1;
(statearr_29545_32697[(2)] = inst_29502);

(statearr_29545_32697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29511 === (10))){
var inst_29494 = (state_29508[(2)]);
var state_29508__$1 = state_29508;
var statearr_29547_32698 = state_29508__$1;
(statearr_29547_32698[(2)] = inst_29494);

(statearr_29547_32698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29511 === (8))){
var inst_29491 = cljs.core.async.close_BANG_(to);
var state_29508__$1 = state_29508;
var statearr_29548_32699 = state_29508__$1;
(statearr_29548_32699[(2)] = inst_29491);

(statearr_29548_32699[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__28722__auto__ = null;
var cljs$core$async$state_machine__28722__auto____0 = (function (){
var statearr_29551 = [null,null,null,null,null,null,null,null];
(statearr_29551[(0)] = cljs$core$async$state_machine__28722__auto__);

(statearr_29551[(1)] = (1));

return statearr_29551;
});
var cljs$core$async$state_machine__28722__auto____1 = (function (state_29508){
while(true){
var ret_value__28723__auto__ = (function (){try{while(true){
var result__28724__auto__ = switch__28721__auto__(state_29508);
if(cljs.core.keyword_identical_QMARK_(result__28724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28724__auto__;
}
break;
}
}catch (e29552){var ex__28725__auto__ = e29552;
var statearr_29557_32708 = state_29508;
(statearr_29557_32708[(2)] = ex__28725__auto__);


if(cljs.core.seq((state_29508[(4)]))){
var statearr_29558_32710 = state_29508;
(statearr_29558_32710[(1)] = cljs.core.first((state_29508[(4)])));

} else {
throw ex__28725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32712 = state_29508;
state_29508 = G__32712;
continue;
} else {
return ret_value__28723__auto__;
}
break;
}
});
cljs$core$async$state_machine__28722__auto__ = function(state_29508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28722__auto____1.call(this,state_29508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28722__auto____0;
cljs$core$async$state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28722__auto____1;
return cljs$core$async$state_machine__28722__auto__;
})()
})();
var state__29045__auto__ = (function (){var statearr_29559 = f__29044__auto__();
(statearr_29559[(6)] = c__29036__auto___32679);

return statearr_29559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29045__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__29579){
var vec__29580 = p__29579;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29580,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29580,(1),null);
var job = vec__29580;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29036__auto___32718 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29044__auto__ = (function (){var switch__28721__auto__ = (function (state_29590){
var state_val_29591 = (state_29590[(1)]);
if((state_val_29591 === (1))){
var state_29590__$1 = state_29590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29590__$1,(2),res,v);
} else {
if((state_val_29591 === (2))){
var inst_29587 = (state_29590[(2)]);
var inst_29588 = cljs.core.async.close_BANG_(res);
var state_29590__$1 = (function (){var statearr_29599 = state_29590;
(statearr_29599[(7)] = inst_29587);

return statearr_29599;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29590__$1,inst_29588);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28722__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28722__auto____0 = (function (){
var statearr_29609 = [null,null,null,null,null,null,null,null];
(statearr_29609[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28722__auto__);

(statearr_29609[(1)] = (1));

return statearr_29609;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28722__auto____1 = (function (state_29590){
while(true){
var ret_value__28723__auto__ = (function (){try{while(true){
var result__28724__auto__ = switch__28721__auto__(state_29590);
if(cljs.core.keyword_identical_QMARK_(result__28724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28724__auto__;
}
break;
}
}catch (e29610){var ex__28725__auto__ = e29610;
var statearr_29612_32720 = state_29590;
(statearr_29612_32720[(2)] = ex__28725__auto__);


if(cljs.core.seq((state_29590[(4)]))){
var statearr_29613_32721 = state_29590;
(statearr_29613_32721[(1)] = cljs.core.first((state_29590[(4)])));

} else {
throw ex__28725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32722 = state_29590;
state_29590 = G__32722;
continue;
} else {
return ret_value__28723__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28722__auto__ = function(state_29590){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28722__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28722__auto____1.call(this,state_29590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28722__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28722__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28722__auto__;
})()
})();
var state__29045__auto__ = (function (){var statearr_29615 = f__29044__auto__();
(statearr_29615[(6)] = c__29036__auto___32718);

return statearr_29615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29045__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29616){
var vec__29617 = p__29616;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29617,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29617,(1),null);
var job = vec__29617;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___32724 = n;
var __32725 = (0);
while(true){
if((__32725 < n__4613__auto___32724)){
var G__29620_32726 = type;
var G__29620_32727__$1 = (((G__29620_32726 instanceof cljs.core.Keyword))?G__29620_32726.fqn:null);
switch (G__29620_32727__$1) {
case "compute":
var c__29036__auto___32729 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32725,c__29036__auto___32729,G__29620_32726,G__29620_32727__$1,n__4613__auto___32724,jobs,results,process,async){
return (function (){
var f__29044__auto__ = (function (){var switch__28721__auto__ = ((function (__32725,c__29036__auto___32729,G__29620_32726,G__29620_32727__$1,n__4613__auto___32724,jobs,results,process,async){
return (function (state_29633){
var state_val_29634 = (state_29633[(1)]);
if((state_val_29634 === (1))){
var state_29633__$1 = state_29633;
var statearr_29641_32730 = state_29633__$1;
(statearr_29641_32730[(2)] = null);

(statearr_29641_32730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29634 === (2))){
var state_29633__$1 = state_29633;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29633__$1,(4),jobs);
} else {
if((state_val_29634 === (3))){
var inst_29631 = (state_29633[(2)]);
var state_29633__$1 = state_29633;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29633__$1,inst_29631);
} else {
if((state_val_29634 === (4))){
var inst_29623 = (state_29633[(2)]);
var inst_29624 = process(inst_29623);
var state_29633__$1 = state_29633;
if(cljs.core.truth_(inst_29624)){
var statearr_29642_32732 = state_29633__$1;
(statearr_29642_32732[(1)] = (5));

} else {
var statearr_29643_32733 = state_29633__$1;
(statearr_29643_32733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29634 === (5))){
var state_29633__$1 = state_29633;
var statearr_29644_32734 = state_29633__$1;
(statearr_29644_32734[(2)] = null);

(statearr_29644_32734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29634 === (6))){
var state_29633__$1 = state_29633;
var statearr_29645_32735 = state_29633__$1;
(statearr_29645_32735[(2)] = null);

(statearr_29645_32735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29634 === (7))){
var inst_29629 = (state_29633[(2)]);
var state_29633__$1 = state_29633;
var statearr_29646_32736 = state_29633__$1;
(statearr_29646_32736[(2)] = inst_29629);

(statearr_29646_32736[(1)] = (3));


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
});})(__32725,c__29036__auto___32729,G__29620_32726,G__29620_32727__$1,n__4613__auto___32724,jobs,results,process,async))
;
return ((function (__32725,switch__28721__auto__,c__29036__auto___32729,G__29620_32726,G__29620_32727__$1,n__4613__auto___32724,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28722__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28722__auto____0 = (function (){
var statearr_29647 = [null,null,null,null,null,null,null];
(statearr_29647[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28722__auto__);

(statearr_29647[(1)] = (1));

return statearr_29647;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28722__auto____1 = (function (state_29633){
while(true){
var ret_value__28723__auto__ = (function (){try{while(true){
var result__28724__auto__ = switch__28721__auto__(state_29633);
if(cljs.core.keyword_identical_QMARK_(result__28724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28724__auto__;
}
break;
}
}catch (e29648){var ex__28725__auto__ = e29648;
var statearr_29649_32738 = state_29633;
(statearr_29649_32738[(2)] = ex__28725__auto__);


if(cljs.core.seq((state_29633[(4)]))){
var statearr_29650_32739 = state_29633;
(statearr_29650_32739[(1)] = cljs.core.first((state_29633[(4)])));

} else {
throw ex__28725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32740 = state_29633;
state_29633 = G__32740;
continue;
} else {
return ret_value__28723__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28722__auto__ = function(state_29633){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28722__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28722__auto____1.call(this,state_29633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28722__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28722__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28722__auto__;
})()
;})(__32725,switch__28721__auto__,c__29036__auto___32729,G__29620_32726,G__29620_32727__$1,n__4613__auto___32724,jobs,results,process,async))
})();
var state__29045__auto__ = (function (){var statearr_29651 = f__29044__auto__();
(statearr_29651[(6)] = c__29036__auto___32729);

return statearr_29651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29045__auto__);
});})(__32725,c__29036__auto___32729,G__29620_32726,G__29620_32727__$1,n__4613__auto___32724,jobs,results,process,async))
);


break;
case "async":
var c__29036__auto___32741 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32725,c__29036__auto___32741,G__29620_32726,G__29620_32727__$1,n__4613__auto___32724,jobs,results,process,async){
return (function (){
var f__29044__auto__ = (function (){var switch__28721__auto__ = ((function (__32725,c__29036__auto___32741,G__29620_32726,G__29620_32727__$1,n__4613__auto___32724,jobs,results,process,async){
return (function (state_29666){
var state_val_29667 = (state_29666[(1)]);
if((state_val_29667 === (1))){
var state_29666__$1 = state_29666;
var statearr_29668_32742 = state_29666__$1;
(statearr_29668_32742[(2)] = null);

(statearr_29668_32742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (2))){
var state_29666__$1 = state_29666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29666__$1,(4),jobs);
} else {
if((state_val_29667 === (3))){
var inst_29664 = (state_29666[(2)]);
var state_29666__$1 = state_29666;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29666__$1,inst_29664);
} else {
if((state_val_29667 === (4))){
var inst_29654 = (state_29666[(2)]);
var inst_29657 = async(inst_29654);
var state_29666__$1 = state_29666;
if(cljs.core.truth_(inst_29657)){
var statearr_29672_32743 = state_29666__$1;
(statearr_29672_32743[(1)] = (5));

} else {
var statearr_29673_32744 = state_29666__$1;
(statearr_29673_32744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (5))){
var state_29666__$1 = state_29666;
var statearr_29674_32745 = state_29666__$1;
(statearr_29674_32745[(2)] = null);

(statearr_29674_32745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (6))){
var state_29666__$1 = state_29666;
var statearr_29675_32746 = state_29666__$1;
(statearr_29675_32746[(2)] = null);

(statearr_29675_32746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (7))){
var inst_29662 = (state_29666[(2)]);
var state_29666__$1 = state_29666;
var statearr_29677_32747 = state_29666__$1;
(statearr_29677_32747[(2)] = inst_29662);

(statearr_29677_32747[(1)] = (3));


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
});})(__32725,c__29036__auto___32741,G__29620_32726,G__29620_32727__$1,n__4613__auto___32724,jobs,results,process,async))
;
return ((function (__32725,switch__28721__auto__,c__29036__auto___32741,G__29620_32726,G__29620_32727__$1,n__4613__auto___32724,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28722__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28722__auto____0 = (function (){
var statearr_29679 = [null,null,null,null,null,null,null];
(statearr_29679[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28722__auto__);

(statearr_29679[(1)] = (1));

return statearr_29679;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28722__auto____1 = (function (state_29666){
while(true){
var ret_value__28723__auto__ = (function (){try{while(true){
var result__28724__auto__ = switch__28721__auto__(state_29666);
if(cljs.core.keyword_identical_QMARK_(result__28724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28724__auto__;
}
break;
}
}catch (e29680){var ex__28725__auto__ = e29680;
var statearr_29681_32750 = state_29666;
(statearr_29681_32750[(2)] = ex__28725__auto__);


if(cljs.core.seq((state_29666[(4)]))){
var statearr_29682_32751 = state_29666;
(statearr_29682_32751[(1)] = cljs.core.first((state_29666[(4)])));

} else {
throw ex__28725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32753 = state_29666;
state_29666 = G__32753;
continue;
} else {
return ret_value__28723__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28722__auto__ = function(state_29666){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28722__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28722__auto____1.call(this,state_29666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28722__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28722__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28722__auto__;
})()
;})(__32725,switch__28721__auto__,c__29036__auto___32741,G__29620_32726,G__29620_32727__$1,n__4613__auto___32724,jobs,results,process,async))
})();
var state__29045__auto__ = (function (){var statearr_29684 = f__29044__auto__();
(statearr_29684[(6)] = c__29036__auto___32741);

return statearr_29684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29045__auto__);
});})(__32725,c__29036__auto___32741,G__29620_32726,G__29620_32727__$1,n__4613__auto___32724,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29620_32727__$1)].join('')));

}

var G__32754 = (__32725 + (1));
__32725 = G__32754;
continue;
} else {
}
break;
}

var c__29036__auto___32755 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29044__auto__ = (function (){var switch__28721__auto__ = (function (state_29712){
var state_val_29713 = (state_29712[(1)]);
if((state_val_29713 === (7))){
var inst_29708 = (state_29712[(2)]);
var state_29712__$1 = state_29712;
var statearr_29718_32756 = state_29712__$1;
(statearr_29718_32756[(2)] = inst_29708);

(statearr_29718_32756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29713 === (1))){
var state_29712__$1 = state_29712;
var statearr_29720_32757 = state_29712__$1;
(statearr_29720_32757[(2)] = null);

(statearr_29720_32757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29713 === (4))){
var inst_29691 = (state_29712[(7)]);
var inst_29691__$1 = (state_29712[(2)]);
var inst_29692 = (inst_29691__$1 == null);
var state_29712__$1 = (function (){var statearr_29733 = state_29712;
(statearr_29733[(7)] = inst_29691__$1);

return statearr_29733;
})();
if(cljs.core.truth_(inst_29692)){
var statearr_29734_32758 = state_29712__$1;
(statearr_29734_32758[(1)] = (5));

} else {
var statearr_29735_32759 = state_29712__$1;
(statearr_29735_32759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29713 === (6))){
var inst_29696 = (state_29712[(8)]);
var inst_29691 = (state_29712[(7)]);
var inst_29696__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29699 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29700 = [inst_29691,inst_29696__$1];
var inst_29701 = (new cljs.core.PersistentVector(null,2,(5),inst_29699,inst_29700,null));
var state_29712__$1 = (function (){var statearr_29741 = state_29712;
(statearr_29741[(8)] = inst_29696__$1);

return statearr_29741;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29712__$1,(8),jobs,inst_29701);
} else {
if((state_val_29713 === (3))){
var inst_29710 = (state_29712[(2)]);
var state_29712__$1 = state_29712;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29712__$1,inst_29710);
} else {
if((state_val_29713 === (2))){
var state_29712__$1 = state_29712;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29712__$1,(4),from);
} else {
if((state_val_29713 === (9))){
var inst_29705 = (state_29712[(2)]);
var state_29712__$1 = (function (){var statearr_29750 = state_29712;
(statearr_29750[(9)] = inst_29705);

return statearr_29750;
})();
var statearr_29751_32773 = state_29712__$1;
(statearr_29751_32773[(2)] = null);

(statearr_29751_32773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29713 === (5))){
var inst_29694 = cljs.core.async.close_BANG_(jobs);
var state_29712__$1 = state_29712;
var statearr_29752_32783 = state_29712__$1;
(statearr_29752_32783[(2)] = inst_29694);

(statearr_29752_32783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29713 === (8))){
var inst_29696 = (state_29712[(8)]);
var inst_29703 = (state_29712[(2)]);
var state_29712__$1 = (function (){var statearr_29753 = state_29712;
(statearr_29753[(10)] = inst_29703);

return statearr_29753;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29712__$1,(9),results,inst_29696);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28722__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28722__auto____0 = (function (){
var statearr_29754 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29754[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28722__auto__);

(statearr_29754[(1)] = (1));

return statearr_29754;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28722__auto____1 = (function (state_29712){
while(true){
var ret_value__28723__auto__ = (function (){try{while(true){
var result__28724__auto__ = switch__28721__auto__(state_29712);
if(cljs.core.keyword_identical_QMARK_(result__28724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28724__auto__;
}
break;
}
}catch (e29755){var ex__28725__auto__ = e29755;
var statearr_29756_32786 = state_29712;
(statearr_29756_32786[(2)] = ex__28725__auto__);


if(cljs.core.seq((state_29712[(4)]))){
var statearr_29757_32787 = state_29712;
(statearr_29757_32787[(1)] = cljs.core.first((state_29712[(4)])));

} else {
throw ex__28725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32788 = state_29712;
state_29712 = G__32788;
continue;
} else {
return ret_value__28723__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28722__auto__ = function(state_29712){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28722__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28722__auto____1.call(this,state_29712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28722__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28722__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28722__auto__;
})()
})();
var state__29045__auto__ = (function (){var statearr_29763 = f__29044__auto__();
(statearr_29763[(6)] = c__29036__auto___32755);

return statearr_29763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29045__auto__);
}));


var c__29036__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29044__auto__ = (function (){var switch__28721__auto__ = (function (state_29808){
var state_val_29809 = (state_29808[(1)]);
if((state_val_29809 === (7))){
var inst_29804 = (state_29808[(2)]);
var state_29808__$1 = state_29808;
var statearr_29822_32789 = state_29808__$1;
(statearr_29822_32789[(2)] = inst_29804);

(statearr_29822_32789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (20))){
var state_29808__$1 = state_29808;
var statearr_29823_32790 = state_29808__$1;
(statearr_29823_32790[(2)] = null);

(statearr_29823_32790[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (1))){
var state_29808__$1 = state_29808;
var statearr_29824_32791 = state_29808__$1;
(statearr_29824_32791[(2)] = null);

(statearr_29824_32791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (4))){
var inst_29766 = (state_29808[(7)]);
var inst_29766__$1 = (state_29808[(2)]);
var inst_29767 = (inst_29766__$1 == null);
var state_29808__$1 = (function (){var statearr_29826 = state_29808;
(statearr_29826[(7)] = inst_29766__$1);

return statearr_29826;
})();
if(cljs.core.truth_(inst_29767)){
var statearr_29827_32792 = state_29808__$1;
(statearr_29827_32792[(1)] = (5));

} else {
var statearr_29830_32793 = state_29808__$1;
(statearr_29830_32793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (15))){
var inst_29779 = (state_29808[(8)]);
var state_29808__$1 = state_29808;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29808__$1,(18),to,inst_29779);
} else {
if((state_val_29809 === (21))){
var inst_29799 = (state_29808[(2)]);
var state_29808__$1 = state_29808;
var statearr_29831_32794 = state_29808__$1;
(statearr_29831_32794[(2)] = inst_29799);

(statearr_29831_32794[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (13))){
var inst_29801 = (state_29808[(2)]);
var state_29808__$1 = (function (){var statearr_29832 = state_29808;
(statearr_29832[(9)] = inst_29801);

return statearr_29832;
})();
var statearr_29833_32795 = state_29808__$1;
(statearr_29833_32795[(2)] = null);

(statearr_29833_32795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (6))){
var inst_29766 = (state_29808[(7)]);
var state_29808__$1 = state_29808;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29808__$1,(11),inst_29766);
} else {
if((state_val_29809 === (17))){
var inst_29794 = (state_29808[(2)]);
var state_29808__$1 = state_29808;
if(cljs.core.truth_(inst_29794)){
var statearr_29838_32796 = state_29808__$1;
(statearr_29838_32796[(1)] = (19));

} else {
var statearr_29839_32797 = state_29808__$1;
(statearr_29839_32797[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (3))){
var inst_29806 = (state_29808[(2)]);
var state_29808__$1 = state_29808;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29808__$1,inst_29806);
} else {
if((state_val_29809 === (12))){
var inst_29776 = (state_29808[(10)]);
var state_29808__$1 = state_29808;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29808__$1,(14),inst_29776);
} else {
if((state_val_29809 === (2))){
var state_29808__$1 = state_29808;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29808__$1,(4),results);
} else {
if((state_val_29809 === (19))){
var state_29808__$1 = state_29808;
var statearr_29852_32798 = state_29808__$1;
(statearr_29852_32798[(2)] = null);

(statearr_29852_32798[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (11))){
var inst_29776 = (state_29808[(2)]);
var state_29808__$1 = (function (){var statearr_29853 = state_29808;
(statearr_29853[(10)] = inst_29776);

return statearr_29853;
})();
var statearr_29854_32799 = state_29808__$1;
(statearr_29854_32799[(2)] = null);

(statearr_29854_32799[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (9))){
var state_29808__$1 = state_29808;
var statearr_29855_32800 = state_29808__$1;
(statearr_29855_32800[(2)] = null);

(statearr_29855_32800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (5))){
var state_29808__$1 = state_29808;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29857_32801 = state_29808__$1;
(statearr_29857_32801[(1)] = (8));

} else {
var statearr_29858_32802 = state_29808__$1;
(statearr_29858_32802[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (14))){
var inst_29779 = (state_29808[(8)]);
var inst_29779__$1 = (state_29808[(2)]);
var inst_29787 = (inst_29779__$1 == null);
var inst_29788 = cljs.core.not(inst_29787);
var state_29808__$1 = (function (){var statearr_29860 = state_29808;
(statearr_29860[(8)] = inst_29779__$1);

return statearr_29860;
})();
if(inst_29788){
var statearr_29861_32803 = state_29808__$1;
(statearr_29861_32803[(1)] = (15));

} else {
var statearr_29862_32804 = state_29808__$1;
(statearr_29862_32804[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (16))){
var state_29808__$1 = state_29808;
var statearr_29863_32805 = state_29808__$1;
(statearr_29863_32805[(2)] = false);

(statearr_29863_32805[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (10))){
var inst_29773 = (state_29808[(2)]);
var state_29808__$1 = state_29808;
var statearr_29864_32806 = state_29808__$1;
(statearr_29864_32806[(2)] = inst_29773);

(statearr_29864_32806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (18))){
var inst_29791 = (state_29808[(2)]);
var state_29808__$1 = state_29808;
var statearr_29865_32807 = state_29808__$1;
(statearr_29865_32807[(2)] = inst_29791);

(statearr_29865_32807[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (8))){
var inst_29770 = cljs.core.async.close_BANG_(to);
var state_29808__$1 = state_29808;
var statearr_29866_32808 = state_29808__$1;
(statearr_29866_32808[(2)] = inst_29770);

(statearr_29866_32808[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28722__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28722__auto____0 = (function (){
var statearr_29867 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29867[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28722__auto__);

(statearr_29867[(1)] = (1));

return statearr_29867;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28722__auto____1 = (function (state_29808){
while(true){
var ret_value__28723__auto__ = (function (){try{while(true){
var result__28724__auto__ = switch__28721__auto__(state_29808);
if(cljs.core.keyword_identical_QMARK_(result__28724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28724__auto__;
}
break;
}
}catch (e29868){var ex__28725__auto__ = e29868;
var statearr_29869_32809 = state_29808;
(statearr_29869_32809[(2)] = ex__28725__auto__);


if(cljs.core.seq((state_29808[(4)]))){
var statearr_29870_32810 = state_29808;
(statearr_29870_32810[(1)] = cljs.core.first((state_29808[(4)])));

} else {
throw ex__28725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32811 = state_29808;
state_29808 = G__32811;
continue;
} else {
return ret_value__28723__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28722__auto__ = function(state_29808){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28722__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28722__auto____1.call(this,state_29808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28722__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28722__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28722__auto__;
})()
})();
var state__29045__auto__ = (function (){var statearr_29872 = f__29044__auto__();
(statearr_29872[(6)] = c__29036__auto__);

return statearr_29872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29045__auto__);
}));

return c__29036__auto__;
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
var G__29875 = arguments.length;
switch (G__29875) {
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

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__29884 = arguments.length;
switch (G__29884) {
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

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__29898 = arguments.length;
switch (G__29898) {
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

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29036__auto___32830 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29044__auto__ = (function (){var switch__28721__auto__ = (function (state_29930){
var state_val_29931 = (state_29930[(1)]);
if((state_val_29931 === (7))){
var inst_29924 = (state_29930[(2)]);
var state_29930__$1 = state_29930;
var statearr_29933_32839 = state_29930__$1;
(statearr_29933_32839[(2)] = inst_29924);

(statearr_29933_32839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29931 === (1))){
var state_29930__$1 = state_29930;
var statearr_29935_32840 = state_29930__$1;
(statearr_29935_32840[(2)] = null);

(statearr_29935_32840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29931 === (4))){
var inst_29905 = (state_29930[(7)]);
var inst_29905__$1 = (state_29930[(2)]);
var inst_29906 = (inst_29905__$1 == null);
var state_29930__$1 = (function (){var statearr_29937 = state_29930;
(statearr_29937[(7)] = inst_29905__$1);

return statearr_29937;
})();
if(cljs.core.truth_(inst_29906)){
var statearr_29939_32841 = state_29930__$1;
(statearr_29939_32841[(1)] = (5));

} else {
var statearr_29940_32842 = state_29930__$1;
(statearr_29940_32842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29931 === (13))){
var state_29930__$1 = state_29930;
var statearr_29943_32843 = state_29930__$1;
(statearr_29943_32843[(2)] = null);

(statearr_29943_32843[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29931 === (6))){
var inst_29905 = (state_29930[(7)]);
var inst_29911 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29905) : p.call(null,inst_29905));
var state_29930__$1 = state_29930;
if(cljs.core.truth_(inst_29911)){
var statearr_29944_32845 = state_29930__$1;
(statearr_29944_32845[(1)] = (9));

} else {
var statearr_29945_32846 = state_29930__$1;
(statearr_29945_32846[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29931 === (3))){
var inst_29926 = (state_29930[(2)]);
var state_29930__$1 = state_29930;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29930__$1,inst_29926);
} else {
if((state_val_29931 === (12))){
var state_29930__$1 = state_29930;
var statearr_29946_32848 = state_29930__$1;
(statearr_29946_32848[(2)] = null);

(statearr_29946_32848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29931 === (2))){
var state_29930__$1 = state_29930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29930__$1,(4),ch);
} else {
if((state_val_29931 === (11))){
var inst_29905 = (state_29930[(7)]);
var inst_29915 = (state_29930[(2)]);
var state_29930__$1 = state_29930;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29930__$1,(8),inst_29915,inst_29905);
} else {
if((state_val_29931 === (9))){
var state_29930__$1 = state_29930;
var statearr_29952_32849 = state_29930__$1;
(statearr_29952_32849[(2)] = tc);

(statearr_29952_32849[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29931 === (5))){
var inst_29908 = cljs.core.async.close_BANG_(tc);
var inst_29909 = cljs.core.async.close_BANG_(fc);
var state_29930__$1 = (function (){var statearr_29954 = state_29930;
(statearr_29954[(8)] = inst_29908);

return statearr_29954;
})();
var statearr_29955_32850 = state_29930__$1;
(statearr_29955_32850[(2)] = inst_29909);

(statearr_29955_32850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29931 === (14))){
var inst_29922 = (state_29930[(2)]);
var state_29930__$1 = state_29930;
var statearr_29957_32851 = state_29930__$1;
(statearr_29957_32851[(2)] = inst_29922);

(statearr_29957_32851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29931 === (10))){
var state_29930__$1 = state_29930;
var statearr_29958_32852 = state_29930__$1;
(statearr_29958_32852[(2)] = fc);

(statearr_29958_32852[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29931 === (8))){
var inst_29917 = (state_29930[(2)]);
var state_29930__$1 = state_29930;
if(cljs.core.truth_(inst_29917)){
var statearr_29959_32853 = state_29930__$1;
(statearr_29959_32853[(1)] = (12));

} else {
var statearr_29960_32854 = state_29930__$1;
(statearr_29960_32854[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__28722__auto__ = null;
var cljs$core$async$state_machine__28722__auto____0 = (function (){
var statearr_29963 = [null,null,null,null,null,null,null,null,null];
(statearr_29963[(0)] = cljs$core$async$state_machine__28722__auto__);

(statearr_29963[(1)] = (1));

return statearr_29963;
});
var cljs$core$async$state_machine__28722__auto____1 = (function (state_29930){
while(true){
var ret_value__28723__auto__ = (function (){try{while(true){
var result__28724__auto__ = switch__28721__auto__(state_29930);
if(cljs.core.keyword_identical_QMARK_(result__28724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28724__auto__;
}
break;
}
}catch (e29979){var ex__28725__auto__ = e29979;
var statearr_29981_32855 = state_29930;
(statearr_29981_32855[(2)] = ex__28725__auto__);


if(cljs.core.seq((state_29930[(4)]))){
var statearr_29982_32856 = state_29930;
(statearr_29982_32856[(1)] = cljs.core.first((state_29930[(4)])));

} else {
throw ex__28725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32857 = state_29930;
state_29930 = G__32857;
continue;
} else {
return ret_value__28723__auto__;
}
break;
}
});
cljs$core$async$state_machine__28722__auto__ = function(state_29930){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28722__auto____1.call(this,state_29930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28722__auto____0;
cljs$core$async$state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28722__auto____1;
return cljs$core$async$state_machine__28722__auto__;
})()
})();
var state__29045__auto__ = (function (){var statearr_29990 = f__29044__auto__();
(statearr_29990[(6)] = c__29036__auto___32830);

return statearr_29990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29045__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29036__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29044__auto__ = (function (){var switch__28721__auto__ = (function (state_30025){
var state_val_30026 = (state_30025[(1)]);
if((state_val_30026 === (7))){
var inst_30021 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
var statearr_30027_32858 = state_30025__$1;
(statearr_30027_32858[(2)] = inst_30021);

(statearr_30027_32858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (1))){
var inst_29995 = init;
var inst_29996 = inst_29995;
var state_30025__$1 = (function (){var statearr_30029 = state_30025;
(statearr_30029[(7)] = inst_29996);

return statearr_30029;
})();
var statearr_30030_32859 = state_30025__$1;
(statearr_30030_32859[(2)] = null);

(statearr_30030_32859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (4))){
var inst_29999 = (state_30025[(8)]);
var inst_29999__$1 = (state_30025[(2)]);
var inst_30000 = (inst_29999__$1 == null);
var state_30025__$1 = (function (){var statearr_30038 = state_30025;
(statearr_30038[(8)] = inst_29999__$1);

return statearr_30038;
})();
if(cljs.core.truth_(inst_30000)){
var statearr_30039_32860 = state_30025__$1;
(statearr_30039_32860[(1)] = (5));

} else {
var statearr_30044_32861 = state_30025__$1;
(statearr_30044_32861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (6))){
var inst_29996 = (state_30025[(7)]);
var inst_29999 = (state_30025[(8)]);
var inst_30003 = (state_30025[(9)]);
var inst_30003__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_29996,inst_29999) : f.call(null,inst_29996,inst_29999));
var inst_30004 = cljs.core.reduced_QMARK_(inst_30003__$1);
var state_30025__$1 = (function (){var statearr_30045 = state_30025;
(statearr_30045[(9)] = inst_30003__$1);

return statearr_30045;
})();
if(inst_30004){
var statearr_30046_32862 = state_30025__$1;
(statearr_30046_32862[(1)] = (8));

} else {
var statearr_30051_32863 = state_30025__$1;
(statearr_30051_32863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (3))){
var inst_30023 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30025__$1,inst_30023);
} else {
if((state_val_30026 === (2))){
var state_30025__$1 = state_30025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30025__$1,(4),ch);
} else {
if((state_val_30026 === (9))){
var inst_30003 = (state_30025[(9)]);
var inst_29996 = inst_30003;
var state_30025__$1 = (function (){var statearr_30055 = state_30025;
(statearr_30055[(7)] = inst_29996);

return statearr_30055;
})();
var statearr_30056_32864 = state_30025__$1;
(statearr_30056_32864[(2)] = null);

(statearr_30056_32864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (5))){
var inst_29996 = (state_30025[(7)]);
var state_30025__$1 = state_30025;
var statearr_30059_32865 = state_30025__$1;
(statearr_30059_32865[(2)] = inst_29996);

(statearr_30059_32865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (10))){
var inst_30019 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
var statearr_30060_32866 = state_30025__$1;
(statearr_30060_32866[(2)] = inst_30019);

(statearr_30060_32866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (8))){
var inst_30003 = (state_30025[(9)]);
var inst_30015 = cljs.core.deref(inst_30003);
var state_30025__$1 = state_30025;
var statearr_30061_32867 = state_30025__$1;
(statearr_30061_32867[(2)] = inst_30015);

(statearr_30061_32867[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__28722__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28722__auto____0 = (function (){
var statearr_30062 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30062[(0)] = cljs$core$async$reduce_$_state_machine__28722__auto__);

(statearr_30062[(1)] = (1));

return statearr_30062;
});
var cljs$core$async$reduce_$_state_machine__28722__auto____1 = (function (state_30025){
while(true){
var ret_value__28723__auto__ = (function (){try{while(true){
var result__28724__auto__ = switch__28721__auto__(state_30025);
if(cljs.core.keyword_identical_QMARK_(result__28724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28724__auto__;
}
break;
}
}catch (e30063){var ex__28725__auto__ = e30063;
var statearr_30064_32868 = state_30025;
(statearr_30064_32868[(2)] = ex__28725__auto__);


if(cljs.core.seq((state_30025[(4)]))){
var statearr_30065_32869 = state_30025;
(statearr_30065_32869[(1)] = cljs.core.first((state_30025[(4)])));

} else {
throw ex__28725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32870 = state_30025;
state_30025 = G__32870;
continue;
} else {
return ret_value__28723__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28722__auto__ = function(state_30025){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28722__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28722__auto____1.call(this,state_30025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28722__auto____0;
cljs$core$async$reduce_$_state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28722__auto____1;
return cljs$core$async$reduce_$_state_machine__28722__auto__;
})()
})();
var state__29045__auto__ = (function (){var statearr_30070 = f__29044__auto__();
(statearr_30070[(6)] = c__29036__auto__);

return statearr_30070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29045__auto__);
}));

return c__29036__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29036__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29044__auto__ = (function (){var switch__28721__auto__ = (function (state_30077){
var state_val_30078 = (state_30077[(1)]);
if((state_val_30078 === (1))){
var inst_30072 = cljs.core.async.reduce(f__$1,init,ch);
var state_30077__$1 = state_30077;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30077__$1,(2),inst_30072);
} else {
if((state_val_30078 === (2))){
var inst_30074 = (state_30077[(2)]);
var inst_30075 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30074) : f__$1.call(null,inst_30074));
var state_30077__$1 = state_30077;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30077__$1,inst_30075);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28722__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28722__auto____0 = (function (){
var statearr_30080 = [null,null,null,null,null,null,null];
(statearr_30080[(0)] = cljs$core$async$transduce_$_state_machine__28722__auto__);

(statearr_30080[(1)] = (1));

return statearr_30080;
});
var cljs$core$async$transduce_$_state_machine__28722__auto____1 = (function (state_30077){
while(true){
var ret_value__28723__auto__ = (function (){try{while(true){
var result__28724__auto__ = switch__28721__auto__(state_30077);
if(cljs.core.keyword_identical_QMARK_(result__28724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28724__auto__;
}
break;
}
}catch (e30081){var ex__28725__auto__ = e30081;
var statearr_30082_32871 = state_30077;
(statearr_30082_32871[(2)] = ex__28725__auto__);


if(cljs.core.seq((state_30077[(4)]))){
var statearr_30084_32872 = state_30077;
(statearr_30084_32872[(1)] = cljs.core.first((state_30077[(4)])));

} else {
throw ex__28725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32873 = state_30077;
state_30077 = G__32873;
continue;
} else {
return ret_value__28723__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28722__auto__ = function(state_30077){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28722__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28722__auto____1.call(this,state_30077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28722__auto____0;
cljs$core$async$transduce_$_state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28722__auto____1;
return cljs$core$async$transduce_$_state_machine__28722__auto__;
})()
})();
var state__29045__auto__ = (function (){var statearr_30088 = f__29044__auto__();
(statearr_30088[(6)] = c__29036__auto__);

return statearr_30088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29045__auto__);
}));

return c__29036__auto__;
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
var G__30093 = arguments.length;
switch (G__30093) {
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

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29036__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29044__auto__ = (function (){var switch__28721__auto__ = (function (state_30126){
var state_val_30127 = (state_30126[(1)]);
if((state_val_30127 === (7))){
var inst_30108 = (state_30126[(2)]);
var state_30126__$1 = state_30126;
var statearr_30136_32875 = state_30126__$1;
(statearr_30136_32875[(2)] = inst_30108);

(statearr_30136_32875[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (1))){
var inst_30102 = cljs.core.seq(coll);
var inst_30103 = inst_30102;
var state_30126__$1 = (function (){var statearr_30139 = state_30126;
(statearr_30139[(7)] = inst_30103);

return statearr_30139;
})();
var statearr_30140_32876 = state_30126__$1;
(statearr_30140_32876[(2)] = null);

(statearr_30140_32876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (4))){
var inst_30103 = (state_30126[(7)]);
var inst_30106 = cljs.core.first(inst_30103);
var state_30126__$1 = state_30126;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30126__$1,(7),ch,inst_30106);
} else {
if((state_val_30127 === (13))){
var inst_30120 = (state_30126[(2)]);
var state_30126__$1 = state_30126;
var statearr_30146_32877 = state_30126__$1;
(statearr_30146_32877[(2)] = inst_30120);

(statearr_30146_32877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (6))){
var inst_30111 = (state_30126[(2)]);
var state_30126__$1 = state_30126;
if(cljs.core.truth_(inst_30111)){
var statearr_30147_32878 = state_30126__$1;
(statearr_30147_32878[(1)] = (8));

} else {
var statearr_30148_32879 = state_30126__$1;
(statearr_30148_32879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (3))){
var inst_30124 = (state_30126[(2)]);
var state_30126__$1 = state_30126;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30126__$1,inst_30124);
} else {
if((state_val_30127 === (12))){
var state_30126__$1 = state_30126;
var statearr_30149_32880 = state_30126__$1;
(statearr_30149_32880[(2)] = null);

(statearr_30149_32880[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (2))){
var inst_30103 = (state_30126[(7)]);
var state_30126__$1 = state_30126;
if(cljs.core.truth_(inst_30103)){
var statearr_30150_32881 = state_30126__$1;
(statearr_30150_32881[(1)] = (4));

} else {
var statearr_30151_32882 = state_30126__$1;
(statearr_30151_32882[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (11))){
var inst_30117 = cljs.core.async.close_BANG_(ch);
var state_30126__$1 = state_30126;
var statearr_30156_32883 = state_30126__$1;
(statearr_30156_32883[(2)] = inst_30117);

(statearr_30156_32883[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (9))){
var state_30126__$1 = state_30126;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30161_32886 = state_30126__$1;
(statearr_30161_32886[(1)] = (11));

} else {
var statearr_30162_32887 = state_30126__$1;
(statearr_30162_32887[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (5))){
var inst_30103 = (state_30126[(7)]);
var state_30126__$1 = state_30126;
var statearr_30164_32888 = state_30126__$1;
(statearr_30164_32888[(2)] = inst_30103);

(statearr_30164_32888[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (10))){
var inst_30122 = (state_30126[(2)]);
var state_30126__$1 = state_30126;
var statearr_30165_32889 = state_30126__$1;
(statearr_30165_32889[(2)] = inst_30122);

(statearr_30165_32889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (8))){
var inst_30103 = (state_30126[(7)]);
var inst_30113 = cljs.core.next(inst_30103);
var inst_30103__$1 = inst_30113;
var state_30126__$1 = (function (){var statearr_30166 = state_30126;
(statearr_30166[(7)] = inst_30103__$1);

return statearr_30166;
})();
var statearr_30167_32891 = state_30126__$1;
(statearr_30167_32891[(2)] = null);

(statearr_30167_32891[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__28722__auto__ = null;
var cljs$core$async$state_machine__28722__auto____0 = (function (){
var statearr_30169 = [null,null,null,null,null,null,null,null];
(statearr_30169[(0)] = cljs$core$async$state_machine__28722__auto__);

(statearr_30169[(1)] = (1));

return statearr_30169;
});
var cljs$core$async$state_machine__28722__auto____1 = (function (state_30126){
while(true){
var ret_value__28723__auto__ = (function (){try{while(true){
var result__28724__auto__ = switch__28721__auto__(state_30126);
if(cljs.core.keyword_identical_QMARK_(result__28724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28724__auto__;
}
break;
}
}catch (e30170){var ex__28725__auto__ = e30170;
var statearr_30171_32893 = state_30126;
(statearr_30171_32893[(2)] = ex__28725__auto__);


if(cljs.core.seq((state_30126[(4)]))){
var statearr_30172_32894 = state_30126;
(statearr_30172_32894[(1)] = cljs.core.first((state_30126[(4)])));

} else {
throw ex__28725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32895 = state_30126;
state_30126 = G__32895;
continue;
} else {
return ret_value__28723__auto__;
}
break;
}
});
cljs$core$async$state_machine__28722__auto__ = function(state_30126){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28722__auto____1.call(this,state_30126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28722__auto____0;
cljs$core$async$state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28722__auto____1;
return cljs$core$async$state_machine__28722__auto__;
})()
})();
var state__29045__auto__ = (function (){var statearr_30173 = f__29044__auto__();
(statearr_30173[(6)] = c__29036__auto__);

return statearr_30173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29045__auto__);
}));

return c__29036__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30186 = arguments.length;
switch (G__30186) {
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

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_32901 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32901(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32902 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32902(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32904 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32904(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32905 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_32905(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30211 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30211 = (function (ch,cs,meta30212){
this.ch = ch;
this.cs = cs;
this.meta30212 = meta30212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30213,meta30212__$1){
var self__ = this;
var _30213__$1 = this;
return (new cljs.core.async.t_cljs$core$async30211(self__.ch,self__.cs,meta30212__$1));
}));

(cljs.core.async.t_cljs$core$async30211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30213){
var self__ = this;
var _30213__$1 = this;
return self__.meta30212;
}));

(cljs.core.async.t_cljs$core$async30211.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30211.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30211.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30211.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30211.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30211.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30211.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30212","meta30212",-1879936888,null)], null);
}));

(cljs.core.async.t_cljs$core$async30211.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30211.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30211");

(cljs.core.async.t_cljs$core$async30211.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30211");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30211.
 */
cljs.core.async.__GT_t_cljs$core$async30211 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30211(ch__$1,cs__$1,meta30212){
return (new cljs.core.async.t_cljs$core$async30211(ch__$1,cs__$1,meta30212));
});

}

return (new cljs.core.async.t_cljs$core$async30211(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29036__auto___32907 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29044__auto__ = (function (){var switch__28721__auto__ = (function (state_30387){
var state_val_30388 = (state_30387[(1)]);
if((state_val_30388 === (7))){
var inst_30375 = (state_30387[(2)]);
var state_30387__$1 = state_30387;
var statearr_30398_32908 = state_30387__$1;
(statearr_30398_32908[(2)] = inst_30375);

(statearr_30398_32908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (20))){
var inst_30267 = (state_30387[(7)]);
var inst_30287 = cljs.core.first(inst_30267);
var inst_30288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30287,(0),null);
var inst_30291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30287,(1),null);
var state_30387__$1 = (function (){var statearr_30399 = state_30387;
(statearr_30399[(8)] = inst_30288);

return statearr_30399;
})();
if(cljs.core.truth_(inst_30291)){
var statearr_30400_32909 = state_30387__$1;
(statearr_30400_32909[(1)] = (22));

} else {
var statearr_30401_32910 = state_30387__$1;
(statearr_30401_32910[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (27))){
var inst_30236 = (state_30387[(9)]);
var inst_30323 = (state_30387[(10)]);
var inst_30321 = (state_30387[(11)]);
var inst_30329 = (state_30387[(12)]);
var inst_30329__$1 = cljs.core._nth(inst_30321,inst_30323);
var inst_30330 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30329__$1,inst_30236,done);
var state_30387__$1 = (function (){var statearr_30411 = state_30387;
(statearr_30411[(12)] = inst_30329__$1);

return statearr_30411;
})();
if(cljs.core.truth_(inst_30330)){
var statearr_30412_32911 = state_30387__$1;
(statearr_30412_32911[(1)] = (30));

} else {
var statearr_30413_32912 = state_30387__$1;
(statearr_30413_32912[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (1))){
var state_30387__$1 = state_30387;
var statearr_30414_32913 = state_30387__$1;
(statearr_30414_32913[(2)] = null);

(statearr_30414_32913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (24))){
var inst_30267 = (state_30387[(7)]);
var inst_30298 = (state_30387[(2)]);
var inst_30299 = cljs.core.next(inst_30267);
var inst_30245 = inst_30299;
var inst_30246 = null;
var inst_30247 = (0);
var inst_30248 = (0);
var state_30387__$1 = (function (){var statearr_30415 = state_30387;
(statearr_30415[(13)] = inst_30245);

(statearr_30415[(14)] = inst_30247);

(statearr_30415[(15)] = inst_30248);

(statearr_30415[(16)] = inst_30246);

(statearr_30415[(17)] = inst_30298);

return statearr_30415;
})();
var statearr_30425_32914 = state_30387__$1;
(statearr_30425_32914[(2)] = null);

(statearr_30425_32914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (39))){
var state_30387__$1 = state_30387;
var statearr_30431_32915 = state_30387__$1;
(statearr_30431_32915[(2)] = null);

(statearr_30431_32915[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (4))){
var inst_30236 = (state_30387[(9)]);
var inst_30236__$1 = (state_30387[(2)]);
var inst_30237 = (inst_30236__$1 == null);
var state_30387__$1 = (function (){var statearr_30432 = state_30387;
(statearr_30432[(9)] = inst_30236__$1);

return statearr_30432;
})();
if(cljs.core.truth_(inst_30237)){
var statearr_30433_32918 = state_30387__$1;
(statearr_30433_32918[(1)] = (5));

} else {
var statearr_30438_32919 = state_30387__$1;
(statearr_30438_32919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (15))){
var inst_30245 = (state_30387[(13)]);
var inst_30247 = (state_30387[(14)]);
var inst_30248 = (state_30387[(15)]);
var inst_30246 = (state_30387[(16)]);
var inst_30263 = (state_30387[(2)]);
var inst_30264 = (inst_30248 + (1));
var tmp30428 = inst_30245;
var tmp30429 = inst_30247;
var tmp30430 = inst_30246;
var inst_30245__$1 = tmp30428;
var inst_30246__$1 = tmp30430;
var inst_30247__$1 = tmp30429;
var inst_30248__$1 = inst_30264;
var state_30387__$1 = (function (){var statearr_30439 = state_30387;
(statearr_30439[(13)] = inst_30245__$1);

(statearr_30439[(18)] = inst_30263);

(statearr_30439[(14)] = inst_30247__$1);

(statearr_30439[(15)] = inst_30248__$1);

(statearr_30439[(16)] = inst_30246__$1);

return statearr_30439;
})();
var statearr_30440_32920 = state_30387__$1;
(statearr_30440_32920[(2)] = null);

(statearr_30440_32920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (21))){
var inst_30302 = (state_30387[(2)]);
var state_30387__$1 = state_30387;
var statearr_30446_32921 = state_30387__$1;
(statearr_30446_32921[(2)] = inst_30302);

(statearr_30446_32921[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (31))){
var inst_30329 = (state_30387[(12)]);
var inst_30333 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30329);
var state_30387__$1 = state_30387;
var statearr_30449_32922 = state_30387__$1;
(statearr_30449_32922[(2)] = inst_30333);

(statearr_30449_32922[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (32))){
var inst_30323 = (state_30387[(10)]);
var inst_30322 = (state_30387[(19)]);
var inst_30321 = (state_30387[(11)]);
var inst_30320 = (state_30387[(20)]);
var inst_30335 = (state_30387[(2)]);
var inst_30336 = (inst_30323 + (1));
var tmp30441 = inst_30322;
var tmp30442 = inst_30321;
var tmp30443 = inst_30320;
var inst_30320__$1 = tmp30443;
var inst_30321__$1 = tmp30442;
var inst_30322__$1 = tmp30441;
var inst_30323__$1 = inst_30336;
var state_30387__$1 = (function (){var statearr_30452 = state_30387;
(statearr_30452[(21)] = inst_30335);

(statearr_30452[(10)] = inst_30323__$1);

(statearr_30452[(19)] = inst_30322__$1);

(statearr_30452[(11)] = inst_30321__$1);

(statearr_30452[(20)] = inst_30320__$1);

return statearr_30452;
})();
var statearr_30453_32923 = state_30387__$1;
(statearr_30453_32923[(2)] = null);

(statearr_30453_32923[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (40))){
var inst_30348 = (state_30387[(22)]);
var inst_30352 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30348);
var state_30387__$1 = state_30387;
var statearr_30458_32924 = state_30387__$1;
(statearr_30458_32924[(2)] = inst_30352);

(statearr_30458_32924[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (33))){
var inst_30339 = (state_30387[(23)]);
var inst_30341 = cljs.core.chunked_seq_QMARK_(inst_30339);
var state_30387__$1 = state_30387;
if(inst_30341){
var statearr_30462_32925 = state_30387__$1;
(statearr_30462_32925[(1)] = (36));

} else {
var statearr_30463_32926 = state_30387__$1;
(statearr_30463_32926[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (13))){
var inst_30257 = (state_30387[(24)]);
var inst_30260 = cljs.core.async.close_BANG_(inst_30257);
var state_30387__$1 = state_30387;
var statearr_30464_32927 = state_30387__$1;
(statearr_30464_32927[(2)] = inst_30260);

(statearr_30464_32927[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (22))){
var inst_30288 = (state_30387[(8)]);
var inst_30295 = cljs.core.async.close_BANG_(inst_30288);
var state_30387__$1 = state_30387;
var statearr_30468_32928 = state_30387__$1;
(statearr_30468_32928[(2)] = inst_30295);

(statearr_30468_32928[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (36))){
var inst_30339 = (state_30387[(23)]);
var inst_30343 = cljs.core.chunk_first(inst_30339);
var inst_30344 = cljs.core.chunk_rest(inst_30339);
var inst_30345 = cljs.core.count(inst_30343);
var inst_30320 = inst_30344;
var inst_30321 = inst_30343;
var inst_30322 = inst_30345;
var inst_30323 = (0);
var state_30387__$1 = (function (){var statearr_30474 = state_30387;
(statearr_30474[(10)] = inst_30323);

(statearr_30474[(19)] = inst_30322);

(statearr_30474[(11)] = inst_30321);

(statearr_30474[(20)] = inst_30320);

return statearr_30474;
})();
var statearr_30476_32930 = state_30387__$1;
(statearr_30476_32930[(2)] = null);

(statearr_30476_32930[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (41))){
var inst_30339 = (state_30387[(23)]);
var inst_30354 = (state_30387[(2)]);
var inst_30355 = cljs.core.next(inst_30339);
var inst_30320 = inst_30355;
var inst_30321 = null;
var inst_30322 = (0);
var inst_30323 = (0);
var state_30387__$1 = (function (){var statearr_30485 = state_30387;
(statearr_30485[(10)] = inst_30323);

(statearr_30485[(19)] = inst_30322);

(statearr_30485[(11)] = inst_30321);

(statearr_30485[(20)] = inst_30320);

(statearr_30485[(25)] = inst_30354);

return statearr_30485;
})();
var statearr_30492_32931 = state_30387__$1;
(statearr_30492_32931[(2)] = null);

(statearr_30492_32931[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (43))){
var state_30387__$1 = state_30387;
var statearr_30495_32932 = state_30387__$1;
(statearr_30495_32932[(2)] = null);

(statearr_30495_32932[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (29))){
var inst_30363 = (state_30387[(2)]);
var state_30387__$1 = state_30387;
var statearr_30496_32933 = state_30387__$1;
(statearr_30496_32933[(2)] = inst_30363);

(statearr_30496_32933[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (44))){
var inst_30372 = (state_30387[(2)]);
var state_30387__$1 = (function (){var statearr_30497 = state_30387;
(statearr_30497[(26)] = inst_30372);

return statearr_30497;
})();
var statearr_30498_32935 = state_30387__$1;
(statearr_30498_32935[(2)] = null);

(statearr_30498_32935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (6))){
var inst_30312 = (state_30387[(27)]);
var inst_30311 = cljs.core.deref(cs);
var inst_30312__$1 = cljs.core.keys(inst_30311);
var inst_30313 = cljs.core.count(inst_30312__$1);
var inst_30314 = cljs.core.reset_BANG_(dctr,inst_30313);
var inst_30319 = cljs.core.seq(inst_30312__$1);
var inst_30320 = inst_30319;
var inst_30321 = null;
var inst_30322 = (0);
var inst_30323 = (0);
var state_30387__$1 = (function (){var statearr_30499 = state_30387;
(statearr_30499[(10)] = inst_30323);

(statearr_30499[(28)] = inst_30314);

(statearr_30499[(19)] = inst_30322);

(statearr_30499[(11)] = inst_30321);

(statearr_30499[(20)] = inst_30320);

(statearr_30499[(27)] = inst_30312__$1);

return statearr_30499;
})();
var statearr_30500_32941 = state_30387__$1;
(statearr_30500_32941[(2)] = null);

(statearr_30500_32941[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (28))){
var inst_30339 = (state_30387[(23)]);
var inst_30320 = (state_30387[(20)]);
var inst_30339__$1 = cljs.core.seq(inst_30320);
var state_30387__$1 = (function (){var statearr_30501 = state_30387;
(statearr_30501[(23)] = inst_30339__$1);

return statearr_30501;
})();
if(inst_30339__$1){
var statearr_30503_32942 = state_30387__$1;
(statearr_30503_32942[(1)] = (33));

} else {
var statearr_30504_32943 = state_30387__$1;
(statearr_30504_32943[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (25))){
var inst_30323 = (state_30387[(10)]);
var inst_30322 = (state_30387[(19)]);
var inst_30325 = (inst_30323 < inst_30322);
var inst_30326 = inst_30325;
var state_30387__$1 = state_30387;
if(cljs.core.truth_(inst_30326)){
var statearr_30506_32944 = state_30387__$1;
(statearr_30506_32944[(1)] = (27));

} else {
var statearr_30507_32945 = state_30387__$1;
(statearr_30507_32945[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (34))){
var state_30387__$1 = state_30387;
var statearr_30508_32946 = state_30387__$1;
(statearr_30508_32946[(2)] = null);

(statearr_30508_32946[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (17))){
var state_30387__$1 = state_30387;
var statearr_30510_32947 = state_30387__$1;
(statearr_30510_32947[(2)] = null);

(statearr_30510_32947[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (3))){
var inst_30377 = (state_30387[(2)]);
var state_30387__$1 = state_30387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30387__$1,inst_30377);
} else {
if((state_val_30388 === (12))){
var inst_30307 = (state_30387[(2)]);
var state_30387__$1 = state_30387;
var statearr_30521_32948 = state_30387__$1;
(statearr_30521_32948[(2)] = inst_30307);

(statearr_30521_32948[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (2))){
var state_30387__$1 = state_30387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30387__$1,(4),ch);
} else {
if((state_val_30388 === (23))){
var state_30387__$1 = state_30387;
var statearr_30527_32950 = state_30387__$1;
(statearr_30527_32950[(2)] = null);

(statearr_30527_32950[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (35))){
var inst_30361 = (state_30387[(2)]);
var state_30387__$1 = state_30387;
var statearr_30530_32951 = state_30387__$1;
(statearr_30530_32951[(2)] = inst_30361);

(statearr_30530_32951[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (19))){
var inst_30267 = (state_30387[(7)]);
var inst_30273 = cljs.core.chunk_first(inst_30267);
var inst_30274 = cljs.core.chunk_rest(inst_30267);
var inst_30275 = cljs.core.count(inst_30273);
var inst_30245 = inst_30274;
var inst_30246 = inst_30273;
var inst_30247 = inst_30275;
var inst_30248 = (0);
var state_30387__$1 = (function (){var statearr_30534 = state_30387;
(statearr_30534[(13)] = inst_30245);

(statearr_30534[(14)] = inst_30247);

(statearr_30534[(15)] = inst_30248);

(statearr_30534[(16)] = inst_30246);

return statearr_30534;
})();
var statearr_30557_32953 = state_30387__$1;
(statearr_30557_32953[(2)] = null);

(statearr_30557_32953[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (11))){
var inst_30245 = (state_30387[(13)]);
var inst_30267 = (state_30387[(7)]);
var inst_30267__$1 = cljs.core.seq(inst_30245);
var state_30387__$1 = (function (){var statearr_30559 = state_30387;
(statearr_30559[(7)] = inst_30267__$1);

return statearr_30559;
})();
if(inst_30267__$1){
var statearr_30562_32954 = state_30387__$1;
(statearr_30562_32954[(1)] = (16));

} else {
var statearr_30563_32955 = state_30387__$1;
(statearr_30563_32955[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (9))){
var inst_30309 = (state_30387[(2)]);
var state_30387__$1 = state_30387;
var statearr_30572_32956 = state_30387__$1;
(statearr_30572_32956[(2)] = inst_30309);

(statearr_30572_32956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (5))){
var inst_30243 = cljs.core.deref(cs);
var inst_30244 = cljs.core.seq(inst_30243);
var inst_30245 = inst_30244;
var inst_30246 = null;
var inst_30247 = (0);
var inst_30248 = (0);
var state_30387__$1 = (function (){var statearr_30575 = state_30387;
(statearr_30575[(13)] = inst_30245);

(statearr_30575[(14)] = inst_30247);

(statearr_30575[(15)] = inst_30248);

(statearr_30575[(16)] = inst_30246);

return statearr_30575;
})();
var statearr_30576_32957 = state_30387__$1;
(statearr_30576_32957[(2)] = null);

(statearr_30576_32957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (14))){
var state_30387__$1 = state_30387;
var statearr_30578_32959 = state_30387__$1;
(statearr_30578_32959[(2)] = null);

(statearr_30578_32959[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (45))){
var inst_30369 = (state_30387[(2)]);
var state_30387__$1 = state_30387;
var statearr_30582_32961 = state_30387__$1;
(statearr_30582_32961[(2)] = inst_30369);

(statearr_30582_32961[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (26))){
var inst_30312 = (state_30387[(27)]);
var inst_30365 = (state_30387[(2)]);
var inst_30366 = cljs.core.seq(inst_30312);
var state_30387__$1 = (function (){var statearr_30583 = state_30387;
(statearr_30583[(29)] = inst_30365);

return statearr_30583;
})();
if(inst_30366){
var statearr_30584_32962 = state_30387__$1;
(statearr_30584_32962[(1)] = (42));

} else {
var statearr_30585_32963 = state_30387__$1;
(statearr_30585_32963[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (16))){
var inst_30267 = (state_30387[(7)]);
var inst_30271 = cljs.core.chunked_seq_QMARK_(inst_30267);
var state_30387__$1 = state_30387;
if(inst_30271){
var statearr_30587_32964 = state_30387__$1;
(statearr_30587_32964[(1)] = (19));

} else {
var statearr_30588_32965 = state_30387__$1;
(statearr_30588_32965[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (38))){
var inst_30358 = (state_30387[(2)]);
var state_30387__$1 = state_30387;
var statearr_30590_32966 = state_30387__$1;
(statearr_30590_32966[(2)] = inst_30358);

(statearr_30590_32966[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (30))){
var state_30387__$1 = state_30387;
var statearr_30591_32967 = state_30387__$1;
(statearr_30591_32967[(2)] = null);

(statearr_30591_32967[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (10))){
var inst_30248 = (state_30387[(15)]);
var inst_30246 = (state_30387[(16)]);
var inst_30256 = cljs.core._nth(inst_30246,inst_30248);
var inst_30257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30256,(0),null);
var inst_30258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30256,(1),null);
var state_30387__$1 = (function (){var statearr_30592 = state_30387;
(statearr_30592[(24)] = inst_30257);

return statearr_30592;
})();
if(cljs.core.truth_(inst_30258)){
var statearr_30593_32972 = state_30387__$1;
(statearr_30593_32972[(1)] = (13));

} else {
var statearr_30594_32973 = state_30387__$1;
(statearr_30594_32973[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (18))){
var inst_30305 = (state_30387[(2)]);
var state_30387__$1 = state_30387;
var statearr_30601_32975 = state_30387__$1;
(statearr_30601_32975[(2)] = inst_30305);

(statearr_30601_32975[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (42))){
var state_30387__$1 = state_30387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30387__$1,(45),dchan);
} else {
if((state_val_30388 === (37))){
var inst_30236 = (state_30387[(9)]);
var inst_30339 = (state_30387[(23)]);
var inst_30348 = (state_30387[(22)]);
var inst_30348__$1 = cljs.core.first(inst_30339);
var inst_30349 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30348__$1,inst_30236,done);
var state_30387__$1 = (function (){var statearr_30604 = state_30387;
(statearr_30604[(22)] = inst_30348__$1);

return statearr_30604;
})();
if(cljs.core.truth_(inst_30349)){
var statearr_30605_32976 = state_30387__$1;
(statearr_30605_32976[(1)] = (39));

} else {
var statearr_30606_32977 = state_30387__$1;
(statearr_30606_32977[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (8))){
var inst_30247 = (state_30387[(14)]);
var inst_30248 = (state_30387[(15)]);
var inst_30250 = (inst_30248 < inst_30247);
var inst_30251 = inst_30250;
var state_30387__$1 = state_30387;
if(cljs.core.truth_(inst_30251)){
var statearr_30607_32978 = state_30387__$1;
(statearr_30607_32978[(1)] = (10));

} else {
var statearr_30608_32979 = state_30387__$1;
(statearr_30608_32979[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__28722__auto__ = null;
var cljs$core$async$mult_$_state_machine__28722__auto____0 = (function (){
var statearr_30615 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30615[(0)] = cljs$core$async$mult_$_state_machine__28722__auto__);

(statearr_30615[(1)] = (1));

return statearr_30615;
});
var cljs$core$async$mult_$_state_machine__28722__auto____1 = (function (state_30387){
while(true){
var ret_value__28723__auto__ = (function (){try{while(true){
var result__28724__auto__ = switch__28721__auto__(state_30387);
if(cljs.core.keyword_identical_QMARK_(result__28724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28724__auto__;
}
break;
}
}catch (e30616){var ex__28725__auto__ = e30616;
var statearr_30617_32980 = state_30387;
(statearr_30617_32980[(2)] = ex__28725__auto__);


if(cljs.core.seq((state_30387[(4)]))){
var statearr_30618_32981 = state_30387;
(statearr_30618_32981[(1)] = cljs.core.first((state_30387[(4)])));

} else {
throw ex__28725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32982 = state_30387;
state_30387 = G__32982;
continue;
} else {
return ret_value__28723__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28722__auto__ = function(state_30387){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28722__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28722__auto____1.call(this,state_30387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28722__auto____0;
cljs$core$async$mult_$_state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28722__auto____1;
return cljs$core$async$mult_$_state_machine__28722__auto__;
})()
})();
var state__29045__auto__ = (function (){var statearr_30624 = f__29044__auto__();
(statearr_30624[(6)] = c__29036__auto___32907);

return statearr_30624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29045__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__30637 = arguments.length;
switch (G__30637) {
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

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

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

var cljs$core$async$Mix$admix_STAR_$dyn_32985 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_32985(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_32988 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_32988(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_32989 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_32989(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_32990 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_32990(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_32991 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_32991(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32992 = arguments.length;
var i__4737__auto___32993 = (0);
while(true){
if((i__4737__auto___32993 < len__4736__auto___32992)){
args__4742__auto__.push((arguments[i__4737__auto___32993]));

var G__32995 = (i__4737__auto___32993 + (1));
i__4737__auto___32993 = G__32995;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30693){
var map__30695 = p__30693;
var map__30695__$1 = (((((!((map__30695 == null))))?(((((map__30695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30695):map__30695);
var opts = map__30695__$1;
var statearr_30698_32997 = state;
(statearr_30698_32997[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30699_32998 = state;
(statearr_30699_32998[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_30705_32999 = state;
(statearr_30705_32999[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30686){
var G__30687 = cljs.core.first(seq30686);
var seq30686__$1 = cljs.core.next(seq30686);
var G__30688 = cljs.core.first(seq30686__$1);
var seq30686__$2 = cljs.core.next(seq30686__$1);
var G__30689 = cljs.core.first(seq30686__$2);
var seq30686__$3 = cljs.core.next(seq30686__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30687,G__30688,G__30689,seq30686__$3);
}));

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
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30729 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30729 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30730){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30730 = meta30730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30731,meta30730__$1){
var self__ = this;
var _30731__$1 = this;
return (new cljs.core.async.t_cljs$core$async30729(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30730__$1));
}));

(cljs.core.async.t_cljs$core$async30729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30731){
var self__ = this;
var _30731__$1 = this;
return self__.meta30730;
}));

(cljs.core.async.t_cljs$core$async30729.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30729.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30729.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30729.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30729.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30729.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30729.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30729.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30729.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30730","meta30730",-1311169650,null)], null);
}));

(cljs.core.async.t_cljs$core$async30729.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30729.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30729");

(cljs.core.async.t_cljs$core$async30729.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30729");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30729.
 */
cljs.core.async.__GT_t_cljs$core$async30729 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30729(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30730){
return (new cljs.core.async.t_cljs$core$async30729(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30730));
});

}

return (new cljs.core.async.t_cljs$core$async30729(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29036__auto___33015 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29044__auto__ = (function (){var switch__28721__auto__ = (function (state_30885){
var state_val_30886 = (state_30885[(1)]);
if((state_val_30886 === (7))){
var inst_30782 = (state_30885[(2)]);
var state_30885__$1 = state_30885;
var statearr_30904_33016 = state_30885__$1;
(statearr_30904_33016[(2)] = inst_30782);

(statearr_30904_33016[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (20))){
var inst_30794 = (state_30885[(7)]);
var state_30885__$1 = state_30885;
var statearr_30905_33017 = state_30885__$1;
(statearr_30905_33017[(2)] = inst_30794);

(statearr_30905_33017[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (27))){
var state_30885__$1 = state_30885;
var statearr_30912_33019 = state_30885__$1;
(statearr_30912_33019[(2)] = null);

(statearr_30912_33019[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (1))){
var inst_30765 = (state_30885[(8)]);
var inst_30765__$1 = calc_state();
var inst_30767 = (inst_30765__$1 == null);
var inst_30768 = cljs.core.not(inst_30767);
var state_30885__$1 = (function (){var statearr_30914 = state_30885;
(statearr_30914[(8)] = inst_30765__$1);

return statearr_30914;
})();
if(inst_30768){
var statearr_30915_33022 = state_30885__$1;
(statearr_30915_33022[(1)] = (2));

} else {
var statearr_30916_33023 = state_30885__$1;
(statearr_30916_33023[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (24))){
var inst_30848 = (state_30885[(9)]);
var inst_30819 = (state_30885[(10)]);
var inst_30828 = (state_30885[(11)]);
var inst_30848__$1 = (inst_30819.cljs$core$IFn$_invoke$arity$1 ? inst_30819.cljs$core$IFn$_invoke$arity$1(inst_30828) : inst_30819.call(null,inst_30828));
var state_30885__$1 = (function (){var statearr_30917 = state_30885;
(statearr_30917[(9)] = inst_30848__$1);

return statearr_30917;
})();
if(cljs.core.truth_(inst_30848__$1)){
var statearr_30918_33024 = state_30885__$1;
(statearr_30918_33024[(1)] = (29));

} else {
var statearr_30920_33025 = state_30885__$1;
(statearr_30920_33025[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (4))){
var inst_30785 = (state_30885[(2)]);
var state_30885__$1 = state_30885;
if(cljs.core.truth_(inst_30785)){
var statearr_30923_33026 = state_30885__$1;
(statearr_30923_33026[(1)] = (8));

} else {
var statearr_30924_33027 = state_30885__$1;
(statearr_30924_33027[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (15))){
var inst_30813 = (state_30885[(2)]);
var state_30885__$1 = state_30885;
if(cljs.core.truth_(inst_30813)){
var statearr_30925_33028 = state_30885__$1;
(statearr_30925_33028[(1)] = (19));

} else {
var statearr_30926_33029 = state_30885__$1;
(statearr_30926_33029[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (21))){
var inst_30818 = (state_30885[(12)]);
var inst_30818__$1 = (state_30885[(2)]);
var inst_30819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30818__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30818__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30818__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30885__$1 = (function (){var statearr_30927 = state_30885;
(statearr_30927[(10)] = inst_30819);

(statearr_30927[(13)] = inst_30820);

(statearr_30927[(12)] = inst_30818__$1);

return statearr_30927;
})();
return cljs.core.async.ioc_alts_BANG_(state_30885__$1,(22),inst_30821);
} else {
if((state_val_30886 === (31))){
var inst_30860 = (state_30885[(2)]);
var state_30885__$1 = state_30885;
if(cljs.core.truth_(inst_30860)){
var statearr_30928_33032 = state_30885__$1;
(statearr_30928_33032[(1)] = (32));

} else {
var statearr_30929_33034 = state_30885__$1;
(statearr_30929_33034[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (32))){
var inst_30827 = (state_30885[(14)]);
var state_30885__$1 = state_30885;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30885__$1,(35),out,inst_30827);
} else {
if((state_val_30886 === (33))){
var inst_30818 = (state_30885[(12)]);
var inst_30794 = inst_30818;
var state_30885__$1 = (function (){var statearr_30933 = state_30885;
(statearr_30933[(7)] = inst_30794);

return statearr_30933;
})();
var statearr_30935_33035 = state_30885__$1;
(statearr_30935_33035[(2)] = null);

(statearr_30935_33035[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (13))){
var inst_30794 = (state_30885[(7)]);
var inst_30802 = inst_30794.cljs$lang$protocol_mask$partition0$;
var inst_30803 = (inst_30802 & (64));
var inst_30804 = inst_30794.cljs$core$ISeq$;
var inst_30805 = (cljs.core.PROTOCOL_SENTINEL === inst_30804);
var inst_30806 = ((inst_30803) || (inst_30805));
var state_30885__$1 = state_30885;
if(cljs.core.truth_(inst_30806)){
var statearr_30938_33039 = state_30885__$1;
(statearr_30938_33039[(1)] = (16));

} else {
var statearr_30939_33040 = state_30885__$1;
(statearr_30939_33040[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (22))){
var inst_30827 = (state_30885[(14)]);
var inst_30828 = (state_30885[(11)]);
var inst_30826 = (state_30885[(2)]);
var inst_30827__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30826,(0),null);
var inst_30828__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30826,(1),null);
var inst_30834 = (inst_30827__$1 == null);
var inst_30835 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30828__$1,change);
var inst_30836 = ((inst_30834) || (inst_30835));
var state_30885__$1 = (function (){var statearr_30943 = state_30885;
(statearr_30943[(14)] = inst_30827__$1);

(statearr_30943[(11)] = inst_30828__$1);

return statearr_30943;
})();
if(cljs.core.truth_(inst_30836)){
var statearr_30944_33043 = state_30885__$1;
(statearr_30944_33043[(1)] = (23));

} else {
var statearr_30945_33045 = state_30885__$1;
(statearr_30945_33045[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (36))){
var inst_30818 = (state_30885[(12)]);
var inst_30794 = inst_30818;
var state_30885__$1 = (function (){var statearr_30948 = state_30885;
(statearr_30948[(7)] = inst_30794);

return statearr_30948;
})();
var statearr_30949_33046 = state_30885__$1;
(statearr_30949_33046[(2)] = null);

(statearr_30949_33046[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (29))){
var inst_30848 = (state_30885[(9)]);
var state_30885__$1 = state_30885;
var statearr_30951_33047 = state_30885__$1;
(statearr_30951_33047[(2)] = inst_30848);

(statearr_30951_33047[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (6))){
var state_30885__$1 = state_30885;
var statearr_30952_33048 = state_30885__$1;
(statearr_30952_33048[(2)] = false);

(statearr_30952_33048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (28))){
var inst_30844 = (state_30885[(2)]);
var inst_30845 = calc_state();
var inst_30794 = inst_30845;
var state_30885__$1 = (function (){var statearr_30956 = state_30885;
(statearr_30956[(7)] = inst_30794);

(statearr_30956[(15)] = inst_30844);

return statearr_30956;
})();
var statearr_30959_33052 = state_30885__$1;
(statearr_30959_33052[(2)] = null);

(statearr_30959_33052[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (25))){
var inst_30878 = (state_30885[(2)]);
var state_30885__$1 = state_30885;
var statearr_30965_33057 = state_30885__$1;
(statearr_30965_33057[(2)] = inst_30878);

(statearr_30965_33057[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (34))){
var inst_30876 = (state_30885[(2)]);
var state_30885__$1 = state_30885;
var statearr_30972_33061 = state_30885__$1;
(statearr_30972_33061[(2)] = inst_30876);

(statearr_30972_33061[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (17))){
var state_30885__$1 = state_30885;
var statearr_30973_33062 = state_30885__$1;
(statearr_30973_33062[(2)] = false);

(statearr_30973_33062[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (3))){
var state_30885__$1 = state_30885;
var statearr_30974_33063 = state_30885__$1;
(statearr_30974_33063[(2)] = false);

(statearr_30974_33063[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (12))){
var inst_30880 = (state_30885[(2)]);
var state_30885__$1 = state_30885;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30885__$1,inst_30880);
} else {
if((state_val_30886 === (2))){
var inst_30765 = (state_30885[(8)]);
var inst_30774 = inst_30765.cljs$lang$protocol_mask$partition0$;
var inst_30775 = (inst_30774 & (64));
var inst_30776 = inst_30765.cljs$core$ISeq$;
var inst_30777 = (cljs.core.PROTOCOL_SENTINEL === inst_30776);
var inst_30778 = ((inst_30775) || (inst_30777));
var state_30885__$1 = state_30885;
if(cljs.core.truth_(inst_30778)){
var statearr_30977_33067 = state_30885__$1;
(statearr_30977_33067[(1)] = (5));

} else {
var statearr_30978_33068 = state_30885__$1;
(statearr_30978_33068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (23))){
var inst_30827 = (state_30885[(14)]);
var inst_30839 = (inst_30827 == null);
var state_30885__$1 = state_30885;
if(cljs.core.truth_(inst_30839)){
var statearr_30979_33069 = state_30885__$1;
(statearr_30979_33069[(1)] = (26));

} else {
var statearr_30980_33070 = state_30885__$1;
(statearr_30980_33070[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (35))){
var inst_30864 = (state_30885[(2)]);
var state_30885__$1 = state_30885;
if(cljs.core.truth_(inst_30864)){
var statearr_30981_33071 = state_30885__$1;
(statearr_30981_33071[(1)] = (36));

} else {
var statearr_30982_33072 = state_30885__$1;
(statearr_30982_33072[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (19))){
var inst_30794 = (state_30885[(7)]);
var inst_30815 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30794);
var state_30885__$1 = state_30885;
var statearr_30983_33073 = state_30885__$1;
(statearr_30983_33073[(2)] = inst_30815);

(statearr_30983_33073[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (11))){
var inst_30794 = (state_30885[(7)]);
var inst_30798 = (inst_30794 == null);
var inst_30799 = cljs.core.not(inst_30798);
var state_30885__$1 = state_30885;
if(inst_30799){
var statearr_30986_33079 = state_30885__$1;
(statearr_30986_33079[(1)] = (13));

} else {
var statearr_30987_33080 = state_30885__$1;
(statearr_30987_33080[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (9))){
var inst_30765 = (state_30885[(8)]);
var state_30885__$1 = state_30885;
var statearr_30988_33081 = state_30885__$1;
(statearr_30988_33081[(2)] = inst_30765);

(statearr_30988_33081[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (5))){
var state_30885__$1 = state_30885;
var statearr_30989_33082 = state_30885__$1;
(statearr_30989_33082[(2)] = true);

(statearr_30989_33082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (14))){
var state_30885__$1 = state_30885;
var statearr_30990_33083 = state_30885__$1;
(statearr_30990_33083[(2)] = false);

(statearr_30990_33083[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (26))){
var inst_30828 = (state_30885[(11)]);
var inst_30841 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30828);
var state_30885__$1 = state_30885;
var statearr_30991_33089 = state_30885__$1;
(statearr_30991_33089[(2)] = inst_30841);

(statearr_30991_33089[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (16))){
var state_30885__$1 = state_30885;
var statearr_30992_33091 = state_30885__$1;
(statearr_30992_33091[(2)] = true);

(statearr_30992_33091[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (38))){
var inst_30872 = (state_30885[(2)]);
var state_30885__$1 = state_30885;
var statearr_30993_33092 = state_30885__$1;
(statearr_30993_33092[(2)] = inst_30872);

(statearr_30993_33092[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (30))){
var inst_30819 = (state_30885[(10)]);
var inst_30828 = (state_30885[(11)]);
var inst_30820 = (state_30885[(13)]);
var inst_30855 = cljs.core.empty_QMARK_(inst_30819);
var inst_30856 = (inst_30820.cljs$core$IFn$_invoke$arity$1 ? inst_30820.cljs$core$IFn$_invoke$arity$1(inst_30828) : inst_30820.call(null,inst_30828));
var inst_30857 = cljs.core.not(inst_30856);
var inst_30858 = ((inst_30855) && (inst_30857));
var state_30885__$1 = state_30885;
var statearr_30995_33103 = state_30885__$1;
(statearr_30995_33103[(2)] = inst_30858);

(statearr_30995_33103[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (10))){
var inst_30765 = (state_30885[(8)]);
var inst_30790 = (state_30885[(2)]);
var inst_30791 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30790,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30790,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30790,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30794 = inst_30765;
var state_30885__$1 = (function (){var statearr_30996 = state_30885;
(statearr_30996[(7)] = inst_30794);

(statearr_30996[(16)] = inst_30791);

(statearr_30996[(17)] = inst_30792);

(statearr_30996[(18)] = inst_30793);

return statearr_30996;
})();
var statearr_30997_33105 = state_30885__$1;
(statearr_30997_33105[(2)] = null);

(statearr_30997_33105[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (18))){
var inst_30810 = (state_30885[(2)]);
var state_30885__$1 = state_30885;
var statearr_30999_33108 = state_30885__$1;
(statearr_30999_33108[(2)] = inst_30810);

(statearr_30999_33108[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (37))){
var state_30885__$1 = state_30885;
var statearr_31000_33109 = state_30885__$1;
(statearr_31000_33109[(2)] = null);

(statearr_31000_33109[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (8))){
var inst_30765 = (state_30885[(8)]);
var inst_30787 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30765);
var state_30885__$1 = state_30885;
var statearr_31001_33113 = state_30885__$1;
(statearr_31001_33113[(2)] = inst_30787);

(statearr_31001_33113[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__28722__auto__ = null;
var cljs$core$async$mix_$_state_machine__28722__auto____0 = (function (){
var statearr_31007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31007[(0)] = cljs$core$async$mix_$_state_machine__28722__auto__);

(statearr_31007[(1)] = (1));

return statearr_31007;
});
var cljs$core$async$mix_$_state_machine__28722__auto____1 = (function (state_30885){
while(true){
var ret_value__28723__auto__ = (function (){try{while(true){
var result__28724__auto__ = switch__28721__auto__(state_30885);
if(cljs.core.keyword_identical_QMARK_(result__28724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28724__auto__;
}
break;
}
}catch (e31008){var ex__28725__auto__ = e31008;
var statearr_31009_33114 = state_30885;
(statearr_31009_33114[(2)] = ex__28725__auto__);


if(cljs.core.seq((state_30885[(4)]))){
var statearr_31010_33118 = state_30885;
(statearr_31010_33118[(1)] = cljs.core.first((state_30885[(4)])));

} else {
throw ex__28725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33119 = state_30885;
state_30885 = G__33119;
continue;
} else {
return ret_value__28723__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28722__auto__ = function(state_30885){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28722__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28722__auto____1.call(this,state_30885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28722__auto____0;
cljs$core$async$mix_$_state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28722__auto____1;
return cljs$core$async$mix_$_state_machine__28722__auto__;
})()
})();
var state__29045__auto__ = (function (){var statearr_31012 = f__29044__auto__();
(statearr_31012[(6)] = c__29036__auto___33015);

return statearr_31012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29045__auto__);
}));


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

var cljs$core$async$Pub$sub_STAR_$dyn_33123 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33123(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33127 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33127(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33130 = (function() {
var G__33131 = null;
var G__33131__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33131__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33131 = function(p,v){
switch(arguments.length){
case 1:
return G__33131__1.call(this,p);
case 2:
return G__33131__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33131.cljs$core$IFn$_invoke$arity$1 = G__33131__1;
G__33131.cljs$core$IFn$_invoke$arity$2 = G__33131__2;
return G__33131;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31037 = arguments.length;
switch (G__31037) {
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

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33130(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33130(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__31044 = arguments.length;
switch (G__31044) {
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

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31038_SHARP_){
if(cljs.core.truth_((p1__31038_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31038_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31038_SHARP_.call(null,topic)))){
return p1__31038_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31038_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31116 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31116 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31117){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31117 = meta31117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31118,meta31117__$1){
var self__ = this;
var _31118__$1 = this;
return (new cljs.core.async.t_cljs$core$async31116(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31117__$1));
}));

(cljs.core.async.t_cljs$core$async31116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31118){
var self__ = this;
var _31118__$1 = this;
return self__.meta31117;
}));

(cljs.core.async.t_cljs$core$async31116.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31116.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31116.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31116.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31116.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31116.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31116.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31116.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31117","meta31117",-1612838953,null)], null);
}));

(cljs.core.async.t_cljs$core$async31116.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31116.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31116");

(cljs.core.async.t_cljs$core$async31116.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31116");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31116.
 */
cljs.core.async.__GT_t_cljs$core$async31116 = (function cljs$core$async$__GT_t_cljs$core$async31116(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31117){
return (new cljs.core.async.t_cljs$core$async31116(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31117));
});

}

return (new cljs.core.async.t_cljs$core$async31116(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29036__auto___33146 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29044__auto__ = (function (){var switch__28721__auto__ = (function (state_31249){
var state_val_31255 = (state_31249[(1)]);
if((state_val_31255 === (7))){
var inst_31236 = (state_31249[(2)]);
var state_31249__$1 = state_31249;
var statearr_31268_33148 = state_31249__$1;
(statearr_31268_33148[(2)] = inst_31236);

(statearr_31268_33148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31255 === (20))){
var state_31249__$1 = state_31249;
var statearr_31273_33150 = state_31249__$1;
(statearr_31273_33150[(2)] = null);

(statearr_31273_33150[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31255 === (1))){
var state_31249__$1 = state_31249;
var statearr_31274_33151 = state_31249__$1;
(statearr_31274_33151[(2)] = null);

(statearr_31274_33151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31255 === (24))){
var inst_31219 = (state_31249[(7)]);
var inst_31228 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31219);
var state_31249__$1 = state_31249;
var statearr_31275_33152 = state_31249__$1;
(statearr_31275_33152[(2)] = inst_31228);

(statearr_31275_33152[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31255 === (4))){
var inst_31165 = (state_31249[(8)]);
var inst_31165__$1 = (state_31249[(2)]);
var inst_31166 = (inst_31165__$1 == null);
var state_31249__$1 = (function (){var statearr_31282 = state_31249;
(statearr_31282[(8)] = inst_31165__$1);

return statearr_31282;
})();
if(cljs.core.truth_(inst_31166)){
var statearr_31283_33153 = state_31249__$1;
(statearr_31283_33153[(1)] = (5));

} else {
var statearr_31288_33154 = state_31249__$1;
(statearr_31288_33154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31255 === (15))){
var inst_31213 = (state_31249[(2)]);
var state_31249__$1 = state_31249;
var statearr_31290_33155 = state_31249__$1;
(statearr_31290_33155[(2)] = inst_31213);

(statearr_31290_33155[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31255 === (21))){
var inst_31233 = (state_31249[(2)]);
var state_31249__$1 = (function (){var statearr_31291 = state_31249;
(statearr_31291[(9)] = inst_31233);

return statearr_31291;
})();
var statearr_31292_33156 = state_31249__$1;
(statearr_31292_33156[(2)] = null);

(statearr_31292_33156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31255 === (13))){
var inst_31193 = (state_31249[(10)]);
var inst_31197 = cljs.core.chunked_seq_QMARK_(inst_31193);
var state_31249__$1 = state_31249;
if(inst_31197){
var statearr_31297_33157 = state_31249__$1;
(statearr_31297_33157[(1)] = (16));

} else {
var statearr_31301_33159 = state_31249__$1;
(statearr_31301_33159[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31255 === (22))){
var inst_31225 = (state_31249[(2)]);
var state_31249__$1 = state_31249;
if(cljs.core.truth_(inst_31225)){
var statearr_31302_33164 = state_31249__$1;
(statearr_31302_33164[(1)] = (23));

} else {
var statearr_31303_33165 = state_31249__$1;
(statearr_31303_33165[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31255 === (6))){
var inst_31219 = (state_31249[(7)]);
var inst_31221 = (state_31249[(11)]);
var inst_31165 = (state_31249[(8)]);
var inst_31219__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31165) : topic_fn.call(null,inst_31165));
var inst_31220 = cljs.core.deref(mults);
var inst_31221__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31220,inst_31219__$1);
var state_31249__$1 = (function (){var statearr_31311 = state_31249;
(statearr_31311[(7)] = inst_31219__$1);

(statearr_31311[(11)] = inst_31221__$1);

return statearr_31311;
})();
if(cljs.core.truth_(inst_31221__$1)){
var statearr_31312_33166 = state_31249__$1;
(statearr_31312_33166[(1)] = (19));

} else {
var statearr_31313_33167 = state_31249__$1;
(statearr_31313_33167[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31255 === (25))){
var inst_31230 = (state_31249[(2)]);
var state_31249__$1 = state_31249;
var statearr_31314_33168 = state_31249__$1;
(statearr_31314_33168[(2)] = inst_31230);

(statearr_31314_33168[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31255 === (17))){
var inst_31193 = (state_31249[(10)]);
var inst_31204 = cljs.core.first(inst_31193);
var inst_31205 = cljs.core.async.muxch_STAR_(inst_31204);
var inst_31206 = cljs.core.async.close_BANG_(inst_31205);
var inst_31207 = cljs.core.next(inst_31193);
var inst_31178 = inst_31207;
var inst_31179 = null;
var inst_31180 = (0);
var inst_31181 = (0);
var state_31249__$1 = (function (){var statearr_31326 = state_31249;
(statearr_31326[(12)] = inst_31181);

(statearr_31326[(13)] = inst_31179);

(statearr_31326[(14)] = inst_31206);

(statearr_31326[(15)] = inst_31180);

(statearr_31326[(16)] = inst_31178);

return statearr_31326;
})();
var statearr_31327_33169 = state_31249__$1;
(statearr_31327_33169[(2)] = null);

(statearr_31327_33169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31255 === (3))){
var inst_31238 = (state_31249[(2)]);
var state_31249__$1 = state_31249;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31249__$1,inst_31238);
} else {
if((state_val_31255 === (12))){
var inst_31215 = (state_31249[(2)]);
var state_31249__$1 = state_31249;
var statearr_31331_33170 = state_31249__$1;
(statearr_31331_33170[(2)] = inst_31215);

(statearr_31331_33170[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31255 === (2))){
var state_31249__$1 = state_31249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31249__$1,(4),ch);
} else {
if((state_val_31255 === (23))){
var state_31249__$1 = state_31249;
var statearr_31332_33171 = state_31249__$1;
(statearr_31332_33171[(2)] = null);

(statearr_31332_33171[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31255 === (19))){
var inst_31221 = (state_31249[(11)]);
var inst_31165 = (state_31249[(8)]);
var inst_31223 = cljs.core.async.muxch_STAR_(inst_31221);
var state_31249__$1 = state_31249;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31249__$1,(22),inst_31223,inst_31165);
} else {
if((state_val_31255 === (11))){
var inst_31193 = (state_31249[(10)]);
var inst_31178 = (state_31249[(16)]);
var inst_31193__$1 = cljs.core.seq(inst_31178);
var state_31249__$1 = (function (){var statearr_31337 = state_31249;
(statearr_31337[(10)] = inst_31193__$1);

return statearr_31337;
})();
if(inst_31193__$1){
var statearr_31338_33172 = state_31249__$1;
(statearr_31338_33172[(1)] = (13));

} else {
var statearr_31339_33173 = state_31249__$1;
(statearr_31339_33173[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31255 === (9))){
var inst_31217 = (state_31249[(2)]);
var state_31249__$1 = state_31249;
var statearr_31341_33174 = state_31249__$1;
(statearr_31341_33174[(2)] = inst_31217);

(statearr_31341_33174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31255 === (5))){
var inst_31175 = cljs.core.deref(mults);
var inst_31176 = cljs.core.vals(inst_31175);
var inst_31177 = cljs.core.seq(inst_31176);
var inst_31178 = inst_31177;
var inst_31179 = null;
var inst_31180 = (0);
var inst_31181 = (0);
var state_31249__$1 = (function (){var statearr_31343 = state_31249;
(statearr_31343[(12)] = inst_31181);

(statearr_31343[(13)] = inst_31179);

(statearr_31343[(15)] = inst_31180);

(statearr_31343[(16)] = inst_31178);

return statearr_31343;
})();
var statearr_31344_33175 = state_31249__$1;
(statearr_31344_33175[(2)] = null);

(statearr_31344_33175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31255 === (14))){
var state_31249__$1 = state_31249;
var statearr_31348_33176 = state_31249__$1;
(statearr_31348_33176[(2)] = null);

(statearr_31348_33176[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31255 === (16))){
var inst_31193 = (state_31249[(10)]);
var inst_31199 = cljs.core.chunk_first(inst_31193);
var inst_31200 = cljs.core.chunk_rest(inst_31193);
var inst_31201 = cljs.core.count(inst_31199);
var inst_31178 = inst_31200;
var inst_31179 = inst_31199;
var inst_31180 = inst_31201;
var inst_31181 = (0);
var state_31249__$1 = (function (){var statearr_31354 = state_31249;
(statearr_31354[(12)] = inst_31181);

(statearr_31354[(13)] = inst_31179);

(statearr_31354[(15)] = inst_31180);

(statearr_31354[(16)] = inst_31178);

return statearr_31354;
})();
var statearr_31355_33177 = state_31249__$1;
(statearr_31355_33177[(2)] = null);

(statearr_31355_33177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31255 === (10))){
var inst_31181 = (state_31249[(12)]);
var inst_31179 = (state_31249[(13)]);
var inst_31180 = (state_31249[(15)]);
var inst_31178 = (state_31249[(16)]);
var inst_31186 = cljs.core._nth(inst_31179,inst_31181);
var inst_31187 = cljs.core.async.muxch_STAR_(inst_31186);
var inst_31188 = cljs.core.async.close_BANG_(inst_31187);
var inst_31189 = (inst_31181 + (1));
var tmp31345 = inst_31179;
var tmp31346 = inst_31180;
var tmp31347 = inst_31178;
var inst_31178__$1 = tmp31347;
var inst_31179__$1 = tmp31345;
var inst_31180__$1 = tmp31346;
var inst_31181__$1 = inst_31189;
var state_31249__$1 = (function (){var statearr_31356 = state_31249;
(statearr_31356[(12)] = inst_31181__$1);

(statearr_31356[(17)] = inst_31188);

(statearr_31356[(13)] = inst_31179__$1);

(statearr_31356[(15)] = inst_31180__$1);

(statearr_31356[(16)] = inst_31178__$1);

return statearr_31356;
})();
var statearr_31357_33180 = state_31249__$1;
(statearr_31357_33180[(2)] = null);

(statearr_31357_33180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31255 === (18))){
var inst_31210 = (state_31249[(2)]);
var state_31249__$1 = state_31249;
var statearr_31358_33182 = state_31249__$1;
(statearr_31358_33182[(2)] = inst_31210);

(statearr_31358_33182[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31255 === (8))){
var inst_31181 = (state_31249[(12)]);
var inst_31180 = (state_31249[(15)]);
var inst_31183 = (inst_31181 < inst_31180);
var inst_31184 = inst_31183;
var state_31249__$1 = state_31249;
if(cljs.core.truth_(inst_31184)){
var statearr_31368_33183 = state_31249__$1;
(statearr_31368_33183[(1)] = (10));

} else {
var statearr_31370_33184 = state_31249__$1;
(statearr_31370_33184[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__28722__auto__ = null;
var cljs$core$async$state_machine__28722__auto____0 = (function (){
var statearr_31376 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31376[(0)] = cljs$core$async$state_machine__28722__auto__);

(statearr_31376[(1)] = (1));

return statearr_31376;
});
var cljs$core$async$state_machine__28722__auto____1 = (function (state_31249){
while(true){
var ret_value__28723__auto__ = (function (){try{while(true){
var result__28724__auto__ = switch__28721__auto__(state_31249);
if(cljs.core.keyword_identical_QMARK_(result__28724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28724__auto__;
}
break;
}
}catch (e31377){var ex__28725__auto__ = e31377;
var statearr_31378_33185 = state_31249;
(statearr_31378_33185[(2)] = ex__28725__auto__);


if(cljs.core.seq((state_31249[(4)]))){
var statearr_31379_33186 = state_31249;
(statearr_31379_33186[(1)] = cljs.core.first((state_31249[(4)])));

} else {
throw ex__28725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33187 = state_31249;
state_31249 = G__33187;
continue;
} else {
return ret_value__28723__auto__;
}
break;
}
});
cljs$core$async$state_machine__28722__auto__ = function(state_31249){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28722__auto____1.call(this,state_31249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28722__auto____0;
cljs$core$async$state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28722__auto____1;
return cljs$core$async$state_machine__28722__auto__;
})()
})();
var state__29045__auto__ = (function (){var statearr_31398 = f__29044__auto__();
(statearr_31398[(6)] = c__29036__auto___33146);

return statearr_31398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29045__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31421 = arguments.length;
switch (G__31421) {
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

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

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
var G__31431 = arguments.length;
switch (G__31431) {
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

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__31433 = arguments.length;
switch (G__31433) {
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

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29036__auto___33202 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29044__auto__ = (function (){var switch__28721__auto__ = (function (state_31545){
var state_val_31546 = (state_31545[(1)]);
if((state_val_31546 === (7))){
var state_31545__$1 = state_31545;
var statearr_31553_33207 = state_31545__$1;
(statearr_31553_33207[(2)] = null);

(statearr_31553_33207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31546 === (1))){
var state_31545__$1 = state_31545;
var statearr_31554_33208 = state_31545__$1;
(statearr_31554_33208[(2)] = null);

(statearr_31554_33208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31546 === (4))){
var inst_31476 = (state_31545[(7)]);
var inst_31481 = (state_31545[(8)]);
var inst_31491 = (inst_31481 < inst_31476);
var state_31545__$1 = state_31545;
if(cljs.core.truth_(inst_31491)){
var statearr_31555_33210 = state_31545__$1;
(statearr_31555_33210[(1)] = (6));

} else {
var statearr_31556_33211 = state_31545__$1;
(statearr_31556_33211[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31546 === (15))){
var inst_31524 = (state_31545[(9)]);
var inst_31529 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31524);
var state_31545__$1 = state_31545;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31545__$1,(17),out,inst_31529);
} else {
if((state_val_31546 === (13))){
var inst_31524 = (state_31545[(9)]);
var inst_31524__$1 = (state_31545[(2)]);
var inst_31525 = cljs.core.some(cljs.core.nil_QMARK_,inst_31524__$1);
var state_31545__$1 = (function (){var statearr_31557 = state_31545;
(statearr_31557[(9)] = inst_31524__$1);

return statearr_31557;
})();
if(cljs.core.truth_(inst_31525)){
var statearr_31558_33212 = state_31545__$1;
(statearr_31558_33212[(1)] = (14));

} else {
var statearr_31559_33213 = state_31545__$1;
(statearr_31559_33213[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31546 === (6))){
var state_31545__$1 = state_31545;
var statearr_31560_33214 = state_31545__$1;
(statearr_31560_33214[(2)] = null);

(statearr_31560_33214[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31546 === (17))){
var inst_31531 = (state_31545[(2)]);
var state_31545__$1 = (function (){var statearr_31582 = state_31545;
(statearr_31582[(10)] = inst_31531);

return statearr_31582;
})();
var statearr_31583_33215 = state_31545__$1;
(statearr_31583_33215[(2)] = null);

(statearr_31583_33215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31546 === (3))){
var inst_31536 = (state_31545[(2)]);
var state_31545__$1 = state_31545;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31545__$1,inst_31536);
} else {
if((state_val_31546 === (12))){
var _ = (function (){var statearr_31587 = state_31545;
(statearr_31587[(4)] = cljs.core.rest((state_31545[(4)])));

return statearr_31587;
})();
var state_31545__$1 = state_31545;
var ex31581 = (state_31545__$1[(2)]);
var statearr_31588_33216 = state_31545__$1;
(statearr_31588_33216[(5)] = ex31581);


if((ex31581 instanceof Object)){
var statearr_31589_33217 = state_31545__$1;
(statearr_31589_33217[(1)] = (11));

(statearr_31589_33217[(5)] = null);

} else {
throw ex31581;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31546 === (2))){
var inst_31471 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31476 = cnt;
var inst_31481 = (0);
var state_31545__$1 = (function (){var statearr_31592 = state_31545;
(statearr_31592[(7)] = inst_31476);

(statearr_31592[(11)] = inst_31471);

(statearr_31592[(8)] = inst_31481);

return statearr_31592;
})();
var statearr_31593_33218 = state_31545__$1;
(statearr_31593_33218[(2)] = null);

(statearr_31593_33218[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31546 === (11))){
var inst_31503 = (state_31545[(2)]);
var inst_31504 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31545__$1 = (function (){var statearr_31595 = state_31545;
(statearr_31595[(12)] = inst_31503);

return statearr_31595;
})();
var statearr_31596_33219 = state_31545__$1;
(statearr_31596_33219[(2)] = inst_31504);

(statearr_31596_33219[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31546 === (9))){
var inst_31481 = (state_31545[(8)]);
var _ = (function (){var statearr_31597 = state_31545;
(statearr_31597[(4)] = cljs.core.cons((12),(state_31545[(4)])));

return statearr_31597;
})();
var inst_31510 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31481) : chs__$1.call(null,inst_31481));
var inst_31511 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31481) : done.call(null,inst_31481));
var inst_31512 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31510,inst_31511);
var ___$1 = (function (){var statearr_31598 = state_31545;
(statearr_31598[(4)] = cljs.core.rest((state_31545[(4)])));

return statearr_31598;
})();
var state_31545__$1 = state_31545;
var statearr_31599_33220 = state_31545__$1;
(statearr_31599_33220[(2)] = inst_31512);

(statearr_31599_33220[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31546 === (5))){
var inst_31522 = (state_31545[(2)]);
var state_31545__$1 = (function (){var statearr_31600 = state_31545;
(statearr_31600[(13)] = inst_31522);

return statearr_31600;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31545__$1,(13),dchan);
} else {
if((state_val_31546 === (14))){
var inst_31527 = cljs.core.async.close_BANG_(out);
var state_31545__$1 = state_31545;
var statearr_31601_33225 = state_31545__$1;
(statearr_31601_33225[(2)] = inst_31527);

(statearr_31601_33225[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31546 === (16))){
var inst_31534 = (state_31545[(2)]);
var state_31545__$1 = state_31545;
var statearr_31602_33229 = state_31545__$1;
(statearr_31602_33229[(2)] = inst_31534);

(statearr_31602_33229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31546 === (10))){
var inst_31481 = (state_31545[(8)]);
var inst_31515 = (state_31545[(2)]);
var inst_31516 = (inst_31481 + (1));
var inst_31481__$1 = inst_31516;
var state_31545__$1 = (function (){var statearr_31603 = state_31545;
(statearr_31603[(14)] = inst_31515);

(statearr_31603[(8)] = inst_31481__$1);

return statearr_31603;
})();
var statearr_31604_33230 = state_31545__$1;
(statearr_31604_33230[(2)] = null);

(statearr_31604_33230[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31546 === (8))){
var inst_31520 = (state_31545[(2)]);
var state_31545__$1 = state_31545;
var statearr_31605_33233 = state_31545__$1;
(statearr_31605_33233[(2)] = inst_31520);

(statearr_31605_33233[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__28722__auto__ = null;
var cljs$core$async$state_machine__28722__auto____0 = (function (){
var statearr_31606 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31606[(0)] = cljs$core$async$state_machine__28722__auto__);

(statearr_31606[(1)] = (1));

return statearr_31606;
});
var cljs$core$async$state_machine__28722__auto____1 = (function (state_31545){
while(true){
var ret_value__28723__auto__ = (function (){try{while(true){
var result__28724__auto__ = switch__28721__auto__(state_31545);
if(cljs.core.keyword_identical_QMARK_(result__28724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28724__auto__;
}
break;
}
}catch (e31607){var ex__28725__auto__ = e31607;
var statearr_31608_33239 = state_31545;
(statearr_31608_33239[(2)] = ex__28725__auto__);


if(cljs.core.seq((state_31545[(4)]))){
var statearr_31609_33240 = state_31545;
(statearr_31609_33240[(1)] = cljs.core.first((state_31545[(4)])));

} else {
throw ex__28725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33249 = state_31545;
state_31545 = G__33249;
continue;
} else {
return ret_value__28723__auto__;
}
break;
}
});
cljs$core$async$state_machine__28722__auto__ = function(state_31545){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28722__auto____1.call(this,state_31545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28722__auto____0;
cljs$core$async$state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28722__auto____1;
return cljs$core$async$state_machine__28722__auto__;
})()
})();
var state__29045__auto__ = (function (){var statearr_31614 = f__29044__auto__();
(statearr_31614[(6)] = c__29036__auto___33202);

return statearr_31614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29045__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31617 = arguments.length;
switch (G__31617) {
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

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29036__auto___33261 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29044__auto__ = (function (){var switch__28721__auto__ = (function (state_31676){
var state_val_31677 = (state_31676[(1)]);
if((state_val_31677 === (7))){
var inst_31631 = (state_31676[(7)]);
var inst_31630 = (state_31676[(8)]);
var inst_31630__$1 = (state_31676[(2)]);
var inst_31631__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31630__$1,(0),null);
var inst_31632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31630__$1,(1),null);
var inst_31633 = (inst_31631__$1 == null);
var state_31676__$1 = (function (){var statearr_31687 = state_31676;
(statearr_31687[(9)] = inst_31632);

(statearr_31687[(7)] = inst_31631__$1);

(statearr_31687[(8)] = inst_31630__$1);

return statearr_31687;
})();
if(cljs.core.truth_(inst_31633)){
var statearr_31688_33262 = state_31676__$1;
(statearr_31688_33262[(1)] = (8));

} else {
var statearr_31689_33263 = state_31676__$1;
(statearr_31689_33263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31677 === (1))){
var inst_31618 = cljs.core.vec(chs);
var inst_31619 = inst_31618;
var state_31676__$1 = (function (){var statearr_31690 = state_31676;
(statearr_31690[(10)] = inst_31619);

return statearr_31690;
})();
var statearr_31691_33265 = state_31676__$1;
(statearr_31691_33265[(2)] = null);

(statearr_31691_33265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31677 === (4))){
var inst_31619 = (state_31676[(10)]);
var state_31676__$1 = state_31676;
return cljs.core.async.ioc_alts_BANG_(state_31676__$1,(7),inst_31619);
} else {
if((state_val_31677 === (6))){
var inst_31672 = (state_31676[(2)]);
var state_31676__$1 = state_31676;
var statearr_31692_33268 = state_31676__$1;
(statearr_31692_33268[(2)] = inst_31672);

(statearr_31692_33268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31677 === (3))){
var inst_31674 = (state_31676[(2)]);
var state_31676__$1 = state_31676;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31676__$1,inst_31674);
} else {
if((state_val_31677 === (2))){
var inst_31619 = (state_31676[(10)]);
var inst_31621 = cljs.core.count(inst_31619);
var inst_31622 = (inst_31621 > (0));
var state_31676__$1 = state_31676;
if(cljs.core.truth_(inst_31622)){
var statearr_31695_33269 = state_31676__$1;
(statearr_31695_33269[(1)] = (4));

} else {
var statearr_31696_33270 = state_31676__$1;
(statearr_31696_33270[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31677 === (11))){
var inst_31619 = (state_31676[(10)]);
var inst_31665 = (state_31676[(2)]);
var tmp31693 = inst_31619;
var inst_31619__$1 = tmp31693;
var state_31676__$1 = (function (){var statearr_31697 = state_31676;
(statearr_31697[(11)] = inst_31665);

(statearr_31697[(10)] = inst_31619__$1);

return statearr_31697;
})();
var statearr_31699_33277 = state_31676__$1;
(statearr_31699_33277[(2)] = null);

(statearr_31699_33277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31677 === (9))){
var inst_31631 = (state_31676[(7)]);
var state_31676__$1 = state_31676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31676__$1,(11),out,inst_31631);
} else {
if((state_val_31677 === (5))){
var inst_31670 = cljs.core.async.close_BANG_(out);
var state_31676__$1 = state_31676;
var statearr_31703_33283 = state_31676__$1;
(statearr_31703_33283[(2)] = inst_31670);

(statearr_31703_33283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31677 === (10))){
var inst_31668 = (state_31676[(2)]);
var state_31676__$1 = state_31676;
var statearr_31704_33284 = state_31676__$1;
(statearr_31704_33284[(2)] = inst_31668);

(statearr_31704_33284[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31677 === (8))){
var inst_31632 = (state_31676[(9)]);
var inst_31631 = (state_31676[(7)]);
var inst_31619 = (state_31676[(10)]);
var inst_31630 = (state_31676[(8)]);
var inst_31635 = (function (){var cs = inst_31619;
var vec__31624 = inst_31630;
var v = inst_31631;
var c = inst_31632;
return (function (p1__31615_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31615_SHARP_);
});
})();
var inst_31661 = cljs.core.filterv(inst_31635,inst_31619);
var inst_31619__$1 = inst_31661;
var state_31676__$1 = (function (){var statearr_31706 = state_31676;
(statearr_31706[(10)] = inst_31619__$1);

return statearr_31706;
})();
var statearr_31707_33286 = state_31676__$1;
(statearr_31707_33286[(2)] = null);

(statearr_31707_33286[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__28722__auto__ = null;
var cljs$core$async$state_machine__28722__auto____0 = (function (){
var statearr_31710 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31710[(0)] = cljs$core$async$state_machine__28722__auto__);

(statearr_31710[(1)] = (1));

return statearr_31710;
});
var cljs$core$async$state_machine__28722__auto____1 = (function (state_31676){
while(true){
var ret_value__28723__auto__ = (function (){try{while(true){
var result__28724__auto__ = switch__28721__auto__(state_31676);
if(cljs.core.keyword_identical_QMARK_(result__28724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28724__auto__;
}
break;
}
}catch (e31713){var ex__28725__auto__ = e31713;
var statearr_31714_33287 = state_31676;
(statearr_31714_33287[(2)] = ex__28725__auto__);


if(cljs.core.seq((state_31676[(4)]))){
var statearr_31716_33288 = state_31676;
(statearr_31716_33288[(1)] = cljs.core.first((state_31676[(4)])));

} else {
throw ex__28725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33289 = state_31676;
state_31676 = G__33289;
continue;
} else {
return ret_value__28723__auto__;
}
break;
}
});
cljs$core$async$state_machine__28722__auto__ = function(state_31676){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28722__auto____1.call(this,state_31676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28722__auto____0;
cljs$core$async$state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28722__auto____1;
return cljs$core$async$state_machine__28722__auto__;
})()
})();
var state__29045__auto__ = (function (){var statearr_31717 = f__29044__auto__();
(statearr_31717[(6)] = c__29036__auto___33261);

return statearr_31717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29045__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

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
var G__31730 = arguments.length;
switch (G__31730) {
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

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29036__auto___33302 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29044__auto__ = (function (){var switch__28721__auto__ = (function (state_31777){
var state_val_31778 = (state_31777[(1)]);
if((state_val_31778 === (7))){
var inst_31759 = (state_31777[(7)]);
var inst_31759__$1 = (state_31777[(2)]);
var inst_31760 = (inst_31759__$1 == null);
var inst_31761 = cljs.core.not(inst_31760);
var state_31777__$1 = (function (){var statearr_31779 = state_31777;
(statearr_31779[(7)] = inst_31759__$1);

return statearr_31779;
})();
if(inst_31761){
var statearr_31780_33304 = state_31777__$1;
(statearr_31780_33304[(1)] = (8));

} else {
var statearr_31781_33305 = state_31777__$1;
(statearr_31781_33305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (1))){
var inst_31754 = (0);
var state_31777__$1 = (function (){var statearr_31782 = state_31777;
(statearr_31782[(8)] = inst_31754);

return statearr_31782;
})();
var statearr_31783_33306 = state_31777__$1;
(statearr_31783_33306[(2)] = null);

(statearr_31783_33306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (4))){
var state_31777__$1 = state_31777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31777__$1,(7),ch);
} else {
if((state_val_31778 === (6))){
var inst_31772 = (state_31777[(2)]);
var state_31777__$1 = state_31777;
var statearr_31786_33307 = state_31777__$1;
(statearr_31786_33307[(2)] = inst_31772);

(statearr_31786_33307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (3))){
var inst_31774 = (state_31777[(2)]);
var inst_31775 = cljs.core.async.close_BANG_(out);
var state_31777__$1 = (function (){var statearr_31787 = state_31777;
(statearr_31787[(9)] = inst_31774);

return statearr_31787;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31777__$1,inst_31775);
} else {
if((state_val_31778 === (2))){
var inst_31754 = (state_31777[(8)]);
var inst_31756 = (inst_31754 < n);
var state_31777__$1 = state_31777;
if(cljs.core.truth_(inst_31756)){
var statearr_31802_33309 = state_31777__$1;
(statearr_31802_33309[(1)] = (4));

} else {
var statearr_31806_33310 = state_31777__$1;
(statearr_31806_33310[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (11))){
var inst_31754 = (state_31777[(8)]);
var inst_31764 = (state_31777[(2)]);
var inst_31765 = (inst_31754 + (1));
var inst_31754__$1 = inst_31765;
var state_31777__$1 = (function (){var statearr_31830 = state_31777;
(statearr_31830[(10)] = inst_31764);

(statearr_31830[(8)] = inst_31754__$1);

return statearr_31830;
})();
var statearr_31831_33320 = state_31777__$1;
(statearr_31831_33320[(2)] = null);

(statearr_31831_33320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (9))){
var state_31777__$1 = state_31777;
var statearr_31832_33321 = state_31777__$1;
(statearr_31832_33321[(2)] = null);

(statearr_31832_33321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (5))){
var state_31777__$1 = state_31777;
var statearr_31833_33323 = state_31777__$1;
(statearr_31833_33323[(2)] = null);

(statearr_31833_33323[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (10))){
var inst_31769 = (state_31777[(2)]);
var state_31777__$1 = state_31777;
var statearr_31834_33324 = state_31777__$1;
(statearr_31834_33324[(2)] = inst_31769);

(statearr_31834_33324[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (8))){
var inst_31759 = (state_31777[(7)]);
var state_31777__$1 = state_31777;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31777__$1,(11),out,inst_31759);
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
});
return (function() {
var cljs$core$async$state_machine__28722__auto__ = null;
var cljs$core$async$state_machine__28722__auto____0 = (function (){
var statearr_31846 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31846[(0)] = cljs$core$async$state_machine__28722__auto__);

(statearr_31846[(1)] = (1));

return statearr_31846;
});
var cljs$core$async$state_machine__28722__auto____1 = (function (state_31777){
while(true){
var ret_value__28723__auto__ = (function (){try{while(true){
var result__28724__auto__ = switch__28721__auto__(state_31777);
if(cljs.core.keyword_identical_QMARK_(result__28724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28724__auto__;
}
break;
}
}catch (e31847){var ex__28725__auto__ = e31847;
var statearr_31848_33331 = state_31777;
(statearr_31848_33331[(2)] = ex__28725__auto__);


if(cljs.core.seq((state_31777[(4)]))){
var statearr_31849_33332 = state_31777;
(statearr_31849_33332[(1)] = cljs.core.first((state_31777[(4)])));

} else {
throw ex__28725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33333 = state_31777;
state_31777 = G__33333;
continue;
} else {
return ret_value__28723__auto__;
}
break;
}
});
cljs$core$async$state_machine__28722__auto__ = function(state_31777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28722__auto____1.call(this,state_31777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28722__auto____0;
cljs$core$async$state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28722__auto____1;
return cljs$core$async$state_machine__28722__auto__;
})()
})();
var state__29045__auto__ = (function (){var statearr_31853 = f__29044__auto__();
(statearr_31853[(6)] = c__29036__auto___33302);

return statearr_31853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29045__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31856 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31856 = (function (f,ch,meta31857){
this.f = f;
this.ch = ch;
this.meta31857 = meta31857;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31858,meta31857__$1){
var self__ = this;
var _31858__$1 = this;
return (new cljs.core.async.t_cljs$core$async31856(self__.f,self__.ch,meta31857__$1));
}));

(cljs.core.async.t_cljs$core$async31856.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31858){
var self__ = this;
var _31858__$1 = this;
return self__.meta31857;
}));

(cljs.core.async.t_cljs$core$async31856.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31856.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31856.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31856.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31856.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31863 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31863 = (function (f,ch,meta31857,_,fn1,meta31864){
this.f = f;
this.ch = ch;
this.meta31857 = meta31857;
this._ = _;
this.fn1 = fn1;
this.meta31864 = meta31864;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31865,meta31864__$1){
var self__ = this;
var _31865__$1 = this;
return (new cljs.core.async.t_cljs$core$async31863(self__.f,self__.ch,self__.meta31857,self__._,self__.fn1,meta31864__$1));
}));

(cljs.core.async.t_cljs$core$async31863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31865){
var self__ = this;
var _31865__$1 = this;
return self__.meta31864;
}));

(cljs.core.async.t_cljs$core$async31863.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31863.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31863.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31863.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31854_SHARP_){
var G__31908 = (((p1__31854_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31854_SHARP_) : self__.f.call(null,p1__31854_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31908) : f1.call(null,G__31908));
});
}));

(cljs.core.async.t_cljs$core$async31863.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31857","meta31857",2046314544,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31856","cljs.core.async/t_cljs$core$async31856",192713297,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31864","meta31864",791494493,null)], null);
}));

(cljs.core.async.t_cljs$core$async31863.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31863.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31863");

(cljs.core.async.t_cljs$core$async31863.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31863");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31863.
 */
cljs.core.async.__GT_t_cljs$core$async31863 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31863(f__$1,ch__$1,meta31857__$1,___$2,fn1__$1,meta31864){
return (new cljs.core.async.t_cljs$core$async31863(f__$1,ch__$1,meta31857__$1,___$2,fn1__$1,meta31864));
});

}

return (new cljs.core.async.t_cljs$core$async31863(self__.f,self__.ch,self__.meta31857,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31916 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31916) : self__.f.call(null,G__31916));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31856.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31856.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31856.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31857","meta31857",2046314544,null)], null);
}));

(cljs.core.async.t_cljs$core$async31856.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31856.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31856");

(cljs.core.async.t_cljs$core$async31856.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31856");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31856.
 */
cljs.core.async.__GT_t_cljs$core$async31856 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31856(f__$1,ch__$1,meta31857){
return (new cljs.core.async.t_cljs$core$async31856(f__$1,ch__$1,meta31857));
});

}

return (new cljs.core.async.t_cljs$core$async31856(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31918 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31918 = (function (f,ch,meta31919){
this.f = f;
this.ch = ch;
this.meta31919 = meta31919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31920,meta31919__$1){
var self__ = this;
var _31920__$1 = this;
return (new cljs.core.async.t_cljs$core$async31918(self__.f,self__.ch,meta31919__$1));
}));

(cljs.core.async.t_cljs$core$async31918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31920){
var self__ = this;
var _31920__$1 = this;
return self__.meta31919;
}));

(cljs.core.async.t_cljs$core$async31918.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31918.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31918.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31918.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31918.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31918.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31918.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31919","meta31919",569597035,null)], null);
}));

(cljs.core.async.t_cljs$core$async31918.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31918.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31918");

(cljs.core.async.t_cljs$core$async31918.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31918");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31918.
 */
cljs.core.async.__GT_t_cljs$core$async31918 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31918(f__$1,ch__$1,meta31919){
return (new cljs.core.async.t_cljs$core$async31918(f__$1,ch__$1,meta31919));
});

}

return (new cljs.core.async.t_cljs$core$async31918(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31935 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31935 = (function (p,ch,meta31936){
this.p = p;
this.ch = ch;
this.meta31936 = meta31936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31937,meta31936__$1){
var self__ = this;
var _31937__$1 = this;
return (new cljs.core.async.t_cljs$core$async31935(self__.p,self__.ch,meta31936__$1));
}));

(cljs.core.async.t_cljs$core$async31935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31937){
var self__ = this;
var _31937__$1 = this;
return self__.meta31936;
}));

(cljs.core.async.t_cljs$core$async31935.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31935.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31935.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31935.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31935.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31935.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31935.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31935.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31936","meta31936",-1066330719,null)], null);
}));

(cljs.core.async.t_cljs$core$async31935.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31935.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31935");

(cljs.core.async.t_cljs$core$async31935.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31935");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31935.
 */
cljs.core.async.__GT_t_cljs$core$async31935 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31935(p__$1,ch__$1,meta31936){
return (new cljs.core.async.t_cljs$core$async31935(p__$1,ch__$1,meta31936));
});

}

return (new cljs.core.async.t_cljs$core$async31935(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31940 = arguments.length;
switch (G__31940) {
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

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29036__auto___33356 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29044__auto__ = (function (){var switch__28721__auto__ = (function (state_32069){
var state_val_32070 = (state_32069[(1)]);
if((state_val_32070 === (7))){
var inst_32064 = (state_32069[(2)]);
var state_32069__$1 = state_32069;
var statearr_32085_33357 = state_32069__$1;
(statearr_32085_33357[(2)] = inst_32064);

(statearr_32085_33357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (1))){
var state_32069__$1 = state_32069;
var statearr_32086_33359 = state_32069__$1;
(statearr_32086_33359[(2)] = null);

(statearr_32086_33359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (4))){
var inst_32048 = (state_32069[(7)]);
var inst_32048__$1 = (state_32069[(2)]);
var inst_32049 = (inst_32048__$1 == null);
var state_32069__$1 = (function (){var statearr_32087 = state_32069;
(statearr_32087[(7)] = inst_32048__$1);

return statearr_32087;
})();
if(cljs.core.truth_(inst_32049)){
var statearr_32088_33361 = state_32069__$1;
(statearr_32088_33361[(1)] = (5));

} else {
var statearr_32089_33362 = state_32069__$1;
(statearr_32089_33362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (6))){
var inst_32048 = (state_32069[(7)]);
var inst_32053 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32048) : p.call(null,inst_32048));
var state_32069__$1 = state_32069;
if(cljs.core.truth_(inst_32053)){
var statearr_32092_33363 = state_32069__$1;
(statearr_32092_33363[(1)] = (8));

} else {
var statearr_32093_33364 = state_32069__$1;
(statearr_32093_33364[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (3))){
var inst_32066 = (state_32069[(2)]);
var state_32069__$1 = state_32069;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32069__$1,inst_32066);
} else {
if((state_val_32070 === (2))){
var state_32069__$1 = state_32069;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32069__$1,(4),ch);
} else {
if((state_val_32070 === (11))){
var inst_32058 = (state_32069[(2)]);
var state_32069__$1 = state_32069;
var statearr_32094_33367 = state_32069__$1;
(statearr_32094_33367[(2)] = inst_32058);

(statearr_32094_33367[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (9))){
var state_32069__$1 = state_32069;
var statearr_32095_33369 = state_32069__$1;
(statearr_32095_33369[(2)] = null);

(statearr_32095_33369[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (5))){
var inst_32051 = cljs.core.async.close_BANG_(out);
var state_32069__$1 = state_32069;
var statearr_32130_33370 = state_32069__$1;
(statearr_32130_33370[(2)] = inst_32051);

(statearr_32130_33370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (10))){
var inst_32061 = (state_32069[(2)]);
var state_32069__$1 = (function (){var statearr_32136 = state_32069;
(statearr_32136[(8)] = inst_32061);

return statearr_32136;
})();
var statearr_32137_33371 = state_32069__$1;
(statearr_32137_33371[(2)] = null);

(statearr_32137_33371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32070 === (8))){
var inst_32048 = (state_32069[(7)]);
var state_32069__$1 = state_32069;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32069__$1,(11),out,inst_32048);
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
});
return (function() {
var cljs$core$async$state_machine__28722__auto__ = null;
var cljs$core$async$state_machine__28722__auto____0 = (function (){
var statearr_32140 = [null,null,null,null,null,null,null,null,null];
(statearr_32140[(0)] = cljs$core$async$state_machine__28722__auto__);

(statearr_32140[(1)] = (1));

return statearr_32140;
});
var cljs$core$async$state_machine__28722__auto____1 = (function (state_32069){
while(true){
var ret_value__28723__auto__ = (function (){try{while(true){
var result__28724__auto__ = switch__28721__auto__(state_32069);
if(cljs.core.keyword_identical_QMARK_(result__28724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28724__auto__;
}
break;
}
}catch (e32149){var ex__28725__auto__ = e32149;
var statearr_32153_33372 = state_32069;
(statearr_32153_33372[(2)] = ex__28725__auto__);


if(cljs.core.seq((state_32069[(4)]))){
var statearr_32158_33373 = state_32069;
(statearr_32158_33373[(1)] = cljs.core.first((state_32069[(4)])));

} else {
throw ex__28725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33374 = state_32069;
state_32069 = G__33374;
continue;
} else {
return ret_value__28723__auto__;
}
break;
}
});
cljs$core$async$state_machine__28722__auto__ = function(state_32069){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28722__auto____1.call(this,state_32069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28722__auto____0;
cljs$core$async$state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28722__auto____1;
return cljs$core$async$state_machine__28722__auto__;
})()
})();
var state__29045__auto__ = (function (){var statearr_32169 = f__29044__auto__();
(statearr_32169[(6)] = c__29036__auto___33356);

return statearr_32169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29045__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32179 = arguments.length;
switch (G__32179) {
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

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29036__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29044__auto__ = (function (){var switch__28721__auto__ = (function (state_32373){
var state_val_32374 = (state_32373[(1)]);
if((state_val_32374 === (7))){
var inst_32369 = (state_32373[(2)]);
var state_32373__$1 = state_32373;
var statearr_32375_33380 = state_32373__$1;
(statearr_32375_33380[(2)] = inst_32369);

(statearr_32375_33380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (20))){
var inst_32339 = (state_32373[(7)]);
var inst_32350 = (state_32373[(2)]);
var inst_32351 = cljs.core.next(inst_32339);
var inst_32266 = inst_32351;
var inst_32267 = null;
var inst_32268 = (0);
var inst_32269 = (0);
var state_32373__$1 = (function (){var statearr_32376 = state_32373;
(statearr_32376[(8)] = inst_32350);

(statearr_32376[(9)] = inst_32269);

(statearr_32376[(10)] = inst_32266);

(statearr_32376[(11)] = inst_32267);

(statearr_32376[(12)] = inst_32268);

return statearr_32376;
})();
var statearr_32377_33384 = state_32373__$1;
(statearr_32377_33384[(2)] = null);

(statearr_32377_33384[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (1))){
var state_32373__$1 = state_32373;
var statearr_32378_33390 = state_32373__$1;
(statearr_32378_33390[(2)] = null);

(statearr_32378_33390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (4))){
var inst_32250 = (state_32373[(13)]);
var inst_32250__$1 = (state_32373[(2)]);
var inst_32253 = (inst_32250__$1 == null);
var state_32373__$1 = (function (){var statearr_32379 = state_32373;
(statearr_32379[(13)] = inst_32250__$1);

return statearr_32379;
})();
if(cljs.core.truth_(inst_32253)){
var statearr_32380_33392 = state_32373__$1;
(statearr_32380_33392[(1)] = (5));

} else {
var statearr_32381_33393 = state_32373__$1;
(statearr_32381_33393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (15))){
var state_32373__$1 = state_32373;
var statearr_32385_33395 = state_32373__$1;
(statearr_32385_33395[(2)] = null);

(statearr_32385_33395[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (21))){
var state_32373__$1 = state_32373;
var statearr_32386_33396 = state_32373__$1;
(statearr_32386_33396[(2)] = null);

(statearr_32386_33396[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (13))){
var inst_32269 = (state_32373[(9)]);
var inst_32266 = (state_32373[(10)]);
var inst_32267 = (state_32373[(11)]);
var inst_32268 = (state_32373[(12)]);
var inst_32285 = (state_32373[(2)]);
var inst_32290 = (inst_32269 + (1));
var tmp32382 = inst_32266;
var tmp32383 = inst_32267;
var tmp32384 = inst_32268;
var inst_32266__$1 = tmp32382;
var inst_32267__$1 = tmp32383;
var inst_32268__$1 = tmp32384;
var inst_32269__$1 = inst_32290;
var state_32373__$1 = (function (){var statearr_32387 = state_32373;
(statearr_32387[(9)] = inst_32269__$1);

(statearr_32387[(10)] = inst_32266__$1);

(statearr_32387[(11)] = inst_32267__$1);

(statearr_32387[(14)] = inst_32285);

(statearr_32387[(12)] = inst_32268__$1);

return statearr_32387;
})();
var statearr_32388_33402 = state_32373__$1;
(statearr_32388_33402[(2)] = null);

(statearr_32388_33402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (22))){
var state_32373__$1 = state_32373;
var statearr_32389_33407 = state_32373__$1;
(statearr_32389_33407[(2)] = null);

(statearr_32389_33407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (6))){
var inst_32250 = (state_32373[(13)]);
var inst_32264 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32250) : f.call(null,inst_32250));
var inst_32265 = cljs.core.seq(inst_32264);
var inst_32266 = inst_32265;
var inst_32267 = null;
var inst_32268 = (0);
var inst_32269 = (0);
var state_32373__$1 = (function (){var statearr_32390 = state_32373;
(statearr_32390[(9)] = inst_32269);

(statearr_32390[(10)] = inst_32266);

(statearr_32390[(11)] = inst_32267);

(statearr_32390[(12)] = inst_32268);

return statearr_32390;
})();
var statearr_32391_33411 = state_32373__$1;
(statearr_32391_33411[(2)] = null);

(statearr_32391_33411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (17))){
var inst_32339 = (state_32373[(7)]);
var inst_32343 = cljs.core.chunk_first(inst_32339);
var inst_32344 = cljs.core.chunk_rest(inst_32339);
var inst_32345 = cljs.core.count(inst_32343);
var inst_32266 = inst_32344;
var inst_32267 = inst_32343;
var inst_32268 = inst_32345;
var inst_32269 = (0);
var state_32373__$1 = (function (){var statearr_32392 = state_32373;
(statearr_32392[(9)] = inst_32269);

(statearr_32392[(10)] = inst_32266);

(statearr_32392[(11)] = inst_32267);

(statearr_32392[(12)] = inst_32268);

return statearr_32392;
})();
var statearr_32393_33413 = state_32373__$1;
(statearr_32393_33413[(2)] = null);

(statearr_32393_33413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (3))){
var inst_32371 = (state_32373[(2)]);
var state_32373__$1 = state_32373;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32373__$1,inst_32371);
} else {
if((state_val_32374 === (12))){
var inst_32359 = (state_32373[(2)]);
var state_32373__$1 = state_32373;
var statearr_32394_33420 = state_32373__$1;
(statearr_32394_33420[(2)] = inst_32359);

(statearr_32394_33420[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (2))){
var state_32373__$1 = state_32373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32373__$1,(4),in$);
} else {
if((state_val_32374 === (23))){
var inst_32367 = (state_32373[(2)]);
var state_32373__$1 = state_32373;
var statearr_32395_33422 = state_32373__$1;
(statearr_32395_33422[(2)] = inst_32367);

(statearr_32395_33422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (19))){
var inst_32354 = (state_32373[(2)]);
var state_32373__$1 = state_32373;
var statearr_32396_33426 = state_32373__$1;
(statearr_32396_33426[(2)] = inst_32354);

(statearr_32396_33426[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (11))){
var inst_32266 = (state_32373[(10)]);
var inst_32339 = (state_32373[(7)]);
var inst_32339__$1 = cljs.core.seq(inst_32266);
var state_32373__$1 = (function (){var statearr_32397 = state_32373;
(statearr_32397[(7)] = inst_32339__$1);

return statearr_32397;
})();
if(inst_32339__$1){
var statearr_32398_33428 = state_32373__$1;
(statearr_32398_33428[(1)] = (14));

} else {
var statearr_32399_33430 = state_32373__$1;
(statearr_32399_33430[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (9))){
var inst_32361 = (state_32373[(2)]);
var inst_32362 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32373__$1 = (function (){var statearr_32400 = state_32373;
(statearr_32400[(15)] = inst_32361);

return statearr_32400;
})();
if(cljs.core.truth_(inst_32362)){
var statearr_32401_33431 = state_32373__$1;
(statearr_32401_33431[(1)] = (21));

} else {
var statearr_32402_33437 = state_32373__$1;
(statearr_32402_33437[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (5))){
var inst_32255 = cljs.core.async.close_BANG_(out);
var state_32373__$1 = state_32373;
var statearr_32403_33440 = state_32373__$1;
(statearr_32403_33440[(2)] = inst_32255);

(statearr_32403_33440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (14))){
var inst_32339 = (state_32373[(7)]);
var inst_32341 = cljs.core.chunked_seq_QMARK_(inst_32339);
var state_32373__$1 = state_32373;
if(inst_32341){
var statearr_32404_33441 = state_32373__$1;
(statearr_32404_33441[(1)] = (17));

} else {
var statearr_32405_33442 = state_32373__$1;
(statearr_32405_33442[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (16))){
var inst_32357 = (state_32373[(2)]);
var state_32373__$1 = state_32373;
var statearr_32406_33443 = state_32373__$1;
(statearr_32406_33443[(2)] = inst_32357);

(statearr_32406_33443[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32374 === (10))){
var inst_32269 = (state_32373[(9)]);
var inst_32267 = (state_32373[(11)]);
var inst_32283 = cljs.core._nth(inst_32267,inst_32269);
var state_32373__$1 = state_32373;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32373__$1,(13),out,inst_32283);
} else {
if((state_val_32374 === (18))){
var inst_32339 = (state_32373[(7)]);
var inst_32348 = cljs.core.first(inst_32339);
var state_32373__$1 = state_32373;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32373__$1,(20),out,inst_32348);
} else {
if((state_val_32374 === (8))){
var inst_32269 = (state_32373[(9)]);
var inst_32268 = (state_32373[(12)]);
var inst_32278 = (inst_32269 < inst_32268);
var inst_32279 = inst_32278;
var state_32373__$1 = state_32373;
if(cljs.core.truth_(inst_32279)){
var statearr_32407_33453 = state_32373__$1;
(statearr_32407_33453[(1)] = (10));

} else {
var statearr_32408_33454 = state_32373__$1;
(statearr_32408_33454[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28722__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28722__auto____0 = (function (){
var statearr_32409 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32409[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28722__auto__);

(statearr_32409[(1)] = (1));

return statearr_32409;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28722__auto____1 = (function (state_32373){
while(true){
var ret_value__28723__auto__ = (function (){try{while(true){
var result__28724__auto__ = switch__28721__auto__(state_32373);
if(cljs.core.keyword_identical_QMARK_(result__28724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28724__auto__;
}
break;
}
}catch (e32410){var ex__28725__auto__ = e32410;
var statearr_32411_33464 = state_32373;
(statearr_32411_33464[(2)] = ex__28725__auto__);


if(cljs.core.seq((state_32373[(4)]))){
var statearr_32412_33465 = state_32373;
(statearr_32412_33465[(1)] = cljs.core.first((state_32373[(4)])));

} else {
throw ex__28725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33466 = state_32373;
state_32373 = G__33466;
continue;
} else {
return ret_value__28723__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28722__auto__ = function(state_32373){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28722__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28722__auto____1.call(this,state_32373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28722__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28722__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28722__auto__;
})()
})();
var state__29045__auto__ = (function (){var statearr_32413 = f__29044__auto__();
(statearr_32413[(6)] = c__29036__auto__);

return statearr_32413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29045__auto__);
}));

return c__29036__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32416 = arguments.length;
switch (G__32416) {
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

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32418 = arguments.length;
switch (G__32418) {
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

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32420 = arguments.length;
switch (G__32420) {
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

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29036__auto___33494 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29044__auto__ = (function (){var switch__28721__auto__ = (function (state_32444){
var state_val_32445 = (state_32444[(1)]);
if((state_val_32445 === (7))){
var inst_32439 = (state_32444[(2)]);
var state_32444__$1 = state_32444;
var statearr_32446_33498 = state_32444__$1;
(statearr_32446_33498[(2)] = inst_32439);

(statearr_32446_33498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32445 === (1))){
var inst_32421 = null;
var state_32444__$1 = (function (){var statearr_32447 = state_32444;
(statearr_32447[(7)] = inst_32421);

return statearr_32447;
})();
var statearr_32448_33499 = state_32444__$1;
(statearr_32448_33499[(2)] = null);

(statearr_32448_33499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32445 === (4))){
var inst_32424 = (state_32444[(8)]);
var inst_32424__$1 = (state_32444[(2)]);
var inst_32425 = (inst_32424__$1 == null);
var inst_32426 = cljs.core.not(inst_32425);
var state_32444__$1 = (function (){var statearr_32449 = state_32444;
(statearr_32449[(8)] = inst_32424__$1);

return statearr_32449;
})();
if(inst_32426){
var statearr_32450_33503 = state_32444__$1;
(statearr_32450_33503[(1)] = (5));

} else {
var statearr_32451_33504 = state_32444__$1;
(statearr_32451_33504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32445 === (6))){
var state_32444__$1 = state_32444;
var statearr_32452_33507 = state_32444__$1;
(statearr_32452_33507[(2)] = null);

(statearr_32452_33507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32445 === (3))){
var inst_32441 = (state_32444[(2)]);
var inst_32442 = cljs.core.async.close_BANG_(out);
var state_32444__$1 = (function (){var statearr_32453 = state_32444;
(statearr_32453[(9)] = inst_32441);

return statearr_32453;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32444__$1,inst_32442);
} else {
if((state_val_32445 === (2))){
var state_32444__$1 = state_32444;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32444__$1,(4),ch);
} else {
if((state_val_32445 === (11))){
var inst_32424 = (state_32444[(8)]);
var inst_32433 = (state_32444[(2)]);
var inst_32421 = inst_32424;
var state_32444__$1 = (function (){var statearr_32454 = state_32444;
(statearr_32454[(7)] = inst_32421);

(statearr_32454[(10)] = inst_32433);

return statearr_32454;
})();
var statearr_32455_33514 = state_32444__$1;
(statearr_32455_33514[(2)] = null);

(statearr_32455_33514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32445 === (9))){
var inst_32424 = (state_32444[(8)]);
var state_32444__$1 = state_32444;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32444__$1,(11),out,inst_32424);
} else {
if((state_val_32445 === (5))){
var inst_32421 = (state_32444[(7)]);
var inst_32424 = (state_32444[(8)]);
var inst_32428 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32424,inst_32421);
var state_32444__$1 = state_32444;
if(inst_32428){
var statearr_32457_33515 = state_32444__$1;
(statearr_32457_33515[(1)] = (8));

} else {
var statearr_32458_33516 = state_32444__$1;
(statearr_32458_33516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32445 === (10))){
var inst_32436 = (state_32444[(2)]);
var state_32444__$1 = state_32444;
var statearr_32459_33517 = state_32444__$1;
(statearr_32459_33517[(2)] = inst_32436);

(statearr_32459_33517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32445 === (8))){
var inst_32421 = (state_32444[(7)]);
var tmp32456 = inst_32421;
var inst_32421__$1 = tmp32456;
var state_32444__$1 = (function (){var statearr_32460 = state_32444;
(statearr_32460[(7)] = inst_32421__$1);

return statearr_32460;
})();
var statearr_32461_33518 = state_32444__$1;
(statearr_32461_33518[(2)] = null);

(statearr_32461_33518[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__28722__auto__ = null;
var cljs$core$async$state_machine__28722__auto____0 = (function (){
var statearr_32462 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32462[(0)] = cljs$core$async$state_machine__28722__auto__);

(statearr_32462[(1)] = (1));

return statearr_32462;
});
var cljs$core$async$state_machine__28722__auto____1 = (function (state_32444){
while(true){
var ret_value__28723__auto__ = (function (){try{while(true){
var result__28724__auto__ = switch__28721__auto__(state_32444);
if(cljs.core.keyword_identical_QMARK_(result__28724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28724__auto__;
}
break;
}
}catch (e32463){var ex__28725__auto__ = e32463;
var statearr_32464_33523 = state_32444;
(statearr_32464_33523[(2)] = ex__28725__auto__);


if(cljs.core.seq((state_32444[(4)]))){
var statearr_32465_33524 = state_32444;
(statearr_32465_33524[(1)] = cljs.core.first((state_32444[(4)])));

} else {
throw ex__28725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33526 = state_32444;
state_32444 = G__33526;
continue;
} else {
return ret_value__28723__auto__;
}
break;
}
});
cljs$core$async$state_machine__28722__auto__ = function(state_32444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28722__auto____1.call(this,state_32444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28722__auto____0;
cljs$core$async$state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28722__auto____1;
return cljs$core$async$state_machine__28722__auto__;
})()
})();
var state__29045__auto__ = (function (){var statearr_32466 = f__29044__auto__();
(statearr_32466[(6)] = c__29036__auto___33494);

return statearr_32466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29045__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32468 = arguments.length;
switch (G__32468) {
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

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29036__auto___33528 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29044__auto__ = (function (){var switch__28721__auto__ = (function (state_32510){
var state_val_32511 = (state_32510[(1)]);
if((state_val_32511 === (7))){
var inst_32506 = (state_32510[(2)]);
var state_32510__$1 = state_32510;
var statearr_32512_33529 = state_32510__$1;
(statearr_32512_33529[(2)] = inst_32506);

(statearr_32512_33529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (1))){
var inst_32471 = (new Array(n));
var inst_32473 = inst_32471;
var inst_32474 = (0);
var state_32510__$1 = (function (){var statearr_32514 = state_32510;
(statearr_32514[(7)] = inst_32474);

(statearr_32514[(8)] = inst_32473);

return statearr_32514;
})();
var statearr_32515_33530 = state_32510__$1;
(statearr_32515_33530[(2)] = null);

(statearr_32515_33530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (4))){
var inst_32477 = (state_32510[(9)]);
var inst_32477__$1 = (state_32510[(2)]);
var inst_32478 = (inst_32477__$1 == null);
var inst_32479 = cljs.core.not(inst_32478);
var state_32510__$1 = (function (){var statearr_32517 = state_32510;
(statearr_32517[(9)] = inst_32477__$1);

return statearr_32517;
})();
if(inst_32479){
var statearr_32518_33531 = state_32510__$1;
(statearr_32518_33531[(1)] = (5));

} else {
var statearr_32519_33532 = state_32510__$1;
(statearr_32519_33532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (15))){
var inst_32500 = (state_32510[(2)]);
var state_32510__$1 = state_32510;
var statearr_32520_33533 = state_32510__$1;
(statearr_32520_33533[(2)] = inst_32500);

(statearr_32520_33533[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (13))){
var state_32510__$1 = state_32510;
var statearr_32521_33534 = state_32510__$1;
(statearr_32521_33534[(2)] = null);

(statearr_32521_33534[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (6))){
var inst_32474 = (state_32510[(7)]);
var inst_32496 = (inst_32474 > (0));
var state_32510__$1 = state_32510;
if(cljs.core.truth_(inst_32496)){
var statearr_32522_33535 = state_32510__$1;
(statearr_32522_33535[(1)] = (12));

} else {
var statearr_32523_33540 = state_32510__$1;
(statearr_32523_33540[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (3))){
var inst_32508 = (state_32510[(2)]);
var state_32510__$1 = state_32510;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32510__$1,inst_32508);
} else {
if((state_val_32511 === (12))){
var inst_32473 = (state_32510[(8)]);
var inst_32498 = cljs.core.vec(inst_32473);
var state_32510__$1 = state_32510;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32510__$1,(15),out,inst_32498);
} else {
if((state_val_32511 === (2))){
var state_32510__$1 = state_32510;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32510__$1,(4),ch);
} else {
if((state_val_32511 === (11))){
var inst_32490 = (state_32510[(2)]);
var inst_32491 = (new Array(n));
var inst_32473 = inst_32491;
var inst_32474 = (0);
var state_32510__$1 = (function (){var statearr_32524 = state_32510;
(statearr_32524[(7)] = inst_32474);

(statearr_32524[(8)] = inst_32473);

(statearr_32524[(10)] = inst_32490);

return statearr_32524;
})();
var statearr_32526_33549 = state_32510__$1;
(statearr_32526_33549[(2)] = null);

(statearr_32526_33549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (9))){
var inst_32473 = (state_32510[(8)]);
var inst_32488 = cljs.core.vec(inst_32473);
var state_32510__$1 = state_32510;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32510__$1,(11),out,inst_32488);
} else {
if((state_val_32511 === (5))){
var inst_32474 = (state_32510[(7)]);
var inst_32473 = (state_32510[(8)]);
var inst_32477 = (state_32510[(9)]);
var inst_32482 = (state_32510[(11)]);
var inst_32481 = (inst_32473[inst_32474] = inst_32477);
var inst_32482__$1 = (inst_32474 + (1));
var inst_32484 = (inst_32482__$1 < n);
var state_32510__$1 = (function (){var statearr_32529 = state_32510;
(statearr_32529[(11)] = inst_32482__$1);

(statearr_32529[(12)] = inst_32481);

return statearr_32529;
})();
if(cljs.core.truth_(inst_32484)){
var statearr_32530_33550 = state_32510__$1;
(statearr_32530_33550[(1)] = (8));

} else {
var statearr_32531_33551 = state_32510__$1;
(statearr_32531_33551[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (14))){
var inst_32503 = (state_32510[(2)]);
var inst_32504 = cljs.core.async.close_BANG_(out);
var state_32510__$1 = (function (){var statearr_32533 = state_32510;
(statearr_32533[(13)] = inst_32503);

return statearr_32533;
})();
var statearr_32534_33552 = state_32510__$1;
(statearr_32534_33552[(2)] = inst_32504);

(statearr_32534_33552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (10))){
var inst_32494 = (state_32510[(2)]);
var state_32510__$1 = state_32510;
var statearr_32535_33553 = state_32510__$1;
(statearr_32535_33553[(2)] = inst_32494);

(statearr_32535_33553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32511 === (8))){
var inst_32473 = (state_32510[(8)]);
var inst_32482 = (state_32510[(11)]);
var tmp32532 = inst_32473;
var inst_32473__$1 = tmp32532;
var inst_32474 = inst_32482;
var state_32510__$1 = (function (){var statearr_32536 = state_32510;
(statearr_32536[(7)] = inst_32474);

(statearr_32536[(8)] = inst_32473__$1);

return statearr_32536;
})();
var statearr_32537_33558 = state_32510__$1;
(statearr_32537_33558[(2)] = null);

(statearr_32537_33558[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__28722__auto__ = null;
var cljs$core$async$state_machine__28722__auto____0 = (function (){
var statearr_32538 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32538[(0)] = cljs$core$async$state_machine__28722__auto__);

(statearr_32538[(1)] = (1));

return statearr_32538;
});
var cljs$core$async$state_machine__28722__auto____1 = (function (state_32510){
while(true){
var ret_value__28723__auto__ = (function (){try{while(true){
var result__28724__auto__ = switch__28721__auto__(state_32510);
if(cljs.core.keyword_identical_QMARK_(result__28724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28724__auto__;
}
break;
}
}catch (e32540){var ex__28725__auto__ = e32540;
var statearr_32543_33559 = state_32510;
(statearr_32543_33559[(2)] = ex__28725__auto__);


if(cljs.core.seq((state_32510[(4)]))){
var statearr_32544_33560 = state_32510;
(statearr_32544_33560[(1)] = cljs.core.first((state_32510[(4)])));

} else {
throw ex__28725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33561 = state_32510;
state_32510 = G__33561;
continue;
} else {
return ret_value__28723__auto__;
}
break;
}
});
cljs$core$async$state_machine__28722__auto__ = function(state_32510){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28722__auto____1.call(this,state_32510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28722__auto____0;
cljs$core$async$state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28722__auto____1;
return cljs$core$async$state_machine__28722__auto__;
})()
})();
var state__29045__auto__ = (function (){var statearr_32545 = f__29044__auto__();
(statearr_32545[(6)] = c__29036__auto___33528);

return statearr_32545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29045__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32550 = arguments.length;
switch (G__32550) {
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

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29036__auto___33567 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29044__auto__ = (function (){var switch__28721__auto__ = (function (state_32600){
var state_val_32601 = (state_32600[(1)]);
if((state_val_32601 === (7))){
var inst_32596 = (state_32600[(2)]);
var state_32600__$1 = state_32600;
var statearr_32602_33569 = state_32600__$1;
(statearr_32602_33569[(2)] = inst_32596);

(statearr_32602_33569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32601 === (1))){
var inst_32559 = [];
var inst_32560 = inst_32559;
var inst_32561 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32600__$1 = (function (){var statearr_32603 = state_32600;
(statearr_32603[(7)] = inst_32560);

(statearr_32603[(8)] = inst_32561);

return statearr_32603;
})();
var statearr_32604_33570 = state_32600__$1;
(statearr_32604_33570[(2)] = null);

(statearr_32604_33570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32601 === (4))){
var inst_32564 = (state_32600[(9)]);
var inst_32564__$1 = (state_32600[(2)]);
var inst_32565 = (inst_32564__$1 == null);
var inst_32566 = cljs.core.not(inst_32565);
var state_32600__$1 = (function (){var statearr_32605 = state_32600;
(statearr_32605[(9)] = inst_32564__$1);

return statearr_32605;
})();
if(inst_32566){
var statearr_32606_33571 = state_32600__$1;
(statearr_32606_33571[(1)] = (5));

} else {
var statearr_32607_33572 = state_32600__$1;
(statearr_32607_33572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32601 === (15))){
var inst_32590 = (state_32600[(2)]);
var state_32600__$1 = state_32600;
var statearr_32609_33573 = state_32600__$1;
(statearr_32609_33573[(2)] = inst_32590);

(statearr_32609_33573[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32601 === (13))){
var state_32600__$1 = state_32600;
var statearr_32612_33574 = state_32600__$1;
(statearr_32612_33574[(2)] = null);

(statearr_32612_33574[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32601 === (6))){
var inst_32560 = (state_32600[(7)]);
var inst_32585 = inst_32560.length;
var inst_32586 = (inst_32585 > (0));
var state_32600__$1 = state_32600;
if(cljs.core.truth_(inst_32586)){
var statearr_32616_33576 = state_32600__$1;
(statearr_32616_33576[(1)] = (12));

} else {
var statearr_32617_33577 = state_32600__$1;
(statearr_32617_33577[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32601 === (3))){
var inst_32598 = (state_32600[(2)]);
var state_32600__$1 = state_32600;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32600__$1,inst_32598);
} else {
if((state_val_32601 === (12))){
var inst_32560 = (state_32600[(7)]);
var inst_32588 = cljs.core.vec(inst_32560);
var state_32600__$1 = state_32600;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32600__$1,(15),out,inst_32588);
} else {
if((state_val_32601 === (2))){
var state_32600__$1 = state_32600;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32600__$1,(4),ch);
} else {
if((state_val_32601 === (11))){
var inst_32568 = (state_32600[(10)]);
var inst_32564 = (state_32600[(9)]);
var inst_32578 = (state_32600[(2)]);
var inst_32579 = [];
var inst_32580 = inst_32579.push(inst_32564);
var inst_32560 = inst_32579;
var inst_32561 = inst_32568;
var state_32600__$1 = (function (){var statearr_32621 = state_32600;
(statearr_32621[(11)] = inst_32578);

(statearr_32621[(12)] = inst_32580);

(statearr_32621[(7)] = inst_32560);

(statearr_32621[(8)] = inst_32561);

return statearr_32621;
})();
var statearr_32622_33578 = state_32600__$1;
(statearr_32622_33578[(2)] = null);

(statearr_32622_33578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32601 === (9))){
var inst_32560 = (state_32600[(7)]);
var inst_32576 = cljs.core.vec(inst_32560);
var state_32600__$1 = state_32600;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32600__$1,(11),out,inst_32576);
} else {
if((state_val_32601 === (5))){
var inst_32568 = (state_32600[(10)]);
var inst_32564 = (state_32600[(9)]);
var inst_32561 = (state_32600[(8)]);
var inst_32568__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32564) : f.call(null,inst_32564));
var inst_32569 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32568__$1,inst_32561);
var inst_32570 = cljs.core.keyword_identical_QMARK_(inst_32561,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32571 = ((inst_32569) || (inst_32570));
var state_32600__$1 = (function (){var statearr_32625 = state_32600;
(statearr_32625[(10)] = inst_32568__$1);

return statearr_32625;
})();
if(cljs.core.truth_(inst_32571)){
var statearr_32626_33583 = state_32600__$1;
(statearr_32626_33583[(1)] = (8));

} else {
var statearr_32627_33584 = state_32600__$1;
(statearr_32627_33584[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32601 === (14))){
var inst_32593 = (state_32600[(2)]);
var inst_32594 = cljs.core.async.close_BANG_(out);
var state_32600__$1 = (function (){var statearr_32630 = state_32600;
(statearr_32630[(13)] = inst_32593);

return statearr_32630;
})();
var statearr_32631_33585 = state_32600__$1;
(statearr_32631_33585[(2)] = inst_32594);

(statearr_32631_33585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32601 === (10))){
var inst_32583 = (state_32600[(2)]);
var state_32600__$1 = state_32600;
var statearr_32632_33586 = state_32600__$1;
(statearr_32632_33586[(2)] = inst_32583);

(statearr_32632_33586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32601 === (8))){
var inst_32568 = (state_32600[(10)]);
var inst_32564 = (state_32600[(9)]);
var inst_32560 = (state_32600[(7)]);
var inst_32573 = inst_32560.push(inst_32564);
var tmp32629 = inst_32560;
var inst_32560__$1 = tmp32629;
var inst_32561 = inst_32568;
var state_32600__$1 = (function (){var statearr_32633 = state_32600;
(statearr_32633[(14)] = inst_32573);

(statearr_32633[(7)] = inst_32560__$1);

(statearr_32633[(8)] = inst_32561);

return statearr_32633;
})();
var statearr_32634_33587 = state_32600__$1;
(statearr_32634_33587[(2)] = null);

(statearr_32634_33587[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__28722__auto__ = null;
var cljs$core$async$state_machine__28722__auto____0 = (function (){
var statearr_32635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32635[(0)] = cljs$core$async$state_machine__28722__auto__);

(statearr_32635[(1)] = (1));

return statearr_32635;
});
var cljs$core$async$state_machine__28722__auto____1 = (function (state_32600){
while(true){
var ret_value__28723__auto__ = (function (){try{while(true){
var result__28724__auto__ = switch__28721__auto__(state_32600);
if(cljs.core.keyword_identical_QMARK_(result__28724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28724__auto__;
}
break;
}
}catch (e32639){var ex__28725__auto__ = e32639;
var statearr_32640_33588 = state_32600;
(statearr_32640_33588[(2)] = ex__28725__auto__);


if(cljs.core.seq((state_32600[(4)]))){
var statearr_32641_33589 = state_32600;
(statearr_32641_33589[(1)] = cljs.core.first((state_32600[(4)])));

} else {
throw ex__28725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33590 = state_32600;
state_32600 = G__33590;
continue;
} else {
return ret_value__28723__auto__;
}
break;
}
});
cljs$core$async$state_machine__28722__auto__ = function(state_32600){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28722__auto____1.call(this,state_32600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28722__auto____0;
cljs$core$async$state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28722__auto____1;
return cljs$core$async$state_machine__28722__auto__;
})()
})();
var state__29045__auto__ = (function (){var statearr_32642 = f__29044__auto__();
(statearr_32642[(6)] = c__29036__auto___33567);

return statearr_32642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29045__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
