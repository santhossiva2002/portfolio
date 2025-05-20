import { profileData } from "@/lib/data";
import { motion } from "framer-motion";

type SidebarProps = {
  activeSection?: string;
};

export function Sidebar({ activeSection = 'profile' }: SidebarProps) {
  const menuItems = [
    { id: 'profile', icon: 'user-3-line', label: 'Profile' },
    { id: 'education', icon: 'graduation-cap-line', label: 'Education' },
    { id: 'skills', icon: 'tools-line', label: 'Skills' },
    { id: 'projects', icon: 'code-box-line', label: 'Projects' },
    { id: 'experience', icon: 'briefcase-line', label: 'Experience' },
    { id: 'achievements', icon: 'trophy-line', label: 'Achievements' }
  ];

  return (
    <motion.aside 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="hidden lg:flex flex-col w-72 glass-effect shadow-xl"
    >
      <motion.div 
        className="p-6 flex flex-col items-center space-y-4 border-b border-gray-200 dark:border-gray-700/30"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {/* Profile Image with animation */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" 
            alt={profileData.name} 
            className="w-28 h-28 rounded-full object-cover border-4 border-primary shadow-lg"
          />
          <motion.div 
            className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary to-accent opacity-75 blur-sm -z-10"
            animate={{ 
              scale: [1, 1.02, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
        </motion.div>
        
        <div className="text-center">
          <h1 className="text-xl font-bold gradient-text">{profileData.name}</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">{profileData.title}</p>
        </div>
        
        <div className="flex space-x-4">
          <motion.a 
            href={`https://${profileData.contact.linkedin}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="ri-linkedin-fill text-xl"></i>
          </motion.a>
          <motion.a 
            href={`https://${profileData.contact.github}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="ri-github-fill text-xl"></i>
          </motion.a>
          <motion.a 
            href={`mailto:${profileData.contact.email}`} 
            className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="ri-mail-fill text-xl"></i>
          </motion.a>
          <motion.a 
            href={`tel:${profileData.contact.phone}`} 
            className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="ri-phone-fill text-xl"></i>
          </motion.a>
        </div>
      </motion.div>
      
      <nav className="py-5 flex-1">
        <ul className="space-y-3 px-4">
          {menuItems.map((item, index) => (
            <motion.li 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <motion.a 
                href={`#${item.id}`}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-white/40 dark:hover:bg-gray-700/40 group transition-all ${
                  activeSection === item.id 
                    ? 'bg-white dark:bg-gray-700/60 text-primary shadow-sm' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className={`ri-${item.icon} text-lg ${
                  activeSection === item.id 
                    ? 'text-primary' 
                    : 'text-gray-500 dark:text-gray-400 group-hover:text-primary'
                }`}></i>
                <span>{item.label}</span>
              </motion.a>
            </motion.li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-200 dark:border-gray-700/30">
        <motion.p 
          className="text-sm text-gray-500 dark:text-gray-400 text-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          © {new Date().getFullYear()} {profileData.name}
        </motion.p>
      </div>
    </motion.aside>
  );
}
