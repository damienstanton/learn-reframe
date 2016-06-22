// Compiled by ClojureScript 1.9.88 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__40670){
var map__40695 = p__40670;
var map__40695__$1 = ((((!((map__40695 == null)))?((((map__40695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40695):map__40695);
var m = map__40695__$1;
var n = cljs.core.get.call(null,map__40695__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__40695__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__40697_40719 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40698_40720 = null;
var count__40699_40721 = (0);
var i__40700_40722 = (0);
while(true){
if((i__40700_40722 < count__40699_40721)){
var f_40723 = cljs.core._nth.call(null,chunk__40698_40720,i__40700_40722);
cljs.core.println.call(null,"  ",f_40723);

var G__40724 = seq__40697_40719;
var G__40725 = chunk__40698_40720;
var G__40726 = count__40699_40721;
var G__40727 = (i__40700_40722 + (1));
seq__40697_40719 = G__40724;
chunk__40698_40720 = G__40725;
count__40699_40721 = G__40726;
i__40700_40722 = G__40727;
continue;
} else {
var temp__4657__auto___40728 = cljs.core.seq.call(null,seq__40697_40719);
if(temp__4657__auto___40728){
var seq__40697_40729__$1 = temp__4657__auto___40728;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40697_40729__$1)){
var c__19307__auto___40730 = cljs.core.chunk_first.call(null,seq__40697_40729__$1);
var G__40731 = cljs.core.chunk_rest.call(null,seq__40697_40729__$1);
var G__40732 = c__19307__auto___40730;
var G__40733 = cljs.core.count.call(null,c__19307__auto___40730);
var G__40734 = (0);
seq__40697_40719 = G__40731;
chunk__40698_40720 = G__40732;
count__40699_40721 = G__40733;
i__40700_40722 = G__40734;
continue;
} else {
var f_40735 = cljs.core.first.call(null,seq__40697_40729__$1);
cljs.core.println.call(null,"  ",f_40735);

var G__40736 = cljs.core.next.call(null,seq__40697_40729__$1);
var G__40737 = null;
var G__40738 = (0);
var G__40739 = (0);
seq__40697_40719 = G__40736;
chunk__40698_40720 = G__40737;
count__40699_40721 = G__40738;
i__40700_40722 = G__40739;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40740 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18496__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_40740);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_40740)))?cljs.core.second.call(null,arglists_40740):arglists_40740));
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
var seq__40701_40741 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40702_40742 = null;
var count__40703_40743 = (0);
var i__40704_40744 = (0);
while(true){
if((i__40704_40744 < count__40703_40743)){
var vec__40705_40745 = cljs.core._nth.call(null,chunk__40702_40742,i__40704_40744);
var name_40746 = cljs.core.nth.call(null,vec__40705_40745,(0),null);
var map__40708_40747 = cljs.core.nth.call(null,vec__40705_40745,(1),null);
var map__40708_40748__$1 = ((((!((map__40708_40747 == null)))?((((map__40708_40747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40708_40747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40708_40747):map__40708_40747);
var doc_40749 = cljs.core.get.call(null,map__40708_40748__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40750 = cljs.core.get.call(null,map__40708_40748__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_40746);

cljs.core.println.call(null," ",arglists_40750);

if(cljs.core.truth_(doc_40749)){
cljs.core.println.call(null," ",doc_40749);
} else {
}

var G__40751 = seq__40701_40741;
var G__40752 = chunk__40702_40742;
var G__40753 = count__40703_40743;
var G__40754 = (i__40704_40744 + (1));
seq__40701_40741 = G__40751;
chunk__40702_40742 = G__40752;
count__40703_40743 = G__40753;
i__40704_40744 = G__40754;
continue;
} else {
var temp__4657__auto___40755 = cljs.core.seq.call(null,seq__40701_40741);
if(temp__4657__auto___40755){
var seq__40701_40756__$1 = temp__4657__auto___40755;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40701_40756__$1)){
var c__19307__auto___40757 = cljs.core.chunk_first.call(null,seq__40701_40756__$1);
var G__40758 = cljs.core.chunk_rest.call(null,seq__40701_40756__$1);
var G__40759 = c__19307__auto___40757;
var G__40760 = cljs.core.count.call(null,c__19307__auto___40757);
var G__40761 = (0);
seq__40701_40741 = G__40758;
chunk__40702_40742 = G__40759;
count__40703_40743 = G__40760;
i__40704_40744 = G__40761;
continue;
} else {
var vec__40710_40762 = cljs.core.first.call(null,seq__40701_40756__$1);
var name_40763 = cljs.core.nth.call(null,vec__40710_40762,(0),null);
var map__40713_40764 = cljs.core.nth.call(null,vec__40710_40762,(1),null);
var map__40713_40765__$1 = ((((!((map__40713_40764 == null)))?((((map__40713_40764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40713_40764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40713_40764):map__40713_40764);
var doc_40766 = cljs.core.get.call(null,map__40713_40765__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40767 = cljs.core.get.call(null,map__40713_40765__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_40763);

cljs.core.println.call(null," ",arglists_40767);

if(cljs.core.truth_(doc_40766)){
cljs.core.println.call(null," ",doc_40766);
} else {
}

var G__40768 = cljs.core.next.call(null,seq__40701_40756__$1);
var G__40769 = null;
var G__40770 = (0);
var G__40771 = (0);
seq__40701_40741 = G__40768;
chunk__40702_40742 = G__40769;
count__40703_40743 = G__40770;
i__40704_40744 = G__40771;
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

var seq__40715 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40716 = null;
var count__40717 = (0);
var i__40718 = (0);
while(true){
if((i__40718 < count__40717)){
var role = cljs.core._nth.call(null,chunk__40716,i__40718);
var temp__4657__auto___40772__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___40772__$1)){
var spec_40773 = temp__4657__auto___40772__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_40773));
} else {
}

var G__40774 = seq__40715;
var G__40775 = chunk__40716;
var G__40776 = count__40717;
var G__40777 = (i__40718 + (1));
seq__40715 = G__40774;
chunk__40716 = G__40775;
count__40717 = G__40776;
i__40718 = G__40777;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__40715);
if(temp__4657__auto____$1){
var seq__40715__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40715__$1)){
var c__19307__auto__ = cljs.core.chunk_first.call(null,seq__40715__$1);
var G__40778 = cljs.core.chunk_rest.call(null,seq__40715__$1);
var G__40779 = c__19307__auto__;
var G__40780 = cljs.core.count.call(null,c__19307__auto__);
var G__40781 = (0);
seq__40715 = G__40778;
chunk__40716 = G__40779;
count__40717 = G__40780;
i__40718 = G__40781;
continue;
} else {
var role = cljs.core.first.call(null,seq__40715__$1);
var temp__4657__auto___40782__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___40782__$2)){
var spec_40783 = temp__4657__auto___40782__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_40783));
} else {
}

var G__40784 = cljs.core.next.call(null,seq__40715__$1);
var G__40785 = null;
var G__40786 = (0);
var G__40787 = (0);
seq__40715 = G__40784;
chunk__40716 = G__40785;
count__40717 = G__40786;
i__40718 = G__40787;
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

//# sourceMappingURL=repl.js.map?rel=1466621249922