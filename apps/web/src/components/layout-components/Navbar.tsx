"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import SearchBar from "../Searchbar";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Dimming background when sidebar is open */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-black"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <nav className="relative flex items-center justify-between p-5 px-5 sm:px-10 md:px-20 lg:px-40">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src={"/hore.jpg"}
            width={60}
            height={60}
            alt="hore logo"
            className="object-cover"
          />
        </Link>

        {/* Desktop Nav & Search Bar */}
        <div className="hidden items-center gap-5 md:flex">
          <SearchBar />
          <ul className="flex items-center gap-5">
            <li>
              <Link className="navbar" href={"/event-posts"}>
                Events
              </Link>
            </li>
            <li>
              <Link className="navbar" href={"/categories-posts"}>
                Categories
              </Link>
            </li>
            <li>
              <Link className="navbar" href={"/"}>
                Badges
              </Link>
            </li>
            <li>
              <Link className="navbar" href={"/leaderboards"}>
                Leaderboards
              </Link>
            </li>
            <li className="mx-3 rounded-full border-2 border-darkPurple px-3 py-1">
              <Link href={"/"} className="font-delius text-darkPurple">
                Log In
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-darkPurple focus:outline-none md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Mobile Sidebar (Animated) */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col items-center space-y-6 bg-white py-10 shadow-lg md:hidden"
            >
              {/* Close Button */}
              <button
                className="absolute right-5 top-5 text-darkPurple focus:outline-none"
                onClick={() => setMenuOpen(false)}
              >
                <X size={32} />
              </button>

              {/* Search Bar inside Sidebar */}
              <div className="relative w-full px-6">
                <SearchBar />
                {/* Adjusted the search results to pop to the left */}
                <div className="absolute right-0 mt-2 w-[250px] -translate-x-full transform rounded-lg bg-white shadow-md">
                  {/* Search results will be rendered here */}
                </div>
              </div>

              {/* Sidebar Navigation Links */}
              <Link
                className="text-lg"
                href={"/event-posts"}
                onClick={() => setMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                className="text-lg"
                href={"/categories-posts"}
                onClick={() => setMenuOpen(false)}
              >
                Categories
              </Link>
              <Link
                className="text-lg"
                href={"/"}
                onClick={() => setMenuOpen(false)}
              >
                Badges
              </Link>
              <Link
                className="text-lg"
                href={"/leaderboards"}
                onClick={() => setMenuOpen(false)}
              >
                Leaderboards
              </Link>
              <Link
                href={"/"}
                className="rounded-full border-2 border-darkPurple px-4 py-2 font-delius text-darkPurple"
                onClick={() => setMenuOpen(false)}
              >
                Log In
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
