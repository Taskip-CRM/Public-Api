# TaskIP API Documentation

Comprehensive API documentation for the TaskIP CRM system built with [Nextra](https://nextra.site).

## Features

- **Complete API Coverage**: Documentation for all TaskIP API endpoints
- **Multiple Code Examples**: JavaScript, Python, PHP examples for each endpoint
- **Interactive Documentation**: Built with Nextra for easy navigation
- **Environment Configuration**: Configurable API URLs and settings
- **Professional Design**: Clean, developer-friendly interface

## Quick Start

### Prerequisites

- Node.js 16+ 
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Taskip-CRM/public-api.git
cd taskip-api-docs
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Copy environment variables:
```bash
cp .env.example .env.local
```

4. Update environment variables in `.env.local`:
```env
NEXT_PUBLIC_API_BASE_URL=https://public-api.taskip.net/api/public-v1
NEXT_PUBLIC_SUPPORT_EMAIL=contact@taskip.net
```

### Local Development

Start the development server:
```bash
npm run dev
# or
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the documentation.

## Project Structure

```
taskip-api-docs/
├── pages/                          # Documentation pages
│   ├── api-reference.mdx          # Complete API reference
│   ├── authentication.mdx         # Authentication guide
│   ├── contact-management.mdx     # Contact API docs
│   ├── company-management.mdx     # Company API docs
│   ├── team-member-management.mdx # Team member API docs
│   ├── invoice-management.mdx     # Invoice API docs
│   ├── quotation-management.mdx   # Quotation API docs
│   ├── support-ticket-management.mdx # Support ticket API docs
│   ├── document-management.mdx    # Document API docs
│   ├── project-management.mdx     # Project API docs
│   └── examples.mdx               # Code examples
├── lib/
│   └── constants.ts               # Environment constants
├── public/
│   └── taskip-logo-icon.png       # Favicon
├── theme.config.tsx               # Nextra theme configuration
├── .env.example                   # Environment template
└── .env.local                     # Local environment variables
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_BASE_URL` | TaskIP API base URL | `https://public-api.taskip.net/api/public-v1` |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | Support contact email | `contact@taskip.net` |

## API Documentation Sections

- **Authentication**: X-Secret-Key authentication setup
- **Contact Management**: CRUD operations for contacts (7 endpoints)
- **Company Management**: Company management APIs (6 endpoints)
- **Team Member Management**: Team member APIs (6 endpoints)
- **Invoice Management**: Complete invoicing system (11 endpoints)
- **Quotation Management**: Quote/estimate management (9 endpoints)
- **Support Ticket Management**: Customer support system (12 endpoints)
- **Document Management**: File and document handling (17 endpoints)
- **Project Management**: Project and task management (35+ endpoints)
- **API Reference**: Complete endpoint catalog
- **Examples**: Practical integration examples

## Development

### Adding New Documentation

1. Create a new `.mdx` file in the `pages/` directory
2. Update `pages/_meta.json` to include the new page in navigation
3. Follow the existing documentation structure and style

### Code Examples

Each API endpoint includes examples in:
- cURL commands
- JavaScript/Node.js
- Python
- PHP

### Updating API URLs

API URLs are managed through environment variables. Update `.env.local` to change the base URL for all documentation.

## Deployment

The documentation can be deployed to any platform that supports Next.js:

### Vercel
```bash
vercel --prod
```

### Netlify
```bash
npm run build
npm run export
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the documentation locally
5. Submit a pull request

## Support

- **Documentation Issues**: [GitHub Issues](https://github.com/Taskip-CRM/public-api/issues)
- **API Support**: contact@taskip.net
- **General Questions**: [GitHub Discussions](https://github.com/Taskip-CRM/public-api/discussions)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [Nextra](https://nextra.site)
- Powered by [Next.js](https://nextjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com)