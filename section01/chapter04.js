// 1. 변수
let age = 27;
console.log(age); // 27

age = 30;
console.log(age); // 30

let address;
console.log(address); // undefined

// 2. 상수
const birth = "2025.01.01";
birth = 123;

// 3. 변수 명명 규칙 (네이밍 규칙)
// 3-1. $, _ 두 기호를 제외한 기호는 변수명에 사용할 수 없다.
// let #name = "hello";
let $_name = "hello";

// 3-2. 숫자로 시작할 수 없다.
// let 2name;
let name1;
let $2name;

// 3-3. 예약어를 사용할 수 없다.
// let let;
// let if;
