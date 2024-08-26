const { default: mongoose, Schema } = require("mongoose");
const schema = new mongoose.Schema({
    title : {type: String,required : true},
    description : {type: String},
    price : {type: Number , default : 0},
    available : {type : Boolean , default : false},
    image : {type: String, required : true},
    teacher : {type : String },
    time : {type : String}
}, {
    timestamps: true,
    versionKey: false
});
// schema.plugin(mongoosePaginate);
const CourseModel = mongoose.model('Course', schema);
module.exports = {
    CourseModel
}