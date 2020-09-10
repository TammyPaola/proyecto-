const express = require('express');
const router = express.Router();

const { renderSignUp, signUp, renderSignIn, signIn, logout } = require('../controllers/auth.controller')

// SINGIN
router.get('/signin', renderSignIn);
router.post('/signin', signIn);

// SIGNUP
router.get('/signup', renderSignUp);
router.post('/signup', signUp);



router.get('/logout', logout);

module.exports = router;