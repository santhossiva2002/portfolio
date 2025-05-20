import { motion } from "framer-motion";

export function GoalsHobbiesSection() {
  const goals = [
    {
      title: "Build Scalable AI Systems",
      description: "Expand my work on AI assistants like C.H.O.P.P.E.R into deployable, user-centric tools.",
      icon: "ai-line"
    },
    {
      title: "Master Full-Stack Architecture",
      description: "Deepen expertise in MERN, Spring Boot, and microservices to design efficient, robust applications.",
      icon: "stack-line"
    },
    {
      title: "Lead with Innovation",
      description: "Launch personal tech products that solve real-world problems through automation and intelligent design.",
      icon: "lightbulb-line"
    },
    {
      title: "Contribute to Open Source",
      description: "Give back to the community by sharing tools, documentation, and code that improve developer workflows.",
      icon: "git-branch-line"
    },
    {
      title: "Grow as a Cloud-Native Engineer",
      description: "Achieve cloud certifications (AWS/GCP) and build secure, scalable systems with CI/CD pipelines.",
      icon: "cloud-line"
    }
  ];

  const hobbies = [
    {
      title: "Football & Team Leadership",
      description: "Former football team captain, focused on teamwork, strategy, and resilience.",
      icon: "football-line"
    },
    {
      title: "Building Side Projects",
      description: "Love experimenting with new technologies and launching practical, problem-solving apps.",
      icon: "code-box-line"
    },
    {
      title: "Tech Exploration",
      description: "Regularly explore Linux, automation tools, and emerging frameworks.",
      icon: "terminal-line"
    },
    {
      title: "Hackathons & Tech Challenges",
      description: "Thrive in competitive settings that test creativity and speed.",
      icon: "timer-flash-line"
    },
    {
      title: "Mentoring & Knowledge Sharing",
      description: "Passionate about teaching, documenting processes, and supporting developer growth.",
      icon: "team-line"
    }
  ];
  
  const visionItems = [
    "Start my own product-based tech venture combining automation, AI, and user-centric platforms.",
    "Mentor junior developers and participate in developer communities and hackathons.",
    "Contribute to impactful open-source projects that shape the future of technology.",
    "Build a portfolio of innovative applications that solve real user problems."
  ];

  return (
    <section id="goals-hobbies" className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center p-6 mb-2 border-b border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white inline-block relative">
          Growth & Aspirations
          <motion.span 
            className="absolute -bottom-1 left-0 w-full h-1 bg-primary rounded"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
        </h2>
      </motion.div>
      
      {/* Goals Section */}
      <div className="p-6 md:p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6 border border-blue-100 dark:border-blue-900/30"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="text-xl font-semibold text-gray-800 dark:text-white mb-5 flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-500 text-white p-3 rounded-lg mr-4">
                <i className="ri-compass-3-line text-xl"></i>
              </div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500 text-2xl">Professional Goals</span>
            </motion.h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {goals.map((goal, index) => (
                <motion.div 
                  key={index}
                  className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <div className="flex">
                    <div className="bg-white dark:bg-gray-800 p-3 rounded-full mr-3 shadow-sm">
                      <i className={`ri-${goal.icon} text-lg text-blue-500`}></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-gray-100">{goal.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{goal.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Hobbies Section */}
      <div className="p-6 md:p-8 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/10 dark:to-orange-900/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6 border border-red-100 dark:border-red-900/30"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="text-xl font-semibold text-gray-800 dark:text-white mb-5 flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-red-500 text-white p-3 rounded-lg mr-4">
                <i className="ri-heart-3-line text-xl"></i>
              </div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500 text-2xl">Hobbies & Interests</span>
            </motion.h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {hobbies.map((hobby, index) => (
                <motion.div 
                  key={index}
                  className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-100 dark:border-red-800/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <div className="flex">
                    <div className="bg-white dark:bg-gray-800 p-3 rounded-full mr-3 shadow-sm">
                      <i className={`ri-${hobby.icon} text-lg text-red-500`}></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-gray-100">{hobby.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{hobby.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Vision Section */}
      <div className="p-6 md:p-8 bg-gradient-to-b from-purple-100 to-purple-50 dark:from-purple-900/20 dark:to-purple-800/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-purple-200 dark:border-purple-800/30"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="text-xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="bg-purple-500 text-white p-3 rounded-lg mr-4">
                <i className="ri-focus-3-line text-xl"></i>
              </div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500 text-2xl">Long-Term Vision</span>
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {visionItems.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg border border-purple-100 dark:border-purple-800/30"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="text-purple-600 dark:text-purple-400 mr-4 mt-1">
                    <i className="ri-arrow-right-circle-line text-2xl"></i>
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}