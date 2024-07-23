import React from "react";
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
  { name: "Explore", icon: <FaHashtag className="text-2xl" /> },
  {
    name: "Notifications",
    icon: <IoMdNotificationsOutline className="text-2xl" />,
  },
  { name: "Messages", icon: <FiMail className="text-2xl" /> },
  { name: "Bookmarks", icon: <FiBookmark className="text-2xl" /> },
  { name: "Profile", icon: <FiUser className="text-2xl" /> },
  { name: "Settings", icon: <CiSettings className="text-2xl" /> },
];

const logoUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoM-G1dvmpiYr78W26mzWUyoFX_iaTDiO2Rw&s";
const profilePicUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoM-G1dvmpiYr78W26mzWUyoFX_iaTDiO2Rw&s"; // Replace with your actual profile pic URL

export default function Sidebar() {
  return (
    <div className="flex flex-col justify-between items-start p-6 bg-white h-screen border-r border-gray-300">
      <div>
        <div className="flex justify-center">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-500 text-white mb-6 overflow-hidden">
            <img
              src={logoUrl}
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="space-y-4 w-full">
          {SidebarItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center w-full py-2 px-4 rounded-full hover:bg-gray-200 transition duration-200"
            >
              <div className="mr-4">{item.icon}</div>
              <span className="text-lg font-semibold">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4 w-full">
        <button className="w-full py-3 px-6 rounded-full bg-blue-500 text-white font-bold text-lg hover:bg-blue-600 transition duration-200">
          Add Reviews
        </button>
        <div className="flex items-center w-full py-2 px-4 rounded-full hover:bg-gray-200 transition duration-200">
          <img
            src={profilePicUrl}
            alt="Profile"
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
          <div className="flex-1">
            <div className="text-lg font-semibold">Username</div>
            <div className="text-gray-500">@username</div>
          </div>
          <BsThreeDots className="text-xl text-gray-500" />
        </div>
      </div>
    </div>
  );
}
