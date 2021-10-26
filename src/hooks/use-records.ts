import { RecordModel } from "../typings/models/RecordModel";

function useRecords() {
  const records: RecordModel[] = [
    {
      _id: "61758f97dc4914fbdac503c4",
      description:
        "Next JS Landing Page Template Free styled with Tailwind CSS and React TypeScript. An NextJS layout to create a landing page.",
      coverURL:
        "https://jamstackthemes.dev/capture/ixartz-next-js-landing-page-starter-template.png",
      name: "Next JS Landing Page Template with Tailwind CSS",
      __v: 0,
    },
    {
      _id: "51758f97dc4914fbdac503c4",
      description: "A Nextjs theme to showcase products and apps.",
      coverURL:
        "https://jamstackthemes.dev/capture/stackbit-themes-app-nextjs.png",
      name: "Nextjs App",
      __v: 0,
    },
    {
      _id: "41758f97dc4914fbdac503c4",
      description: "Fjord is a beautiful, minimal blog theme.",
      coverURL:
        "https://jamstackthemes.dev/capture/stackbit-themes-fjord-nextjs.png",
      name: "Nextjs Fjord",
      __v: 0,
    },
    {
      _id: "31758f97dc4914fbdac503c4",
      description:
        "Modern, SEO ready commerce storefront built with GraphCMS, Next.js, Stripe, and Tailwind CSS",
      coverURL:
        "https://jamstackthemes.dev/capture/graphcms-graphcms-commerce-starter.png",
      name: "GraphCMS eCommerce Storefront",
      __v: 0,
    },
  ];

  return records;
}

export type { RecordModel };
export { useRecords };
