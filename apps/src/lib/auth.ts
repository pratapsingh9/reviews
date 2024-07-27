import CredentialsProvider from "next-auth/providers/credentials";
import { randomUUID } from "crypto";
import GoogleProvider from 'next-auth/providers/google'
export const NEXT_AUTH = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          }), 
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: { label: "email", type: "text", placeholder: "" },
          password: { label: "password", type: "password", placeholder: "" },
        },
        async authorize(credentials: any) {
          return {
            id: randomUUID(),
            username: credentials.username,
          };
        },
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
  }