$(document).ready(function() {

  $(".dropdown").hide();

  $(".container-bars").click(function() {
    $(".dropdown").slideToggle();
    // $(".container-bars").hide();
  });

  $(".dropdown").click(function() {
    // $(".container-bars").slideToggle();
    $(".dropdown").hide();
  });
});




// $(".container-bars").hide();
//
// $(".nav-logo").click(function() {
//   $(".container-bars").slideToggle("slow", function(){
//
//   });
// });
