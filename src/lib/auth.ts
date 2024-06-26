import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { saltAndHashPassword } from "@/utils/helper";
import { db } from "./PrismaDB";
import NextAuth from "next-auth";
import bcrypt from "bcryptjs";

export const {
    handlers,
    signIn,
    signOut,
    auth,
} = NextAuth({
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "email@example.com",
                },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {

                if (!credentials || !credentials.email || !credentials.password) {
                    return null;
                }

                const email = credentials.email as string;

                const hash = saltAndHashPassword(credentials.password);

                let user: any = await db.user.findUnique({
                    where: {
                        email
                    }
                });

                if (!user) {

                    user = await db.user.create({
                        data: {
                            email,
                            hashedPassword: hash
                        }
                    });

                } else {

                    const isMatch = bcrypt.compareSync(
                        credentials.password as string,
                        user.hashedPassword
                    );

                    if (!isMatch) {
                        throw new Error("Incorrect Password.");
                    }

                }

                return user;

            }
        })
    ]
});