import Head from 'next/head';
import Image from 'next/image';
import bannerImg from '../assets/banner-nettoyage.webp';
import logoImg from '../assets/logo.webp';

const Accueil = () => {
   return (
      <>
         <Head>
            <title>Accueil APS - Agent Propreté Multiservices</title>
            <meta
               name="description"
               content="APS propose des services de nettoyage professionnel pour bureaux, hôtels, commerces et plus. Demandez un devis gratuit et profitez d'une équipe réactive et expérimentée."
            />
            <meta
               name="keywords"
               content="nettoyage professionnel, APS, entretien bureaux, nettoyage hôtel, agent propreté, nettoyage écologique, propreté multiservices"
            />
            <meta name="robots" content="index, follow" />

            {/* Open Graph */}
            <meta property="og:title" content="Agent Propreté Multiservices - Nettoyage professionnel sur mesure" />
            <meta
               property="og:description"
               content="Faites appel à APS pour des services de nettoyage professionnels et adaptés à vos besoins : bureaux, hôtels, commerces..."
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.votre-site.com/" />
            <meta property="og:image" content={`https://www.votre-site.com${bannerImg.src}`} />

            <link rel="icon" href="/favicon.ico" />
         </Head>

         <div className="flex flex-col min-h-screen">

            <header className="sr-only">
               <h1>Agent Propreté Multiservices - Nettoyage professionnel sur mesure</h1>
            </header>

            {/* BANNIÈRE */}
            <section
               className="relative bg-cover bg-center text-white py-20"
               style={{
                  backgroundImage: `url(${bannerImg.src})`,
               }}
               aria-label="Bienvenue chez APS - Services de Nettoyage Professionnel"
            >
               <div className="bg-black/50 absolute inset-0" aria-hidden="true"></div>
               <div className="relative container mx-auto flex flex-col items-center justify-center text-center z-10 px-4">
                  <h2 className="text-5xl font-bold mb-4">
                     Bienvenue chez Agent Propreté Multiservices
                  </h2>
                  <p className="text-lg max-w-xl">
                     Votre partenaire de confiance pour un environnement propre et sain. Découvrez nos services de nettoyage et d’entretien sur-mesure.
                  </p>
                  <div className="mt-8">
                     <a
                        href="/contact"
                        className="bg-white text-teal-800 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100 transition duration-300"
                     >
                        Contactez-nous
                     </a>
                  </div>
               </div>
            </section>

            {/* CONTENU PRINCIPAL */}
            <main className="flex-grow container mx-auto p-6">

               <section className="bg-white p-8 rounded-lg shadow-md" aria-labelledby="services-title">
                  <div className="flex justify-center mb-6">
                     <Image
                        src={logoImg}
                        alt="Logo de l'entreprise APS - Agent Propreté Multiservices"
                        height={160}
                        width={160}
                        priority
                     />
                  </div>

                  <h2
                     id="services-title"
                     className="text-3xl font-semibold bg-gradient-to-r from-slate-900 to-teal-900 bg-clip-text text-transparent mb-4 text-center"
                  >
                     Services de Nettoyage & d’Entretien
                  </h2>

                  <p className="text-gray-700 text-lg leading-relaxed text-center mb-4">
                     Chez <strong>APS</strong>, nos équipes qualifiées assurent le nettoyage et l’entretien de vos espaces professionnels. Adaptés aux entreprises, collectivités ou copropriétés, nos services sont flexibles selon vos besoins.
                  </p>

                  <p className="text-gray-700 text-lg leading-relaxed text-center mb-4">
                     Nous privilégions des méthodes écologiques et des produits respectueux de l’environnement pour garantir des résultats impeccables et un cadre sain.
                  </p>

                  <p className="text-gray-700 text-lg leading-relaxed text-center mb-4">
                     Notre mission : offrir à vos collaborateurs, clients et visiteurs des espaces propres, agréables et valorisants. Nous intervenons de manière discrète et efficace, en respectant vos contraintes.
                  </p>

                  {/* LISTE SERVICES */}
                  <div className="text-center mt-6">
                     <ul className="text-gray-700 text-lg space-y-2">
                        <li>🔹 Nettoyage de bureaux</li>
                        <li>🔹 Entretien d’immeubles et de parties communes</li>
                        <li>🔹 Nettoyage après travaux ou sinistres</li>
                        <li>🔹 Services pour hôtels, restaurants et commerces</li>
                     </ul>
                  </div>

                  {/* FRÉQUENCES */}
                  <div className="text-center mt-6">
                     <h3 className="text-xl font-semibold text-teal-900">Fréquences de nettoyage :</h3>
                     <ul className="text-gray-700 text-lg space-y-2 mt-4">
                        <li>☑ Quotidien</li>
                        <li>☑ Hebdomadaire</li>
                        <li>☑ Mensuel</li>
                        <li>☑ Occasionnel</li>
                     </ul>
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed text-center mt-6">
                     Faites confiance à <strong>APS</strong> pour garantir un environnement propre et accueillant à des <strong>tarifs compétitifs et transparents</strong>.
                  </p>

                  <div className="text-center mt-8">
                     <a
                        href="/contact"
                        className="inline-block font-semibold px-6 py-3 rounded-lg border-2 border-teal-900 bg-gradient-to-r from-slate-900 to-teal-900 bg-clip-text text-transparent hover:opacity-80 transition duration-300"
                     >
                        Demandez votre devis personnalisé
                     </a>
                  </div>
               </section>
            </main>

         </div>
      </>
   );
};

export default Accueil;
