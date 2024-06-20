import { NextRequest, NextResponse } from "next/server";

/**
 * @swagger
 * tags: 
 *  name: Users
 *  description: Operations about users
 * api/get-users:
 *   get:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: API Success!
 *       400:
 *         description: Not Found
 */

export async function GET(request: NextRequest) {

    return NextResponse.json({ message: "success" });

};