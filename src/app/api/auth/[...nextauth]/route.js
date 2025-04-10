import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import dbConnect from "../../../../../lib/mongodb";
import bcrypt from "bcryptjs";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                await dbConnect();
                const user = await User.findOne({email: credentials.email});
                if( user && await bcrypt.compare(credentials.password, user.password)){
                    return {id: user._id, email: user.email, role:user.role};
                }
                return null;
            }
        })
    ],

    session: { strategy: "jwt"},
    callbacks: {
        async jwt ({ token, user}){
            if (user) token.role = user.role;
            return token;
        },
        async session({ session, token}){
            session.user.role = token.role;
            return session;
        }
    },
    pages: {
        signIn: "/admin/login"
    }
});

export {handler as GET, handler as POST};