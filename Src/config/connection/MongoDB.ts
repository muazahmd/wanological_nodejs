const mongoose = require("mongoose");
import { GeneralGlobalStringData } from "../keys/GeneralKeys"; // PORT from General Config

const connectToDB =  (async() => {
  try {
    await mongoose.connect(GeneralGlobalStringData.MongoDB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit the application on connection failure
  }
});

export default connectToDB;
