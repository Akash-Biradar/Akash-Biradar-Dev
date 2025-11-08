"use client"
import { motion } from "motion/react";
import { CiDesktopMouse2 } from "react-icons/ci";
import {
  AiFillGithub,
  AiFillLinkedin
} from "react-icons/ai";
import Link from "next/link";

export default function Home() {
  const handleViewWork = () => {
    console.log("View Work clicked");
  };

  const handleContactMe = () => {
    console.log("Contact Me clicked");
  };

  return (
    <div className="relative overflow-clip min-h-screen text-white bg-black mx-auto">
     
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: "radial-gradient(ellipse 100% 50% at 50% 0%, rgba(10, 190, 299, 0.25), transparent 70%), #000000",
        }}
      />

      <div className="relative mx-auto px-4">
        
        {/* Main Content - Perfectly Centered */}
        <div className="flex flex-col items-center justify-center text-center min-h-screen w-full">
          
          {/* Hero Content Container */}
          <div className="w-full max-w-4xl mx-auto">
            
            {/* Animated Blob */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative mb-12"
            >
              <div className="absolute inset-0 bg-linear-to-b from-emerald-500/20 to-transparent rounded-full blur-3xl"></div>
            </motion.div>
    
            {/* Hero Text - Perfectly Centered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full text-center inter.className tracking-wider"
            >
              <h1 className="inter.className text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 ">
                Hi there, <br />
                I'm <span className="text-emerald-400">Akash</span>{' '}
                <span className="text-emerald-400">Biradar.</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-12">
                As a BCA student, I specialize in <span className="text-emerald-400 font-semibold">Next.js Framework</span> and the{' '}
                <span className="text-emerald-400 font-semibold">MERN Stack</span>. I build fast, elegant web apps that bring ideas to life. 
                I'm always learning, always building, and always striving for better.
              </p>
            </motion.div>
            
            {/* Professional Buttons Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center cursor-pointer mb-16"
            >
              {/* Resume Button - Professional Style */}
              <motion.a
                href="/resume/AkashBiradarResume.pdf"
                download="AkashBiradar_Resume.pdf"
                target="_blank"
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "rgba(16, 185, 129, 0.1)",
                  borderColor: "#10b981"
                }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer px-6 py-3 bg-black border border-emerald-600 rounded-lg font-medium transition-all duration-200 text-emerald-400 hover:text-white hover:shadow-md flex items-center gap-2"
              >
                <span>Download Resume</span>
                <motion.svg 
                  whileHover={{ x: 2 }}
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </motion.svg>
              </motion.a>

               
              {/* View Work Button */}
              <motion.button
                onClick={handleViewWork}
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderColor: "rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer px-7 py-3 bg-transparent text-white border border-white/20 rounded-lg font-medium transition-all duration-200 hover:shadow-md"
              >
                <Link href='#Projects'>
                
                View Work
                </Link>
              </motion.button>
                  {/* Contact Me Button */}
                  <motion.button
                    onClick={handleContactMe}
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: "#0d966c"
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="cursor-pointer px-6 py-3 bg-emerald-600 text-white border border-emerald-600 rounded-lg font-medium transition-all duration-200 hover:shadow-md "
                  >
                    <Link href='#contact'>
                    Contact Me
                    </Link>
                  </motion.button>
            </motion.div>

            {/* Scroll Down Indicator - Centered */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className=" flex-col items-center md:space-y-3 hidden md:block"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center"
              >
                <CiDesktopMouse2 className="text-emerald-400 mb-2" size={24} />
                <span className="text-sm text-gray-400 font-medium tracking-wide">Scroll Down</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Social Icons - Bottom Center */}
        <div className="absolute bottom-8 left-1/1 transform -translate-x-1/1 mr-7 z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-row gap-4"
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link
                href="https://github.com/Akash-Biradar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-400/30 transition-all duration-300 block"
              >
                <AiFillGithub 
                  size={20} 
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300" 
                />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link
                href="https://www.linkedin.com/in/akash-biradar-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-400/30 transition-all duration-300 block"
              >
                <AiFillLinkedin 
                  size={20} 
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300" 
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}