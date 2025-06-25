import React, { useEffect, useState } from 'react';
import { ChevronDown, Code, Gamepad2, Cpu, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Passionate Coder & Gamer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-purple-900 dark:from-black dark:via-gray-900 dark:to-purple-900">
      {/* Gaming Dashboard Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {[...Array(144)].map((_, i) => (
            <div key={i} className="border border-cyan-500/20"></div>
          ))}
        </div>
      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Floating Gaming Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Cpu className="absolute top-1/4 left-1/4 text-cyan-400/20 animate-float" size={48} />
        <Zap className="absolute top-1/3 right-1/4 text-purple-400/20 animate-float" size={40} style={{ animationDelay: '1s' }} />
        <Code className="absolute bottom-1/3 left-1/3 text-green-400/20 animate-float" size={44} style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-4 mb-6">
            <Code className="text-cyan-400 animate-bounce" size={32} />
            <Gamepad2 className="text-purple-400 animate-bounce" size={32} style={{ animationDelay: '0.5s' }} />
          </div>
          
          {/* Gaming HUD Style Username */}
          <div className="relative mb-6">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur-xl"></div>
            <h1 className="relative text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              @ShadowDxD
            </h1>
          </div>
          
          <div className="text-2xl md:text-4xl text-gray-300 mb-4 font-mono">
            <span className="text-cyan-400">Hemanth Kumar M</span>
          </div>
          
          {/* Gaming Terminal Style Typing */}
          <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-4 mb-8 font-mono text-left max-w-md mx-auto">
            <div className="text-green-400 text-sm mb-1">$ whoami</div>
            <div className="text-xl md:text-2xl text-gray-300 h-8">
              {typedText}<span className="animate-ping text-cyan-400">|</span>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Welcome to my digital vault where AI meets gaming innovation. 
            I craft intelligent solutions and immersive experiences with cutting-edge technology.
          </p>
        </div>

        {/* Gaming Dashboard Style Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto">
          {[
            { label: 'Projects', value: '50+' },
            { label: 'AI Models', value: '25+' },
            { label: 'Gaming Hours', value: '∞' },
            { label: 'Coffee Cups', value: '9999+' }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-900/50 border border-cyan-500/30 rounded-lg p-3 backdrop-blur-md">
              <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            View My Arsenal
          </button>
          
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-cyan-500 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            Initialize Contact
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-cyan-400" size={32} />
      </div>
    </section>
  );
};

export default Hero;