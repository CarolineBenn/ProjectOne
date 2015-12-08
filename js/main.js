$(document).ready(function(){

  var singleDuck = '<img class="duck" src="images/duck.png" />';
  var flyAwayDuck1 = ({ "left" : "40%", "top":"-20%"});
  var flyAwayDuck2 = ({ "left" : "0%", "top":"-20%"});
  var gameOver;
  var numOfDucks = 0;
  var duckSVG = '<?xml version="1.0" encoding="iso-8859-1"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" class="duck-svg" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="107.59px" height="107.59px" viewBox="0 0 107.59 107.59" style="enable-background:new 0 0 107.59 107.59;" xml:space="preserve"><g> <g> <path id="path5050" d="M96.264,34.699c-3.347-2.532-2.761,11.526-21.229,13.686c-6.061,0.707-11.467,0.123-16.271-1.017 c-3.056-0.717-3.266-2.931-1.117-5.208c4.146-4.382,6.692-10.292,6.692-16.804c0-13.518-10.953-24.47-24.467-24.47 c-9.802,0-18.25,5.758-22.158,14.075c-1.331,2.842-4.267,4.793-7.355,4.272C4.308,18.213,0,18.525,0,24.396 c0,5.9,7.381,11.777,16.339,16.008c2.835,1.335,2.868,3.211,0.267,4.966C7.755,51.313,1.925,61.412,1.925,72.876 c0,18.295,14.928,31.224,33.129,33.126c25.834,2.701,56.48-1.725,68.054-24.964C111.389,64.409,107.671,43.343,96.264,34.699"/> </g></g></svg>';

  var bulletSVG = '<?xml version="1.0" encoding="iso-8859-1"?><!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" class="bullet-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"   viewBox="0 0 372.166 372.166" style="enable-background:new 0 0 372.166 372.166;" xml:space="preserve"><g>  <path d="M163.583,97.152h-3.641c-0.569-28.537-5.443-56.891-14.508-84.368l-2.609-7.909C141.863,1.959,139.154,0,136.083,0    c-3.071,0-5.781,1.959-6.742,4.875l-2.609,7.909c-9.065,27.477-13.938,55.832-14.508,84.368h-3.641v48.075l-11.749,30.56v179.012    h78.497V175.787l-11.748-30.56V97.152z M152.583,108.312v32.676h-33v-32.676H152.583z M117.769,151.988h36.628l7.427,19.32h-51.483    L117.769,151.988z M136.083,19.621c7.997,25.302,12.312,51.338,12.856,77.532h-25.711 C123.771,70.958,128.086,44.923,136.083,19.621z M107.834,343.799V182.308h56.497v161.491H107.834z"/><rect x="96.834" y="361.166" width="78.497" height="11"/></g></svg>';
     
  // On click screen flashes

  $('#content').on("click", function() {
      $('#content').addClass('flash');
      setTimeout(function() {
            $('#content').removeClass('flash');
      }, 100);
  });

  // Duck animation sequences

  function animDuck(newDuck) {
    var duckAnimate = (Math.floor(Math.random()*10));
    switch(duckAnimate) {

      case 0:  
      newDuck.animate({"left":"85%", "top":"50%" }, 2000, "swing").delay(700).animate({"left":"50%", "top":"20%"}, 1000, "swing").delay(500).animate({"top":"50%", "left":"10%"}, 1250, "swing").delay(600).animate(flyAwayDuck1, 400, "swing");
      break;

      case 1:
      newDuck.animate({"left":"35%", "top":"30%" }, 1500, "swing").delay(650).animate({"left":"20%", "top":"35%"},950,"swing").delay(900).animate({"left":"70%", "top":"67%"}, 1000, "swing").delay(600).animate(flyAwayDuck1, 400, "swing");
      break;

      case 2:
      newDuck.animate({"left":"25%", "top":"60%" }, 1500, "swing").delay(500).animate({"left":"20%", "top":"35%"},800,"swing").delay(900).animate({"left":"70%", "top":"67%"}, 1000, "swing").delay(300).animate(flyAwayDuck1, 400, "swing");
      break;

      case 3:
      newDuck.animate({"left":"25%", "top":"40%" }, 1500, "swing").delay(700).animate({"left":"70%", "top":"27%"}, 1500, "swing").delay(500).animate({"top":"36%", "left":"10%"}, 1250, "swing").delay(600).animate({"left":"50%","top":"15%"}, 1500, "swing").delay(750).animate(flyAwayDuck2, 400, "swing");
      break;

      case 4:
      newDuck.animate({"left":"0%", "top":"20%" }, 1500, "swing").delay(650).animate({"left":"60%", "top":"40%"},1450,"swing").delay(900).animate({"left":"60%", "top":"80%"}, 1000, "swing").delay(600).animate({"left":"80%","top":"5%"}, 1000, "swing").delay(750).animate(flyAwayDuck2, 400, "swing");
      break;
      
      case 5:
      newDuck.animate({"left":"35%", "top":"60%" }, 1500, "swing").delay(500).animate({"left":"20%", "top":"35%"},800,"swing").delay(900).animate({"left":"10%", "top":"57%"}, 1000, "swing").delay(300).animate({"left":"20%","top":"15%"}, 1500, "swing").delay(750).animate(flyAwayDuck2, 400, "swing");
      break;
      
      case 6:
      newDuck.animate({"left":"30%", "top":"10%" }, 1700, "swing").delay(1000).animate({"left":"30%", "top":"66%"}, 1000, "swing").delay(500).animate({"top":"63%", "left":"1%"}, 1250, "swing").delay(600).animate({"left":"29%","top":"45%"}, 1500, "swing").delay(750).animate(flyAwayDuck2, 400, "swing");
      break;

      case 7:
      newDuck.animate({"left":"25%", "top":"33%" }, 1500, "swing").delay(700).animate({"left":"70%", "top":"27%"}, 1500, "swing").delay(500).animate({"top":"36%", "left":"10%"}, 1250, "swing").delay(600).animate({"left":"50%","top":"15%"}, 1500, "swing").delay(750).animate(flyAwayDuck2, 400, "swing");
      break;

      case 8:
      newDuck.animate({"left":"0%", "top":"25%" }, 1500, "swing").delay(650).animate({"left":"60%", "top":"40%"},1450,"swing").delay(900).animate({"left":"60%", "top":"80%"}, 1000, "swing").delay(600).animate({"left":"80%","top":"47%"}, 1000, "swing").delay(750).animate(flyAwayDuck2, 400, "swing");
      break;

      case 9:
      newDuck.animate({"left":"35%", "top":"80%" }, 1500, "swing").delay(500).animate({"left":"20%", "top":"35%"},800,"swing").delay(900).animate({"left":"15%", "top":"80%"}, 1500, "swing").delay(300).animate({"left":"60%","top":"23%"}, 1000, "swing").delay(750).animate(flyAwayDuck2, 400, "swing");
      break;
      
    } // End of switch()
  } // End of animDuck();



  // On click screen flashes

  $('#content').on("click", function() {
      $('#content').addClass('flash');
      setTimeout(function() {
            $('#content').removeClass('flash');
      }, 100);
  });

  function levelComplete(totalDucks, numOfBullets) {
    $("#content").html('<a class="button" id="nextLevel">Nice! Go to the next level</a>');

    $("#content a#nextLevel").on("click", function() {
      // console.log("START NEXT");
      $('.shots-left').html("");
      $('.ducks-to-shoot').html("");
      $("#content").html("");
      setTimeout(function(){ 
        
        wave(5,4)
      }, 1000);
    });

    // NOTE: This really should skip to the (nonexistent) leaderboard - not refresh the page
    $("#content").append('<a href="" class="button give-up">Or give up...</a>');
      // Getting this ready for round two:
      //$(".duck").remove();

      //$("#content").html("");
    // move up a level
  } 

  function bulletsAndKills(totalDucks, numOfBullets) {
    var totalBullets = totalDucks + numOfBullets 
    var bulletsLeft = totalBullets;

    // Adds number of duck counters according to admin input
    for (i = 0; i < totalDucks; i++) {
      $('.ducks-to-shoot').append(duckSVG);
    }

    // Adds number of bullets according to admin input
    for (i = 0; i < bulletsLeft; i++) {
      $('.shots-left').append(bulletSVG);
    }

    // Sorting out how many shots are left:
    $("#content").on("click", function() {  
     // console.log("You have " + (bulletsLeft -1) + " bullets left");
     bulletsLeft--;

     var bullets = $("svg.bullet-svg");
       for (i = totalBullets; i > bulletsLeft; i--) {
         $(bullets[i-1]).css({"fill":"#333"});
       }

      if (bulletsLeft === 0) {
        $("#content").off("click");
        $(".duck").off("click");
        if (numOfDucks < totalDucks) {
          // bug
          $("#content").html('<h2>Game Over</h2>');
          console.log("You ain't got no bullets");
        }
      }
    })
  } // End of therAreXBulletsLeft();


  function scoresConditionals(totalDucks, numOfBullets) {
    var totalBullets = totalDucks + numOfBullets 
    var bulletsLeft = totalBullets;
    var duckScore = 0;

    $(".duck").one("click", function() {
      duckScore += 500;
      numOfDucks = (duckScore / 500);
      $(".score").html(duckScore);
      
      var greenDucks = $("svg.duck-svg");
      for (i = 0; i < numOfDucks; i++) {
        $(greenDucks[i]).css({"fill":"#0f0"});
      } 

      // Check win
      
      if (numOfDucks == totalDucks  ) {
        console.log("WIN");
        levelComplete(totalDucks, numOfBullets);
      }
    }); // end of $(".duck").one("click");
  }

  function killDuck() {
    // Click a duck and it falls from the screen
    $(".duck").one("click", function() {
      $(this).animate().stop(true, false).delay(600).animate({"top":"95%"}, 1000, "swing");
    }) // end of full click function()
  }

  /* */ /* */ /* */ /* */
  //   Wave function   //
  /* */ /* */ /* */ /* */

  function wave(totalDucks, numOfBullets) {
    // Add event listener to kill the ducks
    // Print out ducks according to total duck:  
      for (i = 0; i < totalDucks; i++) {
        var newDuck = $(singleDuck);
        $("#content").append(newDuck);
        animDuck(newDuck);
      }
    scoresConditionals(totalDucks, numOfBullets);
    bulletsAndKills(totalDucks, numOfBullets);
    killDuck(); 
  }

  // Starting the game with the first wave:
  function startGame() {
    wave(4,2);
  }


// And start...
startGame();

}); // End of $(document).ready

