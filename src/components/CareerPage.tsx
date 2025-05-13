import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { Briefcase, Users, Award, ChevronRight, Heart, Globe, Code, Coffee, BarChart, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CareerPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const jobOpenings = [
    { id: 1, title: 'Vertriebsmanager (m/w/d)', department: 'Vertrieb', location: 'Berlin / Remote', description: 'Führe unser Vertriebsteam und gestalte Kundenbeziehungen weltweit.', requirements: 'Erfahrung im B2B-Vertrieb, Kommunikationsstärke, Reisebereitschaft.' },
    { id: 2, title: 'Marketing Specialist (m/w/d)', department: 'Marketing', location: 'München', description: 'Entwickle kreative Kampagnen, die unsere Marke stärken.', requirements: 'Kenntnisse in SEO, Social Media und Content Creation.' },
    { id: 3, title: 'Technischer Support (m/w/d)', department: 'Support', location: 'Hamburg / Remote', description: 'Unterstütze unsere Kunden mit technischer Expertise.', requirements: 'Technisches Verständnis, Kundenorientierung.' },
    { id: 4, title: 'Software Engineer (m/w/d)', department: 'Technik', location: 'Remote', description: 'Baue innovative Lösungen für unsere Plattform.', requirements: 'Erfahrung mit React, Node.js oder Python.' },
    { id: 5, title: 'Produktmanager (m/w/d)', department: 'Produkt', location: 'Frankfurt / Remote', description: 'Gestalte die Zukunft unserer Produkte.', requirements: 'Produktmanagement-Erfahrung, analytisches Denken.' },
    { id: 6, title: 'Data Analyst (m/w/d)', department: 'Daten', location: 'Remote', description: 'Analysiere Daten, um strategische Entscheidungen zu fördern.', requirements: 'SQL, Python, Erfahrung mit BI-Tools.' },
    { id: 7, title: 'UX Designer (m/w/d)', department: 'Design', location: 'Remote', description: 'Entwerfe intuitive Benutzeroberflächen für unsere Produkte.', requirements: 'Figma, UI/UX-Design-Erfahrung.' },
  ];

  const benefits = [
    { icon: Briefcase, title: 'Flexible Arbeitszeiten', description: 'Gestalte deinen Tag nach deinen Bedürfnissen und finde die perfekte Work-Life-Balance. Ob Frühaufsteher oder Nachteule, du bestimmst deinen Rhythmus.' },
    { icon: Users, title: 'Remote-Option', description: 'Arbeite von überall aus, ob von zu Hause, unterwegs oder aus einem Coworking-Space. Wir unterstützen dich mit modernen Tools für nahtlose Zusammenarbeit.' },
    { icon: Award, title: 'Weiterbildung', description: 'Nutze unsere umfassenden Schulungsprogramme, um dich beruflich und persönlich weiterzuentwickeln. Von Online-Kursen bis zu Konferenzen – wir investieren in deine Zukunft.' },
    { icon: Heart, title: 'Teamkultur', description: 'Werde Teil eines unterstützenden, vielfältigen Teams, das Zusammenarbeit und Respekt lebt. Regelmäßige Teamevents stärken unseren Zusammenhalt.' },
    { icon: Globe, title: 'Internationales Umfeld', description: 'Arbeite mit Kollegen aus aller Welt an globalen Projekten. Unsere internationale Präsenz bietet dir einzigartige Perspektiven und Chancen.' },
    { icon: Code, title: 'Innovationsfokus', description: 'Bringe deine Ideen ein und gestalte die Zukunft mit. Unser Innovationslabor gibt dir Raum für Kreativität und Experimente.' },
    { icon: Coffee, title: 'Wohlfühlatmosphäre', description: 'Profitiere von modernen Büros, kostenlosen Getränken und einer entspannten Arbeitsumgebung, die Produktivität fördert.' },
    { icon: BarChart, title: 'Karrierechancen', description: 'Entwickle dich in einem Unternehmen, das Wachstum und Aufstiegsmöglichkeiten fördert. Deine Karriere liegt uns am Herzen.' },
    { icon: Zap, title: 'Impact', description: 'Arbeite an Projekten, die einen echten Unterschied machen – für unsere Kunden und die Gesellschaft.' },
  ];

  const testimonials = [
    { name: 'Anna Müller', role: 'Vertriebsleiterin', quote: 'Hier habe ich die Freiheit, meine Ideen umzusetzen und echte Wirkung zu erzielen. Die Unterstützung des Teams ist unschlagbar!' },
    { name: 'Lukas Schmidt', role: 'Software Engineer', quote: 'Die Zusammenarbeit im Team und die modernen Technologien machen jeden Tag spannend. Ich lerne ständig dazu.' },
    { name: 'Sophie Weber', role: 'Marketing Managerin', quote: 'Ich liebe es, kreativ zu sein und unsere Marke weltweit zu präsentieren. Die internationale Ausrichtung ist inspirierend.' },
    { name: 'Max Braun', role: 'Produktmanager', quote: 'Die Möglichkeit, an innovativen Produkten zu arbeiten und direkt Feedback von Kunden zu bekommen, ist einzigartig.' },
  ];

  return (
    <div className="flex flex-col items-center w-full px-4 space-y-10 py-12 bg-[#FFFFFF] font-inter">
      <div className="max-w-7xl mx-auto w-full space-y-10">
        {/* Hero Section */}
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
              <source src="/team-collaboration-video.mp4" type="video/mp4" />
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
                Werde Teil von etwas Großem
              </motion.h1>
              <motion.p
                className="text-lg text-gray-300 max-w-4xl font-light mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Schließe dich einem Team an, das Innovation, Qualität und menschliche Werte vereint. Bei uns findest du nicht nur einen Job, sondern eine Mission, die dich begeistert und fordert. Gestalte die Zukunft mit uns – in einem Umfeld, das deine Ideen wertschätzt und deine Karriere fördert.
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2"
                >
                  Jetzt bewerben <ArrowRight size={16} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 transition duration-300 shadow-[0_0_10px_rgba(107,114,128,0.3)] flex items-center justify-center gap-2"
                >
                  Unsere Werte entdecken <ArrowRight size={16} />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 z-10"
        >
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
            Unsere Mission
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            Wir sind ein internationales Unternehmen, das die Welt durch innovative Lösungen verbessert. Unsere Werte – Qualität, Zusammenarbeit und Menschlichkeit – treiben uns an, nachhaltige und zukunftsweisende Projekte zu verwirklichen.
          </p>
          <p className="text-lg text-gray-300 mb-4">
            Bei uns arbeitest du an Projekten, die einen echten Unterschied machen. Von der Entwicklung neuer Technologien bis hin zur Unterstützung unserer globalen Kunden – wir setzen auf Teamarbeit und Visionen.
          </p>
          <p className="text-sm text-gray-400">
            International. Visionär. Menschlich. Werde Teil eines Teams, das die Zukunft gestaltet und dabei immer den Menschen in den Mittelpunkt stellt.
          </p>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 z-10"
        >
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
            Unsere Vorteile
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
              >
                <benefit.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-medium text-gray-300">{benefit.title}</h3>
                <p className="text-sm text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Job Openings Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          custom={0.6}
          className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 z-10"
        >
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
            Offene Positionen
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Entdecke spannende Karrieremöglichkeiten in den Bereichen Vertrieb, Marketing, Technik, Support und mehr. Finde die Rolle, die zu deinen Stärken und Zielen passt.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
              >
                <h3 className="text-lg font-medium text-gray-300">{job.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{job.department} • {job.location}</p>
                <p className="text-sm text-gray-300 mb-2">{job.description}</p>
                <p className="text-sm text-gray-400 mb-4">Anforderungen: {job.requirements}</p>
                <Link to={`/jobs/${job.id}`} className="text-blue-400 flex items-center">
                  Mehr erfahren <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team Testimonials Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          custom={0.8}
          className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 z-10"
        >
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
            Was unser Team sagt
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Höre direkt von unseren Mitarbeitenden, was es bedeutet, Teil unseres Teams zu sein. Ihre Geschichten zeigen, warum wir mehr als nur ein Arbeitsplatz sind.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
              >
                <p className="text-sm text-gray-300 mb-4">„{testimonial.quote}“</p>
                <p className="text-sm font-medium text-gray-300">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Video Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          custom={1.0}
          className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 z-10"
        >
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
            Ein Blick in unser Team
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Lerne unser Team und unsere Kultur kennen – von gemeinsamen Projekten bis zu unseren Werten im Alltag.
          </p>
          <div className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700">
            <video className="aspect-video w-full h-full object-cover" controls>
              <source src="/team-video.mp4" type="video/mp4" />
              Ihr Browser unterstützt das Video-Tag nicht.
            </video>
          </div>
        </motion.section>

        {/* Application Form Placeholder */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          custom={1.2}
          className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 z-10"
        >
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
            Bewerbungsformular
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            Starte deine Karriere bei uns! Fülle das Formular aus, und wir melden uns in Kürze bei dir.
          </p>
          <div className="text-lg text-gray-300">Hier wird das bestehende Bewerbungsformular eingefügt.</div>
        </motion.section>

        {/* FAQ / Process Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          custom={1.4}
          className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 z-10"
        >
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
            Unser Bewerbungsprozess
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Unser Bewerbungsprozess ist transparent und effizient. In nur wenigen Schritten kannst du Teil unseres Teams werden.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: 'Bewerbung einreichen', desc: 'Lade deine Unterlagen hoch und erzähle uns von dir.' },
              { step: 'Erstes Gespräch', desc: 'Lerne uns kennen und erzähle uns von deinen Zielen.' },
              { step: 'Technisches Interview', desc: 'Zeige dein Können in einem fachlichen Gespräch.' },
              { step: 'Angebot', desc: 'Erhalte dein Angebot und starte deine Reise mit uns.' },
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-blue-900 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4">
                  {index + 1}
                </div>
                <div>
                  <p className="text-gray-300">{item.step}</p>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          custom={1.6}
          className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 z-10 text-center"
        >
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Ob du Fragen hast oder direkt loslegen möchtest – wir freuen uns, von dir zu hören! Starte deine Karriere bei uns und werde Teil einer inspirierenden Gemeinschaft.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
              whileTap={{ scale: 0.95 }}
            >
              Jetzt bewerben
            </motion.button>
            <motion.button
              className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 shadow-[0_0_10px_rgba(107,114,128,0.3)]"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Kontakt aufnehmen
            </motion.button>
          </div>
        </motion.section>
      </div>

      {/* Onboarding Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md"></div>
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl ring-1 ring-white/20 relative z-10">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
              Starte deine Reise
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Fülle das Formular aus und werde Teil unseres Teams! Wir freuen uns darauf, dich kennenzulernen.
            </p>
            <div className="text-lg text-gray-300">Hier wird das Bewerbungsformular eingefügt.</div>
            <motion.button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 shadow-[0_0_10px_rgba(107,114,128,0.3)]"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Schließen
            </motion.button>
          </div>
        </motion.div>
      )}

      <Tooltip id="tooltip" place="top" style={{ transform: 'translateX(-50%)' }} className="relative w-64 rounded-md bg-gray-800 border border-gray-700 shadow-xl p-2 text-sm text-gray-300" />
    </div>
  );
};

export default CareerPage;