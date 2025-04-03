import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ExploreCard = ({ tours }) => {
  const navigate = useNavigate();
  return (
    <div className="">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="cursor-pointer bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            // onClick={() => navigate(`/single-tour?tourData=${tour}`)}
            onClick={() => navigate(`/single-tour`, { state: tour })}
          >
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 text-center text-xl font-bold">
              {tour.title}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ExploreCard;
