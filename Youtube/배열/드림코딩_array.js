const animals = ["🐶", "🐱", "🐯", "🦊", "🐻"];

console.log("단순 for문 사용");
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

console.log("for of 사용");
for (el of animals) {
  console.log(el);
}

console.log("forEach 사용");
animals.forEach((el) => console.log(el));

/*
    forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
 * Calls a defined callback function on each element of an array, and returns an array that contains the results.
 * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
 * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
 */

//ctrl + click
