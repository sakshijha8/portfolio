import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Eye } from "lucide-react";

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Shop-Zone",
      description:
        "A modern e-commerce frontend built with React, TypeScript, Redux, and Tailwind CSS. Features include a responsive UI, product listings, and state management with Redux.",
      image: "/shop-zone.png",
      technologies: ["React", "TypeScript", "Redux", "Tailwind CSS"],
      liveUrl: "https://sakshijha8.github.io/Shop-Zone/",
      githubUrl: "https://github.com/sakshijha8/Shop-Zone",
    },
    {
      title: "AI Summarizer Extension",
      description:
        "A lightweight Chrome Extension that summarizes any webpage or YouTube video using AI. Provides concise summaries to help users save time and focus on key points.",
      image: "/ai-summarizer.png",
      technologies: ["React", "TypeScript", "OpenAI API", "Chrome Extensions"],
      githubUrl: "https://github.com/sakshijha8/AI-Summarizer-Extension",
    },
    {
      title: "Firebase Chat App",
      description:
        "A real-time chat application built with React.js and Firebase, featuring authentication, direct and group chats, message editing/deletion, and real-time sync.",
      image: "/firebase-chat.png",
      technologies: [
        "React",
        "Firebase",
        "React Router",
        "Tailwind CSS",
        "React Icons",
      ],
      githubUrl: "https://github.com/sakshijha8/Firebase-Realtime-Chat",
    },
    {
      title: "Wil Website",
      description:
        "Wits Innovation Lab is an innovative company focused on driving business growth through the power of cutting-edge technologies. This project involved creating a dynamic and user-friendly company website to solve complex problems.",
      image:
        "https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Next.js", "Material UI", "React Hook Form", "Yup"],
      liveUrl: "https://www.thewitslab.com/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 px-6 mt-16 md:mt-0">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto max-w-7xl"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for
            creating amazing web experiences
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {projects?.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-gray-700/20"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-800 dark:text-white hover:bg-blue-600 hover:text-white transition-colors duration-200"
                      >
                        <Eye className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project?.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-800 dark:text-white hover:bg-blue-600 hover:text-white transition-colors duration-200"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    )}
                    {project?.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
