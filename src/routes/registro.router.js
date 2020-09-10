const express = require('express');
const router = express.Router()

const {isLoggedIn}=require('../lib/auth')

const  {renderRegistro,registroAdd,renderClientes}=require('../controllers/registro.controller')

router.use(isLoggedIn)

router.get('/Registro',renderRegistro)
router.post('/Registro',registroAdd)
router.get('/Lista',isLoggedIn,renderClientes)

module.exports=router