const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const TodoSchema = new mongoose.Schema({
    title: {type: String, required: true, default: "New Vote Jan 20"},
    desc: String,
    isDone: Boolean,
    vc: { type: Number, unique: true }
});

// TodoSchema.plugin(AutoIncrement, { inc_field: 'vc' });
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = { Todo };
