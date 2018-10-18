$(document).ready(function() {
  $("#leopard").click(function() {
    $(".info").hide();
    $("#leopard-info").slideToggle();
  });
  $("#lion").click(function() {
    $(".info").hide();
    $("#lion-info").slideToggle();
  });
  $("#giraffe").click(function() {
    $(".info").hide();
    $("#giraffe-info").slideToggle();
  });
});
