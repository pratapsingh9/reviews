"use client";
import React, { useState } from "react";
import "./MainScreen.css";

const TrendingTopic = [
  "For You",
  "Following",
  "Saas",
  "Product Design",
  "Startups",
  "Finance",
  "Stock Market",
];

export default function PageMainScreen() {
  const [selected, setSelected] = useState<number>(0);

  return (
    <div className="p-4">
      <div className="tab flex no-scrollbar gap-2 md:gap-5 border-b-2 border-gray-300">
        {TrendingTopic.map((name, index) => {
          const isActive = index === selected;
          return (
            <div
              key={index}
              className={`hover:cursor-pointer font-semibold xl py-2 px-2 md:px-4 text-sm md:text-base ${
                isActive
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-800"
              }`}
              onClick={() => setSelected(index)}
            >
              {name}
            </div>
          );
        })}
      </div>
      <div className="mt-3 flex justify-center">
        <CreatePost />
      </div>
    </div>
  );
}

const CreatePost = () => {
  return (
    <div className="h-32 rounded-lg bg-slate-50 shadow-md w-full p-4 flex items-start gap-4">
      <div className="flex-shrink-0">
        <Avatar />
      </div>
      <div className="flex-1">
        <textarea
          placeholder="What's happening?"
          className="w-full h-full resize-none border-none bg-transparent p-2 text-sm placeholder-gray-500 outline-none"
        />
        <div></div>
        <div className="flex justify-end mt-2">
            <div className="mains">
                
            </div>
          <button className="bg-blue-500 text-white py-1 px-4 rounded-full text-sm font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

const Avatar = () => {
  return (
    <div className="flex items-center justify-center w-15 h-15 rounded-full overflow-hidden bg-blue-500">
      <img
        src="https://picsum.photos/60/60"
        alt="Avatar"
        className="w-full h-full object-cover"
      />
    </div>
  );
};
