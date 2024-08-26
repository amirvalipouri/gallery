const { Router } = require("express")
const {CourseController} = require("../../http/Controllers/CourseController")
const router = Router()
router.get("",CourseController.getAllCourses)
router.get("/:id",CourseController.getCourseById)
module.exports = {
    CourseUserRoutes : router
}