goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__33376,p__33377){
var map__33378 = p__33376;
var map__33378__$1 = (((((!((map__33378 == null))))?(((((map__33378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33378):map__33378);
var svc = map__33378__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33378__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33378__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33378__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__33379 = p__33377;
var map__33379__$1 = (((((!((map__33379 == null))))?(((((map__33379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33379):map__33379);
var msg = map__33379__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33379__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33379__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33379__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33379__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__33400,p__33401){
var map__33403 = p__33400;
var map__33403__$1 = (((((!((map__33403 == null))))?(((((map__33403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33403):map__33403);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33403__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__33404 = p__33401;
var map__33404__$1 = (((((!((map__33404 == null))))?(((((map__33404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33404):map__33404);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33404__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__33415,p__33416){
var map__33417 = p__33415;
var map__33417__$1 = (((((!((map__33417 == null))))?(((((map__33417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33417):map__33417);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33417__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33417__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__33418 = p__33416;
var map__33418__$1 = (((((!((map__33418 == null))))?(((((map__33418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33418):map__33418);
var msg = map__33418__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33418__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__33436,tid){
var map__33438 = p__33436;
var map__33438__$1 = (((((!((map__33438 == null))))?(((((map__33438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33438):map__33438);
var svc = map__33438__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33438__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__33456 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__33457 = null;
var count__33458 = (0);
var i__33459 = (0);
while(true){
if((i__33459 < count__33458)){
var vec__33473 = chunk__33457.cljs$core$IIndexed$_nth$arity$2(null,i__33459);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33473,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33473,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__33536 = seq__33456;
var G__33537 = chunk__33457;
var G__33538 = count__33458;
var G__33539 = (i__33459 + (1));
seq__33456 = G__33536;
chunk__33457 = G__33537;
count__33458 = G__33538;
i__33459 = G__33539;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33456);
if(temp__5735__auto__){
var seq__33456__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33456__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33456__$1);
var G__33541 = cljs.core.chunk_rest(seq__33456__$1);
var G__33542 = c__4556__auto__;
var G__33543 = cljs.core.count(c__4556__auto__);
var G__33544 = (0);
seq__33456 = G__33541;
chunk__33457 = G__33542;
count__33458 = G__33543;
i__33459 = G__33544;
continue;
} else {
var vec__33487 = cljs.core.first(seq__33456__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33487,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33487,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__33545 = cljs.core.next(seq__33456__$1);
var G__33546 = null;
var G__33547 = (0);
var G__33548 = (0);
seq__33456 = G__33545;
chunk__33457 = G__33546;
count__33458 = G__33547;
i__33459 = G__33548;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__33444_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__33444_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__33445_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__33445_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__33447_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__33447_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__33449_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__33449_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__33505){
var map__33506 = p__33505;
var map__33506__$1 = (((((!((map__33506 == null))))?(((((map__33506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33506):map__33506);
var svc = map__33506__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33506__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33506__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
