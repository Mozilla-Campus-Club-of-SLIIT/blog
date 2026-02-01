"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinkClass = (href: string) =>
    `relative text-base font-bold transition-colors ${
      pathname === href
        ? "text-black after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-black"
        : "text-gray-900"
    }`;
    
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
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className={navLinkClass("/")}
          >
            Home
          </Link>

          <Link
            href="/posts"
            className={navLinkClass("/posts")}
          >
            Posts
          </Link>

          <Link
            href="/about"
            className={navLinkClass("/about")}
          >
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}