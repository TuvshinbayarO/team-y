/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import AppLayout from '../../layouts/app-layout';
//= Components
import Header from '../../components/Mobile-App/Header';
import Clients from '../../components/Mobile-App/Clients';
import Block from '../../components/Mobile-App/Block';
import Services from '../../components/Mobile-App/Services';
import Block2 from '../../components/Mobile-App/Block2';
import Testimonials from '../../components/Mobile-App/Testimonials';
import Pricing from '../../components/Mobile-App/Pricing';
import Footer from '../../components/Footers/MobileAppFooter';
import SecClients from '../../components/Mobile-App/Clients/clients';

const HomeMobileApp = () => {
  useEffect(() => {
    document.body.classList.add('mobile-app', 'gr-orange-bg');

    const removeClasses = [
      'index-bus1', 'index-corporate',
      'index-restaurant', 'index-arch',
      'index-freelancer', 'cr-agency',
      'land-demo2', 'index-main', 'nft-market'
    ];

    document.body.classList.remove(...removeClasses);
  }, []);

  const nav_links = [
    {
      name: "Home",
      href: "#0"
    },
    {
      name: "About",
      href: "#0"
    },
  ]

  return (
    <div style={{ overflowX: 'hidden'}}>
      <Head>
        <title>MobiFinance</title>
      </Head>

      <AppLayout type="mobile-app" links={nav_links}>
        <Header />
        <Clients />
        <SecClients />
        <Services />
        <Block />
        
        <Block2 />
        <Pricing />
        <Testimonials />
        <Footer />
      </AppLayout>
    </div>
  )
}

export default HomeMobileApp;