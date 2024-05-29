goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36631){
var map__36633 = p__36631;
var map__36633__$1 = (((((!((map__36633 == null))))?(((((map__36633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36633):map__36633);
var m = map__36633__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36633__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36633__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36637_36845 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36638_36846 = null;
var count__36639_36847 = (0);
var i__36640_36848 = (0);
while(true){
if((i__36640_36848 < count__36639_36847)){
var f_36849 = chunk__36638_36846.cljs$core$IIndexed$_nth$arity$2(null,i__36640_36848);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36849], 0));


var G__36850 = seq__36637_36845;
var G__36851 = chunk__36638_36846;
var G__36852 = count__36639_36847;
var G__36853 = (i__36640_36848 + (1));
seq__36637_36845 = G__36850;
chunk__36638_36846 = G__36851;
count__36639_36847 = G__36852;
i__36640_36848 = G__36853;
continue;
} else {
var temp__5735__auto___36854 = cljs.core.seq(seq__36637_36845);
if(temp__5735__auto___36854){
var seq__36637_36855__$1 = temp__5735__auto___36854;
if(cljs.core.chunked_seq_QMARK_(seq__36637_36855__$1)){
var c__4556__auto___36856 = cljs.core.chunk_first(seq__36637_36855__$1);
var G__36857 = cljs.core.chunk_rest(seq__36637_36855__$1);
var G__36858 = c__4556__auto___36856;
var G__36859 = cljs.core.count(c__4556__auto___36856);
var G__36860 = (0);
seq__36637_36845 = G__36857;
chunk__36638_36846 = G__36858;
count__36639_36847 = G__36859;
i__36640_36848 = G__36860;
continue;
} else {
var f_36861 = cljs.core.first(seq__36637_36855__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36861], 0));


var G__36862 = cljs.core.next(seq__36637_36855__$1);
var G__36863 = null;
var G__36864 = (0);
var G__36865 = (0);
seq__36637_36845 = G__36862;
chunk__36638_36846 = G__36863;
count__36639_36847 = G__36864;
i__36640_36848 = G__36865;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36866 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36866], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36866)))?cljs.core.second(arglists_36866):arglists_36866)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36642_36867 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36643_36868 = null;
var count__36644_36869 = (0);
var i__36645_36870 = (0);
while(true){
if((i__36645_36870 < count__36644_36869)){
var vec__36658_36871 = chunk__36643_36868.cljs$core$IIndexed$_nth$arity$2(null,i__36645_36870);
var name_36872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36658_36871,(0),null);
var map__36661_36873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36658_36871,(1),null);
var map__36661_36874__$1 = (((((!((map__36661_36873 == null))))?(((((map__36661_36873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36661_36873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36661_36873):map__36661_36873);
var doc_36875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36661_36874__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36661_36874__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36872], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36876], 0));

if(cljs.core.truth_(doc_36875)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36875], 0));
} else {
}


var G__36881 = seq__36642_36867;
var G__36882 = chunk__36643_36868;
var G__36883 = count__36644_36869;
var G__36884 = (i__36645_36870 + (1));
seq__36642_36867 = G__36881;
chunk__36643_36868 = G__36882;
count__36644_36869 = G__36883;
i__36645_36870 = G__36884;
continue;
} else {
var temp__5735__auto___36885 = cljs.core.seq(seq__36642_36867);
if(temp__5735__auto___36885){
var seq__36642_36886__$1 = temp__5735__auto___36885;
if(cljs.core.chunked_seq_QMARK_(seq__36642_36886__$1)){
var c__4556__auto___36887 = cljs.core.chunk_first(seq__36642_36886__$1);
var G__36888 = cljs.core.chunk_rest(seq__36642_36886__$1);
var G__36889 = c__4556__auto___36887;
var G__36890 = cljs.core.count(c__4556__auto___36887);
var G__36891 = (0);
seq__36642_36867 = G__36888;
chunk__36643_36868 = G__36889;
count__36644_36869 = G__36890;
i__36645_36870 = G__36891;
continue;
} else {
var vec__36664_36892 = cljs.core.first(seq__36642_36886__$1);
var name_36893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36664_36892,(0),null);
var map__36667_36894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36664_36892,(1),null);
var map__36667_36895__$1 = (((((!((map__36667_36894 == null))))?(((((map__36667_36894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36667_36894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36667_36894):map__36667_36894);
var doc_36896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36667_36895__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36897 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36667_36895__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36893], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36897], 0));

if(cljs.core.truth_(doc_36896)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36896], 0));
} else {
}


var G__36900 = cljs.core.next(seq__36642_36886__$1);
var G__36901 = null;
var G__36902 = (0);
var G__36903 = (0);
seq__36642_36867 = G__36900;
chunk__36643_36868 = G__36901;
count__36644_36869 = G__36902;
i__36645_36870 = G__36903;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36669 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36670 = null;
var count__36671 = (0);
var i__36672 = (0);
while(true){
if((i__36672 < count__36671)){
var role = chunk__36670.cljs$core$IIndexed$_nth$arity$2(null,i__36672);
var temp__5735__auto___36906__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36906__$1)){
var spec_36907 = temp__5735__auto___36906__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36907)], 0));
} else {
}


var G__36908 = seq__36669;
var G__36909 = chunk__36670;
var G__36910 = count__36671;
var G__36911 = (i__36672 + (1));
seq__36669 = G__36908;
chunk__36670 = G__36909;
count__36671 = G__36910;
i__36672 = G__36911;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__36669);
if(temp__5735__auto____$1){
var seq__36669__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36669__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36669__$1);
var G__36912 = cljs.core.chunk_rest(seq__36669__$1);
var G__36913 = c__4556__auto__;
var G__36914 = cljs.core.count(c__4556__auto__);
var G__36915 = (0);
seq__36669 = G__36912;
chunk__36670 = G__36913;
count__36671 = G__36914;
i__36672 = G__36915;
continue;
} else {
var role = cljs.core.first(seq__36669__$1);
var temp__5735__auto___36916__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36916__$2)){
var spec_36917 = temp__5735__auto___36916__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36917)], 0));
} else {
}


var G__36918 = cljs.core.next(seq__36669__$1);
var G__36919 = null;
var G__36920 = (0);
var G__36921 = (0);
seq__36669 = G__36918;
chunk__36670 = G__36919;
count__36671 = G__36920;
i__36672 = G__36921;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36922 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36923 = cljs.core.ex_cause(t);
via = G__36922;
t = G__36923;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36701 = datafied_throwable;
var map__36701__$1 = (((((!((map__36701 == null))))?(((((map__36701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36701):map__36701);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36701__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36701__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36701__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36702 = cljs.core.last(via);
var map__36702__$1 = (((((!((map__36702 == null))))?(((((map__36702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36702):map__36702);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36702__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36702__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36702__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36703 = data;
var map__36703__$1 = (((((!((map__36703 == null))))?(((((map__36703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36703):map__36703);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36703__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36703__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36703__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36704 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36704__$1 = (((((!((map__36704 == null))))?(((((map__36704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36704):map__36704);
var top_data = map__36704__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36704__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36747 = phase;
var G__36747__$1 = (((G__36747 instanceof cljs.core.Keyword))?G__36747.fqn:null);
switch (G__36747__$1) {
case "read-source":
var map__36748 = data;
var map__36748__$1 = (((((!((map__36748 == null))))?(((((map__36748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36748):map__36748);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36748__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36748__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36757 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36757__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36757,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36757);
var G__36757__$2 = (cljs.core.truth_((function (){var fexpr__36758 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36758.cljs$core$IFn$_invoke$arity$1 ? fexpr__36758.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36758.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36757__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36757__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36757__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36757__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36763 = top_data;
var G__36763__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36763,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36763);
var G__36763__$2 = (cljs.core.truth_((function (){var fexpr__36766 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36766.cljs$core$IFn$_invoke$arity$1 ? fexpr__36766.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36766.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36763__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36763__$1);
var G__36763__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36763__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36763__$2);
var G__36763__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36763__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36763__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36763__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36763__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36775 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36775,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36775,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36775,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36775,(3),null);
var G__36778 = top_data;
var G__36778__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36778,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36778);
var G__36778__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36778__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36778__$1);
var G__36778__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36778__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36778__$2);
var G__36778__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36778__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36778__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36778__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36778__$4;
}

break;
case "execution":
var vec__36787 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36787,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36787,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36787,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36787,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36697_SHARP_){
var or__4126__auto__ = (p1__36697_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__36795 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36795.cljs$core$IFn$_invoke$arity$1 ? fexpr__36795.cljs$core$IFn$_invoke$arity$1(p1__36697_SHARP_) : fexpr__36795.call(null,p1__36697_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__36796 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36796__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36796,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36796);
var G__36796__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36796__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36796__$1);
var G__36796__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36796__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36796__$2);
var G__36796__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36796__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36796__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36796__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36796__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36747__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36801){
var map__36802 = p__36801;
var map__36802__$1 = (((((!((map__36802 == null))))?(((((map__36802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36802):map__36802);
var triage_data = map__36802__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36802__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36802__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36802__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36802__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36802__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36802__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36802__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36802__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36805 = phase;
var G__36805__$1 = (((G__36805 instanceof cljs.core.Keyword))?G__36805.fqn:null);
switch (G__36805__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36806 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36807 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36808 = loc;
var G__36809 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36810_36928 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36811_36929 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36812_36930 = true;
var _STAR_print_fn_STAR__temp_val__36813_36931 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36812_36930);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36813_36931);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36798_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36798_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36811_36929);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36810_36928);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36806,G__36807,G__36808,G__36809) : format.call(null,G__36806,G__36807,G__36808,G__36809));

break;
case "macroexpansion":
var G__36815 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36816 = cause_type;
var G__36817 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36818 = loc;
var G__36819 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36815,G__36816,G__36817,G__36818,G__36819) : format.call(null,G__36815,G__36816,G__36817,G__36818,G__36819));

break;
case "compile-syntax-check":
var G__36821 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36822 = cause_type;
var G__36823 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36824 = loc;
var G__36825 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36821,G__36822,G__36823,G__36824,G__36825) : format.call(null,G__36821,G__36822,G__36823,G__36824,G__36825));

break;
case "compilation":
var G__36826 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36827 = cause_type;
var G__36828 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36829 = loc;
var G__36830 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36826,G__36827,G__36828,G__36829,G__36830) : format.call(null,G__36826,G__36827,G__36828,G__36829,G__36830));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36831 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36832 = symbol;
var G__36833 = loc;
var G__36834 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36835_36932 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36836_36933 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36837_36934 = true;
var _STAR_print_fn_STAR__temp_val__36838_36935 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36837_36934);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36838_36935);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36799_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36799_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36836_36933);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36835_36932);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36831,G__36832,G__36833,G__36834) : format.call(null,G__36831,G__36832,G__36833,G__36834));
} else {
var G__36839 = "Execution error%s at %s(%s).\n%s\n";
var G__36840 = cause_type;
var G__36841 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36842 = loc;
var G__36843 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36839,G__36840,G__36841,G__36842,G__36843) : format.call(null,G__36839,G__36840,G__36841,G__36842,G__36843));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36805__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
