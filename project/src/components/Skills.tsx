import React from 'react';
import { Code2, Database, Smartphone, Globe, Server, Palette, Brain, Gamepad2 } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      skills: [
        { name: 'Python/TensorFlow', level: 92 },
        { name: 'Neural Networks', level: 88 },
        { name: 'Computer Vision', level: 85 },
        { name: 'NLP/LLMs', level: 90 }
      ],
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Code2,
      title: 'Frontend Development',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'JavaScript ES6+', level: 92 }
      ],
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Server,
      title: 'Backend & Cloud',
      skills: [
        { name: 'Node.js/Python', level: 85 },
        { name: 'AWS/Azure', level: 82 },
        { name: 'REST/GraphQL APIs', level: 90 },
        { name: 'Docker/K8s', level: 78 }
      ],
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Gamepad2,
      title: 'Gaming Tech',
      skills: [
        { name: 'Unity/Unreal', level: 80 },
        { name: 'Game AI', level: 85 },
        { name: 'WebGL/Three.js', level: 75 },
        { name: 'VR/AR Development', level: 70 }
      ],
      color: 'from-orange-400 to-red-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Tech Arsenal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My technical arsenal spans AI/ML, full-stack development, and gaming technologies, 
            combining innovation with practical problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-gray-900/50 backdrop-blur-md p-8 rounded-2xl border border-gray-800 hover:border-cyan-500/30 transition-all duration-500 group"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out relative`}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-900/50 backdrop-blur-md p-8 rounded-2xl border border-gray-800 inline-block">
            <h3 className="text-2xl font-bold text-white mb-4">Always Evolving</h3>
            <p className="text-gray-300 max-w-2xl">
              Currently exploring advanced AI architectures, quantum computing applications, 
              and next-gen gaming technologies to stay at the forefront of innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;