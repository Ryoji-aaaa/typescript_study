function Logger(logString: string) {
  console.log("LOGGER FACTORY");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookid: string) {
  console.log("TEMPLATE FACTORY");
  return function (constructor: any) {
    document.addEventListener("DOMContentLoaded", () => {
      const hookEl = document.getElementById(hookid);
      const p = new constructor();
      if (hookEl) {
        hookEl.innerHTML = template;
        hookEl.querySelector("h1")!.textContent = p.name;
      }
    });
  };
}

@Logger("LOGGING")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object");
  }
}

const pers = new Person();
console.log(pers);

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!");
  console.log(target);
  console.log(propertyName);
}
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accsessor decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}
function Log3(
  target: any,
  name: string | symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}
function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter decorator!");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p; // 初期化
  }
  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }
  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

// const product = new Product("Book", 20);
// console.log(product);
// console.log(product.getPriceWithTax(0.2));
