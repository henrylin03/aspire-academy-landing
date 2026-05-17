export type SeoData = {
  title: string;
  description: string;
  keywords: string[];
  canonicalLink: string;
  ogImagePath: string;
};

export const SEO_MAP: Record<string, SeoData> = {
  "/": {
    title:
      "Online Debating Classes | NSW Students Years 4+ | Aspire Academy by Huaxia",
    description:
      "Online debating and public speaking classes for NSW students in Year 4 and above. Specialist preparation for ISDA, GPS, and PDC (Premier's Debating Challenge) competitions. Learn to think critically, rebut tactically and become a stronger and more confident speaker.",
    keywords: [
      "sydney debating",
      "online debating",
      "sydney debating college",
      "sydney debating training",
      "sydney public speaking",
      "sydney debating classes",
      "sydney online debating",
      "isda debating coaching",
    ],
    canonicalLink: "https://aspireacademy.site",
    ogImagePath: "/branding/logo-with-text.png",
  },
  "/enrol": {
    title:
      "Enrol in Online Debating Classes | NSW Students Years 4+ | Aspire Academy by Huaxia",
    description:
      "Enrol in online debating and public speaking classes, suitable for students in NSW in Years 4 and above, looking to compete in competitions like PDC, ISDA, FED, Eastside and GPS. Includes small-sized classes filled with speaking games and core debating concepts, as well as private debating coaching for more tailored support. Suitable for students ranging from zero experience to competitors.",
    keywords: [
      "enrol sydney debating",
      "enrol online debating classes",
      "enrol online debating class",
    ],
    canonicalLink: "https://aspireacademy.site/enrol",
    ogImagePath: "/branding/logo-with-text.png",
  },
};
