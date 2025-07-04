// frontend/src/pages/Products.js
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Skeleton from "../components/Skeleton";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // 🕐 loading state

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/api/products`)
      .then((res) => {
        setProducts(res.data);
        setLoading(false); // ✅ data fetched
      })
      .catch((err) => {
        console.error(err);
        setLoading(false); // ❌ stop loading even if failed
      });
  }, []);

  return (
    <motion.div
      className="pt-24 p-8 min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* 🎨 Page Title */}
      <motion.h1
        className="text-4xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Products
      </motion.h1>

      {/* 🕸️ Products Grid or Skeletons */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} />)
          : products.map((p, index) => (
              <motion.div
                key={p._id}
                className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/20 hover:shadow-2xl transition transform hover:scale-105 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {p.imageUrl && (
                  <div className="aspect-w-4 aspect-h-3 mb-4">
                    <img
                      src={p.imageUrl}
                      alt={p.title}
                      className="object-cover w-full h-full rounded"
                    />
                  </div>
                )}
                <h2 className="text-xl font-semibold mb-2 text-green-400">{p.title}</h2>
                <p className="text-gray-700 dark:text-gray-200 mb-2">{p.description}</p>
                <p className="font-bold mb-4 text-blue-900 dark:text-blue-200">${p.price}</p>

                {/* 🔥 Hover Overlay */}
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
      <section className="py-16 mt-16 bg-green-50 dark:bg-gray-800 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-500">Our Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
          {[
            { label: "Installed Panels", value: "10K+", color: "text-green-400" },
            { label: "Happy Customers", value: "500+", color: "text-blue-400" },
            { label: "Renewable Energy", value: "100%", color: "text-green-400" },
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

export default Products;
