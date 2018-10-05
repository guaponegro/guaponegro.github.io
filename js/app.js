// Scoreboard
$('.scoreboard').append("<span class='score'>Score: (0)</span>");
$('.score').text("Score: " + score + "");


// Lives Tracker
$('.lifecount').append("<span class='lives'>Lives: (0)</span>");
$('.lives').text("Lives: " + lives + "");

// Start Game Button
$("#start").on("click", (e) => {
  $("<img class='right-side-pic' src='images/Rick-Dancing.gif'></img>").appendTo(".right-half")
// $("<img class='left-side-pic' src='images/Rick-Twerking2.gif'></img>").appendTo(".left-half")
  $("#start").remove();
  $("#how-to-play").remove();
  draw();
  });

  //How To Play Button
  $("#how-to-play").on("click", (e) => {
    $('.modal1').modal()
  });

// Reload Button
  $(".reloadPage").on("click", (e) => {
    window.location.reload(true);
  })
  






  

