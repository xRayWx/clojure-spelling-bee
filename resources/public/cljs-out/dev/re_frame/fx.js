// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__11404 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__11405 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__11405;

try{try{var seq__11406 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__11407 = null;
var count__11408 = (0);
var i__11409 = (0);
while(true){
if((i__11409 < count__11408)){
var vec__11416 = cljs.core._nth.call(null,chunk__11407,i__11409);
var effect_key = cljs.core.nth.call(null,vec__11416,(0),null);
var effect_value = cljs.core.nth.call(null,vec__11416,(1),null);
var temp__5455__auto___11438 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11438)){
var effect_fn_11439 = temp__5455__auto___11438;
effect_fn_11439.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__11440 = seq__11406;
var G__11441 = chunk__11407;
var G__11442 = count__11408;
var G__11443 = (i__11409 + (1));
seq__11406 = G__11440;
chunk__11407 = G__11441;
count__11408 = G__11442;
i__11409 = G__11443;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__11406);
if(temp__5457__auto__){
var seq__11406__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11406__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11406__$1);
var G__11444 = cljs.core.chunk_rest.call(null,seq__11406__$1);
var G__11445 = c__4550__auto__;
var G__11446 = cljs.core.count.call(null,c__4550__auto__);
var G__11447 = (0);
seq__11406 = G__11444;
chunk__11407 = G__11445;
count__11408 = G__11446;
i__11409 = G__11447;
continue;
} else {
var vec__11419 = cljs.core.first.call(null,seq__11406__$1);
var effect_key = cljs.core.nth.call(null,vec__11419,(0),null);
var effect_value = cljs.core.nth.call(null,vec__11419,(1),null);
var temp__5455__auto___11448 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11448)){
var effect_fn_11449 = temp__5455__auto___11448;
effect_fn_11449.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__11450 = cljs.core.next.call(null,seq__11406__$1);
var G__11451 = null;
var G__11452 = (0);
var G__11453 = (0);
seq__11406 = G__11450;
chunk__11407 = G__11451;
count__11408 = G__11452;
i__11409 = G__11453;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__11212__auto___11454 = re_frame.interop.now.call(null);
var duration__11213__auto___11455 = (end__11212__auto___11454 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__11213__auto___11455,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__11212__auto___11454);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__11404;
}} else {
var seq__11422 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__11423 = null;
var count__11424 = (0);
var i__11425 = (0);
while(true){
if((i__11425 < count__11424)){
var vec__11432 = cljs.core._nth.call(null,chunk__11423,i__11425);
var effect_key = cljs.core.nth.call(null,vec__11432,(0),null);
var effect_value = cljs.core.nth.call(null,vec__11432,(1),null);
var temp__5455__auto___11456 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11456)){
var effect_fn_11457 = temp__5455__auto___11456;
effect_fn_11457.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__11458 = seq__11422;
var G__11459 = chunk__11423;
var G__11460 = count__11424;
var G__11461 = (i__11425 + (1));
seq__11422 = G__11458;
chunk__11423 = G__11459;
count__11424 = G__11460;
i__11425 = G__11461;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__11422);
if(temp__5457__auto__){
var seq__11422__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11422__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11422__$1);
var G__11462 = cljs.core.chunk_rest.call(null,seq__11422__$1);
var G__11463 = c__4550__auto__;
var G__11464 = cljs.core.count.call(null,c__4550__auto__);
var G__11465 = (0);
seq__11422 = G__11462;
chunk__11423 = G__11463;
count__11424 = G__11464;
i__11425 = G__11465;
continue;
} else {
var vec__11435 = cljs.core.first.call(null,seq__11422__$1);
var effect_key = cljs.core.nth.call(null,vec__11435,(0),null);
var effect_value = cljs.core.nth.call(null,vec__11435,(1),null);
var temp__5455__auto___11466 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11466)){
var effect_fn_11467 = temp__5455__auto___11466;
effect_fn_11467.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__11468 = cljs.core.next.call(null,seq__11422__$1);
var G__11469 = null;
var G__11470 = (0);
var G__11471 = (0);
seq__11422 = G__11468;
chunk__11423 = G__11469;
count__11424 = G__11470;
i__11425 = G__11471;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__11472 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__11473 = null;
var count__11474 = (0);
var i__11475 = (0);
while(true){
if((i__11475 < count__11474)){
var map__11480 = cljs.core._nth.call(null,chunk__11473,i__11475);
var map__11480__$1 = (((((!((map__11480 == null))))?(((((map__11480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11480):map__11480);
var effect = map__11480__$1;
var ms = cljs.core.get.call(null,map__11480__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__11480__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__11472,chunk__11473,count__11474,i__11475,map__11480,map__11480__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__11472,chunk__11473,count__11474,i__11475,map__11480,map__11480__$1,effect,ms,dispatch))
,ms);
}


var G__11484 = seq__11472;
var G__11485 = chunk__11473;
var G__11486 = count__11474;
var G__11487 = (i__11475 + (1));
seq__11472 = G__11484;
chunk__11473 = G__11485;
count__11474 = G__11486;
i__11475 = G__11487;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__11472);
if(temp__5457__auto__){
var seq__11472__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11472__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11472__$1);
var G__11488 = cljs.core.chunk_rest.call(null,seq__11472__$1);
var G__11489 = c__4550__auto__;
var G__11490 = cljs.core.count.call(null,c__4550__auto__);
var G__11491 = (0);
seq__11472 = G__11488;
chunk__11473 = G__11489;
count__11474 = G__11490;
i__11475 = G__11491;
continue;
} else {
var map__11482 = cljs.core.first.call(null,seq__11472__$1);
var map__11482__$1 = (((((!((map__11482 == null))))?(((((map__11482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11482):map__11482);
var effect = map__11482__$1;
var ms = cljs.core.get.call(null,map__11482__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__11482__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__11472,chunk__11473,count__11474,i__11475,map__11482,map__11482__$1,effect,ms,dispatch,seq__11472__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__11472,chunk__11473,count__11474,i__11475,map__11482,map__11482__$1,effect,ms,dispatch,seq__11472__$1,temp__5457__auto__))
,ms);
}


var G__11492 = cljs.core.next.call(null,seq__11472__$1);
var G__11493 = null;
var G__11494 = (0);
var G__11495 = (0);
seq__11472 = G__11492;
chunk__11473 = G__11493;
count__11474 = G__11494;
i__11475 = G__11495;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__11496 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__11497 = null;
var count__11498 = (0);
var i__11499 = (0);
while(true){
if((i__11499 < count__11498)){
var event = cljs.core._nth.call(null,chunk__11497,i__11499);
re_frame.router.dispatch.call(null,event);


var G__11500 = seq__11496;
var G__11501 = chunk__11497;
var G__11502 = count__11498;
var G__11503 = (i__11499 + (1));
seq__11496 = G__11500;
chunk__11497 = G__11501;
count__11498 = G__11502;
i__11499 = G__11503;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__11496);
if(temp__5457__auto__){
var seq__11496__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11496__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11496__$1);
var G__11504 = cljs.core.chunk_rest.call(null,seq__11496__$1);
var G__11505 = c__4550__auto__;
var G__11506 = cljs.core.count.call(null,c__4550__auto__);
var G__11507 = (0);
seq__11496 = G__11504;
chunk__11497 = G__11505;
count__11498 = G__11506;
i__11499 = G__11507;
continue;
} else {
var event = cljs.core.first.call(null,seq__11496__$1);
re_frame.router.dispatch.call(null,event);


var G__11508 = cljs.core.next.call(null,seq__11496__$1);
var G__11509 = null;
var G__11510 = (0);
var G__11511 = (0);
seq__11496 = G__11508;
chunk__11497 = G__11509;
count__11498 = G__11510;
i__11499 = G__11511;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__11512 = cljs.core.seq.call(null,value);
var chunk__11513 = null;
var count__11514 = (0);
var i__11515 = (0);
while(true){
if((i__11515 < count__11514)){
var event = cljs.core._nth.call(null,chunk__11513,i__11515);
clear_event.call(null,event);


var G__11516 = seq__11512;
var G__11517 = chunk__11513;
var G__11518 = count__11514;
var G__11519 = (i__11515 + (1));
seq__11512 = G__11516;
chunk__11513 = G__11517;
count__11514 = G__11518;
i__11515 = G__11519;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__11512);
if(temp__5457__auto__){
var seq__11512__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11512__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11512__$1);
var G__11520 = cljs.core.chunk_rest.call(null,seq__11512__$1);
var G__11521 = c__4550__auto__;
var G__11522 = cljs.core.count.call(null,c__4550__auto__);
var G__11523 = (0);
seq__11512 = G__11520;
chunk__11513 = G__11521;
count__11514 = G__11522;
i__11515 = G__11523;
continue;
} else {
var event = cljs.core.first.call(null,seq__11512__$1);
clear_event.call(null,event);


var G__11524 = cljs.core.next.call(null,seq__11512__$1);
var G__11525 = null;
var G__11526 = (0);
var G__11527 = (0);
seq__11512 = G__11524;
chunk__11513 = G__11525;
count__11514 = G__11526;
i__11515 = G__11527;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
