import mongoose from 'mongoose' ; 

const urlScema = new mongoose.Schema({
    shortId : {
        type : String , 
        required : true , 
        unique : true , 
    } , 
    redirectUrl : {
        type : String , 
        required : true ,    
    } , 
    visitHistory : [
      {
        timestamp : {
            type : Number 
        }
      }
    ] , 

} , {timestamps : true }) ;

const URL = mongoose.model('URL' , urlScema) ; 

export default URL ;