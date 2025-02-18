function fetchData() {
     return new Promise((resolve , reject)=>{
        setTimeout(() => {
            let success = false ; 
            if(success) {
                resolve("Data fetch Succesfullly")  ; 
            }
            else {
                reject("Error fetcing data") ; 
            }
        }, 3000);
     })
}

// how to consume promis 

fetchData() 
    .then((data) => console.log(data)) 
    .catch((error) => console.log(error))

// let response =  fetchData()
// .then(() => {}) 
// .then(() =>{})
// .catch(() =>{}) ; 
