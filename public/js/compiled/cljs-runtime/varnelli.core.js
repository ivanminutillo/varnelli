goog.provide('varnelli.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('varnelli.components.header');
if((typeof varnelli !== 'undefined') && (typeof varnelli.core !== 'undefined') && (typeof varnelli.core.app_state !== 'undefined')){
} else {
varnelli.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
varnelli.core.handler = (function varnelli$core$handler(response){
return console.log(cljs.core.str.cljs$core$IFn$_invoke$arity$1(response));
});
varnelli.core.error_handler = (function varnelli$core$error_handler(p__29655){
var map__29656 = p__29655;
var map__29656__$1 = (((((!((map__29656 == null))))?(((((map__29656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29656):map__29656);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29656__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29656__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log(["something bad happened: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
varnelli.core.clj__GT_json = (function varnelli$core$clj__GT_json(ds){
return JSON.stringify(cljs.core.clj__GT_js(ds));
});
varnelli.core.fetch_txs_BANG_ = (function varnelli$core$fetch_txs_BANG_(){
var json = varnelli.core.clj__GT_json(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"db-only",new cljs.core.Keyword(null,"connection","connection",-123599300),"mongo"], null));
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic("http://localhost:3000/wallet/v1/transactions/list",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 3, ["x-api-key","K8trtGu8FmfNiOFqcZhJhgtxhqs5FluM","Content-Type","application/json","Accept","application/json"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),json,new cljs.core.Keyword(null,"handler","handler",-195596612),varnelli.core.handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),varnelli.core.error_handler], null)], 0));
});
varnelli.core.app = (function varnelli$core$app(){
varnelli.core.fetch_txs_BANG_();

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [varnelli.components.header.header], null);
});
varnelli.core.start = (function varnelli$core$start(){
var G__29658 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [varnelli.core.app], null);
var G__29659 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__29658,G__29659) : reagent.core.render_component.call(null,G__29658,G__29659));
});
varnelli.core.init = (function varnelli$core$init(){
return varnelli.core.start();
});
goog.exportSymbol('varnelli.core.init', varnelli.core.init);
varnelli.core.stop = (function varnelli$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=varnelli.core.js.map
