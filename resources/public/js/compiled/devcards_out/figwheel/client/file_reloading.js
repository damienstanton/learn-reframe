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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27983_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27983_SHARP_));
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
var seq__27988 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27989 = null;
var count__27990 = (0);
var i__27991 = (0);
while(true){
if((i__27991 < count__27990)){
var n = cljs.core._nth.call(null,chunk__27989,i__27991);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27992 = seq__27988;
var G__27993 = chunk__27989;
var G__27994 = count__27990;
var G__27995 = (i__27991 + (1));
seq__27988 = G__27992;
chunk__27989 = G__27993;
count__27990 = G__27994;
i__27991 = G__27995;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27988);
if(temp__4657__auto__){
var seq__27988__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27988__$1)){
var c__19307__auto__ = cljs.core.chunk_first.call(null,seq__27988__$1);
var G__27996 = cljs.core.chunk_rest.call(null,seq__27988__$1);
var G__27997 = c__19307__auto__;
var G__27998 = cljs.core.count.call(null,c__19307__auto__);
var G__27999 = (0);
seq__27988 = G__27996;
chunk__27989 = G__27997;
count__27990 = G__27998;
i__27991 = G__27999;
continue;
} else {
var n = cljs.core.first.call(null,seq__27988__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28000 = cljs.core.next.call(null,seq__27988__$1);
var G__28001 = null;
var G__28002 = (0);
var G__28003 = (0);
seq__27988 = G__28000;
chunk__27989 = G__28001;
count__27990 = G__28002;
i__27991 = G__28003;
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

var seq__28054_28065 = cljs.core.seq.call(null,deps);
var chunk__28055_28066 = null;
var count__28056_28067 = (0);
var i__28057_28068 = (0);
while(true){
if((i__28057_28068 < count__28056_28067)){
var dep_28069 = cljs.core._nth.call(null,chunk__28055_28066,i__28057_28068);
topo_sort_helper_STAR_.call(null,dep_28069,(depth + (1)),state);

var G__28070 = seq__28054_28065;
var G__28071 = chunk__28055_28066;
var G__28072 = count__28056_28067;
var G__28073 = (i__28057_28068 + (1));
seq__28054_28065 = G__28070;
chunk__28055_28066 = G__28071;
count__28056_28067 = G__28072;
i__28057_28068 = G__28073;
continue;
} else {
var temp__4657__auto___28074 = cljs.core.seq.call(null,seq__28054_28065);
if(temp__4657__auto___28074){
var seq__28054_28075__$1 = temp__4657__auto___28074;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28054_28075__$1)){
var c__19307__auto___28076 = cljs.core.chunk_first.call(null,seq__28054_28075__$1);
var G__28077 = cljs.core.chunk_rest.call(null,seq__28054_28075__$1);
var G__28078 = c__19307__auto___28076;
var G__28079 = cljs.core.count.call(null,c__19307__auto___28076);
var G__28080 = (0);
seq__28054_28065 = G__28077;
chunk__28055_28066 = G__28078;
count__28056_28067 = G__28079;
i__28057_28068 = G__28080;
continue;
} else {
var dep_28081 = cljs.core.first.call(null,seq__28054_28075__$1);
topo_sort_helper_STAR_.call(null,dep_28081,(depth + (1)),state);

var G__28082 = cljs.core.next.call(null,seq__28054_28075__$1);
var G__28083 = null;
var G__28084 = (0);
var G__28085 = (0);
seq__28054_28065 = G__28082;
chunk__28055_28066 = G__28083;
count__28056_28067 = G__28084;
i__28057_28068 = G__28085;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28058){
var vec__28062 = p__28058;
var seq__28063 = cljs.core.seq.call(null,vec__28062);
var first__28064 = cljs.core.first.call(null,seq__28063);
var seq__28063__$1 = cljs.core.next.call(null,seq__28063);
var x = first__28064;
var xs = seq__28063__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28062,seq__28063,first__28064,seq__28063__$1,x,xs,get_deps__$1){
return (function (p1__28004_SHARP_){
return clojure.set.difference.call(null,p1__28004_SHARP_,x);
});})(vec__28062,seq__28063,first__28064,seq__28063__$1,x,xs,get_deps__$1))
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
var seq__28098 = cljs.core.seq.call(null,provides);
var chunk__28099 = null;
var count__28100 = (0);
var i__28101 = (0);
while(true){
if((i__28101 < count__28100)){
var prov = cljs.core._nth.call(null,chunk__28099,i__28101);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28102_28110 = cljs.core.seq.call(null,requires);
var chunk__28103_28111 = null;
var count__28104_28112 = (0);
var i__28105_28113 = (0);
while(true){
if((i__28105_28113 < count__28104_28112)){
var req_28114 = cljs.core._nth.call(null,chunk__28103_28111,i__28105_28113);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28114,prov);

var G__28115 = seq__28102_28110;
var G__28116 = chunk__28103_28111;
var G__28117 = count__28104_28112;
var G__28118 = (i__28105_28113 + (1));
seq__28102_28110 = G__28115;
chunk__28103_28111 = G__28116;
count__28104_28112 = G__28117;
i__28105_28113 = G__28118;
continue;
} else {
var temp__4657__auto___28119 = cljs.core.seq.call(null,seq__28102_28110);
if(temp__4657__auto___28119){
var seq__28102_28120__$1 = temp__4657__auto___28119;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28102_28120__$1)){
var c__19307__auto___28121 = cljs.core.chunk_first.call(null,seq__28102_28120__$1);
var G__28122 = cljs.core.chunk_rest.call(null,seq__28102_28120__$1);
var G__28123 = c__19307__auto___28121;
var G__28124 = cljs.core.count.call(null,c__19307__auto___28121);
var G__28125 = (0);
seq__28102_28110 = G__28122;
chunk__28103_28111 = G__28123;
count__28104_28112 = G__28124;
i__28105_28113 = G__28125;
continue;
} else {
var req_28126 = cljs.core.first.call(null,seq__28102_28120__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28126,prov);

var G__28127 = cljs.core.next.call(null,seq__28102_28120__$1);
var G__28128 = null;
var G__28129 = (0);
var G__28130 = (0);
seq__28102_28110 = G__28127;
chunk__28103_28111 = G__28128;
count__28104_28112 = G__28129;
i__28105_28113 = G__28130;
continue;
}
} else {
}
}
break;
}

var G__28131 = seq__28098;
var G__28132 = chunk__28099;
var G__28133 = count__28100;
var G__28134 = (i__28101 + (1));
seq__28098 = G__28131;
chunk__28099 = G__28132;
count__28100 = G__28133;
i__28101 = G__28134;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28098);
if(temp__4657__auto__){
var seq__28098__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28098__$1)){
var c__19307__auto__ = cljs.core.chunk_first.call(null,seq__28098__$1);
var G__28135 = cljs.core.chunk_rest.call(null,seq__28098__$1);
var G__28136 = c__19307__auto__;
var G__28137 = cljs.core.count.call(null,c__19307__auto__);
var G__28138 = (0);
seq__28098 = G__28135;
chunk__28099 = G__28136;
count__28100 = G__28137;
i__28101 = G__28138;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28098__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28106_28139 = cljs.core.seq.call(null,requires);
var chunk__28107_28140 = null;
var count__28108_28141 = (0);
var i__28109_28142 = (0);
while(true){
if((i__28109_28142 < count__28108_28141)){
var req_28143 = cljs.core._nth.call(null,chunk__28107_28140,i__28109_28142);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28143,prov);

var G__28144 = seq__28106_28139;
var G__28145 = chunk__28107_28140;
var G__28146 = count__28108_28141;
var G__28147 = (i__28109_28142 + (1));
seq__28106_28139 = G__28144;
chunk__28107_28140 = G__28145;
count__28108_28141 = G__28146;
i__28109_28142 = G__28147;
continue;
} else {
var temp__4657__auto___28148__$1 = cljs.core.seq.call(null,seq__28106_28139);
if(temp__4657__auto___28148__$1){
var seq__28106_28149__$1 = temp__4657__auto___28148__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28106_28149__$1)){
var c__19307__auto___28150 = cljs.core.chunk_first.call(null,seq__28106_28149__$1);
var G__28151 = cljs.core.chunk_rest.call(null,seq__28106_28149__$1);
var G__28152 = c__19307__auto___28150;
var G__28153 = cljs.core.count.call(null,c__19307__auto___28150);
var G__28154 = (0);
seq__28106_28139 = G__28151;
chunk__28107_28140 = G__28152;
count__28108_28141 = G__28153;
i__28109_28142 = G__28154;
continue;
} else {
var req_28155 = cljs.core.first.call(null,seq__28106_28149__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28155,prov);

var G__28156 = cljs.core.next.call(null,seq__28106_28149__$1);
var G__28157 = null;
var G__28158 = (0);
var G__28159 = (0);
seq__28106_28139 = G__28156;
chunk__28107_28140 = G__28157;
count__28108_28141 = G__28158;
i__28109_28142 = G__28159;
continue;
}
} else {
}
}
break;
}

var G__28160 = cljs.core.next.call(null,seq__28098__$1);
var G__28161 = null;
var G__28162 = (0);
var G__28163 = (0);
seq__28098 = G__28160;
chunk__28099 = G__28161;
count__28100 = G__28162;
i__28101 = G__28163;
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
var seq__28168_28172 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28169_28173 = null;
var count__28170_28174 = (0);
var i__28171_28175 = (0);
while(true){
if((i__28171_28175 < count__28170_28174)){
var ns_28176 = cljs.core._nth.call(null,chunk__28169_28173,i__28171_28175);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28176);

var G__28177 = seq__28168_28172;
var G__28178 = chunk__28169_28173;
var G__28179 = count__28170_28174;
var G__28180 = (i__28171_28175 + (1));
seq__28168_28172 = G__28177;
chunk__28169_28173 = G__28178;
count__28170_28174 = G__28179;
i__28171_28175 = G__28180;
continue;
} else {
var temp__4657__auto___28181 = cljs.core.seq.call(null,seq__28168_28172);
if(temp__4657__auto___28181){
var seq__28168_28182__$1 = temp__4657__auto___28181;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28168_28182__$1)){
var c__19307__auto___28183 = cljs.core.chunk_first.call(null,seq__28168_28182__$1);
var G__28184 = cljs.core.chunk_rest.call(null,seq__28168_28182__$1);
var G__28185 = c__19307__auto___28183;
var G__28186 = cljs.core.count.call(null,c__19307__auto___28183);
var G__28187 = (0);
seq__28168_28172 = G__28184;
chunk__28169_28173 = G__28185;
count__28170_28174 = G__28186;
i__28171_28175 = G__28187;
continue;
} else {
var ns_28188 = cljs.core.first.call(null,seq__28168_28182__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28188);

var G__28189 = cljs.core.next.call(null,seq__28168_28182__$1);
var G__28190 = null;
var G__28191 = (0);
var G__28192 = (0);
seq__28168_28172 = G__28189;
chunk__28169_28173 = G__28190;
count__28170_28174 = G__28191;
i__28171_28175 = G__28192;
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
var G__28193__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28193 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28194__i = 0, G__28194__a = new Array(arguments.length -  0);
while (G__28194__i < G__28194__a.length) {G__28194__a[G__28194__i] = arguments[G__28194__i + 0]; ++G__28194__i;}
  args = new cljs.core.IndexedSeq(G__28194__a,0);
} 
return G__28193__delegate.call(this,args);};
G__28193.cljs$lang$maxFixedArity = 0;
G__28193.cljs$lang$applyTo = (function (arglist__28195){
var args = cljs.core.seq(arglist__28195);
return G__28193__delegate(args);
});
G__28193.cljs$core$IFn$_invoke$arity$variadic = G__28193__delegate;
return G__28193;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28197 = cljs.core._EQ_;
var expr__28198 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28197.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28198))){
var path_parts = ((function (pred__28197,expr__28198){
return (function (p1__28196_SHARP_){
return clojure.string.split.call(null,p1__28196_SHARP_,/[\/\\]/);
});})(pred__28197,expr__28198))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__28197,expr__28198){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28200){if((e28200 instanceof Error)){
var e = e28200;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28200;

}
}})());
});
;})(path_parts,sep,root,pred__28197,expr__28198))
} else {
if(cljs.core.truth_(pred__28197.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28198))){
return ((function (pred__28197,expr__28198){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__28197,expr__28198){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__28197,expr__28198))
);

return deferred.addErrback(((function (deferred,pred__28197,expr__28198){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__28197,expr__28198))
);
});
;})(pred__28197,expr__28198))
} else {
return ((function (pred__28197,expr__28198){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28197,expr__28198))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28201,callback){
var map__28204 = p__28201;
var map__28204__$1 = ((((!((map__28204 == null)))?((((map__28204.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28204.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28204):map__28204);
var file_msg = map__28204__$1;
var request_url = cljs.core.get.call(null,map__28204__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28204,map__28204__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28204,map__28204__$1,file_msg,request_url))
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
return (function (state_28228){
var state_val_28229 = (state_28228[(1)]);
if((state_val_28229 === (7))){
var inst_28224 = (state_28228[(2)]);
var state_28228__$1 = state_28228;
var statearr_28230_28250 = state_28228__$1;
(statearr_28230_28250[(2)] = inst_28224);

(statearr_28230_28250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28229 === (1))){
var state_28228__$1 = state_28228;
var statearr_28231_28251 = state_28228__$1;
(statearr_28231_28251[(2)] = null);

(statearr_28231_28251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28229 === (4))){
var inst_28208 = (state_28228[(7)]);
var inst_28208__$1 = (state_28228[(2)]);
var state_28228__$1 = (function (){var statearr_28232 = state_28228;
(statearr_28232[(7)] = inst_28208__$1);

return statearr_28232;
})();
if(cljs.core.truth_(inst_28208__$1)){
var statearr_28233_28252 = state_28228__$1;
(statearr_28233_28252[(1)] = (5));

} else {
var statearr_28234_28253 = state_28228__$1;
(statearr_28234_28253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28229 === (6))){
var state_28228__$1 = state_28228;
var statearr_28235_28254 = state_28228__$1;
(statearr_28235_28254[(2)] = null);

(statearr_28235_28254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28229 === (3))){
var inst_28226 = (state_28228[(2)]);
var state_28228__$1 = state_28228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28228__$1,inst_28226);
} else {
if((state_val_28229 === (2))){
var state_28228__$1 = state_28228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28228__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28229 === (11))){
var inst_28220 = (state_28228[(2)]);
var state_28228__$1 = (function (){var statearr_28236 = state_28228;
(statearr_28236[(8)] = inst_28220);

return statearr_28236;
})();
var statearr_28237_28255 = state_28228__$1;
(statearr_28237_28255[(2)] = null);

(statearr_28237_28255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28229 === (9))){
var inst_28212 = (state_28228[(9)]);
var inst_28214 = (state_28228[(10)]);
var inst_28216 = inst_28214.call(null,inst_28212);
var state_28228__$1 = state_28228;
var statearr_28238_28256 = state_28228__$1;
(statearr_28238_28256[(2)] = inst_28216);

(statearr_28238_28256[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28229 === (5))){
var inst_28208 = (state_28228[(7)]);
var inst_28210 = figwheel.client.file_reloading.blocking_load.call(null,inst_28208);
var state_28228__$1 = state_28228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28228__$1,(8),inst_28210);
} else {
if((state_val_28229 === (10))){
var inst_28212 = (state_28228[(9)]);
var inst_28218 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28212);
var state_28228__$1 = state_28228;
var statearr_28239_28257 = state_28228__$1;
(statearr_28239_28257[(2)] = inst_28218);

(statearr_28239_28257[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28229 === (8))){
var inst_28214 = (state_28228[(10)]);
var inst_28208 = (state_28228[(7)]);
var inst_28212 = (state_28228[(2)]);
var inst_28213 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28214__$1 = cljs.core.get.call(null,inst_28213,inst_28208);
var state_28228__$1 = (function (){var statearr_28240 = state_28228;
(statearr_28240[(9)] = inst_28212);

(statearr_28240[(10)] = inst_28214__$1);

return statearr_28240;
})();
if(cljs.core.truth_(inst_28214__$1)){
var statearr_28241_28258 = state_28228__$1;
(statearr_28241_28258[(1)] = (9));

} else {
var statearr_28242_28259 = state_28228__$1;
(statearr_28242_28259[(1)] = (10));

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
var statearr_28246 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28246[(0)] = figwheel$client$file_reloading$state_machine__22358__auto__);

(statearr_28246[(1)] = (1));

return statearr_28246;
});
var figwheel$client$file_reloading$state_machine__22358__auto____1 = (function (state_28228){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_28228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e28247){if((e28247 instanceof Object)){
var ex__22361__auto__ = e28247;
var statearr_28248_28260 = state_28228;
(statearr_28248_28260[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28261 = state_28228;
state_28228 = G__28261;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22358__auto__ = function(state_28228){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22358__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22358__auto____1.call(this,state_28228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22358__auto____0;
figwheel$client$file_reloading$state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22358__auto____1;
return figwheel$client$file_reloading$state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto__))
})();
var state__22471__auto__ = (function (){var statearr_28249 = f__22470__auto__.call(null);
(statearr_28249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto__);

return statearr_28249;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28262,callback){
var map__28265 = p__28262;
var map__28265__$1 = ((((!((map__28265 == null)))?((((map__28265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28265):map__28265);
var file_msg = map__28265__$1;
var namespace = cljs.core.get.call(null,map__28265__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28265,map__28265__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28265,map__28265__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28267){
var map__28270 = p__28267;
var map__28270__$1 = ((((!((map__28270 == null)))?((((map__28270.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28270.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28270):map__28270);
var file_msg = map__28270__$1;
var namespace = cljs.core.get.call(null,map__28270__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28272,callback){
var map__28275 = p__28272;
var map__28275__$1 = ((((!((map__28275 == null)))?((((map__28275.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28275.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28275):map__28275);
var file_msg = map__28275__$1;
var request_url = cljs.core.get.call(null,map__28275__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28275__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__22469__auto___28379 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto___28379,out){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto___28379,out){
return (function (state_28361){
var state_val_28362 = (state_28361[(1)]);
if((state_val_28362 === (1))){
var inst_28335 = cljs.core.seq.call(null,files);
var inst_28336 = cljs.core.first.call(null,inst_28335);
var inst_28337 = cljs.core.next.call(null,inst_28335);
var inst_28338 = files;
var state_28361__$1 = (function (){var statearr_28363 = state_28361;
(statearr_28363[(7)] = inst_28336);

(statearr_28363[(8)] = inst_28338);

(statearr_28363[(9)] = inst_28337);

return statearr_28363;
})();
var statearr_28364_28380 = state_28361__$1;
(statearr_28364_28380[(2)] = null);

(statearr_28364_28380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28362 === (2))){
var inst_28344 = (state_28361[(10)]);
var inst_28338 = (state_28361[(8)]);
var inst_28343 = cljs.core.seq.call(null,inst_28338);
var inst_28344__$1 = cljs.core.first.call(null,inst_28343);
var inst_28345 = cljs.core.next.call(null,inst_28343);
var inst_28346 = (inst_28344__$1 == null);
var inst_28347 = cljs.core.not.call(null,inst_28346);
var state_28361__$1 = (function (){var statearr_28365 = state_28361;
(statearr_28365[(10)] = inst_28344__$1);

(statearr_28365[(11)] = inst_28345);

return statearr_28365;
})();
if(inst_28347){
var statearr_28366_28381 = state_28361__$1;
(statearr_28366_28381[(1)] = (4));

} else {
var statearr_28367_28382 = state_28361__$1;
(statearr_28367_28382[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28362 === (3))){
var inst_28359 = (state_28361[(2)]);
var state_28361__$1 = state_28361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28361__$1,inst_28359);
} else {
if((state_val_28362 === (4))){
var inst_28344 = (state_28361[(10)]);
var inst_28349 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28344);
var state_28361__$1 = state_28361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28361__$1,(7),inst_28349);
} else {
if((state_val_28362 === (5))){
var inst_28355 = cljs.core.async.close_BANG_.call(null,out);
var state_28361__$1 = state_28361;
var statearr_28368_28383 = state_28361__$1;
(statearr_28368_28383[(2)] = inst_28355);

(statearr_28368_28383[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28362 === (6))){
var inst_28357 = (state_28361[(2)]);
var state_28361__$1 = state_28361;
var statearr_28369_28384 = state_28361__$1;
(statearr_28369_28384[(2)] = inst_28357);

(statearr_28369_28384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28362 === (7))){
var inst_28345 = (state_28361[(11)]);
var inst_28351 = (state_28361[(2)]);
var inst_28352 = cljs.core.async.put_BANG_.call(null,out,inst_28351);
var inst_28338 = inst_28345;
var state_28361__$1 = (function (){var statearr_28370 = state_28361;
(statearr_28370[(8)] = inst_28338);

(statearr_28370[(12)] = inst_28352);

return statearr_28370;
})();
var statearr_28371_28385 = state_28361__$1;
(statearr_28371_28385[(2)] = null);

(statearr_28371_28385[(1)] = (2));


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
});})(c__22469__auto___28379,out))
;
return ((function (switch__22357__auto__,c__22469__auto___28379,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22358__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22358__auto____0 = (function (){
var statearr_28375 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28375[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22358__auto__);

(statearr_28375[(1)] = (1));

return statearr_28375;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22358__auto____1 = (function (state_28361){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_28361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e28376){if((e28376 instanceof Object)){
var ex__22361__auto__ = e28376;
var statearr_28377_28386 = state_28361;
(statearr_28377_28386[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28387 = state_28361;
state_28361 = G__28387;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22358__auto__ = function(state_28361){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22358__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22358__auto____1.call(this,state_28361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22358__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22358__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto___28379,out))
})();
var state__22471__auto__ = (function (){var statearr_28378 = f__22470__auto__.call(null);
(statearr_28378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto___28379);

return statearr_28378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto___28379,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28388,opts){
var map__28392 = p__28388;
var map__28392__$1 = ((((!((map__28392 == null)))?((((map__28392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28392):map__28392);
var eval_body__$1 = cljs.core.get.call(null,map__28392__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28392__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e28394){var e = e28394;
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
return (function (p1__28395_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28395_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__28404){
var vec__28405 = p__28404;
var k = cljs.core.nth.call(null,vec__28405,(0),null);
var v = cljs.core.nth.call(null,vec__28405,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28408){
var vec__28409 = p__28408;
var k = cljs.core.nth.call(null,vec__28409,(0),null);
var v = cljs.core.nth.call(null,vec__28409,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28415,p__28416){
var map__28663 = p__28415;
var map__28663__$1 = ((((!((map__28663 == null)))?((((map__28663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28663):map__28663);
var opts = map__28663__$1;
var before_jsload = cljs.core.get.call(null,map__28663__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28663__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28663__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28664 = p__28416;
var map__28664__$1 = ((((!((map__28664 == null)))?((((map__28664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28664):map__28664);
var msg = map__28664__$1;
var files = cljs.core.get.call(null,map__28664__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28664__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28664__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22469__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22469__auto__,map__28663,map__28663__$1,opts,before_jsload,on_jsload,reload_dependents,map__28664,map__28664__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22470__auto__ = (function (){var switch__22357__auto__ = ((function (c__22469__auto__,map__28663,map__28663__$1,opts,before_jsload,on_jsload,reload_dependents,map__28664,map__28664__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28817){
var state_val_28818 = (state_28817[(1)]);
if((state_val_28818 === (7))){
var inst_28680 = (state_28817[(7)]);
var inst_28679 = (state_28817[(8)]);
var inst_28678 = (state_28817[(9)]);
var inst_28681 = (state_28817[(10)]);
var inst_28686 = cljs.core._nth.call(null,inst_28679,inst_28681);
var inst_28687 = figwheel.client.file_reloading.eval_body.call(null,inst_28686,opts);
var inst_28688 = (inst_28681 + (1));
var tmp28819 = inst_28680;
var tmp28820 = inst_28679;
var tmp28821 = inst_28678;
var inst_28678__$1 = tmp28821;
var inst_28679__$1 = tmp28820;
var inst_28680__$1 = tmp28819;
var inst_28681__$1 = inst_28688;
var state_28817__$1 = (function (){var statearr_28822 = state_28817;
(statearr_28822[(7)] = inst_28680__$1);

(statearr_28822[(8)] = inst_28679__$1);

(statearr_28822[(9)] = inst_28678__$1);

(statearr_28822[(11)] = inst_28687);

(statearr_28822[(10)] = inst_28681__$1);

return statearr_28822;
})();
var statearr_28823_28909 = state_28817__$1;
(statearr_28823_28909[(2)] = null);

(statearr_28823_28909[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (20))){
var inst_28721 = (state_28817[(12)]);
var inst_28729 = figwheel.client.file_reloading.sort_files.call(null,inst_28721);
var state_28817__$1 = state_28817;
var statearr_28824_28910 = state_28817__$1;
(statearr_28824_28910[(2)] = inst_28729);

(statearr_28824_28910[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (27))){
var state_28817__$1 = state_28817;
var statearr_28825_28911 = state_28817__$1;
(statearr_28825_28911[(2)] = null);

(statearr_28825_28911[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (1))){
var inst_28670 = (state_28817[(13)]);
var inst_28667 = before_jsload.call(null,files);
var inst_28668 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28669 = (function (){return ((function (inst_28670,inst_28667,inst_28668,state_val_28818,c__22469__auto__,map__28663,map__28663__$1,opts,before_jsload,on_jsload,reload_dependents,map__28664,map__28664__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28412_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28412_SHARP_);
});
;})(inst_28670,inst_28667,inst_28668,state_val_28818,c__22469__auto__,map__28663,map__28663__$1,opts,before_jsload,on_jsload,reload_dependents,map__28664,map__28664__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28670__$1 = cljs.core.filter.call(null,inst_28669,files);
var inst_28671 = cljs.core.not_empty.call(null,inst_28670__$1);
var state_28817__$1 = (function (){var statearr_28826 = state_28817;
(statearr_28826[(14)] = inst_28667);

(statearr_28826[(15)] = inst_28668);

(statearr_28826[(13)] = inst_28670__$1);

return statearr_28826;
})();
if(cljs.core.truth_(inst_28671)){
var statearr_28827_28912 = state_28817__$1;
(statearr_28827_28912[(1)] = (2));

} else {
var statearr_28828_28913 = state_28817__$1;
(statearr_28828_28913[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (24))){
var state_28817__$1 = state_28817;
var statearr_28829_28914 = state_28817__$1;
(statearr_28829_28914[(2)] = null);

(statearr_28829_28914[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (39))){
var inst_28771 = (state_28817[(16)]);
var state_28817__$1 = state_28817;
var statearr_28830_28915 = state_28817__$1;
(statearr_28830_28915[(2)] = inst_28771);

(statearr_28830_28915[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (46))){
var inst_28812 = (state_28817[(2)]);
var state_28817__$1 = state_28817;
var statearr_28831_28916 = state_28817__$1;
(statearr_28831_28916[(2)] = inst_28812);

(statearr_28831_28916[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (4))){
var inst_28715 = (state_28817[(2)]);
var inst_28716 = cljs.core.List.EMPTY;
var inst_28717 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28716);
var inst_28718 = (function (){return ((function (inst_28715,inst_28716,inst_28717,state_val_28818,c__22469__auto__,map__28663,map__28663__$1,opts,before_jsload,on_jsload,reload_dependents,map__28664,map__28664__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28413_SHARP_){
var and__18484__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28413_SHARP_);
if(cljs.core.truth_(and__18484__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28413_SHARP_));
} else {
return and__18484__auto__;
}
});
;})(inst_28715,inst_28716,inst_28717,state_val_28818,c__22469__auto__,map__28663,map__28663__$1,opts,before_jsload,on_jsload,reload_dependents,map__28664,map__28664__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28719 = cljs.core.filter.call(null,inst_28718,files);
var inst_28720 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28721 = cljs.core.concat.call(null,inst_28719,inst_28720);
var state_28817__$1 = (function (){var statearr_28832 = state_28817;
(statearr_28832[(12)] = inst_28721);

(statearr_28832[(17)] = inst_28715);

(statearr_28832[(18)] = inst_28717);

return statearr_28832;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28833_28917 = state_28817__$1;
(statearr_28833_28917[(1)] = (16));

} else {
var statearr_28834_28918 = state_28817__$1;
(statearr_28834_28918[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (15))){
var inst_28705 = (state_28817[(2)]);
var state_28817__$1 = state_28817;
var statearr_28835_28919 = state_28817__$1;
(statearr_28835_28919[(2)] = inst_28705);

(statearr_28835_28919[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (21))){
var inst_28731 = (state_28817[(19)]);
var inst_28731__$1 = (state_28817[(2)]);
var inst_28732 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28731__$1);
var state_28817__$1 = (function (){var statearr_28836 = state_28817;
(statearr_28836[(19)] = inst_28731__$1);

return statearr_28836;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28817__$1,(22),inst_28732);
} else {
if((state_val_28818 === (31))){
var inst_28815 = (state_28817[(2)]);
var state_28817__$1 = state_28817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28817__$1,inst_28815);
} else {
if((state_val_28818 === (32))){
var inst_28771 = (state_28817[(16)]);
var inst_28776 = inst_28771.cljs$lang$protocol_mask$partition0$;
var inst_28777 = (inst_28776 & (64));
var inst_28778 = inst_28771.cljs$core$ISeq$;
var inst_28779 = (inst_28777) || (inst_28778);
var state_28817__$1 = state_28817;
if(cljs.core.truth_(inst_28779)){
var statearr_28837_28920 = state_28817__$1;
(statearr_28837_28920[(1)] = (35));

} else {
var statearr_28838_28921 = state_28817__$1;
(statearr_28838_28921[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (40))){
var inst_28792 = (state_28817[(20)]);
var inst_28791 = (state_28817[(2)]);
var inst_28792__$1 = cljs.core.get.call(null,inst_28791,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28793 = cljs.core.get.call(null,inst_28791,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28794 = cljs.core.not_empty.call(null,inst_28792__$1);
var state_28817__$1 = (function (){var statearr_28839 = state_28817;
(statearr_28839[(21)] = inst_28793);

(statearr_28839[(20)] = inst_28792__$1);

return statearr_28839;
})();
if(cljs.core.truth_(inst_28794)){
var statearr_28840_28922 = state_28817__$1;
(statearr_28840_28922[(1)] = (41));

} else {
var statearr_28841_28923 = state_28817__$1;
(statearr_28841_28923[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (33))){
var state_28817__$1 = state_28817;
var statearr_28842_28924 = state_28817__$1;
(statearr_28842_28924[(2)] = false);

(statearr_28842_28924[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (13))){
var inst_28691 = (state_28817[(22)]);
var inst_28695 = cljs.core.chunk_first.call(null,inst_28691);
var inst_28696 = cljs.core.chunk_rest.call(null,inst_28691);
var inst_28697 = cljs.core.count.call(null,inst_28695);
var inst_28678 = inst_28696;
var inst_28679 = inst_28695;
var inst_28680 = inst_28697;
var inst_28681 = (0);
var state_28817__$1 = (function (){var statearr_28843 = state_28817;
(statearr_28843[(7)] = inst_28680);

(statearr_28843[(8)] = inst_28679);

(statearr_28843[(9)] = inst_28678);

(statearr_28843[(10)] = inst_28681);

return statearr_28843;
})();
var statearr_28844_28925 = state_28817__$1;
(statearr_28844_28925[(2)] = null);

(statearr_28844_28925[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (22))){
var inst_28739 = (state_28817[(23)]);
var inst_28731 = (state_28817[(19)]);
var inst_28735 = (state_28817[(24)]);
var inst_28734 = (state_28817[(25)]);
var inst_28734__$1 = (state_28817[(2)]);
var inst_28735__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28734__$1);
var inst_28736 = (function (){var all_files = inst_28731;
var res_SINGLEQUOTE_ = inst_28734__$1;
var res = inst_28735__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28739,inst_28731,inst_28735,inst_28734,inst_28734__$1,inst_28735__$1,state_val_28818,c__22469__auto__,map__28663,map__28663__$1,opts,before_jsload,on_jsload,reload_dependents,map__28664,map__28664__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28414_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28414_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28739,inst_28731,inst_28735,inst_28734,inst_28734__$1,inst_28735__$1,state_val_28818,c__22469__auto__,map__28663,map__28663__$1,opts,before_jsload,on_jsload,reload_dependents,map__28664,map__28664__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28737 = cljs.core.filter.call(null,inst_28736,inst_28734__$1);
var inst_28738 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28739__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28738);
var inst_28740 = cljs.core.not_empty.call(null,inst_28739__$1);
var state_28817__$1 = (function (){var statearr_28845 = state_28817;
(statearr_28845[(23)] = inst_28739__$1);

(statearr_28845[(24)] = inst_28735__$1);

(statearr_28845[(26)] = inst_28737);

(statearr_28845[(25)] = inst_28734__$1);

return statearr_28845;
})();
if(cljs.core.truth_(inst_28740)){
var statearr_28846_28926 = state_28817__$1;
(statearr_28846_28926[(1)] = (23));

} else {
var statearr_28847_28927 = state_28817__$1;
(statearr_28847_28927[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (36))){
var state_28817__$1 = state_28817;
var statearr_28848_28928 = state_28817__$1;
(statearr_28848_28928[(2)] = false);

(statearr_28848_28928[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (41))){
var inst_28792 = (state_28817[(20)]);
var inst_28796 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28797 = cljs.core.map.call(null,inst_28796,inst_28792);
var inst_28798 = cljs.core.pr_str.call(null,inst_28797);
var inst_28799 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_28798)].join('');
var inst_28800 = figwheel.client.utils.log.call(null,inst_28799);
var state_28817__$1 = state_28817;
var statearr_28849_28929 = state_28817__$1;
(statearr_28849_28929[(2)] = inst_28800);

(statearr_28849_28929[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (43))){
var inst_28793 = (state_28817[(21)]);
var inst_28803 = (state_28817[(2)]);
var inst_28804 = cljs.core.not_empty.call(null,inst_28793);
var state_28817__$1 = (function (){var statearr_28850 = state_28817;
(statearr_28850[(27)] = inst_28803);

return statearr_28850;
})();
if(cljs.core.truth_(inst_28804)){
var statearr_28851_28930 = state_28817__$1;
(statearr_28851_28930[(1)] = (44));

} else {
var statearr_28852_28931 = state_28817__$1;
(statearr_28852_28931[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (29))){
var inst_28739 = (state_28817[(23)]);
var inst_28771 = (state_28817[(16)]);
var inst_28731 = (state_28817[(19)]);
var inst_28735 = (state_28817[(24)]);
var inst_28737 = (state_28817[(26)]);
var inst_28734 = (state_28817[(25)]);
var inst_28767 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28770 = (function (){var all_files = inst_28731;
var res_SINGLEQUOTE_ = inst_28734;
var res = inst_28735;
var files_not_loaded = inst_28737;
var dependencies_that_loaded = inst_28739;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28739,inst_28771,inst_28731,inst_28735,inst_28737,inst_28734,inst_28767,state_val_28818,c__22469__auto__,map__28663,map__28663__$1,opts,before_jsload,on_jsload,reload_dependents,map__28664,map__28664__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28769){
var map__28853 = p__28769;
var map__28853__$1 = ((((!((map__28853 == null)))?((((map__28853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28853):map__28853);
var namespace = cljs.core.get.call(null,map__28853__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28739,inst_28771,inst_28731,inst_28735,inst_28737,inst_28734,inst_28767,state_val_28818,c__22469__auto__,map__28663,map__28663__$1,opts,before_jsload,on_jsload,reload_dependents,map__28664,map__28664__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28771__$1 = cljs.core.group_by.call(null,inst_28770,inst_28737);
var inst_28773 = (inst_28771__$1 == null);
var inst_28774 = cljs.core.not.call(null,inst_28773);
var state_28817__$1 = (function (){var statearr_28855 = state_28817;
(statearr_28855[(16)] = inst_28771__$1);

(statearr_28855[(28)] = inst_28767);

return statearr_28855;
})();
if(inst_28774){
var statearr_28856_28932 = state_28817__$1;
(statearr_28856_28932[(1)] = (32));

} else {
var statearr_28857_28933 = state_28817__$1;
(statearr_28857_28933[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (44))){
var inst_28793 = (state_28817[(21)]);
var inst_28806 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28793);
var inst_28807 = cljs.core.pr_str.call(null,inst_28806);
var inst_28808 = [cljs.core.str("not required: "),cljs.core.str(inst_28807)].join('');
var inst_28809 = figwheel.client.utils.log.call(null,inst_28808);
var state_28817__$1 = state_28817;
var statearr_28858_28934 = state_28817__$1;
(statearr_28858_28934[(2)] = inst_28809);

(statearr_28858_28934[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (6))){
var inst_28712 = (state_28817[(2)]);
var state_28817__$1 = state_28817;
var statearr_28859_28935 = state_28817__$1;
(statearr_28859_28935[(2)] = inst_28712);

(statearr_28859_28935[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (28))){
var inst_28737 = (state_28817[(26)]);
var inst_28764 = (state_28817[(2)]);
var inst_28765 = cljs.core.not_empty.call(null,inst_28737);
var state_28817__$1 = (function (){var statearr_28860 = state_28817;
(statearr_28860[(29)] = inst_28764);

return statearr_28860;
})();
if(cljs.core.truth_(inst_28765)){
var statearr_28861_28936 = state_28817__$1;
(statearr_28861_28936[(1)] = (29));

} else {
var statearr_28862_28937 = state_28817__$1;
(statearr_28862_28937[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (25))){
var inst_28735 = (state_28817[(24)]);
var inst_28751 = (state_28817[(2)]);
var inst_28752 = cljs.core.not_empty.call(null,inst_28735);
var state_28817__$1 = (function (){var statearr_28863 = state_28817;
(statearr_28863[(30)] = inst_28751);

return statearr_28863;
})();
if(cljs.core.truth_(inst_28752)){
var statearr_28864_28938 = state_28817__$1;
(statearr_28864_28938[(1)] = (26));

} else {
var statearr_28865_28939 = state_28817__$1;
(statearr_28865_28939[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (34))){
var inst_28786 = (state_28817[(2)]);
var state_28817__$1 = state_28817;
if(cljs.core.truth_(inst_28786)){
var statearr_28866_28940 = state_28817__$1;
(statearr_28866_28940[(1)] = (38));

} else {
var statearr_28867_28941 = state_28817__$1;
(statearr_28867_28941[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (17))){
var state_28817__$1 = state_28817;
var statearr_28868_28942 = state_28817__$1;
(statearr_28868_28942[(2)] = recompile_dependents);

(statearr_28868_28942[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (3))){
var state_28817__$1 = state_28817;
var statearr_28869_28943 = state_28817__$1;
(statearr_28869_28943[(2)] = null);

(statearr_28869_28943[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (12))){
var inst_28708 = (state_28817[(2)]);
var state_28817__$1 = state_28817;
var statearr_28870_28944 = state_28817__$1;
(statearr_28870_28944[(2)] = inst_28708);

(statearr_28870_28944[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (2))){
var inst_28670 = (state_28817[(13)]);
var inst_28677 = cljs.core.seq.call(null,inst_28670);
var inst_28678 = inst_28677;
var inst_28679 = null;
var inst_28680 = (0);
var inst_28681 = (0);
var state_28817__$1 = (function (){var statearr_28871 = state_28817;
(statearr_28871[(7)] = inst_28680);

(statearr_28871[(8)] = inst_28679);

(statearr_28871[(9)] = inst_28678);

(statearr_28871[(10)] = inst_28681);

return statearr_28871;
})();
var statearr_28872_28945 = state_28817__$1;
(statearr_28872_28945[(2)] = null);

(statearr_28872_28945[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (23))){
var inst_28739 = (state_28817[(23)]);
var inst_28731 = (state_28817[(19)]);
var inst_28735 = (state_28817[(24)]);
var inst_28737 = (state_28817[(26)]);
var inst_28734 = (state_28817[(25)]);
var inst_28742 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28744 = (function (){var all_files = inst_28731;
var res_SINGLEQUOTE_ = inst_28734;
var res = inst_28735;
var files_not_loaded = inst_28737;
var dependencies_that_loaded = inst_28739;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28739,inst_28731,inst_28735,inst_28737,inst_28734,inst_28742,state_val_28818,c__22469__auto__,map__28663,map__28663__$1,opts,before_jsload,on_jsload,reload_dependents,map__28664,map__28664__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28743){
var map__28873 = p__28743;
var map__28873__$1 = ((((!((map__28873 == null)))?((((map__28873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28873):map__28873);
var request_url = cljs.core.get.call(null,map__28873__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28739,inst_28731,inst_28735,inst_28737,inst_28734,inst_28742,state_val_28818,c__22469__auto__,map__28663,map__28663__$1,opts,before_jsload,on_jsload,reload_dependents,map__28664,map__28664__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28745 = cljs.core.reverse.call(null,inst_28739);
var inst_28746 = cljs.core.map.call(null,inst_28744,inst_28745);
var inst_28747 = cljs.core.pr_str.call(null,inst_28746);
var inst_28748 = figwheel.client.utils.log.call(null,inst_28747);
var state_28817__$1 = (function (){var statearr_28875 = state_28817;
(statearr_28875[(31)] = inst_28742);

return statearr_28875;
})();
var statearr_28876_28946 = state_28817__$1;
(statearr_28876_28946[(2)] = inst_28748);

(statearr_28876_28946[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (35))){
var state_28817__$1 = state_28817;
var statearr_28877_28947 = state_28817__$1;
(statearr_28877_28947[(2)] = true);

(statearr_28877_28947[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (19))){
var inst_28721 = (state_28817[(12)]);
var inst_28727 = figwheel.client.file_reloading.expand_files.call(null,inst_28721);
var state_28817__$1 = state_28817;
var statearr_28878_28948 = state_28817__$1;
(statearr_28878_28948[(2)] = inst_28727);

(statearr_28878_28948[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (11))){
var state_28817__$1 = state_28817;
var statearr_28879_28949 = state_28817__$1;
(statearr_28879_28949[(2)] = null);

(statearr_28879_28949[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (9))){
var inst_28710 = (state_28817[(2)]);
var state_28817__$1 = state_28817;
var statearr_28880_28950 = state_28817__$1;
(statearr_28880_28950[(2)] = inst_28710);

(statearr_28880_28950[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (5))){
var inst_28680 = (state_28817[(7)]);
var inst_28681 = (state_28817[(10)]);
var inst_28683 = (inst_28681 < inst_28680);
var inst_28684 = inst_28683;
var state_28817__$1 = state_28817;
if(cljs.core.truth_(inst_28684)){
var statearr_28881_28951 = state_28817__$1;
(statearr_28881_28951[(1)] = (7));

} else {
var statearr_28882_28952 = state_28817__$1;
(statearr_28882_28952[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (14))){
var inst_28691 = (state_28817[(22)]);
var inst_28700 = cljs.core.first.call(null,inst_28691);
var inst_28701 = figwheel.client.file_reloading.eval_body.call(null,inst_28700,opts);
var inst_28702 = cljs.core.next.call(null,inst_28691);
var inst_28678 = inst_28702;
var inst_28679 = null;
var inst_28680 = (0);
var inst_28681 = (0);
var state_28817__$1 = (function (){var statearr_28883 = state_28817;
(statearr_28883[(7)] = inst_28680);

(statearr_28883[(8)] = inst_28679);

(statearr_28883[(9)] = inst_28678);

(statearr_28883[(10)] = inst_28681);

(statearr_28883[(32)] = inst_28701);

return statearr_28883;
})();
var statearr_28884_28953 = state_28817__$1;
(statearr_28884_28953[(2)] = null);

(statearr_28884_28953[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (45))){
var state_28817__$1 = state_28817;
var statearr_28885_28954 = state_28817__$1;
(statearr_28885_28954[(2)] = null);

(statearr_28885_28954[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (26))){
var inst_28739 = (state_28817[(23)]);
var inst_28731 = (state_28817[(19)]);
var inst_28735 = (state_28817[(24)]);
var inst_28737 = (state_28817[(26)]);
var inst_28734 = (state_28817[(25)]);
var inst_28754 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28756 = (function (){var all_files = inst_28731;
var res_SINGLEQUOTE_ = inst_28734;
var res = inst_28735;
var files_not_loaded = inst_28737;
var dependencies_that_loaded = inst_28739;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28739,inst_28731,inst_28735,inst_28737,inst_28734,inst_28754,state_val_28818,c__22469__auto__,map__28663,map__28663__$1,opts,before_jsload,on_jsload,reload_dependents,map__28664,map__28664__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28755){
var map__28886 = p__28755;
var map__28886__$1 = ((((!((map__28886 == null)))?((((map__28886.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28886.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28886):map__28886);
var namespace = cljs.core.get.call(null,map__28886__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28886__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28739,inst_28731,inst_28735,inst_28737,inst_28734,inst_28754,state_val_28818,c__22469__auto__,map__28663,map__28663__$1,opts,before_jsload,on_jsload,reload_dependents,map__28664,map__28664__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28757 = cljs.core.map.call(null,inst_28756,inst_28735);
var inst_28758 = cljs.core.pr_str.call(null,inst_28757);
var inst_28759 = figwheel.client.utils.log.call(null,inst_28758);
var inst_28760 = (function (){var all_files = inst_28731;
var res_SINGLEQUOTE_ = inst_28734;
var res = inst_28735;
var files_not_loaded = inst_28737;
var dependencies_that_loaded = inst_28739;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28739,inst_28731,inst_28735,inst_28737,inst_28734,inst_28754,inst_28756,inst_28757,inst_28758,inst_28759,state_val_28818,c__22469__auto__,map__28663,map__28663__$1,opts,before_jsload,on_jsload,reload_dependents,map__28664,map__28664__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28739,inst_28731,inst_28735,inst_28737,inst_28734,inst_28754,inst_28756,inst_28757,inst_28758,inst_28759,state_val_28818,c__22469__auto__,map__28663,map__28663__$1,opts,before_jsload,on_jsload,reload_dependents,map__28664,map__28664__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28761 = setTimeout(inst_28760,(10));
var state_28817__$1 = (function (){var statearr_28888 = state_28817;
(statearr_28888[(33)] = inst_28759);

(statearr_28888[(34)] = inst_28754);

return statearr_28888;
})();
var statearr_28889_28955 = state_28817__$1;
(statearr_28889_28955[(2)] = inst_28761);

(statearr_28889_28955[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (16))){
var state_28817__$1 = state_28817;
var statearr_28890_28956 = state_28817__$1;
(statearr_28890_28956[(2)] = reload_dependents);

(statearr_28890_28956[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (38))){
var inst_28771 = (state_28817[(16)]);
var inst_28788 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28771);
var state_28817__$1 = state_28817;
var statearr_28891_28957 = state_28817__$1;
(statearr_28891_28957[(2)] = inst_28788);

(statearr_28891_28957[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (30))){
var state_28817__$1 = state_28817;
var statearr_28892_28958 = state_28817__$1;
(statearr_28892_28958[(2)] = null);

(statearr_28892_28958[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (10))){
var inst_28691 = (state_28817[(22)]);
var inst_28693 = cljs.core.chunked_seq_QMARK_.call(null,inst_28691);
var state_28817__$1 = state_28817;
if(inst_28693){
var statearr_28893_28959 = state_28817__$1;
(statearr_28893_28959[(1)] = (13));

} else {
var statearr_28894_28960 = state_28817__$1;
(statearr_28894_28960[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (18))){
var inst_28725 = (state_28817[(2)]);
var state_28817__$1 = state_28817;
if(cljs.core.truth_(inst_28725)){
var statearr_28895_28961 = state_28817__$1;
(statearr_28895_28961[(1)] = (19));

} else {
var statearr_28896_28962 = state_28817__$1;
(statearr_28896_28962[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (42))){
var state_28817__$1 = state_28817;
var statearr_28897_28963 = state_28817__$1;
(statearr_28897_28963[(2)] = null);

(statearr_28897_28963[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (37))){
var inst_28783 = (state_28817[(2)]);
var state_28817__$1 = state_28817;
var statearr_28898_28964 = state_28817__$1;
(statearr_28898_28964[(2)] = inst_28783);

(statearr_28898_28964[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28818 === (8))){
var inst_28691 = (state_28817[(22)]);
var inst_28678 = (state_28817[(9)]);
var inst_28691__$1 = cljs.core.seq.call(null,inst_28678);
var state_28817__$1 = (function (){var statearr_28899 = state_28817;
(statearr_28899[(22)] = inst_28691__$1);

return statearr_28899;
})();
if(inst_28691__$1){
var statearr_28900_28965 = state_28817__$1;
(statearr_28900_28965[(1)] = (10));

} else {
var statearr_28901_28966 = state_28817__$1;
(statearr_28901_28966[(1)] = (11));

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
});})(c__22469__auto__,map__28663,map__28663__$1,opts,before_jsload,on_jsload,reload_dependents,map__28664,map__28664__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22357__auto__,c__22469__auto__,map__28663,map__28663__$1,opts,before_jsload,on_jsload,reload_dependents,map__28664,map__28664__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22358__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22358__auto____0 = (function (){
var statearr_28905 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28905[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22358__auto__);

(statearr_28905[(1)] = (1));

return statearr_28905;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22358__auto____1 = (function (state_28817){
while(true){
var ret_value__22359__auto__ = (function (){try{while(true){
var result__22360__auto__ = switch__22357__auto__.call(null,state_28817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22360__auto__;
}
break;
}
}catch (e28906){if((e28906 instanceof Object)){
var ex__22361__auto__ = e28906;
var statearr_28907_28967 = state_28817;
(statearr_28907_28967[(5)] = ex__22361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28968 = state_28817;
state_28817 = G__28968;
continue;
} else {
return ret_value__22359__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22358__auto__ = function(state_28817){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22358__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22358__auto____1.call(this,state_28817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22358__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22358__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22358__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22358__auto__;
})()
;})(switch__22357__auto__,c__22469__auto__,map__28663,map__28663__$1,opts,before_jsload,on_jsload,reload_dependents,map__28664,map__28664__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22471__auto__ = (function (){var statearr_28908 = f__22470__auto__.call(null);
(statearr_28908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22469__auto__);

return statearr_28908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22471__auto__);
});})(c__22469__auto__,map__28663,map__28663__$1,opts,before_jsload,on_jsload,reload_dependents,map__28664,map__28664__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22469__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28971,link){
var map__28974 = p__28971;
var map__28974__$1 = ((((!((map__28974 == null)))?((((map__28974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28974):map__28974);
var file = cljs.core.get.call(null,map__28974__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__28974,map__28974__$1,file){
return (function (p1__28969_SHARP_,p2__28970_SHARP_){
if(cljs.core._EQ_.call(null,p1__28969_SHARP_,p2__28970_SHARP_)){
return p1__28969_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__28974,map__28974__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28980){
var map__28981 = p__28980;
var map__28981__$1 = ((((!((map__28981 == null)))?((((map__28981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28981):map__28981);
var match_length = cljs.core.get.call(null,map__28981__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28981__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28976_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28976_SHARP_);
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
var args28983 = [];
var len__19571__auto___28986 = arguments.length;
var i__19572__auto___28987 = (0);
while(true){
if((i__19572__auto___28987 < len__19571__auto___28986)){
args28983.push((arguments[i__19572__auto___28987]));

var G__28988 = (i__19572__auto___28987 + (1));
i__19572__auto___28987 = G__28988;
continue;
} else {
}
break;
}

var G__28985 = args28983.length;
switch (G__28985) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28983.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28990_SHARP_,p2__28991_SHARP_){
return cljs.core.assoc.call(null,p1__28990_SHARP_,cljs.core.get.call(null,p2__28991_SHARP_,key),p2__28991_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28992){
var map__28995 = p__28992;
var map__28995__$1 = ((((!((map__28995 == null)))?((((map__28995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28995):map__28995);
var f_data = map__28995__$1;
var file = cljs.core.get.call(null,map__28995__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28997,files_msg){
var map__29004 = p__28997;
var map__29004__$1 = ((((!((map__29004 == null)))?((((map__29004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29004):map__29004);
var opts = map__29004__$1;
var on_cssload = cljs.core.get.call(null,map__29004__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29006_29010 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29007_29011 = null;
var count__29008_29012 = (0);
var i__29009_29013 = (0);
while(true){
if((i__29009_29013 < count__29008_29012)){
var f_29014 = cljs.core._nth.call(null,chunk__29007_29011,i__29009_29013);
figwheel.client.file_reloading.reload_css_file.call(null,f_29014);

var G__29015 = seq__29006_29010;
var G__29016 = chunk__29007_29011;
var G__29017 = count__29008_29012;
var G__29018 = (i__29009_29013 + (1));
seq__29006_29010 = G__29015;
chunk__29007_29011 = G__29016;
count__29008_29012 = G__29017;
i__29009_29013 = G__29018;
continue;
} else {
var temp__4657__auto___29019 = cljs.core.seq.call(null,seq__29006_29010);
if(temp__4657__auto___29019){
var seq__29006_29020__$1 = temp__4657__auto___29019;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29006_29020__$1)){
var c__19307__auto___29021 = cljs.core.chunk_first.call(null,seq__29006_29020__$1);
var G__29022 = cljs.core.chunk_rest.call(null,seq__29006_29020__$1);
var G__29023 = c__19307__auto___29021;
var G__29024 = cljs.core.count.call(null,c__19307__auto___29021);
var G__29025 = (0);
seq__29006_29010 = G__29022;
chunk__29007_29011 = G__29023;
count__29008_29012 = G__29024;
i__29009_29013 = G__29025;
continue;
} else {
var f_29026 = cljs.core.first.call(null,seq__29006_29020__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29026);

var G__29027 = cljs.core.next.call(null,seq__29006_29020__$1);
var G__29028 = null;
var G__29029 = (0);
var G__29030 = (0);
seq__29006_29010 = G__29027;
chunk__29007_29011 = G__29028;
count__29008_29012 = G__29029;
i__29009_29013 = G__29030;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__29004,map__29004__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__29004,map__29004__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1466621024007