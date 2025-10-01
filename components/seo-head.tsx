"use client"

import Head from "next/head"

export function SEOHead() {
  return (
    <Head>
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Preload critical resources */}
      <link rel="preload" href="/kampala-fried-fish-logo-removed-bg.png" as="image" />
      <link rel="preload" href="/fish-plate-square.webp" as="image" />
      
      {/* Critical CSS inline */}
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Critical above-the-fold styles */
          .hero-section {
            min-height: 100vh;
            background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
          }
          .hero-title {
            font-size: clamp(2rem, 5vw, 4rem);
            font-weight: 900;
            line-height: 1.1;
          }
          .hero-subtitle {
            font-size: clamp(1rem, 2.5vw, 1.5rem);
            line-height: 1.4;
          }
        `
      }} />
      
      {/* Resource hints */}
      <link rel="prefetch" href="/order" />
      <link rel="prefetch" href="/contact" />
      <link rel="prefetch" href="/about" />
      
      {/* Performance optimizations */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Additional SEO meta tags */}
      <meta name="geo.region" content="UG" />
      <meta name="geo.placename" content="Kampala" />
      <meta name="geo.position" content="0.3163;32.5822" />
      <meta name="ICBM" content="0.3163, 32.5822" />
      
      {/* Local business meta tags */}
      <meta name="business:contact_data:street_address" content="Kabusu Market Area" />
      <meta name="business:contact_data:locality" content="Rubaga Division" />
      <meta name="business:contact_data:region" content="Central Region" />
      <meta name="business:contact_data:postal_code" content="" />
      <meta name="business:contact_data:country_name" content="Uganda" />
      
      {/* Food/restaurant specific meta tags */}
      <meta name="food:cuisine" content="Ugandan, African, Seafood" />
      <meta name="food:price_range" content="$$" />
      <meta name="food:accepts_reservations" content="true" />
      <meta name="food:serves_cuisine" content="Ugandan, African, Seafood" />
      
      {/* Social media optimization */}
      <meta property="og:locale" content="en_UG" />
      <meta property="og:site_name" content="Kampala Fried Fish" />
      <meta property="og:type" content="restaurant" />
      <meta property="og:price:amount" content="18000" />
      <meta property="og:price:currency" content="UGX" />
      
      {/* Twitter Card optimization */}
      <meta name="twitter:site" content="@kampalafriedfish" />
      <meta name="twitter:creator" content="@kampalafriedfish" />
      <meta name="twitter:domain" content="kampalafriedfish.ug" />
      
      {/* Additional performance hints */}
      <link rel="modulepreload" href="/_next/static/chunks/main.js" />
      <link rel="modulepreload" href="/_next/static/chunks/webpack.js" />
    </Head>
  )
}
