/*MILESTONE-1*/

/*Clono il template*/
$(document).ready(function(){
  $(".right-footer-icon").click(function(){
    var write_chat = $(".message-bar").val();
    new_message = $(".template .chat-message-template").clone();
    new_message.addClass("mine").children(".write-chat").text(write_chat);
    $(".chat-container").append(new_message);
    $(".message-bar").val("");
  });
});

/*Funzione per far scoparire il microfono quando scrivo nella barra dei messaggi
e far apparire lo share-square e viceversa*/
  $(".message-bar").click(function(){
    sendMessage();
  });

  $('.write-msg input').focus(function(){

    $(".send i").toggleClass("fa-microphone fa-share-square");
  }).blur(function(){
    $(".send i").toggleClass("fa-microphone fa-share-square");
  });


/*MILESTONE-2*/
/*Funzione per ricevere il messaggio di risposta ok*/
function ok(text) {
  var ok_message = $(".template .chat-message-template").clone();
  ok_message.children(".write-chat").text(text);
  $(".chat-container").append(ok_message);
}

ok("Ciao Wonderwoman come stai?");

$(".send").click(function() {
  setTimeout(function() {
    ok("Ok!");
  }, 1000);
});
