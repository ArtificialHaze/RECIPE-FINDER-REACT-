import React from "react";
import Products from "./Products";
import Popular from "./Popular";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Products />
      <Popular />
    </motion.div>
  );
};

export default Home;
