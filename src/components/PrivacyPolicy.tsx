import { useState } from 'react';
import { Shield, Lock, Eye, Users, Server, Settings, ArrowRight, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PrivacySection() {
  const [isPrivacyCardExpanded, setIsPrivacyCardExpanded] = useState(false);

  // Animation variants for staggered children
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col items-center w-full px-4 space-y-10 py-12 bg-[#FFFFFF] font-inter">
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto">
        <motion.div 
          className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-gray-900 to-black">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
            <div className="relative z-10 py-16 px-6 md:px-12 max-w-3xl mx-auto">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-center mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Privacy Is Not a Luxury – It's a Right
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-300 text-center mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                In a world where digital surveillance has become the norm, we stand for something different: 
                the fundamental human right to privacy and digital self-determination.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.button 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium flex items-center justify-center gap-1 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn Our Approach <ArrowRight size={16} />
                </motion.button>
                <motion.button 
                  className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 flex items-center justify-center gap-1 shadow-[0_0_10px_rgba(107,114,128,0.3)]"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Privacy Policy <FileText size={16} />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Main Privacy Section */}
      <section className="w-full max-w-7xl mx-auto">
        <motion.div 
          className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
          
          <div className="relative z-10 py-8 px-6 md:px-12">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
                Why We're Talking About Privacy
              </h2>
              <p className="text-lg text-gray-300">
                In a time where digital surveillance, data misuse, and systematic control have become everyday reality, we take a clear position: 
                Privacy is a human right. We make no distinction between business integrity and personal dignity – both begin with the protection 
                of sensitive data, free choices, and conscious engagement with digital spaces.
              </p>
            </div>

            {/* What We Understand By Privacy */}
            <div className="mb-12">
              <h3 className="font-medium text-xl text-white mb-4">What We Understand By Privacy</h3>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center shrink-0">
                    <Shield className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-lg text-gray-300 mb-4">
                      Some may wonder why we rely on modern encryption, secure server locations, or restrictive access rights. The answer is simple:
                    </p>
                    <p className="text-xl font-medium text-white mb-2">It's not about secrecy – it's about protection.</p>
                    <p className="text-lg text-gray-300">
                      Protection from exploitation, profiling, and economic or social stigmatization.
                      This is a right we claim for ourselves – and respect equally for everyone we work with.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* How We Take Action */}
            <div className="mb-12">
              <h3 className="font-medium text-xl text-white mb-6">How We Take Concrete Action</h3>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={container}
                initial="hidden"
                animate="show"
              >
                <motion.div 
                  className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                  variants={item}
                  whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                >
                  <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                    <Server className="text-blue-400" size={24} />
                  </div>
                  <h4 className="font-medium text-lg text-white mb-2">Secure Server Locations</h4>
                  <p className="text-sm text-gray-400">We carefully select jurisdictions with strong data protection laws, ensuring your information remains protected from excessive surveillance.</p>
                </motion.div>

                <motion.div 
                  className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                  variants={item}
                  whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                >
                  <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                    <Eye className="text-blue-400" size={24} />
                  </div>
                  <h4 className="font-medium text-lg text-white mb-2">No Tracking Without Consent</h4>
                  <p className="text-sm text-gray-400">Unlike many digital platforms, we don't track your behavior unless you explicitly give us permission to do so.</p>
                </motion.div>

                <motion.div 
                  className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                  variants={item}
                  whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                >
                  <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                    <Lock className="text-blue-400" size={24} />
                  </div>
                  <h4 className="font-medium text-lg text-white mb-2">No Data Sharing with Third Parties</h4>
                  <p className="text-sm text-gray-400">Your data stays with us. We don't sell, trade, or otherwise transfer your information to external companies or services.</p>
                </motion.div>

                <motion.div 
                  className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                  variants={item}
                  whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                >
                  <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                    <Settings className="text-blue-400" size={24} />
                  </div>
                  <h4 className="font-medium text-lg text-white mb-2">Open-Source Tools</h4>
                  <p className="text-sm text-gray-400">Whenever possible, we use transparent, open-source solutions that can be verified and audited by independent experts.</p>
                </motion.div>

                <motion.div 
                  className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                  variants={item}
                  whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                >
                  <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                    <Users className="text-blue-400" size={24} />
                  </div>
                  <h4 className="font-medium text-lg text-white mb-2">Customer Rights First</h4>
                  <p className="text-sm text-gray-400">We provide clear processes for data access, deletion, and control, putting you in charge of your information at all times.</p>
                </motion.div>
              </motion.div>
            </div>

            {/* Our Position */}
            <div className="mb-12">
              <h3 className="font-medium text-xl text-white mb-4">Our Position: Responsibility Rather Than Hiding</h3>
              <p className="text-lg text-gray-300 mb-6">
                Being open about our protection measures isn't about paranoia—it's about taking a stand. 
                In a world where digital surveillance has become commonplace, we want to take a clear position.
              </p>
              <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-800/50">
                <p className="text-xl font-medium text-white mb-2">Privacy is not a luxury.</p>
                <p className="text-lg text-gray-300">
                  It is a fundamental human right – and the prerequisite for trust, security, and true freedom. 
                  Unfortunately, it is increasingly under pressure: through systematic tracking, non-transparent 
                  data storage, and silent interventions in our digital lives – often without our knowledge or consent.
                </p>
              </div>
            </div>

            {/* For Whom We Do This */}
            <div className="mb-12">
              <h3 className="font-medium text-xl text-white mb-4">For Whom We Do This</h3>
              <p className="text-lg text-gray-300 mb-6">
                Our commitment to privacy serves our customers, partners, and everyone who desires 
                a new kind of digital platform that respects fundamental rights.
              </p>
              <motion.div 
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 cursor-pointer"
                onClick={() => setIsPrivacyCardExpanded(!isPrivacyCardExpanded)}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-lg text-white">This page is not marketing. It's a statement.</h4>
                  <motion.div
                    animate={{ rotate: isPrivacyCardExpanded ? 90 : 0 }}
                  >
                    <ArrowRight className="text-blue-400" />
                  </motion.div>
                </div>
                
                {isPrivacyCardExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <p className="text-gray-300">
                      And it is directed at everyone who asks themselves:
                      "Why are some particularly careful today?" –
                      Because they understand that trust is not an accident. But a decision.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/* Outlook */}
            <div>
              <h3 className="font-medium text-xl text-white mb-4">Outlook</h3>
              <p className="text-lg text-gray-300 mb-6">
                We are constantly working on new initiatives to enhance digital ethics and privacy, including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-blue-900 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">1</div>
                    <h4 className="font-medium text-lg text-white">Encrypted Customer Portal</h4>
                  </div>
                  <p className="text-sm text-gray-400">
                    A secure environment for all your interactions with us, protected by end-to-end encryption.
                  </p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-blue-900 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">2</div>
                    <h4 className="font-medium text-lg text-white">Offline Support Options</h4>
                  </div>
                  <p className="text-sm text-gray-400">
                    For those who prefer alternatives to digital communication, we're developing offline support channels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <motion.section 
        className="w-full max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
          We value privacy because we value you
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Join us in building a digital future where privacy is not just an afterthought, but a fundamental principle.
        </p>
        <motion.button 
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium flex items-center justify-center gap-1 shadow-[0_0_10px_rgba(59,130,246,0.5)] mx-auto"
          whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us For Details <ArrowRight size={16} />
        </motion.button>
      </motion.section>
    </div>
  );
}