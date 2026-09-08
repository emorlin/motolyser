# Contentful content model

This is the schema to build in Contentful's web UI (**Content model → Add content type**). Field **IDs** matter — the integration code maps to these exact IDs. When Contentful auto-suggests an ID from the field name, check it matches the table before saving.

Every content type needs its **Entry title** field set (usually `title` or `name`) so entries are identifiable in the Contentful UI.

---

## 1. Product — ID: `product`

| Field name | Field ID | Type | Notes |
|---|---|---|---|
| Name | `name` | Short text | e.g. "Motolyser". **Entry title.** |
| Slug | `slug` | Short text | e.g. "motolyser". Validate: unique, matches slug pattern. |
| Tagline | `tagline` | Short text | One-line value prop, shown in hero/cards. |
| Description | `description` | Long text | Meta description / card body copy. |
| Hero image | `heroImage` | Media, one file | |
| Card image | `cardImage` | Media, one file | Can reuse hero image. |
| Measurements | `measurements` | JSON object | Array of `{ "label": string, "value": string }` — powers the small LCD readout widget. |
| Features | `features` | JSON object | Array of `{ "title": string, "description": string, "icon": string }`. Valid `icon` values: `sensor`, `speed`, `download`, `location`, `support`, `measurement`, `motor`, `firmware`, `flag`, `display`, `current`. |
| About body | `aboutBody` | Long text | Paragraphs separated by a blank line. |
| Specifications | `specifications` | JSON object | Array of `{ "label": string, "value": string }`. |
| Gallery | `gallery` | Media, many files | |
| Quote text | `quoteText` | Long text | Optional. |
| Quote attribution | `quoteAttribution` | Short text | Optional. |

---

## 2. News Article — ID: `newsArticle`

| Field name | Field ID | Type | Notes |
|---|---|---|---|
| Title | `title` | Short text | **Entry title.** |
| Slug | `slug` | Short text | Unique. |
| Excerpt | `excerpt` | Long text | Short summary for cards. |
| Body | `body` | Long text | Paragraphs separated by a blank line. |
| Date | `date` | Date | |
| Category | `category` | Short text | Validate: one of `products`, `firmware`, `racing`, `guides`. |
| Featured image | `featuredImage` | Media, one file | |
| Related products | `relatedProducts` | Reference, many | Links to `product` entries. Optional. |

---

## 3. Download — ID: `download`

| Field name | Field ID | Type | Notes |
|---|---|---|---|
| Title | `title` | Short text | **Entry title.** |
| Description | `description` | Long text | |
| Product | `product` | Reference, one | Links to a `product` entry. Leave empty for a product-agnostic download (e.g. a general guide). |
| Type | `type` | Short text | Validate: one of `manual`, `firmware`, `guide`. |
| Version | `version` | Short text | Optional. |
| File size | `fileSize` | Short text | Optional, e.g. "2.4 MB". |
| File | `file` | Media, one file | The actual PDF/firmware binary. |
| Release date | `releaseDate` | Date | |

---

## 4. Distributor — ID: `distributor`

| Field name | Field ID | Type | Notes |
|---|---|---|---|
| Company | `company` | Short text | **Entry title.** |
| Region | `region` | Short text | Validate: one of `Europe`, `North America`, `Japan`, `Asia`. |
| Country | `country` | Short text | |
| Address | `address` | Short text | |
| Contact email | `contactEmail` | Short text | Optional. |
| Phone | `phone` | Short text | Optional. |
| Website | `website` | Short text | Optional. Validate as URL. |

---

## 5. FAQ Item — ID: `faqItem`

| Field name | Field ID | Type | Notes |
|---|---|---|---|
| Question | `question` | Short text | **Entry title.** |
| Answer | `answer` | Long text | |
| Category | `category` | Short text | Validate: one of `purchase`, `technical`, `support`. |
| Order | `order` | Number (integer) | Optional, controls sort within a category. |

---

## Why plain text instead of Rich Text

`aboutBody`, `body`, and `answer` use **Long text** (plain, paragraph-per-blank-line) rather than Contentful's Rich Text field, to keep the local-hardcoded-data fallback and the Contentful-backed path share the exact same `string[]` shape in code. This trades away inline formatting (bold, links) inside body copy. If that's later needed, these fields can be upgraded to Rich Text — it only touches `src/lib/cms/*.ts` and the two components that render body paragraphs.

## Env vars needed once the space is ready

```
CONTENTFUL_SPACE_ID=
CONTENTFUL_ACCESS_TOKEN=       # Content Delivery API token (read-only)
CONTENTFUL_ENVIRONMENT=master  # or your environment name
```

Add these to `.env.local` for local dev (gitignored) and to the Vercel project's Environment Variables for the deployed site.
