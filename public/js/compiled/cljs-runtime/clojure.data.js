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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__24564){
var vec__24565 = p__24564;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24565,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24565,(1),null);
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
var vec__24571 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24571,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24571,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24571,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__24587 = arguments.length;
switch (G__24587) {
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

var G__24596_24667 = clojure.data.equality_partition;
var G__24597_24668 = "null";
var G__24598_24669 = ((function (G__24596_24667,G__24597_24668){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__24596_24667,G__24597_24668))
;
goog.object.set(G__24596_24667,G__24597_24668,G__24598_24669);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__24600_24670 = clojure.data.equality_partition;
var G__24601_24671 = "string";
var G__24602_24672 = ((function (G__24600_24670,G__24601_24671){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__24600_24670,G__24601_24671))
;
goog.object.set(G__24600_24670,G__24601_24671,G__24602_24672);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__24605_24673 = clojure.data.equality_partition;
var G__24606_24674 = "number";
var G__24607_24675 = ((function (G__24605_24673,G__24606_24674){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__24605_24673,G__24606_24674))
;
goog.object.set(G__24605_24673,G__24606_24674,G__24607_24675);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__24608_24676 = clojure.data.equality_partition;
var G__24609_24677 = "array";
var G__24610_24678 = ((function (G__24608_24676,G__24609_24677){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__24608_24676,G__24609_24677))
;
goog.object.set(G__24608_24676,G__24609_24677,G__24610_24678);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__24611_24680 = clojure.data.equality_partition;
var G__24612_24681 = "function";
var G__24613_24682 = ((function (G__24611_24680,G__24612_24681){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__24611_24680,G__24612_24681))
;
goog.object.set(G__24611_24680,G__24612_24681,G__24613_24682);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__24614_24685 = clojure.data.equality_partition;
var G__24615_24686 = "boolean";
var G__24616_24687 = ((function (G__24614_24685,G__24615_24686){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__24614_24685,G__24615_24686))
;
goog.object.set(G__24614_24685,G__24615_24686,G__24616_24687);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__24617_24690 = clojure.data.equality_partition;
var G__24618_24691 = "_";
var G__24619_24692 = ((function (G__24617_24690,G__24618_24691){
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
});})(G__24617_24690,G__24618_24691))
;
goog.object.set(G__24617_24690,G__24618_24691,G__24619_24692);
goog.object.set(clojure.data.Diff,"null",true);

var G__24624_24702 = clojure.data.diff_similar;
var G__24625_24703 = "null";
var G__24626_24704 = ((function (G__24624_24702,G__24625_24703){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__24624_24702,G__24625_24703))
;
goog.object.set(G__24624_24702,G__24625_24703,G__24626_24704);

goog.object.set(clojure.data.Diff,"string",true);

var G__24627_24707 = clojure.data.diff_similar;
var G__24628_24708 = "string";
var G__24629_24709 = ((function (G__24627_24707,G__24628_24708){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__24627_24707,G__24628_24708))
;
goog.object.set(G__24627_24707,G__24628_24708,G__24629_24709);

goog.object.set(clojure.data.Diff,"number",true);

var G__24630_24710 = clojure.data.diff_similar;
var G__24631_24711 = "number";
var G__24632_24712 = ((function (G__24630_24710,G__24631_24711){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__24630_24710,G__24631_24711))
;
goog.object.set(G__24630_24710,G__24631_24711,G__24632_24712);

goog.object.set(clojure.data.Diff,"array",true);

var G__24633_24713 = clojure.data.diff_similar;
var G__24634_24714 = "array";
var G__24635_24715 = ((function (G__24633_24713,G__24634_24714){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__24633_24713,G__24634_24714))
;
goog.object.set(G__24633_24713,G__24634_24714,G__24635_24715);

goog.object.set(clojure.data.Diff,"function",true);

var G__24636_24716 = clojure.data.diff_similar;
var G__24637_24717 = "function";
var G__24638_24718 = ((function (G__24636_24716,G__24637_24717){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__24636_24716,G__24637_24717))
;
goog.object.set(G__24636_24716,G__24637_24717,G__24638_24718);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__24639_24719 = clojure.data.diff_similar;
var G__24640_24720 = "boolean";
var G__24641_24721 = ((function (G__24639_24719,G__24640_24720){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__24639_24719,G__24640_24720))
;
goog.object.set(G__24639_24719,G__24640_24720,G__24641_24721);

goog.object.set(clojure.data.Diff,"_",true);

var G__24643_24722 = clojure.data.diff_similar;
var G__24644_24723 = "_";
var G__24645_24724 = ((function (G__24643_24722,G__24644_24723){
return (function (a,b){
var fexpr__24647 = (function (){var G__24648 = clojure.data.equality_partition(a);
var G__24648__$1 = (((G__24648 instanceof cljs.core.Keyword))?G__24648.fqn:null);
switch (G__24648__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24648__$1)].join('')));

}
})();
return (fexpr__24647.cljs$core$IFn$_invoke$arity$2 ? fexpr__24647.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__24647.call(null,a,b));
});})(G__24643_24722,G__24644_24723))
;
goog.object.set(G__24643_24722,G__24644_24723,G__24645_24724);
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
