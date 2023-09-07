// 1. Given the data below, define a type alias for representing users.

let users = [  
    {
        name:'Shoha Tsuchida',
        age:99,
        company:'Coding Temple'
    },  
    {
        name:'Dylan Katina',
        age:99
    }
];

type GoatUser = {
    name: string
    age: number
    company?: string
}

// need to add [] after GoatUser to get rid of squigly, since its an array
const papiGoat: GoatUser[] = [
    {
        name: 'omar',
        age: 26,
        company: 'OG.Capital'
    },
    {
        name: 'Michelle',
        age: 26,
        // made sure to learn when to use readonly vs '?' :)
    }    
]


// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.
// needs to be a string. 
type DayOfWeek = ('Monday' | 'Teusday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday')
const faveDay: DayOfWeek = 'Friday'
const faveDay2: DayOfWeek = 'Saturday'


// 3. Given the Person class below, create a getter for getting the full name of a person.

class Person {
    constructor(
        public firstName:string, 
        public lastName:string) {}

    printInfo = (): string => {
        return `My full name is ${this.firstName} ${this.lastName}!`
    }
}
const theBoi = new Person('Omar', 'Gonzalez')
console.log(theBoi.printInfo())



// 4. Create a new class called "Employee" that extends "Person" and adds a new property called salary. 
//  just use 'extends' after class name and refference the class you want to extend.. 
// do not have to repeat if it is public since its coming from Person class - it inherits it

// TSError: ⨯ Unable to compile TypeScript:
// src/homework.ts(64,5): error TS2377: Constructors for derived classes must contain a 'super' call.
// need to use 'super' keyword to refer to the parent class... inside the curly brackets after constructor

class Employee extends Person {
    constructor(firstName: string, lastName: string, private _salary: number) {
     super(firstName, lastName)   
    }
    printInfo= (): string =>  {
        return `My name is ${this.firstName} ${this.lastName}.`
    }
    printSalary = (): string => {
        return `I make ${this._salary} boii!`
    }
}
const hardWorker = new Employee('Enrique', 'Torres', 420_000)
console.log(hardWorker.printInfo())
console.log(hardWorker.printSalary())



// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.
let employee = {
    name:'Christian Askew',
    salary:1_000_000,
    address:{
        street:'Thieves st',
        city:'Seattle',
        zipCode: 98101
    }
};