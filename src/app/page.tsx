import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBadges from '@/components/TrustBadges';
import PromoBanner from '@/components/PromoBanner';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import DesignerEyewear from '@/components/DesignerEyewear';
import Testimonials from '@/components/Testimonials';
import AppointmentForm from '@/components/AppointmentForm';
import Blogs from '@/components/Blogs';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <Header />
      <Hero />
      <TrustBadges />
      <AboutUs />
      <Services />
      <PromoBanner />
      <DesignerEyewear />
      <Testimonials />
      <AppointmentForm />
      <Blogs />
      <Footer />
    </div>
  );
}
