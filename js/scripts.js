(function(){
  var parallax = document.querySelectorAll("body"),
      speed = 0.5;

  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){

      var windowYOffset = window.pageYOffset,
          elBackgroundPos = "50% " + (windowYOffset * speed) + "px";

      el.style.backgroundPosition = elBackgroundPos;
    });
  };
})();
var wrap = $("#wrap");

wrap.on("scroll", function(e) {

  if (this.scrollTop > 147) {
    wrap.addClass("fix-header");
  } else {
    wrap.removeClass("fix-header");
  }

});
