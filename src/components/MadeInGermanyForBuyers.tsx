import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search, MapPin, Check, Calendar, Download, ChevronDown, ChevronRight, Star,
  Phone, Mail, Globe, Filter, ArrowRight, Shield,Award, 
  FileText, 
  Users 
} from 'lucide-react';

// Mock data for manufacturers
const manufacturersData = [
  {
    id: 1,
    name: 'Precision Engineering GmbH',
    logo: 'https://via.placeholder.com/100x60?text=Precision',
    verified: true,
    industry: 'Automotive',
    location: 'Bavaria',
    certifications: ['ISO 9001', 'TÜV'],
    rating: 4.8,
  },
  {
    id: 2,
    name: 'MedTech Solutions',
    logo: 'https://via.placeholder.com/100x60?text=MedTech',
    verified: true,
    industry: 'Medical',
    location: 'Berlin',
    certifications: ['ISO 13485', 'CE'],
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Industrial Machinery AG',
    logo: 'https://via.placeholder.com/100x60?text=Machinery',
    verified: true,
    industry: 'Machinery',
    location: 'North Rhine-Westphalia',
    certifications: ['ISO 9001', 'ISO 14001'],
    rating: 4.7,
  },
  {
    id: 4,
    name: 'German Electronics',
    logo: 'https://via.placeholder.com/100x60?text=Electronics',
    verified: true,
    industry: 'Electronics',
    location: 'Hamburg',
    certifications: ['ISO 9001', 'ISO 27001'],
    rating: 4.6,
  },
  {
    id: 5,
    name: 'GreenTech Innovators',
    logo: 'https://via.placeholder.com/100x60?text=GreenTech',
    verified: true,
    industry: 'Renewable Energy',
    location: 'Saxony',
    certifications: ['ISO 14001', 'TÜV'],
    rating: 4.7,
  },
  {
    id: 6,
    name: 'Precision Optics GmbH',
    logo: 'https://via.placeholder.com/100x60?text=Optics',
    verified: true,
    industry: 'Optics',
    location: 'Thuringia',
    certifications: ['ISO 9001'],
    rating: 4.8,
  },
];

// Mock testimonials data
const testimonials = [
  {
    id: 1,
    name: 'John Smith',
    company: 'Global Imports Ltd',
    country: 'United States',
    image: 'https://via.placeholder.com/60?text=John',
    quote: 'Finding a reliable German manufacturer has transformed our supply chain. The quality and precision are unmatched.',
    industry: 'Automotive',
  },
  {
    id: 2,
    name: 'Maria Gonzalez',
    company: 'MedSupplies Inc',
    country: 'Spain',
    image: 'https://via.placeholder.com/60?text=Maria',
    quote: 'The certification verification features gave us confidence in choosing the right medical equipment manufacturer.',
    industry: 'Medical',
  },
  {
    id: 3,
    name: 'Hiroshi Tanaka',
    company: 'Tech Innovations',
    country: 'Japan',
    image: 'https://via.placeholder.com/60?text=Hiroshi',
    quote: 'German engineering excellence meets Japanese quality standards. A perfect partnership found through this platform.',
    industry: 'Electronics',
  },
];

// Mock industry data
const industries = [
  { id: 1, name: 'Automotive', icon: '🚗', manufacturers: 245, innovations: 87 },
  { id: 2, name: 'Medical', icon: '⚕️', manufacturers: 189, innovations: 103 },
  { id: 3, name: 'Machinery', icon: '⚙️', manufacturers: 312, innovations: 94 },
  { id: 4, name: 'Electronics', icon: '💻', manufacturers: 176, innovations: 128 },
  { id: 5, name: 'Renewable Energy', icon: '♻️', manufacturers: 142, innovations: 56 },
];

// Mock FAQ data
const faqData = [
  {
    id: 1,
    question: 'How are manufacturers verified?',
    answer: 'All manufacturers undergo a rigorous verification process including document verification, site visits, reference checks, and certification validation to ensure they meet German quality standards.',
  },
  {
    id: 2,
    question: 'What payment methods are supported?',
    answer: 'Our platform supports secure international wire transfers, credit cards, and escrow services to ensure safe transactions between buyers and manufacturers.',
  },
  {
    id: 3,
    question: 'How does the RFQ process work?',
    answer: 'Buyers can submit Request for Quotes directly through manufacturer profiles. Our system translates and formats these requests, tracks responses, and facilitates communication throughout the negotiation process.',
  },
  {
    id: 4,
    question: 'Can I request product samples?',
    answer: 'Yes, our platform includes a streamlined sample request workflow that includes quantity specification, shipping arrangements, and tracking from request to delivery.',
  },
];

// Main component
const MadeInGermanyPlatform: React.FC = () => {
  const [manufacturers, setManufacturers] = useState(manufacturersData);
  const [isUserBuyer, setIsUserBuyer] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const searchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Filter manufacturers based on search and filters
  useEffect(() => {
    let filtered = manufacturersData;

    if (searchTerm.trim() !== '') {
      filtered = filtered.filter((manufacturer) =>
        manufacturer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        manufacturer.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
        manufacturer.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedIndustry !== 'All') {
      filtered = filtered.filter((manufacturer) => manufacturer.industry === selectedIndustry);
    }

    setManufacturers(filtered);
  }, [searchTerm, selectedIndustry]);

  // Handle keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Navigation handler
  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle FAQ
  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="flex flex-col items-center w-full px-4 space-y-10 py-12 bg-[#FFFFFF] font-inter">
      {/* Hero Section */}
      <motion.section
        className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex space-x-2 mb-8">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-l-lg ${isUserBuyer ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'border border-gray-600 bg-gray-800 text-gray-200 hover:bg-gray-700'}`}
                onClick={() => setIsUserBuyer(true)}
              >
                I'm a Buyer!
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-r-lg ${!isUserBuyer ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'border border-gray-600 bg-gray-800 text-gray-200 hover:bg-gray-700'}`}
                onClick={() => handleNavigation('/madeingermanyformanufacturers')}
              >
                I'm a Manufacturer
              </motion.button>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              DISCOVER CERTIFIED GERMAN MANUFACTURERS
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl leading-relaxed">
              Connect with verified German manufacturers renowned for precision engineering, reliability, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium flex items-center justify-center gap-1 transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                onClick={() => searchRef.current?.focus()}
              >
                Start Your Search <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 transition duration-300 shadow-[0_0_10px_rgba(107,114,128,0.3)]"
              >
                Learn How It Works
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Search and Discovery Section */}
      <motion.section
        className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl">
          <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            SEARCH & DISCOVER
          </h2>
          <div className="relative mb-8">
            <div
              className={`flex items-center bg-gray-800/50 rounded-lg overflow-hidden transition-all duration-300 border border-gray-700 ${
                isSearchFocused ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <div className="px-4">
                <Search className="h-5 w-5 text-blue-400" />
              </div>
              <input
                ref={searchRef}
                type="text"
                className="flex-1 bg-transparent outline-none py-4 text-gray-300 placeholder:text-gray-400"
                placeholder="Search manufacturers, industries, or regions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <button className="px-4 py-4 bg-transparent text-gray-400 hover:text-white">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 15.5C14.21 15.5 16 13.71 16 11.5C16 9.29 14.21 7.5 12 7.5C9.79 7.5 8 9.29 8 11.5C8 13.71 9.79 15.5 12 15.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path d="M3 11.5H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M16 11.5H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            {isSearchFocused && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 rounded-md border border-gray-700 shadow-xl p-2 z-50">
                <p className="px-4 py-2 text-gray-400 text-sm">Recent searches:</p>
                <div className="px-4 py-1 hover:bg-gray-700 cursor-pointer text-gray-300">Automotive manufacturers</div>
                <div className="px-4 py-1 hover:bg-gray-700 cursor-pointer text-gray-300">Medical equipment</div>
                <div className="px-4 py-1 hover:bg-gray-700 cursor-pointer text-gray-300">Precision tools Bavaria</div>
              </div>
            )}
            <p className="mt-2 text-sm text-gray-400">
              Pro tip: Press <kbd className="bg-gray-800 px-2 py-0.5 rounded">⌘</kbd>+
              <kbd className="bg-gray-800 px-2 py-0.5 rounded">K</kbd> to search
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <motion.div
              className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
              whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-xl text-white">Industry</h3>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="all-industries"
                    name="industry"
                    checked={selectedIndustry === 'All'}
                    onChange={() => setSelectedIndustry('All')}
                    className="text-blue-600"
                  />
                  <label htmlFor="all-industries" className="text-gray-300">All Industries</label>
                </div>
                {industries.map((industry) => (
                  <div key={industry.id} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id={`industry-${industry.id}`}
                      name="industry"
                      checked={selectedIndustry === industry.name}
                      onChange={() => setSelectedIndustry(industry.name)}
                      className="text-blue-600"
                    />
                    <label htmlFor={`industry-${industry.id}`} className="text-gray-300">{industry.name}</label>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
              whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-xl text-white">Certifications</h3>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </div>
              <div className="mt-4 space-y-2">
                {['ISO 9001', 'ISO 14001', 'TÜV', 'CE'].map((cert) => (
                  <div key={cert} className="flex items-center space-x-2">
                    <input type="checkbox" id={cert.toLowerCase()} className="text-blue-600" />
                    <label htmlFor={cert.toLowerCase()} className="text-gray-300">{cert}</label>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
              whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-xl text-white">Region</h3>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </div>
              <div className="mt-4 space-y-2">
                {['Bavaria', 'Berlin', 'North Rhine-Westphalia', 'Hamburg'].map((region) => (
                  <div key={region} className="flex items-center space-x-2">
                    <input type="checkbox" id={region.toLowerCase()} className="text-blue-600" />
                    <label htmlFor={region.toLowerCase()} className="text-gray-300">{region}</label>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
              whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-xl text-white">Company Size</h3>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </div>
              <div className="mt-4 space-y-2">
                {[
                  { id: 'small', label: 'Small (1-50 employees)' },
                  { id: 'medium', label: 'Medium (51-250 employees)' },
                  { id: 'large', label: 'Large (251+ employees)' },
                ].map((size) => (
                  <div key={size.id} className="flex items-center space-x-2">
                    <input type="checkbox" id={size.id} className="text-blue-600" />
                    <label htmlFor={size.id} className="text-gray-300">{size.label}</label>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          <div className="bg-blue-900/20 rounded-lg p-4 flex items-center justify-between mb-8 border border-gray-700">
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-blue-400 mr-2" />
              <span className="text-gray-300">
                Showing <strong>{manufacturers.length}</strong> manufacturers
              </span>
            </div>
            <div className="flex space-x-2">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-3 py-1 rounded text-sm transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              >
                Save Search
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-600 bg-gray-800 text-gray-200 px-3 py-1 rounded text-sm hover:bg-gray-700 transition duration-300 shadow-[0_0_10px_rgba(107,114,128,0.3)]"
              >
                Clear Filters
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Featured Manufacturers Grid */}
      <motion.section
        className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl">
          <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            FEATURED GERMAN MANUFACTURERS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {manufacturers.map((manufacturer, index) => (
              <motion.div
                key={manufacturer.id}
                className="bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={manufacturer.logo}
                        alt={manufacturer.name}
                        className="h-12 w-12 object-contain bg-white rounded p-1"
                      />
                      <div>
                        <h3 className="font-medium text-xl text-white">{manufacturer.name}</h3>
                        <div className="flex items-center text-sm text-blue-400">
                          {manufacturer.verified && (
                            <span className="flex items-center text-green-500 mr-2">
                              <Check className="h-3 w-3 mr-1" /> Verified
                            </span>
                          )}
                          <span>{manufacturer.industry}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="ml-1 text-gray-300">{manufacturer.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-300 mb-4">
                    <MapPin className="h-4 w-4 mr-1 text-blue-400" />
                    <span>{manufacturer.location}, Germany</span>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-1">Certifications:</p>
                    <div className="flex flex-wrap gap-2">
                      {manufacturer.certifications.map((cert, index) => (
                        <span
                          key={index}
                          className="bg-blue-900/30 text-blue-300 text-xs px-2 py-1 rounded"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm text-gray-300 mb-4">
                      Expert German manufacturer specializing in {manufacturer.industry.toLowerCase()}{' '}
                      solutions with international export experience.
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-3 py-2 rounded-lg text-sm transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                    >
                      View Profile
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 border border-gray-600 bg-gray-800 text-gray-200 px-3 py-2 rounded-lg text-sm hover:bg-gray-700 transition duration-300 shadow-[0_0_10px_rgba(107,114,128,0.3)]"
                    >
                      Request Quote
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-600 bg-gray-800 text-gray-200 px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition duration-300 shadow-[0_0_10px_rgba(107,114,128,0.3)]"
            >
              Load More Manufacturers
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Interactive Germany Map */}
      <motion.section
        className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl">
          <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            DISCOVER MANUFACTURING EXCELLENCE ACROSS GERMANY
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              className="lg:col-span-2 bg-gray-800/50 rounded-lg overflow-hidden p-4 border border-gray-700"
              whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
            >
              <div className="relative aspect-[4/3] bg-gray-900 rounded-lg flex items-center justify-center">
                <img
                  src="https://via.placeholder.com/600x450?text=Germany+Map"
                  alt="Germany Map"
                  className="w-full h-full object-contain"
                />
                <div className="absolute top-1/4 right-1/3 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
                <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
                <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-yellow-500 rounded-full animate-ping"></div>
              </div>
            </motion.div>
            <div className="space-y-4">
              <motion.div
                className="bg-gray-800/50 p-4 rounded-lg border border-gray-700"
                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
              >
                <h3 className="font-medium text-xl text-white mb-2">Regional Specializations</h3>
                <ul className="space-y-2">
                  {[
                    { region: 'Bavaria', specialties: 'Automotive, Aerospace' },
                    { region: 'Berlin', specialties: 'Tech, Medical' },
                    { region: 'Hamburg', specialties: 'Shipping, Renewable Energy' },
                    { region: 'North Rhine-Westphalia', specialties: 'Industrial, Steel' },
                  ].map((item) => (
                    <li key={item.region} className="flex justify-between">
                      <span className="text-gray-300">{item.region}</span>
                      <span className="text-blue-400">{item.specialties}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                className="bg-gray-800/50 p-4 rounded-lg border border-gray-700"
                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
              >
                <h3 className="font-medium text-xl text-white mb-2">Manufacturing Metrics</h3>
                <ul className="space-y-2">
                  {[
                    { label: 'Total Manufacturers', value: '2,463' },
                    { label: 'Verified Companies', value: '1,824' },
                    { label: 'Export-Ready', value: '1,651' },
                    { label: 'ISO Certified', value: '2,103' },
                  ].map((metric) => (
                    <li key={metric.label} className="flex justify-between">
                      <span className="text-gray-300">{metric.label}</span>
                      <span className="text-blue-400">{metric.value}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                className="bg-blue-900/20 p-4 rounded-lg border border-gray-700"
                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
              >
                <h3 className="font-medium text-xl text-white mb-2">Industry Distribution</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Automotive', percentage: 27 },
                    { name: 'Machinery', percentage: 23 },
                    { name: 'Electronics', percentage: 18 },
                    { name: 'Medical', percentage: 15 },
                  ].map((item) => (
                    <div key={item.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">{item.name}</span>
                        <span className="text-gray-300">{item.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl">
          <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-center">
            HOW IT WORKS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                step: 1,
                title: 'Search & Filter',
                desc: 'Use our advanced search and filtering system to find the perfect German manufacturer for your specific requirements.',
                features: [
                  'Filter by industry, region, certifications',
                  'Compare manufacturer capabilities',
                  'Save searches for future reference',
                ],
              },
              {
                step: 2,
                title: 'Connect & Request',
                desc: 'Submit detailed inquiries and request quotes directly through our secure platform with multilingual support.',
                features: [
                  'Instant translation for all communications',
                  'Request samples and prototypes',
                  'Schedule video meetings with manufacturers',
                ],
              },
              {
                step: 3,
                title: 'Order & Deliver',
                desc: 'Finalize agreements, manage orders, and track shipments all within our secure platform.',
                features: [
                  'Secure payment processing',
                  'Real-time order tracking',
                  'Quality assurance verification',
                ],
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                className="bg-gray-800/50 p-6 rounded-lg relative border border-gray-700"
                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.2 }}
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-blue-900 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-medium text-center text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.desc}</p>
                <ul className="text-gray-300 space-y-2 mb-4">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center text-blue-400 hover:text-blue-300 cursor-pointer">
                  <span className="flex items-center justify-center">
                    {index === 0 ? 'Watch Demo' : index === 1 ? 'View Sample RFQ' : 'Learn More'}{' '}
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="bg-blue-900/20 rounded-lg p-8 flex flex-col lg:flex-row items-center justify-between border border-gray-700"
            whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
            transition={{ duration: 0.2 }}
          >
            <div className="mb-6 lg:mb-0">
              <h3 className="text-xl font-medium text-white mb-2">Ready to discover German manufacturing excellence?</h3>
              <p className="text-gray-300">
                Join thousands of international buyers who have found their ideal manufacturing partners.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              onClick={() => searchRef.current?.focus()}
              transition={{ duration: 0.2 }}
            >
              Start Your Search
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
 <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear_gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"
        />
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                OUR STORY
              </h2>
              <p className="text-lg text-center max-w-3xl text-gray-300 leading-relaxed mb-4">
                What exactly is 100% MADE IN GERMANY ©? Let us show you. In this short video, we invite you to understand who we are, what we stand for, and why this is more than just a marketplace – it's a movement.
              </p>
            </div>

            <div className="relative bg-gray-800/50 rounded-lg overflow-hidden aspect-video border border-gray-700">
              <video
                className="w-full h-full object-cover"
                controls
                playsInline
              >
                <source src="/made-in-germany-buyers.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div
                className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear_gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"
              />
            </div>
            <p className="text-center mt-6 text-lg font-light text-gray-300">
              Video: "100% MADE IN GERMANY © – A New Era of Visibility"
            </p>
            <p className="text-center mt-4 text-gray-300 leading-relaxed max-w-2xl mx-auto">
              For generations, German manufacturing has been synonymous with precision, innovation, and uncompromising quality. Today, we unite these values on a single platform to showcase the best of what Germany creates and connect these exceptional products with the world.
            </p>
          </div>
        </div>
      </motion.section>
      {/* Value Proposition Modules */}
      <motion.section
        className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl">
          <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            THE GERMAN MANUFACTURING ADVANTAGE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <Check className="h-6 w-6 text-blue-400" />,
                title: 'Quality Assurance',
                desc: 'All manufacturers undergo rigorous verification and must maintain strict quality standards to remain on our platform.',
                badges: ['ISO 9001', 'TÜV', 'CE', 'DIN'],
                link: 'Learn about certification standards',
              },
              {
                icon: <Globe className="h-6 w-6 text-blue-400" />,
                title: 'Global Logistics',
                desc: 'Access optimized shipping routes, customs expertise, and consolidated shipping options to reduce costs and delivery times.',
                extra: { label: 'Average delivery time:', value: '12-18 days', color: 'text-green-400' },
                link: 'Explore logistics solutions',
              },
              {
                icon: (
                  <img
                    src="https://via.placeholder.com/24?text=Secure"
                    alt="Secure Payment"
                    className="h-6 w-6"
                  />
                ),
                title: 'Secure Transactions',
                desc: 'Our platform provides secure payment processing, escrow services, and financial protection for all transactions.',
                badges: [
                  'https://via.placeholder.com/48x24?text=Visa',
                  'https://via.placeholder.com/48x24?text=Mastercard',
                  'https://via.placeholder.com/48x24?text=PayPal',
                ],
                link: 'View payment options',
              },
              {
                icon: (
                  <img
                    src="https://via.placeholder.com/24?text=Language"
                    alt="Language"
                    className="h-6 w-6"
                  />
                ),
                title: 'Multilingual Support',
                desc: 'Communicate with German manufacturers in your preferred language with our real-time translation technology.',
                grid: ['English', 'Spanish', 'French', 'Chinese', 'Arabic', 'Japanese'],
                link: 'See all 24 languages',
              },
              {
                icon: (
                  <img
                    src="https://via.placeholder.com/24?text=Insights"
                    alt="Market Insights"
                    className="h-6 w-6"
                  />
                ),
                title: 'Market Insights',
                desc: 'Access exclusive data on German manufacturing trends, pricing analytics, and supply chain intelligence.',
                chart: true,
                link: 'View market reports',
              },
              {
                icon: (
                  <img
                    src="https://via.placeholder.com/24?text=Support"
                    alt="Support"
                    className="h-6 w-6"
                  />
                ),
                title: 'Dedicated Support',
                desc: 'Our team of international trade specialists is available to assist with sourcing, negotiations, and relationship management.',
                extra: { label: '+12 specialists', avatars: true },
                link: 'Contact our team',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.desc}</p>
                {item.badges && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.badges.map((badge, i) =>
                      badge.startsWith('https') ? (
                        <img key={i} src={badge} alt="Payment Method" className="h-6" />
                      ) : (
                        <span
                          key={i}
                          className="bg-blue-900/30 text-blue-300 text-xs px-2 py-1 rounded"
                        >
                          {badge}
                        </span>
                      )
                    )}
                  </div>
                )}
                {item.extra && (
                  <div className="flex items-center justify-between text-sm mb-4">
                    <span className="text-gray-400">{item.extra.label}</span>
                    {item.extra.avatars ? (
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                        <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                        <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                        <span className="text-sm text-gray-400">{item.extra.label}</span>
                      </div>
                    ) : (
                      <span className={item.extra.color}>{item.extra.value}</span>
                    )}
                  </div>
                )}
                {item.grid && (
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {item.grid.map((lang, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-gray-500 mr-2"></div>
                        <span className="text-sm text-gray-300">{lang}</span>
                      </div>
                    ))}
                  </div>
                )}
                {item.chart && (
                  <div className="h-24 bg-gray-700 rounded-lg mb-4 overflow-hidden">
                    <div className="h-full w-full flex items-end">
                      {[50, 70, 60, 80, 65, 90].map((height, i) => (
                        <div
                          key={i}
                          className="h-[${height}%] w-1/6 bg-gradient-to-t from-blue-600 to-purple-600"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                )}
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 text-sm flex items-center"
                >
                  {item.link} <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Industry Spotlight Carousels */}
      <motion.section
        className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl">
          <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            INDUSTRY EXCELLENCE SPOTLIGHTS
          </h2>
          {[
            {
              title: 'Automotive & Mobility',
              overview:
                'German automotive manufacturers are global leaders in precision engineering, quality control, and technological innovation.',
              image: 'https://via.placeholder.com/600x200?text=Automotive',
              stats: [
                { label: 'Global market share:', value: '22%' },
                { label: 'Export volume:', value: '€240B annually' },
                { label: 'Certified manufacturers:', value: '245' },
              ],
              tags: [
                'Electric Mobility',
                'Autonomous Systems',
                'Drivetrain Components',
                'Lightweight Materials',
              ],
              innovations: 87,
              button: 'Explore Automotive Suppliers',
            },
            {
              title: 'Medical Technology',
              overview:
                'German medical technology companies lead in diagnostic equipment, prosthetics, and innovative healthcare solutions.',
              image: 'https://via.placeholder.com/600x200?text=Medical',
              stats: [
                { label: 'Global market share:', value: '15%' },
                { label: 'Export volume:', value: '€63B annually' },
                { label: 'Certified manufacturers:', value: '189' },
              ],
              tags: ['Diagnostic Equipment', 'Prosthetics', 'Medical Imaging', 'Digital Health'],
              innovations: 103,
              button: 'Explore Medical Suppliers',
            },
          ].map((industry, index) => (
            <div key={index} className="mb-12">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl md:text-3xl font-light text-gray-300">{industry.title}</h3>
                <div className="flex space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center border border-gray-700"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-300 transform rotate-180" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center border border-gray-700"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-300" />
                  </motion.button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
                  whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                >
                  <h4 className="font-medium text-xl text-white mb-2">Industry Overview</h4>
                  <p className="text-gray-300 text-sm mb-4">{industry.overview}</p>
                  <div className="space-y-2 mb-4">
                    {industry.stats.map((stat, i) => (
                      <div key={i} className="flex justify-between text-sm">
                        <span className="text-gray-400">{stat.label}</span>
                        <span className="text-gray-300">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                  >
                    {industry.button}
                  </motion.button>
                </motion.div>
                <motion.div
                  className="col-span-2 bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700"
                  whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                >
                  <div className="h-48 bg-gray-700 relative">
                    <img
                      src={industry.image}
                      alt={`${industry.title} Manufacturing`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                      <div className="p-4">
                        <h4 className="font-medium text-xl text-white">
                          {index === 0 ? 'German Precision Engineering' : 'Healthcare Innovation'}
                        </h4>
                        <p className="text-gray-300 text-sm">
                          {index === 0
                            ? 'Advanced manufacturing techniques ensuring reliability and performance'
                            : 'Advanced medical technology with rigorous quality standards'}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex flex-wrap gap-3 mb-4">
                      {industry.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-blue-900/30 text-blue-300 text-xs px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-400">
                        {industry.innovations} innovations in the last year
                      </div>
                      <a
                        href="#"
                        className="text-blue-400 hover:text-blue-300 text-sm flex items-center"
                      >
                        View Case Studies <ChevronRight className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials and Success Stories */}
      <motion.section
        className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl">
          <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            SUCCESS STORIES FROM GLOBAL BUYERS
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-medium text-xl text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                    <div className="flex items-center text-xs text-gray-400">
                      <img
                        src="https://via.placeholder.com/16x12?text=Flag"
                        alt={`${testimonial.country} flag`}
                        className="w-4 h-3 mr-1"
                      />
                      {testimonial.country}
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-300 mb-4 italic">"{testimonial.quote}"</blockquote>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-400">{testimonial.industry} Industry</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="bg-blue-900/20 rounded-lg p-6 border border-gray-700"
            whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <h3 className="text-xl font-medium text-white mb-4">Measurable Business Impact</h3>
                <p className="text-gray-300 mb-6">
                  Businesses that source German manufacturers through our platform report significant
                  improvements in product quality, reliability, and customer satisfaction.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { value: '+38%', label: 'Product quality improvement' },
                    { value: '-24%', label: 'Reduction in defect rates' },
                    { value: '+42%', label: 'Customer satisfaction increase' },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      className="bg-blue-900/30 p-4 rounded-lg border border-gray-700"
                      whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                    >
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <p className="text-sm text-gray-300">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
                <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                  Read detailed case studies <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
              <motion.div
                className="bg-gray-800/70 p-6 rounded-lg border border-gray-700"
                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
              >
                <h4 className="font-medium text-xl text-white mb-4">Global Reach</h4>
                <div className="h-48 rounded-lg bg-gray-700 mb-4 relative overflow-hidden">
                  <img
                    src="https://via.placeholder.com/300x200?text=World+Map"
                    alt="World Map"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">72+</span>
                  </div>
                </div>
                <p className="text-center text-gray-300">
                  Countries with active buyers on our platform
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Trust and Certification Section */}
      <motion.section
        className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl">
          <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            GERMAN QUALITY STANDARDS & CERTIFICATIONS
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                className="bg-gray-800/50 p-6 rounded-lg mb-6 border border-gray-700"
                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
              >
                <h3 className="text-xl font-medium text-white mb-4">Certification Verification Process</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {[
                    {
                      step: 1,
                      title: 'Document Submission',
                      desc: 'Manufacturers submit certification documents for review',
                    },
                    {
                      step: 2,
                      title: 'Authentication',
                      desc: 'Our team verifies with certifying authorities',
                    },
                    {
                      step: 3,
                      title: 'Ongoing Monitoring',
                      desc: 'Regular checks ensure certifications remain valid',
                    },
                  ].map((step) => (
                    <motion.div
                      key={step.step}
                      className="bg-gray-800/50 p-4 rounded-lg text-center border border-gray-700"
                      whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                    >
                      <div className="bg-blue-900 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3">
                        {step.step}
                      </div>
                      <h4 className="font-medium text-white mb-2">{step.title}</h4>
                      <p className="text-sm text-gray-300">{step.desc}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                  >
                    Learn More About Verification
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-gray-600 bg-gray-800 text-gray-200 px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition duration-300 shadow-[0_0_10px_rgba(107,114,128,0.3)]"
                  >
                    Download Certification Guide <Download className="inline h-5 w-5 ml-2" />
                  </motion.button>
                </div>
              </motion.div>
              <motion.div
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 mb-6"
                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
              >
                <h3 className="text-xl font-medium text-white mb-4">Trusted Certifications</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: Check, text: 'ISO 9001 Certified' },
                    { icon: Check, text: 'TÜV Verified' },
                    { icon: Check, text: 'CE Compliant' },
                    { icon: Check, text: 'DIN Standards' },
                  ].map((cert, i) => (
                    <motion.div
                      key={i}
                      className="bg-blue-900/30 p-4 rounded-lg flex flex-col items-center text-center border border-gray-700"
                      whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                    >
                      <cert.icon className="h-6 w-6 text-blue-400 mb-2" />
                      <p className="text-sm text-gray-300">{cert.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="text-xl font-medium text-white mb-4 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-12 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500">Benefits of Certified Manufacturers</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'Guaranteed Quality',
                      desc: 'Certified manufacturers adhere to strict quality standards, ensuring reliable products.',
                      icon: Check
                    },
                    {
                      title: 'Global Compliance',
                      desc: 'Certifications like CE and ISO ensure products meet international regulations.',
                      icon: Globe
                    },
                    {
                      title: 'Reduced Risk',
                      desc: 'Verification processes minimize risks of non-compliance or defective products.',
                      icon: Shield
                    },
                    {
                      title: 'Market Trust',
                      desc: 'Certified partners enhance your brand credibility with trusted quality seals.',
                      icon: Star
                    }
                  ].map((benefit, i) => (
                    <motion.div
                      key={i}
                      className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden"
                      whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >
                      <div className="bg-gradient-to-r from-blue-600 to-blue-800 h-0.5 w-full"></div>
                      <div className="p-4 flex items-start space-x-3">
                        <div className="w-10 h-10 bg-blue-900/50 rounded-lg flex items-center justify-center">
                          <benefit.icon className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-white mb-1">{benefit.title}</h4>
                          <p className="text-sm text-gray-300">{benefit.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            <motion.div
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
              whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
            >
              <h3 className="text-xl font-medium text-white mb-4">Quality Assurance Metrics</h3>
              <div className="space-y-4">
                {[
                  { label: 'Verified Manufacturers', value: '1,824', icon: Check },
                  { label: 'Quality Audits Conducted', value: '3,412', icon: Calendar },
                  { label: 'Certification Renewals', value: '2,103', icon: Star },
                ].map((metric, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <div className="w-10 h-10 bg-blue-900/50 rounded-full flex items-center justify-center">
                      <metric.icon className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{metric.label}</p>
                      <p className="text-lg font-medium text-white">{metric.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              >
                View Certification Process
              </motion.button>
              
              {/* Added content below */}
              <div className="mt-8 space-y-4">
                <h4 className="text-lg font-medium text-white">Upcoming Verification Events</h4>
                <div className="space-y-3">
                  {[
                    {
                      title: 'Quality Excellence Workshop',
                      date: 'May 15, 2025',
                      location: 'Berlin, Germany',
                      icon: Calendar
                    },
                    {
                      title: 'ISO Certification Seminar',
                      date: 'June 2, 2025',
                      location: 'Munich, Germany',
                      icon: Users
                    },
                  ].map((event, i) => (
                    <motion.div
                      key={i}
                      className="bg-gray-800/50 p-3 rounded-lg border border-gray-700 flex items-center space-x-3"
                      whileHover={{ scale: 1.02, boxShadow: '0 0 10px rgba(59,130,246,0.4)' }}
                    >
                      <div className="w-8 h-8 bg-blue-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                        <event.icon className="h-4 w-4 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-white">{event.title}</p>
                        <p className="text-xs text-gray-400">{event.date} • {event.location}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <motion.div
                className="mt-8 p-4 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-lg border border-blue-800/50"
                whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
              >
                <h4 className="text-white font-medium mb-2 flex items-center">
                  <Award className="h-4 w-4 mr-2 text-blue-400" />
                  Top Certification Achievement
                </h4>
                <p className="text-sm text-gray-300 mb-3">
                  Our partners consistently achieve 94% success rate in first-time certification applications.
                </p>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full w-11/12"></div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-400">Industry Average: 67%</span>
                  <span className="text-xs text-blue-400">Our Partners: 94%</span>
                </div>
              </motion.div>
              
              <motion.div
                className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700"
                whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
              >
                <h4 className="text-white font-medium mb-3 flex items-center">
                  <FileText className="h-4 w-4 mr-2 text-blue-400" />
                  Resources
                </h4>
                <div className="space-y-2">
                  {[
                    { title: 'Certification Handbook', icon: Download },
                    { title: 'Quality Standards Guide', icon: Download },
                    { title: 'Compliance Checklist', icon: Download },
                  ].map((resource, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center justify-between p-2 hover:bg-gray-700/50 rounded-lg cursor-pointer"
                      whileHover={{ x: 3 }}
                    >
                      <span className="text-sm text-gray-300">{resource.title}</span>
                      <resource.icon className="h-4 w-4 text-blue-400" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                className="mt-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-xs text-gray-500 mt-4">
                  Last updated: April 2025 • All certifications verified by TÜV Rheinland
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl">
          <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="space-y-4 mb-12">
            {faqData.map((faq) => (
              <motion.div
                key={faq.id}
                className="bg-gray-800/50 rounded-lg border border-gray-700"
                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
              >
                <button
                  className="flex justify-between items-center w-full p-4 text-left"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span className="text-lg font-medium text-white">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-400 transition-transform ${
                      expandedFaq === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 pt-0 text-gray-300"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
          <motion.div
            className="bg-blue-900/20 p-6 rounded-lg flex flex-col sm:flex-row justify-between items-center border border-gray-700"
            whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
          >
            <div className="mb-4 sm:mb-0">
              <h3 className="text-xl font-medium text-white mb-2">Still have questions?</h3>
              <p className="text-gray-300">Contact our support team for personalized assistance.</p>
            </div>
            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium flex items-center transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                onClick={() => handleNavigation('/contact')}
              >
                <Phone className="h-5 w-5 mr-2" /> Call Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-600 bg-gray-800 text-gray-200 px-6 py-3 rounded-lg font-medium flex items-center hover:bg-gray-700 transition duration-300 shadow-[0_0_10px_rgba(107,114,128,0.3)]"
                onClick={() => handleNavigation('/contact')}
              >
                <Mail className="h-5 w-5 mr-2" /> Email Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section
        className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.0 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            READY TO SOURCE FROM GERMANY?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of global buyers who trust our platform to connect with certified German
            manufacturers delivering unmatched quality and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium flex items-center justify-center gap-1 transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              onClick={() => searchRef.current?.focus()}
            >
              Start Searching Now <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 transition duration-300 shadow-[0_0_10px_rgba(107,114,128,0.3)]"
              onClick={() => handleNavigation('/contact')}
            >
              Contact Our Team
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default MadeInGermanyPlatform;