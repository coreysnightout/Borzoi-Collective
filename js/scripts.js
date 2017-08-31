$(document).ready(function() {

  $(".dropdown").hide();

  $(".container-bars").click(function() {
    $(".dropdown").fadeToggle();
  });

  $(".dropdown").click(function() {
    $(".dropdown").fade();
  });

  $(".nav-link3").click(function(){
    $("body, html").stop()
    $("body, html").animate({ scrollTop: $("#about-area").offset().top},"slow");
  })

  $(".foot-pic1").click(function(){
    $("body, html").stop()
    $("body, html").animate({ scrollTop: $(".nav-logo").offset().top},"slow");
  })

  $(".btn").click(function() {
    $("#modal").css("display", "block");
    $(".mask-off").css("display", "block");
  })
  $("#modal-btn").click(function() {
    $("#modal").css("display", "none");
    $(".mask-off").css("display", "none");
  })

});




// $(".container-bars").hide();
//
// $(".nav-logo").click(function() {
//   $(".container-bars").slideToggle("slow", function(){
//
//   });
// });
