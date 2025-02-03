// 1. Falsy 한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if (!f1) {
  console.log("Falsy");
}

// 2. Truthy 한 값
// -> 7가지 Falsy 한 값들을 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t1) {
  console.log("Truthy");
}

// 3. 활용 사례
function printName(person) {
  // 복잡한 예시
  // if (person === undefined || person === null) {
  //   console.log("person의 값이 없습니다.");
  //   return;
  // }

  // Falsy 한 값 예시
  if (!person) {
    console.log("person의 값이 없습니다.");
    return;
  }
  console.log(person.name);
}

// let person = null; // Falsy 한 값
let person = { name: "안지훈" }; // Truthy 한 값
printName(person);
