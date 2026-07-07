// ===================================================================
// SITE CONFIG — single source of truth for all editable content.
// Replace any value below to rebrand the template.
// ===================================================================

export const siteConfig = {
  coach: {
    name: "Alex Rivera",
    initials: "AR",
    tagline: "Elite Performance Coach",
    email: "hello@alexrivera.coach",
    phone: "+1 (555) 010-2024",
    location: "Los Angeles, CA",
  },

  nav: {
    links: [
      { label: "Results", href: "#results" },
      { label: "Coaching", href: "#services" },
      { label: "Process", href: "#process" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: { label: "Apply Now", href: "#apply" },
  },

  hero: {
    eyebrow: "12 YEARS OF EXPERIENCE · 500+ TRANSFORMATIONS",
    headline: "Build the body\nyou were\nmeant to have",
    subheadline:
      "1-on-1 coaching for ambitious people who are done settling. Custom training, nutrition built around your life, and the accountability to actually follow through.",
    primaryCta: { label: "Book a Free Call", href: "#apply" },
    secondaryCta: { label: "See Transformations", href: "#results" },
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Coach training a client in a modern gym",
    badges: ["NASM Certified", "Precision Nutrition L2", "As seen in Men's Health"],
  },

  stats: [
    { value: "500+", label: "Clients coached" },
    { value: "4.9★", label: "Avg client rating" },
    { value: "12 yrs", label: "Coaching experience" },
    { value: "94%", label: "Goal completion rate" },
  ],

  transformations: [
    {
      name: "Marcus T.",
      timeframe: "16 weeks",
      result: "Lost 38 lbs and built visible muscle while traveling for work.",
      before:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80",
      after:
        "https://images.unsplash.com/photo-1583454152898-6f6a3afae6c6?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Priya K.",
      timeframe: "20 weeks",
      result: "Dropped 24 lbs, doubled her strength, and finally enjoys training.",
      before:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80",
      after:
        "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Jordan W.",
      timeframe: "12 weeks",
      result: "Added 14 lbs of lean mass for his first physique show.",
      before:
        "https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?auto=format&fit=crop&w=600&q=80",
      after:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
    },
  ],

  transformationsSection: {
    eyebrow: "Real Results",
    title: "Transformations that\nactually last.",
    description:
      "Drag the slider on any card to see the before and after. Every client is different. Every result is earned.",
    beforeLabel: "BEFORE",
    afterLabel: "AFTER",
  },

  services: [
    {
      title: "1-on-1 Coaching",
      description: "Direct access to me via WhatsApp. Programs adjusted weekly based on your data.",
      icon: "Dumbbell",
    },
    {
      title: "Custom Nutrition",
      description: "Macros, meal structures, and habit systems engineered around your real life.",
      icon: "Apple",
    },
    {
      title: "Personalised Training",
      description:
        "Programs built for your equipment, schedule, injury history, and experience level.",
      icon: "Activity",
    },
    {
      title: "Weekly Check-Ins",
      description: "Video reviews of your form, metrics, and progress every single week.",
      icon: "MessageSquare",
    },
    {
      title: "Accountability System",
      description:
        "Daily check-ins, streak tracking, and the structure to actually stay consistent.",
      icon: "Target",
    },
    {
      title: "Lifestyle Integration",
      description: "Sleep, stress, travel, social life — built into the plan, not against it.",
      icon: "Heart",
    },
  ],

  process: [
    {
      step: "01",
      title: "Apply",
      description: "Submit the form so I can understand your goals, history, and lifestyle.",
    },
    {
      step: "02",
      title: "Consultation",
      description: "Free 30-minute call to map out the right plan and see if we're a fit.",
    },
    {
      step: "03",
      title: "Custom Plan",
      description: "Get your fully personalised training, nutrition, and accountability system.",
    },
    {
      step: "04",
      title: "Results",
      description: "Weekly check-ins, real-time adjustments, and progress you can measure.",
    },
  ],

  testimonials: [
    {
      quote:
        "I've worked with three coaches before. None of them came close. The structure, the accountability, the actual care — it's a different level.",
      name: "Jeremy Jones",
      meta: "Lost 42 lbs · 10 months",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    },
    {
      quote:
        "I finally understand my body. The plan fit my life instead of replacing it. Down 28 lbs and stronger than I've ever been.",
      name: "Amelia Richards",
      meta: "Down 28 lbs · 8 months",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    },
    {
      quote:
        "The weekly check-ins kept me honest. I built habits I genuinely enjoy. Best money I've spent on myself, by far.",
      name: "Mike Addams",
      meta: "Body recomp · 6 months",
      avatar:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=200&q=80",
    },
    {
      quote:
        "Travel constantly for work and the plan adapted with me every week. First time I've stayed consistent in years.",
      name: "Sarah Chen",
      meta: "Strength + recomp · 9 months",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    },
  ],

  coachSection: {
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
    title: "Hi, I'm Alex.",
    bio: [
      "I've spent the last twelve years coaching people who don't have time for guesswork — executives, athletes, parents, founders.",
      "My approach is simple: build a plan around your real life, measure what matters, and adjust every week. No crash diets, no punishment workouts, no 'just trust the process.'",
      "If you want a coach who actually pays attention, I'd love to work with you.",
    ],
    achievements: [
      "NASM-CPT, CES, PES Certified",
      "Precision Nutrition Level 2 Coach",
      "Featured: Men's Health, GQ, Runner's World",
      "500+ clients across 14 countries",
    ],
  },

  pricing: {
    note: "All plans include weekly check-ins, app access, and direct messaging.",
    plans: [
      {
        name: "Starter",
        price: "$249",
        cadence: "/month",
        description: "Structured training with light accountability — ideal if you're self-driven.",
        features: [
          "Custom training program",
          "Habit & nutrition framework",
          "Bi-weekly check-ins",
          "App access",
        ],
        cta: "Choose Starter",
        featured: false,
      },
      {
        name: "Premium",
        price: "$449",
        cadence: "/month",
        description: "The full system. Built for serious transformation with weekly support.",
        features: [
          "Everything in Starter",
          "Custom nutrition + macros",
          "Weekly video check-ins",
          "Direct WhatsApp access",
          "Form reviews",
        ],
        cta: "Choose Premium",
        featured: true,
      },
      {
        name: "VIP",
        price: "Custom",
        cadence: "",
        description: "Concierge coaching for executives, athletes, and competitors.",
        features: [
          "Everything in Premium",
          "24/7 direct access",
          "In-person sessions (LA)",
          "Bloodwork & sleep analysis",
          "Travel & event programming",
        ],
        cta: "Apply for VIP",
        featured: false,
      },
    ],
  },

  faqs: [
    {
      q: "How is this different from a generic online program?",
      a: "Everything is built around you — your schedule, equipment, history, and goals. Programs are adjusted every week based on your data, not handed out as a static PDF.",
    },
    {
      q: "I travel a lot / have limited equipment. Will this work?",
      a: "Yes. Programs are built around the equipment you actually have access to and adjusted in real time when your life changes.",
    },
    {
      q: "Do I need to follow a strict diet?",
      a: "No. We build flexible nutrition systems around food you enjoy. Sustainability beats severity every time.",
    },
    {
      q: "What's the minimum commitment?",
      a: "Most clients stay 6–12 months because that's how long real change takes. There are no long-term contracts — you can pause or cancel any time.",
    },
    {
      q: "What if I'm a complete beginner?",
      a: "Perfect. The biggest gains come when we build a strong foundation early. Every program is taught from first principles.",
    },
  ],

  finalCta: {
    eyebrow: "READY?",
    headline: "Your next chapter\nstarts with one call.",
    description:
      "Free, no-pressure consultation. We'll map out exactly what it would take to get you to your goal.",
    cta: { label: "Book Your Free Call", href: "#apply" },
  },

  footer: {
    blurb: "Premium 1-on-1 fitness coaching for people who are done settling.",
    social: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "YouTube", href: "https://youtube.com" },
      { label: "TikTok", href: "https://tiktok.com" },
      { label: "X / Twitter", href: "https://twitter.com" },
    ],
    columns: [
      {
        title: "Coaching",
        links: [
          { label: "1-on-1 Coaching", href: "#services" },
          { label: "Nutrition", href: "#services" },
          { label: "Pricing", href: "#pricing" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "#coach" },
          { label: "Results", href: "#results" },
          { label: "Contact", href: "#apply" },
        ],
      },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
