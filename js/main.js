$(document).ready(function(){

var singleDuck = $(".duck");
var flyAwayDuck = ({ "left" : "40%", "top":"-10%"});
   


// NOTE: The following code works, but won't work with percentages
/*
var timeDelay1 = 1;
var duckFlyPauseEasy = 1;

TweenMax.to(".duck:nth-child(1)", timeDelay1, { 
  ease: Power1.easeOut,
  y: -300,
  x: 830
});

TweenMax.to(".duck:nth-child(1)", 1, { 
  delay: timeDelay1 + duckFlyPauseEasy,
  ease: Power1.easeOut,
  y: -190,
  x: 0
});

$('.duck').click(function() {
  TweenMax.killTweensOf($(this));
})
*/


// Easy mode - Level One

// Starting 
$(.duck).css({"left": "30%"});

// Duck 1
$(".duck:nth-child(1)").animate({"left":"85%", "top":"50%" }, 2000, "swing").delay(700).animate({"left":"50%", "top":"20%"}, 1000, "swing").delay(500).animate({"top":"50%", "left":"10%"}, 1250, "swing").delay(600).animate(flyAwayDuck, 400, "swing");

// Duck 2
$(".duck:nth-child(2)").animate({"left":"35%", "top":"30%" }, 1500, "swing").delay(650).animate({"left":"20%", "top":"35%"},950,"swing").delay(900).animate({"left":"70%", "top":"67%"}, 1000, "swing").delay(600).animate(flyAwayDuck, 400, "swing");

// Duck 3
$(".duck:nth-child(3)").animate({"left":"25%", "top":"60%" }, 1500, "swing").delay(500).animate({"left":"20%", "top":"35%"},800,"swing").delay(900).animate({"left":"70%", "top":"67%"}, 1000, "swing").delay(300).animate(flyAwayDuck, 400, "swing");

// Duck 4
$(".duck:nth-child(4)").animate({"left":"30%", "top":"10%" }, 1700, "swing").delay(1000).animate({"left":"30%", "top":"66%"}, 1000, "swing").delay(500).animate({"top":"23%", "left":"1%"}, 1250, "swing").delay(600).animate(flyAwayDuck, 400, "swing");

// Click a duck and it falls from the screen
$(".duck").one("click", function() {
  $(this).animate().stop(true, false).delay(600).animate({"top":"95%"}, 1000, "swing");
})




// On click screen flashes
$('img.background').click(function() {
    $('img.background').addClass('flash');
    setTimeout(function() {
          $('img.background').removeClass('flash');
    }, 100);
});

}); // End of $(document).ready

