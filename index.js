// Toggle button for main menu

var toggleButton = document.querySelector("#toggle-button");
var mainNav = document.querySelector("#main-nav");

toggleButton.addEventListener("click", () => {
  var isOpen = toggleButton.getAttribute("aria-expanded");

  if (isOpen === "false") {
    toggleButton.setAttribute("aria-expanded", true);
  } else {
    toggleButton.setAttribute("aria-expanded", false);
  }
  mainNav.classList.toggle("hidden");
});

// sub menu

var subnavList = document.querySelectorAll(".subnav");

subnavList.forEach((subnavItem) => {
  var subnavButton = subnavItem.firstElementChild;
  var subnavMenu = subnavButton.nextElementSibling;

  subnavButton.addEventListener("click", () => {
    var isExpanded = subnavButton.ariaExpanded;
    if (isExpanded === "false") {
      subnavButton.setAttribute("aria-expanded", true);
    } else {
      subnavButton.setAttribute("aria-expanded", false);
    }
    subnavMenu.classList.toggle("hidden");
  });
});
