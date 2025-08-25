import GalleryPageContent from '@/components/gallery/GalleryPageContent';

// Force static generation for this page
export const dynamic = 'force-static';

interface PageProps {  params?: { locale?: string };}
export default function GalleryPage() {
  return <GalleryPageContent />;
}
