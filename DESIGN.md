---
name: Calibre-Web Standard
description: A restrained, responsive book-library workspace for finding, reading, and administering a personal collection.
colors:
  primary: "#4F46E5"
  primary-hover: "#4338CA"
  primary-ink: "#FFFFFF"
  paper: "#FAFAF9"
  surface: "#FFFFFF"
  ink: "#1C1917"
  muted: "#78716C"
  border: "#E7E5E4"
  warm-surface: "#F5F0E8"
  night: "#1C1917"
  night-surface: "#292524"
  night-ink: "#F5F5F4"
  night-muted: "#A8A29E"
  night-border: "#44403C"
  night-primary: "#818CF8"
  night-primary-hover: "#A5B4FC"
  night-primary-ink: "#1C1917"
typography:
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "2rem"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  book-title:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
rounded:
  sm: "6px"
  md: "10px"
  cover: "8px"
  pill: "999px"
spacing:
  xs: "0.25rem"
  sm: "0.75rem"
  md: "1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-ink}"
    rounded: "{rounded.sm}"
    padding: "0.375rem 0.75rem"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.primary-ink}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "var(--cw-text)"
    rounded: "{rounded.sm}"
    padding: "0.375rem 0.75rem"
  text-input:
    backgroundColor: "var(--cw-surface)"
    textColor: "var(--cw-text)"
    rounded: "{rounded.sm}"
    padding: "0.375rem 0.75rem"
  book-tag:
    backgroundColor: "transparent"
    textColor: "var(--cw-text)"
    rounded: "{rounded.pill}"
    padding: "0.35em 0.65em"
  book-card:
    backgroundColor: "transparent"
    textColor: "var(--cw-text)"
    rounded: "{rounded.cover}"
  browse-navigation:
    backgroundColor: "var(--cw-surface)"
    textColor: "var(--cw-text)"
    rounded: "{rounded.md}"
    padding: "0.65rem 0.75rem"
---

# Design System: Calibre-Web Standard

## Overview

**Creative North Star: “The Curator’s Desk — precise, editorial, administration-ready.”**

The Standard theme is a quiet working desk for finding, reading, and maintaining a personal Calibre library. Stone neutrals carry the page; indigo identifies actions and linked content; book-cover imagery supplies the strongest editorial character. System typography and familiar Bootstrap controls keep the interface practical rather than ornamental.

Light and dark themes share the same structure, hierarchy, and task flow. Responsive navigation and book grids adapt around the library owner’s current screen without introducing a second visual language.

**Key Characteristics:**
- Warm stone-neutral surfaces with a clear light/dark pairing.
- Indigo actions, visible focus, and consistent SVG iconography.
- Cover-led book browsing with restrained metadata and border-defined structure.
- Familiar, responsive administration controls rather than decorative chrome.

## Colors

The palette pairs paper and stone neutrals with one indigo action color; the dark theme inverts the neutral roles and uses a lighter indigo for contrast.

### Primary
- **Curator Indigo** (`{colors.primary}`): Primary actions, selected controls, and linked content in the light theme.
- **Indigo Hover** (`{colors.primary-hover}`): Hover and active treatment for primary actions.
- **Night Indigo** (`{colors.night-primary}`): Primary actions and selected controls in the dark theme.
- **Night Indigo Hover** (`{colors.night-primary-hover}`): Hover and active treatment for dark-theme primary actions.

### Neutral
- **Paper** (`{colors.paper}`): Light page background.
- **Surface White** (`{colors.surface}`): Light navigation, forms, tables, and modal surfaces.
- **Stone Ink** (`{colors.ink}`): Light-theme body and heading text.
- **Muted Stone** (`{colors.muted}`): Secondary metadata and navigation group labels.
- **Stone Border** (`{colors.border}`): Dividers and control boundaries.
- **Warm Stone** (`{colors.warm-surface}`): Subtle hover and selected navigation surfaces.
- **Night Stone** (`{colors.night}`): Dark page background and dark-theme action text.
- **Night Surface** (`{colors.night-surface}`): Dark cards, navigation, and dialogs.
- **Night Paper** (`{colors.night-ink}`): Dark-theme primary text.
- **Night Muted Stone** (`{colors.night-muted}`): Dark-theme secondary metadata.
- **Night Border** (`{colors.night-border}`): Dark-theme dividers and control boundaries.

**The Indigo Action Rule.** Use indigo to identify actions, selected states, and links; do not wash large page regions with it.

## Typography

**Display Font:** No separate display face; headings use the system sans stack.  
**Body Font:** Native system sans stack (`-apple-system`, `BlinkMacSystemFont`, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif).  
**Label/Mono Font:** Labels use the same sans stack; no display or mono face is introduced.

**Character:** Compact, neutral, and familiar. The hierarchy comes from size, weight, and muted metadata rather than a second typeface.

### Hierarchy
- **Headline** (600, 2rem at the sampled desktop width, 1.2 line-height): Page and section headings, following Bootstrap’s responsive heading scale.
- **Body** (400, 1rem, 1.5 line-height): Form labels, navigation, and explanatory text.
- **Book title** (600, 0.95rem): The first metadata line beneath each cover.
- **Label** (700, 0.75rem, uppercase where used): Navigation section labels only.
- **Book metadata** (400, 0.85rem): Author and series details, visually subordinate to titles.

## Layout

The Standard theme uses Bootstrap 5’s fluid layout and breakpoint scale. The global navigation collapses into an offcanvas browse menu below the large breakpoint. Book grids auto-fill columns with a 150px minimum and 1.5rem gap; covers keep a 2:3 ratio. List views use two equal columns where space allows and preserve a 1.5rem gutter. Content stays flexible rather than being locked to a marketing-page max width.

## Elevation & Depth

Structure comes from surface contrast and thin borders. The light theme uses a restrained shadow only on book-cover imagery; the dark theme stays flat and uses tonal separation instead.

### Shadow Vocabulary
- **Light cover lift** (`0 1px 2px rgba(28,25,23,.06)`): Subtle edge separation on cover images in the light theme.

**The Flat Night Rule.** Dark-theme surfaces remain shadow-free; use the darker surface and border tokens to separate layers.

## Shapes

The system is gently rounded, not pill-shaped by default: controls follow Bootstrap’s 6px corners, navigation links use 10px, and cover images use 8px. Taxonomy badges alone use a full capsule. One-pixel borders define form and table boundaries; book covers retain their 2:3 silhouette.

## Components

### Buttons
Primary actions are compact, high-contrast, and unmistakably actionable.
- **Shape:** Soft 6px corners.
- **Primary:** Indigo fill with theme-matched ink; Bootstrap button padding is 0.375rem by 0.75rem.
- **Hover / Focus:** Primary buttons darken in light mode and lighten in dark mode; keyboard focus uses an indigo-tinted ring.
- **Secondary:** Transparent, stone-text buttons with a quiet border; hover uses the warm surface.

### Tags
- **Style:** Category and language links use transparent surfaces, a fine neutral border, body text, and a capsule silhouette.
- **State:** Hovered links use the active theme’s indigo; tags communicate taxonomy rather than a selected filter.

### Cards / Containers
- **Corner Style:** The book cover uses a gentle 8px radius.
- **Background:** Book items remain transparent; the cover and metadata form one reading unit rather than nested cards.
- **Shadow Strategy:** Light covers receive the small cover lift; dark covers remain flat.
- **Border:** No decorative card border; page sections and data surfaces use the neutral border.
- **Internal Padding:** The cover-to-metadata gap is 0.65rem.

### Inputs / Fields
- **Style:** White/light or dark surface, thin theme border, 6px corners, and compact Bootstrap padding.
- **Focus:** Indigo border with a soft indigo-tinted ring.
- **Error / Disabled:** Preserve Bootstrap’s semantic validation and disabled states; do not replace them with color-only cues.

### Navigation
The top bar and browse menu use the same surface and text tokens as the page. Desktop navigation stays visible; below the large breakpoint, Browse opens the offcanvas menu. Active and hovered browse links use a warm neutral surface, while the create-shelf action is indigo.

## Do's and Don'ts

### Do:
- **Do** reserve indigo for primary actions, linked content, and selected controls.
- **Do** keep book covers prominent and their metadata compact.
- **Do** use borders and tonal surfaces for structure before adding shadows.
- **Do** preserve the light/dark theme pairing across navigation, forms, and dialogs.

### Don't:
- **Don't** wrap each book item in another decorative card.
- **Don't** add a display font or ornamental type treatment to administration surfaces.
- **Don't** use indigo as a large background wash.
- **Don't** add shadows to dark-theme surfaces.
