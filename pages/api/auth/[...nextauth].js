import { compare } from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import connectMongo from "../../../database/conn"; // Corrected path to conn.js
import Users from "../../../model/Schema"; // Corrected path to Schema.js

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        await connectMongo().catch((error) => {
          throw new Error("Connection Failed!");
        });

        // Check user existence
        const result = await Users.findOne({ email: credentials.email });
        if (!result) {
          throw new Error("No User Found with Email, Please Sign Up!");
        }

        // Compare password
        const checkPassword = await compare(
          credentials.password,
          result.password
        );

        // Incorrect password
        if (!checkPassword || result.email !== credentials.email) {
          throw new Error("Username or Password doesn't match");
        }

        return result;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, // Add this line to use the secret from the environment variable
});
