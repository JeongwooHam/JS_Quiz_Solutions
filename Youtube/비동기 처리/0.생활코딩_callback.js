/* first class citizen: 일급객체 (값이 될 수 있음)
        - 숫자
        - 함수 (함수가 다른 함수의 return 값/입력값이 될 수 있는 언어에서의 함수는 일급객체)

    second class citizen
        - 조건문

    콜백함수
        - 다른 함수의 입력 값으로 전달 돼서 (이 맥락에서!) 다른 함수에 의해 나중에 호출되는 함수

*/

const words = ["ab", "ba", "cdc", "cd", "e", "fe", "gbh", "hh"];

// function callback(e) {
//   return e.length >= 3;
// }

// 재사용성이 없는 함수의 경우 응집성 등을 위해 익명함수로
// const newWords = words.filter((e) => e.length >= 3);
// console.log(newWords);

// 콜백함수와 콜백함수를 소비하는 함수를 만들어보기
function myfilter(originArr, callbackFn) {
  // 빈 배열을 만들어서
  let resultArr = [];
  // 원본 배열 각각을 검사하여 콜백함수의 조건식에 대한 검사결과가 true인 것만 담아줌
  originArr.forEach((currentVal) => {
    if (callbackFn(currentVal)) {
      resultArr.push(currentVal);
    }
  });
  // 결과 배열을 return
  return resultArr;
}

const newWords = myfilter(words, (el) => el.length > 2);
console.log(newWords);
