goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33891 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33891(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33894 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33894(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32916 = coll;
var G__32917 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32916,G__32917) : shadow.dom.lazy_native_coll_seq.call(null,G__32916,G__32917));
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
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

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
var G__32937 = arguments.length;
switch (G__32937) {
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

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32952 = arguments.length;
switch (G__32952) {
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

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32960 = arguments.length;
switch (G__32960) {
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

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32974 = arguments.length;
switch (G__32974) {
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

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32987 = arguments.length;
switch (G__32987) {
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

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32996 = arguments.length;
switch (G__32996) {
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

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33004){if((e33004 instanceof Object)){
var e = e33004;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33004;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33008 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33009 = null;
var count__33010 = (0);
var i__33011 = (0);
while(true){
if((i__33011 < count__33010)){
var el = chunk__33009.cljs$core$IIndexed$_nth$arity$2(null,i__33011);
var handler_33921__$1 = ((function (seq__33008,chunk__33009,count__33010,i__33011,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33008,chunk__33009,count__33010,i__33011,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33921__$1);


var G__33922 = seq__33008;
var G__33923 = chunk__33009;
var G__33924 = count__33010;
var G__33925 = (i__33011 + (1));
seq__33008 = G__33922;
chunk__33009 = G__33923;
count__33010 = G__33924;
i__33011 = G__33925;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33008);
if(temp__5735__auto__){
var seq__33008__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33008__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33008__$1);
var G__33926 = cljs.core.chunk_rest(seq__33008__$1);
var G__33927 = c__4556__auto__;
var G__33928 = cljs.core.count(c__4556__auto__);
var G__33929 = (0);
seq__33008 = G__33926;
chunk__33009 = G__33927;
count__33010 = G__33928;
i__33011 = G__33929;
continue;
} else {
var el = cljs.core.first(seq__33008__$1);
var handler_33930__$1 = ((function (seq__33008,chunk__33009,count__33010,i__33011,el,seq__33008__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33008,chunk__33009,count__33010,i__33011,el,seq__33008__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33930__$1);


var G__33931 = cljs.core.next(seq__33008__$1);
var G__33932 = null;
var G__33933 = (0);
var G__33934 = (0);
seq__33008 = G__33931;
chunk__33009 = G__33932;
count__33010 = G__33933;
i__33011 = G__33934;
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
var G__33033 = arguments.length;
switch (G__33033) {
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

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33053 = cljs.core.seq(events);
var chunk__33054 = null;
var count__33055 = (0);
var i__33056 = (0);
while(true){
if((i__33056 < count__33055)){
var vec__33074 = chunk__33054.cljs$core$IIndexed$_nth$arity$2(null,i__33056);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33074,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33074,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33936 = seq__33053;
var G__33937 = chunk__33054;
var G__33938 = count__33055;
var G__33939 = (i__33056 + (1));
seq__33053 = G__33936;
chunk__33054 = G__33937;
count__33055 = G__33938;
i__33056 = G__33939;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33053);
if(temp__5735__auto__){
var seq__33053__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33053__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33053__$1);
var G__33940 = cljs.core.chunk_rest(seq__33053__$1);
var G__33941 = c__4556__auto__;
var G__33942 = cljs.core.count(c__4556__auto__);
var G__33943 = (0);
seq__33053 = G__33940;
chunk__33054 = G__33941;
count__33055 = G__33942;
i__33056 = G__33943;
continue;
} else {
var vec__33084 = cljs.core.first(seq__33053__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33084,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33084,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33944 = cljs.core.next(seq__33053__$1);
var G__33945 = null;
var G__33946 = (0);
var G__33947 = (0);
seq__33053 = G__33944;
chunk__33054 = G__33945;
count__33055 = G__33946;
i__33056 = G__33947;
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
var seq__33093 = cljs.core.seq(styles);
var chunk__33094 = null;
var count__33095 = (0);
var i__33096 = (0);
while(true){
if((i__33096 < count__33095)){
var vec__33115 = chunk__33094.cljs$core$IIndexed$_nth$arity$2(null,i__33096);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33115,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33115,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33948 = seq__33093;
var G__33949 = chunk__33094;
var G__33950 = count__33095;
var G__33951 = (i__33096 + (1));
seq__33093 = G__33948;
chunk__33094 = G__33949;
count__33095 = G__33950;
i__33096 = G__33951;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33093);
if(temp__5735__auto__){
var seq__33093__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33093__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33093__$1);
var G__33952 = cljs.core.chunk_rest(seq__33093__$1);
var G__33953 = c__4556__auto__;
var G__33954 = cljs.core.count(c__4556__auto__);
var G__33955 = (0);
seq__33093 = G__33952;
chunk__33094 = G__33953;
count__33095 = G__33954;
i__33096 = G__33955;
continue;
} else {
var vec__33140 = cljs.core.first(seq__33093__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33140,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33140,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33956 = cljs.core.next(seq__33093__$1);
var G__33957 = null;
var G__33958 = (0);
var G__33959 = (0);
seq__33093 = G__33956;
chunk__33094 = G__33957;
count__33095 = G__33958;
i__33096 = G__33959;
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
var G__33149_33960 = key;
var G__33149_33961__$1 = (((G__33149_33960 instanceof cljs.core.Keyword))?G__33149_33960.fqn:null);
switch (G__33149_33961__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

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
var ks_33963 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_33963,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_33963,"aria-");
}
})())){
el.setAttribute(ks_33963,value);
} else {
(el[ks_33963] = value);
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
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33189){
var map__33190 = p__33189;
var map__33190__$1 = (((((!((map__33190 == null))))?(((((map__33190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33190):map__33190);
var props = map__33190__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33190__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33192 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33192,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33192,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33192,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33199 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33199,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33199;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33209 = arguments.length;
switch (G__33209) {
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

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33224){
var vec__33226 = p__33224;
var seq__33227 = cljs.core.seq(vec__33226);
var first__33228 = cljs.core.first(seq__33227);
var seq__33227__$1 = cljs.core.next(seq__33227);
var nn = first__33228;
var first__33228__$1 = cljs.core.first(seq__33227__$1);
var seq__33227__$2 = cljs.core.next(seq__33227__$1);
var np = first__33228__$1;
var nc = seq__33227__$2;
var node = vec__33226;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33231 = nn;
var G__33232 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33231,G__33232) : create_fn.call(null,G__33231,G__33232));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33235 = nn;
var G__33237 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33235,G__33237) : create_fn.call(null,G__33235,G__33237));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33241 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33241,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33241,(1),null);
var seq__33245_33974 = cljs.core.seq(node_children);
var chunk__33246_33975 = null;
var count__33247_33976 = (0);
var i__33248_33977 = (0);
while(true){
if((i__33248_33977 < count__33247_33976)){
var child_struct_33978 = chunk__33246_33975.cljs$core$IIndexed$_nth$arity$2(null,i__33248_33977);
var children_33979 = shadow.dom.dom_node(child_struct_33978);
if(cljs.core.seq_QMARK_(children_33979)){
var seq__33290_33980 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33979));
var chunk__33292_33981 = null;
var count__33293_33982 = (0);
var i__33294_33983 = (0);
while(true){
if((i__33294_33983 < count__33293_33982)){
var child_33984 = chunk__33292_33981.cljs$core$IIndexed$_nth$arity$2(null,i__33294_33983);
if(cljs.core.truth_(child_33984)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33984);


var G__33985 = seq__33290_33980;
var G__33986 = chunk__33292_33981;
var G__33987 = count__33293_33982;
var G__33988 = (i__33294_33983 + (1));
seq__33290_33980 = G__33985;
chunk__33292_33981 = G__33986;
count__33293_33982 = G__33987;
i__33294_33983 = G__33988;
continue;
} else {
var G__33989 = seq__33290_33980;
var G__33990 = chunk__33292_33981;
var G__33991 = count__33293_33982;
var G__33992 = (i__33294_33983 + (1));
seq__33290_33980 = G__33989;
chunk__33292_33981 = G__33990;
count__33293_33982 = G__33991;
i__33294_33983 = G__33992;
continue;
}
} else {
var temp__5735__auto___33994 = cljs.core.seq(seq__33290_33980);
if(temp__5735__auto___33994){
var seq__33290_33996__$1 = temp__5735__auto___33994;
if(cljs.core.chunked_seq_QMARK_(seq__33290_33996__$1)){
var c__4556__auto___33998 = cljs.core.chunk_first(seq__33290_33996__$1);
var G__33999 = cljs.core.chunk_rest(seq__33290_33996__$1);
var G__34000 = c__4556__auto___33998;
var G__34001 = cljs.core.count(c__4556__auto___33998);
var G__34002 = (0);
seq__33290_33980 = G__33999;
chunk__33292_33981 = G__34000;
count__33293_33982 = G__34001;
i__33294_33983 = G__34002;
continue;
} else {
var child_34003 = cljs.core.first(seq__33290_33996__$1);
if(cljs.core.truth_(child_34003)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34003);


var G__34004 = cljs.core.next(seq__33290_33996__$1);
var G__34005 = null;
var G__34006 = (0);
var G__34007 = (0);
seq__33290_33980 = G__34004;
chunk__33292_33981 = G__34005;
count__33293_33982 = G__34006;
i__33294_33983 = G__34007;
continue;
} else {
var G__34008 = cljs.core.next(seq__33290_33996__$1);
var G__34009 = null;
var G__34010 = (0);
var G__34011 = (0);
seq__33290_33980 = G__34008;
chunk__33292_33981 = G__34009;
count__33293_33982 = G__34010;
i__33294_33983 = G__34011;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33979);
}


var G__34012 = seq__33245_33974;
var G__34013 = chunk__33246_33975;
var G__34014 = count__33247_33976;
var G__34015 = (i__33248_33977 + (1));
seq__33245_33974 = G__34012;
chunk__33246_33975 = G__34013;
count__33247_33976 = G__34014;
i__33248_33977 = G__34015;
continue;
} else {
var temp__5735__auto___34016 = cljs.core.seq(seq__33245_33974);
if(temp__5735__auto___34016){
var seq__33245_34017__$1 = temp__5735__auto___34016;
if(cljs.core.chunked_seq_QMARK_(seq__33245_34017__$1)){
var c__4556__auto___34018 = cljs.core.chunk_first(seq__33245_34017__$1);
var G__34019 = cljs.core.chunk_rest(seq__33245_34017__$1);
var G__34020 = c__4556__auto___34018;
var G__34021 = cljs.core.count(c__4556__auto___34018);
var G__34022 = (0);
seq__33245_33974 = G__34019;
chunk__33246_33975 = G__34020;
count__33247_33976 = G__34021;
i__33248_33977 = G__34022;
continue;
} else {
var child_struct_34023 = cljs.core.first(seq__33245_34017__$1);
var children_34024 = shadow.dom.dom_node(child_struct_34023);
if(cljs.core.seq_QMARK_(children_34024)){
var seq__33314_34025 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34024));
var chunk__33316_34026 = null;
var count__33317_34027 = (0);
var i__33318_34028 = (0);
while(true){
if((i__33318_34028 < count__33317_34027)){
var child_34029 = chunk__33316_34026.cljs$core$IIndexed$_nth$arity$2(null,i__33318_34028);
if(cljs.core.truth_(child_34029)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34029);


var G__34030 = seq__33314_34025;
var G__34031 = chunk__33316_34026;
var G__34032 = count__33317_34027;
var G__34033 = (i__33318_34028 + (1));
seq__33314_34025 = G__34030;
chunk__33316_34026 = G__34031;
count__33317_34027 = G__34032;
i__33318_34028 = G__34033;
continue;
} else {
var G__34034 = seq__33314_34025;
var G__34035 = chunk__33316_34026;
var G__34036 = count__33317_34027;
var G__34037 = (i__33318_34028 + (1));
seq__33314_34025 = G__34034;
chunk__33316_34026 = G__34035;
count__33317_34027 = G__34036;
i__33318_34028 = G__34037;
continue;
}
} else {
var temp__5735__auto___34038__$1 = cljs.core.seq(seq__33314_34025);
if(temp__5735__auto___34038__$1){
var seq__33314_34039__$1 = temp__5735__auto___34038__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33314_34039__$1)){
var c__4556__auto___34040 = cljs.core.chunk_first(seq__33314_34039__$1);
var G__34041 = cljs.core.chunk_rest(seq__33314_34039__$1);
var G__34042 = c__4556__auto___34040;
var G__34043 = cljs.core.count(c__4556__auto___34040);
var G__34044 = (0);
seq__33314_34025 = G__34041;
chunk__33316_34026 = G__34042;
count__33317_34027 = G__34043;
i__33318_34028 = G__34044;
continue;
} else {
var child_34045 = cljs.core.first(seq__33314_34039__$1);
if(cljs.core.truth_(child_34045)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34045);


var G__34046 = cljs.core.next(seq__33314_34039__$1);
var G__34047 = null;
var G__34048 = (0);
var G__34049 = (0);
seq__33314_34025 = G__34046;
chunk__33316_34026 = G__34047;
count__33317_34027 = G__34048;
i__33318_34028 = G__34049;
continue;
} else {
var G__34050 = cljs.core.next(seq__33314_34039__$1);
var G__34051 = null;
var G__34052 = (0);
var G__34053 = (0);
seq__33314_34025 = G__34050;
chunk__33316_34026 = G__34051;
count__33317_34027 = G__34052;
i__33318_34028 = G__34053;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34024);
}


var G__34054 = cljs.core.next(seq__33245_34017__$1);
var G__34055 = null;
var G__34056 = (0);
var G__34057 = (0);
seq__33245_33974 = G__34054;
chunk__33246_33975 = G__34055;
count__33247_33976 = G__34056;
i__33248_33977 = G__34057;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33345 = cljs.core.seq(node);
var chunk__33346 = null;
var count__33347 = (0);
var i__33348 = (0);
while(true){
if((i__33348 < count__33347)){
var n = chunk__33346.cljs$core$IIndexed$_nth$arity$2(null,i__33348);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34061 = seq__33345;
var G__34062 = chunk__33346;
var G__34063 = count__33347;
var G__34064 = (i__33348 + (1));
seq__33345 = G__34061;
chunk__33346 = G__34062;
count__33347 = G__34063;
i__33348 = G__34064;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33345);
if(temp__5735__auto__){
var seq__33345__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33345__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33345__$1);
var G__34065 = cljs.core.chunk_rest(seq__33345__$1);
var G__34066 = c__4556__auto__;
var G__34067 = cljs.core.count(c__4556__auto__);
var G__34068 = (0);
seq__33345 = G__34065;
chunk__33346 = G__34066;
count__33347 = G__34067;
i__33348 = G__34068;
continue;
} else {
var n = cljs.core.first(seq__33345__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34069 = cljs.core.next(seq__33345__$1);
var G__34070 = null;
var G__34071 = (0);
var G__34072 = (0);
seq__33345 = G__34069;
chunk__33346 = G__34070;
count__33347 = G__34071;
i__33348 = G__34072;
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
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33360 = arguments.length;
switch (G__33360) {
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

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33368 = arguments.length;
switch (G__33368) {
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

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

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
var G__33383 = arguments.length;
switch (G__33383) {
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

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

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
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34082 = arguments.length;
var i__4737__auto___34083 = (0);
while(true){
if((i__4737__auto___34083 < len__4736__auto___34082)){
args__4742__auto__.push((arguments[i__4737__auto___34083]));

var G__34084 = (i__4737__auto___34083 + (1));
i__4737__auto___34083 = G__34084;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33432_34085 = cljs.core.seq(nodes);
var chunk__33433_34086 = null;
var count__33434_34087 = (0);
var i__33435_34088 = (0);
while(true){
if((i__33435_34088 < count__33434_34087)){
var node_34089 = chunk__33433_34086.cljs$core$IIndexed$_nth$arity$2(null,i__33435_34088);
fragment.appendChild(shadow.dom._to_dom(node_34089));


var G__34090 = seq__33432_34085;
var G__34091 = chunk__33433_34086;
var G__34092 = count__33434_34087;
var G__34093 = (i__33435_34088 + (1));
seq__33432_34085 = G__34090;
chunk__33433_34086 = G__34091;
count__33434_34087 = G__34092;
i__33435_34088 = G__34093;
continue;
} else {
var temp__5735__auto___34094 = cljs.core.seq(seq__33432_34085);
if(temp__5735__auto___34094){
var seq__33432_34095__$1 = temp__5735__auto___34094;
if(cljs.core.chunked_seq_QMARK_(seq__33432_34095__$1)){
var c__4556__auto___34096 = cljs.core.chunk_first(seq__33432_34095__$1);
var G__34097 = cljs.core.chunk_rest(seq__33432_34095__$1);
var G__34098 = c__4556__auto___34096;
var G__34099 = cljs.core.count(c__4556__auto___34096);
var G__34100 = (0);
seq__33432_34085 = G__34097;
chunk__33433_34086 = G__34098;
count__33434_34087 = G__34099;
i__33435_34088 = G__34100;
continue;
} else {
var node_34101 = cljs.core.first(seq__33432_34095__$1);
fragment.appendChild(shadow.dom._to_dom(node_34101));


var G__34102 = cljs.core.next(seq__33432_34095__$1);
var G__34103 = null;
var G__34104 = (0);
var G__34105 = (0);
seq__33432_34085 = G__34102;
chunk__33433_34086 = G__34103;
count__33434_34087 = G__34104;
i__33435_34088 = G__34105;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33424){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33424));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33477_34106 = cljs.core.seq(scripts);
var chunk__33478_34107 = null;
var count__33479_34108 = (0);
var i__33480_34109 = (0);
while(true){
if((i__33480_34109 < count__33479_34108)){
var vec__33495_34111 = chunk__33478_34107.cljs$core$IIndexed$_nth$arity$2(null,i__33480_34109);
var script_tag_34112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33495_34111,(0),null);
var script_body_34114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33495_34111,(1),null);
eval(script_body_34114);


var G__34116 = seq__33477_34106;
var G__34117 = chunk__33478_34107;
var G__34118 = count__33479_34108;
var G__34119 = (i__33480_34109 + (1));
seq__33477_34106 = G__34116;
chunk__33478_34107 = G__34117;
count__33479_34108 = G__34118;
i__33480_34109 = G__34119;
continue;
} else {
var temp__5735__auto___34120 = cljs.core.seq(seq__33477_34106);
if(temp__5735__auto___34120){
var seq__33477_34121__$1 = temp__5735__auto___34120;
if(cljs.core.chunked_seq_QMARK_(seq__33477_34121__$1)){
var c__4556__auto___34122 = cljs.core.chunk_first(seq__33477_34121__$1);
var G__34123 = cljs.core.chunk_rest(seq__33477_34121__$1);
var G__34124 = c__4556__auto___34122;
var G__34125 = cljs.core.count(c__4556__auto___34122);
var G__34126 = (0);
seq__33477_34106 = G__34123;
chunk__33478_34107 = G__34124;
count__33479_34108 = G__34125;
i__33480_34109 = G__34126;
continue;
} else {
var vec__33500_34127 = cljs.core.first(seq__33477_34121__$1);
var script_tag_34128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33500_34127,(0),null);
var script_body_34129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33500_34127,(1),null);
eval(script_body_34129);


var G__34130 = cljs.core.next(seq__33477_34121__$1);
var G__34131 = null;
var G__34132 = (0);
var G__34133 = (0);
seq__33477_34106 = G__34130;
chunk__33478_34107 = G__34131;
count__33479_34108 = G__34132;
i__33480_34109 = G__34133;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33509){
var vec__33511 = p__33509;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33511,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33511,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33525 = arguments.length;
switch (G__33525) {
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

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
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
var seq__33554 = cljs.core.seq(style_keys);
var chunk__33555 = null;
var count__33556 = (0);
var i__33557 = (0);
while(true){
if((i__33557 < count__33556)){
var it = chunk__33555.cljs$core$IIndexed$_nth$arity$2(null,i__33557);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34140 = seq__33554;
var G__34141 = chunk__33555;
var G__34142 = count__33556;
var G__34143 = (i__33557 + (1));
seq__33554 = G__34140;
chunk__33555 = G__34141;
count__33556 = G__34142;
i__33557 = G__34143;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33554);
if(temp__5735__auto__){
var seq__33554__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33554__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33554__$1);
var G__34144 = cljs.core.chunk_rest(seq__33554__$1);
var G__34145 = c__4556__auto__;
var G__34146 = cljs.core.count(c__4556__auto__);
var G__34147 = (0);
seq__33554 = G__34144;
chunk__33555 = G__34145;
count__33556 = G__34146;
i__33557 = G__34147;
continue;
} else {
var it = cljs.core.first(seq__33554__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34148 = cljs.core.next(seq__33554__$1);
var G__34149 = null;
var G__34150 = (0);
var G__34151 = (0);
seq__33554 = G__34148;
chunk__33555 = G__34149;
count__33556 = G__34150;
i__33557 = G__34151;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33563,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33575 = k33563;
var G__33575__$1 = (((G__33575 instanceof cljs.core.Keyword))?G__33575.fqn:null);
switch (G__33575__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33563,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33579){
var vec__33580 = p__33579;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33580,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33580,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33562){
var self__ = this;
var G__33562__$1 = this;
return (new cljs.core.RecordIter((0),G__33562__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33564,other33565){
var self__ = this;
var this33564__$1 = this;
return (((!((other33565 == null)))) && ((this33564__$1.constructor === other33565.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33564__$1.x,other33565.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33564__$1.y,other33565.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33564__$1.__extmap,other33565.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33562){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33591 = cljs.core.keyword_identical_QMARK_;
var expr__33592 = k__4388__auto__;
if(cljs.core.truth_((pred__33591.cljs$core$IFn$_invoke$arity$2 ? pred__33591.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33592) : pred__33591.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33592)))){
return (new shadow.dom.Coordinate(G__33562,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33591.cljs$core$IFn$_invoke$arity$2 ? pred__33591.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33592) : pred__33591.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33592)))){
return (new shadow.dom.Coordinate(self__.x,G__33562,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33562),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33562){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33562,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33568){
var extmap__4419__auto__ = (function (){var G__33600 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33568,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33568)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33600);
} else {
return G__33600;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33568),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33568),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33604,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33608 = k33604;
var G__33608__$1 = (((G__33608 instanceof cljs.core.Keyword))?G__33608.fqn:null);
switch (G__33608__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33604,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33611){
var vec__33612 = p__33611;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33612,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33612,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33603){
var self__ = this;
var G__33603__$1 = this;
return (new cljs.core.RecordIter((0),G__33603__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33605,other33606){
var self__ = this;
var this33605__$1 = this;
return (((!((other33606 == null)))) && ((this33605__$1.constructor === other33606.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33605__$1.w,other33606.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33605__$1.h,other33606.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33605__$1.__extmap,other33606.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33603){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33617 = cljs.core.keyword_identical_QMARK_;
var expr__33618 = k__4388__auto__;
if(cljs.core.truth_((pred__33617.cljs$core$IFn$_invoke$arity$2 ? pred__33617.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33618) : pred__33617.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33618)))){
return (new shadow.dom.Size(G__33603,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33617.cljs$core$IFn$_invoke$arity$2 ? pred__33617.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33618) : pred__33617.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33618)))){
return (new shadow.dom.Size(self__.w,G__33603,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33603),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33603){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33603,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33607){
var extmap__4419__auto__ = (function (){var G__33624 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33607,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33607)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33624);
} else {
return G__33624;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33607),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33607),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
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
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__34174 = (i + (1));
var G__34175 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34174;
ret = G__34175;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33647){
var vec__33648 = p__33647;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33648,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33648,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33654 = arguments.length;
switch (G__33654) {
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

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
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
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33669 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33669,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33669,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33669,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33672_34181 = cljs.core.seq(props);
var chunk__33673_34182 = null;
var count__33674_34183 = (0);
var i__33675_34184 = (0);
while(true){
if((i__33675_34184 < count__33674_34183)){
var vec__33684_34185 = chunk__33673_34182.cljs$core$IIndexed$_nth$arity$2(null,i__33675_34184);
var k_34186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33684_34185,(0),null);
var v_34187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33684_34185,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34186);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34186),v_34187);


var G__34188 = seq__33672_34181;
var G__34189 = chunk__33673_34182;
var G__34190 = count__33674_34183;
var G__34191 = (i__33675_34184 + (1));
seq__33672_34181 = G__34188;
chunk__33673_34182 = G__34189;
count__33674_34183 = G__34190;
i__33675_34184 = G__34191;
continue;
} else {
var temp__5735__auto___34192 = cljs.core.seq(seq__33672_34181);
if(temp__5735__auto___34192){
var seq__33672_34194__$1 = temp__5735__auto___34192;
if(cljs.core.chunked_seq_QMARK_(seq__33672_34194__$1)){
var c__4556__auto___34196 = cljs.core.chunk_first(seq__33672_34194__$1);
var G__34197 = cljs.core.chunk_rest(seq__33672_34194__$1);
var G__34198 = c__4556__auto___34196;
var G__34199 = cljs.core.count(c__4556__auto___34196);
var G__34200 = (0);
seq__33672_34181 = G__34197;
chunk__33673_34182 = G__34198;
count__33674_34183 = G__34199;
i__33675_34184 = G__34200;
continue;
} else {
var vec__33688_34202 = cljs.core.first(seq__33672_34194__$1);
var k_34203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33688_34202,(0),null);
var v_34204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33688_34202,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34203);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34203),v_34204);


var G__34205 = cljs.core.next(seq__33672_34194__$1);
var G__34206 = null;
var G__34207 = (0);
var G__34208 = (0);
seq__33672_34181 = G__34205;
chunk__33673_34182 = G__34206;
count__33674_34183 = G__34207;
i__33675_34184 = G__34208;
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
var vec__33696 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33696,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33696,(1),null);
var seq__33699_34209 = cljs.core.seq(node_children);
var chunk__33701_34210 = null;
var count__33702_34211 = (0);
var i__33703_34212 = (0);
while(true){
if((i__33703_34212 < count__33702_34211)){
var child_struct_34214 = chunk__33701_34210.cljs$core$IIndexed$_nth$arity$2(null,i__33703_34212);
if((!((child_struct_34214 == null)))){
if(typeof child_struct_34214 === 'string'){
var text_34215 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34215),child_struct_34214].join(''));
} else {
var children_34216 = shadow.dom.svg_node(child_struct_34214);
if(cljs.core.seq_QMARK_(children_34216)){
var seq__33733_34218 = cljs.core.seq(children_34216);
var chunk__33735_34219 = null;
var count__33736_34220 = (0);
var i__33737_34221 = (0);
while(true){
if((i__33737_34221 < count__33736_34220)){
var child_34222 = chunk__33735_34219.cljs$core$IIndexed$_nth$arity$2(null,i__33737_34221);
if(cljs.core.truth_(child_34222)){
node.appendChild(child_34222);


var G__34223 = seq__33733_34218;
var G__34224 = chunk__33735_34219;
var G__34225 = count__33736_34220;
var G__34226 = (i__33737_34221 + (1));
seq__33733_34218 = G__34223;
chunk__33735_34219 = G__34224;
count__33736_34220 = G__34225;
i__33737_34221 = G__34226;
continue;
} else {
var G__34228 = seq__33733_34218;
var G__34229 = chunk__33735_34219;
var G__34230 = count__33736_34220;
var G__34231 = (i__33737_34221 + (1));
seq__33733_34218 = G__34228;
chunk__33735_34219 = G__34229;
count__33736_34220 = G__34230;
i__33737_34221 = G__34231;
continue;
}
} else {
var temp__5735__auto___34232 = cljs.core.seq(seq__33733_34218);
if(temp__5735__auto___34232){
var seq__33733_34233__$1 = temp__5735__auto___34232;
if(cljs.core.chunked_seq_QMARK_(seq__33733_34233__$1)){
var c__4556__auto___34234 = cljs.core.chunk_first(seq__33733_34233__$1);
var G__34235 = cljs.core.chunk_rest(seq__33733_34233__$1);
var G__34236 = c__4556__auto___34234;
var G__34237 = cljs.core.count(c__4556__auto___34234);
var G__34238 = (0);
seq__33733_34218 = G__34235;
chunk__33735_34219 = G__34236;
count__33736_34220 = G__34237;
i__33737_34221 = G__34238;
continue;
} else {
var child_34239 = cljs.core.first(seq__33733_34233__$1);
if(cljs.core.truth_(child_34239)){
node.appendChild(child_34239);


var G__34240 = cljs.core.next(seq__33733_34233__$1);
var G__34241 = null;
var G__34242 = (0);
var G__34243 = (0);
seq__33733_34218 = G__34240;
chunk__33735_34219 = G__34241;
count__33736_34220 = G__34242;
i__33737_34221 = G__34243;
continue;
} else {
var G__34244 = cljs.core.next(seq__33733_34233__$1);
var G__34245 = null;
var G__34246 = (0);
var G__34247 = (0);
seq__33733_34218 = G__34244;
chunk__33735_34219 = G__34245;
count__33736_34220 = G__34246;
i__33737_34221 = G__34247;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34216);
}
}


var G__34248 = seq__33699_34209;
var G__34249 = chunk__33701_34210;
var G__34250 = count__33702_34211;
var G__34251 = (i__33703_34212 + (1));
seq__33699_34209 = G__34248;
chunk__33701_34210 = G__34249;
count__33702_34211 = G__34250;
i__33703_34212 = G__34251;
continue;
} else {
var G__34252 = seq__33699_34209;
var G__34253 = chunk__33701_34210;
var G__34254 = count__33702_34211;
var G__34255 = (i__33703_34212 + (1));
seq__33699_34209 = G__34252;
chunk__33701_34210 = G__34253;
count__33702_34211 = G__34254;
i__33703_34212 = G__34255;
continue;
}
} else {
var temp__5735__auto___34256 = cljs.core.seq(seq__33699_34209);
if(temp__5735__auto___34256){
var seq__33699_34257__$1 = temp__5735__auto___34256;
if(cljs.core.chunked_seq_QMARK_(seq__33699_34257__$1)){
var c__4556__auto___34258 = cljs.core.chunk_first(seq__33699_34257__$1);
var G__34259 = cljs.core.chunk_rest(seq__33699_34257__$1);
var G__34260 = c__4556__auto___34258;
var G__34261 = cljs.core.count(c__4556__auto___34258);
var G__34262 = (0);
seq__33699_34209 = G__34259;
chunk__33701_34210 = G__34260;
count__33702_34211 = G__34261;
i__33703_34212 = G__34262;
continue;
} else {
var child_struct_34263 = cljs.core.first(seq__33699_34257__$1);
if((!((child_struct_34263 == null)))){
if(typeof child_struct_34263 === 'string'){
var text_34264 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34264),child_struct_34263].join(''));
} else {
var children_34265 = shadow.dom.svg_node(child_struct_34263);
if(cljs.core.seq_QMARK_(children_34265)){
var seq__33746_34266 = cljs.core.seq(children_34265);
var chunk__33748_34267 = null;
var count__33749_34268 = (0);
var i__33750_34269 = (0);
while(true){
if((i__33750_34269 < count__33749_34268)){
var child_34270 = chunk__33748_34267.cljs$core$IIndexed$_nth$arity$2(null,i__33750_34269);
if(cljs.core.truth_(child_34270)){
node.appendChild(child_34270);


var G__34271 = seq__33746_34266;
var G__34272 = chunk__33748_34267;
var G__34273 = count__33749_34268;
var G__34274 = (i__33750_34269 + (1));
seq__33746_34266 = G__34271;
chunk__33748_34267 = G__34272;
count__33749_34268 = G__34273;
i__33750_34269 = G__34274;
continue;
} else {
var G__34275 = seq__33746_34266;
var G__34276 = chunk__33748_34267;
var G__34277 = count__33749_34268;
var G__34278 = (i__33750_34269 + (1));
seq__33746_34266 = G__34275;
chunk__33748_34267 = G__34276;
count__33749_34268 = G__34277;
i__33750_34269 = G__34278;
continue;
}
} else {
var temp__5735__auto___34279__$1 = cljs.core.seq(seq__33746_34266);
if(temp__5735__auto___34279__$1){
var seq__33746_34280__$1 = temp__5735__auto___34279__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33746_34280__$1)){
var c__4556__auto___34281 = cljs.core.chunk_first(seq__33746_34280__$1);
var G__34282 = cljs.core.chunk_rest(seq__33746_34280__$1);
var G__34283 = c__4556__auto___34281;
var G__34284 = cljs.core.count(c__4556__auto___34281);
var G__34285 = (0);
seq__33746_34266 = G__34282;
chunk__33748_34267 = G__34283;
count__33749_34268 = G__34284;
i__33750_34269 = G__34285;
continue;
} else {
var child_34286 = cljs.core.first(seq__33746_34280__$1);
if(cljs.core.truth_(child_34286)){
node.appendChild(child_34286);


var G__34287 = cljs.core.next(seq__33746_34280__$1);
var G__34288 = null;
var G__34289 = (0);
var G__34290 = (0);
seq__33746_34266 = G__34287;
chunk__33748_34267 = G__34288;
count__33749_34268 = G__34289;
i__33750_34269 = G__34290;
continue;
} else {
var G__34291 = cljs.core.next(seq__33746_34280__$1);
var G__34292 = null;
var G__34293 = (0);
var G__34294 = (0);
seq__33746_34266 = G__34291;
chunk__33748_34267 = G__34292;
count__33749_34268 = G__34293;
i__33750_34269 = G__34294;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34265);
}
}


var G__34295 = cljs.core.next(seq__33699_34257__$1);
var G__34296 = null;
var G__34297 = (0);
var G__34298 = (0);
seq__33699_34209 = G__34295;
chunk__33701_34210 = G__34296;
count__33702_34211 = G__34297;
i__33703_34212 = G__34298;
continue;
} else {
var G__34299 = cljs.core.next(seq__33699_34257__$1);
var G__34300 = null;
var G__34301 = (0);
var G__34302 = (0);
seq__33699_34209 = G__34299;
chunk__33701_34210 = G__34300;
count__33702_34211 = G__34301;
i__33703_34212 = G__34302;
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

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34306 = arguments.length;
var i__4737__auto___34307 = (0);
while(true){
if((i__4737__auto___34307 < len__4736__auto___34306)){
args__4742__auto__.push((arguments[i__4737__auto___34307]));

var G__34308 = (i__4737__auto___34307 + (1));
i__4737__auto___34307 = G__34308;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33800){
var G__33801 = cljs.core.first(seq33800);
var seq33800__$1 = cljs.core.next(seq33800);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33801,seq33800__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33818 = arguments.length;
switch (G__33818) {
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

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__29036__auto___34316 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29044__auto__ = (function (){var switch__28721__auto__ = (function (state_33850){
var state_val_33851 = (state_33850[(1)]);
if((state_val_33851 === (1))){
var state_33850__$1 = state_33850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33850__$1,(2),once_or_cleanup);
} else {
if((state_val_33851 === (2))){
var inst_33843 = (state_33850[(2)]);
var inst_33846 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33850__$1 = (function (){var statearr_33865 = state_33850;
(statearr_33865[(7)] = inst_33843);

return statearr_33865;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33850__$1,inst_33846);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__28722__auto__ = null;
var shadow$dom$state_machine__28722__auto____0 = (function (){
var statearr_33871 = [null,null,null,null,null,null,null,null];
(statearr_33871[(0)] = shadow$dom$state_machine__28722__auto__);

(statearr_33871[(1)] = (1));

return statearr_33871;
});
var shadow$dom$state_machine__28722__auto____1 = (function (state_33850){
while(true){
var ret_value__28723__auto__ = (function (){try{while(true){
var result__28724__auto__ = switch__28721__auto__(state_33850);
if(cljs.core.keyword_identical_QMARK_(result__28724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28724__auto__;
}
break;
}
}catch (e33872){var ex__28725__auto__ = e33872;
var statearr_33873_34319 = state_33850;
(statearr_33873_34319[(2)] = ex__28725__auto__);


if(cljs.core.seq((state_33850[(4)]))){
var statearr_33875_34320 = state_33850;
(statearr_33875_34320[(1)] = cljs.core.first((state_33850[(4)])));

} else {
throw ex__28725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34321 = state_33850;
state_33850 = G__34321;
continue;
} else {
return ret_value__28723__auto__;
}
break;
}
});
shadow$dom$state_machine__28722__auto__ = function(state_33850){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__28722__auto____0.call(this);
case 1:
return shadow$dom$state_machine__28722__auto____1.call(this,state_33850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__28722__auto____0;
shadow$dom$state_machine__28722__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__28722__auto____1;
return shadow$dom$state_machine__28722__auto__;
})()
})();
var state__29045__auto__ = (function (){var statearr_33879 = f__29044__auto__();
(statearr_33879[(6)] = c__29036__auto___34316);

return statearr_33879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29045__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
