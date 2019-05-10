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
var len__4730__auto___35351 = arguments.length;
var i__4731__auto___35352 = (0);
while(true){
if((i__4731__auto___35352 < len__4730__auto___35351)){
args__4736__auto__.push((arguments[i__4731__auto___35352]));

var G__35353 = (i__4731__auto___35352 + (1));
i__4731__auto___35352 = G__35353;
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
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35187){
var G__35188 = cljs.core.first(seq35187);
var seq35187__$1 = cljs.core.next(seq35187);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35188,seq35187__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__35195){
var map__35196 = p__35195;
var map__35196__$1 = (((((!((map__35196 == null))))?(((((map__35196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35196):map__35196);
var src = map__35196__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35196__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35196__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__35199 = cljs.core.seq(sources);
var chunk__35200 = null;
var count__35201 = (0);
var i__35202 = (0);
while(true){
if((i__35202 < count__35201)){
var map__35209 = chunk__35200.cljs$core$IIndexed$_nth$arity$2(null,i__35202);
var map__35209__$1 = (((((!((map__35209 == null))))?(((((map__35209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35209):map__35209);
var src = map__35209__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35209__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35209__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35209__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35209__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__35364 = seq__35199;
var G__35365 = chunk__35200;
var G__35366 = count__35201;
var G__35367 = (i__35202 + (1));
seq__35199 = G__35364;
chunk__35200 = G__35365;
count__35201 = G__35366;
i__35202 = G__35367;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35199);
if(temp__5720__auto__){
var seq__35199__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35199__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35199__$1);
var G__35370 = cljs.core.chunk_rest(seq__35199__$1);
var G__35371 = c__4550__auto__;
var G__35372 = cljs.core.count(c__4550__auto__);
var G__35373 = (0);
seq__35199 = G__35370;
chunk__35200 = G__35371;
count__35201 = G__35372;
i__35202 = G__35373;
continue;
} else {
var map__35211 = cljs.core.first(seq__35199__$1);
var map__35211__$1 = (((((!((map__35211 == null))))?(((((map__35211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35211):map__35211);
var src = map__35211__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35211__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35211__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35211__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35211__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__35377 = cljs.core.next(seq__35199__$1);
var G__35378 = null;
var G__35379 = (0);
var G__35380 = (0);
seq__35199 = G__35377;
chunk__35200 = G__35378;
count__35201 = G__35379;
i__35202 = G__35380;
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
var seq__35213 = cljs.core.seq(js_requires);
var chunk__35214 = null;
var count__35215 = (0);
var i__35216 = (0);
while(true){
if((i__35216 < count__35215)){
var js_ns = chunk__35214.cljs$core$IIndexed$_nth$arity$2(null,i__35216);
var require_str_35385 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35385);


var G__35386 = seq__35213;
var G__35387 = chunk__35214;
var G__35388 = count__35215;
var G__35389 = (i__35216 + (1));
seq__35213 = G__35386;
chunk__35214 = G__35387;
count__35215 = G__35388;
i__35216 = G__35389;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35213);
if(temp__5720__auto__){
var seq__35213__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35213__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35213__$1);
var G__35392 = cljs.core.chunk_rest(seq__35213__$1);
var G__35393 = c__4550__auto__;
var G__35394 = cljs.core.count(c__4550__auto__);
var G__35395 = (0);
seq__35213 = G__35392;
chunk__35214 = G__35393;
count__35215 = G__35394;
i__35216 = G__35395;
continue;
} else {
var js_ns = cljs.core.first(seq__35213__$1);
var require_str_35396 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35396);


var G__35398 = cljs.core.next(seq__35213__$1);
var G__35399 = null;
var G__35400 = (0);
var G__35401 = (0);
seq__35213 = G__35398;
chunk__35214 = G__35399;
count__35215 = G__35400;
i__35216 = G__35401;
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
var G__35217 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__35217) : callback.call(null,G__35217));
} else {
var G__35218 = shadow.cljs.devtools.client.env.files_url();
var G__35219 = ((function (G__35218){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__35218))
;
var G__35220 = "POST";
var G__35221 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__35222 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35218,G__35219,G__35220,G__35221,G__35222);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__35226){
var map__35227 = p__35226;
var map__35227__$1 = (((((!((map__35227 == null))))?(((((map__35227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35227):map__35227);
var msg = map__35227__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35227__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35227__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__35229 = info;
var map__35229__$1 = (((((!((map__35229 == null))))?(((((map__35229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35229):map__35229);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35229__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35229__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__35229,map__35229__$1,sources,compiled,map__35227,map__35227__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35231(s__35232){
return (new cljs.core.LazySeq(null,((function (map__35229,map__35229__$1,sources,compiled,map__35227,map__35227__$1,msg,info,reload_info){
return (function (){
var s__35232__$1 = s__35232;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__35232__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__35237 = cljs.core.first(xs__6277__auto__);
var map__35237__$1 = (((((!((map__35237 == null))))?(((((map__35237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35237):map__35237);
var src = map__35237__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35237__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35237__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__35232__$1,map__35237,map__35237__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__35229,map__35229__$1,sources,compiled,map__35227,map__35227__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35231_$_iter__35233(s__35234){
return (new cljs.core.LazySeq(null,((function (s__35232__$1,map__35237,map__35237__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__35229,map__35229__$1,sources,compiled,map__35227,map__35227__$1,msg,info,reload_info){
return (function (){
var s__35234__$1 = s__35234;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__35234__$1);
if(temp__5720__auto____$1){
var s__35234__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35234__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__35234__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__35236 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__35235 = (0);
while(true){
if((i__35235 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__35235);
cljs.core.chunk_append(b__35236,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35417 = (i__35235 + (1));
i__35235 = G__35417;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35236),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35231_$_iter__35233(cljs.core.chunk_rest(s__35234__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35236),null);
}
} else {
var warning = cljs.core.first(s__35234__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35231_$_iter__35233(cljs.core.rest(s__35234__$2)));
}
} else {
return null;
}
break;
}
});})(s__35232__$1,map__35237,map__35237__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__35229,map__35229__$1,sources,compiled,map__35227,map__35227__$1,msg,info,reload_info))
,null,null));
});})(s__35232__$1,map__35237,map__35237__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__35229,map__35229__$1,sources,compiled,map__35227,map__35227__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35231(cljs.core.rest(s__35232__$1)));
} else {
var G__35418 = cljs.core.rest(s__35232__$1);
s__35232__$1 = G__35418;
continue;
}
} else {
var G__35419 = cljs.core.rest(s__35232__$1);
s__35232__$1 = G__35419;
continue;
}
} else {
return null;
}
break;
}
});})(map__35229,map__35229__$1,sources,compiled,map__35227,map__35227__$1,msg,info,reload_info))
,null,null));
});})(map__35229,map__35229__$1,sources,compiled,map__35227,map__35227__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__35239_35420 = cljs.core.seq(warnings);
var chunk__35240_35421 = null;
var count__35241_35422 = (0);
var i__35242_35423 = (0);
while(true){
if((i__35242_35423 < count__35241_35422)){
var map__35247_35424 = chunk__35240_35421.cljs$core$IIndexed$_nth$arity$2(null,i__35242_35423);
var map__35247_35425__$1 = (((((!((map__35247_35424 == null))))?(((((map__35247_35424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35247_35424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35247_35424):map__35247_35424);
var w_35426 = map__35247_35425__$1;
var msg_35427__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35247_35425__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35247_35425__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35429 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35247_35425__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35247_35425__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35430)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35428),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35429),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35427__$1)].join(''));


var G__35431 = seq__35239_35420;
var G__35432 = chunk__35240_35421;
var G__35433 = count__35241_35422;
var G__35434 = (i__35242_35423 + (1));
seq__35239_35420 = G__35431;
chunk__35240_35421 = G__35432;
count__35241_35422 = G__35433;
i__35242_35423 = G__35434;
continue;
} else {
var temp__5720__auto___35435 = cljs.core.seq(seq__35239_35420);
if(temp__5720__auto___35435){
var seq__35239_35436__$1 = temp__5720__auto___35435;
if(cljs.core.chunked_seq_QMARK_(seq__35239_35436__$1)){
var c__4550__auto___35437 = cljs.core.chunk_first(seq__35239_35436__$1);
var G__35438 = cljs.core.chunk_rest(seq__35239_35436__$1);
var G__35439 = c__4550__auto___35437;
var G__35440 = cljs.core.count(c__4550__auto___35437);
var G__35441 = (0);
seq__35239_35420 = G__35438;
chunk__35240_35421 = G__35439;
count__35241_35422 = G__35440;
i__35242_35423 = G__35441;
continue;
} else {
var map__35249_35442 = cljs.core.first(seq__35239_35436__$1);
var map__35249_35443__$1 = (((((!((map__35249_35442 == null))))?(((((map__35249_35442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35249_35442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35249_35442):map__35249_35442);
var w_35444 = map__35249_35443__$1;
var msg_35445__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35249_35443__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35249_35443__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35249_35443__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35249_35443__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35448)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35446),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35447),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35445__$1)].join(''));


var G__35449 = cljs.core.next(seq__35239_35436__$1);
var G__35450 = null;
var G__35451 = (0);
var G__35452 = (0);
seq__35239_35420 = G__35449;
chunk__35240_35421 = G__35450;
count__35241_35422 = G__35451;
i__35242_35423 = G__35452;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35229,map__35229__$1,sources,compiled,warnings,map__35227,map__35227__$1,msg,info,reload_info){
return (function (p__35251){
var map__35252 = p__35251;
var map__35252__$1 = (((((!((map__35252 == null))))?(((((map__35252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35252):map__35252);
var src = map__35252__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35252__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35252__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__35229,map__35229__$1,sources,compiled,warnings,map__35227,map__35227__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__35229,map__35229__$1,sources,compiled,warnings,map__35227,map__35227__$1,msg,info,reload_info){
return (function (p__35254){
var map__35255 = p__35254;
var map__35255__$1 = (((((!((map__35255 == null))))?(((((map__35255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35255):map__35255);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35255__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__35229,map__35229__$1,sources,compiled,warnings,map__35227,map__35227__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35229,map__35229__$1,sources,compiled,warnings,map__35227,map__35227__$1,msg,info,reload_info){
return (function (p__35257){
var map__35258 = p__35257;
var map__35258__$1 = (((((!((map__35258 == null))))?(((((map__35258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35258):map__35258);
var rc = map__35258__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35258__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__35229,map__35229__$1,sources,compiled,warnings,map__35227,map__35227__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__35229,map__35229__$1,sources,compiled,warnings,map__35227,map__35227__$1,msg,info,reload_info){
return (function (p1__35225_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35225_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__35229,map__35229__$1,sources,compiled,warnings,map__35227,map__35227__$1,msg,info,reload_info))
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__35260){
var map__35261 = p__35260;
var map__35261__$1 = (((((!((map__35261 == null))))?(((((map__35261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35261):map__35261);
var msg = map__35261__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35261__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35263 = cljs.core.seq(updates);
var chunk__35265 = null;
var count__35266 = (0);
var i__35267 = (0);
while(true){
if((i__35267 < count__35266)){
var path = chunk__35265.cljs$core$IIndexed$_nth$arity$2(null,i__35267);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35293_35455 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35296_35456 = null;
var count__35297_35457 = (0);
var i__35298_35458 = (0);
while(true){
if((i__35298_35458 < count__35297_35457)){
var node_35459 = chunk__35296_35456.cljs$core$IIndexed$_nth$arity$2(null,i__35298_35458);
var path_match_35460 = shadow.cljs.devtools.client.browser.match_paths(node_35459.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35460)){
var new_link_35461 = (function (){var G__35303 = node_35459.cloneNode(true);
G__35303.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35460),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35303;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35460], 0));

goog.dom.insertSiblingAfter(new_link_35461,node_35459);

goog.dom.removeNode(node_35459);


var G__35462 = seq__35293_35455;
var G__35463 = chunk__35296_35456;
var G__35464 = count__35297_35457;
var G__35465 = (i__35298_35458 + (1));
seq__35293_35455 = G__35462;
chunk__35296_35456 = G__35463;
count__35297_35457 = G__35464;
i__35298_35458 = G__35465;
continue;
} else {
var G__35466 = seq__35293_35455;
var G__35467 = chunk__35296_35456;
var G__35468 = count__35297_35457;
var G__35469 = (i__35298_35458 + (1));
seq__35293_35455 = G__35466;
chunk__35296_35456 = G__35467;
count__35297_35457 = G__35468;
i__35298_35458 = G__35469;
continue;
}
} else {
var temp__5720__auto___35470 = cljs.core.seq(seq__35293_35455);
if(temp__5720__auto___35470){
var seq__35293_35471__$1 = temp__5720__auto___35470;
if(cljs.core.chunked_seq_QMARK_(seq__35293_35471__$1)){
var c__4550__auto___35472 = cljs.core.chunk_first(seq__35293_35471__$1);
var G__35473 = cljs.core.chunk_rest(seq__35293_35471__$1);
var G__35474 = c__4550__auto___35472;
var G__35475 = cljs.core.count(c__4550__auto___35472);
var G__35476 = (0);
seq__35293_35455 = G__35473;
chunk__35296_35456 = G__35474;
count__35297_35457 = G__35475;
i__35298_35458 = G__35476;
continue;
} else {
var node_35477 = cljs.core.first(seq__35293_35471__$1);
var path_match_35478 = shadow.cljs.devtools.client.browser.match_paths(node_35477.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35478)){
var new_link_35479 = (function (){var G__35304 = node_35477.cloneNode(true);
G__35304.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35478),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35304;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35478], 0));

goog.dom.insertSiblingAfter(new_link_35479,node_35477);

goog.dom.removeNode(node_35477);


var G__35480 = cljs.core.next(seq__35293_35471__$1);
var G__35481 = null;
var G__35482 = (0);
var G__35483 = (0);
seq__35293_35455 = G__35480;
chunk__35296_35456 = G__35481;
count__35297_35457 = G__35482;
i__35298_35458 = G__35483;
continue;
} else {
var G__35484 = cljs.core.next(seq__35293_35471__$1);
var G__35485 = null;
var G__35486 = (0);
var G__35487 = (0);
seq__35293_35455 = G__35484;
chunk__35296_35456 = G__35485;
count__35297_35457 = G__35486;
i__35298_35458 = G__35487;
continue;
}
}
} else {
}
}
break;
}


var G__35488 = seq__35263;
var G__35489 = chunk__35265;
var G__35490 = count__35266;
var G__35491 = (i__35267 + (1));
seq__35263 = G__35488;
chunk__35265 = G__35489;
count__35266 = G__35490;
i__35267 = G__35491;
continue;
} else {
var G__35492 = seq__35263;
var G__35493 = chunk__35265;
var G__35494 = count__35266;
var G__35495 = (i__35267 + (1));
seq__35263 = G__35492;
chunk__35265 = G__35493;
count__35266 = G__35494;
i__35267 = G__35495;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35263);
if(temp__5720__auto__){
var seq__35263__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35263__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35263__$1);
var G__35496 = cljs.core.chunk_rest(seq__35263__$1);
var G__35497 = c__4550__auto__;
var G__35498 = cljs.core.count(c__4550__auto__);
var G__35499 = (0);
seq__35263 = G__35496;
chunk__35265 = G__35497;
count__35266 = G__35498;
i__35267 = G__35499;
continue;
} else {
var path = cljs.core.first(seq__35263__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35305_35500 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35308_35501 = null;
var count__35309_35502 = (0);
var i__35310_35503 = (0);
while(true){
if((i__35310_35503 < count__35309_35502)){
var node_35504 = chunk__35308_35501.cljs$core$IIndexed$_nth$arity$2(null,i__35310_35503);
var path_match_35505 = shadow.cljs.devtools.client.browser.match_paths(node_35504.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35505)){
var new_link_35506 = (function (){var G__35315 = node_35504.cloneNode(true);
G__35315.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35505),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35315;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35505], 0));

goog.dom.insertSiblingAfter(new_link_35506,node_35504);

goog.dom.removeNode(node_35504);


var G__35507 = seq__35305_35500;
var G__35508 = chunk__35308_35501;
var G__35509 = count__35309_35502;
var G__35510 = (i__35310_35503 + (1));
seq__35305_35500 = G__35507;
chunk__35308_35501 = G__35508;
count__35309_35502 = G__35509;
i__35310_35503 = G__35510;
continue;
} else {
var G__35511 = seq__35305_35500;
var G__35512 = chunk__35308_35501;
var G__35513 = count__35309_35502;
var G__35514 = (i__35310_35503 + (1));
seq__35305_35500 = G__35511;
chunk__35308_35501 = G__35512;
count__35309_35502 = G__35513;
i__35310_35503 = G__35514;
continue;
}
} else {
var temp__5720__auto___35515__$1 = cljs.core.seq(seq__35305_35500);
if(temp__5720__auto___35515__$1){
var seq__35305_35516__$1 = temp__5720__auto___35515__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35305_35516__$1)){
var c__4550__auto___35517 = cljs.core.chunk_first(seq__35305_35516__$1);
var G__35518 = cljs.core.chunk_rest(seq__35305_35516__$1);
var G__35519 = c__4550__auto___35517;
var G__35520 = cljs.core.count(c__4550__auto___35517);
var G__35521 = (0);
seq__35305_35500 = G__35518;
chunk__35308_35501 = G__35519;
count__35309_35502 = G__35520;
i__35310_35503 = G__35521;
continue;
} else {
var node_35522 = cljs.core.first(seq__35305_35516__$1);
var path_match_35523 = shadow.cljs.devtools.client.browser.match_paths(node_35522.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35523)){
var new_link_35526 = (function (){var G__35316 = node_35522.cloneNode(true);
G__35316.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35523),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35316;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35523], 0));

goog.dom.insertSiblingAfter(new_link_35526,node_35522);

goog.dom.removeNode(node_35522);


var G__35528 = cljs.core.next(seq__35305_35516__$1);
var G__35529 = null;
var G__35530 = (0);
var G__35531 = (0);
seq__35305_35500 = G__35528;
chunk__35308_35501 = G__35529;
count__35309_35502 = G__35530;
i__35310_35503 = G__35531;
continue;
} else {
var G__35532 = cljs.core.next(seq__35305_35516__$1);
var G__35533 = null;
var G__35534 = (0);
var G__35535 = (0);
seq__35305_35500 = G__35532;
chunk__35308_35501 = G__35533;
count__35309_35502 = G__35534;
i__35310_35503 = G__35535;
continue;
}
}
} else {
}
}
break;
}


var G__35536 = cljs.core.next(seq__35263__$1);
var G__35537 = null;
var G__35538 = (0);
var G__35539 = (0);
seq__35263 = G__35536;
chunk__35265 = G__35537;
count__35266 = G__35538;
i__35267 = G__35539;
continue;
} else {
var G__35541 = cljs.core.next(seq__35263__$1);
var G__35542 = null;
var G__35543 = (0);
var G__35544 = (0);
seq__35263 = G__35541;
chunk__35265 = G__35542;
count__35266 = G__35543;
i__35267 = G__35544;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__35320){
var map__35321 = p__35320;
var map__35321__$1 = (((((!((map__35321 == null))))?(((((map__35321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35321):map__35321);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35321__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35321__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__35321,map__35321__$1,id,js){
return (function (){
return eval(js);
});})(map__35321,map__35321__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__35323){
var map__35324 = p__35323;
var map__35324__$1 = (((((!((map__35324 == null))))?(((((map__35324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35324):map__35324);
var msg = map__35324__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35324__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35324__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35324__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35324__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__35324,map__35324__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__35326){
var map__35327 = p__35326;
var map__35327__$1 = (((((!((map__35327 == null))))?(((((map__35327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35327):map__35327);
var src = map__35327__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35327__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__35324,map__35324__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__35324,map__35324__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__35324,map__35324__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__35329){
var map__35331 = p__35329;
var map__35331__$1 = (((((!((map__35331 == null))))?(((((map__35331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35331):map__35331);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35331__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35331__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__35331,map__35331__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__35331,map__35331__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__35334){
var map__35335 = p__35334;
var map__35335__$1 = (((((!((map__35335 == null))))?(((((map__35335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35335):map__35335);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35335__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35335__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__35337){
var map__35338 = p__35337;
var map__35338__$1 = (((((!((map__35338 == null))))?(((((map__35338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35338):map__35338);
var msg = map__35338__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35338__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__35340 = type;
var G__35340__$1 = (((G__35340 instanceof cljs.core.Keyword))?G__35340.fqn:null);
switch (G__35340__$1) {
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
var G__35341 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__35342 = ((function (G__35341){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__35341))
;
var G__35343 = "POST";
var G__35344 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__35345 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35341,G__35342,G__35343,G__35344,G__35345);
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
}catch (e35346){var e = e35346;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5720__auto___35552 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto___35552)){
var s_35553 = temp__5720__auto___35552;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_35553.onclose = ((function (s_35553,temp__5720__auto___35552){
return (function (e){
return null;
});})(s_35553,temp__5720__auto___35552))
;

s_35553.close();

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
