"use client";
import React, { useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { MdEmojiEmotions, MdGifBox, MdClose, MdStar } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";
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
                  className={`cursor-pointer font-semibold py-2 px-4 text-sm md:text-base relative ${
                    isActive ? "text-green-500" : "text-gray-700"
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
          <PostInput />
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

const PostInput = () => (
  <div className="relative mt-5 px-4">
    <div className="w-full py-4 flex items-start gap-4 bg-gray-50 rounded-lg shadow-inner">
      <motion.div
        className="ml-3 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Avatar />
      </motion.div>
      <div className="flex-1">
        <textarea
          placeholder="Share your review... What place did you visit recently?"
          className="w-full h-24 resize-none border border-gray-300 rounded-lg p-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <div className="flex justify-between items-center mt-3">
          <div className="flex gap-4 text-gray-600">
            <IconWrapper tooltip="Add Image">
              <CiImageOn className="text-2xl" />
            </IconWrapper>
            <IconWrapper tooltip="Add GIF">
              <MdGifBox className="text-2xl" />
            </IconWrapper>
            <IconWrapper tooltip="Add Location">
              <FaMapMarkerAlt className="text-xl" />
            </IconWrapper>
            <IconWrapper tooltip="Add Emoji">
              <MdEmojiEmotions className="text-2xl" />
            </IconWrapper>
          </div>
          <PostButton />
        </div>
      </div>
    </div>
  </div>
);

const Avatar = () => (
  <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200 cursor-pointer shadow-md">
    <img
      src="https://picsum.photos/60/60"
      alt="User Avatar"
      className="w-full h-full object-cover"
    />
  </div>
);

const IconWrapper = ({ children, tooltip }) => (
  <div className="relative group">
    <div className="hover:bg-gray-200 p-2 rounded-full cursor-pointer transition-colors duration-200">
      {children}
    </div>
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
      {tooltip}
    </div>
  </div>
);

const PostButton = () => (
  <motion.button
    className="bg-green-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-md"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => {
      console.log("Post button clicked");
    }}
  >
    Post Review
  </motion.button>
);

const PostList = ({ openAvatarModal }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  
  const posts = [
    {
      avatar: "https://picsum.photos/60/60",
      username: "mymind",
      handle: "@mymind",
      time: "1h",
      content: "Just had an amazing experience at the new fusion restaurant downtown. The blend of flavors was mind-blowing!",
      media: ["https://picsum.photos/300/200", "https://picsum.photos/300/201"],
      verified: true,
      comments: 20,
      shares: 34,
      likes: 463,
      rating: 4.5,
    },
    {
      avatar: "https://picsum.photos/60/60?random=1",
      username: "Sebastiano Guerriero",
      handle: "@sebastianog",
      time: "Dec 20",
      content: "Visited the art museum today. The new exhibition on modern art is a must-see for all art enthusiasts!",
      media: ["https://picsum.photos/300/200?random=1"],
      verified: false,
      comments: 12,
      shares: 45,
      likes: 154,
      rating: 5,
    },
    {
      avatar: "https://picsum.photos/60/60?random=2",
      username: "Kiara Advani",
      handle: "@advani_kiara",
      time: "2h",
      content: "Just wrapped up an amazing photoshoot at the historical palace! The architecture and ambiance were simply breathtaking.",
      media: [
      ],
      verified: true,
      comments: 1200,
      shares: 3400,
      likes: 15400,
      rating: 4.8,
    },
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
        {posts.map((post, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="flex items-start gap-4">
              <motion.div
                className="flex-shrink-0 cursor-pointer"
                onClick={() => openAvatarModal(post.avatar)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={post.avatar} alt="User Avatar" className="w-12 h-12 rounded-full object-cover shadow-md" />
              </motion.div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-2">
                  <div className="truncate">
                    <span className="font-semibold text-gray-900">{post.username}</span>
                    {post.verified && <GoVerified className="inline ml-1 text-green-500" />}{" "}
                    <span className="text-gray-500 text-sm">{post.handle}</span>{" "}
                    <span className="text-gray-400 text-sm">· {post.time}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">{post.rating}</span>
                    <MdStar className="text-yellow-500" />
                  </div>
                </div>
                <p className="text-gray-800 mb-3">{post.content}</p>
                {post.media && (
                  <div className="mb-4">
                    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
                      <Masonry gutter="8px">
                        {post.media.map((media, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <img
                              src={media}
                              alt={`Post media ${idx + 1}`}
                              className="w-full h-auto rounded-lg cursor-pointer shadow-sm"
                              onClick={() => openModal(media)}
                            />
                          </motion.div>
                        ))}
                      </Masonry>
                    </ResponsiveMasonry>
                  </div>
                )}
                <div className="flex justify-between items-center text-gray-500">
                  <IconWrapper tooltip="Comment">
                    <div className="flex items-center hover:text-green-500 transition-colors duration-200">
                      <AiOutlineComment className="text-xl mr-2" />
                      <span className="text-sm">{post.comments}</span>
                    </div>
                  </IconWrapper>
                  <IconWrapper tooltip="Share">
                    <div className="flex items-center hover:text-green-500 transition-colors duration-200">
                      <AiOutlineShareAlt className="text-xl mr-2" />
                      <span className="text-sm">{post.shares}</span>
                    </div>
                  </IconWrapper>
                  <IconWrapper tooltip="Like">
                    <div className="flex items-center hover:text-green-500 transition-colors duration-200">
                      <AiOutlineHeart className="text-xl mr-2" />
                      <span className="text-sm">{post.likes}</span>
                    </div>
                  </IconWrapper>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex: 1000,
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: 0,
            border: 'none',
            borderRadius: '12px',
            overflow: 'hidden',
            maxWidth: '90vw',
            maxHeight: '90vh',
            backgroundColor: 'transparent',
          },
        }}
      >
        {modalContent && (
          <div className="relative">
            <img src={modalContent} alt="Preview" className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" />
            <motion.button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <MdClose size={24} />
            </motion.button>
          </div>
        )}
      </Modal>
    </div>
  );
};