DEPLOYMENT.md
Project: Himalayan Botanicals Nepal


Version: 1.0


Status: Production Operations Manual




Purpose
This document defines the deployment architecture and operational procedures for the Himalayan
Botanicals Nepal platform.


The objective is to ensure deployments are:


Safe


Repeatable


Secure


Observable


Recoverable


Every deployment must follow this document.




Deployment Philosophy
Deployments should be:


Automated


Reproducible


Reversible


Observable


Low Risk


Production deployments should never rely on manual code changes.




                                                 1
Environments
Development


Purpose


Local development.


Characteristics


Debugging enabled.


Mock data allowed.


No production secrets.




Staging
Purpose


Pre-production verification.


Characteristics


Production-like environment.


Real integrations where safe.


Testing only.




Production
Purpose


Public website.


Characteristics


Optimized.


Secure.


Monitored.




                                2
Stable.




Hosting
Primary Platform


Vercel


Responsibilities


Application hosting


Serverless functions


Edge network


Image optimization


ISR


Preview deployments


Future expansion should remain compatible with cloud-native infrastructure.




Domain Strategy
Primary


example.com


Preferred


www → redirect to apex (or vice versa, choose one canonical host)


Subdomains


blog.example.com (future)


portal.example.com (future)


admin.example.com (future)


api.example.com (future)


Always enforce a single canonical hostname.




                                                  3
DNS
Provider


Cloudflare (recommended)


Requirements


DNSSEC enabled


HTTPS


Automatic SSL


CAA records


SPF


DKIM


DMARC


Appropriate TTL values




SSL
HTTPS only.


Redirect HTTP → HTTPS.


TLS should remain modern and secure.


No mixed content.




Environment Variables
Separate variables per environment.


Examples


NEXT_PUBLIC_SITE_URL


NEXT_PUBLIC_GA_ID




                                       4
DATABASE_URL


RESEND_API_KEY


SMTP_HOST


SMTP_USER


SMTP_PASSWORD


RECAPTCHA_SECRET


Never expose secrets to the client.




Secrets Management
Never commit


API keys


Passwords


Private certificates


Database credentials


JWT secrets


Secrets belong only in the hosting platform's secure environment variable system.




Database Deployment
Production database


PostgreSQL


Migration Rules


Always create migrations.


Never edit existing production migrations.


Always back up before major schema changes.




                                                  5
File Storage
Current


Repository assets


Future


Cloud object storage


Examples


Cloudflare R2


AWS S3


Do not store large uploads in the repository.




Email
Preferred


Resend


Fallback


SMTP


Future


SendGrid


Requirements


SPF


DKIM


DMARC


Verified sending domain


Separate transactional and marketing email.




                                                6
Analytics
Google Analytics 4


Google Search Console


Microsoft Clarity


Vercel Analytics


Future


Plausible


PostHog


Do not collect unnecessary personal data.




SEO Verification
After every deployment verify


robots.txt


sitemap.xml


canonical URLs


structured data


Open Graph


Twitter cards


Noindex rules


Search Console




Monitoring
Monitor


Application availability




                                            7
API errors


Page load speed


Core Web Vitals


Form submissions


Quote requests


Download failures


404 errors


500 errors




Error Tracking
Preferred


Sentry


Monitor


Unhandled exceptions


Server errors


Client errors


API failures


Performance issues




Logging
Development


Verbose logging allowed.


Production


Structured logs.


No sensitive information.




                            8
Retain logs according to business requirements.




Performance Monitoring
Verify


LCP


CLS


INP


TTFB


Bundle size


Image optimization


Font loading


Monitor after every deployment.




Security Headers
Implement


Content-Security-Policy


Strict-Transport-Security


X-Frame-Options


X-Content-Type-Options


Referrer-Policy


Permissions-Policy


Review periodically.




Rate Limiting
Protect




                                                  9
Contact API


Quote API


Newsletter API


Downloads (future)


Prevent abuse without impacting legitimate buyers.




Spam Protection
Honeypot fields


Server validation


Rate limiting


Optional CAPTCHA


Email reputation monitoring




CI/CD
Preferred Platform


GitHub Actions


Workflow


Push


↓


Lint


↓


Type Check


↓


Tests


↓




                                                 10
Build


↓


Preview Deployment


↓


Approval


↓


Production Deployment


Never deploy directly from local machines.




Branch Strategy
main


Production


develop


Integration


feature/*


New work


hotfix/*


Urgent fixes


release/*


Release preparation


Protect the main branch.




Deployment Checklist
Before deployment


✓ Lint passes




                                             11
✓ Type check passes


✓ Tests pass


✓ Build succeeds


✓ Environment variables verified


✓ Database migration reviewed


✓ Documentation updated


✓ QA approved




Post-Deployment Checklist
Verify


Homepage


Products


Blog


Quote Form


Contact Form


Navigation


Downloads


Dark mode


Mobile responsiveness


404 page


500 page


Analytics


Search Console




                                   12
Rollback Strategy
If deployment fails


Stop traffic if required


Restore previous deployment


Rollback database only if safe


Verify functionality


Communicate incident


Document root cause


Always prefer fast recovery over risky hot fixes.




Backup Strategy
Database


Daily automated backups


Retention according to business requirements


Assets


Object storage replication (future)


Configuration


Version controlled


Never rely on production as the only copy.




Disaster Recovery
Scenarios


Hosting outage


Database corruption




                                                    13
DNS issues


Email provider outage


Recovery priorities


Restore public website


Restore inquiry functionality


Restore downloads


Restore analytics


Document every incident.




Incident Severity
P1


Website unavailable


Quote requests failing


P2


Major feature unavailable


P3


Minor defects


P4


Cosmetic issues


Prioritize business-critical functions.




Release Notes
Every deployment should include


Version


Features




                                          14
Fixes


Breaking changes


Database migrations


Known issues


Rollback instructions




Compliance
Review


Privacy policy


Cookie handling


Analytics consent (where applicable)


Data retention


Business contact information


Update as regulations evolve.




Future Infrastructure
Cloudflare


CDN


Redis caching


Background jobs


CMS


Buyer portal


ERP integration


CRM integration


Architecture should scale without major redesign.




                                                    15
Production Acceptance
Deployment is complete when


✓ Website available


✓ SSL active


✓ DNS correct


✓ Forms working


✓ APIs healthy


✓ Analytics collecting


✓ Search Console verified


✓ No critical errors


✓ Performance acceptable


✓ Rollback tested




Anti-Patterns
Never


Deploy without QA


Edit production manually


Commit secrets


Skip backups


Ignore failed tests


Deploy directly to production from feature branches


Disable monitoring


Ignore security headers




                                                 16
Definition of Done
A deployment is successful only when


The application is available


Business-critical workflows operate correctly


Monitoring reports healthy status


Performance targets are maintained


SEO assets are accessible


No critical issues remain




Instructions for Codex
Before preparing a deployment:


    1. Verify all quality gates.
    2. Confirm environment configuration.
    3. Ensure migrations are safe.
    4. Produce deployment notes.
    5. Validate post-deployment health.
    6. Be prepared to roll back if production health degrades.
    7. Never bypass automated checks for convenience.




                                                  17
