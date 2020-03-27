abstract class Department {
    name: string
    constructor(name: string) {
        this.name = name
    }
    printName(): void {
        console.log(`department name ${this.name}`);
    }
    abstract printMeeting(): void
}

class AccountDepartment extends Department {
    constructor() {
        super('Account ad Auditing')
    }
    printMeeting(): void {
        console.log('the accounting department meets each Monday');
    }
    genterateReports(): void {
        console.log('本地方法');
    }
}

// let department: Department = new Department('123') // 无法创建抽象类的实例。
let department: Department = new AccountDepartment() // 可以创建派生类的实例
department.printName()
department.printMeeting()
// department.genterateReports() // Department 中没有注册 genterateReports 故报错