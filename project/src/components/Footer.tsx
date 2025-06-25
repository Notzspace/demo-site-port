import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code className="text-cyan-400" size={20} />
            <span className="text-gray-300">Made with</span>
            <Heart className="text-red-500 animate-pulse" size={16} />
            <span className="text-gray-300">by</span>
            <span className="text-cyan-400 font-semibold">@ShadowDxD</span>
          </div>
          
          <div className="text-gray-400 text-sm">
            © 2024 Hemanth Kumar M. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;