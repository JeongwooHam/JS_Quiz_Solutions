const users = [
  {
    id: 1,
    name: "김사과",
    age: 20,
    height: 190,
  },
  {
    id: 2,
    name: "이수박",
    age: 32,
    height: 185,
  },
  {
    id: 3,
    name: "오렌지",
    age: 20,
    height: 180,
  },
  {
    id: 4,
    name: "이멜론",
    age: 28,
    height: 175,
  },
];

const $info = document.querySelector("#info");
$info.innerHTML = `
    <div>${users[0].name}</div>
    <div>${users[0].age}</div>
    <div>${users[0].height}</div>
`;

/* 
유저 목록 순서대로 보여주기
다음 버튼을 누르면 다음 유저가 보여져야합니다. 단, 마지막 유저일 시 다음은 다시 첫번째 유저가 되어야합니다.
이전 버튼을 누르면 이전 유저가 보여져야합니다. 단, 첫번째 유저일 시 이전은 마지막 유저가 되어야합니다.

또한 DOM API와 배열을 다뤄야할 때 인덱스가 필요한 시점이나 상황이 언제일지 고민해보세요 :)

1. prev, next에 addEventListener
2. prev 누르면 index - 1
  (단, index가 0보다 작아지면 .length-1)
3. next 누르면 index + 1
  (단, index가 .length-1보다 커지면 0)
*/

const $prevBtn = document.querySelectorAll("button")[0];
const $nextBtn = document.querySelectorAll("button")[1];

console.log($prevBtn);
console.log($nextBtn);

let cnt = 0;

function move(cnt) {
  $info.innerHTML = `
  <div>${users[cnt].name}</div>
  <div>${users[cnt].age}</div>
  <div>${users[cnt].height}</div>
`;
}

$prevBtn.addEventListener("click", function () {
  if (cnt <= 0) {
    cnt = users.length - 1;
  } else {
    cnt -= 1;
  }
  move(cnt);
});

$nextBtn.addEventListener("click", function () {
  if (cnt >= users.length - 1) {
    cnt = 0;
  } else {
    cnt += 1;
  }
  move(cnt);
});
