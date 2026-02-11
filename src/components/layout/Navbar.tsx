"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
        
export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
    
  const navLinkClass = (href: string) =>
    `relative text-base font-bold transition-colors ${
      pathname === href
        ? "text-black after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-black"
        : "text-gray-900"
    }`;
    
  // Prevent scrolling when the mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    if (isMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="h-20 border-b border-gray-100 bg-white">
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Content: Logo + Brand Text */}  
        <div className="flex items-center gap-10">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/mozilla-logo.svg"
              alt="SLIIT Campus Mozilla Club Logo"
              width={171}
              height={49}
              priority
              className="h-auto w-[100px] sm:w-[171px]"
            />
          </Link>

          {/* Brand Text - Hidden on Mobile */}
          <span className="hidden text-2xl font-bold text-gray-900 md:block">
            Official Blog of SLIIT Mozilla
          </span>
        </div>

        {/* Right Content: Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className={navLinkClass("/")}>
            Home
          </Link>

          <Link href="/posts" className={navLinkClass("/posts")}>
            Posts
          </Link>

          <Link href="/about" className={navLinkClass("/about")}>
            About
          </Link>
        </div>    

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition-all hover:border-orange-300 hover:bg-orange-50 hover:text-orange-500 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 transform transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop Overlay - Converted to Button for A11y */}
        <button
          className={`absolute inset-0 h-full w-full bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
          aria-label="Close menu"
          tabIndex={isMenuOpen ? 0 : -1}
        />

        {/* Slide-in Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-gray-50 shadow-2xl transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
        >
          {/* Drawer Header */}
          <div className="flex h-20 items-center justify-between border-b border-gray-200 bg-white px-6">
            <span className="text-lg font-bold text-gray-900">Menu</span>
            <button
              onClick={closeMenu}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-900"
              aria-label="Close navigation menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Drawer Navigation Links */}
          <nav className="flex flex-col gap-2 p-6">
            {[
              { name: "Home", href: "/", path: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
              { name: "Posts", href: "/posts", path: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" },
              { name: "About", href: "/about", path: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium text-gray-700 transition-all hover:bg-white hover:text-gray-900 hover:shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={link.path} />
                </svg>
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 bg-white p-6">
            <p className="text-center text-xs text-gray-500">#welovetech! 🦊❤️</p>
          </div>
        </div>
      </div>
    </header>
  );
}