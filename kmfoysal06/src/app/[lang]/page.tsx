import { type Metadata } from "next";

// import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Home({
  params: {lang},}: {
    params: {
      lang: string
    }
  }) {
  const client = createClient();
  try {
    const home = await client.getByUID("home", "home", {lang});
    // <SliceZone> renders the page's slices.
    return <SliceZone slices={home.data.slices} components={components} />;
  }catch(e) {
    console.error(e);
  }

}

export async function generateMetadata({
  params: {lang},}: {
    params: {
      lang: string
    }
  }): Promise<Metadata> {
  const client = createClient();
  const home = await client.getByUID("home", "home", {lang});
  return {
    title: home.data.meta_title,
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title ?? undefined,
      images: [{ url: home.data.meta_image.url ?? "" }],
    },
  };
}
