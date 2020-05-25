// Compiled by ClojureScript 1.10.520 {}
goog.provide('hello_world.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('re_frame.core');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('reagent.dom');
cljs.core.enable_console_print_BANG_.call(null);
hello_world.core.center_letter = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I"], null);
hello_world.core.surrounding_letter = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["L","K","Y","N","R","W"], null);
hello_world.core.letters = cljs.core.concat.call(null,hello_world.core.center_letter,hello_world.core.surrounding_letter);
hello_world.core.word_list = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ILLY","KILL","WRINKLY","WILL","NINNY","KINKILY","KINKY","LILY","LINK","KRILL"], null);
hello_world.core.dispatch_user_inputs = (function hello_world$core$dispatch_user_inputs(inputs){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spelling","spelling",155602590),inputs], null));
});
hello_world.core.dispatch_characters_order = (function hello_world$core$dispatch_characters_order(order){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shuffle","shuffle",1261412160),order], null));
});
hello_world.core.dispatch_points = (function hello_world$core$dispatch_points(points){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-points","add-points",-85865654),points], null));
});
hello_world.core.dispatch_message = (function hello_world$core$dispatch_message(message){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-message","add-message",734495936),message], null));
});
hello_world.core.dispatch_rank = (function hello_world$core$dispatch_rank(rank){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-rank","update-rank",-1278960425),rank], null));
});
hello_world.core.dispatch_words = (function hello_world$core$dispatch_words(word){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-word","add-word",517209308),word], null));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"user-inputs","user-inputs",-1244580391),"",new cljs.core.Keyword(null,"characters-order","characters-order",-1165593144),hello_world.core.letters,new cljs.core.Keyword(null,"points","points",-1486596883),(0),new cljs.core.Keyword(null,"message","message",-406056002),"",new cljs.core.Keyword(null,"rank","rank",-1706728502),"Beginner",new cljs.core.Keyword(null,"user-words","user-words",952085142),cljs.core.PersistentHashSet.EMPTY], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"spelling","spelling",155602590),(function (db,p__28585){
var vec__28586 = p__28585;
var _ = cljs.core.nth.call(null,vec__28586,(0),null);
var new_user_inputs = cljs.core.nth.call(null,vec__28586,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"user-inputs","user-inputs",-1244580391),new_user_inputs);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"shuffle","shuffle",1261412160),(function (db,p__28589){
var vec__28590 = p__28589;
var _ = cljs.core.nth.call(null,vec__28590,(0),null);
var new_character_spots = cljs.core.nth.call(null,vec__28590,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"characters-order","characters-order",-1165593144),new_character_spots);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-points","add-points",-85865654),(function (db,p__28593){
var vec__28594 = p__28593;
var _ = cljs.core.nth.call(null,vec__28594,(0),null);
var new_points = cljs.core.nth.call(null,vec__28594,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"points","points",-1486596883),new_points);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-message","add-message",734495936),(function (db,p__28597){
var vec__28598 = p__28597;
var _ = cljs.core.nth.call(null,vec__28598,(0),null);
var new_message = cljs.core.nth.call(null,vec__28598,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"message","message",-406056002),new_message);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-rank","update-rank",-1278960425),(function (db,p__28601){
var vec__28602 = p__28601;
var _ = cljs.core.nth.call(null,vec__28602,(0),null);
var new_rank = cljs.core.nth.call(null,vec__28602,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"rank","rank",-1706728502),new_rank);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-word","add-word",517209308),(function (db,p__28605){
var vec__28606 = p__28605;
var _ = cljs.core.nth.call(null,vec__28606,(0),null);
var new_word = cljs.core.nth.call(null,vec__28606,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"user-words","user-words",952085142),new_word);
}));
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
hello_world.core.too_short_QMARK_ = (function hello_world$core$too_short_QMARK_(word){
return (cljs.core.count.call(null,word) < (4));
});
hello_world.core.bad_letters_QMARK_ = (function hello_world$core$bad_letters_QMARK_(word){
return cljs.core.contains_QMARK_.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,(function (){var iter__4523__auto__ = (function hello_world$core$bad_letters_QMARK__$_iter__28609(s__28610){
return (new cljs.core.LazySeq(null,(function (){
var s__28610__$1 = s__28610;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__28610__$1);
if(temp__5457__auto__){
var s__28610__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28610__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__28610__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__28612 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__28611 = (0);
while(true){
if((i__28611 < size__4522__auto__)){
var w = cljs.core._nth.call(null,c__4521__auto__,i__28611);
cljs.core.chunk_append.call(null,b__28612,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([w]),hello_world.core.letters));

var G__28613 = (i__28611 + (1));
i__28611 = G__28613;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28612),hello_world$core$bad_letters_QMARK__$_iter__28609.call(null,cljs.core.chunk_rest.call(null,s__28610__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28612),null);
}
} else {
var w = cljs.core.first.call(null,s__28610__$2);
return cljs.core.cons.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([w]),hello_world.core.letters),hello_world$core$bad_letters_QMARK__$_iter__28609.call(null,cljs.core.rest.call(null,s__28610__$2)));
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
hello_world.core.missing_center_QMARK_ = (function hello_world$core$missing_center_QMARK_(word){
return (!(clojure.string.includes_QMARK_.call(null,word,"I")));
});
hello_world.core.in_word_list_QMARK_ = (function hello_world$core$in_word_list_QMARK_(word){
return (cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([word]),hello_world.core.word_list) == null);
});
hello_world.core.do_shuffle = (function hello_world$core$do_shuffle(){
var new_surroundings = cljs.core.shuffle.call(null,hello_world.core.surrounding_letter);
var new_order = cljs.core.concat.call(null,hello_world.core.center_letter,new_surroundings);
return hello_world.core.dispatch_characters_order.call(null,new_order);
});
hello_world.core.calculate_points = (function hello_world$core$calculate_points(word,points){
if(cljs.core._EQ_.call(null,(4),cljs.core.count.call(null,word))){
return ((1) + points);
} else {
return (cljs.core.count.call(null,word) + points);
}
});
hello_world.core.update_rank = (function hello_world$core$update_rank(points){
if((((points >= (1))) && ((points < (3))))){
return hello_world.core.dispatch_rank.call(null,"Good Start");
} else {
if(cljs.core._EQ_.call(null,points,(3))){
return hello_world.core.dispatch_rank.call(null,"Moving up");
} else {
if((((points >= (4))) && ((points < (8))))){
return hello_world.core.dispatch_rank.call(null,"Good");
} else {
if((((points >= (8))) && ((points < (13))))){
return hello_world.core.dispatch_rank.call(null,"Nice");
} else {
if((((points >= (13))) && ((points < (21))))){
return hello_world.core.dispatch_rank.call(null,"Great");
} else {
if((((points >= (21))) && ((points < (26))))){
return hello_world.core.dispatch_rank.call(null,"Amazing");
} else {
return hello_world.core.dispatch_rank.call(null,"Genius");

}
}
}
}
}
}
});
hello_world.core.pangrams_QMARK_ = (function hello_world$core$pangrams_QMARK_(word){
return cljs.core._EQ_.call(null,(7),cljs.core.count.call(null,cljs.core.frequencies.call(null,word)));
});
hello_world.core.validate_letter = (function hello_world$core$validate_letter(){
var new_word = clojure.string.upper_case.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-inputs","user-inputs",-1244580391)], null))));
if(cljs.core.not_EQ_.call(null,"",new_word)){
hello_world.core.dispatch_user_inputs.call(null,"");

if(hello_world.core.too_short_QMARK_.call(null,new_word)){
return hello_world.core.dispatch_message.call(null,"Too short");
} else {
if(hello_world.core.bad_letters_QMARK_.call(null,new_word)){
return hello_world.core.dispatch_message.call(null,"Bad lettes");
} else {
if(hello_world.core.missing_center_QMARK_.call(null,new_word)){
return hello_world.core.dispatch_message.call(null,"Missing center letter");
} else {
if(hello_world.core.in_word_list_QMARK_.call(null,new_word)){
return hello_world.core.dispatch_message.call(null,"Not in word list");
} else {
var words = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-words","user-words",952085142)], null)));
var new_words_list = cljs.core.conj.call(null,words,new_word);
var points = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null)));
var new_points = hello_world.core.calculate_points.call(null,new_word,points);
if(hello_world.core.pangrams_QMARK_.call(null,new_word)){
hello_world.core.dispatch_message.call(null,["Pangrams! +",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_points)].join(''));
} else {
hello_world.core.dispatch_message.call(null,["Good! + ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_points)].join(''));
}

hello_world.core.update_rank.call(null,new_points);

hello_world.core.dispatch_points.call(null,new_points);

return hello_world.core.dispatch_words.call(null,new_words_list);

}
}
}
}
} else {
return null;
}
});
hello_world.core.hit_return_QMARK_ = (function hello_world$core$hit_return_QMARK_(key){
if(cljs.core._EQ_.call(null,(13),key)){
return hello_world.core.validate_letter.call(null);
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
hello_world.core.show_message = (function hello_world$core$show_message(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002)], null)))], null);
});
hello_world.core.user_input = (function hello_world$core$user_input(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),"uppercase"], null),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"textInput",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Start spelling!",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-inputs","user-inputs",-1244580391)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__28614_SHARP_){
return hello_world.core.dispatch_user_inputs.call(null,p1__28614_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),(function (e){
return hello_world.core.hit_return_QMARK_.call(null,e.charCode);
})], null)], null);
});
hello_world.core.show_characters = (function hello_world$core$show_characters(){
var characters = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"characters-order","characters-order",-1165593144)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4523__auto__ = ((function (characters){
return (function hello_world$core$show_characters_$_iter__28615(s__28616){
return (new cljs.core.LazySeq(null,((function (characters){
return (function (){
var s__28616__$1 = s__28616;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__28616__$1);
if(temp__5457__auto__){
var s__28616__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28616__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__28616__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__28618 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__28617 = (0);
while(true){
if((i__28617 < size__4522__auto__)){
var c = cljs.core._nth.call(null,c__4521__auto__,i__28617);
cljs.core.chunk_append.call(null,b__28618,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"letterButton",new cljs.core.Keyword(null,"value","value",305978217),c,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__28617,c,c__4521__auto__,size__4522__auto__,b__28618,s__28616__$2,temp__5457__auto__,characters){
return (function (){
return hello_world.core.clicked_character_button.call(null,c);
});})(i__28617,c,c__4521__auto__,size__4522__auto__,b__28618,s__28616__$2,temp__5457__auto__,characters))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null)));

var G__28627 = (i__28617 + (1));
i__28617 = G__28627;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28618),hello_world$core$show_characters_$_iter__28615.call(null,cljs.core.chunk_rest.call(null,s__28616__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28618),null);
}
} else {
var c = cljs.core.first.call(null,s__28616__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"letterButton",new cljs.core.Keyword(null,"value","value",305978217),c,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (c,s__28616__$2,temp__5457__auto__,characters){
return (function (){
return hello_world.core.clicked_character_button.call(null,c);
});})(c,s__28616__$2,temp__5457__auto__,characters))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null)),hello_world$core$show_characters_$_iter__28615.call(null,cljs.core.rest.call(null,s__28616__$2)));
}
} else {
return null;
}
break;
}
});})(characters))
,null,null));
});})(characters))
;
return iter__4523__auto__.call(null,cljs.core.subvec.call(null,cljs.core.vec.call(null,characters),(1),(4)));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4523__auto__ = ((function (characters){
return (function hello_world$core$show_characters_$_iter__28619(s__28620){
return (new cljs.core.LazySeq(null,((function (characters){
return (function (){
var s__28620__$1 = s__28620;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__28620__$1);
if(temp__5457__auto__){
var s__28620__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28620__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__28620__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__28622 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__28621 = (0);
while(true){
if((i__28621 < size__4522__auto__)){
var c = cljs.core._nth.call(null,c__4521__auto__,i__28621);
cljs.core.chunk_append.call(null,b__28622,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"centerButton letterButton",new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"value","value",305978217),c,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__28621,c,c__4521__auto__,size__4522__auto__,b__28622,s__28620__$2,temp__5457__auto__,characters){
return (function (){
return hello_world.core.clicked_character_button.call(null,c);
});})(i__28621,c,c__4521__auto__,size__4522__auto__,b__28622,s__28620__$2,temp__5457__auto__,characters))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null)));

var G__28628 = (i__28621 + (1));
i__28621 = G__28628;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28622),hello_world$core$show_characters_$_iter__28619.call(null,cljs.core.chunk_rest.call(null,s__28620__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28622),null);
}
} else {
var c = cljs.core.first.call(null,s__28620__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"centerButton letterButton",new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"value","value",305978217),c,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (c,s__28620__$2,temp__5457__auto__,characters){
return (function (){
return hello_world.core.clicked_character_button.call(null,c);
});})(c,s__28620__$2,temp__5457__auto__,characters))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null)),hello_world$core$show_characters_$_iter__28619.call(null,cljs.core.rest.call(null,s__28620__$2)));
}
} else {
return null;
}
break;
}
});})(characters))
,null,null));
});})(characters))
;
return iter__4523__auto__.call(null,cljs.core.subvec.call(null,cljs.core.vec.call(null,characters),(0),(1)));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4523__auto__ = ((function (characters){
return (function hello_world$core$show_characters_$_iter__28623(s__28624){
return (new cljs.core.LazySeq(null,((function (characters){
return (function (){
var s__28624__$1 = s__28624;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__28624__$1);
if(temp__5457__auto__){
var s__28624__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28624__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__28624__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__28626 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__28625 = (0);
while(true){
if((i__28625 < size__4522__auto__)){
var c = cljs.core._nth.call(null,c__4521__auto__,i__28625);
cljs.core.chunk_append.call(null,b__28626,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"letterButton",new cljs.core.Keyword(null,"value","value",305978217),c,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__28625,c,c__4521__auto__,size__4522__auto__,b__28626,s__28624__$2,temp__5457__auto__,characters){
return (function (){
return hello_world.core.clicked_character_button.call(null,c);
});})(i__28625,c,c__4521__auto__,size__4522__auto__,b__28626,s__28624__$2,temp__5457__auto__,characters))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null)));

var G__28629 = (i__28625 + (1));
i__28625 = G__28629;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28626),hello_world$core$show_characters_$_iter__28623.call(null,cljs.core.chunk_rest.call(null,s__28624__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28626),null);
}
} else {
var c = cljs.core.first.call(null,s__28624__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"letterButton",new cljs.core.Keyword(null,"value","value",305978217),c,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (c,s__28624__$2,temp__5457__auto__,characters){
return (function (){
return hello_world.core.clicked_character_button.call(null,c);
});})(c,s__28624__$2,temp__5457__auto__,characters))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null)),hello_world$core$show_characters_$_iter__28623.call(null,cljs.core.rest.call(null,s__28624__$2)));
}
} else {
return null;
}
break;
}
});})(characters))
,null,null));
});})(characters))
;
return iter__4523__auto__.call(null,cljs.core.subvec.call(null,cljs.core.vec.call(null,characters),(4)));
})()], null)], null);
});
hello_world.core.delete_button = (function hello_world$core$delete_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"actionButton",new cljs.core.Keyword(null,"value","value",305978217),"Delete",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return hello_world.core.drop_last_character.call(null);
})], null)], null);
});
hello_world.core.shuffle_button = (function hello_world$core$shuffle_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"actionButton",new cljs.core.Keyword(null,"value","value",305978217),"Shuffle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return hello_world.core.do_shuffle.call(null);
})], null)], null);
});
hello_world.core.enter_button = (function hello_world$core$enter_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"actionButton",new cljs.core.Keyword(null,"value","value",305978217),"Enter",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return hello_world.core.validate_letter.call(null);
})], null)], null);
});
hello_world.core.show_points = (function hello_world$core$show_points(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rank","rank",-1706728502)], null)))," ",cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null)))], null);
});
hello_world.core.slider = (function hello_world$core$slider(){
cljs.core.println.call(null,"Points: ",cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null))));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(30),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null)))], null)], null);
});
hello_world.core.list_words = (function hello_world$core$list_words(){
var words = cljs.core.apply.call(null,cljs.core.sorted_set,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-words","user-words",952085142)], null))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"You have found ",cljs.core.count.call(null,words)," words",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none"], null)], null),(function (){var iter__4523__auto__ = ((function (words){
return (function hello_world$core$list_words_$_iter__28630(s__28631){
return (new cljs.core.LazySeq(null,((function (words){
return (function (){
var s__28631__$1 = s__28631;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__28631__$1);
if(temp__5457__auto__){
var s__28631__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28631__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__28631__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__28633 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__28632 = (0);
while(true){
if((i__28632 < size__4522__auto__)){
var w = cljs.core._nth.call(null,c__4521__auto__,i__28632);
cljs.core.chunk_append.call(null,b__28633,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),w], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),w], null)));

var G__28634 = (i__28632 + (1));
i__28632 = G__28634;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28633),hello_world$core$list_words_$_iter__28630.call(null,cljs.core.chunk_rest.call(null,s__28631__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28633),null);
}
} else {
var w = cljs.core.first.call(null,s__28631__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),w], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),w], null)),hello_world$core$list_words_$_iter__28630.call(null,cljs.core.rest.call(null,s__28631__$2)));
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center>div","center>div",1630078958),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center>h1","center>h1",-1352005293),"Spelling Bee"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.show_message], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.user_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.show_characters], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.delete_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.shuffle_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.enter_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.show_points], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.slider], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.list_words], null)], null)], null);
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
