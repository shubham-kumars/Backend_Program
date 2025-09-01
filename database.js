const mongoose = require('mongoose');
const mongoURL = 'mongodb://127.0.0.1:27017/hotelDB';

mongoose.connect(mongoURL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log('✅ MongoDB connected successfully')
}).catch(()=>{
  console.log('❌ MongoDB connection error:',error);
});

let db = mongoose.connection;
module.exports = db;