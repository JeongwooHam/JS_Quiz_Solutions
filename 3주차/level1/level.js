import { BANK_LIST, ACCOUNT_FORM } from "./account.js";

console.log(BANK_LIST);
console.log(ACCOUNT_FORM);

// select에 options 렌더링하기
const $select = document.querySelector("#bank-selector");
const bankName = Object.values(BANK_LIST);
console.log(bankName);
const accountFormArr = Object.values(ACCOUNT_FORM);
console.log(accountFormArr);
const $accountList = document.querySelector("#account-list");

let optionHTML = "";
function selectOptions() {
  for (let i = 0; i < bankName.length; i++) {
    optionHTML += `<option value='${bankName[i]}'>${bankName[i]}</option>`;
  }
  $select.innerHTML = optionHTML;
}
selectOptions();
console.log(optionHTML);

// 계좌번호 12자리가 안 되는 경우 alert 뜨게 하기
const $input = document.querySelector("#account-send-form");
const $inputAccount = document.querySelector("#account-input");

$input.addEventListener("submit", function (e) {
  e.preventDefault();
  let target = $inputAccount.value;

  if (target.length < 12) {
    alert("12자리를 입력해주세요.");
  } else {
    // 입력된 계좌번호를 선택된 은행의 양식에 맞춰 출력하기
    const $selectedBank = document.querySelector("#bank-selector");

    const inputArr = $inputAccount.value.split("");
    console.log(inputArr);

    inputArr.splice(2, 8, "*", "*", "*", "*", "*", "*", "*", "*");
    console.log(inputArr);

    // index = bankName.indexof($selectedBank.value)
    // targetForm = accountFormArr[index]
    // result = 0인 경우 inputArr의 각 요소들로 replaceAll. -는 그냥 두기
    console.log($selectedBank.value);
    const index = bankName.indexOf($selectedBank.value);
    console.log(index);
    let targetForm = accountFormArr[index];
    console.log(targetForm);
    for (let i of inputArr) {
      targetForm = targetForm.replace("0", i);
    }
    console.log(targetForm);

    // 1) account-list의 childNode에 append하여 화면에 rendering
    // 2) account-list의 innerHTML에 넣어 화면에 rendering (1 구현 실패 시)
    const li = $accountList.appendChild(document.createElement("li"));
    li.textContent = `${$selectedBank.value} : ${targetForm}`;
  }
});
