$(document).ready(function () {
  console.log("Taanusiya");
  $("#bento-menu").click(function () {
    $(".home-menu-section").removeClass("d-none");
  });
  $(".close-menu").click(function () {
    $(".home-menu-section").addClass("d-none");
  });

  $("#notify-popup").click(function () {
    var check = $(".openclose").text().trim();

    console.log("test span", check);
    if (check == "Close") {
      $(".openclose").text("Open");
      $(".notify-popup-overlay").removeClass("d-none");
    } else {
      $(".openclose").text("Close");
      $(".notify-popup-overlay").addClass("d-none");
    }
  });
});
