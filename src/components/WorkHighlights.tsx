import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
const projects = [{
  id: 1,
  title: "COLLAB DEV",
  description: "Real-time collaborative code editor inspired by CodeSandbox/StackBlitz with Monaco Editor and sandboxed previews.",
  image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
  link: "https://cloud-based-collborative-code-editor.vercel.app/",
  tech: "NextJS, TailwindCSS, ClerkAuth, AWS, NodeJS, Socket.io",
  status: "Live"
}, {
  id: 2,
  title: "TECH-SHELF",
  description: "Full-stack blogging platform with Clerk authentication, rich text editor, and analytics dashboard.",
  image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
  link: "https://github.com/aniketh1/Tech-Shelf",
  tech: "Next.js 13, TypeScript, Tailwind CSS, Prisma, Neon DB, Clerk"
}, {
  id: 3,
  title: "AMAZON CLONE 2.0",
  description: "E-commerce platform with authentication & Stripe payments, deployed on Firebase with enhanced performance.",
  image: "https://magzoid.com/wp-content/uploads/2025/05/amazon-rebrand-2025_dezeen_2364_col_1-1.webp",
  link: "https://clone-2676d.web.app/",
  tech: "React, Redux, Firebase, Stripe",
  status: "Live"
}, {
  id: 4,
  title: "CLIMAVIEW",
  description: "Weather app with real-time updates, interactive maps, geolocation integration and responsive UI.",
  image: "https://www.bytewebster.com/javascriptprojects/uploads/images/weather-app-using-javascript1.png",
  link: "https://github.com/aniketh1/ClimaView-App",
  tech: "React.js, Weather API, Geolocation, TailwindCSS"
}, {
  id: 5,
  title: "COFFEE-HUB",
  description: "Android coffee shop app with order management, Firebase authentication, and Material UI design.",
  image: "https://www.figma.com/community/resource/d26899aa-2d4b-4eb8-9377-c1ede0093d4e/thumbnail",
  link: "https://github.com/aniketh1/Coffee-Hub",
  tech: "Kotlin, Android Studio, Firebase, Material Design"
}];
const WorkHighlights = () => {
  return <section className="py-12 md:py-20 bg-secondary-dark relative overflow-hidden" id="work">
      {/* Background Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 border border-white/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-32 right-32 w-24 h-24 bg-white/5 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/3 right-10 w-16 h-16 bg-primary/20"
          style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
          animate={{ 
            rotate: [0, 120, 240, 360],
            x: [0, 30, 0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="container px-4 mx-auto relative z-10">
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