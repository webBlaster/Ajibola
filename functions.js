//slide container reference
const slideContainer = document.querySelector(".slidecontainer");
//array of slides
let slides = Array.from(slideContainer.children);
//slide Height
let slideHeight = slides[0].getBoundingClientRect().height;
//set slide positions
slides.forEach((element, index) => {
  element.style.top = "" + slideHeight * index + "px";
});
//get floater instance
let floater = document.querySelector(".floater");

//screen changing function
slideScreenDown = (e) => {
  //get current slide
  const currentSlide = slideContainer.querySelector(".active");
  //get next slide
  const nextSlide = currentSlide.nextElementSibling;
  //moving distance
  const movDistance = nextSlide.style.top;
  //slide current slide away
  slideContainer.style.transform = "translateY(-" + movDistance + ")";
  //set current slide
  currentSlide.classList.remove("active");
  //set next slide
  nextSlide.classList.add("active");
};

slideScreenUp = (e) => {};

//handlekeypress
handleArrowKeys = (e) => {
  if (e.keyCode == "40") {
    slideScreenDown();
  }
  if (e.keyCode == "38") {
  }
};

//add event listener
floater.addEventListener("click", slideScreenDown);
document.onkeydown = handleArrowKeys;
