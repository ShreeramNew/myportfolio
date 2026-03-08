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

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${lora.className} ${geistMono.variable} antialiased`}>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
