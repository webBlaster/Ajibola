//slide container reference
const slideContainer = document.querySelector(".slidecontainer");
//array of slides
let slides = Array.from(slideContainer.children);
//slide Height
let slideHeight = slides[0].clientHeight;
//set slide positions
slides.forEach((element, index) => {
  element.style.top = "" + slideHeight * index + "px";
});
