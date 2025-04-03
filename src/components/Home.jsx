import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <header className="text-center py-20 bg-gray-800">
        <h1 className="text-6xl font-bold">Welcome to 360° Virtual Tours</h1>
        <p className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
          Experience immersive 360-degree virtual tours from anywhere in the
          world. Step inside breathtaking landscapes, historical monuments, and
          modern cityscapes with just a click.
        </p>
      </header>

      {/* Featured Images Section */}
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-8">
          Explore Stunning Locations
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {[
            "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
            "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg",
            "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
          ].map((image, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-lg">
              <img
                src={image}
                alt="Featured Tour"
                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </motion.div>
      </section>

      {/* About Section */}
      <section className="bg-gray-800 py-16 text-center px-6">
        <h2 className="text-4xl font-semibold">
          Why Choose Our Virtual Tours?
        </h2>
        <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
          Our platform provides high-quality, immersive virtual tours that allow
          you to explore global destinations from the comfort of your home.
          Whether you're a traveler, real estate agent, or an explorer at heart,
          our 360° experiences bring the world closer to you.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-semibold">Start Your Journey Today</h2>
        <p className="text-lg text-gray-400 mt-2">
          Browse our extensive collection of virtual tours and discover the
          world like never before.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer" onClick={() => navigate("/explore")}>
          Explore Now
        </button>
      </section>
    </div>
  );
}
