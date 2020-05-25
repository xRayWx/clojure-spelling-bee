// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__11234){
var map__11235 = p__11234;
var map__11235__$1 = (((((!((map__11235 == null))))?(((((map__11235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11235):map__11235);
var operation = cljs.core.get.call(null,map__11235__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__11235__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__11235__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__11235__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__11237_11257 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__11238_11258 = null;
var count__11239_11259 = (0);
var i__11240_11260 = (0);
while(true){
if((i__11240_11260 < count__11239_11259)){
var vec__11249_11261 = cljs.core._nth.call(null,chunk__11238_11258,i__11240_11260);
var k_11262 = cljs.core.nth.call(null,vec__11249_11261,(0),null);
var cb_11263 = cljs.core.nth.call(null,vec__11249_11261,(1),null);
try{cb_11263.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e11252){var e_11264 = e11252;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_11262,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_11264);
}

var G__11265 = seq__11237_11257;
var G__11266 = chunk__11238_11258;
var G__11267 = count__11239_11259;
var G__11268 = (i__11240_11260 + (1));
seq__11237_11257 = G__11265;
chunk__11238_11258 = G__11266;
count__11239_11259 = G__11267;
i__11240_11260 = G__11268;
continue;
} else {
var temp__5457__auto___11269 = cljs.core.seq.call(null,seq__11237_11257);
if(temp__5457__auto___11269){
var seq__11237_11270__$1 = temp__5457__auto___11269;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11237_11270__$1)){
var c__4550__auto___11271 = cljs.core.chunk_first.call(null,seq__11237_11270__$1);
var G__11272 = cljs.core.chunk_rest.call(null,seq__11237_11270__$1);
var G__11273 = c__4550__auto___11271;
var G__11274 = cljs.core.count.call(null,c__4550__auto___11271);
var G__11275 = (0);
seq__11237_11257 = G__11272;
chunk__11238_11258 = G__11273;
count__11239_11259 = G__11274;
i__11240_11260 = G__11275;
continue;
} else {
var vec__11253_11276 = cljs.core.first.call(null,seq__11237_11270__$1);
var k_11277 = cljs.core.nth.call(null,vec__11253_11276,(0),null);
var cb_11278 = cljs.core.nth.call(null,vec__11253_11276,(1),null);
try{cb_11278.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e11256){var e_11279 = e11256;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_11277,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_11279);
}

var G__11280 = cljs.core.next.call(null,seq__11237_11270__$1);
var G__11281 = null;
var G__11282 = (0);
var G__11283 = (0);
seq__11237_11257 = G__11280;
chunk__11238_11258 = G__11281;
count__11239_11259 = G__11282;
i__11240_11260 = G__11283;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map
