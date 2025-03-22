// app/a-propos/page.jsx

import Image from 'next/image';
import Head from 'next/head';
import logo from '../assets/logo.webp'; // Assure the logo is properly placed in /public/assets/

const APropos = () => {
  return (
    <>
      {/* Head Section for SEO */}
      <Head>
        <title>À propos de APS - Agent Propreté Multiservices | Nettoyage Professionnel</title>
        <meta
          name="description"
          content="Découvrez APS (Agent Propreté Multiservices), une entreprise spécialisée dans le nettoyage écologique et professionnel pour les espaces commerciaux, résidentiels, et industriels en Île-de-France."
        />
        <meta
          name="keywords"
          content="Agent Propreté Multiservices, nettoyage professionnel, entretien commercial, nettoyage écologique, nettoyage résidentiel, entreprise de nettoyage, nettoyage bureaux Paris"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="À propos de APS - Agent Propreté Multiservices" />
        <meta
          property="og:description"
          content="Découvrez notre entreprise spécialisée dans le nettoyage professionnel, offrant des solutions écologiques pour tous vos besoins de propreté à Paris et en Île-de-France."
        />
        <meta
          property="og:image"
          content="https://www.aps-nettoyage.fr/images/logo.webp"
        />
        <meta property="og:url" content="https://www.aps-nettoyage.fr/a-propos" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:title" content="À propos de APS - Agent Propreté Multiservices" />
        <meta
          name="twitter:description"
          content="L'entreprise APS est spécialisée dans le nettoyage écologique et de qualité, avec des solutions adaptées à vos besoins professionnels et résidentiels."
        />
        <meta
          name="twitter:image"
          content="https://www.aps-nettoyage.fr/images/logo.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />

        {/* JSON-LD Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Agent Propreté Multiservices (APS)",
              "url": "https://www.aps-nettoyage.fr",
              "logo": "https://www.aps-nettoyage.fr/images/logo.webp",
              "description": "Agent Propreté Multiservices propose des services de nettoyage professionnel, écologique et personnalisé à Paris et Île-de-France pour entreprises et particuliers.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+33 1 23 45 67 89", // Replace with your actual phone number
                "contactType": "Customer Service",
                "areaServed": "FR",
                "availableLanguage": "French"
              },
              "sameAs": [
                "https://www.facebook.com/apsnettoyage",
                "https://www.linkedin.com/company/apsnettoyage"
              ]
            }),
          }}
        />
      </Head>

      <div className="flex flex-col min-h-screen">
        {/* Main Content */}
        <main className="flex-grow container mx-auto p-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-teal-900 bg-clip-text text-transparent mb-6 text-center py-1">
            À propos de nous
          </h1>

          <section className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex justify-center mb-6">
              <Image
                src={logo}
                alt="Logo APS - Agent Propreté Multiservices"
                className="h-40 w-auto"
                width={200} // Adjust to fit your logo size
                height={200}
              />
            </div>

            <p className="text-gray-700 text-lg leading-relaxed text-center mb-4">
              Agent Propreté Multiservices (APS) est une entreprise dédiée au nettoyage et à l'entretien de divers types d'espaces. Nous proposons des services de nettoyage écologiques, efficaces et personnalisés pour répondre aux besoins des professionnels et des particuliers en Île-de-France.
            </p>

            <h2 className="text-2xl font-semibold text-teal-900 mt-6 mb-4 text-center">
              Nos valeurs
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed text-center mb-4">
              Chez APS, nous croyons que la propreté de vos espaces professionnels ou résidentiels est essentielle pour votre bien-être et votre image. Nous nous engageons à fournir des services fiables, flexibles et de qualité.
            </p>

            <h2 className="text-2xl font-semibold text-teal-900 mt-6 mb-4 text-center">
              Pourquoi choisir APS ?
            </h2>
            <ul className="text-gray-700 text-lg space-y-2 mb-4 text-center">
              <li>✔ Équipe professionnelle et formée</li>
              <li>✔ Solutions sur mesure pour chaque client</li>
              <li>✔ Respect des délais et des engagements</li>
              <li>✔ Produits écologiques et respectueux de l'environnement</li>
              <li>✔ Tarifs compétitifs et transparents</li>
            </ul>

            <p className="text-gray-700 text-lg leading-relaxed text-center mb-4">
              Depuis notre création, nous avons toujours mis l'accent sur la qualité et la satisfaction de nos clients. Nos solutions de nettoyage sont adaptées à vos besoins spécifiques pour garantir un environnement sain et agréable.
            </p>

            <h2 className="text-2xl font-semibold text-teal-900 mt-6 mb-4 text-center">
              Notre équipe
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed text-center mb-4">
              Notre équipe est composée de professionnels qualifiés, rigoureux et passionnés par le nettoyage. Nous veillons à offrir un service de qualité supérieure tout en assurant la sécurité et le confort de vos espaces.
            </p>

            <div className="text-center mt-8">
              <a
                href="/contact"
                className="inline-block font-semibold px-6 py-3 rounded-lg border-2 border-teal-900 bg-gradient-to-r from-slate-900 to-teal-900 bg-clip-text text-transparent hover:opacity-80 transition duration-300"
              >
                Contactez-nous
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default APropos;
