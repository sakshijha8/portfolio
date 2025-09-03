import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss, SiNextdotjs, SiGit, SiJavascript, SiTypescript, SiReactquery } from 'react-icons/si';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skills = [
    { name: 'React', icon: SiReact, color: '#61DAFB', level: 95 },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 90 },
    { name: 'Express', icon: SiExpress, color: '#000000', level: 88 },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 85 },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 92 },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 87 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 93 },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000', level: 83 },
    { name: 'React Query', icon: SiReactquery, color: '#FF4154', level: 88 },
    { name: 'Git', icon: SiGit, color: '#F05032', level: 90 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 px-6 bg-white/50 dark:bg-gray-800/50">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto max-w-6xl"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-gray-700/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="relative mb-4">
                    <skill.icon 
                      className="w-16 h-16 mx-auto transition-all duration-300 group-hover:scale-110"
                      style={{ color: skill.color }}
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-3">
                    {skill.name}
                  </h3>
                  
                  {/* Skill Level Bar */}
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ delay: index * 0.1, duration: 1 }}
                    ></motion.div>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {skill.level}%
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'RESTful APIs', 'GraphQL', 'JWT Authentication', 'Redux', 'Zustand', 'Context API', 'Socket.io', 'UI/UX Design', 'HubSpot CRM'
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-blue-200 dark:border-gray-600 hover:shadow-md transition-all duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;