const { Router } = require("express")
const {CategoryController} = require("../../http/Controllers/Category.controller")
const router = Router()
router.get("",CategoryController.getAllCategory)
module.exports = {
    CategoryUserRoutes : router
}