"use client";
import Link from "next/link";

const Footer = () => {
  const routes = [
    { name: "Acasa", path: "/" },
    { name: "Despre", path: "/despre" },
    { name: "Servicii", path: "/servicii" },
    { name: "Pachete", path: "/pachete" },
    { name: "Ajutor Inmormantare", path: "/ajutor-inmormantare" },
    { name: "Repatriere", path: "/repatriere" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-gray-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo */}
          <div className="text-lg font-bold">
            <Link href="/">
              <p className="hover:text-gray-400">Logo Servicii Funerare</p>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center space-x-4">
            {routes.map((route) => (
              <Link key={route.name} href={route.path}>
                <p className="text-sm hover:text-gray-400">{route.name}</p>
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-4"></div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-300">
          &copy; {new Date().getFullYear()} Logo Servicii Funerare. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
