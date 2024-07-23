"use client";
import React, { useReducer } from "react";
import NavigationBar from "@/component/naivagationbar";
import FooterComponent from "@/component/footer";
import Sidebar from "./compone";
import Rightbar from "./Rightbar";

export default function Page() {
  const initialState = {
    loading: "true",
  };

  function reducer(state, action) {
    switch (action.type) {
      case "break":
        console.log("break is pressed");
        return state;
      case "continue":
        console.log("continue button is pressed towards the end");
        return state;
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="bg-slate-100 overflow-hidden h-screen">
      <nav>
        {/* <NavigationBar /> */}
      </nav>

      <div className="flex h-full">
        <div className="w-1/5 border-r border-gray-300 bg-sidebar-gradient">
          <Sidebar />
        </div>
        <div className="flex-1 bg-slate-200 p-6 overflow-auto">
          {/* Main content area */}
        </div>
        <div className="w-1/4 bg-white border-l border-gray-300">
          <Rightbar />
        </div>
      </div>
    </div>
  );
}
