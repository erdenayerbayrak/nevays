1. Project Overview

Objective: Build a multilingual, ultra‑high‑performance corporate website that positions NEVAYS as a global clean‑room engineering leader.

Tech stack: Next.js 14 (React server components), TypeScript, Tailwind CSS, next‑intl (i18n), shadcn/ui component library, Vercel hosting.

KPIs:

Lighthouse ≥ 95 (mobile + desktop)

TTFB < 100 ms in Europe & MENA

Bounce rate < 40 % for organic traffic within 6 months

≥ 30 qualified leads / month via contact form & WhatsApp CTA

2. Target Audience & User Goals

Persona

Pain Point

Site Goal

Pharma Project Manager

Needs GMP‑compliant clean rooms on tight timelines

Validate NEVAYS expertise, download certificates & spec sheets

Hospital Engineer

Looking for turnkey HVAC & AHU solutions

Compare product variants, request custom quote

Consultant / Architect

Wants design files & BIM objects

Quick access to CAD/BIM library

Prospective Employee

Evaluates company culture

Read about values, view job openings

3. Brand & Visual Language

Token

Value

Usage

Primary color

#0099CC

Buttons, links, accents

Secondary

#00B28A

Highlights, callouts

Dark neutral

#101418

Header/footer background

Light neutral

#F6F8FA

Section backgrounds

Sans font

Inter – 400 / 700

Body text

Display font

IBM Plex Sans – 600

Headlines

Imagery: High‑res facility photos, 3D product renders in isometric style (see Termovent).

Iconography: Thin‑line technical icons, stroke = 1.5 px.

Motion: Subtle scroll‑triggered fade/slide; 250 ms ease‑out; prefers‑reduced‑motion respected.

4. Information Architecture (IA)

/              (Home)
  |-- solutions
  |     |-- air‑handling
  |     |-- clean‑room
  |     |-- engineering
  |-- projects      (case studies)
  |-- references    (global map + stats)
  |-- certificates  (ISO, GMP, CE, etc.)
  |-- blog          (insights & news)
  |-- about         (overview, history, team)
  |-- career        (open roles)
  |-- contact       (form + WhatsApp CTA)

Languages: tr (default), en (full parity). Future‑proof for ru.

5. Page‑level Requirements

5.1 Home (/**)

Hero – full‑width looping 360° facility video (≤ 4 MB), tagline “Engineering Contamination‑Free Environments”, ghost button → Contact.

Divisions section – three cards (Air Handling · Clean Room · Engineering). Hover = image zoom + gradient overlay.

Numbers – animated counters (years, countries, employees) in 3‑column grid.

Clients / References – marquee of logos (Pfizer, Zoetis, etc.).

World Map Heat‑chart – interactive; tool‑tip shows project count per region.

Sticky CTA Bar (mobile) – "📞 Ara", "💬 WhatsApp", "✉️ Teklif Al".

5.2 Solutions › Air Handling (/solutions/air‑handling)

Hero with large product photo & division title badge.

Intro copy (≤ 120 words) + download catalog (PDF).

Product variants grid (CMS driven): each card shows 3D render, airflow range, technical badges, accordion for specs.

CTA banner – "Configure Your AHU" → modal form.

5.3 Solutions › Clean Room

Layout mirrors Air Handling but component list replaces variants:

Walls · Glazing · Ceiling · Doors · Floor.

Each component block = 2‑col row (image left/right, spec box opposite).

5.4 Solutions › Engineering

Process timeline (5 stages) with icon + description, animated SVG line.

5.5 Projects

Filterable gallery (industry, country, year).

Case study detail page (static generation) with hero image, metrics sidebar, testimonial.

5.6 About

Quad‑grid Overview (founded, HQ, CEO, facility) inspired by Termovent blocks.

History – horizontal timeline (SVG, draggable on mobile).

Management Grid – CEO + leads (auto‑cropped portrait, role, email link).

5.7 Certificates

Masonry gallery of certificate thumbnails; modal Lightbox with download.

Table listing: cert name, standard, expiry, language.

5.8 Blog

Card list layout with lazy‑loaded images, reading time, category chips.

5.9 Contact

Split layout: left map (Mapbox, grey theme), right form (name, email, phone, message) + WhatsApp quick‑chat button.

Embedded schema.org/ContactPoint JSON‑LD.

6. Component Library (Design Tokens)

Component

Purpose

Notes

CTA Button

Primary actions

Rounded‑full, shadow‑xl on hover

Statistic Block

Numbers section

Animated odometer count

Card Hover

Division cards

Scale 1.03, overlay gradient

Timeline Node

History/Process

8 px square indicator in primary color

Language Switcher

Header right

tr / en text links; hide flag icons

Sticky Contact Bar

Mobile bottom

Height = 56 px; backdrop‑blur

All components exported as Figma variants with Auto‑Layout.

7. Accessibility & Compliance

WCAG 2.1 AA (color contrast ≥ 4.5:1).

Keyboard traps prevented; focus states visible.

prefers-reduced-motion respected, disables parallax/animations.

8. Performance & SEO

Area

Requirement

Images

next/image, AVIF/WebP, responsive sizes

Fonts

font-display: optional, self‑host WOFF2

Code‑Split

Dynamic imports for hero video & maps

Metadata

Open Graph + Twitter cards auto‑generated via metadata API

Structured Data

Organization + Product + BlogPosting schema

Sitemap

Auto with next-sitemap, updated on build

9. CMS & Data Sources

Strapi v4 (REST) or Payload CMS (Mongo) – must expose localized slugs.

Product docs stored in S3, served via CloudFront.

10. Analytics & Tracking

Plausible (self‑host) or GA4 + GDPR consent banner.

Hotjar for heatmaps A/B (30‑day trial).

11. Deliverables & Milestones

Milestone

Owner

Due

Output

M0 Kick‑off

EN

29 Jul

Final PRD + IA approved

M1 Wireframes

UX

05 Aug

Low‑fi in Figma

M2 Visual Design

UI

15 Aug

High‑fi prototype mobile + desktop

M3 Dev Sprint 1

FE

30 Aug

Home + Layout scaffold

M4 Dev Sprint 2

FE

15 Sep

Solutions pages

M5 Content Entry

PM

25 Sep

All TR/EN content in CMS

M6 QA & Launch

QA

30 Sep

Live on Vercel

12. Open Questions

Finalize primary/secondary brand colors?

Confirm CMS choice (Strapi vs Payload).

Need 360° facility video or still hero for MVP?

Confirm blog frequency / content ownership.

Appendix A – Competitive Inspiration Notes

Termovent: strong division cards, statistic blocks with playful micro‑pixels, horizontal history timeline.

Analiz Temiz Oda: clear TR copy, good conversion flow, but dated visuals.

Vona‑INT: neat & responsive, yet lacks interactive components.

We borrow: blocky statistic design, division cards, timeline.We improve: modern typography, lighter palette, real‑time map, fully dynamic CMS.

