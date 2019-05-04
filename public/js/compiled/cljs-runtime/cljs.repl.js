goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31309){
var map__31310 = p__31309;
var map__31310__$1 = (((((!((map__31310 == null))))?(((((map__31310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31310):map__31310);
var m = map__31310__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31310__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31310__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31314_31454 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31315_31455 = null;
var count__31316_31456 = (0);
var i__31317_31457 = (0);
while(true){
if((i__31317_31457 < count__31316_31456)){
var f_31458 = chunk__31315_31455.cljs$core$IIndexed$_nth$arity$2(null,i__31317_31457);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31458], 0));


var G__31459 = seq__31314_31454;
var G__31460 = chunk__31315_31455;
var G__31461 = count__31316_31456;
var G__31462 = (i__31317_31457 + (1));
seq__31314_31454 = G__31459;
chunk__31315_31455 = G__31460;
count__31316_31456 = G__31461;
i__31317_31457 = G__31462;
continue;
} else {
var temp__5720__auto___31463 = cljs.core.seq(seq__31314_31454);
if(temp__5720__auto___31463){
var seq__31314_31464__$1 = temp__5720__auto___31463;
if(cljs.core.chunked_seq_QMARK_(seq__31314_31464__$1)){
var c__4550__auto___31465 = cljs.core.chunk_first(seq__31314_31464__$1);
var G__31466 = cljs.core.chunk_rest(seq__31314_31464__$1);
var G__31467 = c__4550__auto___31465;
var G__31468 = cljs.core.count(c__4550__auto___31465);
var G__31469 = (0);
seq__31314_31454 = G__31466;
chunk__31315_31455 = G__31467;
count__31316_31456 = G__31468;
i__31317_31457 = G__31469;
continue;
} else {
var f_31471 = cljs.core.first(seq__31314_31464__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31471], 0));


var G__31472 = cljs.core.next(seq__31314_31464__$1);
var G__31473 = null;
var G__31474 = (0);
var G__31475 = (0);
seq__31314_31454 = G__31472;
chunk__31315_31455 = G__31473;
count__31316_31456 = G__31474;
i__31317_31457 = G__31475;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31476 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_31476], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_31476)))?cljs.core.second(arglists_31476):arglists_31476)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31326_31477 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31327_31478 = null;
var count__31328_31479 = (0);
var i__31329_31480 = (0);
while(true){
if((i__31329_31480 < count__31328_31479)){
var vec__31342_31481 = chunk__31327_31478.cljs$core$IIndexed$_nth$arity$2(null,i__31329_31480);
var name_31482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31342_31481,(0),null);
var map__31345_31483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31342_31481,(1),null);
var map__31345_31484__$1 = (((((!((map__31345_31483 == null))))?(((((map__31345_31483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31345_31483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31345_31483):map__31345_31483);
var doc_31485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31345_31484__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31345_31484__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31482], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31486], 0));

if(cljs.core.truth_(doc_31485)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31485], 0));
} else {
}


var G__31487 = seq__31326_31477;
var G__31488 = chunk__31327_31478;
var G__31489 = count__31328_31479;
var G__31490 = (i__31329_31480 + (1));
seq__31326_31477 = G__31487;
chunk__31327_31478 = G__31488;
count__31328_31479 = G__31489;
i__31329_31480 = G__31490;
continue;
} else {
var temp__5720__auto___31491 = cljs.core.seq(seq__31326_31477);
if(temp__5720__auto___31491){
var seq__31326_31492__$1 = temp__5720__auto___31491;
if(cljs.core.chunked_seq_QMARK_(seq__31326_31492__$1)){
var c__4550__auto___31493 = cljs.core.chunk_first(seq__31326_31492__$1);
var G__31496 = cljs.core.chunk_rest(seq__31326_31492__$1);
var G__31497 = c__4550__auto___31493;
var G__31498 = cljs.core.count(c__4550__auto___31493);
var G__31499 = (0);
seq__31326_31477 = G__31496;
chunk__31327_31478 = G__31497;
count__31328_31479 = G__31498;
i__31329_31480 = G__31499;
continue;
} else {
var vec__31350_31500 = cljs.core.first(seq__31326_31492__$1);
var name_31501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31350_31500,(0),null);
var map__31353_31502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31350_31500,(1),null);
var map__31353_31503__$1 = (((((!((map__31353_31502 == null))))?(((((map__31353_31502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31353_31502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31353_31502):map__31353_31502);
var doc_31504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31353_31503__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31353_31503__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31501], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31505], 0));

if(cljs.core.truth_(doc_31504)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31504], 0));
} else {
}


var G__31506 = cljs.core.next(seq__31326_31492__$1);
var G__31507 = null;
var G__31508 = (0);
var G__31509 = (0);
seq__31326_31477 = G__31506;
chunk__31327_31478 = G__31507;
count__31328_31479 = G__31508;
i__31329_31480 = G__31509;
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
var temp__5720__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__31355 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31356 = null;
var count__31357 = (0);
var i__31358 = (0);
while(true){
if((i__31358 < count__31357)){
var role = chunk__31356.cljs$core$IIndexed$_nth$arity$2(null,i__31358);
var temp__5720__auto___31520__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___31520__$1)){
var spec_31521 = temp__5720__auto___31520__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31521)], 0));
} else {
}


var G__31522 = seq__31355;
var G__31523 = chunk__31356;
var G__31524 = count__31357;
var G__31525 = (i__31358 + (1));
seq__31355 = G__31522;
chunk__31356 = G__31523;
count__31357 = G__31524;
i__31358 = G__31525;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__31355);
if(temp__5720__auto____$1){
var seq__31355__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__31355__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__31355__$1);
var G__31526 = cljs.core.chunk_rest(seq__31355__$1);
var G__31527 = c__4550__auto__;
var G__31528 = cljs.core.count(c__4550__auto__);
var G__31529 = (0);
seq__31355 = G__31526;
chunk__31356 = G__31527;
count__31357 = G__31528;
i__31358 = G__31529;
continue;
} else {
var role = cljs.core.first(seq__31355__$1);
var temp__5720__auto___31530__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___31530__$2)){
var spec_31531 = temp__5720__auto___31530__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31531)], 0));
} else {
}


var G__31532 = cljs.core.next(seq__31355__$1);
var G__31533 = null;
var G__31534 = (0);
var G__31535 = (0);
seq__31355 = G__31532;
chunk__31356 = G__31533;
count__31357 = G__31534;
i__31358 = G__31535;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__31536 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__31537 = cljs.core.ex_cause(t);
via = G__31536;
t = G__31537;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
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
var map__31370 = datafied_throwable;
var map__31370__$1 = (((((!((map__31370 == null))))?(((((map__31370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31370):map__31370);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31370__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31370__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31370__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31371 = cljs.core.last(via);
var map__31371__$1 = (((((!((map__31371 == null))))?(((((map__31371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31371):map__31371);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31371__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31371__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31371__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31372 = data;
var map__31372__$1 = (((((!((map__31372 == null))))?(((((map__31372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31372):map__31372);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31372__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31372__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31372__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31373 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__31373__$1 = (((((!((map__31373 == null))))?(((((map__31373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31373):map__31373);
var top_data = map__31373__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31373__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__31378 = phase;
var G__31378__$1 = (((G__31378 instanceof cljs.core.Keyword))?G__31378.fqn:null);
switch (G__31378__$1) {
case "read-source":
var map__31379 = data;
var map__31379__$1 = (((((!((map__31379 == null))))?(((((map__31379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31379):map__31379);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31379__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31379__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31381 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__31381__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31381,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31381);
var G__31381__$2 = (cljs.core.truth_((function (){var fexpr__31382 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31382.cljs$core$IFn$_invoke$arity$1 ? fexpr__31382.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31382.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31381__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31381__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31381__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31381__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31383 = top_data;
var G__31383__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31383,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31383);
var G__31383__$2 = (cljs.core.truth_((function (){var fexpr__31384 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31384.cljs$core$IFn$_invoke$arity$1 ? fexpr__31384.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31384.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31383__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31383__$1);
var G__31383__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31383__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31383__$2);
var G__31383__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31383__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31383__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31383__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31383__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31388 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31388,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31388,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31388,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31388,(3),null);
var G__31391 = top_data;
var G__31391__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31391,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31391);
var G__31391__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31391__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31391__$1);
var G__31391__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31391__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31391__$2);
var G__31391__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31391__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31391__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31391__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31391__$4;
}

break;
case "execution":
var vec__31397 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31397,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31397,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31397,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31397,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__31397,source__$1,method,file,line,G__31378,G__31378__$1,map__31370,map__31370__$1,via,trace,phase,map__31371,map__31371__$1,type,message,data,map__31372,map__31372__$1,problems,fn,caller,map__31373,map__31373__$1,top_data,source){
return (function (p1__31369_SHARP_){
var or__4131__auto__ = (p1__31369_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__31401 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31401.cljs$core$IFn$_invoke$arity$1 ? fexpr__31401.cljs$core$IFn$_invoke$arity$1(p1__31369_SHARP_) : fexpr__31401.call(null,p1__31369_SHARP_));
}
});})(vec__31397,source__$1,method,file,line,G__31378,G__31378__$1,map__31370,map__31370__$1,via,trace,phase,map__31371,map__31371__$1,type,message,data,map__31372,map__31372__$1,problems,fn,caller,map__31373,map__31373__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__31402 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31402__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31402,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31402);
var G__31402__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31402__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31402__$1);
var G__31402__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31402__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31402__$2);
var G__31402__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31402__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31402__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31402__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31402__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31378__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31410){
var map__31411 = p__31410;
var map__31411__$1 = (((((!((map__31411 == null))))?(((((map__31411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31411):map__31411);
var triage_data = map__31411__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31411__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31411__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31411__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31411__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31411__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31411__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31411__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31411__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__31414 = phase;
var G__31414__$1 = (((G__31414 instanceof cljs.core.Keyword))?G__31414.fqn:null);
switch (G__31414__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__31416 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__31417 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31418 = loc;
var G__31419 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31421_31555 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31422_31556 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31423_31557 = true;
var _STAR_print_fn_STAR__temp_val__31424_31558 = ((function (_STAR_print_newline_STAR__orig_val__31421_31555,_STAR_print_fn_STAR__orig_val__31422_31556,_STAR_print_newline_STAR__temp_val__31423_31557,sb__4661__auto__,G__31416,G__31417,G__31418,G__31414,G__31414__$1,loc,class_name,simple_class,cause_type,format,map__31411,map__31411__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__31421_31555,_STAR_print_fn_STAR__orig_val__31422_31556,_STAR_print_newline_STAR__temp_val__31423_31557,sb__4661__auto__,G__31416,G__31417,G__31418,G__31414,G__31414__$1,loc,class_name,simple_class,cause_type,format,map__31411,map__31411__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31423_31557;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31424_31558;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__31421_31555,_STAR_print_fn_STAR__orig_val__31422_31556,_STAR_print_newline_STAR__temp_val__31423_31557,_STAR_print_fn_STAR__temp_val__31424_31558,sb__4661__auto__,G__31416,G__31417,G__31418,G__31414,G__31414__$1,loc,class_name,simple_class,cause_type,format,map__31411,map__31411__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__31421_31555,_STAR_print_fn_STAR__orig_val__31422_31556,_STAR_print_newline_STAR__temp_val__31423_31557,_STAR_print_fn_STAR__temp_val__31424_31558,sb__4661__auto__,G__31416,G__31417,G__31418,G__31414,G__31414__$1,loc,class_name,simple_class,cause_type,format,map__31411,map__31411__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__31407_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31407_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__31421_31555,_STAR_print_fn_STAR__orig_val__31422_31556,_STAR_print_newline_STAR__temp_val__31423_31557,_STAR_print_fn_STAR__temp_val__31424_31558,sb__4661__auto__,G__31416,G__31417,G__31418,G__31414,G__31414__$1,loc,class_name,simple_class,cause_type,format,map__31411,map__31411__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__31421_31555,_STAR_print_fn_STAR__orig_val__31422_31556,_STAR_print_newline_STAR__temp_val__31423_31557,_STAR_print_fn_STAR__temp_val__31424_31558,sb__4661__auto__,G__31416,G__31417,G__31418,G__31414,G__31414__$1,loc,class_name,simple_class,cause_type,format,map__31411,map__31411__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31422_31556;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31421_31555;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31416,G__31417,G__31418,G__31419) : format.call(null,G__31416,G__31417,G__31418,G__31419));

break;
case "macroexpansion":
var G__31426 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__31427 = cause_type;
var G__31428 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31429 = loc;
var G__31430 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31426,G__31427,G__31428,G__31429,G__31430) : format.call(null,G__31426,G__31427,G__31428,G__31429,G__31430));

break;
case "compile-syntax-check":
var G__31431 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__31432 = cause_type;
var G__31433 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31434 = loc;
var G__31435 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31431,G__31432,G__31433,G__31434,G__31435) : format.call(null,G__31431,G__31432,G__31433,G__31434,G__31435));

break;
case "compilation":
var G__31436 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__31437 = cause_type;
var G__31438 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31439 = loc;
var G__31440 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31436,G__31437,G__31438,G__31439,G__31440) : format.call(null,G__31436,G__31437,G__31438,G__31439,G__31440));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__31441 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__31442 = symbol;
var G__31443 = loc;
var G__31444 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31445_31564 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31446_31565 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31447_31566 = true;
var _STAR_print_fn_STAR__temp_val__31448_31567 = ((function (_STAR_print_newline_STAR__orig_val__31445_31564,_STAR_print_fn_STAR__orig_val__31446_31565,_STAR_print_newline_STAR__temp_val__31447_31566,sb__4661__auto__,G__31441,G__31442,G__31443,G__31414,G__31414__$1,loc,class_name,simple_class,cause_type,format,map__31411,map__31411__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__31445_31564,_STAR_print_fn_STAR__orig_val__31446_31565,_STAR_print_newline_STAR__temp_val__31447_31566,sb__4661__auto__,G__31441,G__31442,G__31443,G__31414,G__31414__$1,loc,class_name,simple_class,cause_type,format,map__31411,map__31411__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31447_31566;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31448_31567;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__31445_31564,_STAR_print_fn_STAR__orig_val__31446_31565,_STAR_print_newline_STAR__temp_val__31447_31566,_STAR_print_fn_STAR__temp_val__31448_31567,sb__4661__auto__,G__31441,G__31442,G__31443,G__31414,G__31414__$1,loc,class_name,simple_class,cause_type,format,map__31411,map__31411__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__31445_31564,_STAR_print_fn_STAR__orig_val__31446_31565,_STAR_print_newline_STAR__temp_val__31447_31566,_STAR_print_fn_STAR__temp_val__31448_31567,sb__4661__auto__,G__31441,G__31442,G__31443,G__31414,G__31414__$1,loc,class_name,simple_class,cause_type,format,map__31411,map__31411__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__31408_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31408_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__31445_31564,_STAR_print_fn_STAR__orig_val__31446_31565,_STAR_print_newline_STAR__temp_val__31447_31566,_STAR_print_fn_STAR__temp_val__31448_31567,sb__4661__auto__,G__31441,G__31442,G__31443,G__31414,G__31414__$1,loc,class_name,simple_class,cause_type,format,map__31411,map__31411__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__31445_31564,_STAR_print_fn_STAR__orig_val__31446_31565,_STAR_print_newline_STAR__temp_val__31447_31566,_STAR_print_fn_STAR__temp_val__31448_31567,sb__4661__auto__,G__31441,G__31442,G__31443,G__31414,G__31414__$1,loc,class_name,simple_class,cause_type,format,map__31411,map__31411__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31446_31565;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31445_31564;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31441,G__31442,G__31443,G__31444) : format.call(null,G__31441,G__31442,G__31443,G__31444));
} else {
var G__31449 = "Execution error%s at %s(%s).\n%s\n";
var G__31450 = cause_type;
var G__31451 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31452 = loc;
var G__31453 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31449,G__31450,G__31451,G__31452,G__31453) : format.call(null,G__31449,G__31450,G__31451,G__31452,G__31453));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31414__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
