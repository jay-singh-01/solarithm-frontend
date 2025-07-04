import { motion } from "framer-motion";

function Terms() {
  return (
    <motion.div
      className="min-h-screen p-8 bg-white dark:bg-gray-900 text-black dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
        Terms of Service
      </h1>
      <p className="text-center mb-8 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Please read these terms carefully before using our services.
      </p>

      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-8 rounded-xl shadow-xl max-w-3xl mx-auto border border-white/20 space-y-6">
        <h2 className="text-2xl font-semibold">Acceptance of Terms</h2>
        <p className="text-gray-700 dark:text-gray-200">
          By accessing and using our website, you agree to comply with these terms of service. If you do not agree, please do not use our website.
        </p>

        <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
        <p className="text-gray-700 dark:text-gray-200">
          You may not misuse our services or content. You agree to abide by all applicable local and international laws.
        </p>

        <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
        <p className="text-gray-700 dark:text-gray-200">
          Our company is not responsible for any direct, indirect, or consequential damages arising from your use of this website.
        </p>

        <h2 className="text-2xl font-semibold">Changes to Terms</h2>
        <p className="text-gray-700 dark:text-gray-200">
          We may update these terms from time to time. Please review this page regularly to stay informed about any changes.
        </p>

        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p className="text-gray-700 dark:text-gray-200">
          If you have questions about our terms of service, please reach out to us through our contact page.
        </p>
      </div>
    </motion.div>
  )
}

export default Terms;
