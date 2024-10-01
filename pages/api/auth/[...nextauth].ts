import { env } from "@/src/lib/env";
import { prisma } from "@/src/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const githubId = process.env.GITHUB_ID;
const githubSecret = process.env.GITHUB_SECRET;

// const googleId = process.env.GOOGLE_ID;
// const googleSecret = process.env.GOOGLE_SECRET;

if (!githubId || !githubSecret)
  throw new Error(
    "GITHUB_ID and GITHUB_SECRET must be set in the environment variables"
  );

// if (!googleId || !googleSecret)
//   throw new Error(
//     "GOOGLE_ID and GOOGLE_SECRET must be set in the environment variables"
//   );

// Next.js API route
export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  theme: {
    logo: "/images/logo-text.png",
  },
  providers: [
    GithubProvider({ clientId: githubId, clientSecret: githubSecret }),
    // GoogleProvider({ clientId: googleId, clientSecret: googleSecret }),
  ],
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id;
      session.user.image = user.image;
      return session;
    },
  },
  debug: process.env.NODE_ENV === "development",
};

export default NextAuth(authOptions);
