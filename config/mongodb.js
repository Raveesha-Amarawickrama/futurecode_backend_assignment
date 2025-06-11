const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,//tells Mongoose to use the new and improved URL parser
      useUnifiedTopology: true//Enables the new topology engine
    });
    console.log(' MongoDB connected');// if connection success
  } catch (err) {
    console.error(' MongoDB connection error:', err.message);// if connection fails
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
