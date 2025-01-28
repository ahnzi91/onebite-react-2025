// Quiz 1
// const x = 15;
// const y = 20;

// if (x > y) {
//   max = x;
// } else {
//   max = y;
// }

// console.log(max);

const x = 15;
const y = 20;

let max = x > y ? x : y;
console.log(max);

// Quiz 2
const a = true;

if (typeof a === "number") {
  console.log("숫자");
} else if (typeof a === "string") {
  console.log("문자열");
} else if (typeof a === "boolean") {
  console.log("불리언");
} else if (typeof a === "undefined") {
  console.log("언디파인드");
} else if (typeof a === "object") {
  console.log("객체");
} else {
  console.log("타입을 알 수 없습니다.");
}

const b = true;

switch (typeof b) {
  case "number": {
    console.log("숫자");
    break;
  }
  case "string": {
    console.log("문자열");
    break;
  }
  case "boolean": {
    console.log("불리언");
    break;
  }
  case "undefined": {
    console.log("언디파인");
    break;
  }
  case "object": {
    console.log("객체");
    break;
  }
}

// Quiz 3
let temperature = 10;

if (temperature < 0) {
  console.log("매우 추움");
} else if (temperature >= 0 && temperature < 10) {
  console.log("추움");
} else if (temperature >= 10 && temperature < 20) {
  console.log("적당");
} else {
  console.log("더움");
}
