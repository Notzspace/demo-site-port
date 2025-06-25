import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Tag, Eye, X } from 'lucide-react';

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Gaming: Neural Networks Meet Virtual Worlds',
      excerpt: 'Exploring how artificial intelligence is revolutionizing game development, from procedural content generation to adaptive difficulty systems.',
      content: `The intersection of AI and gaming represents one of the most exciting frontiers in technology today. As we advance into 2024, we're witnessing unprecedented integration of machine learning algorithms into game development workflows.

Neural networks are now capable of generating entire game worlds, creating dynamic narratives that adapt to player choices, and developing AI companions that learn from player behavior. This isn't just about making NPCs smarter – it's about fundamentally changing how we think about interactive entertainment.

Recent breakthroughs in reinforcement learning have enabled AI agents to master complex games like StarCraft II and Dota 2, but the real innovation lies in applying these techniques to create more engaging single-player experiences. Imagine games that evolve based on your playstyle, creating personalized challenges that keep you in the optimal flow state.

The future of gaming is adaptive, intelligent, and deeply personal. As developers, we have the opportunity to create experiences that truly understand and respond to each player's unique preferences and skills.`,
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['AI', 'Gaming', 'Machine Learning', 'Game Development'],
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      id: 2,
      title: 'Building Scalable AI Systems: Lessons from Production Deployments',
      excerpt: 'Key insights and best practices for deploying machine learning models at scale, based on real-world production experiences.',
      content: `Deploying AI systems in production is vastly different from running experiments in Jupyter notebooks. After deploying dozens of ML models across various industries, I've learned that success depends more on engineering discipline than algorithmic sophistication.

The first lesson is that data quality trumps model complexity every time. A simple linear regression on clean, well-engineered features will outperform the most sophisticated neural network trained on messy data. Invest heavily in your data pipeline – it's the foundation everything else builds upon.

Monitoring is crucial but often overlooked. Unlike traditional software, ML models degrade silently as the world changes around them. Implement comprehensive monitoring for data drift, model performance, and business metrics. Set up alerts that trigger retraining workflows automatically.

Containerization and orchestration are your friends. Docker and Kubernetes aren't just buzzwords – they're essential tools for managing the complexity of ML deployments. Use them to ensure consistency across development, staging, and production environments.

Finally, always have a rollback plan. Models fail in unexpected ways, and when they do, you need to be able to revert to a known good state quickly. Treat model deployments like any other critical system deployment.`,
      date: '2024-01-10',
      readTime: '12 min read',
      tags: ['AI', 'MLOps', 'Production', 'Scalability'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 3,
      title: 'The Rise of Edge AI: Computing at the Speed of Thought',
      excerpt: 'How edge computing is enabling real-time AI applications and transforming industries from autonomous vehicles to smart cities.',
      content: `Edge AI represents a paradigm shift from cloud-centric to distributed intelligence. By moving computation closer to data sources, we're enabling applications that were previously impossible due to latency constraints.

Consider autonomous vehicles – they can't afford to send sensor data to the cloud and wait for a response. Every millisecond matters when making split-second decisions about steering, braking, or acceleration. Edge AI enables these vehicles to process visual and sensor data locally, making critical decisions in real-time.

The hardware landscape is evolving rapidly to support this shift. Specialized AI chips like Google's Edge TPU, Intel's Neural Compute Stick, and NVIDIA's Jetson series are making it possible to run sophisticated models on resource-constrained devices.

But edge AI isn't just about hardware – it's about rethinking how we design and deploy AI systems. Model optimization techniques like quantization, pruning, and knowledge distillation are becoming essential skills for AI engineers.

Privacy is another compelling advantage. By processing data locally, edge AI systems can provide intelligent functionality without exposing sensitive information to cloud services. This is particularly important in healthcare, finance, and other privacy-sensitive domains.

The future is distributed, intelligent, and happening at the edge.`,
      date: '2024-01-05',
      readTime: '10 min read',
      tags: ['Edge AI', 'IoT', 'Real-time Computing', 'Privacy'],
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 4,
      title: 'Quantum Computing Meets AI: The Next Computational Revolution',
      excerpt: 'Exploring the potential of quantum machine learning and how quantum computers could accelerate AI breakthroughs.',
      content: `Quantum computing and artificial intelligence are two of the most transformative technologies of our time. Their convergence promises to unlock computational capabilities that could revolutionize how we approach complex problems.

Quantum machine learning (QML) leverages quantum mechanical phenomena like superposition and entanglement to process information in fundamentally new ways. While classical computers process bits sequentially, quantum computers can explore multiple solution paths simultaneously through quantum parallelism.

Current applications of QML are still in their infancy, but early results are promising. Quantum algorithms for optimization problems, which are central to many ML tasks, show potential for exponential speedups over classical approaches.

However, we're still in the NISQ (Noisy Intermediate-Scale Quantum) era, where quantum computers are limited by noise and decoherence. Most current quantum computers can only maintain quantum states for microseconds before environmental interference destroys the delicate quantum information.

Despite these challenges, major tech companies and research institutions are investing heavily in quantum AI research. IBM's quantum network, Google's quantum supremacy experiments, and startups like Rigetti and IonQ are pushing the boundaries of what's possible.

The timeline for practical quantum advantage in AI remains uncertain, but the potential impact is enormous. Problems that are intractable for classical computers – like simulating molecular interactions for drug discovery or optimizing complex logistics networks – could become solvable with quantum-enhanced AI.`,
      date: '2023-12-28',
      readTime: '15 min read',
      tags: ['Quantum Computing', 'AI', 'Future Tech', 'Research'],
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-orange-400 to-red-500'
    },
    {
      id: 5,
      title: 'Ethical AI in Gaming: Balancing Engagement and Well-being',
      excerpt: 'Examining the responsibility of game developers to create AI systems that enhance player experience without exploiting psychological vulnerabilities.',
      content: `As AI becomes more sophisticated in gaming, we face important ethical questions about how these systems should interact with players. The same techniques that can create more engaging experiences can also be used to exploit psychological vulnerabilities.

Modern games use AI to analyze player behavior in real-time, adjusting difficulty, rewards, and content to maximize engagement. While this can create better experiences, it also raises concerns about manipulation and addiction.

The concept of "dark patterns" in game design – techniques that trick users into spending more time or money – becomes more concerning when powered by AI. Machine learning algorithms can identify the exact moments when a player is most likely to make a purchase or continue playing, even when it might not be in their best interest.

Responsible AI in gaming requires transparency and player agency. Players should understand how AI systems are influencing their experience and have control over these systems. This might include options to disable certain AI features or set limits on playtime and spending.

The gaming industry has an opportunity to lead by example in ethical AI development. By prioritizing player well-being alongside engagement, we can create AI systems that enhance rather than exploit the human experience.

This isn't just about doing the right thing – it's about building sustainable relationships with players based on trust and mutual benefit rather than manipulation and exploitation.`,
      date: '2023-12-20',
      readTime: '11 min read',
      tags: ['Ethics', 'AI', 'Gaming', 'Player Well-being'],
      image: 'https://images.pexels.com/photos/123335/pexels-photo-123335.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-indigo-400 to-purple-500'
    },
    {
      id: 6,
      title: 'The Evolution of Programming: From Code to Conversation',
      excerpt: 'How AI-powered development tools are changing the way we write code and what this means for the future of software development.',
      content: `The relationship between humans and computers is evolving from command-based interaction to natural conversation. AI-powered development tools like GitHub Copilot, ChatGPT, and specialized coding assistants are transforming how we write software.

These tools don't just autocomplete code – they understand context, suggest entire functions, and can even explain complex algorithms in plain English. This shift is democratizing programming, making it accessible to people who might have been intimidated by traditional coding approaches.

However, this evolution also raises important questions about the nature of programming itself. If AI can generate code from natural language descriptions, what skills will human programmers need in the future?

The answer isn't that programmers will become obsolete, but that our role will evolve. We'll spend less time writing boilerplate code and more time on high-level design, problem-solving, and ensuring that AI-generated code meets quality and security standards.

Code review becomes even more critical when AI is involved in the development process. We need to understand not just what the code does, but why the AI chose that particular approach and whether it aligns with our intentions.

The future of programming is collaborative – humans and AI working together to solve complex problems more efficiently than either could alone. This partnership requires new skills: the ability to communicate effectively with AI systems, to validate AI-generated solutions, and to maintain the human judgment that ensures technology serves human needs.`,
      date: '2023-12-15',
      readTime: '9 min read',
      tags: ['Programming', 'AI Tools', 'Future of Work', 'Development'],
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-pink-400 to-rose-500'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-black dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Tech Insights
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Exploring the cutting edge of AI, gaming technology, and innovation through in-depth analysis and practical insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id}
              className="group bg-gray-900/50 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/40 transition-all duration-500 transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${post.color} text-white`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-gray-400 text-sm mb-3">
                  <Calendar size={14} className="mr-2" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <Clock size={14} className="ml-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3">
                  {post.excerpt}
                </p>

                <button
                  onClick={() => setSelectedPost(index)}
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                >
                  <span>Read More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gray-900/50 backdrop-blur-md p-8 rounded-2xl border border-gray-800 inline-block">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Get the latest insights on AI, gaming technology, and innovation delivered to your inbox.
            </p>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Post Modal */}
      {selectedPost !== null && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={blogPosts[selectedPost].image} 
                alt={blogPosts[selectedPost].title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors duration-300"
              >
                <X size={20} />
              </button>
              <div className="absolute bottom-4 left-4">
                <div className="flex flex-wrap gap-2">
                  {blogPosts[selectedPost].tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${blogPosts[selectedPost].color} text-white`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex items-center text-gray-400 text-sm mb-4">
                <Calendar size={16} className="mr-2" />
                <span>{new Date(blogPosts[selectedPost].date).toLocaleDateString()}</span>
                <Clock size={16} className="ml-6 mr-2" />
                <span>{blogPosts[selectedPost].readTime}</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                {blogPosts[selectedPost].title}
              </h1>
              
              <div className="prose prose-invert max-w-none">
                {blogPosts[selectedPost].content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-300 text-lg leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;