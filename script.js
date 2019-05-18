/*MILESTRONE-1*/

$(document).ready(function(){
  $(".right-footer-icon").click(function(){
    var write_chat = $(".message-bar").val();
    new_message = $(".chat-message-template").clone();
    new_message.addClass("mine").children(".write-chat").text(write_chat);
    $(".chat-container").append(new_message);
    $(".message-bar").val("");
  });
});


$(".message-bar").keyup(function() {
  $(".send i").removeClass("fa-microphone");
  $(".send i").addClass("fa-arrow-alt-circle-right");
});


function time() {
  var ore = new Date().getHours();
  var minuti = new Date().getMinutes();

  if (ore < 10) {
  ore = "0" + ore;
  }

  if (minuti < 10) {
  minuti = "0" + minuti;
  }
  $(".time").html(ore + ":" + minuti);
}

/*MILESTRONE-2*/

function ok() {
  var ok_message = $(".chat-message-template").clone();
  ok_message.removeClass("template");
  ok_message.children(".write_chat").children(".message").html("Ok!");
  ok_message.children(".write_chat;").removeClass("utente");
  $(".chat-container").append(ok_message);
}

$(".send").click(function() {
setTimeout(ok, 1000);
});
