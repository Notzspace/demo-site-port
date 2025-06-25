import React from 'react';
import { User, Coffee, Target, Zap } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Coffee, label: 'Coffee Consumed', value: '∞' },
    { icon: Target, label: 'Projects Completed', value: '50+' },
    { icon: Zap, label: 'Years Experience', value: '5+' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-purple-900/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-md p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <User className="text-cyan-400 mr-3" size={24} />
                <h3 className="text-2xl font-bold text-white">Who I Am</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I'm Hemanth Kumar M, a passionate full-stack developer and avid gamer who thrives at the intersection of technology and creativity. 
                With a deep love for clean code and immersive gaming experiences, I bring the same level of precision and innovation to every project I tackle.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-md p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed">
                From crafting my first "Hello World" to building complex applications, my journey has been fueled by curiosity and the desire to solve real-world problems. 
                Gaming has taught me strategic thinking, while coding has given me the tools to bring ideas to life.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl border border-gray-700 hover:border-cyan-500/40 transition-all duration-300 text-center group"
                >
                  <stat.icon className="text-cyan-400 mx-auto mb-3 group-hover:text-purple-400 transition-colors duration-300" size={32} />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-gray-800/50 backdrop-blur-md p-8 rounded-2xl border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">When I'm Not Coding</h3>
              <p className="text-gray-300 leading-relaxed">
                You'll find me exploring virtual worlds, strategizing in competitive games, or discovering the latest gaming trends. 
                I believe that gaming enhances problem-solving skills and provides endless inspiration for creating engaging user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;