import AnnouncementBar from "../components/layout/AnnouncementBar";
import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import TrustStrip from "../components/home/TrustStrip";
import ServicesOverview from "../components/home/ServicesOverview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import HowItWorks from "../components/home/HowItWorks";
import TeamPreview from "../components/home/TeamPreview";
import ContactCTA from "../components/home/ContactCTA";
import Footer from "../components/layout/Footer";

export const metadata = {
  title: "ProFlow Plumbing | Fast, Reliable Residential & Emergency Plumbing",
  description:
    "Plumbing problems don't wait. Neither do we. Transparent, professional residential plumbing diagnostics, repairs, and installations.",
};

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main id="main-content">
        <Hero />
        <TrustStrip />
        <ServicesOverview />
        <WhyChooseUs />
        <HowItWorks />
        <TeamPreview />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
