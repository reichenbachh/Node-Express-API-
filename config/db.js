const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(`mongoDB connected to ${conn.connection.host}`.yellow.bold);
  } catch (error) {
    console.log(`${error}`.red);
  }
};

module.exports = connectDB;
