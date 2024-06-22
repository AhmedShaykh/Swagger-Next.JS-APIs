import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/lib/UserModel";
import { Types } from "mongoose";

const ObjectId = require("mongoose").Types.ObjectId;

export const GET = async () => {

    try {

        await connectDB();

        const users = await User.find();

        return new NextResponse(JSON.stringify(users), { status: 200 });

    } catch (error: any) {

        return new NextResponse("Error In Fetching Users" + error.message, {
            status: 500
        });

    }

};

export const POST = async (request: NextRequest) => {

    try {

        await connectDB();

        const body = await request.json();

        const newUser = new User(body);

        await newUser.save();

        return new NextResponse(JSON.stringify({ message: "User Is Created", user: newUser }),
            { status: 200 }
        );

    } catch (error: any) {

        return new NextResponse("Error in Creating User" + error.message, {
            status: 500
        });

    }

};

export const PUT = async (request: NextRequest) => {

    try {

        await connectDB();

        const body = await request.json();

        const { userId, newUsername } = body;

        if (!userId || !newUsername) {
            return new NextResponse(JSON.stringify({ message: "ID Or New Username Not Found" }),
                { status: 400 }
            );
        }

        if (!Types.ObjectId.isValid(userId)) {
            return new NextResponse(JSON.stringify({ message: "Invalid User ID" }), {
                status: 400
            });
        }

        const updatedUser = await User.findOneAndUpdate(
            { _id: new ObjectId(userId) },
            { username: newUsername },
            { new: true }
        );

        if (!updatedUser) {
            return new NextResponse(JSON.stringify({ message: "User Not Found In The Database" }),
                { status: 400 }
            );
        }

        return new NextResponse(JSON.stringify({ message: "User Is Updated", user: updatedUser }),
            { status: 200 }
        );

    } catch (error: any) {

        return new NextResponse("Error In Updating User" + error.message, {
            status: 500
        });

    }

};

export const DELETE = async (request: NextRequest) => {

    try {

        await connectDB();

        const { searchParams } = new URL(request.url);

        const userId = searchParams.get("userId");

        if (!userId) {
            return new NextResponse(JSON.stringify({ message: "ID Not Found" }), {
                status: 400
            });
        }

        if (!Types.ObjectId.isValid(userId)) {
            return new NextResponse(JSON.stringify({ message: "Invalid User ID" }), {
                status: 400
            });
        }

        const deletedUser = await User.findByIdAndDelete(
            new Types.ObjectId(userId)
        );

        if (!deletedUser) {
            return new NextResponse(JSON.stringify({ message: "User Not Found In The Database" }),
                { status: 400 }
            );
        }

        return new NextResponse(JSON.stringify({ message: "User Is Deleted", user: deletedUser }),
            { status: 200 }
        );

    } catch (error: any) {

        return new NextResponse("Error In Deleting User" + error.message, {
            status: 500
        });

    }

};