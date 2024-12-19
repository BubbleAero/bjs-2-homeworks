"use strict"

function getArrayParams(...arr) {

	if (arr.length === 0) return {min: 0, max: 0, avg: 0};

	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];

		if (element > max) {
			max = element;
		}

		if (element < min) {
			min = element;
		}

		sum += element;

	}

	const avg = Number((sum / arr.length).toFixed(2));


	return {min, max, avg};
}

console.log(getArrayParams(-99, 99, 10)); // { min: -99, max: 99, avg: 3.33 }
console.log(getArrayParams(1, 2, 3, -100, 10)); // { min: -100, max: 10, avg: -16.80 }
console.log(getArrayParams(5)); // { min: 5, max: 5, avg: 5 }
console.log(getArrayParams()); // { min: 0, max: 0, avg: 0 }


function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((sum, current) => sum + current, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;
  
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (const ar of arr) {
    if (ar % 2 === 0) {
      sumEvenElement += ar;
    } else {
      sumOddElement += ar;
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (const ar of arr) {
    if (ar % 2 === 0) {
      sumEvenElement += ar;
      countEvenElement += 1;
    }
  }

  return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement;
}



function makeWork (arrOfArr, func) {

	let maxWorkerResult = -Infinity;

	for (const arr of arrOfArr) {
		const result = func(...arr);
		if (result > maxWorkerResult){
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult; 

}
