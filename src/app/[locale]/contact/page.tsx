import ContactPageContent from '@/components/contact/ContactPageContent';

// Enable ISR with 1 hour revalidation for contact (form updates)
export const revalidate = 3600; // 1 hour

interface PageProps {  params?: { locale?: string };}
export default function ContactPage() {
  return <ContactPageContent />;
}
