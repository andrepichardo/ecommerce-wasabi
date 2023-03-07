import { ReactNode } from 'react';
import Head from 'next/head';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Gotu } from '@next/font/google';
const GotuFont = Gotu({ weight: '400', subsets: ['latin'] });

interface Props {
  children?: ReactNode;
  title?: string;
}

const Layout = ({ children, title }: Props) => {
  return (
    <div className={GotuFont.className}>
      <Head>
        <title>{title ? 'Wasabi | ' + title : 'Wasabi'}</title>
        <meta name="description" content="Wasabi Online Store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col w-full h-full justify-between">
        <Navbar />
        <main className="containerLayout bg-white mt-20">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
