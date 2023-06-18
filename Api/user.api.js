const { signup, signin } = require("../Services/user.service");
const { validateSignup, validateSignin } = require("../Validation/user.vlaidate");


const router = require("express").Router();

router.post("/signup", validateSignup , signup);
router.post("/signin", validateSignin , signin);

module.exports = router ;