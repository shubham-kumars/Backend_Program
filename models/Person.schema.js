const mongoose = require('mongoose');


const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, enum: ["Manager","Chef","Waiter","Cleaner","Receptionist","Security"], required: true },
  age: { type: Number, required: true }

});

const Person = mongoose.model("Person",personSchema);

module.exports = Person;

