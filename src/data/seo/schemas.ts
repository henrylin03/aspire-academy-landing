import type { WithContext, Thing } from "schema-dts";

const ORGANISATION_SCHEMA: WithContext<Thing> = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Aspire Academy by Huaxia",
  url: "https://aspireacademy.site",
  logo: "https://aspireacademy.site/branding/logo-symbol-only.png",
  description:
    "Aspire Academy is a Sydney-based online debating academy offering specialised debating and public speaking classes for primary and secondary students. We specialise in competitive debating training for NSW selective and private school students including for competitions such as the ISDA, GPS and Premier's Debating Challenge.",
  email: "hello@aspireacademy.site",
  telephone: "+61 481 482 912",
  areaServed: "Australia",
  founder: {
    "@type": "Person",
    name: "Henry Lin",
    jobTitle: "Founder and Head Coach",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Huaxia Chinese School",
    url: "https://huaxia.au",
  },
  knowsAbout: [
    "Debating coaching",
    "Public speaking",
    "Critical thinking",
    "Competitive debating",
    "English argumentation",
    "Rebuttal strategy",
    "ISDA debating",
    "GPS debating",
    "Premier's Debating Challenge",
    "辩论",
    "演讲",
  ],
};

const WEBSITE_SCHEMA: WithContext<Thing> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Aspire Academy",
  url: "https://aspireacademy.site",
  description:
    "Online debating classes for primary and secondary students across Australia, specialising in NSW debating competitions such as the ISDA, GPS and PDC.",
  inLanguage: "en-AU",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://aspireacademy.site/?q={search_term_string}",
  },
};

const SERVICE_SCHEMA: WithContext<Thing> = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Online Debating and Public Speaking Coaching",
  provider: {
    "@type": "EducationalOrganization",
    name: "Aspire Academy by Huaxia",
    url: "https://aspireacademy.site",
  },
  areaServed: "Australia",
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
    audienceType: "Primary and Secondary School Students",
  },
  description:
    "Structured online debating and public speaking coaching delivered via Google Meet. Focus on competitive debating, argument structure, rebuttal skills and confidence building.",
  offers: [
    {
      "@type": "Offer",
      name: "1:1 Debating Coaching",
      category: "Education",
    },
    {
      "@type": "Offer",
      name: "Group Debating Classes",
      category: "Education",
    },
  ],
};

export { WEBSITE_SCHEMA, SERVICE_SCHEMA, ORGANISATION_SCHEMA };
