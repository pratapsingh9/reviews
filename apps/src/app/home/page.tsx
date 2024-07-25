"use client";
import React, { useReducer } from "react";
import NavigationBar from "@/component/naivagationbar";
import FooterComponent from "@/component/footer";
import Sidebar from "./compone";
import Rightbar from "./Rightbar";
import NotificationPage from './components/notifcations'
import PageMainScreen from "./MainScreen";
import UserProfile from "./components/UserProfilePage";
import { useRecoilState } from "recoil";

const list = [
  { title: "Home", path: "/", icon: "HomeIcon" },
  { title: "Explore", path: "/explore", icon: "SearchIcon" },
  { title: "Messages", path: "/messages", icon: "ChatIcon" },
  { title: "Notifications", path: "/notifications", icon: "BellIcon" },
  { title: "Bookmarks", path: "/bookmarks", icon: "BookmarkIcon" },
  { title: "Profile", path: "/profile", icon: "UserIcon" },
  { title: "Settings", path: "/settings", icon: "CogIcon" },
  { title: "Help", path: "/help", icon: "QuestionIcon" },
]

export default function Page() {

  return (
    <div className="bg-slate-100 overflow-hidden h-screen">
      <nav>
        {/* <NavigationBar /> */}
      </nav>

      <div className="flex h-full">
        <div className="w-1/5 border-r border-gray-300 bg-sidebar-gradient">
          <Sidebar />
        </div>
        <div className="flex-1 bg-white p-6 overflow-auto">
          {/* Main content area */}
          {/* <PageMainScreen /> */}
          <UserProfile />
        </div>
        <div className="w-1/4 bg-white border-l border-gray-300">
          <Rightbar />
        </div>
      </div>
    </div>
  );
}
