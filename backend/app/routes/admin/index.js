const { Router } = require("express")
const { CategoryAdminRoutes } = require("./category.admin")
const { ImageAdminRoutes } = require("./image.admin")
const { CameraAdminRoutes } = require("./camera.admin")
const { CourseAdminRoutes } = require("./couse.admin")
const router = Router()
router.use("/category",CategoryAdminRoutes)
router.use("/image",ImageAdminRoutes)
router.use("/camera",CameraAdminRoutes)
router.use("/course",CourseAdminRoutes)
module.exports = {
    adminRoutes : router
}