goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37289 = arguments.length;
var i__4731__auto___37290 = (0);
while(true){
if((i__4731__auto___37290 < len__4730__auto___37289)){
args__4736__auto__.push((arguments[i__4731__auto___37290]));

var G__37291 = (i__4731__auto___37290 + (1));
i__4731__auto___37290 = G__37291;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37087){
var G__37088 = cljs.core.first(seq37087);
var seq37087__$1 = cljs.core.next(seq37087);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37088,seq37087__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5718__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5718__auto__)){
var s = temp__5718__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__37101){
var map__37102 = p__37101;
var map__37102__$1 = (((((!((map__37102 == null))))?(((((map__37102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37102):map__37102);
var src = map__37102__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37102__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37102__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37104 = cljs.core.seq(sources);
var chunk__37105 = null;
var count__37106 = (0);
var i__37107 = (0);
while(true){
if((i__37107 < count__37106)){
var map__37112 = chunk__37105.cljs$core$IIndexed$_nth$arity$2(null,i__37107);
var map__37112__$1 = (((((!((map__37112 == null))))?(((((map__37112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37112):map__37112);
var src = map__37112__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37112__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37112__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37112__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37112__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__37297 = seq__37104;
var G__37298 = chunk__37105;
var G__37299 = count__37106;
var G__37300 = (i__37107 + (1));
seq__37104 = G__37297;
chunk__37105 = G__37298;
count__37106 = G__37299;
i__37107 = G__37300;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37104);
if(temp__5720__auto__){
var seq__37104__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37104__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37104__$1);
var G__37301 = cljs.core.chunk_rest(seq__37104__$1);
var G__37302 = c__4550__auto__;
var G__37303 = cljs.core.count(c__4550__auto__);
var G__37304 = (0);
seq__37104 = G__37301;
chunk__37105 = G__37302;
count__37106 = G__37303;
i__37107 = G__37304;
continue;
} else {
var map__37114 = cljs.core.first(seq__37104__$1);
var map__37114__$1 = (((((!((map__37114 == null))))?(((((map__37114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37114):map__37114);
var src = map__37114__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37114__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37114__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37114__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37114__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__37305 = cljs.core.next(seq__37104__$1);
var G__37306 = null;
var G__37307 = (0);
var G__37308 = (0);
seq__37104 = G__37305;
chunk__37105 = G__37306;
count__37106 = G__37307;
i__37107 = G__37308;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37116 = cljs.core.seq(js_requires);
var chunk__37117 = null;
var count__37118 = (0);
var i__37119 = (0);
while(true){
if((i__37119 < count__37118)){
var js_ns = chunk__37117.cljs$core$IIndexed$_nth$arity$2(null,i__37119);
var require_str_37309 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37309);


var G__37310 = seq__37116;
var G__37311 = chunk__37117;
var G__37312 = count__37118;
var G__37313 = (i__37119 + (1));
seq__37116 = G__37310;
chunk__37117 = G__37311;
count__37118 = G__37312;
i__37119 = G__37313;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37116);
if(temp__5720__auto__){
var seq__37116__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37116__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37116__$1);
var G__37314 = cljs.core.chunk_rest(seq__37116__$1);
var G__37315 = c__4550__auto__;
var G__37316 = cljs.core.count(c__4550__auto__);
var G__37317 = (0);
seq__37116 = G__37314;
chunk__37117 = G__37315;
count__37118 = G__37316;
i__37119 = G__37317;
continue;
} else {
var js_ns = cljs.core.first(seq__37116__$1);
var require_str_37318 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37318);


var G__37319 = cljs.core.next(seq__37116__$1);
var G__37320 = null;
var G__37321 = (0);
var G__37322 = (0);
seq__37116 = G__37319;
chunk__37117 = G__37320;
count__37118 = G__37321;
i__37119 = G__37322;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__37120 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__37120) : callback.call(null,G__37120));
} else {
var G__37121 = shadow.cljs.devtools.client.env.files_url();
var G__37122 = ((function (G__37121){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__37121))
;
var G__37123 = "POST";
var G__37124 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__37125 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__37121,G__37122,G__37123,G__37124,G__37125);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__37127){
var map__37128 = p__37127;
var map__37128__$1 = (((((!((map__37128 == null))))?(((((map__37128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37128):map__37128);
var msg = map__37128__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37128__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37128__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__37130 = info;
var map__37130__$1 = (((((!((map__37130 == null))))?(((((map__37130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37130):map__37130);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37130__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37130__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__37130,map__37130__$1,sources,compiled,map__37128,map__37128__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37135(s__37136){
return (new cljs.core.LazySeq(null,((function (map__37130,map__37130__$1,sources,compiled,map__37128,map__37128__$1,msg,info,reload_info){
return (function (){
var s__37136__$1 = s__37136;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__37136__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__37143 = cljs.core.first(xs__6277__auto__);
var map__37143__$1 = (((((!((map__37143 == null))))?(((((map__37143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37143):map__37143);
var src = map__37143__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37143__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37143__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__37136__$1,map__37143,map__37143__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37130,map__37130__$1,sources,compiled,map__37128,map__37128__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37135_$_iter__37137(s__37138){
return (new cljs.core.LazySeq(null,((function (s__37136__$1,map__37143,map__37143__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37130,map__37130__$1,sources,compiled,map__37128,map__37128__$1,msg,info,reload_info){
return (function (){
var s__37138__$1 = s__37138;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__37138__$1);
if(temp__5720__auto____$1){
var s__37138__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37138__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__37138__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__37140 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__37139 = (0);
while(true){
if((i__37139 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__37139);
cljs.core.chunk_append(b__37140,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37323 = (i__37139 + (1));
i__37139 = G__37323;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37140),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37135_$_iter__37137(cljs.core.chunk_rest(s__37138__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37140),null);
}
} else {
var warning = cljs.core.first(s__37138__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37135_$_iter__37137(cljs.core.rest(s__37138__$2)));
}
} else {
return null;
}
break;
}
});})(s__37136__$1,map__37143,map__37143__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37130,map__37130__$1,sources,compiled,map__37128,map__37128__$1,msg,info,reload_info))
,null,null));
});})(s__37136__$1,map__37143,map__37143__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37130,map__37130__$1,sources,compiled,map__37128,map__37128__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37135(cljs.core.rest(s__37136__$1)));
} else {
var G__37324 = cljs.core.rest(s__37136__$1);
s__37136__$1 = G__37324;
continue;
}
} else {
var G__37325 = cljs.core.rest(s__37136__$1);
s__37136__$1 = G__37325;
continue;
}
} else {
return null;
}
break;
}
});})(map__37130,map__37130__$1,sources,compiled,map__37128,map__37128__$1,msg,info,reload_info))
,null,null));
});})(map__37130,map__37130__$1,sources,compiled,map__37128,map__37128__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__37147_37326 = cljs.core.seq(warnings);
var chunk__37148_37327 = null;
var count__37149_37328 = (0);
var i__37150_37329 = (0);
while(true){
if((i__37150_37329 < count__37149_37328)){
var map__37157_37331 = chunk__37148_37327.cljs$core$IIndexed$_nth$arity$2(null,i__37150_37329);
var map__37157_37332__$1 = (((((!((map__37157_37331 == null))))?(((((map__37157_37331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37157_37331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37157_37331):map__37157_37331);
var w_37333 = map__37157_37332__$1;
var msg_37334__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37157_37332__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37157_37332__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37157_37332__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37157_37332__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37337)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37335),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37336),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37334__$1)].join(''));


var G__37338 = seq__37147_37326;
var G__37339 = chunk__37148_37327;
var G__37340 = count__37149_37328;
var G__37341 = (i__37150_37329 + (1));
seq__37147_37326 = G__37338;
chunk__37148_37327 = G__37339;
count__37149_37328 = G__37340;
i__37150_37329 = G__37341;
continue;
} else {
var temp__5720__auto___37342 = cljs.core.seq(seq__37147_37326);
if(temp__5720__auto___37342){
var seq__37147_37343__$1 = temp__5720__auto___37342;
if(cljs.core.chunked_seq_QMARK_(seq__37147_37343__$1)){
var c__4550__auto___37344 = cljs.core.chunk_first(seq__37147_37343__$1);
var G__37345 = cljs.core.chunk_rest(seq__37147_37343__$1);
var G__37346 = c__4550__auto___37344;
var G__37347 = cljs.core.count(c__4550__auto___37344);
var G__37348 = (0);
seq__37147_37326 = G__37345;
chunk__37148_37327 = G__37346;
count__37149_37328 = G__37347;
i__37150_37329 = G__37348;
continue;
} else {
var map__37159_37349 = cljs.core.first(seq__37147_37343__$1);
var map__37159_37350__$1 = (((((!((map__37159_37349 == null))))?(((((map__37159_37349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37159_37349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37159_37349):map__37159_37349);
var w_37351 = map__37159_37350__$1;
var msg_37352__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37159_37350__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37159_37350__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37159_37350__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37159_37350__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37355)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37353),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37354),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37352__$1)].join(''));


var G__37356 = cljs.core.next(seq__37147_37343__$1);
var G__37357 = null;
var G__37358 = (0);
var G__37359 = (0);
seq__37147_37326 = G__37356;
chunk__37148_37327 = G__37357;
count__37149_37328 = G__37358;
i__37150_37329 = G__37359;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__37130,map__37130__$1,sources,compiled,warnings,map__37128,map__37128__$1,msg,info,reload_info){
return (function (p__37162){
var map__37163 = p__37162;
var map__37163__$1 = (((((!((map__37163 == null))))?(((((map__37163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37163):map__37163);
var src = map__37163__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37163__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37163__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__37130,map__37130__$1,sources,compiled,warnings,map__37128,map__37128__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__37130,map__37130__$1,sources,compiled,warnings,map__37128,map__37128__$1,msg,info,reload_info){
return (function (p__37168){
var map__37169 = p__37168;
var map__37169__$1 = (((((!((map__37169 == null))))?(((((map__37169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37169):map__37169);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37169__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__37130,map__37130__$1,sources,compiled,warnings,map__37128,map__37128__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__37130,map__37130__$1,sources,compiled,warnings,map__37128,map__37128__$1,msg,info,reload_info){
return (function (p__37171){
var map__37172 = p__37171;
var map__37172__$1 = (((((!((map__37172 == null))))?(((((map__37172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37172):map__37172);
var rc = map__37172__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37172__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__37130,map__37130__$1,sources,compiled,warnings,map__37128,map__37128__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__37130,map__37130__$1,sources,compiled,warnings,map__37128,map__37128__$1,msg,info,reload_info){
return (function (p1__37126_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37126_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__37130,map__37130__$1,sources,compiled,warnings,map__37128,map__37128__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__37177){
var map__37178 = p__37177;
var map__37178__$1 = (((((!((map__37178 == null))))?(((((map__37178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37178):map__37178);
var msg = map__37178__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37178__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37181 = cljs.core.seq(updates);
var chunk__37183 = null;
var count__37184 = (0);
var i__37185 = (0);
while(true){
if((i__37185 < count__37184)){
var path = chunk__37183.cljs$core$IIndexed$_nth$arity$2(null,i__37185);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37213_37366 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37216_37367 = null;
var count__37217_37368 = (0);
var i__37218_37369 = (0);
while(true){
if((i__37218_37369 < count__37217_37368)){
var node_37370 = chunk__37216_37367.cljs$core$IIndexed$_nth$arity$2(null,i__37218_37369);
var path_match_37371 = shadow.cljs.devtools.client.browser.match_paths(node_37370.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37371)){
var new_link_37372 = (function (){var G__37223 = node_37370.cloneNode(true);
G__37223.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37371),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37223;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37371], 0));

goog.dom.insertSiblingAfter(new_link_37372,node_37370);

goog.dom.removeNode(node_37370);


var G__37377 = seq__37213_37366;
var G__37378 = chunk__37216_37367;
var G__37379 = count__37217_37368;
var G__37380 = (i__37218_37369 + (1));
seq__37213_37366 = G__37377;
chunk__37216_37367 = G__37378;
count__37217_37368 = G__37379;
i__37218_37369 = G__37380;
continue;
} else {
var G__37381 = seq__37213_37366;
var G__37382 = chunk__37216_37367;
var G__37383 = count__37217_37368;
var G__37384 = (i__37218_37369 + (1));
seq__37213_37366 = G__37381;
chunk__37216_37367 = G__37382;
count__37217_37368 = G__37383;
i__37218_37369 = G__37384;
continue;
}
} else {
var temp__5720__auto___37385 = cljs.core.seq(seq__37213_37366);
if(temp__5720__auto___37385){
var seq__37213_37386__$1 = temp__5720__auto___37385;
if(cljs.core.chunked_seq_QMARK_(seq__37213_37386__$1)){
var c__4550__auto___37387 = cljs.core.chunk_first(seq__37213_37386__$1);
var G__37388 = cljs.core.chunk_rest(seq__37213_37386__$1);
var G__37389 = c__4550__auto___37387;
var G__37390 = cljs.core.count(c__4550__auto___37387);
var G__37391 = (0);
seq__37213_37366 = G__37388;
chunk__37216_37367 = G__37389;
count__37217_37368 = G__37390;
i__37218_37369 = G__37391;
continue;
} else {
var node_37392 = cljs.core.first(seq__37213_37386__$1);
var path_match_37393 = shadow.cljs.devtools.client.browser.match_paths(node_37392.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37393)){
var new_link_37394 = (function (){var G__37224 = node_37392.cloneNode(true);
G__37224.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37393),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37224;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37393], 0));

goog.dom.insertSiblingAfter(new_link_37394,node_37392);

goog.dom.removeNode(node_37392);


var G__37395 = cljs.core.next(seq__37213_37386__$1);
var G__37396 = null;
var G__37397 = (0);
var G__37398 = (0);
seq__37213_37366 = G__37395;
chunk__37216_37367 = G__37396;
count__37217_37368 = G__37397;
i__37218_37369 = G__37398;
continue;
} else {
var G__37399 = cljs.core.next(seq__37213_37386__$1);
var G__37400 = null;
var G__37401 = (0);
var G__37402 = (0);
seq__37213_37366 = G__37399;
chunk__37216_37367 = G__37400;
count__37217_37368 = G__37401;
i__37218_37369 = G__37402;
continue;
}
}
} else {
}
}
break;
}


var G__37403 = seq__37181;
var G__37404 = chunk__37183;
var G__37405 = count__37184;
var G__37406 = (i__37185 + (1));
seq__37181 = G__37403;
chunk__37183 = G__37404;
count__37184 = G__37405;
i__37185 = G__37406;
continue;
} else {
var G__37407 = seq__37181;
var G__37408 = chunk__37183;
var G__37409 = count__37184;
var G__37410 = (i__37185 + (1));
seq__37181 = G__37407;
chunk__37183 = G__37408;
count__37184 = G__37409;
i__37185 = G__37410;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37181);
if(temp__5720__auto__){
var seq__37181__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37181__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37181__$1);
var G__37411 = cljs.core.chunk_rest(seq__37181__$1);
var G__37412 = c__4550__auto__;
var G__37413 = cljs.core.count(c__4550__auto__);
var G__37414 = (0);
seq__37181 = G__37411;
chunk__37183 = G__37412;
count__37184 = G__37413;
i__37185 = G__37414;
continue;
} else {
var path = cljs.core.first(seq__37181__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37225_37417 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37228_37418 = null;
var count__37229_37419 = (0);
var i__37230_37420 = (0);
while(true){
if((i__37230_37420 < count__37229_37419)){
var node_37421 = chunk__37228_37418.cljs$core$IIndexed$_nth$arity$2(null,i__37230_37420);
var path_match_37422 = shadow.cljs.devtools.client.browser.match_paths(node_37421.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37422)){
var new_link_37423 = (function (){var G__37237 = node_37421.cloneNode(true);
G__37237.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37422),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37237;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37422], 0));

goog.dom.insertSiblingAfter(new_link_37423,node_37421);

goog.dom.removeNode(node_37421);


var G__37424 = seq__37225_37417;
var G__37425 = chunk__37228_37418;
var G__37426 = count__37229_37419;
var G__37427 = (i__37230_37420 + (1));
seq__37225_37417 = G__37424;
chunk__37228_37418 = G__37425;
count__37229_37419 = G__37426;
i__37230_37420 = G__37427;
continue;
} else {
var G__37428 = seq__37225_37417;
var G__37429 = chunk__37228_37418;
var G__37430 = count__37229_37419;
var G__37431 = (i__37230_37420 + (1));
seq__37225_37417 = G__37428;
chunk__37228_37418 = G__37429;
count__37229_37419 = G__37430;
i__37230_37420 = G__37431;
continue;
}
} else {
var temp__5720__auto___37432__$1 = cljs.core.seq(seq__37225_37417);
if(temp__5720__auto___37432__$1){
var seq__37225_37433__$1 = temp__5720__auto___37432__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37225_37433__$1)){
var c__4550__auto___37434 = cljs.core.chunk_first(seq__37225_37433__$1);
var G__37435 = cljs.core.chunk_rest(seq__37225_37433__$1);
var G__37436 = c__4550__auto___37434;
var G__37437 = cljs.core.count(c__4550__auto___37434);
var G__37438 = (0);
seq__37225_37417 = G__37435;
chunk__37228_37418 = G__37436;
count__37229_37419 = G__37437;
i__37230_37420 = G__37438;
continue;
} else {
var node_37439 = cljs.core.first(seq__37225_37433__$1);
var path_match_37440 = shadow.cljs.devtools.client.browser.match_paths(node_37439.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37440)){
var new_link_37441 = (function (){var G__37242 = node_37439.cloneNode(true);
G__37242.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37440),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37242;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37440], 0));

goog.dom.insertSiblingAfter(new_link_37441,node_37439);

goog.dom.removeNode(node_37439);


var G__37442 = cljs.core.next(seq__37225_37433__$1);
var G__37443 = null;
var G__37444 = (0);
var G__37445 = (0);
seq__37225_37417 = G__37442;
chunk__37228_37418 = G__37443;
count__37229_37419 = G__37444;
i__37230_37420 = G__37445;
continue;
} else {
var G__37446 = cljs.core.next(seq__37225_37433__$1);
var G__37447 = null;
var G__37448 = (0);
var G__37449 = (0);
seq__37225_37417 = G__37446;
chunk__37228_37418 = G__37447;
count__37229_37419 = G__37448;
i__37230_37420 = G__37449;
continue;
}
}
} else {
}
}
break;
}


var G__37450 = cljs.core.next(seq__37181__$1);
var G__37451 = null;
var G__37452 = (0);
var G__37453 = (0);
seq__37181 = G__37450;
chunk__37183 = G__37451;
count__37184 = G__37452;
i__37185 = G__37453;
continue;
} else {
var G__37454 = cljs.core.next(seq__37181__$1);
var G__37455 = null;
var G__37456 = (0);
var G__37457 = (0);
seq__37181 = G__37454;
chunk__37183 = G__37455;
count__37184 = G__37456;
i__37185 = G__37457;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__37247){
var map__37248 = p__37247;
var map__37248__$1 = (((((!((map__37248 == null))))?(((((map__37248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37248):map__37248);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37248__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37248__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__37248,map__37248__$1,id,js){
return (function (){
return eval(js);
});})(map__37248,map__37248__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__37250){
var map__37251 = p__37250;
var map__37251__$1 = (((((!((map__37251 == null))))?(((((map__37251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37251):map__37251);
var msg = map__37251__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37251__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37251__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37251__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37251__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__37251,map__37251__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__37254){
var map__37255 = p__37254;
var map__37255__$1 = (((((!((map__37255 == null))))?(((((map__37255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37255):map__37255);
var src = map__37255__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37255__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__37251,map__37251__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__37251,map__37251__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__37251,map__37251__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__37260){
var map__37261 = p__37260;
var map__37261__$1 = (((((!((map__37261 == null))))?(((((map__37261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37261):map__37261);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37261__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37261__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__37261,map__37261__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__37261,map__37261__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__37267){
var map__37268 = p__37267;
var map__37268__$1 = (((((!((map__37268 == null))))?(((((map__37268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37268):map__37268);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37268__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37268__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__37270){
var map__37271 = p__37270;
var map__37271__$1 = (((((!((map__37271 == null))))?(((((map__37271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37271):map__37271);
var msg = map__37271__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37271__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__37273 = type;
var G__37273__$1 = (((G__37273 instanceof cljs.core.Keyword))?G__37273.fqn:null);
switch (G__37273__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__37275 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__37276 = ((function (G__37275){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__37275))
;
var G__37277 = "POST";
var G__37278 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__37279 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__37275,G__37276,G__37277,G__37278,G__37279);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e37286){var e = e37286;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5720__auto___37474 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto___37474)){
var s_37475 = temp__5720__auto___37474;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_37475.onclose = ((function (s_37475,temp__5720__auto___37474){
return (function (e){
return null;
});})(s_37475,temp__5720__auto___37474))
;

s_37475.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
