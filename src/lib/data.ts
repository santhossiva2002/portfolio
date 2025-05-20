// Siva Poopathi M's profile data

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
}

export interface Skill {
  category: string;
  icon: string;
  color: string;
  bgColor: string;
  darkBgColor: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  category: string;
  categoryBg: string;
  categoryColor: string;
  darkCategoryBg: string;
  darkCategoryColor: string;
  tags: string[];
  link?: string;
  isExternal?: boolean;
  linkText?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Role {
  title: string;
  organization: string;
  period: string;
  icon: string;
  bgColor: string;
  iconColor: string;
  darkBgColor: string;
  darkIconColor: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  iconColor: string;
  darkBgColor: string;
  darkIconColor: string;
}

export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
  education: Education[];
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  roles: Role[];
  achievements: Achievement[];
}

export const profileData: ProfileData = {
  name: "Siva Poopathi M",
  title: "Full Stack Developer",
  bio: "Passionate and adaptable Full Stack Developer and Software Engineer with hands-on experience in building scalable, low-latency applications and end-to-end solutions. Proficient in MERN stack, Java, Python, and automation testing. Skilled in system design, real-time automation, CI/CD pipelines, and grounded in strong Computer Engineering principles. A committed communicator and team player focused on delivering business-aligned software products.",
  contact: {
    email: "sivapoopathi290702@gmail.com",
    phone: "+91 9345715818",
    linkedin: "linkedin.com/in/sivapoopathi-m-b30a09335",
    github: "github.com/santhossiva2002"
  },
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "PSG College of Technology, Coimbatore",
      period: "2023–2025",
      grade: "CGPA: 7.7/10 (Pursuing)"
    },
    {
      degree: "B.Sc. Computer Systems and Design",
      institution: "PSG College of Technology, Coimbatore",
      period: "2020–2023",
      grade: "CGPA: 7.5/10"
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      icon: "code-line",
      color: "text-primary-500",
      bgColor: "bg-primary-100",
      darkBgColor: "dark:bg-primary-900",
      items: ["Java", "Python", "C", "SQL", "JavaScript", "TypeScript"]
    },
    {
      category: "Frontend Technologies",
      icon: "layout-line",
      color: "text-secondary-500",
      bgColor: "bg-green-100",
      darkBgColor: "dark:bg-green-900",
      items: ["HTML5", "CSS3", "React.js", "Angular (v15+)", "TypeScript"]
    },
    {
      category: "Backend Technologies",
      icon: "server-line",
      color: "text-accent-500",
      bgColor: "bg-purple-100",
      darkBgColor: "dark:bg-purple-900",
      items: ["Node.js", "Express.js", "NestJS", "Spring Boot"]
    },
    {
      category: "Tools & Platforms",
      icon: "tools-fill",
      color: "text-yellow-500",
      bgColor: "bg-yellow-100",
      darkBgColor: "dark:bg-yellow-900",
      items: ["Docker", "AWS", "Postman", "Git", "GitHub Actions", "Selenium", "NPM", "UNIX/Linux"]
    },
    {
      category: "Databases",
      icon: "database-2-line",
      color: "text-blue-500",
      bgColor: "bg-blue-100",
      darkBgColor: "dark:bg-blue-900",
      items: ["MongoDB", "MySQL", "Firebase"]
    },
    {
      category: "Networking & Protocols",
      icon: "global-line",
      color: "text-indigo-500",
      bgColor: "bg-indigo-100",
      darkBgColor: "dark:bg-indigo-900",
      items: ["TCP/IP", "Socket Programming", "HTTP/HTTPS", "DNS", "Load Balancing"]
    },
    {
      category: "Concepts & Methodologies",
      icon: "brain-line",
      color: "text-red-500",
      bgColor: "bg-red-100",
      darkBgColor: "dark:bg-red-900",
      items: ["OOP", "Data Structures and Algorithms", "RESTful APIs", "Distributed Systems", "Fault-Tolerant Architecture", "Agile Methodologies", "MVC Architecture", "Unit Testing", "CI/CD Pipelines"]
    }
  ],
  projects: [
    {
      title: "C.H.O.P.P.E.R — AI Assistant",
      description: "Voice-controlled assistant with task automation, NLP, system control, and contextual interaction. Integrated APIs for enhanced user experience.",
      category: "Python",
      categoryBg: "bg-primary-100",
      categoryColor: "text-primary-800",
      darkCategoryBg: "dark:bg-primary-900",
      darkCategoryColor: "dark:text-primary-300",
      tags: ["Google Gemini", "TTS", "AI"],
      link: "#",
      linkText: "View Project"
    },
    {
      title: "Health Connect",
      description: "End-to-end encrypted communication using Signal Protocol. Integrated NHS API for verified healthcare data.",
      category: "MERN Stack",
      categoryBg: "bg-green-100",
      categoryColor: "text-green-800",
      darkCategoryBg: "dark:bg-green-900",
      darkCategoryColor: "dark:text-green-300",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      link: "#",
      linkText: "View Project"
    },
    {
      title: "AirRail Agenda",
      description: "MERN-based transport scheduler using MVC, live scraping, and visualization.",
      category: "MERN Stack",
      categoryBg: "bg-blue-100",
      categoryColor: "text-blue-800",
      darkCategoryBg: "dark:bg-blue-900",
      darkCategoryColor: "dark:text-blue-300",
      tags: ["Real-time", "MVC", "Visualization"],
      link: "#",
      linkText: "View Project"
    },
    {
      title: "SoftSell",
      description: "Responsive single-page React.js marketing site for a software resale startup. Built using Vite and Tailwind CSS with features like mobile responsiveness, lead-gen form, SEO optimization, and smooth UI/UX.",
      category: "React.js",
      categoryBg: "bg-yellow-100",
      categoryColor: "text-yellow-800",
      darkCategoryBg: "dark:bg-yellow-900",
      darkCategoryColor: "dark:text-yellow-300",
      tags: ["Vite", "Tailwind CSS", "SEO"],
      link: "https://santhossiva2002.github.io/Softsell/",
      isExternal: true,
      linkText: "Visit Site"
    },
    {
      title: "DataChat",
      description: "Interactive data visualization and analysis platform with real-time collaborative chat features. Allows users to upload, analyze, and discuss datasets collaboratively.",
      category: "Full Stack",
      categoryBg: "bg-purple-100",
      categoryColor: "text-purple-800",
      darkCategoryBg: "dark:bg-purple-900",
      darkCategoryColor: "dark:text-purple-300",
      tags: ["React", "Node.js", "Socket.io", "Data Viz"],
      link: "https://datachat-server.onrender.com",
      isExternal: true,
      linkText: "View on GitHub"
    },
    {
      title: "CodeLearn",
      description: "Interactive programming learning platform with built-in code editor, tutorials, and real-time feedback. Supports multiple programming languages and provides step-by-step learning paths.",
      category: "Educational",
      categoryBg: "bg-indigo-100",
      categoryColor: "text-indigo-800",
      darkCategoryBg: "dark:bg-indigo-900",
      darkCategoryColor: "dark:text-indigo-300",
      tags: ["JavaScript", "MongoDB", "Express", "CodeMirror"],
      link: "https://codelearn-production.up.railway.app/",
      isExternal: true,
      linkText: "View on GitHub"
    }
  ],
  experience: [
    {
      title: "Software Development and Testing Intern",
      company: "DMeX Solutions",
      period: "Jan 2025– Apr 2025",
      description: "Developed full-stack applications and automation test cases using Angular, NestJS, Selenium. Participated in Agile development and product testing."
    }
  ],
  roles: [
    {
      title: "Event Coordinator",
      organization: "CyberNerd Symposium",
      period: "2024–2025",
      icon: "community-line",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-500",
      darkBgColor: "dark:bg-blue-900",
      darkIconColor: "dark:text-blue-300"
    },
    {
      title: "Executive Member",
      organization: "Computer Applications Association",
      period: "2023–2025",
      icon: "team-line",
      bgColor: "bg-green-100",
      iconColor: "text-green-500",
      darkBgColor: "dark:bg-green-900",
      darkIconColor: "dark:text-green-300"
    },
    {
      title: "Captain",
      organization: "Football Team",
      period: "2016–2020",
      icon: "football-line",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-500",
      darkBgColor: "dark:bg-yellow-900",
      darkIconColor: "dark:text-yellow-300"
    }
  ],
  achievements: [
    {
      title: "Finalist",
      description: "Caterpillar Codeathon (2024)",
      icon: "trophy-line",
      bgColor: "bg-primary-100",
      iconColor: "text-primary-500",
      darkBgColor: "dark:bg-primary-900",
      darkIconColor: "dark:text-primary-300"
    },
    {
      title: "Runner-Up",
      description: "State Level Boxing Championship (2019)",
      icon: "boxing-line",
      bgColor: "bg-secondary-100",
      iconColor: "text-secondary-500",
      darkBgColor: "dark:bg-secondary-900/30",
      darkIconColor: "dark:text-secondary-300"
    }
  ]
};
