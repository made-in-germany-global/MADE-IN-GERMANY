import React, { useState } from 'react';

type PricingTier = {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyMonthlyPrice: number; // Price per month when paying yearly
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

const MembershipTiers: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<string>('premium');
  const [billingCycle, setBillingCycle] = useState<'yearly' | 'monthly'>('yearly');
  const [expandedFeatures, setExpandedFeatures] = useState<boolean>(false);

  const tiers: PricingTier[] = [
    {
      id: 'basic',
      name: 'Basic',
      monthlyPrice: 49.99 * 1.3, // 30% more for monthly billing
      yearlyMonthlyPrice: 49.99, // Monthly equivalent when paying yearly
      shortDescription: 'Für Einsteiger und persönliche Nutzung',
      highlightedFeatures: [
        'Unternehmensprofil',
        'Begrenzter Produkt-Upload',
        'Zugang zur Business-Community',
        'Standard Support (E-Mail / Chat)'
      ],
      detailedFeatures: [
        {
          category: 'Profil & Produkte',
          features: [
            { text: 'Unternehmensprofil', available: true },
            { text: 'Produkt-Upload (begrenzt)', available: true },
            { text: 'Länder-Subdomains', available: false },
            { text: 'Priorisierte Listung', available: false }
          ]
        },
        {
          category: 'Community & Support',
          features: [
            { text: 'Zugang zur Business-Community', available: true },
            { text: 'Standard Support', available: true },
            { text: 'Individuelles Beratungsgespräch', available: false },
            { text: 'VIP-Support', available: false }
          ]
        },
        {
          category: 'KI-Tools',
          features: [
            { text: 'AI Text Assistant', available: false },
            { text: 'AI Bildgenerator', available: false }
          ]
        },
        {
          category: 'Marketing',
          features: [
            { text: 'Basis-Sichtbarkeit', available: true },
            { text: 'Priorisierte Listung in Branchenkatalogen', available: false }
          ]
        }
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      monthlyPrice: 149.99 * 1.3, // 30% more for monthly billing
      yearlyMonthlyPrice: 149.99, // Monthly equivalent when paying yearly
      shortDescription: 'Für Fortgeschrittene und intensive Nutzung',
      badgeText: 'Beliebt',
      highlightedFeatures: [
        'Erweiterter Produkt-Upload',
        '1 Länder-Subdomain inklusive',
        'Quartalsberatung',
        'AI Text Assistant (mehrsprachig)'
      ],
      detailedFeatures: [
        {
          category: 'Profil & Produkte',
          features: [
            { text: 'Unternehmensprofil', available: true },
            { text: 'Erweiterter Produkt-Upload', available: true },
            { text: '1 Länder-Subdomain inklusive', available: true },
            { text: 'Priorisierte Listung (optional)', available: true }
          ]
        },
        {
          category: 'Community & Support',
          features: [
            { text: 'Zugang zur Business-Community', available: true },
            { text: 'Priorisierter Support', available: true },
            { text: 'Beratungsgespräch (1x/Quartal)', available: true },
            { text: 'VIP-Support', available: false }
          ]
        },
        {
          category: 'KI-Tools',
          features: [
            { text: 'AI Text Assistant (mehrsprachig)', available: true },
            { text: 'AI Bildgenerator', available: false }
          ]
        },
        {
          category: 'Marketing',
          features: [
            { text: 'Erweiterte Sichtbarkeit', available: true },
            { text: 'Priorisierte Listung in Branchenkatalogen (optional)', available: true }
          ]
        }
      ]
    },
    {
      id: 'vip',
      name: 'VIP',
      monthlyPrice: 499.99 * 1.3, // 30% more for monthly billing
      yearlyMonthlyPrice: 499.99, // Monthly equivalent when paying yearly
      shortDescription: 'Für Profis und Unternehmen',
      highlightedFeatures: [
        'Unbegrenzter Produkt-Upload',
        'Mehrere Länder-Subdomains frei wählbar',
        'Monatliche Beratung',
        'Alle KI-Tools inklusive'
      ],
      detailedFeatures: [
        {
          category: 'Profil & Produkte',
          features: [
            { text: 'Unternehmensprofil', available: true },
            { text: 'Unbegrenzter Produkt-Upload', available: true },
            { text: 'Mehrere Länder-Subdomains frei wählbar', available: true },
            { text: 'Priorisierte Listung inklusive', available: true }
          ]
        },
        {
          category: 'Community & Support',
          features: [
            { text: 'Zugang zur Business-Community', available: true },
            { text: 'VIP-Support', available: true },
            { text: 'Monatliches Beratungsgespräch', available: true },
            { text: 'Dedizierter Account Manager', available: true }
          ]
        },
        {
          category: 'KI-Tools',
          features: [
            { text: 'AI Text Assistant (mehrsprachig)', available: true },
            { text: 'AI Bildgenerator', available: true }
          ]
        },
        {
          category: 'Marketing',
          features: [
            { text: 'Premium-Sichtbarkeit', available: true },
            { text: 'Priorisierte Listung in Branchenkatalogen inklusive', available: true }
          ]
        }
      ]
    }
  ];

  const handleSelectTier = (tierId: string) => {
    setSelectedTier(tierId);
    setExpandedFeatures(true);
  };

  const handleToggleFeatures = () => {
    setExpandedFeatures(!expandedFeatures);
  };

  const handleSubscribe = () => {
    const selectedTierInfo = tiers.find(tier => tier.id === selectedTier);
    
    if (billingCycle === 'yearly') {
      const yearlyPrice = selectedTierInfo?.yearlyMonthlyPrice! * 12;
      alert(`Sie haben das ${selectedTierInfo?.name}-Paket mit jährlicher Zahlung (${yearlyPrice.toFixed(2)}€) ausgewählt!`);
    } else {
      alert(`Sie haben das ${selectedTierInfo?.name}-Paket mit monatlicher Zahlung (${selectedTierInfo?.monthlyPrice.toFixed(2)}€) ausgewählt!`);
    }
  };

  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === 'yearly' ? 'monthly' : 'yearly');
  };

  const selectedTierData = tiers.find(tier => tier.id === selectedTier);

  // Calculate savings percentage
  const savingsPercentage = 30;

  return (
    <div className="bg-[#0B111F] py-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Werde Mitglied bei MADE IN GERMANY © 
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Entdecke deine Vorteile als Basic, Premium oder VIP-Mitglied – mit Zugang zu exklusiven Tools, KI-gestützten Services & internationaler Sichtbarkeit.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="mt-8 flex justify-center">
          <div className="relative bg-gray-800 p-1 rounded-lg inline-flex">
            <button
              onClick={toggleBillingCycle}
              className={`px-4 py-2 text-sm font-medium rounded-md focus:outline-none ${
                billingCycle === 'yearly' ? 'bg-blue-600 text-white' : 'text-gray-300'
              }`}
            >
              Jährlich
              {billingCycle === 'yearly' && (
                <span className="ml-2 bg-blue-800 text-xs px-2 py-1 rounded-full">
                  Spare {savingsPercentage}%
                </span>
              )}
            </button>
            <button
              onClick={toggleBillingCycle}
              className={`px-4 py-2 text-sm font-medium rounded-md focus:outline-none ${
                billingCycle === 'monthly' ? 'bg-blue-600 text-white' : 'text-gray-300'
              }`}
            >
              Monatlich
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0">
          {tiers.map((tier) => {
            const isActive = selectedTier === tier.id;
            const displayPrice = billingCycle === 'yearly' ? tier.yearlyMonthlyPrice : tier.monthlyPrice;
            
            return (
              <div
                key={tier.id}
                className={`rounded-lg shadow-lg flex flex-col transition-all duration-300 ${
                  isActive 
                    ? 'border-2 border-blue-500 bg-gray-800 transform scale-105 z-10' 
                    : 'border border-gray-700 bg-gray-900 hover:border-gray-500'
                }`}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{tier.name}</h3>
                      <p className="mt-2 text-gray-300">{tier.shortDescription}</p>
                    </div>
                    {tier.badgeText && (
                      <span className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-blue-900 text-blue-200">
                        {tier.badgeText}
                      </span>
                    )}
                  </div>
                  <div className="mt-6 flex items-baseline">
                    <span className="text-5xl font-extrabold text-white">
                      {displayPrice.toFixed(2)}€
                    </span>
                    <span className="text-lg font-medium text-gray-400 ml-2">
                      / Monat
                    </span>
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
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                        <span className="ml-3 text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6">
                    <button
                      onClick={() => handleSelectTier(tier.id)}
                      className={`w-full flex justify-center py-3 px-4 border rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                        isActive
                          ? 'bg-blue-600 text-white hover:bg-blue-700 border-transparent'
                          : 'border-gray-600 bg-gray-800 text-gray-200 hover:bg-gray-700'
                      }`}
                    >
                      {isActive ? 'Ausgewählt' : 'Auswählen'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expanded features section */}
        <div className={`mt-16 transition-all duration-300 ${expandedFeatures ? 'opacity-100' : 'opacity-50'}`}>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-white">
              {selectedTierData?.name}-Paket: Alle Features im Detail
            </h3>
            <button 
              onClick={handleToggleFeatures}
              className="text-blue-400 hover:text-blue-300 flex items-center"
            >
              {expandedFeatures ? 'Weniger anzeigen' : 'Mehr anzeigen'}
              <svg 
                className={`ml-2 h-5 w-5 transition-transform ${expandedFeatures ? 'transform rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
          {expandedFeatures && selectedTierData && (
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {selectedTierData.detailedFeatures.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="space-y-4">
                    <h4 className="font-semibold text-lg text-blue-400 border-b border-gray-700 pb-2">
                      {category.category}
                    </h4>
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
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M5 13l4 4L19 7" 
                              />
                            </svg>
                          ) : (
                            <svg 
                              className="flex-shrink-0 h-5 w-5 text-gray-500 mt-1" 
                              xmlns="http://www.w3.org/2000/svg" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor" 
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M6 18L18 6M6 6l12 12" 
                              />
                            </svg>
                          )}
                          <span className={`ml-3 ${feature.available ? 'text-gray-300' : 'text-gray-500'}`}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* KI-Tools Info Section */}
        
      </div>
    </div>
  );
};

export default MembershipTiers;