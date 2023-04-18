// 5. Callback to Promise (클래스는 그대로 사용!!)

// const userStorage = new UserStorage();
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class UserStorage {
  async login(id, pw) {
    if ((id === "AA11" && pw === "aa11") || (id === "BB22" && pw === "bb22")) {
      await delay(1000);
      console.log("hi");
      return id;
    } else {
      return console.log("not found");
    }
  }

  // 사용자의 데이터를 받아 사용자마다 가지고 있는 역할들을 서버에게 다시 요청해 정보를 받아옴
  async getRoles(user) {
    if (user === "AA11") {
      await delay(1000);
      console.log("bye");
      return { name: "aa", role: "admin" };
    } else {
      return console.log("no access");
    }
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const pw = prompt("enter your pw");

userStorage
  .login(id, pw)
  .catch()
  .then((val) => userStorage.getRoles(val))
  .then((val) => {
    alert(`Hello ${val.name}! Your role is ${val.role}!`);
  })
  .catch();
