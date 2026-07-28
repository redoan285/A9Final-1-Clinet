import {  Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toast } from "@heroui/react";


const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  fontWeight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  fontWeight: ["400", "500", "600", "700", "800", "900"],
});


export const metadata = {
  title: "DocAppoint | Book Your Doctor",
  description: "Find and book appointments with top medical professionals.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={` ${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className={`${inter.className} ${outfit.variable} min-h-full flex flex-col`}>
         <Toast.Provider />
        <Navbar />
        <div className="bg-[#f8f9ff] grow px-6 py-13">
        {children}
        </div>
        <Footer></Footer>
        </body>
    </html>
  );
}
