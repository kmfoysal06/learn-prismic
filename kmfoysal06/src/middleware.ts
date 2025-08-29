// ./src/middleware.ts

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/prismicio';

export async function middleware(request: NextRequest) {
    const client = createClient();
    const repository = await client.getRepository();
  
    const locales = repository.languages.map((lang) => lang.id);
    const defaultLocale = locales[0];
    
    
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl;
    
    const knownMapping = {
        'en' : 'en-us',
        'fr' : 'fr-ca'
    };
    
    const pathnameIsMissingLocale = locales.every(
        (locale) => {
            const hasLocalMapping = Object.keys(knownMapping).includes(locale);
            console.log("hasLocalMapping", hasLocalMapping)
            if((!pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`)) {
                return true;
            }else {
                return false;
            }
        }
    );

    // console.log('pathname missing', pathname);

    // if(!pathnameIsMissingLocale) {
    //     // if its en or fr then change it to en-us or fr-ca
    //     // const [key, value] = pathnameIsMissingLocale;
    //     // const pathLocale = knownMapping[pathname.slice(1)] || defaultLocale;
    //     // pathname = pathname.replace(`/${key}`, `/${value}`);
    //     console.log('sliced pathnaem', pathname.slice(1));
    // }


  // Redirect to default locale if there is no supported locale prefix
  if (pathnameIsMissingLocale) {
    return NextResponse.rewrite(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }
}

export const config = {
	// Don’t change the URL of Next.js assets starting with _next
  matcher: ['/((?!_next).*)'],
};