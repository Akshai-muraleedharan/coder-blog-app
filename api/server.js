// const express = require('express');
// const dotenv =require('dotenv');
// const  postrouter  = require('./routes/post');

import express from 'express'
import dotenv from 'dotenv'
import postrouter from './routes/post.js'
 import mongoose from 'mongoose'
const app = express();

dotenv.config();

const port =process.env.PORT || 4000;



app.get('/',postrouter)

app.listen(port,()=>{ 
    console.log(`server is running on port : ${port}`);
})





