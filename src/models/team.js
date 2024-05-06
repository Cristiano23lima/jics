import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    name: {
        type: String,
        required: true
    }
}, {
    autoCreate: true
});

const TeamModel = mongoose.model('Team', schema);

TeamModel.createCollection();

export default TeamModel;