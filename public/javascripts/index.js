"use strict"

const card = document.getElementById("card");

document.getElementById("overview").addEventListener("mousemove", (e) => {
	card.style.transition = "none";
	if (window.innerWidth <= 600) {
		card.style.transition = "transform 2s ease";
	}
	rotateElement(e, card);
}, 0);
document.getElementById("overview").addEventListener("mouseleave", (e) => {
	rotate_back(card);
}, 0);

function rotateElement(event, element) {
	const x = event.clientX;
	const y = event.clientY;
	
	// base card movement off position relative to overview section and its size
	const overview_rect = document.getElementById("overview").getBoundingClientRect();
	let middleX;
	if (window.innerWidth <= 1180) {
		middleX = overview_rect.left + overview_rect.width / 2;
	} else {
		middleX = overview_rect.left + overview_rect.width / 4;
	}
	const middleY = overview_rect.bottom - overview_rect.height / 2;

	const offsetX = ((x - middleX) / middleX) * 30;
	const offsetY = ((y - middleY) / middleY) * 30;

	element.style.setProperty("--rotateX", -1 * offsetY + "deg");
	element.style.setProperty("--rotateY", offsetX + "deg");
}

function rotate_back(element){
	element.style.transition = "transform 2s ease";
	element.style.setProperty("--rotateX", "0deg");
	element.style.setProperty("--rotateY", "0deg");
}

function copy(element) {
	navigator.clipboard.writeText("vova" + "herdman" + "@" + "gmail" + ".com")
		.then(() => {
			element.classList.toggle("copied-popup");
			setTimeout(() => {
				element.classList.toggle("copied-popup");
			}, 1500);
		})
		.catch(() => {
			console.error("error copying to clipboard")
		});
}

//TODO - Dizzyness when circling card head multiple times
