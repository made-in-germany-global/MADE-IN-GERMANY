import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Globe, Check, MessageCircle, Star, Layers, ArrowRight, Users, Target, ChevronRight, Zap, Gift, Briefcase } from 'lucide-react';

const MadeInGermanyPage = () => {
  return (
    <div className="bg-white text-white min-h-screen py-10">
      <HeroSection />
      <StandardsSection />
      <InnovationSection />
      <PartnershipSection />
      <TestimonialSection />
      <ExpertiseSection />
      <GlobalReachSection />
    </div>
  );
};

const HeroSection = () => {
  return (
    <motion.section 
    initial={{ opacity: 0, y: 50 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.8 }}
    className="max-w-[1250px] bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white px-58 md:px-40 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden mb-10"
  >
      <div className="relative h-[600px] flex items-center overflow-hidden">
        <video 
          className="absolute inset-0 w-full h-full object-cover opacity-50 z-0" 
          src="made-in-germany-showcase.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-8">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            MADE IN GERMANY
          </h1>
          <h2 className="text-2xl md:text-3xl mb-4 font-light text-gray-300">
            Exzellenz, Präzision und Innovation weltweit
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-300 leading-relaxed">
            Das Qualitätssiegel „MADE IN GERMANY ©" steht für höchste Standards, nachhaltiges Handwerk und zukunftsweisende Technologien. Ein globales Symbol für Vertrauen und Zuverlässigkeit seit Generationen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)] z-20"
              aria-label="Deutsche Qualität entdecken"
              data-tooltip-id="hero-button-1"
              data-tooltip-content="Entdecke die Exzellenz deutscher Qualitätsarbeit"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
              animate={{ 
                boxShadow: ['0 0 10px rgba(59,130,246,0.5)', '0 0 15px rgba(59,130,246,0.7)', '0 0 10px rgba(59,130,246,0.5)']
              }} 
              transition={{ repeat: Infinity, duration: 2 }}
            >
              DEUTSCHE QUALITÄT ENTDECKEN
            </motion.button>
            <motion.button 
              className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg hover:bg-gray-700 font-medium transition duration-300 shadow-[0_0_10px_rgba(107,114,128,0.3)] z-20"
              aria-label="Mehr über Made in Germany erfahren"
              data-tooltip-id="hero-button-2"
              data-tooltip-content="Erfahre mehr über die Werte von Made in Germany"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
            >
              MEHR ÜBER „MADE IN GERMANY" ERFAHREN
            </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const StandardsSection = () => {
  const standards = [
    {
      icon: <Award size={24} />,
      title: "Höchste Qualitätsstandards",
      content: "Deutsche Produkte werden nach den weltweit strengsten Qualitätsrichtlinien hergestellt, mit lückenloser Rückverfolgbarkeit und strenger Qualitätskontrolle in jedem Produktionsschritt."
    },
    {
      icon: <Shield size={24} />,
      title: "Nachhaltige Produktion",
      content: "Umweltbewusstsein und Ressourcenschonung sind integraler Bestandteil der deutschen Produktionsphilosophie – von der Materialauswahl bis zum Energiemanagement."
    },
    {
      icon: <Globe size={24} />,
      title: "Internationale Standards",
      content: "Deutsche Unternehmen sind Vorreiter bei der Einhaltung und Weiterentwicklung internationaler Standards und setzen regelmäßig neue Maßstäbe für die globale Industrie."
    },
    {
      icon: <Check size={24} />,
      title: "Zertifizierte Prozesse",
      content: "Strenge Zertifizierungsverfahren und kontinuierliche Prüfungen stellen sicher, dass Produkte mit dem Label Made in Germany höchsten Qualitätsansprüchen genügen."
    }
  ];

  return (
    <motion.section 
      className="w-full max-w-7xl mx-auto px-4  mb-10"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
    >
      <div className="relative z-10 bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/20 py-8 px-6 md:px-12">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
              Deutsche Qualitätsstandards
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Das Siegel „Made in Germany" basiert auf einem fundierten System von Standards und Werten, die weltweit anerkannt sind und den Kern unserer Produktionsphilosophie bilden.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {standards.map((standard, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { 
                      delay: 0.4 + index * 0.1,
                      duration: 0.5
                    }
                  }
                }}
                initial="hidden"
                animate="visible"
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: '0 0 15px rgba(59,130,246,0.5)'
                }}
              >
                <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                  {standard.icon}
                </div>
                <h3 className="font-medium text-xl text-white mb-3">{standard.title}</h3>
                <p className="text-gray-300">{standard.content}</p>
              </motion.div>
            ))}
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center flex-shrink-0">
              <MessageCircle size={24} />
            </div>
            <div>
              <h3 className="font-medium text-lg text-white mb-1">Globale Beratung</h3>
              <p className="text-gray-300">
                Unsere Experten für deutsche Qualitätsstandards beraten Sie weltweit bei der Implementierung und Zertifizierung. Kontaktieren Sie uns für maßgeschneiderte Lösungen, die den hohen Ansprüchen des „Made in Germany"-Siegels gerecht werden.
              </p>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
              whileTap={{ scale: 0.95 }}
            >
              Standards kennenlernen
            </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const InnovationSection = () => {
  return (
    <motion.section 
      className="w-full max-w-7xl mx-auto px-4 mb-10"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
    >
      <div className="relative z-10 bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/20 py-8 px-6 md:px-12">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                Innovation trifft Tradition
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Das Erfolgsgeheimnis deutscher Unternehmen liegt in der einzigartigen Verbindung von traditionellem Handwerk und modernster Technologie. Generationsübergreifendes Wissen trifft auf zukunftsweisende Innovationskraft.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <Check size={16} />
                  </div>
                  <p className="text-gray-300">Forschung und Entwicklung als zentraler Bestandteil der Unternehmenskultur</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <Check size={16} />
                  </div>
                  <p className="text-gray-300">Duale Ausbildungssysteme zur Förderung qualifizierter Fachkräfte</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <Check size={16} />
                  </div>
                  <p className="text-gray-300">Kontinuierliche Prozessoptimierung und Effizienzsteigerung</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <Check size={16} />
                  </div>
                  <p className="text-gray-300">Branchenübergreifende Zusammenarbeit für ganzheitliche Lösungen</p>
                </div>
              </div>
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
              >
                INNOVATIONEN ENTDECKEN
              </motion.button>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-purple-900/80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <div className="w-8 h-8 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-white font-medium">Video ansehen</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Die deutsche Innovationskraft</h3>
              <p className="text-gray-300 mb-4">
                Erfahren Sie mehr über die einzigartige Innovationskultur deutscher Unternehmen und wie diese kontinuierlich neue Maßstäbe in Qualität und Technologie setzen.
              </p>
              <div className="flex justify-between text-gray-400 text-sm">
                <span>6:42 Minuten</span>
                <span>Präsentiert von Dr. M. Weber, Innovationsexperte</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const PartnershipSection = () => {
  return (
    <motion.section 
      className="w-full max-w-7xl mx-auto px-4  "
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
    >
      <div className="relative z-10 bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/20 py-8 px-6 md:px-12">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
              Strategische Partnerschaften
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Wir verbinden führende deutsche Unternehmen mit globalen Partnern, um nachhaltige Geschäftsbeziehungen zu schaffen und das Qualitätsversprechen „Made in Germany" weltweit zu verbreiten.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <motion.div 
              className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 flex flex-col h-full"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 0.5 }
                }
              }}
              initial="hidden"
              animate="visible"
              whileHover={{ 
                scale: 1.03, 
                boxShadow: '0 0 15px rgba(59,130,246,0.5)'
              }}
            >
              <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                <Briefcase size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Unternehmenspartnerschaften</h3>
              <p className="text-gray-300 flex-grow">
                Strategische Allianzen zwischen deutschen Qualitätsunternehmen und internationalen Partnern, die gemeinsame Werte und Qualitätsstandards teilen.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-1 group">
                  <span>Partner werden</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
            <motion.div 
              className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 flex flex-col h-full"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.5, duration: 0.5 }
                }
              }}
              initial="hidden"
              animate="visible"
              whileHover={{ 
                scale: 1.03, 
                boxShadow: '0 0 15px rgba(59,130,246,0.5)'
              }}
            >
              <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Netzwerkveranstaltungen</h3>
              <p className="text-gray-300 flex-grow">
                Exklusive Events, die deutsche und internationale Unternehmen zusammenbringen, um Wissen auszutauschen und neue Kooperationsmöglichkeiten zu erschließen.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-1 group">
                  <span>Kommende Veranstaltungen</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
            <motion.div 
              className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 flex flex-col h-full"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.6, duration: 0.5 }
                }
              }}
              initial="hidden"
              animate="visible"
              whileHover={{ 
                scale: 1.03, 
                boxShadow: '0 0 15px rgba(59,130,246,0.5)'
              }}
            >
              <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Zertifizierungsprogramme</h3>
              <p className="text-gray-300 flex-grow">
                Maßgeschneiderte Programme zur Zertifizierung und Qualifikation internationaler Partner, die mit deutschen Qualitätsstandards arbeiten möchten.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-1 group">
                  <span>Zertifizierungsprozess</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Werden Sie Teil unseres globalen Netzwerks</h3>
              <p className="text-gray-300">
                Entdecken Sie die Vorteile einer Partnerschaft mit führenden deutschen Unternehmen und profitieren Sie von unserem weltweiten Netzwerk.
              </p>
            </div>
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)] whitespace-nowrap flex-shrink-0"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
              whileTap={{ scale: 0.95 }}
            >
              Partnerschaft anfragen
            </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "Die Zusammenarbeit mit deutschen Herstellern hat unsere Produktqualität revolutioniert und unsere Kundenzufriedenheit um 40% gesteigert.",
      author: "Maria Rodriguez",
      position: "CEO, Global Innovations Inc.",
      rating: 5
    },
    {
      quote: "Das Made in Germany-Siegel ist für uns nicht nur ein Qualitätsversprechen, sondern ein entscheidender Wettbewerbsvorteil auf dem asiatischen Markt.",
      author: "Hiroshi Tanaka",
      position: "Direktor für Beschaffung, Asahi Industries",
      rating: 5
    },
    {
      quote: "Die deutschen Qualitätsstandards haben uns geholfen, unsere eigenen Prozesse zu verbessern und nachhaltige Lieferketten aufzubauen.",
      author: "Sarah Johnson",
      position: "COO, American Manufacturing Group",
      rating: 5
    }
  ];

  return (
    <motion.section 
      className="w-full max-w-7xl mx-auto px-4  mt-10 mb-10"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
    >
      <div className="relative z-10 bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/20 py-8 px-6 md:px-12">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
              Stimmen unserer Partner
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Erfahren Sie, wie internationale Unternehmen von der Zusammenarbeit mit deutschen Qualitätsanbietern profitieren und welchen Mehrwert das „Made in Germany"-Siegel weltweit schafft.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 flex flex-col"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { 
                      delay: 0.4 + index * 0.1,
                      duration: 0.5
                    }
                  }
                }}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                <div>
                  <p className="font-medium text-white">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <motion.div 
              className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-lg text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 0.5 }
                }
              }}
              initial="hidden"
              animate="visible"
            >
              <h3 className="text-3xl font-bold text-white mb-2">500+</h3>
              <p className="text-gray-300">Globale Partner</p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-lg text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.5, duration: 0.5 }
                }
              }}
              initial="hidden"
              animate="visible"
            >
              <h3 className="text-3xl font-bold text-white mb-2">98%</h3>
              <p className="text-gray-300">Kundenzufriedenheit</p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-lg text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.6, duration: 0.5 }
                }
              }}
              initial="hidden"
              animate="visible"
            >
              <h3 className="text-3xl font-bold text-white mb-2">50+</h3>
              <p className="text-gray-300">Länder vertreten</p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-lg text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.7, duration: 0.5 }
                }
              }}
              initial="hidden"
              animate="visible"
            >
              <h3 className="text-3xl font-bold text-white mb-2">1000+</h3>
              <p className="text-gray-300">Zertifizierte Projekte</p>
            </motion.div>
          </div>
          <div className="flex justify-center">
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
              whileTap={{ scale: 0.95 }}
            >
              Mehr Erfahrungsberichte
            </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const ExpertiseSection = () => {
  const expertiseAreas = [
    {
      icon: <Zap size={24} />,
      title: "Technologische Exzellenz",
      content: "Deutsche Ingenieure und Techniker sind weltweit führend in der Entwicklung innovativer Lösungen für komplexe Herausforderungen in verschiedenen Industrien."
    },
    {
      icon: <Gift size={24} />,
      title: "Kundenspezifische Lösungen",
      content: "Maßgeschneiderte Produkte und Dienstleistungen, die genau auf die Bedürfnisse unserer Kunden abgestimmt sind, garantieren höchste Zufriedenheit."
    },
    {
      icon: <Layers size={24} />,
      title: "Branchenübergreifende Expertise",
      content: "Von Automobilbau über Medizintechnik bis hin zu erneuerbaren Energien – deutsche Unternehmen bieten Fachwissen in vielfältigen Sektoren."
    }
  ];

  return (
    <motion.section 
      className="w-full max-w-7xl mx-auto px-4  mb-10"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
    >
      <div className="relative z-10 bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/20 py-8 px-6 md:px-12">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
              Unsere Expertise
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Deutsche Unternehmen stehen für tiefgreifendes Fachwissen, innovative Technologien und maßgeschneiderte Lösungen, die weltweit Maßstäbe setzen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { 
                      delay: 0.4 + index * 0.1,
                      duration: 0.5
                    }
                  }
                }}
                initial="hidden"
                animate="visible"
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: '0 0 15px rgba(59,130,246,0.5)'
                }}
              >
                <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                  {area.icon}
                </div>
                <h3 className="font-medium text-xl text-white mb-3">{area.title}</h3>
                <p className="text-gray-300">{area.content}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center">
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
              whileTap={{ scale: 0.95 }}
            >
              Mehr über unsere Expertise
            </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const GlobalReachSection = () => {
  return (
    <motion.section 
      className="w-full max-w-7xl mx-auto px-4  "
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
    >
      <div className="relative z-10 bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/20 py-8 px-6 md:px-12">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
              Globale Reichweite
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Das „Made in Germany"-Siegel ist in über 50 Ländern präsent und steht für Vertrauen, Qualität und Zuverlässigkeit auf allen Kontinenten.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Weltweite Präsenz</h3>
              <p className="text-gray-300 mb-6">
                Deutsche Qualitätsprodukte und Dienstleistungen sind auf allen Kontinenten gefragt. Von Nordamerika bis Asien vertrauen Unternehmen und Verbraucher auf die Exzellenz von „Made in Germany".
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <Check size={16} />
                  </div>
                  <p className="text-gray-300">Export in über 50 Länder weltweit</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <Check size={16} />
                  </div>
                  <p className="text-gray-300">Lokale Partnerschaften für globale Lösungen</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <Check size={16} />
                  </div>
                  <p className="text-gray-300">Maßgeschneiderte Logistik und Lieferketten</p>
                </div>
              </div>
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
              >
                Globale Märkte erkunden
              </motion.button>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-purple-900/80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <div className="w-8 h-8 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-white font-medium">Video ansehen</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Unsere globale Mission</h3>
              <p className="text-gray-300 mb-4">
                Entdecken Sie, wie deutsche Unternehmen weltweit agieren und durch Qualität und Innovation neue Märkte erschließen.
              </p>
              <div className="flex justify-between text-gray-400 text-sm">
                <span>5:30 Minuten</span>
                <span>Präsentiert von Anna Schmidt, Global Strategy Lead</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default MadeInGermanyPage;