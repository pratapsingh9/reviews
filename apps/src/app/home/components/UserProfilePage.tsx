"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaCalendarAlt, FaMapMarkerAlt, FaLink, FaStar, FaUserFriends } from "react-icons/fa";
import { AiOutlineLike, AiOutlineDislike, AiOutlineComment } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { BsThreeDots, BsBookmark } from "react-icons/bs";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useSession } from "next-auth/react";
const tabs = ["Reviews", "Lists", "About"];

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("Reviews");
  const {data,status} = useSession()
  const user = {
    name: "John Doe",
    handle: "@reviewguru",
    avatar: "https://picsum.photos/200",
    coverImage: "https://picsum.photos/1000/300",
    bio: "Passionate food critic | Travel enthusiast | Always on the hunt for the next great experience",
    location: "New York, NY",
    website: "https://johndoereviews.com",
    joinDate: "Member since September 2010",
    reviewCount: 327,
    followerCount: 12500,
    verified: true,
  };

  return (
    <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="relative">
        <img src={user.coverImage} alt="Cover" className="w-full h-48 object-cover" />
        <div className="absolute top-4 left-4 bg-white bg-opacity-80 text-gray-800 p-2 rounded-full cursor-pointer hover:bg-opacity-100 transition-all duration-200">
          <FaArrowLeft />
        </div>
        <img
          src={user.avatar}
          alt={user.name}
          className="absolute bottom-0 left-4 transform translate-y-1/2 w-32 h-32 rounded-full border-4 border-white"
        />
      </div>

      {/* Profile Info */}
      <div className="mt-16 px-4 bg-white py-4 border-b border-gray-200">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold flex items-center text-gray-900">
              {data?.user?.name}
              {user.verified && <MdVerified className="ml-1 text-green-500" />}
            </h1>
            <p className="text-gray-600">{user.handle}</p>
          </div>
          <div className="flex space-x-2">
            <button className="bg-green-500 text-white px-4 py-2 rounded-full font-bold hover:bg-green-600 transition duration-200">
              Follow
            </button>
            <button className="bg-gray-200 text-gray-800 px-3 py-2 rounded-full hover:bg-gray-300 transition duration-200">
              <BsThreeDots />
            </button>
          </div>
        </div>
        <p className="mt-4 text-gray-800">{user.bio}</p>
        <div className="mt-4 flex flex-wrap gap-4 text-gray-600">
          <span className="flex items-center"><FaMapMarkerAlt className="mr-1" /> {user.location}</span>
          <span className="flex items-center"><FaLink className="mr-1" /> {user.website}</span>
          <span className="flex items-center"><FaCalendarAlt className="mr-1" /> {user.joinDate}</span>
          <span className="flex items-center"><FaStar className="mr-1" /> {user.reviewCount} reviews</span>
          <span className="flex items-center"><FaUserFriends className="mr-1" /> {user.followerCount} followers</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="flex">
          {tabs.map((tab) => (
            <motion.div
              key={tab}
              className={`cursor-pointer font-semibold py-4 px-6 relative ${
                activeTab === tab ? "text-green-500" : "text-gray-600"
              }`}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-green-500"
                  layoutId="underline"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="p-4 bg-gray-100"
        >
          {activeTab === "Reviews" && <ReviewsTab />}
          {activeTab === "Lists" && <ListsTab />}
          {activeTab === "About" && <AboutTab user={user} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const ReviewsTab = () => {
  const reviews = [
    {
      id: 1,
      title: "Amazing experience at Le Bernardin",
      content: "The tasting menu was absolutely phenomenal. Each dish was a work of art...",
      rating: 5,
      media: ["https://picsum.photos/400/300"],
      likes: 42,
      dislikes: 2,
      comments: 7,
      time: "2 days ago",
      category: "Fine Dining",
    },
    {
      id: 2,
      title: "Disappointing stay at Luxury Hotel",
      content: "While the amenities were top-notch, the service left much to be desired...",
      rating: 2,
      likes: 23,
      dislikes: 5,
      comments: 12,
      time: "1 week ago",
      category: "Hotels",
    },
    // Add more reviews as needed
  ];

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
};

const ReviewCard = ({ review }) => (
  <motion.div
    className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-lg font-semibold text-gray-900">{review.title}</h3>
      <div className="flex items-center bg-green-100 px-2 py-1 rounded-full">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300"} />
        ))}
      </div>
    </div>
    <p className="text-gray-800 mb-2">{review.content}</p>
    {review.media && (
      <div className="mt-2 mb-4">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
          <Masonry gutter="8px">
            {review.media.map((media, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <img src={media} alt={`Review media ${idx + 1}`} className="w-full h-auto rounded-lg" />
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    )}
    <div className="flex justify-between items-center mt-4 text-gray-500">
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <AiOutlineLike className="mr-1" />
          <span>{review.likes}</span>
        </div>
        <div className="flex items-center">
          <AiOutlineDislike className="mr-1" />
          <span>{review.dislikes}</span>
        </div>
        <div className="flex items-center">
          <AiOutlineComment className="mr-1" />
          <span>{review.comments}</span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-sm text-green-500">{review.category}</span>
        <span className="text-sm">{review.time}</span>
      </div>
    </div>
  </motion.div>
);

const ListsTab = () => (
  <div className="bg-white p-4 rounded-xl shadow-sm">
    <p className="text-gray-600">User's curated lists will be displayed here.</p>
  </div>
);

const AboutTab = ({ user }) => (
  <div className="bg-white p-4 rounded-xl shadow-sm">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">About {user.name}</h3>
    <div className="space-y-2">
      <p><span className="font-semibold">Bio:</span> {user.bio}</p>
      <p><span className="font-semibold">Location:</span> {user.location}</p>
      <p><span className="font-semibold">Website:</span> {user.website}</p>
      <p><span className="font-semibold">Member since:</span> {user.joinDate}</p>
      <p><span className="font-semibold">Total Reviews:</span> {user.reviewCount}</p>
      <p><span className="font-semibold">Followers:</span> {user.followerCount}</p>
    </div>
  </div>
);

export default UserProfile;