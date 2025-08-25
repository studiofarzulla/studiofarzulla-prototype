import ContactPageContent from '@/components/contact/ContactPageContent';

// Force static generation for this page
export const dynamic = 'force-static';

interface PageProps {  params?: { locale?: string };}
export default function ContactPage() {
  return <ContactPageContent />;
}
