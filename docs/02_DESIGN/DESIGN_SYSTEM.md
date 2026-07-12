DESIGN_SYSTEM.md

Himalayan Botanicals Nepal
Design System


Version: 1.0


Last Updated: July 2026




Purpose
This document defines the official visual language of Himalayan Botanicals Nepal.


Every UI component, page, section, and interaction must follow this design system.


When generating code, always reference this document before creating new UI.


Consistency is more important than creativity.




Brand Personality
The interface should communicate:


Premium


Natural


Trustworthy


Professional


Modern


Scientific


Minimal


International


The website should resemble a premium B2B ingredient supplier rather than a retail store.




                                                   1
Design Philosophy
Whitespace over clutter.


Photography over illustrations.


Typography over decoration.


Consistency over novelty.


Performance over visual excess.


Accessibility over trends.


Trust over marketing.


Every visual decision should help international buyers feel confident.




Visual Keywords
Natural


Elegant


Clean


Premium


Organic


Mountain-inspired


Timeless


Minimal


Reliable


Export-ready




                                                    2
Color System
Primary
Forest Green


Purpose:


Primary buttons


Navigation highlights


Links


Headings


Key actions




Secondary
Earth Brown


Purpose:


Accents


Product highlights


Icons


Section dividers




Accent
Golden Ochre


Purpose:


Premium details


Badges


Awards


Highlights




                        3
Use sparingly.




Neutral
Off White


Backgrounds


Cards


Whitespace




Neutral Dark
Slate Gray


Body text


Navigation


Icons


Borders




Semantic Colors
Success


Muted Green


Warning


Amber


Error


Deep Red


Info


Blue


These colors should only communicate status.




                                               4
Color Usage Rules
Use one dominant color per section.


Avoid colorful gradients.


Never use neon colors.


Never use pure black.


Never use pure white.


Favor soft natural tones.




Typography
Primary Font


Modern geometric sans-serif.


Requirements:


Excellent readability


Professional appearance


Optimized for web




Font Scale
Display


Hero titles


H1


Page titles


H2


Major sections


H3




                                      5
Subsections


H4


Cards


Body Large


Feature descriptions


Body


Paragraphs


Small


Captions


Tiny


Metadata


Use a consistent type scale throughout.




Font Weight
Light


Only hero accents


Regular


Body text


Medium


Cards


Semibold


Buttons


Bold


Headings


Extra Bold




                                          6
Hero only




Line Height
Headings


Compact


Body


Comfortable


Long paragraphs


Relaxed




Text Rules
Never justify text.


Prefer left alignment.


Avoid long paragraphs.


Maximum content width should remain readable.




Layout Grid
Desktop


12-column layout


Tablet


8-column layout


Mobile


4-column layout


Use consistent gutters.




                                                7
Maximum Width
Content should remain centered.


Long text should never span the full screen.


Use readable content widths.




Spacing System
Adopt an 8-point spacing system.


Examples:


8


16


24


32


40


48


64


80


96


128


Never use arbitrary spacing values.




Border Radius
Small


Inputs


Medium




                                               8
Cards


Large


Images


Extra Large


Hero sections


Pill


Buttons and badges


Use consistent radii.




Shadows
Small


Cards


Medium


Dropdowns


Large


Modals


Extra Large


Hero highlights


Shadows should be subtle.


Never create floating UI that feels disconnected.




Buttons
Primary


Filled


Forest Green background




                                                    9
White text


Hover:


Slight elevation


Darker shade



Secondary


Outlined


Green border


Transparent background



Ghost


No border


Text only



Danger


Only for destructive actions.



Button Rules


Minimum touch height


44px


Visible focus state


Hover animation


Loading state


Disabled state


Keyboard accessible




                                10
Cards
Cards should include


Soft shadow


Rounded corners


Consistent padding


Hover elevation


Image


Heading


Description


CTA


No visual clutter.




Product Cards
Image


Product Name


Botanical Name


Short Description


Origin


Request Quote Button


Learn More Button


Optional badge


Organic


Featured


Best Seller




                       11
Images
Prefer authentic Himalayan photography.


Avoid generic stock imagery.


Use natural lighting.


High resolution only.


Consistent aspect ratios.


Rounded corners.


Lazy loaded.




Icons
Use Lucide icons exclusively.


Icons should:


Support content


Never dominate


Remain consistent


Use outline style




Navigation
Sticky navigation


Transparent over hero


Solid after scroll


Desktop


Mega Menu


Mobile




                                          12
Drawer Navigation


Current page clearly indicated.




Hero Section
Large background image


Strong headline


Supporting copy


Primary CTA


Secondary CTA


Trust indicators


Never overcrowd the hero.




Section Layout
Heading


Subheading


Content


CTA (optional)


Consistent spacing between sections.




Forms
Minimal fields.


Large labels.


Visible validation.


Accessible inputs.


Large touch targets.




                                       13
Clear success messages.


No placeholder-only labels.




Inputs
Rounded corners


Consistent height


Visible focus


Error state


Success state


Helper text




Tables
Simple


Minimal borders


Alternating rows optional


Responsive


Accessible




Badges
Small


Readable


Consistent colors


Limited use


Examples


Organic




                              14
Premium


Wild Harvested


Export Ready




Animations
Use Framer Motion.


Animation Principles


Subtle


Purposeful


Fast


Natural


Responsive


Never distract.




Animation Duration
Micro


100–150ms


Hover


150–250ms


Page


300–500ms


Hero


500–700ms


Avoid animations longer than 700ms.




                                      15
Hover Effects
Cards


Small lift


Buttons


Elevation


Images


Slight zoom


Links


Underline or color transition


Avoid excessive motion.




Scroll Animations
Fade Up


Fade In


Slide Up


Scale Slightly


Only animate once.


Respect reduced motion preferences.




Loading States
Skeleton loaders


Progress indicators


No layout shift


Maintain visual consistency.




                                      16
Empty States
Friendly illustration or icon


Helpful message


CTA


No dead ends.




Error States
Clear message


Recovery action


Consistent styling


Never expose technical errors.




Footer
Company summary


Quick links


Products


Export Markets


Contact


Social links


Newsletter


Legal


Minimal styling


High readability




                                 17
Dark Mode
Support system preference.


Maintain accessibility.


Avoid pure black.


Images remain unchanged.


Use softer dark surfaces.




Responsive Design
Mobile First


Breakpoints


Small Mobile


Mobile


Tablet


Laptop


Desktop


Large Desktop


Layouts should adapt naturally.




Accessibility
Minimum touch size


44px


Keyboard navigation


Visible focus


Alt text required




                                  18
Semantic HTML


ARIA only where necessary


Contrast compliant




Illustration Style
If illustrations are required:


Minimal


Monochromatic


Nature-inspired


Professional


Avoid cartoon styles.




Photography Style
Authentic


Natural


Mountain landscapes


Harvesting


Processing


Packaging


Laboratory


Export logistics


Avoid AI-looking visuals for production assets.




Component Consistency
Every reusable component must:




                                                  19
Use spacing tokens


Use typography tokens


Use color tokens


Use animation tokens


Support dark mode


Remain responsive


Remain accessible




UI Principles
Every page should answer:


What is this?


Why should I trust it?


What should I do next?


Every page should include a clear primary action.




Design Anti-Patterns
Do NOT use:


Glassmorphism


Neon colors


Heavy gradients


Complex backgrounds


Parallax overload


Autoplay video


Excessive carousels


Tiny text




                                                    20
Crowded layouts


Inconsistent spacing


Mixed icon sets


Random border radii


Random shadows


Multiple button styles


Decorative animations without purpose




Definition of Good Design
A procurement manager should feel that the company is:


Professional


Reliable


International


Organized


Transparent


Capable of fulfilling export orders


without needing to read every word.


The design should quietly build confidence through clarity, consistency, and attention to detail.




Instructions for Codex
Before creating or modifying any UI:


    1. Read DESIGN_SYSTEM.md.
    2. Reuse existing design tokens and components.
    3. Do not invent new colors, spacing, typography, or button styles.
    4. Keep visual consistency across all pages.
    5. Prioritize accessibility, readability, and trust over visual novelty.
    6. Every new component must support responsive layouts and dark mode.
    7. If uncertain, choose the simpler, more consistent design.




                                                    21
