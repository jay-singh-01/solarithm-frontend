// frontend/src/pages/Home.js
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/testimonials")
      .then((res) => setTestimonials(res.data))
      .catch((err) => console.error(err));
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 2000, // ✅ cycle every 3s
    arrows: false,
    fade: true,
    pauseOnHover: true, // ✅ pause on hover
    cssEase: "ease-in-out",
  };

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      {/* === HERO SECTION === */}
      <section
        className="relative flex items-center justify-center min-h-screen bg-center bg-cover bg-fixed"
        style={{
          backgroundImage:
            "url('https://www.maysunsolar.com/wp-content/uploads/2022/09/%E5%B0%81%E9%9D%A2.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <motion.div
          className="relative z-10 flex flex-col items-center text-center p-8 max-w-2xl space-y-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-extrabold text-green-400 drop-shadow-xl">
            Solarithm
          </h1>
          <p className="text-xl md:text-2xl text-white opacity-90">
            Clean, sustainable solar solutions for your home.
          </p>
          <a
            href="/products"
            className="bg-green-500 hover:bg-green-600 px-8 py-3 text-lg rounded-full mt-4 shadow-xl transition transform hover:scale-105"
          >
            Order Now
          </a>
        </motion.div>
        {/* scroll indicator */}
        <motion.div
          className="absolute bottom-8 opacity-70"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg
            className="w-6 h-6 text-green-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </section>

      {/* === SPECS GRID SECTION === */}
<section className="py-16 max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
  {[
    { label: "Power Output", value: "8.5 kW" },
    { label: "Warranty", value: "25 years" },
    { label: "Efficiency", value: "22.7%" },
    { label: "Made in INDIA", value: "100%" },
  ].map((spec, i) => (
    <motion.div
      key={i}
      className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-6 rounded-xl shadow hover:scale-105 transition"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
    >
      <p className="text-green-500 text-xl font-bold">{spec.value}</p>
      <p className="text-black dark:text-white opacity-80">{spec.label}</p>
    </motion.div>
  ))}
</section>


      {/* === IMAGE + TEXT FEATURE SECTION === */}
      <section className="py-16 flex flex-col md:flex-row items-center max-w-7xl mx-auto px-4 space-y-8 md:space-y-0 md:space-x-12">
        <img
          src="https://www.reccessary.com/data/editor/images/beautiful-alternative-energy-plant-with-solar-panels%20(1).jpg"
          alt="Solar Panel"
          className="md:w-1/2 w-full rounded-xl shadow-xl"
        />
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-4xl font-bold text-green-400">
            Power that Pays for Itself
          </h2>
          <p className="text-lg opacity-90">
            With a sleek design and unparalleled energy efficiency, Solarithm panels reduce energy bills while helping protect the environment.
          </p>
          <a
            href="/contact"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 mt-4 rounded-full transition"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* === TESTIMONIALS === */}
      <section className="bg-black/60 p-12">
        <h2 className="text-center text-3xl font-bold text-green-500 mb-8">What Our Customers Say</h2>
        {testimonials.length === 0 ? (
          <p className="text-center text-white opacity-60">Loading testimonials…</p>
        ) : (
          <Slider {...sliderSettings} className="max-w-3xl mx-auto">
            {testimonials.map((t) => (
              <div key={t._id} className="bg-white/10 backdrop-blur-xl p-8 text-center rounded-xl shadow-xl">
                <img
                  src={t.imageUrl}
                  alt={t.name}
                  className="mx-auto w-24 h-24 rounded-full mb-4 border-2 border-green-500 object-cover"
                />
                <p className="italic text-white opacity-90">“{t.feedback}”</p>
                <p className="font-semibold text-green-400 mt-2">{t.name}</p>
                {t.company && <p className="text-white opacity-70 text-sm">{t.company}</p>}
              </div>
            ))}
          </Slider>
        )}
      </section>

      {/* === FINAL CTA === */}
      <section
        className="py-24 bg-center bg-cover relative"
        style={{
          backgroundImage:
            "url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/price-solar-desktop')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 flex flex-col items-center text-center text-white space-y-6 p-8">
          <h2 className="text-5xl font-extrabold">Join the Solar Revolution</h2>
          <p className="text-xl opacity-90">
            Take control of your energy future with Solarithm.
          </p>
          <a
            href="/contact"
            className="bg-green-500 hover:bg-green-600 px-8 py-3 text-lg rounded-full shadow-xl transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
