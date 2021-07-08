// BASIC 1

class Person {
    name;
    age;
    jobTitle;
    constructor(name: string, age: number, jobTitle: string) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    printInfo() {
        return `hi, my name is ${this.name}, and i am ${this.age}, and i work as ${this.jobTitle}`;
    }
}

let person1 = new Person("Aaron", 31, "Developer");
let person2 = new Person("Serri", 32, "IT");
console.log(person1.printInfo());
console.log(person2.printInfo());


// BASIC 2

class Student extends Person {
    salary;
    jobLocation;
    constructor(name:string, age:number, jobTitle:string, salary:number, jobLocation:string) {
        super(name, age, jobTitle)
        this.salary = salary;
        this.jobLocation = jobLocation;
    }
    printStudentInfo() {
        return `${this.printInfo()}, my salary is ${this.salary} and i work in ${this.jobLocation}`
    }
}
let student1 = new Student("Aaron", 31, "Developer", 2000, "Vösendorf");
console.log(student1.printStudentInfo());