import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    team: {type: Schema.Types.ObjectId, ref: 'Team'},
    modality: {type: Schema.Types.ObjectId, ref: 'Modalities'},
    category: {type: Schema.Types.ObjectId, ref: 'Categories'}
}, {
    autoCreate: true
});

const TeamModel = mongoose.model('Subscribe', schema);

TeamModel.createCollection();

export default TeamModel;