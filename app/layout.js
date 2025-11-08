import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",   
});

export const metadata = {
  title: "Akash Biradar | Full-Stack Web Developer Portfolio",
  description: "Showcasing my projects, skills and journey in web development — built with Next.js 16, React.js, Tailwind CSS and the MERN stack.",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Akash Biradar | Web Developer Portfolio",
    description: "Explore my portfolio built with Next.js 16. See my real-world projects, coding skills in C, Java, Next.js and MERN Stack.",
    url: "https://your-domain.com",           // replace with your live URL
    siteName: "Akash Biradar Portfolio",
    images: [
      {
        // url: "https://your-domain.com/og-image.png", // replace with your social sharing image
        width: 1200,
        height: 630,
        alt: "Akash Biradar Portfolio Screenshot"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash Biradar | Web Developer Portfolio",
    description: "Built with Next.js 16, React & Tailwind CSS — check out my projects and skills.",
    // images: ["https://your-domain.com/og-image.png"]
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="antialiased font-sans">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
