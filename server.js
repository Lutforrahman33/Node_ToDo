const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/route');

mongoose.connect('mongodb://localhost:27017/mongo_todo' , {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(()=>{
  console.log('Database connected');
});

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine' ,'ejs');

app.use('/' , routes);



app.listen(3000);