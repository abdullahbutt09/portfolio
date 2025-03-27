document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
  
    menuBtn.addEventListener("click", function () {
      console.log("Hamburger clicked");
      mobileMenu.classList.toggle("hidden");
      // Also toggle flex if needed:
      mobileMenu.classList.toggle("flex");
    });
  });
  