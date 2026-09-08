import { createClient, type ContentfulClientApi } from "contentful";

let client: ContentfulClientApi<undefined> | null = null;

export function isContentfulConfigured(): boolean {
  return Boolean(process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN);
}

/** Throws if Contentful isn't configured — callers should check isContentfulConfigured() first. */
export function getContentfulClient(): ContentfulClientApi<undefined> {
  if (!client) {
    const space = process.env.CONTENTFUL_SPACE_ID;
    const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
    if (!space || !accessToken) {
      throw new Error("Contentful is not configured (missing CONTENTFUL_SPACE_ID/CONTENTFUL_ACCESS_TOKEN).");
    }
    client = createClient({
      space,
      accessToken,
      environment: process.env.CONTENTFUL_ENVIRONMENT || "master",
    });
  }
  return client;
}

/** Splits a Contentful "Long text" field into paragraphs on blank lines. */
export function toParagraphs(text: string | undefined): string[] {
  if (!text) return [];
  return text
    .split(/\r?\n\s*\r?\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}
