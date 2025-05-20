import { profileData } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Experience</h2>
      
      <div className="space-y-8">
        {/* Experience items */}
        {profileData.experience.map((exp, index) => (
          <div 
            key={index}
            className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-primary-500 before:rounded-full before:z-10"
          >
            <div className="mb-1 flex items-center">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{exp.title}</h3>
              <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
            </div>
            <div className="text-gray-600 dark:text-gray-300">{exp.company}</div>
            <div className="mt-3 text-gray-600 dark:text-gray-300 text-sm">
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
        
        {/* Roles and Responsibilities Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Roles and Responsibilities</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profileData.roles.map((role, index) => (
              <div key={index} className="flex items-start">
                <div className={`flex-shrink-0 w-10 h-10 rounded-full ${role.bgColor} ${role.darkBgColor} flex items-center justify-center`}>
                  <i className={`ri-${role.icon} ${role.iconColor} ${role.darkIconColor} text-xl`}></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-medium text-gray-800 dark:text-gray-100">{role.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{role.organization}, {role.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
