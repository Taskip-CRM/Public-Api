import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import dynamic from 'next/dynamic'
import Callout from './components/Callout'

const ApiTester = dynamic(() => import('./components/ApiTester'), { ssr: false }) as any
const BackToTop = dynamic(() => import('./components/BackToTop'), { ssr: false }) as any

const config: DocsThemeConfig = {
  components: {
    Callout,
    ApiTester,
    BackToTop,
  } as any,
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <img 
        src="/taskip-logo-icon.png" 
        alt="TaskIP" 
        style={{ width: '24px', height: '24px' }} 
      />
      <span>Taskip Documentation</span>
    </div>
  ),
  project: {
    link: 'https://github.com/Taskip-CRM/public-api',
  },
  docsRepositoryBase: 'https://github.com/Taskip-CRM/public-api',
  footer: {
    text: 'Taskip API Documentation',
  },
  head: (
    <>
      <link rel="icon" href="/taskip-logo-icon.png" type="image/png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Comprehensive API documentation for Taskip - All-in-one client portal software for agencies and freelancers. Integrate projects, billing, CRM, and support features into your applications." />
      <meta property="og:title" content="Taskip API Documentation" />
      <meta property="og:description" content="Build powerful integrations with Taskip API. Access 100+ endpoints for projects, invoices, contacts, support tickets, and more. Complete with code examples in JavaScript, Python, and PHP." />
      <meta property="og:image" content="/screenshort.png" />
      <meta property="og:url" content="https://public-api.taskip.net" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Taskip API Documentation" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Taskip API Documentation" />
      <meta name="twitter:description" content="Build powerful integrations with Taskip API. Access 100+ endpoints for projects, invoices, contacts, support tickets, and more." />
      <meta name="twitter:image" content="/screenshort.png" />
      <meta name="keywords" content="Taskip API, CRM API, Project Management API, Invoice API, Agency Software API, REST API, API Documentation" />
      <meta name="author" content="Taskip" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://public-api.taskip.net" />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Taskip API Documentation'
    }
  },
}

export default config
