"use strict";

// Promise is a JS object for asynchoronous operation.
// state: pending > fulfilled or rejected
// Producer vs Consumer

// 1. Producer : doing some heavy work (network, read files)
// When new Promise is created, the excutor runs automatically.
// Promise를 만드는 순간 안에 전달한 executor이라는 콜백함수가 바로 실행되므로 이에 유의하여 코드 짤 것
const promise = new Promise((resolve, reject) => {
  console.log("doing sth...");
  setTimeout(() => {
    resolve("aa"); // 성공적으로 받아온 데이터
    reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise
  .then((val) => {
    console.log(val);
  })
  .catch((error) => console.log(error))
  .finally(() => console.log("end"));

// 3. Promise Chaining
const fetchNum = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNum // 1 전달
  .then((num) => num * 2) // 2
  .then((num) => num * 3) // 6
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000); // 5
    });
  })
  .then((num) => console.log(num)); // 5

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("HEN"), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => EGG`), 1000);
    setTimeout(() => reject(new Error(`error! ${hen} => EGG`)), 1000);
  });

const cookEgg = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => FRIED EGG`), 1000);
  });

/*
getHen()
  .then((hen) => getEgg(hen))
  .then((egg) => cookEgg(egg))
  .then((meal) => console.log(meal));
*/

getHen()
  .then(getEgg) // 자동적으로 then에서 받아오는 value를 암묵적으로 전달하므로 생략 가능
  .catch((error) => {
    return "BREAD";
  })
  .then(cookEgg)
  .then(console.log)
  .catch(console.log);

// 5. Callback to Promise (클래스는 그대로 사용!!)

// const userStorage = new UserStorage();
class UserStorage {
  login(id, pw) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "AA11" && pw === "aa11") ||
          (id === "BB22" && pw === "bb22")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }

  // 사용자의 데이터를 받아 사용자마다 가지고 있는 역할들을 서버에게 다시 요청해 정보를 받아옴
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "AA11") {
          resolve({ name: "aa", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const pw = prompt("enter your pw");

userStorage
  .login(id, pw)
  .then(userStorage.getRoles)
  .then((user) => {
    alert(`Hello ${user.name}! You have a ${user.role} role.`);
  })
  .catch(console.log);
