document.addEventListener("DOMContentLoaded", function () {
  var slides = document.querySelectorAll(".slide");
  var currentSlide = 0;

  function showSlide(index) {
    slides[currentSlide].className = "slide";
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].className = "slide active";
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".next-btn").addEventListener("click", nextSlide);
    document.querySelector(".prev-btn").addEventListener("click", prevSlide);
  });

  setInterval(nextSlide, 2000);
});
