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
import twitterImage from "../../source/images.png";

const logoUrl = "https://picsum.photos/200";

const DefaultProfile = {
  ImageUrl:
    "https://i.pinimg.com/236x/d8/1a/14/d81a149b89640547429c84bb0772f89c.jpg",
};

export default function Sidebar() {
  const { data, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("");
  const userName = data?.user?.name?.toLowerCase().trim() ?? "Username";
  const userNameSpaces = userName.replace(/\s+/g, "");
  
  useEffect(() => {
    if (!data) {
      router.replace("/");
    }
  }, [data]);

  useEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col justify-between items-start p-4 bg-white h-screen border-r border-gray-200 shadow-md md:p-6">
      <div className="w-full">
        <motion.div
          className="flex justify-center mb-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full text-white overflow-hidden md:w-14 md:h-14">
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
                className={`flex items-center w-full py-2 px-3 rounded-full transition-colors duration-200 cursor-pointer md:py-3 md:px-4 ${
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
                <span className="text-base font-semibold text-gray-800 md:text-lg">
                  {item.name}
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
      <div className="space-y-4 w-full">
        <motion.button
          className="w-full py-2 px-4 rounded-full bg-white text-green-500 font-bold text-base hover:bg-green-100 transition-colors duration-200 shadow-md border-2 border-green-500 neon-glow md:py-3 md:px-6 md:text-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          Add Reviews
        </motion.button>
      </div>
    </div>
  );
}

const SidebarItems = [
  {
    name: "Home",
    icon: <IoHomeOutline className="text-xl md:text-2xl" />,
    activeIcon: <IoHome className="text-xl md:text-2xl" />,
    path: "/home",
  },
  {
    name: "Notifications",
    icon: <IoMdNotificationsOutline className="text-xl md:text-2xl" />,
    activeIcon: <IoMdNotifications className="text-xl md:text-2xl" />,
    path: "/notifications",
  },
  {
    name: "Messages",
    icon: <FiMail className="text-xl md:text-2xl" />,
    activeIcon: <HiMail className="text-xl md:text-2xl" />,
    path: "/messages",
  },
  {
    name: "Bookmarks",
    icon: <FiBookmark className="text-xl md:text-2xl" />,
    activeIcon: <HiBookmark className="text-xl md:text-2xl" />,
    path: "/bookmarks",
  },
  {
    name: "Profile",
    icon: <FiUser className="text-xl md:text-2xl" />,
    activeIcon: <HiUser className="text-xl md:text-2xl" />,
    path: "/profile",
  },
  {
    name: "Settings",
    icon: <CiSettings className="text-xl md:text-2xl" />,
    activeIcon: <HiCog className="text-xl md:text-2xl" />,
    path: "/settings",
  },
];
