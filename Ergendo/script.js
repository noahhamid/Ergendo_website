const menu = document.querySelector("#menu");
const header = document.querySelector("#head");
const nav = document.querySelector("#nav");
const product = document.querySelector("#product");
const catagories = document.querySelector("#catagories");

menu.addEventListener("click", () => {
  if (menu.getAttribute("name") === "menu") {
    menu.setAttribute("name", "close");
    nav.classList.remove("top-[-200px]"); // Remove the class to show the navigation menu
    nav.classList.add("top-[53px]"); // Remove the class to show the navigation menu
    header.classList.add("mb-32"); // Remove the class to show the navigation menu
  } else {
    menu.setAttribute("name", "menu");
    nav.classList.add("top-[-200px]"); // Add the class to hide the navigation menu
    nav.classList.remove("top-[53px]"); // Add the class to hide the navigation menu
    header.classList.remove("mb-32"); // Add the class to hide the navigation menu
  }
});


product.addEventListener("click", () => {
  catagories.classList.toggle("hidden");
  catagories.classList.add('mb-10')
});
