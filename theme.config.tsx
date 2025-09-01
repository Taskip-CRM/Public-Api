import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>TaskIP API Documentation</span>,
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
