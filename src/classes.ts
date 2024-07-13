abstract class Department {
  static fiscalYear = 2023;
  // private id :string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id =id;
    // this.name = n;
  }
  static createEmployee(name: string) {
    return { name: name };
  }
  abstract describe(this: Department): void;
  addEmployee(...employee: string[]) {
    this.employees.push(...employee);
  }

  printEmployeeInfomation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class itDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "it");
    this.admins = admins;
  }
  describe(this: itDepartment): void {
    console.log("IT Department - ID " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No Report Found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }
  describe() {
    console.log("AccountingDepartment - ID :", this.id);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  getReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);

const it = new itDepartment("a1234", ["Max"]);

// const accounting = new AccountingDepartment("b5678", []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();-

console.log(accounting, accounting2);

// accounting.addEmployee("Max");
// accounting.addEmployee("Menu");
// accounting.printEmployeeInfomation();
accounting.addReport("Something went wrong...");
accounting.mostRecentReport = "Year end Report";
console.log(accounting.mostRecentReport);
accounting.getReports();
console.log(it);
it.describe();
it.addEmployee("Max");
it.addEmployee("Menu", "Anna", "Jack");

// it.employees[2] = "Anna";
it.printEmployeeInfomation();

// const itCopy = { name: "DUMMY", describe: it.describe };
// itCopy.describe();
accounting.describe();
