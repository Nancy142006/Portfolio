
const PERSONAL_DATA = {
  name: "Nancy",
  title: "An aspiring Web Developer",
  Quote: "Where Code Meets Creativity",
  status: "Currently working as an Intern",

  education: [
    {
      degree: "Secondary Education",
      year: "2020-2021",
      institution: "Army public School Yol Cantt(HP)",
      CGPA: "85%",
    },
    {
      degree: "Senior Secondary Education",
      year: "2022-2023",
      institution: "Army public School Yol Cantt(HP)",
      CGPA: "72%",
    },

    {
      degree: "Bachelor's of Computer Application",
      year: "Final Year (3rd Year)",
      institution: "Government Degree College Nagrota Bagwan (HP)",
      CGPA: "7.87",
    },
  ],

  contact: {
    email: "nancy14kapoor2006@gmail.com",
    github: "https://github.com/Nancy142006",
  },

  // CODING JOURNEY
  codingJourney: [
    {
      year: 2024,
      month: "January",
      title: "HTML",
      description: "Started with HTML",
      tech: "HTML",
      milestone: "first-code",
    },
    {
      year: 2024,
      month: "March",
      title: "Frontend Discovery",
      description: "Built my first web page",
      tech: "HTML, CSS, Javascript",
      milestone: "first-frontend",
    },
    {
      year: 2025,
      month: "January",
      title: "Learned about framework",
      description: "Learned React and built frontend using a framework",
      tech: "React",
      milestone: "first-frontend using framework",
    },
    {
      year: 2025,
      month: "February",
      title: "Backend Adventures",
      description: "Learned Node.js",
      tech: "Node.js",
      milestone: "first-backend",
    },
    {
      year: 2025,
      month: "March",
      title: "Database Mastery",
      description: "Integrated MongoDB and created full-stack application",
      tech: "MongoDB",
      milestone: "full-stack",
    },

    {
      year: 2025,
      month: "May",
      title: "Internship Journey",
      description: "Started professional development journey as an intern",
      tech: "MERN Stack",
      milestone: "professional",
    },
  ],

  // TECHNICAL SKILLS
  skills: {
    frontend: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "RESTful APIs"],
    database: ["MongoDB"],
    tools: ["Git", "VS Code", "Postman", "npm"],
  },

  // PROJECTS
  projects: [
    {
      name: "Digital-Wallet",
      description:
        "A secure MERN-stack-based digital wallet application that allows users to register, log in, send/receive money, and manage profiles. Features include email verification, OTP-based transactions, and profile image uploads using Multer.",
      tech: ["MongoDB", "React", "Express", "Node.js"],
      challenges:
        "Implementing OTP-secured transactions, Managing secure file uploads and email notifications, Handling real-time form validation and state management",
      impact:
        "Enhanced user experience with strong security practices, real-time interactivity, and seamless money transfer features, demonstrating full-stack capabilities and attention to user data protection.",
      link: "https://github.com/Nancy142006/digitalWallet",
    },
    {
      name: "Valentine-Week",
      description:
        "A creative multi-page React application celebrating Valentine’s Week, with interactive navigation, themed images/GIFs for each day, background music, and a visually engaging UI using React Router.",
      tech: ["React.js", "React Router", "HTML5", "JavaScript"],
      challenges:
        "Seamless audio integration across routes, Manual handling of daily content without relying on system dates, Crafting a responsive and visually appealing UI",
      impact:
        "Enhanced front-end skills by blending creativity with technical implementation, delivering an engaging user experience through dynamic content and modern design.",
      link: "https://github.com/Nancy142006/Valentine-week-Project",
    },
    {
      name: "Study-Planner",
      description:
        "A productivity-focused React application that helps users plan and manage their study schedule efficiently. Features include task organization, light/dark mode toggle, and a responsive UI.",
      progress: "Currently working upon",
      link: "https://github.com/Nancy142006/studyPlanner",
    },
  ],

  // CURRENT FOCUS
  currentFocus: {
    learning: ["Python", "Django", "Docker"],
    goals: "Transition from intern to full-time developer role",
    interests:
      "Building scalable web applications and learning new technologies",
    seeking: "Full-time opportunities in full-stack development",
  },
};

export default PERSONAL_DATA;
