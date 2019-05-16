var new_message = $(".write-chat-container.template").clone();

new_message.children(".write-chat").addclass(".mine").text("<p>acquaman</p>");

$(".real-messages-container").append(new_message);
