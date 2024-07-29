import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./lib/prisma";
import { PrismaClient } from "@prisma/client";
import authConfig from "./auth.config";
import GitHub from "next-auth/providers/github";

export const {handlers, signIn, signOut, auth}= NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig
})

// export const {handlers, signIn, signOut, auth}= NextAuth({
//   adapter: PrismaAdapter(prisma),
//   providers: [GitHub({
//       clientId: process.env.AUTH_GITHUB_ID,
//       clientSecret: process.env.AUTH_GITHUB_SECRET,
//   })]
// })