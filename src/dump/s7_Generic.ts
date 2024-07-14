// const names:Array<string> = []; // string[]
// // names[0].split(" ");

// const promise:Promise<string> = new Promise((resolve,reject)=>{
// setTimeout(()=>{
//     resolve("This is done!");
// },2000);
// });

// promise.then(data =>{
//     // data.split(" ");
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const mergeObj = merge({ name: "Max" }, { age: 30 });
const mergeObj2 = merge({ name: "Max", hobbies: "sports" }, { age: 30 });
console.log(mergeObj.age);

interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(element: T) {
  let descriotionText = "Got no value.";
  if (element.length === 1) {
    descriotionText = "Got " + 1 + " elenemet.";
  } else if (element.length > 1) {
    descriotionText = "Got " + element.length + " elenemet.";
  }
  return [element, descriotionText];
}

console.log(countAndPrint(["Sport", "Cooking"]));

function extraceAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value : " + obj[key];
}

console.log(extraceAndConvert({ name: "jack", age: 20 }, "name"));

class DataStorage<T> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

// const textStorage = new DataStorage<string>;
// textStorage.addItem("Max");
// textStorage.addItem("Man");
// textStorage.removeItem("Man");

// console.log(textStorage.getItems());

// const numberStorage = new DataStorage<number>;
// const objectStorage = new DataStorage<object>;

// objectStorage.addItem({name:"Max"})
// objectStorage.addItem({name:"manu"})
// objectStorage.removeItem({name:"Max"})
// console.log(objectStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Max", "Anna"];
// names.push("Manu");
// names.pop();
