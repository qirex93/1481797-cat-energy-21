var divisor = document.querySelector(".slider__divisor"),
slider = document.querySelector(".slider__range");
function moveDivisor() {
	divisor.style.width = slider.value+"%";
}

window.onload = function() {
	moveDivisor();
};
