goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__28589 = e.target.readyState;
var fexpr__28588 = new cljs.core.PersistentArrayMap(null, 6, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276),new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162),true], null);
return (fexpr__28588.cljs$core$IFn$_invoke$arity$1 ? fexpr__28588.cljs$core$IFn$_invoke$arity$1(G__28589) : fexpr__28588.call(null,G__28589));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__28602,handler){
var map__28603 = p__28602;
var map__28603__$1 = (((((!((map__28603 == null))))?(((((map__28603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28603):map__28603);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28603__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28603__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28603__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28603__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28603__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28603__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28603__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__28603,map__28603__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__28600_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__28600_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__28603,map__28603__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5720__auto___28641 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5720__auto___28641)){
var response_type_28642 = temp__5720__auto___28641;
this$__$1.responseType = cljs.core.name(response_type_28642);
} else {
}

var seq__28609_28643 = cljs.core.seq(headers);
var chunk__28610_28644 = null;
var count__28611_28645 = (0);
var i__28612_28646 = (0);
while(true){
if((i__28612_28646 < count__28611_28645)){
var vec__28622_28647 = chunk__28610_28644.cljs$core$IIndexed$_nth$arity$2(null,i__28612_28646);
var k_28648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28622_28647,(0),null);
var v_28649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28622_28647,(1),null);
this$__$1.setRequestHeader(k_28648,v_28649);


var G__28650 = seq__28609_28643;
var G__28651 = chunk__28610_28644;
var G__28652 = count__28611_28645;
var G__28653 = (i__28612_28646 + (1));
seq__28609_28643 = G__28650;
chunk__28610_28644 = G__28651;
count__28611_28645 = G__28652;
i__28612_28646 = G__28653;
continue;
} else {
var temp__5720__auto___28654 = cljs.core.seq(seq__28609_28643);
if(temp__5720__auto___28654){
var seq__28609_28655__$1 = temp__5720__auto___28654;
if(cljs.core.chunked_seq_QMARK_(seq__28609_28655__$1)){
var c__4550__auto___28656 = cljs.core.chunk_first(seq__28609_28655__$1);
var G__28657 = cljs.core.chunk_rest(seq__28609_28655__$1);
var G__28658 = c__4550__auto___28656;
var G__28659 = cljs.core.count(c__4550__auto___28656);
var G__28660 = (0);
seq__28609_28643 = G__28657;
chunk__28610_28644 = G__28658;
count__28611_28645 = G__28659;
i__28612_28646 = G__28660;
continue;
} else {
var vec__28625_28661 = cljs.core.first(seq__28609_28655__$1);
var k_28662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28625_28661,(0),null);
var v_28663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28625_28661,(1),null);
this$__$1.setRequestHeader(k_28662,v_28663);


var G__28664 = cljs.core.next(seq__28609_28655__$1);
var G__28665 = null;
var G__28666 = (0);
var G__28667 = (0);
seq__28609_28643 = G__28664;
chunk__28610_28644 = G__28665;
count__28611_28645 = G__28666;
i__28612_28646 = G__28667;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4131__auto__ = body;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});

//# sourceMappingURL=ajax.xml_http_request.js.map
