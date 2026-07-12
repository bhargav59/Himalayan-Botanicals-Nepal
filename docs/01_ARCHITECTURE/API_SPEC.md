API_SPEC.md
Project: Himalayan Botanicals Nepal


Version: 1.0


Status: Production Standard




Purpose
This document defines the public and internal API contracts for the Himalayan Botanicals Nepal
platform.


Every endpoint must follow these specifications.


This document is the source of truth for backend development.




API Philosophy
APIs are business capabilities.


They should never be tightly coupled to UI pages.


Examples


Good


/products


Bad


/homepage-products




Architecture
Frontend


↓


Route Handler / Server Action




                                                    1
↓


Validation


↓


Service Layer


↓


Repository Layer


↓


Database


Business logic must never exist inside controllers.




Response Format
Every response follows the same structure.


Success


{ success: true, data: ... }


Failure


{ success: false, error: { code, message } }


Never return inconsistent response structures.




API Versioning
Current


v1


Future


/v2


Breaking changes require version increments.




                                                      2
Authentication
Phase 1


Public website


No login required.


Future


JWT


RBAC


Admin


Buyer Portal


Supplier Portal




Validation
Every endpoint must validate


Input


Output


Business rules


Use Zod.


Never trust client input.




Error Codes
400


Validation


401


Unauthorized




                               3
403


Forbidden


404


Not Found


409


Conflict


422


Business Validation


429


Rate Limited


500


Unexpected Server Error


Never expose stack traces.




Endpoint Categories
Products


Blog


Quote Requests


Contact


Downloads


Newsletter


Health


Admin (future)




                             4
Product Endpoints
GET


/api/v1/products


Purpose


List products.


Supports


Pagination


Sorting


Filtering


Search


Response


Product summaries only.



GET


/api/v1/products/:slug


Returns


Complete product information.


Includes


Gallery


Certificates


Packaging


FAQs


Downloads


Related Products




                                5
Quote Request
POST


/api/v1/quote-request


Purpose


Primary conversion endpoint.


Validation


Company Name


Required


Contact Name


Required


Email


Required


Country


Required


Product


Required


Quantity


Required


Message


Optional


Website


Optional


Phone


Optional




                               6
Workflow


Validate


↓


Store


↓


Send Email


↓


Notify Sales


↓


Return Success



Success Response


Quote ID


Status


Estimated response time



Failure


Validation errors


Rate limiting


Spam detection




Contact Endpoint
POST


/api/v1/contact


Fields




                          7
Name


Email


Company


Subject


Message


Country


Workflow


Validate


↓


Store


↓


Email Team


↓


Confirmation




Newsletter
POST


/api/v1/newsletter


Validation


Email


Double opt-in ready


Duplicate detection


Future provider integration




                              8
Downloads
POST


/api/v1/download


Purpose


Track downloads.


Possible Assets


Catalogue


Company Profile


Specification Sheet


COA


Future


Lead capture




Blog
GET


/api/v1/blog


Supports


Pagination


Category


Tag


Search



GET


/api/v1/blog/:slug


Returns




                      9
Article


Author


Related Posts


SEO




Search
Future


GET


/api/v1/search


Search


Products


Articles


FAQs


Documents


Autocomplete ready.




Health Check
GET


/api/v1/health


Purpose


Deployment verification.


Returns


Application


Database


Email




                           10
Storage


Status




Admin
Future


Protected


CRUD


Products


Blog


Certificates


Downloads


Navigation


Site Settings




Email Workflow
Quote Request


↓


Internal Notification


↓


Customer Confirmation


↓


CRM Sync (future)




Rate Limiting
Contact




                        11
5 requests/hour/IP


Quote


5 requests/hour/IP


Newsletter


10 requests/hour/IP


Downloads


Reasonable abuse protection


Health


Unlimited




Spam Protection
Honeypot


Rate limiting


Server validation


Optional CAPTCHA


IP monitoring


Never rely solely on client-side validation.




File Uploads
Future


Allowed


PDF


JPG


PNG


WEBP




                                               12
Maximum Size


Configurable


Virus scanning planned.




Pagination
Default


12 items


Maximum


100 items


Cursor-ready architecture


Future-proof.




Sorting
Products


Name


Newest


Featured


Category


Blog


Newest


Oldest


Reading Time




Filtering
Products




                            13
Category


Application


Organic


Availability


Packaging


Future


Export Market




Search Rules
Case insensitive.


Partial matching.


Accent insensitive where practical.


Future


Synonyms


Typo tolerance




Caching
Public


Products


Blog


Static pages


Private


Admin


Authenticated


Revalidation strategy




                                      14
Defined per route.




Logging
Log


Errors


Warnings


Quote submissions


Contact submissions


Download events


Do not log sensitive information.




Security
HTTPS only.


CSRF protection where applicable.


Input sanitization.


Output encoding.


No secret leakage.


Secure headers.




Observability
Track


Latency


Error rate


Success rate


Endpoint usage




                                    15
Quote conversion


Download conversion


Useful for optimization.




API Documentation
Generate


OpenAPI


Swagger


Typed client


Future SDK support.




Future Integrations
HubSpot


Zoho CRM


Salesforce


Brevo


Resend


Mailchimp


ERP


Inventory


Buyer Portal


Supplier Portal


No endpoint redesign should be required.




                                           16
API Checklist
Every endpoint must


Validate input


Return typed responses


Handle errors


Log failures


Rate limit


Be documented


Be tested


Be secure




Anti-Patterns
Never


Return HTML


Return inconsistent JSON


Skip validation


Expose database schema


Leak stack traces


Duplicate endpoints


Perform business logic in controllers


Ignore rate limiting




Definition of Done
An API is production ready when




                                        17
✓ Typed


✓ Documented


✓ Validated


✓ Tested


✓ Secure


✓ Rate limited


✓ Observable


✓ Backward compatible




Instructions for Codex
Before implementing any endpoint:


    1. Read DATABASE_SCHEMA.md.
    2. Validate every request with Zod.
    3. Keep controllers thin.
    4. Place business logic in services.
    5. Return standardized responses.
    6. Protect against abuse and invalid input.
    7. Write endpoints that can support future CRM, ERP, and buyer portal integrations without
       breaking existing clients.




                                                 18
