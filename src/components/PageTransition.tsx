import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

const variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
};

export const PageTransition = ({ children }: PropsWithChildren) => (
  <motion.main variants={variants} initial="initial" animate="animate" exit="exit">
    {children}
  </motion.main>
);

