// Middleware is disabled for static export
// The middleware functionality is not compatible with Next.js static export
// Locale routing is handled by the static HTML redirect in /index.html

export default function middleware() {
  // No-op middleware for static export
  return;
}

export const config = {
  matcher: [],
};
