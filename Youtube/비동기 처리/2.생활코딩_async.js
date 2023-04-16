/*
비동기적인 코드들이 동기적인 코드들과 동일하게 동작하도록 하려면

async function run(){
    await 비동기적인 코드
    동기적인 코드
}

run()

- await이 붙은 promise를 리턴하는 함수는 반드시 async로 시작하는 다른 함수 안에서 실행되어야 함

*/

// time만큼 타이머가 작동하고 타이머 종료 시 Promise를 통해 콜백함수 호출하는 함수
function timer(time) {
  return new Promise(function (resolve) {
    // time만큼 시간을 지연시키다가 도달 시 콜백함수를 호출하며 Promise 실행
    setTimeout(function () {
      resolve(time);
    }, time);
  });
} // return값: Promise

/*
console.log("start");
//--1초--
timer(1000)
  .then(function (time) {
    console.log("time:" + time); // (time: 1000)
    return timer(time + 1000); // Promise 값을 return
  })
  .then(function (time) {
    console.log("time:" + time); // (time: 2000)
    return timer(time + 1000); // Promise 값을 return
  })(function (time) {
  console.log("time:" + time); // (time: 3000)
  console.log("end"); // 이렇게 넣어줘도 원하는 결과값 얻을 수 있기는 함
});
// console.log("end"); >> 그냥 쓰면 timer 함수 실행 전 start, end가 먼저 출력되어버림
*/

// 동기적인 코드처럼 만들고 싶다면..?🤔
async function run() {
  console.log("start");
  let time = await timer(1000); // 비동기적인 코드임을 명시
  // then 안의 콜백함수의 첫 번째 파라미터는 await에서는 리턴값을 사용하여 받을 수 있음 (변수에 담을 수 있다!)
  console.log("time: " + time);
  time = await timer(1000);
  console.log("time: " + time);
  time = await timer(1000);
  console.log("time: " + time);
  console.log("end");
} // Promise를 암시적으로 return

/*
console.log("parent start");
run();
console.log("parent end");
// parent start >> start >> parent end >> time: ~ >> end
*/

async function run2() {
  console.log("parent start");
  await run();
  console.log("parent end");
}
// async : 평범한 함수를 Promise를 return하는 비동기적인 코드로 만들어줌. 내부에서 await 사용 가능
// async 함수도 return 값을 가질 수 있음
