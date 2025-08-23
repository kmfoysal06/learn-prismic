import { type Metadata } from "next";

// import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function About() {
  const client = createClient();
  try {
    const about = await client.getByUID("page", "about");
    // <SliceZone> renders the page's slices.
    return <SliceZone slices={about.data.slices} components={components} />;
  }catch(e) {
    console.error(e);
  }

}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const about = await client.getByUID("page", "about");
  return {
    title: about.data.meta_title,
    description: about.data.meta_description,
    openGraph: {
      title: about.data.meta_title ?? undefined,
      images: [{ url: about.data.meta_image.url ?? "" }],
    },
  };
}
