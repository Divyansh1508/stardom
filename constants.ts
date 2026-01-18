import { Product, Slide } from "./types";

export const CATEGORIES = ["Fans", "Geysers", "roomHeaters"] as const;

export const HERO_SLIDES: Slide[] = [
  {
    id: 1,
    type: "video",
    src: "/stardomProduct-20250823T125051Z-1-001/vid.mp4",
    title: "The Future of Living",
    subtitle:
      "Experience state-of-the-art appliances designed for the modern home.",
    ctaText: "Explore Collection",
  },
  {
    id: 2,
    type: "image",
    src: "/stardomProduct-20250823T125051Z-1-001/desktop1.jpeg",
    title: "Culinary Excellence",
    subtitle: "Professional grade kitchenware for the home chef.",
    ctaText: "Shop Kitchen",
  },
  {
    id: 3,
    type: "image",
    src: "/stardomProduct-20250823T125051Z-1-001/desktop2.jpeg",
    title: "Smart Simplicity",
    subtitle: "Connected devices that make life effortless.",
    ctaText: "View Smart Home",
  },
];

export const PRODUCTS: Product[] = [
  // Fans Category
  {
    id: "fan-1",
    name: "BLDC Blue Cactus",
    category: "Fans",
    price: 2999.0,
    image:
      "/stardomProduct-20250823T125051Z-1-001/stardomProduct/fan/BLDCBLUECACTOUS/cactus-with-remote-27-1-ceiling-fan-1200-stardom-original-imahajezpqzhbfyz.jpg",
    description:
      "Energy efficient BLDC ceiling fan with remote control and modern cactus design.",
    rating: 4.5,
    features: [
      "BLDC Motor",
      "Remote Control",
      "Energy Saving",
      "Silent Operation",
    ],
  },
  {
    id: "fan-2",
    name: "BLDCSB",
    category: "Fans",
    price: 3299.0,
    image:
      "/stardomProduct-20250823T125051Z-1-001/stardomProduct/fan/BLDCSB/sparkle-with-led-light-27-1-ceiling-fan-1200-stardom-original-imah2vzxqezbzbjx.jpg",
    description: "Premium BLDC fan with LED lights and superior air delivery.",
    rating: 4.6,
    features: ["LED Lights", "BLDC Motor", "Remote Control", "High Speed"],
  },
  {
    id: "fan-3",
    name: "Aura Ivory",
    category: "Fans",
    price: 2799.0,
    image:
      "/stardomProduct-20250823T125051Z-1-001/stardomProduct/fan/auraivery/deecee-series-24-hi-speed-65-1-ceiling-fan-600-stardom-original-imah4kyh5ny3gyxy.jpg",
    description: "Elegant ivory colored fan with ultra-high speed performance.",
    rating: 4.4,
    features: ["24 Inch", "High Speed", "Ivory Finish", "Premium Design"],
  },
  {
    id: "fan-4",
    name: "aurasb",
    category: "Fans",
    price: 2899.0,
    image:
      "/stardomProduct-20250823T125051Z-1-001/stardomProduct/fan/aurasb/deecee-series-ultra-high-speed-24-inch-65-1-ceiling-fan-600-original-imah4kyg5qzhsxhe.jpg",
    description:
      "Ultra high speed fan with smoke brown finish for modern interiors.",
    rating: 4.5,
    features: ["Ultra High Speed", "24 Inch", "Smoke Brown", "Premium Build"],
  },
  {
    id: "fan-5",
    name: "eagleblue",
    category: "Fans",
    price: 3199.0,
    image:
      "/stardomProduct-20250823T125051Z-1-001/stardomProduct/fan/eagleblue/eagle-ultra-high-speed-24-inch-50-0-1-ceiling-fan-600-0-stardom-original-imah2ts2bvbhr6gp.jpg",
    description: "Ultra high speed eagle series fan with blue finish.",
    rating: 4.7,
    features: ["Ultra High Speed", "24 Inch", "Blue Finish", "Eagle Series"],
  },
  {
    id: "fan-6",
    name: "Eagle Deco Blue White",
    category: "Fans",
    price: 3499.0,
    image:
      "/stardomProduct-20250823T125051Z-1-001/stardomProduct/fan/eagle deco blue white/eagle-deco-ultra-high-speed-white-blue-24-inch-600-mm-4-blade-original-imaha55xbmggypgx.jpg",
    description: "Premium decorative fan with blue and white finish.",
    rating: 4.8,
    features: ["Decorative Design", "4 Blade", "Blue White", "Premium Finish"],
  },
  {
    id: "fan-7",
    name: "Eagle Deco MB",
    category: "Fans",
    price: 3599.0,
    image:
      "/stardomProduct-20250823T125051Z-1-001/stardomProduct/fan/eagle deco mb/eagle-deco-ultra-high-speed-24-inch-met-blue-55-1-ceiling-fan-original-imaha5fddeyyhbjg.jpg",
    description:
      "Metallic blue decorative fan with ultra high speed performance.",
    rating: 4.7,
    features: [
      "Metallic Blue",
      "Decorative",
      "Ultra High Speed",
      "Premium Quality",
    ],
  },
  {
    id: "fan-8",
    name: "Eagle Deco SB",
    category: "Fans",
    price: 3499.0,
    image:
      "/stardomProduct-20250823T125051Z-1-001/stardomProduct/fan/eagle deco sb/eagle-deco-ultra-high-speed-24-inch-met-blue-55-0-1-ceiling-fan-original-imaha54e3d6pu4rs.jpg",
    description: "Smoke brown decorative eagle series fan.",
    rating: 4.6,
    features: ["Smoke Brown", "Decorative", "Ultra High Speed", "Eagle Series"],
  },
  {
    id: "fan-9",
    name: "Eagle White",
    category: "Fans",
    price: 3299.0,
    image:
      "/stardomProduct-20250823T125051Z-1-001/stardomProduct/fan/eagle white/eagle-ultra-high-speed-24-inch-white-blue-50-1-ceiling-fan-600-original-imah4kygf2k5mfpe.jpg",
    description: "White and blue eagle fan with ultra high speed performance.",
    rating: 4.5,
    features: ["White Blue", "Ultra High Speed", "24 Inch", "Eagle Series"],
  },
  {
    id: "fan-10",
    name: "Eagle SB",
    category: "Fans",
    price: 3399.0,
    image:
      "/stardomProduct-20250823T125051Z-1-001/stardomProduct/fan/eaglesb/eagle-ultra-high-speed-24-inch-smoke-brown-50-1-ceiling-fan-600-original-imagmu63kzczzezw.jpg",
    description: "Smoke brown eagle series fan with premium finish.",
    rating: 4.6,
    features: ["Smoke Brown", "Ultra High Speed", "24 Inch", "Premium Finish"],
  },
  {
    id: "fan-11",
    name: "Fiesta Ivory",
    category: "Fans",
    price: 2999.0,
    image:
      "/stardomProduct-20250823T125051Z-1-001/stardomProduct/fan/fiesta ivory/deecee-super-dlx-24-ultra-hi-speed-65-1-ceiling-fan-600-stardom-original-imah4kyj8dcv7agm.jpg",
    description: "Super deluxe ivory fan with ultra high speed performance.",
    rating: 4.4,
    features: ["Super Deluxe", "Ultra High Speed", "24 Inch", "Ivory Finish"],
  },
  {
    id: "fan-12",
    name: "Racer Black",
    category: "Fans",
    price: 2799.0,
    image:
      "/stardomProduct-20250823T125051Z-1-001/stardomProduct/fan/racer black/racer-ultra-high-speed-with-unique-look-50-1-ceiling-fan-1200-original-imagtj7mgnmj4qe9.jpg",
    description:
      "Racer series fan with unique black design and ultra high speed.",
    rating: 4.5,
    features: [
      "Unique Look",
      "Ultra High Speed",
      "Black Design",
      "Racer Series",
    ],
  },
  {
    id: "fan-13",
    name: "Racer Blue",
    category: "Fans",
    price: 2799.0,
    image:
      "/stardomProduct-20250823T125051Z-1-001/stardomProduct/fan/racer blue/racer-ultra-high-speed-with-unique-look-50-1-ceiling-fan-1200-original-imagtj85sxjzkxbz.jpg",
    description:
      "Blue racer fan with unique design and ultra high speed performance.",
    rating: 4.4,
    features: [
      "Unique Design",
      "Ultra High Speed",
      "Blue Finish",
      "Racer Series",
    ],
  },
  {
    id: "fan-14",
    name: "Racer Ivory",
    category: "Fans",
    price: 2699.0,
    image:
      "/stardomProduct-20250823T125051Z-1-001/stardomProduct/fan/racer ivery/racer-ultra-high-speed-with-unique-look-50-1-ceiling-fan-1200-original-imagsf772kbfjd2c.jpg",
    description: "Ivory racer fan with unique look and ultra high speed.",
    rating: 4.3,
    features: [
      "Unique Look",
      "Ultra High Speed",
      "Ivory Finish",
      "Racer Series",
    ],
  },

  // Geysers Category
  {
    id: "geyser-1",
    name: "F1 Electric Geyser",
    category: "Geysers",
    price: 4999.0,
    image:
      "/stardomProduct-20250823T125051Z-1-001/stardomProduct/geyserElectric/F1.jpg",
    description: "Compact electric geyser with fast heating technology.",
    rating: 4.2,
    features: [
      "Fast Heating",
      "Compact Design",
      "Energy Efficient",
      "Safety Features",
    ],
  },
  {
    id: "geyser-2",
    name: "Stardom Electric Geyser",
    category: "Geysers",
    price: 5999.0,
    image:
      "/stardomProduct-20250823T125051Z-1-001/stardomProduct/geyserElectric/Geyser main Image.jpg",
    description: "Premium electric geyser with advanced heating technology.",
    rating: 4.5,
    features: [
      "Advanced Heating",
      "Premium Build",
      "Large Capacity",
      "Digital Display",
    ],
  },
  {
    id: "geyser-3",
    name: "Hot Duck Electric Geyser",
    category: "Geysers",
    price: 4499.0,
    image:
      "/stardomProduct-20250823T125051Z-1-001/stardomProduct/geyserElectric/Hot-Duck.png",
    description: "Affordable electric geyser with reliable performance.",
    rating: 4.1,
    features: [
      "Affordable",
      "Reliable",
      "Easy Installation",
      "Low Maintenance",
    ],
  },

  // roomHeaters Category
  {
    id: "heater-1",
    name: "GD roomHeater",
    category: "roomHeaters",
    price: 1999.0,
    image:
      "/stardomProduct-20250823T125051Z-1-001/stardomProduct/roomHeater/GD-Heater-1a.jpg",
    description: "Compact roomHeater with efficient heating performance.",
    rating: 4.0,
    features: [
      "Compact Size",
      "Efficient Heating",
      "Safety Features",
      "Low Power Consumption",
    ],
  },
  {
    id: "heater-2",
    name: "Stardom roomHeater",
    category: "roomHeaters",
    price: 2499.0,
    image:
      "/stardomProduct-20250823T125051Z-1-001/stardomProduct/roomHeater/Room-Heater-1.jpg",
    description: "Premium roomHeater with advanced heating technology.",
    rating: 4.3,
    features: [
      "Advanced Heating",
      "Premium Build",
      "Multiple Heat Settings",
      "Safety Protection",
    ],
  },
];
