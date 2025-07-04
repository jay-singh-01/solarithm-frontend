// frontend/src/pages/Services.js
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/services")
      .then((res) => setServices(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <motion.div
      className="pt-24 p-8 min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Floating background shapes */}
      <motion.div className="absolute top-10 left-10 w-40 h-40 bg-green-200 dark:bg-green-700 rounded-full blur-3xl opacity-40 animate-pulse" />
      <motion.div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-200 dark:bg-blue-700 rounded-full blur-3xl opacity-40 animate-pulse" />

      <motion.h1
        className="text-4xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Services
      </motion.h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={service._id}
            className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/20 group transition transform hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {service.imageUrl && (
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
            )}
            <h2 className="text-xl font-semibold mb-2 text-green-400">{service.title}</h2>
            <p className="text-gray-700 dark:text-gray-200">{service.description}</p>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-blue-900 dark:bg-blue-950 bg-opacity-80 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-xl backdrop-blur-sm">
              <Link
                to="/contact"
                className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition transform hover:scale-105 shadow-xl"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 📊 Animated Counter Section */}
      <section className="py-16 mt-16 bg-green-50 dark:bg-gray-800 rounded-xl shadow-xl relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-500">Our Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
          {[
            { label: "Installed Systems", value: "10K+", color: "text-green-400" },
            { label: "Happy Customers", value: "500+", color: "text-blue-400" },
            { label: "Carbon Footprint Saved", value: "1000+ Tons", color: "text-green-400" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="bg-white/70 dark:bg-gray-700/70 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/20"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.h3
                className={`text-4xl font-extrabold mb-2 ${stat.color}`}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {stat.value}
              </motion.h3>
              <p className="text-gray-700 dark:text-gray-200">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

export default Services;
