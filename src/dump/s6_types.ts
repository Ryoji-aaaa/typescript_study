type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevateEmployee extends Employee,Admin{}

type ElevateEmployee = Admin & Employee;

const e1: ElevateEmployee = {
  name: "max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;
// Intersection Type (交差点？タイプの例)
type Universal = Combinable & Numeric;

function add(n: string, b: string): string;
function add(a: number, b: number): number;
function add(a: number, b: string): number;
function add(a: string, b: number): number;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Max", "schash");
result.split("  ");

const fetchUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My own company" },
};
console.log(fetchUserData?.job?.title);

const userInput = undefined;

const storeData = userInput ??"DEFAULT";

console.log(storeData);

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInform(emp: UnknownEmployee) {
//   console.log("Name : " + emp.name);
//   if ("privileges" in emp) {
//     console.log("Privilages : " + emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log("StartDate : " + emp.startDate);
//   }
// }

// printEmployeeInform({ name: "Manu", startDate: new Date() });

// class Car {
//   Drive() {
//     console.log("Driving...");
//   }
// }
// class Truck {
//   Drive() {
//     console.log("Driving a Truck...");
//   }
//   lordCargo(amount: number) {
//     console.log("lording cargo" + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.Drive();
//   if (vehicle instanceof Truck) {
//     vehicle.lordCargo(100);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }
// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }
// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//       break;
//   }
//   console.log("Moving with Speed: " + speed);
// }
// moveAnimal({ type: "bird", flyingSpeed: 100 });

// // const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// const userInputElement =
//   document.getElementById("user-input"); /*! as HTMLInputElement*/
// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = "Hi there!";
// }

// interface ErrorContainer {
//     //{email : "Not a valed email" , user name; "Must start with a charactor"}
//     [prop: string]:string
// }

// const errorBag : ErrorContainer = {
//     email : "Not a valed email",
//     username : "Must start with a charactor",

// }
