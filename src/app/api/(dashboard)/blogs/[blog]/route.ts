import { NextRequest, NextResponse } from "next/server";
import Category from "@/lib/Model/CategoryModel";
import Blog from "@/lib/Model/BlogModel";
import User from "@/lib/Model/UserModel";
import { connectDB } from "@/lib/db";
import { Types } from "mongoose";

export const GET = async (request: NextRequest, context: { params: any }) => {

    const blogId = context.params.blog;

    try {

        await connectDB();

        const { searchParams } = new URL(request.url);

        const userId = searchParams.get("userId");

        const categoryId = searchParams.get("categoryId");

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

        if (!blogId || !Types.ObjectId.isValid(blogId)) {
            return new NextResponse(JSON.stringify({ message: "Invalid Or Missing Blog ID" }), {
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

        const blog = await Blog.findOne({
            _id: blogId,
            user: userId,
            category: categoryId
        });

        if (!blog) {
            return new NextResponse(JSON.stringify({ message: "Blog Not Found" }), {
                status: 404
            });
        }

        return new NextResponse(JSON.stringify({ blog }), {
            status: 200
        });

    } catch (error: any) {

        return new NextResponse("Error In Fetching A Blog" + error.message, {
            status: 500
        });

    }

};

export const PUT = async (request: NextRequest, context: { params: any }) => {

    const blogId = context.params.blog;

    try {

        await connectDB();

        const { searchParams } = new URL(request.url);

        const userId = searchParams.get("userId");

        const body = await request.json();

        const { title, description } = body;

        if (!userId || !Types.ObjectId.isValid(userId)) {
            return new NextResponse(JSON.stringify({ message: "Invalid Or Missing User ID" }), {
                status: 400
            });
        }

        if (!blogId || !Types.ObjectId.isValid(blogId)) {
            return new NextResponse(JSON.stringify({ message: "Invalid Or Missing Blog ID" }), {
                status: 400
            });
        }

        const user = await User.findById(userId);

        if (!user) {
            return new NextResponse(JSON.stringify({ message: "User Not Found" }), {
                status: 404
            });
        }
        const blog = await Blog.findOne({ _id: blogId, user: userId });

        if (!blog) {
            return new NextResponse(JSON.stringify({ message: "Blog Not Found" }), {
                status: 404
            });
        }

        const updatedBlog = await Blog.findByIdAndUpdate(
            blogId,
            { title, description },
            { new: true }
        );

        return new NextResponse(JSON.stringify({ message: "Blog Updated", blog: updatedBlog }), {
            status: 200
        });

    } catch (error: any) {

        return new NextResponse("Error Updating Blog" + error.message, {
            status: 500
        });

    }

};

export const DELETE = async (request: NextRequest, context: { params: any }) => {

    const blogId = context.params.blog;

    try {

        await connectDB();

        const { searchParams } = new URL(request.url);

        const userId = searchParams.get("userId");

        if (!userId || !Types.ObjectId.isValid(userId)) {
            return new NextResponse(JSON.stringify({ message: "Invalid Or Missing User ID" }), {
                status: 400
            });
        }

        if (!blogId || !Types.ObjectId.isValid(blogId)) {
            return new NextResponse(JSON.stringify({ message: "Invalid Or Missing Blog ID" }), {
                status: 400
            });
        }

        const user = await User.findById(userId);

        if (!user) {
            return new NextResponse(JSON.stringify({ message: "User Not Found" }), {
                status: 404
            });
        }
        const blog = await Blog.findOne({ _id: blogId, user: userId });

        if (!blog) {
            return new NextResponse(JSON.stringify({ message: "Blog Not Found" }), {
                status: 404
            });
        }

        await Blog.findByIdAndDelete(blogId);

        return new NextResponse(JSON.stringify({ message: "Blog Is Deleted" }), {
            status: 200
        });

    } catch (error: any) {

        return new NextResponse("Error In Deleting Blog" + error.message, {
            status: 500
        });

    }

};