import { business } from "./business";
import type { ContentConfig } from "@/packages/website-engine/config/types";

export const content: ContentConfig = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
  ],
  hero: {
    eyebrow: `${business.city} remodels, additions, ADUs`,
    title: "Contractor website hero",
    headline: "Remodeling work that starts with a real site visit.",
    subheadline:
      "Older kitchens in East Sac. Bath updates in Carmichael. Garage conversions in Elk Grove. We look at the house first, talk through the rough spots, and give you a written next step.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2400&q=90",
    primaryCTA: { label: "Get a Free Estimate", href: "#estimate" },
    secondaryCTA: { label: "View Our Work", href: "#projects" },
    trustBadges: [
      business.licenseInfo,
      "Written scopes before work starts",
      "Job-site cleanup is part of the plan",
      `${business.averageRating.toFixed(1)} stars from ${business.reviewsCount}+ reviews`,
    ],
    stats: [
      { label: "Average rating", value: `${business.averageRating.toFixed(1)} / 5` },
      { label: "Years in business", value: `${business.yearsInBusiness}+` },
      { label: "Common jobs", value: "Kitchens, baths, ADUs" },
    ],
    estimatePanel: {
      eyebrow: "What happens next",
      title: "No sales pitch on the first call.",
      text: "We ask where the home is, what is bugging you, and whether permits or structural work may be involved.",
    },
  },
  services: {
    eyebrow: "Typical work",
    title: "Projects we see every month",
    text: "Most calls are not blank-slate dream projects. They are leaky showers, cramped kitchens, old wiring surprises, permit questions, and families trying to stay in the house while work happens.",
    cta: { label: "Talk through your project", href: "#estimate" },
    items: [
      {
        title: "Kitchen Remodeling",
        description: "Galley kitchens, wall removals, cabinet swaps, better lighting, and practical storage.",
        details:
          "A kitchen usually needs early decisions on cabinets, electrical, plumbing, flooring transitions, and where you will cook while the room is down.",
        story: "Common in Land Park and East Sac homes where the kitchen was added onto or remodeled years ago.",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=85",
      },
      {
        title: "Bathroom Remodeling",
        description: "Tub-to-shower changes, tile repair, vanities, ventilation, and waterproofing done carefully.",
        details:
          "Bathrooms are small, but the details matter. We look for water damage, old valves, fan routing, subfloor issues, and tile layout before quoting.",
        story: "Homeowners usually call after a leak, cracked grout, or a bathroom that has not been touched since the 1980s.",
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=85",
      },
      {
        title: "Home Additions",
        description: "Bedroom suites, family rooms, larger kitchens, and practical square footage planning.",
        details:
          "Additions need more planning than a cosmetic remodel. We talk about setbacks, roof tie-ins, foundation, HVAC, electrical load, and permit timing early.",
        story: "Most addition conversations start with a growing family, an aging parent, or a home office that became permanent.",
        image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=85",
      },
      {
        title: "Whole Home Remodeling",
        description: "Flooring, kitchens, baths, trim, lighting, paint, and repairs handled in the right order.",
        details:
          "Whole-home work needs a sequence. We help decide what happens first, what can wait, and how to avoid redoing finished work later.",
        story: "A common fit for homes bought in Arden-Arcade, Tahoe Park, and Citrus Heights that need several updates at once.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
      },
      {
        title: "Roofing",
        description: "Roof repairs and replacements when leaks, age, or inspection findings force the issue.",
        details:
          "Roof scopes are checked for decking, flashing, ventilation, gutters, and cleanup. We explain what is urgent and what is not.",
        story: "Many roof calls come after winter rain, insurance questions, or a buyer inspection.",
        image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1200&q=85",
      },
      {
        title: "ADU / Garage Conversion",
        description: "Garage conversions and backyard units for family, rental income, or a separate work space.",
        details:
          "ADUs bring permit, utility, insulation, fire separation, parking, and access questions. We sort those out before pricing finishes.",
        story: "Sacramento homeowners often ask about ADUs for parents, adult kids, or a more useful garage.",
        image: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?auto=format&fit=crop&w=1200&q=85",
      },
    ],
  },
  whyChooseUs: {
    eyebrow: "How we run jobs",
    title: "Small details that prevent big headaches",
    text:
      "A remodel can be disruptive. The boring parts matter: who opens the house, where materials go, when water is shut off, and how dust gets contained.",
    reasons: [
      { title: "License and insurance", text: `${business.licenseInfo}. We can provide current details before work starts.` },
      { title: "Written estimate notes", text: "You get the scope in writing, including assumptions and items that still need owner selections." },
      { title: "Permit discussion early", text: "We flag likely permit items before you are deep into design or ordering materials." },
      { title: "Daily cleanup standard", text: "Tools and debris are not left wherever they land. The job should be livable when we leave." },
      { title: "Direct communication", text: "You know who to call. We do not make homeowners chase three different people for one answer." },
      { title: "Warranty wording", text: "Workmanship support is explained in plain language at the end of the job." },
    ],
  },
  localProof: {
    eyebrow: "Local proof",
    title: "Sacramento homes have their own issues",
    text:
      "A remodel in Midtown is not the same as a newer tract home in Elk Grove. We plan for the things that come up here.",
    details: [
      {
        title: "Older-home surprises",
        text: "Plaster walls, uneven framing, old galvanized lines, undersized electrical, and past DIY repairs are common in East Sac, Land Park, Curtis Park, and Midtown.",
      },
      {
        title: "Permit familiarity",
        text: "Kitchens, baths, additions, and ADUs can trigger different permit questions. We help separate simple updates from work that needs drawings or inspections.",
      },
      {
        title: "Material planning",
        text: "Tile, cabinets, windows, and roofing materials can delay a job if they are ordered late. We push selections early, even when that part is not exciting.",
      },
      {
        title: "Realistic timelines",
        text: "A bath can be a few weeks. Kitchens and additions take longer, especially with permits, inspections, custom cabinets, or hidden repairs.",
      },
    ],
  },
  gallery: {
    eyebrow: "Project notes",
    title: "A few jobs that look familiar",
    text: "These are written like job notes because that is how homeowners usually talk about the work: what was wrong, what changed, and what had to be watched.",
    items: [
      {
        title: "Open Concept Kitchen Remodel",
        city: "Sacramento",
        serviceType: "Kitchen Remodeling",
        description: "Removed a tight peninsula, updated lighting, and kept the flooring transition clean where the old dining room started.",
        image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1300&q=85",
      },
      {
        title: "Primary Bathroom Upgrade",
        city: "Folsom",
        serviceType: "Bathroom Remodeling",
        description: "Replaced a tub that was not being used, corrected old plumbing access, and added a fan that actually vented outside.",
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1300&q=85",
      },
      {
        title: "Family Room Addition",
        city: "Elk Grove",
        serviceType: "Home Additions",
        description: "Added usable square footage without making the roofline look like an afterthought. Permit timing drove the schedule.",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1300&q=85",
      },
    ],
  },
  leadCapture: {
    eyebrow: "Start here",
    title: "Tell us what is going on with the house",
    text: "You do not need drawings or perfect measurements. A short note about the problem, the address area, and your rough timing is enough to start.",
    highlights: ["Free first conversation", "Written follow-up", "Permit questions flagged", "Cleanup plan discussed"],
    form: {
      nameLabel: "Name",
      phoneLabel: "Phone",
      emailLabel: "Email",
      projectTypeLabel: "Project type",
      messageLabel: "What are you trying to fix or build?",
      submitLabel: "Ask for an estimate",
      loadingLabel: "Sending...",
      successTitle: "Request Received",
      successMessage: "We will be in touch within 24 hours.",
      requiredNameError: "Please enter your name.",
    },
  },
  testimonials: {
    eyebrow: "Reviews",
    title: "What homeowners mention afterward",
    text: `${business.averageRating.toFixed(1)} average rating from ${business.reviewsCount}+ local reviews. These are written in the plain style people actually use after a project.`,
    items: [
      {
        name: "Michael Thompson",
        city: "Elk Grove",
        serviceType: "Kitchen Remodeling",
        rating: 5,
        text:
          "We had an old kitchen with a weird corner cabinet and not enough outlets. They caught a couple things before demo that would have cost us later. The job took a little longer than we hoped, but we knew why.",
      },
      {
        name: "Sarah Mitchell",
        city: "Folsom",
        serviceType: "Bathroom Remodeling",
        rating: 5,
        text:
          "The bathroom was our only shower, so timing mattered. They were honest about when we would lose water and cleaned up each day. That made the project much less stressful.",
      },
      {
        name: "David Chen",
        city: "Sacramento",
        serviceType: "Whole Home Remodeling",
        rating: 5,
        text:
          "We bought a house that needed a lot. Some of the old work behind the walls was not great. They showed us the issue, priced the change, and did not make it weird.",
      },
    ],
  },
  serviceAreas: {
    eyebrow: "Where we work",
    title: `Serving ${business.city} and nearby cities`,
    text: "Most jobs are within a practical drive of Sacramento so crews can show up on time, handle inspections, and get back quickly when a detail needs attention.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions homeowners ask before hiring",
    items: [
      {
        question: "Do you offer free estimates?",
        answer:
          "Yes. The first estimate is free. If the project needs drawings, engineering, or a detailed design package, we will say that before asking you to pay for anything.",
      },
      {
        question: "How long before work can start?",
        answer:
          "It depends on the scope and material lead times. A small repair can sometimes start sooner. Kitchens, additions, and ADUs usually need selections, permits, and scheduling before anyone starts opening walls.",
      },
      {
        question: "Do I need permits?",
        answer:
          "Sometimes. Cosmetic swaps may not need much. Moving plumbing, electrical, walls, windows, roof structure, additions, and ADUs usually need permit review. We flag that early so it is not a surprise later.",
      },
      {
        question: "Who pulls the permits?",
        answer:
          "For work we are responsible for, we help coordinate the permit path and make sure the right party is listed. If drawings or engineering are needed, we explain that before the project is priced like a simple remodel.",
      },
      {
        question: "Can we live in the house during the remodel?",
        answer:
          "Usually, yes, but it depends on the room. Kitchens and primary baths are the hardest. We talk through water shutoffs, dust control, temporary access, pets, kids, and where materials will be stored.",
      },
      {
        question: "What happens if you find dry rot or old bad work?",
        answer:
          "We stop, show you what we found, explain the repair, and price the change before covering it up. Dry rot, old plumbing, and questionable framing are common in older Sacramento-area homes.",
      },
      {
        question: "How are change orders handled?",
        answer:
          "Changes are written down with the added cost or schedule impact before the work moves forward. Some changes come from owner selections. Some come from hidden conditions after demo.",
      },
      {
        question: "Do you clean up daily?",
        answer:
          "Yes. A remodel is still messy, but tools, trash, and walk paths should be handled before the crew leaves. Dust control and debris staging are part of the job plan.",
      },
      {
        question: "What warranty do you provide?",
        answer:
          "We explain workmanship support in plain language at closeout. Product warranties depend on the manufacturer, and we keep those separate from labor questions.",
      },
      {
        question: "How long does a remodel take?",
        answer:
          "A straightforward bath may be a few weeks. Kitchens often run longer because cabinets, counters, plumbing, electrical, and inspections have to line up. Additions and ADUs depend heavily on permits and material lead times.",
      },
      {
        question: "Are you licensed and insured?",
        answer: "Yes. We can provide current license and insurance details before work starts. You should ask any contractor for this.",
      },
      {
        question: "What areas do you serve?",
        answer: `We work in ${business.serviceAreas.join(", ")} and nearby Sacramento neighborhoods when the project is a good fit.`,
      },
    ],
  },
  footer: {
    cta: { label: "Get a Free Estimate", href: "#estimate" },
  },
};
