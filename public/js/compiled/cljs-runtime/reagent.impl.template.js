goog.provide('reagent.impl.template');
goog.require('cljs.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.interop');
goog.require('reagent.debug');
/**
 * Regular expression that parses a CSS-style id and class
 *           from a tag name.
 */
reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;

/**
* @constructor
*/
reagent.impl.template.NativeWrapper = (function (){
});

reagent.impl.template.NativeWrapper.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

reagent.impl.template.NativeWrapper.cljs$lang$type = true;

reagent.impl.template.NativeWrapper.cljs$lang$ctorStr = "reagent.impl.template/NativeWrapper";

reagent.impl.template.NativeWrapper.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reagent.impl.template/NativeWrapper");
});

/**
 * Positional factory function for reagent.impl.template/NativeWrapper.
 */
reagent.impl.template.__GT_NativeWrapper = (function reagent$impl$template$__GT_NativeWrapper(){
return (new reagent.impl.template.NativeWrapper());
});

reagent.impl.template.named_QMARK_ = (function reagent$impl$template$named_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)));
});
reagent.impl.template.hiccup_tag_QMARK_ = (function reagent$impl$template$hiccup_tag_QMARK_(x){
return ((reagent.impl.template.named_QMARK_(x)) || (typeof x === 'string'));
});
reagent.impl.template.valid_tag_QMARK_ = (function reagent$impl$template$valid_tag_QMARK_(x){
return ((reagent.impl.template.hiccup_tag_QMARK_(x)) || (cljs.core.ifn_QMARK_(x)) || ((x instanceof reagent.impl.template.NativeWrapper)));
});
reagent.impl.template.prop_name_cache = ({"class": "className", "for": "htmlFor", "charset": "charSet"});
reagent.impl.template.cache_get = (function reagent$impl$template$cache_get(o,k){
if(o.hasOwnProperty(k)){
return (o[k]);
} else {
return null;
}
});
reagent.impl.template.cached_prop_name = (function reagent$impl$template$cached_prop_name(k){
if(reagent.impl.template.named_QMARK_(k)){
var temp__5722__auto__ = reagent.impl.template.cache_get(reagent.impl.template.prop_name_cache,cljs.core.name(k));
if((temp__5722__auto__ == null)){
return (reagent.impl.template.prop_name_cache[cljs.core.name(k)] = reagent.impl.util.dash_to_camel(k));
} else {
var k_SINGLEQUOTE_ = temp__5722__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
reagent.impl.template.js_val_QMARK_ = (function reagent$impl$template$js_val_QMARK_(x){
return (!(("object" === goog.typeOf(x))));
});
reagent.impl.template.kv_conv = (function reagent$impl$template$kv_conv(o,k,v){
var G__37566 = o;
(G__37566[reagent.impl.template.cached_prop_name(k)] = (reagent.impl.template.convert_prop_value.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.convert_prop_value.cljs$core$IFn$_invoke$arity$1(v) : reagent.impl.template.convert_prop_value.call(null,v)));

return G__37566;
});
reagent.impl.template.convert_prop_value = (function reagent$impl$template$convert_prop_value(x){
if(reagent.impl.template.js_val_QMARK_(x)){
return x;
} else {
if(reagent.impl.template.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(reagent.impl.template.kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.clj__GT_js(x);
} else {
if(cljs.core.ifn_QMARK_(x)){
return (function() { 
var G__37609__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(x,args);
};
var G__37609 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37610__i = 0, G__37610__a = new Array(arguments.length -  0);
while (G__37610__i < G__37610__a.length) {G__37610__a[G__37610__i] = arguments[G__37610__i + 0]; ++G__37610__i;}
  args = new cljs.core.IndexedSeq(G__37610__a,0,null);
} 
return G__37609__delegate.call(this,args);};
G__37609.cljs$lang$maxFixedArity = 0;
G__37609.cljs$lang$applyTo = (function (arglist__37611){
var args = cljs.core.seq(arglist__37611);
return G__37609__delegate(args);
});
G__37609.cljs$core$IFn$_invoke$arity$variadic = G__37609__delegate;
return G__37609;
})()
;
} else {
return cljs.core.clj__GT_js(x);

}
}
}
}
}
});
reagent.impl.template.oset = (function reagent$impl$template$oset(o,k,v){
var G__37567 = (((o == null))?({}):o);
(G__37567[k] = v);

return G__37567;
});
reagent.impl.template.oget = (function reagent$impl$template$oget(o,k){
if((o == null)){
return null;
} else {
return (o[k]);
}
});
reagent.impl.template.set_id_class = (function reagent$impl$template$set_id_class(p,id_class){
var id = (id_class["id"]);
var p__$1 = (((((!((id == null)))) && ((reagent.impl.template.oget(p,"id") == null))))?reagent.impl.template.oset(p,"id",id):p);
var temp__5722__auto__ = (id_class["className"]);
if((temp__5722__auto__ == null)){
return p__$1;
} else {
var class$ = temp__5722__auto__;
var old = reagent.impl.template.oget(p__$1,"className");
return reagent.impl.template.oset(p__$1,"className",(((old == null))?class$:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old)].join('')));
}
});
reagent.impl.template.stringify_class = (function reagent$impl$template$stringify_class(p__37568){
var map__37569 = p__37568;
var map__37569__$1 = (((((!((map__37569 == null))))?(((((map__37569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37569):map__37569);
var props = map__37569__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37569__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if(cljs.core.coll_QMARK_(class$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,class$)));
} else {
return props;
}
});
reagent.impl.template.convert_props = (function reagent$impl$template$convert_props(props,id_class){
return reagent.impl.template.set_id_class(reagent.impl.template.convert_prop_value(reagent.impl.template.stringify_class(props)),id_class);
});
if((typeof reagent !== 'undefined') && (typeof reagent.impl !== 'undefined') && (typeof reagent.impl.template !== 'undefined') && (typeof reagent.impl.template.find_dom_node !== 'undefined')){
} else {
reagent.impl.template.find_dom_node = null;
}
reagent.impl.template.these_inputs_have_selection_api = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["url",null,"tel",null,"text",null,"textarea",null,"password",null,"search",null], null), null);
reagent.impl.template.has_selection_api_QMARK_ = (function reagent$impl$template$has_selection_api_QMARK_(input_type){
return cljs.core.contains_QMARK_(reagent.impl.template.these_inputs_have_selection_api,input_type);
});
reagent.impl.template.input_node_set_value = (function reagent$impl$template$input_node_set_value(node,rendered_value,dom_value,component,p__37571){
var map__37572 = p__37571;
var map__37572__$1 = (((((!((map__37572 == null))))?(((((map__37572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37572):map__37572);
var on_write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37572__$1,new cljs.core.Keyword(null,"on-write","on-write",31519475));
if((!((((node === (document["activeElement"]))) && (reagent.impl.template.has_selection_api_QMARK_((node["type"]))) && (typeof rendered_value === 'string') && (typeof dom_value === 'string'))))){
(component["cljsDOMValue"] = rendered_value);

(node["value"] = rendered_value);

if(cljs.core.fn_QMARK_(on_write)){
return (on_write.cljs$core$IFn$_invoke$arity$1 ? on_write.cljs$core$IFn$_invoke$arity$1(rendered_value) : on_write.call(null,rendered_value));
} else {
return null;
}
} else {
var node_value = (node["value"]);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(node_value,dom_value)){
return reagent.impl.batching.do_after_render(((function (node_value,map__37572,map__37572__$1,on_write){
return (function (){
return (reagent.impl.template.input_component_set_value.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.input_component_set_value.cljs$core$IFn$_invoke$arity$1(component) : reagent.impl.template.input_component_set_value.call(null,component));
});})(node_value,map__37572,map__37572__$1,on_write))
);
} else {
var existing_offset_from_end = (cljs.core.count(node_value) - (node["selectionStart"]));
var new_cursor_offset = (cljs.core.count(rendered_value) - existing_offset_from_end);
(component["cljsDOMValue"] = rendered_value);

(node["value"] = rendered_value);

if(cljs.core.fn_QMARK_(on_write)){
(on_write.cljs$core$IFn$_invoke$arity$1 ? on_write.cljs$core$IFn$_invoke$arity$1(rendered_value) : on_write.call(null,rendered_value));
} else {
}

(node["selectionStart"] = new_cursor_offset);

return (node["selectionEnd"] = new_cursor_offset);
}
}
});
reagent.impl.template.input_component_set_value = (function reagent$impl$template$input_component_set_value(this$){
if(cljs.core.truth_((this$["cljsInputLive"]))){
(this$["cljsInputDirty"] = false);

var rendered_value = (this$["cljsRenderedValue"]);
var dom_value = (this$["cljsDOMValue"]);
var node = (reagent.impl.template.find_dom_node.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.find_dom_node.cljs$core$IFn$_invoke$arity$1(this$) : reagent.impl.template.find_dom_node.call(null,this$));
var synthetic_on_update = (this$["cljsSyntheticOnUpdate"]);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(rendered_value,dom_value)){
if(cljs.core.fn_QMARK_(synthetic_on_update)){
return (synthetic_on_update.cljs$core$IFn$_invoke$arity$5 ? synthetic_on_update.cljs$core$IFn$_invoke$arity$5(reagent.impl.template.input_node_set_value,node,rendered_value,dom_value,this$) : synthetic_on_update.call(null,reagent.impl.template.input_node_set_value,node,rendered_value,dom_value,this$));
} else {
return reagent.impl.template.input_node_set_value(node,rendered_value,dom_value,this$,cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return null;
}
} else {
return null;
}
});
reagent.impl.template.input_handle_change = (function reagent$impl$template$input_handle_change(this$,on_change,e){
(this$["cljsDOMValue"] = e.target.value);

if(cljs.core.truth_((this$["cljsInputDirty"]))){
} else {
(this$["cljsInputDirty"] = true);

reagent.impl.batching.do_after_render((function (){
return reagent.impl.template.input_component_set_value(this$);
}));
}

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(e) : on_change.call(null,e));
});
reagent.impl.template.input_render_setup = (function reagent$impl$template$input_render_setup(var_args){
var G__37576 = arguments.length;
switch (G__37576) {
case 3:
return reagent.impl.template.input_render_setup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return reagent.impl.template.input_render_setup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.impl.template.input_render_setup.cljs$core$IFn$_invoke$arity$3 = (function (this$,jsprops,p__37577){
var map__37578 = p__37577;
var map__37578__$1 = (((((!((map__37578 == null))))?(((((map__37578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37578):map__37578);
var synthetic_on_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37578__$1,new cljs.core.Keyword(null,"synthetic-on-update","synthetic-on-update",1615571932));
var synthetic_on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37578__$1,new cljs.core.Keyword(null,"synthetic-on-change","synthetic-on-change",-2073813537));
if(cljs.core.truth_((function (){var and__4120__auto__ = (!((jsprops == null)));
if(and__4120__auto__){
var and__4120__auto____$1 = jsprops.hasOwnProperty("onChange");
if(cljs.core.truth_(and__4120__auto____$1)){
return jsprops.hasOwnProperty("value");
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
if(cljs.core.truth_(reagent.impl.template.find_dom_node)){
} else {
throw (new Error(["Assert failed: ","reagent.dom needs to be loaded for controlled input to work","\n","find-dom-node"].join('')));
}

if(cljs.core.truth_(synthetic_on_update)){
(this$["cljsSyntheticOnUpdate"] = synthetic_on_update);
} else {
}

var v = (jsprops["value"]);
var value = (((v == null))?"":v);
var on_change = (jsprops["onChange"]);
var on_change__$1 = (cljs.core.truth_(synthetic_on_change)?cljs.core.partial.cljs$core$IFn$_invoke$arity$2(synthetic_on_change,on_change):on_change);
if(cljs.core.truth_((this$["cljsInputLive"]))){
} else {
(this$["cljsInputLive"] = true);

(this$["cljsDOMValue"] = value);
}

(this$["cljsRenderedValue"] = value);

delete jsprops["value"];

var G__37580 = jsprops;
(G__37580["defaultValue"] = value);

(G__37580["onChange"] = ((function (G__37580,v,value,on_change,on_change__$1,map__37578,map__37578__$1,synthetic_on_update,synthetic_on_change){
return (function (p1__37574_SHARP_){
return reagent.impl.template.input_handle_change(this$,on_change__$1,p1__37574_SHARP_);
});})(G__37580,v,value,on_change,on_change__$1,map__37578,map__37578__$1,synthetic_on_update,synthetic_on_change))
);

return G__37580;
} else {
return null;
}
});

reagent.impl.template.input_render_setup.cljs$core$IFn$_invoke$arity$2 = (function (this$,jsprops){
return reagent.impl.template.input_render_setup.cljs$core$IFn$_invoke$arity$3(this$,jsprops,cljs.core.PersistentArrayMap.EMPTY);
});

reagent.impl.template.input_render_setup.cljs$lang$maxFixedArity = 3;

reagent.impl.template.input_unmount = (function reagent$impl$template$input_unmount(this$){
return (this$["cljsInputLive"] = null);
});
reagent.impl.template.input_component_QMARK_ = (function reagent$impl$template$input_component_QMARK_(x){
var G__37581 = x;
switch (G__37581) {
case "input":
case "textarea":
return true;

break;
default:
return false;

}
});
reagent.impl.template.reagent_input_class = null;
reagent.impl.template.reagent_synthetic_input_class = null;
reagent.impl.template.input_spec = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"ReagentInput",new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),reagent.impl.template.input_component_set_value,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),reagent.impl.template.input_unmount,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (argv,comp,jsprops,first_child){
var this$ = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.template.input_render_setup.cljs$core$IFn$_invoke$arity$2(this$,jsprops);

return (reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4 ? reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4(argv,comp,jsprops,first_child) : reagent.impl.template.make_element.call(null,argv,comp,jsprops,first_child));
})], null);
reagent.impl.template.synthetic_input_spec = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"ReagentSyntheticInput",new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),reagent.impl.template.input_component_set_value,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),reagent.impl.template.input_unmount,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (on_update,on_change,argv,comp,jsprops,first_child){
var this$ = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.template.input_render_setup.cljs$core$IFn$_invoke$arity$3(this$,jsprops,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"synthetic-on-update","synthetic-on-update",1615571932),on_update,new cljs.core.Keyword(null,"synthetic-on-change","synthetic-on-change",-2073813537),on_change], null));

return (reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4 ? reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4(argv,comp,jsprops,first_child) : reagent.impl.template.make_element.call(null,argv,comp,jsprops,first_child));
})], null);
reagent.impl.template.reagent_input = (function reagent$impl$template$reagent_input(){
if((reagent.impl.template.reagent_input_class == null)){
reagent.impl.template.reagent_input_class = reagent.impl.component.create_class(reagent.impl.template.input_spec);
} else {
}

return reagent.impl.template.reagent_input_class;
});
reagent.impl.template.reagent_synthetic_input = (function reagent$impl$template$reagent_synthetic_input(){
if((reagent.impl.template.reagent_synthetic_input_class == null)){
reagent.impl.template.reagent_synthetic_input_class = reagent.impl.component.create_class(reagent.impl.template.synthetic_input_spec);
} else {
}

return reagent.impl.template.reagent_synthetic_input_class;
});
reagent.impl.template.parse_tag = (function reagent$impl$template$parse_tag(hiccup_tag){
var vec__37582 = cljs.core.next(cljs.core.re_matches(reagent.impl.template.re_tag,cljs.core.name(hiccup_tag)));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37582,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37582,(1),null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37582,(2),null);
var class$__$1 = (((class$ == null))?null:clojure.string.replace(class$,/\./," "));
if(cljs.core.truth_(tag)){
} else {
throw (new Error(["Assert failed: ",["Invalid tag: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccup_tag),"'",reagent.impl.component.comp_name()].join(''),"\n","tag"].join('')));
}

return ({"name": tag, "id": id, "className": class$__$1});
});
reagent.impl.template.try_get_key = (function reagent$impl$template$try_get_key(x){
try{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"key","key",-1516042587));
}catch (e37585){var e = e37585;
return null;
}});
reagent.impl.template.get_key = (function reagent$impl$template$get_key(x){
if(cljs.core.map_QMARK_(x)){
return reagent.impl.template.try_get_key(x);
} else {
return null;
}
});
reagent.impl.template.key_from_vec = (function reagent$impl$template$key_from_vec(v){
var temp__5722__auto__ = reagent.impl.template.get_key(cljs.core.meta(v));
if((temp__5722__auto__ == null)){
return reagent.impl.template.get_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null));
} else {
var k = temp__5722__auto__;
return k;
}
});
reagent.impl.template.reag_element = (function reagent$impl$template$reag_element(tag,v){
var c = reagent.impl.component.as_class(tag);
var jsprops = ({"argv": v});
var temp__5724__auto___37623 = reagent.impl.template.key_from_vec(v);
if((temp__5724__auto___37623 == null)){
} else {
var key_37624 = temp__5724__auto___37623;
(jsprops["key"] = key_37624);
}

return module$node_modules$react$index.createElement(c,jsprops);
});
reagent.impl.template.adapt_react_class = (function reagent$impl$template$adapt_react_class(var_args){
var G__37587 = arguments.length;
switch (G__37587) {
case 2:
return reagent.impl.template.adapt_react_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return reagent.impl.template.adapt_react_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.impl.template.adapt_react_class.cljs$core$IFn$_invoke$arity$2 = (function (c,p__37588){
var map__37589 = p__37588;
var map__37589__$1 = (((((!((map__37589 == null))))?(((((map__37589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37589):map__37589);
var synthetic_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37589__$1,new cljs.core.Keyword(null,"synthetic-input","synthetic-input",-135147697));
var on_update = new cljs.core.Keyword(null,"on-update","on-update",1680216496).cljs$core$IFn$_invoke$arity$1(synthetic_input);
var on_change = new cljs.core.Keyword(null,"on-change","on-change",-732046149).cljs$core$IFn$_invoke$arity$1(synthetic_input);
if(cljs.core.truth_(synthetic_input)){
if(cljs.core.fn_QMARK_(on_update)){
} else {
throw (new Error("Assert failed: (fn? on-update)"));
}

if(cljs.core.fn_QMARK_(on_change)){
} else {
throw (new Error("Assert failed: (fn? on-change)"));
}
} else {
}

var wrapped = (function (){var G__37591 = reagent.impl.template.__GT_NativeWrapper();
(G__37591["name"] = c);

(G__37591["id"] = null);

(G__37591["class"] = null);

return G__37591;
})();
var wrapped__$1 = (cljs.core.truth_(synthetic_input)?(function (){var G__37592 = wrapped;
(G__37592["syntheticInput"] = true);

return G__37592;
})():wrapped);
var wrapped__$2 = (cljs.core.truth_(synthetic_input)?(function (){var G__37593 = wrapped__$1;
(G__37593["syntheticOnChange"] = on_change);

return G__37593;
})():wrapped__$1);
var wrapped__$3 = (cljs.core.truth_(synthetic_input)?(function (){var G__37594 = wrapped__$2;
(G__37594["syntheticOnUpdate"] = on_update);

return G__37594;
})():wrapped__$2);
return wrapped__$3;
});

reagent.impl.template.adapt_react_class.cljs$core$IFn$_invoke$arity$1 = (function (c){
return reagent.impl.template.adapt_react_class.cljs$core$IFn$_invoke$arity$2(c,cljs.core.PersistentArrayMap.EMPTY);
});

reagent.impl.template.adapt_react_class.cljs$lang$maxFixedArity = 2;

reagent.impl.template.tag_name_cache = ({});
reagent.impl.template.cached_parse = (function reagent$impl$template$cached_parse(x){
var temp__5722__auto__ = reagent.impl.template.cache_get(reagent.impl.template.tag_name_cache,x);
if((temp__5722__auto__ == null)){
return (reagent.impl.template.tag_name_cache[x] = reagent.impl.template.parse_tag(x));
} else {
var s = temp__5722__auto__;
return s;
}
});
reagent.impl.template.native_element = (function reagent$impl$template$native_element(parsed,argv,first){
var comp = (parsed["name"]);
var synthetic_input = (parsed["syntheticInput"]);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,first,null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_(props)));
var jsprops = reagent.impl.template.convert_props(((hasprops)?props:null),parsed);
var first_child = (first + ((hasprops)?(1):(0)));
if(cljs.core.truth_((function (){var or__4131__auto__ = synthetic_input;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reagent.impl.template.input_component_QMARK_(comp);
}
})())){
var G__37595 = cljs.core.with_meta((cljs.core.truth_(synthetic_input)?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.reagent_synthetic_input(),(parsed["syntheticOnUpdate"]),(parsed["syntheticOnChange"]),argv,comp,jsprops,first_child], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.reagent_input(),argv,comp,jsprops,first_child], null)),cljs.core.meta(argv));
return (reagent.impl.template.as_element.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.as_element.cljs$core$IFn$_invoke$arity$1(G__37595) : reagent.impl.template.as_element.call(null,G__37595));
} else {
var key = reagent.impl.template.get_key(cljs.core.meta(argv));
var p = (((key == null))?jsprops:reagent.impl.template.oset(jsprops,"key",key));
return (reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4 ? reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4(argv,comp,p,first_child) : reagent.impl.template.make_element.call(null,argv,comp,p,first_child));
}
});
reagent.impl.template.str_coll = (function reagent$impl$template$str_coll(coll){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.walk.prewalk((function (x){
if(cljs.core.fn_QMARK_(x)){
var n = reagent.impl.util.fun_name(x);
var G__37597 = n;
switch (G__37597) {
case "":
return x;

break;
default:
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(n);

}
} else {
return x;
}
}),coll));

});
reagent.impl.template.hiccup_err = (function reagent$impl$template$hiccup_err(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37631 = arguments.length;
var i__4731__auto___37632 = (0);
while(true){
if((i__4731__auto___37632 < len__4730__auto___37631)){
args__4736__auto__.push((arguments[i__4731__auto___37632]));

var G__37633 = (i__4731__auto___37632 + (1));
i__4731__auto___37632 = G__37633;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic = (function (v,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg)),": ",reagent.impl.template.str_coll(v),"\n",reagent.impl.component.comp_name()].join('');
});

reagent.impl.template.hiccup_err.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.impl.template.hiccup_err.cljs$lang$applyTo = (function (seq37598){
var G__37599 = cljs.core.first(seq37598);
var seq37598__$1 = cljs.core.next(seq37598);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37599,seq37598__$1);
});

reagent.impl.template.vec_to_elem = (function reagent$impl$template$vec_to_elem(v){
while(true){
if((cljs.core.count(v) > (0))){
} else {
throw (new Error(["Assert failed: ",reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hiccup form should not be empty"], 0)),"\n","(pos? (count v))"].join('')));
}

var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),null);
if(reagent.impl.template.valid_tag_QMARK_(tag)){
} else {
throw (new Error(["Assert failed: ",reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid Hiccup form"], 0)),"\n","(valid-tag? tag)"].join('')));
}

if(reagent.impl.template.hiccup_tag_QMARK_(tag)){
var n = cljs.core.name(tag);
var pos = n.indexOf(">");
var G__37600 = pos;
switch (G__37600) {
case (-1):
return reagent.impl.template.native_element(reagent.impl.template.cached_parse(n),v,(1));

break;
case (0):
var comp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",n)){
} else {
throw (new Error(["Assert failed: ",reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid Hiccup tag"], 0)),"\n","(= \">\" n)"].join('')));
}

if(((typeof comp === 'string') || (cljs.core.fn_QMARK_(comp)))){
} else {
throw (new Error(["Assert failed: ",reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected React component in"], 0)),"\n","(or (string? comp) (fn? comp))"].join('')));
}

return reagent.impl.template.native_element(({"name": comp}),v,(2));

break;
default:
var G__37636 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(n,(0),pos),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,(0),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(n,(pos + (1))))], null);
v = G__37636;
continue;

}
} else {
if((tag instanceof reagent.impl.template.NativeWrapper)){
return reagent.impl.template.native_element(tag,v,(1));
} else {
return reagent.impl.template.reag_element(tag,v);

}
}
break;
}
});
reagent.impl.template.as_element = (function reagent$impl$template$as_element(x){
if(reagent.impl.template.js_val_QMARK_(x)){
return x;
} else {
if(cljs.core.vector_QMARK_(x)){
return reagent.impl.template.vec_to_elem(x);
} else {
if(cljs.core.seq_QMARK_(x)){
return (reagent.impl.template.expand_seq_check.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.expand_seq_check.cljs$core$IFn$_invoke$arity$1(x) : reagent.impl.template.expand_seq_check.call(null,x));

} else {
if(reagent.impl.template.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IPrintWithWriter$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,x))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
return x;

}
}
}
}
}
});
reagent.impl.component.as_element = reagent.impl.template.as_element;
reagent.impl.template.expand_seq = (function reagent$impl$template$expand_seq(s){
var a = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(s);
var n__4607__auto___37658 = a.length;
var i_37659 = (0);
while(true){
if((i_37659 < n__4607__auto___37658)){
(a[i_37659] = reagent.impl.template.as_element((a[i_37659])));

var G__37660 = (i_37659 + (1));
i_37659 = G__37660;
continue;
} else {
}
break;
}

return a;
});
reagent.impl.template.expand_seq_dev = (function reagent$impl$template$expand_seq_dev(s,o){
var a = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(s);
var n__4607__auto___37661 = a.length;
var i_37662 = (0);
while(true){
if((i_37662 < n__4607__auto___37661)){
var val_37663 = (a[i_37662]);
if(((cljs.core.vector_QMARK_(val_37663)) && ((reagent.impl.template.key_from_vec(val_37663) == null)))){
(o["no-key"] = true);
} else {
}

(a[i_37662] = reagent.impl.template.as_element(val_37663));

var G__37664 = (i_37662 + (1));
i_37662 = G__37664;
continue;
} else {
}
break;
}

return a;
});
reagent.impl.template.expand_seq_check = (function reagent$impl$template$expand_seq_check(x){
var ctx = ({});
var vec__37602 = reagent.ratom.check_derefs(((function (ctx){
return (function (){
return reagent.impl.template.expand_seq_dev(x,ctx);
});})(ctx))
);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37602,(0),null);
var derefed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37602,(1),null);
if(cljs.core.truth_(derefed)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ",reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Reactive deref not supported in lazy seq, ","it should be wrapped in doall"], 0))].join(''));
} else {
}
} else {
}

if(cljs.core.truth_((ctx["no-key"]))){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ",reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Every element in a seq should have a unique :key"], 0))].join(''));
} else {
}
} else {
}

return res;
});
reagent.impl.template.make_element = (function reagent$impl$template$make_element(argv,comp,jsprops,first_child){
var G__37605 = (cljs.core.count(argv) - first_child);
switch (G__37605) {
case (0):
return module$node_modules$react$index.createElement(comp,jsprops);

break;
case (1):
var G__37606 = comp;
var G__37607 = jsprops;
var G__37608 = reagent.impl.template.as_element(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,first_child,null));
return module$node_modules$react$index.createElement(G__37606,G__37607,G__37608);

break;
default:
return module$node_modules$react$index.createElement.apply(null,cljs.core.reduce_kv(((function (G__37605){
return (function (a,k,v){
if((k >= first_child)){
a.push(reagent.impl.template.as_element(v));
} else {
}

return a;
});})(G__37605))
,[comp,jsprops],argv));

}
});

//# sourceMappingURL=reagent.impl.template.js.map
