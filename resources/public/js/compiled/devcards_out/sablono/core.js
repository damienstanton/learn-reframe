// Compiled by ClojureScript 1.9.88 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__25872__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__25869 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__25870 = cljs.core.seq.call(null,vec__25869);
var first__25871 = cljs.core.first.call(null,seq__25870);
var seq__25870__$1 = cljs.core.next.call(null,seq__25870);
var tag = first__25871;
var body = seq__25870__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__25872 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25873__i = 0, G__25873__a = new Array(arguments.length -  0);
while (G__25873__i < G__25873__a.length) {G__25873__a[G__25873__i] = arguments[G__25873__i + 0]; ++G__25873__i;}
  args = new cljs.core.IndexedSeq(G__25873__a,0);
} 
return G__25872__delegate.call(this,args);};
G__25872.cljs$lang$maxFixedArity = 0;
G__25872.cljs$lang$applyTo = (function (arglist__25874){
var args = cljs.core.seq(arglist__25874);
return G__25872__delegate(args);
});
G__25872.cljs$core$IFn$_invoke$arity$variadic = G__25872__delegate;
return G__25872;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__19276__auto__ = (function sablono$core$update_arglists_$_iter__25879(s__25880){
return (new cljs.core.LazySeq(null,(function (){
var s__25880__$1 = s__25880;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25880__$1);
if(temp__4657__auto__){
var s__25880__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25880__$2)){
var c__19274__auto__ = cljs.core.chunk_first.call(null,s__25880__$2);
var size__19275__auto__ = cljs.core.count.call(null,c__19274__auto__);
var b__25882 = cljs.core.chunk_buffer.call(null,size__19275__auto__);
if((function (){var i__25881 = (0);
while(true){
if((i__25881 < size__19275__auto__)){
var args = cljs.core._nth.call(null,c__19274__auto__,i__25881);
cljs.core.chunk_append.call(null,b__25882,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__25883 = (i__25881 + (1));
i__25881 = G__25883;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25882),sablono$core$update_arglists_$_iter__25879.call(null,cljs.core.chunk_rest.call(null,s__25880__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25882),null);
}
} else {
var args = cljs.core.first.call(null,s__25880__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__25879.call(null,cljs.core.rest.call(null,s__25880__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19276__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__19578__auto__ = [];
var len__19571__auto___25889 = arguments.length;
var i__19572__auto___25890 = (0);
while(true){
if((i__19572__auto___25890 < len__19571__auto___25889)){
args__19578__auto__.push((arguments[i__19572__auto___25890]));

var G__25891 = (i__19572__auto___25890 + (1));
i__19572__auto___25890 = G__25891;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__19276__auto__ = (function sablono$core$iter__25885(s__25886){
return (new cljs.core.LazySeq(null,(function (){
var s__25886__$1 = s__25886;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25886__$1);
if(temp__4657__auto__){
var s__25886__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25886__$2)){
var c__19274__auto__ = cljs.core.chunk_first.call(null,s__25886__$2);
var size__19275__auto__ = cljs.core.count.call(null,c__19274__auto__);
var b__25888 = cljs.core.chunk_buffer.call(null,size__19275__auto__);
if((function (){var i__25887 = (0);
while(true){
if((i__25887 < size__19275__auto__)){
var style = cljs.core._nth.call(null,c__19274__auto__,i__25887);
cljs.core.chunk_append.call(null,b__25888,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__25892 = (i__25887 + (1));
i__25887 = G__25892;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25888),sablono$core$iter__25885.call(null,cljs.core.chunk_rest.call(null,s__25886__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25888),null);
}
} else {
var style = cljs.core.first.call(null,s__25886__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__25885.call(null,cljs.core.rest.call(null,s__25886__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19276__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq25884){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25884));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to25893 = (function sablono$core$link_to25893(var_args){
var args__19578__auto__ = [];
var len__19571__auto___25896 = arguments.length;
var i__19572__auto___25897 = (0);
while(true){
if((i__19572__auto___25897 < len__19571__auto___25896)){
args__19578__auto__.push((arguments[i__19572__auto___25897]));

var G__25898 = (i__19572__auto___25897 + (1));
i__19572__auto___25897 = G__25898;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((1) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to25893.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19579__auto__);
});

sablono.core.link_to25893.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to25893.cljs$lang$maxFixedArity = (1);

sablono.core.link_to25893.cljs$lang$applyTo = (function (seq25894){
var G__25895 = cljs.core.first.call(null,seq25894);
var seq25894__$1 = cljs.core.next.call(null,seq25894);
return sablono.core.link_to25893.cljs$core$IFn$_invoke$arity$variadic(G__25895,seq25894__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to25893);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to25899 = (function sablono$core$mail_to25899(var_args){
var args__19578__auto__ = [];
var len__19571__auto___25906 = arguments.length;
var i__19572__auto___25907 = (0);
while(true){
if((i__19572__auto___25907 < len__19571__auto___25906)){
args__19578__auto__.push((arguments[i__19572__auto___25907]));

var G__25908 = (i__19572__auto___25907 + (1));
i__19572__auto___25907 = G__25908;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((1) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to25899.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19579__auto__);
});

sablono.core.mail_to25899.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__25902){
var vec__25903 = p__25902;
var content = cljs.core.nth.call(null,vec__25903,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__18496__auto__ = content;
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to25899.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to25899.cljs$lang$applyTo = (function (seq25900){
var G__25901 = cljs.core.first.call(null,seq25900);
var seq25900__$1 = cljs.core.next.call(null,seq25900);
return sablono.core.mail_to25899.cljs$core$IFn$_invoke$arity$variadic(G__25901,seq25900__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to25899);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list25909 = (function sablono$core$unordered_list25909(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__19276__auto__ = (function sablono$core$unordered_list25909_$_iter__25914(s__25915){
return (new cljs.core.LazySeq(null,(function (){
var s__25915__$1 = s__25915;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25915__$1);
if(temp__4657__auto__){
var s__25915__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25915__$2)){
var c__19274__auto__ = cljs.core.chunk_first.call(null,s__25915__$2);
var size__19275__auto__ = cljs.core.count.call(null,c__19274__auto__);
var b__25917 = cljs.core.chunk_buffer.call(null,size__19275__auto__);
if((function (){var i__25916 = (0);
while(true){
if((i__25916 < size__19275__auto__)){
var x = cljs.core._nth.call(null,c__19274__auto__,i__25916);
cljs.core.chunk_append.call(null,b__25917,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__25918 = (i__25916 + (1));
i__25916 = G__25918;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25917),sablono$core$unordered_list25909_$_iter__25914.call(null,cljs.core.chunk_rest.call(null,s__25915__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25917),null);
}
} else {
var x = cljs.core.first.call(null,s__25915__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list25909_$_iter__25914.call(null,cljs.core.rest.call(null,s__25915__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19276__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list25909);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list25919 = (function sablono$core$ordered_list25919(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__19276__auto__ = (function sablono$core$ordered_list25919_$_iter__25924(s__25925){
return (new cljs.core.LazySeq(null,(function (){
var s__25925__$1 = s__25925;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25925__$1);
if(temp__4657__auto__){
var s__25925__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25925__$2)){
var c__19274__auto__ = cljs.core.chunk_first.call(null,s__25925__$2);
var size__19275__auto__ = cljs.core.count.call(null,c__19274__auto__);
var b__25927 = cljs.core.chunk_buffer.call(null,size__19275__auto__);
if((function (){var i__25926 = (0);
while(true){
if((i__25926 < size__19275__auto__)){
var x = cljs.core._nth.call(null,c__19274__auto__,i__25926);
cljs.core.chunk_append.call(null,b__25927,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__25928 = (i__25926 + (1));
i__25926 = G__25928;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25927),sablono$core$ordered_list25919_$_iter__25924.call(null,cljs.core.chunk_rest.call(null,s__25925__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25927),null);
}
} else {
var x = cljs.core.first.call(null,s__25925__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list25919_$_iter__25924.call(null,cljs.core.rest.call(null,s__25925__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19276__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list25919);
/**
 * Create an image element.
 */
sablono.core.image25929 = (function sablono$core$image25929(var_args){
var args25930 = [];
var len__19571__auto___25933 = arguments.length;
var i__19572__auto___25934 = (0);
while(true){
if((i__19572__auto___25934 < len__19571__auto___25933)){
args25930.push((arguments[i__19572__auto___25934]));

var G__25935 = (i__19572__auto___25934 + (1));
i__19572__auto___25934 = G__25935;
continue;
} else {
}
break;
}

var G__25932 = args25930.length;
switch (G__25932) {
case 1:
return sablono.core.image25929.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image25929.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25930.length)].join('')));

}
});

sablono.core.image25929.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image25929.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image25929.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image25929);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__25937_SHARP_,p2__25938_SHARP_){
return [cljs.core.str(p1__25937_SHARP_),cljs.core.str("["),cljs.core.str(p2__25938_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__25939_SHARP_,p2__25940_SHARP_){
return [cljs.core.str(p1__25939_SHARP_),cljs.core.str("-"),cljs.core.str(p2__25940_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18496__auto__ = value;
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field25941 = (function sablono$core$color_field25941(var_args){
var args25942 = [];
var len__19571__auto___26009 = arguments.length;
var i__19572__auto___26010 = (0);
while(true){
if((i__19572__auto___26010 < len__19571__auto___26009)){
args25942.push((arguments[i__19572__auto___26010]));

var G__26011 = (i__19572__auto___26010 + (1));
i__19572__auto___26010 = G__26011;
continue;
} else {
}
break;
}

var G__25944 = args25942.length;
switch (G__25944) {
case 1:
return sablono.core.color_field25941.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field25941.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25942.length)].join('')));

}
});

sablono.core.color_field25941.cljs$core$IFn$_invoke$arity$1 = (function (name__25856__auto__){
return sablono.core.color_field25941.call(null,name__25856__auto__,null);
});

sablono.core.color_field25941.cljs$core$IFn$_invoke$arity$2 = (function (name__25856__auto__,value__25857__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__25856__auto__,value__25857__auto__);
});

sablono.core.color_field25941.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field25941);

/**
 * Creates a date input field.
 */
sablono.core.date_field25945 = (function sablono$core$date_field25945(var_args){
var args25946 = [];
var len__19571__auto___26013 = arguments.length;
var i__19572__auto___26014 = (0);
while(true){
if((i__19572__auto___26014 < len__19571__auto___26013)){
args25946.push((arguments[i__19572__auto___26014]));

var G__26015 = (i__19572__auto___26014 + (1));
i__19572__auto___26014 = G__26015;
continue;
} else {
}
break;
}

var G__25948 = args25946.length;
switch (G__25948) {
case 1:
return sablono.core.date_field25945.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field25945.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25946.length)].join('')));

}
});

sablono.core.date_field25945.cljs$core$IFn$_invoke$arity$1 = (function (name__25856__auto__){
return sablono.core.date_field25945.call(null,name__25856__auto__,null);
});

sablono.core.date_field25945.cljs$core$IFn$_invoke$arity$2 = (function (name__25856__auto__,value__25857__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__25856__auto__,value__25857__auto__);
});

sablono.core.date_field25945.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field25945);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field25949 = (function sablono$core$datetime_field25949(var_args){
var args25950 = [];
var len__19571__auto___26017 = arguments.length;
var i__19572__auto___26018 = (0);
while(true){
if((i__19572__auto___26018 < len__19571__auto___26017)){
args25950.push((arguments[i__19572__auto___26018]));

var G__26019 = (i__19572__auto___26018 + (1));
i__19572__auto___26018 = G__26019;
continue;
} else {
}
break;
}

var G__25952 = args25950.length;
switch (G__25952) {
case 1:
return sablono.core.datetime_field25949.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field25949.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25950.length)].join('')));

}
});

sablono.core.datetime_field25949.cljs$core$IFn$_invoke$arity$1 = (function (name__25856__auto__){
return sablono.core.datetime_field25949.call(null,name__25856__auto__,null);
});

sablono.core.datetime_field25949.cljs$core$IFn$_invoke$arity$2 = (function (name__25856__auto__,value__25857__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__25856__auto__,value__25857__auto__);
});

sablono.core.datetime_field25949.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field25949);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field25953 = (function sablono$core$datetime_local_field25953(var_args){
var args25954 = [];
var len__19571__auto___26021 = arguments.length;
var i__19572__auto___26022 = (0);
while(true){
if((i__19572__auto___26022 < len__19571__auto___26021)){
args25954.push((arguments[i__19572__auto___26022]));

var G__26023 = (i__19572__auto___26022 + (1));
i__19572__auto___26022 = G__26023;
continue;
} else {
}
break;
}

var G__25956 = args25954.length;
switch (G__25956) {
case 1:
return sablono.core.datetime_local_field25953.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field25953.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25954.length)].join('')));

}
});

sablono.core.datetime_local_field25953.cljs$core$IFn$_invoke$arity$1 = (function (name__25856__auto__){
return sablono.core.datetime_local_field25953.call(null,name__25856__auto__,null);
});

sablono.core.datetime_local_field25953.cljs$core$IFn$_invoke$arity$2 = (function (name__25856__auto__,value__25857__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__25856__auto__,value__25857__auto__);
});

sablono.core.datetime_local_field25953.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field25953);

/**
 * Creates a email input field.
 */
sablono.core.email_field25957 = (function sablono$core$email_field25957(var_args){
var args25958 = [];
var len__19571__auto___26025 = arguments.length;
var i__19572__auto___26026 = (0);
while(true){
if((i__19572__auto___26026 < len__19571__auto___26025)){
args25958.push((arguments[i__19572__auto___26026]));

var G__26027 = (i__19572__auto___26026 + (1));
i__19572__auto___26026 = G__26027;
continue;
} else {
}
break;
}

var G__25960 = args25958.length;
switch (G__25960) {
case 1:
return sablono.core.email_field25957.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field25957.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25958.length)].join('')));

}
});

sablono.core.email_field25957.cljs$core$IFn$_invoke$arity$1 = (function (name__25856__auto__){
return sablono.core.email_field25957.call(null,name__25856__auto__,null);
});

sablono.core.email_field25957.cljs$core$IFn$_invoke$arity$2 = (function (name__25856__auto__,value__25857__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__25856__auto__,value__25857__auto__);
});

sablono.core.email_field25957.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field25957);

/**
 * Creates a file input field.
 */
sablono.core.file_field25961 = (function sablono$core$file_field25961(var_args){
var args25962 = [];
var len__19571__auto___26029 = arguments.length;
var i__19572__auto___26030 = (0);
while(true){
if((i__19572__auto___26030 < len__19571__auto___26029)){
args25962.push((arguments[i__19572__auto___26030]));

var G__26031 = (i__19572__auto___26030 + (1));
i__19572__auto___26030 = G__26031;
continue;
} else {
}
break;
}

var G__25964 = args25962.length;
switch (G__25964) {
case 1:
return sablono.core.file_field25961.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field25961.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25962.length)].join('')));

}
});

sablono.core.file_field25961.cljs$core$IFn$_invoke$arity$1 = (function (name__25856__auto__){
return sablono.core.file_field25961.call(null,name__25856__auto__,null);
});

sablono.core.file_field25961.cljs$core$IFn$_invoke$arity$2 = (function (name__25856__auto__,value__25857__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__25856__auto__,value__25857__auto__);
});

sablono.core.file_field25961.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field25961);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field25965 = (function sablono$core$hidden_field25965(var_args){
var args25966 = [];
var len__19571__auto___26033 = arguments.length;
var i__19572__auto___26034 = (0);
while(true){
if((i__19572__auto___26034 < len__19571__auto___26033)){
args25966.push((arguments[i__19572__auto___26034]));

var G__26035 = (i__19572__auto___26034 + (1));
i__19572__auto___26034 = G__26035;
continue;
} else {
}
break;
}

var G__25968 = args25966.length;
switch (G__25968) {
case 1:
return sablono.core.hidden_field25965.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field25965.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25966.length)].join('')));

}
});

sablono.core.hidden_field25965.cljs$core$IFn$_invoke$arity$1 = (function (name__25856__auto__){
return sablono.core.hidden_field25965.call(null,name__25856__auto__,null);
});

sablono.core.hidden_field25965.cljs$core$IFn$_invoke$arity$2 = (function (name__25856__auto__,value__25857__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__25856__auto__,value__25857__auto__);
});

sablono.core.hidden_field25965.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field25965);

/**
 * Creates a month input field.
 */
sablono.core.month_field25969 = (function sablono$core$month_field25969(var_args){
var args25970 = [];
var len__19571__auto___26037 = arguments.length;
var i__19572__auto___26038 = (0);
while(true){
if((i__19572__auto___26038 < len__19571__auto___26037)){
args25970.push((arguments[i__19572__auto___26038]));

var G__26039 = (i__19572__auto___26038 + (1));
i__19572__auto___26038 = G__26039;
continue;
} else {
}
break;
}

var G__25972 = args25970.length;
switch (G__25972) {
case 1:
return sablono.core.month_field25969.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field25969.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25970.length)].join('')));

}
});

sablono.core.month_field25969.cljs$core$IFn$_invoke$arity$1 = (function (name__25856__auto__){
return sablono.core.month_field25969.call(null,name__25856__auto__,null);
});

sablono.core.month_field25969.cljs$core$IFn$_invoke$arity$2 = (function (name__25856__auto__,value__25857__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__25856__auto__,value__25857__auto__);
});

sablono.core.month_field25969.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field25969);

/**
 * Creates a number input field.
 */
sablono.core.number_field25973 = (function sablono$core$number_field25973(var_args){
var args25974 = [];
var len__19571__auto___26041 = arguments.length;
var i__19572__auto___26042 = (0);
while(true){
if((i__19572__auto___26042 < len__19571__auto___26041)){
args25974.push((arguments[i__19572__auto___26042]));

var G__26043 = (i__19572__auto___26042 + (1));
i__19572__auto___26042 = G__26043;
continue;
} else {
}
break;
}

var G__25976 = args25974.length;
switch (G__25976) {
case 1:
return sablono.core.number_field25973.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field25973.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25974.length)].join('')));

}
});

sablono.core.number_field25973.cljs$core$IFn$_invoke$arity$1 = (function (name__25856__auto__){
return sablono.core.number_field25973.call(null,name__25856__auto__,null);
});

sablono.core.number_field25973.cljs$core$IFn$_invoke$arity$2 = (function (name__25856__auto__,value__25857__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__25856__auto__,value__25857__auto__);
});

sablono.core.number_field25973.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field25973);

/**
 * Creates a password input field.
 */
sablono.core.password_field25977 = (function sablono$core$password_field25977(var_args){
var args25978 = [];
var len__19571__auto___26045 = arguments.length;
var i__19572__auto___26046 = (0);
while(true){
if((i__19572__auto___26046 < len__19571__auto___26045)){
args25978.push((arguments[i__19572__auto___26046]));

var G__26047 = (i__19572__auto___26046 + (1));
i__19572__auto___26046 = G__26047;
continue;
} else {
}
break;
}

var G__25980 = args25978.length;
switch (G__25980) {
case 1:
return sablono.core.password_field25977.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field25977.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25978.length)].join('')));

}
});

sablono.core.password_field25977.cljs$core$IFn$_invoke$arity$1 = (function (name__25856__auto__){
return sablono.core.password_field25977.call(null,name__25856__auto__,null);
});

sablono.core.password_field25977.cljs$core$IFn$_invoke$arity$2 = (function (name__25856__auto__,value__25857__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__25856__auto__,value__25857__auto__);
});

sablono.core.password_field25977.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field25977);

/**
 * Creates a range input field.
 */
sablono.core.range_field25981 = (function sablono$core$range_field25981(var_args){
var args25982 = [];
var len__19571__auto___26049 = arguments.length;
var i__19572__auto___26050 = (0);
while(true){
if((i__19572__auto___26050 < len__19571__auto___26049)){
args25982.push((arguments[i__19572__auto___26050]));

var G__26051 = (i__19572__auto___26050 + (1));
i__19572__auto___26050 = G__26051;
continue;
} else {
}
break;
}

var G__25984 = args25982.length;
switch (G__25984) {
case 1:
return sablono.core.range_field25981.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field25981.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25982.length)].join('')));

}
});

sablono.core.range_field25981.cljs$core$IFn$_invoke$arity$1 = (function (name__25856__auto__){
return sablono.core.range_field25981.call(null,name__25856__auto__,null);
});

sablono.core.range_field25981.cljs$core$IFn$_invoke$arity$2 = (function (name__25856__auto__,value__25857__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__25856__auto__,value__25857__auto__);
});

sablono.core.range_field25981.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field25981);

/**
 * Creates a search input field.
 */
sablono.core.search_field25985 = (function sablono$core$search_field25985(var_args){
var args25986 = [];
var len__19571__auto___26053 = arguments.length;
var i__19572__auto___26054 = (0);
while(true){
if((i__19572__auto___26054 < len__19571__auto___26053)){
args25986.push((arguments[i__19572__auto___26054]));

var G__26055 = (i__19572__auto___26054 + (1));
i__19572__auto___26054 = G__26055;
continue;
} else {
}
break;
}

var G__25988 = args25986.length;
switch (G__25988) {
case 1:
return sablono.core.search_field25985.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field25985.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25986.length)].join('')));

}
});

sablono.core.search_field25985.cljs$core$IFn$_invoke$arity$1 = (function (name__25856__auto__){
return sablono.core.search_field25985.call(null,name__25856__auto__,null);
});

sablono.core.search_field25985.cljs$core$IFn$_invoke$arity$2 = (function (name__25856__auto__,value__25857__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__25856__auto__,value__25857__auto__);
});

sablono.core.search_field25985.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field25985);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field25989 = (function sablono$core$tel_field25989(var_args){
var args25990 = [];
var len__19571__auto___26057 = arguments.length;
var i__19572__auto___26058 = (0);
while(true){
if((i__19572__auto___26058 < len__19571__auto___26057)){
args25990.push((arguments[i__19572__auto___26058]));

var G__26059 = (i__19572__auto___26058 + (1));
i__19572__auto___26058 = G__26059;
continue;
} else {
}
break;
}

var G__25992 = args25990.length;
switch (G__25992) {
case 1:
return sablono.core.tel_field25989.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field25989.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25990.length)].join('')));

}
});

sablono.core.tel_field25989.cljs$core$IFn$_invoke$arity$1 = (function (name__25856__auto__){
return sablono.core.tel_field25989.call(null,name__25856__auto__,null);
});

sablono.core.tel_field25989.cljs$core$IFn$_invoke$arity$2 = (function (name__25856__auto__,value__25857__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__25856__auto__,value__25857__auto__);
});

sablono.core.tel_field25989.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field25989);

/**
 * Creates a text input field.
 */
sablono.core.text_field25993 = (function sablono$core$text_field25993(var_args){
var args25994 = [];
var len__19571__auto___26061 = arguments.length;
var i__19572__auto___26062 = (0);
while(true){
if((i__19572__auto___26062 < len__19571__auto___26061)){
args25994.push((arguments[i__19572__auto___26062]));

var G__26063 = (i__19572__auto___26062 + (1));
i__19572__auto___26062 = G__26063;
continue;
} else {
}
break;
}

var G__25996 = args25994.length;
switch (G__25996) {
case 1:
return sablono.core.text_field25993.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field25993.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25994.length)].join('')));

}
});

sablono.core.text_field25993.cljs$core$IFn$_invoke$arity$1 = (function (name__25856__auto__){
return sablono.core.text_field25993.call(null,name__25856__auto__,null);
});

sablono.core.text_field25993.cljs$core$IFn$_invoke$arity$2 = (function (name__25856__auto__,value__25857__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__25856__auto__,value__25857__auto__);
});

sablono.core.text_field25993.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field25993);

/**
 * Creates a time input field.
 */
sablono.core.time_field25997 = (function sablono$core$time_field25997(var_args){
var args25998 = [];
var len__19571__auto___26065 = arguments.length;
var i__19572__auto___26066 = (0);
while(true){
if((i__19572__auto___26066 < len__19571__auto___26065)){
args25998.push((arguments[i__19572__auto___26066]));

var G__26067 = (i__19572__auto___26066 + (1));
i__19572__auto___26066 = G__26067;
continue;
} else {
}
break;
}

var G__26000 = args25998.length;
switch (G__26000) {
case 1:
return sablono.core.time_field25997.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field25997.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25998.length)].join('')));

}
});

sablono.core.time_field25997.cljs$core$IFn$_invoke$arity$1 = (function (name__25856__auto__){
return sablono.core.time_field25997.call(null,name__25856__auto__,null);
});

sablono.core.time_field25997.cljs$core$IFn$_invoke$arity$2 = (function (name__25856__auto__,value__25857__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__25856__auto__,value__25857__auto__);
});

sablono.core.time_field25997.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field25997);

/**
 * Creates a url input field.
 */
sablono.core.url_field26001 = (function sablono$core$url_field26001(var_args){
var args26002 = [];
var len__19571__auto___26069 = arguments.length;
var i__19572__auto___26070 = (0);
while(true){
if((i__19572__auto___26070 < len__19571__auto___26069)){
args26002.push((arguments[i__19572__auto___26070]));

var G__26071 = (i__19572__auto___26070 + (1));
i__19572__auto___26070 = G__26071;
continue;
} else {
}
break;
}

var G__26004 = args26002.length;
switch (G__26004) {
case 1:
return sablono.core.url_field26001.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field26001.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26002.length)].join('')));

}
});

sablono.core.url_field26001.cljs$core$IFn$_invoke$arity$1 = (function (name__25856__auto__){
return sablono.core.url_field26001.call(null,name__25856__auto__,null);
});

sablono.core.url_field26001.cljs$core$IFn$_invoke$arity$2 = (function (name__25856__auto__,value__25857__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__25856__auto__,value__25857__auto__);
});

sablono.core.url_field26001.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field26001);

/**
 * Creates a week input field.
 */
sablono.core.week_field26005 = (function sablono$core$week_field26005(var_args){
var args26006 = [];
var len__19571__auto___26073 = arguments.length;
var i__19572__auto___26074 = (0);
while(true){
if((i__19572__auto___26074 < len__19571__auto___26073)){
args26006.push((arguments[i__19572__auto___26074]));

var G__26075 = (i__19572__auto___26074 + (1));
i__19572__auto___26074 = G__26075;
continue;
} else {
}
break;
}

var G__26008 = args26006.length;
switch (G__26008) {
case 1:
return sablono.core.week_field26005.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field26005.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26006.length)].join('')));

}
});

sablono.core.week_field26005.cljs$core$IFn$_invoke$arity$1 = (function (name__25856__auto__){
return sablono.core.week_field26005.call(null,name__25856__auto__,null);
});

sablono.core.week_field26005.cljs$core$IFn$_invoke$arity$2 = (function (name__25856__auto__,value__25857__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__25856__auto__,value__25857__auto__);
});

sablono.core.week_field26005.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field26005);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box26077 = (function sablono$core$check_box26077(var_args){
var args26078 = [];
var len__19571__auto___26081 = arguments.length;
var i__19572__auto___26082 = (0);
while(true){
if((i__19572__auto___26082 < len__19571__auto___26081)){
args26078.push((arguments[i__19572__auto___26082]));

var G__26083 = (i__19572__auto___26082 + (1));
i__19572__auto___26082 = G__26083;
continue;
} else {
}
break;
}

var G__26080 = args26078.length;
switch (G__26080) {
case 1:
return sablono.core.check_box26077.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box26077.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box26077.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26078.length)].join('')));

}
});

sablono.core.check_box26077.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box26077.call(null,name,null);
});

sablono.core.check_box26077.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box26077.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box26077.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18496__auto__ = value;
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box26077.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box26077);
/**
 * Creates a radio button.
 */
sablono.core.radio_button26085 = (function sablono$core$radio_button26085(var_args){
var args26086 = [];
var len__19571__auto___26089 = arguments.length;
var i__19572__auto___26090 = (0);
while(true){
if((i__19572__auto___26090 < len__19571__auto___26089)){
args26086.push((arguments[i__19572__auto___26090]));

var G__26091 = (i__19572__auto___26090 + (1));
i__19572__auto___26090 = G__26091;
continue;
} else {
}
break;
}

var G__26088 = args26086.length;
switch (G__26088) {
case 1:
return sablono.core.radio_button26085.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button26085.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button26085.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26086.length)].join('')));

}
});

sablono.core.radio_button26085.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button26085.call(null,group,null);
});

sablono.core.radio_button26085.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button26085.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button26085.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18496__auto__ = value;
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button26085.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button26085);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options26093 = (function sablono$core$select_options26093(coll){
var iter__19276__auto__ = (function sablono$core$select_options26093_$_iter__26110(s__26111){
return (new cljs.core.LazySeq(null,(function (){
var s__26111__$1 = s__26111;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26111__$1);
if(temp__4657__auto__){
var s__26111__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26111__$2)){
var c__19274__auto__ = cljs.core.chunk_first.call(null,s__26111__$2);
var size__19275__auto__ = cljs.core.count.call(null,c__19274__auto__);
var b__26113 = cljs.core.chunk_buffer.call(null,size__19275__auto__);
if((function (){var i__26112 = (0);
while(true){
if((i__26112 < size__19275__auto__)){
var x = cljs.core._nth.call(null,c__19274__auto__,i__26112);
cljs.core.chunk_append.call(null,b__26113,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26120 = x;
var text = cljs.core.nth.call(null,vec__26120,(0),null);
var val = cljs.core.nth.call(null,vec__26120,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26120,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options26093.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__26126 = (i__26112 + (1));
i__26112 = G__26126;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26113),sablono$core$select_options26093_$_iter__26110.call(null,cljs.core.chunk_rest.call(null,s__26111__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26113),null);
}
} else {
var x = cljs.core.first.call(null,s__26111__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26123 = x;
var text = cljs.core.nth.call(null,vec__26123,(0),null);
var val = cljs.core.nth.call(null,vec__26123,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26123,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options26093.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options26093_$_iter__26110.call(null,cljs.core.rest.call(null,s__26111__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19276__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options26093);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down26127 = (function sablono$core$drop_down26127(var_args){
var args26128 = [];
var len__19571__auto___26131 = arguments.length;
var i__19572__auto___26132 = (0);
while(true){
if((i__19572__auto___26132 < len__19571__auto___26131)){
args26128.push((arguments[i__19572__auto___26132]));

var G__26133 = (i__19572__auto___26132 + (1));
i__19572__auto___26132 = G__26133;
continue;
} else {
}
break;
}

var G__26130 = args26128.length;
switch (G__26130) {
case 2:
return sablono.core.drop_down26127.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down26127.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26128.length)].join('')));

}
});

sablono.core.drop_down26127.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down26127.call(null,name,options,null);
});

sablono.core.drop_down26127.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down26127.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down26127);
/**
 * Creates a text area element.
 */
sablono.core.text_area26135 = (function sablono$core$text_area26135(var_args){
var args26136 = [];
var len__19571__auto___26139 = arguments.length;
var i__19572__auto___26140 = (0);
while(true){
if((i__19572__auto___26140 < len__19571__auto___26139)){
args26136.push((arguments[i__19572__auto___26140]));

var G__26141 = (i__19572__auto___26140 + (1));
i__19572__auto___26140 = G__26141;
continue;
} else {
}
break;
}

var G__26138 = args26136.length;
switch (G__26138) {
case 1:
return sablono.core.text_area26135.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area26135.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26136.length)].join('')));

}
});

sablono.core.text_area26135.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area26135.call(null,name,null);
});

sablono.core.text_area26135.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18496__auto__ = value;
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area26135.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area26135);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label26143 = (function sablono$core$label26143(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label26143);
/**
 * Creates a submit button.
 */
sablono.core.submit_button26144 = (function sablono$core$submit_button26144(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button26144);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button26145 = (function sablono$core$reset_button26145(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button26145);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to26146 = (function sablono$core$form_to26146(var_args){
var args__19578__auto__ = [];
var len__19571__auto___26153 = arguments.length;
var i__19572__auto___26154 = (0);
while(true){
if((i__19572__auto___26154 < len__19571__auto___26153)){
args__19578__auto__.push((arguments[i__19572__auto___26154]));

var G__26155 = (i__19572__auto___26154 + (1));
i__19572__auto___26154 = G__26155;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((1) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to26146.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19579__auto__);
});

sablono.core.form_to26146.cljs$core$IFn$_invoke$arity$variadic = (function (p__26149,body){
var vec__26150 = p__26149;
var method = cljs.core.nth.call(null,vec__26150,(0),null);
var action = cljs.core.nth.call(null,vec__26150,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to26146.cljs$lang$maxFixedArity = (1);

sablono.core.form_to26146.cljs$lang$applyTo = (function (seq26147){
var G__26148 = cljs.core.first.call(null,seq26147);
var seq26147__$1 = cljs.core.next.call(null,seq26147);
return sablono.core.form_to26146.cljs$core$IFn$_invoke$arity$variadic(G__26148,seq26147__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to26146);

//# sourceMappingURL=core.js.map?rel=1466621020750