import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { Globe, Users, Briefcase, CheckCircle, ArrowRight, Building, Shield, BarChart, Star } from 'lucide-react';

const FranchiseSystemPage = () => {
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

  const newSectionVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
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
            Become a Franchise Partner
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Start a new era of international trade as a Franchise Partner for your region. Our proven system combines German quality with global entrepreneurial spirit, providing you with a turnkey solution to succeed in your market.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
            >
              Apply Now
            </motion.button>
            <motion.button
              className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 shadow-[0_0_10px_rgba(107,114,128,0.3)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Info
            </motion.button>
          </div>
        </motion.section>

        {/* Why Franchise */}
        <motion.section
          className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative z-10"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none absolute inset-0"></div>
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            Why Franchise? Why Now?
          </h2>
          <p className="text-lg text-gray-300">
            The global demand for high-quality German products is at an all-time high. As a Franchise Partner, you can capitalize on this opportunity by representing ‘Made in Germany’ in your region. Our franchise system offers a proven business model, enabling you to establish a strong market presence with minimal risk and maximum support.
          </p>
        </motion.section>

        {/* Our Offer for Franchise Partners */}
        <motion.section
          className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative z-10"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none absolute inset-0"></div>
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Briefcase, title: 'CRM & Leads', desc: 'Access our advanced CRM system and high-quality leads to drive sales.' },
              { icon: Users, title: 'Branded Assets', desc: 'Receive your own email, phone number, digital signature, and corporate identity materials.' },
              { icon: Building, title: 'Backoffice Support', desc: 'Our central team handles logistics, allowing you to focus on sales.' },
              { icon: Star, title: 'Training & Support', desc: 'Comprehensive onboarding and ongoing training to ensure your success.' },
              { icon: Globe, title: 'Local Web Domain', desc: 'Get a localized website (e.g., made-in-germany.mx) to establish your presence.' },
              { icon: Shield, title: 'Marketing Materials', desc: 'Branded clothing, business cards, and design packages to elevate your professional image.' },
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

        {/* Tasks of Franchise Partners */}
        <motion.section
          className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative z-10"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none absolute inset-0"></div>
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            Your Role as a Franchise Partner
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '1', title: 'Sales & Distribution', desc: 'Promote and sell German products to businesses in your region.' },
              { step: '2', title: 'Client Acquisition', desc: 'Build relationships with local businesses to expand our network.' },
              { step: '3', title: 'Market Maintenance', desc: 'Monitor market trends and provide feedback to optimize our offerings.' },
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

        {/* Requirements for Partners */}
        <motion.section
          className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative z-10"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none absolute inset-0"></div>
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            Partner Requirements
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            We seek driven individuals with the skills and passion to represent ‘Made in Germany’ in their markets.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-xl text-gray-300 mb-2">Key Qualifications</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-400 mr-2" /> Fluency in English and local language</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-400 mr-2" /> Sales or business development experience</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-400 mr-2" /> Strong local business network</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-400 mr-2" /> Entrepreneurial mindset</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-xl text-gray-300 mb-2">Commitment</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-400 mr-2" /> Dedication to brand values</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-400 mr-2" /> Willingness to participate in training</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-400 mr-2" /> Long-term partnership focus</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Advantages of the System */}
        <motion.section
          className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative z-10"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none absolute inset-0"></div>
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            Benefits of Our Franchise System
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: BarChart, title: 'Rapid Scaling', desc: 'Quickly establish a foothold in your market with our turnkey system.' },
              { icon: Shield, title: 'Trusted Brand', desc: 'Leverage the reputation of ‘Made in Germany’ for instant credibility.' },
              { icon: Building, title: 'Centralized Operations', desc: 'Focus on sales while we handle logistics, billing, and support.' },
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

        {/* New Section: Success Stories */}
        <motion.section
          className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative z-10 overflow-hidden"
          variants={newSectionVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none absolute inset-0"></div>
          <div className="absolute inset-0 bg-blue-900/10 animate-pulse"></div>
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 relative z-10">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {[
              { name: 'Juan M., Mexico', desc: '“Within six months, I built a network of 50+ clients, thanks to the CRM and leads provided.”' },
              { name: 'Aisha K., UAE', desc: '“The training and backoffice support allowed me to focus on growing my market share.”' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/70 p-6 rounded-lg border border-gray-600 transition-all duration-300"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(59,130,246,0.6)' }}
              >
                <div className="flex items-center mb-4">
                  <Star className="w-6 h-6 text-yellow-400 mr-2" />
                  <h3 className="font-medium text-lg text-gray-300">{item.name}</h3>
                </div>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* New Section: Global Reach */}
        <motion.section
          className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative z-10"
          variants={newSectionVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none absolute inset-0"></div>
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            Our Global Network
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Join a worldwide community of Franchise Partners promoting German quality in over 50 countries.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: '50+ Countries', desc: 'Our partners operate in key markets across the globe.' },
              { icon: Users, title: '500+ Clients', desc: 'Serving a growing network of businesses worldwide.' },
              { icon: BarChart, title: '10,000+ Leads', desc: 'Access a robust pipeline of potential clients.' },
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
                <p className="text-sm text-gray0 text-gray-400">{item.desc}</p>
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
            Join Our Franchise Network
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Become a Franchise  a Franchise Partner and bring German quality to your region. Apply now or request more information to start your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
            >
              Apply Now <ArrowRight className="inline ml-2" />
            </motion.button>
            <motion.button
              className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 shadow-[0_0_10px_rgba(107,114,128,0.3)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Info
            </motion.button>
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
              Franchise Partner Application
            </h3>
            <p className="text-gray-300 mb-6">
              Submit your details to start the application process for becoming a Franchise Partner.
            </p>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-gray-800/50 text-gray-300 rounded-lg p-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-gray-800/50 text-gray-300 rounded-lg p-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Region/Country"
                className="w-full bg-gray-800/50 text-gray-300 rounded-lg p-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                placeholder="Tell us about your experience and why you want to join"
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

export default FranchiseSystemPage;