import React, { useEffect, useState } from "react";
import { FiCheckSquare, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import "./SlideInNotifications.css"; // Import the CSS file

const SlideInNotifications = () => {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);

  const removeNotif = (id: number) => {
    setNotifications((pv) => pv.filter((n) => n.id !== id));
  };

  return (
    <div className="notification-container">
      <button
        onClick={() => {
          setNotifications((pv) => [generateRandomNotif(), ...pv]);
        }}
        className="add-notification-button"
      >
        Add notification
      </button>
      <div className="notifications-wrapper">
        <AnimatePresence>
          {notifications.map((n) => (
            <Notification removeNotif={removeNotif} {...n} key={n.id} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

const NOTIFICATION_TTL = 5000;

const Notification = ({
  text,
  id,
  removeNotif,
}: NotificationType & { removeNotif: Function }) => {
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif(id);
    }, NOTIFICATION_TTL);

    return () => clearTimeout(timeoutRef);
  }, []);

  return (
    <motion.div
      layout
      initial={{ y: -15, scale: 0.95 }}
      animate={{ y: 0, scale: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="notification"
    >
      <FiCheckSquare className="icon-check" />
      <span>{text}</span>
      <button onClick={() => removeNotif(id)} className="close-button">
        <FiX />
      </button>
    </motion.div>
  );
};

export default SlideInNotifications;

type NotificationType = {
  id: number;
  text: string;
};

const generateRandomNotif = (): NotificationType => {
  const names = [
    "John Anderson",
    "Emily Peterson",
    "Frank Daniels",
    "Laura Williams",
    "Donald Sanders",
    "Tom Smith",
    "Alexandra Black",
  ];

  const randomIndex = Math.floor(Math.random() * names.length);

  const data: NotificationType = {
    id: Math.random(),
    text: `New notification from ${names[randomIndex]}`,
  };

  return data;
};
