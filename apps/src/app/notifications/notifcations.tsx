"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiTrash2, FiCheckCircle, FiMessageCircle, FiUserPlus } from "react-icons/fi";

const notificationsData = [
  { id: 1, message: "Your post 'React Best Practices' received a new comment.", time: "2 mins ago", type: "comment" },
  { id: 2, message: "John Doe started following you.", time: "5 mins ago", type: "follow" },
  { id: 3, message: "Your account has been successfully verified.", time: "1 hour ago", type: "verify" },
];

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotifications(notificationsData);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const removeNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case "comment":
        return <FiMessageCircle className="text-blue-500" />;
      case "follow":
        return <FiUserPlus className="text-green-500" />;
      case "verify":
        return <FiCheckCircle className="text-purple-500" />;
      default:
        return <IoNotificationsOutline className="text-gray-500" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gray-50 min-h-screen p-8"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-indigo-600 to-blue-500">
            <div className="flex items-center gap-4">
              <IoNotificationsOutline className="text-4xl text-white" />
              <h1 className="text-2xl font-bold text-white">Notifications</h1>
            </div>
            <span className="bg-white text-indigo-600 px-3 py-1 rounded-full text-sm font-semibold shadow-md">
              {notifications.length}
            </span>
          </div>
          <div className="p-6">
            <AnimatePresence>
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <motion.div
                    key={notification.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ type: "spring", stiffness: 500, damping: 50 }}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-4 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-gray-100 rounded-full">
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div>
                          <p className="text-gray-800 font-medium">{notification.message}</p>
                          <span className="text-gray-400 text-sm">{notification.time}</span>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => removeNotification(notification.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                      >
                        <FiTrash2 size={18} />
                      </motion.button>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center bg-white p-12 rounded-lg shadow-sm border border-gray-100"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="text-gray-300 mb-6"
                  >
                    <IoNotificationsOutline size={80} />
                  </motion.div>
                  <h2 className="text-gray-700 text-xl font-semibold mb-2">All Caught Up!</h2>
                  <p className="text-gray-500 text-center">You have no new notifications at the moment.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotificationPage;