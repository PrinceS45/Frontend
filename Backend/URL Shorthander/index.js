
import urlRoute from "./routes/url.js"
import express from "express"; 
import {connectToMongoDB} from "./routes/connect.js" ;
import cors from "cors" ;
import URL from './models/url.js'
import path from 'path' ; 
import staticRouter from './routes/staticRu.js'

const app = express() ; 

const PORT = 8001 ; 

connectToMongoDB("mongodb://localhost:27017/short-url")
.then(() => console.log("MongoDB connected")).catch((err) => {
    console.log("MongoDB connection error: ", err) ;
}) ; 
app.set("view engine" , "ejs") ; 

 app.use(cors()) ;
 app.use(express.json()) ;
 app.use(express.urlencoded({extended : false})) ; 
 app.set("views" , path.resolve("./view") )
 app.use("/url" , urlRoute) ;

app.use('/' , staticRouter) ; 

app.get("/test" , async(req , res ) => {
    const allUrls = await URL.find({}) ; 
    return res.render("home" , {
        urls : allUrls , 
    })
})
 app.get('/url/:shortId' , async (req , res) =>{
    const shortId = req.params.shortId ; 
    const entry =await URL.findOneAndUpdate({
        shortId
    } , {$push : {
        visitHistory : {
            timestamp : Date.now() ,
        } , 
    }}) ; 
     if (!entry) {
        return res.status(404).send('Short URL not found');
    }
    res.redirect(entry.redirectUrl) ;
} )

app.listen(PORT , ()=> {
    console.log('Server is running on port ' , PORT) ;
})
