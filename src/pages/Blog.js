// frontend/src/pages/Blog.js
import { motion } from "framer-motion";
import { useState } from "react";

function Blog() {
  const [filter, setFilter] = useState("");
  const articles = [
    { id: 1, title: "The Future of Solar Energy", excerpt: "Solar power is transforming how we produce and consume electricity, driving a cleaner and more resilient energy future.", imageUrl: "blog1.png", tags: ["Solar"] },
    { id: 2, title: "Wind Energy Innovations", excerpt: "New turbine designs and offshore installations are making wind energy more efficient and accessible worldwide.", imageUrl: "blog2.png", tags: ["Wind"] },
    { id: 3, title: "Green Tech for Smart Cities", excerpt: "Smart grids, IoT sensors, and sustainable architecture are revolutionizing urban living and reducing carbon footprints.", imageUrl: "blog3.png", tags: ["Smart Cities"] },
    { id: 4, title: "Battery Storage Breakthroughs", excerpt: "Learn about next-generation energy storage solutions that make renewables more accessible and stable.", imageUrl: "blog4.png", tags: ["Storage"] }
  ];
  const filtered = articles.filter(a =>
    a.title.toLowerCase().includes(filter.toLowerCase()) ||
    a.tags.some(t => t.toLowerCase().includes(filter.toLowerCase()))
  );

  return (
    <motion.div className="pt-24 p-8 min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <motion.h1 className="text-4xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Our Blog</motion.h1>

      {/* 🔍 Filter Input */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="px-4 py-2 border rounded w-full max-w-md dark:bg-gray-800"
          placeholder="Search articles..."
        />
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((article, i) => (
          <motion.div key={article.id}
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-6 rounded-xl shadow-xl hover:shadow-2xl transition transform hover:scale-105 cursor-pointer"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover rounded-lg mb-4"/>
            <h2 className="text-xl font-semibold mb-2 text-green-400">{article.title}</h2>
            <p className="text-gray-700 dark:text-gray-200 opacity-90">{article.excerpt}</p>
          </motion.div>
        ))}
        {filtered.length === 0 && <p className="col-span-3 text-center">No results found.</p>}
      </div>

      {/* 📣 CTA Banner */}
      <motion.div className="mt-16 p-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl text-center text-white"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <h3 className="text-2xl font-bold">Think Solar Could Work for You?</h3>
        <p className="mt-2">Get a free quote or talk to our energy specialists today.</p>
        <a href="/contact" className="inline-block mt-4 bg-white text-green-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">Contact Us</a>
      </motion.div>

            {/* ❓ FAQ Accordion */}
      <div className="mt-16 space-y-4 max-w-2xl mx-auto">
        {[
          { q: "How much can I save with solar?", a: "Savings depend on location, energy usage, and system size, but on average homeowners save 20‑30% on bills." },
          { q: "What incentives are available?", a: "Federal and state incentives like tax credits can reduce your system cost by 26‑30%." },
          { q: "How long do solar panels last?", a: "Most solar panels last 25-30 years with minimal drop in efficiency, making them a long-term investment." },
          { q: "Do solar panels work on cloudy days?", a: "Yes! Solar panels still generate power on cloudy days, though at reduced capacity." },
          { q: "Is maintenance required for solar systems?", a: "Solar panels require minimal maintenance — periodic cleaning and a yearly inspection is typically enough." }
        ].map((faq, idx) => (
          <details key={idx} className="p-4 border rounded bg-white dark:bg-gray-800">
            <summary className="cursor-pointer font-semibold">{faq.q}</summary>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{faq.a}</p>
          </details>
        ))}
      </div>

    </motion.div>
  );
}

export default Blog;
