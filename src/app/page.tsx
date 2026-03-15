import HomeRedesign from "@/components/HomeRedesign";
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

      <HomeRedesign />
    </>
  );
}
