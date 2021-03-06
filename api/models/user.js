const mongoose = require("mongoose");

//  TODO: rodzaje użytkowników

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String, 
        required: true,
        unique: true,
        match: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    },
    password: {
        type: String, 
        required: true
    },
    contributionPoints: Number,
    permission:{
        type: String,
        enum: ['pleb','reviewer','moderator','admin'],
        default: 'pleb'
    }
});

module.exports = mongoose.model("User", userSchema);
