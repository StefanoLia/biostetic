var $buttons = $(".books-tab");

for(i=0; i<$buttons.length; i++){
    $($buttons[i]).velocity({opacity: 0}, {duration: 0}).velocity({ opacity: 1 , display: "block" }, { duration: 800, delay: 900*i}, "ease-in");
}