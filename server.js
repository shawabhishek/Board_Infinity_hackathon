const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT||3000;
const routes=require('./src/routes/task_route');

const app = express();
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false,useCreateIndex: true
}).then(() => {
 console.log('connected to database')
}).catch((error) => {
 console.log(error)
})

app.get("/",(req,res)=>{
    res.send({
        invalid:"Add /task at last of url for get and post"
    })
})

app.use(routes);

app.listen(port, () => {
    console.log(`Running on: ${port}`);
});