const express=require('express')
const router=express.Router()

const {isLoggedIn}=require('../lib/auth')

const {renderNutricion}=require('../controllers/nutricion.controller')

router.get('/nutricion',isLoggedIn, renderNutricion);

module.exports=router