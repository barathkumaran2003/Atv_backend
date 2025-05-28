const express = require("express");
const router = express.Router();
const { signin, getsignin, login, getLogin, news, getnews, shope, getshop, contact, shopedit, editshopedit, deleteShop, review, getreview  } = require("../controllers/authController");
// const { login } = require("../controllers/authController");
// const { getLogin } = require("../controllers/authController");


router.post("/signin", signin);
router.post("/login", login);
router.get("/login", getLogin);
router.get("/signin", getsignin);
router.post("/news",news);
router.get("/news",getnews);
router.post("/shop",shope);
router.get("/shop", getshop);
router.post("/contact", contact);
router.get("/shopedit", shopedit);
router.put("/shopedit", editshopedit);
router.delete("/shopdelete", deleteShop);
router.post("/review",review);
router.get("/review",getreview)
module.exports = router;
