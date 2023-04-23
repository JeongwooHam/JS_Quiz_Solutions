import mockPost from "./mock.json" assert { type: "json" };
console.log(mockPost["post"]);

const $postDetail = document.querySelector("#post-detail");
const $repliesList = document.querySelector("#replies-list");

/* 
    import(참조)한 json data를
    게시글 상세와 댓글창에 나타내고 게시글 객체의 상세 내용은 console.log로 출력해두었습니다

    댓글 추가 버튼을 누르면 댓글이 추가되도록 해보세요 :)

    삭제 및 수정기능은 본인의 자유로 구현하시면 됩니다 :)
*/
const $post = mockPost["post"];
$postDetail.innerHTML = `<div>${$post["User"]["nickName"]}:<br>${$post.title}<br>${$post.content}</div>`;

const $replies = mockPost["post"]["Replies"];
for (let reply of $replies) {
  console.log(reply);
  $repliesList.innerHTML += `<li>${reply["User"]["nickName"]} : ${reply.content} 
  <button class = "editBtn">수정</button>
  <button class = "deleteBtn">삭제</button></li>`;
}

const $addBtn = document.querySelector("button");
$addBtn.addEventListener("click", function () {
  const $inputReply = document.querySelector("input").value;
  console.log($inputReply);

  const newReply = $repliesList.appendChild(document.createElement("li"));
  newReply.innerHTML = `${$inputReply}
  <button class = "editBtn">수정</button>
  <button class = "deleteBtn">삭제</button>`;

  document.querySelector("input").value = null;
});

console.log($repliesList);

const $deleteBtn = document.querySelectorAll(".deleteBtn");

/*
  const paintEventListener = function () {
      $allLists.forEach(($liElement) => {
        let $liButtons = $liElement.children;
        $liButtons[1].addEventListener("click", () => {
          if ($liButtons[0].classList.contains("hidden")) {
            $liButtons[0].classList.remove("hidden");
          } else {
            $liElement.firstChild.nodeValue = $liButtons[0].value;
            $liButtons[0].value = null;
            $liButtons[0].classList.add("hidden");
          }
          resetAllLists();
        });
        $liButtons[2].addEventListener("click", () => {
          removeNode($liElement.id);
        });
      });
    };
*/
