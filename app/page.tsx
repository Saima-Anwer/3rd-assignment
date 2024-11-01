import Image from "next/image";

import type { Metadata } from 'next';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Portfolio from "./components/Portfolio";
import ContactUs from './components/ContactUs';
import background from "../public/images/coding-bg-1.webp"

export const metadata: Metadata = {
  title: 'My Landing Page',
  description: 'A minimal landing page',
};

const Home = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/coding-bg-1.webp')" }}
    >
      
      <Header />
      <main>
        <AboutUs />
        <Portfolio />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default Home;


 


 