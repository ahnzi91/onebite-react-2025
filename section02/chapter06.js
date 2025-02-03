// 1. 배열 순회
let arr = [1, 2, 3];

// 1-1. 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 1, 2, 3
}

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]); // 4, 5, 6, 7, 8
}

// 1-2. for of 반복문
// -> of 뒤에 있는 arr 배열의 값을 하나씩 순서대로 꺼내서 변수 item에 저장
for (let item of arr) {
  console.log(item); // 1, 2, 3
}

// 2. 객체 순회
let person = {
  name: "안지훈",
  age: 35,
  hobby: "헬스",
};

// 2-1. Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
console.log(keys); // ["name", "age", "hobby"]

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]); // name age hobby
}

for (let key of keys) {
  const value = person[key];
  console.log(key, value); // name 안지훈 age 35 hobby 헬스
}

// 2-2. Object.values 사용
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
console.log(values); // ["안지훈", 35, "헬스"]

for (let value of values) {
  console.log(value); // 안지훈 35 헬스
}

// 2-3. for in
for (let key in person) {
  const value = person[key];
  console.log(key, value); // name 안지훈 age 35 hobby 헬스
}
