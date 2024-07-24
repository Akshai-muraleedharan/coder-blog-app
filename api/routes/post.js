// const express =require('express');
// const userposts =require('../controller/postController')
// const router = express.Router();

import express from 'express'
import { userposts } from '../controller/postController.js'

const router = express.Router()


 router.get('/',userposts)

export default router 