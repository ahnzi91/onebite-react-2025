// 함수 선언
// -> 함수를 새롭게 만드는 행위
function greeting() {
  console.log("안녕하세요!");
}

console.log("호출 전");
greeting();
console.log("호출 후");

// 직사각형 넓이 구하는 함수
// width와 height는 "매개변수"라고 부릅니다.
function getArea(width, height) {
  function another() {
    console.log("another");
  }

  another();

  let area = width * height;

  return area; // area : 반환값
}

// getArea(인수, 인수)
let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

let area3 = getArea(120, 200);
console.log(area3);
