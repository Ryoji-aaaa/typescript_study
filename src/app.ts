class Department {
  // private id :string;
  // private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id =id;
    // this.name = n;
  }
  describe(this: Department) {
    console.log(`Depertment(id) : ${this.name} ( ${this.id} )`);
  }
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
}
class AccountingDepartment extends Department {
  private lastReport: string;

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

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
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

const it = new itDepartment("a1234", ["Max"]);
const accounting = new AccountingDepartment("b5678", []);
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
