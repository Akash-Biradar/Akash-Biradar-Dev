"use client"
import { FaHtml5, FaCss3, FaJava } from "react-icons/fa";
import { TbFileTypeSql } from "react-icons/tb";
import { SiExpress, SiNodedotjs, SiReact, SiMongodb, SiJavascript, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { motion } from "motion/react";

export const Stack = () => {
  const skills = [
    { icon: FaJava, name: "Java", color: "text-red-500" },
    { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
   
    { icon: SiNextdotjs, name: "Next.js", color: "text-white" },
    { icon: SiReact, name: "React.js", color: "text-cyan-400" },
    { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
    { icon: SiExpress, name: "Express.js", color: "text-gray-300" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-400" },
    { icon: TbFileTypeSql, name: "MySQL", color: "text-blue-400" },
    { icon: FaHtml5, name: "HTML5", color: "text-orange-500" },
    { icon: FaCss3, name: "CSS3", color: "text-blue-400" },
    { icon: SiTailwindcss, name: "TailwindCSS", color: "text-cyan-300" },
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="relative py-20 md:py-32 bg-black overflow-hidden" id="stack">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Tech <span className="text-emerald-400">Stack</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies I work with to build amazing digital experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 max-w-6xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -8
              }}
              whileTap={{ scale: 0.95 }}
              className="group cursor-pointer"
            >
              <div className="relative bg-linear-to-br from-gray-900/80 to-black border border-gray-800 rounded-2xl p-8 text-center transition-all duration-300 hover:border-emerald-400/50 hover:shadow-2xl hover:shadow-emerald-500/5">
                
                {/* Icon Container */}
                <div className="relative mb-4 flex justify-center">
                  <div className="relative">
                    <skill.icon 
                      className={`w-14 h-14 ${skill.color} transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg`} 
                    />
                    {/* Subtle Glow Effect */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1.2, opacity: 0.3 }}
                      className="absolute inset-0 bg-current rounded-full blur-md -z-10"
                    />
                  </div>
                </div>

                {/* Skill Name */}
                <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-emerald-400">
                  {skill.name}
                </h3>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-emerald-400/0 via-emerald-400/0 to-blue-400/0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900/50 border border-gray-800 rounded-full backdrop-blur-sm">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span className="text-gray-300 text-sm font-medium">Continuously expanding my skillset</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};