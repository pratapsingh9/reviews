"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsThreeDots, BsBookmarkFill } from "react-icons/bs";
import { AiOutlineComment, AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { GoVerified } from "react-icons/go";
import { MdClose } from "react-icons/md";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Modal from "react-modal";

export default function BookmarkPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const bookmarkedReviews = [
    {
      id: 1,
      avatar: "https://picsum.photos/60/60",
      username: "FoodieExplorer",
      handle: "@foodieexplorer",
      time: "2d",
      content: "Just had the most amazing sushi experience at Nobu! The flavors were out of this world.",
      media: ["https://picsum.photos/400/300?random=1"],
      verified: true,
      comments: 45,
      retweets: 12,
      likes: 189,
    },
    {
      id: 2,
      avatar: "https://picsum.photos/60/60?random=2",
      username: "TechReviewer",
      handle: "@techreview",
      time: "1w",
      content: "The new iPhone 15 Pro is a game-changer. The camera improvements are incredible!",
      media: ["https://picsum.photos/400/300?random=2", "https://picsum.photos/400/300?random=3"],
      verified: false,
      comments: 78,
      retweets: 56,
      likes: 543,
    },
    // Add more bookmarked reviews as needed
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
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="border-b border-gray-200 py-4 px-6">
            <h1 className="text-2xl font-bold text-gray-900">Bookmarks</h1>
          </div>
          <div className="space-y-4 px-4 py-4">
            <AnimatePresence>
              {bookmarkedReviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="flex-shrink-0 cursor-pointer"
                      whileTap={{ scale: 0.9 }}
                    >
                      <img src={review.avatar} alt="User Avatar" className="w-12 h-12 rounded-full object-cover" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center">
                        <div className="truncate">
                          <span className="font-semibold text-gray-900">{review.username}</span>
                          {review.verified && <GoVerified className="inline ml-1 text-blue-500" />}{" "}
                          <span className="text-gray-500 text-sm">{review.handle}</span>{" "}
                          <span className="text-gray-400 text-sm">· {review.time}</span>
                        </div>
                        <div className="flex items-center">
                          <BsBookmarkFill className="text-blue-500 mr-2" />
                          <BsThreeDots className="text-gray-500 cursor-pointer" />
                        </div>
                      </div>
                      <p className="mt-2 text-gray-800">{review.content}</p>
                      {review.media && (
                        <div className="mt-3">
                          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
                            <Masonry gutter="8px">
                              {review.media.map((media, idx) => (
                                <motion.div
                                  key={idx}
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <img
                                    src={media}
                                    alt={`Review media ${idx + 1}`}
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
                        <div className="flex items-center">
                          <AiOutlineComment className="text-xl mr-1" />
                          <span className="text-sm">{review.comments}</span>
                        </div>
                        <div className="flex items-center">
                          <AiOutlineRetweet className="text-xl mr-1" />
                          <span className="text-sm">{review.retweets}</span>
                        </div>
                        <div className="flex items-center">
                          <AiOutlineHeart className="text-xl mr-1" />
                          <span className="text-sm">{review.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

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
}