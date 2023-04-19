// callback 콜백함수는
const callback = (number) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      number += 1; // 입력받은 매개변수에 1을 더해주고
      if (number < 5) return resolve(number); // 더해준 값이 5보다 작으면 그 값을 resolve 값으로 return
      reject("err"); // 아니라면 reject 처리 (err 반환)
    }, 3000);
  });
// promise를 리턴하고 있으므로 비동기!

/*
then, catch 사용하지 않고 코드 짜기
>> 동기적으로 읽을 수 있음

callback(5)
.then((res)=>console.log(res))
.catch((err)=>console.log(err))

then... catch... 는 비동기적인 실행에서 Promise에 chaining하는 방식으로 사용할 수 있음 (asynchronous operations)
*/

// await 없이 async를 쓰면 뒤의 함수가 비동기로 바껴서
const asyncAddNumber = async (number) => {
  try {
    const result = await callback(number); // callback(number) 가 실행되는 동안 wait
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// try... catch...는 비동기적 코드를 동기적으로 보이게 만들어주는 await과 함께 사용됨 (synchronous code)

// 여기다 then, catch 사용 가능함
asyncAddNumber(1);
