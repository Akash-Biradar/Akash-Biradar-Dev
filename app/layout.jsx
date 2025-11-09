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
  keywords: "Akash Biradar, Full Stack Developer, Next.js, MERN Stack, Web Developer, Portfolio, BCA Student",
  authors: [{ name: "Akash Biradar" }],
  creator: "Akash Biradar",
  publisher: "Akash Biradar",
  metadataBase: new URL('https://akash-biradar-dev.vercel.app'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "Akash Biradar | Web Developer Portfolio",
    description: "Explore my portfolio built with Next.js 16. See my real-world projects, coding skills in C, Java, Next.js and MERN Stack.",
    url: "https://akash-biradar-dev.vercel.app",
    siteName: "Akash Biradar Portfolio",
    images: [
      {
        url: '/og-image.jpg', // Add this image to your public folder
        width: 1200,
        height: 630,
        alt: 'Akash Biradar Portfolio',
      },
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash Biradar | Web Developer Portfolio",
    description: "Built with Next.js 16, React & Tailwind CSS — check out my projects and skills.",
    creator: "@akashbiradar", // Replace with your Twitter handle if you have one
    images: ["/og-image.jpg"], // Same as OG image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification if you have it
    // google: 'your-google-verification-code',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        {/* Additional meta tags for better SEO */}
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased font-sans">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}