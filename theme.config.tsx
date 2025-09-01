import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
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
    text: 'TaskIP API Documentation',
  },
  head: (
    <>
      <link rel="icon" href="/taskip-logo-icon.png" type="image/png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>
  ),
}

export default config
