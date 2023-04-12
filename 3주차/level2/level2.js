import { RESERVATION_LIST } from "./reservation .js";
console.log(RESERVATION_LIST);

/* 
예약 고객확인하기
*/

const $submitBtn = document.querySelector("form > button");
console.log($submitBtn);
const $inputName = document.querySelectorAll("form > p > input")[0];
const $inputPhoneNum = document.querySelectorAll("form > p > input")[1];
console.log($inputName);
console.log($inputPhoneNum);
const $resultArea = document.querySelector("#reservation-number");

$submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const nameVal = $inputName.value;
  const phoneNumVal = $inputPhoneNum.value;

  const nameArr = RESERVATION_LIST.map((el) => el.name);
  console.log(nameArr);

  const sortedArr = RESERVATION_LIST.filter((el) => el.name === nameVal);
  console.log(sortedArr);

  const phoneNumArr = sortedArr.map((el) => el.phone);
  console.log(phoneNumArr);

  if (!nameArr.includes(nameVal) || !phoneNumArr.includes(phoneNumVal))
    return alert("일치하는 항목이 없습니다.");

  const result = RESERVATION_LIST.find(
    (el) => el.name === nameVal && el.phone === phoneNumVal
  );
  console.log(result.number);

  $resultArea.textContent = result.number;
});
