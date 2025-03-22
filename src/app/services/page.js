import Head from 'next/head';
import Image from 'next/image';

// Images importées
import bureauImg from '../assets/services/bureau.webp';
import hotelImg from '../assets/services/hotel.webp';
import immeubleImg from '../assets/services/immeuble.webp';
import commerceImg from '../assets/services/commerce.webp';
import evenementielImg from '../assets/services/evenementiel.webp';
import espacesVertsImg from '../assets/services/espaces-verts.webp';
import voitureImg from '../assets/services/voiture.webp';

// Données des services
const services = [
   {
      title: 'Nettoyage et entretien des locaux et bureaux',
      description:
         'Assurez un environnement de travail sain et agréable à vos collaborateurs et visiteurs grâce à notre service de nettoyage professionnel de bureaux. Interventions régulières ou ponctuelles adaptées à vos besoins.',
      image: bureauImg,
      alt: 'Agent APS nettoyant un bureau professionnel moderne',
   },
   {
      title: 'Nettoyage des hôtels et états des lieux',
      description:
         'Garantissez à vos clients une expérience irréprochable avec des chambres et espaces communs d’hôtel toujours propres. APS intervient également pour les états des lieux.',
      image: hotelImg,
      alt: 'Chambre d\'hôtel propre et bien rangée après le nettoyage APS',
   },
   {
      title: 'Nettoyage des immeubles (entretien des parties communes)',
      description:
         'Maintenez vos immeubles résidentiels ou commerciaux propres et accueillants. Nous assurons le nettoyage des halls, escaliers, ascenseurs et locaux techniques.',
      image: immeubleImg,
      alt: 'Parties communes d\'immeuble nettoyées par APS',
   },
   {
      title: 'Nettoyage des commerces',
      description:
         'Offrez à vos clients un espace de vente impeccable et attractif. APS intervient en dehors de vos heures d’ouverture pour garantir la propreté sans gêner votre activité.',
      image: commerceImg,
      alt: 'Boutique propre après intervention APS',
   },
   {
      title: 'Nettoyage événementiel',
      description:
         'APS assure le nettoyage avant, pendant et après vos événements professionnels, culturels ou privés. Un service flexible et discret pour une organisation sans souci.',
      image: evenementielImg,
      alt: 'Salle d\'événement nettoyée avant un événement important',
   },
   {
      title: 'Entretien des espaces verts',
      description:
         'Valorisez vos extérieurs avec notre service d’entretien des espaces verts : tonte de pelouse, taille de haies, désherbage, ramassage de feuilles et plus encore.',
      image: espacesVertsImg,
      alt: 'Jardin entretenu par APS, pelouse fraîchement tondue',
   },
   {
      title: 'Nettoyage de voiture',
      description:
         'Redonnez de l’éclat à votre véhicule avec notre nettoyage intérieur et extérieur complet. APS utilise des produits de qualité pour un résultat professionnel.',
      image: voitureImg,
      alt: 'Voiture brillante après nettoyage complet par APS',
   },
];

const Services = () => {
   return (
      <>
         {/* SEO */}
         <Head>
            <title>Nos Services de Nettoyage - APS | Agent Propreté Multiservices</title>
            <meta
               name="description"
               content="APS propose des services de nettoyage professionnel : bureaux, hôtels, immeubles, commerces, événements, espaces verts et véhicules. Prestations sur mesure adaptées à vos besoins."
            />
            <meta name="keywords" content="nettoyage professionnel, entretien bureaux, nettoyage hôtels, parties communes immeubles, nettoyage commerces, nettoyage événementiel, espaces verts, lavage voiture" />
            <meta name="robots" content="index, follow" />

            {/* Open Graph */}
            <meta property="og:title" content="Services de Nettoyage Professionnel - APS" />
            <meta
               property="og:description"
               content="Découvrez les prestations de nettoyage proposées par APS : bureaux, hôtels, immeubles, commerces, événements et plus."
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.votre-site.com/services" />
            <meta property="og:image" content={`https://www.votre-site.com${bureauImg.src}`} />
            <link rel="canonical" href="https://www.votre-site.com/services" />
         </Head>

         <div className="flex flex-col min-h-screen">
            <main className="flex-grow container mx-auto p-6 sm:px-6 lg:px-8">
               <header className="text-center mb-12">
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-teal-900 text-transparent bg-clip-text">
                     Nos Services de Nettoyage et d&apos;Entretien
                  </h1>
                  <p className="text-lg text-gray-700 mt-4">
                     Agent Propreté Multiservices vous propose une gamme complète de prestations adaptées à chaque secteur d&apos;activité.
                  </p>
               </header>

               {/* Liste des services */}
               <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" aria-label="Liste des services de nettoyage APS">
                  {services.map((service, index) => (
                     <article
                        key={index}
                        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
                        itemScope
                        itemType="https://schema.org/Service"
                     >
                        <div className="relative w-full h-48">
                           <Image
                              src={service.image}
                              alt={service.alt}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                           />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                           <h2 className="text-2xl font-semibold bg-gradient-to-r from-slate-900 to-teal-900 text-transparent bg-clip-text mb-2" itemProp="name">
                              {service.title}
                           </h2>
                           <p className="text-gray-700 leading-relaxed flex-grow" itemProp="description">
                              {service.description}
                           </p>
                        </div>
                     </article>
                  ))}
               </section>
            </main>
         </div>
      </>
   );
};

export default Services;
