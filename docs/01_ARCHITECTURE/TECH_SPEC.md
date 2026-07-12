TECH_SPEC.md

Himalayan Botanicals Nepal
Technical Specification


Version: 1.0


Last Updated: July 2026




Purpose
This document defines the official technical architecture for the Himalayan Botanicals Nepal website.


All implementation decisions must follow this specification unless explicitly approved by the project
owner.


When generating code, Codex must treat this document as the engineering source of truth.




Project Type
Business-to-Business (B2B) Lead Generation Website


Not an e-commerce platform.


The application is designed to:


      • showcase products
      • establish trust
      • generate quote requests
      • provide company information
      • publish SEO content
      • support future integrations




Core Principles
Maintainability first


Scalability first


Performance first




                                                    1
Accessibility first


SEO first


Type Safety


Reusable Components


Server-first Rendering


Progressive Enhancement


Minimal Dependencies




Technology Stack
Framework


        • Next.js 15 (App Router)

Language


        • TypeScript (strict mode enabled)

Runtime


        • Node.js LTS

Package Manager


        • pnpm (preferred)

Styling


        • Tailwind CSS

Component Library


        • shadcn/ui

Icons


        • Lucide React

Animation


        • Framer Motion




                                             2
Forms


        • React Hook Form

Validation


        • Zod

Theme


        • next-themes

Fonts


        • next/font

Image Optimization


        • next/image

SEO


        • Next.js Metadata API

Structured Data


        • JSON-LD

Linting


        • ESLint

Formatting


        • Prettier

Git Hooks


        • Husky

Commit Quality


        • lint-staged

Testing


        • Vitest
        • React Testing Library
        • Playwright

Deployment


        • Vercel




                                  3
Analytics


        • Google Analytics 4
        • Google Search Console

Monitoring


        • Vercel Analytics




Folder Structure
/app


/components


/features


/lib


/hooks


/types


/constants


/config


/content


/data


/styles


/public


/docs


/scripts




App Folder
Contains


Routes




                                  4
Layouts


Metadata


Pages


Loading UI


Error UI


Not Found


Route Groups


No business logic belongs here.




Components
Reusable UI only.


Examples


Button


Navbar


Footer


ProductCard


Hero


Timeline


FAQ


Modal


Badge


Card


Section


CTA


No data fetching.




                                  5
No business logic.




Features
Business-specific functionality.


Example


/features


quote-request


contact


blog


products


certificates


Each feature owns:


components


hooks


services


types


validation




Lib
Shared utilities.


Examples


SEO


Schema


Email


CMS




                                   6
Formatting


Helpers


Validation




Hooks
Custom hooks only.


Examples


useScroll


useTheme


useBreakpoint


useDebounce


Hooks should remain generic.




Types
All shared TypeScript types.


Never duplicate interfaces.




Constants
Static values.


Navigation


Countries


Products


FAQ


Metadata


Export Markets




                               7
Config
Application configuration.


SEO


Theme


Brand


Routes


Analytics




Content
Markdown


MDX


Blog Articles


Static Pages




Data
Static JSON


Products


Countries


Certificates


Packaging


Testimonials




Styling
Global CSS




                             8
Tailwind layers


Variables


Typography




Naming Convention
Components


PascalCase


ProductCard.tsx


Hooks


camelCase


useScroll.ts


Files


kebab-case where appropriate


Constants


UPPER_CASE


Types


PascalCase


Interfaces


PascalCase


Enums


PascalCase




Component Rules
Components should:


Have one responsibility




                               9
Be reusable


Receive props


Avoid side effects


Avoid unnecessary state


Remain presentation-focused




State Management
Prefer Server Components.


Use local state whenever possible.


Global state only if absolutely necessary.


Do not introduce Redux.


Do not introduce MobX.


Do not introduce Zustand unless specifically approved.




Data Fetching
Use Server Components whenever possible.


Client Components only when:


Animations require them


Forms require them


Interactive UI requires them


Never fetch the same data twice.




API Design
Endpoints


/api/contact




                                                  10
/api/request-quote


/api/newsletter


/api/download


Validation


Zod


Rate Limiting


Required


Spam Protection


Required




Forms
Use


React Hook Form


+


Zod


Requirements


Server validation


Client validation


Accessible labels


Loading state


Success state


Error state


No uncontrolled inputs




                         11
SEO Requirements
Every page must include


Title


Description


Canonical URL


Open Graph


Twitter Card


Structured Data


Breadcrumbs


Robots


Sitemap


Keywords




Performance
Images


next/image


Lazy loading


Responsive sizes


WebP


No layout shift


Fonts


Self hosted


Display swap


Preload where appropriate




                            12
JavaScript


Code splitting


Dynamic imports


Tree shaking




Accessibility
WCAG AA


Semantic HTML


Keyboard navigation


Visible focus states


ARIA only where required


Color contrast


Alt text


Screen reader support




Animation
Framer Motion


Animations should:


Be subtle


Be fast


Not distract


Respect prefers-reduced-motion


Maximum duration


600ms


Avoid excessive animation.




                                 13
Error Handling
Every async action


Must


Handle loading


Handle failure


Handle success


Never fail silently.




Logging
Development


Console allowed


Production


No unnecessary console logs.




Environment Variables
NEXT_PUBLIC_SITE_URL


NEXT_PUBLIC_GA_ID


EMAIL_PROVIDER_API_KEY


EMAIL_FROM


RECAPTCHA_SECRET


VERCEL_ENV


Never expose secrets.




                               14
Security
HTTPS only


Input sanitization


Rate limiting


Spam protection


Secure headers


No sensitive information on client


Validate all server actions




Internationalization
Architecture should support


Future multilingual implementation.


Initial language


English




Blog
Markdown


SEO optimized


Author support


Categories


Tags


Reading time


Featured image


Related articles




                                      15
RSS ready




Images
Use optimized images.


Avoid stock photos where possible.


Prefer authentic Himalayan imagery.


Use descriptive filenames.




Git Workflow
main


production


develop


integration


feature/*


new features


fix/*


bug fixes


release/*


release preparation




Pull Request Standards
Every PR must:


Pass lint


Pass type check


Pass tests




                                      16
Be reviewed


Include meaningful description


No unrelated changes




Testing Standards
Unit Tests


Utilities


Hooks


Validation


Component Tests


Critical UI


End-to-End


Quote Request


Navigation


Forms


Blog


Accessibility




Code Quality Rules
Strict TypeScript


No any type


No duplicated logic


Prefer composition


Avoid deeply nested components


Extract reusable utilities




                                 17
Keep files focused


Self-documenting code


Comments only when necessary




Dependencies
Only install packages that provide significant long-term value.


Before adding a dependency, prefer native Next.js or React solutions.


Every new dependency should be documented.




Future Integrations
CRM


HubSpot


Zoho


Salesforce


ERP


Inventory


CMS


Headless CMS


Email


Mailchimp


Brevo


Resend


Analytics


GA4


Search Console




                                                   18
Microsoft Clarity


Live Chat


Tawk.to


Crisp


Intercom




Definition of Production Ready
The project is production ready only when:


✓ TypeScript passes


✓ ESLint passes


✓ Build succeeds


✓ No hydration errors


✓ Lighthouse Performance ≥95


✓ Lighthouse Accessibility ≥95


✓ Lighthouse SEO ≥95


✓ Lighthouse Best Practices ≥95


✓ Mobile responsive


✓ Dark mode supported


✓ Metadata complete


✓ Structured data validated


✓ Images optimized


✓ Forms fully functional


✓ Error boundaries implemented


✓ Documentation updated




                                             19
Instructions for Codex
Before writing code:


    1. Read PRD.md
    2. Read PROJECT_CONTEXT.md
    3. Read this TECH_SPEC.md
    4. Reuse existing components before creating new ones.
    5. Do not introduce architectural inconsistencies.
    6. Favor Server Components over Client Components whenever possible.
    7. Keep the codebase modular, scalable, typed, and production-ready.
    8. If multiple implementation options exist, choose the one that minimizes long-term maintenance
       while preserving performance and accessibility.




                                                20
