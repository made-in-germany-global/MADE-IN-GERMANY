import { useState, useEffect } from "react";
import { ArrowRight, Check, Building, Cog, Stethoscope, Apple, Car, Coffee } from "lucide-react";

// German Product Categories Component
export default function ProductCategories() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Product Category Data
  const categories = [
    {
      id: 1,
      icon: <Cog className="w-8 h-8 text-blue-400" />,
      title: "Maschinenbau",
      description: "Präzise Ingenieurskunst und zuverlässige Technologie für industrielle Anwendungen.",
      count: 457
    },
    {
      id: 2,
      icon: <Stethoscope className="w-8 h-8 text-blue-400" />,
      title: "Medizintechnik",
      description: "Innovative Lösungen für die moderne Gesundheitsversorgung und medizinische Forschung.",
      count: 283
    },
    {
      id: 3,
      icon: <Apple className="w-8 h-8 text-blue-400" />,
      title: "Lebensmittel",
      description: "Qualitativ hochwertige Nahrungsmittel mit Tradition und höchsten Sicherheitsstandards.",
      count: 391
    },
    {
      id: 4,
      icon: <Car className="w-8 h-8 text-blue-400" />,
      title: "Automobilzulieferung",
      description: "Wegweisende Komponenten für die globale Automobilindustrie.",
      count: 528
    },
    {
      id: 5,
      icon: <Coffee className="w-8 h-8 text-blue-400" />,
      title: "Gastronomiebedarf",
      description: "Professionelle Ausstattung für gastronomische Betriebe jeder Größe.",
      count: 219
    },
    {
      id: 6,
      icon: <Building className="w-8 h-8 text-blue-400" />,
      title: "Baugewerbe",
      description: "Nachhaltige und innovative Materialien für die moderne Bauindustrie.",
      count: 345
    },
    {
      id: 7,
      icon: <Check className="w-8 h-8 text-blue-400" />,
      title: "Elektrotechnik",
      description: "Zukunftsweisende Lösungen im Bereich elektrischer und elektronischer Systeme.",
      count: 412
    },
    {
      id: 8,
      icon: <Check className="w-8 h-8 text-blue-400" />,
      title: "Chemische Industrie",
      description: "Hochwertige chemische Produkte für diverse industrielle Anwendungen.",
      count: 276
    }
  ];

  return (
    <div className="flex flex-col items-center w-full px-4 space-y-10 py-12 bg-white font-inter">
      {/* Hero Section */}
      <div 
        className="relative w-full max-w-7xl rounded-2xl shadow-2xl overflow-hidden"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out"
        }}
      >
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-0"></div>
        
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none z-0" 
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "20px 20px"
          }}
        ></div>

        {/* Hero content */}
        <div className="relative z-10 py-16 px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
            Produktkategorien
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Entdecken Sie die Vielfalt deutscher Ingenieurskunst und Produktqualität. Von präzisem Maschinenbau bis zu innovativer Medizintechnik – deutsche Hersteller setzen weltweit Maßstäbe für Exzellenz, Zuverlässigkeit und zukunftsweisende Lösungen. Erkunden Sie unsere Branchenkategorien und finden Sie genau die Produkte und Partner, die Ihren Anforderungen entsprechen.
          </p>
          <button 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium flex items-center gap-1 mx-auto"
            style={{
              boxShadow: "0 0 10px rgba(59,130,246,0.5)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 0 15px rgba(59,130,246,0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 0 10px rgba(59,130,246,0.5)";
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = "scale(0.95)";
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
          >
            Alle Kategorien ansehen <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Intro Text Section */}
      <div 
        className="max-w-7xl w-full"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          transitionDelay: "0.2s"
        }}
      >
        <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12">
          {/* Grid overlay */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none rounded-2xl" 
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "20px 20px"
            }}
          ></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
              Deutsche Qualität in allen Branchen
            </h2>
            <div className="text-lg text-gray-300">
              <p className="mb-4">
                Die deutsche Fertigungsindustrie ist weltweit für ihre Exzellenz, Präzision und Innovationskraft bekannt. Unsere Plattform vereint führende Hersteller aus verschiedensten Sektoren, die alle eines gemeinsam haben: kompromisslose Qualität und zukunftsorientierte Lösungsansätze. 
              </p>
              <p>
                Von der Automobilzulieferung über Maschinenbau bis hin zu Medizintechnik und Gastronomiebedarf – die nachfolgenden Kategorien bieten einen umfassenden Überblick über das breite Spektrum deutscher Produktionsexpertise. Jede Branche steht für spezifisches Know-how, technologische Innovation und höchste Fertigungsstandards, die „Made in Germany" seit Generationen auszeichnen.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid Section */}
      <div 
        className="max-w-7xl w-full"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          transitionDelay: "0.4s"
        }}
      >
        <h3 className="text-2xl font-extrabold text-gray-900 mb-6">Alle Produktkategorien</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={category.id}
              className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                transitionDelay: `${0.4 + index * 0.1}s`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow = "0 0 15px rgba(59,130,246,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                {category.icon}
              </div>
              <h3 className="font-medium text-xl text-white mb-2">{category.title}</h3>
              <p className="text-gray-300 mb-4">{category.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">{category.count} Unternehmen</span>
                <button className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                  Entdecken <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div 
        className="max-w-7xl w-full"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          transitionDelay: "0.8s"
        }}
      >
        <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 text-center">
          {/* Grid overlay */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none rounded-2xl" 
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "20px 20px"
            }}
          ></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
              Finden Sie Ihren idealen deutschen Lieferanten
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
              Profitieren Sie von deutschen Qualitätsprodukten für Ihr Unternehmen. Unsere Plattform verbindet Sie mit zuverlässigen Herstellern, die Ihre spezifischen Anforderungen erfüllen können.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium flex items-center gap-1 justify-center"
                style={{
                  boxShadow: "0 0 10px rgba(59,130,246,0.5)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 0 15px rgba(59,130,246,0.7)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 0 10px rgba(59,130,246,0.5)";
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform = "scale(0.95)";
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
              >
                Jetzt Hersteller finden <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 flex items-center gap-1 justify-center"
                style={{
                  boxShadow: "0 0 10px rgba(107,114,128,0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 0 15px rgba(107,114,128,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 0 10px rgba(107,114,128,0.3)";
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform = "scale(0.95)";
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
              >
                Kategorien vergleichen
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}