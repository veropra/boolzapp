/*MILESTRONE-1*/

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


/*MILESTRONE-2*/
/*Funzione per ricevere il messaggio di risposta ok*/
function ok() {
  var ok_message = $(".chat-container .template").clone();
  ok_message.children(".message-ok").text("Ok!");
  $(".chat-container").append(ok_message);
}

$(".send").click(function() {
setTimeout(ok, 1000);
});

/*function risposta() {
    var rispondi = $('.blocco .contenitore_messaggi').clone();
    // a 'messaggio' figlio del div clone scovrascrivo 'testo'
    rispondi.children('.messaggio').text('ok');
    $('.ricevuti').append(rispondi);
  }
  // resetto input
  $('.input_dx').val('');
});*/
