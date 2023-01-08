class Person {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }

    showPersonInfo() {
        console.log(`name: ${this.name}`);
        console.log(`age: ${this.age}`);
        console.log(`gender: ${this.gender}`);
    }
}

class Student extends Person {
    constructor(name, age, gender, grade) {
        super(name, age, gender);
        this.grade = grade;
    }

    showStudentInfo() {
        super.showPersonInfo();
        console.log(`grade: ${this.grade}`);
    }
}

class Employee extends Person {
    constructor(name, age, gender, daySalary) {
        super(name, age, gender);
        this.daySalary = daySalary;
        this.overtime = 0;
    }

    calculateOvertime(hours) {
        if(this.age < 18) {
            return 0;
        }

        let hourlyPay = this.daySalary / 8;
        let newHourlyPay = hourlyPay * 1.5;
        this.overtime = hours * newHourlyPay
        return this.overtime;
    }

    showEmployeeInfo() {
        super.showPersonInfo();
        console.log(`daySalary: ${this.daySalary}`);
        console.log(`Overtime bonus: ${this.overtime}`);
    }
}

var people = new Array();

const ivan = new Person('Ivan', 24, "male");
const drago = new Employee("Drago", 23, 'male', 50);
const pencho = new Student("Pencho", 23, 'male', 253);
const gosho = new Person('Gosho', 24, 'male');
const dimitur = new Employee("Mitko", 17, 'male', 50);
const penko = new Student("Penko", 23, 'male', 253);

people.push(ivan);
people.push(drago);
people.push(pencho);
people.push(gosho);
people.push(dimitur);
people.push(penko);

for(let i = 0; i < people.length; i++) {
    if(people[i] instanceof Employee) {
        people[i].showEmployeeInfo();
    }
    else if(people[i] instanceof Student) {
        people[i].showStudentInfo();
    }
    else {
        people[i].showPersonInfo();
    }
}

for(let i = 0; i < people.length; i++) {
    if(people[i] instanceof Employee) {
       console.log(people[i].calculateOvertime(2));
    }
}