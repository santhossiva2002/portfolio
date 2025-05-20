import { profileData } from "@/lib/data";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 py-12 border-t border-gray-200 dark:border-gray-700 mt-12">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start mb-3">
              <span className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center mr-3 text-xl shadow-md">
                {profileData.name.charAt(0)}
              </span>
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {profileData.name.split(' ')[0]} <span className="text-primary">{profileData.name.split(' ')[1]}</span>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{profileData.title}</p>
              </div>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm pl-2">
              Building scalable, user-centric applications <br />with modern technologies
            </p>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#profile" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-foreground transition-colors">
                  Profile
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-foreground transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-foreground transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#goals-hobbies" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-foreground transition-colors">
                  Goals & Hobbies
                </a>
              </li>
            </ul>
          </motion.div>
          
          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Connect With Me</h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              <motion.a 
                href={`mailto:${profileData.contact.email}`}
                className="bg-white dark:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center shadow-sm hover:shadow-md text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-foreground transition-all"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="ri-mail-line text-lg"></i>
              </motion.a>
              <motion.a 
                href={`tel:${profileData.contact.phone}`}
                className="bg-white dark:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center shadow-sm hover:shadow-md text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-foreground transition-all"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="ri-phone-line text-lg"></i>
              </motion.a>
              <motion.a 
                href={`https://${profileData.contact.linkedin}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center shadow-sm hover:shadow-md text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-foreground transition-all"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="ri-linkedin-box-fill text-lg"></i>
              </motion.a>
              <motion.a 
                href={`https://${profileData.contact.github}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center shadow-sm hover:shadow-md text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-foreground transition-all"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="ri-github-fill text-lg"></i>
              </motion.a>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {profileData.contact.email}<br />
              {profileData.contact.phone}
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} {profileData.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 flex items-center justify-center space-x-1">
            <span>Built with</span>
            <i className="ri-reactjs-line text-blue-400"></i>
            <span>React,</span>
            <i className="ri-tailwind-css-line text-teal-400"></i>
            <span>Tailwind CSS, and Framer Motion</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}