function timer(time) {
  return new Promise(function (resolve, reject) {
    // time만큼 시간을 지연시키다가 도달 시 콜백함수를 호출하며 Promise 실행
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}

console.time("Promise.all");
// 배열로 전달된 Promise들 중 가장 늦게 끝나는 작업이 끝났을 때 then 호출
Promise.all([timer(1000), timer(2000), timer(3000)]).then(function (result) {
  console.log(result); // timer(3000)이 끝나면 결과값 배열로 나옴
  console.timeEnd("Promise.all");
});

console.time("Promise.race");
// 배열로 전달된 Promise들 중 가장 먼저 끝나는 작업이 끝났을 때 then 호출
Promise.race([timer(1000), timer(2000), timer(3000)]).then(function (result) {
  console.log(result); // timer(1000)이 끝나면 결과값 1000이 나옴
  console.timeEnd("Promise.race");
});
