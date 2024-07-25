"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { GoVerified } from "react-icons/go";

const trendingTopics = [
  { topic: "Elon Musk", tweets: "123K" },
  { topic: "#NFTs", tweets: "87.5K" },
  { topic: "Crypto", tweets: "65.2K" },
  { topic: "#AI", tweets: "54.8K" },
  { topic: "Climate Change", tweets: "42.1K" },
];

const suggestedUsers = [
  { name: "Tech Insider", handle: "@techinsider", avatar: "https://picsum.photos/50/50?random=1", verified: true },
  { name: "Startup Daily", handle: "@startupdaily", avatar: "https://picsum.photos/50/50?random=2", verified: false },
  { name: "Science Now", handle: "@sciencenow", avatar: "https://picsum.photos/50/50?random=3", verified: true },
];

export default function RightBar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="w-80 h-screen p-4 bg-white border-l border-gray-200 overflow-y-auto">
      <div className="mb-6">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-2 pl-10 pr-4 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="mb-6 bg-gray-50 rounded-xl p-4">
        <h2 className="font-bold text-xl mb-4">Trends for you</h2>
        <AnimatePresence>
          {trendingTopics.map((item, index) => (
            <motion.div
              key={index}
              className="mb-4 last:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <h3 className="font-semibold text-gray-900">{item.topic}</h3>
              <p className="text-sm text-gray-500">{item.tweets} Tweets</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="bg-gray-50 rounded-xl p-4">
        <h2 className="font-bold text-xl mb-4">Who to follow</h2>
        <AnimatePresence>
          {suggestedUsers.map((user, index) => (
            <motion.div
              key={index}
              className="flex items-center mb-4 last:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full mr-3" />
              <div className="flex-1">
                <div className="flex items-center">
                  <h3 className="font-semibold text-gray-900">{user.name}</h3>
                  {user.verified && <GoVerified className="ml-1 text-blue-500" />}
                </div>
                <p className="text-sm text-gray-500">{user.handle}</p>
              </div>
              <motion.button
                className="bg-black text-white text-sm font-bold py-2 px-4 rounded-full hover:bg-gray-800"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Follow
              </motion.button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}