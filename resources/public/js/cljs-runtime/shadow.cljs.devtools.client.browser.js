goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35688 = arguments.length;
var i__4737__auto___35689 = (0);
while(true){
if((i__4737__auto___35689 < len__4736__auto___35688)){
args__4742__auto__.push((arguments[i__4737__auto___35689]));

var G__35692 = (i__4737__auto___35689 + (1));
i__4737__auto___35689 = G__35692;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35402){
var G__35403 = cljs.core.first(seq35402);
var seq35402__$1 = cljs.core.next(seq35402);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35403,seq35402__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35422 = cljs.core.seq(sources);
var chunk__35423 = null;
var count__35424 = (0);
var i__35425 = (0);
while(true){
if((i__35425 < count__35424)){
var map__35496 = chunk__35423.cljs$core$IIndexed$_nth$arity$2(null,i__35425);
var map__35496__$1 = (((((!((map__35496 == null))))?(((((map__35496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35496):map__35496);
var src = map__35496__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35496__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35496__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35496__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35496__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35498){var e_35694 = e35498;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35694);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35694.message)].join('')));
}

var G__35695 = seq__35422;
var G__35696 = chunk__35423;
var G__35697 = count__35424;
var G__35698 = (i__35425 + (1));
seq__35422 = G__35695;
chunk__35423 = G__35696;
count__35424 = G__35697;
i__35425 = G__35698;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35422);
if(temp__5735__auto__){
var seq__35422__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35422__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35422__$1);
var G__35699 = cljs.core.chunk_rest(seq__35422__$1);
var G__35700 = c__4556__auto__;
var G__35701 = cljs.core.count(c__4556__auto__);
var G__35702 = (0);
seq__35422 = G__35699;
chunk__35423 = G__35700;
count__35424 = G__35701;
i__35425 = G__35702;
continue;
} else {
var map__35501 = cljs.core.first(seq__35422__$1);
var map__35501__$1 = (((((!((map__35501 == null))))?(((((map__35501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35501):map__35501);
var src = map__35501__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35501__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35501__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35501__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35501__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35503){var e_35703 = e35503;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35703);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35703.message)].join('')));
}

var G__35704 = cljs.core.next(seq__35422__$1);
var G__35705 = null;
var G__35706 = (0);
var G__35707 = (0);
seq__35422 = G__35704;
chunk__35423 = G__35705;
count__35424 = G__35706;
i__35425 = G__35707;
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
return null;
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
var seq__35504 = cljs.core.seq(js_requires);
var chunk__35505 = null;
var count__35506 = (0);
var i__35507 = (0);
while(true){
if((i__35507 < count__35506)){
var js_ns = chunk__35505.cljs$core$IIndexed$_nth$arity$2(null,i__35507);
var require_str_35708 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35708);


var G__35709 = seq__35504;
var G__35710 = chunk__35505;
var G__35711 = count__35506;
var G__35712 = (i__35507 + (1));
seq__35504 = G__35709;
chunk__35505 = G__35710;
count__35506 = G__35711;
i__35507 = G__35712;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35504);
if(temp__5735__auto__){
var seq__35504__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35504__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35504__$1);
var G__35713 = cljs.core.chunk_rest(seq__35504__$1);
var G__35714 = c__4556__auto__;
var G__35715 = cljs.core.count(c__4556__auto__);
var G__35716 = (0);
seq__35504 = G__35713;
chunk__35505 = G__35714;
count__35506 = G__35715;
i__35507 = G__35716;
continue;
} else {
var js_ns = cljs.core.first(seq__35504__$1);
var require_str_35717 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35717);


var G__35718 = cljs.core.next(seq__35504__$1);
var G__35719 = null;
var G__35720 = (0);
var G__35721 = (0);
seq__35504 = G__35718;
chunk__35505 = G__35719;
count__35506 = G__35720;
i__35507 = G__35721;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35511){
var map__35512 = p__35511;
var map__35512__$1 = (((((!((map__35512 == null))))?(((((map__35512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35512):map__35512);
var msg = map__35512__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35512__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35512__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35515(s__35516){
return (new cljs.core.LazySeq(null,(function (){
var s__35516__$1 = s__35516;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35516__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35523 = cljs.core.first(xs__6292__auto__);
var map__35523__$1 = (((((!((map__35523 == null))))?(((((map__35523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35523):map__35523);
var src = map__35523__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35523__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35523__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__35516__$1,map__35523,map__35523__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35512,map__35512__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35515_$_iter__35517(s__35518){
return (new cljs.core.LazySeq(null,((function (s__35516__$1,map__35523,map__35523__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35512,map__35512__$1,msg,info,reload_info){
return (function (){
var s__35518__$1 = s__35518;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35518__$1);
if(temp__5735__auto____$1){
var s__35518__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35518__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35518__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35520 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35519 = (0);
while(true){
if((i__35519 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__35519);
cljs.core.chunk_append(b__35520,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35722 = (i__35519 + (1));
i__35519 = G__35722;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35520),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35515_$_iter__35517(cljs.core.chunk_rest(s__35518__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35520),null);
}
} else {
var warning = cljs.core.first(s__35518__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35515_$_iter__35517(cljs.core.rest(s__35518__$2)));
}
} else {
return null;
}
break;
}
});})(s__35516__$1,map__35523,map__35523__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35512,map__35512__$1,msg,info,reload_info))
,null,null));
});})(s__35516__$1,map__35523,map__35523__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35512,map__35512__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35515(cljs.core.rest(s__35516__$1)));
} else {
var G__35723 = cljs.core.rest(s__35516__$1);
s__35516__$1 = G__35723;
continue;
}
} else {
var G__35724 = cljs.core.rest(s__35516__$1);
s__35516__$1 = G__35724;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__35526_35725 = cljs.core.seq(warnings);
var chunk__35527_35726 = null;
var count__35528_35727 = (0);
var i__35529_35728 = (0);
while(true){
if((i__35529_35728 < count__35528_35727)){
var map__35538_35729 = chunk__35527_35726.cljs$core$IIndexed$_nth$arity$2(null,i__35529_35728);
var map__35538_35730__$1 = (((((!((map__35538_35729 == null))))?(((((map__35538_35729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35538_35729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35538_35729):map__35538_35729);
var w_35731 = map__35538_35730__$1;
var msg_35732__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35538_35730__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35538_35730__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35538_35730__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35538_35730__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35735)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35733),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35734),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35732__$1)].join(''));


var G__35736 = seq__35526_35725;
var G__35737 = chunk__35527_35726;
var G__35738 = count__35528_35727;
var G__35739 = (i__35529_35728 + (1));
seq__35526_35725 = G__35736;
chunk__35527_35726 = G__35737;
count__35528_35727 = G__35738;
i__35529_35728 = G__35739;
continue;
} else {
var temp__5735__auto___35740 = cljs.core.seq(seq__35526_35725);
if(temp__5735__auto___35740){
var seq__35526_35741__$1 = temp__5735__auto___35740;
if(cljs.core.chunked_seq_QMARK_(seq__35526_35741__$1)){
var c__4556__auto___35742 = cljs.core.chunk_first(seq__35526_35741__$1);
var G__35743 = cljs.core.chunk_rest(seq__35526_35741__$1);
var G__35744 = c__4556__auto___35742;
var G__35745 = cljs.core.count(c__4556__auto___35742);
var G__35746 = (0);
seq__35526_35725 = G__35743;
chunk__35527_35726 = G__35744;
count__35528_35727 = G__35745;
i__35529_35728 = G__35746;
continue;
} else {
var map__35540_35747 = cljs.core.first(seq__35526_35741__$1);
var map__35540_35748__$1 = (((((!((map__35540_35747 == null))))?(((((map__35540_35747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35540_35747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35540_35747):map__35540_35747);
var w_35749 = map__35540_35748__$1;
var msg_35750__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35540_35748__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35540_35748__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35540_35748__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35753 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35540_35748__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35753)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35751),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35752),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35750__$1)].join(''));


var G__35754 = cljs.core.next(seq__35526_35741__$1);
var G__35755 = null;
var G__35756 = (0);
var G__35757 = (0);
seq__35526_35725 = G__35754;
chunk__35527_35726 = G__35755;
count__35528_35727 = G__35756;
i__35529_35728 = G__35757;
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
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35509_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35509_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
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
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35547){
var map__35548 = p__35547;
var map__35548__$1 = (((((!((map__35548 == null))))?(((((map__35548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35548):map__35548);
var msg = map__35548__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35548__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35550 = cljs.core.seq(updates);
var chunk__35552 = null;
var count__35553 = (0);
var i__35554 = (0);
while(true){
if((i__35554 < count__35553)){
var path = chunk__35552.cljs$core$IIndexed$_nth$arity$2(null,i__35554);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35596_35758 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35599_35759 = null;
var count__35600_35760 = (0);
var i__35601_35761 = (0);
while(true){
if((i__35601_35761 < count__35600_35760)){
var node_35762 = chunk__35599_35759.cljs$core$IIndexed$_nth$arity$2(null,i__35601_35761);
var path_match_35763 = shadow.cljs.devtools.client.browser.match_paths(node_35762.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35763)){
var new_link_35764 = (function (){var G__35608 = node_35762.cloneNode(true);
G__35608.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35763),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35608;
})();
(new_link_35764.onload = ((function (seq__35596_35758,chunk__35599_35759,count__35600_35760,i__35601_35761,seq__35550,chunk__35552,count__35553,i__35554,new_link_35764,path_match_35763,node_35762,path,map__35548,map__35548__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_35762);
});})(seq__35596_35758,chunk__35599_35759,count__35600_35760,i__35601_35761,seq__35550,chunk__35552,count__35553,i__35554,new_link_35764,path_match_35763,node_35762,path,map__35548,map__35548__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35763], 0));

goog.dom.insertSiblingAfter(new_link_35764,node_35762);


var G__35765 = seq__35596_35758;
var G__35766 = chunk__35599_35759;
var G__35767 = count__35600_35760;
var G__35768 = (i__35601_35761 + (1));
seq__35596_35758 = G__35765;
chunk__35599_35759 = G__35766;
count__35600_35760 = G__35767;
i__35601_35761 = G__35768;
continue;
} else {
var G__35769 = seq__35596_35758;
var G__35770 = chunk__35599_35759;
var G__35771 = count__35600_35760;
var G__35772 = (i__35601_35761 + (1));
seq__35596_35758 = G__35769;
chunk__35599_35759 = G__35770;
count__35600_35760 = G__35771;
i__35601_35761 = G__35772;
continue;
}
} else {
var temp__5735__auto___35773 = cljs.core.seq(seq__35596_35758);
if(temp__5735__auto___35773){
var seq__35596_35774__$1 = temp__5735__auto___35773;
if(cljs.core.chunked_seq_QMARK_(seq__35596_35774__$1)){
var c__4556__auto___35775 = cljs.core.chunk_first(seq__35596_35774__$1);
var G__35776 = cljs.core.chunk_rest(seq__35596_35774__$1);
var G__35777 = c__4556__auto___35775;
var G__35778 = cljs.core.count(c__4556__auto___35775);
var G__35779 = (0);
seq__35596_35758 = G__35776;
chunk__35599_35759 = G__35777;
count__35600_35760 = G__35778;
i__35601_35761 = G__35779;
continue;
} else {
var node_35780 = cljs.core.first(seq__35596_35774__$1);
var path_match_35781 = shadow.cljs.devtools.client.browser.match_paths(node_35780.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35781)){
var new_link_35782 = (function (){var G__35609 = node_35780.cloneNode(true);
G__35609.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35781),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35609;
})();
(new_link_35782.onload = ((function (seq__35596_35758,chunk__35599_35759,count__35600_35760,i__35601_35761,seq__35550,chunk__35552,count__35553,i__35554,new_link_35782,path_match_35781,node_35780,seq__35596_35774__$1,temp__5735__auto___35773,path,map__35548,map__35548__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_35780);
});})(seq__35596_35758,chunk__35599_35759,count__35600_35760,i__35601_35761,seq__35550,chunk__35552,count__35553,i__35554,new_link_35782,path_match_35781,node_35780,seq__35596_35774__$1,temp__5735__auto___35773,path,map__35548,map__35548__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35781], 0));

goog.dom.insertSiblingAfter(new_link_35782,node_35780);


var G__35783 = cljs.core.next(seq__35596_35774__$1);
var G__35784 = null;
var G__35785 = (0);
var G__35786 = (0);
seq__35596_35758 = G__35783;
chunk__35599_35759 = G__35784;
count__35600_35760 = G__35785;
i__35601_35761 = G__35786;
continue;
} else {
var G__35787 = cljs.core.next(seq__35596_35774__$1);
var G__35788 = null;
var G__35789 = (0);
var G__35790 = (0);
seq__35596_35758 = G__35787;
chunk__35599_35759 = G__35788;
count__35600_35760 = G__35789;
i__35601_35761 = G__35790;
continue;
}
}
} else {
}
}
break;
}


var G__35791 = seq__35550;
var G__35792 = chunk__35552;
var G__35793 = count__35553;
var G__35794 = (i__35554 + (1));
seq__35550 = G__35791;
chunk__35552 = G__35792;
count__35553 = G__35793;
i__35554 = G__35794;
continue;
} else {
var G__35795 = seq__35550;
var G__35796 = chunk__35552;
var G__35797 = count__35553;
var G__35798 = (i__35554 + (1));
seq__35550 = G__35795;
chunk__35552 = G__35796;
count__35553 = G__35797;
i__35554 = G__35798;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35550);
if(temp__5735__auto__){
var seq__35550__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35550__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35550__$1);
var G__35799 = cljs.core.chunk_rest(seq__35550__$1);
var G__35800 = c__4556__auto__;
var G__35801 = cljs.core.count(c__4556__auto__);
var G__35802 = (0);
seq__35550 = G__35799;
chunk__35552 = G__35800;
count__35553 = G__35801;
i__35554 = G__35802;
continue;
} else {
var path = cljs.core.first(seq__35550__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35613_35803 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35616_35804 = null;
var count__35617_35805 = (0);
var i__35618_35806 = (0);
while(true){
if((i__35618_35806 < count__35617_35805)){
var node_35807 = chunk__35616_35804.cljs$core$IIndexed$_nth$arity$2(null,i__35618_35806);
var path_match_35808 = shadow.cljs.devtools.client.browser.match_paths(node_35807.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35808)){
var new_link_35809 = (function (){var G__35623 = node_35807.cloneNode(true);
G__35623.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35808),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35623;
})();
(new_link_35809.onload = ((function (seq__35613_35803,chunk__35616_35804,count__35617_35805,i__35618_35806,seq__35550,chunk__35552,count__35553,i__35554,new_link_35809,path_match_35808,node_35807,path,seq__35550__$1,temp__5735__auto__,map__35548,map__35548__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_35807);
});})(seq__35613_35803,chunk__35616_35804,count__35617_35805,i__35618_35806,seq__35550,chunk__35552,count__35553,i__35554,new_link_35809,path_match_35808,node_35807,path,seq__35550__$1,temp__5735__auto__,map__35548,map__35548__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35808], 0));

goog.dom.insertSiblingAfter(new_link_35809,node_35807);


var G__35810 = seq__35613_35803;
var G__35811 = chunk__35616_35804;
var G__35812 = count__35617_35805;
var G__35813 = (i__35618_35806 + (1));
seq__35613_35803 = G__35810;
chunk__35616_35804 = G__35811;
count__35617_35805 = G__35812;
i__35618_35806 = G__35813;
continue;
} else {
var G__35814 = seq__35613_35803;
var G__35815 = chunk__35616_35804;
var G__35816 = count__35617_35805;
var G__35817 = (i__35618_35806 + (1));
seq__35613_35803 = G__35814;
chunk__35616_35804 = G__35815;
count__35617_35805 = G__35816;
i__35618_35806 = G__35817;
continue;
}
} else {
var temp__5735__auto___35818__$1 = cljs.core.seq(seq__35613_35803);
if(temp__5735__auto___35818__$1){
var seq__35613_35819__$1 = temp__5735__auto___35818__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35613_35819__$1)){
var c__4556__auto___35820 = cljs.core.chunk_first(seq__35613_35819__$1);
var G__35821 = cljs.core.chunk_rest(seq__35613_35819__$1);
var G__35822 = c__4556__auto___35820;
var G__35823 = cljs.core.count(c__4556__auto___35820);
var G__35824 = (0);
seq__35613_35803 = G__35821;
chunk__35616_35804 = G__35822;
count__35617_35805 = G__35823;
i__35618_35806 = G__35824;
continue;
} else {
var node_35825 = cljs.core.first(seq__35613_35819__$1);
var path_match_35826 = shadow.cljs.devtools.client.browser.match_paths(node_35825.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35826)){
var new_link_35827 = (function (){var G__35628 = node_35825.cloneNode(true);
G__35628.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35826),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35628;
})();
(new_link_35827.onload = ((function (seq__35613_35803,chunk__35616_35804,count__35617_35805,i__35618_35806,seq__35550,chunk__35552,count__35553,i__35554,new_link_35827,path_match_35826,node_35825,seq__35613_35819__$1,temp__5735__auto___35818__$1,path,seq__35550__$1,temp__5735__auto__,map__35548,map__35548__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_35825);
});})(seq__35613_35803,chunk__35616_35804,count__35617_35805,i__35618_35806,seq__35550,chunk__35552,count__35553,i__35554,new_link_35827,path_match_35826,node_35825,seq__35613_35819__$1,temp__5735__auto___35818__$1,path,seq__35550__$1,temp__5735__auto__,map__35548,map__35548__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35826], 0));

goog.dom.insertSiblingAfter(new_link_35827,node_35825);


var G__35828 = cljs.core.next(seq__35613_35819__$1);
var G__35829 = null;
var G__35830 = (0);
var G__35831 = (0);
seq__35613_35803 = G__35828;
chunk__35616_35804 = G__35829;
count__35617_35805 = G__35830;
i__35618_35806 = G__35831;
continue;
} else {
var G__35832 = cljs.core.next(seq__35613_35819__$1);
var G__35833 = null;
var G__35834 = (0);
var G__35835 = (0);
seq__35613_35803 = G__35832;
chunk__35616_35804 = G__35833;
count__35617_35805 = G__35834;
i__35618_35806 = G__35835;
continue;
}
}
} else {
}
}
break;
}


var G__35836 = cljs.core.next(seq__35550__$1);
var G__35837 = null;
var G__35838 = (0);
var G__35839 = (0);
seq__35550 = G__35836;
chunk__35552 = G__35837;
count__35553 = G__35838;
i__35554 = G__35839;
continue;
} else {
var G__35840 = cljs.core.next(seq__35550__$1);
var G__35841 = null;
var G__35842 = (0);
var G__35843 = (0);
seq__35550 = G__35840;
chunk__35552 = G__35841;
count__35553 = G__35842;
i__35554 = G__35843;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__35630){
var map__35631 = p__35630;
var map__35631__$1 = (((((!((map__35631 == null))))?(((((map__35631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35631):map__35631);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35631__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__35636){
var map__35637 = p__35636;
var map__35637__$1 = (((((!((map__35637 == null))))?(((((map__35637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35637):map__35637);
var _ = map__35637__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35637__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__35639,done,error){
var map__35640 = p__35639;
var map__35640__$1 = (((((!((map__35640 == null))))?(((((map__35640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35640):map__35640);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35640__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__35643,done,error){
var map__35644 = p__35643;
var map__35644__$1 = (((((!((map__35644 == null))))?(((((map__35644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35644):map__35644);
var msg = map__35644__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35644__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35644__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35644__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35646){
var map__35647 = p__35646;
var map__35647__$1 = (((((!((map__35647 == null))))?(((((map__35647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35647):map__35647);
var src = map__35647__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35647__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__35652 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__35652) : done.call(null,G__35652));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__35653){
var map__35654 = p__35653;
var map__35654__$1 = (((((!((map__35654 == null))))?(((((map__35654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35654):map__35654);
var msg__$1 = map__35654__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35654__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e35656){var ex = e35656;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__35658){
var map__35659 = p__35658;
var map__35659__$1 = (((((!((map__35659 == null))))?(((((map__35659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35659):map__35659);
var env = map__35659__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35659__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__35662){
var map__35663 = p__35662;
var map__35663__$1 = (((((!((map__35663 == null))))?(((((map__35663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35663):map__35663);
var msg = map__35663__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35663__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__35678){
var map__35679 = p__35678;
var map__35679__$1 = (((((!((map__35679 == null))))?(((((map__35679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35679):map__35679);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35679__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35679__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__35684){
var map__35685 = p__35684;
var map__35685__$1 = (((((!((map__35685 == null))))?(((((map__35685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35685):map__35685);
var svc = map__35685__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35685__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
