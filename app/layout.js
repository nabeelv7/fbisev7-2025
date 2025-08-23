import { Playpen_Sans } from "next/font/google";
import { EB_Garamond } from "next/font/google";
import "./nprogress.css"
import "./globals.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import NprogressProvider from "@/components/NProgressProvider";

const playPenSans = Playpen_Sans({
  subsets: ["latin"],
});

const eb = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
})

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
        className={`${playPenSans.className} ${eb.variable} antialiased dark`}>
        <NprogressProvider />
        <Navbar />
        <Hero />
        {children}
        <Footer />
      </body>
    </html>
  );
}
