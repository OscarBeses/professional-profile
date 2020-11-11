// This scripts are inyected directly inside <script> tag below footer
// See /src/_includes/components/bottom.njk
//console.log('Remove me! (/src/_includes/js/scripts.js)')


/*Toggle dropdown list*/

const navMenuDiv = document.getElementById("nav-content");
const navMenu = document.getElementById("nav-toggle");

document.addEventListener('click', function(e) {
    const target = (e && e.target);

    //Nav Menu
    if (!checkParent(target, navMenuDiv)) {
        // click NOT on the menu
        if (checkParent(target, navMenu)) {
            // click on the link
            if (navMenuDiv.classList.contains("osk-invisible") || !navMenuDiv.classList.contains("osk-visible")) {
                navMenuDiv.classList.remove("osk-invisible");
                navMenuDiv.classList.add("osk-visible");
            } else {
                navMenuDiv.classList.add("osk-invisible");
                navMenuDiv.classList.remove("osk-visible");
            }
        } else {
            // click both outside link and outside menu, hide menu
            navMenuDiv.classList.add("osk-invisible");
            navMenuDiv.classList.remove("osk-visible");
        }
    }

});
function checkParent(t, elm) {
    while (t.parentNode) {
        if (t == elm) { return true; }
        t = t.parentNode;
    }
    return false;
}

const hamburguesa = document.getElementById('hamburguesa');
hamburguesa.addEventListener('click', function(){
    hamburguesa.classList.toggle('open');
});