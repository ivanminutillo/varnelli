goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5720__auto__ = (function (){var fexpr__28215 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__28215.cljs$core$IFn$_invoke$arity$1 ? fexpr__28215.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__28215.call(null,channel));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var req = temp__5720__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (formatted_h){
return (function (p__28216){
var vec__28217 = p__28216;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28217,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28217,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__28220 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__28220)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__28220)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__28220)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__28220)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__28220)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__28220)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28220)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__28221){
var map__28222 = p__28221;
var map__28222__$1 = (((((!((map__28222 == null))))?(((((map__28222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28222):map__28222);
var request = map__28222__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28222__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28222__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28222__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__28224 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__28224,default_headers);

cljs_http.core.apply_response_type_BANG_(G__28224,response_type);

G__28224.setTimeoutInterval(timeout);

G__28224.setWithCredentials(send_credentials);

return G__28224;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__28226){
var map__28227 = p__28226;
var map__28227__$1 = (((((!((map__28227 == null))))?(((((map__28227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28227):map__28227);
var request = map__28227__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28227__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28227__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28227__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28227__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28227__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28227__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4131__auto__ = request_method;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__28227,map__28227__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__28235 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__28235) : cljs_http.core.error_kw.call(null,G__28235));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,request_url,method,headers__$1,xhr,map__28227,map__28227__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_28282 = ((function (channel,request_url,method,headers__$1,xhr,map__28227,map__28227__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});})(channel,request_url,method,headers__$1,xhr,map__28227,map__28227__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__28238_28283 = xhr;
G__28238_28283.setProgressEventsEnabled(true);

G__28238_28283.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_28282,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__28238_28283.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_28282,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__25649__auto___28284 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25649__auto___28284,channel,request_url,method,headers__$1,xhr,map__28227,map__28227__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__25650__auto__ = (function (){var switch__25604__auto__ = ((function (c__25649__auto___28284,channel,request_url,method,headers__$1,xhr,map__28227,map__28227__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_28249){
var state_val_28250 = (state_28249[(1)]);
if((state_val_28250 === (1))){
var state_28249__$1 = state_28249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28249__$1,(2),cancel);
} else {
if((state_val_28250 === (2))){
var inst_28240 = (state_28249[(2)]);
var inst_28241 = xhr.isComplete();
var inst_28242 = cljs.core.not(inst_28241);
var state_28249__$1 = (function (){var statearr_28251 = state_28249;
(statearr_28251[(7)] = inst_28240);

return statearr_28251;
})();
if(inst_28242){
var statearr_28252_28290 = state_28249__$1;
(statearr_28252_28290[(1)] = (3));

} else {
var statearr_28253_28291 = state_28249__$1;
(statearr_28253_28291[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28250 === (3))){
var inst_28244 = xhr.abort();
var state_28249__$1 = state_28249;
var statearr_28254_28292 = state_28249__$1;
(statearr_28254_28292[(2)] = inst_28244);

(statearr_28254_28292[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28250 === (4))){
var state_28249__$1 = state_28249;
var statearr_28255_28293 = state_28249__$1;
(statearr_28255_28293[(2)] = null);

(statearr_28255_28293[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28250 === (5))){
var inst_28247 = (state_28249[(2)]);
var state_28249__$1 = state_28249;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28249__$1,inst_28247);
} else {
return null;
}
}
}
}
}
});})(c__25649__auto___28284,channel,request_url,method,headers__$1,xhr,map__28227,map__28227__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__25604__auto__,c__25649__auto___28284,channel,request_url,method,headers__$1,xhr,map__28227,map__28227__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__25605__auto__ = null;
var cljs_http$core$xhr_$_state_machine__25605__auto____0 = (function (){
var statearr_28256 = [null,null,null,null,null,null,null,null];
(statearr_28256[(0)] = cljs_http$core$xhr_$_state_machine__25605__auto__);

(statearr_28256[(1)] = (1));

return statearr_28256;
});
var cljs_http$core$xhr_$_state_machine__25605__auto____1 = (function (state_28249){
while(true){
var ret_value__25606__auto__ = (function (){try{while(true){
var result__25607__auto__ = switch__25604__auto__(state_28249);
if(cljs.core.keyword_identical_QMARK_(result__25607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25607__auto__;
}
break;
}
}catch (e28257){if((e28257 instanceof Object)){
var ex__25608__auto__ = e28257;
var statearr_28258_28295 = state_28249;
(statearr_28258_28295[(5)] = ex__25608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28257;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28296 = state_28249;
state_28249 = G__28296;
continue;
} else {
return ret_value__25606__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__25605__auto__ = function(state_28249){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__25605__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__25605__auto____1.call(this,state_28249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__25605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__25605__auto____0;
cljs_http$core$xhr_$_state_machine__25605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__25605__auto____1;
return cljs_http$core$xhr_$_state_machine__25605__auto__;
})()
;})(switch__25604__auto__,c__25649__auto___28284,channel,request_url,method,headers__$1,xhr,map__28227,map__28227__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__25651__auto__ = (function (){var statearr_28259 = (f__25650__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25650__auto__.cljs$core$IFn$_invoke$arity$0() : f__25650__auto__.call(null));
(statearr_28259[(6)] = c__25649__auto___28284);

return statearr_28259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25651__auto__);
});})(c__25649__auto___28284,channel,request_url,method,headers__$1,xhr,map__28227,map__28227__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__28260){
var map__28261 = p__28260;
var map__28261__$1 = (((((!((map__28261 == null))))?(((((map__28261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28261):map__28261);
var request = map__28261__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28261__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28261__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28261__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28261__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_28297 = jsonp.send(null,((function (channel,jsonp,map__28261,map__28261__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__28261,map__28261__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__28261,map__28261__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__28261,map__28261__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_28297], null));

if(cljs.core.truth_(cancel)){
var c__25649__auto___28300 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25649__auto___28300,req_28297,channel,jsonp,map__28261,map__28261__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__25650__auto__ = (function (){var switch__25604__auto__ = ((function (c__25649__auto___28300,req_28297,channel,jsonp,map__28261,map__28261__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_28267){
var state_val_28268 = (state_28267[(1)]);
if((state_val_28268 === (1))){
var state_28267__$1 = state_28267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28267__$1,(2),cancel);
} else {
if((state_val_28268 === (2))){
var inst_28264 = (state_28267[(2)]);
var inst_28265 = jsonp.cancel(req_28297);
var state_28267__$1 = (function (){var statearr_28269 = state_28267;
(statearr_28269[(7)] = inst_28264);

return statearr_28269;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28267__$1,inst_28265);
} else {
return null;
}
}
});})(c__25649__auto___28300,req_28297,channel,jsonp,map__28261,map__28261__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__25604__auto__,c__25649__auto___28300,req_28297,channel,jsonp,map__28261,map__28261__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__25605__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__25605__auto____0 = (function (){
var statearr_28270 = [null,null,null,null,null,null,null,null];
(statearr_28270[(0)] = cljs_http$core$jsonp_$_state_machine__25605__auto__);

(statearr_28270[(1)] = (1));

return statearr_28270;
});
var cljs_http$core$jsonp_$_state_machine__25605__auto____1 = (function (state_28267){
while(true){
var ret_value__25606__auto__ = (function (){try{while(true){
var result__25607__auto__ = switch__25604__auto__(state_28267);
if(cljs.core.keyword_identical_QMARK_(result__25607__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25607__auto__;
}
break;
}
}catch (e28271){if((e28271 instanceof Object)){
var ex__25608__auto__ = e28271;
var statearr_28272_28307 = state_28267;
(statearr_28272_28307[(5)] = ex__25608__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28271;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25606__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28308 = state_28267;
state_28267 = G__28308;
continue;
} else {
return ret_value__25606__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__25605__auto__ = function(state_28267){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__25605__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__25605__auto____1.call(this,state_28267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__25605__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__25605__auto____0;
cljs_http$core$jsonp_$_state_machine__25605__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__25605__auto____1;
return cljs_http$core$jsonp_$_state_machine__25605__auto__;
})()
;})(switch__25604__auto__,c__25649__auto___28300,req_28297,channel,jsonp,map__28261,map__28261__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__25651__auto__ = (function (){var statearr_28273 = (f__25650__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25650__auto__.cljs$core$IFn$_invoke$arity$0() : f__25650__auto__.call(null));
(statearr_28273[(6)] = c__25649__auto___28300);

return statearr_28273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25651__auto__);
});})(c__25649__auto___28300,req_28297,channel,jsonp,map__28261,map__28261__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__28274){
var map__28275 = p__28274;
var map__28275__$1 = (((((!((map__28275 == null))))?(((((map__28275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28275):map__28275);
var request = map__28275__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28275__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
