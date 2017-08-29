$(document).ready(function() {

  $(".container-bars").hide();

  $(".nav-logo").click(function() {
    $(".container-bars").slideToggle("slow", function(){

    });
  });
});
