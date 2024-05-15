const express = require("express");
const bodyParser = require("body-parser");

const app = express();
//This line creates an instance of the Express application. 
//This app object will be used to configure routes and start the server.

const port = process.env.PORT || 8000
// what is env variable
app.use(express.json());
//Express app to use its built-in middleware .
//express.json() to parse JSON-encoded request bodies

app.post('/backend-api/conversations',function(req,res){
    const message = req.query.message;//query : sending data to backend
    console.log(message);
    res.json({
        output:"2+2=4" // don't use ";"
    })
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})

