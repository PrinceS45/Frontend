// function makeTea(typeTea) {
//     return `maketea : ${typeTea}` ; 
// }
// function processTeaOrder(tf) {
//      return tf("earl grey") ; 
// }

// let order =  processTeaOrder(makeTea) ; 

// // console.log(order) ; 

function createTeaMaker() {
    return function(teaType) {
        return `tea making : ${teaType}` ; 
    }
}

let t = createTeaMaker() ; 
console.log(t("lemon")) ; 