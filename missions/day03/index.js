// Quiz 1. 모든 약수 찾기
let num = 100;
let result = [];
for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    result.push(i);
  }
}

console.log(result);

// Quiz 2. 소수 판별기
function isPrimeNumber(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrimeNumber(1)); // true
console.log(isPrimeNumber(4)); // false
console.log(isPrimeNumber(11)); // true
console.log(isPrimeNumber(12)); // false

// Quiz3. 계산기 만들기
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function calculate(num1, num2, operation) {
  const result = operation(num1, num2);
  console.log(result);
}

calculate(5, 3, add);
calculate(5, 3, subtract);
