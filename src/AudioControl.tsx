import React, { useState, useEffect, useRef } from 'react';
import { Music, Pause, X, ChevronRight, Settings } from 'lucide-react';

const AudioControl = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(-1); // -1 means no track selected (off)
  const [isPlaying, setIsPlaying] = useState(false);
  const [visualizer, setVisualizer] = useState([]);
  const audioRef = useRef(null);
  const animationRef = useRef(null);

  const tracks = [
    { name: 'Calm Waves', src: '/calm-waves.mp3', type: 'Relaxing Ambient', color: '#4F46E5' },
    { name: 'Soft Background', src: '/soft-background-piano.mp3', type: 'Gentle Melody', color: '#2DD4BF' },
    { name: 'Beautiful Piano', src: '/beautiful-piano-music.mp3', type: 'Classical Harmony', color: '#EC4899' },
  ];

  // Generate visualizer bars when playing
  useEffect(() => {
    if (isPlaying) {
      const generateVisualizer = () => {
        const newVisualizerData = Array(12).fill().map(() => Math.random() * 100);
        setVisualizer(newVisualizerData);
        animationRef.current = requestAnimationFrame(generateVisualizer);
      };
      
      animationRef.current = requestAnimationFrame(generateVisualizer);
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [isPlaying]);

  // Load preferences from localStorage
  useEffect(() => {
    const savedTrackIndex = parseInt(localStorage.getItem('selectedTrackIndex') || '-1');
    const savedPlaying = localStorage.getItem('isPlaying') === 'true';
    
    setCurrentTrackIndex(savedTrackIndex);
    
    if (savedPlaying && savedTrackIndex !== -1) {
      const track = tracks[savedTrackIndex];
      if (track) {
        audioRef.current.src = track.src;
        audioRef.current.play().catch((error) => {
          console.error('Audio playback failed:', error);
        });
        setIsPlaying(true);
      }
    }
  }, []);

  // Save preferences to localStorage
  useEffect(() => {
    localStorage.setItem('selectedTrackIndex', currentTrackIndex.toString());
    localStorage.setItem('isPlaying', isPlaying.toString());
  }, [currentTrackIndex, isPlaying]);

  const pauseAudio = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const playAudio = (trackIndex) => {
    const track = tracks[trackIndex];
    audioRef.current.src = track.src;
    audioRef.current.play().catch((error) => {
      console.error('Audio playback failed:', error);
    });
    setIsPlaying(true);
    setCurrentTrackIndex(trackIndex);
  };

  const handleMainButtonClick = () => {
    if (isPlaying) {
      pauseAudio();
    } else if (currentTrackIndex === -1) {
      // If no track is selected, play the first track
      playAudio(0);
    } else {
      // Resume current track
      audioRef.current.play().catch(error => {
        console.error('Audio playback failed:', error);
      });
      setIsPlaying(true);
    }
  };

  const handleNextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % tracks.length;
    playAudio(nextIndex);
  };

  const selectTrack = (trackIndex) => {
    playAudio(trackIndex);
    setIsOpen(false);
  };

  const getCurrentTrackColor = () => {
    if (currentTrackIndex === -1) return '#FFFFFF';
    const track = tracks[currentTrackIndex];
    return track ? track.color : '#FFFFFF';
  };

  return (
    <div className="fixed bottom-20 right-8 z-50">
      <audio ref={audioRef} loop />
      
      {/* Control Panel */}
      <div className="flex items-center space-x-2">
        {/* Settings/Modal Button - Only visible when a track is playing */}
        {isPlaying && (
          <button
            onClick={() => setIsOpen(true)}
            className="p-3 bg-black/80 backdrop-blur-lg rounded-full text-white hover:bg-black/90 transition-all duration-300 shadow-lg border border-white/10"
            aria-label="Open music settings"
          >
            <Settings className="w-5 h-5" />
          </button>
        )}
        
        {/* Next Track Button - Only visible when a track is playing */}
        {isPlaying && (
          <button
            onClick={handleNextTrack}
            className="p-3 bg-black/80 backdrop-blur-lg rounded-full text-white hover:bg-black/90 transition-all duration-300 shadow-lg border border-white/10"
            style={{ boxShadow: `0 0 10px ${getCurrentTrackColor()}40` }}
            aria-label="Next track"
          >
            <ChevronRight 
              className="w-5 h-5" 
              style={{ color: getCurrentTrackColor() }}
            />
          </button>
        )}
        
        {/* Main Button */}
        <button
          onClick={handleMainButtonClick}
          className="group relative p-4 bg-black/80 backdrop-blur-lg rounded-full text-white hover:bg-black/90 transition-all duration-300 shadow-lg border border-white/10"
          style={{ boxShadow: isPlaying ? `0 0 20px ${getCurrentTrackColor()}` : 'none' }}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying && (
            <div className="absolute inset-0 rounded-full overflow-hidden opacity-30">
              <div className="flex items-end justify-center h-full w-full gap-0.5 px-1 pb-1">
                {visualizer.map((height, i) => (
                  <div
                    key={i}
                    className="w-0.5 bg-white"
                    style={{ 
                      height: `${height/3}%`,
                      backgroundColor: getCurrentTrackColor(),
                      transition: 'height 0.1s ease'
                    }}
                  />
                ))}
              </div>
            </div>
          )}
          {isPlaying ? (
            <Pause className="w-6 h-6" style={{ color: getCurrentTrackColor() }} />
          ) : (
            <Music className="w-6 h-6 group-hover:animate-pulse" />
          )}
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-72 bg-black/85 backdrop-blur-xl rounded-xl shadow-2xl p-4 border border-white/10 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-white text-sm font-medium">Select Audio Track</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-white/70 hover:text-white transition-colors"
              aria-label="Close music control"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-2">
            {tracks.map((track, index) => (
              <button
                key={track.name}
                onClick={() => selectTrack(index)}
                className={`w-full relative overflow-hidden text-left px-4 py-3 rounded-lg text-sm flex flex-col transition-all duration-300 
                  ${currentTrackIndex === index 
                    ? 'bg-white/15 text-white' 
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                style={{
                  boxShadow: currentTrackIndex === index ? `0 0 10px ${track.color}40` : 'none',
                  borderLeft: currentTrackIndex === index ? `3px solid ${track.color}` : '3px solid transparent'
                }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{track.name}</span>
                  {currentTrackIndex === index && isPlaying && (
                    <div className="flex items-end h-3 gap-0.5">
                      {[1, 2, 3].map((bar) => (
                        <div
                          key={bar}
                          className="w-0.5 bg-white animate-pulse"
                          style={{
                            height: `${8 + Math.random() * 10}px`,
                            backgroundColor: track.color,
                            animationDelay: `${bar * 0.2}s`
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
                <span className="block text-xs text-gray-400 mt-1">{track.type}</span>
                
                {/* Play indicator */}
                {currentTrackIndex === index && (
                  <div 
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r" 
                    style={{ 
                      width: '100%',
                      background: `linear-gradient(to right, transparent, ${track.color}, transparent)`
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
      
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-pulse {
          animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .5;
          }
        }
      `}</style>
    </div>
  );
};

export default AudioControl;