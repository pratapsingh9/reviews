
"use client";
import React, { useReducer } from "react";
import Sidebar from "../home/compone";
import RightBar from "../home/Rightbar";
import { useRouter } from "next/navigation";
import Rightbar from "../home/Rightbar";
import UserProfile from "../home/components/UserProfilePage";

export default function Page() {

  return (
    <div className="bg-slate-100 overflow-hidden h-screen">
      <div className="flex h-full">
        <div className="w-1/5 border-r border-gray-300 bg-sidebar-gradient">
          <Sidebar />
        </div>
        <div className="flex-1 bg-white p-6 overflow-auto">
          {/* Main content area */}
          <div className="main">
            <UserProfile />
          </div>
        </div>
        <div className="w-1/4 bg-white border-l border-gray-300">
          <Rightbar />
        </div>
      </div>
    </div>
  );
}
