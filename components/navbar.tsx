"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Define the routes array with name, path, and optionally an icon
const routes = [
  { name: "Acasa", path: "/" },
  { name: "Despre", path: "/despre" },
  { name: "Servicii", path: "/servicii" },
  { name: "Pachete", path: "/pachete" },
  { name: "Ajutor Inmormantare", path: "/ajutor-inmormantare" },
  { name: "Repatriere", path: "/repatriere" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex justify-center items-center">
              <Link href="/" className="text-lg font-bold">
                Logo Servicii Funerare
              </Link>
            </div>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            {routes.map((route) => (
              <Link
                key={route.name}
                href={route.path}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center"
              >
                <span className="ml-2">{route.name}</span>
              </Link>
            ))}
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="relative h-6 w-6 flex flex-col justify-center items-center"
            >
              {/* First line */}
              <motion.div
                initial={false}
                animate={
                  isOpen
                    ? { rotate: 45, y: 0, x: 0 }
                    : { rotate: 0, y: -4, x: 0 }
                }
                transition={{ duration: 0.3 }}
                className="absolute w-6 h-0.5 bg-gray-700"
              />
              {/* Second line */}
              <motion.div
                initial={false}
                animate={
                  isOpen
                    ? { rotate: -45, y: 0, x: 0 }
                    : { rotate: 0, y: 4, x: 0 }
                }
                transition={{ duration: 0.3 }}
                className="absolute w-6 h-0.5 bg-gray-700"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        className={`overflow-hidden md:hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {routes.map((route) => (
            <Link
              key={route.name}
              href={route.path}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 flex items-center"
            >
              <span className="ml-2">{route.name}</span>
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
