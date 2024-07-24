const express = require('express');
const dotenv =require('dotenv');


const app = express();

dotenv.config();

const port =process.env.PORT || 4000;


app.get('/',(req,res)=>{
    res.send("hello world")
})

app.listen(port,()=>{
    console.log(`server is running on port : ${port}`);
})





