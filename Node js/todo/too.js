const fs = require('fs')
const filpath = "/.task.jason" ; 

const command =  process.argv[2] ; 
const argument = process.argv[3] ; 

if(command  === 'add ') {
     addTask(argument) 
}
else if(command === 'list') {
    listTask() 
}
else if(command === 'remove ') {
    removeTask(parseInt(argument)) ; 
}
    else {
        console.log("command not found") ; 
    }