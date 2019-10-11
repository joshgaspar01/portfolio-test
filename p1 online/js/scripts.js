scrollHoriz();
var scrollTop=0;
var scrollLeft=scrollHoriz();

function scrollVert() {
  $('html, body, *').off('mousewheel').mousewheel(function(e, delta) {
    this.scrollTop -= (delta * 1);
    e.preventDefault();
    scrollTop=this.scrollTop
    setTimeout(function() {

        if (scrollTop == 0) scrollHoriz();
    }, 0)

  });
}
function scrollHoriz() {
  $('html, body, *').off('mousewheel').mousewheel(function(e, delta) {
    this.scrollLeft -= (delta * 1);
    e.preventDefault();
    setTimeout(function() {
      if ($(window).scrollLeft() + $(window).width() == $(document).width())
        scrollVert();
      if (scrollLeft == 0) scrollVert();
    }, 0)
  });
}
