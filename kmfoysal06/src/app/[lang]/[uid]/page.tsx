import { Metadata } from "next";
import { notFound } from "next/navigation";

import { asText, filter } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

type Params = { uid: string; lang: string };
type PageProps = { params: Params };

export default async function Page({ params }: PageProps) {
  const { uid, lang } = params;
  const client = createClient();

  const page = await client
    .getByUID("page", uid, { lang: lang })
    .catch(() => notFound())
    .finally(() => {});

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { uid, lang } = params;
  const client = createClient();

  const page = await client
    .getByUID("page", uid, { lang: lang })
    .catch(() => notFound())
    .finally(() => {});

  return {
    title: asText(page.data.title),
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title ?? undefined,
      images: page.data.meta_image?.url
        ? [{ url: page.data.meta_image.url }]
        : [],
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType("page", {
    filters: [filter.not("my.page.uid", "home")],
  });

  return pages.map((page) => ({
    uid: page.uid,
    lang: page.lang, // ✅ return lang as plain string
  }));
}
