import { NextRequest, NextResponse } from "next/server";

/**
 * @swagger
 * /api/users:
 *   get:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: Hello World!
 */

export async function GET(req: NextRequest) {

    try {

        console.log(req.nextUrl.searchParams);

        return NextResponse.json("Success");

    } catch (error) {

        console.log(error);

    }

};