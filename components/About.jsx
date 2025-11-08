"use client"
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import project1 from "../public/images/MlabMockup.png";
import project2 from "../public/images/jobportalai.png";
import Image from "next/image";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id="about"
      className="text-white px-4 sm:px-6 lg:px-8 py-8 mx-auto w-full max-w-7xl min-h-full"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.h2 
        className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12"
        variants={itemVariants}
      >
        About <span className="text-emerald-300">Me🚀</span>
      </motion.h2>

      {/* Main 3-column grid - responsive */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        variants={containerVariants}
      >
        {/* 01 Background */}
        <motion.div 
          className="border border-white/20 rounded-lg p-4 sm:p-6"
          variants={cardVariants}
          whileHover={{ 
            scale: 1.02,
            borderColor: "rgba(110, 231, 183, 0.3)",
            transition: { duration: 0.2 }
          }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">01. Background</h3>
          <p className="text-white/70 text-sm sm:text-base mb-4 sm:mb-6">
            I'm a passionate BCA student driven by curiosity for web development
            and programming. I enjoy transforming ideas into interactive digital
            experiences using technologies like <strong>Java, HTML, CSS, JavaScript,</strong> and
            <strong> MERN Stack</strong>. Recently, I've been exploring the <strong>Next.js Framework</strong> to build scalable full-stack applications.
            I'm always eager to learn new tools, refine my skills, and embrace challenges
            that help me grow as a developer.
          </p>

          <motion.div 
            className="rounded-lg p-3 sm:p-4 mb-4 border border-white/20 mt-6 sm:mt-9"
            variants={itemVariants}
            whileHover={{ 
              borderColor: "rgba(110, 231, 183, 0.5)",
              transition: { duration: 0.3 }
            }}
          >
            <code className="text-emerald-400/70 text-xs sm:text-sm">
              const skills = [<br />
              &nbsp;&nbsp;"JavaScript",<br />
              &nbsp;&nbsp;"Next.js",<br />
              &nbsp;&nbsp;"React.js",<br />
              &nbsp;&nbsp;"Node.js",<br />
              &nbsp;&nbsp;"Java",<br />
              &nbsp;&nbsp;"SQL",<br />
              ];
            </code>
          </motion.div>
        </motion.div>

        {/* 02 Expertise */}
        <motion.div 
          className="border border-white/20 rounded-lg p-4 sm:p-6"
          variants={cardVariants}
          whileHover={{ 
            scale: 1.02,
            borderColor: "rgba(110, 231, 183, 0.3)",
            transition: { duration: 0.2 }
          }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">02. Expertise</h3>
          <p className="text-white/70 text-sm sm:text-base mb-4">
            I specialize in both front-end and back-end development — building
            responsive, high-performance web applications. My expertise lies in crafting
            seamless user interfaces with <strong>React</strong> and <strong>Tailwind CSS</strong>,
            while also developing efficient server-side solutions using <strong>Node.js</strong>,
            <strong>Express</strong>, and <strong>MongoDB</strong>. My goal is to create fast,
            reliable, and user-centric applications that solve real-world problems.
          </p>

          <motion.div 
            className="mt-8 md:mt-20 relative border border-white/20 rounded-lg overflow-hidden"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={project1}
              alt="Project 1"
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-md"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              placeholder="blur"
            />
          </motion.div>
        </motion.div>

        {/* 03 Skills */}
        <motion.div 
          className="border border-white/20 rounded-lg p-4 sm:p-6"
          variants={cardVariants}
          whileHover={{ 
            scale: 1.02,
            borderColor: "rgba(110, 231, 183, 0.3)",
            transition: { duration: 0.2 }
          }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">03. Skills</h3>
          <p className="text-white/70 text-sm sm:text-base mb-4">
            I'm proficient in a wide range of technologies and continuously expanding
            my knowledge to stay ahead in the ever-evolving web development landscape.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
            <motion.div 
              className="border border-white/20 rounded-lg p-3"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(110, 231, 183, 0.5)",
              }}
            >
              <h4 className="text-emerald-300 font-medium mb-2 text-sm sm:text-base">Frontend</h4>
              <ul className="text-white/70 space-y-1 text-xs sm:text-sm">
                <li>JavaScript</li>
                <li>Next.js</li>
                <li>React.js</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
              </ul>
            </motion.div>
            <motion.div 
              className="border border-white/20 rounded-lg p-3"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(110, 231, 183, 0.5)",
              }}
            >
              <h4 className="text-emerald-300 font-medium mb-2 text-sm sm:text-base">Backend</h4>
              <ul className="text-white/70 space-y-1 text-xs sm:text-sm">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>MySql</li>
              </ul>
            </motion.div>
            <motion.div 
              className="border border-white/20 rounded-lg p-3"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(110, 231, 183, 0.5)",
              }}
            >
              <h4 className="text-emerald-300 font-medium mb-2 text-sm sm:text-base">Coding Language</h4>
              <ul className="text-white/70 space-y-1 text-xs sm:text-sm">
                <li>Java</li>
                <li>C</li>
               
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom 2-column grid - responsive */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2  sm:gap-6 lg:gap-8 mt-6 sm:mt-8 "
        variants={containerVariants}
      >
        <motion.div 
          className="border border-white/20 rounded-lg p-4 sm:p-6"
          variants={cardVariants}
          whileHover={{ 
            scale: 1.02,
            borderColor: "rgba(110, 231, 183, 0.3)",
            transition: { duration: 0.2 }
          }}
        >
          <div className="space-y-4">
            <div className="mt-4 sm:mt-5 ">
              <label className="block text-sm font-medium mb-1">Frontend</label>
              <div className="w-full bg-white/10 rounded-full h-2">
                <motion.div
                  className="bg-emerald-300 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "85%" } : { width: 0 }}
                  transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Backend</label>
              <div className="w-full bg-white/10 rounded-full h-2">
                <motion.div
                  className="bg-emerald-300 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "80%" } : { width: 0 }}
                  transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>
          <div className="mt-20">


          <h3 className="text-xl sm:text-2xl font-bold   sm:mt-6 mb-2 sm:mb-3 ">04. Approach</h3>
          <p className="text-white/70 text-sm sm:text-base">
            I follow a structured, detail-oriented approach to development — focusing
            on clean, maintainable code and scalable architecture. I believe in
            thoughtful planning, consistent testing, and writing code that is not only
            functional but also easy to understand and extend.
          </p>
          </div>
        </motion.div>

        <motion.div 
          className="border border-white/20 rounded-lg p-4 sm:p-6 flex flex-col justify-between"
          variants={cardVariants}
          whileHover={{ 
            scale: 1.02,
            borderColor: "rgba(110, 231, 183, 0.3)",
            transition: { duration: 0.2 }
          }}
        >
          <motion.div 
            className="relative border border-white/20 rounded-lg p-3 sm:p-4 w-full overflow-hidden"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={project2}
              alt="Project 2"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          <div className="mt-4 sm:mt-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">05. Goals</h3>
            <p className="text-white/50 text-sm sm:text-base">
              My goal is to become a proficient full-stack developer capable of
              building impactful projects that merge creativity and functionality. I
              aim to contribute to innovative teams, continue learning cutting-edge
              technologies, and make meaningful contributions to the tech community.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};