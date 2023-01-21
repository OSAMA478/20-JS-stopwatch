let secCounter = 0;
let minCounter = 0;

const btn = document.querySelector(".btn");

const secHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");

let interval;

btn.addEventListener("click", (e) => {
	if (e.target.classList.contains("start")) {
		clearInterval(interval);
		interval = setInterval(function start() {
			if (secCounter <= 360 || minCounter <= 360) {
				secCounter += 0.6;
				minCounter += 0.01;
				secHand.style.transform = `translate(-50%, -50%) rotate(${secCounter}deg)`;
				minHand.style.transform = `translate(-50%, -50%) rotate(${minCounter}deg)`;
			} else {
				secCounter = 0;
				minCounter = 0;
			}
		}, 100);
	}
	if (e.target.classList.contains("stop")) {
		clearInterval(interval);
	}
	if (e.target.classList.contains("reset")) {
		clearInterval(interval);
		secCounter = 0;
		minCounter = 0;
		secHand.style.transform = `translate(-50%, -50%) rotate(${secCounter}deg)`;
		secHand.style.transition = `all 0.5s`;
		minHand.style.transform = `translate(-50%, -50%) rotate(${secCounter}deg)`;
		minHand.style.transition = `all 0.5s`;
	}
});

// startBtn.addEventListener("click", () => {
// 	clearInterval(interval);
// 	interval = setInterval(function start() {
// 		if (secCounter <= 360 || minCounter <= 360) {
// 			secCounter += 0.6;
// 			minCounter += 0.01;
// 			secHand.style.transform = `translate(-50%, -50%) rotate(${secCounter}deg)`;
// 			minHand.style.transform = `translate(-50%, -50%) rotate(${minCounter}deg)`;
// 		} else {
// 			secCounter = 0;
// 			minCounter = 0;
// 		}
// 	}, 100);
// });

// stopBtn.addEventListener("click", function stop() {
// });

// resetBtn.addEventListener("click", () => {
// 	clearInterval(interval);
// 	secCounter = 0;
// 	minCounter = 0;
// 	secHand.style.transform = `translate(-50%, -50%) rotate(${secCounter}deg)`;
// 	secHand.style.transition = `all 0.5s`;
// 	minHand.style.transform = `translate(-50%, -50%) rotate(${secCounter}deg)`;
// 	minHand.style.transition = `all 0.5s`;
// });
