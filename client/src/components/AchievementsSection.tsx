import { profileData } from "@/lib/data";

export function AchievementsSection() {
  return (
    <section id="achievements" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Achievements</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {profileData.achievements.map((achievement, index) => (
          <div key={index} className="flex items-start p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className={`flex-shrink-0 w-12 h-12 rounded-full ${achievement.bgColor} ${achievement.darkBgColor} flex items-center justify-center`}>
              <i className={`ri-${achievement.icon} ${achievement.iconColor} ${achievement.darkIconColor} text-2xl`}></i>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{achievement.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
