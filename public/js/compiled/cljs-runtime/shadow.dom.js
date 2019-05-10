goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33088 = coll;
var G__33089 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33088,G__33089) : shadow.dom.lazy_native_coll_seq.call(null,G__33088,G__33089));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33110 = arguments.length;
switch (G__33110) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33121 = arguments.length;
switch (G__33121) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33123 = arguments.length;
switch (G__33123) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33130 = arguments.length;
switch (G__33130) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33137 = arguments.length;
switch (G__33137) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__33138 = document;
var G__33139 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33138,G__33139);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__33140 = shadow.dom.dom_node(parent);
var G__33141 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33140,G__33141);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__33142 = shadow.dom.dom_node(el);
var G__33143 = cls;
return goog.dom.classlist.add(G__33142,G__33143);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__33144 = shadow.dom.dom_node(el);
var G__33145 = cls;
return goog.dom.classlist.remove(G__33144,G__33145);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33147 = arguments.length;
switch (G__33147) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__33148 = shadow.dom.dom_node(el);
var G__33149 = cls;
return goog.dom.classlist.toggle(G__33148,G__33149);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33154){if((e33154 instanceof Object)){
var e = e33154;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33154;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33160 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33161 = null;
var count__33162 = (0);
var i__33163 = (0);
while(true){
if((i__33163 < count__33162)){
var el = chunk__33161.cljs$core$IIndexed$_nth$arity$2(null,i__33163);
var handler_33752__$1 = ((function (seq__33160,chunk__33161,count__33162,i__33163,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33160,chunk__33161,count__33162,i__33163,el))
;
var G__33175_33753 = el;
var G__33176_33754 = cljs.core.name(ev);
var G__33177_33755 = handler_33752__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33175_33753,G__33176_33754,G__33177_33755) : shadow.dom.dom_listen.call(null,G__33175_33753,G__33176_33754,G__33177_33755));


var G__33756 = seq__33160;
var G__33757 = chunk__33161;
var G__33758 = count__33162;
var G__33759 = (i__33163 + (1));
seq__33160 = G__33756;
chunk__33161 = G__33757;
count__33162 = G__33758;
i__33163 = G__33759;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33160);
if(temp__5720__auto__){
var seq__33160__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33160__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33160__$1);
var G__33760 = cljs.core.chunk_rest(seq__33160__$1);
var G__33761 = c__4550__auto__;
var G__33762 = cljs.core.count(c__4550__auto__);
var G__33763 = (0);
seq__33160 = G__33760;
chunk__33161 = G__33761;
count__33162 = G__33762;
i__33163 = G__33763;
continue;
} else {
var el = cljs.core.first(seq__33160__$1);
var handler_33764__$1 = ((function (seq__33160,chunk__33161,count__33162,i__33163,el,seq__33160__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33160,chunk__33161,count__33162,i__33163,el,seq__33160__$1,temp__5720__auto__))
;
var G__33179_33765 = el;
var G__33180_33766 = cljs.core.name(ev);
var G__33181_33767 = handler_33764__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33179_33765,G__33180_33766,G__33181_33767) : shadow.dom.dom_listen.call(null,G__33179_33765,G__33180_33766,G__33181_33767));


var G__33768 = cljs.core.next(seq__33160__$1);
var G__33769 = null;
var G__33770 = (0);
var G__33771 = (0);
seq__33160 = G__33768;
chunk__33161 = G__33769;
count__33162 = G__33770;
i__33163 = G__33771;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33185 = arguments.length;
switch (G__33185) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__33189 = shadow.dom.dom_node(el);
var G__33190 = cljs.core.name(ev);
var G__33191 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33189,G__33190,G__33191) : shadow.dom.dom_listen.call(null,G__33189,G__33190,G__33191));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__33195 = shadow.dom.dom_node(el);
var G__33196 = cljs.core.name(ev);
var G__33197 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__33195,G__33196,G__33197) : shadow.dom.dom_listen_remove.call(null,G__33195,G__33196,G__33197));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33199 = cljs.core.seq(events);
var chunk__33200 = null;
var count__33201 = (0);
var i__33202 = (0);
while(true){
if((i__33202 < count__33201)){
var vec__33213 = chunk__33200.cljs$core$IIndexed$_nth$arity$2(null,i__33202);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33213,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33213,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33773 = seq__33199;
var G__33774 = chunk__33200;
var G__33775 = count__33201;
var G__33776 = (i__33202 + (1));
seq__33199 = G__33773;
chunk__33200 = G__33774;
count__33201 = G__33775;
i__33202 = G__33776;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33199);
if(temp__5720__auto__){
var seq__33199__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33199__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33199__$1);
var G__33777 = cljs.core.chunk_rest(seq__33199__$1);
var G__33778 = c__4550__auto__;
var G__33779 = cljs.core.count(c__4550__auto__);
var G__33780 = (0);
seq__33199 = G__33777;
chunk__33200 = G__33778;
count__33201 = G__33779;
i__33202 = G__33780;
continue;
} else {
var vec__33219 = cljs.core.first(seq__33199__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33219,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33219,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33795 = cljs.core.next(seq__33199__$1);
var G__33796 = null;
var G__33797 = (0);
var G__33798 = (0);
seq__33199 = G__33795;
chunk__33200 = G__33796;
count__33201 = G__33797;
i__33202 = G__33798;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33225 = cljs.core.seq(styles);
var chunk__33226 = null;
var count__33227 = (0);
var i__33228 = (0);
while(true){
if((i__33228 < count__33227)){
var vec__33245 = chunk__33226.cljs$core$IIndexed$_nth$arity$2(null,i__33228);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33245,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33245,(1),null);
var G__33249_33799 = dom;
var G__33250_33800 = cljs.core.name(k);
var G__33251_33801 = (((v == null))?"":v);
goog.style.setStyle(G__33249_33799,G__33250_33800,G__33251_33801);


var G__33802 = seq__33225;
var G__33803 = chunk__33226;
var G__33804 = count__33227;
var G__33805 = (i__33228 + (1));
seq__33225 = G__33802;
chunk__33226 = G__33803;
count__33227 = G__33804;
i__33228 = G__33805;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33225);
if(temp__5720__auto__){
var seq__33225__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33225__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33225__$1);
var G__33808 = cljs.core.chunk_rest(seq__33225__$1);
var G__33809 = c__4550__auto__;
var G__33810 = cljs.core.count(c__4550__auto__);
var G__33811 = (0);
seq__33225 = G__33808;
chunk__33226 = G__33809;
count__33227 = G__33810;
i__33228 = G__33811;
continue;
} else {
var vec__33253 = cljs.core.first(seq__33225__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33253,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33253,(1),null);
var G__33256_33812 = dom;
var G__33257_33813 = cljs.core.name(k);
var G__33258_33814 = (((v == null))?"":v);
goog.style.setStyle(G__33256_33812,G__33257_33813,G__33258_33814);


var G__33816 = cljs.core.next(seq__33225__$1);
var G__33817 = null;
var G__33818 = (0);
var G__33819 = (0);
seq__33225 = G__33816;
chunk__33226 = G__33817;
count__33227 = G__33818;
i__33228 = G__33819;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33260_33820 = key;
var G__33260_33821__$1 = (((G__33260_33820 instanceof cljs.core.Keyword))?G__33260_33820.fqn:null);
switch (G__33260_33821__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33829 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_33829,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_33829,"aria-");
}
})())){
el.setAttribute(ks_33829,value);
} else {
(el[ks_33829] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__33266 = shadow.dom.dom_node(el);
var G__33267 = cls;
return goog.dom.classlist.contains(G__33266,G__33267);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33278){
var map__33280 = p__33278;
var map__33280__$1 = (((((!((map__33280 == null))))?(((((map__33280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33280):map__33280);
var props = map__33280__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33280__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33282 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33282,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33282,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33282,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33287 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33287,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33287;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33289 = arguments.length;
switch (G__33289) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33297){
var vec__33298 = p__33297;
var seq__33299 = cljs.core.seq(vec__33298);
var first__33300 = cljs.core.first(seq__33299);
var seq__33299__$1 = cljs.core.next(seq__33299);
var nn = first__33300;
var first__33300__$1 = cljs.core.first(seq__33299__$1);
var seq__33299__$2 = cljs.core.next(seq__33299__$1);
var np = first__33300__$1;
var nc = seq__33299__$2;
var node = vec__33298;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33303 = nn;
var G__33304 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33303,G__33304) : create_fn.call(null,G__33303,G__33304));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33306 = nn;
var G__33307 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33306,G__33307) : create_fn.call(null,G__33306,G__33307));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33310 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33310,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33310,(1),null);
var seq__33313_33860 = cljs.core.seq(node_children);
var chunk__33314_33861 = null;
var count__33315_33862 = (0);
var i__33316_33863 = (0);
while(true){
if((i__33316_33863 < count__33315_33862)){
var child_struct_33864 = chunk__33314_33861.cljs$core$IIndexed$_nth$arity$2(null,i__33316_33863);
var children_33867 = shadow.dom.dom_node(child_struct_33864);
if(cljs.core.seq_QMARK_(children_33867)){
var seq__33345_33868 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33867));
var chunk__33347_33869 = null;
var count__33348_33870 = (0);
var i__33349_33871 = (0);
while(true){
if((i__33349_33871 < count__33348_33870)){
var child_33872 = chunk__33347_33869.cljs$core$IIndexed$_nth$arity$2(null,i__33349_33871);
if(cljs.core.truth_(child_33872)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33872);


var G__33873 = seq__33345_33868;
var G__33874 = chunk__33347_33869;
var G__33875 = count__33348_33870;
var G__33876 = (i__33349_33871 + (1));
seq__33345_33868 = G__33873;
chunk__33347_33869 = G__33874;
count__33348_33870 = G__33875;
i__33349_33871 = G__33876;
continue;
} else {
var G__33877 = seq__33345_33868;
var G__33878 = chunk__33347_33869;
var G__33879 = count__33348_33870;
var G__33880 = (i__33349_33871 + (1));
seq__33345_33868 = G__33877;
chunk__33347_33869 = G__33878;
count__33348_33870 = G__33879;
i__33349_33871 = G__33880;
continue;
}
} else {
var temp__5720__auto___33881 = cljs.core.seq(seq__33345_33868);
if(temp__5720__auto___33881){
var seq__33345_33882__$1 = temp__5720__auto___33881;
if(cljs.core.chunked_seq_QMARK_(seq__33345_33882__$1)){
var c__4550__auto___33883 = cljs.core.chunk_first(seq__33345_33882__$1);
var G__33884 = cljs.core.chunk_rest(seq__33345_33882__$1);
var G__33885 = c__4550__auto___33883;
var G__33886 = cljs.core.count(c__4550__auto___33883);
var G__33887 = (0);
seq__33345_33868 = G__33884;
chunk__33347_33869 = G__33885;
count__33348_33870 = G__33886;
i__33349_33871 = G__33887;
continue;
} else {
var child_33889 = cljs.core.first(seq__33345_33882__$1);
if(cljs.core.truth_(child_33889)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33889);


var G__33905 = cljs.core.next(seq__33345_33882__$1);
var G__33906 = null;
var G__33907 = (0);
var G__33908 = (0);
seq__33345_33868 = G__33905;
chunk__33347_33869 = G__33906;
count__33348_33870 = G__33907;
i__33349_33871 = G__33908;
continue;
} else {
var G__33909 = cljs.core.next(seq__33345_33882__$1);
var G__33910 = null;
var G__33911 = (0);
var G__33912 = (0);
seq__33345_33868 = G__33909;
chunk__33347_33869 = G__33910;
count__33348_33870 = G__33911;
i__33349_33871 = G__33912;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33867);
}


var G__33917 = seq__33313_33860;
var G__33918 = chunk__33314_33861;
var G__33919 = count__33315_33862;
var G__33920 = (i__33316_33863 + (1));
seq__33313_33860 = G__33917;
chunk__33314_33861 = G__33918;
count__33315_33862 = G__33919;
i__33316_33863 = G__33920;
continue;
} else {
var temp__5720__auto___33921 = cljs.core.seq(seq__33313_33860);
if(temp__5720__auto___33921){
var seq__33313_33922__$1 = temp__5720__auto___33921;
if(cljs.core.chunked_seq_QMARK_(seq__33313_33922__$1)){
var c__4550__auto___33923 = cljs.core.chunk_first(seq__33313_33922__$1);
var G__33924 = cljs.core.chunk_rest(seq__33313_33922__$1);
var G__33925 = c__4550__auto___33923;
var G__33926 = cljs.core.count(c__4550__auto___33923);
var G__33927 = (0);
seq__33313_33860 = G__33924;
chunk__33314_33861 = G__33925;
count__33315_33862 = G__33926;
i__33316_33863 = G__33927;
continue;
} else {
var child_struct_33928 = cljs.core.first(seq__33313_33922__$1);
var children_33929 = shadow.dom.dom_node(child_struct_33928);
if(cljs.core.seq_QMARK_(children_33929)){
var seq__33354_33931 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33929));
var chunk__33356_33932 = null;
var count__33357_33933 = (0);
var i__33358_33934 = (0);
while(true){
if((i__33358_33934 < count__33357_33933)){
var child_33935 = chunk__33356_33932.cljs$core$IIndexed$_nth$arity$2(null,i__33358_33934);
if(cljs.core.truth_(child_33935)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33935);


var G__33936 = seq__33354_33931;
var G__33937 = chunk__33356_33932;
var G__33938 = count__33357_33933;
var G__33939 = (i__33358_33934 + (1));
seq__33354_33931 = G__33936;
chunk__33356_33932 = G__33937;
count__33357_33933 = G__33938;
i__33358_33934 = G__33939;
continue;
} else {
var G__33940 = seq__33354_33931;
var G__33941 = chunk__33356_33932;
var G__33942 = count__33357_33933;
var G__33943 = (i__33358_33934 + (1));
seq__33354_33931 = G__33940;
chunk__33356_33932 = G__33941;
count__33357_33933 = G__33942;
i__33358_33934 = G__33943;
continue;
}
} else {
var temp__5720__auto___33944__$1 = cljs.core.seq(seq__33354_33931);
if(temp__5720__auto___33944__$1){
var seq__33354_33945__$1 = temp__5720__auto___33944__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33354_33945__$1)){
var c__4550__auto___33947 = cljs.core.chunk_first(seq__33354_33945__$1);
var G__33948 = cljs.core.chunk_rest(seq__33354_33945__$1);
var G__33949 = c__4550__auto___33947;
var G__33950 = cljs.core.count(c__4550__auto___33947);
var G__33951 = (0);
seq__33354_33931 = G__33948;
chunk__33356_33932 = G__33949;
count__33357_33933 = G__33950;
i__33358_33934 = G__33951;
continue;
} else {
var child_33952 = cljs.core.first(seq__33354_33945__$1);
if(cljs.core.truth_(child_33952)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33952);


var G__33956 = cljs.core.next(seq__33354_33945__$1);
var G__33957 = null;
var G__33958 = (0);
var G__33959 = (0);
seq__33354_33931 = G__33956;
chunk__33356_33932 = G__33957;
count__33357_33933 = G__33958;
i__33358_33934 = G__33959;
continue;
} else {
var G__33960 = cljs.core.next(seq__33354_33945__$1);
var G__33961 = null;
var G__33962 = (0);
var G__33963 = (0);
seq__33354_33931 = G__33960;
chunk__33356_33932 = G__33961;
count__33357_33933 = G__33962;
i__33358_33934 = G__33963;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33929);
}


var G__33965 = cljs.core.next(seq__33313_33922__$1);
var G__33966 = null;
var G__33967 = (0);
var G__33968 = (0);
seq__33313_33860 = G__33965;
chunk__33314_33861 = G__33966;
count__33315_33862 = G__33967;
i__33316_33863 = G__33968;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__33360 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__33360);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33362 = cljs.core.seq(node);
var chunk__33364 = null;
var count__33365 = (0);
var i__33366 = (0);
while(true){
if((i__33366 < count__33365)){
var n = chunk__33364.cljs$core$IIndexed$_nth$arity$2(null,i__33366);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33991 = seq__33362;
var G__33992 = chunk__33364;
var G__33993 = count__33365;
var G__33994 = (i__33366 + (1));
seq__33362 = G__33991;
chunk__33364 = G__33992;
count__33365 = G__33993;
i__33366 = G__33994;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33362);
if(temp__5720__auto__){
var seq__33362__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33362__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33362__$1);
var G__33996 = cljs.core.chunk_rest(seq__33362__$1);
var G__33997 = c__4550__auto__;
var G__33998 = cljs.core.count(c__4550__auto__);
var G__33999 = (0);
seq__33362 = G__33996;
chunk__33364 = G__33997;
count__33365 = G__33998;
i__33366 = G__33999;
continue;
} else {
var n = cljs.core.first(seq__33362__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34001 = cljs.core.next(seq__33362__$1);
var G__34002 = null;
var G__34003 = (0);
var G__34004 = (0);
seq__33362 = G__34001;
chunk__33364 = G__34002;
count__33365 = G__34003;
i__33366 = G__34004;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__33372 = shadow.dom.dom_node(new$);
var G__33373 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__33372,G__33373);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33376 = arguments.length;
switch (G__33376) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33382 = arguments.length;
switch (G__33382) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33392 = arguments.length;
switch (G__33392) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34031 = arguments.length;
var i__4731__auto___34032 = (0);
while(true){
if((i__4731__auto___34032 < len__4730__auto___34031)){
args__4736__auto__.push((arguments[i__4731__auto___34032]));

var G__34033 = (i__4731__auto___34032 + (1));
i__4731__auto___34032 = G__34033;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33409_34034 = cljs.core.seq(nodes);
var chunk__33410_34035 = null;
var count__33411_34036 = (0);
var i__33412_34037 = (0);
while(true){
if((i__33412_34037 < count__33411_34036)){
var node_34038 = chunk__33410_34035.cljs$core$IIndexed$_nth$arity$2(null,i__33412_34037);
fragment.appendChild(shadow.dom._to_dom(node_34038));


var G__34039 = seq__33409_34034;
var G__34040 = chunk__33410_34035;
var G__34041 = count__33411_34036;
var G__34042 = (i__33412_34037 + (1));
seq__33409_34034 = G__34039;
chunk__33410_34035 = G__34040;
count__33411_34036 = G__34041;
i__33412_34037 = G__34042;
continue;
} else {
var temp__5720__auto___34043 = cljs.core.seq(seq__33409_34034);
if(temp__5720__auto___34043){
var seq__33409_34044__$1 = temp__5720__auto___34043;
if(cljs.core.chunked_seq_QMARK_(seq__33409_34044__$1)){
var c__4550__auto___34045 = cljs.core.chunk_first(seq__33409_34044__$1);
var G__34046 = cljs.core.chunk_rest(seq__33409_34044__$1);
var G__34047 = c__4550__auto___34045;
var G__34048 = cljs.core.count(c__4550__auto___34045);
var G__34049 = (0);
seq__33409_34034 = G__34046;
chunk__33410_34035 = G__34047;
count__33411_34036 = G__34048;
i__33412_34037 = G__34049;
continue;
} else {
var node_34052 = cljs.core.first(seq__33409_34044__$1);
fragment.appendChild(shadow.dom._to_dom(node_34052));


var G__34053 = cljs.core.next(seq__33409_34044__$1);
var G__34054 = null;
var G__34055 = (0);
var G__34056 = (0);
seq__33409_34034 = G__34053;
chunk__33410_34035 = G__34054;
count__33411_34036 = G__34055;
i__33412_34037 = G__34056;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq33404){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33404));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33421_34057 = cljs.core.seq(scripts);
var chunk__33422_34058 = null;
var count__33423_34059 = (0);
var i__33424_34060 = (0);
while(true){
if((i__33424_34060 < count__33423_34059)){
var vec__33437_34061 = chunk__33422_34058.cljs$core$IIndexed$_nth$arity$2(null,i__33424_34060);
var script_tag_34062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33437_34061,(0),null);
var script_body_34063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33437_34061,(1),null);
eval(script_body_34063);


var G__34065 = seq__33421_34057;
var G__34066 = chunk__33422_34058;
var G__34067 = count__33423_34059;
var G__34068 = (i__33424_34060 + (1));
seq__33421_34057 = G__34065;
chunk__33422_34058 = G__34066;
count__33423_34059 = G__34067;
i__33424_34060 = G__34068;
continue;
} else {
var temp__5720__auto___34069 = cljs.core.seq(seq__33421_34057);
if(temp__5720__auto___34069){
var seq__33421_34070__$1 = temp__5720__auto___34069;
if(cljs.core.chunked_seq_QMARK_(seq__33421_34070__$1)){
var c__4550__auto___34071 = cljs.core.chunk_first(seq__33421_34070__$1);
var G__34072 = cljs.core.chunk_rest(seq__33421_34070__$1);
var G__34073 = c__4550__auto___34071;
var G__34074 = cljs.core.count(c__4550__auto___34071);
var G__34075 = (0);
seq__33421_34057 = G__34072;
chunk__33422_34058 = G__34073;
count__33423_34059 = G__34074;
i__33424_34060 = G__34075;
continue;
} else {
var vec__33442_34076 = cljs.core.first(seq__33421_34070__$1);
var script_tag_34077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33442_34076,(0),null);
var script_body_34078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33442_34076,(1),null);
eval(script_body_34078);


var G__34079 = cljs.core.next(seq__33421_34070__$1);
var G__34080 = null;
var G__34081 = (0);
var G__34082 = (0);
seq__33421_34057 = G__34079;
chunk__33422_34058 = G__34080;
count__33423_34059 = G__34081;
i__33424_34060 = G__34082;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__33446){
var vec__33447 = p__33446;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33447,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33447,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__33455 = shadow.dom.dom_node(el);
var G__33456 = cls;
return goog.dom.getAncestorByClass(G__33455,G__33456);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33460 = arguments.length;
switch (G__33460) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__33461 = shadow.dom.dom_node(el);
var G__33462 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__33461,G__33462);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__33463 = shadow.dom.dom_node(el);
var G__33464 = cljs.core.name(tag);
var G__33465 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__33463,G__33464,G__33465);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__33466 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__33466);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__33467 = shadow.dom.dom_node(dom);
var G__33468 = value;
return goog.dom.forms.setValue(G__33467,G__33468);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33472 = cljs.core.seq(style_keys);
var chunk__33473 = null;
var count__33474 = (0);
var i__33475 = (0);
while(true){
if((i__33475 < count__33474)){
var it = chunk__33473.cljs$core$IIndexed$_nth$arity$2(null,i__33475);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34106 = seq__33472;
var G__34107 = chunk__33473;
var G__34108 = count__33474;
var G__34109 = (i__33475 + (1));
seq__33472 = G__34106;
chunk__33473 = G__34107;
count__33474 = G__34108;
i__33475 = G__34109;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33472);
if(temp__5720__auto__){
var seq__33472__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33472__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33472__$1);
var G__34110 = cljs.core.chunk_rest(seq__33472__$1);
var G__34111 = c__4550__auto__;
var G__34112 = cljs.core.count(c__4550__auto__);
var G__34113 = (0);
seq__33472 = G__34110;
chunk__33473 = G__34111;
count__33474 = G__34112;
i__33475 = G__34113;
continue;
} else {
var it = cljs.core.first(seq__33472__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34114 = cljs.core.next(seq__33472__$1);
var G__34115 = null;
var G__34116 = (0);
var G__34117 = (0);
seq__33472 = G__34114;
chunk__33473 = G__34115;
count__33474 = G__34116;
i__33475 = G__34117;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k33480,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__33484 = k33480;
var G__33484__$1 = (((G__33484 instanceof cljs.core.Keyword))?G__33484.fqn:null);
switch (G__33484__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33480,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__33485){
var vec__33486 = p__33485;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33486,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33486,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33479){
var self__ = this;
var G__33479__$1 = this;
return (new cljs.core.RecordIter((0),G__33479__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__33489 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__33489(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33481,other33482){
var self__ = this;
var this33481__$1 = this;
return (((!((other33482 == null)))) && ((this33481__$1.constructor === other33482.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33481__$1.x,other33482.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33481__$1.y,other33482.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33481__$1.__extmap,other33482.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__33479){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__33491 = cljs.core.keyword_identical_QMARK_;
var expr__33492 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__33494 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__33495 = expr__33492;
return (pred__33491.cljs$core$IFn$_invoke$arity$2 ? pred__33491.cljs$core$IFn$_invoke$arity$2(G__33494,G__33495) : pred__33491.call(null,G__33494,G__33495));
})())){
return (new shadow.dom.Coordinate(G__33479,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33496 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__33497 = expr__33492;
return (pred__33491.cljs$core$IFn$_invoke$arity$2 ? pred__33491.cljs$core$IFn$_invoke$arity$2(G__33496,G__33497) : pred__33491.call(null,G__33496,G__33497));
})())){
return (new shadow.dom.Coordinate(self__.x,G__33479,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__33479),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__33479){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33479,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33483){
var extmap__4424__auto__ = (function (){var G__33509 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33483,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33483)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33509);
} else {
return G__33509;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33483),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33483),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__33512 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__33512);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__33516 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__33516);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__33517 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__33517);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k33521,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__33530 = k33521;
var G__33530__$1 = (((G__33530 instanceof cljs.core.Keyword))?G__33530.fqn:null);
switch (G__33530__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33521,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__33534){
var vec__33535 = p__33534;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33535,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33535,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33520){
var self__ = this;
var G__33520__$1 = this;
return (new cljs.core.RecordIter((0),G__33520__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__33548 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__33548(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33522,other33523){
var self__ = this;
var this33522__$1 = this;
return (((!((other33523 == null)))) && ((this33522__$1.constructor === other33523.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33522__$1.w,other33523.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33522__$1.h,other33523.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33522__$1.__extmap,other33523.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__33520){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__33553 = cljs.core.keyword_identical_QMARK_;
var expr__33554 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__33556 = new cljs.core.Keyword(null,"w","w",354169001);
var G__33557 = expr__33554;
return (pred__33553.cljs$core$IFn$_invoke$arity$2 ? pred__33553.cljs$core$IFn$_invoke$arity$2(G__33556,G__33557) : pred__33553.call(null,G__33556,G__33557));
})())){
return (new shadow.dom.Size(G__33520,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33559 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__33560 = expr__33554;
return (pred__33553.cljs$core$IFn$_invoke$arity$2 ? pred__33553.cljs$core$IFn$_invoke$arity$2(G__33559,G__33560) : pred__33553.call(null,G__33559,G__33560));
})())){
return (new shadow.dom.Size(self__.w,G__33520,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__33520),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__33520){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33520,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33525){
var extmap__4424__auto__ = (function (){var G__33566 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33525,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33525)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33566);
} else {
return G__33566;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33525),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33525),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__33569 = shadow.dom.dom_node(el);
return goog.style.getSize(G__33569);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__34168 = (i + (1));
var G__34169 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34168;
ret = G__34169;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33575){
var vec__33576 = p__33575;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33576,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33576,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33581 = arguments.length;
switch (G__33581) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33582_34171 = new_node;
var G__33583_34172 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__33582_34171,G__33583_34172);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33584_34176 = new_node;
var G__33585_34177 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__33584_34176,G__33585_34177);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5718__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34178 = ps;
var G__34179 = (i + (1));
el__$1 = G__34178;
i = G__34179;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__33595 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__33595);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__33603 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__33603);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__33606 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__33606);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33609 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33609,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33609,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33609,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33614_34180 = cljs.core.seq(props);
var chunk__33615_34181 = null;
var count__33616_34182 = (0);
var i__33617_34183 = (0);
while(true){
if((i__33617_34183 < count__33616_34182)){
var vec__33627_34184 = chunk__33615_34181.cljs$core$IIndexed$_nth$arity$2(null,i__33617_34183);
var k_34185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33627_34184,(0),null);
var v_34186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33627_34184,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_34185);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34185),v_34186);


var G__34187 = seq__33614_34180;
var G__34188 = chunk__33615_34181;
var G__34189 = count__33616_34182;
var G__34190 = (i__33617_34183 + (1));
seq__33614_34180 = G__34187;
chunk__33615_34181 = G__34188;
count__33616_34182 = G__34189;
i__33617_34183 = G__34190;
continue;
} else {
var temp__5720__auto___34191 = cljs.core.seq(seq__33614_34180);
if(temp__5720__auto___34191){
var seq__33614_34192__$1 = temp__5720__auto___34191;
if(cljs.core.chunked_seq_QMARK_(seq__33614_34192__$1)){
var c__4550__auto___34193 = cljs.core.chunk_first(seq__33614_34192__$1);
var G__34194 = cljs.core.chunk_rest(seq__33614_34192__$1);
var G__34195 = c__4550__auto___34193;
var G__34196 = cljs.core.count(c__4550__auto___34193);
var G__34197 = (0);
seq__33614_34180 = G__34194;
chunk__33615_34181 = G__34195;
count__33616_34182 = G__34196;
i__33617_34183 = G__34197;
continue;
} else {
var vec__33634_34198 = cljs.core.first(seq__33614_34192__$1);
var k_34199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33634_34198,(0),null);
var v_34200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33634_34198,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_34199);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34199),v_34200);


var G__34201 = cljs.core.next(seq__33614_34192__$1);
var G__34202 = null;
var G__34203 = (0);
var G__34204 = (0);
seq__33614_34180 = G__34201;
chunk__33615_34181 = G__34202;
count__33616_34182 = G__34203;
i__33617_34183 = G__34204;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33641 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33641,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33641,(1),null);
var seq__33644_34205 = cljs.core.seq(node_children);
var chunk__33646_34206 = null;
var count__33647_34207 = (0);
var i__33648_34208 = (0);
while(true){
if((i__33648_34208 < count__33647_34207)){
var child_struct_34209 = chunk__33646_34206.cljs$core$IIndexed$_nth$arity$2(null,i__33648_34208);
if((!((child_struct_34209 == null)))){
if(typeof child_struct_34209 === 'string'){
var text_34210 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34210),child_struct_34209].join(''));
} else {
var children_34211 = shadow.dom.svg_node(child_struct_34209);
if(cljs.core.seq_QMARK_(children_34211)){
var seq__33677_34212 = cljs.core.seq(children_34211);
var chunk__33679_34213 = null;
var count__33680_34214 = (0);
var i__33681_34215 = (0);
while(true){
if((i__33681_34215 < count__33680_34214)){
var child_34233 = chunk__33679_34213.cljs$core$IIndexed$_nth$arity$2(null,i__33681_34215);
if(cljs.core.truth_(child_34233)){
node.appendChild(child_34233);


var G__34234 = seq__33677_34212;
var G__34235 = chunk__33679_34213;
var G__34236 = count__33680_34214;
var G__34237 = (i__33681_34215 + (1));
seq__33677_34212 = G__34234;
chunk__33679_34213 = G__34235;
count__33680_34214 = G__34236;
i__33681_34215 = G__34237;
continue;
} else {
var G__34238 = seq__33677_34212;
var G__34239 = chunk__33679_34213;
var G__34240 = count__33680_34214;
var G__34241 = (i__33681_34215 + (1));
seq__33677_34212 = G__34238;
chunk__33679_34213 = G__34239;
count__33680_34214 = G__34240;
i__33681_34215 = G__34241;
continue;
}
} else {
var temp__5720__auto___34242 = cljs.core.seq(seq__33677_34212);
if(temp__5720__auto___34242){
var seq__33677_34243__$1 = temp__5720__auto___34242;
if(cljs.core.chunked_seq_QMARK_(seq__33677_34243__$1)){
var c__4550__auto___34244 = cljs.core.chunk_first(seq__33677_34243__$1);
var G__34245 = cljs.core.chunk_rest(seq__33677_34243__$1);
var G__34246 = c__4550__auto___34244;
var G__34247 = cljs.core.count(c__4550__auto___34244);
var G__34248 = (0);
seq__33677_34212 = G__34245;
chunk__33679_34213 = G__34246;
count__33680_34214 = G__34247;
i__33681_34215 = G__34248;
continue;
} else {
var child_34249 = cljs.core.first(seq__33677_34243__$1);
if(cljs.core.truth_(child_34249)){
node.appendChild(child_34249);


var G__34251 = cljs.core.next(seq__33677_34243__$1);
var G__34252 = null;
var G__34253 = (0);
var G__34254 = (0);
seq__33677_34212 = G__34251;
chunk__33679_34213 = G__34252;
count__33680_34214 = G__34253;
i__33681_34215 = G__34254;
continue;
} else {
var G__34257 = cljs.core.next(seq__33677_34243__$1);
var G__34258 = null;
var G__34259 = (0);
var G__34260 = (0);
seq__33677_34212 = G__34257;
chunk__33679_34213 = G__34258;
count__33680_34214 = G__34259;
i__33681_34215 = G__34260;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34211);
}
}


var G__34261 = seq__33644_34205;
var G__34262 = chunk__33646_34206;
var G__34263 = count__33647_34207;
var G__34264 = (i__33648_34208 + (1));
seq__33644_34205 = G__34261;
chunk__33646_34206 = G__34262;
count__33647_34207 = G__34263;
i__33648_34208 = G__34264;
continue;
} else {
var G__34265 = seq__33644_34205;
var G__34266 = chunk__33646_34206;
var G__34267 = count__33647_34207;
var G__34268 = (i__33648_34208 + (1));
seq__33644_34205 = G__34265;
chunk__33646_34206 = G__34266;
count__33647_34207 = G__34267;
i__33648_34208 = G__34268;
continue;
}
} else {
var temp__5720__auto___34269 = cljs.core.seq(seq__33644_34205);
if(temp__5720__auto___34269){
var seq__33644_34270__$1 = temp__5720__auto___34269;
if(cljs.core.chunked_seq_QMARK_(seq__33644_34270__$1)){
var c__4550__auto___34271 = cljs.core.chunk_first(seq__33644_34270__$1);
var G__34272 = cljs.core.chunk_rest(seq__33644_34270__$1);
var G__34273 = c__4550__auto___34271;
var G__34274 = cljs.core.count(c__4550__auto___34271);
var G__34275 = (0);
seq__33644_34205 = G__34272;
chunk__33646_34206 = G__34273;
count__33647_34207 = G__34274;
i__33648_34208 = G__34275;
continue;
} else {
var child_struct_34276 = cljs.core.first(seq__33644_34270__$1);
if((!((child_struct_34276 == null)))){
if(typeof child_struct_34276 === 'string'){
var text_34278 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34278),child_struct_34276].join(''));
} else {
var children_34279 = shadow.dom.svg_node(child_struct_34276);
if(cljs.core.seq_QMARK_(children_34279)){
var seq__33689_34280 = cljs.core.seq(children_34279);
var chunk__33691_34281 = null;
var count__33692_34282 = (0);
var i__33693_34283 = (0);
while(true){
if((i__33693_34283 < count__33692_34282)){
var child_34284 = chunk__33691_34281.cljs$core$IIndexed$_nth$arity$2(null,i__33693_34283);
if(cljs.core.truth_(child_34284)){
node.appendChild(child_34284);


var G__34285 = seq__33689_34280;
var G__34286 = chunk__33691_34281;
var G__34287 = count__33692_34282;
var G__34288 = (i__33693_34283 + (1));
seq__33689_34280 = G__34285;
chunk__33691_34281 = G__34286;
count__33692_34282 = G__34287;
i__33693_34283 = G__34288;
continue;
} else {
var G__34289 = seq__33689_34280;
var G__34290 = chunk__33691_34281;
var G__34291 = count__33692_34282;
var G__34292 = (i__33693_34283 + (1));
seq__33689_34280 = G__34289;
chunk__33691_34281 = G__34290;
count__33692_34282 = G__34291;
i__33693_34283 = G__34292;
continue;
}
} else {
var temp__5720__auto___34293__$1 = cljs.core.seq(seq__33689_34280);
if(temp__5720__auto___34293__$1){
var seq__33689_34294__$1 = temp__5720__auto___34293__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33689_34294__$1)){
var c__4550__auto___34295 = cljs.core.chunk_first(seq__33689_34294__$1);
var G__34296 = cljs.core.chunk_rest(seq__33689_34294__$1);
var G__34297 = c__4550__auto___34295;
var G__34298 = cljs.core.count(c__4550__auto___34295);
var G__34299 = (0);
seq__33689_34280 = G__34296;
chunk__33691_34281 = G__34297;
count__33692_34282 = G__34298;
i__33693_34283 = G__34299;
continue;
} else {
var child_34300 = cljs.core.first(seq__33689_34294__$1);
if(cljs.core.truth_(child_34300)){
node.appendChild(child_34300);


var G__34301 = cljs.core.next(seq__33689_34294__$1);
var G__34302 = null;
var G__34303 = (0);
var G__34304 = (0);
seq__33689_34280 = G__34301;
chunk__33691_34281 = G__34302;
count__33692_34282 = G__34303;
i__33693_34283 = G__34304;
continue;
} else {
var G__34305 = cljs.core.next(seq__33689_34294__$1);
var G__34306 = null;
var G__34307 = (0);
var G__34308 = (0);
seq__33689_34280 = G__34305;
chunk__33691_34281 = G__34306;
count__33692_34282 = G__34307;
i__33693_34283 = G__34308;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34279);
}
}


var G__34309 = cljs.core.next(seq__33644_34270__$1);
var G__34310 = null;
var G__34311 = (0);
var G__34312 = (0);
seq__33644_34205 = G__34309;
chunk__33646_34206 = G__34310;
count__33647_34207 = G__34311;
i__33648_34208 = G__34312;
continue;
} else {
var G__34313 = cljs.core.next(seq__33644_34270__$1);
var G__34314 = null;
var G__34315 = (0);
var G__34316 = (0);
seq__33644_34205 = G__34313;
chunk__33646_34206 = G__34314;
count__33647_34207 = G__34315;
i__33648_34208 = G__34316;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__33702_34317 = shadow.dom._to_svg;
var G__33703_34318 = "string";
var G__33704_34319 = ((function (G__33702_34317,G__33703_34318){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__33702_34317,G__33703_34318))
;
goog.object.set(G__33702_34317,G__33703_34318,G__33704_34319);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__33708_34320 = shadow.dom._to_svg;
var G__33709_34321 = "null";
var G__33710_34322 = ((function (G__33708_34320,G__33709_34321){
return (function (_){
return null;
});})(G__33708_34320,G__33709_34321))
;
goog.object.set(G__33708_34320,G__33709_34321,G__33710_34322);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34325 = arguments.length;
var i__4731__auto___34326 = (0);
while(true){
if((i__4731__auto___34326 < len__4730__auto___34325)){
args__4736__auto__.push((arguments[i__4731__auto___34326]));

var G__34327 = (i__4731__auto___34326 + (1));
i__4731__auto___34326 = G__34327;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq33712){
var G__33713 = cljs.core.first(seq33712);
var seq33712__$1 = cljs.core.next(seq33712);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33713,seq33712__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33720 = arguments.length;
switch (G__33720) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__33726_34333 = shadow.dom.dom_node(el);
var G__33727_34334 = cljs.core.name(event);
var G__33728_34335 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33726_34333,G__33727_34334,G__33728_34335) : shadow.dom.dom_listen.call(null,G__33726_34333,G__33727_34334,G__33728_34335));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__31479__auto___34336 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31479__auto___34336,buf,chan,event_fn){
return (function (){
var f__31480__auto__ = (function (){var switch__31378__auto__ = ((function (c__31479__auto___34336,buf,chan,event_fn){
return (function (state_33735){
var state_val_33736 = (state_33735[(1)]);
if((state_val_33736 === (1))){
var state_33735__$1 = state_33735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33735__$1,(2),once_or_cleanup);
} else {
if((state_val_33736 === (2))){
var inst_33732 = (state_33735[(2)]);
var inst_33733 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33735__$1 = (function (){var statearr_33739 = state_33735;
(statearr_33739[(7)] = inst_33732);

return statearr_33739;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33735__$1,inst_33733);
} else {
return null;
}
}
});})(c__31479__auto___34336,buf,chan,event_fn))
;
return ((function (switch__31378__auto__,c__31479__auto___34336,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__31379__auto__ = null;
var shadow$dom$state_machine__31379__auto____0 = (function (){
var statearr_33740 = [null,null,null,null,null,null,null,null];
(statearr_33740[(0)] = shadow$dom$state_machine__31379__auto__);

(statearr_33740[(1)] = (1));

return statearr_33740;
});
var shadow$dom$state_machine__31379__auto____1 = (function (state_33735){
while(true){
var ret_value__31380__auto__ = (function (){try{while(true){
var result__31381__auto__ = switch__31378__auto__(state_33735);
if(cljs.core.keyword_identical_QMARK_(result__31381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31381__auto__;
}
break;
}
}catch (e33742){if((e33742 instanceof Object)){
var ex__31382__auto__ = e33742;
var statearr_33744_34337 = state_33735;
(statearr_33744_34337[(5)] = ex__31382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33742;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34338 = state_33735;
state_33735 = G__34338;
continue;
} else {
return ret_value__31380__auto__;
}
break;
}
});
shadow$dom$state_machine__31379__auto__ = function(state_33735){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__31379__auto____0.call(this);
case 1:
return shadow$dom$state_machine__31379__auto____1.call(this,state_33735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__31379__auto____0;
shadow$dom$state_machine__31379__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__31379__auto____1;
return shadow$dom$state_machine__31379__auto__;
})()
;})(switch__31378__auto__,c__31479__auto___34336,buf,chan,event_fn))
})();
var state__31481__auto__ = (function (){var statearr_33745 = (f__31480__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31480__auto__.cljs$core$IFn$_invoke$arity$0() : f__31480__auto__.call(null));
(statearr_33745[(6)] = c__31479__auto___34336);

return statearr_33745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31481__auto__);
});})(c__31479__auto___34336,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
