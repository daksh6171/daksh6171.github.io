const express = require("express");
const { userById } = require("../controllers/user");

const router = express.Router();

const {
    signup,
    signin,
    signout,
    forgotPassword,
    resetPassword,
    socialLogin
} = require("../controllers/auth");
 
// import password reset validator
const { userSignupValidator, passwordResetValidator } = require("../validator/index");
 
// password forgot and reset routes
router.put("/forgot-password", forgotPassword);
router.put("/reset-password", passwordResetValidator, resetPassword);

// Login with google
router.post("/social-login", socialLogin);

router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);

// any route containing :userId, our app will first execute userByID()
router.param("userId", userById);

module.exports = router;
