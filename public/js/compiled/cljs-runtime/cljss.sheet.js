goog.provide('cljss.sheet');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljss.utils');
cljss.sheet.limit = (65534);
cljss.sheet.make_style_tag = (function cljss$sheet$make_style_tag(){
var tag = goog.dom.createElement("style");
var head = (goog.dom.getElementsByTagNameAndClass("head")[(0)]);
goog.object.set(tag,"type","text/css");

var G__37770_37778 = tag;
var G__37771_37779 = goog.dom.createTextNode("");
goog.dom.appendChild(G__37770_37778,G__37771_37779);

goog.dom.appendChild(head,tag);

return tag;
});

/**
 * @interface
 */
cljss.sheet.ISheet = function(){};

cljss.sheet.insert_BANG_ = (function cljss$sheet$insert_BANG_(this$,css,cls_name){
if((((!((this$ == null)))) && ((!((this$.cljss$sheet$ISheet$insert_BANG_$arity$3 == null)))))){
return this$.cljss$sheet$ISheet$insert_BANG_$arity$3(this$,css,cls_name);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (cljss.sheet.insert_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(this$,css,cls_name) : m__4434__auto__.call(null,this$,css,cls_name));
} else {
var m__4431__auto__ = (cljss.sheet.insert_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(this$,css,cls_name) : m__4431__auto__.call(null,this$,css,cls_name));
} else {
throw cljs.core.missing_protocol("ISheet.insert!",this$);
}
}
}
});

cljss.sheet.flush_BANG_ = (function cljss$sheet$flush_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.cljss$sheet$ISheet$flush_BANG_$arity$1 == null)))))){
return this$.cljss$sheet$ISheet$flush_BANG_$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (cljss.sheet.flush_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (cljss.sheet.flush_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ISheet.flush!",this$);
}
}
}
});

cljss.sheet.filled_QMARK_ = (function cljss$sheet$filled_QMARK_(this$){
if((((!((this$ == null)))) && ((!((this$.cljss$sheet$ISheet$filled_QMARK_$arity$1 == null)))))){
return this$.cljss$sheet$ISheet$filled_QMARK_$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (cljss.sheet.filled_QMARK_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (cljss.sheet.filled_QMARK_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ISheet.filled?",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljss.sheet.ISheet}
*/
cljss.sheet.Sheet = (function (tag,sheet,cache){
this.tag = tag;
this.sheet = sheet;
this.cache = cache;
});
cljss.sheet.Sheet.prototype.cljss$sheet$ISheet$ = cljs.core.PROTOCOL_SENTINEL;

cljss.sheet.Sheet.prototype.cljss$sheet$ISheet$insert_BANG_$arity$3 = (function (this$,rule,cls_name){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(this$__$1.cljss$sheet$ISheet$filled_QMARK_$arity$1(null))){
throw (new Error(["A stylesheet can only have ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljss.sheet.limit)," rules"].join('')));
} else {
}

if(cljs.core.truth_((function (){var fexpr__37772 = cljs.core.deref(self__.cache);
return (fexpr__37772.cljs$core$IFn$_invoke$arity$1 ? fexpr__37772.cljs$core$IFn$_invoke$arity$1(cls_name) : fexpr__37772.call(null,cls_name));
})())){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cache,cljs.core.conj,cls_name);

var rule__$1 = ((cljs.core.ifn_QMARK_(rule))?(rule.cljs$core$IFn$_invoke$arity$0 ? rule.cljs$core$IFn$_invoke$arity$0() : rule.call(null)):rule);
var rules_count = (function (){var G__37773 = goog.object.get(self__.sheet,"cssRules");
var G__37774 = "length";
return goog.object.get(G__37773,G__37774);
})();
if(cljss.utils.dev_QMARK_){
var G__37775 = self__.tag;
var G__37776 = goog.dom.createTextNode(rule__$1);
return goog.dom.appendChild(G__37775,G__37776);
} else {
try{return self__.sheet.insertRule(rule__$1,rules_count);
}catch (e37777){var e = e37777;
if(cljss.utils.dev_QMARK_){
return console.warn("Illegal CSS rule",rule__$1);
} else {
return null;
}
}}
}
});

cljss.sheet.Sheet.prototype.cljss$sheet$ISheet$flush_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.tag.parentNode.removeChild(self__.tag);
});

cljss.sheet.Sheet.prototype.cljss$sheet$ISheet$filled_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.deref(self__.cache)),cljss.sheet.limit);
});

cljss.sheet.Sheet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"sheet","sheet",-418624267,null),new cljs.core.Symbol(null,"cache","cache",403508473,null)], null);
});

cljss.sheet.Sheet.cljs$lang$type = true;

cljss.sheet.Sheet.cljs$lang$ctorStr = "cljss.sheet/Sheet";

cljss.sheet.Sheet.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljss.sheet/Sheet");
});

/**
 * Positional factory function for cljss.sheet/Sheet.
 */
cljss.sheet.__GT_Sheet = (function cljss$sheet$__GT_Sheet(tag,sheet,cache){
return (new cljss.sheet.Sheet(tag,sheet,cache));
});

cljss.sheet.create_sheet = (function cljss$sheet$create_sheet(){
var tag = cljss.sheet.make_style_tag();
var sheet = goog.object.get(tag,"sheet");
return (new cljss.sheet.Sheet(tag,sheet,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)));
});

//# sourceMappingURL=cljss.sheet.js.map
