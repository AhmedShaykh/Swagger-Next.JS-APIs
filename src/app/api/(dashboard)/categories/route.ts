import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";

export const GET = async () => {

    try {

        await connectDB();

    } catch (error: any) {

    }

};


export const POST = async (request: NextRequest) => {

    try {

        await connectDB();

    } catch (error: any) {

    }

};