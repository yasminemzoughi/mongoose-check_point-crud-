//1 REQUIRE mongoose
const mongoose = require ("mongoose");

//connect db 
const connectDB = async() => {
    try {
       mongoose.set("strictQuery", false)
        await mongoose.connect(process.env.DB_URI)
        console.log("Database connected ..")
    } catch (error) {
        console.log(`Database is not connected.., ${error}` )
    }
}

// exports
module.exports = connectDB; 