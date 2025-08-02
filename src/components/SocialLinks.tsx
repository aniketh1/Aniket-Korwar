
import { Github, Linkedin, Code, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    url: "mailto:aniketkorwa@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/aniket-korwar-064550203/",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/aniketh1",
  },
  {
    name: "LeetCode", 
    icon: Code,
    url: "https://leetcode.com/u/aniketkorwa/",
  },
];

const SocialLinks = () => {
  return (
    <section className="py-12 md:py-16 bg-secondary" id="social">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-2xl font-bold text-secondary-dark mb-8 uppercase">Connect With Me</h2>
        <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-3 md:p-4 bg-white border-2 border-secondary-dark transition-all duration-300 hover:-translate-y-1 hover:border-primary">
                <social.icon
                  size={24}
                  className="text-secondary-dark transition-colors group-hover:text-primary"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
