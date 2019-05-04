goog.provide('tes2t.core');
goog.require('cljs.core');
goog.require('reagent.core');
if((typeof tes2t !== 'undefined') && (typeof tes2t.core !== 'undefined') && (typeof tes2t.core.app_state !== 'undefined')){
} else {
tes2t.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
tes2t.core.app = (function tes2t$core$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.navbar","header.navbar",1036002185),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.navbar-section","section.navbar-section",-998050374),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-link","a.btn.btn-link",1798552953),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"docs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-link","a.btn.btn-link",1798552953),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"examples"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.navbar-center","section.navbar-center",54113917),"logo"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.navbar-section","section.navbar-section",-998050374),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-link","a.btn.btn-link",1798552953),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"docs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-link","a.btn.btn-link",1798552953),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"examples"], null)], null)], null);
});
tes2t.core.start = (function tes2t$core$start(){
var G__37718 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tes2t.core.app], null);
var G__37719 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__37718,G__37719) : reagent.core.render_component.call(null,G__37718,G__37719));
});
tes2t.core.init = (function tes2t$core$init(){
return tes2t.core.start();
});
goog.exportSymbol('tes2t.core.init', tes2t.core.init);
tes2t.core.stop = (function tes2t$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=tes2t.core.js.map
