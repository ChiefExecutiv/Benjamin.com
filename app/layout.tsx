import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./header";
import { Footer } from "./footer";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kawuki Benjamin David | Portfolio",
  description: "Benjamin is a Ugandan National interested in and learning computer programming and Economics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="dark:text-gray-100 max-w-2xl m-auto">
        <main className="p-6 pt-3 md:pt-6 min-h-screen">
          <Header/>
            {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
