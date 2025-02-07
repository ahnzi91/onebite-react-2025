// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// -> 배열의 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

// 콜백 함수
// item : 현재 요소의 값
// idx : 현재 반복 카운트
// arr : 전체 배열
arr1.forEach(function (item, idx, arr) {
  console.log(idx, item * 2); // 0 2, 1 4, 2 6
});

let doubledArr = [];
arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

console.log(doubledArr); // [2, 4, 6]

// 2. includes
// -> 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
let isNotInclude = arr2.includes(10);

console.log(isInclude); // true
console.log(isNotInclude); // false

// 3. indexOf
// -> 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
let index2 = arr3.indexOf(20);
console.log(index); // 1
console.log(index2); // -1 (존재하지 않음)

// 4. findIndex
// -> 모든 요소를 순회하면서 콜백함수를 만족하는 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => {
  if (item === 2) return true;
});
console.log(findedIndex); // 1

// indexOf vs findIndex
// indexOf : 얕은 비교
// -> 배열의 특정 객체 값이 존재하는지 찾아낼 수 없음

// findIndex : 깊은 비교
// -> 콜백 함수를 이용해 직접 특정 프로퍼티의 값을 기준으로 비교를 할 수 있음

// 5. find
// -> 모든 요소를 순회하면서 콜백 함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [{ name: "안지훈" }, { name: "홍길동" }];
const finded = arr5.find((item) => item.name === "안지훈");
console.log(finded); // { name: '안지훈' }
