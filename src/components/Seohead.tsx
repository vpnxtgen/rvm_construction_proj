// SEOHead.tsx
// Requires: npm install react-helmet-async
// Wrap your <App /> in <HelmetProvider> at the root (main.tsx/index.tsx)
//
// Usage in your Home/Landing page:
//   import SEOHead from "./components/SEOHead";
//   <SEOHead />  ...place near the top of your page component's return()

import { Helmet } from "react-helmet-async";

export default function SEOHead() {
  return (
    <Helmet>
      <title>RVM Constructions | Premium Home & Villa Builders</title>
      <meta
        name="description"
        content="RVM Constructions delivers premium home, villa & commercial construction with architectural integrity, transparent pricing, and on-time delivery. Get a free consultation today."
      />
      <meta
        name="keywords"
        content="construction company, home construction contractors, residential construction company, commercial construction company, custom home builders, villa construction company, best construction company near me, turnkey construction services, building renovation and remodeling, structural construction services, apartment construction contractors, premium home builders"
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.rvmconstructions.com/" />

      {/* Open Graph (social share previews) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="RVM Constructions | Premium Home & Villa Builders" />
      <meta
        property="og:description"
        content="Architectural integrity, premium craftsmanship, and on-time delivery. RVM Constructions turns your vision into a structural reality."
      />
      <meta property="og:image" content="/src/assets/images/rvm_hero_house_1783953334166.jpg" />
      <meta property="og:url" content="https://www.rvmconstructions.com/" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="RVM Constructions | Premium Home & Villa Builders" />
      <meta
        name="twitter:description"
        content="Architectural integrity, premium craftsmanship, and on-time delivery. RVM Constructions turns your vision into a structural reality."
      />

      {/* Structured data: helps Google show rich results for local businesses */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          name: "RVM Constructions",
          description:
            "RVM Constructions delivers premium home, villa and commercial construction with architectural integrity, transparent pricing, and on-time delivery.",
          url: "https://www.rvmconstructions.com/",
          image: "/src/assets/images/rvm_hero_house_1783953334166.jpg",
          priceRange: "$$",
          // areaServed: fill in your service locations, e.g. from your LOCATIONS array
        })}
      </script>
    </Helmet>
  );
}