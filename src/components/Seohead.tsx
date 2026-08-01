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
      content="
      RVM Constructions,
      home construction,
      house construction,
      build a home,
      custom home builder,
      new home construction,
      residential construction,
      home builders,
      house builders,
      home builders near me,
      villa construction,
      villa builders,
      turnkey construction,
      turnkey construction services,
      construction company,
      construction company in Bangalore,
      residential construction company,
      commercial construction company,
      building contractors,
      structural construction services,
      apartment construction contractors,
      premium home builders,
      architectural design,
      home renovation,
      building renovation,
      remodeling services,
      house construction cost,
      cost to build a house,
      modern house construction,
      dream home construction,
      custom villa construction,
      luxury home builders,
      independent house construction,
      residential builders,
      construction materials,
      building materials,
      AAC blocks,
      red bricks,
      fly ash bricks,
      concrete blocks,
      hollow blocks,
      cement bricks,
      brick suppliers,
      premium bricks,
      foundation construction,
      home architecture,
      civil contractors,
      building construction,
      project management,
      quality construction,
      transparent pricing,
      on-time project delivery
      "
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