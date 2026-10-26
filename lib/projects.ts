export type ProjectConcept = {
  slug: string;
  title: string;
  type: string;
  description: string;
  image: string;
  alt: string;
  number: string;
  location: string;
  concept: string;
  introduction: string;
  gallery: { src: string; alt: string }[];
  lenses: {
    label: string;
    title: string;
    description: string;
    details: string[];
  }[];
};

export const projectConcepts: ProjectConcept[] = [
  {
    slug: "soft-modern-living",
    title: "Soft modern living",
    type: "Living area",
    description:
      "A calm palette, generous seating, and tactile finishes create a relaxed centre for everyday life.",
    image: "/images/services/luxe.jpg",
    alt: "Softly lit modern living room",
    number: "01",
    location: "Residential concept",
    concept: "A welcoming living room with a softer edge",
    introduction:
      "A living room should hold the rhythm of real life: slow mornings, busy evenings, and everything in between. This concept explores a warmer, more grounded take on modern living.",
    gallery: [
      { src: "/images/services/luxe.jpg", alt: "Soft contemporary living room" },
      {
        src: "/images/services/dream-haven.jpg",
        alt: "Warm residential interior with natural finishes",
      },
      {
        src: "/images/services/our-services.jpg",
        alt: "Considered interior finish details",
      },
    ],
    lenses: [
      {
        label: "The mood",
        title: "Calm, not cold.",
        description:
          "Soft contrast and warmer neutrals create a room that feels composed without losing its sense of comfort.",
        details: ["Warm neutral base", "Gentle contrast", "Comfort-first atmosphere"],
      },
      {
        label: "The materials",
        title: "Texture does the talking.",
        description:
          "Pair tactile upholstery and natural-looking timber with a restrained stone accent to give the palette depth.",
        details: ["Natural timber tones", "Soft woven textures", "Quiet stone accents"],
      },
      {
        label: "The layout",
        title: "Make room to settle in.",
        description:
          "Bring seating into conversation, preserve clear paths through the room, and let daylight do more of the work.",
        details: ["Conversation-led seating", "Clear circulation", "Daylight-first planning"],
      },
    ],
  },
  {
    slug: "a-home-that-gathers",
    title: "A home that gathers",
    type: "Residential interior",
    description:
      "An inviting direction that brings natural tones and comfortable proportions into balance.",
    image: "/images/services/dream-haven.jpg",
    alt: "Warm contemporary residential interior",
    number: "02",
    location: "Residential concept",
    concept: "A family home made for coming together",
    introduction:
      "The best gathering spaces make connection feel effortless. This concept looks at how warm materials, comfortable proportions, and an open feel can help a home bring people together.",
    gallery: [
      {
        src: "/images/services/dream-haven.jpg",
        alt: "Comfortable modern home interior",
      },
      { src: "/images/services/luxe.jpg", alt: "Layered contemporary living space" },
      {
        src: "/assets/villa-hero-1.jpg",
        alt: "Open and inviting contemporary home",
      },
    ],
    lenses: [
      {
        label: "The mood",
        title: "Open, easy, inviting.",
        description:
          "A relaxed visual rhythm makes everyday family life feel considered without making the room precious.",
        details: ["Easy-going character", "Warm natural palette", "Room for togetherness"],
      },
      {
        label: "The materials",
        title: "Natural tones, layered well.",
        description:
          "Use wood, soft fabrics, and durable finishes to balance a welcoming look with day-to-day practicality.",
        details: ["Wood-inspired finishes", "Tactile soft furnishings", "Practical surfaces"],
      },
      {
        label: "The layout",
        title: "Together, with room to move.",
        description:
          "Give shared activities a natural centre while keeping walkways and quieter corners in mind.",
        details: ["A clear social centre", "Easy movement through the room", "Flexible corners"],
      },
    ],
  },
  {
    slug: "warmth-in-the-details",
    title: "Warmth in the details",
    type: "Material palette",
    description:
      "Layered finishes and subtle contrast give a simple interior depth and character.",
    image: "/images/services/our-services.jpg",
    alt: "Interior material palette and thoughtful detailing",
    number: "03",
    location: "Interior concept",
    concept: "A material story with warmth and restraint",
    introduction:
      "A considered room is often shaped by what you notice slowly. This concept explores how a thoughtful mix of finishes can bring quiet character to a clean, simple interior.",
    gallery: [
      {
        src: "/images/services/our-services.jpg",
        alt: "Refined interior materials and detailing",
      },
      { src: "/images/services/luxe.jpg", alt: "Living space with layered finishes" },
      {
        src: "/images/services/dream-haven.jpg",
        alt: "Warm interior with a balanced material palette",
      },
    ],
    lenses: [
      {
        label: "The mood",
        title: "Understated, with a little soul.",
        description:
          "Keep the overall composition simple, then use a few tactile moments to make the space feel personal.",
        details: ["Quiet visual rhythm", "Personal character", "Subtle focal moments"],
      },
      {
        label: "The materials",
        title: "Let the finishes find balance.",
        description:
          "Layer matte and softly reflective surfaces with warm grain and tactile fabrics for a nuanced finish.",
        details: ["Matte and soft-sheen finishes", "Warm grain", "Tactile fabric accents"],
      },
      {
        label: "The layout",
        title: "A simple canvas for detail.",
        description:
          "Keep the larger forms clear and uncluttered so the material choices can be appreciated up close.",
        details: ["Clean overall forms", "Intentional focal points", "Room to appreciate detail"],
      },
    ],
  },
  {
    slug: "a-fresh-perspective",
    title: "A fresh perspective",
    type: "Home renovation",
    description:
      "A brighter, more connected approach to the rooms where daily routines unfold.",
    image: "/assets/villa-hero-1.jpg",
    alt: "Contemporary home interior with a bright, open feel",
    number: "04",
    location: "Residential concept",
    concept: "A brighter flow for everyday routines",
    introduction:
      "When daily routines feel crowded, a fresh look at flow can change how a home feels. This concept considers light, connection, and the practical moments between rooms.",
    gallery: [
      {
        src: "/assets/villa-hero-1.jpg",
        alt: "Contemporary home with a bright open feel",
      },
      { src: "/images/services/dream-haven.jpg", alt: "Warm and welcoming home interior" },
      { src: "/images/services/luxe.jpg", alt: "Light-filled contemporary living space" },
    ],
    lenses: [
      {
        label: "The mood",
        title: "Lighter, with a sense of ease.",
        description:
          "A bright palette and connected sightlines can help everyday spaces feel more open and relaxed.",
        details: ["Bright visual palette", "Connected sightlines", "An easier daily rhythm"],
      },
      {
        label: "The materials",
        title: "Keep it light and lived-in.",
        description:
          "Blend lighter finishes with durable, easy-care surfaces that suit the way the home is used.",
        details: ["Light-toned finishes", "Easy-care surfaces", "Warm balancing details"],
      },
      {
        label: "The layout",
        title: "Let the day move naturally.",
        description:
          "Think through the everyday routes between spaces and look for ways to make light and movement feel uninterrupted.",
        details: ["Clear everyday routes", "More connected spaces", "A thoughtful use of daylight"],
      },
    ],
  },
];
