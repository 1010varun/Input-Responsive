const { urlencoded } = require('express');
const express = require('express');
const app = express();
// const cros = require("cros");
const signup = require("./model");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/testing");

app.use(urlencoded({extended: false}));
app.use(express.json());
// app.use(cros());



app.get("/", (req, res) => {
    res.status(404).json({"success" : true, "message" : "recieved"});
})
 
app.post("/", (req, res)=>{
    console.log(req.body);
    res.status(200).send("hello");
})

app.post("/login", async (req, res)=> {
    console.log(req.body);
    const {email, password} = req.body;
    const records = await signup.find({email, password});
    console.log(records);
    if(records.length === 1){
        res.status(200).json({"success": true, "message": "login successful", "record": records});
    }
    else{
        res.status(401).json({"success": false, "message": "error"});
    }

})

app.post("/signup", async (req, res) => {
    const {name, email, password} = req.body;
    console.log(req.body);
    await signup.create({name, email, password});
    res.status(200).json({"message": "created"});

})

app.listen(5000, () => {
    console.log("listening to port 5000...");
})