ROUTING.md
Project: Himalayan Botanicals Nepal


Version: 1.0


Status: Production Standard




Purpose
This document defines the complete routing architecture for the Himalayan Botanicals Nepal platform.


It specifies:


      • URL structure
      • Route hierarchy
      • Layout ownership
      • Metadata ownership
      • Navigation ownership
      • SEO responsibilities
      • Access control
      • Future scalability

Every new route must follow this document.




Routing Philosophy
Routes represent business capabilities.


A URL should remain stable for years.


Avoid changing URLs after production unless absolutely necessary.


Every route should have a clear purpose.




Route Categories
Public


Marketing


Products




                                                  1
Blog


Legal


API


Future Protected


Future Admin




Public Routes
/


Homepage


/about


Company


/products


Product Listing


/products/[slug]


Product Detail


/quality


Quality Assurance


/packaging


Packaging


/export-process


Export Process


/blog


Articles


/blog/[slug]


Single Article




                    2
/contact


Contact


/request-quote


Quote Form


/faq


Frequently Asked Questions




Legal Routes
/privacy-policy


/terms


/cookies


/disclaimer


These routes use LegalLayout.




Utility Routes
/404


/500


/sitemap.xml


/robots.txt


/manifest.webmanifest


/favicon.ico




Future Routes
/search


/certificates




                                3
/downloads


/events


/careers


/news




Buyer Portal (Future)
/portal


/dashboard


/orders


/documents


/messages


/profile


/quotes


These routes require authentication.




Supplier Portal (Future)
/supplier


/products


/documents


/payments


/shipments


Future use only.




Admin Routes (Future)
/admin




                                       4
/dashboard


/products


/blog


/media


/navigation


/quotes


/settings


/users


Protected.


Role-based access.




Route Groups (Next.js)
(app)


(marketing)


(blog)


(legal)


(admin)


(portal)


Use route groups to separate layouts without affecting URLs.




Layout Ownership
Marketing Pages


MarketingLayout


Blog


BlogLayout




                                                  5
Legal


LegalLayout


Portal


PortalLayout


Admin


AdminLayout


Never mix layouts.




Metadata Ownership
Every route owns:


Title


Description


Canonical


Open Graph


Twitter Card


Schema


Robots


Metadata must never be inherited accidentally if it causes incorrect SEO.




Breadcrumb Rules
Every page except Home should include breadcrumbs.


Example


Home


↓


Products




                                                    6
↓


Himalayan Shilajit


Schema required.




URL Rules
Use lowercase.


Use hyphens.


Avoid underscores.


Avoid IDs.


Prefer slugs.


Good


/products/himalayan-shilajit


Bad


/products?id=12




Slug Rules
Unique


Human readable


Stable


SEO friendly


Never regenerate automatically after publication.




Dynamic Routes
Products


/products/[slug]




                                                    7
Blog


/blog/[slug]


Future


/categories/[slug]


Avoid unnecessary nesting.




Redirect Rules
Use permanent redirects only when URLs change.


Never chain redirects.


Maintain SEO equity.




Navigation Mapping
Home


↓


Products


↓


Quality


↓


Packaging


↓


Export Process


↓


Blog


↓


Contact



                                                 8
↓


Request Quote


Navigation should mirror routing.




Page Ownership
Each page owns:


Content


Metadata


Schema


Analytics


SEO


Internal links


Do not centralize page-specific data.




Loading UI
Every route requiring asynchronous data should include:


loading.tsx


Skeletons preferred.




Error UI
Every route should support:


error.tsx


User-friendly messaging.


Retry action.




                                                 9
Not Found
not-found.tsx


Helpful navigation.


Suggested pages.


Quote CTA.




Route Guards
Phase One


Public only.


Future


Buyer authentication.


Admin authentication.


Role-based permissions.




Middleware
Future responsibilities


Security headers


Authentication


Localization


Rate limiting


Bot protection


Never place business logic in middleware.




                                            10
Sitemap Strategy
Include


Marketing pages


Products


Blog


Legal pages


Exclude


Admin


Portal


Internal routes




Robots Rules
Allow


Public pages


Block


Admin


Portal


Private APIs


Staging




Canonical Rules
Every route requires a canonical URL.


Avoid duplicate content.




                                        11
Internal Linking
Every page should link to:


Related products


Relevant blog posts


Contact


Request Quote


Quality


Avoid orphan pages.




Route Performance
Static generation whenever possible.


ISR where appropriate.


Dynamic rendering only when necessary.




Route Analytics
Track


Page views


CTA clicks


Scroll depth


Downloads


Quote submissions


Navigation flow


Use route-level analytics.




                                         12
Accessibility
Logical heading structure.


Keyboard navigation.


Semantic landmarks.


Skip links.


Focus management on route changes.




Internationalization
Future-ready.


Architecture should support:


/en


/de


/fr


Without changing existing route logic.




Anti-Patterns
Never


Use query parameters for primary content


Expose database IDs


Create deep nesting


Duplicate URLs


Create inconsistent slugs


Break breadcrumb hierarchy


Change URLs without redirects




                                           13
Definition of Done
A route is complete when:


✓ Uses the correct layout


✓ Has complete metadata


✓ Includes structured data


✓ Is accessible


✓ Supports responsive layouts


✓ Has internal links


✓ Has breadcrumbs (except Home)


✓ Is indexed appropriately


✓ Performs well


✓ Matches the navigation architecture




Instructions for Codex
Before creating any route:


    1. Follow the routing hierarchy.
    2. Reuse existing layouts.
    3. Generate complete metadata.
    4. Use SEO-friendly slugs.
    5. Add breadcrumbs where applicable.
    6. Avoid unnecessary route nesting.
    7. Choose the most static rendering strategy possible.
    8. Design routes so they remain stable as the platform evolves.




                                                  14
