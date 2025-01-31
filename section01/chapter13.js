// 1. 콜백 함수
function main(value) {
  value();
}

function sub() {
  console.log("I am sub.");
}

main(sub);
// 콜백 함수를 직접 써줄 수도 있습니다.
// main(() => {
//   console.log("I am sub.");
// });

// 2. 콜백 함수의 활용
// function repeat(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx);
//   }
// }

// function repeatDouble(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx * 2);
//   }
// }

// repeat(5);
// repeatDouble(5);

function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}
repeat(5, function (idx) {
  console.log(idx);
});

repeat(5, function (idx) {
  console.log(idx * 2);
});

repeat(5, function (idx) {
  console.log(idx * 3);
});
