'use client';

import { useEffect } from 'react';

interface InstagramEmbedProps {
  url?: string;
  maxWidth?: number;
  hideCaption?: boolean;
}

export default function InstagramEmbed({ 
  url = 'https://www.instagram.com/p/C1234567890/', // Replace with actual post URL
  maxWidth = 540,
  hideCaption = false 
}: InstagramEmbedProps) {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Re-render Instagram embeds when component updates
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [url]);

  return (
    <div className="instagram-embed-container w-full flex justify-center">
      <blockquote 
        className="instagram-media" 
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        data-instgrm-captioned={!hideCaption}
        style={{
          background: '#FFF',
          border: '0',
          borderRadius: '3px',
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '1px',
          maxWidth: `${maxWidth}px`,
          minWidth: '326px',
          padding: '0',
          width: 'calc(100% - 2px)'
        }}
      >
        <div style={{ padding: '16px' }}>
          <a 
            href={url}
            style={{
              background: '#FFFFFF',
              lineHeight: '0',
              padding: '0 0',
              textAlign: 'center',
              textDecoration: 'none',
              width: '100%'
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            View this post on Instagram
          </a>
        </div>
      </blockquote>
    </div>
  );
}