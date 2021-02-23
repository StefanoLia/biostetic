var $figures = $(".post-figure");

for(i=0; i<$figures.length; i++){
    $($figures[i]).velocity({opacity: 0}, {duration: 0}).velocity({ opacity: 1 , display: "block" }, { duration: 800, delay: 900*i}, "ease-in");
}