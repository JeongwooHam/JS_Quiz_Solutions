/*
        Synchoronous(동기)      |       Asynchoronous(비동기)
        순차적으로 실행됨         메인이 되는 실행 순서와는 별개로  실행
                                    어떤 명령이 언제 끝날지 예측하기 어렵거나
                                    주가 되는 작업이 아닐 때 (예: 통신)
*/

console.log(1);
// fetch는 promise를 return 하므로 일반적으로 변수로 사용하지 않음
fetch("https://jsonplaceholder.typicode.com/posts") // JSON 데이터 타입
  .then(function (response) {
    // response.json().then(function (data) {
    //   console.log("data", data);
    // });
    // response.json() >> return Promise: json 텍스트를 JS의 데이터 타입으로 converting. 이 작업이 끝났을 때 then 호출 가능
    // data에는 json 파일을 JS의 데이터 타입으로 바꾼 데이터가 들어옴 (가공해서 작업 가능)

    // * 보통은 위의 코드(nested promise)처럼 사용하지 않고
    return response.json(); // return Promise >> 작업 종료 후
  }) // 실행 후 또 promise를 return 하므로 다른 then과 chaining 가능
  .catch(function (reason) {
    console.log("reason", reason);
  })
  .then(function (data) {
    // * 아래에 then을 붙여줌 (promise chaining)
    console.log("data", data);
  });
// JSON이라는 데이터 타입으로 된 텍스트를 JS의 데이터 타입으로 바꿔준 것
/* Return Value: A Promise that resolves to a Response object
    - then
        - fetch를 통해 수행한 결과가 성공했을 때 전달된 콜백함수를 호출
        - 결과값이 있다면 첫 번째 파라미터로 받을 수 있음 (response 타입의 객체)
    - catch
        - fetch를 통해 수행한 결과가 실패했을 때 전달된 콜백함수를 호출
        - 실패한 이유

    [Promise를 사용하는 이유]
        1) 비동기적인 작업 처리 시 해당 작업의 성공 여부를 표준화된 방식을 이용해 처리할 수 있음

*/
console.log(2);

// 실행 결과 >> 1, 2, JSON 변환 파일
