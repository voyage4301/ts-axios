class Person1 {
    protected name: string

    protected constructor(name: string) {
        this.name = name
    }
}

class Employee1 extends Person1 {
    private department: string

    constructor(name: string, department: string) {
        super(name)
        this.department = department
    }

    getElevatorPitch(){
        return `Hello, my name is ${this.name} and I work in ${this.department}`
    }
}

let emp = new Employee1('Jack', '百度')
console.log(emp.getElevatorPitch());
// console.log(emp.name); // 报错 属性“name”受保护，只能在类“Person1”及其子类中访问

// let p = new Person1('张三') // 报错 类“Person1”的构造函数是受保护的，仅可在类声明中访问。