"use client";
import Snackbar from "@mui/joy/Snackbar";
import { useState } from "react";
import Link from "next/link";
import "./cardStyles.css";

import { CircularProgress } from "@mui/material";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import ReviewsPages from "@/component/reviewsss";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaGoogle, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import FooterComponent from "@/component/footer";
import { reviewdata } from "@/utils/customerreviews";



export default function Component() {
  const [passowrd, setpassowrd] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [username, setusername] = useState("");
  const [submitted, setsubmitted] = useState(false);
  const onsumbited = () => {
    try {
      setsubmitted(true);
    } catch (error) {
      setsubmitted(false);
    }
  };
  const handleSignUp = async () => {
    try {
      const reponse = fetch("localhost:4040/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          passowrd,
        }),
      })
        .then((response) => {
          response.json();
        })
        .catch(() => {});
    } catch (error) {
      alert("Error occurred");
    }
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-gradient-to-r from-slate-50 to-slate-100 shadow-md">
        <div className="container mx-auto px-4 lg:px-6 h-14 flex items-center justify-between">
          <Link href="#" className="flex items-center">
            <StarIcon className="h-6 w-6 text-black" />
            <span className="ml-2 text-xl font-semibold tracking-tighter text-black">
              Review Rater
            </span>
          </Link>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-sm font-medium text-black hover:text-gray-200 transition-colors duration-300 ease-in-out"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-black hover:text-gray-200 transition-colors duration-300 ease-in-out"
              prefetch={false}
            >
              Reviews
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-black hover:text-gray-200 transition-colors duration-300 ease-in-out"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-black hover:text-gray-200 transition-colors duration-300 ease-in-out"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid pl-36  max-w-[1300px] mx-auto gap-52 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] animate-fade-in">
                  Share Your Feedback Get Insights
                </h1>
                <p className="mx-auto max-w-[700px] mt-8  text-gray-500 md:text-xl dark:text-gray-400 animate-fade-in-up">
                  Review products, services, and experiences to earn rewards.
                  Your feedback helps others make informed decisions.
                </p>
                <div>
                  <Button className="mt-3">
                    Start Browsing
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <Card className="p-8 rounded-xl shadow-lg max-w-md w-full bg-white">
                  <h2 className="text-3xl font-bold text-center mb-6 text-black-600">
                    Login or Sign Up
                  </h2>
                  <Tabs defaultValue="login" className="mb-6">
                    <TabsList className="flex border-b border-blue-300">
                      <TabsTrigger
                        value="login"
                        className="flex-1 text-center py-2 bg-black text-white rounded-t-lg"
                      >
                        <FaSignInAlt className="inline-block mr-2" />
                        Login
                      </TabsTrigger>
                      <TabsTrigger
                        value="signup"
                        className="flex-1 text-center py-2 bg-black text-white rounded-t-lg"
                      >
                        <FaUserPlus className="inline-block mr-2" />
                        Sign Up
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="login">
                      <div>
                        <form className="space-y-6 mt-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Username
                            </label>
                            <Input
                              type="text"
                              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Enter your username"
                              value={username}
                              onChange={(e) => setusername(e.target.value)}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Password
                            </label>
                            <Input
                              type="password"
                              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Enter your password"
                              value={passowrd}
                              onChange={(e) => setpassowrd(e.target.value)}
                            />
                            <label className="block text-sm  mt-4 font-medium text-gray-700">
                              Confirm Password
                            </label>
                            <Input
                              type="text"
                              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Enter your password"
                              value={confirmPassword}
                              onChange={(e) =>
                                setconfirmPassword(e.target.value)
                              }
                            />
                          </div>
                          <div className="flex items-center justify-center">
                            <div className="text-sm">
                              <a
                                href="#"
                                className="font-medium text-blue-600 hover:text-blue-500"
                              >
                                Forgot your password?
                              </a>
                            </div>
                          </div>
                          <div>
                            <Button
                              type="submit"
                              className="w-full flex justify-center py-2 px-4 bg-slate-900 text-white rounded-md shadow-md hover:bg-black hover:scale-105 hover:ease-in-out "
                              onClick={onsumbited}
                            >
                              {submitted ? <CircularProgress /> : "Login"}
                            </Button>
                          </div>
                        </form>
                      </div>
                    </TabsContent>
                    <TabsContent value="signup">
                      <div>
                        <form className="space-y-6 mt-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Username
                            </label>
                            <Input
                              type="text"
                              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Enter your username"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Email
                            </label>
                            <Input
                              type="email"
                              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Enter your email"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Password
                            </label>
                            <Input
                              type="password"
                              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Enter your password"
                            />
                          </div>
                          <div>
                            <Button
                              type="submit"
                              className="w-full flex justify-center py-2 px-4 bg-slate-900 text-white rounded-md shadow-md hover:bg-black"
                              onClick={onsumbited}
                            >
                              {submitted ? 
                              <CircularProgress
                              color="success"
                               /> : "Sign Up"}
                            </Button>
                            <Button
                              type="submit"
                              className="w-full flex justify-center py-2 px-4 bg-white-900 text-slate-800 rounded-md shadow-md hover:bg-black mt-3 hover:text-white "
                            >
                              <FaGoogle className="mr-3 hover:bg-white" />
                              <h3>Google Sign In</h3>
                            </Button>
                          </div>
                        </form>
                      </div>
                    </TabsContent>
                  </Tabs>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl animate-fade-in">
                  All Reviews
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 animate-fade-in-up">
                  Check out what others are saying about their experiences.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6">
              <div className="marquee-wrapper">
                <div className="marquee-left">
                  {reviewdata.map((review, index) => (
                    <ReviewsPages
                      key={`left-${index}`}
                      reviewContent={review.reviewContent}
                      profileImage={review.profileImage}
                      Ratings={review.Ratings}
                      Dates={review.Dates}
                      Username={review.Username}
                    />
                  ))}
                </div>
              </div>
              <div className="marquee-wrapper mt-6">
                <div className="marquee-right">
                  {reviewdata.map((review, index) => (
                    <ReviewsPages
                      key={`right-${index}`}
                      reviewContent={review.reviewContent}
                      profileImage={review.profileImage}
                      Ratings={review.Ratings}
                      Dates={review.Dates}
                      Username={review.Username}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="flex items-center">
        <div className="flex flex-col items-center container mx-auto px-4 py-12">
          <h2 className="text-3xl mb-2 font-bold tracking-tighter sm:text-5xl animate-fade-in">
            What Our Customers Say
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 animate-fade-in-up">
            Check out what others are saying about their experiences.
          </p>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

function StarHalfIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2" />
    </svg>
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
