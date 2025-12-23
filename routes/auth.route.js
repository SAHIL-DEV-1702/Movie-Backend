const express = require("express");
const router = express.Router();
const authCtrl = require("../controller/auth.controller")

router.post("/user/register", authCtrl.register);
router.post("/user/login", authCtrl.login);


router.post("/admin/register", authCtrl.registerAdmin);

module.exports = router;
