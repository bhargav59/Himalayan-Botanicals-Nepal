QUALITY_CHECKLIST.md
Project: Himalayan Botanicals Nepal


Version: 1.0


Status: Mandatory Production Gate




Purpose
This document defines the quality standards required before any deployment.


No feature, page, or release should be considered production-ready until every applicable checkpoint
has passed.


Quality is measured across engineering, UX, accessibility, SEO, performance, security, and business
correctness.




Release Levels
Development


Internal testing only.


Staging


Feature complete.


Production


Fully verified.




Build Verification
✓ Project builds successfully


✓ No TypeScript errors


✓ No ESLint errors


✓ No Prettier violations




                                                   1
✓ No console errors during runtime


✓ No hydration mismatches


✓ No broken imports


✓ No unused dependencies


✓ Environment variables verified




Code Quality
✓ No duplicated business logic


✓ Components reused correctly


✓ No unnecessary client components


✓ No dead code


✓ No commented-out production code


✓ No TODOs left unresolved


✓ Clear naming conventions followed


✓ Documentation updated




UI Consistency
✓ Design system followed


✓ Typography consistent


✓ Color tokens used correctly


✓ Button variants consistent


✓ Icon usage consistent


✓ Card spacing consistent


✓ Border radius consistent




                                      2
✓ Shadows consistent


✓ Hover effects consistent


✓ Dark mode verified




Responsive Design
Desktop


✓ Large screens


✓ Standard laptops


✓ Small laptops


Tablet


✓ Landscape


✓ Portrait


Mobile


✓ Large phones


✓ Standard phones


✓ Small phones


General


✓ No horizontal scrolling


✓ Images scale correctly


✓ Tables remain usable


✓ Navigation functions correctly


✓ Touch targets ≥44px




                                   3
Navigation
✓ Navbar works


✓ Footer links work


✓ Breadcrumbs correct


✓ Mobile drawer works


✓ Sticky navigation behaves correctly


✓ Active route highlighted


✓ No broken links


✓ Logo returns to homepage


✓ Request Quote CTA visible




Forms
Contact Form


✓ Validation


✓ Error messages


✓ Success message


✓ Keyboard support


✓ Spam protection


Quote Form


✓ Required fields


✓ Email validation


✓ Country selection


✓ Product selection


✓ Submission succeeds




                                        4
Newsletter


✓ Duplicate handling


✓ Confirmation flow




Product Pages
✓ Specifications complete


✓ Images optimized


✓ Gallery functions


✓ Related products shown


✓ Downloads available


✓ CTA visible


✓ FAQ complete


✓ Metadata correct


✓ Structured data valid


✓ Internal links present




Blog
✓ Categories correct


✓ Tags correct


✓ Reading time displayed


✓ Featured image


✓ Author shown


✓ Related posts


✓ Social metadata




                            5
✓ Canonical URL




Accessibility
✓ Semantic HTML


✓ One H1 per page


✓ Proper heading hierarchy


✓ Keyboard navigation


✓ Focus indicators visible


✓ ARIA used appropriately


✓ Alt text for images


✓ Labels for all inputs


✓ Contrast meets WCAG AA


✓ Skip link present


✓ Screen reader friendly


✓ prefers-reduced-motion respected




SEO
Every Page


✓ Unique title


✓ Unique description


✓ Canonical URL


✓ Open Graph


✓ Twitter Card


✓ Structured Data




                                     6
✓ Internal links


✓ Correct heading hierarchy


✓ Descriptive image alt text


✓ Sitemap inclusion


✓ Robots directives correct




Structured Data
Validate


✓ Organization


✓ Website


✓ Breadcrumb


✓ Product


✓ FAQ


✓ Article


✓ ContactPage


No validation errors.




Performance
Lighthouse Targets


✓ Performance ≥95


✓ Accessibility ≥95


✓ SEO ≥95


✓ Best Practices ≥95


Core Web Vitals




                               7
✓ LCP acceptable


✓ CLS near zero


✓ INP acceptable


Assets


✓ Images optimized


✓ Fonts optimized


✓ JS minimized


✓ CSS minimized


✓ No render-blocking resources




Security
✓ HTTPS enforced


✓ Secrets not exposed


✓ Environment variables secure


✓ Rate limiting enabled


✓ Input validation


✓ Output encoding


✓ No stack traces exposed


✓ Security headers configured


✓ CSRF protection where applicable


✓ XSS prevention


✓ Dependency audit completed




                                     8
API
✓ All endpoints documented


✓ Validation works


✓ Typed responses


✓ Correct status codes


✓ Error handling verified


✓ Rate limiting tested


✓ Logging verified


✓ No sensitive data returned




Database
✓ Migrations applied


✓ Seed data correct


✓ Indexes verified


✓ Foreign keys valid


✓ UUIDs used


✓ Relationships correct


✓ No orphan records


✓ Soft deletes function




Downloads
✓ Company profile


✓ Product catalogue


✓ Specification sheets




                               9
✓ COA placeholders


✓ Correct filenames


✓ Accessible links


✓ File sizes optimized




Images
✓ Responsive


✓ Optimized


✓ WebP preferred


✓ Alt text


✓ Proper filenames


✓ No pixelation


✓ Consistent aspect ratios




Content
✓ Grammar checked


✓ Spelling checked


✓ Professional tone


✓ Buyer-focused language


✓ No unsupported medical claims


✓ No fake certifications


✓ No fake testimonials


✓ No placeholder text


✓ Contact details verified




                                  10
International Readiness
✓ Metric units consistent


✓ Date formats consistent


✓ International phone formatting


✓ Country list complete


✓ Currency references clear


✓ English reviewed


Future-ready for localization.




Analytics
✓ GA4 installed


✓ Search Console connected


✓ Page views tracked


✓ CTA clicks tracked


✓ Quote requests tracked


✓ Downloads tracked


✓ Navigation events tracked


✓ No duplicate events




Browser Compatibility
Chrome


✓ Latest


Edge


✓ Latest




                                   11
Firefox


✓ Latest


Safari


✓ Latest


Mobile browsers


✓ Verified




Deployment
✓ Production environment configured


✓ Domain connected


✓ SSL active


✓ DNS verified


✓ Sitemap accessible


✓ Robots accessible


✓ Favicon correct


✓ Manifest verified


✓ 404 page works


✓ 500 page works




Business Validation
✓ Company information correct


✓ Product names verified


✓ Botanical names verified


✓ Export process accurate




                                      12
✓ Packaging information correct


✓ Contact information current


✓ Request Quote workflow tested


✓ Download links verified




Regression Testing
Verify existing functionality after changes.


Homepage


Products


Blog


Contact


Quote Request


Navigation


Dark mode


Forms


Downloads


No existing functionality should break.




Release Approval
Engineering


☐ Approved


Design


☐ Approved


Content


☐ Approved




                                               13
SEO


☐ Approved


Business


☐ Approved


Final Production


☐ Approved


Production deployment requires all approvals.




Definition of Production Ready
The website is production-ready only when:


✓ All mandatory checklist items pass


✓ No critical defects remain


✓ Performance goals achieved


✓ Accessibility requirements met


✓ SEO validated


✓ Security verified


✓ Business content approved


✓ Documentation updated


Deployment should never proceed if any critical item fails.




Instructions for Codex
Before opening a pull request or preparing a deployment:


      1. Run through every applicable checkpoint.
      2. Treat failed items as blockers.
      3. Do not mark features complete until all required validations pass.
      4. Update documentation if implementation changes affect architecture or behavior.
      5. Prioritize correctness, accessibility, and maintainability over speed of delivery.




                                                    14
