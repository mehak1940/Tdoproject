// Express
const server = require("express");
const cors = require("cors");
const app = server();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//  DATABSE CONN
mongoose.connect("mongodb://localhost:27017/todo");
mongoose.connection.on("connected", () => {
    console.log("DB CONNECTED");
});

mongoose.connection.on("error", ()=> {
    console.log("DB CONNECTION ERROR");
})

//Conn end



const { createNewTask, updateTask, getTask, deleteTask, updateTaskStatus} = require("./src/controllers/controllers")

app.use(cors());
app.use(bodyParser.json());
app.get("/todo", getTask);
app.post("/create-new-task", createNewTask);
app.put("/update-task", updateTask);
app.put("/update-task-status", updateTaskStatus);
app.delete("/delete-task", deleteTask);

app.listen(4000, () => {
    console.log("Server Started on port 4000");
}); 