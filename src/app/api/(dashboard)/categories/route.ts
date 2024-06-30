import { NextRequest, NextResponse } from "next/server";
import Category from "@/lib/Model/CategoryModel";
import User from "@/lib/Model/UserModel";
import { connectDB } from "@/lib/db";
import { Types } from "mongoose";

/**
 * @swagger
 * tags: 
 *    - name: Categories
 *      description: Operations About Categories
  * api/categories?{userId}:
 *   get:
 *     tags:
 *      - Categories
 *     summary: Get Category
 *     responses:
 *       200:
 *         description: Category Fetched Successfully!
 *       400:
 *         description: Error 404
 */

export const GET = async (request: NextRequest) => {

    try {

        await connectDB();

        const { searchParams } = new URL(request.url);

        const userId = searchParams.get("userId");

        if (!userId || !Types.ObjectId.isValid(userId)) {
            return new NextResponse(JSON.stringify({ message: "Invalid Or Missing User ID" }),
                { status: 400 }
            );
        }

        const user = await User.findById(userId);

        if (!user) {
            return new NextResponse(JSON.stringify({ message: "User Not Found In The Database" }),
                { status: 400 }
            );
        }

        const categories = await Category.find({
            user: new Types.ObjectId(userId)
        });

        return new NextResponse(JSON.stringify(categories), {
            status: 200
        });

    } catch (error: any) {

        return new NextResponse("Error In Fetching Categories" + error.message, {
            status: 500
        });

    }

};

/**
 * @swagger
 * api/categories?{userId}:
 *   post:
 *     tags:
 *      - Categories
 *     summary: Add Category
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                userId:
 *                  type: string
 *                title:
 *                  type: string
 *     responses:
 *       200:
 *         description: Category Added Successfully!
 *       400:
 *         description: Error 404
 */

export const POST = async (request: NextRequest) => {

    try {

        await connectDB();

        const { searchParams } = new URL(request.url);

        const userId = searchParams.get("userId");

        const { title } = await request.json();

        if (!userId || !Types.ObjectId.isValid(userId)) {
            return new NextResponse(JSON.stringify({ message: "Invalid Or Missing User ID" }),
                { status: 400 }
            );
        }

        const user = await User.findById(userId);

        if (!user) {
            return new NextResponse(JSON.stringify({ message: "User Not Found" }), {
                status: 404
            });
        }
        const newCategory = new Category({
            title,
            user: new Types.ObjectId(userId)
        });

        await newCategory.save();

        return new NextResponse(JSON.stringify({ message: "Category Is Created", category: newCategory }),
            { status: 200 }
        );

    } catch (error: any) {

        return new NextResponse("Error In Creating Category" + error.message, {
            status: 500
        });

    }

};