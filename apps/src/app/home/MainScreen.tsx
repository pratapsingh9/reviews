"use client";
import React, { useState } from "react";
import "./MainScreen.css";
import { CiImageOn } from "react-icons/ci";
import { MdEmojiEmotions } from "react-icons/md";
import { FaChartColumn } from "react-icons/fa6";
import { MdGifBox } from "react-icons/md";
import {} from 'primereact';
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
  const [select,SetSelected ] = useState(false);

  return (
    <div className="p-4">
      <div className="tab flex no-scrollbar gap-2 md:gap-5 border-b-2 border-black">
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
        <div className="h-32 rounded-lg shadow-md w-full p-4 flex items-start gap-4">
      <div className="flex-shrink-0">
        <Avatar />
      </div>
      <div className="flex-1">
        <textarea
          placeholder="What's happening?"
          className="w-full h-full resize-none border-none bg-transparent p-2 text-sm placeholder-gray-500 outline-none"
        />
        <div></div>
        <div className="flex justify-between mt-2 mb-3 pb-1">
          <div className="mains">
            <div className="flex justify-evenly">
              <div className=" flex gap-4 mt-4 relative left-5 bottom-4">
                <div onClick={()=>{
                  console.log("Working properly")
                }}>
                <CiImageOn className="text-2xl hover:shadow-lg"/>
                </div>
                <MdGifBox className="text-2xl hover:shadow-lg"/>
                <FaChartColumn className="text-2xl hover:shadow-lg"/>
                <MdEmojiEmotions className="text-2xl hover:shadow-lg"/>
              </div>
            </div>
          </div>
          <div className="pb-4">
          <button className="bg-blue-500 relative bottom-3  mb-2 h-10 w-16 text-white  rounded-full text-sm font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={()=>{
           
          }}>
            Post
          </button>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}

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
