import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

// type componentsParams = {
//     params: {
//       lang: string;
//     }
    
// }
type componentsParams = {
  params: {
    lang: string;
  };
};

async function Header({
  params
}: componentsParams) {
  const client = createClient();
  try {
    // const lang = await params.lang;
    const lang = params.lang;
    const header = await client.getByType("header", { lang });
    return <SliceZone slices={header.results[0].data.slices} components={components} />;
  } catch (e) {
    console.error(e);
  }
}

async function Footer({
  params
}: componentsParams) {
  const lang = params.lang;
  const client = createClient();
  try {
    const footer = await client.getByType("footer", { lang });
    return <SliceZone slices={footer.results[0].data.slices} components={components} />;
  } catch (e) {
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
