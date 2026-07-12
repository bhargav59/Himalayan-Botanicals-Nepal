DATABASE_SCHEMA.md
Project: Himalayan Botanicals Nepal


Version: 1.0


Status: Production Standard




Purpose
This document defines the canonical data model for the Himalayan Botanicals Nepal platform.


Although the initial release is a B2B marketing website, the schema must support future evolution into
a complete export management platform.


This document is the single source of truth for all business entities.


Every API, form, page, and database migration must follow this schema.




Database Philosophy
The database should be:


Normalized


Scalable


Maintainable


Extensible


Auditable


Secure


Future-ready


Avoid designing for today's website only.


Design for the next five years.




                                                     1
Database Engine
Preferred


PostgreSQL


ORM


Prisma


Reason


Type safety


Migration support


Performance


Developer experience




Naming Convention
Tables


Singular PascalCase


Example


Product


BlogPost


QuoteRequest


Fields


camelCase


Example


botanicalName


createdAt


updatedAt




                       2
IDs


Use UUIDs.


Never expose sequential IDs publicly.




Standard Fields
Every entity should contain


id


createdAt


updatedAt


createdBy (future)


updatedBy (future)


status (where applicable)


deletedAt (soft delete when required)




Entity Relationship Overview
Organization


│


├── Product


│ ├── Category


│ ├── Certificate


│ ├── GalleryImage


│ ├── PackagingOption


│ ├── Document


│ └── FAQ


│



                                        3
├── BlogPost


│ ├── Category


│ ├── Tag


│ └── Author


│


├── QuoteRequest


│ ├── Product


│ └── Company


│


├── ContactInquiry


│


├── Country


│


├── Testimonial


│


└── SiteSetting




Product
Purpose


Core export product.


Fields


id


slug


name




                       4
botanicalName


commonName


description


shortDescription


origin


harvestRegion


plantPart


harvestSeason


appearance


color


odor


purity


moisture


shelfLife


storageConditions


minimumOrderQuantity


leadTime


packagingSummary


status


seoTitle


seoDescription


createdAt


updatedAt


Relationships


Category



                       5
GalleryImage


Certificate


PackagingOption


Document


FAQ


Related Products




ProductCategory
Fields


id


name


slug


description


icon


displayOrder


status




ProductImage
Fields


id


productId


imageUrl


altText


caption


sortOrder




                   6
isHeroImage




Certificate
Fields


id


productId


title


certificateType


issuingOrganization


issueDate


expiryDate


documentUrl


status


Examples


COA


Heavy Metal Report


Microbial Test


Organic Certificate




PackagingOption
Fields


id


productId


title


description




                      7
weight


material


dimensions


imageUrl


displayOrder




ProductDocument
Fields


id


productId


title


documentType


fileUrl


language


version


status


Examples


Specification Sheet


Company Profile


Catalogue


MSDS


Technical Data Sheet




ProductFAQ
Fields




                       8
id


productId


question


answer


displayOrder




BlogPost
Fields


id


slug


title


excerpt


content


featuredImage


authorId


categoryId


publishedAt


readingTime


seoTitle


seoDescription


status




BlogCategory
Fields


id




                 9
name


slug


description


displayOrder




BlogTag
Fields


id


name


slug




Author
Fields


id


name


title


bio


avatar


linkedinUrl


email (optional)




QuoteRequest
Purpose


Highest-value business entity.


Fields




                                 10
id


companyName


contactName


email


phone


country


website


productId


requestedQuantity


unit


message


expectedOrderFrequency


targetMarket


incotermPreference


status


assignedTo (future)


source


createdAt


updatedAt




Quote Status
New


Contacted


Qualification


Sample Requested




                         11
Negotiation


Won


Lost


Archived




ContactInquiry
Fields


id


name


email


company


phone


country


subject


message


status


createdAt




Country
Fields


id


name


isoCode


flag


displayOrder




                 12
active


Purpose


Export destinations


Contact forms


Future localization




Testimonial
Fields


id


company


contactName


designation


testimonial


image


country


featured


status


Only use verified testimonials.




SiteSetting
Purpose


Global configuration.


Fields


companyName


email




                                  13
phone


address


businessHours


socialLinks


analytics


seoDefaults


logo


favicon




NavigationItem
Fields


id


title


url


parentId


displayOrder


target


visible


Supports future CMS.




Download
Fields


id


title


type




                       14
fileUrl


language


version


requiresLeadCapture


downloadCount




NewsletterSubscriber
Fields


id


email


country


source


subscribedAt


status




MediaAsset
Purpose


Central media library.


Fields


id


filename


altText


mimeType


width


height




                         15
size


uploadedAt




SEO Metadata
Every major content entity supports


SEO Title


SEO Description


Canonical URL


Open Graph Image


Robots


Schema Type




Audit Strategy
Every critical entity should support


Created


Updated


Soft Delete


Future activity logs


Future approval workflow




Relationships
One Product


→ Many Images


One Product


→ Many Certificates




                                       16
One Product


→ Many Packaging Options


One Product


→ Many FAQs


One Product


→ Many Documents


One Category


→ Many Products


One Author


→ Many Blog Posts


One Product


→ Many Quote Requests




Validation Rules
Email


RFC compliant


Phone


International format


URLs


Validated


Files


Type checked


Size checked


Text


Sanitized



                           17
Security
Soft delete


UUIDs


Prepared statements


Server-side validation


No sensitive information exposed


Encrypted secrets




Future Expansion
Buyer Accounts


Supplier Accounts


CRM


ERP


Inventory


Order Management


Shipment Tracking


Invoice Management


Payment Tracking


Multi-language


CMS


Admin Dashboard


Role-based permissions


No schema redesign should be required.




                                         18
Migration Strategy
Never edit old migrations.


Always create new migrations.


Maintain backward compatibility whenever possible.




Seed Data
Initial seed should include


Products


Categories


Countries


FAQs


Packaging Options


Site Settings


Navigation


Blog Categories




Performance
Index


slug


email


status


publishedAt


productId


categoryId




                                                19
country


Optimize foreign keys.


Avoid unnecessary joins.




Anti-Patterns
Never


Store duplicated information


Hardcode relationships


Use JSON where relational data is appropriate


Store business logic in the database


Use sequential public IDs


Ignore indexing




Definition of Done
The database schema is complete when


✓ All business entities are modeled


✓ Relationships are defined


✓ Validation rules exist


✓ Future expansion is supported


✓ APIs can be generated from the schema


✓ No major redesign is expected during platform growth




Instructions for Codex
Before creating database models or migrations:


     1. Follow this schema exactly.




                                                 20
2. Use Prisma with PostgreSQL.
3. Use UUID primary keys.
4. Keep entities normalized.
5. Preserve relationships.
6. Add migrations rather than modifying existing ones.
7. Never invent new entities without updating this document.
8. Design every implementation so it can evolve into a full export management platform without
   requiring a database redesign.




                                            21
