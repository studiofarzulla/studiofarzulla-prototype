import RoomsPageContent from '@/components/rooms/RoomsPageContent';

// Force static generation for this page
export const dynamic = 'force-static';

interface PageProps {  params?: { locale?: string };}
export default function RoomsPage() {
  return <RoomsPageContent />;
}
