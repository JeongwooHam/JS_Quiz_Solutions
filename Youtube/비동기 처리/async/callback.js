"use strict";

// 드림코딩

/*
JavaScript is synchronous.
Execute the code block in order after hoisting.
*/
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");

// Synchronous Callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log(":)"));

// Asynchoronous Callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

// 1 > 3 > :) > 2 > async callback

// Callback Hell
class UserStorage {
  login(id, pw, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "AA11" && pw === "aa11") ||
        (id === "BB22" && pw === "bb22")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  // 사용자의 데이터를 받아 사용자마다 가지고 있는 역할들을 서버에게 다시 요청해 정보를 받아옴
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "AA11") {
        onSuccess({ name: "aa", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const pw = prompt("enter your pw");

userStorage.login(
  id,
  pw,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}! You have a ${userWithRole.role} role.`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
