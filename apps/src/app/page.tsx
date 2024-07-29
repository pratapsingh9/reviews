"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import LandingPage from "./LoginPage";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/home");
    }
  }, [status, router]);

  if (status === "authenticated") {
    return null; // Return null to avoid rendering the LandingPage component
  }

  return <LandingPage />;
}
