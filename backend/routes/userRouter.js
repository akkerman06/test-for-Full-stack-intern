const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");
const auth = require("../middleware/auth");

router.post("/login", userCtrl.login);

router.post("/logout", userCtrl.logout);

router.post("/refresh_token", userCtrl.generateAccessToken);

module.exports = router;
