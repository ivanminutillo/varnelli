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
return cljs.core.cons((coll[idx]),(function (){var G__34947 = coll;
var G__34948 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34947,G__34948) : shadow.dom.lazy_native_coll_seq.call(null,G__34947,G__34948));
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
var G__34978 = arguments.length;
switch (G__34978) {
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
var G__34985 = arguments.length;
switch (G__34985) {
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
var G__34992 = arguments.length;
switch (G__34992) {
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
var G__34999 = arguments.length;
switch (G__34999) {
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
var G__35011 = arguments.length;
switch (G__35011) {
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
var G__35012 = document;
var G__35013 = shadow.dom.dom_node(el);
return goog.dom.contains(G__35012,G__35013);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__35016 = shadow.dom.dom_node(parent);
var G__35017 = shadow.dom.dom_node(el);
return goog.dom.contains(G__35016,G__35017);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__35018 = shadow.dom.dom_node(el);
var G__35019 = cls;
return goog.dom.classlist.add(G__35018,G__35019);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__35021 = shadow.dom.dom_node(el);
var G__35022 = cls;
return goog.dom.classlist.remove(G__35021,G__35022);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__35025 = arguments.length;
switch (G__35025) {
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
var G__35026 = shadow.dom.dom_node(el);
var G__35027 = cls;
return goog.dom.classlist.toggle(G__35026,G__35027);
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
}catch (e35031){if((e35031 instanceof Object)){
var e = e35031;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35031;

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
var seq__35040 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35041 = null;
var count__35042 = (0);
var i__35043 = (0);
while(true){
if((i__35043 < count__35042)){
var el = chunk__35041.cljs$core$IIndexed$_nth$arity$2(null,i__35043);
var handler_35642__$1 = ((function (seq__35040,chunk__35041,count__35042,i__35043,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35040,chunk__35041,count__35042,i__35043,el))
;
var G__35057_35644 = el;
var G__35058_35645 = cljs.core.name(ev);
var G__35059_35646 = handler_35642__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35057_35644,G__35058_35645,G__35059_35646) : shadow.dom.dom_listen.call(null,G__35057_35644,G__35058_35645,G__35059_35646));


var G__35647 = seq__35040;
var G__35648 = chunk__35041;
var G__35649 = count__35042;
var G__35650 = (i__35043 + (1));
seq__35040 = G__35647;
chunk__35041 = G__35648;
count__35042 = G__35649;
i__35043 = G__35650;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35040);
if(temp__5720__auto__){
var seq__35040__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35040__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35040__$1);
var G__35652 = cljs.core.chunk_rest(seq__35040__$1);
var G__35653 = c__4550__auto__;
var G__35654 = cljs.core.count(c__4550__auto__);
var G__35655 = (0);
seq__35040 = G__35652;
chunk__35041 = G__35653;
count__35042 = G__35654;
i__35043 = G__35655;
continue;
} else {
var el = cljs.core.first(seq__35040__$1);
var handler_35656__$1 = ((function (seq__35040,chunk__35041,count__35042,i__35043,el,seq__35040__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35040,chunk__35041,count__35042,i__35043,el,seq__35040__$1,temp__5720__auto__))
;
var G__35062_35657 = el;
var G__35063_35658 = cljs.core.name(ev);
var G__35064_35659 = handler_35656__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35062_35657,G__35063_35658,G__35064_35659) : shadow.dom.dom_listen.call(null,G__35062_35657,G__35063_35658,G__35064_35659));


var G__35661 = cljs.core.next(seq__35040__$1);
var G__35662 = null;
var G__35663 = (0);
var G__35664 = (0);
seq__35040 = G__35661;
chunk__35041 = G__35662;
count__35042 = G__35663;
i__35043 = G__35664;
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
var G__35068 = arguments.length;
switch (G__35068) {
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
var G__35074 = shadow.dom.dom_node(el);
var G__35075 = cljs.core.name(ev);
var G__35076 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35074,G__35075,G__35076) : shadow.dom.dom_listen.call(null,G__35074,G__35075,G__35076));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__35078 = shadow.dom.dom_node(el);
var G__35079 = cljs.core.name(ev);
var G__35080 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__35078,G__35079,G__35080) : shadow.dom.dom_listen_remove.call(null,G__35078,G__35079,G__35080));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35083 = cljs.core.seq(events);
var chunk__35084 = null;
var count__35085 = (0);
var i__35086 = (0);
while(true){
if((i__35086 < count__35085)){
var vec__35093 = chunk__35084.cljs$core$IIndexed$_nth$arity$2(null,i__35086);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35093,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35093,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35671 = seq__35083;
var G__35672 = chunk__35084;
var G__35673 = count__35085;
var G__35674 = (i__35086 + (1));
seq__35083 = G__35671;
chunk__35084 = G__35672;
count__35085 = G__35673;
i__35086 = G__35674;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35083);
if(temp__5720__auto__){
var seq__35083__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35083__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35083__$1);
var G__35676 = cljs.core.chunk_rest(seq__35083__$1);
var G__35677 = c__4550__auto__;
var G__35678 = cljs.core.count(c__4550__auto__);
var G__35679 = (0);
seq__35083 = G__35676;
chunk__35084 = G__35677;
count__35085 = G__35678;
i__35086 = G__35679;
continue;
} else {
var vec__35098 = cljs.core.first(seq__35083__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35098,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35098,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35682 = cljs.core.next(seq__35083__$1);
var G__35683 = null;
var G__35684 = (0);
var G__35685 = (0);
seq__35083 = G__35682;
chunk__35084 = G__35683;
count__35085 = G__35684;
i__35086 = G__35685;
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
var seq__35102 = cljs.core.seq(styles);
var chunk__35103 = null;
var count__35104 = (0);
var i__35105 = (0);
while(true){
if((i__35105 < count__35104)){
var vec__35124 = chunk__35103.cljs$core$IIndexed$_nth$arity$2(null,i__35105);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35124,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35124,(1),null);
var G__35127_35689 = dom;
var G__35128_35690 = cljs.core.name(k);
var G__35129_35691 = (((v == null))?"":v);
goog.style.setStyle(G__35127_35689,G__35128_35690,G__35129_35691);


var G__35692 = seq__35102;
var G__35693 = chunk__35103;
var G__35694 = count__35104;
var G__35695 = (i__35105 + (1));
seq__35102 = G__35692;
chunk__35103 = G__35693;
count__35104 = G__35694;
i__35105 = G__35695;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35102);
if(temp__5720__auto__){
var seq__35102__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35102__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35102__$1);
var G__35696 = cljs.core.chunk_rest(seq__35102__$1);
var G__35697 = c__4550__auto__;
var G__35698 = cljs.core.count(c__4550__auto__);
var G__35699 = (0);
seq__35102 = G__35696;
chunk__35103 = G__35697;
count__35104 = G__35698;
i__35105 = G__35699;
continue;
} else {
var vec__35135 = cljs.core.first(seq__35102__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35135,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35135,(1),null);
var G__35139_35701 = dom;
var G__35140_35702 = cljs.core.name(k);
var G__35141_35703 = (((v == null))?"":v);
goog.style.setStyle(G__35139_35701,G__35140_35702,G__35141_35703);


var G__35704 = cljs.core.next(seq__35102__$1);
var G__35705 = null;
var G__35706 = (0);
var G__35707 = (0);
seq__35102 = G__35704;
chunk__35103 = G__35705;
count__35104 = G__35706;
i__35105 = G__35707;
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
var G__35144_35708 = key;
var G__35144_35709__$1 = (((G__35144_35708 instanceof cljs.core.Keyword))?G__35144_35708.fqn:null);
switch (G__35144_35709__$1) {
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
var ks_35715 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_35715,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_35715,"aria-");
}
})())){
el.setAttribute(ks_35715,value);
} else {
(el[ks_35715] = value);
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
var G__35147 = shadow.dom.dom_node(el);
var G__35148 = cls;
return goog.dom.classlist.contains(G__35147,G__35148);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35149){
var map__35150 = p__35149;
var map__35150__$1 = (((((!((map__35150 == null))))?(((((map__35150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35150):map__35150);
var props = map__35150__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35150__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35153 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35153,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35153,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35153,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35156 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35156,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35156;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35161 = arguments.length;
switch (G__35161) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35169){
var vec__35170 = p__35169;
var seq__35171 = cljs.core.seq(vec__35170);
var first__35172 = cljs.core.first(seq__35171);
var seq__35171__$1 = cljs.core.next(seq__35171);
var nn = first__35172;
var first__35172__$1 = cljs.core.first(seq__35171__$1);
var seq__35171__$2 = cljs.core.next(seq__35171__$1);
var np = first__35172__$1;
var nc = seq__35171__$2;
var node = vec__35170;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35174 = nn;
var G__35175 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35174,G__35175) : create_fn.call(null,G__35174,G__35175));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35177 = nn;
var G__35178 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35177,G__35178) : create_fn.call(null,G__35177,G__35178));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35180 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35180,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35180,(1),null);
var seq__35183_35737 = cljs.core.seq(node_children);
var chunk__35184_35738 = null;
var count__35185_35739 = (0);
var i__35186_35740 = (0);
while(true){
if((i__35186_35740 < count__35185_35739)){
var child_struct_35741 = chunk__35184_35738.cljs$core$IIndexed$_nth$arity$2(null,i__35186_35740);
var children_35742 = shadow.dom.dom_node(child_struct_35741);
if(cljs.core.seq_QMARK_(children_35742)){
var seq__35216_35744 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35742));
var chunk__35218_35745 = null;
var count__35219_35746 = (0);
var i__35220_35747 = (0);
while(true){
if((i__35220_35747 < count__35219_35746)){
var child_35749 = chunk__35218_35745.cljs$core$IIndexed$_nth$arity$2(null,i__35220_35747);
if(cljs.core.truth_(child_35749)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35749);


var G__35750 = seq__35216_35744;
var G__35751 = chunk__35218_35745;
var G__35752 = count__35219_35746;
var G__35753 = (i__35220_35747 + (1));
seq__35216_35744 = G__35750;
chunk__35218_35745 = G__35751;
count__35219_35746 = G__35752;
i__35220_35747 = G__35753;
continue;
} else {
var G__35755 = seq__35216_35744;
var G__35756 = chunk__35218_35745;
var G__35757 = count__35219_35746;
var G__35758 = (i__35220_35747 + (1));
seq__35216_35744 = G__35755;
chunk__35218_35745 = G__35756;
count__35219_35746 = G__35757;
i__35220_35747 = G__35758;
continue;
}
} else {
var temp__5720__auto___35759 = cljs.core.seq(seq__35216_35744);
if(temp__5720__auto___35759){
var seq__35216_35761__$1 = temp__5720__auto___35759;
if(cljs.core.chunked_seq_QMARK_(seq__35216_35761__$1)){
var c__4550__auto___35762 = cljs.core.chunk_first(seq__35216_35761__$1);
var G__35763 = cljs.core.chunk_rest(seq__35216_35761__$1);
var G__35764 = c__4550__auto___35762;
var G__35765 = cljs.core.count(c__4550__auto___35762);
var G__35766 = (0);
seq__35216_35744 = G__35763;
chunk__35218_35745 = G__35764;
count__35219_35746 = G__35765;
i__35220_35747 = G__35766;
continue;
} else {
var child_35767 = cljs.core.first(seq__35216_35761__$1);
if(cljs.core.truth_(child_35767)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35767);


var G__35768 = cljs.core.next(seq__35216_35761__$1);
var G__35769 = null;
var G__35770 = (0);
var G__35771 = (0);
seq__35216_35744 = G__35768;
chunk__35218_35745 = G__35769;
count__35219_35746 = G__35770;
i__35220_35747 = G__35771;
continue;
} else {
var G__35773 = cljs.core.next(seq__35216_35761__$1);
var G__35774 = null;
var G__35775 = (0);
var G__35776 = (0);
seq__35216_35744 = G__35773;
chunk__35218_35745 = G__35774;
count__35219_35746 = G__35775;
i__35220_35747 = G__35776;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35742);
}


var G__35777 = seq__35183_35737;
var G__35778 = chunk__35184_35738;
var G__35779 = count__35185_35739;
var G__35780 = (i__35186_35740 + (1));
seq__35183_35737 = G__35777;
chunk__35184_35738 = G__35778;
count__35185_35739 = G__35779;
i__35186_35740 = G__35780;
continue;
} else {
var temp__5720__auto___35782 = cljs.core.seq(seq__35183_35737);
if(temp__5720__auto___35782){
var seq__35183_35783__$1 = temp__5720__auto___35782;
if(cljs.core.chunked_seq_QMARK_(seq__35183_35783__$1)){
var c__4550__auto___35784 = cljs.core.chunk_first(seq__35183_35783__$1);
var G__35785 = cljs.core.chunk_rest(seq__35183_35783__$1);
var G__35786 = c__4550__auto___35784;
var G__35787 = cljs.core.count(c__4550__auto___35784);
var G__35788 = (0);
seq__35183_35737 = G__35785;
chunk__35184_35738 = G__35786;
count__35185_35739 = G__35787;
i__35186_35740 = G__35788;
continue;
} else {
var child_struct_35789 = cljs.core.first(seq__35183_35783__$1);
var children_35791 = shadow.dom.dom_node(child_struct_35789);
if(cljs.core.seq_QMARK_(children_35791)){
var seq__35230_35792 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35791));
var chunk__35232_35793 = null;
var count__35233_35794 = (0);
var i__35234_35795 = (0);
while(true){
if((i__35234_35795 < count__35233_35794)){
var child_35797 = chunk__35232_35793.cljs$core$IIndexed$_nth$arity$2(null,i__35234_35795);
if(cljs.core.truth_(child_35797)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35797);


var G__35799 = seq__35230_35792;
var G__35800 = chunk__35232_35793;
var G__35801 = count__35233_35794;
var G__35802 = (i__35234_35795 + (1));
seq__35230_35792 = G__35799;
chunk__35232_35793 = G__35800;
count__35233_35794 = G__35801;
i__35234_35795 = G__35802;
continue;
} else {
var G__35804 = seq__35230_35792;
var G__35805 = chunk__35232_35793;
var G__35806 = count__35233_35794;
var G__35807 = (i__35234_35795 + (1));
seq__35230_35792 = G__35804;
chunk__35232_35793 = G__35805;
count__35233_35794 = G__35806;
i__35234_35795 = G__35807;
continue;
}
} else {
var temp__5720__auto___35808__$1 = cljs.core.seq(seq__35230_35792);
if(temp__5720__auto___35808__$1){
var seq__35230_35809__$1 = temp__5720__auto___35808__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35230_35809__$1)){
var c__4550__auto___35810 = cljs.core.chunk_first(seq__35230_35809__$1);
var G__35811 = cljs.core.chunk_rest(seq__35230_35809__$1);
var G__35812 = c__4550__auto___35810;
var G__35813 = cljs.core.count(c__4550__auto___35810);
var G__35814 = (0);
seq__35230_35792 = G__35811;
chunk__35232_35793 = G__35812;
count__35233_35794 = G__35813;
i__35234_35795 = G__35814;
continue;
} else {
var child_35815 = cljs.core.first(seq__35230_35809__$1);
if(cljs.core.truth_(child_35815)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35815);


var G__35816 = cljs.core.next(seq__35230_35809__$1);
var G__35817 = null;
var G__35818 = (0);
var G__35819 = (0);
seq__35230_35792 = G__35816;
chunk__35232_35793 = G__35817;
count__35233_35794 = G__35818;
i__35234_35795 = G__35819;
continue;
} else {
var G__35820 = cljs.core.next(seq__35230_35809__$1);
var G__35821 = null;
var G__35822 = (0);
var G__35823 = (0);
seq__35230_35792 = G__35820;
chunk__35232_35793 = G__35821;
count__35233_35794 = G__35822;
i__35234_35795 = G__35823;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35791);
}


var G__35824 = cljs.core.next(seq__35183_35783__$1);
var G__35825 = null;
var G__35826 = (0);
var G__35827 = (0);
seq__35183_35737 = G__35824;
chunk__35184_35738 = G__35825;
count__35185_35739 = G__35826;
i__35186_35740 = G__35827;
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
var G__35252 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__35252);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35256 = cljs.core.seq(node);
var chunk__35257 = null;
var count__35258 = (0);
var i__35259 = (0);
while(true){
if((i__35259 < count__35258)){
var n = chunk__35257.cljs$core$IIndexed$_nth$arity$2(null,i__35259);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35833 = seq__35256;
var G__35834 = chunk__35257;
var G__35835 = count__35258;
var G__35836 = (i__35259 + (1));
seq__35256 = G__35833;
chunk__35257 = G__35834;
count__35258 = G__35835;
i__35259 = G__35836;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35256);
if(temp__5720__auto__){
var seq__35256__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35256__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35256__$1);
var G__35838 = cljs.core.chunk_rest(seq__35256__$1);
var G__35839 = c__4550__auto__;
var G__35840 = cljs.core.count(c__4550__auto__);
var G__35841 = (0);
seq__35256 = G__35838;
chunk__35257 = G__35839;
count__35258 = G__35840;
i__35259 = G__35841;
continue;
} else {
var n = cljs.core.first(seq__35256__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35843 = cljs.core.next(seq__35256__$1);
var G__35844 = null;
var G__35845 = (0);
var G__35846 = (0);
seq__35256 = G__35843;
chunk__35257 = G__35844;
count__35258 = G__35845;
i__35259 = G__35846;
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
var G__35261 = shadow.dom.dom_node(new$);
var G__35262 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__35261,G__35262);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35264 = arguments.length;
switch (G__35264) {
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
var G__35266 = arguments.length;
switch (G__35266) {
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
var G__35274 = arguments.length;
switch (G__35274) {
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
var len__4730__auto___35854 = arguments.length;
var i__4731__auto___35858 = (0);
while(true){
if((i__4731__auto___35858 < len__4730__auto___35854)){
args__4736__auto__.push((arguments[i__4731__auto___35858]));

var G__35859 = (i__4731__auto___35858 + (1));
i__4731__auto___35858 = G__35859;
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
var seq__35276_35860 = cljs.core.seq(nodes);
var chunk__35277_35861 = null;
var count__35278_35862 = (0);
var i__35279_35863 = (0);
while(true){
if((i__35279_35863 < count__35278_35862)){
var node_35864 = chunk__35277_35861.cljs$core$IIndexed$_nth$arity$2(null,i__35279_35863);
fragment.appendChild(shadow.dom._to_dom(node_35864));


var G__35865 = seq__35276_35860;
var G__35866 = chunk__35277_35861;
var G__35867 = count__35278_35862;
var G__35868 = (i__35279_35863 + (1));
seq__35276_35860 = G__35865;
chunk__35277_35861 = G__35866;
count__35278_35862 = G__35867;
i__35279_35863 = G__35868;
continue;
} else {
var temp__5720__auto___35869 = cljs.core.seq(seq__35276_35860);
if(temp__5720__auto___35869){
var seq__35276_35870__$1 = temp__5720__auto___35869;
if(cljs.core.chunked_seq_QMARK_(seq__35276_35870__$1)){
var c__4550__auto___35871 = cljs.core.chunk_first(seq__35276_35870__$1);
var G__35872 = cljs.core.chunk_rest(seq__35276_35870__$1);
var G__35873 = c__4550__auto___35871;
var G__35874 = cljs.core.count(c__4550__auto___35871);
var G__35875 = (0);
seq__35276_35860 = G__35872;
chunk__35277_35861 = G__35873;
count__35278_35862 = G__35874;
i__35279_35863 = G__35875;
continue;
} else {
var node_35876 = cljs.core.first(seq__35276_35870__$1);
fragment.appendChild(shadow.dom._to_dom(node_35876));


var G__35877 = cljs.core.next(seq__35276_35870__$1);
var G__35878 = null;
var G__35879 = (0);
var G__35880 = (0);
seq__35276_35860 = G__35877;
chunk__35277_35861 = G__35878;
count__35278_35862 = G__35879;
i__35279_35863 = G__35880;
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
shadow.dom.fragment.cljs$lang$applyTo = (function (seq35275){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35275));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35286_35881 = cljs.core.seq(scripts);
var chunk__35287_35882 = null;
var count__35288_35883 = (0);
var i__35289_35884 = (0);
while(true){
if((i__35289_35884 < count__35288_35883)){
var vec__35302_35885 = chunk__35287_35882.cljs$core$IIndexed$_nth$arity$2(null,i__35289_35884);
var script_tag_35886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35302_35885,(0),null);
var script_body_35887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35302_35885,(1),null);
eval(script_body_35887);


var G__35888 = seq__35286_35881;
var G__35889 = chunk__35287_35882;
var G__35890 = count__35288_35883;
var G__35891 = (i__35289_35884 + (1));
seq__35286_35881 = G__35888;
chunk__35287_35882 = G__35889;
count__35288_35883 = G__35890;
i__35289_35884 = G__35891;
continue;
} else {
var temp__5720__auto___35893 = cljs.core.seq(seq__35286_35881);
if(temp__5720__auto___35893){
var seq__35286_35897__$1 = temp__5720__auto___35893;
if(cljs.core.chunked_seq_QMARK_(seq__35286_35897__$1)){
var c__4550__auto___35898 = cljs.core.chunk_first(seq__35286_35897__$1);
var G__35899 = cljs.core.chunk_rest(seq__35286_35897__$1);
var G__35900 = c__4550__auto___35898;
var G__35901 = cljs.core.count(c__4550__auto___35898);
var G__35902 = (0);
seq__35286_35881 = G__35899;
chunk__35287_35882 = G__35900;
count__35288_35883 = G__35901;
i__35289_35884 = G__35902;
continue;
} else {
var vec__35307_35903 = cljs.core.first(seq__35286_35897__$1);
var script_tag_35904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35307_35903,(0),null);
var script_body_35905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35307_35903,(1),null);
eval(script_body_35905);


var G__35906 = cljs.core.next(seq__35286_35897__$1);
var G__35907 = null;
var G__35908 = (0);
var G__35909 = (0);
seq__35286_35881 = G__35906;
chunk__35287_35882 = G__35907;
count__35288_35883 = G__35908;
i__35289_35884 = G__35909;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__35311){
var vec__35312 = p__35311;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35312,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35312,(1),null);
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
var G__35322 = shadow.dom.dom_node(el);
var G__35323 = cls;
return goog.dom.getAncestorByClass(G__35322,G__35323);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35328 = arguments.length;
switch (G__35328) {
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
var G__35331 = shadow.dom.dom_node(el);
var G__35332 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__35331,G__35332);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__35335 = shadow.dom.dom_node(el);
var G__35336 = cljs.core.name(tag);
var G__35337 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__35335,G__35336,G__35337);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__35342 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__35342);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__35346 = shadow.dom.dom_node(dom);
var G__35347 = value;
return goog.dom.forms.setValue(G__35346,G__35347);
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
var seq__35355 = cljs.core.seq(style_keys);
var chunk__35356 = null;
var count__35357 = (0);
var i__35358 = (0);
while(true){
if((i__35358 < count__35357)){
var it = chunk__35356.cljs$core$IIndexed$_nth$arity$2(null,i__35358);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35914 = seq__35355;
var G__35915 = chunk__35356;
var G__35916 = count__35357;
var G__35917 = (i__35358 + (1));
seq__35355 = G__35914;
chunk__35356 = G__35915;
count__35357 = G__35916;
i__35358 = G__35917;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35355);
if(temp__5720__auto__){
var seq__35355__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35355__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35355__$1);
var G__35918 = cljs.core.chunk_rest(seq__35355__$1);
var G__35919 = c__4550__auto__;
var G__35920 = cljs.core.count(c__4550__auto__);
var G__35921 = (0);
seq__35355 = G__35918;
chunk__35356 = G__35919;
count__35357 = G__35920;
i__35358 = G__35921;
continue;
} else {
var it = cljs.core.first(seq__35355__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35922 = cljs.core.next(seq__35355__$1);
var G__35923 = null;
var G__35924 = (0);
var G__35925 = (0);
seq__35355 = G__35922;
chunk__35356 = G__35923;
count__35357 = G__35924;
i__35358 = G__35925;
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

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k35365,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35370 = k35365;
var G__35370__$1 = (((G__35370 instanceof cljs.core.Keyword))?G__35370.fqn:null);
switch (G__35370__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35365,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35371){
var vec__35372 = p__35371;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35372,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35372,(1),null);
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

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35364){
var self__ = this;
var G__35364__$1 = this;
return (new cljs.core.RecordIter((0),G__35364__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__35377 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35377(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35366,other35367){
var self__ = this;
var this35366__$1 = this;
return (((!((other35367 == null)))) && ((this35366__$1.constructor === other35367.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35366__$1.x,other35367.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35366__$1.y,other35367.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35366__$1.__extmap,other35367.__extmap)));
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

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__35364){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35378 = cljs.core.keyword_identical_QMARK_;
var expr__35379 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35381 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__35382 = expr__35379;
return (pred__35378.cljs$core$IFn$_invoke$arity$2 ? pred__35378.cljs$core$IFn$_invoke$arity$2(G__35381,G__35382) : pred__35378.call(null,G__35381,G__35382));
})())){
return (new shadow.dom.Coordinate(G__35364,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35383 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__35384 = expr__35379;
return (pred__35378.cljs$core$IFn$_invoke$arity$2 ? pred__35378.cljs$core$IFn$_invoke$arity$2(G__35383,G__35384) : pred__35378.call(null,G__35383,G__35384));
})())){
return (new shadow.dom.Coordinate(self__.x,G__35364,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__35364),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__35364){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35364,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35369){
var extmap__4424__auto__ = (function (){var G__35393 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35369,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35369)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35393);
} else {
return G__35393;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35369),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35369),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__35397 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__35397);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__35400 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__35400);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__35404 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__35404);
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

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k35406,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35414 = k35406;
var G__35414__$1 = (((G__35414 instanceof cljs.core.Keyword))?G__35414.fqn:null);
switch (G__35414__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35406,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35417){
var vec__35419 = p__35417;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35419,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35419,(1),null);
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

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35405){
var self__ = this;
var G__35405__$1 = this;
return (new cljs.core.RecordIter((0),G__35405__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__35428 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35428(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35407,other35408){
var self__ = this;
var this35407__$1 = this;
return (((!((other35408 == null)))) && ((this35407__$1.constructor === other35408.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35407__$1.w,other35408.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35407__$1.h,other35408.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35407__$1.__extmap,other35408.__extmap)));
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

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__35405){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35432 = cljs.core.keyword_identical_QMARK_;
var expr__35433 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35435 = new cljs.core.Keyword(null,"w","w",354169001);
var G__35436 = expr__35433;
return (pred__35432.cljs$core$IFn$_invoke$arity$2 ? pred__35432.cljs$core$IFn$_invoke$arity$2(G__35435,G__35436) : pred__35432.call(null,G__35435,G__35436));
})())){
return (new shadow.dom.Size(G__35405,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35438 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__35439 = expr__35433;
return (pred__35432.cljs$core$IFn$_invoke$arity$2 ? pred__35432.cljs$core$IFn$_invoke$arity$2(G__35438,G__35439) : pred__35432.call(null,G__35438,G__35439));
})())){
return (new shadow.dom.Size(self__.w,G__35405,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__35405),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__35405){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35405,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35410){
var extmap__4424__auto__ = (function (){var G__35444 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35410,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35410)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35444);
} else {
return G__35444;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35410),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35410),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__35450 = shadow.dom.dom_node(el);
return goog.style.getSize(G__35450);
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
var G__35958 = (i + (1));
var G__35959 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35958;
ret = G__35959;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35463){
var vec__35464 = p__35463;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35464,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35464,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35470 = arguments.length;
switch (G__35470) {
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
var G__35476_35961 = new_node;
var G__35477_35962 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__35476_35961,G__35477_35962);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__35479_35963 = new_node;
var G__35480_35964 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__35479_35963,G__35480_35964);

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
var G__35967 = ps;
var G__35968 = (i + (1));
el__$1 = G__35967;
i = G__35968;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__35487 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__35487);
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
var G__35490 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__35490);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__35492 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__35492);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35494 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35494,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35494,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35494,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35499_35970 = cljs.core.seq(props);
var chunk__35500_35971 = null;
var count__35501_35972 = (0);
var i__35502_35973 = (0);
while(true){
if((i__35502_35973 < count__35501_35972)){
var vec__35514_35974 = chunk__35500_35971.cljs$core$IIndexed$_nth$arity$2(null,i__35502_35973);
var k_35975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35514_35974,(0),null);
var v_35976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35514_35974,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_35975);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35975),v_35976);


var G__35977 = seq__35499_35970;
var G__35978 = chunk__35500_35971;
var G__35979 = count__35501_35972;
var G__35980 = (i__35502_35973 + (1));
seq__35499_35970 = G__35977;
chunk__35500_35971 = G__35978;
count__35501_35972 = G__35979;
i__35502_35973 = G__35980;
continue;
} else {
var temp__5720__auto___35981 = cljs.core.seq(seq__35499_35970);
if(temp__5720__auto___35981){
var seq__35499_35982__$1 = temp__5720__auto___35981;
if(cljs.core.chunked_seq_QMARK_(seq__35499_35982__$1)){
var c__4550__auto___35983 = cljs.core.chunk_first(seq__35499_35982__$1);
var G__35984 = cljs.core.chunk_rest(seq__35499_35982__$1);
var G__35985 = c__4550__auto___35983;
var G__35986 = cljs.core.count(c__4550__auto___35983);
var G__35987 = (0);
seq__35499_35970 = G__35984;
chunk__35500_35971 = G__35985;
count__35501_35972 = G__35986;
i__35502_35973 = G__35987;
continue;
} else {
var vec__35520_35988 = cljs.core.first(seq__35499_35982__$1);
var k_35989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35520_35988,(0),null);
var v_35990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35520_35988,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_35989);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35989),v_35990);


var G__35992 = cljs.core.next(seq__35499_35982__$1);
var G__35993 = null;
var G__35994 = (0);
var G__35995 = (0);
seq__35499_35970 = G__35992;
chunk__35500_35971 = G__35993;
count__35501_35972 = G__35994;
i__35502_35973 = G__35995;
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
var vec__35526 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35526,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35526,(1),null);
var seq__35529_35997 = cljs.core.seq(node_children);
var chunk__35531_35998 = null;
var count__35532_35999 = (0);
var i__35533_36000 = (0);
while(true){
if((i__35533_36000 < count__35532_35999)){
var child_struct_36001 = chunk__35531_35998.cljs$core$IIndexed$_nth$arity$2(null,i__35533_36000);
if((!((child_struct_36001 == null)))){
if(typeof child_struct_36001 === 'string'){
var text_36002 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36002),child_struct_36001].join(''));
} else {
var children_36003 = shadow.dom.svg_node(child_struct_36001);
if(cljs.core.seq_QMARK_(children_36003)){
var seq__35547_36004 = cljs.core.seq(children_36003);
var chunk__35549_36005 = null;
var count__35550_36006 = (0);
var i__35551_36007 = (0);
while(true){
if((i__35551_36007 < count__35550_36006)){
var child_36009 = chunk__35549_36005.cljs$core$IIndexed$_nth$arity$2(null,i__35551_36007);
if(cljs.core.truth_(child_36009)){
node.appendChild(child_36009);


var G__36010 = seq__35547_36004;
var G__36011 = chunk__35549_36005;
var G__36012 = count__35550_36006;
var G__36013 = (i__35551_36007 + (1));
seq__35547_36004 = G__36010;
chunk__35549_36005 = G__36011;
count__35550_36006 = G__36012;
i__35551_36007 = G__36013;
continue;
} else {
var G__36014 = seq__35547_36004;
var G__36015 = chunk__35549_36005;
var G__36016 = count__35550_36006;
var G__36017 = (i__35551_36007 + (1));
seq__35547_36004 = G__36014;
chunk__35549_36005 = G__36015;
count__35550_36006 = G__36016;
i__35551_36007 = G__36017;
continue;
}
} else {
var temp__5720__auto___36018 = cljs.core.seq(seq__35547_36004);
if(temp__5720__auto___36018){
var seq__35547_36019__$1 = temp__5720__auto___36018;
if(cljs.core.chunked_seq_QMARK_(seq__35547_36019__$1)){
var c__4550__auto___36020 = cljs.core.chunk_first(seq__35547_36019__$1);
var G__36021 = cljs.core.chunk_rest(seq__35547_36019__$1);
var G__36022 = c__4550__auto___36020;
var G__36023 = cljs.core.count(c__4550__auto___36020);
var G__36024 = (0);
seq__35547_36004 = G__36021;
chunk__35549_36005 = G__36022;
count__35550_36006 = G__36023;
i__35551_36007 = G__36024;
continue;
} else {
var child_36029 = cljs.core.first(seq__35547_36019__$1);
if(cljs.core.truth_(child_36029)){
node.appendChild(child_36029);


var G__36030 = cljs.core.next(seq__35547_36019__$1);
var G__36031 = null;
var G__36032 = (0);
var G__36033 = (0);
seq__35547_36004 = G__36030;
chunk__35549_36005 = G__36031;
count__35550_36006 = G__36032;
i__35551_36007 = G__36033;
continue;
} else {
var G__36034 = cljs.core.next(seq__35547_36019__$1);
var G__36035 = null;
var G__36036 = (0);
var G__36037 = (0);
seq__35547_36004 = G__36034;
chunk__35549_36005 = G__36035;
count__35550_36006 = G__36036;
i__35551_36007 = G__36037;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36003);
}
}


var G__36039 = seq__35529_35997;
var G__36040 = chunk__35531_35998;
var G__36041 = count__35532_35999;
var G__36042 = (i__35533_36000 + (1));
seq__35529_35997 = G__36039;
chunk__35531_35998 = G__36040;
count__35532_35999 = G__36041;
i__35533_36000 = G__36042;
continue;
} else {
var G__36043 = seq__35529_35997;
var G__36044 = chunk__35531_35998;
var G__36045 = count__35532_35999;
var G__36046 = (i__35533_36000 + (1));
seq__35529_35997 = G__36043;
chunk__35531_35998 = G__36044;
count__35532_35999 = G__36045;
i__35533_36000 = G__36046;
continue;
}
} else {
var temp__5720__auto___36047 = cljs.core.seq(seq__35529_35997);
if(temp__5720__auto___36047){
var seq__35529_36048__$1 = temp__5720__auto___36047;
if(cljs.core.chunked_seq_QMARK_(seq__35529_36048__$1)){
var c__4550__auto___36049 = cljs.core.chunk_first(seq__35529_36048__$1);
var G__36050 = cljs.core.chunk_rest(seq__35529_36048__$1);
var G__36051 = c__4550__auto___36049;
var G__36052 = cljs.core.count(c__4550__auto___36049);
var G__36053 = (0);
seq__35529_35997 = G__36050;
chunk__35531_35998 = G__36051;
count__35532_35999 = G__36052;
i__35533_36000 = G__36053;
continue;
} else {
var child_struct_36054 = cljs.core.first(seq__35529_36048__$1);
if((!((child_struct_36054 == null)))){
if(typeof child_struct_36054 === 'string'){
var text_36055 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36055),child_struct_36054].join(''));
} else {
var children_36056 = shadow.dom.svg_node(child_struct_36054);
if(cljs.core.seq_QMARK_(children_36056)){
var seq__35553_36057 = cljs.core.seq(children_36056);
var chunk__35555_36058 = null;
var count__35556_36059 = (0);
var i__35557_36060 = (0);
while(true){
if((i__35557_36060 < count__35556_36059)){
var child_36062 = chunk__35555_36058.cljs$core$IIndexed$_nth$arity$2(null,i__35557_36060);
if(cljs.core.truth_(child_36062)){
node.appendChild(child_36062);


var G__36063 = seq__35553_36057;
var G__36064 = chunk__35555_36058;
var G__36065 = count__35556_36059;
var G__36066 = (i__35557_36060 + (1));
seq__35553_36057 = G__36063;
chunk__35555_36058 = G__36064;
count__35556_36059 = G__36065;
i__35557_36060 = G__36066;
continue;
} else {
var G__36067 = seq__35553_36057;
var G__36068 = chunk__35555_36058;
var G__36069 = count__35556_36059;
var G__36070 = (i__35557_36060 + (1));
seq__35553_36057 = G__36067;
chunk__35555_36058 = G__36068;
count__35556_36059 = G__36069;
i__35557_36060 = G__36070;
continue;
}
} else {
var temp__5720__auto___36071__$1 = cljs.core.seq(seq__35553_36057);
if(temp__5720__auto___36071__$1){
var seq__35553_36072__$1 = temp__5720__auto___36071__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35553_36072__$1)){
var c__4550__auto___36073 = cljs.core.chunk_first(seq__35553_36072__$1);
var G__36075 = cljs.core.chunk_rest(seq__35553_36072__$1);
var G__36076 = c__4550__auto___36073;
var G__36077 = cljs.core.count(c__4550__auto___36073);
var G__36078 = (0);
seq__35553_36057 = G__36075;
chunk__35555_36058 = G__36076;
count__35556_36059 = G__36077;
i__35557_36060 = G__36078;
continue;
} else {
var child_36082 = cljs.core.first(seq__35553_36072__$1);
if(cljs.core.truth_(child_36082)){
node.appendChild(child_36082);


var G__36083 = cljs.core.next(seq__35553_36072__$1);
var G__36084 = null;
var G__36085 = (0);
var G__36086 = (0);
seq__35553_36057 = G__36083;
chunk__35555_36058 = G__36084;
count__35556_36059 = G__36085;
i__35557_36060 = G__36086;
continue;
} else {
var G__36087 = cljs.core.next(seq__35553_36072__$1);
var G__36088 = null;
var G__36089 = (0);
var G__36090 = (0);
seq__35553_36057 = G__36087;
chunk__35555_36058 = G__36088;
count__35556_36059 = G__36089;
i__35557_36060 = G__36090;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36056);
}
}


var G__36091 = cljs.core.next(seq__35529_36048__$1);
var G__36092 = null;
var G__36093 = (0);
var G__36094 = (0);
seq__35529_35997 = G__36091;
chunk__35531_35998 = G__36092;
count__35532_35999 = G__36093;
i__35533_36000 = G__36094;
continue;
} else {
var G__36095 = cljs.core.next(seq__35529_36048__$1);
var G__36096 = null;
var G__36097 = (0);
var G__36098 = (0);
seq__35529_35997 = G__36095;
chunk__35531_35998 = G__36096;
count__35532_35999 = G__36097;
i__35533_36000 = G__36098;
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

var G__35567_36099 = shadow.dom._to_svg;
var G__35568_36100 = "string";
var G__35569_36101 = ((function (G__35567_36099,G__35568_36100){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__35567_36099,G__35568_36100))
;
goog.object.set(G__35567_36099,G__35568_36100,G__35569_36101);

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

var G__35574_36102 = shadow.dom._to_svg;
var G__35575_36103 = "null";
var G__35576_36104 = ((function (G__35574_36102,G__35575_36103){
return (function (_){
return null;
});})(G__35574_36102,G__35575_36103))
;
goog.object.set(G__35574_36102,G__35575_36103,G__35576_36104);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36105 = arguments.length;
var i__4731__auto___36106 = (0);
while(true){
if((i__4731__auto___36106 < len__4730__auto___36105)){
args__4736__auto__.push((arguments[i__4731__auto___36106]));

var G__36107 = (i__4731__auto___36106 + (1));
i__4731__auto___36106 = G__36107;
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
shadow.dom.svg.cljs$lang$applyTo = (function (seq35577){
var G__35578 = cljs.core.first(seq35577);
var seq35577__$1 = cljs.core.next(seq35577);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35578,seq35577__$1);
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
var G__35583 = arguments.length;
switch (G__35583) {
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
var G__35590_36110 = shadow.dom.dom_node(el);
var G__35591_36111 = cljs.core.name(event);
var G__35592_36112 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35590_36110,G__35591_36111,G__35592_36112) : shadow.dom.dom_listen.call(null,G__35590_36110,G__35591_36111,G__35592_36112));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__33318__auto___36120 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33318__auto___36120,buf,chan,event_fn){
return (function (){
var f__33319__auto__ = (function (){var switch__33139__auto__ = ((function (c__33318__auto___36120,buf,chan,event_fn){
return (function (state_35598){
var state_val_35599 = (state_35598[(1)]);
if((state_val_35599 === (1))){
var state_35598__$1 = state_35598;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35598__$1,(2),once_or_cleanup);
} else {
if((state_val_35599 === (2))){
var inst_35595 = (state_35598[(2)]);
var inst_35596 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35598__$1 = (function (){var statearr_35602 = state_35598;
(statearr_35602[(7)] = inst_35595);

return statearr_35602;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35598__$1,inst_35596);
} else {
return null;
}
}
});})(c__33318__auto___36120,buf,chan,event_fn))
;
return ((function (switch__33139__auto__,c__33318__auto___36120,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__33140__auto__ = null;
var shadow$dom$state_machine__33140__auto____0 = (function (){
var statearr_35603 = [null,null,null,null,null,null,null,null];
(statearr_35603[(0)] = shadow$dom$state_machine__33140__auto__);

(statearr_35603[(1)] = (1));

return statearr_35603;
});
var shadow$dom$state_machine__33140__auto____1 = (function (state_35598){
while(true){
var ret_value__33141__auto__ = (function (){try{while(true){
var result__33142__auto__ = switch__33139__auto__(state_35598);
if(cljs.core.keyword_identical_QMARK_(result__33142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33142__auto__;
}
break;
}
}catch (e35605){if((e35605 instanceof Object)){
var ex__33143__auto__ = e35605;
var statearr_35606_36121 = state_35598;
(statearr_35606_36121[(5)] = ex__33143__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35605;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36122 = state_35598;
state_35598 = G__36122;
continue;
} else {
return ret_value__33141__auto__;
}
break;
}
});
shadow$dom$state_machine__33140__auto__ = function(state_35598){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33140__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33140__auto____1.call(this,state_35598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33140__auto____0;
shadow$dom$state_machine__33140__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33140__auto____1;
return shadow$dom$state_machine__33140__auto__;
})()
;})(switch__33139__auto__,c__33318__auto___36120,buf,chan,event_fn))
})();
var state__33320__auto__ = (function (){var statearr_35608 = (f__33319__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33319__auto__.cljs$core$IFn$_invoke$arity$0() : f__33319__auto__.call(null));
(statearr_35608[(6)] = c__33318__auto___36120);

return statearr_35608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33320__auto__);
});})(c__33318__auto___36120,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
