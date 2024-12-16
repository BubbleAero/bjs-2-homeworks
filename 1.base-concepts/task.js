"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let D = Math.pow(b, 2) - 4 * a * c;
  if (D > 0) {
    arr[0] = (-b + Math.sqrt(D)) / (2 * a);
    arr[1] = (-b - Math.sqrt(D)) / (2 * a);
  } else if (D === 0) {
    arr[0] = -b / (2 * a);
  } else {
    arr = [];
  }
  return arr;
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let monthlyRate = percent / 100 / 12;
	let creditBody = amount - contribution;

	if (creditBody <= 0) {
		return 0;
	}

	let monthlyPayment = creditBody *
		(monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1)));

	let totalPayment = monthlyPayment * countMonths;

	return Number(totalPayment.toFixed(2));
}

console.log(calculateTotalMortgage(10, 0, 50000, 12)); // 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24)); // 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); // 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // 0
console.log(calculateTotalMortgage(10, 0, 10000, 36)); // 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36)); // 12479.52