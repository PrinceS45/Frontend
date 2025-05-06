import express from 'express' ; 
const app = express() ; 

const port = process.env.PORT || 3000 ; 

app.get('/api/products' , (req ,res)=> {
   const products = [
    {
        id:1 , 
        name: 'table wooden' , 
        price : 200 , 
        image : "https://example.com/table.jpg" ,
    } , 
     {
        id:2 , 
        name: 'table plastic' , 
        price : 100 , 
        image : "https://example.com/table.jpg" ,
     }  , 
     {
        id:3 , 
        name: 'table glass' , 
        price : 300 , 
        image : "https://example.com/table.jpg" ,
     } , 
     {
        id:4 , 
        name: 'table metal' , 
        price : 400 , 
        image : "https://example.com/table.jpg" ,
     } , 
     {
        id:5 , 
        name: 'table stone' , 
        price : 500 , 
        image : "https://example.com/table.jpg" ,
     }
   ]

   setTimeout(() => {
      res.send(products) ;
   } , 3000)
})