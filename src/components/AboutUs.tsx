import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Shield, Heart, Award, Buildings } from 'lucide-react';

export default function UeberUnsSection() {
  const fadeIn = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  const teamMembers = [
    {
      name: "Dr. Anna Müller",
      position: "Gründerin & CEO",
      description: "Internationale Handelsexpertin mit 15 Jahren Erfahrung in deutsch-arabischen Wirtschaftsbeziehungen."
    },
    {
      name: "Thomas Weber",
      position: "Leiter Qualitätsmanagement",
      description: "Ehemaliger Qualitätsmanager bei deutschen Premiumherstellern."
    },
    {
      name: "Sarah El-Nagar",
      position: "Interkultureller Berater",
      description: "Spezialisiert auf internationale Geschäftsethik und Kommunikation."
    },
    {
      name: "Markus Schneider",
      position: "Technischer Direktor",
      description: "Experte für digitale Plattformen und Handelsinfrastruktur."
    }
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: "Vertrauen",
      description: "Wir schaffen transparente Handelsbeziehungen, die auf gegenseitigem Vertrauen basieren."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-400" />,
      title: "Qualität",
      description: "Deutscher Qualitätsstandard ist für uns nicht nur ein Versprechen, sondern eine Verpflichtung."
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: "Internationalität",
      description: "Wir denken global und handeln lokal mit kulturellem Fingerspitzengefühl."
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-400" />,
      title: "Nachhaltigkeit",
      description: "Langfristige Beziehungen und ökologische Verantwortung stehen im Mittelpunkt."
    }
  ];

  return (
    <section className="w-full px-4 py-12 font-inter">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Hauptüberschrift */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Über Uns
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Wir verbinden deutsche Qualität mit globaler Vision und schaffen eine Plattform für langfristige, 
            vertrauensvolle Handelsbeziehungen.
          </p>
        </motion.div>

        {/* Unsere Geschichte */}
        <motion.div 
          className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 z-10"
          {...fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl"></div>
          
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
            Unsere Geschichte
          </h2>
          
          <div className="text-gray-300 space-y-4">
            <p className="text-lg">
              Wir sind eine Initiative, die sich der Förderung deutscher Qualität, Innovation und Verlässlichkeit 
              auf internationalen Märkten verschrieben hat. Unser Ziel ist es, Produzenten, Händler und Abnehmer 
              weltweit durch ein transparentes, faires und professionelles Netzwerk zu verbinden.
            </p>
            <p className="text-lg">
              Unser Team arbeitet unabhängig, interdisziplinär und kulturübergreifend – mit Sitz in Kairo und einem 
              klaren Bekenntnis zu Transparenz, Fairness und Partnerschaftlichkeit. Wir glauben an langfristiges 
              Vertrauen, nicht an kurzfristige Gewinne.
            </p>
            <p className="text-lg">
              Hinter dem Projekt steht keine Lobby, keine Großbank und keine politische Agenda – sondern Menschen 
              mit dem Willen, mit Qualität und Haltung neue Maßstäbe zu setzen.
            </p>
          </div>
        </motion.div>

        {/* Unsere Vision */}
        <motion.div 
          className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 z-10"
          {...fadeIn}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl"></div>
          
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
            Unsere Vision
          </h2>
          
          <div className="text-gray-300">
            <p className="text-lg mb-4">
              Die Idee hinter "Made in Germany" ist nicht neu – aber die Art und Weise, wie wir sie zum Leben erwecken, 
              ist es. Sie wurde aus einem tiefen Verständnis für internationale Märkte, kulturelle Brücken und dem Wunsch 
              geboren, den Handel einfacher, ehrlicher und zugänglicher zu gestalten.
            </p>
            <p className="text-lg">
              Unsere Plattform ist mehr als ein Marktplatz. Sie ist eine Einladung zur Zusammenarbeit, zur Kommunikation – 
              und zur Rückbesinnung auf Werte, die wichtig sind: Integrität, gegenseitiger Respekt und langfristiges Denken.
            </p>
          </div>
        </motion.div>

        {/* Unser Team */}
        <motion.div 
          className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 z-10"
          {...fadeIn}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl"></div>
          
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
            Unser Team
          </h2>
          
          <p className="text-lg text-gray-300 mb-8">
            Unser Gründer lebt in Kairo – mit globalem Ausblick und einer tiefen Wertschätzung für deutsche Präzision. 
            Von dort aus koordinieren wir ein wachsendes internationales Netzwerk mit einem klaren Ziel: zuverlässige 
            Produkte zu den Menschen zu bringen, die sie brauchen, mit Respekt für lokale Gegebenheiten und einer globalen Perspektive.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
                variants={cardVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
              >
                <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-medium text-xl text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 font-medium mb-2">{member.position}</p>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Unsere Werte */}
        <motion.div 
          className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 z-10"
          {...fadeIn}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl"></div>
          
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
            Unsere Werte
          </h2>
          
          <p className="text-lg text-gray-300 mb-8">
            Wir glauben an das, was wir tun – und daran, dass echte Qualität für sich selbst spricht. Unsere Plattform 
            vereint das Beste der deutschen Industrie, des Handwerks und der Technologie mit einer globalen Vision: 
            Zuverlässigkeit, Fairness und Transparenz in jeder Geschäftsbeziehung.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
                variants={cardVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
              >
                <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="font-medium text-xl text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Standort */}
        <motion.div 
          className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 z-10"
          {...fadeIn}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl"></div>
          
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
            Unser Standort
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <p className="text-lg text-gray-300 mb-4">
                Mit unserem Hauptsitz in Kairo verbinden wir Europa und den Nahen Osten als natürliche Brücke zwischen 
                verschiedenen Märkten und Kulturen. Von hier aus koordinieren wir unser wachsendes Netzwerk mit Partnern in:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-900/50 rounded-full flex items-center justify-center">
                    <span className="text-blue-400 text-sm">✓</span>
                  </div>
                  <span>Deutschland (Berlin, München, Hamburg)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-900/50 rounded-full flex items-center justify-center">
                    <span className="text-blue-400 text-sm">✓</span>
                  </div>
                  <span>Vereinigte Arabische Emirate (Dubai)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-900/50 rounded-full flex items-center justify-center">
                    <span className="text-blue-400 text-sm">✓</span>
                  </div>
                  <span>Saudi-Arabien (Riad)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-900/50 rounded-full flex items-center justify-center">
                    <span className="text-blue-400 text-sm">✓</span>
                  </div>
                  <span>Südostasien (Singapur)</span>
                </li>
              </ul>
            </div>
            <div className="flex-1 bg-gray-800/70 p-6 rounded-lg border border-gray-700">
              <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Buildings className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="font-medium text-xl text-white text-center mb-4">Hauptbüro Kairo</h3>
              <p className="text-gray-400 text-center">
                Nile Tower, 21. Etage<br />
                Corniche El Nil, Kairo<br />
                Ägypten<br /><br />
                <span className="text-blue-400">info@deutsche-qualitaet-global.com</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Machen Sie mit */}
        <motion.div 
          className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 z-10 text-center"
          {...fadeIn}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl"></div>
          
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
            Werden Sie Teil unserer Vision
          </h2>
          
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Ob als deutscher Produzent, internationaler Händler oder interessierter Partner – wir freuen uns darauf, 
            mit Ihnen zusammenzuarbeiten und neue Maßstäbe im internationalen Handel zu setzen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center justify-center gap-1"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
              whileTap={{ scale: 0.95 }}
            >
              Kontakt aufnehmen
            </motion.button>
            <motion.button 
              className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 shadow-[0_0_10px_rgba(107,114,128,0.3)] flex items-center justify-center gap-1"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Mehr erfahren
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}