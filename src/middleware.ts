// Static export compatible middleware
// Disabling server-side i18n routing for static export
export { };

// For static export, we handle locale routing client-side
export const config = {
  matcher: []
};