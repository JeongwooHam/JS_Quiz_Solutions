/* 
레시피 재료 추가하기
*/

const $form = document.querySelector("#ingredient-form");
const $addBtn = document.querySelector("#ingredient-form > button");
$addBtn.setAttribute("type", "submit");
console.log($addBtn);
const $submitBtn = document.querySelector("#submit_button");
const $resultArea = document.querySelector("#ingredient-list");

// 입력된 재료인지 검사하기 위해 빈 배열 추가
let nameArr = [];

let weightArr = [];

// 추가 버튼
$form.addEventListener("submit", function (e) {
  e.preventDefault();
  const $inputName = $form.querySelectorAll("input")[0].value;

  // 이미 입력된 재료인지 검사하기
  if (nameArr.includes($inputName)) return alert("이미 존재하는 재료입니다.");

  console.log($inputName);
  const $inputWeight = $form.querySelectorAll("input")[1].value;
  console.log($inputWeight);

  // 재료, 무게 입력 시 테이블에 데이터 추가
  const $table = document.querySelector("table");
  const newTr = $table.appendChild(document.createElement("tr"));
  newTr.innerHTML = `<td class="name">${$inputName}</td>
  <td class="weight">${$inputWeight}</td>
  <td><button type="button" class='delete-btn'>삭제</button></td>`;

  // 입력된 값 배열에 담아서 나중에 검사할 때, 객체에 담을 때 사용
  nameArr.push($inputName);
  console.log(nameArr);
  weightArr.push($inputWeight);

  // 삭제 버튼
  // 삭제 시 nameArr 에서도 해당 값이 삭제되어 다시 입력될 수 있도록 해야 함
  const $deleteBtn = document.querySelectorAll(".delete-btn");
  $deleteBtn.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const targetName = e.target.parentNode.parentNode.firstChild.textContent;
      const deletedIndex = nameArr.indexOf(targetName);
      console.log(deletedIndex);
      //   console.log(targetName);
      nameArr = nameArr.filter((el) => el !== targetName);
      weightArr = weightArr.filter((_, index) => index !== deletedIndex);
      e.target.parentNode.parentNode.remove();
    });

    let resultArr = [];

    // 제출 버튼
    $submitBtn.addEventListener("click", function () {
      const newNameArr = document.querySelectorAll(".name");
      const newWeightArr = document.querySelectorAll(".weight");

      console.log(newNameArr);
      console.log(newWeightArr);
      for (let i = 0; i < nameArr.length; i++) {
        resultArr.push({
          name: newNameArr[i].textContent,
          weight: newWeightArr[i].textContent,
        });
      }
      console.log(resultArr);
      const result = resultArr
        .map((el) => `<li>${el.name} : ${el.weight}</li>`)
        .join("");
      console.log(result);

      $resultArea.innerHTML = result;
      resultArr = [];
    });
  });
});
