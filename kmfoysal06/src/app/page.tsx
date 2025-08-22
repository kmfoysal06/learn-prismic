import { type Metadata } from "next";

// import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Home() {
  const client = createClient();
  try {
    const home = await client.getByUID("home", "home");
    // <SliceZone> renders the page's slices.
    return <SliceZone slices={home.data.slices} components={components} />;
  }catch(e) {
    console.error(e);
  }

}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getByUID("home", "home");
console.log(home.data)
  return {
    title: home.data.meta_title,
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title ?? undefined,
      images: [{ url: home.data.meta_image.url ?? "" }],
    },
  };
}
