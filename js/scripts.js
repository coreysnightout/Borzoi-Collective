$(document).ready(function() {

  $(".dropdown").hide();

  $(".container-bars").click(function() {
    $(".dropdown").fadeToggle();
    // $(".container-bars").hide();
  });

  $(".dropdown").click(function() {
    // $(".container-bars").slideToggle();
    $(".dropdown").fade();
  });

});




// $(".container-bars").hide();
//
// $(".nav-logo").click(function() {
//   $(".container-bars").slideToggle("slow", function(){
//
//   });
// });
