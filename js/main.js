$(document).ready(function(){

var singleDuck = $(".duck");


  // Duck - needs to work
  TweenMax.from(".duck", 0.3, {
  opacity:0,
  ease: Power0.easeNone
  });








/*
  $('.content')
     .find('.duck:nth-child(2)')
     .animate({
        left: 280
      }, 'slow');
*/


/*

// NOTE: The following code works, but won't work with percentages

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

$(".duck:nth-child(1)").animate({"left":"85%", "top":"50%" }, "slow");




// On click screen flashes


$('img.background').click(function() {
    $('img.background').addClass('flash');
    setTimeout(function() {
          $('img.background').removeClass('flash');
    }, 100);
});

}); // End of $(document).ready

