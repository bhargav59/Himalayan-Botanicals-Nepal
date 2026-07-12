ARCHITECTURE.md
Project: Himalayan Botanicals Nepal


Version: 1.0


Status: Master Technical Architecture




Purpose
This document defines the overall architecture of the Himalayan Botanicals Nepal platform.


It explains:


      • System architecture
      • Application architecture
      • Data flow
      • Rendering strategy
      • Folder ownership
      • Business workflows
      • Security model
      • Scalability strategy

This document is the highest-level technical reference after the PRD.




System Vision
The initial release is a B2B marketing website.


The long-term vision is an integrated export platform supporting:


      • Product Management
      • CRM
      • Buyer Portal
      • Supplier Portal
      • Quote Management
      • Certificate Management
      • Document Management
      • ERP Integration

Today's architecture must support tomorrow's expansion.




                                                    1
High-Level Architecture
Buyer


↓


Next.js Application


↓


Server Actions / Route Handlers


↓


Business Services


↓


Repository Layer


↓


Prisma ORM


↓


PostgreSQL


↓


External Services


Email


Analytics


Storage


Future CRM




Layered Architecture
Presentation Layer


↓




                                  2
Application Layer


↓


Business Layer


↓


Infrastructure Layer


↓


Persistence Layer


Each layer has one responsibility.


Never bypass layers.




Presentation Layer
Contains


Pages


Layouts


Components


Animations


Forms


SEO Metadata


No business logic.




Application Layer
Contains


Server Actions


Route Handlers


Controllers




                                     3
Responsibilities


Validation


Authorization (future)


Calling services


Formatting responses


No business rules.




Business Layer
Contains


Services


Business rules


Workflows


Policies


Responsibilities


Quote creation


Product retrieval


Download tracking


Email workflow


Business logic belongs here.




Persistence Layer
Contains


Repositories


Prisma


Database queries




                               4
No business decisions.




Infrastructure Layer
Contains


Email


Analytics


Storage


Logging


Monitoring


Third-party integrations


Infrastructure should be replaceable.




Folder Ownership
/app


Routing


/components


Reusable UI


/features


Business features


/lib


Utilities


/services


Business logic


/repositories


Database access




                                        5
/hooks


Reusable hooks


/config


Configuration


/constants


Shared constants


/content


Markdown


/public


Assets


/docs


Project documentation




Feature-Based Architecture
Each feature owns:


components


hooks


types


validation


services


tests


Example


/features


quote-request


blog




                        6
products


contact


Never mix unrelated business logic.




Rendering Strategy
Static Generation


Home


About


Products


Quality


Packaging


Export Process


ISR


Blog


Product Pages


Future Catalog Pages


Dynamic


Quote Requests


Contact


Downloads


Search


Admin


Prefer static rendering whenever possible.




                                             7
Data Flow
Visitor


↓


UI Component


↓


Server Action


↓


Validation


↓


Business Service


↓


Repository


↓


Database


↓


Response


↓


UI Update


Always follow this direction.




Quote Request Workflow
Buyer


↓


Quote Form




                                8
↓


Zod Validation


↓


Server Action


↓


Quote Service


↓


Repository


↓


Database


↓


Email Service


↓


Sales Notification


↓


Buyer Confirmation


↓


Success Response


This workflow is the highest-priority business process.




Contact Workflow
Visitor


↓


Contact Form




                                                    9
↓


Validation


↓


Store Inquiry


↓


Email Notification


↓


Confirmation


↓


Analytics Event




Download Workflow
Visitor


↓


Download Button


↓


Optional Lead Capture (future)


↓


Analytics Event


↓


File Download




Product Workflow
Visitor


↓



                                 10
Product Listing


↓


Product Detail


↓


Specification Review


↓


Request Quote


↓


Sales Process


The website should naturally guide visitors toward requesting a quotation.




Error Flow
Validation Error


↓


Friendly Message


↓


Retry


System Error


↓


Logging


↓


Monitoring


↓


Fallback UI




                                                  11
↓


Recovery


Never expose technical details to users.




Validation Strategy
Client


Immediate feedback


↓


Server


Security


↓


Business


Rules


Validation exists at multiple layers.




Security Model
Public Website


↓


Server Validation


↓


Rate Limiting


↓


Spam Protection


↓


Secure Storage



                                           12
Future


Authentication


Authorization


RBAC


Audit Logs




State Management
Server Components


↓


Props


↓


Local State


↓


Context


Avoid unnecessary global state.




Caching Strategy
Static


Marketing pages


ISR


Products


Blog


Dynamic


Forms


Future




                                  13
Redis


CDN edge caching




Email Architecture
Application


↓


Email Service


↓


Provider


↓


SMTP / API


↓


Recipient


Never call providers directly from UI code.




Logging Architecture
Application


↓


Logger


↓


Console (development)


↓


Monitoring Platform (production)


Never scatter logging logic.




                                              14
Monitoring
Track


Errors


Performance


API latency


Quote submissions


Downloads


Navigation


Core Web Vitals


404s


500s




SEO Architecture
Every page owns


Metadata


Schema


Canonical


Open Graph


Internal links


SEO must not depend on client-side rendering.




Accessibility Strategy
Accessibility is designed into components.


Not added afterward.




                                                15
Every feature must satisfy WCAG AA.




Internationalization
Architecture must support:


English (initial)


German


French


Japanese


Korean


Without changing routing or data models.




Business Domains
Products


Content


Marketing


Quality


Packaging


Export


Quotes


Documents


Future domains should integrate cleanly.




External Integrations
Current


Email




                                           16
Analytics


Future


HubSpot


Zoho


Salesforce


Cloud Storage


ERP


CMS


Buyer Portal


Each integration should have an isolated adapter.




Scalability Strategy
Scale by adding:


Features


Services


Repositories


Modules


Avoid modifying core architecture.


Prefer extension over replacement.




Performance Strategy
Server Components first


Image optimization


Code splitting


Lazy loading




                                                    17
Caching


Minimal JavaScript


Performance is a feature.




Security Principles
Least privilege


Server validation


Secure defaults


Secrets management


Dependency audits


No sensitive data in client bundles.




Decision Records
Major architectural decisions should be documented.


Create


/docs/adr/


Example


ADR-001


Use Next.js App Router


ADR-002


Use PostgreSQL


ADR-003


Use Prisma


Architecture decisions should be traceable.




                                                18
Technical Debt
If technical debt is introduced,


Document it.


Track it.


Prioritize repayment.


Never hide it.




Future Evolution
Phase 1


Marketing Website


↓


Phase 2


CMS


↓


Phase 3


Buyer Portal


↓


Phase 4


CRM Integration


↓


Phase 5


ERP Integration


↓


Phase 6




                                   19
Supplier Portal


↓


Phase 7


Inventory & Shipment Tracking


Architecture should support every phase.




Anti-Patterns
Never


Mix UI with business logic


Access database from components


Duplicate workflows


Bypass services


Store secrets in code


Couple pages to APIs


Break layer boundaries


Ignore documentation




Architecture Principles
Every implementation should satisfy:


Single Responsibility


Separation of Concerns


Composition over Inheritance


Convention over Configuration


Explicit over Implicit


Reuse over Duplication




                                           20
Maintainability over Cleverness




Definition of Done
The architecture is considered healthy when:


✓ Layers remain independent


✓ Features remain modular


✓ Business logic is centralized


✓ Components remain reusable


✓ Documentation matches implementation


✓ New features require extension rather than redesign


✓ Performance, security, and accessibility remain first-class concerns




Instructions for Codex
Before implementing any feature:


    1. Read ARCHITECTURE.md.
    2. Identify the correct architectural layer.
    3. Never bypass the service and repository layers.
    4. Keep UI components free of business logic.
    5. Reuse existing modules before creating new ones.
    6. Preserve the architecture even when implementing small features.
    7. If a change requires architectural modification, update this document before changing the
       codebase.




                                                   21
