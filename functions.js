//dom references
const slideContainer = document.querySelector(".slidecontainer");
let slides = Array.from(slideContainer.children);
let slideHeight = slides[0].getBoundingClientRect().height;
let floater = document.querySelector(".floater");
let indicator = document.querySelector(".indicator");
let dots = Array.from(indicator.children);
//set slide positions
slides.forEach((element, index) => {
  element.style.top = "" + slideHeight * index + "px";
});

//screen changing function
slideScreenDown = (e) => {
  //get references
  const currentSlide = slideContainer.querySelector(".active");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = indicator.querySelector(".active-dot");
  const nextDot = currentDot.nextElementSibling;
  //slide current slide away
  slideScreen(slideContainer, currentSlide, nextSlide, currentDot, nextDot);
};

//slide screen up
slideScreenUp = (e) => {
  const currentSlide = slideContainer.querySelector(".active");
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = indicator.querySelector(".active-dot");
  const prevDot = currentDot.previousElementSibling;
  slideScreen(slideContainer, currentSlide, prevSlide, currentDot, prevDot);
};

//slide function
slideScreen = (
  slideContainer,
  currentSlide,
  nextDirection,
  currentDot,
  nextDot
) => {
  slideContainer.style.transform =
    "translateY(-" + nextDirection.style.top + ")";
  currentSlide.classList.remove("active");
  nextDirection.classList.add("active");
  currentDot.classList.remove("active-dot");
  nextDot.classList.add("active-dot");
};

//handlekeypress
handleArrowKeys = (e) => {
  if (e.keyCode == "40") {
    slideScreenDown();
  }
  if (e.keyCode == "38") {
    slideScreenUp();
  }
};

//add event listener
floater.addEventListener("click", slideScreenDown);
document.onkeydown = handleArrowKeys;
