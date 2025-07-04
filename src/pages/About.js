// frontend/src/pages/About.js
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      className="pt-24 min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* 🔵 Hero Section */}
      <section className="relative flex flex-col items-center text-center px-6 py-16">
        <motion.h1
          className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Solarithm
        </motion.h1>
        <motion.p
          className="text-lg max-w-3xl opacity-80 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          At Solarithm, we design and deliver renewable energy solutions that make
          sustainability simple. Our mission is to help homeowners and businesses
          reduce their carbon footprint while embracing cost-effective, clean energy.
        </motion.p>
      </section>

      {/* === SOLARITHM EXPERIENCE SECTION === */}
<section className="py-16 max-w-7xl mx-auto px-6">
  <h2 className="text-3xl font-bold text-center mb-10 text-blue-800 dark:text-blue-200">
    With Decades of Experience and Expertise, We Know Solar
  </h2>
  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {/* Column 1 */}
    <div className="flex flex-col items-center text-center">
      <img
        src="https://images.ctfassets.net/k6ot5nj1c6f9/lWRg5aNNMTqCA42pY2rNi/b8b41c13d704c3b1a422a1e05fc98896/Empowering_Community.jpeg?fm=webp&h=600"
        alt="Community"
        className="rounded-xl shadow-md w-full h-64 object-cover mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">Empowering Community</h3>
      <p className="text-sm opacity-80 dark:opacity-70">
        We partner with nonprofit groups to give back. We support homeowners who want to adopt solar energy and help communities transition to clean energy.
      </p>
    </div>

    {/* Column 2 */}
    <div className="flex flex-col items-center text-center">
      <img
        src="https://images.ctfassets.net/k6ot5nj1c6f9/6FSplEpz1I8m4ceb0lJUOp/599240960701fb0506c7e19230accba1/Solar_Panels_for_Tile_Roofs.jpeg?fm=webp&h=600"
        alt="Sustainability"
        className="rounded-xl shadow-md w-full h-64 object-cover mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">Leading Sustainability</h3>
      <p className="text-sm opacity-80 dark:opacity-70">
        Solarithm leads sustainability by using ethically sourced materials. Our solutions empower you to produce your own clean energy and protect the planet.
      </p>
    </div>

    {/* Column 3 */}
    <div className="flex flex-col items-center text-center">
      <img
        src="https://images.ctfassets.net/k6ot5nj1c6f9/4pRBm2fVaH4OTpWTlgXmoq/6cfaae09e0f2fedc43cda5668d58fd8b/Solar_Battery_Storage.jpg?fm=webp&h=600"
        alt="Innovation"
        className="rounded-xl shadow-md w-full h-64 object-cover mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">Innovating Solar</h3>
      <p className="text-sm opacity-80 dark:opacity-70">
        Our innovation in solar technology ensures your system is top-tier and reliable. From microinverters to smart energy tracking — we design solutions tailored to you.
      </p>
    </div>
  </div>
</section>

      {/* 🔵 Our Story Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 text-center">
        <motion.h2
          className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Story
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto opacity-80"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Solarithm was founded on the belief that sustainable energy can
          empower communities and protect our planet. Since then, we’ve been committed
          to driving innovation and delivering excellence — one solar panel at a time.
        </motion.p>
      </section>

      {/* 🧑‍💼 Our Team Section */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800 dark:text-blue-200">Our Leadership</h2>

        <div className="grid gap-12 sm:grid-cols-2 justify-center">
          {/* Person 1 */}
          <motion.div
            className="bg-white dark:bg-gray-800/70 p-6 rounded-xl shadow-xl text-center backdrop-blur-md"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="jay.png"
              alt="Founder 1"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-green-500"
            />
            <h3 className="text-xl font-semibold mb-1">Jay Singh</h3>
            <p className="text-sm opacity-80 mb-2">Founder & CEO</p>
            <p className="text-sm opacity-70">Jay brings over 15 years of renewable energy leadership and is passionate about sustainable solutions that scale.</p>
          </motion.div>

          {/* Person 2 */}
          <motion.div
            className="bg-white dark:bg-gray-800/70 p-6 rounded-xl shadow-xl text-center backdrop-blur-md"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img
              src="kishore.png"
              alt="Co-founder"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-green-500"
            />
            <h3 className="text-xl font-semibold mb-1">Kishore</h3>
            <p className="text-sm opacity-80 mb-2">Co-founder & CTO</p>
            <p className="text-sm opacity-70">Kishore is a passionate technologist who ensures that our solar solutions integrate seamlessly into everyday life.</p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default About;
