import mongoose from "mongoose";

const URL = process.env.DATABASE_URL;

if (!URL) {

    throw new Error("Invalid Environment Variable: DATABASE_URL ");

}

export const connectDB = async () => {

    try {

        const { connection } = await mongoose.connect(URL);

        if (connection.readyState === 1) {

            return Promise.resolve(true);

        }

    } catch (error) {

        return Promise.reject(error);

    }
};