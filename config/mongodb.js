import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');// if connection is successful
  } catch (err) {
    console.error(' MongoDB connection failed:', err.message); // if connection fails
    process.exit(1);// Exit process with failure
  }
};

export default connectDB;
