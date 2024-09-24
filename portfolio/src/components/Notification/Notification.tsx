import React, { useEffect } from "react";
import { FiCheckSquare, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Notification.module.css"; // Assurez-vous d'avoir un fichier de style

export type NotificationType = {
  id: number;
  text: string;
};

type NotificationsProps = {
  notifications: NotificationType[];
  removeNotif: (id: number) => void;
};

const Notifications = ({
  notifications,
  removeNotif,
}: NotificationsProps) => {
  return (
    <div className={styles["notifications-wrapper"]}>
      <AnimatePresence>
        {notifications.map((n) => (
          <Notification removeNotif={removeNotif} {...n} key={n.id} />
        ))}
      </AnimatePresence>
    </div>
  );
};

const NOTIFICATION_TTL = 5000;

const Notification = ({
  text,
  id,
  removeNotif,
}: NotificationType & { removeNotif: (id: number) => void }) => {
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif(id);
    }, NOTIFICATION_TTL);

    return () => clearTimeout(timeoutRef);
  }, [id, removeNotif]);

  return (
    <motion.div
      layout
      initial={{ y: -15, scale: 0.95 }}
      animate={{ y: 0, scale: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={styles["notification"]}
    >
      <FiCheckSquare className={styles["icon-check"]} />
      <span>{text}</span>
      <button onClick={() => removeNotif(id)} className={styles["close-button"]}>
        <FiX />
      </button>
    </motion.div>
  );
};

export default Notifications;
