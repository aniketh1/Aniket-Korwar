import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code, Database } from "lucide-react";

const About = () => {
  const education = [
    {
      institution: "BMS COLLEGE OF ENGINEERING",
      degree: "B.E. in Information Science and Engineering",
      location: "Bangalore",
      period: "Dec 2023 – Present",
      cgpa: "8.2"
    },
    {
      institution: "KLE SOCIETY'S POLYTECHNIC",
      degree: "Diploma in Computer Science and Engineering",
      location: "Hubli",
      period: "Jul 2020 – Jul 2023",
      cgpa: "9.12"
    }
  ];

  const experience = [
    {
      company: "TO-LET GLOBE",
      role: "Full Stack Developer Intern",
      location: "Lucknow, India (Remote)",
      period: "Feb 2025 – Apr 2025",
      achievements: [
        "Migrated website to Next.js, improving load speed by 30% and SEO",
        "Implemented Appwrite authentication, boosting security and scalability",
        "Developed password reset functionality, reducing support tickets by 20%",
        "Designed responsive homepage using Tailwind CSS, increasing engagement by 25%"
      ]
    },
    {
      company: "ATHREYA TECHNOLOGIES",
      role: "Project Intern",
      location: "Hubli, India (On-site)",
      period: "May 2023 – Jul 2023",
      achievements: [
        "Created a web-based IP spoofing project, enhancing frontend skills",
        "Debugged and optimized features, reducing bugs by 15%"
      ]
    }
  ];

  const skills = {
    "Programming Languages": ["C", "C++", "Java", "Python", "JavaScript"],
    "Libraries/Frameworks": ["ReactJS", "NodeJS", "NextJS", "ExpressJS"],
    "Tools/Platforms": ["GitHub", "VSCode", "CursorAI", "Firebase", "Vercel"],
    "Databases": ["SQL", "MongoDB", "PostgreSQL"]
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="about">
      {/* Subtle Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-10 right-10 w-20 h-20 border-2 border-primary/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-16 h-16 bg-secondary/5 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 right-5 w-12 h-12 bg-primary/5"
          style={{
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
          }}
          animate={{ 
            rotate: [0, 90, 180, 270, 360],
            y: [0, -20, 0, 20, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="container px-4 mx-auto relative z-10">
        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-secondary-dark mb-8 uppercase flex items-center">
            <GraduationCap className="mr-3 text-primary" size={32} />
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-secondary/20 border-l-4 border-primary p-6"
              >
                <h3 className="text-xl font-bold text-secondary-dark uppercase">{edu.institution}</h3>
                <p className="text-lg text-secondary-dark/80 mb-2">{edu.degree}</p>
                <div className="flex flex-wrap gap-4 text-sm text-secondary-dark/70">
                  <span>📍 {edu.location}</span>
                  <span>📅 {edu.period}</span>
                  <span>🎯 CGPA: {edu.cgpa}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
          data-section="experience"
        >
          <h2 className="text-3xl font-bold text-secondary-dark mb-8 uppercase flex items-center">
            <Briefcase className="mr-3 text-primary" size={32} />
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-secondary/20 border-l-4 border-primary p-6"
              >
                <h3 className="text-xl font-bold text-secondary-dark uppercase">{exp.company}</h3>
                <p className="text-lg text-primary font-medium mb-2">{exp.role}</p>
                <div className="flex flex-wrap gap-4 text-sm text-secondary-dark/70 mb-4">
                  <span>📍 {exp.location}</span>
                  <span>📅 {exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-secondary-dark/80 flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resume Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16 text-center"
        >
          <motion.a
            href="https://drive.google.com/file/d/1LFxt7QUAm5zHDnkOMNwQmZows-iqzhI5/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold text-lg uppercase tracking-wider border-2 border-primary transition-all duration-300 hover:bg-transparent hover:text-primary group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 8px 25px rgba(34, 197, 94, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ 
                y: [0, -2, 0]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="group-hover:animate-bounce"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7,10 12,15 17,10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </motion.div>
            <span>Download Full Resume</span>
          </motion.a>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          data-section="skills"
        >
          <h2 className="text-3xl font-bold text-secondary-dark mb-8 uppercase flex items-center">
            <Code className="mr-3 text-primary" size={32} />
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-secondary/20 p-6 border-2 border-secondary-dark"
              >
                <h3 className="text-lg font-bold text-secondary-dark mb-4 uppercase">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary text-white text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;