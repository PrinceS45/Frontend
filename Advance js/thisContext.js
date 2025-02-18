const person = {
    name : 'prince' , 
    
    greet() {
        console.log(`Hi, I am ${this.name}`) ; 
    }
}

person.greet() ;  

// bind context 
// lost context
const check = person.greet ; 
check() ; 

const greetFunion = person.greet.bind({name : 'Abhishek '}) ; 

greetFunion() ; 