const { Router } = require("express")
const {AuthController} = require("../http/Controllers/AuthController")
const router = Router()
router.post("/signin",AuthController.signin)
router.post("/signup",AuthController.signup)
module.exports = {
    AuthRoutes : router
}