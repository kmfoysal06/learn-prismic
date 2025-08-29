import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

type componentsParams = {
  params: {
    lang: string
  }
}

async function Header({
  params
}: componentsParams) {
  const client = createClient();
  try {
    const header = await client.getByType("header", { lang: params.lang });
    return <SliceZone slices={header.results[0].data.slices} components={components} />;
  }catch(e) {
    console.error(e);
  }

}

async function Footer({
  params
}: componentsParams) {
  const { lang } = await params;
  // const {lang} = await params;
  // console.log('lang', params);
  // await console.log(params);
  console.log('fucking lang lang', lang);
  const client = createClient();
  try {
    const footer = await client.getByType("footer", { lang: lang });
    console.log('fucking footer', footer);
    return <SliceZone slices={footer.results[0].data.slices} components={components} />;
  }catch(e) {
    console.error(e);
  }

}
type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}
export default async function RootLayout({
  children,
  params
}: RootLayoutProps) {
  // console.log('fucking params', params);
  return (
    <html lang="en">
        
      <body>
        <Header params={params} />
        {children}
        <Footer params={params} />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
