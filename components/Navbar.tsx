"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gradient">
              Fahmi AR
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="hover:text-primary transition">
              Home
            </Link>
            <Link href="#about" className="hover:text-primary transition">
              About
            </Link>
            <Link href="#skills" className="hover:text-primary transition">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-primary transition">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-primary transition">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="#home"
              className="block px-3 py-2 hover:bg-gray-100 rounded"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="block px-3 py-2 hover:bg-gray-100 rounded"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#skills"
              className="block px-3 py-2 hover:bg-gray-100 rounded"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="block px-3 py-2 hover:bg-gray-100 rounded"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 hover:bg-gray-100 rounded"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
