import './globals.css';

import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import { Footer } from '@/_shared/components/Footer';
import { Navbar } from '@/_shared/components/Navbar';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Denner Nascimento | Desenvolvedor Frontend',
  description:
    'Desenvolvedor Frontend com mais de 5 anos de experiência criando interfaces modernas, responsivas e acessíveis com React, Next.js, Vue e TypeScript. Atuo com foco em excelência técnica, colaboração e entregas de alto impacto.',
  keywords: [
    'Desenvolvedor Frontend',
    'React',
    'Next.js',
    'TypeScript',
    'Vue.js',
    'Portfolio',
    'Denner Nascimento',
  ],
  authors: [{ name: 'Denner Nascimento' }],
  creator: 'Denner Nascimento',
  openGraph: {
    title: 'Denner Nascimento | Desenvolvedor Frontend',
    description:
      'Desenvolvedor Frontend com mais de 5 anos de experiência criando interfaces modernas, responsivas e acessíveis.',
    url: 'https://devdenner.com',
    siteName: 'Denner Nascimento Portfolio',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Denner Nascimento | Desenvolvedor Frontend',
    description:
      'Desenvolvedor Frontend com mais de 5 anos de experiência criando interfaces modernas.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} font-sans antialiased`}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
