$(document).ready(function(){
  $(".button-collapse").sideNav();
  $('.carousel').carousel();
})

setInterval(function() {
    $('.carousel').carousel('next');
  }, 2000);