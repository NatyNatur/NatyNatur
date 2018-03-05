$(document).ready(function(){
  $('#all').hide();
  $("#btnEn").click(function(){
    $("#particles-js").fadeOut();
    $("#all").fadeIn("slow");
    //$("#div3").fadeIn(3000);
    });
  $(".button-collapse").sideNav();
  $('.carousel').carousel();

})

setInterval(function() {
    $('.carousel').carousel('next');
  }, 2000);