/**
 * Plumbing Services Data Catalog
 * Reusable data structure for ProFlow Plumbing services across the site.
 * Used by /services and homepage overview.
 */
export const SERVICES_CATALOG = [
  {
    id: "emergency-plumbing",
    title: "Emergency Plumbing",
    shortTitle: "Emergency Repairs",
    badge: "24/7 Priority",
    summary:
      "Rapid dispatch for critical plumbing failures, active flooding, burst pipes, and sudden system shutoffs.",
    overview:
      "Plumbing emergencies strike without warning and can quickly cause structural water damage to walls, subfloors, and electrical installations. Our priority emergency service focuses on rapid arrival, active hazard containment, immediate water isolation, and reliable stabilization.",
    practicalExamples: [
      "Burst or ruptured supply pipes and high-pressure hose failures",
      "Severe internal sewage or wastewater overflows",
      "Major sudden ceiling, wall, or slab water leaks",
      "Gas hot-water safety shutoffs and emergency isolations",
    ],
    imagePath: "services/emergency-repairs.jpg",
    suggestedImage:
      "emergency plumber fixing ruptured copper water pipe shutoff valve in basement",
    dimensions: "1000 × 750px (4:3 ratio)",
    highlights: ["Priority dispatch", "Isolation & hazard control", "Damage mitigation"],
  },
  {
    id: "leak-detection",
    title: "Leak Detection & Pipe Repairs",
    shortTitle: "Leak Detection",
    badge: "Non-Invasive",
    summary:
      "Precision acoustic tracing, thermal testing, and camera diagnostics to isolate hidden leaks without damaging walls or floors.",
    overview:
      "Unexplained spikes in water bills, damp drywall, musty odors, or warm spots on concrete slabs often signal hidden plumbing leaks. Using modern non-destructive diagnostic tools, we pinpoint the exact point of failure before any physical access is created.",
    practicalExamples: [
      "Acoustic listening surveys for concealed in-wall copper pipe pinholes",
      "Under-slab leak localization avoiding unnecessary concrete trenching",
      "Roof cavity, drainage manifold, and shower recess leak tracing",
      "High-pressure supply line integrity testing and pressure regulation",
    ],
    imagePath: "services/leak-detection.jpg",
    suggestedImage:
      "technician using acoustic leak detection equipment and headphone on tiled bathroom floor",
    dimensions: "1000 × 750px (4:3 ratio)",
    highlights: ["Electronic acoustic survey", "Thermal imaging", "Targeted pipe repairs"],
  },
  {
    id: "blocked-drains",
    title: "Blocked Drains & Pipe Jetting",
    shortTitle: "Drain Cleaning",
    badge: "High-Pressure Jetting",
    summary:
      "Motorized clearing, high-pressure water jetting, and CCTV pipe inspection to restore clear drain flow.",
    overview:
      "Blocked drains create foul smells, slow drainage, and sanitary health hazards. We clear both internal household clogs and stubborn mainline sewer or stormwater obstructions using specialized motorized cables and rotary high-pressure water jetters.",
    practicalExamples: [
      "CCTV drain camera inspections to inspect pipe fractures or root ingress",
      "High-pressure hydro-jetting to clear heavy grease, silt, and scale buildup",
      "Mechanical root cutting for compromised stormwater lines",
      "Unblocking kitchen sinks, shower traps, and toilet waste connections",
    ],
    imagePath: "services/drain-clearing.jpg",
    suggestedImage:
      "professional plumber operating drain snake hydro-jetting equipment near outdoor drain cleanout",
    dimensions: "1000 × 750px (4:3 ratio)",
    highlights: ["CCTV camera diagnosis", "Hydro-jet clearing", "Mainline sewer care"],
  },
  {
    id: "tap-toilet-fixtures",
    title: "Tap, Toilet & Fixture Repairs",
    shortTitle: "Fixture Repairs",
    badge: "Water Efficiency",
    summary:
      "Prompt servicing, cartridge replacements, reseating, and rebuilds for leaking taps, running toilets, and failing valves.",
    overview:
      "Dripping taps and constantly running toilet cisterns waste thousands of liters of clean water and increase utility expenses. We provide precision component repairs, ceramic disc replacements, and modern water-efficient fixture swaps for all bathroom, kitchen, and laundry spaces.",
    practicalExamples: [
      "Repairing persistent toilet cistern run-ons, flush valves, and seals",
      "Ceramic disc mixer tap rebuilding and spindle reseating",
      "Low water-pressure diagnostics on kitchen and vanity basins",
      "Washing machine and dishwasher valve connections and mini-cistern stops",
    ],
    imagePath: "services/fixture-upgrades.jpg",
    suggestedImage:
      "plumber replacing modern kitchen sink faucet mixer tap with adjustable wrench",
    dimensions: "1000 × 750px (4:3 ratio)",
    highlights: ["Ceramic cartridge swaps", "Toilet seal rebuilds", "Pressure tuning"],
  },
  {
    id: "hot-water-systems",
    title: "Hot Water System Services",
    shortTitle: "Hot Water Systems",
    badge: "Gas, Electric & Heat Pump",
    summary:
      "Complete diagnostics, thermostat checks, heating element replacements, and new system installations.",
    overview:
      "A loss of hot water or inconsistent water temperature disrupts the entire household. Our technicians diagnose electric, continuous gas, and heat pump water heaters, replacing worn heating elements, sacrificial anodes, and pressure-relief valves or installing energy-efficient replacements.",
    practicalExamples: [
      "Relighting pilots, gas valve adjustments, and thermocouple testing",
      "Electric heating element and thermostat replacements",
      "Temperature and pressure relief (TPR) valve safety replacements",
      "System sizing and full upgrades to modern high-efficiency units",
    ],
    imagePath: "services/hot-water.jpg",
    suggestedImage:
      "technician checking pressure gauge and valve on residential hot water heater tank",
    dimensions: "1000 × 750px (4:3 ratio)",
    highlights: ["Gas & electric diagnostics", "Safety valve testing", "Unit replacements"],
  },
  {
    id: "installations-upgrades",
    title: "Plumbing Installations & Upgrades",
    shortTitle: "Installations & Upgrades",
    badge: "Renovations & Fitouts",
    summary:
      "Quality rough-in, pipe realignment, backflow prevention, and appliance plumbing for renovations and new additions.",
    overview:
      "Upgrading a bathroom, kitchen, or laundry requires accurate pipework layout, correct fall ratios, and durable materials. We handle full plumbing rough-ins, water filter installations, fridge line water feeds, and dishwasher connections with neat, compliant workmanship.",
    practicalExamples: [
      "Kitchen and bathroom renovation pipework rough-in and fit-off",
      "Installation of multi-stage under-sink drinking water filtration systems",
      "Ice-maker refrigerator water lines and laundry tub realignments",
      "Whole-home pressure limiting valve (PLV) installations to protect fixtures",
    ],
    imagePath: "services/preventative-maintenance.jpg",
    suggestedImage:
      "tidy newly installed plumbing pipework rough-in inside bathroom stud wall frame",
    dimensions: "1000 × 750px (4:3 ratio)",
    highlights: ["Renovation rough-in", "Water filtration feeds", "Pressure protection"],
  },
];
