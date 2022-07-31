const button = document.querySelector('button');
const generated = document.querySelector('.generated');
const min = document.querySelector('.min');
const max = document.querySelector('.max');
const average = document.querySelector('.average');
const sum = document.querySelector('.sum');
const mult = document.querySelector('.mult');

button.addEventListener('click', (event) => {
	event.preventDefault();

	generateNum();
	getMin();
	getMax();
	getAverageNum();
	getSum();
	getMult();
});

const arr = [];

function generateNum() {
	for (let i = 0; i < 10; i++) {
		arr[i] = getRandomNum(-10, 10);
	}

	generated.textContent = arr;
}

function getRandomNum(min, max) {
	return Math.floor(Math.random() * (max + 1 - min) + min);
}

function getMin() {
	min.textContent = Math.min.apply(null, arr);
}

function getMax() {
	max.textContent = Math.max.apply(null, arr);
}

function getAverageNum() {
	for (let i = 0; i < arr.length; i++) {
		let averageSum = arr.reduce((acc, num) => acc + num);
		average.textContent = averageSum / arr.length;
	}
}

function getSum() {
	for (let i = 0; i < arr.length; i++) {
		sum.textContent = arr.reduce((acc, num) => acc + num);
	}
}

function getMult() {
	for (let i = 0; i< arr.length; i++) {
		mult.textContent = arr.reduce((acc, num) => acc * num);
	}
}