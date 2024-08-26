const { Router } = require("express")
const {CategoryController} = require("../../http/Controllers/Category.controller")
const { uploadFile } = require("../../utils/multer")
const router = Router()
router.post('',uploadFile.single("image"),CategoryController.addCategory)
module.exports = {
    CategoryAdminRoutes : router
}