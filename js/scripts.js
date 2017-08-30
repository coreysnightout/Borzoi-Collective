$(document).ready(function() {

  // $(".container-bars").hide();
  //
  // $(".nav-logo").click(function() {
  //   $(".container-bars").slideToggle("slow", function(){
  //
  //   });
  // });

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
