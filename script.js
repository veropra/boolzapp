/*MILESTONE-1*/

/*Clono il template*/
$(document).ready(function(){
  $(".right-footer-icon").click(function(){
    var write_chat = $(".message-bar").val();
    new_message = $(".template .chat-message-template").clone();
    new_message.addClass("mine").children(".write-chat").text((write_chat) + (getCurrentTime()));
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

  /*Funzione per creare l'ora attuale*/
    function getCurrentTime() {
      var data = new Date ();
      var ora = data.getHours();
      if (ora < 10) {
        ora = " " + "0" + ora;
      }
      var minuti = data.getMinutes();
      if (minuti< 10) {
        minuti = " " + "0" + minuti;
      }
      return " " + ora + ":" + minuti
    }


/*MILESTONE-2*/
/*Funzione per ricevere il messaggio di risposta ok*/
function ok(text) {
  var ok_message = $(".template .chat-message-template").clone();
  ok_message.children(".write-chat").text((text) + (getCurrentTime()));
  $(".chat-container").append(ok_message);
}

ok("Ciao Wonderwoman, come stai?");

$(".send").click(function() {
  setTimeout(function() {
    ok("Ok!");
  }, 1000);
});

/*Creo una funzione per la ricerca dei contatti*/
  $(".search input").keyup(function(){
    var search_contact = $(this).val().toLowerCase();
    $(".contact").each(function(){
      var contact = $(this).find(".prev-message h4").text().toLowerCase();
      if (contact.includes(search_contact)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });

/*MILESTONE-3*/
