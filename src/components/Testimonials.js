// frontend/src/components/Testimonials.js
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/testimonials")
      .then(res => setTestimonials(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="bg-gray-50 p-8">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        What Our Clients Say
      </motion.h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map(t => (
          <motion.div
            key={t._id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {t.imageUrl && (
              <img
                src={t.imageUrl}
                alt={t.name}
                className="w-24 h-24 rounded-full mb-4 mx-auto"
              />
            )}
            <h3 className="text-xl font-semibold mb-1 text-center">{t.name}</h3>
            {t.company && <p className="text-center text-sm text-gray-500 mb-2">{t.company}</p>}
            <p className="italic text-center">"{t.feedback}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials;
