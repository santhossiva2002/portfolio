import { profileData } from "@/lib/data";
import { motion } from "framer-motion";

export function ProfileSection() {
  return (
    <section id="profile" className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8">
      <div className="flex flex-col items-center text-center">
        {/* Profile image (responsive) */}
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", damping: 12 }}
        >
          <div className="relative">
            <motion.img 
            src={`${import.meta.env.BASE_URL}siva_image.jpeg`}

              // src="/siva_image.jpeg" 
              alt={profileData.name} 
              className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </div>
        </motion.div>
        
        <div className="w-full max-w-2xl mx-auto">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring" }}
              className="mb-2"
            >
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{profileData.name}</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">{profileData.title}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="bg-primary text-white font-medium px-4 py-1.5 rounded-full text-sm shadow-sm flex items-center justify-center space-x-1">
                <i className="ri-verify-line"></i>
                <span>Available for hire</span>
              </span>
            </motion.div>
          </div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.p 
              className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {profileData.bio}
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.a 
                href={`mailto:${profileData.contact.email}`}
                className="flex flex-col items-center p-3 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-2">
                  <i className="ri-mail-line text-xl text-blue-500 dark:text-blue-400"></i>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">Email</span>
              </motion.a>
              
              <motion.a 
                href={`tel:${profileData.contact.phone}`}
                className="flex flex-col items-center p-3 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center mb-2">
                  <i className="ri-phone-line text-xl text-green-500 dark:text-green-400"></i>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">Phone</span>
              </motion.a>
              
              <motion.a 
                href={`https://${profileData.contact.linkedin}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center p-3 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-2">
                  <i className="ri-linkedin-box-fill text-xl text-blue-600 dark:text-blue-500"></i>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">LinkedIn</span>
              </motion.a>
              
              <motion.a 
                href={`https://${profileData.contact.github}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center p-3 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center mb-2">
                  <i className="ri-github-fill text-xl text-gray-800 dark:text-gray-200"></i>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">GitHub</span>
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-3 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg">
                <i className="ri-medal-line text-lg text-yellow-500"></i>
                <span className="text-sm">Full Stack Developer</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg">
                <i className="ri-map-pin-line text-lg text-red-500"></i>
                <span className="text-sm">Coimbatore, India</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
