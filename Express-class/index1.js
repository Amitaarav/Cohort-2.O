const express = require("express")
const app = express()

const users = [{
    name : "John",
    kidneys : [{
        healthy : false
    }]
}];

app.use(express.json());
// filter in Js
//query parameter
app.get("/",function(req,res){
    const johnKidney = users[0].kidneys;
    const numberOfKidneys = johnKidney.length
    const numberOfHealthyKidney = 0;
    for(let i=0;i<numberOfKidneys;i++)
    {
        if(johnKidney[i.healthy])
        {
            numberOfHealthyKidney = numberOfHealthyKidney + i;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys-numberOfHealthyKidney;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidney,
        numberOfUnhealthyKidneys
    })
})

//
app.post("/",function(req,res){
    const isHealthy  = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg:"Done!"
    })
})

//put handler

app.put("/",function(req,res){
    for(let i = 0;i<users[0];i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg:"Done!"
    })
})
//removing all unhealthy kidneys
app.delete("/",function(req,res){
    //filter is also used
    //only if atleast one unhealthy kidney is there do this,else return 411
    
    if(isThereAtleastOneUnhealthyKidney()){
        const newKidneys = []
        for(let i = 0;i<users[0];i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy : true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({
            msg:"Done!"
        })
    }
    else{
        res.status(411).json({
            msg:"You have no bad kidney"
        })
    }
    
})

function isThereAtleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney = false
    for(let i = 0;i<users[0];i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney;
}

app.listen(8000)