import { motion } from "framer-motion";

function NotFound() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center p-8 bg-white dark:bg-gray-900 text-black dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
        404
      </h1>
      <h2 className="text-3xl font-bold mb-2">Page Not Found</h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-md">
        Oops! The page you’re looking for doesn’t exist or may have been moved.
      </p>
      <a
        href="/"
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold shadow-xl transition transform hover:scale-105"
      >
        Go Back Home
      </a>
    </motion.div>
  )
}

export default NotFound;
