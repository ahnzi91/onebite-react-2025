// 1. 묵시적 형 변환
// -> 자바스크립트 인젠이 알아서 형 변환 하는 것

let num = 10;
let str = "20";

const result = num + str;
console.log(result);

// 2. 명시적 형 변환
// -> 개발자들이 내장 함수 등을 이용해서 직접 형 변환을 명시
// 내장 함수 : 자바스크립트가 기본적으로 제공하는 함수

// 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);
console.log(strToNum1); // 10

let str2 = "10개";
let strToNum2 = Number(str2);
console.log(strToNum2); // NaN

let str3 = "10개";
let strToNum3 = parseInt(str3);
console.log(strToNum3); // 10

let str4 = "abcd10개";
let strToNum4 = parseInt(str4);
console.log(strToNum4); // NaN

// 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다."); // 20입니다.
