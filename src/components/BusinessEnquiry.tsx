import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Building, Users, Check, ChevronRight, Send } from 'lucide-react';

export default function BusinessEnquirySection() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    inquiryType: 'product'
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        company: '',
        name: '',
        email: '',
        phone: '',
        message: '',
        inquiryType: 'product'
      });
    }, 5000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: index => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: 0.4 + index * 0.1,
        duration: 0.5
      }
    })
  };

  const enquiryTypes = [
    {
      icon: <Building size={24} />,
      title: "Produktanfragen",
      description: "Erkundigen Sie sich nach spezifischen Produkten oder Dienstleistungen unserer Partner."
    },
    {
      icon: <Users size={24} />,
      title: "Kooperationswünsche",
      description: "Teilen Sie uns Ihre Ideen für potenzielle Kooperationen mit unseren Herstellern mit."
    },
    {
      icon: <Mail size={24} />,
      title: "Vertriebsanfragen",
      description: "Kontaktieren Sie uns bezüglich Vertriebsmöglichkeiten oder Partnerschaften."
    }
  ];

  const benefits = [
    "Zentrale Anfragestelle für alle Partner",
    "Vertrauliche Behandlung garantiert",
    "Schnelle Rückmeldung innerhalb von 48 Stunden",
    "Direkter Kontakt zu passenden Herstellern"
  ];

  return (
    <div className="flex flex-col items-center w-full px-4 space-y-10 py-12 bg-white font-inter">
      {/* Hero Section */}
      <motion.section 
        className="relative w-full max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
          <div className="relative z-10 py-8 px-6 md:px-12 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
                Business Enquiry
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                Richten Sie hier gezielt Ihre Produktanfragen oder Kooperationswünsche an unser zentrales Team. Wir prüfen alle Anfragen sorgfältig und leiten diese an passende Hersteller oder Vertriebsstellen weiter.
              </p>
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.15 }}
                  >
                    <span className="mr-2 text-blue-400"><Check size={18} /></span>
                    {benefit}
                  </motion.li>
                ))}
              </ul>
              <motion.button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium flex items-center shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Mehr erfahren</span>
                <ChevronRight size={18} className="ml-2" />
              </motion.button>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <motion.div 
                className="w-full max-w-md bg-gray-800/50 p-6 rounded-lg border border-gray-700"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Mail size={32} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-medium text-center text-white mb-2">Vertrauliche Kommunikation</h3>
                <p className="text-gray-400 text-center">
                  Wir garantieren eine schnelle und vertrauliche Bearbeitung aller Geschäftsanfragen durch unser spezialisiertes Team.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Enquiry Types Grid */}
      <motion.section 
        className="w-full max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 text-center"
          variants={itemVariants}
        >
          Wie können wir Ihnen helfen?
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={itemVariants}
        >
          {enquiryTypes.map((type, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
              custom={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
            >
              <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-400">{type.icon}</span>
              </div>
              <h3 className="font-medium text-xl text-white mb-2">{type.title}</h3>
              <p className="text-gray-400">{type.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Contact Form */}
      <motion.section 
        className="w-full max-w-7xl mx-auto bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
          <div className="relative z-10 py-8 px-6 md:px-12">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 text-center">
              Kontaktieren Sie uns
            </h2>
            <p className="text-gray-300 text-center max-w-2xl mx-auto mb-8">
              Füllen Sie das folgende Formular aus, um Ihre Anfrage zu stellen. Wir garantieren eine vertrauliche Behandlung und werden uns innerhalb von 48 Stunden bei Ihnen melden.
            </p>

            {formSubmitted ? (
              <motion.div 
                className="bg-green-900/50 border border-green-700 rounded-lg p-6 text-center max-w-xl mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-16 h-16 bg-green-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Check size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Anfrage erfolgreich gesendet!</h3>
                <p className="text-gray-300">
                  Vielen Dank für Ihre Anfrage. Unser Team wird sich innerhalb von 48 Stunden mit Ihnen in Verbindung setzen.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="company" className="block text-gray-300 mb-2">Unternehmen *</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">E-Mail *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-300 mb-2">Telefon</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-300 mb-2">Art der Anfrage *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <label className={`flex items-center p-4 rounded-lg cursor-pointer border ${formData.inquiryType === 'product' ? 'border-blue-500 bg-blue-900/30' : 'border-gray-700 bg-gray-800/50'}`}>
                      <input
                        type="radio"
                        name="inquiryType"
                        value="product"
                        checked={formData.inquiryType === 'product'}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <Building size={20} className="text-blue-400 mr-2" />
                      <span className="text-white">Produktanfrage</span>
                    </label>
                    <label className={`flex items-center p-4 rounded-lg cursor-pointer border ${formData.inquiryType === 'cooperation' ? 'border-blue-500 bg-blue-900/30' : 'border-gray-700 bg-gray-800/50'}`}>
                      <input
                        type="radio"
                        name="inquiryType"
                        value="cooperation"
                        checked={formData.inquiryType === 'cooperation'}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <Users size={20} className="text-blue-400 mr-2" />
                      <span className="text-white">Kooperation</span>
                    </label>
                    <label className={`flex items-center p-4 rounded-lg cursor-pointer border ${formData.inquiryType === 'distribution' ? 'border-blue-500 bg-blue-900/30' : 'border-gray-700 bg-gray-800/50'}`}>
                      <input
                        type="radio"
                        name="inquiryType"
                        value="distribution"
                        checked={formData.inquiryType === 'distribution'}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <Mail size={20} className="text-blue-400 mr-2" />
                      <span className="text-white">Vertrieb</span>
                    </label>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Ihre Nachricht *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <div className="flex items-center mb-6">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="w-4 h-4 bg-gray-800 border-gray-700 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="privacy" className="ml-2 text-sm text-gray-400">
                    Ich bin damit einverstanden, dass meine Daten zur Bearbeitung meiner Anfrage gespeichert werden. *
                  </label>
                </div>

                <div className="text-center">
                  <motion.button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium flex items-center justify-center mx-auto shadow-lg"
                    whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Anfrage senden</span>
                    <Send size={18} className="ml-2" />
                  </motion.button>
                </div>
              </form>
            )}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        className="w-full max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 text-center">
          Häufig gestellte Fragen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              question: "Wie schnell werden Anfragen bearbeitet?",
              answer: "Alle Anfragen werden innerhalb von 48 Stunden bearbeitet. Bei komplexeren Anliegen kann es etwas länger dauern, Sie werden jedoch über den Status informiert."
            },
            {
              question: "Wie wird die Vertraulichkeit gewährleistet?",
              answer: "Alle Informationen werden streng vertraulich behandelt und nur mit Ihrem ausdrücklichen Einverständnis an relevante Partner weitergegeben. Wir halten uns an die DSGVO-Richtlinien."
            },
            {
              question: "Kann ich spezifische Hersteller kontaktieren?",
              answer: "Ja, Sie können in Ihrer Anfrage spezifische Hersteller nennen. Wir helfen Ihnen gerne dabei, den richtigen Kontakt herzustellen."
            },
            {
              question: "Welche Informationen werden benötigt?",
              answer: "Für eine effiziente Bearbeitung benötigen wir Informationen zu Ihrem Unternehmen, Kontaktdaten und eine detaillierte Beschreibung Ihres Anliegens. Je spezifischer, desto besser."
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
            >
              <h3 className="font-medium text-xl text-white mb-2">{faq.question}</h3>
              <p className="text-gray-400">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}