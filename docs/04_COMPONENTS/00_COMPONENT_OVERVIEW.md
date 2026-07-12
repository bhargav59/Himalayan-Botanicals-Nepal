COMPONENT OVERVIEW
Project: Himalayan Botanicals Nepal


Version: 1.0


Status: Official Component Architecture




Purpose
This document defines the component philosophy and architecture for the entire application.


Every UI component in this project must follow these standards.


When implementing any page, Codex must first determine whether an existing component satisfies the
requirement before creating a new one.


Creating duplicate components is prohibited.




Component Philosophy
The website should feel as though every page was designed by the same design team.


Components must be:


Consistent


Reusable


Composable


Accessible


Responsive


Testable


Maintainable


Performance-oriented




                                                  1
Design Goals
The UI should communicate


Professionalism


Trust


Quality


Nature


International Business


Modern Engineering


Premium Branding


Minimalism




Component Hierarchy
Application


↓


Layout Components


↓


Page Sections


↓


Feature Components


↓


UI Components


↓


Primitive Components


Never skip hierarchy levels.




                               2
Layer 1
Primitive Components


These are the smallest reusable building blocks.


Examples


Button


Input


Textarea


Badge


Avatar


Separator


Icon


Tooltip


Spinner


Checkbox


Radio


Switch


Skeleton


Progress


Card


Typography


These components never contain business logic.




Layer 2
UI Components




                                                   3
Built from primitive components.


Examples


Product Card


Blog Card


Country Card


Certificate Card


FAQ Item


Feature Card


Gallery


Timeline Item


Breadcrumb


Pagination


Stats Card


CTA Card


Quote Card


These components remain generic.




Layer 3
Feature Components


Business-specific.


Examples


Quote Form


Contact Form


Product Grid


Featured Products




                                   4
Export Process Timeline


Quality Assurance Section


Packaging Options


Country Coverage


Hero Statistics


Testimonials


Blog Listing


Feature components may contain business logic.




Layer 4
Page Sections


Examples


Hero


About Section


Products Section


Quality Section


Blog Section


FAQ Section


CTA Section


Footer


Navigation


These compose feature components.




Layer 5
Layouts




                                                 5
Application Layout


Marketing Layout


Blog Layout


Legal Layout


Layouts never contain business logic.




Component Lifecycle
Design


↓


Specification


↓


Implementation


↓


Testing


↓


Accessibility Review


↓


Performance Review


↓


Production




Component Ownership
Each component owns:


UI


Styling



                                        6
Accessibility


Animation


Documentation


Tests


No component should own unrelated business logic.




Single Responsibility
Every component has one job.


Bad


ProductCard


↓


Fetch API


↓


Open modal


↓


Analytics


↓


Routing


↓


State management


↓


Rendering


Good


ProductCard




                                               7
↓


Display product only




Component Naming
PascalCase


Examples


ProductCard


HeroSection


CountryGrid


QuoteForm


StatsCard


TimelineItem


FAQAccordion




Folder Structure
/components


ui


layout


navigation


marketing


products


blog


forms


feedback


animations




                       8
seo


shared


Each folder contains only related components.




Component File Structure
Component.tsx


Component.test.tsx


Component.types.ts


Component.constants.ts


Component.stories.tsx (optional)


Component.md (optional)


Never place unrelated files together.




Component Size
Ideal


100–150 lines


Maximum


250 lines


Split larger components.




Props Rules
Props should be


Typed


Minimal


Descriptive




                                                9
Immutable


Avoid boolean explosion.


Bad


isPrimary


isSecondary


isGreen


isDark


Good


variant




Component Variants
Use variants rather than multiple components.


Good


Button


↓


primary


secondary


outline


ghost


danger


Bad


PrimaryButton


GreenButton


DarkButton


OutlineButton



                                                10
Styling Rules
Tailwind only.


No inline styles.


No duplicated class strings.


Extract repeated patterns.




Composition
Prefer composition over inheritance.


Bad


Huge component


↓


many conditional branches


Good


Small reusable components


↓


Compose together




State Rules
Presentation components


No state


Feature components


Local state allowed


Global state


Only when necessary




                                       11
Accessibility
Every interactive component must support


Keyboard


Screen readers


Focus indicators


ARIA when required


Touch targets


WCAG AA


Accessibility is mandatory.




Responsive Rules
Every component supports


Mobile


Tablet


Desktop


No exceptions.




Animation Rules
Animations should


Improve usability


Remain subtle


Be consistent


Respect reduced motion


Avoid unnecessary animation.




                                           12
Loading States
Every asynchronous component requires


Skeleton


Loading state


Error state


Success state


Never leave blank space.




Error States
Components must fail gracefully.


Display helpful messages.


Never expose technical details.




Empty States
Every list component should define


Empty illustration


Empty message


CTA


Avoid dead ends.




Testing
Each reusable component requires


Render test


Accessibility test




                                        13
Interaction test


Variant test


Snapshot tests are optional.




Documentation
Every major reusable component should include


Purpose


Props


Variants


Usage


Accessibility Notes


Examples




Performance
Avoid unnecessary renders.


Memoize only after profiling.


Lazy load when appropriate.


Do not optimize prematurely.




Anti-Patterns
Do NOT


Duplicate components


Duplicate styling


Duplicate logic


Hardcode content




                                                14
Use inline styles


Break design system


Ignore accessibility


Ignore responsive layouts


Introduce hidden side effects




Definition of Done
A reusable component is complete when


Responsive


Accessible


Typed


Reusable


Documented


Tested


Consistent


Production Ready




Instructions for Codex
Before creating any component


1.


Search existing components.


2.


Reuse whenever possible.


3.


Create new components only when necessary.




                                             15
4.


Follow naming conventions.


5.


Follow the design system.


6.


Maintain accessibility.


7.


Keep components small.


8.


Prefer composition.


9.


Document reusable components.


10.


Think about whether another developer could reuse this component six months later.




                                                16
