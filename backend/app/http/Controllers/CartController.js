const createHttpError = require("http-errors");
const { CardModel } = require("../../models/CartModel");
const { CourseModel } = require("../../models/CourseModel");
const Controller = require("./controller");
const { PurchaseModel } = require("../../models/PurchaseModel");
const { default: mongoose } = require("mongoose");

class Cart extends Controller {
    async addToCard(req, res, next) {
        try {
            const { courseId } = req.body
            const course = await this.findcourse(courseId)
            const cart = await CardModel.findOne({ userId: req?.user?._id })
            let totalCount = 0
            let totalPrice = 0
            if (!course?.available) {
                return res.status(400).json({
                    message: "محصول موجود نیست"
                })
            }
            if (!cart) {
                let newCart = {}
                totalPrice += Number(course?.price)
                totalCount += 1
                newCart.totalCount = totalCount
                newCart.totalPrice = totalPrice
                newCart.userId = req.user?._id
                let items = []
                let p = {
                    _id: course?._id,
                    count: 1,
                    price: course?.price,
                    course
                }
                items.push(p)
                newCart.items = items
                const addNewCart = await CardModel.create(newCart)
                return res.status(201).json({
                    message: "به سبد خرید اضافه شد"
                })
            } else {
                const userId = req?.user?._id
                const items = await this.findcourseInCart(userId, courseId) || {}
                console.log("items : ", items)
                if (Object.keys(items)?.length > 0) {
                    totalPrice = Number(cart?.totalPrice) + Number(items?.price)
                    totalCount = Number(cart?.totalCount) + 1
                    const updateItems = await CardModel.updateOne({ userId: req?.user?._id, "items._id": courseId }, {
                        $set: { totalPrice, totalCount },
                        $inc: { "items.$.count": 1 }
                    })
                    if (updateItems?.modifiedCount === 0) throw createHttpError.InternalServerError("آپدیت انجام نشد")
                    return res.status(200).json({
                        message: "محصول به سبد خرید افزوده شد"
                    })

                } else {

                    totalPrice = Number(cart?.totalPrice) + Number(course?.price)
                    totalCount = Number(cart?.totalCount) + 1
                    let newP = {
                        _id: course?._id,
                        count: 1,
                        price: course?.price,
                        course
                    }
                    const updateItems = await CardModel.updateOne({ userId: req?.user?._id }, {
                        $set: { totalPrice, totalCount },
                        $push: { "items": newP }
                    })
                    if (updateItems?.modifiedCount === 0) throw createHttpError.InternalServerError("آپدیت انجام نشد")
                    return res.status(200).json({
                        message: "محصول به سبد خرید افزوده شد"
                    })
                }
            }

        } catch (err) {
            next(err)
        }
    }
    async removecourseFromCard(req, res, next) {
        try {
            const { courseId } = req.body
            const course = await this.findcourse(courseId)
            const cart = await CardModel.findOne({ userId: req?.user?._id })
            if (!cart) throw createHttpError.BadRequest("سبدخرید موجود نیست")
            let totalCount = 0
            let totalPrice = 0
            const item = await this.findcourseInCart(req?.user?._id, courseId)
            let message = ""
            if (!item) throw createHttpError.BadRequest("محصول در سبد خرید یافت نشد")
            if (item.count > 1) {
                totalPrice = Number(cart?.totalPrice) - Number(course?.price)
                totalCount = Number(cart?.totalCount) - 1
                await CardModel.updateOne(
                    {
                        userId: req?.user?._id,
                        "items._id": courseId
                    },
                    {
                        $set: { totalCount, totalPrice },
                        $inc: {
                            "items.$.count": -1
                        }
                    }
                )
                message = "یک عدد از محصول داخل سبد خرید کم شد"
                return res.status(200).json({ message })
            } else {
                totalPrice = Number(cart?.totalPrice) - Number(course?.price)
                totalCount = Number(cart?.totalCount) - 1
                await CardModel.updateOne(
                    {
                        userId: req?.user?._id,
                        "items._id": courseId
                    },
                    {
                        $set: { totalCount, totalPrice },
                        $pull: {
                            "items": {
                                _id: courseId,
                            }
                        }
                    }
                )
                message = "محصول در داخل سبد خرید حذف شد"

                return res.status(200).json({ message })
            }
        } catch (err) {
            next(err)
        }
    }
    async addPurchase(req, res, next) {
        try {
            const { id } = req.params
            const course = await CardModel.findById(id)
            let body = {}
            body.totalCount = course?.totalCount
            body.userId = course.userId
            body.totalPrice = course.totalPrice
            body.items = course?.items
            const addNewCart = await PurchaseModel.create(body)
            await CardModel.deleteMany()
            return res.status(200).json({
                message : "به لیست خرید شما اضافه شد"
            })
        } catch (err) {
            next(err)
        }
    }
    async getUserPurchase(req,res,next){
        try{
            console.log(req.user)
            // const data = await PurchaseModel.aggregate([
            //     { $match : { userId : new mongoose.Types.ObjectId(req?.user?._id) }},
            //     { $project : {"items" : 1 , _id : 0} },
            //     { $unwind: { path: "$items" } },
            //     { $lookup: {from: 'courses', localField: '_id', foreignField: 'course', as: 'items.course'} },
            //     // { $unwind: { path: "$course" } },
            //     // { $project : {"items" : 0 } },
            //   ])
            const data = await PurchaseModel.find({userId : req?.user?._id}).populate({
                path: "items",
                select : {"course" : 1},
                populate: {
                    path: "course",
                    model: "Course",
                },
            });
            return res.status(200).json({
                data : data
            })
        }catch(err){
            next(err)
        }
    }
    async findcourse(id) {
        const course = await CourseModel.findById(id)
        if (!course) throw createHttpError.NotFound("محصول پیدا نشد")
        return course
    }
    async findcourseInCart(userId, id) {
        let findcourse = await CardModel.findOne({ userId: userId, "items._id": id })
        console.log("findcourse : ", findcourse)
        return findcourse?.items[0]
    }
    async getUserCart(req, res, next) {
        try {
            const data = await CardModel.find({ userId: req.user._id }).populate({
                path: "items",
                populate: {
                    path: "course",
                    model: "Course",
                },
            });
            return res.status(200).json({
                data
            })
        } catch (err) {
            next(err)
        }
    }
    async getCartCount(req, res, next) {
        try {
            const count = await CardModel.findOne({ userId: req.user._id })
            return res.status(200).json({
                data: count?.totalCount
            })
        } catch (err) {
            next(err)
        }
    }

}
module.exports = {
    CartController: new Cart()
}