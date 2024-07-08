import mongoose from "mongoose";

const initDatabase = async () => {
    try {
        const mongoURI: string = process.env.DB_URI || "";
        await mongoose.connect(mongoURI);
        console.log("Database connected!");
    } catch (error) {
        console.error(error);
    }
};

export default initDatabase;
