import {
  BarChart3,
  Building2,
  Calculator,
  Lightbulb,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export const aboutContent = {
  hero: {
    eyebrow: "ABOUT THERMAL WALL TECHNOLOGY",
    title: ["Nearly a decade of", "reimagining what a", "building can do."],
    body: "Thermal Wall Technology (TWT) is a patented concrete building system that integrates structure, exterior insulation, thermal mass, hydronic distribution, and finish support—so the building itself stores and delivers thermal energy.",
    proofs: [
      "Nearly a decade of founder-led development",
      "Patented in the U.S., Canada, and the U.K.",
      "Preparing for a fully instrumented demonstration—the next milestone",
    ],
  },
  story: [
    "What began as a mission of Mike and his wife, Aprile, to provide a home for his quadriplegic sister ultimately sparked a structural thermodynamic breakthrough.",
    "Living in a tornado-prone area, Mike selected Insulated Concrete Form (ICF) construction for its structural strength. During installation, he added hydronic floor heating—and on a hunch, embedded hydronic tubing directly into the concrete walls.",
    "Initial testing revealed a critical flaw: traditional ICF actually insulated the concrete from the interior, rendering standard mass inefficient for heat storage.",
    "Refusing to accept the limitation, Mike spent years modeling and testing thermal dynamics until he unlocked the precise mechanism needed to actively charge structural mass.",
    "Seeking rigorous validation, Mike brought his findings to the University of Southern Indiana. Their independent engineering analysis produced virtually identical results—confirming the breakthrough and marking the official birth of Thermal Wall Technology.",
  ],
  milestones: [
    [
      Lightbulb,
      "Practical insight",
      "Hydronic tubing embedded in concrete raised the initial thermal-mass question.",
    ],
    [
      Calculator,
      "Founder-led modeling",
      "Years of heat-loss calculations, system scenarios, climate studies, and equipment modeling.",
    ],
    [
      Building2,
      "Independent analysis",
      "University of Southern Indiana engineering analysis closely reproduced the relevant calculation.",
    ],
    [
      Wrench,
      "System evolution",
      "The concept advanced from the earlier wall approach to the current patented dry-stack ICB design.",
    ],
    [
      ShieldCheck,
      "Patent protection",
      "Granted patent protection in the United States, Canada, and the United Kingdom.",
    ],
    [
      BarChart3,
      "Demonstration next",
      "Preparing a fully instrumented building to measure real performance.",
    ],
  ] as const,
  assembly: [
    [
      "Structural system",
      "Continuous concrete construction built for strength and durability.",
    ],
    [
      "Exterior insulation",
      "Keeps the thermal mass coupled to the interior for maximum effectiveness.",
    ],
    [
      "Thermal storage",
      "Concrete absorbs, stores, and releases sensible heat over hours and days.",
    ],
    [
      "Hydronic distribution",
      "Embedded tubing actively charges or cools the mass using low-temperature water.",
    ],
    [
      "Finish attachment",
      "Integrated grommet and ribbing system supports exterior finishes.",
    ],
  ] as const,
  inventor: [
    [
      "Thermal Wall Technology",
      "Founder and inventor. Nearly a decade developing a patented building system.",
    ],
    [
      "SafeEVAC",
      "Founder and Principal Inventor. Threat identification and intelligent evacuation system.",
    ],
    [
      "Sharpening technology",
      "Patented knife-sharpening system that rethinks edge geometry and mechanics.",
    ],
  ] as const,
  patents: [
    ["🇺🇸", "United States", "U.S. Reissue Patent", "RE50,072 E1", "Granted"],
    ["🇨🇦", "Canada", "Canadian Patent", "2,966,426", "Granted"],
    ["🇬🇧", "United Kingdom", "UK Patent", "GB2592471", "Granted"],
  ] as const,
  founderEngineering: [
    "Heat-loss calculations and modeling",
    "Multiple system and climate scenarios",
    "Equipment and control strategy studies",
    "Iterative system development",
    "Designed for low-temperature operation",
  ],
  universityAnalysis: [
    "One-dimensional transient wall model",
    "Compared one-sided versus two-sided insulated walls",
    "Relevant heat-flux calculation closely matched the founder’s work",
    "Defined scope: wall thermal storage and heat delivery",
  ],
} as const;
