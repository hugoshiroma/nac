'use client';

import React, { useState } from "react";

interface FrameProps {
  className?: string;
  group?: string;
}

export const Frame = ({
  className,
  group = "/Frame 44.png",
}: FrameProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/blog", label: "Blog" },
    { href: "#", label: "Cursos" },
    { href: "#", label: "Laboratório" },
    { href: "#", label: "Contato" },
  ];

  return (
    <>
      <nav
        className={`flex w-full h-24 items-center justify-between px-4 md:px-8 lg:px-12 bg-azul-secundario ${className}`}
      >
        {/* Left Side: Logo */}
        <div className="flex items-center gap-4 md:gap-8">
          <a href="/" className="w-14 h-14">
            <img
              className="w-full h-full object-contain"
              alt="Logo"
              src={group}
            />
          </a>
        </div>

        {/* Center: Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="font-h5-poppins text-claro hover:text-azul-principal transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Side: Auth buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-4 md:gap-8">
          <a href="/login" className="font-h5-poppins text-claro hover:text-azul-principal transition-colors">
            Login
          </a>
          <a href="/quem-somos" className="px-4 py-2 bg-azul-principal text-claro font-h5-poppins rounded-lg hover:bg-opacity-80 transition-colors">
            Quem nós somos?
          </a>
        </div>

        {/* Mobile: Hamburger Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(true)}>
            <svg className="w-8 h-8 text-claro" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer and Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu */}
        <div
          className={`relative w-4/5 max-w-sm h-full bg-azul-secundario p-8 transition-transform duration-300 ease-in-out transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8">
            <svg className="w-8 h-8 text-claro" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <nav className="flex flex-col gap-8 mt-16">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="font-h3-POPPINS text-claro hover:text-azul-principal transition-colors" onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <hr className="border-claro/20" />
            <a href="/login" className="font-h3-POPPINS text-claro hover:text-azul-principal transition-colors" onClick={() => setIsMenuOpen(false)}>
              Login
            </a>
            <a href="/quem-somos" className="font-h3-POPPINS text-claro hover:text-azul-principal transition-colors" onClick={() => setIsMenuOpen(false)}>
              Quem nós somos?
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Frame;
