window.addEventListener("scroll", function() {
    var scrollTop = window.scrollY;
    var scale = 1 + scrollTop / 500;
    document.getElementById("img-bg").style.transform = "scale(" + scale + ")";
  });