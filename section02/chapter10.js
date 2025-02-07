// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
console.log(date1); // 2025-02-07T10:38:24.368Z (현재 시간)

let date2 = new Date("1991-06-21");
console.log(date2); // 1991-06-21T00:00:00.000Z

// 년도, 월, 일, 시, 분, 초
let date3 = new Date(1991, 6, 21, 23, 59, 59);
console.log(date3); // 1991-07-21T14:59:59.000Z

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로부터 몇 ms가 지났는지를 의미하는 숫자값
// "1970.01.01 00시 00분 00초" : UTC (전 세계 표준 시간 시작 지점)
let ts1 = date1.getTime();
console.log(ts1); // 1738924991329 (현재 시간의 타임 스탬프)

let date4 = new Date(ts1); // 타임 스탬프에 해당하는 시간으로 Date 객체가 생성됨
console.log(date1, date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 자바스크립트의 "month"는 0부터 시작합니다.
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(year, month, date, hour, minute, seconds);

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);
console.log(date1); // Thu Mar 30 2023 23:59:59 GMT+0900 (한국 표준시)

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // Thu Mar 30 2023
console.log(date1.toLocaleString()); // 2023. 3. 30. 오후 11:59:59
