const {Router} = require("express")
const { adminRoutes } = require("./admin")
const { UserRoutes } = require("./user")
const { AuthRoutes } = require("./auth")
const router = Router()
router.use("/api/admin",adminRoutes)
router.use("/api/user",UserRoutes)
router.use("/api/auth",AuthRoutes)
module.exports = {
    AllRoutes : router
}