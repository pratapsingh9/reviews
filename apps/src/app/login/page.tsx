"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import axios from "axios";
import { Bounce, toast, ToastContainer } from "react-toastify"; // Make sure these imports are correct
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("second");
  const [rememberMe, setRememberMe] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleLogin = async (event: any) => {
    event.preventDefault(); // Prevent form submission
    try {
      // Perform login logic here...

      // Show success toast message
      toast.success("🦄 Wow so easy!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } catch (error) {
      // Show error toast message if login fails
      toast.error("Login failed. Please try again later.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
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
              <form className="space-y-6 mt-6" onSubmit={handleLogin}>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <Input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="block text-sm  mt-4 font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <Input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your password"
                    value={confirmPassword}
                    onChange={(e) => setconfirmPassword(e.target.value)}
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
                  >
                    Sign in
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
                  >
                    Sign up
                  </Button>
                  <Button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 bg-white-900 text-slate-800 rounded-md shadow-md hover:bg-black mt-3 hover:text-white "
                  >
                    <FaGoogle className="mr-3 hover:bg-white" />
                    <h3>AnonyMouse SignIn</h3>
                  </Button>
                </div>
              </form>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
};

export default LoginPage;
