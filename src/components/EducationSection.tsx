import { profileData } from "@/lib/data";
import { motion } from "framer-motion";

export function EducationSection() {
  return (
    <section id="education" className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white inline-block relative">
          Education
          <motion.span 
            className="absolute -bottom-1 left-0 w-full h-1 bg-primary rounded"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
        </h2>
      </motion.div>
      
      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        {profileData.education.map((edu, index) => (
          <motion.div 
            key={index}
            className="bg-gray-50 dark:bg-gray-700 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg">
                <i className="ri-graduation-cap-fill text-2xl text-primary"></i>
              </div>

              <div className="flex-1">
                <div className="flex flex-col mb-2">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{edu.degree}</h3>
                  <span className="text-sm font-medium text-primary dark:text-primary-foreground">{edu.period}</span>
                </div>
                
                <div className="text-gray-600 dark:text-gray-300">{edu.institution}</div>
                
                <div className="mt-2 flex items-center">
                  <div className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-sm text-gray-700 dark:text-gray-300 inline-flex items-center">
                    <i className="ri-star-line mr-1"></i>
                    {edu.grade}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
