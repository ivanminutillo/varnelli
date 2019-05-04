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
var G__36366__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36366 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36367__i = 0, G__36367__a = new Array(arguments.length -  0);
while (G__36367__i < G__36367__a.length) {G__36367__a[G__36367__i] = arguments[G__36367__i + 0]; ++G__36367__i;}
  args = new cljs.core.IndexedSeq(G__36367__a,0,null);
} 
return G__36366__delegate.call(this,args);};
G__36366.cljs$lang$maxFixedArity = 0;
G__36366.cljs$lang$applyTo = (function (arglist__36368){
var args = cljs.core.seq(arglist__36368);
return G__36366__delegate(args);
});
G__36366.cljs$core$IFn$_invoke$arity$variadic = G__36366__delegate;
return G__36366;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__36369__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36369 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36370__i = 0, G__36370__a = new Array(arguments.length -  0);
while (G__36370__i < G__36370__a.length) {G__36370__a[G__36370__i] = arguments[G__36370__i + 0]; ++G__36370__i;}
  args = new cljs.core.IndexedSeq(G__36370__a,0,null);
} 
return G__36369__delegate.call(this,args);};
G__36369.cljs$lang$maxFixedArity = 0;
G__36369.cljs$lang$applyTo = (function (arglist__36371){
var args = cljs.core.seq(arglist__36371);
return G__36369__delegate(args);
});
G__36369.cljs$core$IFn$_invoke$arity$variadic = G__36369__delegate;
return G__36369;
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
