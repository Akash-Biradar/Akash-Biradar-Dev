"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import projLab from "../public/images/MlabMockup.png";
import projAI from "../public/images/jobportalai.png";
import projPortfolio from "../public/images/akashportfolio.png";
import projEcom from "../public/images/skyCoffe.png";
import projSkyCoffee from "../public/images/skyCoffe.png";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import Image from "next/image";

const projects = [
  {
    title: "Shree Murughendra Pathology Laboratory Website",
    desc: "A project developed during academic lab sessions, focusing on problem-solving, data structures, and algorithm implementation.",
    devstack: "Next.js, Tailwind CSS, MongoDb",
    link: "https://m-lab-next-js-web.vercel.app",
    git: "https://github.com/Akash-Biradar",
    src: projLab,
    type: "FullStack",
  },
  {
    title: "AI Job Portal",
    desc: "An AI-powered job portal that matches job seekers with suitable roles using machine learning algorithms.",
    devstack: "Node.js, Python, React, Express, TensorFlow",
    link: "https://preview--careerpath-io.lovable.app",
    git: "https://github.com/Akash-Biradar/poppins-glow-jobs",
    src: projAI,
    type: "Fullstack",
  },
  {
    title: "Portfolio Website",
    desc: "My personal portfolio website built to showcase my journey, skills, and professional growth.",
    devstack: "Next.js, Tailwind CSS",
    link: "#",
    git: "https://github.com/Akash-Biradar",
    src: projPortfolio,
    type: "Fullstack",
  },
  {
    title: "E-Commerce Project",
    desc: "An e-commerce application for digital (or physical) products with a shopping cart, payment integration, and user dashboard.",
    devstack: "MongoDB, Express, React, Node.js",
    link: "#",
    git: "https://github.com/Akash-Biradar",
    src: projEcom,
    type: "FullStack",
  },
  {
    title: "Sky Coffee Shop Website",
    desc: "A sleek, modern website for a coffee brand showcasing their products, story, and locations.",
    devstack: "html, css, js",
    link: "https://akash-biradar.github.io/Coffee-Shop-Website",
    git: "https://github.com/Akash-Biradar/Coffee-Shop-Website",
    src: projSkyCoffee,
    type: "frontend",
  },
];

export default projects;

export const Project = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="text-white py-24 md:py-64 h-full w-full" id="Projects">
      <div className="container mx-auto px-4">
        <h2 className="md:text-6xl font-bold text-center text-5xl mb-16">
          Selected <span className="text-emerald-300">Projects</span>
        </h2>

        <div className="space-y-8 w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div
                className="p-6 flex justify-between items-center cursor-pointer bg-black/20 border border-white/10"
                onClick={() => toggleExpand(index)}
              >
                <h3 className="md:text-4xl text-3xl font-semibold">{project.title}</h3>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-light text-emerald-300">0{index + 1}</span>
                  <FiChevronDown
                    className={`w-6 h-6 transform transition-transform ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 bg-black/20 border border-white/10"
                  >
                    <div className="flex flex-col md:flex-row gap-8 mt-5">
                      <div className="w-full md:w-1/2">
                        <Image
                          src={project.src}
                          alt={project.title}
                          width={800}
                          height={600}
                           loading="lazy"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="w-full h-auto object-contain md:object-cover rounded-lg border border-white/40"
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-white/70 mb-4">{project.desc}</p>

                        <p className="text-emerald-300 font-medium mb-2">
                          Stack: {project.devstack}
                        </p>

                        <p className="text-emerald-400/60 font-medium mb-4 capitalize">
                          Type: {project.type}
                        </p>

                        <div className="flex justify-start items-center space-x-4">
                          <a
                            href={project.link}
                            className="text-emerald-400 hover:text-white transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <HiOutlineExternalLink className="w-10 h-7" />
                          </a>

                          <a
                            href={project.git}
                            className="text-emerald-400 hover:text-white transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaGithub className="w-10 h-7" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
