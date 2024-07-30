"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { motion } from "framer-motion";
import { IoHomeOutline, IoHome } from "react-icons/io5";
import { IoMdNotificationsOutline, IoMdNotifications } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { FiMail, FiBookmark, FiUser } from "react-icons/fi";
import { HiMail, HiBookmark, HiUser, HiCog } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";
import { useSession } from "next-auth/react";
// import twitter  from ''
import twitterImage from "../../source/images.png";

const logoUrl = "https://picsum.photos/200";


const DefaultProfile = {
  ImageUrl:"https://i.pinimg.com/236x/d8/1a/14/d81a149b89640547429c84bb0772f89c.jpg"
}

export default function Sidebar() {
  const { data, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("");
  const userName = data?.user?.name?.toLowerCase().trim() ?? "Username";
  const userNameSpaces = userName.replace(/\s+/g, '');
  useEffect(() => {
    if (!data) {
      router.replace("/");
    }
  }, [data]);

  useEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col justify-between items-start p-6 bg-white h-screen border-r border-gray-200 shadow-md">
      <div className="w-full">
        <motion.div
          className="flex justify-center mb-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center justify-center w-14 h-14 rounded-full  text-white overflow-hidden">
            <img
              src={twitterImage.src}
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        <div className="space-y-2 w-full flex flex-col gap-1">
          {SidebarItems.map((item, index) => (
            <Link href={item.path} key={index} passHref>
              <motion.div
                className={`flex items-center w-full py-3 px-4 rounded-full transition-colors duration-200 cursor-pointer ${
                  activeTab === item.path ? "bg-gray-100" : "hover:bg-gray-100"
                }`}
                onClick={() => handleNavigation(item.path)}
                initial={false}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <div className="mr-4 text-gray-600">
                  {activeTab === item.path ? item.activeIcon : item.icon}
                </div>
                <span className="text-lg font-semibold text-gray-800">
                  {item.name}
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
      <div className="space-y-4 w-full">
        <motion.button
          className="w-full py-3 px-6 rounded-full bg-green-500 text-white font-bold text-lg hover:bg-green-600 transition-colors duration-200 shadow-md"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          Add Reviews
        </motion.button>
        <motion.button
          className="w-full py-3 px-6 rounded-full bg-slate-800 text-white font-bold text-lg hover:bg-slate-900 transition-colors duration-200 shadow-md"
          onClick={() => {
            signOut();
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          Sign Out
        </motion.button>
        <motion.div
          className="flex items-center w-full py-3 px-4 rounded-full hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          <img
            src={data?.user?.image}
            
            className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-green-500"
          />
          <div className="flex-1">
            <div className="text-lg font-semibold text-gray-900">
              {data?.user?.name ?? "User"}
            </div>
            <div className="text-gray-600">
              @{userNameSpaces}
            </div>
          </div>
          <BsThreeDots className="text-xl text-gray-500" />
        </motion.div>
      </div>
    </div>
  );
}

interface SideBarItem {
  name: string;
  icon: JSX.Element;
  activeIcon: JSX.Element;
  path: string;
}

const SidebarItems: SideBarItem[] = [
  {
    name: "Home",
    icon: <IoHomeOutline className="text-2xl" />,
    activeIcon: <IoHome className="text-2xl" />,
    path: "/home",
  },
  {
    name: "Notifications",
    icon: <IoMdNotificationsOutline className="text-2xl" />,
    activeIcon: <IoMdNotifications className="text-2xl" />,
    path: "/notifications",
  },
  {
    name: "Messages",
    icon: <FiMail className="text-2xl" />,
    activeIcon: <HiMail className="text-2xl" />,
    path: "/messages",
  },
  {
    name: "Bookmarks",
    icon: <FiBookmark className="text-2xl" />,
    activeIcon: <HiBookmark className="text-2xl" />,
    path: "/bookmarks",
  },
  {
    name: "Profile",
    icon: <FiUser className="text-2xl" />,
    activeIcon: <HiUser className="text-2xl" />,
    path: "/profile",
  },
  {
    name: "Settings",
    icon: <CiSettings className="text-2xl" />,
    activeIcon: <HiCog className="text-2xl" />,
    path: "/settings",
  },
];
