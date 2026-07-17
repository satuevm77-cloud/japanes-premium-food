export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Reservation", href: "/reservation" },
  { label: "Contact", href: "/contact" }
];

const image = (id: string, width = 1400, height = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&h=${height}&q=82`;

export const imagery = {
  hero: image("photo-1752135534175-44aa59a1bb50", 2200, 1400),
  sushi: image("photo-1770966666358-37668256a29f", 1300, 1000),
  sashimi: image("photo-1772285283419-b34f42b4a4df", 1300, 1000),
  sake: image("photo-1626379907753-406934326e2c", 1200, 1000),
  bar: image("photo-1655629273668-46a2f1c335ba", 1200, 1000),
  exterior: image("photo-1753927159630-3be578f8bc94", 1400, 1000),
  omakase: image("photo-1768614437681-c77935edb7f8", 1300, 1000)
};

export const menuCategories = [
  {
    title: "Sushi",
    description: "Hand-shaped nigiri and maki prepared with quiet precision.",
    items: [
      {
        name: "Omakase Nigiri",
        description: "Chef's selection of seasonal fish, warm rice, brushed soy.",
        price: "$68",
        image: imagery.sushi
      },
      {
        name: "Bluefin Toro",
        description: "Silken tuna belly, fresh wasabi, aged nikiri glaze.",
        price: "$42",
        image: imagery.sashimi
      },
      {
        name: "Snow Crab Temaki",
        description: "Hand roll with yuzu kosho, crisp nori and caviar.",
        price: "$28",
        image: imagery.omakase
      }
    ]
  },
  {
    title: "Main Course",
    description: "Charcoal, steam and umami layered in a modern kaiseki rhythm.",
    items: [
      {
        name: "Miso Black Cod",
        description: "72-hour saikyo miso cure, grilled shishito, sudachi.",
        price: "$54",
        image: imagery.sashimi
      },
      {
        name: "Wagyu Robata",
        description: "A5 wagyu, binchotan smoke, sansho salt, mountain herbs.",
        price: "$96",
        image: imagery.hero
      },
      {
        name: "Kinoko Donabe",
        description: "Claypot rice, wild mushrooms, truffle dashi and nori.",
        price: "$38",
        image: imagery.exterior
      }
    ]
  },
  {
    title: "Drinks",
    description: "Rare sake, Japanese whisky and tea pairings served with restraint.",
    items: [
      {
        name: "Junmai Daiginjo Flight",
        description: "Three chilled pours selected for texture and finish.",
        price: "$36",
        image: imagery.sake
      },
      {
        name: "Matcha Highball",
        description: "Japanese whisky, ceremonial matcha and sparkling mineral water.",
        price: "$24",
        image: imagery.bar
      },
      {
        name: "Gyokuro Ceremony",
        description: "Low-temperature brew, porcelain service and seasonal sweet.",
        price: "$22",
        image: imagery.sake
      }
    ]
  }
];

export const galleryImages = [
  { src: imagery.hero, alt: "Sushi chefs preparing dinner service", size: "large" },
  { src: imagery.sushi, alt: "Premium nigiri selection", size: "tall" },
  { src: imagery.sake, alt: "Japanese sake service", size: "wide" },
  { src: imagery.sashimi, alt: "Fresh sashimi on a dark plate", size: "regular" },
  { src: imagery.bar, alt: "Japanese bar detail", size: "regular" },
  { src: imagery.exterior, alt: "Japanese restaurant exterior", size: "tall" },
  { src: imagery.omakase, alt: "Omakase counter detail", size: "wide" }
];

export const reviews = [
  {
    name: "Claire Watanabe",
    country: "Japan",
    rating: 5,
    review:
      "Every course felt composed rather than served. The room, the pacing and the fish quality were exceptional."
  },
  {
    name: "Marcus Lee",
    country: "Singapore",
    rating: 5,
    review:
      "A confident luxury experience for business guests. Quiet, precise and memorable without feeling formal for its own sake."
  },
  {
    name: "Elena Rossi",
    country: "Italy",
    rating: 5,
    review:
      "The tasting menu had the elegance of a private ceremony. The sake pairing was the finest I have had outside Tokyo."
  },
  {
    name: "David Laurent",
    country: "France",
    rating: 5,
    review:
      "Beautiful ingredients, restrained service and a cinematic dining room. It has the calm confidence of a serious restaurant."
  }
];

export const contactDetails = {
  address: "8 Ginza Lane, Central District, Tokyo",
  phone: "+81 3 0000 2048",
  email: "reservations@japanespremiumfood.com",
  hours: [
    "Tuesday - Thursday: 18:00 - 23:00",
    "Friday - Saturday: 17:30 - 00:00",
    "Sunday: 17:30 - 22:00",
    "Monday: Private events only"
  ],
  socials: ["Instagram", "Facebook", "X"]
};
