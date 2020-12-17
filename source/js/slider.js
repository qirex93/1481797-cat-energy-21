var beforeButton = document.querySelector(".slider__toggle--before");
var afterButton = document.querySelector(".slider__toggle--after");
var sliderImage = document.querySelector(".slider__comparison");
var sliderToggle = document.querySelector(".slider__progress-toggle");
var divisor = document.querySelector(".slider__divisor");
var slider = document.querySelector(".slider__range");

function moveDivisor() {
  divisor.style.width = slider.value+"%";
}

window.onload = function() {
  moveDivisor();
};

beforeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  sliderImage.style.backgroundImage = "url('../img/cat-fat.png')";
  sliderImage.style.backgroundSize = "cover";
  sliderToggle.style.marginLeft = "0";
});

afterButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  sliderImage.style.backgroundImage = "url('../img/cat-skinny.png')";
  sliderImage.style.backgroundSize = "100% 232px";
  sliderToggle.style.marginLeft = "37px";
});
