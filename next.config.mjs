/** @type {import('next').NextConfig} */
const nextConfig = {
   async redirects() {
      return [
         {
            source: '/',
            destination: '/accueil',
            permanent: true, // true pour SEO / 301 redirect
         },
      ]
   },
   webpack(config) {
      config.module.rules.push({
         test: /\.(png|jpe?g|gif|webp)$/i,
         type: 'asset/resource',
      });
      return config;
   },
}

export default nextConfig;
