import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  FileText,
  User,
  ArrowUp,
  Zap,
  Shield,
  Award,
  Search,
  BarChart2,
  Server,
  Users,
  Lock,
  Package,
  Link,
  Leaf,
  UserPlus,
  MessageCircle,
  Truck,
  ArrowRight,
  Info,
  Heart,
  Wrench,
  Activity,
  Coffee,
  Droplet,
  Sun,
  Cpu,
  Home,
  Scissors,
  Plane,
  Crosshair,
} from 'lucide-react';

const industries = [
  {
    title: 'Automotive & Mobility',
    description:
      'Engineering excellence that moves the world forward with precision, innovation, and uncompromising safety standards.',
    icon: Truck,
  },
  {
    title: 'Machinery & Engineering',
    description:
      'Precision machinery that powers global industries, built with decades of expertise and forward-thinking innovation.',
    icon: Wrench,
  },
  {
    title: 'Medical Technology',
    description:
      'Life-saving innovations designed with German precision, improving healthcare outcomes worldwide.',
    icon: Activity,
  },
  {
    title: 'Chemicals & Pharmaceuticals',
    description:
      'Scientific excellence and rigorous standards creating compounds and medicines that enhance lives globally.',
    icon: Droplet,
  },
  {
    title: 'Food & Beverage',
    description:
      'Culinary traditions meet modern production, delivering authentic German flavors with the highest quality standards.',
    icon: Coffee,
  },
  {
    title: 'Energy & Green Technologies',
    description:
      'Pioneering sustainable solutions that power our future while protecting our planet for generations to come.',
    icon: Sun,
  },
  {
    title: 'Electronics & Automation',
    description:
      'Smart technologies engineered for reliability, efficiency, and seamless integration into tomorrow\'s world.',
    icon: Cpu,
  },
  {
    title: 'Construction & Infrastructure',
    description:
      'Building foundations for the future with materials and methods that stand the test of time.',
    icon: Home,
  },
  {
    title: 'Textile & Fashion',
    description:
      'Craftsmanship meets innovation in textiles that combine traditional quality with contemporary design.',
    icon: Scissors,
  },
  {
    title: 'Hospitality & Catering Equipment',
    description:
      'Professional-grade solutions that enable excellence in hospitality services around the world.',
    icon: Package,
  },
  {
    title: 'Aerospace & Defense',
    description:
      'Cutting-edge technologies ensuring safety, security, and advancement in the skies and beyond.',
    icon: Plane,
  },
  {
    title: 'Precision Tools & Optics',
    description:
      'Unmatched accuracy in tools and optical equipment that enable discoveries and perfection in countless fields.',
    icon: Crosshair,
  },
];

// Animation variants for the section
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.2 },
  }),
};

const OneHundredPercentMadeInGermany = () => {
  // Static content for hero section (mimicking t.heroTitle and t.heroDescription)
  const t = {
    heroTitle: '100% MADE IN GERMANY',
    heroDescription:
      'Crafted with care. Powered by innovation. Shared with the world. A promise of excellence.',
  };

  return (
    <div className="flex flex-col items-center w-full px-4 space-y-10 py-12 bg-white font-inter">
      {/* Hero Section with Grid Overlay */}
      <motion.section
        className="max-w-7xl mx-auto w-full bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative overflow-hidden"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
        
        {/* Video background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src="/made-in-germany-video-one-hundred.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black/50 z-1"></div>

        <div className="relative z-10 min-h-[400px] flex items-center text-left">
          <div className="max-w-3xl ml-6 md:ml-12">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6 whitespace-pre-line"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t.heroTitle}
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 max-w-4xl font-light mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {t.heroDescription}
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2"
              >
                DISCOVER OUR MISSION <ArrowRight size={16} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 transition duration-300 shadow-[0_0_10px_rgba(107,114,128,0.3)] flex items-center justify-center gap-2"
              >
                JOIN THE MOVEMENT <ArrowRight size={16} />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Intro Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-7xl w-full py-8 px-6 md:px-12 mx-auto rounded-2xl bg-gradient-to-br from-gray-900 to-black shadow-lg ring-1 ring-white/10 relative overflow-hidden"
      >
        <div className="relative z-10">
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 tracking-wide">
              MORE THAN PRODUCTS – A VISION
            </h2>
            <p className="text-lg text-center max-w-3xl text-gray-300 leading-relaxed font-light">
              Welcome to the heart of German manufacturing excellence. For centuries, our commitment to precision, innovation, and responsibility has defined products that shape the world. Today, we unite under one platform to showcase this legacy and carry it forward.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: 'Excellence Without Compromise',
                description: 'When you choose German manufacturing, you choose generations of expertise, relentless attention to detail, and a commitment to quality that refuses to take shortcuts. This is craftsmanship that stands the test of time.'
              },
              {
                icon: Shield,
                title: 'Responsibility In Action',
                description: 'Environmental stewardship, fair labor practices, and ethical business conduct aren\'t just policies – they\'re principles we live by. Our commitment to sustainability shapes every process and product that bears our name.'
              },
              {
                icon: Globe,
                title: 'Global Community',
                description: 'While proudly German in origin, our vision extends across borders. We believe in collaboration that transcends geography, creating connections between manufacturers, partners, and customers around the world.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300 shadow-md"
                whileHover={{ scale: 1.03, boxShadow: '0 4px 20px rgba(59,130,246,0.2)' }}
              >
                <div className="w-14 h-14 mb-4 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-900/50 to-purple-900/50 group-hover:scale-105 transition-transform duration-300">
                  <item.icon size={28} className="text-blue-400" />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-white tracking-tight">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed font-light">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <div className="max-w-7xl w-full mx-auto py-16 px-8 relative overflow-hidden rounded-2xl">
  {/* Background Elements */}
  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-black z-0"></div>
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-3xl"></div>
    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/5 blur-3xl"></div>
    <div className="absolute top-[30%] right-[5%] w-[20%] h-[20%] rounded-full bg-cyan-500/5 blur-3xl"></div>
  </div>
  
  {/* Grid pattern overlay */}
  <div className="absolute inset-0 bg-[url('/api/placeholder/400/400')] bg-repeat opacity-5 z-0"></div>
  
  {/* Content Container */}
  <div className="relative z-10 flex flex-col items-center">
    {/* Top Decor Line */}
    <div className="flex items-center mb-12">
      <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
      <div className="mx-4 text-blue-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      </div>
      <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
    </div>
    
    {/* Title and Description */}
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500">OUR STORY</span>
      </h2>
      <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 leading-relaxed font-light">
        What exactly is <span className="font-medium text-white">100% MADE IN GERMANY ©</span>? Let us show you. 
        In this short video, we invite you to understand who we are, what we stand for, and why this is more than 
        just a marketplace – it's a <span className="text-blue-400">movement</span>.
      </p>
    </div>
    
    {/* Video Container */}
    <div className="w-full max-w-4xl mx-auto relative">
      {/* Decorative elements around video */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-400 rounded-2xl blur opacity-30"></div>
      
      {/* Video player */}
      <div className="relative rounded-xl overflow-hidden bg-gray-900 shadow-2xl border border-gray-800">
        <div className="aspect-w-16 aspect-h-9 relative">
          <video 
            className="w-full h-full object-cover"
            controls
            playsInline
            poster="/api/placeholder/1280/720"
          >
            <source src="/api/placeholder/video" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Play button overlay (shows when video is not playing) */}
          <div className="absolute inset-0 flex items-center justify-center group">
            <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center backdrop-blur-sm transition-transform group-hover:scale-110">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Video Caption */}
    <div className="mt-8 text-center">
      <h3 className="text-xl font-medium text-gray-200 mb-2">
        "100% MADE IN GERMANY © – A New Era of Visibility"
      </h3>
      <div className="flex items-center justify-center gap-4 mt-4">
        <button className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/20 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
          </svg>
          Share Story
        </button>
        <button className="px-5 py-2 rounded-full bg-gray-800 text-white font-medium flex items-center gap-2 hover:bg-gray-700 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Learn More
        </button>
      </div>
    </div>
  </div>
</div>
      {/* Industries We Represent Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-7xl w-full py-8 px-6 md:px-12 mx-auto rounded-2xl bg-gradient-to-br from-gray-900 to-black shadow-lg ring-1 ring-white/10 relative overflow-hidden"
      >
        <div className="relative z-10">
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 tracking-wide">
              INDUSTRIES WE REPRESENT
            </h2>
            <p className="text-lg text-center max-w-3xl text-gray-300 leading-relaxed font-light">
              German excellence spans across diverse industries, each contributing to our global reputation for quality and innovation. From automotive precision to medical breakthroughs, our manufacturers lead with vision, expertise, and unwavering standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                className="group bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300 shadow-md"
                whileHover={{ scale: 1.03, boxShadow: '0 4px 20px rgba(59,130,246,0.2)' }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 mr-4 flex items-center justify-center bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-lg group-hover:scale-105 transition-transform duration-300">
                    <industry.icon size={24} className="text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-lg text-white tracking-tight">{industry.title}</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed font-light">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Social Commitment Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="max-w-7xl w-full py-8 px-6 md:px-12 mx-auto rounded-2xl bg-gradient-to-br from-gray-900 to-black shadow-lg ring-1 ring-white/10 relative overflow-hidden"
      >
        <div className="relative z-10">
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 tracking-wide">
              BUSINESS WITH IMPACT
            </h2>
            <p className="text-lg text-center max-w-3xl text-gray-300 leading-relaxed font-light">
              Our commitment extends beyond commerce. We believe that business success carries a responsibility to contribute positively to our world. Through our platform, we channel resources into initiatives that create lasting social and environmental change.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Droplet,
                title: 'Clean Water Initiatives',
                description: 'A portion of every transaction supports projects bringing clean water to communities in need. German engineering expertise is helping develop sustainable water solutions around the world.'
              },
              {
                icon: Users,
                title: 'Educational Access',
                description: 'We fund technical education programs that empower the next generation with skills in engineering, manufacturing, and sustainable design – creating pathways to meaningful careers worldwide.'
              },
              {
                icon: Leaf,
                title: 'Environmental Stewardship',
                description: 'Our environmental initiatives focus on reforestation, plastic reduction, and sustainable materials research. We\'re applying German innovation to develop solutions for our planet\'s most pressing challenges.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300 shadow-md"
                whileHover={{ scale: 1.03, boxShadow: '0 4px 20px rgba(59,130,246,0.2)' }}
              >
                <div className="w-14 h-14 mb-4 flex items-center justify-center bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-full group-hover:scale-105 transition-transform duration-300">
                  <item.icon size={28} className="text-blue-400" />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-white tracking-tight">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed font-light">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2 mx-auto"
            >
              Learn About Our Impact <ArrowRight size={16} />
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Trust Badges Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="max-w-7xl w-full py-8 px-6 md:px-12 mx-auto rounded-2xl bg-gradient-to-br from-gray-900 to-black shadow-lg ring-1 ring-white/10 relative overflow-hidden"
      >
        <div className="relative z-10">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 tracking-wide">
              VERIFIED EXCELLENCE
            </h2>
            <p className="text-lg text-center max-w-2xl text-gray-300 leading-relaxed font-light">
              Our manufacturers meet the highest standards of quality, sustainability, and ethics. These certifications represent our commitment to excellence at every level.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Shield, text: 'Verified German Manufacturer' },
              { icon: Leaf, text: 'Sustainability Certified' },
              { icon: Users, text: 'Fair Labor Standards' },
              { icon: Lock, text: 'Quality Assurance' }
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-gray-800/50 p-4 rounded-2xl flex flex-col items-center text-center border border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300 shadow-md"
                whileHover={{ scale: 1.03, boxShadow: '0 4px 20px rgba(59,130,246,0.2)' }}
              >
                <badge.icon size={28} className="text-blue-400 mb-2" />
                <p className="font-semibold text-white text-sm tracking-tight">{badge.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="max-w-7xl w-full py-8 px-6 md:px-12 mx-auto rounded-2xl bg-gradient-to-br from-gray-900 to-black shadow-lg ring-1 ring-white/10 relative overflow-hidden"
      >
        <div className="relative z-10">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 tracking-wide">
              VOICES FROM OUR COMMUNITY
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "As a distributor in Japan, finding manufacturers who truly deliver on their quality promises has always been challenging. The 100% MADE IN GERMANY © platform has transformed our procurement process, connecting us with verified partners who exceed our expectations every time.",
                name: "Takashi M.",
                role: "Technology Distributor, Tokyo"
              },
              {
                quote: "Our family business has been crafting precision tools for three generations. Joining this platform has connected us with global partners who truly value our commitment to quality, allowing us to grow while staying true to our traditional manufacturing values.",
                name: "Klaus W.",
                role: "Tool Manufacturer, Bavaria"
              },
              {
                quote: "The emphasis on sustainability alongside quality is what makes this platform special. As a responsible buyer, I can find products that meet our technical specifications while also aligning with our environmental commitments.",
                name: "Sarah L.",
                role: "Procurement Director, Canada"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300 shadow-md"
                whileHover={{ scale: 1.03, boxShadow: '0 4px 20px rgba(59,130,246,0.2)' }}
              >
                <p className="text-gray-300 text-sm italic mb-4 font-light">{testimonial.quote}</p>
                <p className="font-semibold text-white tracking-tight">{testimonial.name}</p>
                <p className="text-gray-400 text-xs font-light">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="max-w-7xl w-full py-8 px-6 md:px-12 mx-auto rounded-2xl bg-gradient-to-br from-gray-900 to-black shadow-lg ring-1 ring-white/10 relative overflow-hidden"
      >
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
            <div className="max-w-md text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 tracking-wide">
                The New Home of German Excellence
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed font-light">
                Whether you're here to discover, to connect, or to contribute – welcome to 100% MADE IN GERMANY ©. Together, we're building a future where quality, responsibility, and innovation know no borders.
              </p>
            </div>
            <div className="max-w-md text-center md:text-right">
              <p className="text-lg font-semibold mb-2 text-white tracking-tight">Join 50,000+ partners worldwide</p>
              <p className="text-gray-300 text-sm font-light">
                Become part of a growing movement that celebrates German manufacturing and connects it with appreciative markets around the globe.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2"
            >
              Begin Your Journey <ArrowRight size={16} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 transition duration-300 shadow-[0_0_10px_rgba(107,114,128,0.3)] flex items-center justify-center gap-2"
            >
              Contact Us <MessageCircle size={16} />
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default OneHundredPercentMadeInGermany;