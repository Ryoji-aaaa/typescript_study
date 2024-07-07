//your code here
const button = document.querySelector("button")!;
button.addEventListener("click", () => {
  console.log("Clicked!!");
});

// var result;
// function add(a: number, b: number) {
//   result = a + b;
//   return result;
// }
const add3 = (a: number, b: number = 3, c: number = 1) => a + b + c;
console.log(add3(199));

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const hobbies = ["sports", "cooking"];
const activeHobbies = ["hiking"];
console.log(activeHobbies);
activeHobbies.push(...hobbies);
console.log(activeHobbies);

const person = {
  personName: "Max",
  age: 30,
};

const copiedPerson = { ...person };
console.log(copiedPerson);

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

const [hobby1, hobby2, ...reaminingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { personName: userName, age } = person;
console.log("Name: " + userName + "    Age: " + age,person);
