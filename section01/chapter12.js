// 1. 함수 선언식 : 함수가 특정 변수에 담기지 않은 상태
function funcA() {
  console.log("funcA");
}
let varA = funcA;
varA();

// 2. 함수 표현식 : 함수를 값으로 생성하는 방식
// 호이스팅 불가
// varB(); // 불가
let varB = function funcB() {
  console.log("funcB");
};
varB();

// 3. 화살표 함수
let varC = () => console.log("varC");
let varD = (value) => value + 1;

varC();
console.log(varD(10));
