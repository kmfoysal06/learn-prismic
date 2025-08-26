import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";


async function Header() {
  const client = createClient();
  try {
    const header = await client.getByType("header");
    return <SliceZone slices={header.results[0].data.slices} components={components} />;
  }catch(e) {
    console.error(e);
  }

}

async function Footer() {
  const client = createClient();
  try {
    const footer = await client.getByType("footer");
    return <SliceZone slices={footer.results[0].data.slices} components={components} />;
  }catch(e) {
    console.error(e);
  }

}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        
      <body>
        <Header />
        {children}
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
