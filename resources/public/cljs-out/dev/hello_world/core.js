// Compiled by ClojureScript 1.10.520 {}
goog.provide('hello_world.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
cljs.core.enable_console_print_BANG_.call(null);
if((typeof hello_world !== 'undefined') && (typeof hello_world.core !== 'undefined') && (typeof hello_world.core.word !== 'undefined')){
} else {
hello_world.core.word = reagent.core.atom.call(null,"");
}
if((typeof hello_world !== 'undefined') && (typeof hello_world.core !== 'undefined') && (typeof hello_world.core.words_list !== 'undefined')){
} else {
hello_world.core.words_list = reagent.core.atom.call(null,cljs.core.sorted_set.call(null));
}
hello_world.core.display_welcome_text = (function hello_world$core$display_welcome_text(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Spelling bee (Not even close)"], null)], null);
});
hello_world.core.validate_word = (function hello_world$core$validate_word(input){
if(cljs.core._EQ_.call(null,(13),input.charCode)){
cljs.core.swap_BANG_.call(null,hello_world.core.words_list,cljs.core.conj,cljs.core.deref.call(null,hello_world.core.word));

return cljs.core.reset_BANG_.call(null,hello_world.core.word,"");
} else {
return null;
}
});
hello_world.core.dispatch_event_BANG_ = (function hello_world$core$dispatch_event_BANG_(e){
var pred__26464 = cljs.core._EQ_;
var expr__26465 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core.truth_(pred__26464.call(null,new cljs.core.Keyword(null,"validate-word","validate-word",-664151228),expr__26465))){
return hello_world.core.validate_word.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(e));
} else {
return cljs.core.println.call(null,"Don't know how to handle event: ",e);
}
});
hello_world.core.user_input = (function hello_world$core$user_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,hello_world.core.word),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26467_SHARP_){
return cljs.core.reset_BANG_.call(null,hello_world.core.word,p1__26467_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),(function (e){
return hello_world.core.dispatch_event_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"validate-word","validate-word",-664151228),new cljs.core.Keyword(null,"key","key",-1516042587),e], null));
})], null)], null)], null);
});
hello_world.core.get_answer = (function hello_world$core$get_answer(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Enter any words in the text box below ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.user_input,hello_world.core.word], null)], null)], null);
});
});
hello_world.core.list_words = (function hello_world$core$list_words(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center>h3","center>h3",1494905610),cljs.core.deref.call(null,hello_world.core.words_list)], null);
});
hello_world.core.spelling_bee = (function hello_world$core$spelling_bee(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.display_welcome_text], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.get_answer], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.list_words], null)], null);
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
