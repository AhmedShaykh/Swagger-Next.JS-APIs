import { authMiddleware } from "./middlewares/authMiddleware";
import { NextRequest, NextResponse } from "next/server";
import { logMiddleware } from "./middlewares/logMiddleware";

export const config = {
    matcher: "/api/:path*"
};

export default function middleware(request: NextRequest) {

    if (request.url.includes("/api/blogs")) {

        const logResult = logMiddleware(request);

        console.log(logResult.response);

    }

    const authResult = authMiddleware(request);

    if (!authResult?.isValid) {

        return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
            status: 401
        });

    }

    return NextResponse.next();

};