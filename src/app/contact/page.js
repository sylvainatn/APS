"use client";

import { useState } from 'react';
import Head from 'next/head';
import { init, send } from 'emailjs-com';

export default function Contact() {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
   });
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [status, setStatus] = useState('');

   // Init EmailJS
   init('r1IAx46M_jKyTfj6R'); // Remplace par ton User ID

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value
      });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      // Validation simple
      if (!formData.name || !formData.email || !formData.message) {
         setStatus('Veuillez remplir tous les champs.');
         return;
      }

      const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!validateEmail(formData.email)) {
         setStatus('Veuillez entrer une adresse email valide.');
         return;
      }

      setIsSubmitting(true);
      setStatus('');

      try {
         await send(
            'service_tdak4o4',   // Service ID
            'template_izwh6jy',  // Template ID
            formData
         );
         setStatus('Message envoyé avec succès !');
         setFormData({ name: '', email: '', message: '' });
      } catch (error) {
         setStatus('Une erreur est survenue. Veuillez réessayer.');
      }

      setIsSubmitting(false);
   };

   return (
      <>
         {/* SEO & Meta */}
         <Head>
            <title>Contact APS - Agent Propreté Multiservice</title>
            <meta
               name="description"
               content="Contactez APS pour vos besoins de nettoyage professionnel. Demandez un devis gratuit à notre équipe réactive et obtenez un service de qualité."
            />
            <meta
               name="keywords"
               content="contact, nettoyage professionnel, devis nettoyage, nettoyage bureaux, nettoyage entreprises, nettoyage écologiques, APS"
            />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content="Contactez APS - Agent Propreté Multiservice" />
            <meta
               property="og:description"
               content="Formulaire de contact pour vos besoins en nettoyage professionnel. Demandez un devis personnalisé pour vos espaces professionnels ou résidentiels."
            />
            <meta property="og:url" content="https://www.aps-nettoyage.fr/contact" />
            <meta
               property="og:image"
               content="https://www.aps-nettoyage.fr/images/contact.jpg"
            />
            <meta name="twitter:title" content="Contactez APS - Agent Propreté Multiservice" />
            <meta
               name="twitter:description"
               content="Demandez un devis gratuit ou contactez-nous pour toute question sur nos services de nettoyage professionnel. Équipe réactive et services de qualité."
            />
            <meta
               name="twitter:image"
               content="https://www.aps-nettoyage.fr/images/contact.jpg"
            />
         </Head>

         <div className="flex flex-col min-h-screen">
            <main className="flex-grow container mx-auto p-6">
               <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-slate-900 to-teal-900 text-transparent bg-clip-text mb-8 py-1">
                  Contactez-nous
               </h1>

               <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
                  Vous avez une question, besoin d'un devis ou envie d'en savoir plus sur nos services de nettoyage professionnel ? Notre équipe est à votre écoute et vous répondra rapidement.
               </p>

               <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 max-w-5xl mx-auto">
                  {/* Formulaire */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                     <h3 className="text-2xl font-semibold text-teal-900 mb-6 text-center">Formulaire de contact</h3>

                     <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                           <label className="block text-gray-700 mb-2" htmlFor="name">Nom et Prénom</label>
                           <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-900"
                              placeholder="Votre nom et prénom"
                              required
                           />
                        </div>

                        <div className="mb-4">
                           <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                           <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-900"
                              placeholder="Votre email"
                              required
                           />
                        </div>

                        <div className="mb-4">
                           <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                           <textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-900"
                              rows="5"
                              placeholder="Votre message"
                              required
                           ></textarea>
                        </div>

                        {status && (
                           <p className={`text-center mb-4 ${status.includes('succès') ? 'text-green-500' : 'text-red-500'}`}>
                              {status}
                           </p>
                        )}

                        <button
                           type="submit"
                           disabled={isSubmitting}
                           className="bg-gradient-to-r from-slate-900 to-teal-900 text-white font-semibold px-6 py-3 rounded-lg hover:opacity-80 transition duration-300 w-full"
                        >
                           {isSubmitting ? (
                              <div className="flex items-center justify-center">
                                 <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                                 </svg>
                                 Envoi en cours...
                              </div>
                           ) : (
                              'Envoyer le message'
                           )}
                        </button>
                     </form>
                  </div>

                  {/* Infos Contact + Google Map */}
                  <div className="flex flex-col gap-8">
                     <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                        <h3 className="text-2xl font-semibold text-teal-900 mb-4">Nos coordonnées</h3>

                        <p className="text-gray-700 mb-2">
                           📍 <strong>Adresse :</strong> 73 Rue Henri Barbusse, 77290 Mitry-Mory
                        </p>
                        <p className="text-gray-700 mb-2">
                           ☎️ <strong>Téléphone :</strong> <a href="tel:+33744793424" className="text-teal-900 hover:underline">07 44 79 34 24</a>
                        </p>
                        <p className="text-gray-700 mb-2">
                           ✉️ <strong>Email :</strong> <a href="mailto:apsservices_@outlook.com" className="text-teal-900 hover:underline">apsservices_@outlook.com</a>
                        </p>

                        <h4 className="text-xl font-semibold text-teal-900 mt-6 mb-2">Horaires d'ouverture</h4>
                        <ul className="text-gray-700">
                           <li>🕐 Lundi - Vendredi : 8h00 - 18h00</li>
                           <li>🕐 Samedi : 9h00 - 13h00</li>
                           <li>❌ Dimanche : Fermé</li>
                        </ul>
                     </div>

                     <div className="rounded-lg overflow-hidden shadow-md flex-1">
                        <iframe
                           title="Localisation APS"
                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2619.7917236300623!2d2.5903778768508365!3d48.95745159372961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e616e5cdbd6acf%3A0xfd9598bd3659ef53!2s73%20Rue%20Henri%20Barbusse%2C%2077290%20Mitry-Mory!5e0!3m2!1sfr!2sfr!4v1742164395610!5m2!1sfr!2sfr"
                           width="100%"
                           height="250"
                           style={{ border: 0 }}
                           allowFullScreen={true}
                           loading="lazy"
                        ></iframe>
                     </div>
                  </div>
               </section>
            </main>
         </div>
      </>
   );
}
