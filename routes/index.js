const Router = require("express");
const router = new Router();

const userRouter = require("./userRouter");
const flowerRouter = require("./flowerRouter");
const basketRouter = require("./basketRouter");
const tasteRouter = require("./tasteRouter");
const orderRouter = require("./orderRouter");
const adminUserRouter = require("./adminUserRouter");
const initController = require("../controller/initController");


router.use("/user", userRouter);
router.use("/flower", flowerRouter);
router.use("/basket", basketRouter);
router.use("/taste", tasteRouter);
router.use("/order", orderRouter);
router.use("/adminuser", adminUserRouter);
router.post('/init', initController.init)

module.exports = router;
