const express = require('express');
const app = express();
const db = require('./database');
const PORT = 7878;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// app.use(express.json())
const personRouter = require('./routes/personRouter')
app.use('/',personRouter);
const MenuRoutes = require('./routes/menuRouter');
app.use('/',MenuRoutes);



app.listen(PORT,()=>{
  console.log(`This is my PORT = ${PORT}`);
});