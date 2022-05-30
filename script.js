var menuItems = document.getElementById("menuList");
var product = document.getElementById("product");
var hamburgerMenu = document.getElementById("hamburgerMenu");
var close = document.getElementById("close");
var mobileDropdown = document.getElementById("mobileDropdown");

product.addEventListener("click", () => {
  if (menuItems.style.display == "none") {
    menuItems.style.display = "block";
  } else {
    menuItems.style.display = "none";
  }
});

hamburgerMenu.addEventListener("click", () => {
  mobileDropdown.style.display = "block";

  hamburgerMenu.style.display = "none";
});

close.addEventListener("click", () => {
  mobileDropdown.style.display = "none";
  hamburgerMenu.style.display = "block";
});
