import { NextRequest, NextResponse } from "next/server";
import Category from "@/lib/Model/CategoryModel";
import Blog from "@/lib/Model/BlogModel";
import User from "@/lib/Model/UserModel";
import { connectDB } from "@/lib/db";
import { Types } from "mongoose";

export const GET = async (request: NextRequest) => {

    try {

        await connectDB();

        const { searchParams } = new URL(request.url);

        const userId = searchParams.get("userId");

        const categoryId = searchParams.get("categoryId");

        const searchKeywords = searchParams.get("keywords") as string;

        const startDate = searchParams.get("startDate");

        const endDate = searchParams.get("endDate");

        const page: any = parseInt(searchParams.get("page") || "1");

        const limit: any = parseInt(searchParams.get("limit") || "10");

        if (!userId || !Types.ObjectId.isValid(userId)) {
            return new NextResponse(JSON.stringify({ message: "Invalid Or Missing User ID" }), {
                status: 400
            });
        }

        if (!categoryId || !Types.ObjectId.isValid(categoryId)) {
            return new NextResponse(JSON.stringify({ message: "Invalid Or Missing Category ID" }), {
                status: 400
            });
        }

        const user = await User.findById(userId);

        if (!user) {
            return new NextResponse(JSON.stringify({ message: "User Not Found" }), {
                status: 404
            });
        }

        const category = await Category.findById(categoryId);

        if (!category) {
            return new NextResponse(JSON.stringify({ message: "Category Not Found" }), {
                status: 404
            });
        }

        const filter: any = {
            user: new Types.ObjectId(userId),
            category: new Types.ObjectId(categoryId)
        };

        if (searchKeywords) {
            filter.$or = [
                {
                    title: { $regex: searchKeywords, $options: "i" }
                },
                {
                    description: { $regex: searchKeywords, $options: "i" }
                }
            ];
        }

        if (startDate && endDate) {

            filter.createdAt = {
                $gte: new Date(startDate),
                $lte: new Date(endDate)
            };

        } else if (startDate) {

            filter.createdAt = {
                $gte: new Date(startDate)
            };

        } else if (endDate) {

            filter.createdAt = {
                $lte: new Date(endDate)
            };

        }

        const skip = (page - 1) * limit;

        const blogs = await Blog.find(filter)
            .sort({ createdAt: "asc" })
            .skip(skip)
            .limit(limit);

        return new NextResponse(JSON.stringify({ blogs }), {
            status: 200
        });

    } catch (error: any) {

        return new NextResponse("Error In Fetching Blogs" + error.message, {
            status: 500
        });

    }

};


export const POST = async (request: NextRequest) => {

    try {

        await connectDB();

        const { searchParams } = new URL(request.url);

        const userId = searchParams.get("userId");

        const categoryId = searchParams.get("categoryId");

        const body = await request.json();

        const { title, description } = body;

        if (!userId || !Types.ObjectId.isValid(userId)) {
            return new NextResponse(JSON.stringify({ message: "Invalid Or Missing User ID" }), {
                status: 400
            });
        }

        if (!categoryId || !Types.ObjectId.isValid(categoryId)) {
            return new NextResponse(JSON.stringify({ message: "Invalid Or Missing Category ID" }), {
                status: 400
            });
        }

        const user = await User.findById(userId);

        if (!user) {
            return new NextResponse(JSON.stringify({ message: "User Not Found" }), {
                status: 404
            });
        }
        const category = await Category.findById(categoryId);

        if (!category) {
            return new NextResponse(JSON.stringify({ message: "Category Not Found" }), {
                status: 404
            });
        }

        const newBlog = new Blog({
            title,
            description,
            user: new Types.ObjectId(userId),
            category: new Types.ObjectId(categoryId)
        });

        await newBlog.save();

        return new NextResponse(JSON.stringify({ message: "Blog Is Created", blog: newBlog }), {
            status: 200
        });

    } catch (error: any) {

        return new NextResponse("Error In Fetching Blogs" + error.message, {
            status: 500
        });

    }

};