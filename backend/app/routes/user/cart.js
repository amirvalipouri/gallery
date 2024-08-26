const { Router } = require("express")
const {CartController} = require("../../http/Controllers/CartController")
const Auth = require("../../http/middlewares/Auth")
const router = Router()
router.post("/addToCard" ,Auth,CartController.addToCard)
router.get("",Auth , CartController.getUserCart)
router.get("/count" , Auth , CartController.getCartCount)
router.delete("/remove",Auth,CartController.removecourseFromCard)
router.post("/:id",Auth , CartController.addPurchase)
router.get("/purchase",Auth , CartController.getUserPurchase)
module.exports = {
    CartRoutes : router
}