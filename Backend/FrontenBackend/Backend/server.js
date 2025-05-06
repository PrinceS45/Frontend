import express from 'express' ; 

const app = express() ; 

// app.get('/' , (req , res) => {
//     res.send('Server si ready') ; 
// }) ; 

// get a list of 5 joakes 

app.get('/api/jokes' , (req , res) => {
     const jokes = [
        {
            id : 1 , 
            title : 'A joke' , 
            content : 'This is a joke' ,
        } , 
        {
            id : 2 , 
            title : 'A joke' , 
            content : 'This is a 2 joke' ,
        } , 
        {
            id : 3 , 
            title : 'A joke' , 
            content : 'This is a 3 joke' ,
        } , 
        {
            id : 4 , 
            title : 'A joke' , 
            content : 'This is a 4joke' ,
        } , 
        {
            id : 5 , 
            title : 'A joke' , 
            content : 'This is a 5 joke' ,
        } , 
     ] ;
     res.send(jokes)
}) ; 

const port = process.env.PORT || 3000 ; 

app.listen(port , ()=> {
     console.log(`Server at http://localhost:${port}`) ; 
})