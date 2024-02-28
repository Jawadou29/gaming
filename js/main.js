// start nav bar
let bars = document.querySelector(".header .container .links .fa-bars");
let ul_links = document.querySelector(".header .container .links ul");
bars.onclick = function () {
    ul_links.classList.toggle("open")
}
// end nav bar
// start slider
let content = document.querySelector(".featured-and-topDownloaded .featured-games .content");
let boxes = content.children;
// end slider