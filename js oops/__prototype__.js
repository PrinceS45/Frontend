let computer = {
    ram : 45 , 
    size : `15 inch` 
}

let hp = {
     price : 4500 , 
     // old type of prottype
     __prototype__ : computer 
}
// new way is 
Object.setPrototypeOf(hp , computer)  ; 

// acces 
console.log("hp" , Object.getPrototypeOf(hp)) ; 

let dell = {
    price : 7800 , 
    __prototype__ : computer 
}

// console.log(hp) ; 
