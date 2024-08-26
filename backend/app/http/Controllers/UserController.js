const { UserModel } = require("../../models/UserModel");
const Controller = require("./controller");

class User extends Controller{
    async getMe(req,res,next){
        try{
            const user = await UserModel.findOne({_id : req?.user?._id})
            return res.status(200).json({
                data : user
            })
        }catch(err){
            next(err)
        }
    }
}
module.exports = {
    UserController : new User()
}