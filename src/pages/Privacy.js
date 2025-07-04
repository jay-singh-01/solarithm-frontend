import { motion } from "framer-motion";

function Privacy() {
  return (
    <motion.div
      className="min-h-screen p-8 bg-white dark:bg-gray-900 text-black dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
        Privacy Policy
      </h1>
      <p className="text-center mb-8 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Our commitment to protecting your data is unwavering. Please read our privacy policy carefully to understand how we collect, use, and safeguard your information.
      </p>

      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-8 rounded-xl shadow-xl max-w-3xl mx-auto space-y-4 border border-white/20">
        <h2 className="text-2xl font-semibold mb-2">Data Collection</h2>
        <p className="text-sm text-gray-700 dark:text-gray-200">
          We may collect personal information such as your name, email address, and preferences to enhance your experience on our platform.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Data Usage</h2>
        <p className="text-sm text-gray-700 dark:text-gray-200">
          Your data will only be used to provide and improve our services. We do not share personal data with third parties without your consent.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
        <p className="text-sm text-gray-700 dark:text-gray-200">
          You have the right to access, update, or request deletion of your personal information at any time. Contact our team for assistance.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="text-sm text-gray-700 dark:text-gray-200">
          If you have any questions or concerns about our privacy practices, please reach out to us via our contact page.
        </p>
      </div>
    </motion.div>
  )
}

export default Privacy;
