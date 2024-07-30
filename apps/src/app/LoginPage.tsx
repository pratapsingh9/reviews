"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaApple, FaReddit } from "react-icons/fa";
import { signIn , useSession } from "next-auth/react";



// Theme selection
const themes = {
    light: {
        backgroundColor: "#fff",
        textColor: "#000",
        buttonColor: "#f00",
        accentColor: "#0f0",
        lineColor: "rgba(29, 155, 240, 0.4)", // Slightly transparent Twitter blue
    },
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawLines(ctx, points, lineColor) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            let distance = Math.sqrt(
                Math.pow(points[j].x - points[i].x, 2) + Math.pow(points[j].y - points[i].y, 2)
            );
            let opacity = 1 - distance / 200;
            if (opacity > 0) {
                ctx.beginPath();
                ctx.moveTo(points[i].x, points[i].y);
                ctx.lineTo(points[j].x, points[j].y);
                ctx.strokeStyle = `${lineColor}`; // Updated line color
                ctx.lineWidth = 1; // Reduced line width
                ctx.stroke();
            }
        }
    }
}

function animateDots(canvasRef, points, lineColor) {
    const ctx = canvasRef.current.getContext!("2d") ?? null;
    points.forEach((point) => {
        point.x += point.vx;
        point.y += point.vy;

        if (
            point.x + point.radius > canvasRef.current.width ||
            point.x - point.radius < 0
        ) {
            point.vx = -point.vx;
        }
        if (
            point.y + point.radius > canvasRef.current.height ||
            point.y - point.radius < 0
        ) {
            point.vy = -point.vy;
        }
    });

    drawLines(ctx, points, lineColor);
    requestAnimationFrame(() => animateDots(canvasRef, points, lineColor));
}

export default function LandingPage() {
    const session = useSession()
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const canvasRef = useRef(null);
    const currentTheme = themes.light; // Default to light theme

    useEffect(() => {
        const canvas = canvasRef.current;

        if (canvas) {
            const ctx = canvas.getContext("2d");
            let points = [];
            const numDots = 60;

            const resizeCanvas = () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                const ctx = canvas.getContext("2d");

                // Set canvas background color
                ctx.fillStyle = currentTheme.backgroundColor;
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                points = [];
                generatePoints(numDots);
                drawLines(ctx, points, currentTheme.lineColor);
            };

            const generatePoints = (num) => {
                for (let i = 0; i < num; i++) {
                    points.push({
                        x: getRandomInt(0, canvas.width),
                        y: getRandomInt(0, canvas.height),
                        radius: 4, // Reduced dot size
                        vx: (Math.random() - 0.5) * 0.5, // Reduced velocity for slower movement
                        vy: (Math.random() - 0.5) * 0.5, // Reduced velocity for slower movement
                    });
                }
            };

            resizeCanvas();
            generatePoints(numDots);
            animateDots(canvasRef, points, currentTheme.lineColor);

            window.addEventListener("resize", resizeCanvas);

            return () => {
                window.removeEventListener("resize", resizeCanvas);
            };
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted", { email, password, username });
    };

    const handleGoogleSignIn = () => {
        signIn("google", { callbackUrl: "http://localhost:3000" });
    };

    const handleAppleSignIn = () => {
        console.log("Apple sign in clicked");
    };

    return (
        <div className="relative min-h-screen bg-gradient-to-r from-slate-200 to-white  flex items-center justify-center">
            <canvas ref={canvasRef} className="absolute inset-0 z-0" />
            <div
                className="w-full max-w-md m-auto rounded-lg shadow-lg py-10 px-8 z-20 relative"
                style={{ backgroundColor: "#f5f5f5" }} // Changed to light gray
            >
                <div className="text-center mb-8">
                    <FaReddit className="text-6xl text-orange-500 mx-auto" />
                    <h1
                        className="text-4xl font-bold mt-4 text-gray-800"
                        style={{ color: currentTheme.textColor }}
                    >
                        Redditter
                    </h1>
                    <p
                        className="text-gray-600 mt-2"
                        style={{ color: currentTheme.textColor }}
                    >
                        Get A New Experience
                    </p>
                </div>

                <div className="space-y-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleGoogleSignIn}
                        className="w-full flex justify-center items-center bg-blue-500 text-white rounded-full py-3 px-4 font-semibold hover:bg-blue-600 transition duration-300"
                    >
                        <FaGoogle className="mr-2" />
                        Continue with Google
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleAppleSignIn}
                        className="w-full flex justify-center items-center bg-black text-white rounded-full py-3 px-4 font-semibold hover:bg-gray-800 transition duration-300"
                    >
                        <FaApple className="mr-2" />
                        Continue with Apple
                    </motion.button>

                    <div className="flex items-center my-4">
                        <hr className="flex-grow border-gray-300" />
                        <span className="px-3 text-gray-500 text-sm">or</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {isSignUp && (
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-orange-500 focus:outline-none text-gray-800 placeholder-gray-500"
                                required
                            />
                        )}
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-orange-500 focus:outline-none text-gray-800 placeholder-gray-500"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-orange-500 focus:outline-none text-gray-800 placeholder-gray-500"
                            required
                        />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="w-full bg-orange-500 text-white font-bold py-3 rounded-full hover:bg-orange-600 transition duration-300"
                            style={{ backgroundColor: currentTheme.buttonColor }}
                        >
                            {isSignUp ? "Sign up" : "Log in"}
                        </motion.button>
                    </form>

                    {!isSignUp && (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-gray-100 text-gray-800 font-semibold py-3 rounded-full border border-gray-300 hover:bg-gray-200 transition duration-300"
                        >
                            Forgot password?
                        </motion.button>
                    )}
                </div>

                <p className="text-center mt-8 text-gray-600">
                    {isSignUp ? "Already have an account?" : "New to Redditter?"}
                    <button
                        onClick={() => setIsSignUp(!isSignUp)}
                        className="text-orange-500 font-semibold ml-2 hover:underline"
                    >
                        {isSignUp ? "Log in" : "Sign up"}
                    </button>
                </p>
            </div>
        </div>
    );
}