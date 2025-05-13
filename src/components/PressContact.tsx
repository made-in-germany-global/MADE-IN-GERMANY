import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, FileText, Info, Newspaper, Users, Globe, Calendar, BookOpen } from 'lucide-react';
import { Tooltip } from 'react-tooltip';

const PressContactPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col items-center w-full px-4 space-y-10 py-12 bg-[#FFFFFF] font-inter">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto w-full"
      >
        <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 z-10">
          <div
            className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"
            aria-hidden="true"
          ></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
            Presse Kontakt
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Made in Germany ist die führende Plattform für deutsche Fertigungsinnovationen, die weltweit Pionierarbeit in den Bereichen Nachhaltigkeit, Technologie und Qualität leistet. Unser Presseteam freut sich darauf, mit Journalist:innen, Redakteur:innen, Blogger:innen und Medienvertreter:innen zusammenzuarbeiten, um die Geschichten unserer Partner und die Zukunft der Industrie zu erzählen.
          </p>
          <p className="text-base text-gray-300 mb-8">
            Von exklusiven Einblicken in die deutsche Industrie bis hin zu globalen Trends – wir bieten Medienpartner:innen umfassende Ressourcen und direkten Zugang zu unseren Expert:innen. Lassen Sie uns gemeinsam die nächste große Geschichte gestalten!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              onClick={openModal}
              aria-label="Kontaktieren Sie uns"
            >
              Jetzt Kontakt aufnehmen
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
              whileTap={{ scale: 0.95 }}
              href="/media-kit"
              className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 text-center shadow-[0_0_10px_rgba(107,114,128,0.3)]"
              aria-label="Media Kit ansehen"
            >
              Media Kit ansehen
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* Section 1: Our Press Services */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-7xl mx-auto w-full"
      >
        <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 z-10">
          <div
            className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"
            aria-hidden="true"
          ></div>
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
            Unsere Presse-Dienstleistungen
          </h2>
          <p className="text-base text-gray-300 mb-8">
            Unser Presseteam ist darauf spezialisiert, Medienvertreter:innen mit präzisen, aktuellen und umfassenden Informationen zu versorgen. Wir fördern transparente Kommunikation und bieten maßgeschneiderte Inhalte, um Ihre Berichterstattung zu unterstützen – von globalen Industrieeinblicken bis hin zu lokalen Erfolgsgeschichten.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Newspaper className="w-12 h-12 text-blue-400" />,
                title: 'Pressemitteilungen',
                description: 'Aktuelle Nachrichten, offizielle Statements und detaillierte Updates zu unseren Projekten und Partnerschaften.',
              },
              {
                icon: <FileText className="w-12 h-12 text-blue-400" />,
                title: 'Media Kit',
                description: 'Umfassendes Material inklusive Logos, hochauflösender Bilder, Fact Sheets und Unternehmensprofilen.',
              },
              {
                icon: <Users className="w-12 h-12 text-blue-400" />,
                title: 'Interviews',
                description: 'Direkter Zugang zu unseren Führungskräften und Expert:innen für exklusive Zitate und Hintergrundgespräche.',
              },
              {
                icon: <BookOpen className="w-12 h-12 text-blue-400" />,
                title: 'Branchenberichte',
                description: 'Detaillierte Analysen und Whitepapers zu Trends in der Fertigungsindustrie und Nachhaltigkeit.',
              },
              {
                icon: <Globe className="w-12 h-12 text-blue-400" />,
                title: 'Maßgeschneiderte Briefings',
                description: 'Individuell zugeschnittene Presseinformationen für Ihre Zielgruppe und Region.',
              },
              {
                icon: <Calendar className="w-12 h-12 text-blue-400" />,
                title: 'Presseveranstaltungen',
                description: 'Einladungen zu exklusiven Events, Webinaren und Produktvorstellungen.',
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
              >
                <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-300 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-400">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section 2: Contact Information */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-7xl mx-auto w-full"
      >
        <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 z-10">
          <div
            className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"
            aria-hidden="true"
          ></div>
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
            Kontaktieren Sie uns
          </h2>
          <p className="text-base text-gray-300 mb-8">
            Unser Presseteam ist weltweit für Sie da, um Ihre Anfragen schnell und präzise zu beantworten. Ob Sie Informationen für eine Story benötigen oder ein Interview vereinbaren möchten, wir sind Ihr direkter Ansprechpartner. Bitte geben Sie Ihr Medium, Thema und Dringlichkeit an, um eine optimale Bearbeitung zu gewährleisten.
          </p>
          <p className="text-sm text \text-gray-400 mb-6">
            **Antwortzeiten**: Dringende Anfragen (z. B. tagesaktuelle Berichterstattung) innerhalb von 4 Stunden, Standardanfragen innerhalb von 24 Stunden (werktags).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
              whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
            >
              <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-12 h-12 text-blue-400" />
              </div>
              <p className="text-gray-300 font-medium">Globaler Pressecontact</p>
              <p className="text-gray-300">E-Mail: <a href="mailto:press@made-in-germany.global" className="text-blue-400 hover:underline">press@made-in-germany.global</a></p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
              whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
            >
              <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-12 h-12 text-blue-400" />
              </div>
              <p className="text-gray-300 font-medium">Telefon (Europa)</p>
              <p className="text-gray-300"><a href="tel:+490000000000" className="text-blue-400 hover:underline">+49 (0) XXX / XXXXXXX</a></p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
              whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
            >
              <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-12 h-12 text-blue-400" />
              </div>
              <p className="text-gray-300 font-medium">Regionale Kontakte</p>
              <p className="text-gray-300">Americas: <a href="mailto:press.americas@made-in-germany.global" className="text-blue-400 hover:underline">press.americas@made-in-germany.global</a></p>
              <p className="text-gray-300">Asia: <a href="mailto:press.asia@made-in-germany.global" className="text-blue-400 hover:underline">press.asia@made-in-germany.global</a></p>
            </motion.div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              onClick={openModal}
              aria-label="Zum Presseverteiler anmelden"
            >
              Zum Presseverteiler anmelden
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Section 3: Media Guidelines */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="max-w-7xl mx-auto w-full"
      >
        <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 z-10">
          <div
            className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"
            aria-hidden="true"
          ></div>
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
            Medienrichtlinien
          </h2>
          <p className="text-base text-gray-300 mb-8">
            Wir unterstützen Ihre Berichterstattung mit klaren Richtlinien und hochwertigen Materialien. Erfahren Sie mehr über die Nutzung unserer Inhalte, den Umgang mit embargoed Material und wie Sie exklusive Inhalte anfordern können.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300 mb-6"
            whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
          >
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mr-4">
                <FileText className="w-12 h-12 text-blue-400" />
              </div>
              <h3 className="text-xl font-medium text-gray-300">Unser Media Kit</h3>
            </div>
            <p className="text-sm text-gray-400">
              Unser Media Kit enthält hochauflösende Bilder, Logos, Unternehmensprofile, Fact Sheets und Biografien unserer Führungskräfte. Alle Materialien sind für die redaktionelle Nutzung optimiert und in mehreren Formaten verfügbar.
            </p>
            <span
              data-tooltip-id="media-kit-tooltip"
              data-tooltip-content="Kontaktieren Sie uns, um das Media Kit in Ihrer bevorzugten Sprache zu erhalten."
              className="text-blue-400 text-sm cursor-pointer hover:underline mt-2 inline-block"
            >
              Mehr erfahren
            </span>
            <Tooltip id="media-kit-tooltip" place="top" className="relative w-64 rounded-md bg-gray-800 border border-gray-700 shadow-xl p-2 text-sm text-gray-300" style={{ transform: 'translateX(-50%)' }} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300 mb-6"
            whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
          >
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mr-4">
                <Info className="w-12 h-12 text-blue-400" />
              </div>
              <h3 className="text-xl font-medium text-gray-300">Nutzungsrechte & Embargos</h3>
            </div>
            <p className="text-sm text-gray-400">
              Die Nutzung von Bildern, Texten oder Logos aus unserem Media Kit ist nur mit vorheriger schriftlicher Genehmigung gestattet. Embargoed Inhalte dürfen erst nach Freigabe veröffentlicht werden. Bitte kontaktieren Sie unser Presseteam für Details.
            </p>
            <span
              data-tooltip-id="usage-tooltip"
              data-tooltip-content="Embargoed Inhalte werden Ihnen mit klaren Veröffentlichungsdaten bereitgestellt."
              className="text-blue-400 text-sm cursor-pointer hover:underline mt-2 inline-block"
            >
              Mehr erfahren
            </span>
            <Tooltip id="usage-tooltip" place="top" className="relative w-64 rounded-md bg-gray-800 border border-gray-700 shadow-xl p-2 text-sm text-gray-300" style={{ transform: 'translateX(-50%)' }} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
            whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
          >
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mr-4">
                <Newspaper className="w-12 h-12 text-blue-400" />
              </div>
              <h3 className="text-xl font-medium text-gray-300">Exklusive Inhalte</h3>
            </div>
            <p className="text-sm text-gray-400">
              Interessiert an exklusiven Geschichten oder frühzeitigem Zugang zu neuen Produkten? Unser Team kann maßgeschneiderte Inhalte für Ihre Publikation bereitstellen. Kontaktieren Sie uns, um Details zu besprechen.
            </p>
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
              whileTap={{ scale: 0.95 }}
              href="/media-kit"
              className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 text-center shadow-[0_0_10px_rgba(107,114,128,0.3)]"
              aria-label="Media Kit herunterladen"
            >
              Media Kit herunterladen
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              onClick={openModal}
              aria-label="Zum Presseverteiler anmelden"
            >
              Zum Presseverteiler anmelden
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Onboarding Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeModal} aria-hidden="true"></div>
          <motion.div
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl ring-1 ring-white/20 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
              Presseverteiler Anmeldung
            </h2>
            <p className="text-base text-gray-300 mb-6">
              Melden Sie sich für unseren Presseverteiler an, um regelmäßige Updates, Pressemitteilungen und exklusive Einladungen zu unseren Veranstaltungen zu erhalten. Bitte füllen Sie die folgenden Felder aus.
            </p>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Vollständiger Name"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Vollständiger Name"
              />
              <input
                type="email"
                placeholder="E-Mail-Adresse"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="E-Mail-Adresse"
              />
              <input
                type="text"
                placeholder="Medium / Publikation"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Medium / Publikation"
              />
              <input
                type="text"
                placeholder="Region (z.B. Europa, Americas)"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Region"
              />
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                onClick={closeModal}
                aria-label="Anmelden"
              >
                Anmelden
              </motion.button>
            </div>
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
              onClick={closeModal}
              aria-label="Modal schließen"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default PressContactPage;