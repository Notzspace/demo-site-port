import React, { useState } from 'react';
import { ExternalLink, Github, Eye, X } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'AI Gaming Assistant',
      description: 'An intelligent gaming companion that analyzes gameplay patterns and provides strategic recommendations using machine learning.',
      longDescription: 'A comprehensive AI-powered gaming assistant built with Python, TensorFlow, and React. Features real-time gameplay analysis, strategic recommendations, performance tracking, and adaptive learning algorithms that improve with user interaction.',
      tech: ['Python', 'TensorFlow', 'React', 'WebSocket', 'OpenCV'],
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Notzspace',
      live: './demos/ai-gaming-assistant/index.html',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      id: 2,
      title: 'Neural Network Visualizer',
      description: 'Interactive web application for visualizing and understanding neural network architectures and training processes.',
      longDescription: 'An educational tool that makes neural networks accessible through interactive visualizations. Built with Three.js and D3.js, it allows users to build, train, and visualize neural networks in real-time with comprehensive analytics.',
      tech: ['JavaScript', 'Three.js', 'D3.js', 'WebGL', 'Python'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Notzspace',
      live: './demos/neural-network-visualizer/index.html',
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 3,
      title: 'Smart Trading Bot',
      description: 'Cryptocurrency trading bot powered by machine learning algorithms for automated market analysis and trading decisions.',
      longDescription: 'An advanced trading bot that uses LSTM networks and sentiment analysis to make informed trading decisions. Features risk management, backtesting capabilities, and real-time market data integration with comprehensive performance analytics.',
      tech: ['Python', 'Pandas', 'Scikit-learn', 'FastAPI', 'Redis'],
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Notzspace',
      live: './demos/smart-trading-bot/index.html',
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 4,
      title: 'VR Gaming Platform',
      description: 'Immersive VR gaming platform with multiplayer capabilities and AI-driven procedural content generation.',
      longDescription: 'A cutting-edge VR platform built with Unity and custom AI algorithms for procedural world generation. Features multiplayer networking, haptic feedback integration, and adaptive difficulty systems that respond to player behavior.',
      tech: ['Unity', 'C#', 'Oculus SDK', 'Photon', 'Blender'],
      image: 'https://images.pexels.com/photos/123335/pexels-photo-123335.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Notzspace',
      live: './demos/vr-gaming-platform/index.html',
      color: 'from-orange-400 to-red-500'
    },
    {
      id: 5,
      title: 'Computer Vision Security System',
      description: 'Real-time security monitoring system using computer vision for intelligent threat detection and alert management.',
      longDescription: 'An advanced security system leveraging YOLO and OpenCV for real-time object detection and facial recognition. Includes mobile alerts, cloud storage integration, and machine learning-based anomaly detection.',
      tech: ['Python', 'OpenCV', 'YOLO', 'Flask', 'MongoDB'],
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Notzspace',
      live: './demos/computer-vision-security/index.html',
      color: 'from-indigo-400 to-purple-500'
    },
    {
      id: 6,
      title: 'AI Content Generator',
      description: 'Multi-modal AI system for generating text, images, and code using transformer models and diffusion techniques.',
      longDescription: 'A comprehensive content generation platform utilizing GPT models and Stable Diffusion for creating diverse content types. Features fine-tuning capabilities, API integration, and custom model training workflows.',
      tech: ['Python', 'Transformers', 'PyTorch', 'FastAPI', 'Docker'],
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Notzspace',
      live: './demos/ai-content-generator/index.html',
      color: 'from-pink-400 to-rose-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Project Showcase
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of innovative projects spanning AI/ML, gaming technology, and cutting-edge web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-gray-800/50 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500/40 transition-all duration-500 transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-6">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-700 text-gray-300">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedProject(index)}
                    className="flex items-center space-x-1 px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300 text-sm"
                  >
                    <Eye size={14} />
                    <span>Details</span>
                  </button>
                  
                  <a 
                    href={project.github}
                    className="flex items-center space-x-1 px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={14} />
                    <span>GitHub Code</span>
                  </a>
                  
                  <a 
                    href={project.live}
                    className={`flex items-center space-x-1 px-3 py-2 bg-gradient-to-r ${project.color} text-white rounded-lg hover:opacity-90 transition-opacity duration-300 text-sm`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={projects[selectedProject].image} 
                alt={projects[selectedProject].title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors duration-300"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-8">
              <h3 className="text-3xl font-bold text-white mb-4">{projects[selectedProject].title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {projects[selectedProject].longDescription}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[selectedProject].tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${projects[selectedProject].color} text-white`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <a 
                  href={projects[selectedProject].github}
                  className="flex items-center space-x-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                  <span>GitHub Code</span>
                </a>
                
                <a 
                  href={projects[selectedProject].live}
                  className={`flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${projects[selectedProject].color} text-white rounded-lg hover:opacity-90 transition-opacity duration-300`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;