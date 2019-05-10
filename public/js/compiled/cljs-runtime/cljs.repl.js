goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29178){
var map__29179 = p__29178;
var map__29179__$1 = (((((!((map__29179 == null))))?(((((map__29179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29179):map__29179);
var m = map__29179__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29179__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29179__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__29184_29297 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29185_29298 = null;
var count__29186_29299 = (0);
var i__29187_29300 = (0);
while(true){
if((i__29187_29300 < count__29186_29299)){
var f_29301 = chunk__29185_29298.cljs$core$IIndexed$_nth$arity$2(null,i__29187_29300);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_29301], 0));


var G__29302 = seq__29184_29297;
var G__29303 = chunk__29185_29298;
var G__29304 = count__29186_29299;
var G__29305 = (i__29187_29300 + (1));
seq__29184_29297 = G__29302;
chunk__29185_29298 = G__29303;
count__29186_29299 = G__29304;
i__29187_29300 = G__29305;
continue;
} else {
var temp__5720__auto___29306 = cljs.core.seq(seq__29184_29297);
if(temp__5720__auto___29306){
var seq__29184_29307__$1 = temp__5720__auto___29306;
if(cljs.core.chunked_seq_QMARK_(seq__29184_29307__$1)){
var c__4550__auto___29308 = cljs.core.chunk_first(seq__29184_29307__$1);
var G__29309 = cljs.core.chunk_rest(seq__29184_29307__$1);
var G__29310 = c__4550__auto___29308;
var G__29311 = cljs.core.count(c__4550__auto___29308);
var G__29312 = (0);
seq__29184_29297 = G__29309;
chunk__29185_29298 = G__29310;
count__29186_29299 = G__29311;
i__29187_29300 = G__29312;
continue;
} else {
var f_29313 = cljs.core.first(seq__29184_29307__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_29313], 0));


var G__29314 = cljs.core.next(seq__29184_29307__$1);
var G__29315 = null;
var G__29316 = (0);
var G__29317 = (0);
seq__29184_29297 = G__29314;
chunk__29185_29298 = G__29315;
count__29186_29299 = G__29316;
i__29187_29300 = G__29317;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29318 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_29318], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_29318)))?cljs.core.second(arglists_29318):arglists_29318)], 0));
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
var seq__29191_29319 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29192_29320 = null;
var count__29193_29321 = (0);
var i__29194_29322 = (0);
while(true){
if((i__29194_29322 < count__29193_29321)){
var vec__29208_29323 = chunk__29192_29320.cljs$core$IIndexed$_nth$arity$2(null,i__29194_29322);
var name_29324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29208_29323,(0),null);
var map__29211_29325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29208_29323,(1),null);
var map__29211_29326__$1 = (((((!((map__29211_29325 == null))))?(((((map__29211_29325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29211_29325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29211_29325):map__29211_29325);
var doc_29327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29211_29326__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29211_29326__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_29324], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_29328], 0));

if(cljs.core.truth_(doc_29327)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_29327], 0));
} else {
}


var G__29334 = seq__29191_29319;
var G__29335 = chunk__29192_29320;
var G__29336 = count__29193_29321;
var G__29337 = (i__29194_29322 + (1));
seq__29191_29319 = G__29334;
chunk__29192_29320 = G__29335;
count__29193_29321 = G__29336;
i__29194_29322 = G__29337;
continue;
} else {
var temp__5720__auto___29338 = cljs.core.seq(seq__29191_29319);
if(temp__5720__auto___29338){
var seq__29191_29339__$1 = temp__5720__auto___29338;
if(cljs.core.chunked_seq_QMARK_(seq__29191_29339__$1)){
var c__4550__auto___29340 = cljs.core.chunk_first(seq__29191_29339__$1);
var G__29341 = cljs.core.chunk_rest(seq__29191_29339__$1);
var G__29342 = c__4550__auto___29340;
var G__29343 = cljs.core.count(c__4550__auto___29340);
var G__29344 = (0);
seq__29191_29319 = G__29341;
chunk__29192_29320 = G__29342;
count__29193_29321 = G__29343;
i__29194_29322 = G__29344;
continue;
} else {
var vec__29213_29345 = cljs.core.first(seq__29191_29339__$1);
var name_29346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29213_29345,(0),null);
var map__29216_29347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29213_29345,(1),null);
var map__29216_29348__$1 = (((((!((map__29216_29347 == null))))?(((((map__29216_29347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29216_29347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29216_29347):map__29216_29347);
var doc_29349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29216_29348__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29216_29348__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_29346], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_29350], 0));

if(cljs.core.truth_(doc_29349)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_29349], 0));
} else {
}


var G__29351 = cljs.core.next(seq__29191_29339__$1);
var G__29352 = null;
var G__29353 = (0);
var G__29354 = (0);
seq__29191_29319 = G__29351;
chunk__29192_29320 = G__29352;
count__29193_29321 = G__29353;
i__29194_29322 = G__29354;
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

var seq__29218 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29219 = null;
var count__29220 = (0);
var i__29221 = (0);
while(true){
if((i__29221 < count__29220)){
var role = chunk__29219.cljs$core$IIndexed$_nth$arity$2(null,i__29221);
var temp__5720__auto___29356__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___29356__$1)){
var spec_29357 = temp__5720__auto___29356__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_29357)], 0));
} else {
}


var G__29359 = seq__29218;
var G__29360 = chunk__29219;
var G__29361 = count__29220;
var G__29362 = (i__29221 + (1));
seq__29218 = G__29359;
chunk__29219 = G__29360;
count__29220 = G__29361;
i__29221 = G__29362;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__29218);
if(temp__5720__auto____$1){
var seq__29218__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__29218__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__29218__$1);
var G__29366 = cljs.core.chunk_rest(seq__29218__$1);
var G__29367 = c__4550__auto__;
var G__29368 = cljs.core.count(c__4550__auto__);
var G__29369 = (0);
seq__29218 = G__29366;
chunk__29219 = G__29367;
count__29220 = G__29368;
i__29221 = G__29369;
continue;
} else {
var role = cljs.core.first(seq__29218__$1);
var temp__5720__auto___29370__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___29370__$2)){
var spec_29371 = temp__5720__auto___29370__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_29371)], 0));
} else {
}


var G__29372 = cljs.core.next(seq__29218__$1);
var G__29373 = null;
var G__29374 = (0);
var G__29375 = (0);
seq__29218 = G__29372;
chunk__29219 = G__29373;
count__29220 = G__29374;
i__29221 = G__29375;
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
var G__29384 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__29385 = cljs.core.ex_cause(t);
via = G__29384;
t = G__29385;
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
var map__29227 = datafied_throwable;
var map__29227__$1 = (((((!((map__29227 == null))))?(((((map__29227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29227):map__29227);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29227__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29227__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29227__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__29228 = cljs.core.last(via);
var map__29228__$1 = (((((!((map__29228 == null))))?(((((map__29228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29228):map__29228);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29228__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29228__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29228__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__29229 = data;
var map__29229__$1 = (((((!((map__29229 == null))))?(((((map__29229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29229):map__29229);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29229__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29229__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29229__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__29230 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__29230__$1 = (((((!((map__29230 == null))))?(((((map__29230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29230):map__29230);
var top_data = map__29230__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29230__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__29235 = phase;
var G__29235__$1 = (((G__29235 instanceof cljs.core.Keyword))?G__29235.fqn:null);
switch (G__29235__$1) {
case "read-source":
var map__29236 = data;
var map__29236__$1 = (((((!((map__29236 == null))))?(((((map__29236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29236):map__29236);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29236__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29236__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__29238 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__29238__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29238,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29238);
var G__29238__$2 = (cljs.core.truth_((function (){var fexpr__29239 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__29239.cljs$core$IFn$_invoke$arity$1 ? fexpr__29239.cljs$core$IFn$_invoke$arity$1(source) : fexpr__29239.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__29238__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29238__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29238__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29238__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__29240 = top_data;
var G__29240__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29240,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29240);
var G__29240__$2 = (cljs.core.truth_((function (){var fexpr__29241 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__29241.cljs$core$IFn$_invoke$arity$1 ? fexpr__29241.cljs$core$IFn$_invoke$arity$1(source) : fexpr__29241.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__29240__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29240__$1);
var G__29240__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29240__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29240__$2);
var G__29240__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29240__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29240__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29240__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29240__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__29242 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29242,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29242,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29242,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29242,(3),null);
var G__29246 = top_data;
var G__29246__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29246,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__29246);
var G__29246__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29246__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__29246__$1);
var G__29246__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29246__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__29246__$2);
var G__29246__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29246__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29246__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29246__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29246__$4;
}

break;
case "execution":
var vec__29249 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29249,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29249,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29249,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29249,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__29249,source__$1,method,file,line,G__29235,G__29235__$1,map__29227,map__29227__$1,via,trace,phase,map__29228,map__29228__$1,type,message,data,map__29229,map__29229__$1,problems,fn,caller,map__29230,map__29230__$1,top_data,source){
return (function (p1__29226_SHARP_){
var or__4131__auto__ = (p1__29226_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__29253 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__29253.cljs$core$IFn$_invoke$arity$1 ? fexpr__29253.cljs$core$IFn$_invoke$arity$1(p1__29226_SHARP_) : fexpr__29253.call(null,p1__29226_SHARP_));
}
});})(vec__29249,source__$1,method,file,line,G__29235,G__29235__$1,map__29227,map__29227__$1,via,trace,phase,map__29228,map__29228__$1,type,message,data,map__29229,map__29229__$1,problems,fn,caller,map__29230,map__29230__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__29254 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__29254__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29254,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__29254);
var G__29254__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29254__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29254__$1);
var G__29254__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29254__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__29254__$2);
var G__29254__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29254__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__29254__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29254__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29254__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29235__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__29257){
var map__29258 = p__29257;
var map__29258__$1 = (((((!((map__29258 == null))))?(((((map__29258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29258):map__29258);
var triage_data = map__29258__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29258__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29258__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29258__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29258__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29258__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29258__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29258__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29258__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__29260 = phase;
var G__29260__$1 = (((G__29260 instanceof cljs.core.Keyword))?G__29260.fqn:null);
switch (G__29260__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__29261 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__29262 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29263 = loc;
var G__29264 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29265_29407 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29266_29408 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29267_29409 = true;
var _STAR_print_fn_STAR__temp_val__29268_29410 = ((function (_STAR_print_newline_STAR__orig_val__29265_29407,_STAR_print_fn_STAR__orig_val__29266_29408,_STAR_print_newline_STAR__temp_val__29267_29409,sb__4661__auto__,G__29261,G__29262,G__29263,G__29260,G__29260__$1,loc,class_name,simple_class,cause_type,format,map__29258,map__29258__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__29265_29407,_STAR_print_fn_STAR__orig_val__29266_29408,_STAR_print_newline_STAR__temp_val__29267_29409,sb__4661__auto__,G__29261,G__29262,G__29263,G__29260,G__29260__$1,loc,class_name,simple_class,cause_type,format,map__29258,map__29258__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29267_29409;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29268_29410;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__29265_29407,_STAR_print_fn_STAR__orig_val__29266_29408,_STAR_print_newline_STAR__temp_val__29267_29409,_STAR_print_fn_STAR__temp_val__29268_29410,sb__4661__auto__,G__29261,G__29262,G__29263,G__29260,G__29260__$1,loc,class_name,simple_class,cause_type,format,map__29258,map__29258__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__29265_29407,_STAR_print_fn_STAR__orig_val__29266_29408,_STAR_print_newline_STAR__temp_val__29267_29409,_STAR_print_fn_STAR__temp_val__29268_29410,sb__4661__auto__,G__29261,G__29262,G__29263,G__29260,G__29260__$1,loc,class_name,simple_class,cause_type,format,map__29258,map__29258__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__29255_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__29255_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__29265_29407,_STAR_print_fn_STAR__orig_val__29266_29408,_STAR_print_newline_STAR__temp_val__29267_29409,_STAR_print_fn_STAR__temp_val__29268_29410,sb__4661__auto__,G__29261,G__29262,G__29263,G__29260,G__29260__$1,loc,class_name,simple_class,cause_type,format,map__29258,map__29258__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__29265_29407,_STAR_print_fn_STAR__orig_val__29266_29408,_STAR_print_newline_STAR__temp_val__29267_29409,_STAR_print_fn_STAR__temp_val__29268_29410,sb__4661__auto__,G__29261,G__29262,G__29263,G__29260,G__29260__$1,loc,class_name,simple_class,cause_type,format,map__29258,map__29258__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29266_29408;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29265_29407;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__29261,G__29262,G__29263,G__29264) : format.call(null,G__29261,G__29262,G__29263,G__29264));

break;
case "macroexpansion":
var G__29269 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__29270 = cause_type;
var G__29271 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29272 = loc;
var G__29273 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29269,G__29270,G__29271,G__29272,G__29273) : format.call(null,G__29269,G__29270,G__29271,G__29272,G__29273));

break;
case "compile-syntax-check":
var G__29274 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__29275 = cause_type;
var G__29276 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29277 = loc;
var G__29278 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29274,G__29275,G__29276,G__29277,G__29278) : format.call(null,G__29274,G__29275,G__29276,G__29277,G__29278));

break;
case "compilation":
var G__29279 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__29280 = cause_type;
var G__29281 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29282 = loc;
var G__29283 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29279,G__29280,G__29281,G__29282,G__29283) : format.call(null,G__29279,G__29280,G__29281,G__29282,G__29283));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__29284 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__29285 = symbol;
var G__29286 = loc;
var G__29287 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29288_29413 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29289_29414 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29290_29415 = true;
var _STAR_print_fn_STAR__temp_val__29291_29416 = ((function (_STAR_print_newline_STAR__orig_val__29288_29413,_STAR_print_fn_STAR__orig_val__29289_29414,_STAR_print_newline_STAR__temp_val__29290_29415,sb__4661__auto__,G__29284,G__29285,G__29286,G__29260,G__29260__$1,loc,class_name,simple_class,cause_type,format,map__29258,map__29258__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__29288_29413,_STAR_print_fn_STAR__orig_val__29289_29414,_STAR_print_newline_STAR__temp_val__29290_29415,sb__4661__auto__,G__29284,G__29285,G__29286,G__29260,G__29260__$1,loc,class_name,simple_class,cause_type,format,map__29258,map__29258__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29290_29415;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29291_29416;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__29288_29413,_STAR_print_fn_STAR__orig_val__29289_29414,_STAR_print_newline_STAR__temp_val__29290_29415,_STAR_print_fn_STAR__temp_val__29291_29416,sb__4661__auto__,G__29284,G__29285,G__29286,G__29260,G__29260__$1,loc,class_name,simple_class,cause_type,format,map__29258,map__29258__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__29288_29413,_STAR_print_fn_STAR__orig_val__29289_29414,_STAR_print_newline_STAR__temp_val__29290_29415,_STAR_print_fn_STAR__temp_val__29291_29416,sb__4661__auto__,G__29284,G__29285,G__29286,G__29260,G__29260__$1,loc,class_name,simple_class,cause_type,format,map__29258,map__29258__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__29256_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__29256_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__29288_29413,_STAR_print_fn_STAR__orig_val__29289_29414,_STAR_print_newline_STAR__temp_val__29290_29415,_STAR_print_fn_STAR__temp_val__29291_29416,sb__4661__auto__,G__29284,G__29285,G__29286,G__29260,G__29260__$1,loc,class_name,simple_class,cause_type,format,map__29258,map__29258__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__29288_29413,_STAR_print_fn_STAR__orig_val__29289_29414,_STAR_print_newline_STAR__temp_val__29290_29415,_STAR_print_fn_STAR__temp_val__29291_29416,sb__4661__auto__,G__29284,G__29285,G__29286,G__29260,G__29260__$1,loc,class_name,simple_class,cause_type,format,map__29258,map__29258__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29289_29414;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29288_29413;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__29284,G__29285,G__29286,G__29287) : format.call(null,G__29284,G__29285,G__29286,G__29287));
} else {
var G__29292 = "Execution error%s at %s(%s).\n%s\n";
var G__29293 = cause_type;
var G__29294 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29295 = loc;
var G__29296 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29292,G__29293,G__29294,G__29295,G__29296) : format.call(null,G__29292,G__29293,G__29294,G__29295,G__29296));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29260__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
