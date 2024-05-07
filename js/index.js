$(document).ready(function () {
  $("#igp input").on("keydown", function () {
    var u = $("#ig-uname").val();
    var p = $("#ig-pass").val();
    if (u != "" && p != "") {
      $("#ig-log").addClass("fb-bug");
    } else {
      $("#ig-log").removeClass("fb-bug");
      $("#ig-log").off("click");
      $("#ig-log").css("color", "white");
    }
  });
});
function gh() {
  document.getElementById("choose-dialog").style.display = "block";
}
function ng() {
  document.getElementById("nipple-dialog").style.display = "block";
}
function can() {
  document.getElementById("choose-dialog").style.display = "none";
}
function can2() {
  document.getElementById("nipple-dialog").style.display = "none";
}
function fb() {
  document.getElementById("fbp").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("choose-dialog").style.display = "none";
  document.getElementById("nipple-dialog").style.display = "none";
}
function ig() {
  document.getElementById("igp").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("nipple-dialog").style.display = "none";
  document.getElementById("choose-dialog").style.display = "none";
}
function tw() {
  document.getElementById("twp").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("nipple-dialog").style.display = "none";
  document.getElementById("choose-dialog").style.display = "none";
}
