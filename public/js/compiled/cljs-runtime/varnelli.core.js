goog.provide('varnelli.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reitit.frontend');
goog.require('reagent.session');
goog.require('clerk.core');
goog.require('accountant.core');
goog.require('varnelli.components.header');
goog.require('varnelli.routes');
if((typeof varnelli !== 'undefined') && (typeof varnelli.core !== 'undefined') && (typeof varnelli.core.match !== 'undefined')){
} else {
varnelli.core.match = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
varnelli.core.current_page = (function varnelli$core$current_page(){
return (function (){
var page = new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$1(reagent.session.get(new cljs.core.Keyword(null,"route","route",329891309)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [varnelli.components.header.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page], null)], null);
});
});
varnelli.core.start = (function varnelli$core$start(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [varnelli.core.current_page], null),document.getElementById("app"));
});
varnelli.core.init = (function varnelli$core$init(){
clerk.core.initialize_BANG_();

accountant.core.configure_navigation_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
var match = reitit.frontend.match_by_path(varnelli.routes.router,path);
var current_page = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
var route_params = new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(match);
reagent.core.after_render(clerk.core.after_render_BANG_);

reagent.session.put_BANG_(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),varnelli.routes.page_for(current_page),new cljs.core.Keyword(null,"route-params","route-params",2111411055),route_params], null));

return clerk.core.navigate_page_BANG_(path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return cljs.core.boolean$(reitit.frontend.match_by_path(varnelli.routes.router,path));
})], null));

accountant.core.dispatch_current_BANG_();

return varnelli.core.start();
});
goog.exportSymbol('varnelli.core.init', varnelli.core.init);
varnelli.core.stop = (function varnelli$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=varnelli.core.js.map
