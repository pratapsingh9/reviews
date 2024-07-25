"use client";
import React, { useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { MdEmojiEmotions, MdGifBox, MdClose } from "react-icons/md";
import { FaChartColumn } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineRetweet, AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import { GoVerified } from "react-icons/go";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Modal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";
import UserProfile from './components/UserProfilePage'
const TrendingTopic = ["For you", "Following"];

export default function PageMainScreen() {
  const [selected, setSelected] = useState<number>(0);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedAvatar, setSelectedAvatar] = useState<string>("");

  const openAvatarModal = (avatarUrl: string) => {
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
                    isActive ? "text-blue-500" : "text-gray-700"
                  }`}
                  onClick={() => setSelected(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {name}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500"
                      layoutId="underline"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
          {selected === 0 && <PostInput />}
          <PostList openAvatarModal={openAvatarModal} />
        </div>
      </div>

      {/* Full-screen modal for the avatar */}
      {modalIsOpen && (
        <motion.div
          className="fixed inset-0 backdrop-blur flex items-center justify-center z-50"
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
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
          >
            <img
              src={selectedAvatar}
              alt="Expanded Avatar"
              className="w-80 h-80 object-cover rounded-full"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

const PostInput = () => (
  <div className="relative mt-5 px-4">
    <div className="w-full py-4 flex items-start gap-4 bg-gray-50 rounded-lg shadow-inner">
      <motion.div
        className="ml-3 cursor-pointer"
        whileTap={{ scale: 0.9 }} // Small scale effect when clicking
      >
        <Avatar />
      </motion.div>
      <div className="flex-1">
        <textarea
          placeholder="What's happening?"
          className="w-full h-24 resize-none border border-gray-300 rounded-lg p-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex justify-between items-center mt-3">
          <div className="flex gap-4 text-gray-600">
            <label className="hover:bg-gray-200 p-2 rounded-full cursor-pointer">
              <CiImageOn className="text-2xl" />
              <input type="file" className="hidden" accept="image/*" />
            </label>
            <IconWrapper>
              <MdGifBox className="text-2xl" />
            </IconWrapper>
            <IconWrapper>
              <FaChartColumn className="text-2xl" />
            </IconWrapper>
            <IconWrapper>
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
  <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200 cursor-pointer">
    <img
      src="https://picsum.photos/60/60" // You can replace this URL with a dynamic source if needed
      alt="User Avatar"
      className="w-full h-full object-cover"
    />
  </div>
);

const IconWrapper = ({ children }) => (
  <div className="hover:bg-gray-200 p-2 rounded-full cursor-pointer">{children}</div>
);

const PostButton = () => (
  <button
    className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
    onClick={() => {
      console.log("Post button clicked");
    }}
  >
    Post
  </button>
);

const PostList = ({ openAvatarModal }) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState(null);
  const posts = [
    {
      avatar: "https://picsum.photos/60/60",
      username: "mymind",
      handle: "@mymind",
      time: "1h",
      content: "Don't forget to take care of your mind.",
      media: ["https://picsum.photos/300/200", "https://picsum.photos/300/201"],
      verified: true,
      comments: 20,
      retweets: 34,
      likes: 463,
    },
    {
      avatar: "https://picsum.photos/60/60?random=1",
      username: "Sebastiano Guerriero",
      handle: "@sebastianog",
      time: "Dec 20",
      content:
        "Putting the new Nucleo icons to the test in real UI components.",
      media: ["https://picsum.photos/300/200?random=1"],
      verified: false,
      comments: 12,
      retweets: 45,
      likes: 154,
    },
    {
      avatar: "https://picsum.photos/60/60?random=1",
      username: "Sebastiano Guerriero",
      handle: "@sebastianog",
      time: "Dec 20",
      content:
        "Putting the new Nucleo icons to the test in real UI components.",
      media: [
        "https://1847884116.rsc.cdn77.org/hindi/gallery/actress/kiaraadvani/kiaraadvani120923_4.jpg",
        "https://1847884116.rsc.cdn77.org/hindi/gallery/actress/kiaraadvani/kiaraadvani120923_3.jpg",
        "https://1847884116.rsc.cdn77.org/hindi/gallery/actress/kiaraadvani/kiaraadvani120923_4.jpg",
        "https://1847884116.rsc.cdn77.org/hindi/gallery/actress/kiaraadvani/kiaraadvani120923_3.jpg",
        "https://1847884116.rsc.cdn77.org/hindi/gallery/actress/kiaraadvani/kiaraadvani120923_4.jpg",
        "https://1847884116.rsc.cdn77.org/hindi/gallery/actress/kiaraadvani/kiaraadvani120923_3.jpg",
      ],
      verified: false,
      comments: 12,
      retweets: 45,
      likes: 154,
    },
    // Add more post objects here
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
    <div className="space-y-4 px-4 py-4">
      <AnimatePresence>
        {posts.map((post, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="flex items-start gap-4">
              <motion.div
                className="flex-shrink-0 cursor-pointer"
                onClick={() => openAvatarModal(post.avatar)}
                whileTap={{ scale: 0.9 }} // Small scale effect when clicking
              >
                <img src={post.avatar} alt="User Avatar" className="w-12 h-12 rounded-full object-cover" />
              </motion.div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <div className="truncate">
                    <span className="font-semibold text-gray-900">{post.username}</span>
                    {post.verified && <GoVerified className="inline ml-1 text-blue-500" />}{" "}
                    <span className="text-gray-500 text-sm">{post.handle}</span>{" "}
                    <span className="text-gray-400 text-sm">· {post.time}</span>
                  </div>
                  <BsThreeDots className="text-gray-500 cursor-pointer" />
                </div>
                <p className="mt-2 text-gray-800">{post.content}</p>
                {post.media && (
                  <div className="mt-3">
                    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
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
                              className="w-full h-auto rounded-lg cursor-pointer"
                              onClick={() => openModal(media)}
                            />
                          </motion.div>
                        ))}
                      </Masonry>
                    </ResponsiveMasonry>
                  </div>
                )}
                <div className="flex justify-between items-center mt-4 text-gray-500">
                  <IconWrapper>
                    <AiOutlineComment className="text-xl" />
                    <span className="ml-2 text-sm">{post.comments}</span>
                  </IconWrapper>
                  <IconWrapper>
                    <AiOutlineRetweet className="text-xl" />
                    <span className="ml-2 text-sm">{post.retweets}</span>
                  </IconWrapper>
                  <IconWrapper>
                    <AiOutlineHeart className="text-xl" />
                    <span className="ml-2 text-sm">{post.likes}</span>
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
            <img src={modalContent} alt="Preview" className="max-w-full max-h-[90vh] object-contain rounded-lg" />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors duration-200"
            >
              <MdClose size={24} />
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};
