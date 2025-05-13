import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Globe, Truck, MessageCircle, ShieldCheck, Search, CheckCircle } from 'lucide-react';

export default function BuyerSection() {
  const [showModal, setShowModal] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' },
    tap: { scale: 0.95 }
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' },
    tap: { scale: 0.95 }
  };

  const benefits = [
    {
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      title: "Direct Access to German Manufacturers",
      description: "Connect directly with premium German manufacturers and eliminate intermediaries for better prices and authentic products."
    },
    {
      icon: <Search className="w-6 h-6 text-blue-400" />,
      title: "Product Selection Assistance",
      description: "Our experts help you find the perfect products that meet your specific requirements and quality standards."
    },
    {
      icon: <Truck className="w-6 h-6 text-blue-400" />,
      title: "Global Logistics Solutions",
      description: "Seamless shipping and logistics handling from Germany to your destination, with customs documentation support."
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-blue-400" />,
      title: "Multilingual Support",
      description: "Communication assistance in multiple languages to ensure smooth transactions between you and German suppliers."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "Pacific Trade Partners, Singapore",
      image: "/api/placeholder/100/100",
      quote: "Finding reliable German manufacturers was challenging until we discovered this platform. The quality of products and level of service are exceptional."
    },
    {
      name: "Miguel Rodriguez",
      company: "MR Imports, Mexico",
      image: "/api/placeholder/100/100",
      quote: "The logistics support made importing German industrial equipment seamless. Our business has grown by 30% since partnering with manufacturers through this platform."
    }
  ];

  const steps = [
    "Create your buyer account",
    "Browse products or submit specific requirements",
    "Connect with verified German manufacturers",
    "Receive personalized quotes and samples",
    "Complete secure transactions",
    "Track your orders with full transparency"
  ];

  return (
    <div className="flex flex-col items-center w-full px-4 space-y-10 py-12 bg-white font-inter">
      {/* Hero Section */}
      <motion.section 
        className="relative w-full max-w-7xl mx-auto rounded-2xl shadow-2xl overflow-hidden"
        {...fadeInUp}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black py-16 px-6 md:px-12 relative z-10">
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
              Global Access to Premium German Products
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Connect directly with leading German manufacturers and source high-quality products with confidence. Our platform streamlines international procurement with transparent processes, multilingual support, and comprehensive logistics solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center justify-center gap-1"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => setShowModal(true)}
              >
                Start Sourcing <ChevronRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 shadow-[0_0_10px_rgba(107,114,128,0.3)]"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Benefits Grid */}
      <motion.section 
        className="w-full max-w-7xl mx-auto"
        {...fadeInUp}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl p-8 md:p-12 ring-1 ring-white/20">
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                Benefits for International Buyers
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our platform offers unique advantages for international buyers seeking the renowned quality and reliability of German manufacturing.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  whileTap="tap"
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-medium text-xl text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section 
        className="w-full max-w-7xl mx-auto"
        {...fadeInUp}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl p-8 md:p-12 ring-1 ring-white/20">
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 text-center">
              How It Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700">
                <div className="aspect-video w-full h-full flex items-center justify-center bg-gray-900 text-gray-400">
                  <p>Video: Sourcing Process Overview</p>
                </div>
              </div>
              
              <div className="flex flex-col justify-center space-y-4">
                {steps.map((step, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <div className="bg-blue-900 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-gray-300">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center">
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center gap-1"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Start Your Sourcing Journey <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Success Stories */}
      <motion.section 
        className="w-full max-w-7xl mx-auto"
        {...fadeInUp}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 text-center">
          Success Stories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-xl text-white">{testimonial.name}</h3>
                  <p className="text-gray-400">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="w-full max-w-7xl mx-auto"
        {...fadeInUp}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl p-8 md:p-12 ring-1 ring-white/20">
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 text-center">
              Platform Features for Buyers
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700">
                <ShieldCheck className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="font-medium text-lg text-white mb-2">Verified Suppliers</h3>
                <p className="text-gray-300">All German manufacturers on our platform undergo thorough verification to ensure legitimacy and quality standards.</p>
              </div>
              
              <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700">
                <Globe className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="font-medium text-lg text-white mb-2">Multilingual Platform</h3>
                <p className="text-gray-300">Navigate our platform in your preferred language with real-time translation features for smooth communication.</p>
              </div>
              
              <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700">
                <Truck className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="font-medium text-lg text-white mb-2">End-to-End Logistics</h3>
                <p className="text-gray-300">Complete shipping coordination with customs support, freight forwarding, and real-time tracking capabilities.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="w-full max-w-7xl mx-auto"
        {...fadeInUp}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
              Ready to Source German Quality?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of international buyers who have transformed their supply chain with premium German products. Our platform makes it easy to start sourcing today.
            </p>
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center gap-1 mx-auto"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setShowModal(true)}
            >
              Create Buyer Account <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Onboarding Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <motion.div 
            className="absolute inset-0 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setShowModal(false)}
          ></motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl ring-1 ring-white/20 relative z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
              Create Your Buyer Account
            </h3>
            
            <p className="text-gray-300 mb-6">
              Complete these quick steps to start sourcing from German manufacturers.
            </p>
            
            <div className="space-y-4 mb-6">
              {steps.slice(0, 3).map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <p className="text-gray-300">{step}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)] flex-1"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Register Now
              </motion.button>
              
              <motion.button
                className="border border-gray-600 bg-gray-800 text-gray-200 px-6 py-3 rounded-lg font-medium hover:bg-gray-700"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => setShowModal(false)}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}