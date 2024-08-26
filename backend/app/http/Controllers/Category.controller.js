const { CategoryModel } = require("../../models/CategoryModel");
const Controller = require("./controller");
const {SingleImagesFromRequest} = require("../../utils/function")
class Category extends Controller {
    async addCategory(req, res, next) {
        try {
            const { title } = req.body
            // if (!req.files) throw new createHttpError.BadRequest("لطفا عکس را آپلود کنید")
            const image = SingleImagesFromRequest(req.body.filename || "", req.body.fileUploadPath)
            const newCategory = await CategoryModel.create({title , image})
            return res.status(201).json({
                message : "دسته بندی جدید اضافه شد"
            })
        } catch (err) {
            console.log(err)
            next(err)
        }
    }
    async getAllCategory(req,res,next){
        try{
            const categories = await CategoryModel.find({})
            return res.status(200).json({
                data : categories
            })
        }catch(err){
            next(err)
        }
    }
    async findCategory(id){
        const cat = await CategoryModel.findById(id)
        if(!cat) throw createHttpError.NotFound("دسته بندی موردنظر پیدا نشد")
        return cat
    }
}
module.exports = {
    CategoryController: new Category()
}