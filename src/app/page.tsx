import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBadges from '@/components/TrustBadges';
import PromoBanner from '@/components/PromoBanner';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import VoucherPartners from '@/components/VoucherPartners';
import GoogleReviews from '@/components/GoogleReviews';
import AppointmentForm from '@/components/AppointmentForm';
import Blogs from '@/components/Blogs';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eyesite Opticians | Expert Eye Care in Leeds',
  description: 'Professional optometry services in Leeds. Comprehensive eye exams, designer eyewear, contact lenses, dry eye treatment, CUES service. NHS & private appointments. 4.9★ Google rating. Located in Halton, Leeds.',
  keywords: [
    'opticians Leeds',
    'eye test Leeds',
    'designer glasses Leeds',
    'contact lenses Leeds',
    'Halton opticians',
    'Eyesite Opticians',
    'NHS eye test Leeds',
    'private opticians Leeds',
    'dry eye treatment',
    'CUES service Leeds'
  ],
  openGraph: {
    title: 'Eyesite Opticians | Expert Eye Care in Leeds',
    description: 'Professional optometry services in Leeds. Book your eye exam today. NHS & private appointments available.',
    url: '/',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <Header />
      <Hero />
      <TrustBadges />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <PromoBanner />
      <VoucherPartners />
      <GoogleReviews />
      <AppointmentForm />
      <Blogs />
      <Footer />
    </div>
  );
}
