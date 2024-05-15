//creating an http server
const express = require("express"); //creating 

const app = express() // creating cleanic

//adding some logic
/**
 * function sum(n){
    let ans = 0;
    for(let i=1;i<=n;i++)
    {
        ans = ans + i;
    }
    return ans;
}
 */
// expressing
app.get("/", function(req,res){
    /**
     * const n =req.query.n;
    const ans = sum(n)
    res.send("hi your answer is "+ans);
     */

})
app.listen(8000);


//GET : Asking server
//POST : 
//PUT : update in server
//DELETE : Remove or replace

//STATUS CODE
/**
 * 1.200 :-
 */