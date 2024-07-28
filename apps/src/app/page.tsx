"use client";
import React, { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import LandingPage from "./LoginPage";
import { useRouter } from "next/navigation";
export default function () {
  const { data, status } = useSession();
  const router = useRouter();
  const checkLoginStatus = () => {
    try {
      if (data.user) {
        return router.push('/home')
      } else {
        return (
          <LandingPage />
        )
      }
    } catch (error) {

    }
  }
  useEffect(() => {
    checkLoginStatus();
  }, [data]);
}