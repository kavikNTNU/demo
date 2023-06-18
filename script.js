let currentSlide = 0;
const slides = document.getElementsByClassName("slide");

function showSlide(slideIndex) {
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Display the current slide
  slides[slideIndex].style.display = "block";
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function previousSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

// Display the first slide initially
showSlide(currentSlide);

// Change slide every 5 seconds (adjust the duration as needed)
setInterval(nextSlide, 5000);