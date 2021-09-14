
function SelectActivated() {
  $("#navbarSupportedContent").on("click", "li", function (e) {
    $("#navbarSupportedContent ul li").removeClass("active");
    $(this).addClass("active");
    var activeLinkHeight = $(this).innerHeight();
    var activeLinkWidth = $(this).innerWidth();
    var itemPosNewAnimTop = $(this).position();
    var itemPosNewAnimLeft = $(this).position();
    $(".hover-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeLinkHeight + "px",
      width: activeLinkWidth + "px",
    });
  });
}

function ActiveHome() {
  let home = $("#homeTab");
  home.addClass("active");
  console.log(home);
  var activeLinkHeight = home.innerHeight();
  var activeLinkWidth = home.innerWidth();
  var itemPosNewAnimTop = home.position();
  var itemPosNewAnimLeft = home.position();
  $(".hover-selector").css({
    top: itemPosNewAnimTop.top + "px",
    left: itemPosNewAnimLeft.left + "px",
    height: activeLinkHeight + "px",
    width: activeLinkWidth + "px",
  });
}

$(document).ready(function () {
  ActiveHome();
  setTimeout(function () {
    SelectActivated();
  });
});

$(".navbar-toggler").click(function(){
  ActiveHome();
  $(".navbar-collapse").slideToggle(300);
	setTimeout(function(){ SelectActivated(); });

});
/*




 */
