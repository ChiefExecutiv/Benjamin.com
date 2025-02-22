import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./header";
import { Footer } from "./footer";
import { GeistSans } from 'geist/font/sans';



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kawuki Benjamin David | Portfolio",
  description: "Kawuki Benjamin David: A Ugandan national with a keen interest in technology and economics.",
  keywords: ["Kawuki Benjamin David", "portfolio", "Uganda", "technology", "economics"],
  openGraph: {
    title: "Kawuki Benjamin David | Portfolio",
    description: "Kawuki Benjamin David: A Ugandan national with a keen interest in technology and economics.",
    url: "https://benjamincom.vercel.app/",
    siteName: "Benjamin Kawuki's Site",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@chiefexecutive0",
    creator: "@chiefexecutive0",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="dark:text-gray-100 max-w-2xl m-auto bg-[#fcfcfc]">
        <main className="p-6 pt-3 md:pt-6 min-h-screen">
          <Header/>
            {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
