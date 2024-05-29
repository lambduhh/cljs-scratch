goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__36147__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36147 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36148__i = 0, G__36148__a = new Array(arguments.length -  0);
while (G__36148__i < G__36148__a.length) {G__36148__a[G__36148__i] = arguments[G__36148__i + 0]; ++G__36148__i;}
  args = new cljs.core.IndexedSeq(G__36148__a,0,null);
} 
return G__36147__delegate.call(this,args);};
G__36147.cljs$lang$maxFixedArity = 0;
G__36147.cljs$lang$applyTo = (function (arglist__36149){
var args = cljs.core.seq(arglist__36149);
return G__36147__delegate(args);
});
G__36147.cljs$core$IFn$_invoke$arity$variadic = G__36147__delegate;
return G__36147;
})()
);

(o.error = (function() { 
var G__36150__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36150 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36151__i = 0, G__36151__a = new Array(arguments.length -  0);
while (G__36151__i < G__36151__a.length) {G__36151__a[G__36151__i] = arguments[G__36151__i + 0]; ++G__36151__i;}
  args = new cljs.core.IndexedSeq(G__36151__a,0,null);
} 
return G__36150__delegate.call(this,args);};
G__36150.cljs$lang$maxFixedArity = 0;
G__36150.cljs$lang$applyTo = (function (arglist__36152){
var args = cljs.core.seq(arglist__36152);
return G__36150__delegate(args);
});
G__36150.cljs$core$IFn$_invoke$arity$variadic = G__36150__delegate;
return G__36150;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
