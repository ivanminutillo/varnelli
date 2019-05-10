goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__35013__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35013 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35015__i = 0, G__35015__a = new Array(arguments.length -  0);
while (G__35015__i < G__35015__a.length) {G__35015__a[G__35015__i] = arguments[G__35015__i + 0]; ++G__35015__i;}
  args = new cljs.core.IndexedSeq(G__35015__a,0,null);
} 
return G__35013__delegate.call(this,args);};
G__35013.cljs$lang$maxFixedArity = 0;
G__35013.cljs$lang$applyTo = (function (arglist__35016){
var args = cljs.core.seq(arglist__35016);
return G__35013__delegate(args);
});
G__35013.cljs$core$IFn$_invoke$arity$variadic = G__35013__delegate;
return G__35013;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__35017__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35017 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35018__i = 0, G__35018__a = new Array(arguments.length -  0);
while (G__35018__i < G__35018__a.length) {G__35018__a[G__35018__i] = arguments[G__35018__i + 0]; ++G__35018__i;}
  args = new cljs.core.IndexedSeq(G__35018__a,0,null);
} 
return G__35017__delegate.call(this,args);};
G__35017.cljs$lang$maxFixedArity = 0;
G__35017.cljs$lang$applyTo = (function (arglist__35020){
var args = cljs.core.seq(arglist__35020);
return G__35017__delegate(args);
});
G__35017.cljs$core$IFn$_invoke$arity$variadic = G__35017__delegate;
return G__35017;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
