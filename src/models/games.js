import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    team1: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
    team2: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Categories'
    },
    modality:  {
        type: Schema.Types.ObjectId,
        ref: 'Modalities'
    },
}, {
    autoCreate: true
});

const GameModel = mongoose.model('Games', schema);

GameModel.createCollection();

export default GameModel;