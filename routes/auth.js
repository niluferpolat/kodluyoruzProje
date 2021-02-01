const express = require('express');
const { signupValidator, signinValidator, validatorResult } = require('../middleware/validator')
const router = express.Router();
const { signupController, signinController } = require('../controllers/auth')

router.post('/signup', signupValidator, validatorResult, signupController);
router.post('/signin', signinValidator, validatorResult, signinController);

module.exports = router;