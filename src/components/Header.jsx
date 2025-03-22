'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const pathname = usePathname();

   const navLinks = [
      { href: '/accueil', label: 'Accueil' },
      { href: '/services', label: 'Services' },
      { href: '/tarifs', label: 'Tarifs' },
      { href: '/a-propos', label: 'À propos' },
      { href: '/contact', label: 'Contact' },
   ];

   return (
      <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 to-teal-900 text-white shadow-lg">
         <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
               {/* Logo */}
               <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold font-sans">Agent Propreté Multiservices</span>
               </div>

               {/* Desktop Navigation */}
               <nav className="hidden md:flex space-x-8">
                  {navLinks.map(({ href, label }) => (
                     <Link
                        key={href}
                        href={href}
                        className={
                           pathname === href
                              ? 'text-blue-200 hover:text-blue-300 transition duration-300'
                              : 'hover:text-blue-200 transition duration-300'
                        }
                     >
                        {label}
                     </Link>
                  ))}
               </nav>

               {/* Mobile Menu Button */}
               <div className="md:hidden">
                  <button
                     onClick={() => setIsMenuOpen(!isMenuOpen)}
                     className="focus:outline-none"
                  >
                     <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        {isMenuOpen ? (
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                           ></path>
                        ) : (
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6h16M4 12h16M4 18h16"
                           ></path>
                        )}
                     </svg>
                  </button>
               </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
               <nav className="mt-4 pt-4 border-t border-blue-400 md:hidden">
                  <div className="flex flex-col space-y-3">
                     {navLinks.map(({ href, label }) => (
                        <Link
                           key={href}
                           href={href}
                           onClick={() => setIsMenuOpen(false)}
                           className={
                              pathname === href
                                 ? 'text-blue-200 hover:text-blue-300 transition duration-300'
                                 : 'hover:text-blue-200 transition duration-300'
                           }
                        >
                           {label}
                        </Link>
                     ))}
                  </div>
               </nav>
            )}
         </div>
      </header>
   );
};

export default Header;
