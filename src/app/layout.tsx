import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "Nashvi",
  description: "Nashvi is a web app designed to help musicians and worship team members familiarize themselves more with the Nashville number system that is commonly utilized in worship settings in churches",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-gradient-to-r from-indigo-800 via-indigo-900 to-indigo-950'>
        <div className="flex flex-col h-screen">
        <Header/>
        {children}
        {/* <Footer/> */}
        </div>
        </body>
    </html>
  );
}
