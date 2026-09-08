import type { Product } from "@/lib/types";

// NOTE: specification values below are the starting values given in the
// motolyser-com-v2 design brief. They are placeholders and must be verified
// against actual product documentation before this content ships to
// production (or replaced by real values pulled from Contentful).
export const PRODUCTS: Product[] = [
  {
    slug: "motolyser",
    name: "Motolyser",
    tagline: "Precision motor analysis for sensor-equipped brushless motors.",
    description:
      "Advanced motor analysis for sensored brushless motors. Measure timing advance, Hall sensor accuracy, RPM, K/V and current draw in one tool.",
    heroImage: { src: "motolyser-hero", alt: "Motolyser precision motor analyser" },
    cardImage: { src: "motolyser-card", alt: "Motolyser precision motor analyser" },
    measurements: [
      { label: "RPM", value: "41 952" },
      { label: "TIMING", value: "27.5°" },
      { label: "HALL A", value: "0.2°" },
    ],
    features: [
      {
        title: "Timing advance",
        description: "Accurate measurement of motor timing.",
        icon: "measurement",
      },
      {
        title: "Hall sensor accuracy",
        description: "Detailed analysis of all three phases.",
        icon: "sensor",
      },
      {
        title: "RPM / K/V",
        description: "Complete motor performance data.",
        icon: "speed",
      },
      {
        title: "Current draw",
        description: "Understand actual motor load.",
        icon: "current",
      },
      {
        title: "128 × 32 LCD",
        description: "Clear backlit display with touch wheel control.",
        icon: "display",
      },
      {
        title: "Compact and robust",
        description: "Designed for practical use in the pit and on the bench.",
        icon: "motor",
      },
    ],
    aboutBody: [
      "Motolyser is designed to give racers and hobbyists precise insight into the performance of their sensor-equipped brushless motors.",
      "By measuring timing advance, Hall sensor accuracy, RPM, K/V and current draw, Motolyser helps users understand how their motor is actually performing.",
      "Accuracy matters, especially in racing environments such as Blinky Mode, where correct motor and sensor setup can make the difference.",
    ],
    specifications: [
      { label: "Supported motors", value: "Sensored brushless (3-phase)" },
      { label: "Measurements", value: "Timing advance, Hall sensor accuracy (A/B/C), RPM, K/V, current draw" },
      { label: "Display", value: "128 × 32 px LCD (backlit)" },
      { label: "Control", value: "Touch wheel" },
      { label: "Power supply", value: "4.5–8.4 V DC" },
      { label: "Dimensions", value: "90 × 50 × 20 mm" },
    ],
    gallery: [
      { type: "image", src: "motolyser-detail-1", alt: "Motolyser display close-up" },
      { type: "image", src: "motolyser-detail-2", alt: "Motolyser connectors" },
      { type: "image", src: "motolyser-in-use", alt: "Motolyser connected to a sensored brushless motor" },
    ],
    quote: {
      text: "Motolyser has become an essential part of our race setup. The accuracy and detailed data make a real difference.",
      attribution: "European Touring Series racer",
    },
  },
  {
    slug: "magnalyser",
    name: "Magnalyser",
    tagline: "Rotor position and magnetic strength, measured precisely.",
    description:
      "Analyze rotor position and magnet strength with precision, alongside Motolyser's motor timing and sensor data.",
    heroImage: { src: "magnalyser-hero", alt: "Magnalyser rotor and magnet analyser" },
    cardImage: { src: "magnalyser-card", alt: "Magnalyser rotor and magnet analyser" },
    measurements: [
      { label: "MAG", value: "382 mT" },
      { label: "ROTOR", value: "0.4°" },
      { label: "STATUS", value: "READY" },
    ],
    features: [
      {
        title: "Magnet strength",
        description: "Measure rotor magnet field strength.",
        icon: "sensor",
      },
      {
        title: "Rotor position",
        description: "Analyze rotor alignment and offset.",
        icon: "measurement",
      },
      {
        title: "128 × 32 LCD",
        description: "Clear backlit display with touch wheel control.",
        icon: "display",
      },
      {
        title: "Compact and robust",
        description: "Designed for practical use in the pit and on the bench.",
        icon: "motor",
      },
    ],
    aboutBody: [
      "Magnalyser gives racers and hobbyists a way to inspect rotor magnet condition and position independently of the motor's electrical timing.",
      "Used alongside Motolyser, it helps build a complete picture of a sensored brushless motor's condition and performance.",
    ],
    specifications: [
      { label: "Supported motors", value: "Sensored brushless (3-phase)" },
      { label: "Measurements", value: "Magnet field strength, rotor position" },
      { label: "Display", value: "128 × 32 px LCD (backlit)" },
      { label: "Control", value: "Touch wheel" },
      { label: "Power supply", value: "4.5–8.4 V DC" },
      { label: "Dimensions", value: "90 × 50 × 20 mm" },
    ],
    gallery: [
      { type: "image", src: "magnalyser-detail-1", alt: "Magnalyser display close-up" },
      { type: "image", src: "magnalyser-in-use", alt: "Magnalyser measuring a motor rotor" },
    ],
  },
];

export function getAllProducts(): Product[] {
  return PRODUCTS;
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
