/*
배열 나누기
함수 division은 특정한 배열을 내가 원하는 원소의 갯수를 길이로 가진 배열들로 분해하려고한다
이후, 해당 배열들을 요소로 갖는 배열을 반환한다

ex) 길이가 80인 배열을 '길이가 5인 배열들'로 분해한다면 16개의 배열을 요소로 갖는 배열을 반환한다
    ex) [1...80] => [[1...5], [6...10], [11...15], ... , [76...80]]
*/

/* 0 [1, 2, 3, 4, 5]      0*5
   1 [6, 7, 8, 9, 10]     1*5
   2 [11, 12, 13, 14 ,15] 2*5
   3 [16, 17, 18, 19, 20] 3*5 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function division(num) {
  let result = [];
  for (let i = 0; i < Math.ceil(arr.length / num); i++) {
    result.push(arr.slice(i * num, i * num + num));
  }
  return result;
}

console.log(division(2));

// Array.from 사용해서 다시 풀어보기
