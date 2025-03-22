"use client";

import React from 'react';
import { Helmet } from 'react-helmet-async';

const MentionsLegales = () => {
  return (
    <>
      <Helmet>
        <title>Mentions Légales - APS</title>
        <meta
          name="description"
          content="Découvrez les mentions légales du site d'APS - Agent Propreté Multiservice, spécialiste en nettoyage et entretien."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-center text-teal-900 mb-8 py-1">
          Mentions Légales
        </h1>

        <section className="bg-white p-6 rounded-2xl shadow-lg max-w-4xl mx-auto space-y-10 text-gray-700 leading-relaxed">
          {/* Informations générales */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-900 mb-4">
              Éditeur du site
            </h2>
            <p><strong>Nom de l'entreprise :</strong> APS - Agent Propreté Multiservice</p>
            <p><strong>Adresse :</strong> 73 Rue Henri Barbusse, 77290 Mitry-Mory, France</p>
            <p>
              <strong>Téléphone :</strong>{" "}
              <a
                href="tel:+33744793424"
                className="text-teal-900 hover:underline"
                title="Appeler APS"
                aria-label="Appeler APS au 07 44 79 34 24"
              >
                07 44 79 34 24
              </a>
            </p>
            <p>
              <strong>Email :</strong>{" "}
              <a
                href="mailto:apsservices_@outlook.com"
                className="text-teal-900 hover:underline"
                title="Envoyer un email à APS"
                aria-label="Envoyer un email à APS"
              >
                apsservices_@outlook.com
              </a>
            </p>
            <p><strong>Site réalisé par :</strong> Sylvain ANTON</p>
          </div>

          {/* Propriété intellectuelle */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-900 mb-4">
              Propriété intellectuelle
            </h2>
            <p>
              Le site web ainsi que l’ensemble des éléments qui le composent
              (textes, images, logos, vidéos, etc.) sont protégés par le droit
              de la propriété intellectuelle. Toute reproduction, représentation
              ou exploitation, même partielle, de ces éléments sans l’autorisation
              expresse de l’éditeur est interdite.
            </p>
          </div>

          {/* Données personnelles */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-900 mb-4">
              Données personnelles
            </h2>
            <p>
              Les informations recueillies via ce site sont utilisées uniquement
              dans le cadre de la gestion de la relation client. Vous disposez
              d’un droit d’accès, de rectification, de suppression et d’opposition
              sur les données vous concernant, que vous pouvez exercer en nous
              contactant à l'adresse email suivante :{" "}
              <a
                href="mailto:apsservices_@outlook.com"
                className="text-teal-900 hover:underline"
                title="Envoyer un email à APS"
                aria-label="Envoyer un email à APS"
              >
                apsservices_@outlook.com
              </a>.
            </p>
          </div>

          {/* Liens hypertextes */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-900 mb-4">
              Liens hypertextes
            </h2>
            <p>
              Le site APS peut contenir des liens vers d’autres sites internet.
              Nous ne sommes pas responsables du contenu de ces sites externes
              et leur utilisation se fait sous votre propre responsabilité.
            </p>
          </div>

          {/* Limitation de responsabilité */}
          <div>
            <h2 className="text-2xl font-semibold text-teal-900 mb-4">
              Limitation de responsabilité
            </h2>
            <p>
              Nous nous efforçons d'assurer l'exactitude et la mise à jour des
              informations présentes sur ce site, mais ne pouvons garantir leur
              exactitude, leur exhaustivité ou leur actualité. Nous déclinons
              toute responsabilité pour toute erreur ou omission dans les contenus
              du site.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default MentionsLegales;
