import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
const projects = [{
  id: 1,
  title: "COLLAB DEV",
  description: "Real-time collaborative code editor inspired by CodeSandbox/StackBlitz with Monaco Editor and sandboxed previews.",
  image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
  link: "#",
  tech: "NextJS, TailwindCSS, ClerkAuth, AWS, NodeJS, Socket.io",
  status: "Under Development"
}, {
  id: 2,
  title: "TECH-SHELF",
  description: "Full-stack blogging platform with Clerk authentication, rich text editor, and analytics dashboard.",
  image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
  link: "#",
  tech: "Next.js 13, TypeScript, Tailwind CSS, Prisma, Neon DB, Clerk"
}, {
  id: 3,
  title: "AMAZON CLONE 2.0",
  description: "E-commerce platform with authentication & Stripe payments, deployed on Firebase with enhanced performance.",
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  link: "#",
  tech: "React, Redux, Firebase, Stripe"
}, {
  id: 4,
  title: "CLIMAVIEW",
  description: "Weather app with real-time updates, interactive maps, geolocation integration and responsive UI.",
  image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
  link: "#",
  tech: "React.js, Weather API, Geolocation, TailwindCSS"
}, {
  id: 5,
  title: "COFFEE-HUB",
  description: "Android coffee shop app with order management, Firebase authentication, and Material UI design.",
  image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
  link: "#",
  tech: "Kotlin, Android Studio, Firebase, Material Design"
}];
const WorkHighlights = () => {
  return <section className="py-20 bg-secondary-dark">
      <div className="container px-4 mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 uppercase">PROJECTS</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            A showcase of my development projects, demonstrating expertise in full-stack development and modern technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <motion.div key={project.id} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }}>
              <a href={project.link} className="block group bg-white border-2 border-primary overflow-hidden">
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105 grayscale hover:grayscale-0" />
                  <div className="absolute top-0 right-0 bg-primary p-2">
                    <ExternalLink size={18} className="text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-secondary-dark uppercase group-hover:text-primary">
                      {project.title}
                    </h3>
                    {project.status && (
                      <span className="px-2 py-1 bg-secondary text-secondary-dark text-xs font-medium">
                        {project.status}
                      </span>
                    )}
                  </div>
                  <p className="text-secondary-dark/80 mb-3">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <p className="text-xs text-secondary-dark/60 uppercase font-medium mb-1">Tech Stack:</p>
                    <p className="text-sm text-secondary-dark/70">{project.tech}</p>
                  </div>
                  <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
                    View Project
                    <ArrowRight size={18} className="ml-1" />
                  </div>
                </div>
              </a>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default WorkHighlights;