// 5가지 배열 변형 메서드
// 1. filter
// -> 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
// 웹서비스 개발 시 특정 조건에 의해서 검색하는 기능이나 카테고리 별 필터 기능을 만들 때 자주 사용되는 메서드
let arr1 = [
  { name: "안지훈", hobby: "테니스" },
  { name: "홍길동", hobby: "테니스" },
  { name: "백문희", hobby: "영화보기" },
];

const tennisPeople = arr1.filter((item) => {
  if (item.hobby === "테니스") return true;
});

console.log(tennisPeople); // [ { name: '안지훈', hobby: '테니스' }, { name: '홍길동', hobby: '테니스' } ]

// 2. map
// -> 배열의 모든 요소를 순회하면서 각각 콜백 함수를 실행하고 그 결과 값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});
console.log(mapResult1); // [2, 4, 6]

// arr1 배열에서 name의 value만 묶어서 반환해주기
let names = arr1.map((item) => item.name);
console.log(names); // ['안지훈', '홍길동', '백문희']

// 3. sort
// -> 배열을 사전 순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();
console.log(arr3); // ["a", "b", "c"]

// 만약 숫자로 이루어진 배열이면 sort 메서드는 정상적으로 동작하지 않음
let arr4 = [10, 3, 5];
arr4.sort();
console.log(arr4); // [10, 3, 5]

// 숫자의 대소 관계를 기준으로 정렬하고 싶을 때 sort() 메서드 안에 비교 기준을 명시해줘야함
// 오름차순
arr4.sort((a, b) => {
  if (a > b) {
    // b가 a 앞에 와라
    return 1;
  } else if (b > a) {
    // a가 b 앞에 와라
    return -1;
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0;
  }
});
console.log(arr4); // [3, 5, 10]

// 내림차순
arr4.sort((a, b) => {
  if (a > b) {
    // a가 b 앞에 와라
    return -1;
  } else if (b > a) {
    // b가 a 앞에 와라
    return 1;
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0;
  }
});
console.log(arr4); // [10, 5, 3]

// 4. toSorted (가장 최근에 추가된 최신 함수)
// -> sort 메서드는 원본 배열 자체를 정렬
// -> toSorted 메서드는 새로운 배열을 반환
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();
console.log(arr5); // ["c", "a", "b"]
console.log(sorted); // ["a", "b", "c"]

// 5. join
// -> 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arr6 = ["hi", "im", "ahnzi"];
const joined = arr6.join("");
console.log(joined); // hiimahnzi
