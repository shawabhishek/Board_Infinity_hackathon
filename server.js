const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const routes=require('./src/routes/task_route');

const app = express();
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/Task', {useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
 console.log('connected to db')
}).catch((error) => {
 console.log(error)
})

app.use(routes);

app.listen(port, () => {
    console.log(`Running on: ${port}`);
});