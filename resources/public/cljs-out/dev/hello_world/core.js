// Compiled by ClojureScript 1.10.520 {}
goog.provide('hello_world.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('re_frame.core');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('reagent.dom');
cljs.core.enable_console_print_BANG_.call(null);
hello_world.core.dispatch_user_inputs = (function hello_world$core$dispatch_user_inputs(inputs){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-user-inputs","handle-user-inputs",-1701394960),inputs], null));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (db,_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"center-letter","center-letter",-508520799),new cljs.core.Keyword(null,"characters-order","characters-order",-1165593144),new cljs.core.Keyword(null,"rank","rank",-1706728502),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"user-words","user-words",952085142),new cljs.core.Keyword(null,"user-inputs","user-inputs",-1244580391),new cljs.core.Keyword(null,"word-list","word-list",-230183462),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"surrounding-letter","surrounding-letter",739605151)],["I",new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","L","K","Y","N","R","W"], null),"Beginner",(0),cljs.core.PersistentHashSet.EMPTY,"",new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["LILY","ILLY","WRINKLY","WILL","NINNY","KINKILY","KINKY","LINK","KRILL","KILL"], null),"",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["L","K","Y","N","R","W"], null)]);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"handle-user-inputs","handle-user-inputs",-1701394960),(function (db,p__43028){
var vec__43029 = p__43028;
var _ = cljs.core.nth.call(null,vec__43029,(0),null);
var new_user_inputs = cljs.core.nth.call(null,vec__43029,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"user-inputs","user-inputs",-1244580391),new_user_inputs);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"shuffle","shuffle",1261412160),(function (db,p__43032){
var vec__43033 = p__43032;
var _ = cljs.core.nth.call(null,vec__43033,(0),null);
var new_character_spots = cljs.core.nth.call(null,vec__43033,(1),null);
var new_surroundings = cljs.core.shuffle.call(null,new cljs.core.Keyword(null,"surrounding-letter","surrounding-letter",739605151).cljs$core$IFn$_invoke$arity$1(db));
var new_order = cljs.core.concat.call(null,new cljs.core.Keyword(null,"center-letter","center-letter",-508520799).cljs$core$IFn$_invoke$arity$1(db),new_surroundings);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"characters-order","characters-order",-1165593144),new_order);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-message","add-message",734495936),(function (db,p__43036){
var vec__43037 = p__43036;
var _ = cljs.core.nth.call(null,vec__43037,(0),null);
var new_message = cljs.core.nth.call(null,vec__43037,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"message","message",-406056002),new_message);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"clear-user-inputs","clear-user-inputs",-792533452),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"user-inputs","user-inputs",-1244580391),"");
}));
hello_world.core.pangrams_QMARK_ = (function hello_world$core$pangrams_QMARK_(word){
return cljs.core._EQ_.call(null,(7),cljs.core.count.call(null,cljs.core.frequencies.call(null,word)));
});
hello_world.core.calculate_points = (function hello_world$core$calculate_points(word){
if(cljs.core._EQ_.call(null,(4),cljs.core.count.call(null,word))){
return (1);
} else {
if(hello_world.core.pangrams_QMARK_.call(null,word)){
return (cljs.core.count.call(null,word) + (7));
} else {
return cljs.core.count.call(null,word);
}
}
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-points","update-points",-1972051853),(function (db,p__43040){
var vec__43041 = p__43040;
var _ = cljs.core.nth.call(null,vec__43041,(0),null);
var points = cljs.core.nth.call(null,vec__43041,(1),null);
var current_points = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"points","points",-1486596883),(points + current_points));
}));
hello_world.core.compute_rank = (function hello_world$core$compute_rank(points){
if((((points >= (1))) && ((points < (3))))){
return "Good Start";
} else {
if(cljs.core._EQ_.call(null,points,(3))){
return "Moving up";
} else {
if((((points >= (4))) && ((points < (8))))){
return "Good";
} else {
if((((points >= (8))) && ((points < (13))))){
return "Nice";
} else {
if((((points >= (13))) && ((points < (21))))){
return "Great";
} else {
if((((points >= (21))) && ((points < (26))))){
return "Amazing";
} else {
return "Genius";

}
}
}
}
}
}
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-rank","update-rank",-1278960425),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"rank","rank",-1706728502),hello_world.core.compute_rank.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(db)));
}));
hello_world.core.too_short_QMARK_ = (function hello_world$core$too_short_QMARK_(word){
return (cljs.core.count.call(null,word) < (4));
});
hello_world.core.bad_letters_QMARK_ = (function hello_world$core$bad_letters_QMARK_(word,letters){
return cljs.core.contains_QMARK_.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,(function (){var iter__4523__auto__ = (function hello_world$core$bad_letters_QMARK__$_iter__43044(s__43045){
return (new cljs.core.LazySeq(null,(function (){
var s__43045__$1 = s__43045;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43045__$1);
if(temp__5457__auto__){
var s__43045__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43045__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__43045__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__43047 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__43046 = (0);
while(true){
if((i__43046 < size__4522__auto__)){
var w = cljs.core._nth.call(null,c__4521__auto__,i__43046);
cljs.core.chunk_append.call(null,b__43047,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([w]),letters));

var G__43048 = (i__43046 + (1));
i__43046 = G__43048;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43047),hello_world$core$bad_letters_QMARK__$_iter__43044.call(null,cljs.core.chunk_rest.call(null,s__43045__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43047),null);
}
} else {
var w = cljs.core.first.call(null,s__43045__$2);
return cljs.core.cons.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([w]),letters),hello_world$core$bad_letters_QMARK__$_iter__43044.call(null,cljs.core.rest.call(null,s__43045__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,word);
})()),null);
});
hello_world.core.missing_center_QMARK_ = (function hello_world$core$missing_center_QMARK_(word,center_letter){
return (!(clojure.string.includes_QMARK_.call(null,word,center_letter)));
});
hello_world.core.in_word_list_QMARK_ = (function hello_world$core$in_word_list_QMARK_(word,word_list){
return (cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([word]),word_list) == null);
});
hello_world.core.found_QMARK_ = (function hello_world$core$found_QMARK_(word,user_words){
return cljs.core.not_EQ_.call(null,null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([word]),user_words));
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"handle-word","handle-word",-1543720240),(function (p__43049,p__43050){
var map__43051 = p__43049;
var map__43051__$1 = (((((!((map__43051 == null))))?(((((map__43051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43051):map__43051);
var db = cljs.core.get.call(null,map__43051__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43052 = p__43050;
var _ = cljs.core.nth.call(null,vec__43052,(0),null);
var input = cljs.core.nth.call(null,vec__43052,(1),null);
var word = clojure.string.upper_case.call(null,input);
if(cljs.core._EQ_.call(null,"",word)){
return null;
} else {
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-user-inputs","clear-user-inputs",-792533452)], null));

if(hello_world.core.too_short_QMARK_.call(null,word)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-message","add-message",734495936),"Too Short"], null)], null);
} else {
if(hello_world.core.bad_letters_QMARK_.call(null,word,new cljs.core.Keyword(null,"characters-order","characters-order",-1165593144).cljs$core$IFn$_invoke$arity$1(db))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-message","add-message",734495936),"Bad letters"], null)], null);
} else {
if(hello_world.core.missing_center_QMARK_.call(null,word,new cljs.core.Keyword(null,"center-letter","center-letter",-508520799).cljs$core$IFn$_invoke$arity$1(db))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-message","add-message",734495936),"Missing center letter"], null)], null);
} else {
if(hello_world.core.in_word_list_QMARK_.call(null,word,new cljs.core.Keyword(null,"word-list","word-list",-230183462).cljs$core$IFn$_invoke$arity$1(db))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-message","add-message",734495936),"Not in word list"], null)], null);
} else {
if(cljs.core.not_EQ_.call(null,null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([word]),new cljs.core.Keyword(null,"user-words","user-words",952085142).cljs$core$IFn$_invoke$arity$1(db)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-message","add-message",734495936),"Already found"], null)], null);
} else {
var current_points = hello_world.core.calculate_points.call(null,word);
var message = ((hello_world.core.pangrams_QMARK_.call(null,word))?"Pangrams! +":"Good! +");
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-points","update-points",-1972051853),current_points], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-rank","update-rank",-1278960425)], null));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"user-words","user-words",952085142),cljs.core.conj.call(null,new cljs.core.Keyword(null,"user-words","user-words",952085142).cljs$core$IFn$_invoke$arity$1(db),word)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-message","add-message",734495936),[message,cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_points)].join('')], null)], null);

}
}
}
}
}
}
}));
hello_world.core.handle_keypress = (function hello_world$core$handle_keypress(key){
if(cljs.core._EQ_.call(null,(13),key)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-word","handle-word",-1543720240),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-inputs","user-inputs",-1244580391)], null)))], null));
} else {
return null;
}
});
hello_world.core.clicked_character_button = (function hello_world$core$clicked_character_button(char$){
var current_inputs = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-inputs","user-inputs",-1244580391)], null)));
var new_inputs = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_inputs),cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)].join('');
return hello_world.core.dispatch_user_inputs.call(null,new_inputs);
});
hello_world.core.drop_last_character = (function hello_world$core$drop_last_character(){
var current_inputs = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-inputs","user-inputs",-1244580391)], null)));
var new_inputs = cljs.core.apply.call(null,cljs.core.str,cljs.core.drop_last.call(null,current_inputs));
return hello_world.core.dispatch_user_inputs.call(null,new_inputs);
});
hello_world.core.create_character_button = (function hello_world$core$create_character_button(character,button_class){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),button_class,new cljs.core.Keyword(null,"value","value",305978217),character,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return hello_world.core.clicked_character_button.call(null,character);
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),character], null));
});
hello_world.core.show_character_buttons = (function hello_world$core$show_character_buttons(characters){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4523__auto__ = (function hello_world$core$show_character_buttons_$_iter__43056(s__43057){
return (new cljs.core.LazySeq(null,(function (){
var s__43057__$1 = s__43057;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43057__$1);
if(temp__5457__auto__){
var s__43057__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43057__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__43057__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__43059 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__43058 = (0);
while(true){
if((i__43058 < size__4522__auto__)){
var c = cljs.core._nth.call(null,c__4521__auto__,i__43058);
cljs.core.chunk_append.call(null,b__43059,hello_world.core.create_character_button.call(null,c,"letterButton"));

var G__43068 = (i__43058 + (1));
i__43058 = G__43068;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43059),hello_world$core$show_character_buttons_$_iter__43056.call(null,cljs.core.chunk_rest.call(null,s__43057__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43059),null);
}
} else {
var c = cljs.core.first.call(null,s__43057__$2);
return cljs.core.cons.call(null,hello_world.core.create_character_button.call(null,c,"letterButton"),hello_world$core$show_character_buttons_$_iter__43056.call(null,cljs.core.rest.call(null,s__43057__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.subvec.call(null,cljs.core.vec.call(null,characters),(1),(4)));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4523__auto__ = (function hello_world$core$show_character_buttons_$_iter__43060(s__43061){
return (new cljs.core.LazySeq(null,(function (){
var s__43061__$1 = s__43061;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43061__$1);
if(temp__5457__auto__){
var s__43061__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43061__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__43061__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__43063 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__43062 = (0);
while(true){
if((i__43062 < size__4522__auto__)){
var c = cljs.core._nth.call(null,c__4521__auto__,i__43062);
cljs.core.chunk_append.call(null,b__43063,hello_world.core.create_character_button.call(null,c,"centerButton letterButton"));

var G__43069 = (i__43062 + (1));
i__43062 = G__43069;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43063),hello_world$core$show_character_buttons_$_iter__43060.call(null,cljs.core.chunk_rest.call(null,s__43061__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43063),null);
}
} else {
var c = cljs.core.first.call(null,s__43061__$2);
return cljs.core.cons.call(null,hello_world.core.create_character_button.call(null,c,"centerButton letterButton"),hello_world$core$show_character_buttons_$_iter__43060.call(null,cljs.core.rest.call(null,s__43061__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.subvec.call(null,cljs.core.vec.call(null,characters),(0),(1)));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4523__auto__ = (function hello_world$core$show_character_buttons_$_iter__43064(s__43065){
return (new cljs.core.LazySeq(null,(function (){
var s__43065__$1 = s__43065;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43065__$1);
if(temp__5457__auto__){
var s__43065__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43065__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__43065__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__43067 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__43066 = (0);
while(true){
if((i__43066 < size__4522__auto__)){
var c = cljs.core._nth.call(null,c__4521__auto__,i__43066);
cljs.core.chunk_append.call(null,b__43067,hello_world.core.create_character_button.call(null,c,"letterButton"));

var G__43070 = (i__43066 + (1));
i__43066 = G__43070;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43067),hello_world$core$show_character_buttons_$_iter__43064.call(null,cljs.core.chunk_rest.call(null,s__43065__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43067),null);
}
} else {
var c = cljs.core.first.call(null,s__43065__$2);
return cljs.core.cons.call(null,hello_world.core.create_character_button.call(null,c,"letterButton"),hello_world$core$show_character_buttons_$_iter__43064.call(null,cljs.core.rest.call(null,s__43065__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.subvec.call(null,cljs.core.vec.call(null,characters),(4)));
})()], null)], null);
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"user-inputs","user-inputs",-1244580391),(function (db,_){
return new cljs.core.Keyword(null,"user-inputs","user-inputs",-1244580391).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"characters-order","characters-order",-1165593144),(function (db,_){
return new cljs.core.Keyword(null,"characters-order","characters-order",-1165593144).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),(function (db,_){
return new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"message","message",-406056002),(function (db,_){
return new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"rank","rank",-1706728502),(function (db,_){
return new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"user-words","user-words",952085142),(function (db,_){
return new cljs.core.Keyword(null,"user-words","user-words",952085142).cljs$core$IFn$_invoke$arity$1(db);
}));
hello_world.core.show_message = (function hello_world$core$show_message(db_message){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),db_message], null);
});
hello_world.core.user_input = (function hello_world$core$user_input(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),"uppercase"], null),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"textInput",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Start spelling!",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-inputs","user-inputs",-1244580391)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__43071_SHARP_){
return hello_world.core.dispatch_user_inputs.call(null,p1__43071_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),(function (e){
return hello_world.core.handle_keypress.call(null,e.charCode);
})], null)], null);
});
hello_world.core.delete_button = (function hello_world$core$delete_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"actionButton",new cljs.core.Keyword(null,"value","value",305978217),"Delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return hello_world.core.drop_last_character.call(null);
})], null)], null);
});
hello_world.core.shuffle_button = (function hello_world$core$shuffle_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"actionButton",new cljs.core.Keyword(null,"value","value",305978217),"Shuffle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shuffle","shuffle",1261412160)], null));
})], null)], null);
});
hello_world.core.enter_button = (function hello_world$core$enter_button(db_user_inputs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"actionButton",new cljs.core.Keyword(null,"value","value",305978217),"Enter",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-word","handle-word",-1543720240),db_user_inputs], null));
})], null)], null);
});
hello_world.core.show_rank_points = (function hello_world$core$show_rank_points(db_rank,db_points){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),db_rank," ",db_points], null);
});
hello_world.core.show_slider = (function hello_world$core$show_slider(db_points){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(30),new cljs.core.Keyword(null,"value","value",305978217),db_points], null)], null);
});
hello_world.core.list_words = (function hello_world$core$list_words(db_user_words){
var words = cljs.core.apply.call(null,cljs.core.sorted_set,db_user_words);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"You have found ",cljs.core.count.call(null,words)," words",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none"], null)], null),(function (){var iter__4523__auto__ = ((function (words){
return (function hello_world$core$list_words_$_iter__43072(s__43073){
return (new cljs.core.LazySeq(null,((function (words){
return (function (){
var s__43073__$1 = s__43073;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43073__$1);
if(temp__5457__auto__){
var s__43073__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43073__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__43073__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__43075 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__43074 = (0);
while(true){
if((i__43074 < size__4522__auto__)){
var w = cljs.core._nth.call(null,c__4521__auto__,i__43074);
cljs.core.chunk_append.call(null,b__43075,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),w], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),w], null)));

var G__43076 = (i__43074 + (1));
i__43074 = G__43076;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43075),hello_world$core$list_words_$_iter__43072.call(null,cljs.core.chunk_rest.call(null,s__43073__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43075),null);
}
} else {
var w = cljs.core.first.call(null,s__43073__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),w], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),w], null)),hello_world$core$list_words_$_iter__43072.call(null,cljs.core.rest.call(null,s__43073__$2)));
}
} else {
return null;
}
break;
}
});})(words))
,null,null));
});})(words))
;
return iter__4523__auto__.call(null,words);
})()], null)], null)], null);
});
hello_world.core.spelling_bee = (function hello_world$core$spelling_bee(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center>div","center>div",1630078958),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center>h1","center>h1",-1352005293),"Spelling Bee"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.show_message,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.user_input], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.show_character_buttons,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"characters-order","characters-order",-1165593144)], null)))], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.delete_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.shuffle_button], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.enter_button,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-inputs","user-inputs",-1244580391)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.show_rank_points,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rank","rank",-1706728502)], null))),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.show_slider,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.list_words,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-words","user-words",952085142)], null)))], null)], null)], null);
});
hello_world.core.mount = (function hello_world$core$mount(el){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.spelling_bee], null),el);
});
hello_world.core.get_app_element = (function hello_world$core$get_app_element(){
return goog.dom.getElement("app");
});
hello_world.core.mount_app_element = (function hello_world$core$mount_app_element(){
var temp__5457__auto__ = hello_world.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return hello_world.core.mount.call(null,el);
} else {
return null;
}
});
hello_world.core.mount_app_element.call(null);
hello_world.core.on_reload = (function hello_world$core$on_reload(){
return hello_world.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
