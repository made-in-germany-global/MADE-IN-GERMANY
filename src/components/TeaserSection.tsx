// src/components/TeaserSection.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface TeaserCardProps {
  title: string;
  image: string;
  subheadlineLine1: string;
  subheadlineLine2: string;
  buttonText: string;
  navigateTo: string;
}

const TeaserCard: React.FC<TeaserCardProps> = ({ title, image, subheadlineLine1, subheadlineLine2, buttonText, navigateTo }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
      className="bg-gradient-to-br from-gray-900/95 to-gray-950/95 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-2xl flex flex-col"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
        loading="lazy"
      />
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <div className="text-sm text-gray-300 mb-4 h-12 line-clamp-2">
        <span className="block">{subheadlineLine1}</span>
        <span className="block">{subheadlineLine2}</span>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate(navigateTo)}
        className="flex items-center justify-center bg-gray-800/50 text-white px-4 py-2 rounded-lg transition-all duration-300 border border-gray-700 shadow-[0_0_10px_rgba(59,130,246,0.3)] hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 mt-auto"
        aria-label={buttonText}
      >
        {buttonText}
        <ChevronRight className="w-4 h-4 ml-2" />
      </motion.button>
    </motion.div>
  );
};

const TeaserSection: React.FC = () => {
  return (
    <section className="w-full  lg:px-8 mb-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-gray-900/95 to-gray-950/95 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-2xl text-center mb-10"
        >
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Beyond Business – Our Broader Mission
          </h2>
          <p className="mt-4 text-sm text-gray-300 max-w-2xl mx-auto">
            At MADE-IN-GERMANY, success is not measured by business growth alone. We believe in shaping a better future
            through global responsibility and strong partnerships. Discover how we connect economy, environment, and society.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TeaserCard
            title="Global Impact"
            image="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
            subheadlineLine1="Together we protect vital resources and shape a future worth living."
            subheadlineLine2="Discover our projects for clean water, green energy, and education."
            buttonText="Explore Global Impact"
            navigateTo="/global-impact"
          />
          <TeaserCard
            title="Partners & Networks"
            image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
            subheadlineLine1="Strong partnerships drive innovation and sustainable growth worldwide."
            subheadlineLine2="Join our network of industries, institutions, and changemakers."
            buttonText="Explore Partnerships"
            navigateTo="/partners-networks"
          />
        </div>
      </div>
    </section>
  );
};

export default TeaserSection;