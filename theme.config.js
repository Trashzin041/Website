export default {
  github: 'https://github.com/GizmolabAI',
  docsRepositoryBase: 'https://github.com/GizmolabAI/djs-docs',
  titleSuffix: ' – Gizmolab',
  logo: (
    <>
      
      <span className="mr-2 font-extrabold hidden md:inline">Gizmolab</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Gizmolab Docs
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Nextra: the Next.js site builder" />
      <meta name="og:description" content="Nextra: the Next.js site builder" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="gizmolab-logo.png" />
      <meta name="twitter:site:domain" content="nextra.vercel.app" />
      <meta name="twitter:url" content="https://nextra.vercel.app" />
      <meta name="og:title" content="Nextra: Next.js static site generator" />
      <meta name="og:image" content="gizmolab-logo.png" />
      <meta name="apple-mobile-web-app-title" content="Nextra" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="gizmolab-logo.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="gizmolab-logo.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="gizmolab-logo.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="gizmolab-logo.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="gizmolab-logo.png"
      />
      <meta name="msapplication-TileImage" content="gizmolab-logo.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © Gizmolab.</>,
  unstable_faviconGlyph: '👋',
}
