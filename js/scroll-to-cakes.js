var Scrollbutton = document.getElementById("scroll-to-next-section");
var Scrollsection2 = document.getElementById("section");

Scrollbutton.addEventListener("click", function () {
 Scrollsection2.scrollIntoView({ behavior: "smooth" });
});