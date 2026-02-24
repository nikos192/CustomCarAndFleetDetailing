# Custom Car & Fleet Detailing Website Deliverables

## 1) Sitemap
- /
- /services.html
- /gallery.html
- /contact.html
- /google-reviews.html
- /privacy-policy.html
- /terms.html
- /cookies.html

## 2) Full Page Copy Overview
All final conversion copy has been implemented directly in each page template:
- Home: hero, service cards, maintenance teaser, why choose us, before/after highlights, review preview, service area messaging, FAQs, final CTA.
- Services: complete sections for premium mobile detailing, paint correction, ceramic coatings, fleet detailing, and all maintenance plans with who for, inclusions, benefits, add-ons, pricing placeholders, terms and CTAs.
- Gallery: filterable categories, local SEO captions, alt-text strategy block, and before/after placeholder format.
- Contact: click-to-call, email, complete quote form fields, service area map embed, business-hours note, reassurance FAQs, and spam protection guidance.
- Google Reviews: rating summary placeholder, review embed setup instructions, testimonial cards including ongoing maintenance client style, and leave-review CTA.

## 3) SEO Pack

### Keyword Strategy (Local Transactional Intent)
Primary focus keywords implemented naturally across copy and metadata:
- mobile car detailing Newcastle
- ceramic coating Newcastle
- paint correction Lake Macquarie
- fleet detailing Newcastle
- car detailing Hunter Valley
- car detailing Central Coast
- weekly car detailing Newcastle
- monthly car detailing Newcastle
- car maintenance detailing Lake Macquarie
- fleet maintenance detailing Newcastle
- scheduled mobile detailing Hunter Valley
- regular car detailing Central Coast

### SEO Titles + Meta + URL Slugs + H1/H2 Structures

#### Home (/)
- Title: Mobile Car Detailing Newcastle | Custom Car & Fleet Detailing
- Meta: Premium mobile car detailing in Newcastle, Lake Macquarie, Hunter Valley and Central Coast. Paint correction, ceramic coatings, fleet detailing and scheduled maintenance plans.
- H1: Premium Mobile Car Detailing That Protects Your Time, Paint and Resale Value
- H2s: Services overview, maintenance plans, why choose us, before/after highlights, reviews snapshot, service areas, FAQs, final CTA
- Internal links: Services, Gallery, Contact, Google Reviews, legal pages

#### Services (/services.html)
- Title: Detailing Services Newcastle | Paint Correction, Ceramic Coatings & Fleet
- Meta: Explore premium mobile detailing services: paint correction, ceramic coating, fleet detailing and weekly, fortnightly, monthly maintenance plans across Newcastle and surrounding areas.
- H1: Professional Mobile Detailing Services Across Newcastle and Surrounding Regions
- H2s: Premium Mobile Detailing, Paint Correction, Ceramic Coatings, Fleet Detailing, Maintenance Plans, Service FAQs
- Internal links: Contact quote form, Gallery, maintenance plan anchors, Home

#### Gallery (/gallery.html)
- Title: Detailing Gallery Newcastle | Before & After Results
- Meta: View before-and-after detailing examples for paint correction, ceramic coating, interior detailing, fleet detailing and maintenance details across Newcastle and nearby regions.
- H1: Before & After Gallery
- H2s: Filter by Service, Image SEO Naming & Alt-Text Strategy
- Internal links: Services, Contact

#### Contact (/contact.html)
- Title: Contact Mobile Detailer Newcastle | Free Quote & Bookings
- Meta: Contact Custom Car & Fleet Detailing for mobile detailing quotes and bookings in Newcastle, Lake Macquarie, Hunter Valley and Central Coast. Call 0421 817 139.
- H1: Contact Custom Car & Fleet Detailing
- H2s: Call or Email, Get a Free Quote, Service Area Map, Booking Reassurance FAQs
- Internal links: Services, Home, Google Reviews

#### Google Reviews (/google-reviews.html)
- Title: Google Reviews | Custom Car & Fleet Detailing Newcastle
- Meta: Read customer feedback for Custom Car & Fleet Detailing and learn how to leave your own Google review.
- H1: Google Reviews
- H2s: Average Rating Summary, Google Reviews Embed Placeholder, Highlighted Testimonials, Share Your Experience
- Internal links: Contact, Services, Home

### Technical SEO Essentials Included
- Canonical tags on all pages
- Open Graph + Twitter card metadata on core pages
- JSON-LD schema implemented:
  - LocalBusiness (home)
  - Service (home + services)
  - FAQPage (home)
  - BreadcrumbList (all core pages)
- AggregateRating/Review schema intentionally not added to markup until verifiable live values exist
- XML sitemap: /sitemap.xml
- robots.txt present
- NAP consistency applied site-wide:
  - Business: Custom Car & Fleet Detailing
  - Phone: 0421 817 139 / +61 421 817 139
  - Email: customcarandfleetdetailing@gmail.com
  - Primary location: Blackalls Park NSW 2283
  - Service areas: Newcastle, Lake Macquarie, Hunter Valley, Central Coast

### Image Filename + Alt Conventions
- Filename format: service-location-intent-sequence.jpg
- Examples:
  - paint-correction-newcastle-before-after-01.jpg
  - fleet-detailing-lake-macquarie-commercial-van-02.jpg
- Alt format: concise factual description + vehicle/service + location

## 4) UI Section-by-Section Wireframe Outline

### Global
- Sticky header with brand + nav
- Mobile-first layout with high contrast premium colour palette
- Sticky mobile CTA bar (Call Now / Get a Free Quote / Book Now)
- Repeated trust and NAP in footer

### Home
1. Hero (value proposition + 3 CTAs + trust badges)
2. Services overview cards
3. Maintenance plans teaser
4. Why choose us credibility section
5. Before/after highlights
6. Google reviews preview cards
7. Service areas block
8. FAQ accordion
9. Final conversion CTA panel

### Services
1. Intro with primary CTA row
2. Core service sections (who for, inclusions, benefits, add-ons, pricing, CTA)
3. Fleet-focused section
4. Maintenance plans cards and terms
5. Plan comparison table
6. Service FAQ section

### Gallery
1. Intro + CTA row
2. Filter control chips
3. 3-column responsive before/after card grid
4. Alt-text and filename strategy card

### Contact
1. Contact intro + CTA row
2. Contact detail card
3. Conversion form with all required fields
4. Map/embed block
5. Reassurance FAQs and spam-protection guidance

### Google Reviews
1. Intro and leave review CTA
2. Rating summary and live widget placeholder instructions
3. Testimonial cards
4. Final review CTA

## 5) Complete Production-Ready Code Structure

- index.html
- services.html
- gallery.html
- contact.html
- google-reviews.html
- privacy-policy.html
- terms.html
- cookies.html
- sitemap.xml
- robots.txt
- assets/
  - css/styles.css
  - js/main.js
  - js/gallery.js
  - images/placeholders/*.svg

## 6) Launch Checklist
- Connect real domain and HTTPS
- Replace placeholder hero/gallery images with compressed real photos (WebP preferred)
- Set final Google Business Profile review URL in google-reviews.html
- Connect contact form to backend/email service with server-side validation and anti-spam controls
- Add GA4 + Google Tag Manager + conversion events (call clicks, form submit, quote CTA)
- Verify Search Console ownership and submit sitemap.xml
- Confirm NAP consistency with Google Business Profile and citations
- Test mobile sticky CTA taps and tel links on iOS/Android
- Run Core Web Vitals checks (Lighthouse + PageSpeed Insights)
- Confirm accessibility: keyboard nav, labels, heading order, contrast
- Validate structured data in Rich Results Test
- Final QA on all internal links and canonical tags
