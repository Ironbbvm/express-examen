const router = require('express').Router()

const {getUser, registerUser } = require('../controllers/user.controller');
const {loginUser} = require('../controllers/login.user')

router.get('/user', getUser);

router.post('/login', loginUser)

router.post('/register',registerUser);




module.exports = router;