import { NEXT_AUTH } from "@/lib/auth";
import { randomUUID } from "crypto";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth(NEXT_AUTH);

export { handler as GET, handler as POST };
