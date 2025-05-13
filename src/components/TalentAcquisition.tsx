import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { Globe, Search, Users, Briefcase, ArrowRight, CheckCircle, Building, Globe2 } from 'lucide-react';

const TalentAcquisitionPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.4 + i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <div className="flex flex-col items-center w-full px-4 space-y-10 py-12 bg-[#FFFFFF] font-inter">
      <div className="max-w-7xl mx-auto w-full space-y-10">
        {/* Hero Section */}
        <motion.section
          className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative z-10 text-left"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none absolute inset-0"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            Global Talent Acquisition
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Connect with top talent worldwide to drive your business forward. Our platform streamlines the recruitment process, ensuring you find the right candidates efficiently and effectively.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              whilehover={{ scale: 1.05 }}
              whiletap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
            >
              Start Recruiting Now
            </button>
            <button
              className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 shadow-[0_0_10px_rgba(107,114,128,0.3)]"
              whilehover={{ scale: 1.05 }}
              whiletap={{ scale: 0.95 }}
            >
              Learn More
            </button>
          </div>
        </motion.section>

        {/* What is Talent Acquisition */}
        <motion.section
          className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative z-10"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none absolute inset-0"></div>
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            Why Talent Acquisition Matters
          </h2>
          <p className="text-lg text-gray-300">
            Talent Acquisition is the strategic process of identifying, attracting, and onboarding top talent to meet organizational needs. In today's competitive global market, securing skilled professionals is critical for innovation, growth, and success. Our platform empowers businesses to build high-performing teams with ease.
          </p>
        </motion.section>

        {/* Advantages of Our System */}
        <motion.section
          className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative z-10"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none absolute inset-0"></div>
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            Our Competitive Edge
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: 'Global Talent Pool', desc: 'Access a diverse pool of candidates from over 100 countries.' },
              { icon: Search, title: 'Industry Expertise', desc: 'Leverage our deep knowledge in key sectors like tech, finance, and manufacturing.' },
              { icon: Users, title: 'Multilingual Recruitment', desc: 'Recruit seamlessly with support in multiple languages.' },
              { icon: Briefcase, title: 'Centralized Platform', desc: 'Manage all recruitment activities through a single, intuitive dashboard.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
              >
                <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="text-blue-400" />
                </div>
                <h3 className="font-medium text-xl text-gray-300">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Process & Collaboration */}
        <motion.section
          className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative z-10"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none absolute inset-0"></div>
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            How We Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Needs Analysis', desc: 'We assess your hiring needs to create a tailored recruitment strategy.' },
              { step: '2', title: 'Active Sourcing', desc: 'Our team proactively searches for top candidates using advanced tools.' },
              { step: '3', title: 'Pre-Screening', desc: 'We evaluate candidates to ensure only the best fit your requirements.' },
              { step: '4', title: 'Interviews & Onboarding', desc: 'We coordinate interviews and support seamless onboarding.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
              >
                <div className="bg-blue-900 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center mb-4">
                  {item.step}
                </div>
                <h3 className="font-medium text-xl text-gray-300">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Target Markets & Specialization */}
        <motion.section
          className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative z-10"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none absolute inset-0"></div>
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            Our Focus Areas
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            We specialize in connecting businesses with talent in high-demand industries across key global markets.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-xl text-gray-300 mb-2">Key Industries</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-400 mr-2" /> Technology & IT</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-400 mr-2" /> Finance & Banking</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-400 mr-2" /> Manufacturing & Engineering</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-400 mr-2" /> Healthcare</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-xl text-gray-300 mb-2">Target Markets</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-400 mr-2" /> North America</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-400 mr-2" /> Europe</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-400 mr-2" /> Asia-Pacific</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-400 mr-2" /> Middle East</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Additional Subsections */}
        <motion.section
          className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative z-10"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none absolute inset-0"></div>
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            Partner Benefits
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Collaborate with us to expand your recruitment capabilities and tap into new markets.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Building, title: 'Expand Your Network', desc: 'Partner with us to connect with global businesses and candidates.' },
              { icon: Globe2, title: 'Revenue Opportunities', desc: 'Earn through our flexible partnership models.' },
              { icon: Users, title: 'Shared Expertise', desc: 'Benefit from our recruitment tools and industry insights.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
              >
                <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="text-blue-400" />
                </div>
                <h3 className="font-medium text-xl text-gray-300">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call-to-Action */}
        <motion.section
          className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative z-10 text-center"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none absolute inset-0"></div>
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            Ready to Build Your Team?
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Join our platform to access top global talent or partner with us to enhance your recruitment services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              whilehover={{ scale: 1.05 }}
              whiletap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
            >
              Get Started <ArrowRight className="inline ml-2" />
            </button>
            <button
              className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 shadow-[0_0_10px_rgba(107,114,128,0.3)]"
              whilehover={{ scale: 1.05 }}
              whiletap={{ scale: 0.95 }}
            >
              Contact Us
            </button>
          </div>
        </motion.section>
      </div>

      {/* Onboarding Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-black/70 absolute inset-0" onClick={() => setIsModalOpen(false)}></div>
          <motion.div
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl ring-1 ring-white/20 relative z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
              Start Your Recruitment Journey
            </h3>
            <p className="text-gray-300 mb-6">
              Fill out the form below to connect with our team and begin sourcing top talent.
            </p>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Company Name"
                className="w-full bg-gray-800/50 text-gray-300 rounded-lg p-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-gray-800/50 text-gray-300 rounded-lg p-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                placeholder="Your Needs"
                className="w-full bg-gray-800/50 text-gray-300 rounded-lg p-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="4"
              ></textarea>
              <div className="flex justify-end gap-4">
                <button
                  className="border border-gray-600 bg-gray-800 text-gray-200 px-6 py-2 rounded-lg font-medium hover:bg-gray-700"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium"
                >
                  Submit
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Tooltip id="tooltip" place="top" style={{ transform: 'translateX(-50%)' }} />
    </div>
  );
};

export default TalentAcquisitionPage;