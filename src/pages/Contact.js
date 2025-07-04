import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Modal from "react-modal";
import { FaWhatsapp } from "react-icons/fa"; // 💬 icon

Modal.setAppElement("#root"); // Accessibility setup

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const validate = () => {
    const newErrors = { name: "", email: "", message: "" };
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email";
    if (!message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    if (!validate()) return;
    try {
      await axios.post("http://localhost:5000/api/contact", { name, email, message });
      setStatus("Message sent successfully!");
      setShowModal(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <motion.div
      className="pt-24 p-8 flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-black text-black dark:text-white relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-8 rounded-xl shadow-xl w-full max-w-xl space-y-6 border border-white/20"
      >
        <h1 className="text-3xl font-bold text-center mb-2">Contact Us</h1>
        <p className="text-center mb-4 text-gray-600 dark:text-gray-300">Have questions? Fill the form and we’ll get back ASAP.</p>

        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            className={`w-full p-2 border rounded focus:ring-2 focus:ring-green-500 dark:bg-gray-900/50 ${errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-700"}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className={`w-full p-2 border rounded focus:ring-2 focus:ring-green-500 dark:bg-gray-900/50 ${errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-700"}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            className={`w-full p-2 border rounded focus:ring-2 focus:ring-green-500 dark:bg-gray-900/50 ${errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-700"}`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        <button className="bg-green-500 hover:bg-green-600 text-white w-full px-6 py-2 rounded-full font-semibold transition" type="submit">
          Send Message
        </button>

        {status && <p className="mt-4 text-center font-semibold">{status}</p>}
      </form>

      {/* Thank-You Modal */}
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        className="bg-white dark:bg-gray-800 p-8 rounded-xl max-w-md mx-auto mt-24 relative shadow-xl"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h2 className="text-2xl font-bold mb-4 text-green-500">Thank You!</h2>
        <p>Your message has been successfully sent. We'll be in touch shortly.</p>
        <button
          className="mt-6 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </Modal>

      {/* 📍 Map Section */}
      <div className="mt-12 w-full max-w-3xl border border-white/20 shadow-xl rounded-xl overflow-hidden bg-white dark:bg-gray-800/70 backdrop-blur-md p-4">
        <h2 className="text-2xl font-bold mb-4 text-center text-green-500">Our Location</h2>
        <iframe
          title="office-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1573.8623762885125!2d77.52778583862217!3d12.923320787199316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f00025d9b79%3A0xbe48207401a80889!2sGlobal%20Academy%20Of%20Technology%20Boys%20Hostel!5e0!3m2!1sen!2sin!4v1750957407006!5m2!1sen!2sin"
          className="w-full h-64 border-0 rounded-md filter dark:invert-[80%] dark:hue-rotate-180"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* 📱 Floating WhatsApp Chat Button */}
      <a
        href="https://wa.me/916361044726?text=Hello%20Solarithm%2C%20I%20have%20a%20query!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg text-white hover:bg-green-600 transition transform hover:scale-110 z-50"
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>
    </motion.div>
  );
}

export default Contact;
