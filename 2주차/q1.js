/*
변수 위치 찾기
[O]변수 a는 main 함수 안에서 사용된다
[]변수 b는 dom api selector로 다른 이벤트에서 사용된다
[O]변수 c는 메인 함수 안에서 실행되는 콜백함수 solution의 인자이다
[O]변수 d는 솔루션 함수에서 전달받은 c를 다른 형태로 바꿔준다.
[O]변수 e는 main함수의 최종 반환 값으로 향후 다른 함수에서 재사용된다.
*/

function solution(c) {
  let d = c + 100;
  return d;
}

function parse() {
  let e = document.querySelector("something");
  e.addEventListener("click", function () {
    e.style.display = "none";
  });
}

function main(solution) {
  let a = 10;
  let e = solution + a;
  return e;
}

console.log(main(solution(100)));
