const mongoose = require('mongoose');

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
    Created_At: {
        type: Date,
        default: Date.now
    },
});

const Task = mongoose.model('Task', TaskSchema);
module.exports=Task;