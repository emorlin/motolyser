import type { FaqCategory } from "@/lib/types";

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "purchase",
    title: "Purchase",
    items: [
      {
        question: "Where can I buy Motolyser?",
        answer:
          "Motolyser and Magnalyser are sold through authorized distributors worldwide. Use the distributor page to find a reseller in your region.",
      },
      {
        question: "Do you sell directly?",
        answer:
          "No. Motolyser is not sold directly from this website. All purchases go through our distributor network.",
      },
    ],
  },
  {
    id: "technical",
    title: "Technical",
    items: [
      {
        question: "Which motors are supported?",
        answer: "Motolyser and Magnalyser are designed for sensored brushless motors.",
      },
      {
        question: "What is Blinky Mode?",
        answer:
          "Blinky Mode is a common RC racing rule set where the motor's timing and controller behavior are restricted. Correct sensor and timing setup matters more in Blinky Mode racing, which is a key use case for Motolyser.",
      },
      {
        question: "How accurate is the measurement?",
        answer:
          "Refer to the specifications on each product page for measurement details. Accuracy figures are confirmed in the product documentation.",
      },
    ],
  },
  {
    id: "support",
    title: "Support",
    items: [
      {
        question: "How do I update firmware?",
        answer:
          "Firmware updates are available on the downloads page. Follow the instructions included with each release.",
      },
      {
        question: "Where can I find the manual?",
        answer: "User manuals for each product are available on the downloads page and on the individual product pages.",
      },
    ],
  },
];

export function getFaqCategories(): FaqCategory[] {
  return FAQ_CATEGORIES;
}
