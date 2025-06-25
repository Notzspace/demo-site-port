import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-black dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Initialize Contact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to collaborate on innovative AI projects or discuss the future of gaming technology? 
            Let's connect and build something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900/50 backdrop-blur-md p-8 rounded-2xl border border-gray-800">
            <div className="flex items-center mb-6">
              <MessageSquare className="text-cyan-400 mr-3" size={24} />
              <h3 className="text-2xl font-bold text-white">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white transition-colors duration-300"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white transition-colors duration-300"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
              >
                <Send size={20} />
                <span>Transmit Message</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-md p-8 rounded-2xl border border-gray-800">
              <div className="flex items-center mb-6">
                <Mail className="text-purple-400 mr-3" size={24} />
                <h3 className="text-2xl font-bold text-white">Direct Contact</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500/40 transition-colors duration-300">
                  <Mail className="text-cyan-400 mr-4" size={20} />
                  <div>
                    <div className="text-gray-400 text-sm">Email</div>
                    <a href="mailto:info_notzspace@yahoo.com" className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium">
                      info_notzspace@yahoo.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500/40 transition-colors duration-300">
                  <Phone className="text-cyan-400 mr-4" size={20} />
                  <div>
                    <div className="text-gray-400 text-sm">Phone</div>
                    <a href="tel:+919108118198" className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium">
                      +91 9108118198
                    </a>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <MapPin className="text-cyan-400 mr-4" size={20} />
                  <div>
                    <div className="text-gray-400 text-sm">Location</div>
                    <span className="text-white font-medium">India</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-md p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">Connect on Social</h3>
              
              <div className="grid grid-cols-3 gap-4">
                <a
                  href="https://github.com/Notzspace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 group border border-gray-700 hover:border-cyan-500/40"
                >
                  <Github className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300" size={24} />
                </a>
                
                <a
                  href="https://www.linkedin.com/in/og-hemanth-kumar-m?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 group border border-gray-700 hover:border-blue-500/40"
                >
                  <Linkedin className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300" size={24} />
                </a>
                
                <a
                  href="https://x.com/Notz_Space?t=Q_iodOKdntKP3Jvr5Udtag&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 group border border-gray-700 hover:border-blue-400/40"
                >
                  <Twitter className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300" size={24} />
                </a>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-md p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-4">Let's Build the Future</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm passionate about collaborating on innovative AI projects, gaming technology, 
                and cutting-edge web applications. Whether you have a groundbreaking idea or 
                need expertise in machine learning and development, let's connect and create 
                something extraordinary together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;