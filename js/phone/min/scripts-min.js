$(document).ready(function() {
    $(".wp3").waypoint(function() { $(".wp3").addClass("animated bounceInDown") }, { offset: "75%" });
    $("#showcaseSlider").flickity({ cellAlign: "left", contain: true, prevNextButtons: false, imagesLoaded: true, autoPlay: true });
    $("#showcaseSlider2").flickity({ cellAlign: "left", contain: true, prevNextButtons: false, imagesLoaded: true, autoPlay: true });
    $(".project").click(function() {
        $("#showcaseSlider1").flickity("resize");
        $("#showcaseSlider2").flickity("resize");
    })
});