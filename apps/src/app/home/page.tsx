'use client'
import React, { useReducer } from "react";
import Sidebar from "./compone";
import Rightbar from "./Rightbar";
import PageMainScreen from "./MainScreen";

export default function Page() {
  return (
    <div className="bg-slate-100 overflow-hidden h-screen">
      <nav>{/* <NavigationBar /> */}</nav>

      <div className="flex h-full">
        <div className="w-1/5 border-r border-gray-300 bg-sidebar-gradient">
          <Sidebar />
        </div>
        <div className="flex-1 bg-white p-6 overflow-auto">
          {/* Main content area */}
          <div className="main">
            <PageMainScreen />
          </div>
        </div>
        <div className="w-1/4 bg-white border-l border-gray-300">
          <Rightbar />
        </div>
      </div>
    </div>
  );
}
