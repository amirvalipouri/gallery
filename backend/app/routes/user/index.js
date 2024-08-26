const { Router } = require("express")
const { CategoryUserRoutes } = require("./category")
const { ImageUserRoutes } = require("./image")
const { CameraUserRoutes } = require("./camera")
const { CourseUserRoutes } = require("./course")
const { CartRoutes } = require("./cart")
const { profileRoutes } = require("./getMe")
const router = Router()
router.use("/category",CategoryUserRoutes)
router.use("/image",ImageUserRoutes)
router.use("/camera",CameraUserRoutes)
router.use("/course",CourseUserRoutes)
router.use("/cart",CartRoutes)
router.use("/getMe",profileRoutes)
module.exports = {
    UserRoutes : router
}