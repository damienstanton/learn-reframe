// Compiled by ClojureScript 1.9.88 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18496__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18496__auto__){
return or__18496__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18496__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__38502_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__38502_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__38507 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__38508 = null;
var count__38509 = (0);
var i__38510 = (0);
while(true){
if((i__38510 < count__38509)){
var n = cljs.core._nth.call(null,chunk__38508,i__38510);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38511 = seq__38507;
var G__38512 = chunk__38508;
var G__38513 = count__38509;
var G__38514 = (i__38510 + (1));
seq__38507 = G__38511;
chunk__38508 = G__38512;
count__38509 = G__38513;
i__38510 = G__38514;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38507);
if(temp__4657__auto__){
var seq__38507__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38507__$1)){
var c__19307__auto__ = cljs.core.chunk_first.call(null,seq__38507__$1);
var G__38515 = cljs.core.chunk_rest.call(null,seq__38507__$1);
var G__38516 = c__19307__auto__;
var G__38517 = cljs.core.count.call(null,c__19307__auto__);
var G__38518 = (0);
seq__38507 = G__38515;
chunk__38508 = G__38516;
count__38509 = G__38517;
i__38510 = G__38518;
continue;
} else {
var n = cljs.core.first.call(null,seq__38507__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38519 = cljs.core.next.call(null,seq__38507__$1);
var G__38520 = null;
var G__38521 = (0);
var G__38522 = (0);
seq__38507 = G__38519;
chunk__38508 = G__38520;
count__38509 = G__38521;
i__38510 = G__38522;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__38573_38584 = cljs.core.seq.call(null,deps);
var chunk__38574_38585 = null;
var count__38575_38586 = (0);
var i__38576_38587 = (0);
while(true){
if((i__38576_38587 < count__38575_38586)){
var dep_38588 = cljs.core._nth.call(null,chunk__38574_38585,i__38576_38587);
topo_sort_helper_STAR_.call(null,dep_38588,(depth + (1)),state);

var G__38589 = seq__38573_38584;
var G__38590 = chunk__38574_38585;
var G__38591 = count__38575_38586;
var G__38592 = (i__38576_38587 + (1));
seq__38573_38584 = G__38589;
chunk__38574_38585 = G__38590;
count__38575_38586 = G__38591;
i__38576_38587 = G__38592;
continue;
} else {
var temp__4657__auto___38593 = cljs.core.seq.call(null,seq__38573_38584);
if(temp__4657__auto___38593){
var seq__38573_38594__$1 = temp__4657__auto___38593;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38573_38594__$1)){
var c__19307__auto___38595 = cljs.core.chunk_first.call(null,seq__38573_38594__$1);
var G__38596 = cljs.core.chunk_rest.call(null,seq__38573_38594__$1);
var G__38597 = c__19307__auto___38595;
var G__38598 = cljs.core.count.call(null,c__19307__auto___38595);
var G__38599 = (0);
seq__38573_38584 = G__38596;
chunk__38574_38585 = G__38597;
count__38575_38586 = G__38598;
i__38576_38587 = G__38599;
continue;
} else {
var dep_38600 = cljs.core.first.call(null,seq__38573_38594__$1);
topo_sort_helper_STAR_.call(null,dep_38600,(depth + (1)),state);

var G__38601 = cljs.core.next.call(null,seq__38573_38594__$1);
var G__38602 = null;
var G__38603 = (0);
var G__38604 = (0);
seq__38573_38584 = G__38601;
chunk__38574_38585 = G__38602;
count__38575_38586 = G__38603;
i__38576_38587 = G__38604;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__38577){
var vec__38581 = p__38577;
var seq__38582 = cljs.core.seq.call(null,vec__38581);
var first__38583 = cljs.core.first.call(null,seq__38582);
var seq__38582__$1 = cljs.core.next.call(null,seq__38582);
var x = first__38583;
var xs = seq__38582__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__38581,seq__38582,first__38583,seq__38582__$1,x,xs,get_deps__$1){
return (function (p1__38523_SHARP_){
return clojure.set.difference.call(null,p1__38523_SHARP_,x);
});})(vec__38581,seq__38582,first__38583,seq__38582__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__38617 = cljs.core.seq.call(null,provides);
var chunk__38618 = null;
var count__38619 = (0);
var i__38620 = (0);
while(true){
if((i__38620 < count__38619)){
var prov = cljs.core._nth.call(null,chunk__38618,i__38620);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38621_38629 = cljs.core.seq.call(null,requires);
var chunk__38622_38630 = null;
var count__38623_38631 = (0);
var i__38624_38632 = (0);
while(true){
if((i__38624_38632 < count__38623_38631)){
var req_38633 = cljs.core._nth.call(null,chunk__38622_38630,i__38624_38632);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38633,prov);

var G__38634 = seq__38621_38629;
var G__38635 = chunk__38622_38630;
var G__38636 = count__38623_38631;
var G__38637 = (i__38624_38632 + (1));
seq__38621_38629 = G__38634;
chunk__38622_38630 = G__38635;
count__38623_38631 = G__38636;
i__38624_38632 = G__38637;
continue;
} else {
var temp__4657__auto___38638 = cljs.core.seq.call(null,seq__38621_38629);
if(temp__4657__auto___38638){
var seq__38621_38639__$1 = temp__4657__auto___38638;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38621_38639__$1)){
var c__19307__auto___38640 = cljs.core.chunk_first.call(null,seq__38621_38639__$1);
var G__38641 = cljs.core.chunk_rest.call(null,seq__38621_38639__$1);
var G__38642 = c__19307__auto___38640;
var G__38643 = cljs.core.count.call(null,c__19307__auto___38640);
var G__38644 = (0);
seq__38621_38629 = G__38641;
chunk__38622_38630 = G__38642;
count__38623_38631 = G__38643;
i__38624_38632 = G__38644;
continue;
} else {
var req_38645 = cljs.core.first.call(null,seq__38621_38639__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38645,prov);

var G__38646 = cljs.core.next.call(null,seq__38621_38639__$1);
var G__38647 = null;
var G__38648 = (0);
var G__38649 = (0);
seq__38621_38629 = G__38646;
chunk__38622_38630 = G__38647;
count__38623_38631 = G__38648;
i__38624_38632 = G__38649;
continue;
}
} else {
}
}
break;
}

var G__38650 = seq__38617;
var G__38651 = chunk__38618;
var G__38652 = count__38619;
var G__38653 = (i__38620 + (1));
seq__38617 = G__38650;
chunk__38618 = G__38651;
count__38619 = G__38652;
i__38620 = G__38653;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38617);
if(temp__4657__auto__){
var seq__38617__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38617__$1)){
var c__19307__auto__ = cljs.core.chunk_first.call(null,seq__38617__$1);
var G__38654 = cljs.core.chunk_rest.call(null,seq__38617__$1);
var G__38655 = c__19307__auto__;
var G__38656 = cljs.core.count.call(null,c__19307__auto__);
var G__38657 = (0);
seq__38617 = G__38654;
chunk__38618 = G__38655;
count__38619 = G__38656;
i__38620 = G__38657;
continue;
} else {
var prov = cljs.core.first.call(null,seq__38617__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38625_38658 = cljs.core.seq.call(null,requires);
var chunk__38626_38659 = null;
var count__38627_38660 = (0);
var i__38628_38661 = (0);
while(true){
if((i__38628_38661 < count__38627_38660)){
var req_38662 = cljs.core._nth.call(null,chunk__38626_38659,i__38628_38661);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38662,prov);

var G__38663 = seq__38625_38658;
var G__38664 = chunk__38626_38659;
var G__38665 = count__38627_38660;
var G__38666 = (i__38628_38661 + (1));
seq__38625_38658 = G__38663;
chunk__38626_38659 = G__38664;
count__38627_38660 = G__38665;
i__38628_38661 = G__38666;
continue;
} else {
var temp__4657__auto___38667__$1 = cljs.core.seq.call(null,seq__38625_38658);
if(temp__4657__auto___38667__$1){
var seq__38625_38668__$1 = temp__4657__auto___38667__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38625_38668__$1)){
var c__19307__auto___38669 = cljs.core.chunk_first.call(null,seq__38625_38668__$1);
var G__38670 = cljs.core.chunk_rest.call(null,seq__38625_38668__$1);
var G__38671 = c__19307__auto___38669;
var G__38672 = cljs.core.count.call(null,c__19307__auto___38669);
var G__38673 = (0);
seq__38625_38658 = G__38670;
chunk__38626_38659 = G__38671;
count__38627_38660 = G__38672;
i__38628_38661 = G__38673;
continue;
} else {
var req_38674 = cljs.core.first.call(null,seq__38625_38668__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38674,prov);

var G__38675 = cljs.core.next.call(null,seq__38625_38668__$1);
var G__38676 = null;
var G__38677 = (0);
var G__38678 = (0);
seq__38625_38658 = G__38675;
chunk__38626_38659 = G__38676;
count__38627_38660 = G__38677;
i__38628_38661 = G__38678;
continue;
}
} else {
}
}
break;
}

var G__38679 = cljs.core.next.call(null,seq__38617__$1);
var G__38680 = null;
var G__38681 = (0);
var G__38682 = (0);
seq__38617 = G__38679;
chunk__38618 = G__38680;
count__38619 = G__38681;
i__38620 = G__38682;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__38687_38691 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__38688_38692 = null;
var count__38689_38693 = (0);
var i__38690_38694 = (0);
while(true){
if((i__38690_38694 < count__38689_38693)){
var ns_38695 = cljs.core._nth.call(null,chunk__38688_38692,i__38690_38694);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38695);

var G__38696 = seq__38687_38691;
var G__38697 = chunk__38688_38692;
var G__38698 = count__38689_38693;
var G__38699 = (i__38690_38694 + (1));
seq__38687_38691 = G__38696;
chunk__38688_38692 = G__38697;
count__38689_38693 = G__38698;
i__38690_38694 = G__38699;
continue;
} else {
var temp__4657__auto___38700 = cljs.core.seq.call(null,seq__38687_38691);
if(temp__4657__auto___38700){
var seq__38687_38701__$1 = temp__4657__auto___38700;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38687_38701__$1)){
var c__19307__auto___38702 = cljs.core.chunk_first.call(null,seq__38687_38701__$1);
var G__38703 = cljs.core.chunk_rest.call(null,seq__38687_38701__$1);
var G__38704 = c__19307__auto___38702;
var G__38705 = cljs.core.count.call(null,c__19307__auto___38702);
var G__38706 = (0);
seq__38687_38691 = G__38703;
chunk__38688_38692 = G__38704;
count__38689_38693 = G__38705;
i__38690_38694 = G__38706;
continue;
} else {
var ns_38707 = cljs.core.first.call(null,seq__38687_38701__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38707);

var G__38708 = cljs.core.next.call(null,seq__38687_38701__$1);
var G__38709 = null;
var G__38710 = (0);
var G__38711 = (0);
seq__38687_38691 = G__38708;
chunk__38688_38692 = G__38709;
count__38689_38693 = G__38710;
i__38690_38694 = G__38711;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18496__auto__ = goog.require__;
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__38712__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__38712 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38713__i = 0, G__38713__a = new Array(arguments.length -  0);
while (G__38713__i < G__38713__a.length) {G__38713__a[G__38713__i] = arguments[G__38713__i + 0]; ++G__38713__i;}
  args = new cljs.core.IndexedSeq(G__38713__a,0);
} 
return G__38712__delegate.call(this,args);};
G__38712.cljs$lang$maxFixedArity = 0;
G__38712.cljs$lang$applyTo = (function (arglist__38714){
var args = cljs.core.seq(arglist__38714);
return G__38712__delegate(args);
});
G__38712.cljs$core$IFn$_invoke$arity$variadic = G__38712__delegate;
return G__38712;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__38716 = cljs.core._EQ_;
var expr__38717 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__38716.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__38717))){
var path_parts = ((function (pred__38716,expr__38717){
return (function (p1__38715_SHARP_){
return clojure.string.split.call(null,p1__38715_SHARP_,/[\/\\]/);
});})(pred__38716,expr__38717))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__38716,expr__38717){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e38719){if((e38719 instanceof Error)){
var e = e38719;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e38719;

}
}})());
});
;})(path_parts,sep,root,pred__38716,expr__38717))
} else {
if(cljs.core.truth_(pred__38716.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__38717))){
return ((function (pred__38716,expr__38717){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__38716,expr__38717){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__38716,expr__38717))
);

return deferred.addErrback(((function (deferred,pred__38716,expr__38717){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__38716,expr__38717))
);
});
;})(pred__38716,expr__38717))
} else {
return ((function (pred__38716,expr__38717){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__38716,expr__38717))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__38720,callback){
var map__38723 = p__38720;
var map__38723__$1 = ((((!((map__38723 == null)))?((((map__38723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38723):map__38723);
var file_msg = map__38723__$1;
var request_url = cljs.core.get.call(null,map__38723__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__38723,map__38723__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__38723,map__38723__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__22469__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto__){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto__){
return (function (state_38747){
var state_val_38748 = (state_38747[(1)]);
if((state_val_38748 === (7))){
var inst_38743 = (state_38747[(2)]);
var state_38747__$1 = state_38747;
var statearr_38749_38769 = state_38747__$1;
(statearr_38749_38769[(2)] = inst_38743);

(statearr_38749_38769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38748 === (1))){
var state_38747__$1 = state_38747;
var statearr_38750_38770 = state_38747__$1;
(statearr_38750_38770[(2)] = null);

(statearr_38750_38770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38748 === (4))){
var inst_38727 = (state_38747[(7)]);
var inst_38727__$1 = (state_38747[(2)]);
var state_38747__$1 = (function (){var statearr_38751 = state_38747;
(statearr_38751[(7)] = inst_38727__$1);

return statearr_38751;
})();
if(cljs.core.truth_(inst_38727__$1)){
var statearr_38752_38771 = state_38747__$1;
(statearr_38752_38771[(1)] = (5));

} else {
var statearr_38753_38772 = state_38747__$1;
(statearr_38753_38772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38748 === (6))){
var state_38747__$1 = state_38747;
var statearr_38754_38773 = state_38747__$1;
(statearr_38754_38773[(2)] = null);

(statearr_38754_38773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38748 === (3))){
var inst_38745 = (state_38747[(2)]);
var state_38747__$1 = state_38747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38747__$1,inst_38745);
} else {
if((state_val_38748 === (2))){
var state_38747__$1 = state_38747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38747__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_38748 === (11))){
var inst_38739 = (state_38747[(2)]);
var state_38747__$1 = (function (){var statearr_38755 = state_38747;
(statearr_38755[(8)] = inst_38739);

return statearr_38755;
})();
var statearr_38756_38774 = state_38747__$1;
(statearr_38756_38774[(2)] = null);

(statearr_38756_38774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38748 === (9))){
var inst_38731 = (state_38747[(9)]);
var inst_38733 = (state_38747[(10)]);
var inst_38735 = inst_38733.call(null,inst_38731);
var state_38747__$1 = state_38747;
var statearr_38757_38775 = state_38747__$1;
(statearr_38757_38775[(2)] = inst_38735);

(statearr_38757_38775[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38748 === (5))){
var inst_38727 = (state_38747[(7)]);
var inst_38729 = figwheel.client.file_reloading.blocking_load.call(null,inst_38727);
var state_38747__$1 = state_38747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38747__$1,(8),inst_38729);
} else {
if((state_val_38748 === (10))){
var inst_38731 = (state_38747[(9)]);
var inst_38737 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_38731);
var state_38747__$1 = state_38747;
var statearr_38758_38776 = state_38747__$1;
(statearr_38758_38776[(2)] = inst_38737);

(statearr_38758_38776[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38748 === (8))){
var inst_38727 = (state_38747[(7)]);
var inst_38733 = (state_38747[(10)]);
var inst_38731 = (state_38747[(2)]);
var inst_38732 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_38733__$1 = cljs.core.get.call(null,inst_38732,inst_38727);
var state_38747__$1 = (function (){var statearr_38759 = state_38747;
(statearr_38759[(9)] = inst_38731);

(statearr_38759[(10)] = inst_38733__$1);

return statearr_38759;
})();
if(cljs.core.truth_(inst_38733__$1)){
var statearr_38760_38777 = state_38747__$1;
(statearr_38760_38777[(1)] = (9));

} else {
var statearr_38761_38778 = state_38747__$1;
(statearr_38761_38778[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22469__auto__))
;
return ((function (switch__22357__auto__,c__22469__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22358__auto__ = null;
var figwheel$client$file_reloading$state_machine__22358__auto____0 = (function (){
var statearr_38765 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38765[(0)] = figwheel$client$file_reloading$state_machine__22358__auto__);

(statearr_38765[(1)] = (1));

return statearr_38765;
});
var figwheel$client$file_reloading$state_machine__22358__auto____1 = (function (state_38747){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_38747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e38766){if((e38766 instanceof Object)){
var ex__22361__auto__ = e38766;
var statearr_38767_38779 = state_38747;
(statearr_38767_38779[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38780 = state_38747;
state_38747 = G__38780;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22358__auto__ = function(state_38747){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22358__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22358__auto____1.call(this,state_38747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22358__auto____0;
figwheel$client$file_reloading$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22358__auto____1;
return figwheel$client$file_reloading$state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto__))
})();
var state__22471__auto__ = (function (){var statearr_38768 = f__22470__auto__.call(null);
(statearr_38768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto__);

return statearr_38768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto__))
);

return c__22469__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__38781,callback){
var map__38784 = p__38781;
var map__38784__$1 = ((((!((map__38784 == null)))?((((map__38784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38784):map__38784);
var file_msg = map__38784__$1;
var namespace = cljs.core.get.call(null,map__38784__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__38784,map__38784__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__38784,map__38784__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__38786){
var map__38789 = p__38786;
var map__38789__$1 = ((((!((map__38789 == null)))?((((map__38789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38789):map__38789);
var file_msg = map__38789__$1;
var namespace = cljs.core.get.call(null,map__38789__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18484__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18484__auto__){
var or__18496__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
var or__18496__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18496__auto____$1)){
return or__18496__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18484__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__38791,callback){
var map__38794 = p__38791;
var map__38794__$1 = ((((!((map__38794 == null)))?((((map__38794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38794):map__38794);
var file_msg = map__38794__$1;
var request_url = cljs.core.get.call(null,map__38794__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__38794__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22469__auto___38898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto___38898,out){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto___38898,out){
return (function (state_38880){
var state_val_38881 = (state_38880[(1)]);
if((state_val_38881 === (1))){
var inst_38854 = cljs.core.seq.call(null,files);
var inst_38855 = cljs.core.first.call(null,inst_38854);
var inst_38856 = cljs.core.next.call(null,inst_38854);
var inst_38857 = files;
var state_38880__$1 = (function (){var statearr_38882 = state_38880;
(statearr_38882[(7)] = inst_38856);

(statearr_38882[(8)] = inst_38857);

(statearr_38882[(9)] = inst_38855);

return statearr_38882;
})();
var statearr_38883_38899 = state_38880__$1;
(statearr_38883_38899[(2)] = null);

(statearr_38883_38899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38881 === (2))){
var inst_38857 = (state_38880[(8)]);
var inst_38863 = (state_38880[(10)]);
var inst_38862 = cljs.core.seq.call(null,inst_38857);
var inst_38863__$1 = cljs.core.first.call(null,inst_38862);
var inst_38864 = cljs.core.next.call(null,inst_38862);
var inst_38865 = (inst_38863__$1 == null);
var inst_38866 = cljs.core.not.call(null,inst_38865);
var state_38880__$1 = (function (){var statearr_38884 = state_38880;
(statearr_38884[(11)] = inst_38864);

(statearr_38884[(10)] = inst_38863__$1);

return statearr_38884;
})();
if(inst_38866){
var statearr_38885_38900 = state_38880__$1;
(statearr_38885_38900[(1)] = (4));

} else {
var statearr_38886_38901 = state_38880__$1;
(statearr_38886_38901[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38881 === (3))){
var inst_38878 = (state_38880[(2)]);
var state_38880__$1 = state_38880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38880__$1,inst_38878);
} else {
if((state_val_38881 === (4))){
var inst_38863 = (state_38880[(10)]);
var inst_38868 = figwheel.client.file_reloading.reload_js_file.call(null,inst_38863);
var state_38880__$1 = state_38880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38880__$1,(7),inst_38868);
} else {
if((state_val_38881 === (5))){
var inst_38874 = cljs.core.async.close_BANG_.call(null,out);
var state_38880__$1 = state_38880;
var statearr_38887_38902 = state_38880__$1;
(statearr_38887_38902[(2)] = inst_38874);

(statearr_38887_38902[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38881 === (6))){
var inst_38876 = (state_38880[(2)]);
var state_38880__$1 = state_38880;
var statearr_38888_38903 = state_38880__$1;
(statearr_38888_38903[(2)] = inst_38876);

(statearr_38888_38903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38881 === (7))){
var inst_38864 = (state_38880[(11)]);
var inst_38870 = (state_38880[(2)]);
var inst_38871 = cljs.core.async.put_BANG_.call(null,out,inst_38870);
var inst_38857 = inst_38864;
var state_38880__$1 = (function (){var statearr_38889 = state_38880;
(statearr_38889[(8)] = inst_38857);

(statearr_38889[(12)] = inst_38871);

return statearr_38889;
})();
var statearr_38890_38904 = state_38880__$1;
(statearr_38890_38904[(2)] = null);

(statearr_38890_38904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__22469__auto___38898,out))
;
return ((function (switch__22357__auto__,c__22469__auto___38898,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22358__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22358__auto____0 = (function (){
var statearr_38894 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38894[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22358__auto__);

(statearr_38894[(1)] = (1));

return statearr_38894;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22358__auto____1 = (function (state_38880){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_38880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e38895){if((e38895 instanceof Object)){
var ex__22361__auto__ = e38895;
var statearr_38896_38905 = state_38880;
(statearr_38896_38905[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38906 = state_38880;
state_38880 = G__38906;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22358__auto__ = function(state_38880){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22358__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22358__auto____1.call(this,state_38880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22358__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22358__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto___38898,out))
})();
var state__22471__auto__ = (function (){var statearr_38897 = f__22470__auto__.call(null);
(statearr_38897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___38898);

return statearr_38897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto___38898,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__38907,opts){
var map__38911 = p__38907;
var map__38911__$1 = ((((!((map__38911 == null)))?((((map__38911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38911):map__38911);
var eval_body__$1 = cljs.core.get.call(null,map__38911__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__38911__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18484__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18484__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18484__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e38913){var e = e38913;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__38914_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38914_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__38923){
var vec__38924 = p__38923;
var k = cljs.core.nth.call(null,vec__38924,(0),null);
var v = cljs.core.nth.call(null,vec__38924,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__38927){
var vec__38928 = p__38927;
var k = cljs.core.nth.call(null,vec__38928,(0),null);
var v = cljs.core.nth.call(null,vec__38928,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__38934,p__38935){
var map__39182 = p__38934;
var map__39182__$1 = ((((!((map__39182 == null)))?((((map__39182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39182):map__39182);
var opts = map__39182__$1;
var before_jsload = cljs.core.get.call(null,map__39182__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__39182__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__39182__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__39183 = p__38935;
var map__39183__$1 = ((((!((map__39183 == null)))?((((map__39183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39183):map__39183);
var msg = map__39183__$1;
var files = cljs.core.get.call(null,map__39183__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__39183__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__39183__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22469__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto__,map__39182,map__39182__$1,opts,before_jsload,on_jsload,reload_dependents,map__39183,map__39183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto__,map__39182,map__39182__$1,opts,before_jsload,on_jsload,reload_dependents,map__39183,map__39183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_39336){
var state_val_39337 = (state_39336[(1)]);
if((state_val_39337 === (7))){
var inst_39198 = (state_39336[(7)]);
var inst_39197 = (state_39336[(8)]);
var inst_39199 = (state_39336[(9)]);
var inst_39200 = (state_39336[(10)]);
var inst_39205 = cljs.core._nth.call(null,inst_39198,inst_39200);
var inst_39206 = figwheel.client.file_reloading.eval_body.call(null,inst_39205,opts);
var inst_39207 = (inst_39200 + (1));
var tmp39338 = inst_39198;
var tmp39339 = inst_39197;
var tmp39340 = inst_39199;
var inst_39197__$1 = tmp39339;
var inst_39198__$1 = tmp39338;
var inst_39199__$1 = tmp39340;
var inst_39200__$1 = inst_39207;
var state_39336__$1 = (function (){var statearr_39341 = state_39336;
(statearr_39341[(7)] = inst_39198__$1);

(statearr_39341[(11)] = inst_39206);

(statearr_39341[(8)] = inst_39197__$1);

(statearr_39341[(9)] = inst_39199__$1);

(statearr_39341[(10)] = inst_39200__$1);

return statearr_39341;
})();
var statearr_39342_39428 = state_39336__$1;
(statearr_39342_39428[(2)] = null);

(statearr_39342_39428[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (20))){
var inst_39240 = (state_39336[(12)]);
var inst_39248 = figwheel.client.file_reloading.sort_files.call(null,inst_39240);
var state_39336__$1 = state_39336;
var statearr_39343_39429 = state_39336__$1;
(statearr_39343_39429[(2)] = inst_39248);

(statearr_39343_39429[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (27))){
var state_39336__$1 = state_39336;
var statearr_39344_39430 = state_39336__$1;
(statearr_39344_39430[(2)] = null);

(statearr_39344_39430[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (1))){
var inst_39189 = (state_39336[(13)]);
var inst_39186 = before_jsload.call(null,files);
var inst_39187 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_39188 = (function (){return ((function (inst_39189,inst_39186,inst_39187,state_val_39337,c__22469__auto__,map__39182,map__39182__$1,opts,before_jsload,on_jsload,reload_dependents,map__39183,map__39183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38931_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38931_SHARP_);
});
;})(inst_39189,inst_39186,inst_39187,state_val_39337,c__22469__auto__,map__39182,map__39182__$1,opts,before_jsload,on_jsload,reload_dependents,map__39183,map__39183__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39189__$1 = cljs.core.filter.call(null,inst_39188,files);
var inst_39190 = cljs.core.not_empty.call(null,inst_39189__$1);
var state_39336__$1 = (function (){var statearr_39345 = state_39336;
(statearr_39345[(14)] = inst_39187);

(statearr_39345[(15)] = inst_39186);

(statearr_39345[(13)] = inst_39189__$1);

return statearr_39345;
})();
if(cljs.core.truth_(inst_39190)){
var statearr_39346_39431 = state_39336__$1;
(statearr_39346_39431[(1)] = (2));

} else {
var statearr_39347_39432 = state_39336__$1;
(statearr_39347_39432[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (24))){
var state_39336__$1 = state_39336;
var statearr_39348_39433 = state_39336__$1;
(statearr_39348_39433[(2)] = null);

(statearr_39348_39433[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (39))){
var inst_39290 = (state_39336[(16)]);
var state_39336__$1 = state_39336;
var statearr_39349_39434 = state_39336__$1;
(statearr_39349_39434[(2)] = inst_39290);

(statearr_39349_39434[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (46))){
var inst_39331 = (state_39336[(2)]);
var state_39336__$1 = state_39336;
var statearr_39350_39435 = state_39336__$1;
(statearr_39350_39435[(2)] = inst_39331);

(statearr_39350_39435[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (4))){
var inst_39234 = (state_39336[(2)]);
var inst_39235 = cljs.core.List.EMPTY;
var inst_39236 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_39235);
var inst_39237 = (function (){return ((function (inst_39234,inst_39235,inst_39236,state_val_39337,c__22469__auto__,map__39182,map__39182__$1,opts,before_jsload,on_jsload,reload_dependents,map__39183,map__39183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38932_SHARP_){
var and__18484__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38932_SHARP_);
if(cljs.core.truth_(and__18484__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38932_SHARP_));
} else {
return and__18484__auto__;
}
});
;})(inst_39234,inst_39235,inst_39236,state_val_39337,c__22469__auto__,map__39182,map__39182__$1,opts,before_jsload,on_jsload,reload_dependents,map__39183,map__39183__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39238 = cljs.core.filter.call(null,inst_39237,files);
var inst_39239 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_39240 = cljs.core.concat.call(null,inst_39238,inst_39239);
var state_39336__$1 = (function (){var statearr_39351 = state_39336;
(statearr_39351[(17)] = inst_39234);

(statearr_39351[(18)] = inst_39236);

(statearr_39351[(12)] = inst_39240);

return statearr_39351;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_39352_39436 = state_39336__$1;
(statearr_39352_39436[(1)] = (16));

} else {
var statearr_39353_39437 = state_39336__$1;
(statearr_39353_39437[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (15))){
var inst_39224 = (state_39336[(2)]);
var state_39336__$1 = state_39336;
var statearr_39354_39438 = state_39336__$1;
(statearr_39354_39438[(2)] = inst_39224);

(statearr_39354_39438[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (21))){
var inst_39250 = (state_39336[(19)]);
var inst_39250__$1 = (state_39336[(2)]);
var inst_39251 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_39250__$1);
var state_39336__$1 = (function (){var statearr_39355 = state_39336;
(statearr_39355[(19)] = inst_39250__$1);

return statearr_39355;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39336__$1,(22),inst_39251);
} else {
if((state_val_39337 === (31))){
var inst_39334 = (state_39336[(2)]);
var state_39336__$1 = state_39336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39336__$1,inst_39334);
} else {
if((state_val_39337 === (32))){
var inst_39290 = (state_39336[(16)]);
var inst_39295 = inst_39290.cljs$lang$protocol_mask$partition0$;
var inst_39296 = (inst_39295 & (64));
var inst_39297 = inst_39290.cljs$core$ISeq$;
var inst_39298 = (inst_39296) || (inst_39297);
var state_39336__$1 = state_39336;
if(cljs.core.truth_(inst_39298)){
var statearr_39356_39439 = state_39336__$1;
(statearr_39356_39439[(1)] = (35));

} else {
var statearr_39357_39440 = state_39336__$1;
(statearr_39357_39440[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (40))){
var inst_39311 = (state_39336[(20)]);
var inst_39310 = (state_39336[(2)]);
var inst_39311__$1 = cljs.core.get.call(null,inst_39310,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_39312 = cljs.core.get.call(null,inst_39310,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_39313 = cljs.core.not_empty.call(null,inst_39311__$1);
var state_39336__$1 = (function (){var statearr_39358 = state_39336;
(statearr_39358[(21)] = inst_39312);

(statearr_39358[(20)] = inst_39311__$1);

return statearr_39358;
})();
if(cljs.core.truth_(inst_39313)){
var statearr_39359_39441 = state_39336__$1;
(statearr_39359_39441[(1)] = (41));

} else {
var statearr_39360_39442 = state_39336__$1;
(statearr_39360_39442[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (33))){
var state_39336__$1 = state_39336;
var statearr_39361_39443 = state_39336__$1;
(statearr_39361_39443[(2)] = false);

(statearr_39361_39443[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (13))){
var inst_39210 = (state_39336[(22)]);
var inst_39214 = cljs.core.chunk_first.call(null,inst_39210);
var inst_39215 = cljs.core.chunk_rest.call(null,inst_39210);
var inst_39216 = cljs.core.count.call(null,inst_39214);
var inst_39197 = inst_39215;
var inst_39198 = inst_39214;
var inst_39199 = inst_39216;
var inst_39200 = (0);
var state_39336__$1 = (function (){var statearr_39362 = state_39336;
(statearr_39362[(7)] = inst_39198);

(statearr_39362[(8)] = inst_39197);

(statearr_39362[(9)] = inst_39199);

(statearr_39362[(10)] = inst_39200);

return statearr_39362;
})();
var statearr_39363_39444 = state_39336__$1;
(statearr_39363_39444[(2)] = null);

(statearr_39363_39444[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (22))){
var inst_39254 = (state_39336[(23)]);
var inst_39250 = (state_39336[(19)]);
var inst_39253 = (state_39336[(24)]);
var inst_39258 = (state_39336[(25)]);
var inst_39253__$1 = (state_39336[(2)]);
var inst_39254__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39253__$1);
var inst_39255 = (function (){var all_files = inst_39250;
var res_SINGLEQUOTE_ = inst_39253__$1;
var res = inst_39254__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_39254,inst_39250,inst_39253,inst_39258,inst_39253__$1,inst_39254__$1,state_val_39337,c__22469__auto__,map__39182,map__39182__$1,opts,before_jsload,on_jsload,reload_dependents,map__39183,map__39183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38933_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__38933_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_39254,inst_39250,inst_39253,inst_39258,inst_39253__$1,inst_39254__$1,state_val_39337,c__22469__auto__,map__39182,map__39182__$1,opts,before_jsload,on_jsload,reload_dependents,map__39183,map__39183__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39256 = cljs.core.filter.call(null,inst_39255,inst_39253__$1);
var inst_39257 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_39258__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39257);
var inst_39259 = cljs.core.not_empty.call(null,inst_39258__$1);
var state_39336__$1 = (function (){var statearr_39364 = state_39336;
(statearr_39364[(23)] = inst_39254__$1);

(statearr_39364[(26)] = inst_39256);

(statearr_39364[(24)] = inst_39253__$1);

(statearr_39364[(25)] = inst_39258__$1);

return statearr_39364;
})();
if(cljs.core.truth_(inst_39259)){
var statearr_39365_39445 = state_39336__$1;
(statearr_39365_39445[(1)] = (23));

} else {
var statearr_39366_39446 = state_39336__$1;
(statearr_39366_39446[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (36))){
var state_39336__$1 = state_39336;
var statearr_39367_39447 = state_39336__$1;
(statearr_39367_39447[(2)] = false);

(statearr_39367_39447[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (41))){
var inst_39311 = (state_39336[(20)]);
var inst_39315 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_39316 = cljs.core.map.call(null,inst_39315,inst_39311);
var inst_39317 = cljs.core.pr_str.call(null,inst_39316);
var inst_39318 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_39317)].join('');
var inst_39319 = figwheel.client.utils.log.call(null,inst_39318);
var state_39336__$1 = state_39336;
var statearr_39368_39448 = state_39336__$1;
(statearr_39368_39448[(2)] = inst_39319);

(statearr_39368_39448[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (43))){
var inst_39312 = (state_39336[(21)]);
var inst_39322 = (state_39336[(2)]);
var inst_39323 = cljs.core.not_empty.call(null,inst_39312);
var state_39336__$1 = (function (){var statearr_39369 = state_39336;
(statearr_39369[(27)] = inst_39322);

return statearr_39369;
})();
if(cljs.core.truth_(inst_39323)){
var statearr_39370_39449 = state_39336__$1;
(statearr_39370_39449[(1)] = (44));

} else {
var statearr_39371_39450 = state_39336__$1;
(statearr_39371_39450[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (29))){
var inst_39254 = (state_39336[(23)]);
var inst_39256 = (state_39336[(26)]);
var inst_39250 = (state_39336[(19)]);
var inst_39253 = (state_39336[(24)]);
var inst_39258 = (state_39336[(25)]);
var inst_39290 = (state_39336[(16)]);
var inst_39286 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_39289 = (function (){var all_files = inst_39250;
var res_SINGLEQUOTE_ = inst_39253;
var res = inst_39254;
var files_not_loaded = inst_39256;
var dependencies_that_loaded = inst_39258;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39254,inst_39256,inst_39250,inst_39253,inst_39258,inst_39290,inst_39286,state_val_39337,c__22469__auto__,map__39182,map__39182__$1,opts,before_jsload,on_jsload,reload_dependents,map__39183,map__39183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39288){
var map__39372 = p__39288;
var map__39372__$1 = ((((!((map__39372 == null)))?((((map__39372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39372):map__39372);
var namespace = cljs.core.get.call(null,map__39372__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39254,inst_39256,inst_39250,inst_39253,inst_39258,inst_39290,inst_39286,state_val_39337,c__22469__auto__,map__39182,map__39182__$1,opts,before_jsload,on_jsload,reload_dependents,map__39183,map__39183__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39290__$1 = cljs.core.group_by.call(null,inst_39289,inst_39256);
var inst_39292 = (inst_39290__$1 == null);
var inst_39293 = cljs.core.not.call(null,inst_39292);
var state_39336__$1 = (function (){var statearr_39374 = state_39336;
(statearr_39374[(28)] = inst_39286);

(statearr_39374[(16)] = inst_39290__$1);

return statearr_39374;
})();
if(inst_39293){
var statearr_39375_39451 = state_39336__$1;
(statearr_39375_39451[(1)] = (32));

} else {
var statearr_39376_39452 = state_39336__$1;
(statearr_39376_39452[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (44))){
var inst_39312 = (state_39336[(21)]);
var inst_39325 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39312);
var inst_39326 = cljs.core.pr_str.call(null,inst_39325);
var inst_39327 = [cljs.core.str("not required: "),cljs.core.str(inst_39326)].join('');
var inst_39328 = figwheel.client.utils.log.call(null,inst_39327);
var state_39336__$1 = state_39336;
var statearr_39377_39453 = state_39336__$1;
(statearr_39377_39453[(2)] = inst_39328);

(statearr_39377_39453[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (6))){
var inst_39231 = (state_39336[(2)]);
var state_39336__$1 = state_39336;
var statearr_39378_39454 = state_39336__$1;
(statearr_39378_39454[(2)] = inst_39231);

(statearr_39378_39454[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (28))){
var inst_39256 = (state_39336[(26)]);
var inst_39283 = (state_39336[(2)]);
var inst_39284 = cljs.core.not_empty.call(null,inst_39256);
var state_39336__$1 = (function (){var statearr_39379 = state_39336;
(statearr_39379[(29)] = inst_39283);

return statearr_39379;
})();
if(cljs.core.truth_(inst_39284)){
var statearr_39380_39455 = state_39336__$1;
(statearr_39380_39455[(1)] = (29));

} else {
var statearr_39381_39456 = state_39336__$1;
(statearr_39381_39456[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (25))){
var inst_39254 = (state_39336[(23)]);
var inst_39270 = (state_39336[(2)]);
var inst_39271 = cljs.core.not_empty.call(null,inst_39254);
var state_39336__$1 = (function (){var statearr_39382 = state_39336;
(statearr_39382[(30)] = inst_39270);

return statearr_39382;
})();
if(cljs.core.truth_(inst_39271)){
var statearr_39383_39457 = state_39336__$1;
(statearr_39383_39457[(1)] = (26));

} else {
var statearr_39384_39458 = state_39336__$1;
(statearr_39384_39458[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (34))){
var inst_39305 = (state_39336[(2)]);
var state_39336__$1 = state_39336;
if(cljs.core.truth_(inst_39305)){
var statearr_39385_39459 = state_39336__$1;
(statearr_39385_39459[(1)] = (38));

} else {
var statearr_39386_39460 = state_39336__$1;
(statearr_39386_39460[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (17))){
var state_39336__$1 = state_39336;
var statearr_39387_39461 = state_39336__$1;
(statearr_39387_39461[(2)] = recompile_dependents);

(statearr_39387_39461[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (3))){
var state_39336__$1 = state_39336;
var statearr_39388_39462 = state_39336__$1;
(statearr_39388_39462[(2)] = null);

(statearr_39388_39462[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (12))){
var inst_39227 = (state_39336[(2)]);
var state_39336__$1 = state_39336;
var statearr_39389_39463 = state_39336__$1;
(statearr_39389_39463[(2)] = inst_39227);

(statearr_39389_39463[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (2))){
var inst_39189 = (state_39336[(13)]);
var inst_39196 = cljs.core.seq.call(null,inst_39189);
var inst_39197 = inst_39196;
var inst_39198 = null;
var inst_39199 = (0);
var inst_39200 = (0);
var state_39336__$1 = (function (){var statearr_39390 = state_39336;
(statearr_39390[(7)] = inst_39198);

(statearr_39390[(8)] = inst_39197);

(statearr_39390[(9)] = inst_39199);

(statearr_39390[(10)] = inst_39200);

return statearr_39390;
})();
var statearr_39391_39464 = state_39336__$1;
(statearr_39391_39464[(2)] = null);

(statearr_39391_39464[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (23))){
var inst_39254 = (state_39336[(23)]);
var inst_39256 = (state_39336[(26)]);
var inst_39250 = (state_39336[(19)]);
var inst_39253 = (state_39336[(24)]);
var inst_39258 = (state_39336[(25)]);
var inst_39261 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_39263 = (function (){var all_files = inst_39250;
var res_SINGLEQUOTE_ = inst_39253;
var res = inst_39254;
var files_not_loaded = inst_39256;
var dependencies_that_loaded = inst_39258;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39254,inst_39256,inst_39250,inst_39253,inst_39258,inst_39261,state_val_39337,c__22469__auto__,map__39182,map__39182__$1,opts,before_jsload,on_jsload,reload_dependents,map__39183,map__39183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39262){
var map__39392 = p__39262;
var map__39392__$1 = ((((!((map__39392 == null)))?((((map__39392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39392):map__39392);
var request_url = cljs.core.get.call(null,map__39392__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39254,inst_39256,inst_39250,inst_39253,inst_39258,inst_39261,state_val_39337,c__22469__auto__,map__39182,map__39182__$1,opts,before_jsload,on_jsload,reload_dependents,map__39183,map__39183__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39264 = cljs.core.reverse.call(null,inst_39258);
var inst_39265 = cljs.core.map.call(null,inst_39263,inst_39264);
var inst_39266 = cljs.core.pr_str.call(null,inst_39265);
var inst_39267 = figwheel.client.utils.log.call(null,inst_39266);
var state_39336__$1 = (function (){var statearr_39394 = state_39336;
(statearr_39394[(31)] = inst_39261);

return statearr_39394;
})();
var statearr_39395_39465 = state_39336__$1;
(statearr_39395_39465[(2)] = inst_39267);

(statearr_39395_39465[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (35))){
var state_39336__$1 = state_39336;
var statearr_39396_39466 = state_39336__$1;
(statearr_39396_39466[(2)] = true);

(statearr_39396_39466[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (19))){
var inst_39240 = (state_39336[(12)]);
var inst_39246 = figwheel.client.file_reloading.expand_files.call(null,inst_39240);
var state_39336__$1 = state_39336;
var statearr_39397_39467 = state_39336__$1;
(statearr_39397_39467[(2)] = inst_39246);

(statearr_39397_39467[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (11))){
var state_39336__$1 = state_39336;
var statearr_39398_39468 = state_39336__$1;
(statearr_39398_39468[(2)] = null);

(statearr_39398_39468[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (9))){
var inst_39229 = (state_39336[(2)]);
var state_39336__$1 = state_39336;
var statearr_39399_39469 = state_39336__$1;
(statearr_39399_39469[(2)] = inst_39229);

(statearr_39399_39469[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (5))){
var inst_39199 = (state_39336[(9)]);
var inst_39200 = (state_39336[(10)]);
var inst_39202 = (inst_39200 < inst_39199);
var inst_39203 = inst_39202;
var state_39336__$1 = state_39336;
if(cljs.core.truth_(inst_39203)){
var statearr_39400_39470 = state_39336__$1;
(statearr_39400_39470[(1)] = (7));

} else {
var statearr_39401_39471 = state_39336__$1;
(statearr_39401_39471[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (14))){
var inst_39210 = (state_39336[(22)]);
var inst_39219 = cljs.core.first.call(null,inst_39210);
var inst_39220 = figwheel.client.file_reloading.eval_body.call(null,inst_39219,opts);
var inst_39221 = cljs.core.next.call(null,inst_39210);
var inst_39197 = inst_39221;
var inst_39198 = null;
var inst_39199 = (0);
var inst_39200 = (0);
var state_39336__$1 = (function (){var statearr_39402 = state_39336;
(statearr_39402[(32)] = inst_39220);

(statearr_39402[(7)] = inst_39198);

(statearr_39402[(8)] = inst_39197);

(statearr_39402[(9)] = inst_39199);

(statearr_39402[(10)] = inst_39200);

return statearr_39402;
})();
var statearr_39403_39472 = state_39336__$1;
(statearr_39403_39472[(2)] = null);

(statearr_39403_39472[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (45))){
var state_39336__$1 = state_39336;
var statearr_39404_39473 = state_39336__$1;
(statearr_39404_39473[(2)] = null);

(statearr_39404_39473[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (26))){
var inst_39254 = (state_39336[(23)]);
var inst_39256 = (state_39336[(26)]);
var inst_39250 = (state_39336[(19)]);
var inst_39253 = (state_39336[(24)]);
var inst_39258 = (state_39336[(25)]);
var inst_39273 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_39275 = (function (){var all_files = inst_39250;
var res_SINGLEQUOTE_ = inst_39253;
var res = inst_39254;
var files_not_loaded = inst_39256;
var dependencies_that_loaded = inst_39258;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39254,inst_39256,inst_39250,inst_39253,inst_39258,inst_39273,state_val_39337,c__22469__auto__,map__39182,map__39182__$1,opts,before_jsload,on_jsload,reload_dependents,map__39183,map__39183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39274){
var map__39405 = p__39274;
var map__39405__$1 = ((((!((map__39405 == null)))?((((map__39405.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39405.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39405):map__39405);
var namespace = cljs.core.get.call(null,map__39405__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__39405__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39254,inst_39256,inst_39250,inst_39253,inst_39258,inst_39273,state_val_39337,c__22469__auto__,map__39182,map__39182__$1,opts,before_jsload,on_jsload,reload_dependents,map__39183,map__39183__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39276 = cljs.core.map.call(null,inst_39275,inst_39254);
var inst_39277 = cljs.core.pr_str.call(null,inst_39276);
var inst_39278 = figwheel.client.utils.log.call(null,inst_39277);
var inst_39279 = (function (){var all_files = inst_39250;
var res_SINGLEQUOTE_ = inst_39253;
var res = inst_39254;
var files_not_loaded = inst_39256;
var dependencies_that_loaded = inst_39258;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39254,inst_39256,inst_39250,inst_39253,inst_39258,inst_39273,inst_39275,inst_39276,inst_39277,inst_39278,state_val_39337,c__22469__auto__,map__39182,map__39182__$1,opts,before_jsload,on_jsload,reload_dependents,map__39183,map__39183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39254,inst_39256,inst_39250,inst_39253,inst_39258,inst_39273,inst_39275,inst_39276,inst_39277,inst_39278,state_val_39337,c__22469__auto__,map__39182,map__39182__$1,opts,before_jsload,on_jsload,reload_dependents,map__39183,map__39183__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39280 = setTimeout(inst_39279,(10));
var state_39336__$1 = (function (){var statearr_39407 = state_39336;
(statearr_39407[(33)] = inst_39273);

(statearr_39407[(34)] = inst_39278);

return statearr_39407;
})();
var statearr_39408_39474 = state_39336__$1;
(statearr_39408_39474[(2)] = inst_39280);

(statearr_39408_39474[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (16))){
var state_39336__$1 = state_39336;
var statearr_39409_39475 = state_39336__$1;
(statearr_39409_39475[(2)] = reload_dependents);

(statearr_39409_39475[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (38))){
var inst_39290 = (state_39336[(16)]);
var inst_39307 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39290);
var state_39336__$1 = state_39336;
var statearr_39410_39476 = state_39336__$1;
(statearr_39410_39476[(2)] = inst_39307);

(statearr_39410_39476[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (30))){
var state_39336__$1 = state_39336;
var statearr_39411_39477 = state_39336__$1;
(statearr_39411_39477[(2)] = null);

(statearr_39411_39477[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (10))){
var inst_39210 = (state_39336[(22)]);
var inst_39212 = cljs.core.chunked_seq_QMARK_.call(null,inst_39210);
var state_39336__$1 = state_39336;
if(inst_39212){
var statearr_39412_39478 = state_39336__$1;
(statearr_39412_39478[(1)] = (13));

} else {
var statearr_39413_39479 = state_39336__$1;
(statearr_39413_39479[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (18))){
var inst_39244 = (state_39336[(2)]);
var state_39336__$1 = state_39336;
if(cljs.core.truth_(inst_39244)){
var statearr_39414_39480 = state_39336__$1;
(statearr_39414_39480[(1)] = (19));

} else {
var statearr_39415_39481 = state_39336__$1;
(statearr_39415_39481[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (42))){
var state_39336__$1 = state_39336;
var statearr_39416_39482 = state_39336__$1;
(statearr_39416_39482[(2)] = null);

(statearr_39416_39482[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (37))){
var inst_39302 = (state_39336[(2)]);
var state_39336__$1 = state_39336;
var statearr_39417_39483 = state_39336__$1;
(statearr_39417_39483[(2)] = inst_39302);

(statearr_39417_39483[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (8))){
var inst_39197 = (state_39336[(8)]);
var inst_39210 = (state_39336[(22)]);
var inst_39210__$1 = cljs.core.seq.call(null,inst_39197);
var state_39336__$1 = (function (){var statearr_39418 = state_39336;
(statearr_39418[(22)] = inst_39210__$1);

return statearr_39418;
})();
if(inst_39210__$1){
var statearr_39419_39484 = state_39336__$1;
(statearr_39419_39484[(1)] = (10));

} else {
var statearr_39420_39485 = state_39336__$1;
(statearr_39420_39485[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22469__auto__,map__39182,map__39182__$1,opts,before_jsload,on_jsload,reload_dependents,map__39183,map__39183__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22357__auto__,c__22469__auto__,map__39182,map__39182__$1,opts,before_jsload,on_jsload,reload_dependents,map__39183,map__39183__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22358__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22358__auto____0 = (function (){
var statearr_39424 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39424[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22358__auto__);

(statearr_39424[(1)] = (1));

return statearr_39424;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22358__auto____1 = (function (state_39336){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_39336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e39425){if((e39425 instanceof Object)){
var ex__22361__auto__ = e39425;
var statearr_39426_39486 = state_39336;
(statearr_39426_39486[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39487 = state_39336;
state_39336 = G__39487;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22358__auto__ = function(state_39336){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22358__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22358__auto____1.call(this,state_39336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22358__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22358__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto__,map__39182,map__39182__$1,opts,before_jsload,on_jsload,reload_dependents,map__39183,map__39183__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22471__auto__ = (function (){var statearr_39427 = f__22470__auto__.call(null);
(statearr_39427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto__);

return statearr_39427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto__,map__39182,map__39182__$1,opts,before_jsload,on_jsload,reload_dependents,map__39183,map__39183__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22469__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__39490,link){
var map__39493 = p__39490;
var map__39493__$1 = ((((!((map__39493 == null)))?((((map__39493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39493):map__39493);
var file = cljs.core.get.call(null,map__39493__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__39493,map__39493__$1,file){
return (function (p1__39488_SHARP_,p2__39489_SHARP_){
if(cljs.core._EQ_.call(null,p1__39488_SHARP_,p2__39489_SHARP_)){
return p1__39488_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__39493,map__39493__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__39499){
var map__39500 = p__39499;
var map__39500__$1 = ((((!((map__39500 == null)))?((((map__39500.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39500.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39500):map__39500);
var match_length = cljs.core.get.call(null,map__39500__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__39500__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__39495_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__39495_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args39502 = [];
var len__19571__auto___39505 = arguments.length;
var i__19572__auto___39506 = (0);
while(true){
if((i__19572__auto___39506 < len__19571__auto___39505)){
args39502.push((arguments[i__19572__auto___39506]));

var G__39507 = (i__19572__auto___39506 + (1));
i__19572__auto___39506 = G__39507;
continue;
} else {
}
break;
}

var G__39504 = args39502.length;
switch (G__39504) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39502.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__39509_SHARP_,p2__39510_SHARP_){
return cljs.core.assoc.call(null,p1__39509_SHARP_,cljs.core.get.call(null,p2__39510_SHARP_,key),p2__39510_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__39511){
var map__39514 = p__39511;
var map__39514__$1 = ((((!((map__39514 == null)))?((((map__39514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39514):map__39514);
var f_data = map__39514__$1;
var file = cljs.core.get.call(null,map__39514__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__39516,files_msg){
var map__39523 = p__39516;
var map__39523__$1 = ((((!((map__39523 == null)))?((((map__39523.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39523.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39523):map__39523);
var opts = map__39523__$1;
var on_cssload = cljs.core.get.call(null,map__39523__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__39525_39529 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__39526_39530 = null;
var count__39527_39531 = (0);
var i__39528_39532 = (0);
while(true){
if((i__39528_39532 < count__39527_39531)){
var f_39533 = cljs.core._nth.call(null,chunk__39526_39530,i__39528_39532);
figwheel.client.file_reloading.reload_css_file.call(null,f_39533);

var G__39534 = seq__39525_39529;
var G__39535 = chunk__39526_39530;
var G__39536 = count__39527_39531;
var G__39537 = (i__39528_39532 + (1));
seq__39525_39529 = G__39534;
chunk__39526_39530 = G__39535;
count__39527_39531 = G__39536;
i__39528_39532 = G__39537;
continue;
} else {
var temp__4657__auto___39538 = cljs.core.seq.call(null,seq__39525_39529);
if(temp__4657__auto___39538){
var seq__39525_39539__$1 = temp__4657__auto___39538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39525_39539__$1)){
var c__19307__auto___39540 = cljs.core.chunk_first.call(null,seq__39525_39539__$1);
var G__39541 = cljs.core.chunk_rest.call(null,seq__39525_39539__$1);
var G__39542 = c__19307__auto___39540;
var G__39543 = cljs.core.count.call(null,c__19307__auto___39540);
var G__39544 = (0);
seq__39525_39529 = G__39541;
chunk__39526_39530 = G__39542;
count__39527_39531 = G__39543;
i__39528_39532 = G__39544;
continue;
} else {
var f_39545 = cljs.core.first.call(null,seq__39525_39539__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_39545);

var G__39546 = cljs.core.next.call(null,seq__39525_39539__$1);
var G__39547 = null;
var G__39548 = (0);
var G__39549 = (0);
seq__39525_39529 = G__39546;
chunk__39526_39530 = G__39547;
count__39527_39531 = G__39548;
i__39528_39532 = G__39549;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__39523,map__39523__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__39523,map__39523__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1466621247426