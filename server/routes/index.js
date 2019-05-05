const router = require('express').Router();
const AuthControll = require('../controllers/users');

router.post('/signup', AuthControll.signUp);
router.post('/signin', AuthControll.signIn);



module.exports = router