const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth')
const {registerUser , loginUser,getName, logoutUser , authenticateUser , getUserData , getUserName , asyncFunc} = require('../controllers/userControllers')


// Register
router.post("/", registerUser);

// Log in User
router.post("/login" ,loginUser);

// Log Out User
router.get("/logout" , logoutUser)


// Authentication done
router.get('/loggedIN' ,authenticateUser )
  
//  
router.get('/userdata' , auth ,  getUserData )


// 
router.get('/getusername/:id' ,asyncFunc , getUserName)

router.get('/getusercode/:userID' ,getName)

module.exports = router;
  