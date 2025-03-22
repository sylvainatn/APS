import Head from 'next/head';

const Tarif = () => {
  return (
    <>
      <Head>
        <title>Tarifs Nettoyage Professionnel Paris - APS | Agent Propreté Multiservice</title>
        <meta
          name="description"
          content="Découvrez les tarifs compétitifs d'Agent Propreté Multiservice (APS) pour le nettoyage de bureaux, commerces, après chantier et espaces professionnels sur Paris et Île-de-France. Devis gratuit !"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Tarifs Nettoyage Professionnel Paris - APS" />
        <meta
          property="og:description"
          content="Services de nettoyage de qualité à des prix attractifs. APS propose des interventions sur mesure adaptées à vos besoins à Paris et Île-de-France."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tonsite.com/tarifs-nettoyage" />
        <meta property="og:image" content="https://www.tonsite.com/images/tarifs-nettoyage.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tarifs Nettoyage Professionnel Paris - APS" />
        <meta
          name="twitter:description"
          content="Découvrez nos prix pour le nettoyage de bureaux, commerces et chantiers. Devis gratuit et prestations sur mesure."
        />
        <meta name="twitter:image" content="https://www.tonsite.com/images/tarifs-nettoyage.jpg" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Services de Nettoyage Professionnel",
            "provider": {
              "@type": "Organization",
              "name": "Agent Propreté Multiservice (APS)",
              "url": "https://www.tonsite.com"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Paris et Île-de-France"
            },
            "serviceType": "Nettoyage bureaux, commerces, après chantier",
            "description": "Prestations de nettoyage professionnelles avec des tarifs sur mesure à Paris et en Île-de-France.",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "EUR",
              "url": "https://www.tonsite.com/tarifs-nettoyage"
            }
          })
        }} />
      </Head>

      <div className="flex flex-col min-h-screen">
        <main className="flex-grow container mx-auto p-6 sm:px-6">
          <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-slate-900 to-teal-900 text-transparent bg-clip-text mb-8 py-1">
            Tarifs de nos Services de Nettoyage
          </h1>

          {/* Section Tarifs */}
          <section className="bg-white p-4 sm:p-8 rounded-lg shadow-md mb-12">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-center mb-6 sm:mb-8">
              Nos services de nettoyage professionnel à Paris et en Île-de-France s'adaptent à vos besoins : nettoyage de bureaux, commerces, après chantier et plus encore. Découvrez nos tarifs clairs et compétitifs.
            </p>

            {/* Tableau des tarifs */}
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm sm:text-base bg-white border border-gray-300 rounded-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-slate-900 to-teal-900 text-white">
                  <tr>
                    <th className="py-3 sm:py-4 px-4 sm:px-6 text-left">Service de Nettoyage</th>
                    <th className="py-3 sm:py-4 px-4 sm:px-6 text-center">Tarif HT</th>
                    <th className="py-3 sm:py-4 px-4 sm:px-6 text-center">Détails de la prestation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4">Nettoyage de bureaux</td>
                    <td className="py-3 px-4 text-center">17,50€ - 20€</td>
                    <td className="py-3 px-4">Entretien régulier, désinfection, vidage de corbeilles, dépoussiérage.</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4">Nettoyage de commerces</td>
                    <td className="py-3 px-4 text-center">18€ - 22€</td>
                    <td className="py-3 px-4">Vitrines, sols, sanitaires, nettoyage des espaces clients et zones de passage.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Nettoyage après chantier</td>
                    <td className="py-3 px-4 text-center">22€ - 25€</td>
                    <td className="py-3 px-4">Débarras des gravats, dépoussiérage intensif, lavage en profondeur.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Appel à l'action */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-center mt-8 sm:mt-10">
              Tous nos services sont personnalisés selon vos besoins. Contactez APS pour une visite gratuite et un devis sur mesure !
            </p>

            <div className="text-center mt-6 sm:mt-8">
              <a
                href="/contact"
                className="inline-block w-full sm:w-auto font-semibold px-4 py-3 sm:px-6 sm:py-3 rounded-lg border-2 border-teal-900 text-white bg-gradient-to-r from-slate-900 to-teal-900 hover:opacity-80 transition duration-300"
                aria-label="Demandez votre devis personnalisé de nettoyage"
              >
                Demandez votre devis personnalisé
              </a>
            </div>
          </section>

          {/* Avantages APS */}
          <section className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-12">
            <article className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
              <h2 className="text-lg sm:text-xl font-semibold text-teal-900 mb-2 sm:mb-4">Transparence totale</h2>
              <p className="text-gray-700 text-sm sm:text-base">
                Aucuns frais cachés. Nos devis sont détaillés et clairs dès le départ.
              </p>
            </article>
            <article className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
              <h2 className="text-lg sm:text-xl font-semibold text-teal-900 mb-2 sm:mb-4">Flexibilité sur mesure</h2>
              <p className="text-gray-700 text-sm sm:text-base">
                Nettoyage régulier ou ponctuel, nous nous adaptons à votre emploi du temps.
              </p>
            </article>
            <article className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
              <h2 className="text-lg sm:text-xl font-semibold text-teal-900 mb-2 sm:mb-4">Qualité garantie</h2>
              <p className="text-gray-700 text-sm sm:text-base">
                Des agents de propreté professionnels formés pour un nettoyage impeccable.
              </p>
            </article>
          </section>

          {/* FAQ Tarifs */}
          <section className="bg-white p-4 sm:p-8 rounded-lg shadow-md mb-16">
            <h2 className="text-xl sm:text-2xl font-semibold text-teal-900 mb-4 sm:mb-6 text-center">FAQ - Nos Tarifs de Nettoyage</h2>

            <div className="space-y-4 text-sm sm:text-base">
              <article>
                <h3 className="font-semibold text-teal-900">💬 Les devis sont-ils vraiment gratuits ?</h3>
                <p className="text-gray-700">
                  Oui ! Tous nos devis sont gratuits et sans engagement. Contactez-nous pour une évaluation sur site.
                </p>
              </article>
              <article>
                <h3 className="font-semibold text-teal-900">💬 Des frais de déplacement sont-ils appliqués ?</h3>
                <p className="text-gray-700">
                  Aucun frais si vous êtes sur Paris et la petite couronne. Pour les zones plus éloignées, un supplément peut être demandé.
                </p>
              </article>
              <article>
                <h3 className="font-semibold text-teal-900">💬 Y a-t-il des réductions pour les contrats longue durée ?</h3>
                <p className="text-gray-700">
                  Absolument ! Nous proposons des tarifs dégressifs en fonction de la fréquence et de la durée du contrat.
                </p>
              </article>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Tarif;
