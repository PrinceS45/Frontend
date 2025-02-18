// object literal 
let car = {
    make : "Toyata" , 
    model : "CAmry" , 
    year : 2010 ,

     start : function () {
         return `${this.make} car got started in year ${this.year}`  ; 
     }
}
// console.log( car.start())

function Person(name , age) {
     this.name = name ; 
     this.age = age ; 
}

let jhon = new Person("Jhon " , 20) ; 
// console.log(jhon) ; 

function Animal(type) {
     this.type = type ; 
}

Animal.prototype.speak = function() {
    return `${this.type} make a sound` ; 
} ;
   
Array.prototype.prince = function() {
     return `Custom method ${this}`
}
 let arr = [5 , 4 , 9] ; 
 // console.log(arr.prince()) ; 

// inhertence
 class Vehicle {
     constructor(make , model) {
         this.make = make  ; 
         this.model = model  ; 
     }
     start() {
         return `${this.model} is a car from ${this.make}`
     }
 }

 class Car extends Vehicle {
     drive() {
         return `${this.make} This is ans inheritence example ` ; 
     }
 }

 let myCar = new Car("Toyota" , "Carolla") ;

//  console.log(myCar.start()) ; 
//  console.log(myCar.drive()) ; 

 // encapsulation

 class BankAccount {
    // noone can access #
     #balance = 0 ; 

     deposit(amount) {
        this.#balance += amount ; 
        return this.#balance ; 
     }

     getBalance() {
         return `$ ${this.#balance} ` ; 
     }
 }

 let account = new BankAccount() ; 
    
//console.log(account.#balnce)  ; 

//  console.log(account.getBalance()) ; 

 // Abstraction 
  class CoffeMachine {

     start() {
           // call db 
           // filter value 
          return `start the machine `  ;     
     }
      brewCoffe() {
        // complex calculation 
        return `brewing Coffe` ; 
      } 

      pressStartButton() {
        let massone= this.start() ; 
        let masstwo = this.brewCoffe() ; 
        return `${massone} + ${masstwo}` ;
      }
      
        }
        
        let myMachine  = new CoffeMachine() ; 
        // console.log(myMachine.start()) ; 
        // console.log(myMachine.brewCoffe())   ;

        //console.log(myMachine.pressStartButton()) ; 


        // polymorphism

         
  class Bird {
    fly() {
        return `Flying....` ;
    }
  }      

  class Penguin extends Bird{
     
    fly() {
        return `Penguine cannot fly ...` ; 
    }
  }

  let bird = new Bird()  ; 
  let penguine = new Penguin() ; 

//   console.log(bird.fly()) ; 
//   console.log(penguine.fly()) ; 

  //static method
//   only be called by class itself 
  class Calculator {
    static add(a , b) {
         return a + b ; 
    }
  }
  // not allowd
//   let miniCal = new Calculator() ; 
//   console.log(miniCal.add(2 ,2))  ; 

// allowed 
// console.log(Calculator.add(2 ,3)) ; 

// getters and setter 

class Employee {
    #salary ; 
    constructor(name , salary) {
        if(salary < 0) {
            throw new Error("salay cannot be negetive") ;  
        }
        this.name = name ; 
         this._salary = salary ; 
    }

    get salary() {
        return `You are not allowed to see salary`  ; 
    }

    set salary(value) {
        if(value < 0) {
            console.error("invalid Salary") ; 
        }
        else {
            this.#salary = value ;  
        }
    }
}

let emp = new Employee("Alice" , -50000) ; 
// access withot paranthesis 

console.log(emp.salary) ; 
emp.salary= 6000   ; 
