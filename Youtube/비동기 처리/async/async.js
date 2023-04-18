/*
async and await
; clear style of using Promise
*/

// 1. async
async function fetchUser() {
  //   return new Promise((resolve, reject) => {
  // do network request in 10 secs...
  return "aa";
  //   });
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return "APPLE";
}

async function getBanana() {
  await delay(1000);
  return "BANANA";
}
/*
이를 chaining 구조로 표현하면
function getBanana() {
    return delay(3000)
    .then(() => 'BANANA')
}
*/

/*
function pickFruits(){
    return getApple()
    .then(apple => {
        return getBanana()
        .then(banana => `${apple} + ${banana]}`);
    });
}

pickFruits().then(console.log);
*/

// async function pickFruits() {
//   const apple = await getApple(); // 값을 담아주어야 사용할 수 있음
//   const banana = await getBanana();
//   return `${apple} + ${banana}`;
// }

// pickFruits().then(console.log);

// await 병렬 처리
/*
    getApple과 getBanana 작업 사이에 연관이 없음에도 불구하고
    getBanana가 getApple의 작업을 기다렸다 실행되는 것은 비효율적임
*/

async function pickFruits() {
  // Promise를 만드는 순간(만들자마자!) Promise 안에 들어있는 코드 블록이 실행됨을 활용
  const applePromise = getApple();
  const bananaPromise = getBanana();

  // 동기화시켜주기 (동시 실행 되도록)
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// Useful Promise APIs
// 모든 과일 받아오기
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  ); // 다 받아진 배열을 join;
}

pickAllFruits().then(console.log);

// 제일 먼저 오는 것만 받아오기
function pickFirstFruit() {
  return Promise.race([getApple(), getBanana()]);
}
pickFirstFruit().then(console.log);

// Callback to Promise to Async&Await!
