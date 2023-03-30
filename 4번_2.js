function solution(arr) {
  let resultArr = [0, 0];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 ? ++resultArr[1] : ++resultArr[0];
  }
  return resultArr;
}

let arr2 = [1, 2, 3, 4, 5];
let b = solution(arr2);
console.log(b);
