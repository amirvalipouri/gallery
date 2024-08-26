const { default: mongoose, Schema } = require("mongoose");
const schema = new mongoose.Schema({
    image: { type: String },
    name : {type : String},
    price : {type : Number},
    desc : {type : String},
    resolution : {type : String},
    weight : {type : Number},
    code : {type : Number},
}, {
    timestamps: true,
    versionKey: false
});
// schema.plugin(mongoosePaginate);
const CameraModel = mongoose.model('Camera', schema);
module.exports = {
    CameraModel
}