goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__26559){
var vec__26562 = p__26559;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26562,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26562,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__26576 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26576,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26576,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26576,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__26593 = arguments.length;
switch (G__26593) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__26637_26761 = clojure.data.equality_partition;
var G__26638_26762 = "null";
var G__26639_26763 = ((function (G__26637_26761,G__26638_26762){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26637_26761,G__26638_26762))
;
goog.object.set(G__26637_26761,G__26638_26762,G__26639_26763);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__26642_26767 = clojure.data.equality_partition;
var G__26643_26768 = "string";
var G__26644_26769 = ((function (G__26642_26767,G__26643_26768){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26642_26767,G__26643_26768))
;
goog.object.set(G__26642_26767,G__26643_26768,G__26644_26769);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__26645_26772 = clojure.data.equality_partition;
var G__26646_26773 = "number";
var G__26647_26774 = ((function (G__26645_26772,G__26646_26773){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26645_26772,G__26646_26773))
;
goog.object.set(G__26645_26772,G__26646_26773,G__26647_26774);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__26660_26777 = clojure.data.equality_partition;
var G__26661_26778 = "array";
var G__26662_26779 = ((function (G__26660_26777,G__26661_26778){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__26660_26777,G__26661_26778))
;
goog.object.set(G__26660_26777,G__26661_26778,G__26662_26779);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__26667_26782 = clojure.data.equality_partition;
var G__26668_26783 = "function";
var G__26669_26784 = ((function (G__26667_26782,G__26668_26783){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26667_26782,G__26668_26783))
;
goog.object.set(G__26667_26782,G__26668_26783,G__26669_26784);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__26672_26787 = clojure.data.equality_partition;
var G__26673_26788 = "boolean";
var G__26674_26789 = ((function (G__26672_26787,G__26673_26788){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26672_26787,G__26673_26788))
;
goog.object.set(G__26672_26787,G__26673_26788,G__26674_26789);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__26683_26793 = clojure.data.equality_partition;
var G__26684_26794 = "_";
var G__26685_26795 = ((function (G__26683_26793,G__26684_26794){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__26683_26793,G__26684_26794))
;
goog.object.set(G__26683_26793,G__26684_26794,G__26685_26795);
goog.object.set(clojure.data.Diff,"null",true);

var G__26707_26838 = clojure.data.diff_similar;
var G__26708_26839 = "null";
var G__26709_26840 = ((function (G__26707_26838,G__26708_26839){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26707_26838,G__26708_26839))
;
goog.object.set(G__26707_26838,G__26708_26839,G__26709_26840);

goog.object.set(clojure.data.Diff,"string",true);

var G__26717_26841 = clojure.data.diff_similar;
var G__26718_26842 = "string";
var G__26719_26843 = ((function (G__26717_26841,G__26718_26842){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26717_26841,G__26718_26842))
;
goog.object.set(G__26717_26841,G__26718_26842,G__26719_26843);

goog.object.set(clojure.data.Diff,"number",true);

var G__26725_26844 = clojure.data.diff_similar;
var G__26726_26845 = "number";
var G__26727_26846 = ((function (G__26725_26844,G__26726_26845){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26725_26844,G__26726_26845))
;
goog.object.set(G__26725_26844,G__26726_26845,G__26727_26846);

goog.object.set(clojure.data.Diff,"array",true);

var G__26730_26848 = clojure.data.diff_similar;
var G__26731_26849 = "array";
var G__26732_26850 = ((function (G__26730_26848,G__26731_26849){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__26730_26848,G__26731_26849))
;
goog.object.set(G__26730_26848,G__26731_26849,G__26732_26850);

goog.object.set(clojure.data.Diff,"function",true);

var G__26734_26851 = clojure.data.diff_similar;
var G__26735_26852 = "function";
var G__26736_26853 = ((function (G__26734_26851,G__26735_26852){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26734_26851,G__26735_26852))
;
goog.object.set(G__26734_26851,G__26735_26852,G__26736_26853);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__26738_26855 = clojure.data.diff_similar;
var G__26739_26856 = "boolean";
var G__26740_26857 = ((function (G__26738_26855,G__26739_26856){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26738_26855,G__26739_26856))
;
goog.object.set(G__26738_26855,G__26739_26856,G__26740_26857);

goog.object.set(clojure.data.Diff,"_",true);

var G__26742_26863 = clojure.data.diff_similar;
var G__26743_26864 = "_";
var G__26744_26865 = ((function (G__26742_26863,G__26743_26864){
return (function (a,b){
var fexpr__26746 = (function (){var G__26747 = clojure.data.equality_partition(a);
var G__26747__$1 = (((G__26747 instanceof cljs.core.Keyword))?G__26747.fqn:null);
switch (G__26747__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26747__$1)].join('')));

}
})();
return (fexpr__26746.cljs$core$IFn$_invoke$arity$2 ? fexpr__26746.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__26746.call(null,a,b));
});})(G__26742_26863,G__26743_26864))
;
goog.object.set(G__26742_26863,G__26743_26864,G__26744_26865);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
