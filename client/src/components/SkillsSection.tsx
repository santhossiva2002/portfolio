import { profileData } from "@/lib/data";
import { motion } from "framer-motion";

// Skill category colors mapping for consistent styling
const skillColors = {
  "Programming Languages": {
    icon: "code-line",
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  "Frontend Technologies": {
    icon: "layout-line",
    color: "text-green-600 dark:text-green-400",
    bg: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  },
  "Backend Technologies": {
    icon: "server-line",
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  },
  "Tools & Platforms": {
    icon: "tools-fill",
    color: "text-yellow-600 dark:text-yellow-400",
    bg: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  },
  "Databases": {
    icon: "database-2-line",
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  "Networking & Protocols": {
    icon: "global-line",
    color: "text-indigo-600 dark:text-indigo-400",
    bg: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
  },
  "Concepts & Methodologies": {
    icon: "brain-line",
    color: "text-red-600 dark:text-red-400",
    bg: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  }
};

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };
  
  const skillVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 10 }
    }
  };

  return (
    <section id="skills" className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white inline-block relative">
          Technical Skills
          <motion.span 
            className="absolute -bottom-1 left-0 w-full h-1 bg-primary rounded"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
        </h2>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Map through skill categories except Concepts */}
        {profileData.skills.slice(0, 6).map((skill, index) => {
          const colorConfig = skillColors[skill.category as keyof typeof skillColors] || skillColors["Programming Languages"];
          
          return (
            <motion.div 
              key={index}
              variants={skillVariants}
              className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-opacity-20 ${colorConfig.bg.split(' ')[0]}`}>
                  <i className={`ri-${colorConfig.icon} text-xl ${colorConfig.color}`}></i>
                </div>
                <span>{skill.category}</span>
              </h3>
              
              <motion.div 
                className="flex flex-wrap gap-2"
                variants={containerVariants}
              >
                {skill.items.map((item, idx) => (
                  <motion.span 
                    key={idx}
                    variants={itemVariants}
                    className={`${colorConfig.bg} px-3 py-1 rounded-full text-sm`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
      
      {/* Concepts section (always spans full width) */}
      {profileData.skills.slice(6).map((skill, index) => {
        const colorConfig = skillColors[skill.category as keyof typeof skillColors] || skillColors["Concepts & Methodologies"];
        
        return (
          <motion.div 
            key={index} 
            className="mt-8 bg-gray-50 dark:bg-gray-700 p-5 rounded-lg shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-opacity-20 ${colorConfig.bg.split(' ')[0]}`}>
                <i className={`ri-${colorConfig.icon} text-xl ${colorConfig.color}`}></i>
              </div>
              <span>{skill.category}</span>
            </h3>
            
            <motion.div 
              className="flex flex-wrap gap-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skill.items.map((item, idx) => (
                <motion.span 
                  key={idx}
                  variants={itemVariants} 
                  className={`${colorConfig.bg} px-3 py-1 rounded-full text-sm`}
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        );
      })}
    </section>
  );
}
