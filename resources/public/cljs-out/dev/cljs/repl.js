// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__26293){
var map__26294 = p__26293;
var map__26294__$1 = (((((!((map__26294 == null))))?(((((map__26294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26294):map__26294);
var m = map__26294__$1;
var n = cljs.core.get.call(null,map__26294__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__26294__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26296_26328 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26297_26329 = null;
var count__26298_26330 = (0);
var i__26299_26331 = (0);
while(true){
if((i__26299_26331 < count__26298_26330)){
var f_26332 = cljs.core._nth.call(null,chunk__26297_26329,i__26299_26331);
cljs.core.println.call(null,"  ",f_26332);


var G__26333 = seq__26296_26328;
var G__26334 = chunk__26297_26329;
var G__26335 = count__26298_26330;
var G__26336 = (i__26299_26331 + (1));
seq__26296_26328 = G__26333;
chunk__26297_26329 = G__26334;
count__26298_26330 = G__26335;
i__26299_26331 = G__26336;
continue;
} else {
var temp__5457__auto___26337 = cljs.core.seq.call(null,seq__26296_26328);
if(temp__5457__auto___26337){
var seq__26296_26338__$1 = temp__5457__auto___26337;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26296_26338__$1)){
var c__4550__auto___26339 = cljs.core.chunk_first.call(null,seq__26296_26338__$1);
var G__26340 = cljs.core.chunk_rest.call(null,seq__26296_26338__$1);
var G__26341 = c__4550__auto___26339;
var G__26342 = cljs.core.count.call(null,c__4550__auto___26339);
var G__26343 = (0);
seq__26296_26328 = G__26340;
chunk__26297_26329 = G__26341;
count__26298_26330 = G__26342;
i__26299_26331 = G__26343;
continue;
} else {
var f_26344 = cljs.core.first.call(null,seq__26296_26338__$1);
cljs.core.println.call(null,"  ",f_26344);


var G__26345 = cljs.core.next.call(null,seq__26296_26338__$1);
var G__26346 = null;
var G__26347 = (0);
var G__26348 = (0);
seq__26296_26328 = G__26345;
chunk__26297_26329 = G__26346;
count__26298_26330 = G__26347;
i__26299_26331 = G__26348;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26349 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26349);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26349)))?cljs.core.second.call(null,arglists_26349):arglists_26349));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26300_26350 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26301_26351 = null;
var count__26302_26352 = (0);
var i__26303_26353 = (0);
while(true){
if((i__26303_26353 < count__26302_26352)){
var vec__26314_26354 = cljs.core._nth.call(null,chunk__26301_26351,i__26303_26353);
var name_26355 = cljs.core.nth.call(null,vec__26314_26354,(0),null);
var map__26317_26356 = cljs.core.nth.call(null,vec__26314_26354,(1),null);
var map__26317_26357__$1 = (((((!((map__26317_26356 == null))))?(((((map__26317_26356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26317_26356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26317_26356):map__26317_26356);
var doc_26358 = cljs.core.get.call(null,map__26317_26357__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26359 = cljs.core.get.call(null,map__26317_26357__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_26355);

cljs.core.println.call(null," ",arglists_26359);

if(cljs.core.truth_(doc_26358)){
cljs.core.println.call(null," ",doc_26358);
} else {
}


var G__26360 = seq__26300_26350;
var G__26361 = chunk__26301_26351;
var G__26362 = count__26302_26352;
var G__26363 = (i__26303_26353 + (1));
seq__26300_26350 = G__26360;
chunk__26301_26351 = G__26361;
count__26302_26352 = G__26362;
i__26303_26353 = G__26363;
continue;
} else {
var temp__5457__auto___26364 = cljs.core.seq.call(null,seq__26300_26350);
if(temp__5457__auto___26364){
var seq__26300_26365__$1 = temp__5457__auto___26364;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26300_26365__$1)){
var c__4550__auto___26366 = cljs.core.chunk_first.call(null,seq__26300_26365__$1);
var G__26367 = cljs.core.chunk_rest.call(null,seq__26300_26365__$1);
var G__26368 = c__4550__auto___26366;
var G__26369 = cljs.core.count.call(null,c__4550__auto___26366);
var G__26370 = (0);
seq__26300_26350 = G__26367;
chunk__26301_26351 = G__26368;
count__26302_26352 = G__26369;
i__26303_26353 = G__26370;
continue;
} else {
var vec__26319_26371 = cljs.core.first.call(null,seq__26300_26365__$1);
var name_26372 = cljs.core.nth.call(null,vec__26319_26371,(0),null);
var map__26322_26373 = cljs.core.nth.call(null,vec__26319_26371,(1),null);
var map__26322_26374__$1 = (((((!((map__26322_26373 == null))))?(((((map__26322_26373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26322_26373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26322_26373):map__26322_26373);
var doc_26375 = cljs.core.get.call(null,map__26322_26374__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26376 = cljs.core.get.call(null,map__26322_26374__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_26372);

cljs.core.println.call(null," ",arglists_26376);

if(cljs.core.truth_(doc_26375)){
cljs.core.println.call(null," ",doc_26375);
} else {
}


var G__26377 = cljs.core.next.call(null,seq__26300_26365__$1);
var G__26378 = null;
var G__26379 = (0);
var G__26380 = (0);
seq__26300_26350 = G__26377;
chunk__26301_26351 = G__26378;
count__26302_26352 = G__26379;
i__26303_26353 = G__26380;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__26324 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__26325 = null;
var count__26326 = (0);
var i__26327 = (0);
while(true){
if((i__26327 < count__26326)){
var role = cljs.core._nth.call(null,chunk__26325,i__26327);
var temp__5457__auto___26381__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___26381__$1)){
var spec_26382 = temp__5457__auto___26381__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_26382));
} else {
}


var G__26383 = seq__26324;
var G__26384 = chunk__26325;
var G__26385 = count__26326;
var G__26386 = (i__26327 + (1));
seq__26324 = G__26383;
chunk__26325 = G__26384;
count__26326 = G__26385;
i__26327 = G__26386;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__26324);
if(temp__5457__auto____$1){
var seq__26324__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26324__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26324__$1);
var G__26387 = cljs.core.chunk_rest.call(null,seq__26324__$1);
var G__26388 = c__4550__auto__;
var G__26389 = cljs.core.count.call(null,c__4550__auto__);
var G__26390 = (0);
seq__26324 = G__26387;
chunk__26325 = G__26388;
count__26326 = G__26389;
i__26327 = G__26390;
continue;
} else {
var role = cljs.core.first.call(null,seq__26324__$1);
var temp__5457__auto___26391__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___26391__$2)){
var spec_26392 = temp__5457__auto___26391__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_26392));
} else {
}


var G__26393 = cljs.core.next.call(null,seq__26324__$1);
var G__26394 = null;
var G__26395 = (0);
var G__26396 = (0);
seq__26324 = G__26393;
chunk__26325 = G__26394;
count__26326 = G__26395;
i__26327 = G__26396;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var ed = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__26397 = cljs.core.conj.call(null,via,t);
var G__26398 = cljs.core.ex_cause.call(null,t);
via = G__26397;
t = G__26398;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var root_msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var data = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5457__auto__)){
var phase = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__26401 = datafied_throwable;
var map__26401__$1 = (((((!((map__26401 == null))))?(((((map__26401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26401):map__26401);
var via = cljs.core.get.call(null,map__26401__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__26401__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__26401__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__26402 = cljs.core.last.call(null,via);
var map__26402__$1 = (((((!((map__26402 == null))))?(((((map__26402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26402):map__26402);
var type = cljs.core.get.call(null,map__26402__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__26402__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__26402__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__26403 = data;
var map__26403__$1 = (((((!((map__26403 == null))))?(((((map__26403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26403):map__26403);
var problems = cljs.core.get.call(null,map__26403__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__26403__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__26403__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__26404 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__26404__$1 = (((((!((map__26404 == null))))?(((((map__26404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26404):map__26404);
var top_data = map__26404__$1;
var source = cljs.core.get.call(null,map__26404__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__26409 = phase;
var G__26409__$1 = (((G__26409 instanceof cljs.core.Keyword))?G__26409.fqn:null);
switch (G__26409__$1) {
case "read-source":
var map__26410 = data;
var map__26410__$1 = (((((!((map__26410 == null))))?(((((map__26410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26410):map__26410);
var line = cljs.core.get.call(null,map__26410__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__26410__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__26412 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__26412__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__26412,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__26412);
var G__26412__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__26412__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__26412__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__26412__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__26412__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__26413 = top_data;
var G__26413__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__26413,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__26413);
var G__26413__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__26413__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__26413__$1);
var G__26413__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__26413__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__26413__$2);
var G__26413__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__26413__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__26413__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__26413__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__26413__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__26414 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__26414,(0),null);
var method = cljs.core.nth.call(null,vec__26414,(1),null);
var file = cljs.core.nth.call(null,vec__26414,(2),null);
var line = cljs.core.nth.call(null,vec__26414,(3),null);
var G__26417 = top_data;
var G__26417__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__26417,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__26417);
var G__26417__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__26417__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__26417__$1);
var G__26417__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__26417__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__26417__$2);
var G__26417__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__26417__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__26417__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__26417__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__26417__$4;
}

break;
case "execution":
var vec__26418 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__26418,(0),null);
var method = cljs.core.nth.call(null,vec__26418,(1),null);
var file = cljs.core.nth.call(null,vec__26418,(2),null);
var line = cljs.core.nth.call(null,vec__26418,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__26418,source__$1,method,file,line,G__26409,G__26409__$1,map__26401,map__26401__$1,via,trace,phase,map__26402,map__26402__$1,type,message,data,map__26403,map__26403__$1,problems,fn,caller,map__26404,map__26404__$1,top_data,source){
return (function (p1__26400_SHARP_){
var or__4131__auto__ = (p1__26400_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__26400_SHARP_);
}
});})(vec__26418,source__$1,method,file,line,G__26409,G__26409__$1,map__26401,map__26401__$1,via,trace,phase,map__26402,map__26402__$1,type,message,data,map__26403,map__26403__$1,problems,fn,caller,map__26404,map__26404__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__26421 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__26421__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__26421,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__26421);
var G__26421__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__26421__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__26421__$1);
var G__26421__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__26421__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__26421__$2);
var G__26421__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__26421__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__26421__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__26421__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__26421__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26409__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__26425){
var map__26426 = p__26425;
var map__26426__$1 = (((((!((map__26426 == null))))?(((((map__26426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26426):map__26426);
var triage_data = map__26426__$1;
var phase = cljs.core.get.call(null,map__26426__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__26426__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__26426__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__26426__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__26426__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__26426__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__26426__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__26426__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__26428 = phase;
var G__26428__$1 = (((G__26428 instanceof cljs.core.Keyword))?G__26428.fqn:null);
switch (G__26428__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26429_26438 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26430_26439 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26431_26440 = true;
var _STAR_print_fn_STAR__temp_val__26432_26441 = ((function (_STAR_print_newline_STAR__orig_val__26429_26438,_STAR_print_fn_STAR__orig_val__26430_26439,_STAR_print_newline_STAR__temp_val__26431_26440,sb__4661__auto__,G__26428,G__26428__$1,loc,class_name,simple_class,cause_type,format,map__26426,map__26426__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__26429_26438,_STAR_print_fn_STAR__orig_val__26430_26439,_STAR_print_newline_STAR__temp_val__26431_26440,sb__4661__auto__,G__26428,G__26428__$1,loc,class_name,simple_class,cause_type,format,map__26426,map__26426__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26431_26440;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26432_26441;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__26429_26438,_STAR_print_fn_STAR__orig_val__26430_26439,_STAR_print_newline_STAR__temp_val__26431_26440,_STAR_print_fn_STAR__temp_val__26432_26441,sb__4661__auto__,G__26428,G__26428__$1,loc,class_name,simple_class,cause_type,format,map__26426,map__26426__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__26429_26438,_STAR_print_fn_STAR__orig_val__26430_26439,_STAR_print_newline_STAR__temp_val__26431_26440,_STAR_print_fn_STAR__temp_val__26432_26441,sb__4661__auto__,G__26428,G__26428__$1,loc,class_name,simple_class,cause_type,format,map__26426,map__26426__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__26423_SHARP_){
return cljs.core.dissoc.call(null,p1__26423_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__26429_26438,_STAR_print_fn_STAR__orig_val__26430_26439,_STAR_print_newline_STAR__temp_val__26431_26440,_STAR_print_fn_STAR__temp_val__26432_26441,sb__4661__auto__,G__26428,G__26428__$1,loc,class_name,simple_class,cause_type,format,map__26426,map__26426__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__26429_26438,_STAR_print_fn_STAR__orig_val__26430_26439,_STAR_print_newline_STAR__temp_val__26431_26440,_STAR_print_fn_STAR__temp_val__26432_26441,sb__4661__auto__,G__26428,G__26428__$1,loc,class_name,simple_class,cause_type,format,map__26426,map__26426__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26430_26439;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26429_26438;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26433_26442 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26434_26443 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26435_26444 = true;
var _STAR_print_fn_STAR__temp_val__26436_26445 = ((function (_STAR_print_newline_STAR__orig_val__26433_26442,_STAR_print_fn_STAR__orig_val__26434_26443,_STAR_print_newline_STAR__temp_val__26435_26444,sb__4661__auto__,G__26428,G__26428__$1,loc,class_name,simple_class,cause_type,format,map__26426,map__26426__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__26433_26442,_STAR_print_fn_STAR__orig_val__26434_26443,_STAR_print_newline_STAR__temp_val__26435_26444,sb__4661__auto__,G__26428,G__26428__$1,loc,class_name,simple_class,cause_type,format,map__26426,map__26426__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26435_26444;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26436_26445;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__26433_26442,_STAR_print_fn_STAR__orig_val__26434_26443,_STAR_print_newline_STAR__temp_val__26435_26444,_STAR_print_fn_STAR__temp_val__26436_26445,sb__4661__auto__,G__26428,G__26428__$1,loc,class_name,simple_class,cause_type,format,map__26426,map__26426__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__26433_26442,_STAR_print_fn_STAR__orig_val__26434_26443,_STAR_print_newline_STAR__temp_val__26435_26444,_STAR_print_fn_STAR__temp_val__26436_26445,sb__4661__auto__,G__26428,G__26428__$1,loc,class_name,simple_class,cause_type,format,map__26426,map__26426__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__26424_SHARP_){
return cljs.core.dissoc.call(null,p1__26424_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__26433_26442,_STAR_print_fn_STAR__orig_val__26434_26443,_STAR_print_newline_STAR__temp_val__26435_26444,_STAR_print_fn_STAR__temp_val__26436_26445,sb__4661__auto__,G__26428,G__26428__$1,loc,class_name,simple_class,cause_type,format,map__26426,map__26426__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__26433_26442,_STAR_print_fn_STAR__orig_val__26434_26443,_STAR_print_newline_STAR__temp_val__26435_26444,_STAR_print_fn_STAR__temp_val__26436_26445,sb__4661__auto__,G__26428,G__26428__$1,loc,class_name,simple_class,cause_type,format,map__26426,map__26426__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26434_26443;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26433_26442;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26428__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
