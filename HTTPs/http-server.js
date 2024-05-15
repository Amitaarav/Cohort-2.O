// we can write in many languages
// mostly library is used
// express is mostly used

const express = require("express")
const bodyParser = require("body-parser")

const app = express(); // expose

const port = 8000;
app.use(bodyParser.json({})); //use individual json/urlencoded middlewares
//create a simple http server in c from scratch
//create a todo application where u store data in a file
// create a rust/golang/
app.get("/",function(req,res){
    console.log(req.body);
    res.send('<b>hi there!<b>');
})
//GET method doesn't use a request body

app.post("/backend-api/converations",function(req,res){
    const message = req.body.message;
    console.log(message);
    //machine learning things
    res.send({
        output: "2+2=4"
    })
})
//routes:"/backend-api/converations"
//port:8000
//

app.listen(port,function(){
    console.log(`Example app listening on port ${port}`)
})
/**
 *  GET (get content)
    POST (add new content)
    PUT (change existing content)
    DELETE (delete content)
 */

    // fetch:fetch("http://localhost:8000/",{})
    //PORT : 
