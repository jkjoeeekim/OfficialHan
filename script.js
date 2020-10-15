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