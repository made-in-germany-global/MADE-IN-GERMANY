import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { Handshake, BarChart2, Percent, Globe, Calendar, Award, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

type PricingTier = {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyMonthlyPrice: number;
  shortDescription: string;
  badgeText?: string;
  highlightedFeatures: string[];
  detailedFeatures: {
    category: string;
    features: {
      text: string;
      available: boolean;
    }[];
  }[];
};

// Static Translations
const TRANSLATIONS = {
  de: {
    hero: {
      headline: 'Gemeinsam wachsen – Dein Erfolg ist unser Erfolg',
      subtitle: 'Erlebe die Kraft der Zusammenarbeit. Dein Erfolg steigt, wenn wir alle gemeinsam wachsen.',
      communityNote: 'Schon über 120 Hersteller dabei – werde Teil der Bewegung',
    },
    pricing: {
      title: 'Gemeinsam für Qualität – gemeinsam für "Made in Germany"',
      intro:
        'Jeder Partner auf unserer Plattform trägt dazu bei, Deutschlands Innovationskraft, Verlässlichkeit und Weltruf weiter auszubauen. Mit deinem Engagement stärkst du nicht nur dein eigenes Unternehmen – du bist Teil einer Bewegung, die zeigt, wofür „Made in Germany“ heute und in Zukunft steht: Qualität, Innovation und Vertrauen.',
      cta: 'Wähle den Plan, der am besten zu deinen Zielen passt – und wachse mit uns gemeinsam.',
      premiumNote: 'Stand-alone-Kampagnen erfordern das Premium-Paket.',
      campaignButton: 'Kampagne anfragen',
      subscribeButton: 'Jetzt buchen',
      tooltips: {
        basic: 'Ideal für Einsteiger, die erste Schritte in unserer Community machen möchten.',
        plus: 'Perfekt für wachsende Unternehmen mit Fokus auf erweiterte Sichtbarkeit.',
        premium: 'Für globale Ambitionen mit exklusiven Tools und VIP-Support.',
        yearly: 'Spare 30% mit jährlicher Zahlung und profitiere von langfristiger Planung.',
        monthly: 'Flexible monatliche Zahlung ohne lange Bindung.',
        subscribe: 'Starte jetzt und werde Teil der "Made in Germany"-Bewegung!',
        campaign: 'Fordere eine maßgeschneiderte Marketingkampagne für dein Unternehmen an.',
      },
    },
    faq: {
      title: 'Häufig gestellte Fragen',
      items: [
        {
          question: 'Was unterscheidet die Pakete?',
          answer: 'Jedes Paket bietet unterschiedliche Features, von Basis-Sichtbarkeit bis hin zu globaler Reichweite und exklusiven KI-Tools.',
        },
        {
          question: 'Kann ich jederzeit wechseln?',
          answer: 'Ja, du kannst jederzeit zwischen den Paketen wechseln. Kontaktiere unseren Support für Details.',
        },
        {
          question: 'Was sind Stand-alone-Kampagnen?',
          answer: 'Das sind maßgeschneiderte Marketingkampagnen, die exklusiv für Premium-Mitglieder verfügbar sind.',
        },
      ],
    },
    testimonials: {
      title: 'Was unsere Partner sagen',
      items: [
        {
          name: 'Anna Schmidt, Tech GmbH',
          quote: 'Die Plattform hat unsere Reichweite verdoppelt und neue Märkte eröffnet!',
        },
        {
          name: 'Markus Weber, Auto AG',
          quote: 'Dank der Community haben wir starke Partnerschaften aufgebaut.',
        },
        {
          name: 'Sophie Müller, Design Co.',
          quote: 'Die KI-Tools im Premium-Paket sind ein Game-Changer für unser Marketing.',
        },
      ],
    },
    whyCommunity: {
      title: 'Warum unsere Gemeinschaft?',
      desc: 'Bei uns geht es um kollektives Wachstum, nicht nur um Einzelgewinne. Als Teil unseres Netzwerks schaffst du neue Möglichkeiten für dein Unternehmen und stärkst die gesamte Plattform.',
    },
    sharedSuccess: {
      title: 'Zusammen unschlagbar',
      desc: 'Gemeinsame Aktionen, Rabatte und Kooperationen maximieren unsere Reichweite und deinen Erfolg. Jeder Partner treibt unser Netzwerk voran.',
    },
    benefits: {
      title: 'Deine Vorteile als Partner',
      desc: 'Zusammenarbeit eröffnet exklusive Chancen. Entdecke, was du gewinnst:',
      items: [
        { title: 'Exklusive Rabatte', desc: 'Profitiere von Sonderaktionen für Partner.', icon: Percent },
        { title: 'Größere Reichweite', desc: 'Erreiche mehr Kunden durch gemeinsames Marketing.', icon: Globe },
        { title: 'Premium-Ressourcen', desc: 'Zugang zu Events und exklusiven Tools.', icon: Calendar },
        { title: 'Geteilter Erfolg', desc: 'Wachse mit der Plattform und teile den Erfolg.', icon: Award },
      ],
    },
    cta: {
      title: 'Werde Teil unseres Netzwerks',
      desc: 'Stärke dein Unternehmen und unsere Gemeinschaft. Jeder Schritt mit uns ist ein Schritt nach vorn.',
      button: 'Jetzt beitreten',
    },
  },
};

const CommunitySection = ({ language = 'de' }) => {
  const navigate = useNavigate();
  const translations = TRANSLATIONS[language] || TRANSLATIONS['de'];
  const [selectedTier, setSelectedTier] = useState<string>('premium');
  const [billingCycle, setBillingCycle] = useState<'yearly' | 'monthly'>('yearly');
  const [expandedFeatures, setExpandedFeatures] = useState<boolean>(false);
  const [showCampaignForm, setShowCampaignForm] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const tiers: PricingTier[] = [
    {
      id: 'basic',
      name: 'Basic',
      monthlyPrice: 49.99 * 1.3,
      yearlyMonthlyPrice: 49.99,
      shortDescription: 'Perfekt für Einsteiger',
      highlightedFeatures: [
        'Unternehmensprofil',
        'Begrenzter Produkt-Upload',
        'Zugang zur Community',
        'Standard-Support',
      ],
      detailedFeatures: [
        {
          category: 'Profil & Produkte',
          features: [
            { text: 'Unternehmensprofil', available: true },
            { text: 'Produkt-Upload (begrenzt)', available: true },
            { text: 'Länder-Subdomains', available: false },
            { text: 'Priorisierte Listung', available: false },
          ],
        },
        {
          category: 'Community & Support',
          features: [
            { text: 'Zugang zur Business-Community', available: true },
            { text: 'Standard-Support', available: true },
            { text: 'Individuelles Beratungsgespräch', available: false },
            { text: 'VIP-Support', available: false },
          ],
        },
        {
          category: 'KI-Tools',
          features: [
            { text: 'AI Text Assistant', available: false },
            { text: 'AI Bildgenerator', available: false },
          ],
        },
        {
          category: 'Marketing',
          features: [
            { text: 'Basis-Sichtbarkeit', available: true },
            { text: 'Priorisierte Listung in Branchenkatalogen', available: false },
          ],
        },
      ],
    },
    {
      id: 'plus',
      name: 'Plus',
      monthlyPrice: 149.99 * 1.3,
      yearlyMonthlyPrice: 149.99,
      shortDescription: 'Für wachsende Unternehmen',
      badgeText: 'Beliebt',
      highlightedFeatures: [
        'Erweiterter Produkt-Upload',
        '1 Länder-Subdomain',
        'Quartalsberatung',
        'AI Text Assistant',
      ],
      detailedFeatures: [
        {
          category: 'Profil & Produkte',
shema: true,
          features: [
            { text: 'Unternehmensprofil', available: true },
            { text: 'Erweiterter Produkt-Upload', available: true },
            { text: '1 Länder-Subdomain', available: true },
            { text: 'Priorisierte Listung (optional)', available: true },
          ],
        },
        {
          category: 'Community & Support',
          features: [
            { text: 'Zugang zur Business-Community', available: true },
            { text: 'Priorisierter Support', available: true },
            { text: 'Beratungsgespräch (1x/Quartal)', available: true },
            { text: 'VIP-Support', available: false },
          ],
        },
        {
          category: 'KI-Tools',
          features: [
            { text: 'AI Text Assistant (mehrsprachig)', available: true },
            { text: 'AI Bildgenerator', available: false },
          ],
        },
        {
          category: 'Marketing',
          features: [
            { text: 'Erweiterte Sichtbarkeit', available: true },
            { text: 'Priorisierte Listung in Branchenkatalogen (optional)', available: true },
          ],
        },
      ],
    },
    {
      id: 'premium',
      name: 'Premium',
      monthlyPrice: 499.99 * 1.3,
      yearlyMonthlyPrice: 499.99,
      shortDescription: 'Für globale Ambitionen',
      highlightedFeatures: [
        'Unbegrenzter Produkt-Upload',
        'Mehrere Länder-Subdomains',
        'Monatliche Beratung',
        'Alle KI-Tools',
      ],
      detailedFeatures: [
        {
          category: 'Profil & Produkte',
          features: [
            { text: 'Unternehmensprofil', available: true },
            { text: 'Unbegrenzter Produkt-Upload', available: true },
            { text: 'Mehrere Länder-Subdomains', available: true },
            { text: 'Priorisierte Listung', available: true },
          ],
        },
        {
          category: 'Community & Support',
          features: [
            { text: 'Zugang zur Business-Community', available: true },
            { text: 'VIP-Support', available: true },
            { text: 'Monatliches Beratungsgespräch', available: true },
            { text: 'Dedizierter Account Manager', available: true },
          ],
        },
        {
          category: 'KI-Tools',
          features: [
            { text: 'AI Text Assistant (mehrsprachig)', available: true },
            { text: 'AI Bildgenerator', available: true },
          ],
        },
        {
          category: 'Marketing',
          features: [
            { text: 'Premium-Sichtbarkeit', available: true },
            { text: 'Priorisierte Listung in Branchenkatalogen', available: true },
          ],
        },
      ],
    },
  ];

  const handleSelectTier = (tierId: string) => {
    setSelectedTier(tierId);
    setExpandedFeatures(true);
  };

  const handleToggleFeatures = () => {
    setExpandedFeatures(!expandedFeatures);
  };

  const handleSubscribe = (tier: PricingTier) => {
    if (billingCycle === 'yearly') {
      const yearlyPrice = tier.yearlyMonthlyPrice * 12;
      alert(`Sie haben das ${tier.name}-Paket mit jährlicher Zahlung (${yearlyPrice.toFixed(2)}€) ausgewählt!`);
    } else {
      alert(`Sie haben das ${tier.name}-Paket mit monatlicher Zahlung (${tier.monthlyPrice.toFixed(2)}€) ausgewählt!`);
    }
    navigate('/subscribe');
  };

  const handleCampaignRequest = () => {
    setShowCampaignForm(true);
  };

  const handleBenefitClick = (title: string) => {
    alert(`Erfahre mehr über ${title}! Kontaktiere uns für weitere Details.`);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === 'yearly' ? 'monthly' : 'yearly');
  };

  const handleTestimonialChange = (index: number) => {
    setCurrentTestimonial(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % translations.testimonials.items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [translations.testimonials.items.length]);

  const selectedTierData = tiers.find((tier) => tier.id === selectedTier);
  const savingsPercentage = 30;

  const handleNavigation = (path: string) => () => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-center w-full px-4 space-y-16 py-12 bg-[#FFFFF] font-inter">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"
        />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            {translations.hero.headline}
          </h1>
          <h2 className="text-2xl md:text-3xl mb-4 font-light text-gray-300">{translations.hero.subtitle}</h2>
          <p className="text-lg text-blue-400">{translations.hero.communityNote}</p>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"
        />
        <div className="relative z-10">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 sm:text-5xl">
              {translations.pricing.title}
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">{translations.pricing.intro}</p>
            <p className="mt-2 text-xl text-blue-400">{translations.pricing.cta}</p>
          </div>

          {/* Billing toggle */}
          <div className="mt-8 flex justify-center">
            <div className="relative bg-gray-800 p-1 rounded-lg inline-flex shadow-md">
              <motion.button
                onClick={toggleBillingCycle}
                className={`px-4 py-2 text-sm font-medium rounded-md focus:outline-none z-20 ${
                  billingCycle === 'yearly' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'text-gray-300'
                }`}
                data-tooltip-id="yearly-toggle"
                data-tooltip-content={translations.pricing.tooltips.yearly}
                whileHover={{ scale: 1.05 }}
              >
                Jährlich
                {billingCycle === 'yearly' && (
                  <span className="ml-2 bg-blue-900 text-xs px-2 py-1 rounded-full">
                    Spare {savingsPercentage}%
                  </span>
                )}
              </motion.button>
              <motion.button
                onClick={toggleBillingCycle}
                className={`px-4 py-2 text-sm font-medium rounded-md focus:outline-none z-20 ${
                  billingCycle === 'monthly' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'text-gray-300'
                }`}
                data-tooltip-id="monthly-toggle"
                data-tooltip-content={translations.pricing.tooltips.monthly}
                whileHover={{ scale: 1.05 }}
              >
                Monatlich
              </motion.button>
            </div>
          </div>

          {/* Pricing cards */}
          <div className="mt-12 space-y-6 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0">
            {tiers.map((tier) => {
              const isActive = selectedTier === tier.id;
              const displayPrice = billingCycle === 'yearly' ? tier.yearlyMonthlyPrice : tier.monthlyPrice;

              return (
                <motion.div
                  key={tier.id}
                  className={`rounded-2xl flex flex-col transition-all duration-300 z-20 ${
                    isActive
                      ? 'border-2 border-blue-500 bg-gray-800 transform scale-105 shadow-[0_0_20px_rgba(59,130,246,0.5)]'
                      : 'border border-gray-700 bg-gray-900 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                  }`}
                  whileHover={{ scale: 1.03, filter: 'brightness(1.1)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3
                          className="text-2xl font-semibold text-white"
                          data-tooltip-id={`tier-${tier.id}`}
                          data-tooltip-content={translations.pricing.tooltips[tier.id]}
                        >
                          {tier.name}
                        </h3>
                        <p className="mt-2 text-gray-300">{tier.shortDescription}</p>
                      </div>
                      {tier.badgeText && (
                        <span className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-blue-900 text-blue-200">
                          {tier.badgeText}
                        </span>
                      )}
                    </div>
                    <div className="mt-6 flex items-baseline">
                      <span className="text-5xl font-extrabold text-white">{displayPrice.toFixed(2)}€</span>
                      <span className="text-lg font-medium text-gray-400 ml-2">/ Monat</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="mt-2 text-sm text-blue-400">
                        Jährliche Zahlung: {(tier.yearlyMonthlyPrice * 12).toFixed(2)}€
                      </p>
                    )}
                    <ul className="mt-6 space-y-3">
                      {tier.highlightedFeatures.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <svg
                            className="flex-shrink-0 h-5 w-5 text-blue-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="ml-3 text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 space-y-4">
                      <motion.button
                        onClick={() => handleSubscribe(tier)}
                        className="w-full flex justify-center py-3 px-4 border rounded-md text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] z-20"
                        data-tooltip-id={`subscribe-${tier.id}`}
                        data-tooltip-content={translations.pricing.tooltips.subscribe}
                        whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                        animate={{ boxShadow: ['0 0 10px rgba(59,130,246,0.5)', '0 0 15px rgba(59,130,246,0.7)', '0 0 10px rgba(59,130,246,0.5)'] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      >
                        {translations.pricing.subscribeButton}
                      </motion.button>
                      {tier.id === 'premium' && (
                        <>
                          <p className="text-sm text-blue-400 text-center">{translations.pricing.premiumNote}</p>
                          <motion.button
                            onClick={handleCampaignRequest}
                            className="w-full flex justify-center py-3 px-4 border rounded-md text-sm font-medium border-gray-600 bg-gray-800 text-gray-200 hover:bg-gray-700 shadow-[0_0_10px_rgba(107,114,128,0.3)] z-20"
                            data-tooltip-id="campaign-button"
                            data-tooltip-content={translations.pricing.tooltips.campaign}
                            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                          >
                            {translations.pricing.campaignButton}
                          </motion.button>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16"
          >
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 text-center">
              {translations.faq.title}
            </h3>
            <div className="space-y-4 max-w-3xl mx-auto">
              {translations.faq.items.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center text-left text-lg font-medium text-white"
                  >
                    {faq.question}
                    <motion.div animate={{ rotate: activeFaq === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      {activeFaq === index ? <ChevronUp className="h-5 w-5 text-blue-400" /> : <ChevronDown className="h-5 w-5 text-blue-400" />}
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {activeFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 text-gray-300"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Campaign Request Form */}
          {showCampaignForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            >
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 max-w-md w-full mx-4 ring-1 ring-white/20 shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 text-white">Individuelle Kampagne anfragen</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Unternehmensname"
                    className="w-full p-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="E-Mail-Adresse"
                    className="w-full p-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <textarea
                    placeholder="Beschreiben Sie Ihre Kampagnenanforderungen"
                    className="w-full p-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                  ></textarea>
                  <div className="flex justify-end space-x-4">
                    <motion.button
                      onClick={() => setShowCampaignForm(false)}
                      className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
                      whileHover={{ scale: 1.05 }}
                    >
                      Abbrechen
                    </motion.button>
                    <motion.button
                      onClick={() => {
                        alert('Anfrage gesendet!');
                        setShowCampaignForm(false);
                      }}
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                      whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                    >
                      Senden
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Expanded features section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`mt-16 transition-all duration-300 ${expandedFeatures ? 'opacity-100' : 'opacity-50'}`}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                {selectedTierData?.name}-Paket: Alle Features im Detail
              </h3>
              <motion.button
                onClick={handleToggleFeatures}
                className="text-blue-400 hover:text-purple-400 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {expandedFeatures ? 'Weniger anzeigen' : 'Mehr anzeigen'}
                <motion.svg
                  className="ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ rotate: expandedFeatures ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>
            </div>
            {expandedFeatures && selectedTierData && (
              <div className="bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {selectedTierData.detailedFeatures.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="space-y-4">
                      <h4 className="font-semibold text-lg text-blue-400 border-b border-gray-700 pb-2">{category.category}</h4>
                      <ul className="space-y-3">
                        {category.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            {feature.available ? (
                              <svg
                                className="flex-shrink-0 h-5 w-5 text-green-400 mt-1"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            ) : (
                              <svg
                                className="flex-shrink-0 h-5 w-5 text-gray-500 mt-1"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            )}
                            <span className={`ml-3 ${feature.available ? 'text-gray-300' : 'text-gray-500'}`}>{feature.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonial Carousel */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear_gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"
        />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 text-center">
            {translations.testimonials.title}
          </h2>
          <div className="relative max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800 rounded-lg p-6 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
              >
                <p className="text-gray-300 italic">"{translations.testimonials.items[currentTestimonial].quote}"</p>
                <p className="mt-4 text-blue-400 font-semibold">{translations.testimonials.items[currentTestimonial].name}</p>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center mt-4 space-x-2">
              {translations.testimonials.items.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleTestimonialChange(index)}
                  className={`w-3 h-3 rounded-full ${currentTestimonial === index ? 'bg-blue-500' : 'bg-gray-600'}`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Why Community Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear_gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"
        />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8">
            {translations.whyCommunity.title}
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl">{translations.whyCommunity.desc}</p>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2">
              <motion.svg viewBox="0 0 200 200" className="w-full h-auto">
                <circle cx="100" cy="100" r="80" fill="none" stroke="#4CAF50" strokeWidth="8" />
                <motion.circle
                  cx="60"
                  cy="60"
                  r="20"
                  fill="#2196F3"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.circle
                  cx="140"
                  cy="60"
                  r="20"
                  fill="#2196F3"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.circle
                  cx="60"
                  cy="140"
                  r="20"
                  fill="#2196F3"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.circle
                  cx="140"
                  cy="140"
                  r="20"
                  fill="#2196F3"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
                <path
                  d="M60 60 L140 60 M60 140 L140 140 M60 60 L60 140 M140 60 L140 140"
                  stroke="#FFFFFF"
                  strokeWidth="4"
                />
              </motion.svg>
              <p className="text-center text-gray-300 mt-4">Ein Netzwerk, das wächst und verbindet.</p>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <motion.div
                className="relative w-40 h-40"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#374151" strokeWidth="10" />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="10"
                    strokeDasharray="283"
                    strokeDashoffset="0"
                    initial={{ strokeDashoffset: 283 }}
                    animate={{ strokeDashoffset: 50 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                  />
                  <text x="50" y="55" textAnchor="middle" fill="#FFFFFF" fontSize="20">
                    120+
                  </text>
                  <text x="50" y="70" textAnchor="middle" fill="#A1A1AA" fontSize="10">
                    Partner
                  </text>
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Shared Success Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear_gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"
        />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8">
            {translations.sharedSuccess.title}
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl">{translations.sharedSuccess.desc}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="bg-gray-800/50 rounded-lg p-6 shadow-[0_0_10px_rgba(59,130,246,0.3)]"
              whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
            >
              <BarChart2 size={24} className="text-blue-600 mb-4" />
              <h3 className="font-medium text-xl mb-3 text-white">Erfolgssteigerung</h3>
              <p className="text-gray-300">Gemeinsame Aktionen führen zu höherer Reichweite und Umsatz.</p>
            </motion.div>
            <motion.div
              className="bg-gray-800/50 rounded-lg p-6 shadow-[0_0_10px_rgba(59,130,246,0.3)]"
              whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
            >
              <Handshake size={24} className="text-green-600 mb-4" />
              <h3 className="font-medium text-xl mb-3 text-white">Kooperationen</h3>
              <p className="text-gray-300">Partner arbeiten zusammen, um neue Möglichkeiten zu schaffen.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear_gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"
        />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8">
            {translations.benefits.title}
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl">{translations.benefits.desc}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {translations.benefits.items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 cursor-pointer shadow-[0_0_10px_rgba(59,130,246,0.3)] z-20"
                data-tooltip-id={`benefit-${index}`}
                data-tooltip-content={item.title}
                onClick={() => handleBenefitClick(item.title)}
                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-blue-600" />
                </div>
                <h3 className="font-medium text-xl mb-3 text-white">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear_gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"
        />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8">
            {translations.cta.title}
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl">{translations.cta.desc}</p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNavigation('/join')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)] z-20"
            data-tooltip-id="cta-button"
            data-tooltip-content={translations.cta.button}
            animate={{ boxShadow: ['0 0 10px rgba(59,130,246,0.5)', '0 0 15px rgba(59,130,246,0.7)', '0 0 10px rgba(59,130,246,0.5)'] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            {translations.cta.button} <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
        </div>
      </motion.section>

      {/* Tooltips with Triangle Arrow */}
      <Tooltip
        id="yearly-toggle"
        place="top"
        effect="solid"
        className="relative w-64 rounded-md bg-gray-800 border border-gray-700 shadow-xl p-2 text-sm text-gray-300 transition-all duration-300 ease-in-out z-50"
        style={{ transform: 'translateX(-50%)' }}
        afterShow={() => {
          const tooltip = document.querySelector('[data-tooltip-id="yearly-toggle"]');
          if (tooltip) {
            tooltip.insertAdjacentHTML(
              'beforeend',
              '<div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-gray-700"></div>'
            );
          }
        }}
      />
      <Tooltip
        id="monthly-toggle"
        place="top"
        effect="solid"
        className="relative w-64 rounded-md bg-gray-800 border border-gray-700 shadow-xl p-2 text-sm text-gray-300 transition-all duration-300 ease-in-out z-50"
        style={{ transform: 'translateX(-50%)' }}
        afterShow={() => {
          const tooltip = document.querySelector('[data-tooltip-id="monthly-toggle"]');
          if (tooltip) {
            tooltip.insertAdjacentHTML(
              'beforeend',
              '<div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-gray-700"></div>'
            );
          }
        }}
      />
      <Tooltip
        id="campaign-button"
        place="top"
        effect="solid"
        className="relative w-64 rounded-md bg-gray-800 border border-gray-700 shadow-xl p-2 text-sm text-gray-300 transition-all duration-300 ease-in-out z-50"
        style={{ transform: 'translateX(-50%)' }}
        afterShow={() => {
          const tooltip = document.querySelector('[data-tooltip-id="campaign-button"]');
          if (tooltip) {
            tooltip.insertAdjacentHTML(
              'beforeend',
              '<div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-gray-700"></div>'
            );
          }
        }}
      />
      {tiers.map((tier) => (
        <Tooltip
          key={tier.id}
          id={`tier-${tier.id}`}
          place="top"
          effect="solid"
          className="relative w-64 rounded-md bg-gray-800 border border-gray-700 shadow-xl p-2 text-sm text-gray-300 transition-all duration-300 ease-in-out z-50"
          style={{ transform: 'translateX(-50%)' }}
          afterShow={() => {
            const tooltip = document.querySelector(`[data-tooltip-id="tier-${tier.id}"]`);
            if (tooltip) {
              tooltip.insertAdjacentHTML(
                'beforeend',
                '<div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-gray-700"></div>'
              );
            }
          }}
        />
      ))}
      {tiers.map((tier) => (
        <Tooltip
          key={tier.id}
          id={`subscribe-${tier.id}`}
          place="top"
          effect="solid"
          className="relative w-64 rounded-md bg-gray-800 border border-gray-700 shadow-xl p-2 text-sm text-gray-300 transition-all duration-300 ease-in-out z-50"
          style={{ transform: 'translateX(-50%)' }}
          afterShow={() => {
            const tooltip = document.querySelector(`[data-tooltip-id="subscribe-${tier.id}"]`);
            if (tooltip) {
              tooltip.insertAdjacentHTML(
                'beforeend',
                '<div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-gray-700"></div>'
              );
            }
          }}
        />
      ))}
      {translations.benefits.items.map((_, index) => (
        <Tooltip
          key={index}
          id={`benefit-${index}`}
          place="top"
          effect="solid"
          className="relative w-64 rounded-md bg-gray-800 border border-gray-700 shadow-xl p-2 text-sm text-gray-300 transition-all duration-300 ease-in-out z-50"
          style={{ transform: 'translateX(-50%)' }}
          afterShow={() => {
            const tooltip = document.querySelector(`[data-tooltip-id="benefit-${index}"]`);
            if (tooltip) {
              tooltip.insertAdjacentHTML(
                'beforeend',
                '<div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-gray-700"></div>'
              );
            }
          }}
        />
      ))}
      <Tooltip
        id="cta-button"
        place="top"
        effect="solid"
        className="relative w-64 rounded-md bg-gray-800 border border-gray-700 shadow-xl p-2 text-sm text-gray-300 transition-all duration-300 ease-in-out z-50"
        style={{ transform: 'translateX(-50%)' }}
        afterShow={() => {
          const tooltip = document.querySelector('[data-tooltip-id="cta-button"]');
          if (tooltip) {
            tooltip.insertAdjacentHTML(
              'beforeend',
              '<div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-gray-700"></div>'
            );
          }
        }}
      />
    </div>
  );
};

export default CommunitySection;