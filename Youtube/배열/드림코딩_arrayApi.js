// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.reduce((concat, el) => concat + el);
  // 그냥 join으로 해줘도 됨
  console.log(result);
}

// Q2. make an array out of a string
{
  const animals = "🐶, 🐱, 🐯, 🦊, 🐻";
  const resultArr = animals.split(",");
  console.log(resultArr);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  array.reverse();
  console.log(array); // 원본 배열 자체를 변환
}

// Q4. make new array without the first two elements
{
  const array1 = [1, 2, 3, 4, 5];
  array1.splice(0, 2); // 배열 자체에서 데이터 삭제하므로 사용하면 안 됨! (문제 꼼꼼히 읽기)
  console.log(array1);

  //answer
  const array2 = [1, 2, 3, 4, 5];
  const newArr = array2.slice(2);
  console.log(newArr);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.filter((el) => el.score === 90);
  console.log(result);
  //   console.log(result.name); >> 왜 undefined? >> 정답인 객체를 담은 배열 return
  console.log(typeof result);

  // answer: find 사용
  console.log("------------answer------------");
  const answer = students.find((el) => el.score === 90); // 하나의 객체 return
  console.log(answer.name);
}

// Q6. make an array of enrolled students
{
  const resultArr = students.filter((el) => el.enrolled); // true 굳이 안 써줘도 됨
  console.log(resultArr);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const resultArr = [];
  students.forEach((el) => {
    resultArr.push(el.score);
  });
  console.log(resultArr);

  // answer: ⭐map 사용⭐
  const result = students.map((el) => el.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  const result = students.some((el) => el.score < 50);
  console.log(result);
}

// Q9. compute students' average score
{
  const result = students.map((el) => el.score);
  console.log(result);

  const total = result.reduce((sum, n) => sum + n);
  const ave = total / result.length;
  console.log(ave);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((el) => el.score);
  console.log(result);

  const resultStr = result.join(", ");
  console.log(resultStr);

  // Bonus. Do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  result.sort((a , b) => a - b);
  const sortedSter = result.join(", ");
  console.log(sortedSter);
}
