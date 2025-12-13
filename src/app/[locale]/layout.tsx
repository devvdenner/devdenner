import '../globals.css';

import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

import { Locale } from '@/_shared/contracts/locale.contract';
import { Footer } from '@/_shared/templates/Footer';
import { Navbar } from '@/_shared/templates/Navbar';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

const metadataByLocale: Record<
  Locale,
  {
    title: string;
    description: string;
    keywords: string[];
    ogDescription: string;
    twitterDescription: string;
    ogLocale: string;
  }
> = {
  en: {
    title: 'Denner Nascimento | Frontend Developer',
    description:
      'Frontend Developer with over 5 years of experience creating modern, responsive, and accessible interfaces with React, Next.js, Vue, and TypeScript.',
    keywords: [
      'Frontend Developer',
      'React',
      'Next.js',
      'TypeScript',
      'Vue.js',
      'Portfolio',
      'Denner Nascimento',
    ],
    ogDescription:
      'Frontend Developer with over 5 years of experience creating modern, responsive, and accessible interfaces.',
    twitterDescription:
      'Frontend Developer with over 5 years of experience creating modern interfaces.',
    ogLocale: 'en_US',
  },
  pt: {
    title: 'Denner Nascimento | Desenvolvedor Frontend',
    description:
      'Desenvolvedor Frontend com mais de 5 anos de experiência criando interfaces modernas, responsivas e acessíveis com React, Next.js, Vue e TypeScript.',
    keywords: [
      'Desenvolvedor Frontend',
      'React',
      'Next.js',
      'TypeScript',
      'Vue.js',
      'Portfolio',
      'Denner Nascimento',
    ],
    ogDescription:
      'Desenvolvedor Frontend com mais de 5 anos de experiência criando interfaces modernas, responsivas e acessíveis.',
    twitterDescription:
      'Desenvolvedor Frontend com mais de 5 anos de experiência criando interfaces modernas.',
    ogLocale: 'pt_BR',
  },
  es: {
    title: 'Denner Nascimento | Desarrollador Frontend',
    description:
      'Desarrollador Frontend con más de 5 años de experiencia creando interfaces modernas, responsivas y accesibles con React, Next.js, Vue y TypeScript.',
    keywords: [
      'Desarrollador Frontend',
      'React',
      'Next.js',
      'TypeScript',
      'Vue.js',
      'Portfolio',
      'Denner Nascimento',
    ],
    ogDescription:
      'Desarrollador Frontend con más de 5 años de experiencia creando interfaces modernas, responsivas y accesibles.',
    twitterDescription:
      'Desarrollador Frontend con más de 5 años de experiencia creando interfaces modernas.',
    ogLocale: 'es_ES',
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  const meta = metadataByLocale[locale];

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: 'Denner Nascimento' }],
    creator: 'Denner Nascimento',
    openGraph: {
      title: meta.title,
      description: meta.ogDescription,
      url: 'https://devdenner.com',
      siteName: 'Denner Nascimento Portfolio',
      locale: meta.ogLocale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.twitterDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${roboto.variable} font-sans antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />

          {children}

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
