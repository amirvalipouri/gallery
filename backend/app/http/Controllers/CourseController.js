const { CourseModel } = require("../../models/CourseModel")
const { SingleImagesFromRequest } = require("../../utils/function")
const Controller = require("./controller")
class Course extends Controller {
    async addCourse(req,res,next){
        try{
            const { title , description , price , available , teacher , time } = req.body
            const image = SingleImagesFromRequest(req.body.filename || "", req.body.fileUploadPath)
            const newCourse = await CourseModel.create({ title , description , price , available , teacher , time , image})
            return res.status(201).json({
                message : "دوره جدید افزوده شد"
            })
        }catch(err){
            next(err)
        }
    }
    async getAllCourses(req,res,next){
        try{
            const findCourse = await CourseModel.find({})
            return res.status(200).json({
                data : findCourse
            })
        }catch(err){
            next(err)
        }
    }
    async getCourseById(req,res,next){
        try{
            const {id} = req.params
            const find = await CourseModel.findById(id)
            return res.status(200).json({
                data : find
            })
        }catch(err){
            next(err)
        }
    }
}
module.exports = {
    CourseController : new Course()
}