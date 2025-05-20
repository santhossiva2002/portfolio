import { useState } from 'react';
import { profileData } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

type MobileNavProps = {
  activeSection?: string;
};

export function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.2,
        staggerChildren: 0.05
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.2 }
    }
  };
  
  const menuItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -10 }
  };
  
  return (
    <header className="glass-effect lg:hidden backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1 
          className="text-xl font-bold gradient-text"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {profileData.name.split(' ')[0]} <span className="opacity-80">{profileData.name.split(' ')[1]}</span>
        </motion.h1>
        <motion.button 
          onClick={toggleMenu}
          className="text-gray-700 dark:text-gray-200 focus:outline-none p-2 rounded-full hover:bg-white/20 dark:hover:bg-gray-700/30 transition-colors"
          aria-label="Toggle menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
        </motion.button>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <nav className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg">
              <ul className="divide-y divide-gray-200/50 dark:divide-gray-700/50">
                {['Profile', 'Education', 'Skills', 'Projects', 'Experience', 'Achievements'].map((item, index) => (
                  <motion.li key={item} variants={menuItemVariants}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      onClick={closeMenu}
                      className="block px-6 py-4 hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors font-medium"
                    >
                      <div className="flex items-center space-x-3">
                        <i className={`ri-${
                          item === 'Profile' ? 'user-3-line' :
                          item === 'Education' ? 'graduation-cap-line' :
                          item === 'Skills' ? 'tools-line' :
                          item === 'Projects' ? 'code-box-line' :
                          item === 'Experience' ? 'briefcase-line' :
                          'trophy-line'
                        } text-lg text-primary`}></i>
                        <span>{item}</span>
                      </div>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function MobileNavigation({ activeSection = 'profile' }: MobileNavProps) {
  const menuItems = [
    { id: 'profile', icon: 'user-3-line', label: 'Profile' },
    { id: 'education', icon: 'graduation-cap-line', label: 'Education' },
    { id: 'skills', icon: 'tools-line', label: 'Skills' },
    { id: 'projects', icon: 'code-box-line', label: 'Projects' },
    { id: 'experience', icon: 'briefcase-line', label: 'Experience' },
    { id: 'goals-hobbies', icon: 'heart-3-line', label: 'Goals' }
  ];

  return (
    <motion.nav 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, type: "spring" }}
      className="fixed bottom-0 left-0 right-0 glass-effect backdrop-blur-md lg:hidden z-50 border-t border-gray-200/20 dark:border-gray-700/20"
    >
      <div className="flex justify-around">
        {menuItems.map((item) => (
          <motion.a 
            key={item.id}
            href={`#${item.id}`} 
            className="flex flex-col items-center py-3 px-3"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.i 
              className={`ri-${item.icon} text-lg ${
                activeSection === item.id ? 'text-primary' : 'text-gray-500 dark:text-gray-400'
              }`}
              animate={activeSection === item.id ? {
                scale: [1, 1.2, 1],
                transition: { duration: 0.5 }
              } : {}}
            ></motion.i>
            <span className={`text-xs mt-1 ${
              activeSection === item.id ? 'text-primary font-medium' : 'text-gray-600 dark:text-gray-400'
            }`}>{item.label}</span>
            {activeSection === item.id && (
              <motion.div 
                className="w-1.5 h-1.5 rounded-full bg-primary mt-1"
                layoutId="activeIndicator"
              />
            )}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
}
