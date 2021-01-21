const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://pet-app-user:test123@pet-app.m8bk8.mongodb.net/test?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
        console.log("Data connection success");
    } catch (err) {
        console.log(err);
    }
}
module.exports = connectDB;