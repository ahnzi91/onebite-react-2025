function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

console.log(returnFalse() && returnTrue()); // false

// 단락 평가 활용 사럐
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}
printName(); // person의 값이 없음
printName({ name: "안지훈" }); // 안지훈
