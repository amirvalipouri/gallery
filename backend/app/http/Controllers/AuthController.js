const Controller = require("./controller");
// const { RandomNumberGenerator } = require("../../utils");
const { UserModel } = require("../../models/UserModel");
const createHttpError = require("http-errors");
const { SignAccessToken , hashPassword , verifyPassword } = require("../../utils/function");
class auth extends Controller{
    async signup(req,res,next){
        try{
            const { firstName , lastName , phone  , password } = req.body
            await this.checkExistUser(phone)
            const hashedPassword = await hashPassword(password)
            const newUser = await UserModel.create({ firstName , lastName , phone  , password : hashedPassword , role : "user" })
            return res.status(201).json({
                message : "ثبت نام موفقیت آمیز بود"
            })
        }catch(err){
            next(err)
        }
    }
    async signin(req,res,next){
        try{
            const { phone , password } = req.body
            const user = await this.findUser(phone)
            const verifyPass = await verifyPassword(password , user?.password)
            if(!verifyPass) throw createHttpError.BadRequest("رمز یا شماره اشتباه است")
            const token = await SignAccessToken(user?._id)
            return res.status(200).json({
                role : user?.role,
                token
            })
        }catch(err){
            next(err)
        }
    }
    async checkExistUser(phone) {
        const user = await UserModel.findOne({ phone })
        if(user) throw new createHttpError.BadRequest("کاربر قبلا ثبت نام کرده است")
    }
    async findUser(phone) {
        const user = await UserModel.findOne({ phone })
        if(!user) throw createHttpError.NotFound("شما ثبت نام نکرده اید")
        return user
    }
}
module.exports = {
    AuthController : new auth()
}