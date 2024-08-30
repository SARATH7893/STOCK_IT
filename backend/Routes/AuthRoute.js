const { Signup, Login,setData,getData } = require('../Controllers/AuthController');
const{userVerification}=require("../Middlewares/AuthMiddleware")
const router = require('express').Router();

router.get('/getdata',getData)
router.post('/setdata',setData)
router.post('/',userVerification)
router.post('/signup', Signup);
router.post('/login', Login);

module.exports = router;
