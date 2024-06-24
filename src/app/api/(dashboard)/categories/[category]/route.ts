import { NextRequest, NextResponse } from "next/server";
import Category from "@/lib/Model/CategoryModel";
import User from "@/lib/Model/UserModel";
import { connectDB } from "@/lib/db";
import { Types } from "mongoose";

export const PUT = async (request: NextRequest, context: { params: any }) => {

    const categoryId = context.params.category;

    try {

        await connectDB();

        const { searchParams } = new URL(request.url);

        const body = await request.json();

        const userId = searchParams.get("userId");

        const { title } = body;

        if (!userId || !Types.ObjectId.isValid(userId)) {
            return new NextResponse(JSON.stringify({ message: "Invalid Or Missing User ID" }),
                { status: 400 }
            );
        }

        if (!categoryId || !Types.ObjectId.isValid(categoryId)) {
            return new NextResponse(JSON.stringify({ message: "Invalid Or Missing Category ID" }),
                { status: 400 }
            );
        }

        const user = await User.findById(userId);

        if (!user) {
            return new NextResponse(JSON.stringify({ message: "User Not Found" }), {
                status: 404
            });
        }

        const category = await Category.findOne({ _id: categoryId, user: userId });

        if (!category) {
            return new NextResponse(JSON.stringify({ message: "Category Not Found" }), {
                status: 404
            });
        }

        const updatedCategory = await Category.findByIdAndUpdate(
            categoryId,
            { title },
            { new: true }
        );

        return new NextResponse(JSON.stringify({ message: "Category IS Updated", category: updatedCategory }), {
            status: 200
        });

    } catch (error: any) {

        return new NextResponse("Error In Updating Category" + error.message, {
            status: 500
        });

    }

};

export const DELETE = async (request: NextRequest, context: { params: any }) => {

    const categoryId = context.params.category;

    try {

        await connectDB();

        const { searchParams } = new URL(request.url);

        const userId = searchParams.get("userId");

        if (!userId || !Types.ObjectId.isValid(userId)) {
            return new NextResponse(JSON.stringify({ message: "Invalid Or Missing User ID" }),
                { status: 400 }
            );
        }

        if (!categoryId || !Types.ObjectId.isValid(categoryId)) {
            return new NextResponse(JSON.stringify({ message: "Invalid Or Missing Category ID" }),
                { status: 400 }
            );
        }

        const user = await User.findById(userId);

        if (!user) {
            return new NextResponse(JSON.stringify({ message: "User Not Found" }), {
                status: 404
            });
        }

        const category = await Category.findOne({ _id: categoryId, user: userId });

        if (!category) {
            return new NextResponse(JSON.stringify({ message: "Category Not Found Or Does Not Belong To The User", }),
                { status: 404 }
            );
        }

        await Category.findByIdAndDelete(categoryId);

        return new NextResponse(JSON.stringify({ message: "Category Is Deleted" }),
            { status: 200 }
        );

    } catch (error: any) {

        return new NextResponse("Error In Deleting Category" + error.message, {
            status: 500
        });

    }

};