// let a = 10

// function outer() {
//   let b = 20

//   function inner() {
//     let c = 30
//     console.log(a , b , c)
//   }

//   return inner()
// } 

// outer()

function outer(){
    let counter = 0
    let nekaj = 0
    console.log("a" + counter)
    function inner(){
        counter++
        nekaj++
        console.log("b" +counter + " " + nekaj)
    }
    return inner
}
const fn = outer()

fn()
fn()

console.log()
console.log("-----  -----")
console.log()

function sum(a,b,c){
    return a + b + c
}

console.log(sum(1,2,3))

function curry(fn){
    return function(a){
        return function(b){
            return function(c){
                return fn(a,b,c)
            }
        }
    }
}

const curriedSum = curry(sum) 
console.log(curriedSum(2)(3)(5))

console.log()
console.log()

/* function sayMyName(name){
    console.log("My name is " + name)
}

sayMyName("John") */

const person = {
    name: "Robi",
    sayMyName: function(){
        console.log("My name is " + this.name)
    },
}

person.sayMyName()

console.log()
console.log()

//function sayMyName(){
//    console.log("My name 2 is " + this.name)
//}

//sayMyName.call(person)

console.log()
console.log()

/*function Person(fname, lname){
    // this = {}
    this.firstName = fname
    this.lastName = lname
    }

const p1 = new Person("Lebron", "James")
const p2 = new Person("Thomas", "Shelby")

console.log(p1.firstName, p2.lastName)

console.log("-----  -----")

Person.prototype.getFullName = function(){
    return this.firstName + " " + this.lastName
}

console.log(p1.getFullName())
console.log(p2.getFullName())
 
console.log("")
console.log("-----  -----")
console.log("")

function SuperHero(fName, lName){
    Person.call(this, fName, lName)
    this.isSuperHero = true
}

SuperHero.prototype = Object.create(Person.prototype)
SuperHero.prototype.constructor = SuperHero
const batman = new SuperHero("Bruce", "Wayne")

console.log(batman.getFullName())

console.log()
console.log("-----  -----")
console.log()
*/
class Person{
    constructor(fname, lname){
        this.firstName = fname
        this.lastName = lname
    }

    sayMyName(){
        return this.firstName + " " + this.lastName
    }

    getFullName(){
        return this.firstName + " " + this.lastName
    }
}

const classP1 = new Person("Cristiano", "Ronaldo")
console.log(classP1.sayMyName())
console.log(classP1.getFullName())

class SuperHero extends Person{
    constructor(fName, lName){
        super(fName, lName)
        this.isSuperHero = true
    }

    fightCrime(){
        console.log("Fighting crime")
    }
}

const superman = new SuperHero("Clark", "Kent")
console.log(superman.getFullName())