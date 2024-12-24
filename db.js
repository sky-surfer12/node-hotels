const mongoose = require("mongoose"); 

require("dotenv").config();

//const mongoURL = process.env.MONGODB_URL_Local;
const mongoURL = process.env.MONGODB_URL ;

mongoose.mongoose.connect(mongoURL,
   { useNewUrlParser: true,
     useUnifiedTopology: true });


const db = mongoose.connection;

db.on('connected', () => {
  console.log('Connected to MongoDB')});

db.on('error', () => {
  console.log('Error connecting to MongoDB')});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB')});

  module.exports = db;
