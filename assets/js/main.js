$(document).ready(function(){
  $('#all').hide();
  $("#btnEn").click(function(){
    $("#particles-js").fadeOut();
    $("#all").fadeIn("slow");
    });
  $(".button-collapse").sideNav();
  $('.carousel').carousel();

})
$('#btnES').click(function(){
  alert('Lo siento, aún no está disponible :(');
})
setInterval(function() {
    $('.carousel').carousel('next');
  }, 2000);