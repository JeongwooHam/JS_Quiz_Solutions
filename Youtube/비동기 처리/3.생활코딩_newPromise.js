// 보통 Promise를 밖에 꺼내 쓰기 보다는 함수 안에서 결과값으로 return해줌

function Task1() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Task1 is resolved."); // 성공한 결과값
    }, 2000); // 2초 후 콜백함수 실행
  });
}

function Task2() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Task2 is resolved.");
    }, 2000); // 2초 후 콜백함수 실행
  });
}

// Nested 방식
Task1().then(function (data1) {
  console.log(data1);
  Task2().then(function (data2) {
    console.log(data2);
  });
});

// Chaning 방식 >> 더 선호됨!
Task1()
  .then(function (data1) {
    console.log(data1);
    return Task2(); // then 안에서 Promise 값을 return
  })
  .then(function (data2) {
    console.log(data2);
  });

// Task1에 resolve 대신 reject('Task1 is failed.') 가 온다면?
Task1()
  .then(function (data1) {
    console.log(data1);
    return Task2(); // then 안에서 Promise 값을 return
  })
  .catch(function (reason) {
    // 종료된 이유를 받는 콜백함수
    console.log(reason);
    return Promise.reject(); // 후속 함수 then이 실행되지 않도록 함 (에러 발생) >> 파라미터로 reason 전달 가능
  })
  .then(function (data2) {
    console.log(data2);
  });
