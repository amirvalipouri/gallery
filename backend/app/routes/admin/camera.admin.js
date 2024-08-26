const { Router } = require("express")
const {CameraController} = require("../../http/Controllers/CameraController")
const { uploadFile } = require("../../utils/multer")
const router = Router()
router.post("",uploadFile.single("image"),CameraController.addCamera)
module.exports = {
    CameraAdminRoutes : router
}