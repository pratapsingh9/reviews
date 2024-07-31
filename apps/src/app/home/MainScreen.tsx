"use client";
import React, { useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { MdEmojiEmotions, MdGifBox, MdClose } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineComment, AiOutlineShareAlt, AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { GoVerified } from "react-icons/go";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Modal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";

const TrendingTopic = ["For you", "Following", "Trending"];

export default function PageMainScreen() {
  const [selected, setSelected] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState("");

  const openAvatarModal = (avatarUrl) => {
    setSelectedAvatar(avatarUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedAvatar("");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex gap-4 border-b border-gray-200 py-3 px-4">
            {TrendingTopic.map((name, index) => {
              const isActive = index === selected;
              return (
                <motion.div
                  key={index}
                  className={`cursor-pointer font-semibold py-2 px-4 text-sm md:text-base relative ${isActive ? "text-green-500" : "text-gray-700"
                    }`}
                  onClick={() => setSelected(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {name}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-green-500"
                      layoutId="underline"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
          {selected === 0 ? <PostInput /> : <div></div>}
          <PostList openAvatarModal={openAvatarModal} />
        </div>
      </div>
      <AnimatePresence>
        {modalIsOpen && (
          <motion.div
            className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedAvatar}
                alt="Expanded Avatar"
                className="w-80 h-80 object-cover rounded-full shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
const PostInput = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [showImage, setShowImage] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setShowImage(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    setShowImage(false);
  };

  return (
    <div className="relative mt-5 px-4">
      <div className="w-full py-4 flex items-start gap-4 bg-gray-50 rounded-lg shadow-inner">
        {showImage && (
          <div className="relative flex-shrink-0 w-32 h-32 bg-gray-200 rounded-lg overflow-hidden">
            <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
            <MdClose 
              className="absolute top-1 right-1 text-white bg-black rounded-full p-1 cursor-pointer"
              onClick={removeImage}
            />
          </div>
        )}
        <div className="flex-1 ml-4">
          <textarea
            placeholder="Share your review... What place did you visit recently?"
            className="w-full h-24 resize-none border border-gray-300 rounded-lg p-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <div className="flex justify-between items-center mt-3">
            <div className="flex gap-4 text-gray-600">
              <label htmlFor="image-upload" className="flex items-center cursor-pointer">
                <CiImageOn className="text-2xl" />
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
              {/* Other icons */}
            </div>
            <PostButton />
          </div>
        </div>
      </div>
    </div>
  );
};

const PostButton = () => (
  <motion.button
    className="bg-blue-500 text-white mr-6 font-semibold py-2 px-6 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => {
      console.log("Post button clicked");
    }}
  >
    Post Review
  </motion.button>
);

const IconWrapper = ({ children, tooltip }) => (
  <div className="relative group">
    <div className="hover:bg-gray-200 p-2 rounded-full cursor-pointer transition-colors duration-200">
      {children}
    </div>
    {/* <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
      {tooltip}
    </div> */}
  </div>
);
const PostList = ({ openAvatarModal }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const reviews = [
    {
      id: 1,
      avatar: "https://picsum.photos/60/60",
      username: "mymind",
      handle: "@mymind",
      time: "1h",
      title: "Amazing experience at the new fusion restaurant",
      content: "Just had an amazing experience at the new fusion restaurant downtown. The blend of flavors was mind-blowing!",
      rating: 5,
      media: ["https://picsum.photos/300/200", "https://picsum.photos/300/201"],
      likes: 463,
      dislikes: 2,
      comments: 20,
      shares: 34,
      category: "Fine Dining",
      verified: true,
    },
    {
      id: 2,
      avatar: "https://picsum.photos/60/60?random=1",
      username: "Sebastiano Guerriero",
      handle: "@sebastianog",
      time: "Dec 20",
      title: "Visited the art museum today",
      content: "Visited the art museum today. The new exhibition on modern art is a must-see for all art enthusiasts!",
      rating: 5,
      media: ["https://picsum.photos/300/200?random=1"],
      likes: 154,
      dislikes: 5,
      comments: 12,
      shares: 45,
      category: "Art & Culture",
      verified: false,
    },
    // ... (add more reviews as needed)
  ];

  const openModal = (content) => {
    setModalContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalContent(null);
  };

  return (
    <div className="space-y-6 px-4 py-6">
      <AnimatePresence>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} openAvatarModal={openAvatarModal} openModal={openModal} />
        ))}
      </AnimatePresence>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Review Modal"
        className="bg-white rounded-lg shadow-lg max-w-4xl mx-auto p-4"
      >
        {modalContent}
      </Modal>
    </div>
  );
};

const ReviewCard = ({ review, openAvatarModal, openModal }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-4">
      <div className="flex items-start gap-4">
        <img
          src={review.avatar}
          alt="Avatar"
          className="w-12 h-12 rounded-full cursor-pointer"
          onClick={() => openAvatarModal(review.avatar)}
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold">{review.username}</span>
            {review.verified && <GoVerified className="text-blue-500 text-xs" />}
            <span className="text-gray-500 text-sm">{review.handle}</span>
            <span className="text-gray-500 text-sm">• {review.time}</span>
          </div>
          <h3 className="text-lg font-semibold mt-2">{review.title}</h3>
          <p className="text-gray-700 mt-2">{review.content}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {review.media.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Review media ${index}`}
                className="w-24 h-24 object-cover rounded-lg cursor-pointer"
                onClick={() => openModal(<img src={url} alt={`Expanded media ${index}`} className="w-full h-full object-cover" />)}
              />
            ))}
          </div>
          <div className="flex gap-4 mt-2 text-gray-500">
            <div className="flex items-center gap-1">
              <AiOutlineLike />
              <span>{review.likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <AiOutlineDislike />
              <span>{review.dislikes}</span>
            </div>
            <div className="flex items-center gap-1">
              <AiOutlineComment />
              <span>{review.comments}</span>
            </div>
            <div className="flex items-center gap-1">
              <AiOutlineShareAlt />
              <span>{review.shares}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
