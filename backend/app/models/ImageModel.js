const { default: mongoose, Schema } = require("mongoose");
const schema = new mongoose.Schema({
    image: { type: String },
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
}, {
    timestamps: true,
    versionKey: false
});
// schema.plugin(mongoosePaginate);
const ImageModel = mongoose.model('Image', schema);
module.exports = {
    ImageModel
}