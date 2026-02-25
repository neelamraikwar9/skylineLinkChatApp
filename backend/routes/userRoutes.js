const express = require('express'); 
const { registerUser } = require("../controllers/userControllers"); 


const router = express.Router();  // instance of a router.
// router.route()


// there is two way to write route; 
// 1. 
//  router.post()

//2.  if we want to chain multiple routes; 
// router.route('/login').get(() => {}).post(); 


router.route('/').post(registerUser); 
// router.post('/login', authUser); 


module.exports = router; 


