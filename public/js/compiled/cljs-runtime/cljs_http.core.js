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
var temp__5720__auto__ = (function (){var fexpr__39962 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__39962.cljs$core$IFn$_invoke$arity$1 ? fexpr__39962.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__39962.call(null,channel));
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
return (function (p__39963){
var vec__39964 = p__39963;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39964,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39964,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__39977 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__39977)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__39977)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__39977)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__39977)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__39977)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__39977)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39977)].join('')));

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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__39989){
var map__39990 = p__39989;
var map__39990__$1 = (((((!((map__39990 == null))))?(((((map__39990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39990):map__39990);
var request = map__39990__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39990__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39990__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39990__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__39992 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__39992,default_headers);

cljs_http.core.apply_response_type_BANG_(G__39992,response_type);

G__39992.setTimeoutInterval(timeout);

G__39992.setWithCredentials(send_credentials);

return G__39992;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__39997){
var map__39999 = p__39997;
var map__39999__$1 = (((((!((map__39999 == null))))?(((((map__39999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39999):map__39999);
var request = map__39999__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39999__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39999__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39999__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39999__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39999__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39999__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
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

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__39999,map__39999__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__40017 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__40017) : cljs_http.core.error_kw.call(null,G__40017));
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
});})(channel,request_url,method,headers__$1,xhr,map__39999,map__39999__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_40097 = ((function (channel,request_url,method,headers__$1,xhr,map__39999,map__39999__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});})(channel,request_url,method,headers__$1,xhr,map__39999,map__39999__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__40039_40098 = xhr;
G__40039_40098.setProgressEventsEnabled(true);

G__40039_40098.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_40097,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__40039_40098.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_40097,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__31479__auto___40099 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31479__auto___40099,channel,request_url,method,headers__$1,xhr,map__39999,map__39999__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__31480__auto__ = (function (){var switch__31378__auto__ = ((function (c__31479__auto___40099,channel,request_url,method,headers__$1,xhr,map__39999,map__39999__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_40050){
var state_val_40051 = (state_40050[(1)]);
if((state_val_40051 === (1))){
var state_40050__$1 = state_40050;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40050__$1,(2),cancel);
} else {
if((state_val_40051 === (2))){
var inst_40041 = (state_40050[(2)]);
var inst_40042 = xhr.isComplete();
var inst_40043 = cljs.core.not(inst_40042);
var state_40050__$1 = (function (){var statearr_40052 = state_40050;
(statearr_40052[(7)] = inst_40041);

return statearr_40052;
})();
if(inst_40043){
var statearr_40053_40101 = state_40050__$1;
(statearr_40053_40101[(1)] = (3));

} else {
var statearr_40054_40102 = state_40050__$1;
(statearr_40054_40102[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40051 === (3))){
var inst_40045 = xhr.abort();
var state_40050__$1 = state_40050;
var statearr_40055_40103 = state_40050__$1;
(statearr_40055_40103[(2)] = inst_40045);

(statearr_40055_40103[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40051 === (4))){
var state_40050__$1 = state_40050;
var statearr_40056_40105 = state_40050__$1;
(statearr_40056_40105[(2)] = null);

(statearr_40056_40105[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40051 === (5))){
var inst_40048 = (state_40050[(2)]);
var state_40050__$1 = state_40050;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40050__$1,inst_40048);
} else {
return null;
}
}
}
}
}
});})(c__31479__auto___40099,channel,request_url,method,headers__$1,xhr,map__39999,map__39999__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__31378__auto__,c__31479__auto___40099,channel,request_url,method,headers__$1,xhr,map__39999,map__39999__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__31379__auto__ = null;
var cljs_http$core$xhr_$_state_machine__31379__auto____0 = (function (){
var statearr_40057 = [null,null,null,null,null,null,null,null];
(statearr_40057[(0)] = cljs_http$core$xhr_$_state_machine__31379__auto__);

(statearr_40057[(1)] = (1));

return statearr_40057;
});
var cljs_http$core$xhr_$_state_machine__31379__auto____1 = (function (state_40050){
while(true){
var ret_value__31380__auto__ = (function (){try{while(true){
var result__31381__auto__ = switch__31378__auto__(state_40050);
if(cljs.core.keyword_identical_QMARK_(result__31381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31381__auto__;
}
break;
}
}catch (e40058){if((e40058 instanceof Object)){
var ex__31382__auto__ = e40058;
var statearr_40059_40109 = state_40050;
(statearr_40059_40109[(5)] = ex__31382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40058;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40111 = state_40050;
state_40050 = G__40111;
continue;
} else {
return ret_value__31380__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__31379__auto__ = function(state_40050){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__31379__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__31379__auto____1.call(this,state_40050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__31379__auto____0;
cljs_http$core$xhr_$_state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__31379__auto____1;
return cljs_http$core$xhr_$_state_machine__31379__auto__;
})()
;})(switch__31378__auto__,c__31479__auto___40099,channel,request_url,method,headers__$1,xhr,map__39999,map__39999__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__31481__auto__ = (function (){var statearr_40060 = (f__31480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31480__auto__.cljs$core$IFn$_invoke$arity$0() : f__31480__auto__.call(null));
(statearr_40060[(6)] = c__31479__auto___40099);

return statearr_40060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31481__auto__);
});})(c__31479__auto___40099,channel,request_url,method,headers__$1,xhr,map__39999,map__39999__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__40061){
var map__40062 = p__40061;
var map__40062__$1 = (((((!((map__40062 == null))))?(((((map__40062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40062):map__40062);
var request = map__40062__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40062__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40062__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40062__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40062__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_40112 = jsonp.send(null,((function (channel,jsonp,map__40062,map__40062__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__40062,map__40062__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__40062,map__40062__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__40062,map__40062__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_40112], null));

if(cljs.core.truth_(cancel)){
var c__31479__auto___40113 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31479__auto___40113,req_40112,channel,jsonp,map__40062,map__40062__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__31480__auto__ = (function (){var switch__31378__auto__ = ((function (c__31479__auto___40113,req_40112,channel,jsonp,map__40062,map__40062__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_40069){
var state_val_40070 = (state_40069[(1)]);
if((state_val_40070 === (1))){
var state_40069__$1 = state_40069;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40069__$1,(2),cancel);
} else {
if((state_val_40070 === (2))){
var inst_40066 = (state_40069[(2)]);
var inst_40067 = jsonp.cancel(req_40112);
var state_40069__$1 = (function (){var statearr_40071 = state_40069;
(statearr_40071[(7)] = inst_40066);

return statearr_40071;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40069__$1,inst_40067);
} else {
return null;
}
}
});})(c__31479__auto___40113,req_40112,channel,jsonp,map__40062,map__40062__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__31378__auto__,c__31479__auto___40113,req_40112,channel,jsonp,map__40062,map__40062__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__31379__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__31379__auto____0 = (function (){
var statearr_40072 = [null,null,null,null,null,null,null,null];
(statearr_40072[(0)] = cljs_http$core$jsonp_$_state_machine__31379__auto__);

(statearr_40072[(1)] = (1));

return statearr_40072;
});
var cljs_http$core$jsonp_$_state_machine__31379__auto____1 = (function (state_40069){
while(true){
var ret_value__31380__auto__ = (function (){try{while(true){
var result__31381__auto__ = switch__31378__auto__(state_40069);
if(cljs.core.keyword_identical_QMARK_(result__31381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31381__auto__;
}
break;
}
}catch (e40073){if((e40073 instanceof Object)){
var ex__31382__auto__ = e40073;
var statearr_40074_40116 = state_40069;
(statearr_40074_40116[(5)] = ex__31382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40073;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40117 = state_40069;
state_40069 = G__40117;
continue;
} else {
return ret_value__31380__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__31379__auto__ = function(state_40069){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__31379__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__31379__auto____1.call(this,state_40069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__31379__auto____0;
cljs_http$core$jsonp_$_state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__31379__auto____1;
return cljs_http$core$jsonp_$_state_machine__31379__auto__;
})()
;})(switch__31378__auto__,c__31479__auto___40113,req_40112,channel,jsonp,map__40062,map__40062__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__31481__auto__ = (function (){var statearr_40075 = (f__31480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31480__auto__.cljs$core$IFn$_invoke$arity$0() : f__31480__auto__.call(null));
(statearr_40075[(6)] = c__31479__auto___40113);

return statearr_40075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31481__auto__);
});})(c__31479__auto___40113,req_40112,channel,jsonp,map__40062,map__40062__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__40076){
var map__40077 = p__40076;
var map__40077__$1 = (((((!((map__40077 == null))))?(((((map__40077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40077):map__40077);
var request = map__40077__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40077__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
