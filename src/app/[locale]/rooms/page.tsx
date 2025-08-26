import RoomsPageContent from '@/components/rooms/RoomsPageContent';

// Enable ISR with 12 hour revalidation for rooms page
export const revalidate = 43200; // 12 hours

interface PageProps {  params?: { locale?: string };}
export default function RoomsPage() {
  return <RoomsPageContent />;
}
