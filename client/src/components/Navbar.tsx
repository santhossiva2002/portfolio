import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { profileData } from "@/lib/data";
import { useTheme } from './ThemeProvider';

type NavbarProps = {
  activeSection: string;
};

export function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const menuItems = [
    { id: 'profile', icon: 'user-3-line', label: 'Profile' },
    { id: 'education', icon: 'graduation-cap-line', label: 'Education' },
    { id: 'skills', icon: 'tools-line', label: 'Skills' },
    { id: 'projects', icon: 'code-box-line', label: 'Projects' },
    { id: 'experience', icon: 'briefcase-line', label: 'Experience' },
    { id: 'achievements', icon: 'trophy-line', label: 'Achievements' },
    { id: 'goals-hobbies', icon: 'heart-3-line', label: 'Goals & Hobbies' }
  ];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <a href="#profile" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                {profileData.name.charAt(0)}
              </div>
              <span className="font-semibold hidden md:block">{profileData.name}</span>
            </a>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className={`px-3 py-2 rounded-md text-sm transition-colors duration-200 flex items-center space-x-1 ${
                  activeSection === item.id 
                    ? 'text-primary bg-primary/10' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-700/30'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <i className={`ri-${item.icon}`}></i>
                <span>{item.label}</span>
              </motion.a>
            ))}
          </div>
          
          {/* Theme Toggle */}
          <motion.button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="ml-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700/30 transition-colors"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <i className="ri-sun-line text-lg text-yellow-500"></i>
            ) : (
              <i className="ri-moon-line text-lg text-blue-700"></i>
            )}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}