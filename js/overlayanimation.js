/*
Javascript for animation of the newsletter overlay
Autor: Danny Ngo
*/

$(document).ready(function() {
  setTimeout(
    function() {
      $("#overlay").fadeIn(500);
      $("#overlayText").fadeIn(500);
      document.getElementById('overlay').style.display='flex';
    }, 3000);

  $("#overlay").click(function(element) {
    if (element.target.id == "overlay") {
      $("#overlay").fadeOut(500);
      $("#overlayText").fadeOut(500);
    }
  });

  setTimeout(
    function() {
      $("#overlay").fadeOut(750);
      $("#overlayText").fadeOut(750);
    }, 10000);
});
