window.addEventListener("scroll", () => {
  console.log("Page scrolling at" + window.scrollY + "px");
});

const openMenuButton = document.querySelector("#open-menu");
openMenuButton.addEventListener("click", () => {
  console.log("Opening menu!!!!");
  // document.querySelector("#mobile-menu").style.display = "flex";
  document.querySelector("#mobile-menu").classList.add("opened-nav");
});

//close menu
const closeMenuButton = document.querySelector("#close-menu");
closeMenuButton.addEventListener("click", () => {
  console.log("Closing menu!!!!");
  //document.querySelector("#mobile-menu").style.display = "none";
  document.querySelector("#mobile-menu").classList.remove("opened-nav");
});
