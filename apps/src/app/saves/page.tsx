"use client";
import React, { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaMapMarkerAlt, FaStar, FaHeart, FaComment } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const RESULT_TYPES = {
  USER: 'user',
  PLACE: 'place',
  REVIEW: 'review'
};

const dummySearchResults = [
  {
    type: RESULT_TYPES.USER,
    name: "Foodie Explorer",
    handle: "@foodieexplorer",
    avatar: "https://picsum.photos/50/50?random=1",
    verified: true,
    bio: "Culinary adventurer | Food critic"
  },
  {
    type: RESULT_TYPES.PLACE,
    name: "Gourmet Haven",
    location: "New York, NY",
    rating: 4.8,
    reviewCount: 1234,
    image: "https://picsum.photos/200/100?random=2"
  },
  {
    type: RESULT_TYPES.REVIEW,
    user: "Travel Guru",
    handle: "@travelguru",
    avatar: "https://picsum.photos/50/50?random=3",
    content: "Just had an amazing experience at Gourmet Haven! The flavors were out of this world.",
    likes: 456,
    comments: 78
  },
  // Add more dummy results as needed
];

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => (
  <form onSubmit={handleSearch} className="relative mb-6">
    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    <input
      type="text"
      placeholder="Search reviews, places, users..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full py-3 pl-10 pr-4 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800 shadow-md transition duration-300 ease-in-out"
    />
  </form>
);

const UserResult = ({ result }) => (
  <div className="flex items-center p-4 hover:bg-gray-50 transition-colors duration-200">
    <img src={result.avatar} alt={result.name} className="w-12 h-12 rounded-full mr-3" />
    <div className="flex-1">
      <div className="flex items-center">
        <h3 className="font-semibold text-gray-900">{result.name}</h3>
        {result.verified && <MdVerified className="ml-1 text-green-500" />}
      </div>
      <p className="text-sm text-gray-500">{result.handle}</p>
      <p className="text-sm text-gray-600 mt-1">{result.bio}</p>
    </div>
    <motion.button
      className="bg-green-500 text-white text-sm font-bold py-2 px-4 rounded-full hover:bg-green-600 transition-colors duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Follow
    </motion.button>
  </div>
);

const PlaceResult = ({ result }) => (
  <div className="flex items-start p-4 hover:bg-gray-50 transition-colors duration-200">
    <img src={result.image} alt={result.name} className="w-24 h-24 rounded-lg mr-3 object-cover" />
    <div className="flex-1">
      <h3 className="font-semibold text-gray-900">{result.name}</h3>
      <p className="text-sm text-gray-500 flex items-center">
        <FaMapMarkerAlt className="mr-1" /> {result.location}
      </p>
      <div className="flex items-center mt-2">
        <FaStar className="text-yellow-400 mr-1" />
        <span className="font-semibold">{result.rating}</span>
        <span className="text-sm text-gray-500 ml-2">({result.reviewCount} reviews)</span>
      </div>
    </div>
  </div>
);

const ReviewResult = ({ result }) => (
  <div className="p-4 hover:bg-gray-50 transition-colors duration-200">
    <div className="flex items-center mb-2">
      <img src={result.avatar} alt={result.user} className="w-10 h-10 rounded-full mr-2" />
      <div>
        <h3 className="font-semibold text-gray-900">{result.user}</h3>
        <p className="text-sm text-gray-500">{result.handle}</p>
      </div>
    </div>
    <p className="text-gray-800 mb-2">{result.content}</p>
    <div className="flex items-center text-sm text-gray-500">
      <span className="mr-4 flex items-center"><FaHeart className="mr-1" /> {result.likes}</span>
      <span className="flex items-center"><FaComment className="mr-1" /> {result.comments}</span>
    </div>
  </div>
);

const SearchResult = ({ result }) => {
  const ResultComponent = useMemo(() => {
    switch(result.type) {
      case RESULT_TYPES.USER: return UserResult;
      case RESULT_TYPES.PLACE: return PlaceResult;
      case RESULT_TYPES.REVIEW: return ReviewResult;
      default: return null;
    }
  }, [result.type]);

  return ResultComponent ? <ResultComponent result={result} /> : null;
};

export default function SearchScreen() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    // In a real app, you would fetch results based on the searchTerm
    // For this example, we'll just set the dummy data
    setSearchResults(dummySearchResults);
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4 bg-gray-100 min-h-screen">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
      <AnimatePresence>
        {searchResults.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            {searchResults.map((result, index) => (
              <SearchResult key={index} result={result} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}