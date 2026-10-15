import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import type { ReactNode } from 'react'

export const metadata = {
  metadataBase: new URL('https://public-api-doc.taskip.net'),
  title: {
    default: 'Taskip API Documentation',
    template: '%s – Taskip REST API Docs'
  },
  description:
    'Taskip REST API documentation: authentication, endpoints and examples for contacts, projects, invoices, support tickets and more.',
  openGraph: {
    title: 'Taskip API Documentation',
    description:
      'Build powerful integrations with Taskip API. Access 100+ endpoints for projects, invoices, contacts, support tickets, and more. With code examples in JavaScript, Python and PHP.',
    images: ['/screenshort.png'],
    url: 'https://public-api-doc.taskip.net',
    type: 'website',
    siteName: 'Taskip API Documentation'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taskip API Documentation',
    description:
      'Build powerful integrations with Taskip API. Access 100+ endpoints for projects, invoices, contacts, support tickets, and more.',
    images: ['/screenshort.png']
  },
  keywords:
    'Taskip API, CRM API, Project Management API, Invoice API, Agency Software API, REST API, API Documentation',
  authors: [{ name: 'Taskip' }],
  robots: 'index, follow',
  // Each page sets its own self-referencing canonical in app/[[...mdxPath]]/page.tsx. A canonical
  // here would be inherited by every page and mark them all as duplicates of one URL.
  icons: {
    icon: '/taskip-logo-icon.png'
  }
}

const logo = (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <img
      src="/taskip-logo-icon.png"
      alt="TaskIP"
      style={{ width: '24px', height: '24px' }}
    />
    <span>Taskip Documentation</span>
  </div>
)

export default async function RootLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/taskip-logo-icon.png" type="image/png" />
      </Head>
      <body>
        <Layout
          navbar={
            <Navbar
              logo={logo}
              projectLink="https://github.com/Taskip-CRM/public-api"
            />
          }
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/Taskip-CRM/public-api"
          footer={<Footer />}
          search={<Search />}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
