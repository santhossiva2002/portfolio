import { profileData } from "@/lib/data";
import { motion } from "framer-motion";

// Helper function to sort projects to prioritize SoftSell, DataChat, and CodeLearn
const prioritizeProjects = (projects: any[]) => {
  const priorityProjects = ["SoftSell", "DataChat", "CodeLearn"];
  
  return [...projects].sort((a, b) => {
    // Check if a is a priority project
    const aIsPriority = priorityProjects.includes(a.title);
    // Check if b is a priority project
    const bIsPriority = priorityProjects.includes(b.title);
    
    // If a is priority and b isn't, a comes first
    if (aIsPriority && !bIsPriority) return -1;
    // If b is priority and a isn't, b comes first
    if (!aIsPriority && bIsPriority) return 1;
    // If both are priority projects, sort by their index in the priority list
    if (aIsPriority && bIsPriority) {
      return priorityProjects.indexOf(a.title) - priorityProjects.indexOf(b.title);
    }
    // If neither are priority projects, maintain original order
    return 0;
  });
};

export function ProjectsSection() {
  const sortedProjects = prioritizeProjects(profileData.projects);
  
  const hasLiveDemo = (project: any) => {
    return project.title === "SoftSell" || project.title === "DataChat" || project.title === "CodeLearn";
  };
  
  const getLiveDemoLink = (project: any) => {
    return project.link;
  };
  
  const getGithubLink = (project: any) => {
    if (project.title === "SoftSell") return "https://github.com/santhossiva2002/Softsell";
    if (project.title === "DataChat") return "https://github.com/santhossiva2002/DataChat";
    if (project.title === "CodeLearn") return "https://github.com/santhossiva2002/codelearn";
    if (project.title === "C.H.O.P.P.E.R — AI Assistant") return "https://github.com/santhossiva2002";
    if (project.title === "Health Connect") return "https://github.com/santhossiva2002";
    if (project.title === "AirRail Agenda") return "https://github.com/santhossiva2002";
    return "https://github.com/santhossiva2002";
  };
  
  return (
    <section id="projects" className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white inline-block relative">
          Projects
          <motion.span 
            className="absolute -bottom-1 left-0 w-full h-1 bg-primary rounded"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
        </h2>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sortedProjects.map((project, index) => (
          <motion.div 
            key={index}
            className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            {/* Project header with category badge */}
            <div className="border-b border-gray-200 dark:border-gray-600 p-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{project.title}</h3>
              <span 
                className={`bg-${project.category === "MERN Stack" ? "green" : 
                            project.category === "React.js" ? "blue" :
                            project.category === "Python" ? "indigo" :
                            project.category === "Full Stack" ? "purple" :
                            project.category === "Educational" ? "yellow" : "gray"}-100 
                          text-${project.category === "MERN Stack" ? "green" : 
                            project.category === "React.js" ? "blue" :
                            project.category === "Python" ? "indigo" :
                            project.category === "Full Stack" ? "purple" :
                            project.category === "Educational" ? "yellow" : "gray"}-800 
                          dark:bg-${project.category === "MERN Stack" ? "green" : 
                            project.category === "React.js" ? "blue" :
                            project.category === "Python" ? "indigo" :
                            project.category === "Full Stack" ? "purple" :
                            project.category === "Educational" ? "yellow" : "gray"}-900 
                          dark:text-${project.category === "MERN Stack" ? "green" : 
                            project.category === "React.js" ? "blue" :
                            project.category === "Python" ? "indigo" :
                            project.category === "Full Stack" ? "purple" :
                            project.category === "Educational" ? "yellow" : "gray"}-300 
                          text-xs font-medium px-2.5 py-1 rounded-full`}
              >
                {project.category}
              </span>
            </div>
            
            {/* Project content */}
            <div className="p-4">
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {project.description}
              </p>
              
              <div className="mt-4 flex items-center gap-2 flex-wrap">
                {project.tags.map((tag, tagIndex) => (
                  <motion.span 
                    key={tagIndex}
                    className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded dark:bg-gray-600 dark:text-gray-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (tagIndex * 0.05) }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
            
            {/* Project links */}
            <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 flex justify-between">
              {/* GitHub link */}
              <motion.a 
                href={getGithubLink(project)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-foreground transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="ri-github-fill text-lg"></i>
                <span className="text-sm">GitHub</span>
              </motion.a>
              
              {/* Live demo link (only for select projects) */}
              {hasLiveDemo(project) ? (
                <motion.a 
                  href={getLiveDemoLink(project)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-primary dark:text-primary-foreground hover:text-primary/80 dark:hover:text-primary-foreground/80 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="ri-external-link-line text-lg"></i>
                  <span className="text-sm">Live Demo</span>
                </motion.a>
              ) : (
                <motion.a 
                  href={project.link || "#"}
                  target={project.isExternal ? "_blank" : "_self"}
                  rel={project.isExternal ? "noopener noreferrer" : ""}
                  className="flex items-center space-x-1 text-primary dark:text-primary-foreground hover:text-primary/80 dark:hover:text-primary-foreground/80 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="ri-information-line text-lg"></i>
                  <span className="text-sm">Details</span>
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
