goog.provide('varnelli.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('varnelli.components.header');
goog.require('varnelli.components.txs');
varnelli.core.url = "http://localhost:3000/wallet/v1/";
if((typeof varnelli !== 'undefined') && (typeof varnelli.core !== 'undefined') && (typeof varnelli.core.app_state !== 'undefined')){
} else {
varnelli.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
varnelli.core.items = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"amount","amount",364489504),"3",new cljs.core.Keyword(null,"currency","currency",-898327568),"santamaria"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"amount","amount",364489504),"6",new cljs.core.Keyword(null,"currency","currency",-898327568),"santamaria"], null)], null));
varnelli.core.fetch_txs = (function varnelli$core$fetch_txs(){
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic([varnelli.core.url,"transactions/list"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false,new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"db-only",new cljs.core.Keyword(null,"connection","connection",-123599300),"mongo"], null),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 3, ["x-api-key","K8trtGu8FmfNiOFqcZhJhgtxhqs5FluM","Content-Type","application/json","Accept","application/json"], null)], null)], 0));
});
varnelli.core.app = (function varnelli$core$app(){
var c__25649__auto___28110 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25649__auto___28110){
return (function (){
var f__25650__auto__ = (function (){var switch__25604__auto__ = ((function (c__25649__auto___28110){
return (function (state_28102){
var state_val_28103 = (state_28102[(1)]);
if((state_val_28103 === (1))){
var inst_28096 = varnelli.core.fetch_txs();
var state_28102__$1 = state_28102;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28102__$1,(2),inst_28096);
} else {
if((state_val_28103 === (2))){
var inst_28098 = (state_28102[(2)]);
var inst_28099 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_28098);
var inst_28100 = console.log(inst_28099);
var state_28102__$1 = state_28102;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28102__$1,inst_28100);
} else {
return null;
}
}
});})(c__25649__auto___28110))
;
return ((function (switch__25604__auto__,c__25649__auto___28110){
return (function() {
var varnelli$core$app_$_state_machine__25605__auto__ = null;
var varnelli$core$app_$_state_machine__25605__auto____0 = (function (){
var statearr_28104 = [null,null,null,null,null,null,null];
(statearr_28104[(0)] = varnelli$core$app_$_state_machine__25605__auto__);

(statearr_28104[(1)] = (1));

return statearr_28104;
});
var varnelli$core$app_$_state_machine__25605__auto____1 = (function (state_28102){
while(true){
var ret_value__25606__auto__ = (function (){try{while(true){
var result__25607__auto__ = switch__25604__auto__(state_28102);
if(cljs.core.keyword_identical_QMARK_(result__25607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25607__auto__;
}
break;
}
}catch (e28105){if((e28105 instanceof Object)){
var ex__25608__auto__ = e28105;
var statearr_28106_28111 = state_28102;
(statearr_28106_28111[(5)] = ex__25608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28105;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28112 = state_28102;
state_28102 = G__28112;
continue;
} else {
return ret_value__25606__auto__;
}
break;
}
});
varnelli$core$app_$_state_machine__25605__auto__ = function(state_28102){
switch(arguments.length){
case 0:
return varnelli$core$app_$_state_machine__25605__auto____0.call(this);
case 1:
return varnelli$core$app_$_state_machine__25605__auto____1.call(this,state_28102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
varnelli$core$app_$_state_machine__25605__auto__.cljs$core$IFn$_invoke$arity$0 = varnelli$core$app_$_state_machine__25605__auto____0;
varnelli$core$app_$_state_machine__25605__auto__.cljs$core$IFn$_invoke$arity$1 = varnelli$core$app_$_state_machine__25605__auto____1;
return varnelli$core$app_$_state_machine__25605__auto__;
})()
;})(switch__25604__auto__,c__25649__auto___28110))
})();
var state__25651__auto__ = (function (){var statearr_28107 = (f__25650__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25650__auto__.cljs$core$IFn$_invoke$arity$0() : f__25650__auto__.call(null));
(statearr_28107[(6)] = c__25649__auto___28110);

return statearr_28107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25651__auto__);
});})(c__25649__auto___28110))
);


return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [varnelli.components.header.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [varnelli.components.txs.txs], null)], null);
});
varnelli.core.start = (function varnelli$core$start(){
var G__28108 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [varnelli.core.app], null);
var G__28109 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__28108,G__28109) : reagent.core.render_component.call(null,G__28108,G__28109));
});
varnelli.core.init = (function varnelli$core$init(){
return varnelli.core.start();
});
goog.exportSymbol('varnelli.core.init', varnelli.core.init);
varnelli.core.stop = (function varnelli$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=varnelli.core.js.map
