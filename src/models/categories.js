import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    modalities: [{type: mongoose.Types.ObjectId, ref: 'Modalities'}]
}, {
    autoCreate: true
});

const CategoriesModel = mongoose.model('Categories', schema);

CategoriesModel.createCollection();

export default CategoriesModel;