import React from 'react';
import { Users, Globe, Shield, Heart, Award } from 'lucide-react';

const HeroSection = () => (
  <section className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden mb-10">
    <div className="relative h-64 md:h-96 flex items-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
        src="made-in-germany-original.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-8">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          DEUTSCHE QUALITÄT WELTWEIT
        </h1>
        <h2 className="text-2xl md:text-3xl mb-4 font-light text-gray-300">
          Innovation, Präzision und Verlässlichkeit
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-300 leading-relaxed">
          Wir schaffen Brücken zwischen deutschen Premiumherstellern und internationalen Märkten. 
          Mit Fokus auf Qualität, Transparenz und langfristige Geschäftsbeziehungen setzen wir neue Standards.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center transition duration-300 shadow-lg z-20"
            aria-label="Qualität entdecken"
          >
            QUALITÄT ENTDECKEN
          </button>
          <button
            className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg hover:bg-gray-700 font-medium transition duration-300 shadow-lg z-20"
            aria-label="Mehr über Made in Germany erfahren"
          >
            MEHR ÜBER „MADE IN GERMANY" ERFAHREN
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default function UeberUnsSection() {
  const teamMembers = [
    {
      name: "Andreas Thommen",
      position: "Gründer & CEO",
      description: "CEO mit 35 Jahren internationaler Erfahrung, steht für Strategie, Unternehmertum und Verantwortung."
    },
    {
      name: "Thomas Weber",
      position: "Leiter Qualitätsmanagement",
      description: "Ehemaliger Qualitätsmanager bei deutschen Premiumherstellern."
    },
    {
      name: "Sarah El-Nagar",
      position: "Interkulturelle Beraterin",
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
    <section className="w-full px-4 py-12 font-inter bg-white">
      <HeroSection />
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Unsere Geschichte */}
        <div 
          className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-12 px-6 md:px-12 z-10"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl"></div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
                Unsere Geschichte
              </h2>
              <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
            </div>
            
            <div className="lg:w-2/3 text-gray-300 space-y-4">
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
          </div>
        </div>

        {/* Unsere Vision */}
        <div 
          className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-12 px-6 md:px-12 z-10"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl"></div>
          
          <div className="flex flex-col lg:flex-row-reverse gap-8">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
                Unsere Vision
              </h2>
              <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-blue-400" />
              </div>
            </div>
            
            <div className="lg:w-2/3 text-gray-300">
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
          </div>
        </div>

        {/* Unser Team */}
        <div 
          className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-12 px-6 md:px-12 z-10"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl"></div>
          
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 text-center">
            Unser Team
          </h2>
          
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto text-center">
            Unser Gründer lebt in Kairo – mit globalem Ausblick und einer tiefen Wertschätzung für deutsche Präzision. 
            Von dort aus koordinieren wir ein wachsendes internationales Netzwerk mit einem klaren Ziel: zuverlässige 
            Produkte zu den Menschen zu bringen, die sie brauchen, mit Respekt für lokale Gegebenheiten und einer globalen Perspektive.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-800/70 transition-all">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="font-medium text-xl text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 font-medium mb-2">{member.position}</p>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Unsere Werte */}
        <div 
          className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-12 px-6 md:px-12 z-10"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl"></div>
          
          <div className="flex flex-col gap-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
                Unsere Werte
              </h2>
              
              <p className="text-lg text-gray-300 mb-8">
                Wir glauben an das, was wir tun – und daran, dass echte Qualität für sich selbst spricht. Unsere Plattform 
                vereint das Beste der deutschen Industrie, des Handwerks und der Technologie mit einer globalen Vision: 
                Zuverlässigkeit, Fairness und Transparenz in jeder Geschäftsbeziehung.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20 group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-800/70 transition-all">
                    {value.icon}
                  </div>
                  <h3 className="font-medium text-xl text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Standort */}
        <div 
          className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-12 px-6 md:px-12 z-10"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl"></div>
          
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 text-center">
              Unser Standort
            </h2>
            
            <div className="flex flex-col lg:flex-row gap-12 items-stretch">
              <div className="flex-1">
                <div className="bg-gray-800/30 p-8 rounded-lg border border-gray-700 h-full flex flex-col justify-between">
                  <div>
                    <p className="text-lg text-gray-300 mb-6">
                      Mit unserem Hauptsitz in Kairo verbinden wir Europa und den Nahen Osten als natürliche Brücke zwischen 
                      verschiedenen Märkten und Kulturen. Von hier aus koordinieren wir unser wachsendes Netzwerk mit Partnern in:
                    </p>
                    <ul className="text-gray-300 space-y-4">
                      <li className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-400 text-sm">✓</span>
                        </div>
                        <span>Deutschland (Berlin, München, Hamburg)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-400 text-sm">✓</span>
                        </div>
                        <span>Vereinigte Arabische Emirate (Dubai)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-400 text-sm">✓</span>
                        </div>
                        <span>Saudi-Arabien (Riad)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-400 text-sm">✓</span>
                        </div>
                        <span>Südostasien (Singapur)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/5">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700 h-full">
                  <div className="w-20 h-20 bg-blue-900/50 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Shield className="w-10 h-10 text-blue-400" />
                  </div>
                  <h3 className="font-medium text-2xl text-white text-center mb-6">Hauptbüro Kairo</h3>
                  <div className="flex flex-col items-center text-center space-y-2">
                    <p className="text-gray-300">
                      Nile Tower, 21. Etage<br />
                      Corniche El Nil, Kairo<br />
                      Ägypten
                    </p>
                    <div className="w-16 h-1 bg-blue-500/30 my-4"></div>
                    <a href="mailto:info@deutsche-qualitaet-global.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                      info@deutsche-qualitaet-global.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Machen Sie mit */}
        <div 
          className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-16 px-6 md:px-12 z-10 text-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl"></div>
          
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
              Werden Sie Teil unserer Vision
            </h2>
            
            <p className="text-lg text-gray-300 mb-10 mx-auto">
              Ob als deutscher Produzent, internationaler Händler oder interessierter Partner – wir freuen uns darauf, 
              mit Ihnen zusammenzuarbeiten und neue Maßstäbe im internationalen Handel zu setzen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-lg flex items-center justify-center gap-1"
              >
                Kontakt aufnehmen
              </button>
              <button 
                className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 shadow-lg flex items-center justify-center gap-1"
              >
                Mehr erfahren
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}