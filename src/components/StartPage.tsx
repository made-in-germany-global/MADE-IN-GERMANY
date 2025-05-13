import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const FuturisticHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [animateIcon, setAnimateIcon] = useState(false);
  const [transitionEffect, setTransitionEffect] = useState('');
  const videoRefs = useRef([]);

  const slides = [
    {
      videoSrc: "/hero/8.mp4",
      title: "Industrial Excellence",
      description: "Empowering industries worldwide with cutting-edge engineering, precision manufacturing, and unwavering reliability.",
      tagline: "Designed to endure. Built to perform."
    },
    {
      videoSrc: "/hero/6.mp4",
      title: "Driving Innovation",
      description: "Shaping the future of global industries with advanced technology solutions and unmatched quality craftsmanship.",
      tagline: "Precision, Performance, perfection."
    },
    {
      videoSrc: "/hero/7.mp4",
      title: "Global Impact",
      description: "Bringing together world-class innovation and robust manufacturing to meet the diverse needs of industries globally.",
      tagline: "Built for Excellence. Crafted for Impact."
    }
  ];

  const certifications = [
    'ISO Certified',
    'TÜV Approved',
    'Sustainable Production',
    'Carbon Neutral'
  ];

  const transitionEffects = [
    'break',
    'glitch',
    'wave',
    'pixelate'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const randomEffect = transitionEffects[Math.floor(Math.random() * transitionEffects.length)];
      setTransitionEffect(randomEffect);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setTransitionEffect('');
      }, 1000);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const opacity = Math.max(0, 1 - scrollTop / 400);
      setScrollOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setAnimateIcon(true);
    const timeout = setTimeout(() => setAnimateIcon(false), 1000);
    return () => clearTimeout(timeout);
  }, [currentSlide]);

  const handlePrevSlide = () => {
    const randomEffect = transitionEffects[Math.floor(Math.random() * transitionEffects.length)];
    setTransitionEffect(randomEffect);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTransitionEffect('');
    }, 1000);
  };

  const handleNextSlide = () => {
    const randomEffect = transitionEffects[Math.floor(Math.random() * transitionEffects.length)];
    setTransitionEffect(randomEffect);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTransitionEffect('');
    }, 1000);
  };

  return (
    <div className="relative w-full h-[90vh] overflow-hidden bg-black">
      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
        <div className="grid-overlay" />
      </div>

      {/* Background Videos with Transition Effects */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            } ${transitionEffect ? `transition-${transitionEffect}` : ''}`}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              id={`video-${index}`}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover scale-effect"
            >
              <source src={slide.videoSrc} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-black/60" />
          </div>
        ))}
      </div>

      {/* Tech Particles */}
      <div className="tech-particles" />

      {/* Style Definitions */}
      <style jsx>{`
        .scale-effect {
          animation: subtle-scale 8s infinite alternate ease-in-out;
        }

        @keyframes subtle-scale {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }

        .grid-overlay {
          background-image: 
            linear-gradient(to right, rgba(255,204,0,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,204,0,0.08) 1px, transparent 1px);
          background-size: 40px 40px;
          width: 100%;
          height: 100%;
          opacity: 0.3;
        }

        .tech-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(rgba(255, 204, 0, 0.4) 1px, transparent 1px), 
                            radial-gradient(rgba,0, 0, 0.4) 1px, transparent 1px);
          background-size: 60px 60px, 40px 40px;
          background-position: 0 0, 30px 30px;
          opacity: 0.1;
        }

        .transition-break {
          animation: break-effect 1s forwards;
        }

        @keyframes break-effect {
          0% {
            transform: translate(0, 0);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
          50% {
            transform: translate(-10px, 10px);
            clip-path: polygon(
              0 0, 20% 0, 20% 20%, 40% 20%, 40% 40%, 
              60% 40%, 60% 60%, 80% 60%, 80% 80%, 
              100% 80%, 100% 100%, 0 100%
            );
          }
          100% {
            transform: translate(20px, -20px);
            clip-path: polygon(
              0 0, 10% 0, 10% 10%, 30% 10%, 30% 30%, 
              50% 30%, 50% 50%, 70% 50%, 70% 70%, 
              90% 70%, 90% 90%, 100% 90%, 100% 100%, 0 100%
            );
            opacity: 0;
          }
        }

        .transition-glitch {
          animation: glitch-effect 1s forwards;
        }

        @keyframes glitch-effect {
          0% { transform: translate(0, 0); }
          20% { transform: translate(-5px, 5px); }
          40% { transform: translate(5px, -5px); }
          60% { transform: translate(-3px, 3px); }
          80% { transform: translate(3px, -3px); }
          100% { transform: translate(0, 0); opacity: 0; }
          10%, 30%, 50%, 70%, 90% {
            clip-path: polygon(
              0 0, 100% 0, 100% 10%, 80% 10%, 80% 20%, 
              100% 20%, 100% 100%, 0 100%
            );
          }
          15%, 35%, 55%, 75%, 95% {
            clip-path: polygon(
              0 0, 20% 0, 20% 80%, 40% 80%, 40% 100%, 
              0 100%
            );
          }
        }

        .transition-wave {
          animation: wave-effect 1s forwards;
        }

        @keyframes wave-effect {
          0% {
            transform: translateX(0);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
          50% {
            transform: translateX(-10px);
            clip-path: polygon(
              0 0, 
              25% 10% calc(10% + 10px), 
              50% 0% calc(0% + 20px), 
              75% 10% calc(10% + 10px), 
              100% 0, 
              100% 100%, 
              75% 90% calc(90% - 10px), 
              50% 100% calc(100% - 20px), 
              25% 90% calc(90% - 10px), 
              0 100%
            );
          }
          100% {
            transform: translateX(20px);
            clip-path: polygon(
              0 0, 
              25% 20% calc(20% + 20px), 
              50% 0% calc(0% + 40px), 
              75% 20% calc(20% + 20px), 
              100% 0, 
              100% 100%, 
              75% 80% calc(80% - 20px), 
              50% 100% calc(100% - 40px), 
              25% 80% calc(80% - 20px), 
              0 100%
            );
            opacity: 0;
          }
        }

        .transition-pixelate {
          animation: pixelate-effect 1s forwards;
        }

        @keyframes pixelate-effect {
          0% {
            filter: none;
            transform: scale(1);
          }
          50% {
            filter: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="pixelate"><feFlood x="0" y="0" width="100%" height="100%" flood-color="black"/><feComposite in2="SourceGraphic" operator="in"/><feTile result="tile"/><feMorphology operator="dilate" radius="10"/><feComposite in="SourceGraphic" operator="over"/></filter></svg>#pixelate');
            transform: scale(1.02);
          }
          100% {
            filter: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="pixelate"><feFlood x="0" y="0" width="100%" height="100%" flood-color="black"/><feComposite in2="SourceGraphic" operator="in"/><feTile result="tile"/><feMorphology operator="dilate" radius="20"/><feComposite in="SourceGraphic" operator="over"/></filter></svg>#pixelate');
            transform: scale(1.05);
            opacity: 0;
          }
        }

        .animated-border {
          position: relative;
          overflow: hidden;
        }

        .animated-border::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(255,204,0,1), transparent);
          animation: border-flow 3s infinite;
        }

        @keyframes border-flow {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        .glow-text {
          text-shadow: 0 0 10px rgba(255,204,0,0.5), 0 0 20px rgba(255,204,0,0.3);
        }

        .icon-scale {
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .icon-scale.animate {
          transform: scale(1.1);
        }

        .highlight-bar {
          position: relative;
          overflow: hidden;
        }

        .highlight-bar::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #DD0000, #FFCC00);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease;
        }

        .highlight-bar:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .cert-badge {
          background: rgba(0,0,0,0.4);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 4px 6px rgba(0,0,0,0.1), 
                      inset 0 1px 0 rgba(255,255,255,0.1);
          transition: all 0.3s ease;
        }
        
        .cert-badge:hover {
          border-color: rgba(255,204,0,0.5);
          box-shadow: 0 8px 12px rgba(0,0,0,0.2),
                      0 0 0 1px rgba(255,204,0,0.2),
                      inset 0 1px 0 rgba(255,255,255,0.1);
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .main-content {
            margin-top: 0;
            padding-top: 4rem;
          }
          .icon-image {
            width: 40vw !important;
            max-width: 200px;
          }
          .cert-grid {
            max-width: 80vw;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .main-content {
            margin-top: -80px;
          }
          .icon-image {
            width: 30vw !important;
            max-width: 280px;
          }
        }

        @media (min-width: 1025px) {
          .main-content {
            margin-top: -100px;
          }
          .icon-image {
            width: 25vw !important;
            max-width: 360px;
          }
        }
      `}</style>

      {/* Main Content Container */}
      <div 
        className="relative h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between z-20 main-content"
        style={{ opacity: scrollOpacity }}
      >
        {/* Left Content Area */}
        <div className="flex-1 pt-16 sm:pt-20 lg:pt-24 flex flex-col justify-start text-center lg:text-left max-w-2xl">
          <div className="flex space-x-2 mb-8 justify-center lg:justify-start">
            <div className="h-1 w-12 bg-yellow-400 rounded-full"></div>
            <div className="h-1 w-24 bg-red-600 rounded-full"></div>
            <div className="h-1 w-12 bg-yellow-400 rounded-full"></div>
          </div>

          <div className="animated-border mb-2">
            <h2 className="uppercase text-sm font-bold tracking-wider text-yellow-400 mb-2">
              German Engineering
            </h2>
          </div>

          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-6 leading-tight glow-text">
            {slides[currentSlide].title}
            <br />
            <span className="text-yellow-400">Made in Germany</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6 leading-relaxed">
            {slides[currentSlide].description}
          </p>

          <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-8 italic">
            {slides[currentSlide].tagline}
          </p>

          <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
            {['Precision', 'Sustainability', 'Innovation', 'Social Responsibility'].map((value, idx) => (
              <div 
                key={idx} 
                className="highlight-bar flex items-center px-4 py-2 rounded-md bg-black/30 backdrop-blur-sm border-l-2 border-red-600 hover:border-yellow-400 transition-all"
              >
                <span className="text-white font-medium text-sm">{value}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 w-full">
            <button className="px-6 py-4 rounded-md bg-gradient-to-r from-gray-900 to-gray-800 text-white font-bold hover:shadow-lg hover:shadow-red-600/20 transition-all duration-300 text-sm sm:text-base flex items-center justify-center group relative overflow-hidden">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative">I'm a German Manufacturer</span>
              <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
            </button>
            <button className="px-6 py-4 rounded-md bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 text-sm sm:text-base flex items-center justify-center group relative overflow-hidden">
              <span className="absolute inset-0 w-0 group-hover:w-full h-full bg-yellow-300/50 left-0 transition-all duration-500"></span>
              <span className="relative">I'm an International Buyer</span>
              <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
            </button>
          </div>
        </div>

        {/* Right Content Area with Icon and Certifications */}
        <div className="flex-1 flex flex-col items-center lg:items-end justify-center pb-8 lg:pb-0">
          <div className={`relative icon-scale ${animateIcon ? 'animate' : ''}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-red-600/30 blur-3xl rounded-full opacity-30"></div>
            <img
              src="/made-in-germany-hero.webp"
              alt="Made in Germany Icon"
              className="icon-image object-contain mb-8 drop-shadow-2xl relative z-10"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 w-full cert-grid max-w-md">
            {certifications.map((label, idx) => (
              <div 
                key={idx} 
                className="cert-badge px-4 py-3 rounded-md flex items-center justify-center"
              >
                <span className="text-white text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Controls - Positioned Higher */}
      <div className="absolute top-1/3 transform -translate-y-1/2 w-full flex justify-between px-4 z-20 pointer-events-none">
        <button 
          onClick={handlePrevSlide}
          className="p-3 sm:p-4 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 hover:border-yellow-400/50 transition-all pointer-events-auto"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        
        <button 
          onClick={handleNextSlide}
          className="p-3 sm:p-4 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 hover:border-yellow-400/50 transition-all pointer-events-auto"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Slide Indicators - Moved Higher */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setTransitionEffect(transitionEffects[Math.floor(Math.random() * transitionEffects.length)]);
              setTimeout(() => {
                setCurrentSlide(index);
                setTransitionEffect('');
              }, 1000);
            }}
            className={`h-1 transition-all duration-500 ${
              currentSlide === index 
                ? 'w-10 bg-gradient-to-r from-red-600 to-yellow-400' 
                : 'w-4 bg-white/30'
            } rounded-full`}
          />
        ))}
      </div>
    </div>
  );
};

export default FuturisticHeroSection;