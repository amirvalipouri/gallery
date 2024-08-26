const { Router } = require("express")
const Auth = require("../../http/middlewares/Auth")
const {UserController} = require("../../http/Controllers/UserController")
const router = Router()
router.get("",Auth,UserController.getMe)
module.exports = {
    profileRoutes : router
}