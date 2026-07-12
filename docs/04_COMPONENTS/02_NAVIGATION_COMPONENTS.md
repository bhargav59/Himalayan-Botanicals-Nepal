02_NAVIGATION_COMPONENTS.md
Project: Himalayan Botanicals Nepal


Version: 1.0


Status: Production Standard




Purpose
This document defines the navigation system for Himalayan Botanicals Nepal.


The navigation should help international B2B buyers quickly understand:


       • Who we are
       • What we export
       • Why buyers should trust us
       • How our quality system works
       • How to request a quotation

Navigation must reduce friction.


Every click should move the buyer closer to requesting a quotation.




Navigation Philosophy
The navigation should feel:


Professional


Premium


Minimal


Fast


Predictable


International


Modern


The navigation should never feel like an online shopping website.




                                                   1
It should resemble premium B2B manufacturers and ingredient suppliers.




Navigation Hierarchy
Primary Navigation


↓


Mega Menu


↓


Dropdown


↓


Breadcrumb


↓


Footer Navigation




Primary Navbar
Purpose


Global navigation.


Visible on every marketing page.


Contains


Logo


Primary Navigation


CTA


Theme Toggle


Mobile Menu


Desktop Search (future)




                                                2
Navbar Layout
Left


Company Logo


Center


Navigation Links


Right


Theme Toggle


Request Quote Button


Mobile Menu Button




Sticky Behavior
Initial State


Transparent over Hero.


After Scroll


Solid background.


Shadow appears.


Reduced height.


Smooth transition.


Never obstruct content.




Logo
Purpose


Primary brand identifier.


Requirements




                            3
Clickable.


Returns to Home.


Optimized SVG.


Accessible.


Supports Light Mode.


Supports Dark Mode.


Responsive.




Primary Navigation Links
Home


About


Products


Quality


Packaging


Export Process


Blog


Contact


Request Quote


Maximum of eight top-level items.


Avoid navigation clutter.




Mega Menu
Purpose


Display structured navigation.


Used only for Products.




                                    4
Desktop only.


Sections


Featured Products


Medicinal Herbs


Documentation


Resources


Quick Links


Support




Mega Menu Products
Featured


Himalayan Shilajit


Jatamansi


Chiraito


Timur


Medicinal Herbs


Tulsi


Ashwagandha


Brahmi


Turmeric


Quick Links


Quality Assurance


Packaging


Request Quote


Download Catalogue




                     5
Dropdown Behavior
Open


Hover


Focus


Click (touch devices)


Close


Escape Key


Outside Click


Navigation


Selection


Animations


Fade


Slide


Duration


150–250ms




Mobile Navigation
Component


Slide Drawer


Position


Right Side


Overlay


Yes


Close




                        6
Swipe


Outside Click


Escape


Close Button




Mobile Navigation Order
Home


About


Products


Quality


Packaging


Export Process


Blog


Contact


Request Quote


Always place CTA at the bottom.




Mobile Drawer
Contains


Logo


Navigation


Social Links


Email


WhatsApp


CTA




                                  7
Large touch targets.


Accessible.




Search
Phase One


Disabled.


Architecture should support future implementation.


Future Capabilities


Product Search


Blog Search


FAQ Search


Document Search


Certificate Search




Breadcrumb
Purpose


Navigation context.


Structure


Home


↓


Products


↓


Product


Always generated.


Schema enabled.




                                                 8
Accessible.




Footer Navigation
Purpose


Secondary navigation.


Groups


Company


Products


Resources


Support


Legal


Contact


Never duplicate excessive links.




Footer Company
About


Quality


Packaging


Export Process


Blog


Contact




Footer Products
Shilajit


Ashwagandha




                                   9
Tulsi


Brahmi


Turmeric


Jatamansi


Chiraito


Timur




Footer Resources
Product Catalogue


Company Profile


FAQs


Certificates


Request Quote




Footer Legal
Privacy Policy


Terms


Cookie Policy


Disclaimer




Footer Contact
Email


WhatsApp


Location


Business Hours




                    10
CTA Button
Primary CTA


Request Quote


Always visible on Desktop.


Visible in Mobile Drawer.


Never hidden.




Secondary CTA
Download Catalogue


Appears in


Products


Footer


Quality


Packaging




Active Navigation
Current page highlighted.


Hover state.


Focus state.


Accessible.




Scroll Behavior
Navbar shrinks.


Background solidifies.




                             11
Shadow appears.


Logo scales slightly.


Animation


200ms


Smooth.




Navigation Accessibility
Keyboard navigation.


Logical tab order.


Visible focus indicators.


ARIA labels.


Escape closes menus.


Screen reader support.


Touch targets


Minimum


44px




Theme Toggle
Location


Top Right


Behavior


Instant


Persist user preference.


Respect system settings.


Accessible.




                            12
Navigation Animations
Hover


150ms


Dropdown


200ms


Drawer


250ms


Page Transition


300–500ms


Respect reduced motion.




Navigation States
Default


Hover


Focus


Active


Disabled


Loading (future)




Navigation Icons
Use Lucide only.


Allowed


Chevron


Arrow




                          13
Search


Menu


Close


Download


Mail


Phone


Location


Avoid decorative icons.




Product Navigation
Product Grid


↓


Category


↓


Product


↓


Related Products


↓


Request Quote


Support cross-linking.




Blog Navigation
Blog


↓


Category




                          14
↓


Article


↓


Related Articles


↓


Product Links




Error Handling
Broken Links


Never allowed.


404


Helpful navigation.


Redirect when appropriate.




Performance
Navigation must:


Load instantly.


Avoid layout shift.


Avoid unnecessary JavaScript.


Lazy load only heavy menus.




Analytics Events
Track


Navigation Click


CTA Click




                                15
Quote Button


Catalogue Download


Product Click


Blog Click


Search (future)


Mobile Drawer Open


These events support future optimization.




Responsive Behavior
Desktop


Full Navbar


Mega Menu


Tablet


Compact Navbar


Simplified Mega Menu


Mobile


Drawer Navigation


Single Column


Large Buttons




Security
Never expose admin links.


Never expose internal routes.


Never trust client navigation state.




                                            16
Future Features
Language Switcher


Buyer Dashboard


Supplier Portal


Customer Login


Saved Products


Search


Notifications


Can be added without redesigning navigation.




Anti-Patterns
Never


Use more than one primary CTA.


Hide important pages.


Create deep navigation trees.


Nest dropdowns excessively.


Use hover-only interactions.


Break keyboard navigation.


Use inconsistent menu spacing.


Mix internal and external styling.


Duplicate navigation components.




Definition of Done
Navigation is complete when




                                               17
Responsive


Accessible


Keyboard friendly


Touch friendly


SEO friendly


Schema enabled


Consistent


Fast


Production ready




Instructions for Codex
Before modifying navigation:


       1. Reuse existing navigation components.
       2. Preserve the navigation hierarchy.
       3. Keep navigation shallow and intuitive.
       4. Prioritize the "Request Quote" CTA.
       5. Maintain accessibility across all interactions.
       6. Ensure mobile and desktop experiences remain consistent.
       7. Test keyboard navigation and focus management.
       8. Avoid adding new top-level navigation items without updating this specification.




                                                     18
