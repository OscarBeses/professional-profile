// This scripts are inyected directly inside <script> tag below footer
// See /src/_includes/components/bottom.njk
//console.log('Remove me! (/src/_includes/js/scripts.js)')


/*Toggle dropdown list*/
/*https://gist.github.com/slavapas/593e8e50cf4cc16ac972afcbad4f70c8*/

var navMenuDiv = document.getElementById("nav-content");
var navMenu = document.getElementById("nav-toggle");

document.onclick = check;
function check(e) {
    var target = (e && e.target) || (event && event.srcElement);

    //Nav Menu
    if (!checkParent(target, navMenuDiv)) {
        // click NOT on the menu
        if (checkParent(target, navMenu)) {
            // click on the link
            if (navMenuDiv.classList.contains("invisible")) {
                navMenuDiv.classList.remove("invisible");
                navMenuDiv.classList.add("visible");
            } else {
                navMenuDiv.classList.add("invisible");
                navMenuDiv.classList.remove("visible");
            }
        } else {
            // click both outside link and outside menu, hide menu
            navMenuDiv.classList.add("invisible");
            navMenuDiv.classList.remove("visible");
        }
    }

}
function checkParent(t, elm) {
    while (t.parentNode) {
        if (t == elm) { return true; }
        t = t.parentNode;
    }
    return false;
}