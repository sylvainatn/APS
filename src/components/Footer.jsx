import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-teal-900 text-gray-200">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-lg font-bold">APS - Agent Propreté MultiServices</span>
            </div>
            <p className="mb-4 text-gray-400">
              Services de nettoyage et d&apos;entretien de qualité pour tous vos besoins professionnels.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300" aria-label="Twitter">
                {/* Twitter Icon */}
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.643 4.937c-.882.39-1.834.654-2.828.775 1.017-.608 1.794-1.56 2.163-2.695-.951.563-2.003.978-3.128 1.2-.896-.956-2.174-1.55-3.594-1.55-2.72 0-4.932 2.21-4.932 4.932 0 .39.044.765.128 1.124C7.69 8.094 4.066 6.135 1.64 3.16c-.42.723-.661 1.56-.661 2.457 0 1.696.863 3.188 2.174 4.062-.804-.027-1.562-.25-2.228-.623v.062c0 2.366 1.684 4.34 3.915 4.79-.41.111-.84.171-1.276.171-.312 0-.616-.031-.918-.088.617 1.928 2.413 3.327 4.537 3.366-1.662 1.303-3.76 2.083-6.036 2.083-.392 0-.782-.023-1.17-.069 2.162 1.384 4.734 2.196 7.491 2.196 8.983 0 13.91-7.437 13.91-13.897 0-.211-.005-.421-.015-.63.951-.687 1.77-1.55 2.423-2.535z"></path>
                </svg>
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300" aria-label="Facebook">
                {/* Facebook Icon */}
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.591-1.325 1.324v21.352c0 .732.591 1.324 1.325 1.324h11.497v-9.284h-3.115v-3.622h3.115v-2.676c0-3.08 1.792-4.794 4.578-4.794 1.329 0 2.662.098 3.2.148v3.728h-2.094c-1.633 0-2.028.778-2.028 1.975v2.494h4.056l-.557 3.622h-3.499v9.284h6.868c.732 0 1.325-.591 1.325-1.324v-21.352c0-.732-.591-1.324-1.325-1.324z"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300" aria-label="Instagram">
                {/* Instagram Icon */}
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition duration-300">Accueil</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition duration-300">Services</Link></li>
              <li><Link href="/tarifs" className="text-gray-400 hover:text-white transition duration-300">Tarifs</Link></li>
              <li><Link href="/a-propos" className="text-gray-400 hover:text-white transition duration-300">À propos</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-white transition duration-300">Nettoyage de bureaux</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition duration-300">Nettoyage d&apos;hôtels</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition duration-300">Nettoyage d&apos;immeubles</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition duration-300">Nettoyage de commerces</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition duration-300">Entretien espaces verts</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                {/* Adresse */}
                <svg className="h-5 w-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-gray-400">73 Rue Henri Barbusse, 77290 Mitry-mory</span>
              </li>
              <li className="flex items-start space-x-3">
                {/* Téléphone */}
                <svg className="h-5 w-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-gray-400">0744793424 / 0769012324</span>
              </li>
              <li className="flex items-start space-x-3">
                {/* Email */}
                <svg className="h-5 w-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-gray-400">apsservices_@outlook.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} APS. Tous droits réservés.
            </div>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm text-gray-400">
                <li><Link href="/mentions-legales" className="hover:text-white transition duration-300">Mentions légales</Link></li>
                <li><Link href="#" className="hover:text-white transition duration-300">Politique de confidentialité</Link></li>
                <li><Link href="#" className="hover:text-white transition duration-300">CGU</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
