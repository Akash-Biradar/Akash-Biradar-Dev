"use client"
import React from "react";
import { motion } from "motion/react";
import {
  AiFillGithub,

  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";


export const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-white/10 py-16" id="contact">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Let's <span className="text-emerald-400">Connect</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-md">
                Ready to bring your ideas to life? Let's discuss how we can create something amazing together.
              </p>
            </div>

            <div className="space-y-4">
              <motion.a
                href="mailto:iamakashbiradar@gmail.com"
                whileHover={{ x: 10 }}
                className="group flex items-center gap-4 text-xl text-white hover:text-emerald-400 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <span className="text-emerald-400">✉</span>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p>iamakashbiradar@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+919019430934"
                whileHover={{ x: 10 }}
                className="group flex items-center gap-4 text-xl text-white hover:text-emerald-400 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <span className="text-emerald-400">📱</span>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p>+91 90194 30934</p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Location & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-4">Based In</h3>
              <div className="space-y-2">
                <p className="text-emerald-400 text-lg font-medium">India</p>
                <p className="text-gray-400">Available for remote opportunities worldwide</p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {[
                  { icon: AiFillGithub, href: "https://github.com/Akash-Biradar", label: "GitHub" },
                  { icon: AiFillLinkedin, href: "https://www.linkedin.com/in/akash-biradar-dev", label: "LinkedIn" },
              
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="w-12 h-12 bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-400/30 rounded-xl flex items-center justify-center transition-all duration-300 group"
                  >
                    <social.icon 
                      size={20} 
                      className="text-gray-400 group-hover:text-emerald-400 transition-colors duration-300" 
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-5 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <div className="text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Akash Biradar. All rights reserved.</p>
          </div>
          
          <div className="flex items-center  text-sm text-gray-400">
            <p>⚡ Designed & Built with ❤️ By Akash Biradar</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};