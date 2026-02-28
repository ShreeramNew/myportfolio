import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Lora } from "next/font/google";
import ContextProvider from "./context/ContextProvider";

const lora = Lora({ subsets: ["latin"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Shreeram Portfolio",
  description:
    "I am a Software Development Engineer (SDE) at Tikanga Pvt Ltd, specializing in building scalable and high-performance web applications. Passionate about crafting intuitive user interfaces and developing robust backend systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" scroll-smooth">
      <body className={`${lora.className} ${geistMono.variable} antialiased`}>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
