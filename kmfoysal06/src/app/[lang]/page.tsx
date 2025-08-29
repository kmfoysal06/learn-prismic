import { type Metadata } from "next";

// import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

// const ParamsType = type {
//   lang: string
// }
type ParamsType = {
  params: {
    lang: string
  }
}

export default async function Home({
  params
}: ParamsType ) {
  const client = createClient();
  const { lang } = await params;
  // const { lang } = await params;
  try {
    const home = await client.getByUID("home", "home", {lang});
    // <SliceZone> renders the page's slices.
    return <SliceZone slices={home.data.slices} components={components} />;
  }catch(e) {
    console.error(e);
  }

}

export async function generateMetadata({ params }: ParamsType ): Promise<Metadata> {
  const client = createClient();
  const { lang } = await params;
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
