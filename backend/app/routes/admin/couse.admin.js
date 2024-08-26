const { Router } = require("express")
const {CourseController} = require("../../http/Controllers/CourseController")
const { uploadFile } = require("../../utils/multer")
const router = Router()
router.post("",uploadFile.single("image"),CourseController.addCourse)
module.exports = {
    CourseAdminRoutes : router
}