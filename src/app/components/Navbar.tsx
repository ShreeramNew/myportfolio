"use client";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // Install lucide-react or use your own icons
import useGeneralContext from "../hooks/UseGeneralContext";

export default function Navbar() {
  const { activeTab } = useGeneralContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Achievements", id: "achievements" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-6 w-full flex justify-center items-center z-50 px-4">
      {/* Desktop Design */}
      <div className="hidden lg:flex items-center gap-2 px-6 py-3 bg-gray-900/60 backdrop-blur-md border border-white/10 rounded-full shadow-2xl">
        {navLinks.map((link) => {
          const isActive = mounted && activeTab === link.id;
          return (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`px-4 py-2 text-sm font-medium uppercase tracking-wider transition-all duration-300 rounded-full ${
                isActive
                  ? "bg-themeOrange text-white shadow-[0_0_15px_rgba(255,126,0,0.4)]"
                  : "text-gray-300 hover:text-themeOrange"
              }`}
            >
              {link.name}
            </a>
          );
        })}
      </div>

      {/* Mobile Toggle Button */}
      <div className="lg:hidden flex w-full justify-between items-center px-6 py-3 bg-transparent backdrop-blur-lg rounded-2xl border- border-white/10">
        <span className="text-themeOrange font-bold tracking-tighter text-xl"></span>
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-200">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- MOBILE DRAWER OVERLAY --- */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* --- MOBILE DRAWER CONTENT --- */}
      <div
        className={`fixed top-0 right-0 h-full w-[90vw] bg-gray-950 z-[70] shadow-2xl border-l border-white/5 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-themeOrange transition-colors"
            >
              <X size={32} />
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2 text-sm font-medium uppercase tracking-wider transition-all duration-300 rounded-full ${
                    isActive
                      ? "bg-[#ff5400] text-white"
                      : "text-gray-300 hover:text-[#ff5400]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="mt-auto pb-4">
            <p className="text-gray-600 text-xs tracking-widest uppercase">
              © {new Date().getFullYear()} Designed & Built by Shreeram
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
