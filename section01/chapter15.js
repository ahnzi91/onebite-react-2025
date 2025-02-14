// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name: "안지훈",
  age: 35,
  hobby: "헬스",
  job: "FE Developer",
  "Like Cat": true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
console.log(name); // 안지훈

let age = person["age"];
console.log(age); // 35

let property = "hobby";
let hobby = person[property];
console.log(hobby); // 헬스

// 3.2 새로운 프로퍼티 추가
person.favoriteFood = "순대국";
person["weight"] = 100;
console.log(person);

// 3.3 프로퍼티 수정
person.job = "Educator";
person["favoriteFood"] = "마라탕";
console.log(person);

// 3.4 프로퍼티 삭제
delete person.favoriteFood;
console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result1); // true
console.log(result2); // false
