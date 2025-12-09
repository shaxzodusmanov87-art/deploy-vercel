import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { type NextAuthOptions } from "next-auth";

import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

import prisma from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),

  session: {
    strategy: "database",
  },

  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),

    Google({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),

    Credentials({
      name: "Dotlabs",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials) return null;

        // тестовый пользователь (можно заменить на реальную проверку)
        return {
          id: "test-user-1",
          name: "Shakhzod Usmanov",
          email: "shakhzodusmanov@example.com",
        };
      },
    }),
  ],
  callbacks: {
       
    async session({ session, user }) {
      session.user = {
        ...(session.user as any),
        id: (user as any).id,
        name: (user as any).name
        // добавил name
      }
      
      console.log(user.id)
      console.log(user.name)

      return session;
    },
  
    
  }
};
