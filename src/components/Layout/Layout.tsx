import { Navbar } from './Navbar';
import { ReactNode } from 'react';
import { Footer } from './Footer';
import Head from 'next/head';

interface Props {
  children?: ReactNode;
  title?: string;
}

const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title ? 'Wasabi | ' + title : 'Wasabi'}</title>
        <meta name="description" content="Wasabi Online Store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen h-full justify-between">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
