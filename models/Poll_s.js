const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const UserSchema = new mongoose.Schema({
    title: {type: String, required: true, default: "New Vote Jan 22 @ 1 pm"},
    desc: String,
    isDone: Boolean,
    vc: { type: Number, unique: true }
    timestamp: { type: Date, default: Date.now }
});

UserSchema.plugin(AutoIncrement, { inc_field: 'vc' });
const User= mongoose.model('User', UserSchema);
module.exports= {User};
