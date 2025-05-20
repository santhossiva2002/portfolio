import { Navbar } from "@/components/Navbar";
import { MobileNavigation } from "@/components/MobileNav";
import { ProfileSection } from "@/components/ProfileSection";
import { EducationSection } from "@/components/EducationSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { GoalsHobbiesSection } from "@/components/GoalsHobbiesSection";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('profile');
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  // Handle smooth scrolling and active link highlighting
  useEffect(() => {
    // Set page as loaded for animations
    setIsPageLoaded(true);
    
    function handleScroll() {
      const sections = document.querySelectorAll('section');
      
      let current = '';
      
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        
        // Check if section is in viewport (with some offset)
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = section.getAttribute('id') || '';
        }
      });
      
      if (current !== '' && current !== activeSection) {
        setActiveSection(current);
      }
    }

    // Add smooth scroll behavior to all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();
        
        const element = e.currentTarget as HTMLAnchorElement;
        const href = element.getAttribute('href');
        
        if (href && href !== '#') {
          const targetElement = document.querySelector(href);
          
          if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);
  
  // Animation variants for sections
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const sectionVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted dark:from-background dark:to-muted">
      {/* Desktop and Mobile Navbar */}
      <Navbar activeSection={activeSection} />
      
      {/* Main Content */}
      <main className="pt-20 pb-24">
        <motion.div 
          className="container mx-auto px-4 max-w-5xl space-y-8"
          initial="hidden"
          animate={isPageLoaded ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={sectionVariants}>
            <ProfileSection />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <EducationSection />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <SkillsSection />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <ProjectsSection />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <ExperienceSection />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <AchievementsSection />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <GoalsHobbiesSection />
          </motion.div>
        </motion.div>
        
        <Footer />
      </main>
      
      {/* Mobile Bottom Navigation */}
      <MobileNavigation activeSection={activeSection} />
    </div>
  );
}
