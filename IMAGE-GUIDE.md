# ProFlow Plumbing — Image Guide & Asset Integration System

This guide outlines every image asset required for the **ProFlow Plumbing** fictional demonstration website, its exact project path, recommended dimensions, aspect ratio, Pinterest search terms, intended composition, and graceful fallback behavior.

---

## 1. Quick Replacement Instructions

To integrate real images:
1. Find or generate a suitable image matching the composition and dimensions specified below.
2. Optimize the file format (`.jpg`, `.webp`, or `.png`). Keep file sizes below 400 KB for hero/showcase images and below 150 KB for portraits.
3. Save or rename the file to the **Exact Project Path** listed in the inventory below.
4. Refresh your browser — the site uses `PlaceholderImage` with Next.js image loading, so **placed images appear automatically with no code changes needed**. If any image is absent or fails to load, the site gracefully displays a branded SVG placeholder without breaking layout or throwing errors.

---

## 2. Directory Structure

All image assets live under the `public/images/` directory:

```text
public/
└── images/
    ├── proflow-logo.png               # Header & brand identity logo
    ├── hero-plumber.jpg               # Homepage hero featured specialist
    ├── service-van-equipment.jpg       # Homepage Why ProFlow equipment showcase
    ├── about-workshop.jpg             # About page workshop & diagnostic lab
    ├── services/                      # 6 detailed service action shots
    │   ├── emergency-repairs.jpg
    │   ├── leak-detection.jpg
    │   ├── drain-clearing.jpg
    │   ├── fixture-upgrades.jpg
    │   ├── hot-water.jpg
    │   └── preventative-maintenance.jpg
    └── team/                          # 5 specialist demonstration portraits
        ├── team-member-1.jpg
        ├── team-member-2.jpg
        ├── team-member-3.jpg
        ├── team-member-4.jpg
        └── team-member-5.jpg
```

---

## 3. Complete Image Inventory

### Core Brand & Page Hero Assets

| # | Asset / Filename | Location / Page | Exact Project Path | Dimensions & Ratio | Requirement |
|---|---|---|---|---|---|
| **01** | `proflow-logo.png` | Global Header | `/public/images/proflow-logo.png` | ~400 × 110 px (transparent PNG, ~3.6:1) | Optional (falls back to branded SVG mark) |
| **02** | `hero-plumber.jpg` | Homepage (`/`) — Hero Section | `/public/images/hero-plumber.jpg` | 1200 × 900 px (4:3 landscape) | Recommended |
| **03** | `service-van-equipment.jpg` | Homepage (`/`) — Why Choose Us | `/public/images/service-van-equipment.jpg` | 1000 × 1200 px (5:6 portrait) | Recommended |
| **04** | `about-workshop.jpg` | About Page (`/about`) — Our Story | `/public/images/about-workshop.jpg` | 1000 × 900 px (10:9 / ~4:3 landscape) | Recommended |

#### Detailed Specifications:
* **`proflow-logo.png`**:
  * **Pinterest / Unsplash Search Terms:** `modern plumbing logo clean branding navy teal minimalist vector logo badge`
  * **Subject & Composition:** Clean ProFlow Plumbing brand lockup or emblem on a transparent background.
  * **Notes:** Fits directly into the sticky header. If absent, the header displays the inline SVG droplet mark and text.

* **`hero-plumber.jpg`**:
  * **Pinterest / Unsplash Search Terms:** `professional plumber working under sink modern daylight kitchen tools copper pipe`
  * **Subject & Composition:** Focused residential plumber in neat company attire working with tools or checking pipe fittings. Daylight illumination, warm residential feel.
  * **Crop:** Horizontal 4:3 crop with subject centered or slightly offset to accommodate the floating "Rapid Dispatch" pill overlay at bottom right.

* **`service-van-equipment.jpg`**:
  * **Pinterest / Unsplash Search Terms:** `modern service van organized plumbing tools diagnostic camera equipment drawer racking`
  * **Subject & Composition:** Vertical interior or rear view of an organized technician service vehicle with sorted copper fittings, digital diagnostic monitors, or sewer cameras.
  * **Crop:** Vertical portrait orientation. Bottom area displays the operational commitment spec badge.

* **`about-workshop.jpg`**:
  * **Pinterest / Unsplash Search Terms:** `clean plumbing workshop organized tools copper pipes technician worktable brass fittings`
  * **Subject & Composition:** Tidy workshop, workbench with precision pressure gauges, tubing cutters, and brass fittings. Demonstrates careful craftsmanship and diagnostic standards.

---

### Services Catalog Images (`public/images/services/`)

These 6 images are shared between the Homepage **Services Overview** (`/#services`) and the full **Services Page** (`/services`).

| # | Filename | Exact Project Path | Dimensions & Ratio | Pinterest / Search Terms | Intended Subject & Composition |
|---|---|---|---|---|---|
| **05** | `emergency-repairs.jpg` | `/public/images/services/emergency-repairs.jpg` | 1000 × 750 px (4:3) | `emergency plumber fixing ruptured copper pipe shutoff valve basement water leak` | Technician sealing or isolating an urgent pipe leak, wrench on shutoff valve, urgent diagnostic work. |
| **06** | `leak-detection.jpg` | `/public/images/services/leak-detection.jpg` | 1000 × 750 px (4:3) | `acoustic leak detection plumber digital acoustic sensor thermal pipe camera inspecting wall` | Non-destructive leak tracing: listening wand or digital acoustic detector held against wall or slab. |
| **07** | `drain-clearing.jpg` | `/public/images/services/drain-clearing.jpg` | 1000 × 750 px (4:3) | `hydro jetting sewer drain machine plumber clearing clogged drain outdoor cleanout` | Hydro-jetting equipment, drain motorized auger, or CCTV camera cable feeding into an inspection cleanout. |
| **08** | `fixture-upgrades.jpg` | `/public/images/services/fixture-upgrades.jpg` | 1000 × 750 px (4:3) | `modern bathroom tap installation plumber installing chrome basin mixer faucet vanity` | High-quality chrome or brushed brass mixer tap installation on a clean ceramic bathroom or kitchen basin. |
| **09** | `hot-water.jpg` | `/public/images/services/hot-water.jpg` | 1000 × 750 px (4:3) | `modern hot water system heat pump continuous gas heater installation plumber copper valves` | Contemporary continuous-flow gas heater or eco heat pump water tank with neat insulated copper piping. |
| **10** | `preventative-maintenance.jpg` | `/public/images/services/preventative-maintenance.jpg` | 1000 × 750 px (4:3) | `plumber checking water pressure gauge manifold preventative plumbing inspection home` | Pressure testing with brass manifold gauges, checking backflow preventer valves, proactive system health check. |

---

### Demonstration Team Portraits (`public/images/team/`)

These 5 portrait assets represent the demonstration team roster in `data/team.js`, shared across the Homepage **Team Preview** (first 3 members) and the full **About & Team Page** (`/about#team`, all 5 members).

> [!NOTE]
> All portraits are for a fictional demonstration site for the CimpleTech portfolio. They depict operational trade roles and must not imply or invent real personal identities.

| # | Filename | Staff Member & Role | Exact Project Path | Dimensions & Ratio | Pinterest / Search Terms | Intended Composition |
|---|---|---|---|---|---|---|
| **11** | `team-member-1.jpg` | Marcus Vance — Lead Field Operations | `/public/images/team/team-member-1.jpg` | 600 × 700 px (6:7 portrait) | `friendly confident male plumbing supervisor navy workwear diagnostic clipboard neutral background` | Friendly male lead technician with clipboard/tablet, neat navy company shirt, neutral/workshop background. |
| **12** | `team-member-2.jpg` | Elena Rostova — Emergency Dispatch & Containment | `/public/images/team/team-member-2.jpg` | 600 × 700 px (6:7 portrait) | `professional female plumber clean workwear holding inspection flashlight smiling neutral studio background` | Confident female specialist in clean trade workwear holding inspection flashlight, welcoming smile. |
| **13** | `team-member-3.jpg` | David Kim — Hot Water & Heating Tech | `/public/images/team/team-member-3.jpg` | 600 × 700 px (6:7 portrait) | `professional asian male tradesman adjustable wrench navy polo shirt portrait clean neutral` | Friendly tradesman in navy polo with adjustable wrench or diagnostic meter, professional portrait. |
| **14** | `team-member-4.jpg` | Samira Patel — Drainage & Jetting Tech | `/public/images/team/team-member-4.jpg` | 600 × 700 px (6:7 portrait) | `professional female drainage technician protective uniform digital diagnostic tablet smiling` | Female technician in hi-vis/navy work uniform holding diagnostic display or tablet. |
| **15** | `team-member-5.jpg` | Callum Brooks — Residential Fixtures & Fitout | `/public/images/team/team-member-5.jpg` | 600 × 700 px (6:7 portrait) | `young friendly male plumber holding pipe fitting tools smiling against clean background` | Young tradesman with pipe cutter or basin fitting tool, friendly and approachable. |

---

## 4. Technical Integration Architecture

1. **Component:** `components/ui/PlaceholderImage.js`
   * Tries to load the real image with Next.js built-in `next/image` (`<Image />`).
   * When the image exists at `/public/images/...`, Next.js optimizes and renders it with native responsive sizing.
   * If the file is missing, 404s, or fails to decode, the `onError` handler triggers an immediate state transition to a **branded SVG placeholder** styled in ProFlow teal/navy.
   * Preserves exact aspect ratio and min-height, preventing Cumulative Layout Shift (CLS) or broken image icons.

2. **Logo Graceful Fallback (`components/layout/Header.js`):**
   * Attempts to render `/images/proflow-logo.png`.
   * On missing file, immediately falls back to the clean inline SVG droplet mark and styled typography `ProFlow Plumbing`.

3. **Contact Page:**
   * Uses clear SVG trade icons and typography; contains no static image file dependencies.

---

## 5. Verification Checklist

- [x] Every image location in code audited and recorded
- [x] Standard directory structure initialized under `public/images/`
- [x] Reusable `<PlaceholderImage />` component with graceful degradation deployed
- [x] Header logo supports `proflow-logo.png` with SVG fallback
- [x] Hero section wired to `/images/hero-plumber.jpg`
- [x] Why Choose Us section wired to `/images/service-van-equipment.jpg`
- [x] Services Overview & Services Page wired to 6 catalog images
- [x] Team Preview & About Page wired to 5 portrait images
- [x] Zero build errors on `npm run build`
