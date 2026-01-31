"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="h-20 border-b border-gray-100 bg-white">
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Content: Logo + Brand Text */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">
              Mozilla Campus Club
            </span>
          </Link>

          {/* Brand Text - Hidden on Mobile */}
          <span className="hidden font-bold text-gray-900 lg:block">
            Official Blog of SLIIT Mozilla
          </span>
        </div>

        {/* Desktop Navigation Links - Hidden on Mobile */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            Home
          </Link>
          <Link
            href="/posts"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            Posts
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            About
          </Link>
        </div>

        {/* Hamburger Menu Button - Visible on Mobile */}
        <button
          onClick={toggleMenu}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition-all hover:border-orange-300 hover:bg-orange-50 hover:text-orange-500 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            // Close Icon (X)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 transform transition-all duration-300 ease-in-out md:hidden ${isMenuOpen ? "visible" : "invisible"
          }`}
      >
        {/* Backdrop Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={closeMenu}
        />

        {/* Slide-in Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-gray-50 shadow-2xl transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Drawer Header */}
          <div className="flex h-20 items-center justify-between border-b border-gray-200 bg-white px-6">
            <span className="text-lg font-bold text-gray-900">Menu</span>
            <button
              onClick={closeMenu}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-900"
              aria-label="Close navigation menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Drawer Navigation Links */}
          <nav className="flex flex-col gap-2 p-6">
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium text-gray-700 transition-all hover:bg-white hover:text-gray-900 hover:shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Home
            </Link>
            <Link
              href="/posts"
              onClick={closeMenu}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium text-gray-700 transition-all hover:bg-white hover:text-gray-900 hover:shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              Posts
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium text-gray-700 transition-all hover:bg-white hover:text-gray-900 hover:shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              About
            </Link>
          </nav>

          {/* Drawer Footer */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 bg-white p-6">
            <p className="text-center text-xs text-gray-500">
              #welovetech! 🦊❤️
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
