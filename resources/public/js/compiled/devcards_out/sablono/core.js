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
var G__36651__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__36648 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__36649 = cljs.core.seq.call(null,vec__36648);
var first__36650 = cljs.core.first.call(null,seq__36649);
var seq__36649__$1 = cljs.core.next.call(null,seq__36649);
var tag = first__36650;
var body = seq__36649__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__36651 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36652__i = 0, G__36652__a = new Array(arguments.length -  0);
while (G__36652__i < G__36652__a.length) {G__36652__a[G__36652__i] = arguments[G__36652__i + 0]; ++G__36652__i;}
  args = new cljs.core.IndexedSeq(G__36652__a,0);
} 
return G__36651__delegate.call(this,args);};
G__36651.cljs$lang$maxFixedArity = 0;
G__36651.cljs$lang$applyTo = (function (arglist__36653){
var args = cljs.core.seq(arglist__36653);
return G__36651__delegate(args);
});
G__36651.cljs$core$IFn$_invoke$arity$variadic = G__36651__delegate;
return G__36651;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__19276__auto__ = (function sablono$core$update_arglists_$_iter__36658(s__36659){
return (new cljs.core.LazySeq(null,(function (){
var s__36659__$1 = s__36659;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36659__$1);
if(temp__4657__auto__){
var s__36659__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36659__$2)){
var c__19274__auto__ = cljs.core.chunk_first.call(null,s__36659__$2);
var size__19275__auto__ = cljs.core.count.call(null,c__19274__auto__);
var b__36661 = cljs.core.chunk_buffer.call(null,size__19275__auto__);
if((function (){var i__36660 = (0);
while(true){
if((i__36660 < size__19275__auto__)){
var args = cljs.core._nth.call(null,c__19274__auto__,i__36660);
cljs.core.chunk_append.call(null,b__36661,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__36662 = (i__36660 + (1));
i__36660 = G__36662;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36661),sablono$core$update_arglists_$_iter__36658.call(null,cljs.core.chunk_rest.call(null,s__36659__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36661),null);
}
} else {
var args = cljs.core.first.call(null,s__36659__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__36658.call(null,cljs.core.rest.call(null,s__36659__$2)));
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
var len__19571__auto___36668 = arguments.length;
var i__19572__auto___36669 = (0);
while(true){
if((i__19572__auto___36669 < len__19571__auto___36668)){
args__19578__auto__.push((arguments[i__19572__auto___36669]));

var G__36670 = (i__19572__auto___36669 + (1));
i__19572__auto___36669 = G__36670;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((0) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__19579__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__19276__auto__ = (function sablono$core$iter__36664(s__36665){
return (new cljs.core.LazySeq(null,(function (){
var s__36665__$1 = s__36665;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36665__$1);
if(temp__4657__auto__){
var s__36665__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36665__$2)){
var c__19274__auto__ = cljs.core.chunk_first.call(null,s__36665__$2);
var size__19275__auto__ = cljs.core.count.call(null,c__19274__auto__);
var b__36667 = cljs.core.chunk_buffer.call(null,size__19275__auto__);
if((function (){var i__36666 = (0);
while(true){
if((i__36666 < size__19275__auto__)){
var style = cljs.core._nth.call(null,c__19274__auto__,i__36666);
cljs.core.chunk_append.call(null,b__36667,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__36671 = (i__36666 + (1));
i__36666 = G__36671;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36667),sablono$core$iter__36664.call(null,cljs.core.chunk_rest.call(null,s__36665__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36667),null);
}
} else {
var style = cljs.core.first.call(null,s__36665__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__36664.call(null,cljs.core.rest.call(null,s__36665__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq36663){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36663));
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
sablono.core.link_to36672 = (function sablono$core$link_to36672(var_args){
var args__19578__auto__ = [];
var len__19571__auto___36675 = arguments.length;
var i__19572__auto___36676 = (0);
while(true){
if((i__19572__auto___36676 < len__19571__auto___36675)){
args__19578__auto__.push((arguments[i__19572__auto___36676]));

var G__36677 = (i__19572__auto___36676 + (1));
i__19572__auto___36676 = G__36677;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((1) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to36672.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19579__auto__);
});

sablono.core.link_to36672.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to36672.cljs$lang$maxFixedArity = (1);

sablono.core.link_to36672.cljs$lang$applyTo = (function (seq36673){
var G__36674 = cljs.core.first.call(null,seq36673);
var seq36673__$1 = cljs.core.next.call(null,seq36673);
return sablono.core.link_to36672.cljs$core$IFn$_invoke$arity$variadic(G__36674,seq36673__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to36672);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to36678 = (function sablono$core$mail_to36678(var_args){
var args__19578__auto__ = [];
var len__19571__auto___36685 = arguments.length;
var i__19572__auto___36686 = (0);
while(true){
if((i__19572__auto___36686 < len__19571__auto___36685)){
args__19578__auto__.push((arguments[i__19572__auto___36686]));

var G__36687 = (i__19572__auto___36686 + (1));
i__19572__auto___36686 = G__36687;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((1) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to36678.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19579__auto__);
});

sablono.core.mail_to36678.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__36681){
var vec__36682 = p__36681;
var content = cljs.core.nth.call(null,vec__36682,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__18496__auto__ = content;
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to36678.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to36678.cljs$lang$applyTo = (function (seq36679){
var G__36680 = cljs.core.first.call(null,seq36679);
var seq36679__$1 = cljs.core.next.call(null,seq36679);
return sablono.core.mail_to36678.cljs$core$IFn$_invoke$arity$variadic(G__36680,seq36679__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to36678);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list36688 = (function sablono$core$unordered_list36688(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__19276__auto__ = (function sablono$core$unordered_list36688_$_iter__36693(s__36694){
return (new cljs.core.LazySeq(null,(function (){
var s__36694__$1 = s__36694;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36694__$1);
if(temp__4657__auto__){
var s__36694__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36694__$2)){
var c__19274__auto__ = cljs.core.chunk_first.call(null,s__36694__$2);
var size__19275__auto__ = cljs.core.count.call(null,c__19274__auto__);
var b__36696 = cljs.core.chunk_buffer.call(null,size__19275__auto__);
if((function (){var i__36695 = (0);
while(true){
if((i__36695 < size__19275__auto__)){
var x = cljs.core._nth.call(null,c__19274__auto__,i__36695);
cljs.core.chunk_append.call(null,b__36696,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__36697 = (i__36695 + (1));
i__36695 = G__36697;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36696),sablono$core$unordered_list36688_$_iter__36693.call(null,cljs.core.chunk_rest.call(null,s__36694__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36696),null);
}
} else {
var x = cljs.core.first.call(null,s__36694__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list36688_$_iter__36693.call(null,cljs.core.rest.call(null,s__36694__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list36688);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list36698 = (function sablono$core$ordered_list36698(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__19276__auto__ = (function sablono$core$ordered_list36698_$_iter__36703(s__36704){
return (new cljs.core.LazySeq(null,(function (){
var s__36704__$1 = s__36704;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36704__$1);
if(temp__4657__auto__){
var s__36704__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36704__$2)){
var c__19274__auto__ = cljs.core.chunk_first.call(null,s__36704__$2);
var size__19275__auto__ = cljs.core.count.call(null,c__19274__auto__);
var b__36706 = cljs.core.chunk_buffer.call(null,size__19275__auto__);
if((function (){var i__36705 = (0);
while(true){
if((i__36705 < size__19275__auto__)){
var x = cljs.core._nth.call(null,c__19274__auto__,i__36705);
cljs.core.chunk_append.call(null,b__36706,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__36707 = (i__36705 + (1));
i__36705 = G__36707;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36706),sablono$core$ordered_list36698_$_iter__36703.call(null,cljs.core.chunk_rest.call(null,s__36704__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36706),null);
}
} else {
var x = cljs.core.first.call(null,s__36704__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list36698_$_iter__36703.call(null,cljs.core.rest.call(null,s__36704__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list36698);
/**
 * Create an image element.
 */
sablono.core.image36708 = (function sablono$core$image36708(var_args){
var args36709 = [];
var len__19571__auto___36712 = arguments.length;
var i__19572__auto___36713 = (0);
while(true){
if((i__19572__auto___36713 < len__19571__auto___36712)){
args36709.push((arguments[i__19572__auto___36713]));

var G__36714 = (i__19572__auto___36713 + (1));
i__19572__auto___36713 = G__36714;
continue;
} else {
}
break;
}

var G__36711 = args36709.length;
switch (G__36711) {
case 1:
return sablono.core.image36708.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image36708.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36709.length)].join('')));

}
});

sablono.core.image36708.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image36708.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image36708.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image36708);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__36716_SHARP_,p2__36717_SHARP_){
return [cljs.core.str(p1__36716_SHARP_),cljs.core.str("["),cljs.core.str(p2__36717_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__36718_SHARP_,p2__36719_SHARP_){
return [cljs.core.str(p1__36718_SHARP_),cljs.core.str("-"),cljs.core.str(p2__36719_SHARP_)].join('');
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
sablono.core.color_field36720 = (function sablono$core$color_field36720(var_args){
var args36721 = [];
var len__19571__auto___36788 = arguments.length;
var i__19572__auto___36789 = (0);
while(true){
if((i__19572__auto___36789 < len__19571__auto___36788)){
args36721.push((arguments[i__19572__auto___36789]));

var G__36790 = (i__19572__auto___36789 + (1));
i__19572__auto___36789 = G__36790;
continue;
} else {
}
break;
}

var G__36723 = args36721.length;
switch (G__36723) {
case 1:
return sablono.core.color_field36720.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field36720.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36721.length)].join('')));

}
});

sablono.core.color_field36720.cljs$core$IFn$_invoke$arity$1 = (function (name__25856__auto__){
return sablono.core.color_field36720.call(null,name__25856__auto__,null);
});

sablono.core.color_field36720.cljs$core$IFn$_invoke$arity$2 = (function (name__25856__auto__,value__25857__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__25856__auto__,value__25857__auto__);
});

sablono.core.color_field36720.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field36720);

/**
 * Creates a date input field.
 */
sablono.core.date_field36724 = (function sablono$core$date_field36724(var_args){
var args36725 = [];
var len__19571__auto___36792 = arguments.length;
var i__19572__auto___36793 = (0);
while(true){
if((i__19572__auto___36793 < len__19571__auto___36792)){
args36725.push((arguments[i__19572__auto___36793]));

var G__36794 = (i__19572__auto___36793 + (1));
i__19572__auto___36793 = G__36794;
continue;
} else {
}
break;
}

var G__36727 = args36725.length;
switch (G__36727) {
case 1:
return sablono.core.date_field36724.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field36724.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36725.length)].join('')));

}
});

sablono.core.date_field36724.cljs$core$IFn$_invoke$arity$1 = (function (name__25856__auto__){
return sablono.core.date_field36724.call(null,name__25856__auto__,null);
});

sablono.core.date_field36724.cljs$core$IFn$_invoke$arity$2 = (function (name__25856__auto__,value__25857__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__25856__auto__,value__25857__auto__);
});

sablono.core.date_field36724.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field36724);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field36728 = (function sablono$core$datetime_field36728(var_args){
var args36729 = [];
var len__19571__auto___36796 = arguments.length;
var i__19572__auto___36797 = (0);
while(true){
if((i__19572__auto___36797 < len__19571__auto___36796)){
args36729.push((arguments[i__19572__auto___36797]));

var G__36798 = (i__19572__auto___36797 + (1));
i__19572__auto___36797 = G__36798;
continue;
} else {
}
break;
}

var G__36731 = args36729.length;
switch (G__36731) {
case 1:
return sablono.core.datetime_field36728.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field36728.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36729.length)].join('')));

}
});

sablono.core.datetime_field36728.cljs$core$IFn$_invoke$arity$1 = (function (name__25856__auto__){
return sablono.core.datetime_field36728.call(null,name__25856__auto__,null);
});

sablono.core.datetime_field36728.cljs$core$IFn$_invoke$arity$2 = (function (name__25856__auto__,value__25857__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__25856__auto__,value__25857__auto__);
});

sablono.core.datetime_field36728.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field36728);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field36732 = (function sablono$core$datetime_local_field36732(var_args){
var args36733 = [];
var len__19571__auto___36800 = arguments.length;
var i__19572__auto___36801 = (0);
while(true){
if((i__19572__auto___36801 < len__19571__auto___36800)){
args36733.push((arguments[i__19572__auto___36801]));

var G__36802 = (i__19572__auto___36801 + (1));
i__19572__auto___36801 = G__36802;
continue;
} else {
}
break;
}

var G__36735 = args36733.length;
switch (G__36735) {
case 1:
return sablono.core.datetime_local_field36732.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field36732.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36733.length)].join('')));

}
});

sablono.core.datetime_local_field36732.cljs$core$IFn$_invoke$arity$1 = (function (name__25856__auto__){
return sablono.core.datetime_local_field36732.call(null,name__25856__auto__,null);
});

sablono.core.datetime_local_field36732.cljs$core$IFn$_invoke$arity$2 = (function (name__25856__auto__,value__25857__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__25856__auto__,value__25857__auto__);
});

sablono.core.datetime_local_field36732.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field36732);

/**
 * Creates a email input field.
 */
sablono.core.email_field36736 = (function sablono$core$email_field36736(var_args){
var args36737 = [];
var len__19571__auto___36804 = arguments.length;
var i__19572__auto___36805 = (0);
while(true){
if((i__19572__auto___36805 < len__19571__auto___36804)){
args36737.push((arguments[i__19572__auto___36805]));

var G__36806 = (i__19572__auto___36805 + (1));
i__19572__auto___36805 = G__36806;
continue;
} else {
}
break;
}

var G__36739 = args36737.length;
switch (G__36739) {
case 1:
return sablono.core.email_field36736.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field36736.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36737.length)].join('')));

}
});

sablono.core.email_field36736.cljs$core$IFn$_invoke$arity$1 = (function (name__25856__auto__){
return sablono.core.email_field36736.call(null,name__25856__auto__,null);
});

sablono.core.email_field36736.cljs$core$IFn$_invoke$arity$2 = (function (name__25856__auto__,value__25857__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__25856__auto__,value__25857__auto__);
});

sablono.core.email_field36736.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field36736);

/**
 * Creates a file input field.
 */
sablono.core.file_field36740 = (function sablono$core$file_field36740(var_args){
var args36741 = [];
var len__19571__auto___36808 = arguments.length;
var i__19572__auto___36809 = (0);
while(true){
if((i__19572__auto___36809 < len__19571__auto___36808)){
args36741.push((arguments[i__19572__auto___36809]));

var G__36810 = (i__19572__auto___36809 + (1));
i__19572__auto___36809 = G__36810;
continue;
} else {
}
break;
}

var G__36743 = args36741.length;
switch (G__36743) {
case 1:
return sablono.core.file_field36740.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field36740.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36741.length)].join('')));

}
});

sablono.core.file_field36740.cljs$core$IFn$_invoke$arity$1 = (function (name__25856__auto__){
return sablono.core.file_field36740.call(null,name__25856__auto__,null);
});

sablono.core.file_field36740.cljs$core$IFn$_invoke$arity$2 = (function (name__25856__auto__,value__25857__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__25856__auto__,value__25857__auto__);
});

sablono.core.file_field36740.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field36740);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field36744 = (function sablono$core$hidden_field36744(var_args){
var args36745 = [];
var len__19571__auto___36812 = arguments.length;
var i__19572__auto___36813 = (0);
while(true){
if((i__19572__auto___36813 < len__19571__auto___36812)){
args36745.push((arguments[i__19572__auto___36813]));

var G__36814 = (i__19572__auto___36813 + (1));
i__19572__auto___36813 = G__36814;
continue;
} else {
}
break;
}

var G__36747 = args36745.length;
switch (G__36747) {
case 1:
return sablono.core.hidden_field36744.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field36744.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36745.length)].join('')));

}
});

sablono.core.hidden_field36744.cljs$core$IFn$_invoke$arity$1 = (function (name__25856__auto__){
return sablono.core.hidden_field36744.call(null,name__25856__auto__,null);
});

sablono.core.hidden_field36744.cljs$core$IFn$_invoke$arity$2 = (function (name__25856__auto__,value__25857__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__25856__auto__,value__25857__auto__);
});

sablono.core.hidden_field36744.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field36744);

/**
 * Creates a month input field.
 */
sablono.core.month_field36748 = (function sablono$core$month_field36748(var_args){
var args36749 = [];
var len__19571__auto___36816 = arguments.length;
var i__19572__auto___36817 = (0);
while(true){
if((i__19572__auto___36817 < len__19571__auto___36816)){
args36749.push((arguments[i__19572__auto___36817]));

var G__36818 = (i__19572__auto___36817 + (1));
i__19572__auto___36817 = G__36818;
continue;
} else {
}
break;
}

var G__36751 = args36749.length;
switch (G__36751) {
case 1:
return sablono.core.month_field36748.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field36748.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36749.length)].join('')));

}
});

sablono.core.month_field36748.cljs$core$IFn$_invoke$arity$1 = (function (name__25856__auto__){
return sablono.core.month_field36748.call(null,name__25856__auto__,null);
});

sablono.core.month_field36748.cljs$core$IFn$_invoke$arity$2 = (function (name__25856__auto__,value__25857__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__25856__auto__,value__25857__auto__);
});

sablono.core.month_field36748.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field36748);

/**
 * Creates a number input field.
 */
sablono.core.number_field36752 = (function sablono$core$number_field36752(var_args){
var args36753 = [];
var len__19571__auto___36820 = arguments.length;
var i__19572__auto___36821 = (0);
while(true){
if((i__19572__auto___36821 < len__19571__auto___36820)){
args36753.push((arguments[i__19572__auto___36821]));

var G__36822 = (i__19572__auto___36821 + (1));
i__19572__auto___36821 = G__36822;
continue;
} else {
}
break;
}

var G__36755 = args36753.length;
switch (G__36755) {
case 1:
return sablono.core.number_field36752.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field36752.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36753.length)].join('')));

}
});

sablono.core.number_field36752.cljs$core$IFn$_invoke$arity$1 = (function (name__25856__auto__){
return sablono.core.number_field36752.call(null,name__25856__auto__,null);
});

sablono.core.number_field36752.cljs$core$IFn$_invoke$arity$2 = (function (name__25856__auto__,value__25857__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__25856__auto__,value__25857__auto__);
});

sablono.core.number_field36752.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field36752);

/**
 * Creates a password input field.
 */
sablono.core.password_field36756 = (function sablono$core$password_field36756(var_args){
var args36757 = [];
var len__19571__auto___36824 = arguments.length;
var i__19572__auto___36825 = (0);
while(true){
if((i__19572__auto___36825 < len__19571__auto___36824)){
args36757.push((arguments[i__19572__auto___36825]));

var G__36826 = (i__19572__auto___36825 + (1));
i__19572__auto___36825 = G__36826;
continue;
} else {
}
break;
}

var G__36759 = args36757.length;
switch (G__36759) {
case 1:
return sablono.core.password_field36756.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field36756.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36757.length)].join('')));

}
});

sablono.core.password_field36756.cljs$core$IFn$_invoke$arity$1 = (function (name__25856__auto__){
return sablono.core.password_field36756.call(null,name__25856__auto__,null);
});

sablono.core.password_field36756.cljs$core$IFn$_invoke$arity$2 = (function (name__25856__auto__,value__25857__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__25856__auto__,value__25857__auto__);
});

sablono.core.password_field36756.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field36756);

/**
 * Creates a range input field.
 */
sablono.core.range_field36760 = (function sablono$core$range_field36760(var_args){
var args36761 = [];
var len__19571__auto___36828 = arguments.length;
var i__19572__auto___36829 = (0);
while(true){
if((i__19572__auto___36829 < len__19571__auto___36828)){
args36761.push((arguments[i__19572__auto___36829]));

var G__36830 = (i__19572__auto___36829 + (1));
i__19572__auto___36829 = G__36830;
continue;
} else {
}
break;
}

var G__36763 = args36761.length;
switch (G__36763) {
case 1:
return sablono.core.range_field36760.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field36760.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36761.length)].join('')));

}
});

sablono.core.range_field36760.cljs$core$IFn$_invoke$arity$1 = (function (name__25856__auto__){
return sablono.core.range_field36760.call(null,name__25856__auto__,null);
});

sablono.core.range_field36760.cljs$core$IFn$_invoke$arity$2 = (function (name__25856__auto__,value__25857__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__25856__auto__,value__25857__auto__);
});

sablono.core.range_field36760.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field36760);

/**
 * Creates a search input field.
 */
sablono.core.search_field36764 = (function sablono$core$search_field36764(var_args){
var args36765 = [];
var len__19571__auto___36832 = arguments.length;
var i__19572__auto___36833 = (0);
while(true){
if((i__19572__auto___36833 < len__19571__auto___36832)){
args36765.push((arguments[i__19572__auto___36833]));

var G__36834 = (i__19572__auto___36833 + (1));
i__19572__auto___36833 = G__36834;
continue;
} else {
}
break;
}

var G__36767 = args36765.length;
switch (G__36767) {
case 1:
return sablono.core.search_field36764.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field36764.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36765.length)].join('')));

}
});

sablono.core.search_field36764.cljs$core$IFn$_invoke$arity$1 = (function (name__25856__auto__){
return sablono.core.search_field36764.call(null,name__25856__auto__,null);
});

sablono.core.search_field36764.cljs$core$IFn$_invoke$arity$2 = (function (name__25856__auto__,value__25857__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__25856__auto__,value__25857__auto__);
});

sablono.core.search_field36764.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field36764);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field36768 = (function sablono$core$tel_field36768(var_args){
var args36769 = [];
var len__19571__auto___36836 = arguments.length;
var i__19572__auto___36837 = (0);
while(true){
if((i__19572__auto___36837 < len__19571__auto___36836)){
args36769.push((arguments[i__19572__auto___36837]));

var G__36838 = (i__19572__auto___36837 + (1));
i__19572__auto___36837 = G__36838;
continue;
} else {
}
break;
}

var G__36771 = args36769.length;
switch (G__36771) {
case 1:
return sablono.core.tel_field36768.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field36768.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36769.length)].join('')));

}
});

sablono.core.tel_field36768.cljs$core$IFn$_invoke$arity$1 = (function (name__25856__auto__){
return sablono.core.tel_field36768.call(null,name__25856__auto__,null);
});

sablono.core.tel_field36768.cljs$core$IFn$_invoke$arity$2 = (function (name__25856__auto__,value__25857__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__25856__auto__,value__25857__auto__);
});

sablono.core.tel_field36768.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field36768);

/**
 * Creates a text input field.
 */
sablono.core.text_field36772 = (function sablono$core$text_field36772(var_args){
var args36773 = [];
var len__19571__auto___36840 = arguments.length;
var i__19572__auto___36841 = (0);
while(true){
if((i__19572__auto___36841 < len__19571__auto___36840)){
args36773.push((arguments[i__19572__auto___36841]));

var G__36842 = (i__19572__auto___36841 + (1));
i__19572__auto___36841 = G__36842;
continue;
} else {
}
break;
}

var G__36775 = args36773.length;
switch (G__36775) {
case 1:
return sablono.core.text_field36772.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field36772.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36773.length)].join('')));

}
});

sablono.core.text_field36772.cljs$core$IFn$_invoke$arity$1 = (function (name__25856__auto__){
return sablono.core.text_field36772.call(null,name__25856__auto__,null);
});

sablono.core.text_field36772.cljs$core$IFn$_invoke$arity$2 = (function (name__25856__auto__,value__25857__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__25856__auto__,value__25857__auto__);
});

sablono.core.text_field36772.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field36772);

/**
 * Creates a time input field.
 */
sablono.core.time_field36776 = (function sablono$core$time_field36776(var_args){
var args36777 = [];
var len__19571__auto___36844 = arguments.length;
var i__19572__auto___36845 = (0);
while(true){
if((i__19572__auto___36845 < len__19571__auto___36844)){
args36777.push((arguments[i__19572__auto___36845]));

var G__36846 = (i__19572__auto___36845 + (1));
i__19572__auto___36845 = G__36846;
continue;
} else {
}
break;
}

var G__36779 = args36777.length;
switch (G__36779) {
case 1:
return sablono.core.time_field36776.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field36776.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36777.length)].join('')));

}
});

sablono.core.time_field36776.cljs$core$IFn$_invoke$arity$1 = (function (name__25856__auto__){
return sablono.core.time_field36776.call(null,name__25856__auto__,null);
});

sablono.core.time_field36776.cljs$core$IFn$_invoke$arity$2 = (function (name__25856__auto__,value__25857__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__25856__auto__,value__25857__auto__);
});

sablono.core.time_field36776.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field36776);

/**
 * Creates a url input field.
 */
sablono.core.url_field36780 = (function sablono$core$url_field36780(var_args){
var args36781 = [];
var len__19571__auto___36848 = arguments.length;
var i__19572__auto___36849 = (0);
while(true){
if((i__19572__auto___36849 < len__19571__auto___36848)){
args36781.push((arguments[i__19572__auto___36849]));

var G__36850 = (i__19572__auto___36849 + (1));
i__19572__auto___36849 = G__36850;
continue;
} else {
}
break;
}

var G__36783 = args36781.length;
switch (G__36783) {
case 1:
return sablono.core.url_field36780.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field36780.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36781.length)].join('')));

}
});

sablono.core.url_field36780.cljs$core$IFn$_invoke$arity$1 = (function (name__25856__auto__){
return sablono.core.url_field36780.call(null,name__25856__auto__,null);
});

sablono.core.url_field36780.cljs$core$IFn$_invoke$arity$2 = (function (name__25856__auto__,value__25857__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__25856__auto__,value__25857__auto__);
});

sablono.core.url_field36780.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field36780);

/**
 * Creates a week input field.
 */
sablono.core.week_field36784 = (function sablono$core$week_field36784(var_args){
var args36785 = [];
var len__19571__auto___36852 = arguments.length;
var i__19572__auto___36853 = (0);
while(true){
if((i__19572__auto___36853 < len__19571__auto___36852)){
args36785.push((arguments[i__19572__auto___36853]));

var G__36854 = (i__19572__auto___36853 + (1));
i__19572__auto___36853 = G__36854;
continue;
} else {
}
break;
}

var G__36787 = args36785.length;
switch (G__36787) {
case 1:
return sablono.core.week_field36784.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field36784.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36785.length)].join('')));

}
});

sablono.core.week_field36784.cljs$core$IFn$_invoke$arity$1 = (function (name__25856__auto__){
return sablono.core.week_field36784.call(null,name__25856__auto__,null);
});

sablono.core.week_field36784.cljs$core$IFn$_invoke$arity$2 = (function (name__25856__auto__,value__25857__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__25856__auto__,value__25857__auto__);
});

sablono.core.week_field36784.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field36784);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box36856 = (function sablono$core$check_box36856(var_args){
var args36857 = [];
var len__19571__auto___36860 = arguments.length;
var i__19572__auto___36861 = (0);
while(true){
if((i__19572__auto___36861 < len__19571__auto___36860)){
args36857.push((arguments[i__19572__auto___36861]));

var G__36862 = (i__19572__auto___36861 + (1));
i__19572__auto___36861 = G__36862;
continue;
} else {
}
break;
}

var G__36859 = args36857.length;
switch (G__36859) {
case 1:
return sablono.core.check_box36856.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box36856.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box36856.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36857.length)].join('')));

}
});

sablono.core.check_box36856.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box36856.call(null,name,null);
});

sablono.core.check_box36856.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box36856.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box36856.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18496__auto__ = value;
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box36856.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box36856);
/**
 * Creates a radio button.
 */
sablono.core.radio_button36864 = (function sablono$core$radio_button36864(var_args){
var args36865 = [];
var len__19571__auto___36868 = arguments.length;
var i__19572__auto___36869 = (0);
while(true){
if((i__19572__auto___36869 < len__19571__auto___36868)){
args36865.push((arguments[i__19572__auto___36869]));

var G__36870 = (i__19572__auto___36869 + (1));
i__19572__auto___36869 = G__36870;
continue;
} else {
}
break;
}

var G__36867 = args36865.length;
switch (G__36867) {
case 1:
return sablono.core.radio_button36864.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button36864.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button36864.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36865.length)].join('')));

}
});

sablono.core.radio_button36864.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button36864.call(null,group,null);
});

sablono.core.radio_button36864.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button36864.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button36864.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18496__auto__ = value;
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button36864.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button36864);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options36872 = (function sablono$core$select_options36872(coll){
var iter__19276__auto__ = (function sablono$core$select_options36872_$_iter__36889(s__36890){
return (new cljs.core.LazySeq(null,(function (){
var s__36890__$1 = s__36890;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36890__$1);
if(temp__4657__auto__){
var s__36890__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36890__$2)){
var c__19274__auto__ = cljs.core.chunk_first.call(null,s__36890__$2);
var size__19275__auto__ = cljs.core.count.call(null,c__19274__auto__);
var b__36892 = cljs.core.chunk_buffer.call(null,size__19275__auto__);
if((function (){var i__36891 = (0);
while(true){
if((i__36891 < size__19275__auto__)){
var x = cljs.core._nth.call(null,c__19274__auto__,i__36891);
cljs.core.chunk_append.call(null,b__36892,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__36899 = x;
var text = cljs.core.nth.call(null,vec__36899,(0),null);
var val = cljs.core.nth.call(null,vec__36899,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__36899,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options36872.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__36905 = (i__36891 + (1));
i__36891 = G__36905;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36892),sablono$core$select_options36872_$_iter__36889.call(null,cljs.core.chunk_rest.call(null,s__36890__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36892),null);
}
} else {
var x = cljs.core.first.call(null,s__36890__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__36902 = x;
var text = cljs.core.nth.call(null,vec__36902,(0),null);
var val = cljs.core.nth.call(null,vec__36902,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__36902,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options36872.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options36872_$_iter__36889.call(null,cljs.core.rest.call(null,s__36890__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options36872);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down36906 = (function sablono$core$drop_down36906(var_args){
var args36907 = [];
var len__19571__auto___36910 = arguments.length;
var i__19572__auto___36911 = (0);
while(true){
if((i__19572__auto___36911 < len__19571__auto___36910)){
args36907.push((arguments[i__19572__auto___36911]));

var G__36912 = (i__19572__auto___36911 + (1));
i__19572__auto___36911 = G__36912;
continue;
} else {
}
break;
}

var G__36909 = args36907.length;
switch (G__36909) {
case 2:
return sablono.core.drop_down36906.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down36906.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36907.length)].join('')));

}
});

sablono.core.drop_down36906.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down36906.call(null,name,options,null);
});

sablono.core.drop_down36906.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down36906.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down36906);
/**
 * Creates a text area element.
 */
sablono.core.text_area36914 = (function sablono$core$text_area36914(var_args){
var args36915 = [];
var len__19571__auto___36918 = arguments.length;
var i__19572__auto___36919 = (0);
while(true){
if((i__19572__auto___36919 < len__19571__auto___36918)){
args36915.push((arguments[i__19572__auto___36919]));

var G__36920 = (i__19572__auto___36919 + (1));
i__19572__auto___36919 = G__36920;
continue;
} else {
}
break;
}

var G__36917 = args36915.length;
switch (G__36917) {
case 1:
return sablono.core.text_area36914.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area36914.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36915.length)].join('')));

}
});

sablono.core.text_area36914.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area36914.call(null,name,null);
});

sablono.core.text_area36914.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18496__auto__ = value;
if(cljs.core.truth_(or__18496__auto__)){
return or__18496__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area36914.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area36914);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label36922 = (function sablono$core$label36922(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label36922);
/**
 * Creates a submit button.
 */
sablono.core.submit_button36923 = (function sablono$core$submit_button36923(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button36923);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button36924 = (function sablono$core$reset_button36924(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button36924);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to36925 = (function sablono$core$form_to36925(var_args){
var args__19578__auto__ = [];
var len__19571__auto___36932 = arguments.length;
var i__19572__auto___36933 = (0);
while(true){
if((i__19572__auto___36933 < len__19571__auto___36932)){
args__19578__auto__.push((arguments[i__19572__auto___36933]));

var G__36934 = (i__19572__auto___36933 + (1));
i__19572__auto___36933 = G__36934;
continue;
} else {
}
break;
}

var argseq__19579__auto__ = ((((1) < args__19578__auto__.length))?(new cljs.core.IndexedSeq(args__19578__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to36925.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19579__auto__);
});

sablono.core.form_to36925.cljs$core$IFn$_invoke$arity$variadic = (function (p__36928,body){
var vec__36929 = p__36928;
var method = cljs.core.nth.call(null,vec__36929,(0),null);
var action = cljs.core.nth.call(null,vec__36929,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to36925.cljs$lang$maxFixedArity = (1);

sablono.core.form_to36925.cljs$lang$applyTo = (function (seq36926){
var G__36927 = cljs.core.first.call(null,seq36926);
var seq36926__$1 = cljs.core.next.call(null,seq36926);
return sablono.core.form_to36925.cljs$core$IFn$_invoke$arity$variadic(G__36927,seq36926__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to36925);

//# sourceMappingURL=core.js.map?rel=1466621244065