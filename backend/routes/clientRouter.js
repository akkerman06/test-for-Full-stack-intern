const router = require("express").Router();
const auth = require("../middleware/auth");
const clientCtrl = require("../controllers/clientCtrl");

router.get("/", auth, clientCtrl.getClients);
router.patch("/changeStatus/:id", auth, clientCtrl.changeStatus);

module.exports = router;
