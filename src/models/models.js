const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: Boolean,
});


const Todo = mongoose.model("todoList", todoSchema);

module.exports = { Todo };