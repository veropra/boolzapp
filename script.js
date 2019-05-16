var new_message = $(".write-chat-container.template").clone();

new_message.children(".write-chat").addclass(".mine").text("<p>acquaman</p>");

$(".real-messages-container").append(new_message);

$(document).ready(function(){
  $(".right-footer-icon").click(function(){
    var write-chat = $(".write-msg").val();
    var new_message = $(".real-messages-container .write-chat .mine").clone();
  });

});
