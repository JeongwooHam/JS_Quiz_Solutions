const pr1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Pr1 is done");
  }, 1000);
});

const pr2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Pr2 is rejected.");
  }, 2000);
});

const pr3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Pr3 is done.");
  }, 3000);
});

// Promise.all: 배열 내의 모든 promise 실행. 각 인덱스에 맞는 결과값을 반환
Promise.all([pr1, pr2, pr3])
  .then((result) => {
    console.log("Promise.all: ", result);
  })
  .catch((err) => console.log("Promise.all: ", err)); // 비동기 처리문인 promise들을 한 번에 실행시켜주는 것

// [1,2,3] >> 지연 시간과 관계 없이 순서대로 나옴. pr2의 지연 시간을 pr3보다 길게 해도 바뀌지 않음

// Promise.race: 먼저 온 순서대로(시간 순으로) 나열하여 하나만 출력( All x)
// 배열 내의 모든 promise 중 가장 빨리 오는 값을 반환
Promise.race([pr1, pr2, pr3])
  .then((result) => {
    console.log("Promise.race: ", result);
  })
  .catch((err) => {
    console.log(err);
  });

// all의 가장 큰 단점은 하나라도 실패하면 catch문으로 던져진다는 것
// 이를 해결하기 위한 방법
// Promise.allSettled: status를 통해 fulfilled와 rejcted를 나누고 성공과 실패의 분기를 나누어 사용이 가능함
Promise.allSettled([pr1, pr2, pr3]).then((result) =>
  console.log("Promise.allSettled: ", result)
);
// 비동기 통신에도 순서가 있어 allSettled가 all보다 먼저 실행됨

// ⭐ 위의 코드들 실행 결과
/*
  1) Pr1 is done: Promise.race 
  2) Pr2 is rejected: catch((err) => console.log(err)) >> pr2가 reject되었으므로 Promise.all 실행은 중단되었음
  3) [{...}, {...}, {...}]: Promise.allSettled
    (원래는 allSettled가 all 보다 먼저 실행되어야 한다.🤔)
*/

// 예외처리문
try {
  // 성공과 실패 가능성이 있는 실행문
  // 성공 시 실행할 문장
} catch {
  // 실패 시 실행할 문장
  // 에러 핸들링: 에러를 어떻게 다룰 것인지 정해야함
}
//try문에서 error가 나오면 상위 예외 처리문인 catch 문에서 예외를 catch하여 예외를 처리해준다.
