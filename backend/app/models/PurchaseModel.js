const { default: mongoose, Schema } = require("mongoose");
const schema = new mongoose.Schema({
    totalCount : {type : Number , default : 0 , required : true} , 
    userId : {type : Schema.Types.ObjectId , ref : "User"},
    totalPrice : {type : Number , default : 0},
    items: [{
        _id : {type : String , required : true},
        available: { type: Boolean, default: true},
        count: { type: Number, required: true },
        price: { type: Number, required: true },
        course: { type: Schema.Types.ObjectId, ref: 'Course' },
    }],
}, {
    timestamps: true,
    id : false,
    versionKey: false
});
// schema.plugin(mongoosePaginate);
const PurchaseModel = mongoose.model('Purchase', schema);
module.exports = {
    PurchaseModel
}