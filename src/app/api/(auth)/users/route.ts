import { NextRequest, NextResponse } from "next/server";
import User from "@/lib/Model/UserModel";
import { connectDB } from "@/lib/db";
import { Types } from "mongoose";

const ObjectId = require("mongoose").Types.ObjectId;

/**
 * @swagger
 * tags: 
 *    - name: Users
 *      description: Operations About Users
 * api/users:
 *   get:
 *     tags:
 *      - Users
 *     summary: Get User
 *     responses:
 *       200:
 *         description: User Fetched Successfully!
 *       400:
 *         description: Error 404
 */

export const GET = async () => {

    try {

        await connectDB();

        const users = await User.find();

        return new NextResponse(JSON.stringify(users), {
            status: 200
        });

    } catch (error: any) {

        return new NextResponse("Error In Fetching Users" + error.message, {
            status: 500
        });

    }

};

/**
 * @swagger
 * api/users:
 *   post:
 *     tags:
 *      - Users
 *     summary: Add User
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                username:
 *                  type: string
 *                email:
 *                  type: string
 *                password:
 *                  type: string
 *     responses:
 *       200:
 *         description: User Added Successfully!
 *       400:
 *         description: Error 404
 */

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

/**
 * @swagger
 * api/users/{id}:
 *   put:
 *     tags:
 *      - Users
 *     summary: Update User
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        schema:
 *          type: string
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                username:
 *                  type: string
 *                email:
 *                  type: string
 *                password:
 *                  type: string
 *     responses:
 *       200:
 *         description: User Updated Successfully!
 *       400:
 *         description: Error 404
 */

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

/**
 * @swagger
 * api/users/{id}:
 *   delete:
 *     tags:
 *      - Users
 *     summary: Delete User
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        schema:
 *          type: string
 *     responses:
 *       200:
 *         description: User Deleted Successfully!
 *       400:
 *         description: Error 404
 */

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