function dropdown3() {
    document.getElementById("policyContent").classList.toggle("show");
};

window.onclick = function(e) {
    if (!e.target.matches('.drop3')) {
        var myDropdown = document.getElementById("policyContent");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}

window.onscroll = function() {scrollSticky()};

var header = document.getElementById("topnav");
var dropMenu = document.getElementById("policyContent");
var sticky = header.offsetTop;

function scrollSticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add("stickyNav");
    dropMenu.classList.add("stickyDrop");
  } else {
    header.classList.remove("stickyNav");
    dropMenu.classList.remove("stickyDrop");
  }
}

$("[data-menu-underline-from-center] a").addClass("underline-from-center");

