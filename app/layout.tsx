import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Rishabh Kumar | Full Stack Developer",
  description:
    "Personal portfolio of Rishabh Kumar — Full Stack Developer, MERN Stack Engineer, and Open Source Contributor pursuing B.Tech CSE at IIIT Bhagalpur.",
  keywords: "Rishabh Kumar, Full Stack Developer, MERN Stack, Next.js, React, Portfolio, IIIT Bhagalpur",
  authors: [{ name: "Rishabh Kumar", url: "https://github.com/Rish6392" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} style={{ colorScheme: "dark" }}>
      <body className="h-full overflow-hidden" style={{ background: "#050510" }}>
        {children}
      </body>
    </html>
  );
}
