// testing
console.log('testing')

// Type Aliases: Creating our own Type
type MyStr = string
type MyNum = number
type MyArr = (string  | number)[]
type MyObj = {
    id: number,
    name: string,
    location: string
}

const favNum: MyNum = 3
const students: MyArr = ['omar', 3, 'sam', 1]
const employee1: MyObj = {
    id: 1,
    name: 'dylan',
    location: 'USA'
}



// Union Types: Can allow a variable to be one of many types (number | string)
type NumOrStr = (number | string)
const myNumOrStr: NumOrStr = 1

function kgToLbs (weight: NumOrStr): number {
    if (typeof weight == 'string') {
        return parseInt(weight) * 2.2
    } else {
        return weight * 2.2
    }
}
console.log(kgToLbs('90'))

// TypeScript Arrow Function

const kgToLbs2 = (weight: NumOrStr): number => {
    if (typeof weight === 'string') {
        return parseInt(weight) * 2.2
} else{
    return weight * 2.2
}
}


// Literal Types (exact)
type Quantity = (25 | 50 | 75 | 100)
const largeShirts: Quantity = 50
const smallShirts: Quantity = 25

// Nullish Coalescing Operator (??): We can fallback to a default value when dealing with null/undefined objects
const speed: number | null = 5 
const ride = {
    mph: speed ?? null
}
ride.mph = 25
console.log(ride)


// Type Assertions: specify a different type than the one inferred by the compiler.
// NOTE: There isn't any type conversion happening under the hood.

// const myInput = document.getElementById('myInput') as HTMLInputElement
// myInput.value


// The "unknown" type: We have to narrow down to a specific type before performing any operations
// It is preferred to use "unknown" over "any" bc it forces us to do some type checking( or type narrowing)
// const render = (document: unknown): string => {
//     if (typeof document === 'string') {
//         console.log('string') 
//     } else if (typeof document === 'number') {
//         console.log(document)
//     }
// }


// Creating Classes
class Team {
    city: string
    name: string
    constructor(city: string, name: string){
        this.city = city;
        this.name = name;
    }
    printInfo = (): string => {
        return `The ${this.name} are from ${this.city}.`
    }
}

const bulls = new Team( 'chicago', 'bulls')
console.log(bulls.printInfo())

// typeof vs instanceof
console.log(bulls instanceof Team)


// ------------------- private properties and accessing them
// Building a class with parameter properties: Preferred way
class Team2 {
    constructor(private _id: number, public city: string, public name: string){}
    printInfo = (): string => {
        return `${this.name} are from ${this.city}.`
    }
    printId = (): number => {
        return this._id
    }
}
const lakers = new Team2(0, 'LA', 'Lakers')
console.log(lakers.printInfo())
console.log(lakers.printId())
console.log(lakers.city)

// Interfaces vs Types
/* They both establish a shape of an object and can be used interchangeably BUT 
Its more conventional to implement Interfaces with Classes AND
Interfaces can also inherit from other Interfaces & Types, while Types cannot.
*/

// interface MUST be an object
type Player = {
    name: string,
    jerseyNum: number
}

interface IPlayer {
    playerName: string,
    jerseyNum?: number
}

class Team3 implements IPlayer {
    constructor(
        private readonly _id: number,
         public city: string, 
         public name: string, 
         public playerName: string, 
    ){}

    printInfo = (): string => {
        return `${this._id} ${this.city} ${this.name}`
    }
}

const seahawks = new Team3(1,'seattle','seahawks', 'bobby wagner')
