"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

// Static data
const trendingTopics = [
  { topic: "Best Restaurants", tweets: "123K" },
  { topic: "#FoodieFinds", tweets: "87.5K" },
  { topic: "Travel Destinations", tweets: "65.2K" },
  { topic: "#HotelReviews", tweets: "54.8K" },
  { topic: "Local Cuisines", tweets: "42.1K" },
];

const suggestedUsers = [
  { name: "Foodie Explorer", handle: "@foodieexplorer", avatar: "https://picsum.photos/50/50?random=1", verified: true, bio: "Culinary adventurer | Food critic" },
  { name: "Travel Guru", handle: "@travelguru", avatar: "https://picsum.photos/50/50?random=2", verified: false, bio: "Wanderlust | Hotel reviewer" },
  { name: "Gourmet Guide", handle: "@gourmetguide", avatar: "https://picsum.photos/50/50?random=3", verified: true, bio: "Fine dining enthusiast | Food blogger" },
];

// Components
const AnimatedItem = ({ children, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
  >
    {children}
  </motion.div>
);

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <div className="relative mb-6">
    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    <input
      type="text"
      placeholder="Search reviews, places, users..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full py-3 pl-10 pr-4 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800"
    />
  </div>
);

const TrendingTopics = ({ topics }) => (
  <div className="mb-6 bg-white rounded-xl p-4 shadow-md">
    <h2 className="font-bold text-xl mb-4 text-gray-800">Trending Topics</h2>
    <AnimatePresence>
      {topics.map((item, index) => (
        <AnimatedItem key={index} index={index}>
          <div className="mb-4 last:mb-0 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
            <h3 className="font-semibold text-gray-900">{item.topic}</h3>
            <p className="text-sm text-gray-500">{item.tweets} Reviews</p>
          </div>
        </AnimatedItem>
      ))}
    </AnimatePresence>
  </div>
);

const SuggestedUsers = ({ users }) => (
  <div className="bg-white rounded-xl p-4 shadow-md">
    <h2 className="font-bold text-xl mb-4 text-gray-800">Suggested Reviewers</h2>
    <AnimatePresence>
      {users.map((user, index) => (
        <AnimatedItem key={index} index={index}>
          <div className="flex items-start mb-4 last:mb-0 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
            <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full mr-3" />
            <div className="flex-1">
              <div className="flex items-center">
                <h3 className="font-semibold text-gray-900">{user.name}</h3>
                {user.verified && <MdVerified className="ml-1 text-green-500" />}
              </div>
              <p className="text-sm text-gray-500">{user.handle}</p>
              <p className="text-sm text-gray-600 mt-1">{user.bio}</p>
            </div>
            <motion.button
              className="bg-green-500 text-white text-sm font-bold py-2 px-4 rounded-full hover:bg-green-600 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Follow
            </motion.button>
          </div>
        </AnimatedItem>
      ))}
    </AnimatePresence>
  </div>
);

export default function RightBar() {
  const [searchTerm, setSearchTerm] = useState("");

  // Memoize the static data
  const memoizedTrendingTopics = useMemo(() => trendingTopics, []);
  const memoizedSuggestedUsers = useMemo(() => suggestedUsers, []);

  return (
    <div className="w-full h-screen p-4 bg-gray-100 border-l border-gray-200 overflow-y-auto">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TrendingTopics topics={memoizedTrendingTopics} />
      <SuggestedUsers users={memoizedSuggestedUsers} />
    </div>
  );
}
