const openMenu = function() {
    console.log("menu button is clicked");
    document.querySelector(".backdrop").className = 'backdrop active';
    document.querySelector("aside").className = 'active';
}
const closeMenu = function() {
    document.querySelector(".backdrop").className = 'backdrop';
    document.querySelector("aside").className = '';
}
document.querySelector("#menuBtn").onclick = function(e) {
    e.preventDefault();
    openMenu();
}
document.querySelector('aside button.close').onclick = function(e) {
    closeMenu();
}
document.querySelector('.backdrop').onclick = function(e) {
    closeMenu();
}