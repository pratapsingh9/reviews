'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from "@mui/material";
import { StarIcon } from "lucide-react";
import { Modal, ModalDialog, ModalClose, Input } from "@mui/joy";
import { CircularProgress } from "@mui/material";

export default function NavigationBar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSubmitted = (event: any) => {
    event.preventDefault(); // Prevent form submission
    try {
      setSubmitted(true);
      // Handle form submission logic here
    } catch (error) {
      setSubmitted(false);
    }
  };

  return (
    <header className="bg-gradient-to-r max-h-36 from-slate-50 to-slate-100 shadow-md">
      <div className="container flex items-center justify-between px-4 lg:px-6 h-16 md:h-20">
        <Link href="#" className="flex items-center">
          <StarIcon className="h-6 w-6 text-black" />
          <span className="ml-2 text-xl font-semibold tracking-tighter text-black">
            Review Rater
          </span>
        </Link>
        <nav className="hidden md:flex flex-grow items-center justify-center gap-4 sm:gap-6">
          <div className='text-sm hover:cursor-pointer font-medium text-black hover:text-gray-800 transition-colors duration-300 ease-in-out' onClick={() => router.push('/home')}>
            Home
          </div>
          <Link
            href="/explore"
            className="text-sm font-medium text-black hover:text-gray-800 transition-colors duration-300 ease-in-out"
            prefetch={false}
          >
            Explore
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-black hover:text-gray-800 transition-colors duration-300 ease-in-out"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-black hover:text-gray-800 transition-colors duration-300 ease-in-out"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex gap-4">
          <Button
            variant="outlined"
            className="text-sm bg-black font-medium text-white border-black hover:text-white hover:bg-black transition-colors duration-300 ease-in-out"
            onClick={openModal}
          >
            Sign In
          </Button>
          <Button
            variant="contained"
            className="text-sm font-medium text-white bg-black hover:bg-gray-700 transition-colors duration-300 ease-in-out"
          >
            Sign Up
          </Button>
        </div>
        <div className="md:hidden flex items-center">
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
                className={!isMenuOpen ? "block" : "hidden"}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm16 5H4v2h16v-2zm0 5H4v2h16v-2z"
              />
              <path
                className={isMenuOpen ? "block" : "hidden"}
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
        className={`${isMenuOpen ? "fixed inset-0 z-50 bg-gradient-to-r from-slate-50 to-slate-100" : "hidden"
          } md:hidden`}
      >
        <nav className="flex flex-col gap-2 p-4">
          <Link
            href="/home"
            className="text-sm font-medium text-black hover:text-gray-800 transition-colors duration-300 ease-in-out"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="/explore"
            className="text-sm font-medium text-black hover:text-gray-800 transition-colors duration-300 ease-in-out"
            prefetch={false}
          >
            Explore
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-black hover:text-gray-800 transition-colors duration-300 ease-in-out"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-black hover:text-gray-800 transition-colors duration-300 ease-in-out"
            prefetch={false}
          >
            Contact
          </Link>
          <Button
            variant="outlined"
            className="text-sm font-medium text-black border-black hover:text-white hover:bg-black transition-colors duration-300 ease-in-out"
            onClick={openModal}
          >
            Sign In
          </Button>
          <Button
            variant="contained"
            className="text-sm font-medium text-white bg-black hover:bg-gray-700 transition-colors duration-300 ease-in-out"
          >
            Sign Up
          </Button>
        </nav>
      </div>

      {/* Joy UI Modal */}
      <Modal open={isModalOpen} onClose={closeModal}>
        <ModalDialog
          variant="outlined"
          color="neutral"
          sx={{ maxWidth: "sm", p: 4 }}
        >
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-2xl font-bold">Sign In</h2>
            <ModalClose
              onClick={closeModal}
              className="text-gray-600 bg-gray-100 mt-6 rounded-md hover:text-gray-900"
            />
          </div>
          <div>
            <form className="space-y-6 mt-6" onSubmit={onSubmitted}>
              <div>
                <Input
                  type="password"
                  className="mt-1 block pt-1 mb-5 pl-12 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                  type="password"
                  className="mt-1 pt-1 block w-full pl-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-center">
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div>
                <Button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 bg-slate-900 text-white rounded-md shadow-md hover:bg-black hover:scale-105 hover:ease-in-out"
                >
                  {submitted ? <CircularProgress /> : "Login"}
                </Button>
              </div>
            </form>
          </div>
        </ModalDialog>
      </Modal>
    </header>
  );
}
