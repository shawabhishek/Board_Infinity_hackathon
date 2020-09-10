const mongoose = require('mongoose');
const ttl=require("mongoose-ttl");

//Schema of Task app
const TaskSchema = mongoose.Schema({
    name: {
        type: String,
        Required: true,
        trim:true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    creator:{
        type:String,
        required:true,
        trim:true
    },
    duration:{
        type:Number,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    expireAt:{
        type:Date,
        default:Date.now()
    }
});
TaskSchema.index({"expireAt":1},{expireAfterSeconds:0})//It will create a new index name "expireAt" of type ttl
const Task = mongoose.model('Task', TaskSchema);
module.exports=Task;