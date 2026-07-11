import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/set1/logos.jpg"; // Change to your logo

export default function PageLoader({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-white z-[99999] flex items-center justify-center"
        >
          <div className="flex flex-col items-center">

            <motion.img
              src={logo}
              alt="Loading"
              className="w-54 h-24"
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            />

            <motion.div
              className="mt-8 w-40 h-1 bg-gray-200 rounded-full overflow-hidden"
            >
              <motion.div
                className="h-full bg-blue-700"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}