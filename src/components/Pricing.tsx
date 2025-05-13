import React from 'react';

export default function GermanQualitySection() {
  return (
    <div className="bg-[#050A0F] text-white p-6 md:p-10 lg:p-16 max-w-7xl mx-auto">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-cyan-300">
          GERMAN QUALITY<br />
          & CERTIFICATIONS
        </h1>
        <p className="text-base md:text-lg max-w-3xl mx-auto">
          Products MADE IN GERMANY ©  are held to the highest manufacturing 
          standards, reflecting a tradition of precision and excellence. Here 
          are some of the core certifications that demonstrate superior
          quality of German craftsmanship.
        </p>
      </div>

      {/* Certifications Box */}
      <div className="bg-[#080F15] rounded-lg p-6 md:p-10 mb-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* DIN Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-[#080F15] rounded-lg flex items-center justify-center mb-4">
              <div className="rounded p-1 w-28 h-28 md:w-36 md:h-36 flex items-center justify-center">
                <img
                  src="/made-in-germany-trust-icon-din.png"
                  alt="DIN Logo"
                  className="w-56 h-56 md:w-64 md:h-64 object-contain"
                />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">DIN</h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              DIN standards ensure rigorous quality and reliability for German 
              industry products, meeting strict performance criteria consistently.
            </p>
          </div>

          {/* ISO Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-[#080F15] rounded-lg flex items-center justify-center mb-4">
              <div className="rounded p-1 w-28 h-28 md:w-36 md:h-36 flex items-center justify-center">
                <img
                  src="/made-in-germany-trust-icon-iso.png"
                  alt="ISO Logo"
                  className="w-56 h-56 md:w-64 md:h-64 object-contain"
                />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">ISO</h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              ISO certifications uphold global quality management standards, 
              ensuring consistent excellence in processes and product outcomes.
            </p>
          </div>

          {/* TÜV Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-[#080F15] rounded-lg flex items-center justify-center mb-4">
              <div className="rounded p-1 w-28 h-28 md:w-36 md:h-36 flex items-center justify-center">
                <img
                  src="/made-in-germany-trust-icon-tüv.png"
                  alt="TÜV Logo"
                  className="w-56 h-56 md:w-64 md:h-64 object-contain"
                />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">TÜV</h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              TÜV certification verifies independent safety and quality testing, 
              earning trust globally for exceptional product standards compliance.
            </p>
          </div>

          {/* CE Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-[#080F15] rounded-lg flex items-center justify-center mb-4">
              <div className="rounded p-1 w-28 h-28 md:w-36 md:h-36 flex items-center justify-center">
                <img
                  src="/made-in-germany-trust-icon-ce.png"
                  alt="CE Logo"
                  className="w-56 h-56 md:w-64 md:h-64 object-contain"
                />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">CE</h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              CE mark confirms adherence to EU safety, health, and environmental 
              standards, ensuring products meet stringent regulatory requirements.
            </p>
          </div>

          {/* GS Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-[#080F15] rounded-lg flex items-center justify-center mb-4">
              <div className="rounded p-1 w-28 h-28 md:w-36 md:h-36 flex items-center justify-center">
                <img
                  src="/gs.png"
                  alt="GS Logo"
                  className="w-56 h-56 md:w-64 md:h-64 object-contain"
                />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">GS</h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              GS certification guarantees product safety and compliance, 
              validated through rigorous testing to meet German quality 
              benchmarks, fostering consumer confidence worldwide.
            </p>
          </div>

          {/* EMC Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-[#080F15] rounded-lg flex items-center justify-center mb-4">
              <div className="rounded p-1 w-28 h-28 md:w-36 md:h-36 flex items-center justify-center">
                <img
                  src="/emc.png"
                  alt="EMC Logo"
                  className="w-56 h-56 md:w-64 md:h-64 object-contain"
                />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">EMC</h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              EMC certification ensures electromagnetic compatibility, 
              minimizing interference and upholding operational reliability 
              in compliance with international regulatory standards.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Buttons Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-4 bg-[#080F15] rounded-lg p-6 max-w-sm mx-auto">
          <div className="bg-[#080F15] rounded-full p-0.5">
            <img
              src="/cup.jpg"
              alt="Trophy"
              className="w-20 h-20 object-contain"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Why MADE IN GERMANY ©  Quality?</h3>
            <button className="bg-transparent border border-cyan-400 hover:bg-cyan-900 text-cyan-400 px-4 py-2 rounded">
              LEARN MORE
            </button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-4 bg-[#080F15] rounded-lg p-6 max-w-sm mx-auto">
          <div className="bg-[#080F15] rounded-full p-0.5">
            <img
              src="/world.jpg"
              alt="Globe"
              className="w-20 h-20 object-contain"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-4">International Recognition</h3>
            <button className="bg-transparent border border-cyan-400 hover:bg-cyan-900 text-cyan-400 px-4 py-2 rounded">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}