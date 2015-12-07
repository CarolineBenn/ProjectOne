$(document).ready(function(){

var singleDuck = $(".duck");
var flyAwayDuck1 = ({ "left" : "40%", "top":"-20%"});
var flyAwayDuck2 = ({ "left" : "0%", "top":"-20%"});
   
/*
// Easy mode - Level One: Wave One

// Starting 
$(singleDuck).css({"left": "30%"});

// Duck 1
$(".duck:nth-child(1)").animate({"left":"85%", "top":"50%" }, 2000, "swing").delay(700).animate({"left":"50%", "top":"20%"}, 1000, "swing").delay(500).animate({"top":"50%", "left":"10%"}, 1250, "swing").delay(600).animate(flyAwayDuck1, 400, "swing");

// Duck 2
$(".duck:nth-child(2)").animate({"left":"35%", "top":"30%" }, 1500, "swing").delay(650).animate({"left":"20%", "top":"35%"},950,"swing").delay(900).animate({"left":"70%", "top":"67%"}, 1000, "swing").delay(600).animate(flyAwayDuck1, 400, "swing");

// Duck 3
$(".duck:nth-child(3)").animate({"left":"25%", "top":"60%" }, 1500, "swing").delay(500).animate({"left":"20%", "top":"35%"},800,"swing").delay(900).animate({"left":"70%", "top":"67%"}, 1000, "swing").delay(300).animate(flyAwayDuck1, 400, "swing");

// Duck 4
$(".duck:nth-child(4)").animate({"left":"30%", "top":"10%" }, 1700, "swing").delay(1000).animate({"left":"30%", "top":"66%"}, 1000, "swing").delay(500).animate({"top":"23%", "left":"1%"}, 1250, "swing").delay(600).animate(flyAwayDuck1, 400, "swing");
*/
// Need to put in a STOP function() here
// Level 2
// Commence Wave 2

/*
WAVE TWO
// Starting 
$(".duck:nth-child(1)").css({"left": "10%"});
$(".duck:nth-child(2)").css({"left": "60%"});
$(".duck:nth-child(3)").css({"left": "60%"});
$(".duck:nth-child(4)").css({"left": "80%"});

// Duck 1
$(".duck:nth-child(1)").animate({"left":"25%", "top":"40%" }, 1500, "swing").delay(700).animate({"left":"70%", "top":"27%"}, 1500, "swing").delay(500).animate({"top":"36%", "left":"10%"}, 1250, "swing").delay(600).animate({"left":"50%","top":"15%"}, 1500, "swing").delay(750).animate(flyAwayDuck2, 400, "swing");

// Duck 2
$(".duck:nth-child(2)").animate({"left":"0%", "top":"20%" }, 1500, "swing").delay(650).animate({"left":"60%", "top":"40%"},1450,"swing").delay(900).animate({"left":"60%", "top":"80%"}, 1000, "swing").delay(600).animate({"left":"80%","top":"5%"}, 1000, "swing").delay(750).animate(flyAwayDuck2, 400, "swing");

// Duck 3
$(".duck:nth-child(3)").animate({"left":"35%", "top":"60%" }, 1500, "swing").delay(500).animate({"left":"20%", "top":"35%"},800,"swing").delay(900).animate({"left":"10%", "top":"57%"}, 1000, "swing").delay(300).animate({"left":"20%","top":"15%"}, 1500, "swing").delay(750).animate(flyAwayDuck2, 400, "swing");

// Duck 4
$(".duck:nth-child(4)").animate({"left":"30%", "top":"10%" }, 1700, "swing").delay(1000).animate({"left":"30%", "top":"66%"}, 1000, "swing").delay(500).animate({"top":"63%", "left":"1%"}, 1250, "swing").delay(600).animate({"left":"29%","top":"45%"}, 1500, "swing").delay(750).animate(flyAwayDuck2, 400, "swing");
*/




//WAVE THREE


// Starting 

$("#content").append('<img class="duck" src="images/duck.png" />');

$(".duck:nth-child(1)").css({"left": "10%"});
$(".duck:nth-child(2)").css({"left": "60%"});
$(".duck:nth-child(3)").css({"left": "60%"});
$(".duck:nth-child(4)").css({"left": "80%"});
$(".duck:nth-child(5)").css({"left": "90%"});

// Duck 1
$(".duck:nth-child(1)").animate({"left":"25%", "top":"40%" }, 1500, "swing").delay(700).animate({"left":"70%", "top":"27%"}, 1500, "swing").delay(500).animate({"top":"36%", "left":"10%"}, 1250, "swing").delay(600).animate({"left":"50%","top":"15%"}, 1500, "swing").delay(750).animate(flyAwayDuck2, 400, "swing");

// Duck 2
$(".duck:nth-child(2)").animate({"left":"0%", "top":"20%" }, 1500, "swing").delay(650).animate({"left":"60%", "top":"40%"},1450,"swing").delay(900).animate({"left":"60%", "top":"80%"}, 1000, "swing").delay(600).animate({"left":"80%","top":"5%"}, 1000, "swing").delay(750).animate(flyAwayDuck2, 400, "swing");

// Duck 3
$(".duck:nth-child(3)").animate({"left":"35%", "top":"60%" }, 1500, "swing").delay(500).animate({"left":"20%", "top":"35%"},800,"swing").delay(900).animate({"left":"10%", "top":"57%"}, 1000, "swing").delay(300).animate({"left":"20%","top":"15%"}, 1500, "swing").delay(750).animate(flyAwayDuck2, 400, "swing");

// Duck 4
$(".duck:nth-child(4)").animate({"left":"30%", "top":"10%" }, 1700, "swing").delay(1000).animate({"left":"30%", "top":"66%"}, 1000, "swing").delay(500).animate({"top":"63%", "left":"1%"}, 1250, "swing").delay(600).animate({"left":"29%","top":"45%"}, 1500, "swing").delay(750).animate(flyAwayDuck2, 400, "swing");

// Duck 5
$(".duck:nth-child(5)").animate({"left":"20%", "top":"10%" }, 1700, "swing").delay(1000).animate({"left":"20%", "top":"66%"}, 1000, "swing").delay(500).animate({"top":"63%", "left":"18%"}, 1250, "swing").delay(600).animate({"left":"29%","top":"45%"}, 1500, "swing").delay(750).animate(flyAwayDuck2, 400, "swing");


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

