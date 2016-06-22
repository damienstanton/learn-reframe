// Compiled by ClojureScript 1.9.88 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30640){
var map__30665 = p__30640;
var map__30665__$1 = ((((!((map__30665 == null)))?((((map__30665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30665):map__30665);
var m = map__30665__$1;
var n = cljs.core.get.call(null,map__30665__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30665__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30667_30689 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30668_30690 = null;
var count__30669_30691 = (0);
var i__30670_30692 = (0);
while(true){
if((i__30670_30692 < count__30669_30691)){
var f_30693 = cljs.core._nth.call(null,chunk__30668_30690,i__30670_30692);
cljs.core.println.call(null,"  ",f_30693);

var G__30694 = seq__30667_30689;
var G__30695 = chunk__30668_30690;
var G__30696 = count__30669_30691;
var G__30697 = (i__30670_30692 + (1));
seq__30667_30689 = G__30694;
chunk__30668_30690 = G__30695;
count__30669_30691 = G__30696;
i__30670_30692 = G__30697;
continue;
} else {
var temp__4657__auto___30698 = cljs.core.seq.call(null,seq__30667_30689);
if(temp__4657__auto___30698){
var seq__30667_30699__$1 = temp__4657__auto___30698;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30667_30699__$1)){
var c__19307__auto___30700 = cljs.core.chunk_first.call(null,seq__30667_30699__$1);
var G__30701 = cljs.core.chunk_rest.call(null,seq__30667_30699__$1);
var G__30702 = c__19307__auto___30700;
var G__30703 = cljs.core.count.call(null,c__19307__auto___30700);
var G__30704 = (0);
seq__30667_30689 = G__30701;
chunk__30668_30690 = G__30702;
count__30669_30691 = G__30703;
i__30670_30692 = G__30704;
continue;
} else {
var f_30705 = cljs.core.first.call(null,seq__30667_30699__$1);
cljs.core.println.call(null,"  ",f_30705);

var G__30706 = cljs.core.next.call(null,seq__30667_30699__$1);
var G__30707 = null;
var G__30708 = (0);
var G__30709 = (0);
seq__30667_30689 = G__30706;
chunk__30668_30690 = G__30707;
count__30669_30691 = G__30708;
i__30670_30692 = G__30709;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30710 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18496__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30710);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30710)))?cljs.core.second.call(null,arglists_30710):arglists_30710));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30671_30711 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30672_30712 = null;
var count__30673_30713 = (0);
var i__30674_30714 = (0);
while(true){
if((i__30674_30714 < count__30673_30713)){
var vec__30675_30715 = cljs.core._nth.call(null,chunk__30672_30712,i__30674_30714);
var name_30716 = cljs.core.nth.call(null,vec__30675_30715,(0),null);
var map__30678_30717 = cljs.core.nth.call(null,vec__30675_30715,(1),null);
var map__30678_30718__$1 = ((((!((map__30678_30717 == null)))?((((map__30678_30717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30678_30717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30678_30717):map__30678_30717);
var doc_30719 = cljs.core.get.call(null,map__30678_30718__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30720 = cljs.core.get.call(null,map__30678_30718__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30716);

cljs.core.println.call(null," ",arglists_30720);

if(cljs.core.truth_(doc_30719)){
cljs.core.println.call(null," ",doc_30719);
} else {
}

var G__30721 = seq__30671_30711;
var G__30722 = chunk__30672_30712;
var G__30723 = count__30673_30713;
var G__30724 = (i__30674_30714 + (1));
seq__30671_30711 = G__30721;
chunk__30672_30712 = G__30722;
count__30673_30713 = G__30723;
i__30674_30714 = G__30724;
continue;
} else {
var temp__4657__auto___30725 = cljs.core.seq.call(null,seq__30671_30711);
if(temp__4657__auto___30725){
var seq__30671_30726__$1 = temp__4657__auto___30725;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30671_30726__$1)){
var c__19307__auto___30727 = cljs.core.chunk_first.call(null,seq__30671_30726__$1);
var G__30728 = cljs.core.chunk_rest.call(null,seq__30671_30726__$1);
var G__30729 = c__19307__auto___30727;
var G__30730 = cljs.core.count.call(null,c__19307__auto___30727);
var G__30731 = (0);
seq__30671_30711 = G__30728;
chunk__30672_30712 = G__30729;
count__30673_30713 = G__30730;
i__30674_30714 = G__30731;
continue;
} else {
var vec__30680_30732 = cljs.core.first.call(null,seq__30671_30726__$1);
var name_30733 = cljs.core.nth.call(null,vec__30680_30732,(0),null);
var map__30683_30734 = cljs.core.nth.call(null,vec__30680_30732,(1),null);
var map__30683_30735__$1 = ((((!((map__30683_30734 == null)))?((((map__30683_30734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30683_30734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30683_30734):map__30683_30734);
var doc_30736 = cljs.core.get.call(null,map__30683_30735__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30737 = cljs.core.get.call(null,map__30683_30735__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30733);

cljs.core.println.call(null," ",arglists_30737);

if(cljs.core.truth_(doc_30736)){
cljs.core.println.call(null," ",doc_30736);
} else {
}

var G__30738 = cljs.core.next.call(null,seq__30671_30726__$1);
var G__30739 = null;
var G__30740 = (0);
var G__30741 = (0);
seq__30671_30711 = G__30738;
chunk__30672_30712 = G__30739;
count__30673_30713 = G__30740;
i__30674_30714 = G__30741;
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
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__30685 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30686 = null;
var count__30687 = (0);
var i__30688 = (0);
while(true){
if((i__30688 < count__30687)){
var role = cljs.core._nth.call(null,chunk__30686,i__30688);
var temp__4657__auto___30742__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___30742__$1)){
var spec_30743 = temp__4657__auto___30742__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_30743));
} else {
}

var G__30744 = seq__30685;
var G__30745 = chunk__30686;
var G__30746 = count__30687;
var G__30747 = (i__30688 + (1));
seq__30685 = G__30744;
chunk__30686 = G__30745;
count__30687 = G__30746;
i__30688 = G__30747;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__30685);
if(temp__4657__auto____$1){
var seq__30685__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30685__$1)){
var c__19307__auto__ = cljs.core.chunk_first.call(null,seq__30685__$1);
var G__30748 = cljs.core.chunk_rest.call(null,seq__30685__$1);
var G__30749 = c__19307__auto__;
var G__30750 = cljs.core.count.call(null,c__19307__auto__);
var G__30751 = (0);
seq__30685 = G__30748;
chunk__30686 = G__30749;
count__30687 = G__30750;
i__30688 = G__30751;
continue;
} else {
var role = cljs.core.first.call(null,seq__30685__$1);
var temp__4657__auto___30752__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___30752__$2)){
var spec_30753 = temp__4657__auto___30752__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_30753));
} else {
}

var G__30754 = cljs.core.next.call(null,seq__30685__$1);
var G__30755 = null;
var G__30756 = (0);
var G__30757 = (0);
seq__30685 = G__30754;
chunk__30686 = G__30755;
count__30687 = G__30756;
i__30688 = G__30757;
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

//# sourceMappingURL=repl.js.map?rel=1466621027084