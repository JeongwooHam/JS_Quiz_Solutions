/*
    [과제] 로또 번호 뽑기

    1 ~ 45까지 랜덤한 숫자 7자리의 배열
*/

const arr = Array.from({ length: 7 }, (_, i) => {
  return Math.floor(Math.random() * 45 + 1);
});

console.log(arr);
