/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

export default function Badge({ caption }) {
  return (
    <motion.span
      className="badge"
      animate={{ scale: [1, 1.4, 1] }}
      transition={{ duration: 0.3 }}
    >
      {caption}
    </motion.span>
  );
}
