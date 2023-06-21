const mongoose = require("mongoose");
const validator = require("validator");

const TeamSchema = new mongoose.Schema({
    team: {
        type: String,
        required: true,
        unique: true,
    },
    captain: {
        type: String,
        required: true,
    },
    jerseyNum: {
        type: Number,
        required: true,
        minlenght: 1
    },
    age: {
        type: Number,
        required: true,
        min: 19
    },
    country: {
        type: String,
        required: true
    },
    active: {
        type: Boolean
    }
});

const Team = new mongoose.model("Team", TeamSchema)
module.exports = Team;
