"use strict"

const card = document.getElementById("card");

document.getElementById("overview").addEventListener("mousemove", (e) => {
	card.style.transition = "none";
	rotateElement(e, card);
}, 0);
document.getElementById("overview").addEventListener("mouseleave", (e) => {
	rotate_back(card);
}, 0);

function rotateElement(event, element) {
	const x = event.clientX;
	const y = event.clientY;

	const middleX = window.innerWidth / 2;
	const middleY = window.innerHeight / 2;

	const offsetX = ((x - middleX) / middleX) * 40;
	const offsetY = ((y - middleY) / middleY) * 40;

	element.style.setProperty("--rotateX", -1 * offsetY + "deg");
	element.style.setProperty("--rotateY", offsetX + "deg");
}

function rotate_back(element){
	element.style.transition = "transform 2s ease";
	element.style.setProperty("--rotateX", "0deg");
	element.style.setProperty("--rotateY", "0deg");
}