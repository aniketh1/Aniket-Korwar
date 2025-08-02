import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "The Complete Full-Stack Web Development Bootcamp",
    provider: "Udemy",
    link: "https://www.udemy.com/certificate/UC-d62c3de8-5805-4bac-98cf-fc434d532ee8/"
  },
  {
    id: 2,
    title: "Java (Basics)",
    provider: "HackerRank", 
    link: "https://www.hackerrank.com/certificates/4749e5b31c4a"
  },
  {
    id: 3,
    title: "Python Programming",
    provider: "GreatLearning Academy",
    link: "https://www.mygreatlearning.com/certificate/GJLXPYIQ"
  }
];

const Certifications = () => {
  return (
    <section className="py-20 bg-white" id="certifications">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-secondary-dark mb-4 uppercase flex items-center justify-center">
            <Award className="mr-3 text-primary" size={32} />
            Certifications
          </h2>
          <p className="text-secondary-dark/80 max-w-2xl mx-auto">
            Professional certifications and courses that showcase my commitment to continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={cert.link}
                className="block group bg-secondary/20 border-2 border-secondary-dark p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary"
              >
                <div className="flex items-start justify-between mb-3">
                  <Award className="text-primary flex-shrink-0 mt-1" size={24} />
                  <ExternalLink 
                    size={16} 
                    className="text-secondary-dark/60 group-hover:text-primary transition-colors" 
                  />
                </div>
                <h3 className="text-lg font-bold text-secondary-dark mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-primary font-medium text-sm uppercase">
                  {cert.provider}
                </p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;