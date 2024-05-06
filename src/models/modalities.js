import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    nipe: {
        type: String,
        enum: ['F', 'M'],
        required: true
    },
    categories: [{type: mongoose.Types.ObjectId, ref: 'Categories'}]
}, {
    autoCreate: true
});

const ModalitiesModel = mongoose.model('Modalities', schema);

ModalitiesModel.createCollection();

export default ModalitiesModel;