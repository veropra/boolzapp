//var new_message = $(".chat-message-template").clone();

//new_message.children(".write-chat").addClass("mine").text("acquaman");

$(document).ready(function(){
  $(".right-footer-icon").click(function(){
    var write_chat = $(".message-bar").val();
    console.log(new_message);
    var new_message = $(".chat-message-template").clone();
    new_message.addClass("mine").children(".write-chat").text(write_chat);
    $(".chat-container").append(new_message);
    $(".message-bar").val("");
  });
});
