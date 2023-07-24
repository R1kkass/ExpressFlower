const Router = require("express");
const router = new Router();
const authMiddleware = require("../middleware/authMiddleware");
const checkMiddleWare = require("../middleware/checkMiddleWare");
const flowerController = require("../controller/flowerController");

// router.post("/create", checkMiddleWare("ADMIN"), pizzaController.getAll);
router.post("/create", flowerController.createFlower);
router.post("/update",checkMiddleWare('ADMIN'),  flowerController.updateFlower);
router.get("/getall", flowerController.getAllFlower);
router.delete("/delete", checkMiddleWare('ADMIN'), flowerController.deleteFlower);

module.exports = router;
