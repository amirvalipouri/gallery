const { Router } = require("express")
const {ImageController} = require("../../http/Controllers/Image.controller")
const router = Router()
router.get("/:id",ImageController.findImageByCategory)
module.exports = {
    ImageUserRoutes : router
}