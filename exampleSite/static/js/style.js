$.Velocity
       .RegisterEffect("shadowIn", {
              defaultDuration: 1000,
              calls: [
                     [ { opacity: 1, scale: 1 }, 0.4 ] ,
                     [ { boxShadowBlur: 50 }, 0.6 ]
               ]
       })
       .RegisterEffect("shadowOut", {
              defaultDuration: 800,
              calls: [
                     // We reverse the order to mirror the "In" direction
                     [ { boxShadowBlur: 50 }, 0.2 ],
                     [ { opacity: 0, scale: 0 }, 0.8 ]
               ]
});

// take elements
var $navigation = $(".navigation");
var $footer = $("footer");

$navigation.velocity("slideDown", { duration: 600 });
$footer.velocity({height: 0}, { duration: 0 }).velocity({height: "3em"}, { duration: 600 }, "easing-in-out");;

var $elements = $(".social-media a")

for(i=0; i<$elements.length; i++) {
    $($elements[i]).velocity("shadowIn", { delay: 300*i})
}

var sections = $(".introduction-section");

$(sections[0]).velocity({opacity: 0}, {duration: 0}).velocity({ opacity: 1 , display: "block" }, { duration: "slow", delay: 1800}, "ease-in");

$(".arrow").velocity({ margin: 0}, {delay: 2000}).velocity({ margin: "-15px", transform: 0 }, {duration: 500, loop: true });

