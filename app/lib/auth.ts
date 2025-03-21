import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// List of admin emails that are allowed to access the admin panel
const adminEmails = process.env.ADMIN_EMAILS ? process.env.ADMIN_EMAILS.split(',') : [];

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // Only allow sign in if user's email is in the admin list
      return user.email ? adminEmails.includes(user.email) : false;
    },
    async session({ session, token }) {
      // Add role to session
      if (session.user && session.user.email && adminEmails.includes(session.user.email)) {
        session.user.role = 'admin';
      }
      return session;
    },
  },
  pages: {
    signIn: '/admin/login',
    error: '/admin/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// Type augmentation for next-auth session
declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      name?: string;
      email?: string;
      image?: string;
      role?: string;
    };
  }
} 