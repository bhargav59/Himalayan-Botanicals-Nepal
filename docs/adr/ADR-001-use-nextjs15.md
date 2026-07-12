ADR-001

Use Next.js 15 as the Primary Web Framework
Status


Accepted




Date
July 2026




Context
Himalayan Botanicals Nepal requires a modern web framework capable of supporting both the
immediate needs of a B2B marketing website and the long-term vision of becoming a complete export
management platform.


Current requirements include:


      • High SEO performance
      • Excellent Core Web Vitals
      • Responsive marketing pages
      • Product catalogue
      • Blog
      • Quote request workflow
      • Contact forms
      • Static and dynamic rendering
      • Server-side validation
      • Future buyer portal
      • Future admin dashboard
      • Future CRM integration

The framework must support incremental growth without requiring major architectural changes.




Decision
The project will use Next.js 15 (App Router) as the primary application framework.


The application will use:


      • App Router




                                                  1
     • React Server Components
     • Server Actions where appropriate
     • Route Handlers
     • Metadata API
     • next/image
     • next/font
     • Static Generation
     • Incremental Static Regeneration
     • Dynamic rendering only when required




Why This Decision Was Made
Next.js provides:


Excellent SEO


Native server rendering


Excellent performance


Modern React architecture


Production-grade routing


Image optimization


Metadata management


Edge compatibility


Deployment simplicity


Strong TypeScript support


Excellent ecosystem


Long-term community support




Alternatives Considered
React + Vite
Advantages


Fast development




                                              2
Simple


Disadvantages


Additional work for SEO


Requires manual routing


Requires manual optimization


Rejected.




Astro
Advantages


Excellent performance


Static-first


Disadvantages


Less suitable for future authenticated dashboards


Smaller ecosystem


Rejected.




Nuxt
Advantages


Excellent framework


Disadvantages


Project standardizes on React ecosystem.


Rejected.




Laravel
Advantages


Excellent backend



                                                    3
Disadvantages


Additional frontend complexity


Different development workflow


Rejected.




Plain React
Advantages


Simple


Disadvantages


Missing production capabilities required by the project.


Rejected.




Benefits
Excellent SEO


Fast rendering


Scalable architecture


Hybrid rendering


Modern React


Strong developer experience


Easy deployment


Excellent documentation


Future-ready




Consequences
Positive




                                                    4
Unified framework


Fewer architectural decisions


Excellent performance


Native routing


Native metadata


Good scalability


Future dashboard support


Negative


Learning curve for App Router


Server Component architecture requires discipline


Requires understanding rendering strategies


These trade-offs are acceptable.




Rendering Strategy
Static


Homepage


About


Quality


Packaging


Export Process


Legal


ISR


Products


Blog


Dynamic




                                                    5
Quote Requests


Contact


Future Dashboard


Future Admin


This minimizes server load while maintaining flexibility.




Architecture Impact
The following documents depend on this decision:


TECH_SPEC.md


ARCHITECTURE.md


ROUTING.md


API_SPEC.md


IMPLEMENTATION_PLAN.md


Any future architectural changes affecting the framework must update this ADR.




Rules
Developers must:


Use App Router.


Prefer Server Components.


Use Client Components only when necessary.


Prefer Server Actions over unnecessary API endpoints.


Keep routing consistent.


Use Metadata API.


Avoid legacy Pages Router patterns.




                                                     6
Risks
Framework changes


Future React changes


Mitigation


Stay on supported LTS versions.


Review upgrades before adoption.




Review Policy
Review every major Next.js release.


Only revise this ADR if there is a compelling technical or business reason.


Do not replace the framework without creating a new ADR documenting the rationale.




Related ADRs
ADR-002


Use App Router


ADR-003


Use TypeScript Strict Mode


ADR-004


Use Prisma + PostgreSQL


ADR-005


Use React Server Components




Final Decision
Next.js 15 is adopted as the official web framework for Himalayan Botanicals Nepal.




                                                    7
All future development must align with this decision.




                                                   8
