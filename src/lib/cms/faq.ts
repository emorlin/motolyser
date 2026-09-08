import { getFaqCategories as getLocal } from "@/content/faq";
import type { FaqCategory } from "@/lib/types";

export async function listFaqCategories(): Promise<FaqCategory[]> {
  return getLocal();
}
