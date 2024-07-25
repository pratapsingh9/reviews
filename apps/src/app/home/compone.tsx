"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoMdHome, IoMdNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { FaHashtag } from "react-icons/fa";
import { FiMail, FiBookmark, FiUser } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

interface SideBarItem {
  name: string;
  icon: JSX.Element;
}

const SidebarItems: SideBarItem[] = [
  { name: "Home", icon: <IoMdHome className="text-2xl" /> },
  { name: "Notifications", icon: <IoMdNotificationsOutline className="text-2xl" /> },
  { name: "Messages", icon: <FiMail className="text-2xl" /> },
  { name: "Bookmarks", icon: <FiBookmark className="text-2xl" /> },
  { name: "Profile", icon: <FiUser className="text-2xl" /> },
  { name: "Settings", icon: <CiSettings className="text-2xl" /> },
];

const logoUrl = "https://picsum.photos/200";
const profilePicUrl = "https://picsum.photos/200";

export default function Sidebar() {
  return (
    <div className="flex flex-col justify-between items-start p-6 bg-white h-screen border-r border-gray-200 shadow-md">
      <div className="w-full">
        <motion.div
          className="flex justify-center mb-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white overflow-hidden">
            <img src={logoUrl} alt="Logo" className="w-full h-full object-cover" />
          </div>
        </motion.div>
        <div className="space-y-2 w-full">
          {SidebarItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center w-full py-3 px-4 rounded-full hover:bg-gray-100 transition duration-200 cursor-pointer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="mr-4 text-gray-600">{item.icon}</div>
              <span className="text-lg font-semibold text-gray-800">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="space-y-4 w-full">
        <motion.button
          className="w-full py-3 px-6 rounded-full bg-green-500 text-white font-bold text-lg hover:bg-green-600 transition duration-200 shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Add Reviews
        </motion.button>
        <motion.div
          className="flex items-center w-full py-3 px-4 rounded-full hover:bg-gray-100 transition duration-200 cursor-pointer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <img
            src={profilePicUrl}
            alt="Profile"
            className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-green-500"
          />
          <div className="flex-1">
            <div className="text-lg font-semibold text-gray-900">Username</div>
            <div className="text-gray-600">@username</div>
          </div>
          <BsThreeDots className="text-xl text-gray-500" />
        </motion.div>
      </div>
    </div>
  );
}