import GalleryPageContent from '@/components/gallery/GalleryPageContent';

// Enable ISR with 6 hour revalidation for gallery (frequent updates)
export const revalidate = 21600; // 6 hours

interface PageProps {  params?: { locale?: string };}
export default function GalleryPage() {
  return <GalleryPageContent />;
}
