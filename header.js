// 🔥 GLOBAL HEADER FIX (Mobile Menu + Consistent Load)

document.addEventListener("DOMContentLoaded", function(){

  // Load header
  fetch("header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    // AFTER header loads → attach menu event
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.getElementById("menu");

    if(menuBtn && menu){
      menuBtn.addEventListener("click", () => {
        menu.classList.toggle("active");
      });
    }
  });

  // Load footer
  fetch("footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });

});
