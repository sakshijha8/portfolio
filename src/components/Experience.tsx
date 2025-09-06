import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experiences = [
    {
      title: 'Executive Web Developer',
      company: 'Capanicus',
      location: 'Mohali, Chandigarh, Punjab',
      period: 'Nov 2024 – Present',
      points: [
        "Implemented telephony features (DID number provisioning, IVR configuration) and real-time calling using JsSIP and WebSockets.",
        "Designed and delivered real-time chat and presence features to improve user responsiveness and reliability.",
        "Integrated Jitsi-based video conferencing with advanced controls (mute/unmute, camera, background effects).",
        "Built modern UIs using Tailwind CSS and Ant Design components with responsive and accessible design.",
        "Integrated HubSpot and Monday.com with two-way sync for contacts and tasks to streamline workflows.",
        "Developed custom browser extension features to extend web app functionality."
      ],
      technologies: ['React', 'React query', 'Zustand', 'Socket.io', 'Tailwind CSS']
    },
    {
      title: 'Software Engineer',
      company: 'Wits Innovation Lab',
      location: 'Kharar, Punjab',
      period: 'Sep 2022 – Oct 2024',
      points: [
        "Built ChatGPT-powered platform with voice Q&A and image-based responses using OpenAI APIs.",
        "Developed HRMS with role-based access controls, Google OAuth, Redux-managed themes, and secure routing.",
        "Implemented e-commerce features and payment flows with Razorpay & Stripe; added QR-code and ONDC buyer integrations.",
        "Built interactive video player with speed control, zoom, rotate, and canvas drawing tools.",
      ],
      technologies: ['React', 'Redux', 'Node.js', 'MongoDB', 'Express.js', 'AI/ML']
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900/50">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto max-w-8xl"
      >
        <motion.div variants={itemVariants} className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-2 sm:left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-10 sm:ml-16 md:ml-0`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-gray-700/20"
                >
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
                      {exp.title}
                    </h3>
                  </div>
                  
                  <h4 className="text-base sm:text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    {exp.company}
                  </h4>
                  
                  <div className="flex flex-wrap gap-2 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
