const { CategoryModel } = require("../../models/CategoryModel");
const Controller = require("./controller");
const {SingleImagesFromRequest} = require("../../utils/function");
const { ImageModel } = require("../../models/ImageModel");
class Image extends Controller {
    async addImage(req, res, next) {
        try {
            const { category } = req.body
            console.log(req.body.filename , req.body.fileUploadPath )
            const image = SingleImagesFromRequest(req.body.filename || "", req.body.fileUploadPath)
            const newImage = await ImageModel.create({category , image})
            return res.status(201).json({
                message : " عکس جدید اضافه شد"
            })
        } catch (err) {
            console.log(err)
            next(err)
        }
    }
    async findImageByCategory(req,res,next){
        try{
            const {id} = req.params
            const images = await ImageModel.find({category : id})
            return res.status(200).json({
                data : images
            })
        }catch(err){
            next(err)
        }
    }
}
module.exports = {
    ImageController: new Image()
}