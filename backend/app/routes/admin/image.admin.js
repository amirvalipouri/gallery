const { Router } = require("express")
const { uploadFile } = require("../../utils/multer")
const {ImageController} = require("../../http/Controllers/Image.controller")
const router = Router()
router.post('',uploadFile.single("image"),ImageController.addImage)
module.exports = {
    ImageAdminRoutes : router
}