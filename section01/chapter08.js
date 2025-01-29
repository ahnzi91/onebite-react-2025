// 1. null 병합 연산자
let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
console.log(var4); // 10

let var5 = var1 ?? var3;
console.log(var5); // 20

let var6 = var2 ?? var3;
console.log(var6); // 10

// 예제
let userName;
let userNickName = "Ahnzi";

let displayName = userName ?? userNickName;

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자
let var7 = 1;
var7 = "hello";

let t1 = typeof var7;
console.log(t1);

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환
let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"
let res = var8 % 2 === 0 ? "짝수" : "홀수";
