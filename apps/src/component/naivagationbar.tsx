'use client'
import { StarIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-slate-50 to-slate-100 shadow-md">
      <div className="container mx-auto px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link href="#" className="flex items-center">
          <StarIcon className="h-6 w-6 text-black" />
          <span className="ml-2 text-xl font-semibold tracking-tighter text-black">
            Review Rater
          </span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-black hover:text-gray-200 transition-colors duration-300 ease-in-out"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="/homes"
            className="text-sm font-medium text-black hover:text-gray-200 transition-colors duration-300 ease-in-out"
            prefetch={false}
          >
            Reviews
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-black hover:text-gray-200 transition-colors duration-300 ease-in-out"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-black hover:text-gray-200 transition-colors duration-300 ease-in-out"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                className={!isOpen ? 'block' : 'hidden'}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm16 5H4v2h16v-2zm0 5H4v2h16v-2z"
              />
              <path
                className={isOpen ? 'block' : 'hidden'}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 4.75a.75.75 0 01.75-.75h18.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 7a.75.75 0 01.75-.75h18.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm0 7a.75.75 0 01.75-.75h18.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden bg-gradient-to-r from-slate-50 to-slate-100`}
      >
        <nav className="flex flex-col gap-2 p-4">
          <Link
            href="/"
            className="text-sm font-medium text-black hover:text-gray-200 transition-colors duration-300 ease-in-out"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="/homes"
            className="text-sm font-medium text-black hover:text-gray-200 transition-colors duration-300 ease-in-out"
            prefetch={false}
          >
            Reviews
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-black hover:text-gray-200 transition-colors duration-300 ease-in-out"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-black hover:text-gray-200 transition-colors duration-300 ease-in-out"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
