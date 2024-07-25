"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdNotifications, MdNotificationsNone } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";

const notificationsData = [
//   { id: 1, message: "Your post received a new comment.", time: "2 mins ago" },
//   { id: 2, message: "You have a new follower.", time: "5 mins ago" },
//   // Add more notifications as needed
];

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulate fetching notifications
    const timer = setTimeout(() => {
      setNotifications(notificationsData);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const removeNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen p-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="p-4 border-b border-gray-200 flex items-center gap-2 bg-blue-500 text-white">
            <motion.div
              initial={{ rotate: 15 }}
              animate={{ rotate: [0, -30, 30, -30, 30, 0] }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <FaRegBell className="text-2xl" />
            </motion.div>
            <h1 className="text-xl font-semibold">Notifications</h1>
          </div>
          <div className="p-4">
            <AnimatePresence>
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <motion.div
                    key={notification.id}
                    layout
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ type: "spring", stiffness: 500, damping: 50 }}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-4 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-gray-700">{notification.message}</p>
                      <div className="flex items-center">
                        <span className="text-gray-400 text-sm mr-2">{notification.time}</span>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => removeNotification(notification.id)}
                          className="text-red-500 hover:text-red-600"
                        >
                          &times;
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center justify-center bg-white p-8 rounded-lg shadow-sm border border-gray-200"
                >
                  <div className="flex flex-col items-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <MdNotificationsNone className="text-5xl text-gray-400 mb-4" />
                    </motion.div>
                    <p className="text-gray-500 text-lg">No Notifications</p>
                  </div>
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