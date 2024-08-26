const { Router } = require("express")
const {CameraController} = require("../../http/Controllers/CameraController")
const router = Router()
router.get("",CameraController.getAllCameras)
router.get("/:id",CameraController.getCameraById)
module.exports = {
    CameraUserRoutes : router
}