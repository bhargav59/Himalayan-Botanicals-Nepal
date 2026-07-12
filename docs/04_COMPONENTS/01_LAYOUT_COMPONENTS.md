01_LAYOUT_COMPONENTS.md
Project: Himalayan Botanicals Nepal


Version: 1.0


Status: Production Standard




Purpose
This document defines every layout component used throughout the application.


Every page must be built using these layout primitives.


No page should create its own custom layout if an existing one satisfies the requirement.




Layout Philosophy
The layout should feel:


Premium


Minimal


Spacious


Modern


Professional


Every page should follow a predictable visual rhythm.


Visitors should immediately recognize that all pages belong to the same website.




Layout Hierarchy
Application


↓


Root Layout




                                                   1
↓


Page Layout


↓


Section


↓


Container


↓


Grid / Stack


↓


Content




RootLayout
Purpose


Global application wrapper.


Responsibilities


      • HTML structure
      • Theme provider
      • Metadata
      • Global fonts
      • Global CSS
      • Analytics
      • Cookie banner
      • Navigation
      • Footer

Must Never


Contain business logic.


Contain page-specific content.




                                 2
MarketingLayout
Used For


Home


About


Products


Quality


Packaging


Export Process


Blog


Contact


Responsibilities


Navigation


Footer


Breadcrumb support


Shared spacing


Shared animations


SEO wrapper




LegalLayout
Used For


Privacy Policy


Terms


Cookies


Legal pages




                     3
Simpler layout.


Reduced visual distractions.




BlogLayout
Used For


Blog


Articles


Responsibilities


Reading width


Author block


Table of contents


Related posts


Share buttons


Reading progress




Container
Purpose


Control maximum readable width.


Rules


Always centered.


Consistent horizontal padding.


Never exceed maximum content width.


Never stretch text across ultra-wide monitors.


Use on every major section.




                                                 4
MaxWidth
Purpose


Constrain content.


Variants


Small


Forms


Medium


Blog articles


Large


Marketing sections


Extra Large


Hero


Full


Background sections


Use variants instead of arbitrary widths.




Section
Purpose


Primary spacing component.


Every major block of content must use Section.


Responsibilities


Vertical spacing


Background


Section ID




                                                 5
Animation trigger


Accessibility


Variants


Default


Compact


Large


Hero


Dark


Light


Accent




Surface
Purpose


Visual wrapper.


Used for


Cards


Panels


Highlights


Testimonials


Feature blocks


Variants


Flat


Raised


Outlined


Glass (future)




                    6
Default


Flat.




Stack
Purpose


Vertical layout.


Properties


Gap


Alignment


Distribution


Responsive spacing


Never create manual spacing with repeated margin classes.




Inline
Purpose


Horizontal layout.


Used for


Buttons


Tags


Badges


Icons


Metadata


Properties


Gap


Wrap




                                                 7
Alignment


Justification




Grid
Purpose


Responsive grid layout.


Supports


2 Columns


3 Columns


4 Columns


6 Columns


Auto Fit


Rules


Responsive first.


No fixed pixel columns.




SplitLayout
Purpose


50/50 layouts.


Examples


Image + Content


Content + Image


Map + Contact


Quality + Photo


Variants




                          8
Image Left


Image Right


Equal


Unequal


Responsive collapse on mobile.




SidebarLayout
Purpose


Blog


Documentation


Future dashboard


Desktop


Sidebar


Main content


Mobile


Single column.




HeroLayout
Purpose


Top section of every major page.


Structure


Background


Overlay


Container


Content




                                   9
Actions


Trust badges


Optional image


Must support


Dark mode


Mobile


Animation




PageHeader
Purpose


Page title section.


Contains


Breadcrumb


Title


Subtitle


CTA (optional)


Should appear on every non-home page.




BreadcrumbWrapper
Purpose


Navigation context.


Structure


Home


↓


Section




                                        10
↓


Current Page


Accessible


Schema compatible.




ContentWrapper
Purpose


Readable text.


Used for


Articles


Policies


Long-form content


Maximum readable width.




ResponsiveContainer
Purpose


Automatically adapts spacing across breakpoints.


Responsibilities


Padding


Margins


Alignment


Maximum width


Never manually adjust spacing if this component already solves it.




                                                   11
Spacer
Purpose


Intentional whitespace.


Allowed sizes


XS


SM


MD


LG


XL


2XL


Do not use arbitrary margin utilities instead of Spacer.




Divider
Purpose


Separate content.


Variants


Line


Gradient


Icon Divider


Text Divider


Minimal usage.




BackgroundSection
Purpose




                                                    12
Visual emphasis.


Variants


White


Muted


Forest


Earth


Pattern


Image


Video (future)


Never reduce readability.




PatternOverlay
Purpose


Subtle visual texture.


Allowed


Botanical pattern


Mountain contour


Geometric lines


Opacity must remain low.




ImageFrame
Purpose


Consistent image presentation.


Features


Rounded corners




                                 13
Lazy loading


Aspect ratio


Shadow


Caption (optional)


All marketing images should use ImageFrame.




PageTransition
Purpose


Smooth page navigation.


Animation


Fade


Slide


Scale


Duration


300–500ms


Respect reduced motion.




StickyContainer
Purpose


Sticky sidebars.


Examples


Table of contents


Contact CTA


Blog navigation


Desktop only.




                                              14
FloatingCTA
Purpose


Persistent call to action.


Examples


Request Quote


WhatsApp


Email


Must not obstruct content.




Responsive Behavior
Desktop


Maximum width


Large spacing


Multi-column


Tablet


Reduced spacing


Adaptive grid


Mobile


Single column


Touch-friendly


Readable typography


No horizontal scrolling.




                             15
Accessibility Rules
Every layout component must


Use semantic HTML


Support keyboard navigation


Maintain logical heading order


Preserve reading order


Support screen readers


Meet WCAG AA.




Animation Rules
Layouts may animate


Once


On scroll


Subtly


Never repeatedly.


Avoid distracting effects.




Performance Rules
No unnecessary wrappers.


Avoid deeply nested divs.


Lazy load heavy media.


Minimize layout shift.




                                 16
Composition Rules
Pages should be assembled like this


RootLayout


↓


MarketingLayout


↓


Section


↓


Container


↓


Grid / Stack


↓


Feature Components


↓


UI Components


↓


Primitive Components


Never bypass this hierarchy.




Anti-Patterns
Never


Create page-specific containers


Use arbitrary spacing


Mix layout and business logic




                                      17
Nest unnecessary wrappers


Use inline layout styles


Duplicate layout components


Ignore responsive behavior


Break the spacing system




Example Page Structure
RootLayout


↓


MarketingLayout


↓


HeroLayout


↓


Section


↓


Container


↓


Grid


↓


Feature Cards


↓


Section


↓


Container




                              18
↓


SplitLayout


↓


Image


↓


Content


↓


Section


↓


CTA


↓


Footer


Every marketing page should follow a similar rhythm.




Future Layouts
Supplier Portal


Buyer Dashboard


Admin Dashboard


CMS


Partner Portal


Can be added later without changing existing layouts.




Definition of Done
A layout component is complete when


Responsive



                                                  19
Accessible


Reusable


Documented


Composable


Performance optimized


Production ready




Instructions for Codex
Before creating any page:


    1. Use existing layout components.
    2. Never create a custom layout unless absolutely necessary.
    3. Preserve spacing consistency.
    4. Keep layouts semantic.
    5. Optimize for readability.
    6. Follow the component hierarchy.
    7. Ensure every layout works across all supported screen sizes.
    8. If multiple layouts are possible, choose the simplest reusable solution.




                                                   20
