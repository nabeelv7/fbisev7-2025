import { Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const workSans = Work_Sans({
  subsets: ["latin"],
});

export const metadata = {
  keywords: ["FBISE", "Model Papers", "Class 9", "Class 10", "Class 11", "Class 12"],
  openGraph: {
    title: "FBISE Model Papers",
    description: "Free PDF model papers for classes 9 to 12.",
    url: "https://fbisev7.vercel.app/",
    siteName: "FBISE Model Papers",
    images: [
      {
        url: "https://fbisev7.vercel.app/icon.svg",
        width: 540,
        height: 540,
        alt: "FBISE Model Papers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${workSans.className} antialiased dark`}>
        <Navbar />
        <Hero />
        {children}
        <Footer />
      </body>
    </html>
  );
}
