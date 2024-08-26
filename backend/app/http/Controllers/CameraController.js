const createHttpError = require("http-errors")
const { CameraModel } = require("../../models/CameraModel")
const Controller = require("./controller")
const { SingleImagesFromRequest } = require("../../utils/function")
class Camera extends Controller {
    async addCamera(req, res, next) {
        try {
            const { name , price , code , desc , resolution , weight } = req.body
            console.log(req.body)
            const image = SingleImagesFromRequest(req.body.filename || "", req.body.fileUploadPath)
            const newCamera = await CameraModel.create({ name , price , code , desc , resolution , weight , image })
            return res.status(201).json({
                message: " دوربین جدید اضافه شد"
            })
        } catch (err) {
            console.log(err)
            next(err)
        }
    }
    async getAllCameras(req,res,next){
        try{
            const cameras = await CameraModel.find({})
            return res.status(200).json({
                data : cameras
            })
        }catch(err){
            next(err)
        }
    }
    async getCameraById(req,res,next){
        try{
            const { id } = req.params
            const findCamera = await CameraModel.findById(id)
            if(!findCamera) throw createHttpError.NotFound("دوربین پیدا نشد")
            return res.status(200).json({
                data : findCamera
            })
        }catch(err){
            next(err)
        }
    }
}
module.exports = {
    CameraController : new Camera()
}