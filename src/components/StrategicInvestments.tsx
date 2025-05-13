import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, Factory, Award, Globe2 } from 'lucide-react';

// Define props interface for StrategicInvestments
interface StrategicInvestmentsProps {
  language?: string;
}

// Define translations for StrategicInvestments content
const TRANSLATIONS: Record<string, {
  hero: {
    title: string;
    subHeading: string;
    additionalContent: string;
  };
  section1: {
    title: string;
    body: string;
    additionalContent: string;
  };
  section2: {
    title: string;
    body: string;
    additionalContent: string;
  };
  section3: {
    title: string;
    body: string;
    additionalContent: string;
  };
  contact: {
    name: string;
    email: string;
    website: string;
  };
  bodyCopy: string;
}> = {
  en: {
    hero: {
      title: "Shape the Future with MADE IN GERMANY",
      subHeading: "Partner with MADE IN GERMANY AG - UK LIMITED to drive global innovation, elevate industry standards, and celebrate the legacy of German craftsmanship on an international stage.",
      additionalContent: "Our vision transcends borders, uniting industry leaders, innovators, and visionaries under a shared commitment to excellence. By joining us, you become part of a transformative movement that leverages German precision to create lasting global impact. Explore how your sponsorship can redefine industries, foster cross-cultural collaboration, and position your brand at the forefront of technological advancement.",
    },
    section1: {
      title: "Global Impact Through Innovation",
      body: "Our MADE IN GERMANY project is a bold initiative to redefine excellence in manufacturing and engineering. By sponsoring this venture, you gain access to a platform that showcases cutting-edge technologies, fosters international collaboration, and sets new benchmarks for quality and precision. Your investment will amplify your brand’s global presence and align you with a legacy of trust and reliability synonymous with German craftsmanship.",
      additionalContent: "This initiative is more than a project—it’s a global movement. Sponsors will have the opportunity to participate in exclusive innovation summits, collaborate with top-tier engineers, and showcase their contributions in high-profile international expos. Your involvement will position you as a leader in the next wave of industrial transformation, with access to proprietary research and development insights that drive competitive advantage.",
    },
    section2: {
      title: "Exclusive Partnership Opportunities",
      body: "As a sponsor, you’ll unlock tailored opportunities to engage with industry leaders, access exclusive events, and showcase your brand alongside the pinnacle of German engineering. Our partnerships are designed to provide measurable returns, from enhanced visibility to strategic networking. Join a select group of visionaries committed to shaping a sustainable and innovative future.",
      additionalContent: "Our sponsorship packages are customized to align with your strategic goals, offering benefits such as co-branded marketing campaigns, VIP access to global trade shows, and direct engagement with our network of industry pioneers. Whether you’re seeking to expand your market reach or establish thought leadership, our team will work closely with you to craft a partnership that delivers tangible value and long-term impact.",
    },
    section3: {
      title: "Commitment to Sustainability",
      body: "Sustainability is at the core of our mission. By investing in MADE IN GERMANY, you support initiatives that prioritize eco-friendly practices, resource efficiency, and long-term environmental impact. Together, we can build a future where quality, innovation, and sustainability coexist, creating lasting value for industries and communities worldwide.",
      additionalContent: "Our sustainability efforts extend beyond compliance, embedding green technologies and circular economy principles into every facet of our project. Sponsors will contribute to groundbreaking research in sustainable manufacturing, gain recognition for their environmental leadership, and help shape policies that promote global ecological responsibility. Your investment will leave a legacy of positive change, resonating with stakeholders and consumers alike.",
    },
    contact: {
      name: "MADE IN GERMANY AG - UK LIMITED Sponsorship Team",
      email: "sponsorship@made-in-germany.uk",
      website: "www.made-in-germany.uk",
    },
    bodyCopy: "We, MADE IN GERMANY AG - UK LIMITED, invite visionary sponsors to invest in our transformative global MADE IN GERMANY project. This ambitious initiative embodies the pinnacle of German engineering, precision, and innovation, poised to redefine industry standards worldwide. By partnering with us, you align with a legacy of reliability and excellence, gaining exclusive access to a platform that showcases cutting-edge advancements and fosters international collaboration. Your investment will fuel groundbreaking developments, enhance global brand visibility, and contribute to a sustainable future rooted in quality and trust. Our team is committed to creating partnerships that deliver mutual success, offering bespoke opportunities that align with your strategic objectives. Join us in this prestigious endeavor—contact our dedicated sponsorship team to explore how we can shape the future together and become a catalyst for global progress.",
  },
  // Add other language translations as needed, following the same structure
};

const StrategicInvestments: React.FC<StrategicInvestmentsProps> = ({ language = 'en' }) => {
  const translations = TRANSLATIONS[language] || TRANSLATIONS['en'];

  // Define "MADE IN GERMANY ©" with consistent styling
  const madeInGermany = (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
      MADE IN GERMANY
    </span>
  );

  return (
    <div className="flex flex-col items-center w-full px-4 space-y-10 py-12 bg-[#FFFFFF] font-inter">
      <div className="max-w-7xl mx-auto w-full">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 text-left"
        >
          <div
            className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
              {translations.hero.title} <br />
              {madeInGermany} AG - UK Limited
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              {translations.hero.subHeading}
            </p>
            <p className="text-base text-gray-400 mb-8">
              {translations.hero.additionalContent}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href={`mailto:${translations.contact.email}`}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
              <motion.a
                href={`https://${translations.contact.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 shadow-[0_0_10px_rgba(107,114,128,0.3)]"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </div>
          </div>
        </motion.section>

        {/* Sub-Sections */}
        <div className="space-y-10 mt-10">
          {/* Section 1: Global Impact */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12"
          >
            <div
              className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative z-10 flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <Factory className="w-16 h-16 text-blue-400 bg-blue-900/50 rounded-full p-4" />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                  {translations.section1.title}
                </h2>
                <p className="text-lg text-gray-300 mb-4">
                  {translations.section1.body}
                </p>
                <p className="text-base text-gray-400">
                  {translations.section1.additionalContent}
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 2: Partnership Opportunities */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12"
          >
            <div
              className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative z-10 flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <Award className="w-16 h-16 text-blue-400 bg-blue-900/50 rounded-full p-4" />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                  {translations.section2.title}
                </h2>
                <p className="text-lg text-gray-300 mb-4">
                  {translations.section2.body}
                </p>
                <p className="text-base text-gray-400">
                  {translations.section2.additionalContent}
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 3: Sustainability */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12"
          >
            <div
              className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative z-10 flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <Globe2 className="w-16 h-16 text-blue-400 bg-blue-900/50 rounded-full p-4" />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                  {translations.section3.title}
                </h2>
                <p className="text-lg text-gray-300 mb-4">
                  {translations.section3.body}
                </p>
                <p className="text-base text-gray-400">
                  {translations.section3.additionalContent}
                </p>
              </div>
            </div>
          </motion.section>

          {/* Contact Information */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12"
          >
            <div
              className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative z-10 flex flex-col items-center text-center">
              <h3 className="text-xl font-medium text-gray-300 mb-4">
                {translations.contact.name}
              </h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <a
                    href={`mailto:${translations.contact.email}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {translations.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <a
                    href={`https://${translations.contact.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {translations.contact.website}
                  </a>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Body Copy */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12"
          >
            <div
              className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative z-10">
              <p className="text-lg text-gray-300 text-center">
                {translations.bodyCopy}
              </p>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default StrategicInvestments;