import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import PainPoints from "@/components/PainPoints";
import Transformation from "@/components/Transformation";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import SocialProof from "@/components/SocialProof";
import About from "@/components/About";
import BlogSection from "@/components/BlogSection";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PromoBanner from "@/components/marketing/PromoBanner";
import CouponPopup from "@/components/marketing/CouponPopup";
import GroupSignupPopup from "@/components/marketing/GroupSignupPopup";
import SocialProofToast from "@/components/marketing/SocialProofToast";
import {
  generateLocalBusinessSchema,
  generateFAQSchema,
  generateOrganizationSchema,
  generateBreadcrumbSchema,
} from "@/lib/schemas";

export default function Home() {
  const localBusinessSchema = generateLocalBusinessSchema();
  const faqSchema = generateFAQSchema();
  const organizationSchema = generateOrganizationSchema();
  const breadcrumbSchema = generateBreadcrumbSchema();

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <PromoBanner />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <PainPoints />
        <Transformation />
        <Benefits />
        <Services />
        <HowItWorks />
        <Pricing />
        <SocialProof />
        <About />
        <BlogSection />
        <QuoteForm />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
      <CouponPopup />
      <GroupSignupPopup />
      <SocialProofToast />
    </>
  );
}
