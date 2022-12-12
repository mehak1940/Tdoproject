const { request, response } = require("express");
const { Todo } = require("../models/models");

const getTask = async (request, response) => {
    var taskId = request.query.id;

    if(taskId){
        try{
            var allTask = await Todo.findById(taskId);
        }
        catch{
            allTask = null;
        }
    }
    else{
        var allTask = await Todo.find({});
    }
    
    return response.json(allTask);
};

const createNewTask = async (request, response) => {
    // console.log(request.body);
    await Todo.create(request.body);
    return response.json({data:"Task Created"});
}

const updateTask = async (request, response) => {
    var taskId = request.query.id;

        try{
            var task = await Todo.findById(taskId);
            if(!task) {
                return response.status(404).json({status: "Error", msg: "Id does not exist"});
            }
        }catch{
            return response.status(404).json({status: "Error", msg: "Id does not exist"});
        }
        
        await Todo.findByIdAndUpdate(taskId, request.body);
    return response.json({data: "Task Updated"});
}

const deleteTask = async (request, response) => {
    var taskId = request.query.id;
        try{
            var task = await Todo.findById(taskId);
            if(!task) {
                return response.status(404).json({status: "Error", msg: "Id does not exist"});
            }
        }catch{
            return response.status(404).json({status: "Error", msg: "Id does not exist"});
        }
        await Todo.findByIdAndDelete(task);
        return response.json({data: "Task Deleted"});
        
}

const updateTaskStatus = async (request, response) => {
    var taskId = request.query.id;
        // console.log(request.body, studentId);

        try{
            var task = await Todo.findById(taskId);
            if(!task) {
                return response.status(404).json({status: "Error", msg: "Id does not exist"});
            }
        }catch{
            return response.status(404).json({status: "Error", msg: "Id does not exist"});
        }
        
        await Todo.findByIdAndUpdate(taskId, request.body);
    return response.json({data: "Task Status Updated"});
}


module.exports = {getTask, createNewTask, updateTask, deleteTask, updateTaskStatus};