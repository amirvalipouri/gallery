const { default: mongoose, Schema } = require("mongoose");
const schema = new mongoose.Schema({
    firstName : {type : String},
    lastName : {type : String},
    phone : {type : String},
    password : {type : String},
    role : {type : String , default : "user"}
}, {
    timestamps: true,
    versionKey: false
});
// schema.plugin(mongoosePaginate);
const UserModel = mongoose.model('User', schema);
module.exports = {
    UserModel
}