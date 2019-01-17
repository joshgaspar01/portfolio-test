(function(){
  var parallax = document.querySelectorAll("#landing, body, .headerlogo"),
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
function frimyFunction() {
    document.getElementById("fridropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('#fridropbtn')) {

    var dropdowns = document.getElementsByClassName("fridropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
function satmyFunction() {
    document.getElementById("satdropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('#satdropbtn')) {

    var dropdowns = document.getElementsByClassName("satdropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
function sunmyFunction() {
    document.getElementById("sundropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('#sundropbtn')) {

    var dropdowns = document.getElementsByClassName("sundropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
